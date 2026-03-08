/**
 * build-v6-shortlist.ts — v6 Phase 1 shortlist
 *
 * New rule: include any project where at least one model gives green OR yellow
 * across any dimension:
 *   - Grok (1st file): include if any dimension is green
 *   - Claude (2nd file): include if any dimension is green or yellow
 *   - Kimi (3rd file): include if any dimension is green or yellow
 *
 * Usage:
 *   npx tsx scripts/build-v6-shortlist.ts cache/assessments-grok.json cache/assessments-all-claude.json cache/assessments-all-kimi.json --out cache/pilot-shortlist.json
 *   npx tsx scripts/build-v6-shortlist.ts cache/assessments-grok.json cache/assessments-all-claude.json cache/assessments-all-kimi.json --out cache/pilot-shortlist.json --min-size 100
 */

import fs from "fs";
import path from "path";

const DEFAULT_MIN_SIZE = 100;
const args = process.argv.slice(2);

function getArg(flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
}

function getGreenCount(a: any): number {
  return ["political", "relational", "experimental"].filter(
    (k) => a[k] && !(a[k] as any).error && (a[k] as any).bucket === "green"
  ).length;
}

function getYellowCount(a: any): number {
  return ["political", "relational", "experimental"].filter(
    (k) => a[k] && !(a[k] as any).error && (a[k] as any).bucket === "yellow"
  ).length;
}

function loadAssessments(filePath: string): Record<string, { greenCount: number; yellowCount: number }> {
  if (!fs.existsSync(filePath)) throw new Error(`File not found: ${filePath}`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Record<string, any>;
  const out: Record<string, { greenCount: number; yellowCount: number }> = {};
  for (const [url, a] of Object.entries(data)) {
    out[url] = { greenCount: getGreenCount(a), yellowCount: getYellowCount(a) };
  }
  return out;
}

function main() {
  const outPath = getArg("--out") ?? "cache/pilot-shortlist.json";
  const minSize = parseInt(getArg("--min-size") ?? String(DEFAULT_MIN_SIZE), 10);

  const files: string[] = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--out" || args[i] === "--min-size") {
      i++;
      continue;
    }
    if (args[i].startsWith("--")) continue;
    files.push(args[i]);
  }

  if (files.length < 2) {
    console.error("Usage: build-v6-shortlist.ts <assessments1.json> <assessments2.json> <assessments3.json> [--out path] [--min-size N]");
    process.exit(1);
  }

  const allByUrl = new Map<string, Array<{ greenCount: number; yellowCount: number }>>();

  // Collect all URLs from any file and ensure exactly 3 entries per URL (grok, claude, kimi order)
  const allUrls = new Set<string>();
  const byFile: Array<Record<string, { greenCount: number; yellowCount: number }>> = [];
  for (const f of files) {
    const data = loadAssessments(f);
    byFile.push(data);
    for (const url of Object.keys(data)) allUrls.add(url);
  }
  const empty = { greenCount: 0, yellowCount: 0 };
  for (const url of allUrls) {
    const perModel = files.map((_, idx) => byFile[idx][url] ?? empty);
    allByUrl.set(url, perModel);
  }

  // Build shortlist: URL included if (grok: any green) OR (claude: any green or yellow) OR (kimi: any green or yellow)
  const shortlist: string[] = [];
  for (const [url, perModel] of allByUrl) {
    const passes =
      perModel.some((c, idx) =>
        idx === 0 ? c.greenCount >= 1 : c.greenCount >= 1 || c.yellowCount >= 1
      );
    if (passes) shortlist.push(url);
  }

  console.error(`Shortlist (grok-green OR claude/kimi green|yellow): ${shortlist.length} URLs`);

  if (shortlist.length < minSize) {
    // Optional top-up: add URLs with any red/grey signal until we reach minSize (e.g. 100)
    const rest = Array.from(allByUrl.keys()).filter((u) => !new Set(shortlist).has(u));
    for (const url of rest) {
      if (shortlist.length >= minSize) break;
      shortlist.push(url);
    }
    if (shortlist.length > 0 && shortlist.length >= minSize)
      console.error(`Top-up to --min-size ${minSize}: ${shortlist.length} URLs total`);
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(shortlist, null, 2) + "\n");
  console.error(`Shortlist: ${shortlist.length} URLs → ${outPath}`);
}

main();
