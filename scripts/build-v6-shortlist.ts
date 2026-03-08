/**
 * build-v6-shortlist.ts — v6 Phase 1 shortlist
 *
 * Union of (≥2 greens) across three assessment files; if fewer than 100 URLs,
 * top up to at least 100 with projects that have (≥2 yellow) or (1 green + 1 yellow) in any model.
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

  for (const f of files) {
    const data = loadAssessments(f);
    for (const [url, counts] of Object.entries(data)) {
      if (!allByUrl.has(url)) allByUrl.set(url, []);
      allByUrl.get(url)!.push(counts);
    }
  }

  // Tier 1: union of (≥2 greens) in any model
  const tier1 = new Set<string>();
  for (const [url, perModel] of allByUrl) {
    const hasTwoGreens = perModel.some((c) => c.greenCount >= 2);
    if (hasTwoGreens) tier1.add(url);
  }

  let shortlist = Array.from(tier1);
  console.error(`Tier 1 (≥2 greens in any model): ${shortlist.length} URLs`);

  if (shortlist.length < minSize) {
    // Tier 2: (≥2 yellow) or (1 green + 1 yellow) in any model, not already in tier1
    const tier2Candidates: { url: string; score: number; gPlusY: number }[] = [];
    for (const [url, perModel] of allByUrl) {
      if (tier1.has(url)) continue;
      for (const c of perModel) {
        const twoYellow = c.yellowCount >= 2;
        const oneGreenOneYellow = c.greenCount >= 1 && c.yellowCount >= 1;
        if (twoYellow || oneGreenOneYellow) {
          const score = twoYellow ? 2 : 1;
          const gPlusY = c.greenCount + c.yellowCount;
          tier2Candidates.push({ url, score, gPlusY });
          break;
        }
      }
    }
    tier2Candidates.sort((a, b) => b.score - a.score || b.gPlusY - a.gPlusY);
    const seen = new Set(shortlist);
    for (const { url } of tier2Candidates) {
      if (seen.has(url)) continue;
      shortlist.push(url);
      seen.add(url);
      if (shortlist.length >= minSize) break;
    }
    console.error(`Tier 2 top-up: ${shortlist.length - tier1.size} URLs → total ${shortlist.length}`);
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(shortlist, null, 2) + "\n");
  console.error(`Shortlist: ${shortlist.length} URLs → ${outPath}`);
}

main();
