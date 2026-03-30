/**
 * Alexandra D9 — targeted net-civic-benefit / misuse-risk scoring pass.
 *
 * Runs after the main D1–D8 evaluation (alexandra-eval.ts). For each project,
 * asks the same three jurors to score ONLY D9, with a focused prompt that
 * requires explicit misuse evidence for low scores and trackable outcome
 * citations for high scores.
 *
 * Usage (repo root, OPENROUTER_API_KEY set):
 *   npx tsx scripts/alexandra/alexandra-d9-eval.ts
 *   npx tsx scripts/alexandra/alexandra-d9-eval.ts --url https://www.torproject.org
 *   npx tsx scripts/alexandra/alexandra-d9-eval.ts --limit 20
 *   npx tsx scripts/alexandra/alexandra-d9-eval.ts --retry-errors
 *   npx tsx scripts/alexandra/alexandra-d9-eval.ts --juror claude
 *   npx tsx scripts/alexandra/alexandra-d9-eval.ts --concurrency 6 --call-delay-ms 0
 *
 * Reads:  cache/alexandra-assessments.json  (existing D1–D8 scores for context)
 *         candidates.csv
 *         data/enriched/*.json
 *         cache/sites.sqlite
 *
 * Writes: cache/alexandra-d9-assessments.json  (resume-safe; keyed by URL)
 *
 * After running, re-run alexandra-aggregate.ts — it will pick up D9 automatically
 * when cache/alexandra-d9-assessments.json exists.
 */

import fs from "fs";
import path from "path";
import csv from "csv-parser";
import {
  ROOT,
  openCache,
  getCachedPageText,
  loadEnrichedSnippets,
  enrichedForUrl,
} from "./alexandra-context.js";

const CANDIDATES_CSV = path.join(ROOT, "candidates.csv");
const D1_D8_PATH = path.join(ROOT, "cache", "alexandra-assessments.json");
const OUT_PATH = path.join(ROOT, "cache", "alexandra-d9-assessments.json");
const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";

// D9 uses a single Claude juror — evidence retrieval is factual, not interpretive,
// so 3-way inter-rater reliability is not needed. Estimated cost: ~$5.78 for 321 projects.
// Model ID note: OpenRouter uses a dot not hyphen (claude-sonnet-4.6).
const JURORS: { id: string; model: string }[] = [
  { id: "claude", model: "anthropic/claude-sonnet-4.6" },
];

// ---------------------------------------------------------------------------
// Args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
function getArg(flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
}
const SINGLE_URL = getArg("--url");
const LIMIT = parseInt(getArg("--limit") ?? "0", 10);
const RETRY_ERRORS = args.includes("--retry-errors");
const JUROR_FILTER = getArg("--juror");
const CONCURRENCY = Math.max(1, parseInt(getArg("--concurrency") ?? "1", 10));
const CALL_DELAY_MS = Math.max(0, parseInt(getArg("--call-delay-ms") ?? "800", 10));

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface D9EvidenceRow {
  url: string | null;
  quote: string;
  source_type: "primary" | "secondary" | "inferred";
  /** "misuse" | "positive_outcome" | "neutral" */
  evidence_type: string;
}

interface D9ScoreResult {
  D9: number;
  evidence: D9EvidenceRow[];
  cannot_assess: boolean;
  cannot_assess_reason?: string;
  rater_notes: string;
}

type D9JurorEntry =
  | { model: string; evaluated_at: string; scores: D9ScoreResult }
  | { error: true; message: string; evaluated_at: string; model: string };

interface D9UrlAssessment {
  evaluated_at: string;
  jurors: Record<string, D9JurorEntry>;
}

type D9AssessmentsFile = Record<string, D9UrlAssessment>;

// ---------------------------------------------------------------------------
// Prompt
// ---------------------------------------------------------------------------

const D9_RUBRIC = `## D9 — Net civic benefit / misuse risk (1–5)

Can this project's positive societal impact be explicitly tracked? Is there documented or structural misuse risk?

| Score | Description |
|------:|-------------|
| 1 | Primary or equally prominent documented use is harmful or illegal; positive civic impact cannot be isolated from misuse; OR net societal impact is contested or demonstrably negative |
| 2 | Significant dual-use concern; positive civic use is real but structurally inseparable from harmful use; OR civic benefit is theoretical or structural, with no trackable positive outcomes |
| 3 | Primarily civic intent; some dual-use potential but not documented at scale; benefit measurable in principle but data is sparse or indirect |
| 4 | Explicit positive societal outcomes documented and attributable; misuse is limited or structurally contained by the tool's design |
| 5 | Demonstrable, population-level positive civic impact that can be tracked with specific evidence; misuse is structurally prevented or negligible by design |

SCOPE RULE: Score the net effect across the full real-world user population — not just intended use.
- A tool used predominantly by activists but also by criminal networks is NOT automatically a 4.
- A tool with only civic users but no documented outcomes is a 3, not a 5.
- Structural design matters: does the tool's architecture limit or enable misuse?

EVIDENCE REQUIREMENTS (mandatory):
- D9 ≤ 2: you MUST cite documented misuse OR explain in rater_notes why civic benefit cannot be isolated
- D9 ≥ 4: you MUST cite at least one specific tracked outcome: a court case, documented policy change, published savings figure, independently verified user count with civic purpose, or equivalent
- D9 = 3: state explicitly in rater_notes what evidence would move the score up or down

CALIBRATION ANCHORS:
| Score | Project | Rationale |
|------:|---------|-----------|
| 1 | Sci-Hub | Primary legal characterisation is copyright infringement; no civic governance function |
| 1 | The DAO (2016) | $60M hack, Ethereum chain split; net impact contested/negative |
| 2 | Tor Project | Dark web use (drug markets, CSAM) is structurally inseparable from activist use; cannot isolate net civic benefit at aggregate |
| 2 | Aragon | VC-backed crypto governance; outcomes primarily financial not civic |
| 3 | Matrix | Hosts extremist instances; net benefit likely positive but unquantified |
| 4 | Aleph / OCCRP | Documented corruption exposures; vetted journalist-only access limits misuse |
| 4 | Open Contracting Partnership | Policy adoption documented; savings published per jurisdiction |
| 5 | SecureDrop | Whistleblowing outcomes documented; architecture structurally prevents misuse |
| 5 | OpenProcurement (ProZorro) | $4B+ audited procurement savings; anti-corruption by design |
| 5 | Worker Info Exchange | Court wins for gig workers are public record; direct tool attribution |`;

function buildSystemPrompt(): string {
  return `You are ONE independent juror scoring a political/civic technology project for an awards committee.

Your task is ONLY to score dimension D9 (Net civic benefit / misuse risk) using the rubric below.

Rules:
- You do not know what other jurors will score. Do not try to match an average.
- Search the dossier, page text, and your knowledge for misuse documentation AND for trackable positive outcomes.
- Be specific: vague claims of "potential benefit" do not justify scores of 4 or 5.
- Be honest about dual-use risk even when the project has a positive stated mission.
- Output valid JSON only — no markdown fences, no preamble.

${D9_RUBRIC}

Respond with this exact JSON shape:
{
  "D9": 3,
  "evidence": [
    {
      "url": "https://...",
      "quote": "short quote or paraphrase of the specific outcome or misuse",
      "source_type": "primary",
      "evidence_type": "positive_outcome"
    }
  ],
  "cannot_assess": false,
  "cannot_assess_reason": null,
  "rater_notes": "Required: explain your score. For ≤2 cite misuse. For ≥4 name the tracked outcome. For 3 state what would move the score."
}

evidence_type must be one of: "positive_outcome" | "misuse" | "dual_use_concern" | "neutral"`;
}

function buildUserMessage(
  url: string,
  pageText: string,
  hadCache: boolean,
  enrichedBlob: string,
  existingD1D8Summary: string
): string {
  const pageSection = pageText
    ? `PAGE TEXT (${pageText.length} chars):\n---\n${pageText.slice(0, 6000)}\n---`
    : hadCache
      ? "PAGE TEXT: cache entry existed but body was empty or errored."
      : "PAGE TEXT: not in cache.";

  return `Project URL: ${url}

${pageSection}

ENRICHED DOSSIER:
---
${enrichedBlob}
---

EXISTING D1–D8 SCORES FROM THIS EVALUATION RUN (for context only — do NOT let these anchor your D9):
${existingD1D8Summary}

Score D9 only. Be explicit about misuse evidence or tracked positive outcomes per the rubric requirements.`;
}

// ---------------------------------------------------------------------------
// OpenRouter
// ---------------------------------------------------------------------------

async function callOpenRouter(system: string, user: string, model: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");

  const resp = await fetch(OPENROUTER_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
      "X-Title": "Politech Awards Alexandra D9 Juror",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      max_tokens: 1500,
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
  if (start === -1 || end === -1) throw new Error("No JSON object found in response");
  return JSON.parse(clean.slice(start, end + 1));
}

function validateD9(o: unknown): D9ScoreResult {
  if (!o || typeof o !== "object") throw new Error("Invalid JSON root");
  const r = o as Record<string, unknown>;

  const d9 = typeof r.D9 === "number" ? r.D9 : parseInt(String(r.D9), 10);
  if (!Number.isFinite(d9) || d9 < 1 || d9 > 5) throw new Error(`D9 must be 1–5, got ${r.D9}`);

  const evidence: D9EvidenceRow[] = [];
  if (Array.isArray(r.evidence)) {
    for (const e of r.evidence) {
      const x = e as Record<string, unknown>;
      evidence.push({
        url: x.url != null ? String(x.url) : null,
        quote: String(x.quote ?? ""),
        source_type:
          x.source_type === "primary" || x.source_type === "secondary"
            ? x.source_type
            : "inferred",
        evidence_type: String(x.evidence_type ?? "neutral"),
      });
    }
  }

  // Enforce evidence requirements
  if (d9 <= 2 && evidence.filter(e => e.evidence_type === "misuse" || e.evidence_type === "dual_use_concern").length === 0) {
    const hasNote = typeof r.rater_notes === "string" && r.rater_notes.length > 20;
    if (!hasNote) throw new Error(`D9=${d9} requires misuse evidence or explanation in rater_notes`);
  }
  if (d9 >= 4 && evidence.filter(e => e.evidence_type === "positive_outcome").length === 0) {
    throw new Error(`D9=${d9} requires at least one positive_outcome evidence row`);
  }

  return {
    D9: d9,
    evidence,
    cannot_assess: r.cannot_assess === true,
    cannot_assess_reason: typeof r.cannot_assess_reason === "string" ? r.cannot_assess_reason : undefined,
    rater_notes: typeof r.rater_notes === "string" ? r.rater_notes : "",
  };
}

// ---------------------------------------------------------------------------
// Helpers
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

function loadD9Assessments(): D9AssessmentsFile {
  if (!fs.existsSync(OUT_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(OUT_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveD9Assessments(a: D9AssessmentsFile): void {
  const dir = path.dirname(OUT_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(a, null, 2) + "\n");
}

function jurorComplete(entry: D9JurorEntry | undefined): boolean {
  return !!entry && !("error" in entry && entry.error);
}

/** Build a short D1–D8 summary from existing assessments to give context without anchoring D9. */
function buildD1D8Summary(url: string, d1d8Data: Record<string, unknown>): string {
  const entry = d1d8Data[url] as { jurors?: Record<string, { scores?: Record<string, number> }> } | undefined;
  if (!entry?.jurors) return "No existing D1–D8 scores found.";
  const lines: string[] = [];
  for (const [juror, j] of Object.entries(entry.jurors)) {
    if (!j?.scores) continue;
    const s = j.scores as Record<string, number>;
    const dims = ["D1","D2","D3","D4","D5","D6","D7","D8"];
    lines.push(`${juror}: ${dims.map(d => `${d}=${s[d]??'?'}`).join(" ")}`);
  }
  return lines.join("\n") || "No existing D1–D8 scores found.";
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!process.env.OPENROUTER_API_KEY) {
    console.error(
      "OPENROUTER_API_KEY is not set.\n" +
        "  export OPENROUTER_API_KEY='sk-or-v1-...'\n" +
        "  Then re-run: npx tsx scripts/alexandra/alexandra-d9-eval.ts"
    );
    process.exit(1);
  }

  const jurors = JUROR_FILTER ? JURORS.filter(j => j.id === JUROR_FILTER) : JURORS;
  if (jurors.length === 0) {
    console.error(`Unknown --juror ${JUROR_FILTER}. Use: grok, claude, or kimi`);
    process.exit(1);
  }

  console.log(`\nAlexandra D9 evaluation`);
  console.log(`Jurors: ${jurors.map(j => `${j.id}=${j.model}`).join(", ")}`);
  console.log(`Concurrency: ${CONCURRENCY} | Call delay: ${CALL_DELAY_MS}ms`);
  console.log(`Output: ${OUT_PATH}\n`);

  let allUrls = SINGLE_URL ? [SINGLE_URL] : await readCandidateUrls();
  allUrls = Array.from(new Set(allUrls));
  if (LIMIT > 0) allUrls = allUrls.slice(0, LIMIT);

  const db = openCache();
  const enrichedMap = loadEnrichedSnippets();
  const d9Assessments = loadD9Assessments();
  const d1d8Data: Record<string, unknown> = fs.existsSync(D1_D8_PATH)
    ? JSON.parse(fs.readFileSync(D1_D8_PATH, "utf-8"))
    : {};

  const system = buildSystemPrompt();

  const pending = allUrls.filter(url => {
    const row = d9Assessments[url];
    if (!row) return true;
    for (const j of jurors) {
      const e = row.jurors[j.id];
      if (RETRY_ERRORS && e && "error" in e && e.error) return true;
      if (!jurorComplete(e)) return true;
    }
    return false;
  });

  console.log(`Total URLs: ${allUrls.length} | Pending D9 slots: ${pending.length}\n`);

  if (pending.length === 0) {
    console.log("Nothing to do. Use --retry-errors to re-run failures.");
    console.log("Next: npx tsx scripts/alexandra/alexandra-aggregate.ts");
    db.close();
    return;
  }

  async function runOne(url: string): Promise<void> {
    const { text, hadCache } = getCachedPageText(db, url);
    const enrichedBlob = enrichedForUrl(enrichedMap, url);
    const d1d8Summary = buildD1D8Summary(url, d1d8Data);
    const userMsg = buildUserMessage(url, text, hadCache, enrichedBlob, d1d8Summary);

    if (!d9Assessments[url]) {
      d9Assessments[url] = { evaluated_at: new Date().toISOString(), jurors: {} };
    }

    let i = 0;
    for (const j of jurors) {
      const existing = d9Assessments[url].jurors[j.id];
      if (jurorComplete(existing) && !RETRY_ERRORS) {
        console.log(`  ${j.id}: skip (already complete)`);
        continue;
      }

      process.stdout.write(`  ${j.id}... `);
      try {
        const raw = await callOpenRouter(system, userMsg, j.model);
        const parsed = validateD9(parseJsonResponse(raw));
        d9Assessments[url].jurors[j.id] = {
          model: j.model,
          evaluated_at: new Date().toISOString(),
          scores: parsed,
        };
        process.stdout.write(`ok D9=${parsed.D9} | ${parsed.rater_notes.slice(0, 80)}\n`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        process.stdout.write(`ERROR ${msg.slice(0, 120)}\n`);
        d9Assessments[url].jurors[j.id] = {
          error: true,
          message: msg,
          evaluated_at: new Date().toISOString(),
          model: j.model,
        };
      }
      d9Assessments[url].evaluated_at = new Date().toISOString();
      saveD9Assessments(d9Assessments);
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

main().catch(err => {
  console.error("Fatal:", err);
  process.exitCode = 1;
});
