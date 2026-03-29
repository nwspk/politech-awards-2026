/**
 * Alexandra v9 — three independent model jurors score D1–D8 per project.
 *
 * Usage (repo root, OPENROUTER_API_KEY set):
 *   npx tsx scripts/alexandra/alexandra-eval.ts
 *   npx tsx scripts/alexandra/alexandra-eval.ts --url https://decidim.org
 *   npx tsx scripts/alexandra/alexandra-eval.ts --limit 20
 *   npx tsx scripts/alexandra/alexandra-eval.ts --retry-errors
 *   npx tsx scripts/alexandra/alexandra-eval.ts --juror grok   # only one juror
 *   npx tsx scripts/alexandra/alexandra-eval.ts --concurrency 8 --call-delay-ms 0
 *
 * Outputs: cache/alexandra-assessments.json (resume-safe)
 */

import fs from "fs";
import path from "path";
import csv from "csv-parser";
import Database from "better-sqlite3";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const RUBRIC_PATH = path.join(ROOT, "docs", "evaluation", "alexandra-rubric.md");
const CACHE_DB_PATH = path.join(ROOT, "cache", "sites.sqlite");
const CANDIDATES_CSV = path.join(ROOT, "candidates.csv");
const ENRICHED_DIR = path.join(ROOT, "data", "enriched");
const OUT_PATH = path.join(ROOT, "cache", "alexandra-assessments.json");

const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";
const BODY_CHAR_LIMIT = 3500;
const ENRICHED_CHAR_LIMIT = 14000;

const JURORS: { id: string; model: string }[] = [
  { id: "grok", model: "x-ai/grok-4.1-fast" },
  { id: "claude", model: "anthropic/claude-sonnet-4-6" },
  { id: "kimi", model: "moonshotai/kimi-k2" },
];

const DIMS = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"] as const;
type Dim = (typeof DIMS)[number];

// ---------------------------------------------------------------------------
// args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
function getArg(flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
}
const SINGLE_URL = getArg("--url");
const LIMIT = parseInt(getArg("--limit") ?? "0", 10);
const RETRY_ERRORS = args.includes("--retry-errors");
const JUROR_FILTER = getArg("--juror"); // grok | claude | kimi
const CONCURRENCY = Math.max(1, parseInt(getArg("--concurrency") ?? "1", 10));
/** Pause between juror calls and between URLs (rate-limit kindness). Use 0 to go faster if your tier allows. */
const CALL_DELAY_MS = Math.max(0, parseInt(getArg("--call-delay-ms") ?? "800", 10));

// ---------------------------------------------------------------------------
// URL / text helpers (match ITN / the-algorithm normalisation)
// ---------------------------------------------------------------------------

function normalizeUrlKey(raw: string): string {
  try {
    const u = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    return (u.hostname.replace(/^www\./, "") + u.pathname).toLowerCase().replace(/\/$/, "");
  } catch {
    return raw.toLowerCase().replace(/\/$/, "");
  }
}

function extractReadableText(html: string): string {
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
  const mainMatch =
    text.match(/<main[\s\S]*?<\/main>/i) ||
    text.match(/<article[\s\S]*?<\/article>/i);
  const working = mainMatch ? mainMatch[0] : text;
  const stripped = working
    .replace(/<[^>]+>/g, " ")
    .replace(/\s{3,}/g, "  ")
    .trim();
  return stripped.slice(0, BODY_CHAR_LIMIT);
}

function openCache(): Database.Database {
  if (!fs.existsSync(CACHE_DB_PATH)) {
    console.error(`Cache not found at ${CACHE_DB_PATH}. Run: npm run cache:sites`);
    process.exit(1);
  }
  return new Database(CACHE_DB_PATH, { readonly: true });
}

function getCachedPageText(db: Database.Database, url: string): { text: string; hadCache: boolean } {
  const row = db.prepare("SELECT body, error FROM pages WHERE url = ?").get(url) as
    | { body: string | null; error: string | null }
    | undefined;
  if (!row) return { text: "", hadCache: false };
  if (row.error || !row.body) return { text: "", hadCache: true };
  return { text: extractReadableText(row.body), hadCache: true };
}

// ---------------------------------------------------------------------------
// Enriched dossier index: canonical url -> compact JSON snippet
// ---------------------------------------------------------------------------

function loadEnrichedSnippets(): Map<string, string> {
  const map = new Map<string, string>();
  if (!fs.existsSync(ENRICHED_DIR)) return map;
  const files = fs.readdirSync(ENRICHED_DIR).filter((f) => f.endsWith(".json") && f !== "verification-report.json");
  for (const f of files) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(ENRICHED_DIR, f), "utf-8")) as { url?: string };
      if (!j.url) continue;
      const key = normalizeUrlKey(j.url);
      const blob = JSON.stringify(j, null, 2);
      map.set(key, blob.length > ENRICHED_CHAR_LIMIT ? blob.slice(0, ENRICHED_CHAR_LIMIT) + "\n…[truncated]" : blob);
    } catch {
      /* skip */
    }
  }
  return map;
}

function enrichedForUrl(map: Map<string, string>, url: string): string {
  const key = normalizeUrlKey(url);
  if (map.has(key)) return map.get(key)!;
  try {
    const u = new URL(url.startsWith("http") ? url : `https://${url}`);
    const alt = normalizeUrlKey(u.origin + u.pathname.replace(/\/$/, ""));
    if (map.has(alt)) return map.get(alt)!;
  } catch {
    /* */
  }
  return "(No enriched dossier matched this URL.)";
}

// ---------------------------------------------------------------------------
// OpenRouter
// ---------------------------------------------------------------------------

interface EvidenceRow {
  dimension: string;
  url: string | null;
  quote: string;
  source_type: "primary" | "secondary" | "inferred";
}

interface JurorScoreResult {
  D1: number;
  D2: number;
  D3: number;
  D4: number;
  D5: number;
  D6: number;
  D7: number;
  D8: number;
  evidence: EvidenceRow[];
  cannot_assess_dimensions: string[];
  rater_notes?: string;
}

async function callOpenRouter(system: string, user: string, model: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");

  const resp = await fetch(OPENROUTER_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
      "X-Title": "Politech Awards Alexandra Juror",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      max_tokens: 4500,
      temperature: 0.2,
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`OpenRouter ${resp.status}: ${err}`);
  }

  const data = (await resp.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
    error?: { message: string };
  };
  if (data.error) throw new Error(data.error.message);
  return data.choices?.[0]?.message?.content ?? "";
}

function parseJsonResponse(raw: string): unknown {
  const clean = raw.replace(/```json\n?|```\n?/g, "").trim();
  const start = clean.indexOf("{");
  const end = clean.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON object in model response");
  return JSON.parse(clean.slice(start, end + 1));
}

function validateScores(o: unknown): JurorScoreResult {
  if (!o || typeof o !== "object") throw new Error("Invalid JSON root");
  const r = o as Record<string, unknown>;
  const out: Partial<JurorScoreResult> = {
    evidence: [],
    cannot_assess_dimensions: [],
  };
  for (const d of DIMS) {
    const v = r[d];
    const n = typeof v === "number" ? v : parseInt(String(v), 10);
    if (!Number.isFinite(n) || n < 1 || n > 5) throw new Error(`${d} must be integer 1–5, got ${v}`);
    (out as Record<string, number>)[d] = n;
  }
  if (Array.isArray(r.evidence)) {
    out.evidence = r.evidence.map((e: unknown) => {
      const x = e as Record<string, unknown>;
      return {
        dimension: String(x.dimension ?? ""),
        url: x.url != null ? String(x.url) : null,
        quote: String(x.quote ?? ""),
        source_type:
          x.source_type === "primary" || x.source_type === "secondary" || x.source_type === "inferred"
            ? x.source_type
            : "inferred",
      };
    });
  }
  if (Array.isArray(r.cannot_assess_dimensions)) {
    out.cannot_assess_dimensions = r.cannot_assess_dimensions.map(String);
  }
  if (typeof r.rater_notes === "string") out.rater_notes = r.rater_notes;
  return out as JurorScoreResult;
}

// ---------------------------------------------------------------------------
// CSV
// ---------------------------------------------------------------------------

function readCandidateUrls(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const urls: string[] = [];
    fs.createReadStream(CANDIDATES_CSV)
      .pipe(csv())
      .on("data", (d: { project?: string }) => {
        const u = String(d.project ?? "").trim();
        if (u) urls.push(u);
      })
      .on("end", () => resolve(urls))
      .on("error", reject);
  });
}

// ---------------------------------------------------------------------------
// Assessments I/O — keyed by exact CSV URL string
// ---------------------------------------------------------------------------

type JurorEntry =
  | { model: string; evaluated_at: string; scores: JurorScoreResult }
  | { error: true; message: string; evaluated_at: string; model: string };

interface UrlAssessment {
  evaluated_at: string;
  jurors: Record<string, JurorEntry>;
}

type AssessmentsFile = Record<string, UrlAssessment>;

function loadAssessments(): AssessmentsFile {
  if (!fs.existsSync(OUT_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(OUT_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveAssessments(a: AssessmentsFile): void {
  const dir = path.dirname(OUT_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(a, null, 2) + "\n");
}

function jurorComplete(entry: JurorEntry | undefined): boolean {
  return !!entry && !("error" in entry && entry.error);
}

function buildSystemPrompt(rubricMd: string): string {
  return `You are ONE independent juror scoring a political/civic technology project for an awards committee.

You must apply ONLY the rubric below. Score each dimension D1–D8 as an integer from 1 to 5 using the scale definitions and example calibrations in the rubric.

Rules:
- You do not know what other jurors will score. Do not try to match an average.
- Use the enriched dossier and page text as primary context. If information is missing, score conservatively and list the dimension in cannot_assess_dimensions.
- For evidence[], include short quotes or concrete facts where possible; prefer primary sources (repos, official docs, legal/government text) over marketing copy.
- Output valid JSON only — no markdown fences, no preamble.

RUBRIC:
---
${rubricMd}
---

Respond with this exact JSON shape:
{
  "D1": 1,
  "D2": 1,
  "D3": 1,
  "D4": 1,
  "D5": 1,
  "D6": 1,
  "D7": 1,
  "D8": 1,
  "evidence": [
    { "dimension": "D1", "url": "https://...", "quote": "short quote or paraphrase", "source_type": "primary" }
  ],
  "cannot_assess_dimensions": [],
  "rater_notes": "optional"
}`;
}

function buildUserMessage(url: string, pageText: string, hadCache: boolean, enrichedBlob: string): string {
  const pageSection = pageText
    ? `PAGE TEXT (${pageText.length} chars, from cached fetch):\n---\n${pageText}\n---`
    : hadCache
      ? "PAGE TEXT: cache entry existed but body was empty or errored."
      : "PAGE TEXT: not in cache.";

  return `Project URL (canonical): ${url}

${pageSection}

ENRICHED DOSSIER (committee-collected JSON; may contain errors):
---
${enrichedBlob}
---

Score D1–D8 per the rubric. If the dossier and page text conflict, note it in rater_notes and prefer verifiable facts.`;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const rubricMd = fs.readFileSync(RUBRIC_PATH, "utf-8");
  const system = buildSystemPrompt(rubricMd);
  const jurors = JUROR_FILTER ? JURORS.filter((j) => j.id === JUROR_FILTER) : JURORS;
  if (jurors.length === 0) {
    console.error(`Unknown --juror ${JUROR_FILTER}. Use grok, claude, or kimi.`);
    process.exit(1);
  }

  console.log(`\nAlexandra v9 evaluation`);
  console.log(`Jurors: ${jurors.map((j) => `${j.id}=${j.model}`).join(", ")}`);
  console.log(`Concurrency: ${CONCURRENCY} | Call delay: ${CALL_DELAY_MS}ms`);
  console.log(`Output: ${OUT_PATH}\n`);

  if (!process.env.OPENROUTER_API_KEY) {
    console.error(
      "OPENROUTER_API_KEY is not set. The three jurors call OpenRouter (same stack as ITN/A v6).\n" +
        "  1. Create a key: https://openrouter.ai/keys\n" +
        "  2. export OPENROUTER_API_KEY='sk-or-v1-...'\n" +
        "  3. Re-run: npm run alexandra-eval -- --limit 5\n" +
        "Optional: Node 20+ can load a file without exporting globally:\n" +
        "  npx tsx --env-file=.env scripts/alexandra/alexandra-eval.ts --limit 5\n" +
        "  (put OPENROUTER_API_KEY=... in .env — add .env to .gitignore if you use this.)"
    );
    process.exit(1);
  }

  let allUrls = SINGLE_URL ? [SINGLE_URL] : await readCandidateUrls();
  allUrls = Array.from(new Set(allUrls));
  if (LIMIT > 0) allUrls = allUrls.slice(0, LIMIT);

  const db = openCache();
  const enrichedMap = loadEnrichedSnippets();
  const assessments = loadAssessments();

  const pending = allUrls.filter((url) => {
    const row = assessments[url];
    if (!row) return true;
    for (const j of jurors) {
      const e = row.jurors[j.id];
      if (RETRY_ERRORS && e && "error" in e && e.error) return true;
      if (!jurorComplete(e)) return true;
    }
    return false;
  });

  console.log(`Total URLs: ${allUrls.length} | To evaluate (pending juror slots): ${pending.length}\n`);

  if (pending.length === 0) {
    console.log("Nothing to do. Use --retry-errors to re-run failures.");
    db.close();
    return;
  }

  async function runOne(url: string): Promise<void> {
    const { text, hadCache } = getCachedPageText(db, url);
    const enrichedBlob = enrichedForUrl(enrichedMap, url);
    const userMsg = buildUserMessage(url, text, hadCache, enrichedBlob);

    if (!assessments[url]) {
      assessments[url] = { evaluated_at: new Date().toISOString(), jurors: {} };
    }

    let i = 0;
    for (const j of jurors) {
      const existing = assessments[url].jurors[j.id];
      if (jurorComplete(existing) && !RETRY_ERRORS) {
        console.log(`  ${j.id}: skip (already complete)`);
        continue;
      }
      if (jurorComplete(existing) && RETRY_ERRORS) {
        continue;
      }

      process.stdout.write(`  ${j.id}... `);
      try {
        const raw = await callOpenRouter(system, userMsg, j.model);
        const parsed = validateScores(parseJsonResponse(raw));
        assessments[url].jurors[j.id] = {
          model: j.model,
          evaluated_at: new Date().toISOString(),
          scores: parsed,
        };
        process.stdout.write(`ok D1=${parsed.D1}…D8=${parsed.D8}\n`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        process.stdout.write(`ERROR ${msg.slice(0, 120)}\n`);
        assessments[url].jurors[j.id] = {
          error: true,
          message: msg,
          evaluated_at: new Date().toISOString(),
          model: j.model,
        };
      }
      assessments[url].evaluated_at = new Date().toISOString();
      saveAssessments(assessments);
      i++;
      if (i < jurors.length) await sleep(CALL_DELAY_MS);
    }
    await sleep(CALL_DELAY_MS);
  }

  const queue = [...pending];
  const workers = Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async (_, widx) => {
    while (queue.length > 0) {
      const url = queue.shift();
      if (!url) break;
      console.log(`[worker ${widx + 1}] ${url}`);
      await runOne(url);
    }
  });
  await Promise.all(workers);

  db.close();
  console.log(`\nDone. Saved: ${OUT_PATH}`);
  console.log(`Next: npx tsx scripts/alexandra/alexandra-aggregate.ts`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exitCode = 1;
});
