# Data-Gathering Log

Structured history of data inputs, cleaning, quality checks, and known gaps. Canonical full log for `/awards` rendering.

## At a glance

| Area | Current state | Where to read details |
|---|---|---|
| Scope | 321 candidates tracked | [Coverage and quality notes](#coverage-and-quality-notes) |
| Data maturity | Attempt 3 is current baseline (enriched dossiers + verification) | [Attempt 3](#attempt-3-enriched-dossiers-era) |
| Collection method | Multi-pass collection (Pass 0 to Pass 5) | [Cleaning and normalization steps](#cleaning-and-normalization-steps) |
| Main risks | Sparse evidence links, bot blocking, dead links, nomination quality issues | [Known limitations and gaps](#known-limitations-and-gaps) |
| Canonical source | This file (canonical) | [Canonical status](#canonical-status) |

## Attempts log

### Attempt 1 Cache-first era

- Primary shift: move from URL-only scoring toward cached homepage/pipeline artifacts.
- Key PRs: [v4](https://github.com/nwspk/politech-awards-2026/pull/9), [v5](https://github.com/nwspk/politech-awards-2026/pull/12)
- Outcome: faster reproducibility, but weak structured evidence.

### Attempt 2 Flat data-dump era

- Primary shift: introduce first structured metadata export in flat CSV form.
- Key PR: [v3](https://github.com/nwspk/politech-awards-2026/pull/7)
- Outcome: better baseline legibility, still partial and ad-hoc.

### Attempt 3 Enriched dossiers era

- Primary shift: full per-project dossiers with schema, passes, and verification.
- Key PR: [v6](https://github.com/nwspk/politech-awards-2026/pull/15)
- Outcome: full coverage and stronger auditability, with explicit evidence-quality limits.

## Data source additions and removals

| Date | Change type | Source change | Scope | Notes |
|---|---|---|---|---|
| 2026-02-13 | Added | `cache/sites.sqlite` homepage fetch cache | Candidate homepages | Introduced fetchability and page-content signal for scoring |
| 2026-02-22 | Added | `cache/assessments.json` + `cache/deliberation.json` | 321 candidates + shortlist | Added pipeline artifacts for ITN/A evaluation and deliberation |
| 2026-03-09 | Added | `data/enriched/<slug>.json` dossiers | 321 candidates | Introduced structured, per-project enrichment schema |
| 2026-03-10 | Added | Verification report generation | 321 dossiers | Added automated conformance and quality-flag checks |
| 2026-03-10 | Added | Jina Reader fallback fetch path | Thin/blocked pages | Used to recover content from bot-blocked or JS-heavy pages |
| 2026-03-10 | Removed/flagged | Non-project URLs from trusted-candidate assumptions | High-risk subset | Confirmed some entries are papers/templates/posts, not projects |

## Cleaning and normalization steps

| Step | What it does | Why it matters |
|---|---|---|
| Pass 0 extraction | Deterministic field extraction from cached HTML | Adds reproducible, non-LLM baseline signals |
| Pass 1 broad sweep | Fills core dossier fields across all projects | Ensures baseline profile coverage |
| Pass 2 null targeting | Targets projects with missing core fields | Reduces high-null blind spots |
| Pass 3 structured lookups | Pulls from structured/public records where available | Increases verifiability for funding/research claims |
| Pass 4 verification | Flags schema violations, contradictions, and weak evidence patterns | Converts dataset from "filled" to "audited" |
| Pass 5 Jina fallback | Re-fetches blocked/thin pages and merges only richer values | Improves weak dossiers while limiting regressions |

## Coverage and quality notes

| Metric | Value | Interpretation |
|---|---|---|
| Candidate list size | 321 | Full awards longlist scope |
| Dossier coverage (`data/enriched`) | 321/321 | Full file-level coverage achieved |
| Enrichment depth | Uneven by source availability | Richness depends on public evidence footprint |
| High-value evidence fields | Still sparse in portions of dataset | Policy outcomes and linked external validation remain hardest |
| Reliability profile | Mixed | Strong for well-documented projects, weaker for dead/blocked/minimal-web-presence projects |

## Known limitations and gaps

- Some projects have dead or unstable homepages at scrape time.
- Bot-blocking and anti-scraping behavior reduces direct content retrieval.
- Evidence-heavy fields (`policy_outcomes`, `causation_strength`) are structurally hard to verify from homepage-centric collection.
- Election-context usage data remains significantly underfilled.
- A subset of candidate URLs are likely nomination-quality issues (non-project endpoints).

## Canonical status

This file is the canonical full record for data-gathering history and detailed attempt notes.
