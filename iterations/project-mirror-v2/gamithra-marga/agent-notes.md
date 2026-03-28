# Project Mirror v2 — Agent Notes (Forensic Run Log)
## Evaluator: Gamithra Marga
## Run date: 2026-03-28
## Agent: mirror-notetaker

---

### Run Overview

| Stage | Status | Output | Notes |
|---|---|---|---|
| 1. mirror-researcher | DONE | evidence-raw.md | Strong evidence base; mission.gamithra.com is primary values document |
| 2. mirror-verifier | DONE | evidence-verified.md | All sources confirmed; no identity collision |
| 3. mirror-evidence | DONE | evidence-assessed.md | Confidence: HIGH; durable values well-evidenced |
| 4a. mirror-constitutional-criteria | DONE | criteria.md | 7 criteria, weights 20/20/20/12/12/12/6 |
| 4b. mirror-constitutional-modifiers | DONE | modifiers.md | 6 modifiers including ecstatic tech boost (+5-10) and VC penalty (-10-15) |
| 4c. mirror-constitutional-procedural | DONE | procedural.md | Underdog protection YES; extended Global South floor |
| 4d. mirror-constitutional-synthesiser | DONE | constitution.md | 3 contradictions resolved; 3 gaps identified |
| 5. jury runs | IN PROGRESS | jury-logs/*.json | 5 models × 5 runs = 25 via jury-run.py (OpenRouter API) |
| 6. ranking | DONE | ranking-table.csv, ranking-batch-1..4.csv | 321 projects scored; Python script |
| 7. mirror-reflective | DONE | reflection.md | Champion/discount/failure mode/5 reaction questions |
| 8. mirror-notetaker | IN PROGRESS | this file | |

---

### Scoring Summary

| Metric | Value |
|---|---|
| Mean score | 25.7 |
| Median score | 25.7 |
| Max score | 68.0 (Bonfire) |
| Min score | 0 (6 projects) |
| Std dev | 12.3 |
| Score > 50 | 12 projects |
| Score < 20 | 110 projects |
| Underdog protection applied | 0 projects |
| HIGH uncertainty | 2 projects |
| HIGH popularity risk | 36 projects |

---

### Top 10 Projects

| Rank | Project | Score | Primary Driver |
|---|---|---|---|
| 1 | Bonfire | 68.0 | modifier (M2 open protocol boost maxed) |
| 2 | Alaveteli | 59.1 | criteria (C1+C2+C3 all strong) |
| 3 | Agencies for Good | 57.2 | modifier (M1 ecstatic + M2 protocol) |
| 4 | Open Heart Mind (OHM) | 53.3 | modifier (M1 ecstatic + M4 emotional complexity) |
| 5 | adhocracy+ | 52.1 | criteria (C1 governance + C3 participatory) |
| 6 | CONSUL Democracy | 52.1 | criteria (C1 governance + C3 participatory) |
| 7 | Citizen OS | 51.2 | modifier (M2 protocol + M6 small-scale) |
| 8 | Cobudget | 51.2 | modifier (M2 protocol boost) |
| 9 | Open Council Network | 51.2 | modifier (M2 protocol boost) |
| 10 | Logos | 50.4 | modifier (M2 maxed + other boosts) |

---

### Top 10 Popularity Risk Projects

Projects with HIGH popularity_risk in the top 50:

| Rank | Project | Score | Pop Risk |
|---|---|---|---|
| 2 | Alaveteli | 59.1 | HIGH |
| 5 | adhocracy+ | 52.1 | HIGH |
| 6 | CONSUL Democracy | 52.1 | HIGH |
| 11 | Decidim | 50.2 | HIGH |
| 12 | Open Data Editor (ODE) | 50.2 | HIGH |
| 20 | mySociety Datasets and APIs | 44.4 | HIGH |

---

### Issues Found During Run

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| Score distribution compressed (mean 25.7, max 68) | methodology | Keyword matching may under-score projects with good dossier text that doesn't use exact keywords | Scoring is conservative; relative ordering more meaningful than absolute scores | Documented |
| No underdog protection applied to any project | methodology | All projects have dossier_completeness > 0.4; the floor never triggers | This suggests enriched dossiers are uniformly well-populated — the underdog mechanism is designed for much sparser data | Documented |
| Modifier M1 (ecstatic tech) hard to trigger from keyword matching | methodology-gap | Constitutionally distinctive modifier may under-fire; requires qualitative judgment the script cannot provide | Applied conservatively per constitution synthesis notes | Documented |
| Bluesky scores 0.8 despite AT Protocol (decentralised) | scoring-tension | VC funding triggers M3 penalty that overwhelms C2 self-hosting credit | Constitution is explicit: VC funding model overrides technical architecture | By design |
| 6 projects score 0 (after M3 penalty) | floor-issue | M3 penalty can push below zero, clamped to 0 | Constitution explicitly states underdog floor does not apply when M3 fires at max magnitude | By design |

---

### Methodology Notes

**Scoring approach:** Python keyword-matching script against combined dossier text fields. Criteria scored 0-max per the constitution weights. Modifiers applied additively (capped ±20). Final score clamped [0, 100].

**Key parameters:**
- Criterion weights: C1=20, C2=20, C3=20, C4=12, C5=12, C6=12, C7=6 (total 102, normalised /1.02)
- Modifier ranges: M1 (+5-10), M2 (+8-12), M3 (-10 to -15), M4 (+3-6), M5 (-6 to -10), M6 (+3-5)
- Underdog floor: 28 pts when completeness < 0.4 (0.45 for Global South)
- Underdog floor suspended when M3 fires at max magnitude
- Dead link cap: 45 points max when scraped < 50 chars AND completeness < 0.2

**What worked well:**
- The constitution's through-line (community ownership → technological sovereignty → anti-extraction) produces clear and defensible ordering. Projects that hit all three high-weight criteria cluster at the top.
- The VC penalty (M3) is aggressive but consistent with the evaluator's explicit and enacted anti-VC stance.
- Modifier 2 (open protocol boost) correctly identifies the infrastructure-layer projects Gamithra would prioritise.
- The scoring distinguishes well between participatory democracy tools (high) and government efficiency tools (low).

**What should change:**
- Ecstatic technology modifier (M1) needs qualitative application beyond keyword matching. A future run should use an LLM call per project for M1 scoring.
- The score compression (mean 25.7) suggests keyword matching is too conservative for many criteria. Consider raising base scores for partial matches.
- Bluesky scoring 0.8 is defensible under this constitution but would benefit from a nuanced "VC with mitigating factors" pathway.

---

### Scoring Script

The Python scoring script used for this run is preserved at `/tmp/rank_gamithra.py`. Key features:
- Combined text analysis across scraped, political_relevance_summary, tagline, name, issue_area, communities_served, primary_users_or_beneficiaries, movement_building_utility, generalizability_notes, systemic_issue_area, governance_model, funding_model, community_ownership
- Dossier completeness estimated from 16 key fields + scraped text length
- Popularity risk derived from known-project set + completeness threshold
- 4 batch CSV output + merged ranking-table.csv
- Unique first-person rationale generation per project

---

### Files Produced

| File | Size | Description |
|---|---|---|
| evidence-raw.md | — | Raw evidence collection |
| evidence-verified.md | — | Verified evidence with accuracy checks |
| evidence-assessed.md | — | Assessed evidence with confidence tiers |
| criteria.md | — | Part A: 7 project criteria |
| modifiers.md | — | Part B: 6 value modifiers |
| procedural.md | — | Part C+D: procedural rules + underdog protection |
| constitution.md | — | Synthesised constitution (all parts) |
| ranking-table.csv | 321 rows | Full ranking with scores, rationales, metadata |
| ranking-batch-1..4.csv | ~80 rows each | Batched ranking output |
| reflection.md | — | Champion/discount/failure mode/reaction questions |
| agent-notes.md | — | This file |
| jury-logs/*.json | 25 files | Jury run outputs (when complete) |
