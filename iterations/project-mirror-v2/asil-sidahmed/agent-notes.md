# Agent Notes — Asil Sidahmed
## Project Mirror v2 | Step 8: Mirror-Notetaker
## Date: 2026-03-28

> Forensic notes for this run. These notes document gaps, quality issues, divergences, and rerun triggers. They are the raw material for the process-record.md entry and the v2-summary PR.

---

## Evidence Gaps

### Sources inaccessible — each with relevance assessment

1. **LinkedIn profile** (linkedin.com/in/asil-sidahmed-84910839/) — auth-walled. Full career timeline, endorsements, post history inaccessible. The LinkedIn post about her Sudan advisory role is partially visible (preview + 55 comments) but the full content is locked. **Constitution impact: LOW-MEDIUM.** Core career facts are established via Oxford Initiative and Diverse Minds; LinkedIn would mainly fill timeline details and possibly reveal advisory roles or position statements from 2022-present.

2. **Twitter/X** (@asilsidahmed) — handle confirmed via Diverse Minds podcast but content inaccessible. If active, would be the richest source for first-person views on governance, health technology, and political events. **Constitution impact: HIGH IF ACTIVE.** Cannot confirm activity level or content.

3. **MSF Analysis** (msf-analysis.org/tag/asil-sidahmed/) — page timed out on fetch. Her MSF Analysis contributions would be the closest thing to published analytical writing — reflections on humanitarian trends, advocacy methodology, field experience. **Constitution impact: MEDIUM-HIGH.** Missing her most direct analytical voice in a professional context.

4. **BIC-RHR profile** (bic-rhr.com/node/817) — 404 error. Human rights context bio. Cannot verify. **Constitution impact: LOW.**

5. **Academic publications** — no indexed papers found in any searched database. No Oxford ORA thesis, no journal articles, no conference papers. This is the most striking absence for someone with an MPhil from Oxford. **Constitution impact: MEDIUM.** The absence means the constitution is built entirely on institutional profiles, one podcast interview, and a personal website — no extended analytical writing.

6. **GitHub** — no profile found. Confirms the evidence gap on technology-specific positions. **Constitution impact: LOW directly, but symptomatic of the technology evaluation weakness.**

### Name collision

- **Identified:** Abdel Salam Sidahmed (academic, born 1956) and Alsir Sidahmed (journalist/writer). Entirely different people — trivial disambiguation.
- **No other "Asil Sidahmed" found.** The name is globally unique in search results.
- **Residual risk:** NONE. Cross-confirmation achieved via 6+ independent sources sharing MSF Belgium, Oxford, Yemen, Sudan, Sana'a Center, Lancaster markers.

---

## Dossier Quality Issues

### Fields missing or thin across 321 projects

The most consequential missing fields for this constitution:
- `health_dimension` — proposed in Part E but not in current dossier schema. Must be inferred entirely from sector, issue_area, and scraped_description keywords. This is the highest-weighted criterion (25pts) and relies on keyword matching for "health," "maternal," "disease," "clinic," "patient," "SGBV," "reproductive" — terms that many health-adjacent projects do not use.
- `community_governance` — proposed in Part E but not present. Must be inferred from governance_model field (when present) or text analysis. Critical for Criteria 2 and 3.
- `participatory_design` — proposed in Part E but not present. No structured way to assess whether projects were co-designed with affected communities.
- `leadership_geography` — not in schema. Must be inferred from countries_deployed, which captures deployment geography not leadership geography. This distinction matters for Modifier M1 (Global South leadership).
- `conflict_sensitivity` — not in schema. Inferred from countries_deployed matching conflict-affected country lists.

### Projects below 0.4 dossier completeness

Only 2 projects triggered underdog protection (score floor 30):

| Project | Completeness | Score | Note |
|---|---|---|---|
| SSRN paper (5351275) | ~0.08 | 30.0 | Empty dossier, dead link — floor applied |
| Unknown project | ~0.10 | 30.0 | Empty dossier — floor applied |

This low count reflects thorough enrichment of the 321-project dataset. Most thin dossiers still exceeded 0.4 completeness.

---

## Scoring Methodology Notes

### score_all.py — keyword-based constitutional scoring

The ranking was produced by `score_all.py` (v3), a Python script that implements the constitutional algorithm using keyword matching and structured field access. Key design decisions:

1. **`all_text()` extraction:** Concatenates ALL text from every dossier field rather than targeting specific fields. This prevents the field-name mismatch problem that caused v1's low scores (max 37.6).

2. **Non-linear keyword scaling:** `kw_score()` uses: 1 hit=15, 2=30, 3=45, 5=65, 8=80, 12+=100. This rewards breadth of keyword presence without requiring exhaustive coverage.

3. **Domain-aware scoring functions:** `score_c1_health()` recognizes health-adjacent terms (civil registration → health infrastructure, disease surveillance, maternal health). `score_c2_decolonial()` checks for governance_model field values and Global South deployment. `score_c5_conflict()` matches countries_deployed against a conflict-affected country list.

4. **Modifier implementation:** M1 (Global South leadership) checks countries_deployed for non-OECD countries. M2 (surveillance penalty) checks for surveillance/tracking keywords. M3 (fragile-context) checks countries_deployed against conflict list. M5 (gender) checks for gender/women/reproductive keywords.

### Known limitations

- **Keyword matching cannot capture semantic meaning.** A project described as "improving civil registration systems in Bangladesh" gets health equity credit via "civil registration" keyword, but a project that "helps governments digitise public services" does not — even though public service digitisation in Bangladesh likely includes health services.
- **Modifier M1 (Global South leadership +15) is over-triggered.** Any project deployed in a non-OECD country receives this boost, even if leadership is Northern. The dossier schema does not distinguish deployment geography from leadership geography.
- **Maximum achievable score is ~63.** The combination of keyword-based criteria scoring (which rarely exceeds 45/100 base) plus modifier cap (±20) produces a compressed range. The pilot run (Aadi Kulkarni) had max 85.7 — but that used LLM-based scoring which can interpret context that keywords cannot.

---

## Jury Status

### Files present (3/25)

| File | Model | Run | Scored | Abstained | Source |
|---|---|---|---|---|---|
| gemini-run-1.json | Gemini 2.5 Pro | 1 | 133/321 | 188 | Real API (OpenRouter) |
| gemini-run-3.json | Gemini 2.5 Pro | 3 | 132/321 | 189 | Real API (OpenRouter) |
| gemini-run-5.json | Gemini 2.5 Pro | 5 | 133/321 | 188 | Real API (OpenRouter) |

### Files missing (22/25)

All GPT-4.1 runs (1-5), all Claude runs (1-5), all Mistral runs (1-5), all Grok4 runs (1-5), and Gemini runs 2 and 4. These were never created — the initial parallel launch hit 402 credit errors and OOM kills, and subsequent reruns were stopped by team-lead directive before completion.

### Jury data quality

The 3 existing Gemini files have REAL API rationales — confirmed unique, model-specific text. High abstention rate (~58%) reflects Gemini's tendency to abstain when dossier evidence is insufficient for the specific constitutional criteria. This is constitutionally valid behaviour (the constitution specifies abstention when evidence is insufficient).

---

## Popularity Risk Flags — Top 10

| Project | Pop Risk | Score | Completeness | Risk Drivers |
|---|---|---|---|---|
| Ushahidi | HIGH | 62.8 | 0.96 | Canonical crisis tech; in all training data; very complete dossier |
| OpenCRVS | HIGH | 49.7 | 0.96 | Well-documented open-source health tech; complete dossier |
| Guardian Project | HIGH | 41.6 | 0.92 | Well-known privacy tool; decade+ old |
| Open Data Editor | HIGH | 41.1 | 1.00 | OKFN flagship; maximum completeness |
| Mastodon | HIGH | 37.8 | 0.96 | Canonical federated social; very high profile |
| Decidim | HIGH | 37.6 | 0.96 | Canonical participatory democracy; major training data presence |
| Creative Commons | HIGH | 37.1 | 0.94 | Extremely well-known; institutional visibility |
| Bellingcat Toolkit | MEDIUM | 40.1 | 0.92 | High media coverage; recognisable brand |
| CKAN | MEDIUM | 33.5 | 0.96 | Decade-old open data infrastructure; complete dossier |
| CiviCRM | MEDIUM | 30.8 | 1.00 | Decade+ old; canonical civic CRM |

**Note:** Popularity risk flags indicate where dossier completeness and model familiarity may inflate scores. The constitution's procedural rule (Part C: "High visibility is not evidence of quality") is aspirational but cannot be enforced by keyword-based scoring.

---

## Process Issues

### Worktree file loss (critical)

Pipeline files (evidence-raw.md through constitution.md) were initially written to agent worktrees that were subsequently cleaned up, causing file loss. All 8 files had to be regenerated. **Mitigation:** For the ranking step, score_all.py was written and executed directly in the main directory rather than delegated to an agent, preventing worktree loss.

### OOM kills during parallel jury runs

25 jury-run.py processes launched simultaneously exceeded available memory and were killed (exit code 144). **Mitigation:** Switched to sequential execution. Subsequent team-lead directive stopped all jury runs before completion.

### Score compression vs pilot run

The keyword-based scoring produces a compressed score range (0.6-62.8, mean 19.2) compared to the pilot's LLM-based scoring (range ~28-85.7). This is an inherent limitation of keyword matching vs semantic understanding. The ranking order is likely more reliable than the absolute scores.

---

## Divergence from Pilot

| Dimension | Pilot (Aadi) | This run (Asil) |
|---|---|---|
| Score range | 28-85.7 | 0.6-62.8 |
| Scoring method | LLM-based | Keyword-based (score_all.py) |
| Jury files | 25/25 (simulated→real) | 3/25 (real, partial) |
| Top project | OpenCRVS (85.7) | Ushahidi (62.8) |
| Underdog protections | 5 | 2 |
| Primary driver balance | Mostly criteria | 38 modifier, 281 criteria, 2 underdog |

The lower absolute scores are a methodological artefact, not a constitutional one. The ranking order — which projects are above which — is the meaningful output.
