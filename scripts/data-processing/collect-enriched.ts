/**
 * collect-enriched.ts
 *
 * Three-pass enriched data collection for all 321 candidates.
 * Writes one JSON file per project to data/enriched/<slug>.json.
 * Fully resumable — skips already-complete files.
 *
 * Usage:
 *   npx tsx scripts/collect-enriched.ts --pass 0               # pass 0: scraped-page fields (fast, no LLM)
 *   npx tsx scripts/collect-enriched.ts                        # pass 1: broad sweep
 *   npx tsx scripts/collect-enriched.ts --pass 2               # pass 2: fill null fields
 *   npx tsx scripts/collect-enriched.ts --pass 3               # pass 3: structured DB lookups
 *   npx tsx scripts/collect-enriched.ts --pass all             # run all four in sequence
 *   npx tsx scripts/collect-enriched.ts --url https://x.com    # single project, pass 1
 *   npx tsx scripts/collect-enriched.ts --retry-errors         # redo error files
 *   npx tsx scripts/collect-enriched.ts --concurrency 50
 */

import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { execSync } from "child_process";
import Database from "better-sqlite3";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const DEFAULT_MODEL = "anthropic/claude-haiku-4-5";
const OPENROUTER_API = "https://openrouter.ai/api/v1/chat/completions";
const CANDIDATES_CSV = path.resolve("candidates.csv");
const OUTPUT_DIR = path.resolve("data", "enriched");
const CACHE_DB_PATH = path.resolve("cache", "sites.sqlite");
const NULL_THRESHOLD = 10; // pass 2 targets files with this many or more null fields

const args = process.argv.slice(2);
function getArg(flag: string): string | undefined {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
}

const MODEL = getArg("--model") ?? DEFAULT_MODEL;
const SINGLE_URL = getArg("--url");
const RETRY_ERRORS = args.includes("--retry-errors");
const CONCURRENCY = parseInt(getArg("--concurrency") ?? "50", 10);
const PASS = getArg("--pass") ?? "1";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/\/+$/, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase()
    .slice(0, 80);
}

function readCandidateUrls(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const urls: string[] = [];
    fs.createReadStream(CANDIDATES_CSV)
      .pipe(csv({ headers: false }))
      .on("data", (row: Record<string, string>) => {
        const u = String(Object.values(row)[0] ?? "").trim();
        if (u && u.startsWith("http")) urls.push(u);
      })
      .on("end", () => resolve(Array.from(new Set(urls))))
      .on("error", reject);
  });
}

// URL → filename index (built once at startup, then kept in sync)
// Allows the script to find project-name files regardless of how they were created.
const urlIndex = new Map<string, string>(); // normalised url → filename (no .json)

function buildUrlIndex(): void {
  if (!fs.existsSync(OUTPUT_DIR)) return;
  for (const f of fs.readdirSync(OUTPUT_DIR)) {
    if (!f.endsWith(".json")) continue;
    try {
      const d = JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, f), "utf-8")) as Record<string, unknown>;
      const url = ((d.url as string) || "").replace(/\/+$/, "").toLowerCase();
      if (url) urlIndex.set(url, f.replace(".json", ""));
    } catch {}
  }
}

function resolveSlug(url: string): string {
  const norm = url.replace(/\/+$/, "").toLowerCase();
  return urlIndex.get(norm) ?? slugify(url);
}

function loadFile(slug: string): Record<string, unknown> | null {
  const p = path.join(OUTPUT_DIR, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  try { return JSON.parse(fs.readFileSync(p, "utf-8")); } catch { return null; }
}

function saveFile(slug: string, data: Record<string, unknown>): void {
  fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.json`), JSON.stringify(data, null, 2) + "\n");
  // Keep index in sync
  const url = ((data.url as string) || "").replace(/\/+$/, "").toLowerCase();
  if (url) urlIndex.set(url, slug);
}

function countNulls(obj: Record<string, unknown>): string[] {
  return Object.entries(obj)
    .filter(([k, v]) => !k.startsWith("_") && (v === null || (Array.isArray(v) && v.length === 0)))
    .map(([k]) => k);
}

// ---------------------------------------------------------------------------
// Page fetch
// ---------------------------------------------------------------------------

interface CachedPage {
  body: string;
  status: number;
  fetched_at: string;
  final_url: string | null;
  error: string | null;
}

function fetchCachedRow(url: string): CachedPage | null {
  if (!fs.existsSync(CACHE_DB_PATH)) return null;
  try {
    const db = new Database(CACHE_DB_PATH, { readonly: true });
    const row = db.prepare("SELECT body, status, fetched_at, final_url, error FROM pages WHERE url = ?").get(url) as CachedPage | undefined;
    db.close();
    return row ?? null;
  } catch { return null; }
}

function fetchPage(url: string): string {
  const row = fetchCachedRow(url);
  if (row?.body) return extractText(row.body).slice(0, 4000);
  try {
    const html = execSync(`curl -s -L --max-time 15 --user-agent "Mozilla/5.0" "${url}"`, { timeout: 20000 }).toString();
    return extractText(html).slice(0, 4000);
  } catch { return ""; }
}

function fetchJson(url: string): unknown {
  try {
    const out = execSync(`curl -s -L --max-time 10 --user-agent "Mozilla/5.0" "${url}"`, { timeout: 15000 }).toString();
    return JSON.parse(out);
  } catch { return null; }
}

function extractText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s{3,}/g, "  ")
    .trim();
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

async function callLLM(system: string, user: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");
  const res = await fetch(OPENROUTER_API, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "system", content: system }, { role: "user", content: user }],
      temperature: 0.2,
      max_tokens: 4000,
    }),
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const data = (await res.json()) as { choices: { message: { content: string } }[] };
  return data.choices[0]?.message?.content ?? "";
}

function parseJSON(raw: string): Record<string, unknown> {
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
  return JSON.parse(cleaned);
}

// ---------------------------------------------------------------------------
// PASS 0 — Scraped-page fields (fast, no LLM — reads from cache/sites.sqlite)
// ---------------------------------------------------------------------------

function extractMetaDescription(html: string): string | null {
  const m = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']{10,500})["']/i)
    || html.match(/<meta[^>]+content=["']([^"']{10,500})["'][^>]+name=["']description["']/i);
  return m ? m[1].trim() : null;
}

function extractFirstParagraph(html: string): string | null {
  const m = html.match(/<p[^>]*>([^<]{40,500})<\/p>/i);
  if (!m) return null;
  return m[1].replace(/&[a-z]+;/gi, " ").trim();
}

function hasTeamPage(html: string, url: string): boolean {
  return /href=["'][^"']*\/(about|team|people|who-we-are|staff|founders)[^"']*["']/i.test(html);
}

function hasImpactMetrics(text: string): boolean {
  // Numbers followed by impact-adjacent words
  return /\d[\d,.]+\s*(users?|countries|cities|campaigns?|elections?|governments?|organisations?|organizations?|partners?|instances?|deployments?|downloads?|projects?)\b/i.test(text)
    || /\b(million|billion|thousand)\s+\w+/i.test(text);
}

async function pass0(url: string, index: number, total: number): Promise<void> {
  const slug = resolveSlug(url);
  const existing = loadFile(slug);

  // Only skip if pass0 already run
  if (existing?.scraped?.homepage_last_scraped) {
    console.log(`[P0 ${index}/${total}] SKIP  ${slug}`);
    return;
  }

  const row = fetchCachedRow(url);
  const html = row?.body ?? "";
  const text = extractText(html);

  const scraped: Record<string, unknown> = {
    homepage_last_scraped: row?.fetched_at ?? null,
    homepage_http_status: row?.status ?? null,
    dead_link: row ? (row.error !== null || (row.status !== null && row.status >= 400)) : null,
    homepage_word_count: text ? text.split(/\s+/).filter(Boolean).length : null,
    homepage_has_team_page: html ? hasTeamPage(html, url) : null,
    homepage_has_impact_metrics: text ? hasImpactMetrics(text) : null,
    scraped_description: html ? (extractMetaDescription(html) ?? extractFirstParagraph(html) ?? null) : null,
    scraped_final_url: row?.final_url ?? null,
  };

  const merged = existing
    ? { ...existing, scraped }
    : { url, scraped, collected_at: new Date().toISOString(), collected_by: "collect-enriched-script" };

  saveFile(slug, merged);
  console.log(`[P0 ${index}/${total}] DONE  ${slug} (status=${scraped.homepage_http_status}, words=${scraped.homepage_word_count})`);
}

// ---------------------------------------------------------------------------
// PASS 1 — Broad sweep
// ---------------------------------------------------------------------------

const P1_SYSTEM = `You are a research assistant collecting structured data about political technology and civic tech projects for the Political Technology Awards 2026.

Given a URL and page content, populate a structured JSON dossier. Be accurate — use null for anything you cannot determine. Do not invent facts.

causation_strength rules:
- "anecdotal" = project claims impact, no linked evidence
- "correlated" = timing/proximity suggests impact, not proven
- "directly_cited" = policy text or official document explicitly names the project
- "independently_verified" = third-party research verified the causal claim

Return ONLY valid JSON, no markdown fences.`;

function p1Prompt(url: string, page: string): string {
  return `Research this project and return a JSON dossier.

URL: ${url}
PAGE CONTENT: ${page || "(unavailable — use your knowledge)"}

Return JSON with ALL fields (null if unknown):
{
  "url": "${url}", "collected_at": null, "collected_by": "collect-enriched-script",
  "name": null, "tagline": null,
  "project_type": null, "org_type": null, "issue_area": [], "sdg_alignment": [], "decade_plus": null,
  "geography": null, "countries_deployed": [], "communities_served": [], "political_units": [],
  "open_source": null, "github_url": null, "github_stars": null, "last_commit_date": null, "format": [],
  "founded_year": null, "team_size": null, "funding_model": [], "known_funders": [], "funding_verified": null, "last_funding_event": null, "dependency_risks": [],
  "news_articles": [], "academic_citations": [], "awards": [], "in_civictech_guide": null, "wikipedia_page": null,
  "policy_outcomes": [], "causation_strength": null, "outcome_methodology": null, "replication_materials_available": null, "preregistered_studies": [], "published_performance_metrics": null,
  "documented_limitations": [], "jurisdictional_scope": null, "failure_modes": [],
  "governance_model": null, "curation_criteria": null, "contributor_governance": null, "disparity_tracking": null, "community_ownership": null,
  "controversies": [], "political_bias_allegations": null, "legal_regulatory_issues": null,
  "elections_used_in": [], "government_partnerships": [], "ai_involvement": null
}`;
}

async function pass1(url: string, index: number, total: number): Promise<void> {
  const slug = resolveSlug(url);
  const outPath = path.join(OUTPUT_DIR, `${slug}.json`);

  if (fs.existsSync(outPath)) {
    if (!RETRY_ERRORS) { console.log(`[P1 ${index}/${total}] SKIP  ${slug}`); return; }
    const existing = loadFile(slug);
    if (existing && !existing.error) { console.log(`[P1 ${index}/${total}] SKIP  ${slug}`); return; }
  }

  console.log(`[P1 ${index}/${total}] START ${slug}`);
  try {
    const page = fetchPage(url);
    const raw = await callLLM(P1_SYSTEM, p1Prompt(url, page));
    const parsed = parseJSON(raw);
    parsed.collected_at = new Date().toISOString();
    parsed.collected_by = "collect-enriched-script";
    saveFile(slug, parsed);
    console.log(`[P1 ${index}/${total}] DONE  ${slug}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[P1 ${index}/${total}] ERR   ${slug}: ${msg}`);
    saveFile(slug, { url, slug, error: true, message: msg, collected_at: new Date().toISOString() });
  }
}

// ---------------------------------------------------------------------------
// PASS 2 — Fill null fields with targeted LLM searches
// ---------------------------------------------------------------------------

const P2_SYSTEM = `You are filling gaps in an existing project dossier. You are given the current JSON and a list of fields that are null or empty.

Search strategies by field:
- news_articles: search major outlets (Guardian, NYT, Wired, Reuters, TechCrunch, AP) for the project name
- academic_citations: search Google Scholar, SSRN, or OpenAlex for the project name
- known_funders / funding_verified: look for annual reports, Form 990 (ProPublica), EU grant databases
- elections_used_in: search project name + "election" OR "campaign" OR "voting"
- ai_involvement: search project name + "AI" OR "machine learning"
- github_stars / last_commit_date: check the GitHub URL if known
- team_size: check About/Team pages
- disparity_tracking: search project name + "equity" OR "inclusion" OR "disparity"
- curation_criteria: look for governance docs, contribution guides, or board minutes
- in_civictech_guide: check civictech.guide for the project name
- wikipedia_page: check en.wikipedia.org for the project name

Only update null/empty fields. Do not change fields that already have values.
Return ONLY the complete updated JSON, no markdown fences.`;

function p2Prompt(existing: Record<string, unknown>, nullFields: string[]): string {
  return `Fill the empty fields in this project dossier.

Empty fields to target: ${nullFields.join(", ")}

Current dossier:
${JSON.stringify(existing, null, 2)}

Use your knowledge of this project to fill as many empty fields as possible. Only update null/empty fields. Return the complete updated JSON.`;
}

async function pass2(url: string, index: number, total: number): Promise<void> {
  const slug = resolveSlug(url);
  const existing = loadFile(slug);
  if (!existing || existing.error) { console.log(`[P2 ${index}/${total}] SKIP  ${slug} (no pass1 data)`); return; }

  const nullFields = countNulls(existing);
  if (nullFields.length < NULL_THRESHOLD) { console.log(`[P2 ${index}/${total}] SKIP  ${slug} (${nullFields.length} nulls < threshold)`); return; }

  console.log(`[P2 ${index}/${total}] START ${slug} (${nullFields.length} nulls: ${nullFields.slice(0, 4).join(", ")}...)`);
  try {
    const raw = await callLLM(P2_SYSTEM, p2Prompt(existing, nullFields));
    const updated = parseJSON(raw);
    updated.collected_at = existing.collected_at;
    updated.pass2_at = new Date().toISOString();
    saveFile(slug, updated);
    const remaining = countNulls(updated).length;
    console.log(`[P2 ${index}/${total}] DONE  ${slug} (${nullFields.length - remaining} fields filled, ${remaining} still null)`);
  } catch (err) {
    console.error(`[P2 ${index}/${total}] ERR   ${slug}: ${err instanceof Error ? err.message : err}`);
  }
}

// ---------------------------------------------------------------------------
// PASS 3 — Structured database lookups (no LLM, direct API calls)
// ---------------------------------------------------------------------------

async function pass3(url: string, index: number, total: number): Promise<void> {
  const slug = resolveSlug(url);
  const existing = loadFile(slug);
  if (!existing || existing.error) { console.log(`[P3 ${index}/${total}] SKIP  ${slug}`); return; }

  const updates: Record<string, unknown> = {};
  const sources: string[] = [];

  // GitHub API
  const githubUrl = existing.github_url as string | null;
  if (githubUrl) {
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/\s#?]+)/);
    if (match) {
      const [, owner, repo] = match;
      const ghData = fetchJson(`https://api.github.com/repos/${owner}/${repo}`) as Record<string, unknown> | null;
      if (ghData && !ghData.message) {
        if (!existing.github_stars) updates.github_stars = ghData.stargazers_count;
        if (!existing.last_commit_date) updates.last_commit_date = (ghData.pushed_at as string)?.slice(0, 10) ?? null;
        updates.github_forks = ghData.forks_count;
        updates.github_license = (ghData.license as Record<string, string> | null)?.spdx_id ?? null;
        updates.github_language = ghData.language;
        updates.github_open_issues = ghData.open_issues_count;
        sources.push("github-api");
      }
      // Contributor count
      const contributors = fetchJson(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=1&anon=true`) as unknown[] | null;
      if (Array.isArray(contributors)) {
        updates.github_contributor_count_approx = contributors.length;
      }
    }
  }

  // OpenAlex — academic papers
  if (!existing.academic_citations || (existing.academic_citations as unknown[]).length === 0) {
    const name = encodeURIComponent((existing.name as string) ?? "");
    if (name) {
      const alexData = fetchJson(
        `https://api.openalex.org/works?search=${name}&filter=type:article&per-page=3&select=title,publication_year,cited_by_count,doi`
      ) as { results?: { title: string; publication_year: number; cited_by_count: number; doi: string }[] } | null;
      if (alexData?.results?.length) {
        updates.academic_citations = alexData.results.map(r => ({
          title: r.title,
          year: r.publication_year,
          cited_by: r.cited_by_count,
          doi: r.doi,
        }));
        sources.push("openalex");
      }
    }
  }

  // ProPublica Nonprofit Explorer (US nonprofits)
  if (!existing.funding_verified && existing.org_type === "Nonprofit/charity") {
    const name = encodeURIComponent((existing.name as string) ?? "");
    if (name) {
      const ppData = fetchJson(`https://projects.propublica.org/nonprofits/api/v2/search.json?q=${name}`) as
        { organizations?: { name: string; city: string; revenue_amount: number; ntee_code: string }[] } | null;
      if (ppData?.organizations?.length) {
        updates.propublica_match = ppData.organizations[0];
        updates.funding_verified = true;
        sources.push("propublica");
      }
    }
  }

  // Civictech.guide check
  if (existing.in_civictech_guide === null) {
    const name = encodeURIComponent((existing.name as string) ?? "");
    if (name) {
      const ctgData = fetchJson(`https://civictech.guide/wp-json/wp/v2/posts?search=${name}&per_page=1`) as unknown[] | null;
      if (Array.isArray(ctgData)) {
        updates.in_civictech_guide = ctgData.length > 0;
        sources.push("civictech-guide-api");
      }
    }
  }

  if (Object.keys(updates).length === 0) {
    console.log(`[P3 ${index}/${total}] SKIP  ${slug} (no new data found)`);
    return;
  }

  const merged = { ...existing, ...updates, pass3_at: new Date().toISOString(), _sources: sources };
  saveFile(slug, merged);
  console.log(`[P3 ${index}/${total}] DONE  ${slug} (+${Object.keys(updates).length} fields via ${sources.join(", ")})`);
}

// ---------------------------------------------------------------------------
// Worker pool runner
// ---------------------------------------------------------------------------

async function runPass(
  passName: string,
  fn: (url: string, i: number, total: number) => Promise<void>,
  urls: string[]
): Promise<void> {
  const total = urls.length;
  let index = 0;
  const queue = [...urls];
  console.log(`\n${"=".repeat(60)}`);
  console.log(`PASS ${passName} — ${total} projects, ${CONCURRENCY} concurrent`);
  console.log("=".repeat(60));
  const workers = Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    while (queue.length > 0) {
      const url = queue.shift();
      if (!url) break;
      await fn(url, ++index, total);
    }
  });
  await Promise.all(workers);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  buildUrlIndex();

  const urls = SINGLE_URL ? [SINGLE_URL] : await readCandidateUrls();

  console.log(`Model:       ${MODEL}`);
  console.log(`Concurrency: ${CONCURRENCY}`);
  console.log(`Candidates:  ${urls.length}`);
  console.log(`Output:      ${OUTPUT_DIR}`);
  console.log(`Pass:        ${PASS}`);

  if (PASS === "0" || PASS === "all") await runPass("0 (scraped fields)", pass0, urls);
  if (PASS === "1" || PASS === "all") await runPass("1 (broad sweep)", pass1, urls);
  if (PASS === "2" || PASS === "all") await runPass("2 (fill nulls)", pass2, urls);
  if (PASS === "3" || PASS === "all") await runPass("3 (structured DBs)", pass3, urls);

  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith(".json"));
  const errors = files.filter(f => {
    try { return JSON.parse(fs.readFileSync(path.join(OUTPUT_DIR, f), "utf-8")).error; } catch { return false; }
  });
  console.log(`\nFinished. ${files.length} files, ${errors.length} errors.`);
  if (errors.length) console.log(`Re-run with --retry-errors to retry: ${errors.slice(0, 5).join(", ")}`);
}

main().catch(err => { console.error(err); process.exit(1); });
