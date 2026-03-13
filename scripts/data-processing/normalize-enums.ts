/**
 * normalize-enums.ts
 *
 * Corrects common LLM enum drift across all enriched JSON files.
 * Dry run by default — pass --apply to write changes.
 *
 * Usage:
 *   npx tsx scripts/data-processing/normalize-enums.ts          # dry run
 *   npx tsx scripts/data-processing/normalize-enums.ts --apply  # apply
 */

import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.resolve("data", "enriched");
const DRY_RUN = !process.argv.includes("--apply");

if (DRY_RUN) console.log("DRY RUN — pass --apply to write changes\n");

// ---------------------------------------------------------------------------
// Normalisation maps
// ---------------------------------------------------------------------------

function normalizeOpenSource(v: string): string | null {
  const l = v.toLowerCase().trim();
  if (l === "true" || l === "yes" || l === "open" || l === "open source") return "yes";
  if (l === "false" || l === "no" || l === "closed" || l === "proprietary") return "no";
  if (l === "partial" || l === "partially" || l === "mixed") return "partial";
  return null;
}

function normalizeGeography(v: string): string | null {
  const l = v.toLowerCase().trim();
  if (["global", "international", "worldwide", "multinational", "multi-national"].includes(l)) return "international";
  if (["national", "country", "countrywide", "nationwide"].includes(l)) return "national";
  if (["regional", "multi-regional"].includes(l)) return "regional";
  if (["state", "provincial"].includes(l)) return "state";
  if (["city", "local", "municipal"].includes(l)) return "city";
  // Country names → national
  const countries = ["united kingdom", "uk", "united states", "us", "usa", "australia", "canada", "germany", "france", "india", "brazil", "kenya"];
  if (countries.includes(l)) return "national";
  return null;
}

function normalizeOrgType(v: string): string | null {
  const l = v.toLowerCase().trim();
  if (l === "unknown" || l === "n/a" || l === "na") return null; // will be skipped (fn returns null = no change; caller must handle)
  if (l.includes("nonprofit") || l.includes("non-profit") || l.includes("charity") || l.includes("ngo") || l.includes("not-for-profit")) return "Nonprofit/charity";
  if (l.includes("social enterprise") || (l.includes("for-profit") && !l.includes("non")) || l === "company" || l === "startup") return "For-profit/social enterprise";
  if (l.includes("academic") || l.includes("research") || l.includes("university") || l.includes("institute")) return "Academic/research";
  if (l.includes("government") || l.includes("public sector") || l.includes("public body") || l.includes("agency")) return "Government/public sector";
  if (l.includes("grassroots") || l.includes("indie") || l.includes("independent") || l.includes("individual")) return "Grassroots/indie";
  if (l.includes("multilateral") || l.includes("international organisation") || l.includes("intergovernmental")) return "Multilateral institution";
  if (l.includes("advocacy")) return "Advocacy org";
  if (l.includes("media") || l.includes("journalism") || l.includes("news")) return "Media org";
  return null;
}

function normalizeTeamSize(v: string): string | null {
  const l = v.toLowerCase().trim();
  if (l === "solo" || l === "1" || l === "0") return "solo";
  if (l === "small" || l === "2-9" || l === "small (<10)" || l.startsWith("small ") || l.startsWith("small,")) return "small";
  if (l === "medium" || l === "10-50" || l === "10–50" || l === "medium (10-50)") return "medium";
  if (l === "large" || l === "50+" || l === "large (50+)") return "large";
  if (l.includes("volunteer") || l.includes("unknown")) return "small"; // best guess for volunteer teams
  // Numeric values
  const n = parseInt(l.replace(/[^0-9]/g, ""), 10);
  if (!isNaN(n)) {
    if (n <= 1) return "solo";
    if (n <= 9) return "small";
    if (n <= 50) return "medium";
    return "large";
  }
  // Ranges like "10-25"
  const range = l.match(/(\d+)\s*[-–]\s*(\d+)/);
  if (range) {
    const avg = (parseInt(range[1]) + parseInt(range[2])) / 2;
    if (avg <= 1) return "solo";
    if (avg <= 9) return "small";
    if (avg <= 50) return "medium";
    return "large";
  }
  return null;
}

function normalizeCausation(v: string): string | null {
  const l = v.toLowerCase().trim();
  if (["anecdotal", "anecdote", "claimed", "self-reported", "unknown"].includes(l)) return "anecdotal";
  if (["correlated", "correlational", "correlation", "associated", "moderate", "medium"].includes(l)) return "correlated";
  if (["directly_cited", "directly cited", "cited", "cited directly", "direct citation"].includes(l)) return "directly_cited";
  if (["independently_verified", "independently verified", "verified", "strong", "proven"].includes(l)) return "independently_verified";
  if (["not_applicable", "not applicable", "n/a", "na"].includes(l)) return "anecdotal"; // treat as weakest
  return null;
}

function normalizeGovernance(v: string): string | null {
  const l = v.toLowerCase().trim();
  if (l.includes("foundation")) return "foundation";
  if (l.includes("llc") || l.includes("ltd") || l.includes("limited") || l.includes("corporate") || l.includes("company")) return "LLC";
  if (l.includes("cooperative") || l.includes("co-op") || l.includes("coop") || l.includes("worker-owned")) return "cooperative";
  if (l.includes("project") || l.includes("program") || l.includes("initiative of") || l.includes("part of")) return "project_of_larger_org";
  if (l.includes("individual") || l.includes("solo") || l.includes("personal")) return "individual";
  if (l.includes("nonprofit") || l.includes("non-profit") || l.includes("charity")) return "foundation";
  return null;
}

function normalizeProjectType(v: string): string | null {
  const l = v.toLowerCase().trim().replace(/[_]/g, " ");
  if (l === "tool" || l === "tool/platform" || l === "toolset" || l === "toolkit") return "Tool/Platform";
  if (l === "platform" || l === "social media platform" || l === "search tool" || l === "funding platform") return "Platform";
  if (l === "organization" || l === "organisation") return "Organization";
  if (l === "network" || l === "solidarity network / advocacy community") return "Network";
  if (l === "database") return "Database";
  if (l === "method" || l === "methodology") return "Method";
  if (l === "campaign") return "Campaign";
  if (l === "publication" || l === "report") return "Publication";
  if (l === "other") return "Other";
  // Compound values — map to best fit by keyword priority
  if (l.includes("organization") || l.includes("organisation") || l.includes("ngo") || l.includes("advocacy")) return "Organization";
  if (l.includes("database") || l.includes("knowledge") || l.includes("library")) return "Database";
  if (l.includes("network") || l.includes("community")) return "Network";
  if (l.includes("publication") || l.includes("report") || l.includes("standard")) return "Publication";
  if (l.includes("protocol") || l.includes("infrastructure") || l.includes("method")) return "Method";
  if (l.includes("platform") || l.includes("tool") || l.includes("app") || l.includes("software") || l.includes("suite")) return "Tool/Platform";
  return null;
}

// ---------------------------------------------------------------------------
// Apply to a single file
// ---------------------------------------------------------------------------

interface Change { field: string; from: string; to: string }

function normalizeFile(filename: string): { changes: Change[]; data: Record<string, unknown> } | null {
  const fpath = path.join(OUTPUT_DIR, filename);
  let data: Record<string, unknown>;
  try { data = JSON.parse(fs.readFileSync(fpath, "utf-8")); } catch { return null; }
  if (data.error) return null;

  const changes: Change[] = [];

  function tryNormalize(field: string, fn: (v: string) => string | null): void {
    const v = data[field];
    // Coerce booleans to string before normalizing (LLM sometimes returns true/false for enum fields)
    const strVal = typeof v === "boolean" ? String(v) : typeof v === "number" ? String(v) : typeof v === "string" ? v : null;
    if (strVal === null) return;
    const normalized = fn(strVal);
    if (normalized && normalized !== v) {
      changes.push({ field, from: String(v), to: normalized });
      data[field] = normalized;
    }
  }

  tryNormalize("open_source", normalizeOpenSource);
  tryNormalize("geography", normalizeGeography);
  tryNormalize("org_type", normalizeOrgType);
  tryNormalize("team_size", normalizeTeamSize);
  tryNormalize("causation_strength", normalizeCausation);
  tryNormalize("governance_model", normalizeGovernance);
  tryNormalize("project_type", normalizeProjectType);

  // Null-out "Unknown" sentinel values
  for (const field of ["org_type", "governance_model", "causation_strength", "team_size"]) {
    const v = data[field];
    if (typeof v === "string" && ["unknown", "n/a", "na", "Unknown", "N/A"].includes(v)) {
      changes.push({ field, from: v, to: "null" });
      data[field] = null;
    }
  }

  return { changes, data };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith(".json") && !f.startsWith("verification") && !f.startsWith("projects-enriched"));
let totalChanges = 0;
let filesChanged = 0;

for (const file of files) {
  const result = normalizeFile(file);
  if (!result || result.changes.length === 0) continue;

  totalChanges += result.changes.length;
  filesChanged++;

  if (DRY_RUN || process.argv.includes("--verbose")) {
    console.log(`${file}:`);
    for (const c of result.changes) {
      console.log(`  ${c.field}: "${c.from}" → "${c.to}"`);
    }
  }

  if (!DRY_RUN) {
    fs.writeFileSync(path.join(OUTPUT_DIR, file), JSON.stringify(result.data, null, 2));
  }
}

console.log(`\n${filesChanged} files with changes, ${totalChanges} total normalizations`);
if (DRY_RUN) console.log("Re-run with --apply to write.");
