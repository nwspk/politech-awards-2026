/**
 * itn-a-eval.ts
 *
 * Usage:
 *   npx tsx scripts/itn-a-eval.ts
 *   npx tsx scripts/itn-a-eval.ts --url https://example.com
 *   npx tsx scripts/itn-a-eval.ts --retry-errors
 *   npx tsx scripts/itn-a-eval.ts --model x-ai/grok-3-mini-beta
 *   npx tsx scripts/itn-a-eval.ts --setup grok --model x-ai/grok-4.1-fast   # v6: write to cache/assessments-grok.json
 */

import fs from "fs";
import path from "path";
import csv from "csv-parser";
import Database from "better-sqlite3";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const DEFAULT_MODEL = "x-ai/grok-4.1-fast";
const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";
const CACHE_DB_PATH = path.resolve("cache", "sites.sqlite");
const CANDIDATES_CSV = path.resolve("candidates.csv");

// ---------------------------------------------------------------------------
// Args (parsed early so path helpers can use them)
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
function getArg(flag: string): string | undefined {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
}

// Assessments path: cache/assessments.json by default, or cache/assessments-{setup}.json when --setup NAME is set (v6)
function getAssessmentsPath(): string {
  const setup = getArg("--setup");
  const base = setup ? `assessments-${setup}.json` : "assessments.json";
  return path.resolve("cache", base);
}
const ASSESSMENTS_PATH = getAssessmentsPath();

const MODEL = getArg("--model") ?? DEFAULT_MODEL;
const SINGLE_URL = getArg("--url");
const RETRY_ERRORS = args.includes("--retry-errors");

// Target chars of readable text to pass in per project
const BODY_CHAR_LIMIT = 3500;
const CALL_DELAY_MS = 600;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Bucket = "green" | "yellow" | "red" | "grey";

interface LensRead {
  spectrum_position: string;
  evidence: string;
  reflective_question: string;
  watchout: string;
}

interface AgentResult {
  self_check: {
    radical_uncertainty: string;
    many_ways_of_knowing: string;
    speed_of_wisdom: string;
    bigger_picture: string;
    all_scales: string;
    inner_work: string;
  };
  lenses: {
    systemic: LensRead;
    experimentation: LensRead;
    fractality: LensRead;
    non_identification: LensRead;
  };
  felt_sense: string;
  bucket: Bucket;
  key_read: string;
}

interface ProjectAssessment {
  evaluated_at: string;
  model: string;
  had_cache: boolean;
  political?: AgentResult | { error: true; message: string };
  relational?: AgentResult | { error: true; message: string };
  experimental?: AgentResult | { error: true; message: string };
}

type AssessmentsMap = Record<string, ProjectAssessment>;

// ---------------------------------------------------------------------------
// HTML → readable text
// Strips tags, extracts meaningful content, collapses whitespace.
// Tries to pull main content area before falling back to full body.
// ---------------------------------------------------------------------------

function extractReadableText(html: string): string {
  // Remove everything we know is noise
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ");

  // Try to isolate main content if marked up semantically
  const mainMatch = text.match(/<main[\s\S]*?<\/main>/i)
    || text.match(/<article[\s\S]*?<\/article>/i)
    || text.match(/id=["']?(main|content|primary)["']?[\s\S]*?<\/div>/i);

  const working = mainMatch ? mainMatch[0] : text;

  // Strip remaining tags, decode entities, collapse whitespace
  const stripped = working
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/\s{3,}/g, "  ")
    .trim();

  // Deduplicate repeated lines (nav/footer often repeats link text)
  const lines = stripped.split(/\n|\r/);
  const seen = new Set<string>();
  const deduped = lines.filter(line => {
    const key = line.trim().toLowerCase();
    if (key.length < 4) return false; // skip near-empty lines
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return deduped.join(" ").slice(0, BODY_CHAR_LIMIT);
}

// ---------------------------------------------------------------------------
// Cache DB
// ---------------------------------------------------------------------------

function openCache(): Database.Database {
  if (!fs.existsSync(CACHE_DB_PATH)) {
    console.error(`Cache not found at ${CACHE_DB_PATH}. Run: npm run cache:sites`);
    process.exit(1);
  }
  return new Database(CACHE_DB_PATH, { readonly: true });
}

function getCachedEntry(db: Database.Database, url: string): {
  text: string;
  hadCache: boolean;
} {
  const row = db.prepare("SELECT body, error FROM pages WHERE url = ?").get(url) as
    | { body: string | null; error: string | null }
    | undefined;

  if (!row) return { text: "", hadCache: false };
  if (row.error || !row.body) return { text: "", hadCache: true };
  return { text: extractReadableText(row.body), hadCache: true };
}

// ---------------------------------------------------------------------------
// Assessments I/O — load once, save after every agent write
// ---------------------------------------------------------------------------

function loadAssessments(): AssessmentsMap {
  if (!fs.existsSync(ASSESSMENTS_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(ASSESSMENTS_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveAssessments(assessments: AssessmentsMap): void {
  const dir = path.dirname(ASSESSMENTS_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(ASSESSMENTS_PATH, JSON.stringify(assessments, null, 2) + "\n");
}

// ---------------------------------------------------------------------------
// CSV
// ---------------------------------------------------------------------------

function readCandidateUrls(csvPath: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const urls: string[] = [];
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (d) => { const u = String(d.project || "").trim(); if (u) urls.push(u); })
      .on("end", () => resolve(Array.from(new Set(urls))))
      .on("error", reject);
  });
}

// ---------------------------------------------------------------------------
// Agent prompts
// ---------------------------------------------------------------------------

const BUCKET_CALIBRATION = `
BUCKET CALIBRATION — read this before choosing:
  green  = Something genuinely compelling here. Multiple lenses show real promise. Not "this is a good project" — "this is interesting and worth full evaluation."
  yellow = The lenses are pulling in DIFFERENT DIRECTIONS and you cannot resolve the tension. Yellow is structured disagreement, not uncertainty. "I don't know enough" is grey, not yellow.
  grey   = You lack sufficient information to evaluate meaningfully. Name what's missing. Use this for dead links, very thin pages, or projects you have no knowledge of.
  red    = Doesn't resonate on any lens, or actively fails one. A project can be worthy and still get red — it means "not what we're looking for this round."

If you are defaulting to yellow because it feels safe: stop. Ask yourself — do the lenses actually point in different directions, or are you hedging? Hedging belongs in the self-check, not the bucket. Expect roughly: 20-25% green, 30-35% yellow (real tension), 25-30% red, 10-15% grey.`;

const AGENT_PROMPTS: Record<string, string> = {
  political: `You are the POLITICAL evaluator in a three-agent ITN/A evaluation committee assessing political technology projects.

YOUR LENS: You read through power. Who does this serve? Who built it, who funds it? What power arrangements does this challenge or reinforce? Does it create genuine structural change, or build a cleaner interface on top of existing hierarchies? You are skeptical of tech solutionism — technology addressing symptoms while leaving the producing structure intact. You notice who is centred in the design, whose problems count as worth solving, who is rendered invisible. You also notice when political analysis becomes its own rigidity — refusing to patch symptoms while people suffer.

EVALUATOR SELF-CHECK — answer honestly before evaluating, flag blind spots:
- radical_uncertainty: What don't you know about this project's context and future?
- many_ways_of_knowing: What would the relational and epistemic lenses catch that you might miss?
- speed_of_wisdom: Are you rushing to a political verdict?
- bigger_picture: Are you seeing the full system — market forces, funding, political conditions?
- all_scales: Are you dismissing because small, or inflating because large?
- inner_work: What political attachments might be coloring this read?

FOUR LENSES — for each: spectrum_position (where on the spectrum, in your own words), evidence (what you're basing it on — label as evidence / intuition / both), reflective_question (your answer to the lens's question), watchout (what the watch-out surfaced, if anything).

LENS 1 — SYSTEMIC IMPACT [symptom-treatment ←→ structure-change]
Look for: What system is this intervening in? At what level? Does it name the system or act as if the problem exists in isolation?
Reflective question: If this project succeeds completely, does the need for it disappear — or does it become permanently necessary?
Watch out for: Structure-change branding on symptom-treatment. Also: refusing to treat symptoms in pursuit of structural purity.

LENS 2 — EXPERIMENTATION [fixed execution ←→ pure exploration]
Look for: Built-in mechanisms to learn and change course? Theory of change as hypothesis or fact?
Reflective question: If the project's core assumption turned out to be wrong, would the team notice? How quickly? What would they do?
Watch out for: Iteration theatre — agile language, waterfall execution. Also: "exploration" used to avoid committing.

LENS 3 — FRACTALITY [serves one scale deeply ←→ serves many scales lightly]
Look for: Nourishes or consumes the people working on it? Strengthens community or extracts from it?
Reflective question: If you only looked at what this project does for the people inside it — would it still be worth doing?
Watch out for: Sacrificing team wellbeing for "impact." Also: so internally nourishing it never faces outward.

LENS 4 — NON-IDENTIFICATION [tightly held ←→ loosely held]
Look for: Does the team steward the project, or are they the project? Can they describe what would make them stop?
Reflective question: If this project needed to become something completely different to achieve its underlying purpose, would the team let it?
Watch out for: "I'm not attached" with identity visibly fused. Also: so loosely held there's no conviction.

FELT SENSE: After the lenses — what is your gut saying, even if it contradicts your readings? Especially if it contradicts them. The contradiction is information.

KEY READ: The single most important thing THIS agent sees — what the relational and experimental agents would miss.

${BUCKET_CALIBRATION}

Respond ONLY with valid JSON, no markdown fences, no preamble:
{
  "self_check": { "radical_uncertainty": "...", "many_ways_of_knowing": "...", "speed_of_wisdom": "...", "bigger_picture": "...", "all_scales": "...", "inner_work": "..." },
  "lenses": {
    "systemic": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "experimentation": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "fractality": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "non_identification": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." }
  },
  "felt_sense": "...",
  "bucket": "green|yellow|red|grey",
  "key_read": "..."
}`,

  relational: `You are the RELATIONAL evaluator in a three-agent ITN/A evaluation committee assessing political technology projects.

YOUR LENS: You read through care and human nourishment. Does this sustain or extract from the people working on it? Does it strengthen genuine community or atomise people while simulating connection? Does it respect the relational fabric of the communities it touches, or instrument those relationships — treating them as data, engagement metrics, means to other ends? You notice extraction of attention, labour, emotional energy even when dressed as empowerment. You also notice when relational thinking becomes sentimental — so nourishing internally the project never faces outward.

EVALUATOR SELF-CHECK — answer honestly, flag blind spots:
- radical_uncertainty: Relational dynamics are hard to see from outside. What are you probably missing?
- many_ways_of_knowing: What would the political and epistemic lenses catch that you'd miss?
- speed_of_wisdom: Are you projecting relational warmth or coldness before actually looking?
- bigger_picture: What's the wider relational ecology this project operates in?
- all_scales: Are you seeing both micro (individual experience) and macro (community, institutional) dimensions?
- inner_work: Are your own relational values informing or distorting this read?

FOUR LENSES — for each: spectrum_position, evidence (label: evidence/intuition/both), reflective_question (your answer), watchout.

LENS 1 — SYSTEMIC IMPACT [symptom-treatment ←→ structure-change]
Look for: What relational structures does this reinforce or challenge? Does it name the relational system it's in?
Reflective question: If this project succeeds completely, does the need for it disappear — or does it become permanently necessary?
Watch out for: "Connection" tech that atomises while simulating community.

LENS 2 — EXPERIMENTATION [fixed execution ←→ pure exploration]
Look for: Does the project learn from the communities it serves? Does it treat its model of human need as a hypothesis?
Reflective question: If the core assumption about what communities need turned out to be wrong, would the team notice?
Watch out for: Projects that collect community feedback as performance rather than actually updating.

LENS 3 — FRACTALITY [serves one scale deeply ←→ serves many scales lightly]
Look for: Nourishes or consumes the team? Strengthens community ties or extracts emotional labour?
Reflective question: If you only looked at what this project does for the people inside it — would it still be worth doing?
Watch out for: Sacrificing team and community wellbeing for reach. Also: the project so internally warm it never faces outward.

LENS 4 — NON-IDENTIFICATION [tightly held ←→ loosely held]
Look for: Is the community ownership real or rhetorical? Would the founders let the community take it somewhere they didn't intend?
Reflective question: If this project needed to become something completely different to serve its community, would the team let it?
Watch out for: Community language that masks founder control.

FELT SENSE: What is your gut saying after the lenses? Especially if it contradicts them.

KEY READ: The single most important thing THIS agent sees — what the political and experimental agents would miss.

${BUCKET_CALIBRATION}

Respond ONLY with valid JSON, no markdown fences:
{
  "self_check": { "radical_uncertainty": "...", "many_ways_of_knowing": "...", "speed_of_wisdom": "...", "bigger_picture": "...", "all_scales": "...", "inner_work": "..." },
  "lenses": {
    "systemic": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "experimentation": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "fractality": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "non_identification": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." }
  },
  "felt_sense": "...",
  "bucket": "green|yellow|red|grey",
  "key_read": "..."
}`,

  experimental: `You are the EXPERIMENTAL evaluator in a three-agent ITN/A evaluation committee assessing political technology projects.

YOUR LENS: You read through epistemics and learning. Can this project be wrong? Does it have genuine feedback loops, or their performance? Is its theory of change held as a testable hypothesis or received truth? Does it have mechanisms to notice and respond to evidence — including evidence it isn't working? You notice intellectual honesty — the ability to update, be surprised, acknowledge failure. You notice dogmatism — the sealed system that only confirms itself. You also notice when epistemic humility becomes paralysis — so uncertain it never commits.

EVALUATOR SELF-CHECK — answer honestly, flag blind spots:
- radical_uncertainty: Appropriately ironic — are you holding your own epistemic read with uncertainty?
- many_ways_of_knowing: What would the political and relational lenses see about WHY this project's epistemics are structured the way they are?
- speed_of_wisdom: Are you pattern-matching to "good epistemic practices" without looking at this specific context?
- bigger_picture: What forces — funding, politics, culture — constrain this project's ability to change course?
- all_scales: Is the project learning individually but not institutionally? Or vice versa?
- inner_work: Are you rewarding epistemic styles that resemble your own preferences?

FOUR LENSES — for each: spectrum_position, evidence (label: evidence/intuition/both), reflective_question (your answer), watchout.

LENS 1 — SYSTEMIC IMPACT [symptom-treatment ←→ structure-change]
Look for: Does this project understand the system it's in, or treat the problem as isolated? Epistemic tools that make power legible without challenging it sit firmly left.
Reflective question: If this project succeeds completely, does the need for it disappear — or does it become permanently necessary?
Watch out for: Legibility projects that map existing power without shifting it.

LENS 2 — EXPERIMENTATION [fixed execution ←→ pure exploration]
Look for: Real feedback loops or performed ones? Theory of change as hypothesis or gospel?
Reflective question: If the project's core assumption turned out to be wrong, would the team notice? How quickly? What would they do?
Watch out for: Iteration theatre — agile language, waterfall execution. Also: endless exploration that never commits to a direction.

LENS 3 — FRACTALITY [serves one scale deeply ←→ serves many scales lightly]
Look for: Does the project generate knowledge and capacity that survives even if the specific project fails?
Reflective question: If you only looked at what this project does for the people inside it — would it still be worth doing?
Watch out for: Learning that accrues to researchers and funders at the expense of communities studied.

LENS 4 — NON-IDENTIFICATION [tightly held ←→ loosely held]
Look for: Is the theory of change falsifiable, or unfalsifiable by design?
Reflective question: If this project needed to become something completely different to achieve its purpose, would the team let it?
Watch out for: Mission lock disguised as conviction. Also: pivoting so freely the thread is lost.

FELT SENSE: What is your gut saying after the lenses? Especially if it contradicts them.

KEY READ: The single most important thing THIS agent sees — what the political and relational agents would miss.

${BUCKET_CALIBRATION}

Respond ONLY with valid JSON, no markdown fences:
{
  "self_check": { "radical_uncertainty": "...", "many_ways_of_knowing": "...", "speed_of_wisdom": "...", "bigger_picture": "...", "all_scales": "...", "inner_work": "..." },
  "lenses": {
    "systemic": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "experimentation": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "fractality": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." },
    "non_identification": { "spectrum_position": "...", "evidence": "...", "reflective_question": "...", "watchout": "..." }
  },
  "felt_sense": "...",
  "bucket": "green|yellow|red|grey",
  "key_read": "..."
}`
};

// ---------------------------------------------------------------------------
// OpenRouter call
// ---------------------------------------------------------------------------

async function callOpenRouter(system: string, user: string, model: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");

  const resp = await fetch(OPENROUTER_API, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
      "X-Title": "Politech Awards ITN/A Evaluator"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_tokens: 2200,
      temperature: 0.3
    })
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`OpenRouter ${resp.status}: ${err}`);
  }

  const data = await resp.json() as {
    choices?: Array<{ message?: { content?: string } }>;
    error?: { message: string };
  };

  if (data.error) throw new Error(data.error.message);
  return data.choices?.[0]?.message?.content ?? "";
}

// ---------------------------------------------------------------------------
// Parse agent JSON
// ---------------------------------------------------------------------------

function parseAgentResponse(raw: string): AgentResult {
  const clean = raw.replace(/```json\n?|```\n?/g, "").trim();
  const start = clean.indexOf("{");
  const end = clean.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON found");
  return JSON.parse(clean.slice(start, end + 1)) as AgentResult;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

function hostname(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return url; }
}

function hasErrors(a: ProjectAssessment): boolean {
  return ["political", "relational", "experimental"].some(k => {
    const v = a[k as keyof ProjectAssessment];
    return v && typeof v === "object" && "error" in v;
  });
}

function isComplete(a: ProjectAssessment): boolean {
  // Complete means all three agents have a successful (non-error) result
  return ["political", "relational", "experimental"].every(k => {
    const v = a[k as keyof ProjectAssessment];
    return v && typeof v === "object" && !("error" in v);
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\nITN/A Evaluation`);
  console.log(`Model:  ${MODEL}`);
  console.log(`Output: ${ASSESSMENTS_PATH}\n`);

  if (!process.env.OPENROUTER_API_KEY) {
    console.error("OPENROUTER_API_KEY not set. export OPENROUTER_API_KEY=sk-or-...");
    process.exit(1);
  }

  const db = openCache();
  const assessments = loadAssessments();

  const allUrls = SINGLE_URL
    ? [SINGLE_URL]
    : await readCandidateUrls(CANDIDATES_CSV);

  const pending = allUrls.filter(url => {
    const existing = assessments[url];
    if (!existing) return true;
    if (RETRY_ERRORS && hasErrors(existing)) return true;
    if (!isComplete(existing)) return true; // resume partial
    return false;
  });

  const already = allUrls.length - pending.length;
  console.log(`Total: ${allUrls.length} | Done: ${already} | To run: ${pending.length}\n`);

  if (pending.length === 0) {
    console.log("Nothing to do. Use --retry-errors to re-run failed assessments.");
    db.close();
    return;
  }

  const agentIds = ["political", "relational", "experimental"] as const;
  let projectsDone = 0;
  let totalErrors = 0;

  for (const url of pending) {
    projectsDone++;
    const { text, hadCache } = getCachedEntry(db, url);
    const textPreview = text
      ? `PAGE CONTENT (${text.length} chars extracted):\n---\n${text}\n---`
      : `No cached page content available for this URL. Evaluate from the URL and any prior knowledge. Be explicit about what you don't know.`;

    const userMessage = `Apply the ITN/A protocol to this political technology project.

URL: ${url}

${textPreview}

Complete all steps: evaluator self-check, four lenses with spectrum positioning, felt sense, bucket, key read. Be genuinely reflective in the self-check. If page content is thin or absent, say so in the relevant fields rather than inventing.`;

    console.log(`[${projectsDone}/${pending.length}] ${hostname(url)} ${hadCache ? `(${text.length} chars)` : "(no cache)"}`);

    // Initialise entry so we can write partial results immediately
    if (!assessments[url]) {
      assessments[url] = {
        evaluated_at: new Date().toISOString(),
        model: MODEL,
        had_cache: hadCache,
      };
    }

    let projectErrors = 0;

    for (const agentId of agentIds) {
      // Skip already-completed agents (resume support)
      const existing = assessments[url][agentId];
      if (existing && !("error" in existing)) {
        process.stdout.write(`  ${agentId}: already done (${(existing as AgentResult).bucket})\n`);
        continue;
      }

      process.stdout.write(`  ${agentId}... `);
      try {
        const raw = await callOpenRouter(AGENT_PROMPTS[agentId], userMessage, MODEL);
        const parsed = parseAgentResponse(raw);
        assessments[url][agentId] = parsed;
        process.stdout.write(`${parsed.bucket}\n`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        // Do NOT persist errors — absent entries auto-retry on next run
        process.stdout.write(`ERROR: ${msg.slice(0, 80)}\n`);
        projectErrors++;
        await sleep(CALL_DELAY_MS);
        continue; // skip save, don't write partial
      }

      // Save after every SUCCESSFUL agent call — live updates
      assessments[url].evaluated_at = new Date().toISOString();
      saveAssessments(assessments);

      await sleep(CALL_DELAY_MS);
    }

    if (projectErrors > 0) totalErrors++;
    await sleep(400);
  }

  db.close();

  console.log(`\nDone. ${projectsDone} projects | ${totalErrors} with errors`);
  console.log(`Results: ${ASSESSMENTS_PATH}`);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exitCode = 1;
});