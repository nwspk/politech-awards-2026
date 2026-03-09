/**
 * itn-a-deliberate.ts  v3
 *
 * score (relative, all projects together) →
 * multi-turn argument (real conversation, facilitator calls out evasions) →
 * final ranking → winner
 *
 * Saves to deliberation.json after EVERY api call. tail -f cache/deliberation.json to watch live.
 *
 * Usage:
 *   npx tsx scripts/itn-a-deliberate.ts
 *   npx tsx scripts/itn-a-deliberate.ts --top-conflicts 4
 *   npx tsx scripts/itn-a-deliberate.ts --argument-rounds 3
 *   npx tsx scripts/itn-a-deliberate.ts --min-greens 2
 *   npx tsx scripts/itn-a-deliberate.ts --setup grok --min-greens 2   # v6: read cache/assessments-grok.json, write cache/deliberation-grok.json
 *   npx tsx scripts/itn-a-deliberate.ts --setup grok --shortlist-file cache/pilot-union-top100.json --min-greens 2   # v6: shortlist = union ∩ ≥min-greens
 */

import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const DEFAULT_MODEL = "x-ai/grok-4.1-fast";
const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";
const CACHE_DB_PATH = path.resolve("cache", "sites.sqlite");
const BODY_CHAR_LIMIT = 3000; // per project in scoring prompt

const args = process.argv.slice(2);
const MODEL = getArg("--model") ?? DEFAULT_MODEL;
// Per-agent model overrides (specialist jury). Fall back to --model / default.
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

function getArg(f: string) { const i = args.indexOf(f); return i !== -1 ? args[i + 1] : undefined; }

// v6: when --setup NAME, use cache/assessments-{NAME}.json and cache/deliberation-{NAME}.json
// --assessments-file and --output-file override paths explicitly (for mixed juries)
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
// HTML → readable text (same logic as eval script)
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
    if (!fs.existsSync(CACHE_DB_PATH)) {
        console.warn(`  ⚠ No site cache found at ${CACHE_DB_PATH} — scoring without page content`);
        return cache;
    }
    const db = new Database(CACHE_DB_PATH, { readonly: true });
    try {
        const rows = db.prepare("SELECT url, body FROM pages WHERE body IS NOT NULL AND error IS NULL").all() as Array<{ url: string; body: string }>;
        for (const row of rows) {
            if (row.body) cache.set(row.url, extractReadableText(row.body));
        }
        console.log(`  Loaded page cache: ${cache.size} entries`);
    } finally {
        db.close();
    }
    return cache;
}

// ---------------------------------------------------------------------------
// State — written to disk after every API call
// ---------------------------------------------------------------------------

interface DeliberationState {
    run_at: string;
    model: string;
    shortlist: Array<{ url: string; display: string }>;
    scores: Record<string, AgentScoreCard>;       // agentId → scorecard
    initial_rankings: RankedProject[];
    conflicts: ConflictEntry[];
    argument_threads: Record<string, ArgumentThread>; // url → thread
    final_scores: FinalScore[];
    winner: WinnerDecision | null;
    status: string;
}

interface AgentScoreCard {
    agent: string;
    reasoning: string;   // their overall read of the whole set before scoring
    projects: ProjectScore[];
}

interface ProjectScore {
    url: string;
    display: string;
    rank: number;        // 1 = best in this agent's view
    score: number;       // 0-100
    systemic: number;
    experimentation: number;
    fractality: number;
    non_identification: number;
    one_line: string;
    why_above_neighbour: string;  // why ranked above the project one slot below
}

interface RankedProject {
    url: string;
    display: string;
    aggregate_score: number;
    agent_scores: Record<string, number>;
    agent_ranks: Record<string, number>;
    rank_spread: number;   // max rank - min rank across agents (conflict signal)
    score_stddev: number;
}

interface ConflictEntry {
    url: string;
    display: string;
    score_stddev: number;
    rank_spread: number;
    agent_scores: Record<string, number>;
    agent_ranks: Record<string, number>;
    conflict_summary: string;
}

interface ArgumentTurn {
    agent: string;
    turn: number;
    text: string;        // what they said, in plain prose
    revised_score: number | null;
    revision_reason: string | null;
    claims_made: string[];      // specific claims this agent is putting forward
    claims_rejected: string[];  // specific claims from others they're pushing back on
    raw_prose?: string;         // set when model broke format and returned prose instead of JSON
}

interface FacilitatorNote {
    after_turn: number;
    note: string;   // what the facilitator called out
    directed_at: string[];
}

interface ArgumentThread {
    url: string;
    display: string;
    initial_scores: Record<string, number>;
    initial_ranks: Record<string, number>;
    turns: ArgumentTurn[];
    facilitator_notes: FacilitatorNote[];
    final_scores: Record<string, number>;
    resolution: string;  // what the argument revealed / decided
}

interface FinalScore {
    url: string;
    display: string;
    aggregate: number;
    agent_scores: Record<string, number>;
    agent_ranks: Record<string, number>;
    was_contested: boolean;
    score_shift: number;  // aggregate change from argument
}

interface WinnerDecision {
    url: string;
    display: string;
    score: number;
    confidence: number;  // 0-100: how clearly this winner emerged; 100 = no doubt, 50 = genuine toss-up
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

// v6: load URL set from --shortlist-file (JSON array or one URL per line). Normalize for matching.
function loadShortlistUrlSet(filePath: string): Set<string> {
    const raw = fs.readFileSync(filePath, "utf-8").trim();
    let urls: string[] = [];
    if (raw.startsWith("[")) {
        try {
            urls = JSON.parse(raw) as string[];
        } catch {
            urls = raw.split(/\n/).map(s => s.trim()).filter(Boolean);
        }
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

function normalizeUrlForMatch(url: string): string {
    try {
        const u = new URL(url.startsWith("http") ? url : "https://" + url);
        return (u.hostname.replace(/^www\./, "") + u.pathname).toLowerCase().replace(/\/$/, "");
    } catch {
        return url.toLowerCase().replace(/\/$/, "");
    }
}

function summariseProject(url: string, assessment: any, pageText?: string): string {
    const lines = [`[${displayUrl(url)}]  full url: ${url}`];
    if (pageText) {
        lines.push(`PAGE CONTENT (${pageText.length} chars):\n---\n${pageText}\n---`);
    } else {
        lines.push(`(no cached page content)`);
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
            model: model,
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
        // Model got emotionally invested and returned prose — save it, then retry
        process.stdout.write(`[prose rescued] `);
        const retry = await call(
            system,
            `Your previous response was not valid JSON. You MUST respond with a JSON object only — no prose, no markdown, no explanation.\n\nYour previous response was:\n${raw.slice(0, 400)}\n\nNow respond with valid JSON only.`,
            maxTokens,
            model
        );
        const turn = normalizeArgumentTurn(parseJson<T>(retry)) as any;
        turn.raw_prose = raw;  // preserve the original passionate response
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
    // repair
    const stripped = candidate
        .replace(/,\s*"[^"]*"\s*:\s*"[^"]*$/, "")
        .replace(/,\s*"[^"]*"\s*:\s*$/, "")
        .replace(/,\s*$/, "");
    for (let n = 10; n >= 1; n--) {
        try { return JSON.parse(stripped + "}".repeat(n)) as T; } catch (_) { }
    }
    throw new Error(`JSON parse failed. Preview: ${raw.slice(0, 300)}`);
}

// ---------------------------------------------------------------------------
// ROUND 1: Scoring — all projects at once, with relative ranking
// ---------------------------------------------------------------------------

const SCORE_SYSTEM = (agentId: string): string => {
    const lens: Record<string, string> = {
        political: "power — who it serves, what structures it challenges or reinforces",
        relational: "care and human nourishment — what it sustains or extracts",
        experimental: "epistemics — can it be wrong? does it genuinely learn?"
    };
    return `You are the ${agentId.toUpperCase()} evaluator at the Political Technology Awards deliberation table.

You are looking at the full shortlist of ${MIN_GREENS === 3 ? "triple-green" : "shortlisted"} projects — all at once. Your job is to rank and score them RELATIVE TO EACH OTHER through your lens of ${lens[agentId]}.

This is not about absolute quality. It's about which of these projects, seen together as a field, most exemplifies what political technology should be doing — from your specific lens.

LENS SCORING (0-25 each lens, 0-100 total):
- SYSTEMIC IMPACT: 0 = pure symptom-treatment; 25 = directly rewires power/care/knowledge structures
- EXPERIMENTATION: 0 = locked gospel, no feedback loops; 25 = genuine learning culture, falsifiable, updates
- FRACTALITY: 0 = extracts from everyone it touches; 25 = nourishes all scales simultaneously
- NON-IDENTIFICATION: 0 = founder ego fused, cannot pivot; 25 = genuine stewardship, held lightly

CALIBRATION: You are ranking 21 projects. Your top project should score noticeably higher than your 5th. Your 10th should score noticeably lower than your 5th. If your scores cluster within 10 points, you are not actually discriminating.

For each project include:
- rank (1 = your top pick)
- score (0-100)
- lens subscores (systemic, experimentation, fractality, non_identification, each 0-25)
- one_line: the single most decisive thing you see from your lens
- why_above_neighbour: one sentence on why this project ranks above the one immediately below it

Also give a brief overall reasoning: what pattern do you see across this whole set from your lens? What does the field look like?

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
      "one_line": "...",
      "why_above_neighbour": "..."
    }
  ]
}

Sort the projects array by rank (1 first). Include ALL projects. Use EXACT URL strings.`;
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
            return `${id.toUpperCase()} ranked it #${p.rank} (${p.score}/100): "${p.one_line}"`;
        }).filter(Boolean).join("\n");

    const mine = allScores[agentId]?.projects.find(p => p.url === url);

    return `You are ${agentId.toUpperCase()} at the deliberation table. The project under discussion is: ${thread.display}

YOUR SCORE: ${mine?.score ?? "?"}/100, rank #${mine?.rank ?? "?"}
  systemic: ${mine?.systemic} | experimentation: ${mine?.experimentation} | fractality: ${mine?.fractality} | non_id: ${mine?.non_identification}
  "${mine?.one_line}"

HOW THE OTHER AGENTS SCORED IT:
${others}

TURN 1: State your position.

Be specific. Name what you see from your lens that others are probably missing. Name the single most important disagreement you have with how the other agents are reading this project. What are they wrong about, specifically?

Rules:
- You must make at least 2 specific, falsifiable claims about this project
- You must identify at least 1 specific thing the other agents are getting wrong (quote their framing, then explain why it's wrong from your lens)
- You may NOT just say "I see it differently" — say HOW and WHY

Respond ONLY with valid JSON:
{
  "agent": "${agentId}",
  "turn": 1,
  "text": "your full argument in prose — specific, direct, willing to be wrong",
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

    const myLastTurn = thread.turns.filter(t => t.agent === agentId).at(-1);
    const currentScore = myLastTurn?.revised_score ?? thread.initial_scores[agentId];

    const facilitator = facilitatorNote
        ? `\nFACILITATOR NOTE: ${facilitatorNote}\n`
        : "";

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

Write a short, direct facilitator note for the next round. Be specific. Call out the evasion. Ask the question that would actually move this forward.

If the argument is genuinely productive and agents are engaging well, say so briefly and suggest what the most important remaining question is.

Respond with plain text, 2-4 sentences. No JSON needed.`;
}

// ---------------------------------------------------------------------------
// ROUND 3: Final decision
// ---------------------------------------------------------------------------

const WINNER_SYSTEM = `You are the facilitator making the final call after the deliberation. You have final scores, rank-orderings from three agent lenses, and a full record of what was argued and what changed.

Your job: name a winner and explain it honestly. This means:
- Making a genuine case for the winner (not just "it scored highest")
- Acknowledging the strongest case AGAINST the winner
- Explaining what was decided against and why — this matters as much as the winner
- Identifying a constellation of 3-5 projects that together form a portfolio
- Rating your confidence (0–100) in this choice: 100 = no doubt, the evidence was clear; 50 = genuine toss-up between two strong candidates; 0 = forced choice with no good options

The winner should be defensible as "the project that most fully embodies what political technology should be doing in 2026" — not the safest choice, not the most famous, but the most alive and necessary one.

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
    console.log(`\nITN/A Deliberation v3 — relative scoring + real argument + winner`);
    const isSpecialist = MODEL_POLITICAL !== MODEL || MODEL_RELATIONAL !== MODEL || MODEL_EXPERIMENTAL !== MODEL;
    if (isSpecialist) {
        console.log(`Models: political=${MODEL_POLITICAL} | relational=${MODEL_RELATIONAL} | experimental=${MODEL_EXPERIMENTAL}`);
    } else {
        console.log(`Model: ${MODEL}`);
    }
    console.log(`min-greens: ${MIN_GREENS} | conflicts: ${TOP_CONFLICTS} | argument rounds: ${ARGUMENT_ROUNDS}`);
    if (SETUP) console.log(`Setup: ${SETUP} → ${ASSESSMENTS_PATH} → ${DELIBERATION_PATH}`);
    if (SHORTLIST_FILE) console.log(`Shortlist file: ${SHORTLIST_FILE}`);
    console.log();

    if (!process.env.OPENROUTER_API_KEY) { console.error("OPENROUTER_API_KEY not set"); process.exit(1); }

    const assessments = loadAssessments();
    let entries = buildShortlist(assessments);

    if (SHORTLIST_FILE) {
        if (!fs.existsSync(SHORTLIST_FILE)) {
            console.error(`Shortlist file not found: ${SHORTLIST_FILE}`);
            process.exit(1);
        }
        const urlSet = loadShortlistUrlSet(SHORTLIST_FILE);
        const before = entries.length;
        entries = entries.filter(e => urlSet.has(e.url) || urlSet.has(normalizeUrlForMatch(e.url)));
        console.log(`Shortlist filter: ${before} → ${entries.length} (union ∩ ≥${MIN_GREENS} greens)\n`);
    }

    if (entries.length === 0) {
        console.error(`No projects with ${MIN_GREENS}+ green votes.`); process.exit(1);
    }

    const shortlist = entries.map(({ url }) => ({ url, display: displayUrl(url) }));
    console.log(`Shortlist: ${shortlist.length} projects\n`);
    shortlist.forEach(s => console.log(`  ${s.display}`));
    console.log();

    initState(shortlist);

    const pageCache = loadPageCache();
    const summaries = entries
        .map(({ url, assessment }) => summariseProject(url, assessment, pageCache.get(url)))
        .join("\n\n");

    const urlList = entries.map(({ url }) => url).join("\n");

    // ───────────────────────────────────────────────────────
    // ROUND 1: SCORING
    // ───────────────────────────────────────────────────────
    console.log("ROUND 1 — RELATIVE SCORING (all projects together, ranked)\n");
    state.status = "scoring";
    saveState();

    const agentScores: Record<string, AgentScoreCard> = {};

    for (const agentId of ["political", "relational", "experimental"]) {
        process.stdout.write(`  ${agentId}... `);
        try {
            const raw = await call(
                SCORE_SYSTEM(agentId),
                `Score and rank all ${shortlist.length} projects relative to each other.\n\nAll project summaries:\n\n${summaries}\n\nExact URL strings to use as keys:\n${urlList}`,
                5000,
                AGENT_MODELS[agentId]
            );
            const result = parseJson<AgentScoreCard>(raw);
            agentScores[agentId] = result;
            state.scores[agentId] = result;
            saveState();

            const top3 = result.projects.slice(0, 3).map(p => p.display).join(", ");
            process.stdout.write(`done — top 3: ${top3}\n`);
            process.stdout.write(`  reasoning: "${result.reasoning?.slice(0, 100)}..."\n`);
        } catch (err) {
            console.error(`\n  ERROR: ${err}`);
        }
        await sleep(800);
    }

    // Build initial rankings
    const initialRankings: RankedProject[] = shortlist.map(({ url, display }) => {
        const agentScoreMap: Record<string, number> = {};
        const agentRankMap: Record<string, number> = {};
        for (const [id, sc] of Object.entries(agentScores)) {
            const p = sc.projects.find(p => p.url === url);
            if (p) { agentScoreMap[id] = p.score; agentRankMap[id] = p.rank; }
        }
        const scores = Object.values(agentScoreMap);
        const ranks = Object.values(agentRankMap);
        const agg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
        return {
            url, display,
            aggregate_score: agg,
            agent_scores: agentScoreMap,
            agent_ranks: agentRankMap,
            rank_spread: ranks.length ? Math.max(...ranks) - Math.min(...ranks) : 0,
            score_stddev: Math.round(stddev(scores) * 10) / 10
        };
    }).sort((a, b) => b.aggregate_score - a.aggregate_score);

    state.initial_rankings = initialRankings;
    saveState();

    console.log("\n  Initial rankings (aggregate score + agent ranks):");
    initialRankings.slice(0, 10).forEach(({ display, aggregate_score, agent_scores, agent_ranks }, i) => {
        const scores = Object.entries(agent_scores).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ");
        const ranks = Object.entries(agent_ranks).map(([id, r]) => `${id.slice(0, 3)}:#${r}`).join(" ");
        console.log(`  ${String(i + 1).padStart(2)}. ${display.padEnd(45)} ${aggregate_score}/100  [${scores}]  ranks:[${ranks}]`);
    });

    // Find conflicts: highest rank_spread (agents disagree on where it sits in the order)
    const conflicts: ConflictEntry[] = initialRankings
        .map(r => ({
            url: r.url,
            display: r.display,
            score_stddev: r.score_stddev,
            rank_spread: r.rank_spread,
            agent_scores: r.agent_scores,
            agent_ranks: r.agent_ranks,
            conflict_summary: `rank spread: ${r.rank_spread} | score σ: ${r.score_stddev}`
        }))
        .sort((a, b) => b.rank_spread - a.rank_spread || b.score_stddev - a.score_stddev)
        .slice(0, TOP_CONFLICTS);

    state.conflicts = conflicts;
    saveState();

    console.log(`\n  Top ${conflicts.length} conflicts (biggest disagreement on ranking):`);
    conflicts.forEach(c => {
        const ranks = Object.entries(c.agent_ranks).map(([id, r]) => `${id.slice(0, 3)}:#${r}`).join(" ");
        const scores = Object.entries(c.agent_scores).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ");
        console.log(`    ${c.display.padEnd(45)} rank spread:${c.rank_spread}  [${ranks}]  [${scores}]`);
    });

    // ───────────────────────────────────────────────────────
    // ROUND 2: ARGUMENT — multi-turn per conflict
    // ───────────────────────────────────────────────────────
    console.log(`\nROUND 2 — ARGUMENT (${ARGUMENT_ROUNDS} turns per conflict)\n`);
    state.status = "arguing";
    saveState();

    for (const conflict of conflicts) {
        const { url, display } = conflict;
        console.log(`\n  ════ ${display} ════`);
        console.log(`  rank spread: ${conflict.rank_spread} | score σ: ${conflict.score_stddev}`);

        const thread: ArgumentThread = {
            url,
            display,
            initial_scores: conflict.agent_scores,
            initial_ranks: conflict.agent_ranks,
            turns: [],
            facilitator_notes: [],
            final_scores: { ...conflict.agent_scores },
            resolution: ""
        };

        state.argument_threads[url] = thread;
        saveState();

        // Turn 1 — each agent opens
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

        // Turns 2..N — response turns with facilitator between
        for (let turnNum = 2; turnNum <= ARGUMENT_ROUNDS; turnNum++) {
            // Facilitator reads previous turn
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
                console.log(`  → ${facilitatorNote?.slice(0, 120)}...`);
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
                        process.stdout.write(`revised → ${turn.revised_score} (${turn.revision_reason?.slice(0, 60)})\n`);
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

        // Facilitator resolution
        process.stdout.write(`\n  RESOLUTION... `);
        try {
            const allTurns = thread.turns.map(t =>
                `${t.agent.toUpperCase()} turn ${t.turn}: ${t.text}`
            ).join("\n\n");
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

    // ───────────────────────────────────────────────────────
    // Compute final scores
    // ───────────────────────────────────────────────────────
    const finalScores: FinalScore[] = initialRankings.map(r => {
        const thread = state.argument_threads[r.url];
        const finalAgentScores = thread ? thread.final_scores : r.agent_scores;
        const vals = Object.values(finalAgentScores);
        const agg = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0;
        const originalVals = Object.values(r.agent_scores);
        const originalAgg = originalVals.length ? originalVals.reduce((a, b) => a + b, 0) / originalVals.length : 0;

        return {
            url: r.url,
            display: r.display,
            aggregate: agg,
            agent_scores: finalAgentScores,
            agent_ranks: r.agent_ranks,
            was_contested: !!thread,
            score_shift: Math.round(agg - originalAgg)
        };
    }).sort((a, b) => b.aggregate - a.aggregate);

    state.final_scores = finalScores;
    state.status = "deciding";
    saveState();

    // ───────────────────────────────────────────────────────
    // ROUND 3: WINNER
    // ───────────────────────────────────────────────────────
    console.log(`\nROUND 3 — WINNER & CONSTELLATION\n`);
    process.stdout.write("  deliberating... ");

    const scoreSummary = finalScores.map(s => {
        const agentDetail = Object.entries(s.agent_scores)
            .map(([id, score]) => `${id.slice(0, 3)}:${score}(#${s.agent_ranks[id] ?? "?"})`).join(" ");
        const shift = s.score_shift !== 0 ? ` [shifted ${s.score_shift > 0 ? "+" : ""}${s.score_shift} after argument]` : "";
        return `${s.display} — aggregate ${s.aggregate}/100 [${agentDetail}]${shift}`;
    }).join("\n");

    const argumentSummary = Object.values(state.argument_threads).map(t =>
        `${t.display}:\n` +
        `  initial scores: ${Object.entries(t.initial_scores).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ")}\n` +
        `  final scores: ${Object.entries(t.final_scores).map(([id, s]) => `${id.slice(0, 3)}:${s}`).join(" ")}\n` +
        `  resolution: ${t.resolution}\n` +
        t.facilitator_notes.map(n => `  facilitator: ${n.note}`).join("\n")
    ).join("\n\n");

    try {
        const raw = await call(
            WINNER_SYSTEM,
            `FINAL SCORES after argument:\n${scoreSummary}\n\nWHAT THE ARGUMENTS REVEALED:\n${argumentSummary}\n\nNow name the winner.`,
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

    // ───────────────────────────────────────────────────────
    // Print final results
    // ───────────────────────────────────────────────────────
    console.log(`\n${"═".repeat(60)}`);
    if (state.winner) {
        console.log(`WINNER: ${state.winner.display}`);
        console.log(`  FOR: ${state.winner.case_for}`);
        console.log(`  AGAINST: ${state.winner.case_against}`);
        console.log(`\nCONSTELLATION:`);
        state.winner.constellation?.forEach(c => {
            console.log(`  ★ ${c.display}`);
            console.log(`    ${c.role}`);
        });
        console.log(`\nDECIDED AGAINST:`);
        state.winner.decided_against?.forEach(d => {
            console.log(`  ✗ ${d.display}: ${d.why_not}`);
        });
    }

    console.log(`\nFINAL SCORES:`);
    finalScores.slice(0, 12).forEach((s, i) => {
        const isWinner = s.url === state.winner?.url;
        const marker = isWinner ? "🏆" : state.winner?.constellation?.find(c => c.url === s.url) ? "★" : " ";
        const shift = s.score_shift !== 0 ? ` (${s.score_shift > 0 ? "+" : ""}${s.score_shift})` : "";
        console.log(`  ${marker} ${String(i + 1).padStart(2)}. ${s.display.padEnd(45)} ${s.aggregate}/100${shift}`);
    });

    console.log(`\n${DELIBERATION_PATH}`);
}

main().catch(err => { console.error("Fatal:", err); process.exitCode = 1; });