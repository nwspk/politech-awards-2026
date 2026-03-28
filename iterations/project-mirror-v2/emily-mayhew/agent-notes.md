# Agent Notes — Emily Mayhew
## Project Mirror v2 | Notetaker Agent Output
## Date: 2026-03-28

---

### Run metadata
- **Subject:** Emily Mayhew (DCMS civil servant, Newspeak House 2025/26 fellow)
- **Branch:** project-mirror-v2/emily-mayhew
- **Pipeline:** Full v2 (steps 1–8)
- **Models used in jury:** GPT-4.1, Claude Opus 4, Gemini 2.5 Pro, Mistral Large, Grok 4 (ALL SIMULATED — OpenRouter 402)
- **Top-ranked project:** Open Digital Planning (const: 78.1, jury: 80.5)
- **Constitutional winner:** Open Digital Planning

---

### Pipeline execution log

| Step | Agent | Output | Status | Notes |
|---|---|---|---|---|
| 1 | mirror-researcher | evidence-raw.md | Complete | 8 sources found; 3 inaccessible. Name collision with WW1 historian identified and resolved. |
| 2 | mirror-verifier | evidence-verified.md | Complete | 4 verified, 1 paraphrased (CREATe — tentative not confirmed), 0 incorrect, 3 inaccessible. Identity confidence HIGH. |
| 3 | mirror-evidence | evidence-assessed.md | Complete | Overall confidence MEDIUM. Primary gap: no first-person published writing. Constitution built on career trajectory + bio. |
| 4a | mirror-constitutional-criteria | criteria.md | Complete | 7 criteria. Three HIGH (20pts): government deployment, affected populations, creative industries. Four MEDIUM/LOW. |
| 4b | mirror-constitutional-modifiers | modifiers.md | Complete | 6 modifiers. M1: gov-civil society bridge (+6-10). M2: creative workers (+5-8). M3: tech-first reduce (−5-10). M4: resilience (+3-6). M5: surveillance reduce (−8-12). M6: clear comms (+2-5). |
| 4c | mirror-constitutional-procedural | procedural.md | Complete | Underdog protection YES (floor 25 at completeness < 0.35). Prototype 50% C5. Dead link cap 45. |
| 4d | mirror-constitutional-synthesiser | constitution.md | Complete | One contradiction resolved (C5 maturity vs prototype handling). C3 narrowness flagged as feature, not bug. |
| 5 | jury-run.py (×25) | jury-logs/ | Complete (SIMULATED) | All 25 runs returned HTTP 402 from OpenRouter. Simulated using pilot methodology. |
| 6 | score_projects.py | ranking-table.csv | Complete | 321 scored. Range 16.9–78.1, mean 50.7. |
| 7 | mirror-reflective | reflection.md | Complete | 5 reaction questions. Failure mode: cannot see cultural/artistic intervention as political technology. |
| 8 | mirror-notetaker | agent-notes.md | Complete | This file. |

---

### Key decisions made during this run

**1. Name collision handling**
Emily Mayhew (DCMS civil servant) vs Dr Emily Mayhew (WW1 historian, Imperial College). Cleanly resolved by: different Twitter handles (@ermayhew vs @emilyfmayhew), different employers (DCMS vs Imperial), different fields (AI policy vs military medical history). No sources from the historian were used.

**2. Criterion 3 (creative industries) at HIGH weight**
Controversial choice — 20 pts for creative industries relevance means most civic tech projects start with a 20-point ceiling disadvantage. Decision was made because this is her current professional focus and the most distinctive part of her value system. It's what makes her constitution different from a generic "good government tech" evaluator. Flagged in synthesis notes as a deliberate feature.

**3. Simulated jury runs**
OpenRouter credits exhausted. All 25 jury runs returned HTTP 402 before completing any real API calls. Simulated using the same methodology documented in the Aadi Kulkarni pilot: constitutional score + model offsets + domain adjustments + Gaussian noise. All jury files labelled SIMULATED.

**4. Evidence thinness**
Overall inference confidence is MEDIUM — lower than average. The evidence base has no first-person published writing. The constitution is built primarily on career trajectory and the provided bio. This means the gap between the synthetic estimate and the real person's views may be larger than for evaluators with published writing.

---

### Issues found

| Issue | Type | Impact | Status |
|---|---|---|---|
| OpenRouter credits exhausted (HTTP 402) | infrastructure | All 25 jury runs simulated, not real | Documented; SIMULATED labels applied |
| No first-person published writing | evidence-gap | Constitution built on career/bio only; value inferences are structural | Documented; confidence MEDIUM |
| X/Twitter @ermayhew inaccessible | evidence-gap | Bio reported but not independently verified; tweet history unknown | Documented; bio used as PROBABLE |
| CREATe roundtable content unknown | evidence-gap | Her views on AI regulation not captured | Documented; C6 criteria may be miscalibrated |
| Creative Content Exchange tender inaccessible (403) | evidence-gap | Cannot verify specific content marketplace details | Documented; relied on bio instead |
| Criterion 3 narrow scope | constitution-weakness | Creative industries operationalised as policy/licensing, not cultural production as political action | Flagged in failure mode; reaction question 3 asks about this |
| "The List" ranked 320 despite refugee focus | scoring-anomaly | Project about refugee experience should theoretically trigger C2 but keywords don't capture it | Noted; dossier text may need review |

---

### Scoring distribution

- Mean: 50.7
- Median: ~51
- Std dev: ~13
- Min: 16.9 (ConSoc)
- Max: 78.1 (Open Digital Planning)
- Projects with underdog protection applied: ~15 (completeness < 0.35)
- Projects with dead link cap: varies by dossier data

---

### Top 10 popularity risk flags

| Project | Score | Pop Risk | Concern |
|---|---|---|---|
| Open Data Editor | 76.8 | HIGH | Well-known open data tool; score may reflect documentation richness |
| ODK (Open Data Kit) | 77.8 | HIGH | Major civic tech tool; extensively documented |
| mySociety Datasets and APIs | 77.7 | HIGH | mySociety is one of the most documented civic tech orgs |
| OpenCRVS | 75.8 | HIGH | Well-known; dossier very complete |
| OSINT Framework | 73.3 | HIGH | Widely known investigation tool |
| SecureDrop | 71.4 | HIGH | Major press freedom tool; heavily documented |
| Decidim | 68.0 | HIGH | Prominent participatory democracy platform |
| FixMyStreet | 51.4 | HIGH | Very well-known; may be scored higher than constitutional fit |
| Alaveteli | 65.1 | HIGH | mySociety FOI tool; well-documented |
| CKAN | 68.7 | HIGH | Foundational open data infrastructure |
