/**
 * itn-a-deliberate.ts  v3
 *
 * Canonical entrypoint:
 *   npx tsx scripts/itn/itn-a-deliberate.ts
 *
 * score (relative, all projects together, including awards context bonuses) ->
 * multi-turn argument (real conversation, facilitator calls out evasions) ->
 * final ranking -> winner
 *
 * Awards context bonuses (-5 to +5 each):
 *   bonus_relevance:     how urgently timely is this in 2026?
 *   bonus_project:       specific concrete output vs general org?
 *   bonus_novelty:       new entrant vs established player?
 *
 * Effective score = ITN/A score (0-100) + sum of bonuses, clamped 0-100.
 * ITN/A score stays pure; bonuses are tracked separately throughout.
 *
 * Saves to deliberation.json after EVERY api call.
 * tail -f cache/deliberation.json to watch live.
 *
 * Usage:
 *   npx tsx scripts/itn/itn-a-deliberate.ts
 *   npx tsx scripts/itn/itn-a-deliberate.ts --top-conflicts 4
 *   npx tsx scripts/itn/itn-a-deliberate.ts --argument-rounds 3
 *   npx tsx scripts/itn/itn-a-deliberate.ts --min-greens 2
 *   npx tsx scripts/itn/itn-a-deliberate.ts --setup grok --min-greens 2
 *   npx tsx scripts/itn/itn-a-deliberate.ts --setup grok --shortlist-file cache/pilot-union-top100.json --min-greens 2
 *   npx tsx scripts/itn/itn-a-deliberate.ts --score-max-tokens 32000   # if ROUND 1 JSON is truncated
 */

import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const DEFAULT_MODEL = "x-ai/grok-4.1-fast";
const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";
const CACHE_DB_PATH = path.resolve("cache", "sites.sqlite");
const DOSSIER_DIR = path.resolve("data", "enriched");
const BODY_CHAR_LIMIT = 3000;

const args = process.argv.slice(2);
const MODEL = getArg("--model") ?? DEFAULT_MODEL;
const MODEL_POLITICAL = getArg("--model-political") ?? MODEL;
const MODEL_RELATIONAL = getArg("--model-relational") ?? MODEL;
const MODEL_EXPERIMENTAL = getArg("--model-experimental") ?? MODEL;
const AGENT_MODELS: Record<string, string> = {
  political: MODEL_POLITICAL,
  relational: MODEL_RELATIONAL,
  experimental: MODEL_EXPERIMENTAL,
};
const MIN_GREENS = parseInt(getArg("--min-greens") ?? "3", 10);
const TOP_CONFLICTS = parseInt(getArg("--top-conflicts") ?? "4", 10);
const ARGUMENT_ROUNDS = parseInt(getArg("--argument-rounds") ?? "3", 10);
const SETUP = getArg("--setup");
const SHORTLIST_FILE = getArg("--shortlist-file");
/** Output tokens for ROUND 1 relative scoring (63 projects × verbose JSON needs a large budget). */
const SCORE_MAX_TOKENS = parseInt(
  getArg("--score-max-tokens") ?? process.env.DELIB_SCORE_MAX_TOKENS ?? "20000",
  10
);

function getArg(f: string) { const i = args.indexOf(f); return i !== -1 ? args[i + 1] : undefined; }

const ASSESSMENTS_PATH = getArg("--assessments-file") ?? path.resolve("cache", SETUP ? `assessments-${SETUP}.json` : "assessments.json");
const DELIBERATION_PATH = getArg("--output-file") ?? path.resolve("cache", SETUP ? `deliberation-${SETUP}.json` : "deliberation.json");

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

function displayUrl(url: string): string {
  try {
    const u = new URL(url);
    const p = u.pathname.replace(/\/$/, "");
    return p ? u.hostname.replace(/^www\./, "") + p : u.hostname.replace(/^www\./, "");
  } catch { return url; }
}

// ---------------------------------------------------------------------------
// Dossier loading (same as eval script)
// ---------------------------------------------------------------------------

interface Dossier {
  url: string;
  name?: string;
  tagline?: string;
  project_type?: string;
  org_type?: string;
  issue_area?: string[] | string;
  founded_year?: number;
  decade_plus?: boolean;
  underdog_signal?: boolean;
  github_stars?: number;
  in_civictech_guide?: boolean;
  governance_model?: string;
  format?: string[] | string;
  political_relevance_summary?: string;
  communities_served?: string[] | string;
  geography?: string;
  policy_outcomes?: unknown;
  causation_strength?: string;
  funding_model?: string[] | string;
  known_funders?: string[] | string;
  open_source?: string;
  scraped?: { scraped_description?: string; dead_link?: boolean };
  [key: string]: unknown;
}

function normalizeUrlForMatch(url: string): string {
  try {
    const u = new URL(url.startsWith("http") ? url : "https://" + url);
    return (u.hostname.replace(/^www\./, "") + u.pathname).toLowerCase().replace(/\/$/, "");
  } catch {
    return url.toLowerCase().replace(/\/$/, "");
  }
}

let _dossierMap: Map<string, Dossier> | null = null;

function loadDossiers(): Map<string, Dossier> {
  if (_dossierMap) return _dossierMap;
  _dossierMap = new Map();
  if (!fs.existsSync(DOSSIER_DIR)) return _dossierMap;
  const files = fs.readdirSync(DOSSIER_DIR).filter(f => f.endsWith(".json"));
  for (const file of files) {
    try {
      const d: Dossier = JSON.parse(fs.readFileSync(path.join(DOSSIER_DIR, file), "utf-8"));
      if (d.url) {
        _dossierMap.set(d.url, d);
        _dossierMap.set(normalizeUrlForMatch(d.url), d);
      }
    } catch { /* skip */ }
  }
  return _dossierMap;
}

function getDossier(url: string): Dossier | null {
  const map = loadDossiers();
  return map.get(url) ?? map.get(normalizeUrlForMatch(url)) ?? null;
}

/** Enriched JSON often uses string | string[] for list-like fields (same as itn-a-eval). */
function listFieldToStrings(v: unknown): string[] {
  if (v == null) return [];
  if (Array.isArray(v)) return v.map(x => String(x)).filter(s => s.length);
  if (typeof v === "string") {
    const t = v.trim();
    return t ? [t] : [];
  }
  if (typeof v === "number" || typeof v === "boolean") return [String(v)];
  return [];
}

function formatDossierBrief(d: Dossier): string {
  const lines: string[] = [];
  if (d.name) lines.push(`Name: ${d.name}`);
  if (d.tagline) lines.push(`Tagline: ${d.tagline}`);
  if (d.project_type) lines.push(`Type: ${d.project_type} | Org: ${d.org_type ?? "?"}`);
  if (d.founded_year) lines.push(`Founded: ${d.founded_year}${d.decade_plus ? " (decade+)" : ""}`);
  if (d.governance_model) lines.push(`Governance: ${d.governance_model}`);
  const formatParts = listFieldToStrings(d.format);
  if (formatParts.length) lines.push(`Format: ${formatParts.join(", ")}`);
  if (d.geography) lines.push(`Geography: ${d.geography}`);
  if (d.open_source) lines.push(`Open source: ${d.open_source}`);
  if (d.github_stars !== undefined) lines.push(`GitHub stars: ${d.github_stars}`);
  if (d.in_civictech_guide !== undefined) lines.push(`In civictech guide: ${d.in_civictech_guide}`);
  if (d.underdog_signal !== undefined) lines.push(`Underdog signal: ${d.underdog_signal}`);
  const fundingParts = listFieldToStrings(d.funding_model);
  if (fundingParts.length) lines.push(`Funding: ${fundingParts.join(", ")}`);
  const funderParts = listFieldToStrings(d.known_funders);
  if (funderParts.length) lines.push(`Known funders: ${funderParts.join(", ")}`);
  if (d.political_relevance_summary) lines.push(`Political relevance: ${d.political_relevance_summary}`);
  if (d.scraped?.scraped_description) lines.push(`Description: ${d.scraped.scraped_description}`);
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// HTML -> readable text (SQLite fallback)
// ---------------------------------------------------------------------------

function extractReadableText(html: string): string {
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ");

  const mainMatch = text.match(/<main[\s\S]*?<\/main>/i)
    || text.match(/<article[\s\S]*?<\/article>/i);
  const working = mainMatch ? mainMatch[0] : text;

  const stripped = working
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#x27;/g, "'")
    .replace(/\s{3,}/g, "  ").trim();

  const lines = stripped.split(/\n|\r/);
  const seen = new Set();
  const deduped = lines.filter(line => {
    const key = line.trim().toLowerCase();
    if (key.length < 4 || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return deduped.join(" ").slice(0, BODY_CHAR_LIMIT);
}

function loadPageCache(): Map<string, string> {
  const cache = new Map<string, string>();
  if (!fs.existsSync(CACHE_DB_PATH)) return cache;
  const db = new Database(CACHE_DB_PATH, { readonly: true });
  try {
    const rows = db.prepare("SELECT url, body FROM pages WHERE body IS NOT NULL AND error IS NULL").all() as Array<{ url: string; body: string }>;
    for (const row of rows) {
      if (row.body) cache.set(row.url, extractReadableText(row.body));
    }
  } finally {
    db.close();
  }
  return cache;
}

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

interface DeliberationState {
  run_at: string;
  model: string;
  shortlist: Array<{ url: string; display: string }>;
  scores: Record<string, AgentScoreCard>;
  initial_rankings: RankedProject[];
  conflicts: ConflictEntry[];
  argument_threads: Record<string, ArgumentThread>;
  final_scores: FinalScore[];
  winner: WinnerDecision | null;
  status: string;
}

interface AgentScoreCard {
  agent: string;
  reasoning: string;
  projects: ProjectScore[];
}

interface ProjectScore {
  url: string;
  display: string;
  rank: number;
  score: number;             // ITN/A score 0-100
  systemic: number;
  experimentation: number;
  fractality: number;
  non_identification: number;
  // awards context bonuses — each -5 to +5
  bonus_relevance: number;
  bonus_project: number;
  bonus_novelty: number;
  one_line: string;
  why_above_neighbour: string;
}

interface RankedProject {
  url: string;
  display: string;
  aggregate_score: number;       // average of ITN/A scores
  aggregate_effective: number;   // average of effective scores (ITN/A + bonuses, clamped)
  agent_scores: Record<string, number>;
  agent_effective: Record<string, number>;
  agent_ranks: Record<string, number>;
  agent_bonuses: Record<string, { relevance: number; project: number; novelty: number; total: number }>;
  rank_spread: number;
  score_stddev: number;
}

interface ConflictEntry {
  url: string;
  display: string;
  score_stddev: number;
  rank_spread: number;
  agent_scores: Record<string, number>;
  agent_effective: Record<string, number>;
  agent_ranks: Record<string, number>;
  conflict_summary: string;
}

interface ArgumentTurn {
  agent: string;
  turn: number;
  text: string;
  revised_score: number | null;
  revision_reason: string | null;
  claims_made: string[];
  claims_rejected: string[];
  raw_prose?: string;
}

interface FacilitatorNote {
  after_turn: number;
  note: string;
  directed_at: string[];
}

interface ArgumentThread {
  url: string;
  display: string;
  initial_scores: Record<string, number>;
  initial_effective: Record<string, number>;
  initial_ranks: Record<string, number>;
  turns: ArgumentTurn[];
  facilitator_notes: FacilitatorNote[];
  final_scores: Record<string, number>;
  resolution: string;
}

interface FinalScore {
  url: string;
  display: string;
  aggregate: number;
  aggregate_effective: number;
  agent_scores: Record<string, number>;
  agent_effective: Record<string, number>;
  agent_bonuses: Record<string, { relevance: number; project: number; novelty: number; total: number }>;
  agent_ranks: Record<string, number>;
  was_contested: boolean;
  score_shift: number;
}

interface WinnerDecision {
  url: string;
  display: string;
  score: number;
  confidence: number;
  case_for: string;
  case_against: string;
  decided_against: Array<{ url: string; display: string; why_not: string }>;
  constellation: Array<{ url: string; display: string; role: string }>;
  portfolio_argument: string;
}

// ---------------------------------------------------------------------------
// Persistence
// ---------------------------------------------------------------------------

let state: DeliberationState;

function saveState() {
  fs.writeFileSync(DELIBERATION_PATH, JSON.stringify(state, null, 2) + "\n");
}

function initState(shortlist: Array<{ url: string; display: string }>): void {
  state = {
    run_at: new Date().toISOString(),
    model: MODEL,
    shortlist,
    scores: {},
    initial_rankings: [],
    conflicts: [],
    argument_threads: {},
    final_scores: [],
    winner: null,
    status: "scoring"
  };
  saveState();
}

// ---------------------------------------------------------------------------
// Data loading
// ---------------------------------------------------------------------------

function loadAssessments() {
  if (!fs.existsSync(ASSESSMENTS_PATH)) { console.error("assessments.json not found"); process.exit(1); }
  return JSON.parse(fs.readFileSync(ASSESSMENTS_PATH, "utf-8"));
}

function getGreenCount(a: any): number {
  return ["political", "relational", "experimental"].filter(k =>
    a[k] && !a[k].error && a[k].bucket === "green"
  ).length;
}

function buildShortlist(assessments: any) {
  return Object.entries(assessments)
    .map(([url, a]: [string, any]) => ({ url, assessment: a, greenCount: getGreenCount(a) }))
    .filter(({ greenCount }) => greenCount >= MIN_GREENS)
    .sort((a, b) => b.greenCount - a.greenCount);
}

function loadShortlistUrlSet(filePath: string): Set<string> {
  const raw = fs.readFileSync(filePath, "utf-8").trim();
  let urls: string[] = [];
  if (raw.startsWith("[")) {
    try { urls = JSON.parse(raw) as string[]; }
    catch { urls = raw.split(/\n/).map(s => s.trim()).filter(Boolean); }
  } else {
    urls = raw.split(/\n/).map(s => s.trim()).filter(Boolean);
  }
  const set = new Set<string>();
  for (const u of urls) {
    set.add(u);
    set.add(normalizeUrlForMatch(u));
  }
  return set;
}

function summariseProject(url: string, assessment: any, dossier: Dossier | null, pageText?: string): string {
  const lines = [`[${displayUrl(url)}]  full url: ${url}`];

  if (dossier) {
    lines.push(`DOSSIER:\n${formatDossierBrief(dossier)}`);
  } else if (pageText) {
    lines.push(`PAGE CONTENT (${pageText.length} chars):\n---\n${pageText}\n---`);
  } else {
    lines.push(`(no dossier or cached content)`);
  }

  lines.push(`PRIOR EVALUATION:`);
  for (const agentId of ["political", "relational", "experimental"]) {
    const a = assessment[agentId];
    if (!a || a.error) continue;
    lines.push(`  ${agentId}: bucket=${a.bucket} | felt="${a.felt_sense}" | key="${a.key_read}"`);
    lines.push(`    systemic: ${a.lenses?.systemic?.spectrum_position}`);
    lines.push(`    exp: ${a.lenses?.experimentation?.spectrum_position}`);
    lines.push(`    frac: ${a.lenses?.fractality?.spectrum_position}`);
    lines.push(`    non_id: ${a.lenses?.non_identification?.spectrum_position}`);
    if (a.awards_context) {
      lines.push(`    awards.relevance_2026: ${a.awards_context.relevance_2026}`);
      lines.push(`    awards.project_specificity: ${a.awards_context.project_specificity}`);
      lines.push(`    awards.novelty: ${a.awards_context.novelty}`);
    }
  }
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// OpenRouter
// ---------------------------------------------------------------------------

async function call(system: string, user: string, maxTokens = 3000, model = MODEL): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");
  const resp = await fetch(OPENROUTER_API, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
      "X-Title": "Politech ITN/A Deliberation"
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: system }, { role: "user", content: user }],
      max_tokens: maxTokens,
      temperature: 0.55
    })
  });
  if (!resp.ok) throw new Error(`OpenRouter ${resp.status}: ${await resp.text()}`);
  const data: any = await resp.json();
  if (data.error) throw new Error(data.error.message);
  return data.choices?.[0]?.message?.content ?? "";
}

async function callJson<T>(system: string, user: string, maxTokens = 1200, model = MODEL): Promise<T> {
  const raw = await call(system, user, maxTokens, model);
  try {
    return normalizeArgumentTurn(parseJson<T>(raw)) as T;
  } catch (_) {
    process.stdout.write(`[prose rescued] `);
    const retry = await call(
      system,
      `Your previous response was not valid JSON. You MUST respond with a JSON object only — no prose, no markdown, no explanation.\n\nYour previous response was:\n${raw.slice(0, 400)}\n\nNow respond with valid JSON only.`,
      maxTokens,
      model
    );
    const turn = normalizeArgumentTurn(parseJson<T>(retry)) as any;
    turn.raw_prose = raw;
    return turn as T;
  }
}

function toArray(v: any): string[] {
  if (Array.isArray(v)) return v;
  if (typeof v === "string" && v.length > 0) return [v];
  return [];
}

function normalizeArgumentTurn(turn: any): ArgumentTurn {
  turn.claims_made = toArray(turn.claims_made);
  turn.claims_rejected = toArray(turn.claims_rejected);
  return turn as ArgumentTurn;
}

function parseJson<T>(raw: string): T {
  const clean = raw.replace(/```json\n?|```\n?/g, "").trim();
  const s = clean.indexOf("{"); const e = clean.lastIndexOf("}");
  if (s === -1 || e === -1) throw new Error("No JSON object found");
  const candidate = clean.slice(s, e + 1);
  try { return JSON.parse(candidate) as T; } catch (_) { }
  const stripped = candidate
    .replace(/,\s*"[^"]*"\s*:\s*"[^"]*$/, "")
    .replace(/,\s*"[^"]*"\s*:\s*$/, "")
    .replace(/,\s*$/, "");
  for (let n = 10; n >= 1; n--) {
    try { return JSON.parse(stripped + "}".repeat(n)) as T; } catch (_) { }
  }
  throw new Error(`JSON parse failed. Preview: ${raw.slice(0, 300)}`);
}

function clampBonus(v: number): number {
  return Math.max(-5, Math.min(5, Math.round(v)));
}

function effectiveScore(score: number, bonusTotal: number): number {
  return Math.max(0, Math.min(100, score + bonusTotal));
}

// ---------------------------------------------------------------------------
// ROUND 1: Scoring
// ---------------------------------------------------------------------------

const SCORE_SYSTEM = (agentId: string): string => {
  const lens: Record<string, string> = {
    political: "power — who it serves, what structures it challenges or reinforces",
    relational: "care and human nourishment — what it sustains or extracts",
    experimental: "epistemics — can it be wrong? does it genuinely learn?"
  };
  return `You are the ${agentId.toUpperCase()} evaluator at the Political Technology Awards deliberation table.

You are looking at the full shortlist of projects — all at once. Your job is to rank and score them RELATIVE TO EACH OTHER through your lens of ${lens[agentId]}.

ITN/A SCORING (0-25 each lens, 0-100 total):
- SYSTEMIC IMPACT: 0 = pure symptom-treatment; 25 = directly rewires power/care/knowledge structures
- EXPERIMENTATION: 0 = locked gospel, no feedback loops; 25 = genuine learning culture, falsifiable, updates
- FRACTALITY: 0 = extracts from everyone it touches; 25 = nourishes all scales simultaneously
- NON-IDENTIFICATION: 0 = founder ego fused, cannot pivot; 25 = genuine stewardship, held lightly

AWARDS CONTEXT BONUSES — assign three bonus scores for each project, each from -5 to +5:

bonus_relevance (-5 to +5): How urgently does this matter RIGHT NOW in 2026?
  -5 = dated, addresses a problem that has been superseded or is no longer acute
   0 = relevant but not particularly timely
  +5 = directly addresses what is most urgent in the current political moment

bonus_project (-5 to +5): Is this a specific concrete output or a general org presence?
  -5 = purely an organisation or network with no specific deliverable to point to
   0 = hybrid — org with some specific outputs
  +5 = a specific, concrete, pointed tool / dataset / protocol / methodology / piece of research

bonus_novelty (-5 to +5): Is this a new entrant or established player?
  -5 = decade-old established player already widely recognised and resourced
   0 = mid-stage, some recognition
  +5 = genuinely new entrant bringing a fresh approach, needs the spotlight

Use the dossier data (founded_year, decade_plus, underdog_signal, governance_model, format, in_civictech_guide) and the prior awards_context assessments to calibrate. Do not give +5 novelty to something founded in 2005.

The effective score for ranking is: ITN/A score + bonus_relevance + bonus_project + bonus_novelty (clamped 0-100). Rank by effective score.

CALIBRATION: Your top project should score noticeably higher than your 5th. If your scores cluster within 10 points, you are not discriminating.

For each project:
- rank (1 = your top pick by effective score)
- score (ITN/A 0-100)
- systemic, experimentation, fractality, non_identification (each 0-25)
- bonus_relevance, bonus_project, bonus_novelty (each -5 to +5)
- one_line: the single most decisive thing you see from your lens
- why_above_neighbour: one sentence why this ranks above the one immediately below

Also: reasoning — what pattern do you see across this whole set?

VERBOSITY (required so the JSON is not truncated):
- reasoning: at most ~220 characters (2 tight sentences)
- one_line: at most 90 characters per project
- why_above_neighbour: at most 70 characters per project
If you write long prose, the response will be cut off and fail.

Respond ONLY with valid JSON:
{
  "agent": "${agentId}",
  "reasoning": "your read of the whole field in 2-3 sentences",
  "projects": [
    {
      "url": "EXACT URL STRING",
      "display": "...",
      "rank": 1,
      "score": 0-100,
      "systemic": 0-25,
      "experimentation": 0-25,
      "fractality": 0-25,
      "non_identification": 0-25,
      "bonus_relevance": -5 to 5,
      "bonus_project": -5 to 5,
      "bonus_novelty": -5 to 5,
      "one_line": "...",
      "why_above_neighbour": "..."
    }
  ]
}

Sort by rank (1 first). Include ALL projects. Use EXACT URL strings.`;
};

// ---------------------------------------------------------------------------
// ROUND 2: Multi-turn argument
// ---------------------------------------------------------------------------

function buildTurn1Prompt(agentId: string, url: string, thread: ArgumentThread, allScores: Record<string, AgentScoreCard>): string {
  const others = Object.entries(allScores)
    .filter(([id]) => id !== agentId)
    .map(([id, sc]) => {
      const p = sc.projects.find(p => p.url === url);
      if (!p) return "";
      const bonusTotal = (p.bonus_relevance ?? 0) + (p.bonus_project ?? 0) + (p.bonus_novelty ?? 0);
      const eff = effectiveScore(p.score, bonusTotal);
      return `${id.toUpperCase()} ranked it #${p.rank} (ITN/A:${p.score} + bonuses:${bonusTotal > 0 ? "+" : ""}${bonusTotal} = ${eff} effective): "${p.one_line}"
    bonuses: relevance=${p.bonus_relevance ?? 0} project=${p.bonus_project ?? 0} novelty=${p.bonus_novelty ?? 0}`;
    }).filter(Boolean).join("\n");

  const mine = allScores[agentId]?.projects.find(p => p.url === url);
  const myBonusTotal = ((mine?.bonus_relevance ?? 0) + (mine?.bonus_project ?? 0) + (mine?.bonus_novelty ?? 0));
  const myEffective = mine ? effectiveScore(mine.score, myBonusTotal) : "?";

  return `You are ${agentId.toUpperCase()} at the deliberation table. The project under discussion is: ${thread.display}

YOUR SCORE: ITN/A ${mine?.score ?? "?"}/100 | bonuses: relevance=${mine?.bonus_relevance ?? 0} project=${mine?.bonus_project ?? 0} novelty=${mine?.bonus_novelty ?? 0} | effective: ${myEffective}/100 | rank #${mine?.rank ?? "?"}
  systemic: ${mine?.systemic} | experimentation: ${mine?.experimentation} | fractality: ${mine?.fractality} | non_id: ${mine?.non_identification}
  "${mine?.one_line}"

HOW THE OTHER AGENTS SCORED IT:
${others}

TURN 1: State your position.

Be specific. Name what you see from your lens that others are probably missing. Name the single most important disagreement — including on the awards context bonuses if relevant. What are they wrong about, specifically?

Rules:
- You must make at least 2 specific, falsifiable claims about this project
- You must identify at least 1 specific thing the other agents are getting wrong
- You may NOT just say "I see it differently" — say HOW and WHY

Respond ONLY with valid JSON:
{
  "agent": "${agentId}",
  "turn": 1,
  "text": "your full argument in prose",
  "revised_score": null,
  "revision_reason": null,
  "claims_made": ["specific claim 1", "specific claim 2"],
  "claims_rejected": ["specific claim from another agent you're pushing back on"]
}`;
}

function buildSubsequentTurnPrompt(
  agentId: string,
  url: string,
  thread: ArgumentThread,
  turnNumber: number,
  facilitatorNote: string | null
): string {
  const previousTurns = thread.turns
    .map(t => `TURN ${t.turn} — ${t.agent.toUpperCase()}:\n${t.text}\nClaims: ${t.claims_made?.join("; ")}\nRejecting: ${t.claims_rejected?.join("; ")}`)
    .join("\n\n---\n\n");

  const myTurns = thread.turns.filter(t => t.agent === agentId);
  const myLastTurn = myTurns.length ? myTurns[myTurns.length - 1] : undefined;
  const currentScore = myLastTurn?.revised_score ?? thread.initial_scores[agentId];

  const facilitator = facilitatorNote ? `\nFACILITATOR NOTE: ${facilitatorNote}\n` : "";

  return `You are ${agentId.toUpperCase()} at the deliberation table. Project: ${thread.display}
Your current score: ${currentScore}/100
${facilitator}
CONVERSATION SO FAR:
${previousTurns}

TURN ${turnNumber}: Respond to what was just said.

You must:
1. Pick the strongest claim made against your position in the last round and either:
   a) CONCEDE it (explain what you got wrong and why this changes your score), or
   b) REBUT it (quote the exact claim, explain specifically why it's wrong)
   "I disagree" is NOT a rebuttal. You must engage with the substance.

2. Advance the argument — add something new, don't just repeat yourself.

3. If the argument has genuinely shifted your view, revise your score. If not, hold it — but be explicit about WHAT would change your mind.

${turnNumber === ARGUMENT_ROUNDS ? "This is the FINAL TURN. Make your definitive case. State your final score." : ""}

Respond ONLY with valid JSON:
{
  "agent": "${agentId}",
  "turn": ${turnNumber},
  "text": "your response in prose",
  "revised_score": null or a number if you've changed your position,
  "revision_reason": null or explanation of what shifted,
  "claims_made": ["new claim this turn"],
  "claims_rejected": ["specific claim you're rebutting, quoted"]
}`;
}

function buildFacilitatorPrompt(thread: ArgumentThread, turnJustCompleted: number): string {
  const turns = thread.turns.filter(t => t.turn === turnJustCompleted);
  const turnTexts = turns.map(t => `${t.agent.toUpperCase()}: ${t.text}`).join("\n\n");

  return `You are the facilitator of a political technology evaluation deliberation. Three agents (political, relational, experimental) are arguing about: ${thread.display}

TURN ${turnJustCompleted} just happened:
${turnTexts}

Your job: identify what's actually happening in this argument. Is anyone:
- Dodging the other agents' specific claims without engaging?
- Repeating themselves without advancing the argument?
- Making a claim that goes uncontested but shouldn't?
- Talking past each other (using the same word to mean different things)?
- Disputing awards context bonuses (relevance, project specificity, novelty) without engaging with the dossier evidence?

Write a short, direct facilitator note for the next round. Be specific. Call out the evasion.

If the argument is productive, say so briefly and suggest what the most important remaining question is.

Respond with plain text, 2-4 sentences. No JSON needed.`;
}

// ---------------------------------------------------------------------------
// ROUND 3: Final decision
// ---------------------------------------------------------------------------

const WINNER_SYSTEM = `You are the facilitator making the final call after the deliberation. You have final scores, effective scores (with awards context bonuses), rank-orderings from three agent lenses, and a full record of what was argued and what changed.

Your job: name a winner and explain it honestly.
- Make a genuine case for the winner (not just "it scored highest")
- Acknowledge the strongest case AGAINST the winner
- Explain what was decided against and why
- Identify a constellation of 3-5 projects that together form a portfolio
- Rate your confidence (0-100) in this choice

The winner should be defensible as "the project that most fully embodies what political technology should be doing in 2026" — most alive, necessary, and timely. Not the safest or most famous.

Respond ONLY with valid JSON:
{
  "url": "exact url",
  "display": "...",
  "score": 0,
  "confidence": 0-100,
  "case_for": "genuine 2-3 sentence case",
  "case_against": "the strongest objection to this choice",
  "decided_against": [
    {"url": "...", "display": "...", "why_not": "specific reason"}
  ],
  "constellation": [
    {"url": "...", "display": "...", "role": "what this contributes that the winner doesn't"}
  ],
  "portfolio_argument": "what this constellation does together"
}`;

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

function stddev(nums: number[]): number {
  if (nums.length < 2) return 0;
  const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
  return Math.sqrt(nums.reduce((a, b) => a + (b - mean) ** 2, 0) / nums.length);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\nITN/A Deliberation v3 — relative scoring + awards bonuses + real argument + winner`);
  const isSpecialist = MODEL_POLITICAL !== MODEL || MODEL_RELATIONAL !== MODEL || MODEL_EXPERIMENTAL !== MODEL;
  if (isSpecialist) {
    console.log(`Models: political=${MODEL_POLITICAL} | relational=${MODEL_RELATIONAL} | experimental=${MODEL_EXPERIMENTAL}`);
  } else {
    console.log(`Model: ${MODEL}`);
  }
  console.log(`min-greens: ${MIN_GREENS} | conflicts: ${TOP_CONFLICTS} | argument rounds: ${ARGUMENT_ROUNDS}`);
  console.log(`score max_tokens: ${SCORE_MAX_TOKENS} (--score-max-tokens or DELIB_SCORE_MAX_TOKENS; raise if ROUND 1 JSON truncates)`);
  if (SETUP) console.log(`Setup: ${SETUP} -> ${ASSESSMENTS_PATH} -> ${DELIBERATION_PATH}`);
  if (SHORTLIST_FILE) console.log(`Shortlist file: ${SHORTLIST_FILE}`);
  console.log();

  if (!process.env.OPENROUTER_API_KEY) { console.error("OPENROUTER_API_KEY not set"); process.exit(1); }

  const assessments = loadAssessments();
  let entries = buildShortlist(assessments);

  if (SHORTLIST_FILE) {
    if (!fs.existsSync(SHORTLIST_FILE)) { console.error(`Shortlist file not found: ${SHORTLIST_FILE}`); process.exit(1); }
    const urlSet = loadShortlistUrlSet(SHORTLIST_FILE);
    const before = entries.length;
    entries = entries.filter(e => urlSet.has(e.url) || urlSet.has(normalizeUrlForMatch(e.url)));
    console.log(`Shortlist filter: ${before} -> ${entries.length} (union n >=min-greens)\n`);
  }

  if (entries.length === 0) { console.error(`No projects with ${MIN_GREENS}+ green votes.`); process.exit(1); }

  // Load content sources
  const dossierMap = loadDossiers();
  const pageCache = loadPageCache();
  console.log(`Dossiers: ${Math.floor(dossierMap.size / 2)} | Page cache: ${pageCache.size} entries\n`);

  const shortlist = entries.map(({ url }) => ({ url, display: displayUrl(url) }));
  console.log(`Shortlist: ${shortlist.length} projects\n`);
  shortlist.forEach(s => console.log(`  ${s.display}`));
  console.log();

  initState(shortlist);

  const summaries = entries
    .map(({ url, assessment }) => summariseProject(url, assessment, getDossier(url), pageCache.get(url)))
    .join("\n\n");

  const urlList = entries.map(({ url }) => url).join("\n");
  const scoreUserBase = `Score and rank all ${shortlist.length} projects relative to each other.\n\nAll project summaries:\n\n${summaries}\n\nExact URL strings to use as keys:\n${urlList}`;

  const scoreAttempts = [
    { tag: "", maxTok: SCORE_MAX_TOKENS, extra: "" },
    {
      tag: "retry (compact)… ",
      maxTok: Math.min(Math.max(SCORE_MAX_TOKENS * 2, 12000), 32768),
      extra: `\n\nYour previous reply was likely TRUNCATED (invalid JSON). Respond again with the SAME schema. STRICT limits: reasoning ≤200 characters; each one_line ≤85 characters; each why_above_neighbour ≤65 characters. Include ALL ${shortlist.length} projects. JSON only, no markdown.`,
    },
    {
      tag: "retry (minimal prose)… ",
      maxTok: Math.min(Math.max(SCORE_MAX_TOKENS * 2, 12000), 32768),
      extra: `\n\nULTRA-COMPACT: reasoning ≤120 characters. one_line ≤55 characters. why_above_neighbour ≤45 characters. Every project required (${shortlist.length}). Valid JSON only.`,
    },
  ];

  // ─────────────────────────────────────────────────
  // ROUND 1: SCORING
  // ─────────────────────────────────────────────────
  console.log("ROUND 1 — RELATIVE SCORING (ITN/A + awards context bonuses)\n");
  state.status = "scoring";
  saveState();

  const agentScores: Record<string, AgentScoreCard> = {};

  for (const agentId of ["political", "relational", "experimental"]) {
    process.stdout.write(`  ${agentId}... `);
    let lastErr: unknown = null;
    let succeeded = false;
    for (let ai = 0; ai < scoreAttempts.length; ai++) {
      const { tag, maxTok, extra } = scoreAttempts[ai];
      if (tag) process.stdout.write(tag);
      try {
        const raw = await call(SCORE_SYSTEM(agentId), scoreUserBase + extra, maxTok, AGENT_MODELS[agentId]);
        const result = parseJson<AgentScoreCard>(raw);
        if (!Array.isArray(result.projects)) throw new Error("Response missing projects array");
        if (result.projects.length < shortlist.length) {
          throw new Error(`Incomplete: got ${result.projects.length} projects, need ${shortlist.length}`);
        }
        for (const p of result.projects) {
          p.bonus_relevance = clampBonus(p.bonus_relevance ?? 0);
          p.bonus_project = clampBonus(p.bonus_project ?? 0);
          p.bonus_novelty = clampBonus(p.bonus_novelty ?? 0);
        }
        agentScores[agentId] = result;
        state.scores[agentId] = result;
        saveState();
        const sortedByRank = [...result.projects].sort((a, b) => (a.rank ?? 999) - (b.rank ?? 999));
        const top3 = sortedByRank.slice(0, 3).map(p => p.display).join(", ");
        process.stdout.write(`done — top 3: ${top3}\n`);
        process.stdout.write(`  reasoning: "${(result.reasoning ?? "").slice(0, 100)}..."\n`);
        succeeded = true;
        break;
      } catch (err) {
        lastErr = err;
        await sleep(600);
      }
    }
    if (!succeeded) console.error(`\n  ERROR: ${lastErr}`);
    await sleep(800);
  }

  // Build initial rankings
  const initialRankings: RankedProject[] = shortlist.map(({ url, display }) => {
    const agentScoreMap: Record<string, number> = {};
    const agentEffectiveMap: Record<string, number> = {};
    const agentRankMap: Record<string, number> = {};
    const agentBonusMap: Record<string, { relevance: number; project: number; novelty: number; total: number }> = {};

    for (const [id, sc] of Object.entries(agentScores)) {
      const p = sc.projects.find(p => p.url === url);
      if (p) {
        agentScoreMap[id] = p.score;
        agentRankMap[id] = p.rank;
        const bonusTotal = (p.bonus_relevance ?? 0) + (p.bonus_project ?? 0) + (p.bonus_novelty ?? 0);
        agentBonusMap[id] = { relevance: p.bonus_relevance ?? 0, project: p.bonus_project ?? 0, novelty: p.bonus_novelty ?? 0, total: bonusTotal };
        agentEffectiveMap[id] = effectiveScore(p.score, bonusTotal);
      }
    }

    const scores = Object.values(agentScoreMap);
    const effScores = Object.values(agentEffectiveMap);
    const ranks = Object.values(agentRankMap);

    return {
      url, display,
      aggregate_score: scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
      aggregate_effective: effScores.length ? Math.round(effScores.reduce((a, b) => a + b, 0) / effScores.length) : 0,
      agent_scores: agentScoreMap,
      agent_effective: agentEffectiveMap,
      agent_ranks: agentRankMap,
      agent_bonuses: agentBonusMap,
      rank_spread: ranks.length ? Math.max(...ranks) - Math.min(...ranks) : 0,
      score_stddev: Math.round(stddev(effScores) * 10) / 10
    };
  }).sort((a, b) => b.aggregate_effective - a.aggregate_effective);

  state.initial_rankings = initialRankings;
  saveState();

  console.log("\n  Initial rankings (effective score = ITN/A + awards bonuses):");
  initialRankings.slice(0, 10).forEach(({ display, aggregate_score, aggregate_effective, agent_effective, agent_bonuses, agent_ranks }, i) => {
    const effScores = Object.entries(agent_effective).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ");
    const bonusSummary = Object.entries(agent_bonuses).map(([id, b]) => `${id.slice(0, 3)}:${b.total >= 0 ? "+" : ""}${b.total}`).join(" ");
    const ranks = Object.entries(agent_ranks).map(([id, r]) => `${id.slice(0, 3)}:#${r}`).join(" ");
    console.log(`  ${String(i + 1).padStart(2)}. ${display.padEnd(45)} ${aggregate_effective} eff (ITN/A:${aggregate_score})  [${effScores}]  bonuses:[${bonusSummary}]  ranks:[${ranks}]`);
  });

  // Find conflicts by rank spread on effective scores
  const conflicts: ConflictEntry[] = initialRankings
    .map(r => ({
      url: r.url,
      display: r.display,
      score_stddev: r.score_stddev,
      rank_spread: r.rank_spread,
      agent_scores: r.agent_scores,
      agent_effective: r.agent_effective,
      agent_ranks: r.agent_ranks,
      conflict_summary: `rank spread: ${r.rank_spread} | eff σ: ${r.score_stddev}`
    }))
    .sort((a, b) => b.rank_spread - a.rank_spread || b.score_stddev - a.score_stddev)
    .slice(0, TOP_CONFLICTS);

  state.conflicts = conflicts;
  saveState();

  console.log(`\n  Top ${conflicts.length} conflicts (biggest disagreement on ranking):`);
  conflicts.forEach(c => {
    const ranks = Object.entries(c.agent_ranks).map(([id, r]) => `${id.slice(0, 3)}:#${r}`).join(" ");
    const effs = Object.entries(c.agent_effective).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ");
    console.log(`    ${c.display.padEnd(45)} spread:${c.rank_spread}  [${ranks}]  eff:[${effs}]`);
  });

  // ─────────────────────────────────────────────────
  // ROUND 2: ARGUMENT
  // ─────────────────────────────────────────────────
  console.log(`\nROUND 2 — ARGUMENT (${ARGUMENT_ROUNDS} turns per conflict)\n`);
  state.status = "arguing";
  saveState();

  for (const conflict of conflicts) {
    const { url, display } = conflict;
    console.log(`\n  ==== ${display} ====`);
    console.log(`  rank spread: ${conflict.rank_spread} | eff σ: ${conflict.score_stddev}`);

    const thread: ArgumentThread = {
      url,
      display,
      initial_scores: conflict.agent_scores,
      initial_effective: conflict.agent_effective,
      initial_ranks: conflict.agent_ranks,
      turns: [],
      facilitator_notes: [],
      final_scores: { ...conflict.agent_scores },
      resolution: ""
    };

    state.argument_threads[url] = thread;
    saveState();

    console.log(`\n  TURN 1 — opening positions`);
    for (const agentId of ["political", "relational", "experimental"]) {
      process.stdout.write(`    ${agentId}... `);
      try {
        const prompt = buildTurn1Prompt(agentId, url, thread, agentScores);
        const turn = await callJson<ArgumentTurn>("You are in a deliberation argument. Be specific, direct, willing to disagree. Engage with what others actually said.", prompt, 1200, AGENT_MODELS[agentId]);
        turn.turn = 1;
        thread.turns.push(turn);
        state.argument_threads[url] = thread;
        saveState();
        console.log(`done`);
        process.stdout.write(`      claims: ${turn.claims_made?.slice(0, 2).map(c => `"${c.slice(0, 60)}"`).join(" | ")}\n`);
      } catch (err) {
        console.error(`\n    ERROR: ${err}`);
      }
      await sleep(600);
    }

    for (let turnNum = 2; turnNum <= ARGUMENT_ROUNDS; turnNum++) {
      console.log(`\n  FACILITATOR reading turn ${turnNum - 1}...`);
      let facilitatorNote: string | null = null;
      try {
        facilitatorNote = await call(
          "You are a sharp, experienced facilitator. Read the argument and identify evasions, productive tensions, and unanswered questions. Be direct.",
          buildFacilitatorPrompt(thread, turnNum - 1),
          400
        );
        const facEntry: FacilitatorNote = {
          after_turn: turnNum - 1,
          note: facilitatorNote,
          directed_at: ["political", "relational", "experimental"]
        };
        thread.facilitator_notes.push(facEntry);
        state.argument_threads[url] = thread;
        saveState();
        console.log(`  -> ${facilitatorNote?.slice(0, 120)}...`);
      } catch (err) {
        console.error(`  FACILITATOR ERROR: ${err}`);
      }
      await sleep(500);

      console.log(`\n  TURN ${turnNum} — responses`);
      for (const agentId of ["political", "relational", "experimental"]) {
        process.stdout.write(`    ${agentId}... `);
        try {
          const prompt = buildSubsequentTurnPrompt(agentId, url, thread, turnNum, facilitatorNote);
          const turn = await callJson<ArgumentTurn>("You are in a deliberation argument. You MUST engage with specific claims made against you. No evasion.", prompt, 1200, AGENT_MODELS[agentId]);
          turn.turn = turnNum;
          thread.turns.push(turn);

          if (turn.revised_score !== null && turn.revised_score !== undefined) {
            thread.final_scores[agentId] = turn.revised_score;
            process.stdout.write(`revised -> ${turn.revised_score} (${turn.revision_reason?.slice(0, 60)})\n`);
          } else {
            process.stdout.write(`held at ${thread.final_scores[agentId]}\n`);
          }

          state.argument_threads[url] = thread;
          saveState();
        } catch (err) {
          console.error(`\n    ERROR: ${err}`);
        }
        await sleep(600);
      }
    }

    process.stdout.write(`\n  RESOLUTION... `);
    try {
      const allTurns = thread.turns.map(t => `${t.agent.toUpperCase()} turn ${t.turn}: ${t.text}`).join("\n\n");
      const res = await call(
        "Summarize what this argument actually revealed about this project. What genuine insight emerged from the disagreement? 2-3 sentences.",
        `Project: ${display}\n\nFull argument:\n${allTurns}`,
        300
      );
      thread.resolution = res;
      state.argument_threads[url] = thread;
      saveState();
      console.log(res?.slice(0, 100) + "...");
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  }

  // ─────────────────────────────────────────────────
  // Compute final scores
  // ─────────────────────────────────────────────────
  const finalScores: FinalScore[] = initialRankings.map(r => {
    const thread = state.argument_threads[r.url];
    const finalAgentScores = thread ? thread.final_scores : r.agent_scores;

    // Recompute effective scores using final ITN/A scores + original bonuses
    const finalEffective: Record<string, number> = {};
    for (const [id, score] of Object.entries(finalAgentScores)) {
      const bonusTotal = r.agent_bonuses[id]?.total ?? 0;
      finalEffective[id] = effectiveScore(score, bonusTotal);
    }

    const effVals = Object.values(finalEffective);
    const origEffVals = Object.values(r.agent_effective);
    const agg = effVals.length ? Math.round(effVals.reduce((a, b) => a + b, 0) / effVals.length) : 0;
    const origAgg = origEffVals.length ? origEffVals.reduce((a, b) => a + b, 0) / origEffVals.length : 0;
    const itnVals = Object.values(finalAgentScores);
    const itnAgg = itnVals.length ? Math.round(itnVals.reduce((a, b) => a + b, 0) / itnVals.length) : 0;

    return {
      url: r.url,
      display: r.display,
      aggregate: itnAgg,
      aggregate_effective: agg,
      agent_scores: finalAgentScores,
      agent_effective: finalEffective,
      agent_bonuses: r.agent_bonuses,
      agent_ranks: r.agent_ranks,
      was_contested: !!thread,
      score_shift: Math.round(agg - origAgg)
    };
  }).sort((a, b) => b.aggregate_effective - a.aggregate_effective);

  state.final_scores = finalScores;
  state.status = "deciding";
  saveState();

  // ─────────────────────────────────────────────────
  // ROUND 3: WINNER
  // ─────────────────────────────────────────────────
  console.log(`\nROUND 3 — WINNER & CONSTELLATION\n`);
  process.stdout.write("  deliberating... ");

  const scoreSummary = finalScores.map(s => {
    const agentDetail = Object.entries(s.agent_effective)
      .map(([id, eff]) => `${id.slice(0, 3)}:${eff}(ITN/A:${s.agent_scores[id]}+${s.agent_bonuses[id]?.total ?? 0})`).join(" ");
    const shift = s.score_shift !== 0 ? ` [shifted ${s.score_shift > 0 ? "+" : ""}${s.score_shift} after argument]` : "";
    return `${s.display} — effective ${s.aggregate_effective}/100 [${agentDetail}]${shift}`;
  }).join("\n");

  const argumentSummary = Object.values(state.argument_threads).map(t =>
    `${t.display}:\n` +
    `  initial: ${Object.entries(t.initial_scores).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ")}\n` +
    `  final:   ${Object.entries(t.final_scores).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ")}\n` +
    `  resolution: ${t.resolution}\n` +
    t.facilitator_notes.map(n => `  facilitator: ${n.note}`).join("\n")
  ).join("\n\n");

  try {
    const raw = await call(
      WINNER_SYSTEM,
      `FINAL EFFECTIVE SCORES (ITN/A + awards bonuses) after argument:\n${scoreSummary}\n\nWHAT THE ARGUMENTS REVEALED:\n${argumentSummary}\n\nNow name the winner.`,
      2000
    );
    const decision = parseJson<WinnerDecision>(raw);
    state.winner = decision;
    state.status = "complete";
    saveState();
    process.stdout.write(`winner: ${decision.display}\n`);
  } catch (err) {
    console.error(`\n  ERROR: ${err}`);
  }

  // ─────────────────────────────────────────────────
  // Print final results
  // ─────────────────────────────────────────────────
  console.log(`\n${"=".repeat(60)}`);
  if (state.winner) {
    console.log(`WINNER: ${state.winner.display}`);
    console.log(`  FOR: ${state.winner.case_for}`);
    console.log(`  AGAINST: ${state.winner.case_against}`);
    console.log(`\nCONSTELLATION:`);
    state.winner.constellation?.forEach(c => {
      console.log(`  * ${c.display}`);
      console.log(`    ${c.role}`);
    });
    console.log(`\nDECIDED AGAINST:`);
    state.winner.decided_against?.forEach(d => {
      console.log(`  x ${d.display}: ${d.why_not}`);
    });
  }

  console.log(`\nFINAL SCORES (effective = ITN/A + awards bonuses):`);
  finalScores.slice(0, 14).forEach((s, i) => {
    const isWinner = s.url === state.winner?.url;
    const inConstel = state.winner?.constellation?.find(c => c.url === s.url);
    const marker = isWinner ? "W" : inConstel ? "*" : " ";
    const bonusLine = Object.entries(s.agent_bonuses)
      .map(([id, b]) => `${id.slice(0, 3)}:${b.total >= 0 ? "+" : ""}${b.total}`)
      .join(" ");
    const shift = s.score_shift !== 0 ? ` (${s.score_shift > 0 ? "+" : ""}${s.score_shift})` : "";
    console.log(`  ${marker} ${String(i + 1).padStart(2)}. ${s.display.padEnd(45)} ${s.aggregate_effective} eff (ITN/A:${s.aggregate}) [bonuses:${bonusLine}]${shift}`);
  });

  console.log(`\n${DELIBERATION_PATH}`);
}

main().catch(err => { console.error("Fatal:", err); process.exitCode = 1; });
