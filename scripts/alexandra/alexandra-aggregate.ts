/**
 * Aggregate Alexandra juror scores → median per dimension, composite, controversy flags.
 *
 * Usage:
 *   npx tsx scripts/alexandra/alexandra-aggregate.ts
 *   npx tsx scripts/alexandra/alexandra-aggregate.ts --out cache/alexandra-aggregate.json
 *
 * Reads:  cache/alexandra-assessments.json   (D1–D8)
 *         cache/alexandra-d9-assessments.json (D9, optional — merged in when present)
 * Writes: cache/alexandra-aggregate.json (+ .csv alongside)
 *
 * Weight mode:
 *   Default (no D9 file): D1–D8 original weights (v9 baseline)
 *   With D9 file present: D1–D8 revised weights + D9 at 15% (v10 civic-benefit model)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/** Mirrors successful juror payload in alexandra-assessments.json */
interface JurorScoreResult {
  D1: number;
  D2: number;
  D3: number;
  D4: number;
  D5: number;
  D6: number;
  D7: number;
  D8: number;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const IN_PATH = path.join(ROOT, "cache", "alexandra-assessments.json");
const D9_PATH = path.join(ROOT, "cache", "alexandra-d9-assessments.json");

const args = process.argv.slice(2);
function getArg(flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
}
const OUT_JSON = path.resolve(ROOT, getArg("--out") ?? "cache/alexandra-aggregate.json");

// D9 file presence switches weight mode automatically
const HAS_D9 = fs.existsSync(D9_PATH);

const DIMS_BASE = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"] as const;
const DIMS_WITH_D9 = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"] as const;
const DIMS = HAS_D9 ? DIMS_WITH_D9 : DIMS_BASE;
type Dim = (typeof DIMS)[number];

// v9 baseline weights (no D9)
const WEIGHTS_V9: Record<string, number> = {
  D1: 0.25, D2: 0.20, D3: 0.15, D4: 0.10, D5: 0.10, D6: 0.10, D7: 0.05, D8: 0.05,
};

// v10 civic-benefit weights (with D9)
const WEIGHTS_V10: Record<string, number> = {
  D1: 0.20, D2: 0.15, D3: 0.05, D4: 0.10, D5: 0.10, D6: 0.15, D7: 0.05, D8: 0.05, D9: 0.15,
};

const WEIGHTS: Record<string, number> = HAS_D9 ? WEIGHTS_V10 : WEIGHTS_V9;

function composite(scores: Record<Dim, number>): number {
  let s = 0;
  for (const d of DIMS) s += scores[d] * WEIGHTS[d];
  return Math.round(s * 1000) / 1000;
}

function median(nums: number[]): number {
  if (nums.length === 0) return NaN;
  const a = [...nums].sort((x, y) => x - y);
  const m = Math.floor(a.length / 2);
  return a.length % 2 ? a[m]! : (a[m - 1]! + a[m]!) / 2;
}

function normalizeUrlKey(raw: string): string {
  try {
    const u = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    return (u.hostname.replace(/^www\./, "") + u.pathname).toLowerCase().replace(/\/$/, "");
  } catch {
    return raw.toLowerCase().replace(/\/$/, "");
  }
}

function loadNameForUrl(url: string): string {
  const dir = path.join(ROOT, "data", "enriched");
  if (!fs.existsSync(dir)) return url;
  const key = normalizeUrlKey(url);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "verification-report.json");
  for (const f of files) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as { url?: string; name?: string };
      if (j.url && normalizeUrlKey(j.url) === key && j.name) return j.name;
    } catch {
      /* */
    }
  }
  return url;
}

type JurorEntry =
  | { model: string; evaluated_at: string; scores: JurorScoreResult }
  | { error: true; message: string };

interface UrlAssessment {
  jurors: Record<string, JurorEntry>;
}

type AssessmentsFile = Record<string, UrlAssessment>;

interface ProjectAgg {
  url: string;
  name: string;
  median_scores: Record<Dim, number | null>;
  median_composite: number | null;
  juror_composites: Record<string, number>;
  controversial_dimensions: string[];
  jurors_count: number;
}

function main() {
  if (!fs.existsSync(IN_PATH)) {
    console.error(`Missing ${IN_PATH}. Run alexandra-eval first.`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(IN_PATH, "utf-8")) as AssessmentsFile;

  // Load D9 scores if available — keyed by url → juror id → D9 integer
  const d9Scores: Record<string, Record<string, number>> = {};
  if (HAS_D9) {
    const d9Data = JSON.parse(fs.readFileSync(D9_PATH, "utf-8")) as Record<
      string,
      { jurors?: Record<string, { scores?: { D9?: number }; error?: boolean }> }
    >;
    for (const [url, entry] of Object.entries(d9Data)) {
      if (!entry?.jurors) continue;
      d9Scores[url] = {};
      for (const [jid, j] of Object.entries(entry.jurors)) {
        if (j && !j.error && typeof j.scores?.D9 === "number") {
          d9Scores[url][jid] = j.scores.D9;
        }
      }
    }
    console.log(`D9 file loaded: ${Object.keys(d9Scores).length} URLs with D9 scores`);
  }

  const projects: ProjectAgg[] = [];

  for (const url of Object.keys(data).sort()) {
    const row = data[url];
    if (!row?.jurors) continue;

    const jurorComposites: Record<string, number> = {};
    // Build perDim dynamically from DIMS so D9 is included when HAS_D9
    const perDim: Record<string, number[]> = {};
    for (const d of DIMS) perDim[d] = [];

    for (const [jid, entry] of Object.entries(row.jurors)) {
      if (!entry || "error" in entry) continue;
      const scores = entry.scores;

      // Build score map for this juror — D1–D8 from main assessments, D9 from d9Scores
      const c: Record<string, number> = {
        D1: scores.D1, D2: scores.D2, D3: scores.D3, D4: scores.D4,
        D5: scores.D5, D6: scores.D6, D7: scores.D7, D8: scores.D8,
      };
      if (HAS_D9) {
        const d9 = d9Scores[url]?.[jid];
        if (typeof d9 === "number") c["D9"] = d9;
      }

      // Only compute composite when all active dimensions are present
      const missingDims = DIMS.filter(d => c[d] == null);
      if (missingDims.length === 0) {
        jurorComposites[jid] = composite(c as Record<Dim, number>);
      }
      for (const d of DIMS) {
        if (c[d] != null) perDim[d].push(c[d] as number);
      }
    }

    const median_scores = {} as Record<Dim, number | null>;
    const controversial_dimensions: string[] = [];
    for (const d of DIMS) {
      const vals = perDim[d];
      median_scores[d] = vals.length ? Math.round(median(vals) * 100) / 100 : null;
      if (vals.length >= 2) {
        const spread = Math.max(...vals) - Math.min(...vals);
        if (spread >= 2) controversial_dimensions.push(d);
      }
    }

    const compList = Object.values(jurorComposites);
    const median_composite = compList.length ? Math.round(median(compList) * 1000) / 1000 : null;

    projects.push({
      url,
      name: loadNameForUrl(url),
      median_scores,
      median_composite,
      juror_composites: jurorComposites,
      controversial_dimensions,
      jurors_count: compList.length,
    });
  }

  const out = {
    generated_at: new Date().toISOString(),
    rubric_path: "docs/evaluation/alexandra-rubric.md",
    weights: WEIGHTS,
    projects,
  };

  const dir = path.dirname(OUT_JSON);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2) + "\n");

  const csvPath = OUT_JSON.replace(/\.json$/i, ".csv");
  const csvHeader = ["url", "name", "median_composite", "jurors_count", ...DIMS, "controversial"].join(",");
  const csvLines = projects.map((p) =>
    [
      JSON.stringify(p.url),
      JSON.stringify(p.name),
      p.median_composite ?? "",
      p.jurors_count,
      ...DIMS.map((d) => p.median_scores[d] ?? ""),
      JSON.stringify(p.controversial_dimensions.join(";")),
    ].join(",")
  );
  fs.writeFileSync(csvPath, [csvHeader, ...csvLines].join("\n") + "\n");

  console.log(`Wrote ${OUT_JSON}`);
  console.log(`Wrote ${csvPath}`);
  console.log(`Projects aggregated: ${projects.length}`);
}

main();
