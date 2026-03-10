/**
 * verify-enriched.ts
 *
 * Pass 4 — Data quality verification for all enriched project dossiers.
 * Checks schema conformance, internal consistency, and LLM confidence signals.
 * Writes per-file flags and an aggregate report.
 *
 * Usage:
 *   npx tsx scripts/verify-enriched.ts              # verify all, print summary
 *   npx tsx scripts/verify-enriched.ts --verbose    # print per-file issues
 *   npx tsx scripts/verify-enriched.ts --output     # write data/enriched/verification-report.json
 */

import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.resolve("data", "enriched");
const REPORT_PATH = path.resolve("data", "enriched", "verification-report.json");
const VERBOSE = process.argv.includes("--verbose");
const WRITE_OUTPUT = process.argv.includes("--output");

// ---------------------------------------------------------------------------
// Schema definitions
// ---------------------------------------------------------------------------

const VALID_PROJECT_TYPES = new Set([
  "Tool", "Platform", "Tool/Platform", "Organization", "Network", "Database",
  "Method", "Campaign", "Publication", "Other",
]);

const VALID_ORG_TYPES = new Set([
  "Nonprofit/charity", "For-profit/social enterprise", "Academic/research",
  "Government/public sector", "Grassroots/indie", "Multilateral institution",
  "Advocacy org", "Media org",
]);

const VALID_GEOGRAPHY = new Set(["city", "state", "national", "regional", "international"]);

const VALID_OPEN_SOURCE = new Set(["yes", "no", "partial"]);

const VALID_TEAM_SIZE = new Set(["solo", "small", "medium", "large"]);

const VALID_CAUSATION = new Set([
  "anecdotal", "correlated", "directly_cited", "independently_verified",
]);

const VALID_GOVERNANCE = new Set([
  "foundation", "LLC", "cooperative", "project_of_larger_org", "individual",
]);

// Fields expected at top level (Pass 1 schema)
const CORE_FIELDS = [
  "url", "name", "tagline", "project_type", "org_type", "issue_area",
  "geography", "countries_deployed", "open_source", "founded_year",
  "team_size", "funding_model", "known_funders", "funding_verified",
  "news_articles", "policy_outcomes", "causation_strength",
  "documented_limitations", "failure_modes", "governance_model",
  "elections_used_in", "ai_involvement",
];

// ---------------------------------------------------------------------------
// Flag types
// ---------------------------------------------------------------------------

interface Flag {
  level: "error" | "warn" | "info";
  code: string;
  message: string;
}

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

function checkEnumField(
  d: Record<string, unknown>,
  field: string,
  validSet: Set<string>,
  flags: Flag[]
): void {
  const v = d[field];
  if (v === null || v === undefined) return; // null is allowed
  if (typeof v !== "string" || !validSet.has(v)) {
    flags.push({
      level: "warn",
      code: "INVALID_ENUM",
      message: `${field}: "${v}" not in allowed values (${[...validSet].join(" · ")})`,
    });
  }
}

function checkConsistency(d: Record<string, unknown>, flags: Flag[]): void {
  // open_source=yes but no github_url
  if (d.open_source === "yes" && !d.github_url) {
    flags.push({ level: "warn", code: "OPEN_SOURCE_NO_GITHUB", message: "open_source=yes but github_url is null" });
  }

  // decade_plus=true but founded_year >= 2016
  const fy = d.founded_year as number | null;
  if (d.decade_plus === true && fy !== null && fy !== undefined && fy >= 2016) {
    flags.push({ level: "warn", code: "DECADE_PLUS_INCONSISTENT", message: `decade_plus=true but founded_year=${fy} (<10 years ago)` });
  }

  // causation_strength=independently_verified but no policy_outcomes
  if (d.causation_strength === "independently_verified") {
    const po = d.policy_outcomes as unknown[];
    if (!po || po.length === 0) {
      flags.push({ level: "warn", code: "CAUSATION_NO_OUTCOMES", message: "causation_strength=independently_verified but policy_outcomes is empty" });
    }
  }

  // causation_strength=directly_cited but no policy_outcomes
  if (d.causation_strength === "directly_cited") {
    const po = d.policy_outcomes as unknown[];
    if (!po || po.length === 0) {
      flags.push({ level: "warn", code: "CAUSATION_NO_OUTCOMES", message: "causation_strength=directly_cited but policy_outcomes is empty" });
    }
  }

  // funding_verified=true but known_funders is empty
  if (d.funding_verified === true) {
    const kf = d.known_funders as unknown[];
    if (!kf || kf.length === 0) {
      flags.push({ level: "warn", code: "FUNDING_VERIFIED_NO_FUNDERS", message: "funding_verified=true but known_funders is empty" });
    }
  }

  // github_stars present but no github_url
  if (d.github_stars !== null && d.github_stars !== undefined && !d.github_url) {
    flags.push({ level: "warn", code: "STARS_NO_GITHUB", message: "github_stars set but github_url is null" });
  }

  // dead_link=true but has substantial LLM-derived data (may be stale)
  const scraped = d.scraped as Record<string, unknown> | undefined;
  if (scraped?.dead_link === true && d.name) {
    flags.push({ level: "info", code: "DEAD_LINK_HAS_DATA", message: "dead_link=true but file has LLM data — verify freshness" });
  }

  // Policy outcomes with missing links
  const po = d.policy_outcomes;
  if (Array.isArray(po) && po.length > 0) {
    const noLink = (po as unknown[]).filter(o => typeof o === "object" && o !== null && !(o as Record<string, unknown>).link);
    if (noLink.length > 0) {
      flags.push({ level: "info", code: "OUTCOME_NO_LINK", message: `${noLink.length} policy_outcome(s) have no evidence link` });
    }
  }
}

function checkNullCoverage(d: Record<string, unknown>, flags: Flag[]): string[] {
  const nullFields = CORE_FIELDS.filter(f => {
    const v = d[f];
    return v === null || v === undefined || (Array.isArray(v) && v.length === 0);
  });

  if (nullFields.length >= 15) {
    flags.push({ level: "warn", code: "HIGH_NULL_COUNT", message: `${nullFields.length}/${CORE_FIELDS.length} core fields are null/empty — may need re-collection` });
  } else if (nullFields.length >= 10) {
    flags.push({ level: "info", code: "MODERATE_NULL_COUNT", message: `${nullFields.length}/${CORE_FIELDS.length} core fields are null/empty` });
  }

  return nullFields;
}

function checkScrapedFields(d: Record<string, unknown>, flags: Flag[]): void {
  const scraped = d.scraped as Record<string, unknown> | undefined;
  if (!scraped || scraped.homepage_last_scraped === null) {
    flags.push({ level: "info", code: "NO_SCRAPED_DATA", message: "No scraped page data — Pass 0 may not have run" });
    return;
  }

  const words = scraped.homepage_word_count as number | null;
  if (words !== null && words !== undefined && words < 50) {
    flags.push({ level: "info", code: "THIN_HOMEPAGE", message: `homepage_word_count=${words} — very thin page, LLM data may be unreliable` });
  }
}

function verifyFile(filename: string): {
  file: string;
  name: string | null;
  url: string | null;
  flags: Flag[];
  nullFields: string[];
  passLevel: number;
} {
  const fpath = path.join(OUTPUT_DIR, filename);
  let d: Record<string, unknown>;
  try {
    d = JSON.parse(fs.readFileSync(fpath, "utf-8"));
  } catch {
    return {
      file: filename,
      name: null,
      url: null,
      flags: [{ level: "error", code: "PARSE_ERROR", message: "Could not parse JSON" }],
      nullFields: [],
      passLevel: 0,
    };
  }

  if (d.error) {
    return {
      file: filename,
      name: null,
      url: d.url as string | null ?? null,
      flags: [{ level: "error", code: "COLLECTION_ERROR", message: `File has error flag: ${d.message ?? "unknown"}` }],
      nullFields: CORE_FIELDS,
      passLevel: 0,
    };
  }

  const flags: Flag[] = [];

  // Enum checks
  checkEnumField(d, "project_type", VALID_PROJECT_TYPES, flags);
  checkEnumField(d, "org_type", VALID_ORG_TYPES, flags);
  checkEnumField(d, "geography", VALID_GEOGRAPHY, flags);
  checkEnumField(d, "open_source", VALID_OPEN_SOURCE, flags);
  checkEnumField(d, "team_size", VALID_TEAM_SIZE, flags);
  checkEnumField(d, "causation_strength", VALID_CAUSATION, flags);
  checkEnumField(d, "governance_model", VALID_GOVERNANCE, flags);

  // Consistency checks
  checkConsistency(d, flags);

  // Null coverage
  const nullFields = checkNullCoverage(d, flags);

  // Scraped fields
  checkScrapedFields(d, flags);

  const passLevel = d.pass3_at ? 3 : d.pass2_at ? 2 : d.collected_at ? 1 : 0;

  return {
    file: filename,
    name: d.name as string | null ?? null,
    url: d.url as string | null ?? null,
    flags,
    nullFields,
    passLevel,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const files = fs.readdirSync(OUTPUT_DIR)
  .filter(f => f.endsWith(".json") && f !== "verification-report.json" && f !== "projects-enriched.json");

console.log(`Verifying ${files.length} files...\n`);

const results = files.map(verifyFile);

// Aggregate stats
const errors = results.filter(r => r.flags.some(f => f.level === "error"));
const warnings = results.filter(r => r.flags.some(f => f.level === "warn"));
const clean = results.filter(r => r.flags.length === 0);

const codeCounts: Record<string, number> = {};
for (const r of results) {
  for (const f of r.flags) {
    codeCounts[f.code] = (codeCounts[f.code] ?? 0) + 1;
  }
}

const byPassLevel = [0, 1, 2, 3].map(level => ({
  level,
  count: results.filter(r => r.passLevel === level).length,
}));

const nullFieldFrequency: Record<string, number> = {};
for (const r of results) {
  for (const f of r.nullFields) {
    nullFieldFrequency[f] = (nullFieldFrequency[f] ?? 0) + 1;
  }
}
const topNullFields = Object.entries(nullFieldFrequency)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);

// Print summary
console.log("=== VERIFICATION SUMMARY ===\n");
console.log(`Total files:    ${files.length}`);
console.log(`Clean (0 flags): ${clean.length}`);
console.log(`With warnings:  ${warnings.length}`);
console.log(`With errors:    ${errors.length}`);

console.log("\n--- Pass level breakdown ---");
for (const { level, count } of byPassLevel) {
  console.log(`  Pass ${level}: ${count} files`);
}

console.log("\n--- Flag codes ---");
for (const [code, count] of Object.entries(codeCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${code.padEnd(35)} ${count}`);
}

console.log("\n--- Top null fields (most files missing) ---");
for (const [field, count] of topNullFields) {
  const pct = ((count / files.length) * 100).toFixed(0);
  console.log(`  ${field.padEnd(35)} ${count} files (${pct}%)`);
}

if (VERBOSE || errors.length > 0) {
  console.log("\n--- Files with errors ---");
  for (const r of errors) {
    console.log(`\n  ${r.file} (${r.name ?? "unnamed"})`);
    for (const f of r.flags.filter(x => x.level === "error")) {
      console.log(`    [ERROR] ${f.code}: ${f.message}`);
    }
  }
}

if (VERBOSE) {
  console.log("\n--- Files with warnings ---");
  for (const r of warnings) {
    console.log(`\n  ${r.file} (${r.name ?? "unnamed"})`);
    for (const f of r.flags.filter(x => x.level === "warn")) {
      console.log(`    [WARN]  ${f.code}: ${f.message}`);
    }
  }
}

// Write report
if (WRITE_OUTPUT) {
  const report = {
    generated_at: new Date().toISOString(),
    total_files: files.length,
    clean,
    summary: {
      errors: errors.length,
      warnings: warnings.length,
      clean: clean.length,
      by_pass_level: byPassLevel,
      flag_counts: codeCounts,
      top_null_fields: Object.fromEntries(topNullFields),
    },
    files: results,
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`\nReport written to ${REPORT_PATH}`);
}
