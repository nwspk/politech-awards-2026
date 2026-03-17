/**
 * rename-enriched.ts
 *
 * Two tasks in one pass:
 * 1. For each canonical URL in candidates.csv, find all enriched JSON files
 *    that match it (by url field), merge them (later-pass data wins), and
 *    write a single merged file.
 * 2. Rename files from URL-slug to project-name-slug (from the `name` field).
 *
 * Usage:
 *   # Canonical entrypoint:
 *   npx tsx scripts/data-processing/rename-enriched.ts          # dry run (print plan)
 *   npx tsx scripts/data-processing/rename-enriched.ts --apply  # apply changes
 */

import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.resolve("data", "enriched");
const CANDIDATES_CSV = path.resolve("candidates.csv");
const DRY_RUN = !process.argv.includes("--apply");

if (DRY_RUN) console.log("DRY RUN — pass --apply to make changes\n");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugifyUrl(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/\/+$/, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase();
}

function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function deepMerge(base: Record<string, unknown>, overlay: Record<string, unknown>): Record<string, unknown> {
  const result = { ...base };
  for (const [k, v] of Object.entries(overlay)) {
    if (v === null || v === undefined) continue; // don't overwrite with null
    if (Array.isArray(v) && v.length === 0) continue; // don't overwrite with empty array
    result[k] = v;
  }
  return result;
}

// ---------------------------------------------------------------------------
// Load candidates
// ---------------------------------------------------------------------------

const candidateUrls: string[] = fs
  .readFileSync(CANDIDATES_CSV, "utf8")
  .trim()
  .split("\n")
  .slice(1) // skip header
  .map((l) => l.trim())
  .filter(Boolean);

console.log(`Candidates: ${candidateUrls.length}`);

// ---------------------------------------------------------------------------
// Load all existing enriched files, indexed by their url field
// ---------------------------------------------------------------------------

const allFiles = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".json"));
console.log(`Enriched files: ${allFiles.length}\n`);

// Map: normalised url → array of parsed JSON objects (from files)
const byUrl = new Map<string, Record<string, unknown>[]>();

for (const file of allFiles) {
  const fpath = path.join(OUTPUT_DIR, file);
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(fs.readFileSync(fpath, "utf8"));
  } catch {
    console.warn(`  SKIP (parse error): ${file}`);
    continue;
  }
  const rawUrl = (data.url as string) || "";
  const key = rawUrl.replace(/\/+$/, "").toLowerCase();
  if (!byUrl.has(key)) byUrl.set(key, []);
  byUrl.get(key)!.push(data);
}

// ---------------------------------------------------------------------------
// For each candidate URL, merge all matching files → single output
// ---------------------------------------------------------------------------

const plan: Array<{ candidateUrl: string; sourceFiles: string[]; outputFile: string; merged: Record<string, unknown> }> = [];
const usedOutputNames = new Set<string>();
let noData = 0;

for (const candidateUrl of candidateUrls) {
  const normUrl = candidateUrl.replace(/\/+$/, "").toLowerCase();

  // Find matching files (by url field)
  const matches = byUrl.get(normUrl) || [];

  // Also try slug-based lookup as fallback (in case url field differs slightly)
  if (matches.length === 0) {
    const slug = slugifyUrl(candidateUrl);
    const slugFile = path.join(OUTPUT_DIR, `${slug}.json`);
    if (fs.existsSync(slugFile)) {
      try {
        matches.push(JSON.parse(fs.readFileSync(slugFile, "utf8")));
      } catch {}
    }
  }

  if (matches.length === 0) {
    console.warn(`  NO DATA: ${candidateUrl}`);
    noData++;
    continue;
  }

  // Sort by pass completeness (pass3_at > pass2_at > collected_at) so later passes win
  matches.sort((a, b) => {
    const score = (d: Record<string, unknown>) =>
      d.pass3_at ? 3 : d.pass2_at ? 2 : 1;
    return score(b) - score(a);
  });

  // Merge: start with earliest (least complete), overlay with most complete
  let merged = matches[matches.length - 1] as Record<string, unknown>;
  for (let i = matches.length - 2; i >= 0; i--) {
    merged = deepMerge(merged, matches[i]);
  }

  // Determine output filename from project name
  const name = (merged.name as string) || slugifyUrl(candidateUrl);
  let nameSlug = slugifyName(name);
  // Ensure uniqueness
  let finalSlug = nameSlug;
  let suffix = 2;
  while (usedOutputNames.has(finalSlug)) {
    finalSlug = `${nameSlug}-${suffix++}`;
  }
  usedOutputNames.add(finalSlug);

  // Which source files contributed?
  const sourceFiles = allFiles.filter((f) => {
    try {
      const d = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, f), "utf8")) as Record<string, unknown>;
      const u = ((d.url as string) || "").replace(/\/+$/, "").toLowerCase();
      return u === normUrl;
    } catch {
      return false;
    }
  });

  plan.push({
    candidateUrl,
    sourceFiles,
    outputFile: `${finalSlug}.json`,
    merged,
  });
}

// ---------------------------------------------------------------------------
// Find orphan files (not matched to any candidate)
// ---------------------------------------------------------------------------

const usedSourceFiles = new Set(plan.flatMap((p) => p.sourceFiles));
const orphans = allFiles.filter((f) => !usedSourceFiles.has(f));

// ---------------------------------------------------------------------------
// Print plan
// ---------------------------------------------------------------------------

console.log(`\nPlan:`);
console.log(`  ${plan.length} candidates → merged + renamed`);
console.log(`  ${noData} candidates with no data`);
console.log(`  ${orphans.length} orphan files to delete`);
console.log(`\nOrphans to delete:`);
for (const o of orphans) console.log(`  - ${o}`);

if (plan.filter((p) => p.sourceFiles.length > 1).length > 0) {
  console.log(`\nMerges (multiple source files):`);
  for (const p of plan.filter((pp) => pp.sourceFiles.length > 1)) {
    console.log(`  ${p.outputFile} ← ${p.sourceFiles.join(", ")}`);
  }
}

// ---------------------------------------------------------------------------
// Apply
// ---------------------------------------------------------------------------

if (!DRY_RUN) {
  console.log("\nApplying...");

  // Write merged output files
  for (const p of plan) {
    const outPath = path.join(OUTPUT_DIR, p.outputFile);
    fs.writeFileSync(outPath, JSON.stringify(p.merged, null, 2));
  }

  // Delete old files that have been replaced or are orphans
  const keepFiles = new Set(plan.map((p) => p.outputFile));
  for (const file of allFiles) {
    if (!keepFiles.has(file)) {
      fs.unlinkSync(path.join(OUTPUT_DIR, file));
    }
  }

  const final = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".json")).length;
  console.log(`\nDone. ${final} files in data/enriched/`);
} else {
  console.log("\nRe-run with --apply to execute.");
}
