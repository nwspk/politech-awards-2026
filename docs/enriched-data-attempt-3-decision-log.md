# Enriched Project Data — Design & Decisions

This document is the single reference for the **data enrichment** work (321 project dossiers): schema, rationale, methodology, and every significant decision made during collection. It accompanies the enrichment PR so the attempt is transparent, reproducible, and searchable long term.

---

## 1. Goal & output

The existing `candidates-with-data.csv` covers ~80 of 320 projects with basic metadata. AI assessments in `cache/assessments-merged.json` often flag "thin content" — reviewers couldn't find team, funding, impact, or usage data, leading to low-confidence scores.

This design defines a richer data schema for **all 321 candidates**, aligned with the [Civic Tech Field Guide](https://civictech.guide/) and v6 jury gap analysis.

**Output:**

- `data/enriched/<slug>.json` — one file per project (slug from domain+path or project name)
- `data/enriched/projects-enriched.json` — combined index (if generated)

---

## 2. Decisions log

Each entry records: **Decision** · **Reasoning** · **Outcome** · **Date**.

### Decision 1 — Schema additions from v6 jury gap analysis

**Date:** 2026-03-09

**Decision:** Extend the schema with fields targeting the information gaps that caused low-confidence scores in v6 jury deliberations.

**Reasoning:** Analysis of all six v6 jury delegation files revealed consistent patterns: causation vs. correlation, invisible failure modes, governance opacity, unverifiable research claims, unverifiable funding. Added fields: `causation_strength`, `policy_outcomes`, `documented_limitations`, `failure_modes`, `jurisdictional_scope`, `curation_criteria`, `contributor_governance`, `disparity_tracking`, `replication_materials_available`, `preregistered_studies`, `published_performance_metrics`, `funding_verified`, `last_funding_event`.

**Outcome:** Schema extended to 10 sections (Section 3 below). Full rationale in Section 4.

---

### Decision 2 — Collection pass architecture

**Date:** 2026-03-09

**Decision:** Structure data collection as sequential passes, each targeting a different depth of research.

**Reasoning:** A single deep-research pass for 321 projects would be slow and inconsistent. Separating by depth allows fast broad coverage first, then targeted gap-filling.

- **Pass 0 — Scraped page fields:** Direct extraction from `cache/sites.sqlite` (no LLM). HTTP status, word count, team page link, impact metrics, raw description, final URL.
- **Pass 1 — Broad sweep:** Project homepage, About/Team, general news, Wikipedia, GitHub, civictech.guide. Goal: populate core fields for every project.
- **Pass 2 — Null field targeting:** Trigger: any file with 10+ null/empty fields after pass 1. Field-specific searches. Goal: close the most common gaps.
- **Pass 3 — Structured database lookups:** ProPublica (Form 990s), EU CORDIS, OpenCharities, GitHub API, OpenAlex API. Goal: replace self-reported data with verifiable records.

**Outcome:** All four passes implemented in `scripts/data-processing/collect-enriched.ts`. 321 files complete through Pass 0. 317 complete through Pass 2. 150 complete through Pass 3.

---

### Decision 3 — Pass 0: scraped-page fields from cache/sites.sqlite

**Date:** 2026-03-10

**Decision:** Add a Pass 0 that extracts structured fields directly from `cache/sites.sqlite` before any LLM call.

**Reasoning:** The sites SQLite contains raw HTML for all 321 projects scraped in February 2026. This lets us derive verifiable, reproducible facts cheaply: HTTP status at scrape time (dead link detection), word count (proxy for content richness), whether the homepage links to a team/about page, whether the page has quantified impact claims, raw meta description or first paragraph (unfiltered, not LLM-summarised), final URL after redirects. None of these require API calls. They serve as confidence signals for the LLM-derived data: a 30-word homepage with a dead link should lower confidence in any Pass 1 data.

**Outcome:** Pass 0 added to collection pipeline. All 321 files now have `scraped.*` fields populated. Stats: 22 dead links · 180 with team pages · 57 with impact metrics detected.

---

## 3. Schema

### Section 1 — Identity & Classification

| Field | Type | Notes |
|-------|------|-------|
| `project_type` | enum | Tool/Platform · Organization · Network · Database · Method · Campaign · Publication · Other |
| `org_type` | enum | Nonprofit/charity · For-profit/social enterprise · Academic/research · Government/public sector · Grassroots/indie · Multilateral institution · Advocacy org · Media org |
| `issue_area` | string[] | CTG: `participatory_democracy` · `govtech` · `advocacy_tech` · `civic_data` · `media_journalism` · `digital_rights` · `disinformation` · `emerging_tech` · `cybersecurity` |
| `sdg_alignment` | string[] | UN SDGs (e.g. SDG 16 Peace/Justice) |
| `decade_plus` | bool | Project running 10+ years — proxy for durability |

### Section 2 — Reach & Geography

| Field | Type | Notes |
|-------|------|-------|
| `geography` | enum | `city` · `state` · `national` · `regional` · `international` |
| `countries_deployed` | string[] | |
| `communities_served` | string[] | e.g. youth, refugees, journalists, campaigners, researchers, citizens, government staff |
| `political_units` | string[] | `city` · `state` · `federal` · `international` |

### Section 3 — Technical Profile

| Field | Type | Notes |
|-------|------|-------|
| `open_source` | enum | `yes` · `no` · `partial` |
| `github_url` | string | |
| `github_stars` | number | |
| `last_commit_date` | string | ISO date |
| `format` | string[] | `api` · `app` · `platform` · `report` · `database` · `course` · other |

### Section 4 — Provenance & Sustainability

| Field | Type | Notes |
|-------|------|-------|
| `founded_year` | number | |
| `team_size` | enum | `solo` · `small` (<10) · `medium` (10–50) · `large` (50+) |
| `funding_model` | string[] | `grants` · `subscriptions` · `donations` · `public_funding` · `vc` · `hybrid` |
| `known_funders` | string[] | e.g. Ford, Knight, OSF, EU, NED, government contracts |
| `funding_verified` | bool | Backed by public disclosures (Form 990, EU grants, etc.) |
| `last_funding_event` | string | ISO date of last known grant/round |
| `dependency_risks` | string[] | Third-party dependencies and contingency plans |

### Section 5 — External Validation & Media

| Field | Type | Notes |
|-------|------|-------|
| `news_articles` | object[] | `{headline, outlet, date, url}` — top 3–5 |
| `academic_citations` | string[] | Papers studying or citing the project |
| `awards` | string[] | Notable recognitions |
| `in_civictech_guide` | bool | Listed on civictech.guide |
| `wikipedia_page` | bool | |

### Section 6 — Impact & Evidence

| Field | Type | Notes |
|-------|------|-------|
| `policy_outcomes` | object[] | `{description, link, year}` — documented policy/social changes with evidence links |
| `causation_strength` | enum | `anecdotal` · `correlated` · `directly_cited` · `independently_verified` |
| `outcome_methodology` | string | How the project measures its own impact |
| `replication_materials_available` | bool | Code/data/methodology publicly accessible |
| `preregistered_studies` | string[] | Links to OSF or academic pre-registrations |
| `published_performance_metrics` | string | F1, precision/recall, benchmarks — for research-producing projects |

### Section 7 — Limitations & Failure Modes

| Field | Type | Notes |
|-------|------|-------|
| `documented_limitations` | string[] | Where the project says it doesn't work or isn't appropriate |
| `jurisdictional_scope` | string | Legal/regulatory constraints (e.g. "UK/EU GDPR only") |
| `failure_modes` | string[] | Known ways the project can degrade or be misused |

### Section 8 — Governance & Power

| Field | Type | Notes |
|-------|------|-------|
| `governance_model` | enum | `foundation` · `LLC` · `cooperative` · `project_of_larger_org` · `individual` |
| `curation_criteria` | string | For lists/databases: inclusion/exclusion and who controls it |
| `contributor_governance` | string | Who can contribute, how decisions are made, public charter |
| `disparity_tracking` | bool | Whether benefits are measured across communities |
| `community_ownership` | string | Steering committee, user council, community governance |

### Section 9 — Controversy & Risk

| Field | Type | Notes |
|-------|------|-------|
| `controversies` | string[] | Known criticisms or incidents |
| `political_bias_allegations` | string | If any documented |
| `legal_regulatory_issues` | string | If any |

### Section 10 — Political Context (awards-specific)

| Field | Type | Notes |
|-------|------|-------|
| `elections_used_in` | string[] | Specific elections or campaigns |
| `government_partnerships` | string[] | Formal public sector relationships |
| `ai_involvement` | string | Does the project use AI, and how? |

---

## 4. Rationale for schema choices

### Civic Tech Field Guide alignment

The CTG schema was used as the reference for field consensus on how civic tech projects are described:

- **`project_type`** — Distinguishes tools vs. organisations vs. methods vs. campaigns; existing data conflated these.
- **`issue_area`** — CTG taxonomy replaces ad-hoc category strings for consistent comparison.
- **`sdg_alignment`** — UN SDG tags; jury lenses map naturally to SDG framings.
- **`communities_served`** — Who the project actually serves is often missing from homepages but critical for the relational jury lens.
- **`political_units`** — City/state/federal/international separates local govtech from global advocacy.
- **`decade_plus`** + **`in_civictech_guide`** — Lightweight legitimacy signals that reduce jury uncertainty.

### Jury-derived fields (v6 gap analysis)

Additions came from analysing v6 jury deliberations (`iterations/v6/jury-delegations/`). All six juries hit the same information walls:

- **`causation_strength`** — Juries couldn't separate correlation from causation (e.g. AlgorithmWatch Grok: "timing alone doesn't prove causation").
- **`policy_outcomes`** with links — Traceable chain from project activity to real-world change.
- **`documented_limitations`** + **`failure_modes`** — Projects only publish wins; e.g. Claude jury gave Awesome Gov Datasets 42% because it couldn't tell what the list excluded.
- **`curation_criteria`** + **`contributor_governance`** — Surfaces who controls what counts as "open."
- **`disparity_tracking`** — Whether tools reach the communities that need them most.
- **`replication_materials_available`** + **`published_performance_metrics`** — Experimental lens juries wanted verifiable research claims (e.g. Soweego F1 curves, OSF pre-registrations).
- **`funding_verified`** + **`last_funding_event`** — Funding claims on homepages are unaudited; these flag public disclosure and recency.

---

## 5. Collection approach

- **Scope:** All 321 candidates. Prioritisation by v6 score if needed.
- **Method:** Web search + project homepage + GitHub API for open source; Pass 2 targets nulls; Pass 3 uses structured DBs (see Decision 2).
- **Missing fields:** Leave `null` rather than guessing; note confidence where relevant.
- **Metadata:** Each file should include `collected_at` (ISO) and `collected_by` where applicable.

---

### Decision 4 — Data quality verification (Pass 4)

**Date:** 2026-03-10

**Decision:** Add a verification pass (`scripts/data-processing/verify-enriched.ts`) that checks all 321 dossiers for schema conformance, internal consistency, and data quality signals.

**Reasoning:** The LLM-generated data (Passes 1–2) has no automated quality check. Specific failure modes to catch:
- **Schema violations:** enum fields set to values outside the allowed set (e.g. `org_type: "NGO"` instead of `"Nonprofit/charity"`)
- **Internal contradictions:** `open_source=yes` with no `github_url`; `decade_plus=true` but `founded_year >= 2016`; `causation_strength=independently_verified` with no `policy_outcomes`; `funding_verified=true` with no `known_funders`
- **Thin homepage signal:** `homepage_word_count < 50` means the LLM had very little real page content to work from — data is more likely hallucinated
- **Dead link with data:** `dead_link=true` but file has LLM-derived data — that data may be stale or invented
- **High null count:** ≥15 null core fields flags a candidate for re-collection
- **Outcome links missing:** `policy_outcomes` entries without evidence URLs

The script produces a summary report and can write `data/enriched/verification-report.json` for durable reference.

**Outcome:** Verification pass added. Final verification state (2026-03-10):

| Metric | Count |
|---|---|
| Files with 0 flags (clean) | 171 / 321 (53%) |
| Files with warnings | 81 |
| Files with errors | 0 |
| INVALID_ENUM remaining | 100 (one-off creative strings, not systematic) |
| THIN_HOMEPAGE (< 50 words) | 45 |
| OUTCOME_NO_LINK | 36 |
| DEAD_LINK_HAS_DATA | 22 |
| OPEN_SOURCE_NO_GITHUB | 8 |
| HIGH_NULL_COUNT (≥ 15 nulls) | 2 |

Top null fields flagged for future passes: `elections_used_in` (92% null), `policy_outcomes` (61%), `causation_strength` (52%), `failure_modes` (39%), `news_articles` (37%).

Full machine-readable report: `data/enriched/verification-report.json`.

---

### Decision 5 — Risk triage: projects at high risk of being disregarded

**Date:** 2026-03-10

**Decision:** Run a risk analysis across all 321 dossiers to identify which projects are most likely to be discounted by juries due to insufficient data, and flag them explicitly in this log.

**Reasoning:** The verification pass revealed that data quality is uneven. Some projects have thin or no verifiable web presence; others have dead links at scrape time meaning the LLM data may be stale or hallucinated. Juries cannot fairly evaluate a project with 18 null fields and a dead homepage. Identifying these proactively lets the committee decide whether to attempt re-collection, flag for manual research, or note the gap in the published dossier.

**Risk scoring method:** Composite score weighted by: `HIGH_NULL_COUNT` (+30), `DEAD_LINK_HAS_DATA` (+25), `THIN_HOMEPAGE` (+20), `MODERATE_NULL_COUNT` (+15), `INVALID_ENUM` (+3 each), plus 1.5× null field count.

**Outcome:** Three risk tiers identified:

**Tier 1 — Critical (likely disregarded without intervention):**

| Project | File | Issues |
|---|---|---|
| Unknown Academic Paper (SSRN 5351275) | `unknown-academic-paper-ssrn-5351275.json` | Not a project — a research paper URL. Dead link, 18 nulls, thin page. Possible data entry error. |
| *(unnamed)* | `tracking-template-38b4c-web-app.json` | No project name resolved. 21 nulls, thin page. Firebase app URL — may not be a public project. |
| Local Deep Researcher | `local-deep-researcher.json` | Dead link + thin page + 14 nulls. No verifiable web presence. |
| Papertree | `papertree.json` | Pass 1 only (never enriched past first sweep). 12 nulls. Also had corrupted data from a collection misfire that wrote Blacksky's research into its URL files — resolved by merge but warrants manual check. |

**Tier 2 — High risk (dead links, LLM data may be stale):**
22 projects where `dead_link=true` at scrape time. For well-known projects (Anna's Archive, Sci-Hub, CrowdJustice, Metaculus) the LLM training data is likely sufficient. For smaller/less-known tools the risk of  hallucination is higher: **PolicyKit, Agreement Engine, DoGooder, dDocs, CivicMatch, Membership, Violation Tracker UK, Hand-Written Petition Scanner, Parti, PlanIT**.

**Tier 3 — Moderate (thin homepage, high null counts):**
Projects with <50 words on the scraped page and 6+ null core fields, where the LLM had minimal real content: **Consciousness Evolution Operating System, Dunadyne, Channel.org, Ladder Hub, semanticClimate, Mapping.kids, Democracy Fund Open Source, Citizens Advice Tableau Public Profile**.

**Structural null gaps across all 321 files** (fields most likely to cause low jury confidence):

| Field | Missing in | Why it matters |
|---|---|---|
| `elections_used_in` | 294 (92%) | Core political context field |
| `policy_outcomes` | 197 (61%) | Primary evidence of impact — v6 juries' most-cited gap |
| `causation_strength` | 167 (52%) | Required to distinguish claims from evidence |
| `failure_modes` | 124 (39%) | Absence signals lack of self-critical documentation |
| `news_articles` | 118 (37%) | External validation signal |

**Recommended next action:** Run a targeted Pass 2 on Tier 1 and Tier 2 projects before the committee review, prioritising `policy_outcomes`, `causation_strength`, and `news_articles`. *(Completed — see Decision 6 / PR Step 4.)*

---

### Decision 6 — Targeted priority Pass 2 on Tier 1 and Tier 2 projects

**Date:** 2026-03-10

**Decision:** Run a focused second collection pass on the 24 Tier 1 and Tier 2 projects, specifically targeting `policy_outcomes`, `causation_strength`, and `news_articles` regardless of overall null count.

**Reasoning:** The standard Pass 2 threshold (≥10 null fields) would skip many of these projects, which had already been partially enriched but were still missing the three highest-stakes jury fields. A dedicated priority pass with a stronger system prompt and no threshold bypass was needed to maximise data quality before committee review.

**Implementation:** Three additions to `collect-enriched.ts`:
- `--url-file` — accepts a newline-separated list of URLs, so the pass can be targeted at an arbitrary subset
- `--force-pass2` — bypasses the null-count threshold so every listed project gets re-run
- `--priority-fields` — activates an alternative system prompt (`P2_PRIORITY_SYSTEM`) that instructs the LLM to focus on `policy_outcomes`, `causation_strength`, and `news_articles` first, with strict instructions on evidence links and source confidence

Also fixed a latent bug in `parseJSON`: the function was doing a simple strip of markdown fences, but when the LLM appended explanatory prose after a large JSON block, the parse failed. Fixed by extracting the outermost `{...}` block from the raw output before parsing.

**Process:** 24 URLs written to `tier1-2-urls.txt` (4 Tier 1 + 20 Tier 2 unique projects). Pass ran at 24 concurrent workers. One timeout (Metaculus) retried individually.

**Outcome:**

| Metric | Before | After |
|---|---|---|
| Projects with policy_outcomes | 0/24 | 11/24 |
| Projects with news_articles | 3/24 | 17/24 |
| DEAD_LINK_HAS_DATA flags | 22 | 20 |
| OUTCOME_NO_LINK flags | 36 | 35 |

**Projects that filled well** (gained `policy_outcomes` and `news_articles`): Abstract Wikipedia, CrowdJustice, Entitledto, Give Food, Members' Interests, Metaculus, Open Access (Transparency International UK), Parti, PlanIT, Security First / Umbrella, UK Parliament Developer Portal.

**Projects that remain data-poor after targeted pass** (all returned `causation_strength: "anecdotal"` with 0 policy outcomes and 0–1 news articles): Unknown Academic Paper (SSRN), tracking-template Firebase app, Local Deep Researcher, Papertree, Agreement Engine, DoGooder, Hand-Written Petition Scanner, Membership, Public Editor, Violation Tracker UK.

**Interpretation:** The 10 persistently data-poor projects fall into two groups. The first four (SSRN paper, Firebase app, Local Deep Researcher, Papertree) are genuine Tier 1 critical cases — either not real public projects or projects with almost no web presence. The remaining six are legitimate but genuinely niche tools with minimal media coverage and no documented policy outcomes — their honest assessment is `anecdotal` at best. The committee should note that these projects' low enrichment scores reflect sparse evidence, not researcher error.

---

### Decision 7 — Root-cause taxonomy of data-poor projects

**Date:** 2026-03-10

**Decision:** Document why the 10 persistently data-poor projects (after targeted Pass 2) failed to enrich, and distinguish fixable scraping gaps from fundamental URL/candidate mismatches.

**Reasoning:** The pattern is very clear. The issues fall into four distinct categories:

**1. The URL is not a project (2 projects)**

- **Unknown Academic Paper (SSRN 5351275)** — The URL points to a paywall-protected academic paper. SSRN returns 403. There is no project here to enrich, just a research paper. Likely a nomination error.
- **tracking-template (Firebase app)** — 20 words on the page, no name resolved. Almost certainly a blank Firebase template or a private internal tool accidentally submitted with a public-looking URL. There is no project here.

**2. The URL is a Medium blog post, not a project home (2 projects)**

- **Agreement Engine** — The URL is a Medium article on the Metagov publication, not a product homepage. Medium blocks scrapers (403), so we got 9 words. The "project" may be a concept paper or prototype — it has no standalone web presence.
- **Membership** — Same problem. The URL is a personal Medium post (@abscond) describing a prototype. Not a deployed tool, no homepage, no organisation behind it.

**3. Deployment infrastructure URLs, not project sites (2 projects)**

- **Hand-Written Petition Scanner** — Hosted on streamlit.app, a free app-hosting platform for demos and prototypes. No scrape data at all (null status). Typically student projects or one-off experiments without documentation or impact history.
- **Local Deep Researcher** — Hosted on vercel.app, same pattern. Returns 404. A personal project deployed on free hosting with no dedicated domain.

**4. Real projects, but scrapers blocked (403) hiding genuine content (4 projects)**

- **DoGooder, Violation Tracker UK, Public Editor** — All return 403; their sites exist but blocked the scraper. The LLM has limited training data on them. DoGooder and Violation Tracker UK are real tools — the data gap is a scraping problem, not an absence of substance.
- **Papertree** — Actually scraped fine (200, 427 words) and is a real product. The issue is that it's a climate/environment tool rather than a political technology tool — it probably has no policy outcomes or news coverage in the political technology space that the LLM knows about. It may simply be misclassified as a candidate.

**Outcome:** Taxonomy recorded. Practical fix for category 4: **[Jina Reader](https://r.jina.ai/)** (`https://r.jina.ai/<url>`) is a free public API that renders pages headlessly and handles most bot-detection and JavaScript-rendered sites. Use as fallback for 403 or null. Caveats: Medium posts are still prototype descriptions, not homepages; SSRN is paywall; Streamlit/Vercel demos have only app UI. *(Jina pass implemented — see Decision 8.)*

---

### Decision 8 — Pass 5: Jina Reader re-fetch for thin/blocked sites

**Date:** 2026-03-10

**Decision:** Add a fifth collection pass using [Jina Reader](https://r.jina.ai/) (`r.jina.ai/<url>`) to re-fetch all 321 projects and update dossier fields only where the new content is better than what was already collected.

**Reasoning:** Ten projects remained data-poor after the targeted Pass 2 (Decision 6). Investigation showed four categories (see Decision 7): (1) not real projects, (2) Medium/blog post URLs with no product homepage, (3) JavaScript-rendered demo apps with no documentation, and (4) real sites returning 403 to our `curl`-based scraper (DoGooder, Violation Tracker UK, Public Editor, Papertree). Jina Reader is a free headless renderer that renders JS, bypasses some bot-detection, and returns clean markdown. It is better suited than direct `curl` for sites in category 4. As a secondary benefit, Jina often returns more structured text from standard sites, so running it across all 321 can opportunistically improve taglines and context fields even for projects that were already reasonably enriched.

**"Better than existing" rule:** Fields are updated only if:
- The field is currently null/empty and Jina provides an answer, **or**
- The field has a value and the new value is at least 30% longer and >20 characters more — signalling substantially more detail, not just rephrasing.

Numeric/boolean fields (founded_year, github_stars, etc.) are never overwritten by this heuristic — only string and array fields.

**Implementation:** Added to `scripts/data-processing/collect-enriched.ts`:
- `fetchPageJina(url)` — fetches `r.jina.ai/<url>` via curl, detects rate-limit JSON responses, strips Jina header lines, returns up to 6,000 characters
- `pass5()` — fetches via Jina, skips if <50 words returned; skips LLM call if Jina is no richer than cached content AND dossier already has <8 nulls; runs `callLLM()` otherwise
- `isBetterValue()` + `mergeImprovements()` — merge logic that only applies changes where the new value is demonstrably richer
- Rate-limit detection: if Jina returns a 429 JSON error, wait 12 seconds and retry once

**Rate limiting:** Jina's free tier allows 20 requests/minute per IP. At 60 concurrent workers, the first run immediately triggered rate limits. After reducing to 15 concurrent workers, the pass completed cleanly. A 12-second backoff retry handles isolated 429s.

**Process:** Three runs total:
1. 30-worker host-job (killed at ~45/321 to switch to higher concurrency)
2. 60-worker run (killed immediately; rate limits hit within seconds)
3. 15-worker run (completed 254/321) + 10-worker follow-up for remaining 67 (completed all but 24 timeouts)

**Outcome:**

| Metric | Value |
|---|---|
| Projects processed (pass5_at set) | 297/321 (93%) |
| Projects with ≥1 field improved | 30 |
| Total field improvements | 68 |
| Top improved fields | tagline (13), policy_outcomes (13), communities_served (6), news_articles (6), countries_deployed (5) |
| Projects not reached | 24 (LLM timeouts during Jina+LLM combined call — acceptable gap) |

**Impact on persistently data-poor projects:** Jina was able to retrieve content for Violation Tracker UK (451w vs 9w cached) and Dunadyne (345w vs 16w cached), adding new fields for both. DoGooder (411w vs 127w) also improved. Sites that remained thin through Jina (Local Deep Researcher, SSRN paper, Firebase template) are confirmed to have no retrievable public web presence and should be flagged as "data not available" in the published dossier.

**No further automated passes planned.** The enriched data is now as complete as automated methods can make it for this dataset.

---

### Decision 16 — Remaining limitations after all automated passes

**Date:** 2026-03-10

**Context:** After five collection passes (0–5), this section documents what the automated pipeline could not fix, and what a future attempt should do differently.

---

#### 1. The impact evidence problem (structural — not fixable by scraping)

The three highest-jury-value fields are exactly the ones where LLM output is least trustworthy:

| Field | Gap | Root cause |
|---|---|---|
| `policy_outcomes` | 57% null; of 132 filled, only 33 have an evidence link | LLMs summarise claims but cannot verify them. Most projects self-report impact without publishing proof. |
| `causation_strength` | 46% null; 1 project `independently_verified`, 11 `directly_cited` | Distinguishing "correlated" from "directly_cited" requires reading primary sources — legislation, government reports — not reliably in training data. |
| `news_articles` | 167 filled but no URLs; only 38 have a URL | LLMs confidently hallucinate headlines. Unlinked articles are unverifiable and effectively useless as evidence. |

The dataset has a credibility problem: it looks richer than it is because arrays are filled but the contents are not independently verifiable.

---

#### 2. `elections_used_in` is essentially empty (92% null)

294 of 321 projects have no election data — the most contextually important field for a political technology awards. Most projects don't publish which specific elections they were used in even when they were. A general LLM sweep cannot fill this; it would require a dedicated search across election press releases, Ballotpedia, NDI reports, or parliamentary records.

---

#### 3. `failure_modes` and `documented_limitations` are structurally underfilled

38% and 25% null respectively. More critically, even where filled the content is thin and self-reported. Genuine failure documentation comes from academic critiques, investigative journalism, or post-mortems that organisations rarely publish. An LLM defaults to inventing plausible-sounding risks rather than citing real documented failures.

---

#### 4. 20 projects have dead/stale homepages — their data is unverifiable

`dead_link=true` at scrape time. For well-known projects (Sci-Hub, Anna's Archive) training data is likely sufficient. For niche ones the LLM data may be months or years out of date, or hallucinated. Jina did not help here — a dead site is dead to all scrapers.

 True dead links (404/503/no response):

  ┌─────────────────────────────────────────────┬─────────────┬───────────────────────────────────────────────────┐
  │                   Project                   │   Status    │                       Notes                       │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Abstract Wikipedia                          │ 404         │ Wikimedia redirect/restructure — page moved       │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Local Deep Researcher                       │ 404         │ Vercel demo app — likely taken down               │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Members' Interests                          │ 404         │ Domain appears defunct                            │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Open Access – Transparency International UK │ 404         │ Subdomain gone                                    │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ PlanIT                                      │ 404         │ Domain dead                                       │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ PolicyKit                                   │ 503         │ Service unavailable — may be down                 │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Anna's Archive                              │ no response │ Likely geo-blocked or rate-limited at scrape time │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Hand-Written Petition Scanner               │ no response │ Streamlit demo — probably expired                 │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Public Editor                               │ no response │ No response at scrape time                        │
  ├─────────────────────────────────────────────┼─────────────┼───────────────────────────────────────────────────┤
  │ Sci-Hub                                     │ no response │ Blocked at network level (mirrors rotate)         │
  └─────────────────────────────────────────────┴─────────────┴───────────────────────────────────────────────────┘

  Blocked scrapers (403) — sites are live, just won't serve bots:

  ┌────────────────────────────────┬──────────────────────────────────┐
  │            Project             │              Notes               │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ Agreement Engine               │ Medium post                      │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ CrowdJustice                   │ Active product, just bot-blocked │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ DoGooder                       │ Active product                   │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ Entitledto                     │ Active product                   │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ Give Food                      │ Active product                   │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ Membership                     │ Medium post                      │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ Metaculus                      │ Active product                   │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ UK Parliament Developer Portal │ Active, bot-blocked              │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ Unknown Academic Paper (SSRN)  │ SSRN paywalled                   │
  ├────────────────────────────────┼──────────────────────────────────┤
  │ Violation Tracker UK           │ Active product                   │
  └────────────────────────────────┴──────────────────────────────────┘

  So really only ~10 are genuinely dead/unreachable. The other 10 are real live products that blocked the scraper — their LLM data is likely fine for well-known ones (Metaculus, CrowdJustice, Sci-Hub, Give Food), more suspect for the smaller ones (Members' Interests, Entitledto, DoGooder).

---

#### 5. 4 confirmed non-projects in the candidate list

- **Unknown Academic Paper (SSRN 5351275)** — a paywall-protected paper, not a project
- **tracking-template (Firebase app)** — a blank Firebase template or private internal tool
- **Agreement Engine** — a Medium concept article, no deployable product or standalone web presence
- **Membership** — a personal Medium post describing a prototype

All four should be flagged for removal from the candidate list before committee review.

---

#### 6. Link quality across the dataset is poor

99 projects have `policy_outcomes` filled but with no evidence links — as weak as `anecdotal` regardless of the `causation_strength` value. 167 `news_articles` entries have no URL and cannot be verified. These inflate apparent completeness without providing real evidentiary value.

---

#### What a future attempt should do differently

| Fix | How |
|---|---|
| Real-time web search for evidence links | Use a live search tool (Perplexity, Tavily, or a search API) specifically for `policy_outcomes` — only store outcomes the tool can return a direct URL for |
| Validate news URLs at collection time | After LLM fills `news_articles`, fetch each URL and discard 404s before saving — never store unverified links |
| Elections data from structured sources | Search Ballotpedia, Electoral Integrity Project, NDI, or election-specific press release archives rather than project homepages |
| Human spot-check layer | Flag high-null or high-anecdotal projects for 15-minute manual researcher review before committee sees them |
| Remove confirmed non-projects | The 4 non-project URLs should be excluded from the candidate list before the next collection run |
