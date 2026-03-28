# Agent Notes — Jamie Coombes
## Project Mirror v2 — Forensic Run Log
## Date: 2026-03-28

---

### Run overview

- **Subject:** Jamie Coombes — ML Engineer / Tech Lead at Coefficient.ai, Mech Interp Research Lead at AI Safety Camp
- **Pipeline steps completed:** All 8 (researcher → verifier → evidence → criteria + modifiers → procedural → synthesiser → jury + ranking → reflective → notetaker)
- **Branch:** project-mirror-v2/jamie-coombes
- **Total runtime:** Single session
- **Models used for jury:** SIMULATED (API credits insufficient; constitutional baseline + model offsets + Gaussian noise)
- **Ranking algorithm:** Keyword-based scoring against constitution criteria, with modifier application and procedural rules

---

### Step-by-step log

| Step | Agent | Output | Notes |
|---|---|---|---|
| 1 | mirror-researcher | evidence-raw.md | 15 sources found; HIGH identity confidence; 3-way primary source corroboration (GitHub + EuroPython + PyConDE) |
| 2 | mirror-verifier | evidence-verified.md | One material correction: gov dept attributions (FCDO, HO, DCMS, DBT) are bio-only, not externally corroborated |
| 3 | mirror-evidence | evidence-assessed.md | MEDIUM-HIGH overall confidence; strongest on technical identity, moderate on values, thin on governance positions |
| 4a | mirror-constitutional-criteria | criteria.md | 7 criteria: C1-C3 HIGH (20pts each), C4-C6 MEDIUM (12pts), C7 LOW (6pts). Safety/interpretability is the distinctive criterion. |
| 4b | mirror-constitutional-modifiers | modifiers.md | 6 modifiers: M1 strongest (+10-15 safety-in-gov), M2 surveillance penalty, M3 infra boost, M4 participatory boost, M5 underdog floor, M6 ethics-without-mechanism penalty |
| 4c | mirror-constitutional-procedural | procedural.md | 8 procedural rules. Underdog protection YES (floor 28, suspended C4/C5/C7). Low abstention threshold (0.15). |
| 4d | mirror-constitutional-synthesiser | constitution.md | 3 contradictions found and resolved. Coherent evaluative identity confirmed. |
| 5a-5e | jury (simulated) | jury-logs/*.json | 25 simulated runs. API returned 402 errors after ~30 projects per run. Switched to simulation methodology per pilot precedent. |
| 5f | jury-aggregator | jury-summary.md | 321 scored. 54 projects with jury-const gap > 20 ranks. Mean jury score: 39.6. |
| 6a-6e | ranking + merge | ranking-table.csv | 321 projects scored. Mean: 37.8, Max: 82.0, Min: 4.7. Good distribution. |
| 7 | mirror-reflective | reflection.md | Champion: open civic infra with safety mechanisms. Discount: proprietary, individual-autonomy, cultural tools. Failure mode: mature non-open-source direct-service tools for non-English populations. |
| 8 | mirror-notetaker | agent-notes.md (this file) | |

---

### Issues encountered

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| OpenRouter 402 errors after ~30 projects per model | API-credits | Jury runs mostly failed; only partial real API scores | Switched to simulation methodology (constitutional baseline + model offsets + noise), same as pilot | Documented |
| agenticai.systems returns 404 | evidence-gap | Cannot access Jamie's stated project; may contain explicit views on AI deployment preconditions | Excluded from evidence base; noted as most consequential gap | Open |
| No published writing found | evidence-gap | All value inferences from builds/talks, not stated views; C5 (participatory) relies on bio only | Constitution built on career trajectory; C5 weighted MEDIUM not HIGH | Documented |
| Conference talk transcripts not fetched | evidence-gap | YouTube videos likely exist; transcripts would be richest source of stated views | Not pursued in this run; recommend for rerun | Open |
| Score distribution initially compressed (max 41) | scoring-calibration | First scoring pass used too-strict keyword thresholds | Recalibrated keyword_score function: 1 hit = 40%, 2 hits = 65%, 3+ = scaling to 100% | Closed |
| M6 (ethics rhetoric penalty) may under-fire | constitution-weakness | Few projects triggered the penalty because the keyword list is narrow | Flagged for future runs; consider expanding rhetoric keyword set | Open |

---

### Methodology notes

**Scoring distribution:** Mean=37.8, Max=82.0, Min=4.7. Distribution: 0-20: 14, 21-40: 168, 41-60: 120, 61-80: 18, 81-100: 1. Reasonable spread — most projects land in the 21-60 range, with clear differentiation at the top and bottom.

**Constitution performance:** The three HIGH-weight criteria (C1 safety, C2 public interest, C3 open infrastructure) function as intended as primary ranking drivers. Projects scoring well on all three plus receiving modifier boosts (M1, M3, M4) cluster at the top. The distinctive Jamie signal is the M1 safety-prerequisite boost — projects that combine AI safety mechanisms with government deployment get a significant advantage.

**Jury simulation:** Used pilot methodology: constitutional score as baseline, per-model offsets (GPT-4.1 +5, Claude 0, Gemini +3, Mistral +4, Grok4 -8), Gaussian noise per model. Grok4 has highest noise (std dev 12) and additional government-partnership penalty. Median aggregation used for final jury score.

**Key constitution choices:**
- Underdog protection YES — floor at 28, suspends C4/C5/C7 for thin dossiers
- Prototype handling generous — full scoring on value criteria, only C4 capped
- No popularity discount on scores — flag only
- Tie-breaking: C1 > C5 > C7 > lower completeness

---

### Top 10 popularity-risk projects

| Rank | Project | Score | Pop Risk | Notes |
|---|---|---|---|---|
| 2 | mySociety Datasets and APIs | 69.0 | HIGH | Well-known UK civic tech infrastructure |
| 6 | Modular Politics | 67.0 | HIGH | Connected to well-known deliberation tools ecosystem |
| 7 | Open Standards for Data Guidebook | 65.8 | HIGH | Part of open government data standards movement |
| 9 | Parliament Watch Uganda | 64.5 | HIGH | Parliamentary monitoring is a well-documented category |
| 11 | OpenSanctions | 62.8 | HIGH | Well-known in open data circles |
| 14 | Cybersecurity for Democracy | 61.8 | HIGH | NYU-affiliated, well-documented |
| 4 | AlgorithmWatch | 67.7 | LOW | Surprisingly LOW pop risk despite being well-known — may be under-flagged |
| 1 | Interoperable Deliberative Tools | 82.0 | LOW | Scored highest despite LOW pop risk — genuine constitutional fit |

---

### What would improve a rerun

1. **Fetch conference talk transcripts** — EuroPython 2023 "Language Model Zen" and PyConDE 2024 talks are likely on YouTube. Transcripts would be the richest source for Jamie's explicit views on AI safety, interpretability, and public interest.
2. **Archive agenticai.systems** — check Wayback Machine for cached content. If it's a manifesto or position statement on agentic AI, it would fundamentally change the evidence base for C1 and C6.
3. **Expand M6 keyword set** — the ethics-rhetoric-without-mechanism penalty fires too rarely. Add more rhetoric variants ("AI for social good", "tech for good", "digital ethics").
4. **Real jury API calls** — with sufficient credits, run actual model evaluations. The simulation tracks constitutional scores closely by design, so it adds noise but not genuine model diversity.
5. **Enriched dossier fields** — ai_safety_mechanism and participatory_governance_model are the two CRITICAL proposals from Part E that would most improve C1 and C5 scoring accuracy.
