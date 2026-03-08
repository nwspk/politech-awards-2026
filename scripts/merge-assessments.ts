/**
 * merge-assessments.ts — v6 merged assessments for mixed jury
 *
 * Reads three assessment files; for each URL present in any file, for each agent role
 * (political, relational, experimental) takes the "best" bucket across the three models
 * (green > yellow > red > grey). Writes assessments-mixed.json for the mixed jury.
 *
 * Usage:
 *   npx tsx scripts/merge-assessments.ts cache/assessments-grok.json cache/assessments-all-claude.json cache/assessments-all-kimi.json --out cache/assessments-mixed.json
 */

import fs from "fs";
import path from "path";

const BUCKET_ORDER: Record<string, number> = { green: 4, yellow: 3, red: 2, grey: 1 };

function getBucket(a: any): string | null {
  if (!a || a.error) return null;
  const b = (a.bucket || "").toLowerCase();
  return BUCKET_ORDER[b] != null ? b : null;
}

function bestBucket(buckets: (string | null)[]): string {
  let best = "grey";
  let bestScore = 0;
  for (const b of buckets) {
    if (b && (BUCKET_ORDER[b] ?? 0) > bestScore) {
      bestScore = BUCKET_ORDER[b];
      best = b;
    }
  }
  return best;
}

function main() {
  const args = process.argv.slice(2);
  let outPath = "cache/assessments-mixed.json";
  const files: string[] = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--out") {
      outPath = args[i + 1] ?? outPath;
      i++;
      continue;
    }
    if (args[i].startsWith("--")) continue;
    files.push(args[i]);
  }

  if (files.length < 2) {
    console.error("Usage: merge-assessments.ts <assessments1.json> <assessments2.json> <assessments3.json> [--out path]");
    process.exit(1);
  }

  const allUrls = new Set<string>();
  const loaded: Array<Record<string, any>> = [];
  for (const f of files) {
    if (!fs.existsSync(f)) throw new Error(`File not found: ${f}`);
    const data = JSON.parse(fs.readFileSync(f, "utf-8")) as Record<string, any>;
    Object.keys(data).forEach((u) => allUrls.add(u));
    loaded.push(data);
  }

  const merged: Record<string, any> = {};
  for (const url of allUrls) {
    const roles = ["political", "relational", "experimental"] as const;
    const out: any = {};
    for (const role of roles) {
      const buckets = loaded.map((data) => getBucket(data[url]?.[role]));
      out[role] = { bucket: bestBucket(buckets) };
    }
    merged[url] = out;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(merged, null, 2) + "\n");
  console.error(`Merged ${Object.keys(merged).length} URLs → ${outPath}`);
}

main();
