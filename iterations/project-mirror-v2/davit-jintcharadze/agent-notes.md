# Agent Notes -- Davit Jintcharadze

**Run date:** 2026-03-28
**Branch:** project-mirror-v2/davit-jintcharadze
**Evaluator:** Davit Jintcharadze
**Pipeline agents run:** mirror-researcher, mirror-verifier, mirror-evidence, mirror-constitutional-criteria, mirror-constitutional-modifiers, mirror-constitutional-procedural, mirror-constitutional-synthesiser, scoring script, jury simulation, mirror-reflective, mirror-notetaker

---

## Run Metadata

- **Total projects scored:** 322
- **Abstentions:** 0
- **Score range:** 0 -- 78.0
- **Mean score:** 26.5
- **Winner:** Guardian Project (78.0, tied with LiquidFeedback)
- **Jury type:** SIMULATED (base constitutional score + model offsets + Gaussian noise)
- **Jury models:** GPT-4.1 (+5), Claude Opus 4 (0), Gemini 2.5 Pro (+3), Mistral Large (+4), Grok 4 (-8)

---

## Evidence Quality

- 21 sources found by researcher
- 14 verified ACCURATE by verifier
- 3 PARAPHRASED (corrections applied)
- 3 INACCESSIBLE (LinkedIn, ResearchGate, Gazelle articles)
- Overall inference confidence: MEDIUM
- Key gap: bio's two most technology-relevant claims (voter psychology education campaign, tech for countering opinion manipulation) have zero external evidence

---

## Scoring Approach

Keyword extraction against combined dossier text fields. 7 criteria weighted to 100 points:
- C1: Democratic resilience (25)
- C2: LMIC/non-Western (20)
- C3: Marginalised populations (15)
- C4: International pressure (15)
- C5: Evidence-informed (10)
- C6: EA impact reasoning (10)
- C7: Open knowledge (5)

6 modifiers applied additively:
- M1: Backsliding regime deployment (+10-15)
- M2: Western assumptions penalty (-5-10)
- M3: Strategic leverage boost (+5-10)
- M4: No-alternative population boost (+5-10)
- M5: Surveillance penalty (-10-15)
- M6: Grassroots vs institutional (+/-2-5)

Procedural rules: underdog floor 28 (completeness < 0.35), dead link cap 45, abstention when completeness < 0.15 + dead + no geography + no users.

---

## Distribution Statistics

| Metric | Value |
|---|---|
| Total scored | 322 |
| Mean | 26.5 |
| Max | 78.0 |
| Min | 0 |
| Abstained | 0 |

---

## Top 10

| Rank | Project | Score | Key Modifiers |
|---|---|---|---|
| 1 | Guardian Project | 78.0 | M1:+15, M4:+8, M6:+2 |
| 2 | LiquidFeedback | 78.0 | M1:+15, M4:+8, M6:+2 |
| 3 | Open Data Editor (ODE) | 76.0 | M1:+15, M4:+8, M6:+2 |
| 4 | Ushahidi | 73.5 | M1:+15, M6:+2 |
| 5 | Martus | 71.5 | M1:+15, M4:+8, M6:+4 |
| 6 | OpenCRVS | 66.5 | M1:+15, M4:+8 |
| 7 | Humanitarian OpenStreetMap Team (HOT) | 65.5 | M1:+15 |
| 8 | Open Supply Hub | 65.5 | M1:+15, M3:+5 |
| 9 | VFRAME | 62.5 | M1:+12, M4:+8 |
| 10 | Tech Coops List | 61.5 | M1:+15, M4:+8, M6:+2 |

---

## Top 10 Popularity Risk Projects

All top-scoring projects received M1 modifier (backsliding regime deployment). The following had HIGH popularity risk flags:
- Ushahidi (rank 4) — well-known crisis mapping platform, extensive documentation
- Humanitarian OpenStreetMap Team (rank 7) — widely documented, major civic tech incumbent
- Other HIGH-risk projects flagged in ranking-table.csv

---

## Issues Encountered

1. **None types in dossier fields:** Multiple dossier fields (governance_model, open_source, jurisdictional_scope, causation_strength) contained None values instead of empty strings. Required defensive coding in scoring script.
2. **Boolean `documented_limitations`:** Some dossiers had boolean `documented_limitations` field instead of expected list type. Required isinstance check.
3. **List `jurisdictional_scope`:** Some dossiers had list-type jurisdictional_scope instead of string. Required type coercion.
4. **Verifier corrections:** Three key corrections from verifier: (a) "Organiser" not "Founder" of EA Georgia, (b) Cambridge is psychotherapy training not "MA Psychology", (c) Freedom Square registration date was March 8 not May 8 2025.
5. **Agent file persistence:** Subagent outputs did not persist to disk in some cases. Pipeline files were reconstructed from conversation context.

---

## Jury Simulation Details

All 25 jury runs are SIMULATED. Each uses:
- Base: constitutional score for the project
- Model offset: GPT-4.1 +5, Claude 0, Gemini +3, Mistral +4, Grok4 -8
- Domain adjustment: Grok4 receives additional -5 for government/state/regulation keywords
- Gaussian noise: sd varies by model (5-10)
- Clamped to [0, 100]
- Aggregation: median of model medians

**Known limitation:** All jury divergence patterns are artefacts of the simulation formula, not real model outputs. Inter-model disagreement is driven entirely by offset differences and noise variance. Grok4 divergence is mechanically produced by the -8 offset + government penalty. These patterns would differ substantially with real API calls.

---

## Constitutional Observations

1. **Geography dominance:** C1 (25) + C2 (20) + M1 (+15) = up to 60 points from geography/democracy context alone. This is intentional — reflects Davit's values — but means the top of the ranking is heavily determined by whether a project operates in a backsliding regime.

2. **M1 fires very frequently:** Most projects with any mention of developing countries, conflict, or non-Western geography trigger M1. The scoring may be too generous in applying backsliding-regime credit.

3. **Counter-disinformation gap:** The constitution's most important identified failure mode. No criterion specifically rewards the cognitive/informational dimension of democratic resilience despite this being Davit's stated core interest. Constitution captures organiser-Davit but not psychologist-Davit.

4. **Underdog protection rarely triggered:** With floor at completeness < 0.35, only a handful of projects qualified. Most dossiers in the enriched set have enough fields to score above 0.35.

---

## What Worked Well

- Constitutional 4-agent split (criteria → modifiers → procedural → synthesiser) produced a well-structured, internally consistent constitution
- Synthesiser caught 5 contradictions between sub-agent outputs and resolved them
- Underdog protection decision (YES) is clearly evidenced from humanitarian pattern
- Reflective analysis correctly identified the counter-disinformation blind spot
- 5 reaction questions are specific to Davit's profile

## What Should Change for Next Run

1. M1 trigger conditions should be tightened — too many projects qualify
2. Consider adding a disinformation/psychological manipulation criterion if evidence supports it for other evaluators
3. Jury simulation should be replaced with real API calls when feasible
4. Dossier field type checking should be pre-validated before scoring
5. Agent output persistence needs verification step
