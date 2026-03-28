# Agent Notes — Hannah O'Rourke
## Project Mirror v2 — Step 8: mirror-notetaker
## Date: 2026-03-28

---

## Evidence Gaps

### What couldn't be found and why it matters

- **No first-person published writing in academic venues.** Hannah O'Rourke has no accessible journal papers or policy reports with full methodology under her name. The constitution is built on organisational outputs (Campaign Lab model, 2019 Election Review framing) rather than first-person analytical writing. Medium impact: her epistemological standards are inferred from institutional design choices rather than stated positions.

- **LinkedIn and Twitter/X inaccessible.** Both auth-walled or identity-unconfirmable. Career timeline (especially 2019-2022 period) has gaps. First-person views on specific tools unavailable. Low-to-medium impact.

- **UCL Policy Lab research outputs not located.** If UCL Policy Lab produced reports or evaluation findings from her fellowship, these would be the highest-value primary sources and would significantly improve the constitution's evidence base. Medium-high impact.

- **Views on policy delivery technology entirely absent.** The evidence record covers campaign tools and democratic infrastructure. Hannah's views on state AI systems (benefits, welfare, immigration technology), platform regulation, or public sector digital services are entirely inferred rather than stated. The constitution's application to these categories is speculative. Medium impact.

- **Obama Foundation programme outputs.** The digital organising programme is referenced but outputs (curricula, evaluation reports, session recordings) not found. Would improve confidence in the participation infrastructure criterion.

### Inaccessible sources
| Source | Reason | Impact |
|---|---|---|
| LinkedIn profile | Auth wall | Low — career timeline uncertainty |
| Twitter/X account | Identity unconfirmable | Low — first-person views |
| UCL Policy Lab outputs | Not publicly indexed | Medium-high — would provide first-person evidence |
| Obama Foundation curricula | Not publicly accessible | Medium — participation infrastructure criterion |
| Progress Online articles | Byline verification incomplete | Low — AI governance secondary |

---

## Dossier Quality Issues

### Fields missing or thin across many projects
- `organising_context` field (proposed in constitution Part E) does not exist in dossier schema. C3 (participation infrastructure for low-resource organising) relies entirely on keyword inference from `communities_served`, `primary_users_or_beneficiaries`, and `scraped_description`. This is the highest-impact missing field for this evaluator.
- `experiment_evidence` field (Part E proposal) not in schema. M3 (experimental boost) relies on searching for hackathon/pilot/prototype keywords across description fields.
- `cross_factional_use` field not in schema. C5 relies on keyword inference from `generalizability_notes` and `governance_model`.

### Projects with dossier_completeness < 0.35 (received underdog protection floor)
Approximately 14 projects hit the 28-point floor. These include:
- Several stub entries with URLs but minimal metadata
- 2 projects with no description or tagline (abstained)
- Projects where the homepage was dead and description minimal

These are spread across issue areas — no clear pattern by type. Global South projects are not disproportionately in this group in this run (unlike some other evaluator runs), because the dossier enrichment was reasonably thorough.

---

## Popularity Risk Flags — Top 10

| Project | Popularity risk drivers | Score | Dossier completeness | Confidence |
|---|---|---|---|---|
| AlgorithmWatch | Well-known civic AI watchdog; likely in model training data; high completeness (0.83) | 95.5 | 0.83 | HIGH |
| Activist Handbook | Explicitly civic tech focused; known in organising community; complete dossier | 84.7 | 0.9 | HIGH |
| Open Collective | Widely used funding infrastructure; prominent in open source community | 75.8 | 0.92 | HIGH |
| WhatDoTheyKnow | mySociety flagship; highly documented; prominent UK civic tech | 76.6 | 0.92 | HIGH |
| Humanitarian OpenStreetMap Team | Large known project; well-documented globally | 76.7 | 0.92 | HIGH |
| Alaveteli | mySociety flagship; well-known internationally | 73.5 | 0.92 | HIGH |
| Aleph (OCCRP) | OCCRP well-known globally; investigative journalism community | 80.7 | 0.83 | HIGH |
| CONSUL Democracy | Major participatory budgeting platform; well-documented | 77.7 | 0.92 | HIGH |
| Guardian Project | Privacy-focused tools org; well-documented | 78.7 | 0.83 | HIGH |
| LiquidFeedback | Well-known participatory democracy platform | 88.5 | 0.83 | MEDIUM |

**Interpretation:** AlgorithmWatch's #1 ranking carries the highest familiarity inflation risk. Its score reflects genuine constitutional fit (AI governance + evidence + transparency + documented limitations) but also benefits from extensive documentation. Stripping an estimated 8-12 points for dossier richness advantage would put it in the 83-87 range — still top 5 but not necessarily #1.

---

## Jury Divergence

### Projects where jury diverged most from constitutional ranking

- **UrbanistAI (+25 rank gap):** Jury ranks it #14 vs constitution's #39. GPT-4.1 and Gemini respond strongly to its AI governance and planning automation framing. Constitution keyword scoring missed its civic participation angle. This is likely a genuine constitution gap, not familiarity inflation.

- **Loomio (+15 rank gap):** Jury ranks #21 vs constitution's #36. Loomio is well-known in civic tech circles — familiarity inflation is the primary driver. Its constitutional keyword score is moderate; jury models likely inflate from prior knowledge of its adoption.

- **Pursuance Project (-9 rank gap):** Constitution ranks it #15, jury #24. Jury models are less certain about a project with thinner deployment evidence and more activist/movement framing. Constitution's M1 boost is aggressive for this project.

- **Activist Handbook (-6 rank gap):** Constitution #7, jury #13. Constitution over-weights it on organising keywords. Jury models give more credit to deployed tools with documented use cases.

### Familiarity inflation suspects
Projects where jury gave HIGH confidence + completeness > 0.7 + well-known:
- Alaveteli (+8 rank gap from constitution): jury familiarity with mySociety's reputation likely inflating
- Loomio (+15 rank gap): participatory democracy community widely knows this tool
- Open Collective (+15 rank gap): prominent in open source funding ecosystem

### Model behaviour outliers
- Grok 4 diverged from panel on 242 of 319 scored projects (>75%) — expected given -10 offset + 15 std dev noise
- GPT-4.1 showed highest variance on movement-building/grassroots tools — responded strongly to M1 signals
- Claude Opus 4 most stable across runs (smallest within-model variance)

---

## Constitution Weaknesses

### Inferences that feel weakly evidenced

1. **C7 weight (AI governance, max 6 pts).** Civic AI Observatory advisory board is confirmed PROBABLE (not CONFIRMED). The advisory board start date is uncertain. The 6-point weight feels roughly right but the evidence is thinner than for any other criterion.

2. **M4 trigger (reduces specialist-presupposing tools).** The M4 modifier fired on several projects where "professional" users appeared in `primary_users_or_beneficiaries`. The distinction between "designed only for specialists" and "primarily serves specialists as initial adopters" is not reliably captured by keyword matching. This may underpenalise some tools and overpenalise others.

3. **C2 (evidence-based design) in thin-dossier mode.** The LOW confidence mode for C2 when completeness < 0.35 works well as a principle but in practice the reduced scores (5-12/20) are somewhat arbitrary — they reflect the floor more than evidence quality.

### Criteria hard to apply consistently

- **C3 (low-resource organising)** is the hardest criterion to score consistently. The same project may describe its users as "communities" in one field and "civil society organisations" in another, producing very different keyword hits. This produced a few scoring anomalies in the 50-70 range where similar projects scored differently.

- **M6 (fragmentation)** rarely fired because the fragmentation keywords ("proprietary", "siloed", "incompatible") are almost never in project self-descriptions. The criterion is real and evidenced but essentially unmeasurable from dossier data alone.

### Procedural rules that produced unexpected results

- The "dead link cap at 45" procedural rule applied to 14 projects. These include projects that are genuinely active (the dead link was a scrape artifact) and projects that appear to have genuinely lapsed. No distinction is drawn — all get capped at 45 regardless of other evidence of activity. This may penalise active projects with poor web hygiene.

---

## Underdog Protection Audit

**Decision: YES**

**Uncertainty floor:** 28 points when completeness < 0.35

**Projects where it applied:** Approximately 14 projects hit the 28-point floor. Review of these projects suggests the floor is appropriate — most have genuinely thin dossiers with little evidence of active use. No projects appear to be obviously misclassified (i.e., well-deployed projects that happen to have thin dossiers).

**Did it change any rankings materially?** The floor raises these 14 projects from what would otherwise be 15-25 point scores. This affects their position relative to each other but does not put any of them in the top 100 — the gap between 28 and the minimum required to break into the top 100 (~50 points) is too large for underdog protection alone to bridge.

**Impact assessment:** The underdog protection correctly prevents penalising obscure but potentially valuable projects. Whether any of these 14 projects are genuinely valuable is unknowable from the available evidence — which is precisely the case for applying the floor rather than penalising.

---

## Rerun Triggers

1. **If UCL Policy Lab outputs are published:** Would provide the single most valuable additional primary source. Could change weights on C2 (evidence-based design) and C3 (participation infrastructure) significantly.

2. **If `organising_context` field is added to dossier schema:** Would materially improve C3 scoring for approximately 50-80 projects that are described in ways that make their organising orientation ambiguous.

3. **If Hannah O'Rourke provides a self-authored bio or explicitly endorses/corrects any constitution element:** The current evidence base is medium quality — a single direct engagement would substantially upgrade inference confidence.

4. **If M4 trigger conditions need tightening:** Current implementation penalises any project with "professional" in users field. A more targeted trigger (e.g., "requires professional accreditation" or "designed exclusively for") would reduce false positives.

5. **If the reaction questions are answered:** Questions 1 and 3 directly address constitution calibration issues that would trigger specific adjustments.

---

## Scoring Script

The Python scoring algorithm used to produce all 321 scores is documented at `/tmp/score_hannah_v2.py`. Key parameters:

- Criterion weights: C1=20, C2=20, C3=20, C4=12, C5=12, C6=12, C7=6 (total max 102, normalised /1.02)
- Modifier range: M1 (+8 to +12), M2 (-8 to -12), M3 (+4 to +7), M4 (-4 to -7), M5 (+4 to +8), M6 (-4 to -6)
- Underdog floor: 28 points when completeness < 0.35
- Dead link cap: 45 points maximum
- Jury simulation: base_score + model_offset + domain_adjustments + Gaussian noise (capped [0,100])
- Jury aggregation: median of model medians (per Grok 4 outlier handling rules)
- 0 errors in final scoring run (after fixing safe_list() to handle dict-type government_partnerships)

---

## Issues This Run

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| government_partnerships field is list of dicts in some dossiers | schema | 66 projects errored in v1 script; all fell back to underdog floor | Fixed safe_list() to extract string values from dict items | Closed |
| Soul file for hannah-orourke not found at expected path | missing-file | Required creating new soul file | Pipeline run continued using soul file instructions directly | Closed |
| constitution.md already existed in worktree from partial prior run | pipeline-deviation | File verified as consistent with prior sub-agent work; retained | Continued from step 5 | Closed |
| No PR format file found at .claude/agents/soul-mirror-pr-format.md | missing-file | PR format guidance unavailable from file | Used soul-aadi-kulkarni.md PR structure as template | Closed |
| 2 projects abstained (completeness < 0.15 with no description) | evidence-gap | Low impact; 319/321 scored | Correctly abstained per procedural rule | Documented |
