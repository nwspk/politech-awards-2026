/**
 * Alexandra v9 — second pass: Claude only writes per-dimension justifications for
 * the top N projects by median_composite (from alexandra-aggregate.json).
 *
 * For each D1–D8: either cannot_assess + reason, or 1–3 sentence justification
 * plus ≥1 evidence row (url + quote + source_type).
 *
 * Usage (repo root):
 *   **Preferred (BYOK):** `ANTHROPIC_API_KEY` — calls api.anthropic.com directly (no OpenRouter credits).
 *   **Fallback:** `OPENROUTER_API_KEY` — uses OpenRouter (`ALEXANDRA_JUSTIFY_MODEL`, default anthropic/claude-sonnet-4-6).
 *
 *   npx tsx scripts/alexandra/alexandra-top10-justify.ts
 *   npx tsx scripts/alexandra/alexandra-top10-justify.ts --top 5
 *   npx tsx scripts/alexandra/alexandra-top10-justify.ts --force
 *   npx tsx scripts/alexandra/alexandra-top10-justify.ts --url https://www.torproject.org
 *
 * Output: cache/alexandra-top10-justifications.json (merge / resume unless --force)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  ROOT,
  openCache,
  getCachedPageText,
  loadEnrichedSnippets,
  enrichedForUrl,
} from "./alexandra-context.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RUBRIC_PATH = path.resolve(
  process.env.ALEXANDRA_RUBRIC_PATH || path.join(ROOT, "docs", "evaluation", "alexandra-rubric.md")
);
const DEFAULT_AGG = path.join(ROOT, "cache", "alexandra-aggregate.json");
const OUT_PATH = path.join(ROOT, "cache", "alexandra-top10-justifications.json");
const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";
const ANTHROPIC_MESSAGES_API = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_API_VERSION = "2023-06-01";

const OPENROUTER_JUSTIFY_MODEL =
  process.env.ALEXANDRA_JUSTIFY_MODEL || "anthropic/claude-sonnet-4-6";
/** Native Anthropic model id when using ANTHROPIC_API_KEY (BYOK). */
const ANTHROPIC_NATIVE_MODEL =
  process.env.ANTHROPIC_MODEL ||
  process.env.ALEXANDRA_ANTHROPIC_MODEL ||
  "claude-sonnet-4-20250514";

function useAnthropicByok(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY?.trim());
}

/** Provenance string written into JSON output rows. */
function justifyModelLabel(): string {
  return useAnthropicByok()
    ? `anthropic-api:${ANTHROPIC_NATIVE_MODEL}`
    : `openrouter:${OPENROUTER_JUSTIFY_MODEL}`;
}

const DIMS = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"] as const;
type Dim = (typeof DIMS)[number];

const args = process.argv.slice(2);
function getArg(flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
}
const TOP_N = Math.max(1, parseInt(getArg("--top") ?? "10", 10));
const FORCE = args.includes("--force");
const SINGLE_URL = getArg("--url");
const AGG_PATH = path.resolve(process.env.ALEXANDRA_AGGREGATE_PATH || getArg("--aggregate") || DEFAULT_AGG);
const OUT_ARG = getArg("--out");
const resolvedOut = OUT_ARG ? path.resolve(OUT_ARG) : OUT_PATH;

interface AggProject {
  url: string;
  name?: string;
  median_scores: Record<string, number>;
  median_composite: number;
  controversial_dimensions?: string[];
}

interface EvidenceRow {
  url: string | null;
  quote: string;
  source_type: "primary" | "secondary" | "inferred";
}

type DimJustify =
  | { cannot_assess: true; reason: string }
  | { cannot_assess: false; justification: string; evidence: EvidenceRow[] };

interface ProjectJustification {
  rank: number;
  url: string;
  name?: string;
  median_composite: number;
  median_scores: Record<string, number>;
  controversial_dimensions?: string[];
  /** Present unless `error` is set. */
  dimensions?: Record<Dim, DimJustify>;
  claude_notes?: string;
  model: string;
  generated_at: string;
  error?: string;
}

interface OutputFile {
  generated_at: string;
  model: string;
  aggregate_path: string;
  rubric_path: string;
  note: string;
  projects: ProjectJustification[];
}

function parseJsonResponse(raw: string): unknown {
  const clean = raw.replace(/```json\n?|```\n?/g, "").trim();
  const start = clean.indexOf("{");
  const end = clean.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON object in model response");
  return JSON.parse(clean.slice(start, end + 1));
}

function normalizeEvidence(rows: unknown): EvidenceRow[] {
  if (!Array.isArray(rows)) return [];
  return rows.map((e: unknown) => {
    const x = e as Record<string, unknown>;
    return {
      url: x.url != null && String(x.url).trim() !== "" ? String(x.url) : null,
      quote: String(x.quote ?? ""),
      source_type:
        x.source_type === "primary" || x.source_type === "secondary" || x.source_type === "inferred"
          ? x.source_type
          : "inferred",
    };
  });
}

function validateDimensionsBlock(o: unknown): Record<Dim, DimJustify> {
  if (!o || typeof o !== "object") throw new Error("dimensions must be an object");
  const src = o as Record<string, unknown>;
  const out = {} as Record<Dim, DimJustify>;
  for (const d of DIMS) {
    const block = src[d];
    if (!block || typeof block !== "object") throw new Error(`Missing dimension block ${d}`);
    const b = block as Record<string, unknown>;
    if (b.cannot_assess === true) {
      const reason = String(b.reason ?? "").trim();
      if (reason.length < 8) throw new Error(`${d}: cannot_assess requires reason (≥8 chars)`);
      out[d] = { cannot_assess: true, reason };
      continue;
    }
    const justification = String(b.justification ?? "").trim();
    if (justification.length < 20) throw new Error(`${d}: justification too short (need ≥20 chars)`);
    const evidence = normalizeEvidence(b.evidence);
    if (evidence.length < 1) throw new Error(`${d}: need ≥1 evidence row when assessed`);
    for (const ev of evidence) {
      if (!ev.quote.trim()) throw new Error(`${d}: evidence.quote required`);
    }
    out[d] = { cannot_assess: false, justification, evidence };
  }
  return out;
}

function parseJustifyResponse(raw: string): {
  dimensions: Record<Dim, DimJustify>;
  claude_notes?: string;
} {
  const root = parseJsonResponse(raw) as Record<string, unknown>;
  const dimensions = validateDimensionsBlock(root.dimensions);
  const claude_notes = typeof root.claude_notes === "string" ? root.claude_notes : undefined;
  return { dimensions, claude_notes };
}

async function callAnthropicDirect(system: string, user: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY!.trim();
  const resp = await fetch(ANTHROPIC_MESSAGES_API, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": ANTHROPIC_API_VERSION,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: ANTHROPIC_NATIVE_MODEL,
      max_tokens: 8192,
      temperature: 0.2,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Anthropic ${resp.status}: ${err}`);
  }

  const data = (await resp.json()) as {
    content?: Array<{ type: string; text?: string }>;
    error?: { message: string };
  };
  if (data.error) throw new Error(data.error.message);
  const parts = (data.content ?? []).filter((c) => c.type === "text").map((c) => c.text ?? "");
  const text = parts.join("");
  if (!text.trim()) throw new Error("Anthropic returned empty content");
  return text;
}

async function callOpenRouterJustify(system: string, user: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");

  const resp = await fetch(OPENROUTER_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
      "X-Title": "Politech Awards Alexandra Justify",
    },
    body: JSON.stringify({
      model: OPENROUTER_JUSTIFY_MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      max_tokens: 8000,
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

async function callClaude(system: string, user: string): Promise<string> {
  if (useAnthropicByok()) {
    return callAnthropicDirect(system, user);
  }
  return callOpenRouterJustify(system, user);
}

function buildSystemPrompt(rubricMd: string): string {
  return `You are a committee-facing writer. Your job is to justify **pre-existing consensus scores** (medians from three independent jurors) for a political/civic technology project.

You must use ONLY the rubric below for definitions of D1–D8. Do not change the numeric scores — explain why those scores are plausible given the evidence.

For EVERY dimension D1 through D8 you must output exactly one of:
- cannot_assess: true, with a short reason (e.g. missing data), OR
- cannot_assess: false, with justification (1–3 sentences) AND evidence array with at least one item.

Each evidence item: url (string or null if only from dossier text), quote (short verbatim or clear paraphrase), source_type: primary | secondary | inferred.

Prefer primary sources (official site, repo, government text) over marketing fluff.

Output valid JSON only — no markdown fences, no preamble.

RUBRIC:
---
${rubricMd}
---

Required JSON shape:
{
  "dimensions": {
    "D1": { "cannot_assess": false, "justification": "...", "evidence": [ { "url": "https://...", "quote": "...", "source_type": "primary" } ] },
    "D2": { "cannot_assess": true, "reason": "..." },
    ... D3–D8 same pattern ...
  },
  "claude_notes": "optional — e.g. conflicts between dossier and page text"
}`;
}

function buildUserMessage(
  url: string,
  name: string | undefined,
  medianScores: Record<string, number>,
  composite: number,
  controversial: string[] | undefined,
  pageText: string,
  hadCache: boolean,
  enrichedBlob: string
): string {
  const pageSection = pageText
    ? `PAGE TEXT (${pageText.length} chars, from cached fetch):\n---\n${pageText}\n---`
    : hadCache
      ? "PAGE TEXT: cache entry existed but body was empty or errored."
      : "PAGE TEXT: not in cache.";

  return `Project URL: ${url}
${name ? `Name (from aggregate): ${name}\n` : ""}
CONSENSUS SCORES TO JUSTIFY (medians from 3 jurors — do not change these numbers):
median_composite: ${composite}
median_scores: ${JSON.stringify(medianScores)}
${controversial?.length ? `Dimensions with high inter-juror disagreement: ${controversial.join(", ")}\n` : ""}

${pageSection}

ENRICHED DOSSIER (committee JSON; may contain errors):
---
${enrichedBlob}
---

Write the JSON object with dimensions.D1 … dimensions.D8 as specified. Anchor your justifications to these exact median values.`;
}

function loadAggregate(): AggProject[] {
  if (!fs.existsSync(AGG_PATH)) {
    console.error(`Aggregate not found: ${AGG_PATH}\nRun: npm run alexandra-aggregate`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AGG_PATH, "utf-8")) as { projects?: AggProject[] };
  const projects = data.projects ?? [];
  if (projects.length === 0) {
    console.error("Aggregate has no projects.");
    process.exit(1);
  }
  return projects;
}

function sortTop(projects: AggProject[], n: number, singleUrl?: string): AggProject[] {
  if (singleUrl) {
    const p = projects.find((x) => x.url === singleUrl);
    if (!p) {
      console.error(`URL not in aggregate: ${singleUrl}`);
      process.exit(1);
    }
    return [p];
  }
  const sorted = [...projects].sort((a, b) => b.median_composite - a.median_composite);
  return sorted.slice(0, n);
}

function loadExistingOutput(): OutputFile | null {
  if (!fs.existsSync(resolvedOut)) return null;
  try {
    return JSON.parse(fs.readFileSync(resolvedOut, "utf-8")) as OutputFile;
  } catch {
    return null;
  }
}

async function main() {
  if (!fs.existsSync(RUBRIC_PATH)) {
    console.error(
      `Rubric not found: ${RUBRIC_PATH}\n` +
        `Restore docs/evaluation/alexandra-rubric.md (from the repo) or set ALEXANDRA_RUBRIC_PATH.`
    );
    process.exit(1);
  }

  if (!useAnthropicByok() && !process.env.OPENROUTER_API_KEY?.trim()) {
    console.error(
      "Set one of:\n" +
        "  export ANTHROPIC_API_KEY='sk-ant-...'   # BYOK — direct Anthropic API (recommended for justify)\n" +
        "  export ANTHROPIC_MODEL='claude-sonnet-4-20250514'   # optional; defaults shown\n" +
        "or:\n" +
        "  export OPENROUTER_API_KEY='sk-or-v1-...'   # uses OpenRouter credits\n" +
        "Then: npx tsx scripts/alexandra/alexandra-top10-justify.ts --top 3"
    );
    process.exit(1);
  }

  const rubricMd = fs.readFileSync(RUBRIC_PATH, "utf-8");
  const system = buildSystemPrompt(rubricMd);
  const projects = loadAggregate();
  const targets = sortTop(projects, TOP_N, SINGLE_URL);

  const previousOut = loadExistingOutput();
  let out: OutputFile =
    !FORCE && previousOut
      ? previousOut
      : {
          generated_at: new Date().toISOString(),
          model: justifyModelLabel(),
          aggregate_path: AGG_PATH,
          rubric_path: RUBRIC_PATH,
          note: "Per-dimension justifications for top projects by median_composite; Claude-only second pass.",
          projects: [],
        };

  if (FORCE) {
    out.projects = [];
    out.generated_at = new Date().toISOString();
  }

  const byUrl = new Map<string, ProjectJustification>(out.projects.map((p) => [p.url, p]));
  const db = openCache();
  const enrichedMap = loadEnrichedSnippets();

  console.log(`\nAlexandra top-${targets.length} justification (Claude only)`);
  console.log(
    `Provider: ${useAnthropicByok() ? "Anthropic API (BYOK)" : "OpenRouter"} | ${justifyModelLabel()}`
  );
  console.log(`Aggregate: ${AGG_PATH}`);
  console.log(`Output: ${resolvedOut}\n`);

  let rankBase = 0;
  const fullSorted = SINGLE_URL ? targets : [...projects].sort((a, b) => b.median_composite - a.median_composite);

  for (const p of targets) {
    rankBase = fullSorted.findIndex((x) => x.url === p.url) + 1;
    const existing = byUrl.get(p.url);
    if (existing && !existing.error && !FORCE) {
      console.log(`[skip] ${p.url} (already in output; use --force to redo)`);
      continue;
    }

    const { text, hadCache } = getCachedPageText(db, p.url);
    const enrichedBlob = enrichedForUrl(enrichedMap, p.url);
    const userMsg = buildUserMessage(
      p.url,
      p.name,
      p.median_scores,
      p.median_composite,
      p.controversial_dimensions,
      text,
      hadCache,
      enrichedBlob
    );

    process.stdout.write(`[${rankBase}] ${p.url} … `);
    try {
      const raw = await callClaude(system, userMsg);
      const parsed = parseJustifyResponse(raw);
      const row: ProjectJustification = {
        rank: rankBase,
        url: p.url,
        name: p.name,
        median_composite: p.median_composite,
        median_scores: { ...p.median_scores },
        controversial_dimensions: p.controversial_dimensions,
        dimensions: parsed.dimensions,
        claude_notes: parsed.claude_notes,
        model: justifyModelLabel(),
        generated_at: new Date().toISOString(),
      };
      byUrl.set(p.url, row);
      process.stdout.write("ok\n");
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      const row: ProjectJustification = {
        rank: rankBase,
        url: p.url,
        name: p.name,
        median_composite: p.median_composite,
        median_scores: { ...p.median_scores },
        controversial_dimensions: p.controversial_dimensions,
        model: justifyModelLabel(),
        generated_at: new Date().toISOString(),
        error: msg,
      };
      byUrl.set(p.url, row);
      process.stdout.write(`ERROR ${msg.slice(0, 200)}\n`);
    }

    out.projects = Array.from(byUrl.values()).sort((a, b) => a.rank - b.rank);
    out.generated_at = new Date().toISOString();
    fs.writeFileSync(resolvedOut, JSON.stringify(out, null, 2) + "\n");
  }

  db.close();
  console.log(`\nDone. Saved: ${resolvedOut}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exitCode = 1;
});
