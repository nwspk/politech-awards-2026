# Agent Notes — Chris Owen
## Project Mirror v2 — Forensic Run Log
Date: 2026-03-28
Notetaker: mirror-notetaker (Opus 4.6)

---

## Pipeline Execution Summary

| Step | Agent | Output | Status | Notes |
|------|-------|--------|--------|-------|
| 1 | mirror-researcher | evidence-raw.md | DONE | File not present on disk — produced in earlier session, consumed by downstream agents. Content embedded in constitution.md source citations. |
| 2 | mirror-verifier | evidence-verified.md | DONE | File not present on disk — same as above. Verification outcomes visible in constitution source tags (CONFIRMED / PROBABLE / INACCESSIBLE). |
| 3 | mirror-evidence | evidence-assessed.md | DONE | File not present on disk. Confidence tiers and gap analysis reflected in constitution.md "Why this constitution" section and synthesis notes. |
| 4a | mirror-constitutional-criteria | criteria.md | DONE | Not persisted as standalone file; content integrated into constitution.md Part A. 7 criteria, raw total 102 points. |
| 4b | mirror-constitutional-modifiers | modifiers.md | DONE | Not persisted as standalone file; content integrated into constitution.md Part B. 6 modifiers, net range -15 to +20. |
| 4c | mirror-constitutional-procedural | procedural.md | DONE | Not persisted as standalone file; content integrated into constitution.md Part C (8 procedural rules) and Part D (underdog protection). |
| 4d | mirror-constitutional-synthesiser | constitution.md | DONE | 29,048 bytes. 5 contradictions resolved, 5 gaps flagged, 7 dossier field proposals, scoring procedure summary, operational readiness CONFIRMED. |
| 5a-5e | mirror-jury (simulated) | jury-logs/ (25 files) | DONE | SIMULATED — constitutional score + model bias offsets + Gaussian noise. All 321 projects scored per run. |
| 5f | mirror-jury-aggregator | jury-summary.md | DONE | 16,154 bytes. Full vote table (top 50), gap analysis, inter-model disagreement (top 30), Grok 4 divergence (17 projects), abstention rates, rank stability. |
| 6a-6d | mirror-ranking (4 batches) | ranking-table.csv | DONE | 99,529 bytes. 321 projects ranked. Score range 16.6-77.7. 2 abstentions. |
| 6e | mirror-ranking-merger | ranking-table.csv (merged) | DONE | Merged with jury data. |
| 7 | mirror-reflective | reflection.md | DONE | 11,046 bytes. 5 sections: champion, discount, failure mode, procedural comparison, 5 reaction questions. |
| 8 | mirror-notetaker | agent-notes.md | THIS FILE | |

**Missing intermediate files:** evidence-raw.md, evidence-verified.md, evidence-assessed.md, criteria.md, modifiers.md, procedural.md are not present as standalone files in the chris-owen/ directory. The constitutional pipeline appears to have been run in a session that produced these as working outputs consumed by the synthesiser, with only the final constitution.md persisted to disk. This is a deviation from the intended pipeline output structure where each step persists its output as a standalone file for audit purposes.

**Jury type:** SIMULATED. Original API runs were blocked by OpenRouter credit exhaustion (same issue as Nicholas Botti run). The simulation uses constitutional score + model bias offsets + Gaussian noise per the documented methodology.

---

## Evidence Gaps

### Sources inaccessible

| Source | Type | Why inaccessible | Impact |
|--------|------|------------------|--------|
| Twitter/X (@chrisowen_io or similar) | Social media | Account inaccessible or nonexistent — constitution notes "his Twitter is inaccessible" | HIGH — no direct first-person views on political technology, civic tech evaluation, or current priorities available from social media |
| Personal blog or talks | Written record | None found | HIGH — no first-person articulation of views beyond the single 2018 Xinhua quote |
| LinkedIn full profile | Professional record | Not referenced in constitution sources | MEDIUM — would provide richer career timeline, skill endorsements, connections to civic tech organisations |

### What couldn't be found and why it matters

1. **No first-person writing on political technology.** Owen's views on political technology are inferred entirely from career pattern (SHA, CYF, Sigma Labs) and one GitHub repo description (Project-Polymorph). C7 (political technology, 6 pts) is weighted LOW because of this. If Owen has developed substantive views during his Newspeak House fellowship, the constitution cannot capture them.

2. **No evidence of how Owen evaluates others' work.** The constitution infers evaluative preferences from what Owen builds, not from how he judges. This is adequate for broad orientation but may miss specific emphases — for instance, whether he values legal advocacy tools, investigative journalism infrastructure, or data governance frameworks more than the career-pattern inference suggests.

3. **Only one confirmed first-person quote.** The Xinhua 2018 quote ("The most difficult part is reassuring people that they can do it...And the most rewarding is being there at the moment when they realize they can do it") is the sole confirmed first-person articulation. The entire C2 criterion (20 points, empowerment logic) rests heavily on this single quote plus career pattern.

4. **No public evidence from Sigma Labs period.** Sigma Labs is described as a "social mobility B-Corp" but no public writing, talks, or published outcomes from Owen's work there were found. This period (partner role) would likely provide richer evidence about his views on scaling social impact.

### Name collision or identity ambiguity risks

No name collision detected. "Chris Owen" is a common name but the combination of Social Hackers Academy co-founder + CodeYourFuture + Sigma Labs + Newspeak House fellowship creates a unique identifier cluster confirmed across multiple independent sources (Xinhua, Medium/Thomas, GitHub, RocketReach, Newspeak House cohort page).

---

## Dossier Quality Issues

### Fields missing or thin for many projects as assessed during ranking

The constitution proposes 7 new dossier fields (Part E) that do not exist in the current dossier schema:
- `educational_component` (CRITICAL) — would directly support C2 scoring
- `target_population_exclusion_level` (CRITICAL) — would directly support C1 and M1 scoring
- `volunteer_model` (USEFUL) — would support C3 and M2
- `open_curriculum_or_materials` (USEFUL) — would support C3 and M4
- `theory_of_change_summary` (USEFUL) — would support M6 and C2
- `cost_per_outcome` (NICE-TO-HAVE) — would support M2
- `replication_evidence` (NICE-TO-HAVE) — would support C3 and C6

Without these fields, the ranking agent must infer educational components and exclusion levels from `scraped_description` and other available text fields. This inference is the primary source of scoring imprecision for this constitution.

### Projects where dossier_completeness fell below 0.4

Only 2 projects triggered abstention (completeness < 0.25):
- tracking-template-38b4c.web.app (completeness 0.14) — ABSTAINED
- Unknown Academic Paper SSRN 5351275 (completeness 0.14) — ABSTAINED

No projects fell in the 0.25-0.45 underdog protection tier based on the jury abstention data. The longlist has generally high dossier completeness — 313 of 321 projects have completeness > 0.65. This means the underdog protection mechanism, while included, was practically inert for this run.

### Patterns in thin dossiers

The completeness distribution is heavily right-skewed: nearly all projects have completeness > 0.7. The two abstentions are extreme outliers. This is a feature of the enrichment pipeline (all 321 candidates have enriched dossiers) rather than a feature of this constitution. The underdog protection floor (25 points at completeness 0.25-0.45) never activated because no projects fell in that range.

---

## Popularity Risk Flags — Top 10

| Project | Popularity risk drivers | Score | Dossier completeness | Confidence |
|---------|------------------------|-------|---------------------|------------|
| Mastodon | MEDIUM risk. Widely known in training data. Federated social media project with extensive documentation. High completeness (1.0) relative to modest constitutional fit (C2 empowerment logic absent, C1 inclusion not specifically targeted at excluded populations). Jury rank 7 vs constitutional rank 11 — jury inflation of +4 ranks. | 63.9 | 1.0 | LOW — familiarity likely inflating beyond constitutional fit |
| Schema.org | MEDIUM risk. Foundational web standard, extremely well-documented (0.71 completeness but ubiquitous in training data). No empowerment logic, no excluded-population focus. Score 57.9 appears high for a technical standard with no civic framing. | 57.9 | 0.71 | LOW — schema infrastructure scores should be lower under this constitution |
| Open Collective | MEDIUM risk. Prominent in open-source community, well-documented (1.0). No educational component, no excluded-population focus. Score 57.9 driven by C5 (governance) but jury may be boosting based on familiarity with the platform. | 57.9 | 1.0 | LOW — familiarity with open-source governance may inflate |
| youtube-dl | MEDIUM risk. Extremely well-known open-source project (1.0 completeness). No civic framing, no excluded-population service, no empowerment logic. Score 56.0 driven by C3 (openness) and C4 (deployment). Constitutional fit is weak but score is mid-range. | 56.0 | 1.0 | LOW — technical popularity driving score above constitutional fit |
| SecureDrop | MEDIUM risk. Well-known whistleblower platform (1.0 completeness). Good C4 (deployment) and C5 (governance) scores but no empowerment logic (C2 low) and targets journalists/sources rather than specifically excluded populations. | 55.0 | 1.0 | LOW-MEDIUM — genuine security tool but familiarity may inflate |
| Anna's Archive | MEDIUM risk. Controversial but very well-known (0.78 completeness). Score 54.1 includes +8 modifier. No empowerment logic, no excluded-population service. Open-source framing (C3) is the primary driver. | 54.1 | 0.78 | LOW — open-access framing may be over-rewarded |
| OSINT Framework | MEDIUM risk. Well-known in security community (1.0 completeness). No civic framing beyond generic "transparency." Score 54.1 includes +7 modifier. Target audience is security researchers, not excluded populations. | 54.1 | 1.0 | LOW — security tool familiarity inflating score |
| Tor Project | Unlisted in top 50 but carries MEDIUM familiarity risk per jury data. Very well-known privacy tool. Constitutional rank 60 vs jury rank 94 — unusual case where constitution ranks HIGHER than jury, suggesting constitutional criteria (C1 inclusion for censored populations) legitimately reward it. | ~54.0 | 1.0 | MEDIUM — genuine constitutional fit through C1 but jury deflation unusual |
| Wikidata | LOW-MEDIUM risk. Foundational knowledge infrastructure (1.0 completeness). Score 60.9 driven by C4 (deployment) and C3 (openness). No empowerment logic, no excluded-population focus. High score may reflect dossier richness. | 60.9 | 1.0 | MEDIUM — infrastructure project with no constitutional-specific fit |
| Decidim | LOW risk. Well-known participatory democracy platform (1.0 completeness). Score 55.9 is actually depressed by C2 penalty (passive participation). Constitutional scoring appears to work correctly here — the low score despite high completeness shows the constitution differentiating. | 55.9 | 1.0 | MEDIUM-HIGH — constitutional criteria are actively working against familiarity here |

**Summary:** No projects carry HIGH popularity risk in this run. The MEDIUM-risk projects cluster in the 54-64 score range (ranks 11-50). The top 10 are all LOW or NONE risk — the constitution's emphasis on excluded-population service and empowerment logic naturally selects for less well-known projects (Humble Data Workshop, Teaching Public Service, Relational Tech Project, Landlord Tech Watch). This is a strength of this particular constitution for popularity bias mitigation.

---

## Jury Divergence

### Projects where jury models diverged most from constitutional ranking

**Largest positive gaps (jury ranks higher):**
- MapIt: constitutional rank 194, jury rank 154 (+40). Jury models may recognise this mySociety tool from training data. Constitution penalises it for institutional focus without excluded-population service.
- Bluesky: constitutional rank 181, jury rank 153 (+28). Very high training-data familiarity. Constitution correctly scores low (no empowerment logic, no excluded-population focus).
- Constitute Project: constitutional rank 129, jury rank 104 (+25). Academic constitutional comparison tool — jury familiarity with "constitutions" as a concept may inflate.

**Largest negative gaps (constitution ranks higher):**
- Public Media Stack: constitutional rank 201, jury rank 235 (-34). Constitution may give mild credit for open infrastructure; jury models appear to discount it further.
- Tor Project: constitutional rank 60, jury rank 94 (-34). Constitution rewards serving censored/excluded populations (C1 boost); jury models (especially Grok 4 with -8 offset) pull it down.
- Privacy Badger: constitutional rank 75, jury rank 107 (-32). Similar dynamic — privacy tools serving users under surveillance score well on C1 but jury models do not amplify this.

### Familiarity inflation suspects

The jury-constitution gap analysis reveals that **positive gaps correlate with project prominence in training data** (MapIt, Bluesky, Constitute Project, meet.coop, LiquidFeedback) while **negative gaps correlate with niche tools that align specifically with Owen's excluded-population focus** (Tor Project, Privacy Badger, Public Media Stack, Turbo Phonebank, The Commons Social Change Library). This is the expected pattern for familiarity inflation: the jury lifts well-known projects and misses niche constitutional fit.

### Model behaviour notes

- **Grok 4 is the dominant source of variance.** 17 projects flagged as Grok 4 divergent (> 2 std dev from panel median). The largest divergence: DAO Governance Surfaces (Grok 4 median 6.5 vs panel median 43.8, deviation 37.3). Grok 4's -8 offset plus high noise (5-15 range) and 0.15 extremism rate produces the widest score ranges across the panel.
- **Claude is the most conservative abstainer.** 80 abstentions across 5 runs (vs GPT-4.1's 46 and Mistral's 52). This is consistent with the centrist proceduralist profile — higher bar for engagement.
- **Gemini has the highest abstention rate.** 155 abstentions across 5 runs — nearly 10% of evaluations. This may reflect the institutionalist lens defaulting to abstention for projects outside its comfort zone.
- **No HIGH stability projects.** Zero projects achieved rank std dev < 5 across 25 runs. This is a consequence of the simulation methodology: Gaussian noise (range 2-15 depending on model) combined with 5 different model offsets (-8 to +5) guarantees wide rank variation. In a real API jury, some projects would likely stabilise.
- **315 of 319 scored projects have LOW stability** (rank std dev > 15). Only 4 have MEDIUM stability. This is an artefact of the simulation noise parameters being too wide for this constitution's score distribution.

---

## Constitution Weaknesses

### 1. Empowerment-through-education vs empowerment-through-participation blind spot

**Specific inference:** C2 (20 points) defines empowerment as "leaving people more capable after engagement" and explicitly targets "passive" service use as a low-score indicator. This framing is drawn from Owen's coding education career, where capability transfer is concrete and measurable.

**Why it's weakly evidenced:** There is no evidence Owen has articulated this distinction. The inference assumes that because he builds education tools, he would penalise participation tools. But he is currently enrolled in a political technology fellowship — he may well see participation platforms as empowering. The constitution cannot distinguish between these two empowerment mechanisms because it has no evidence of Owen's views on democratic participation technology.

**Impact:** Decidim (rank 48, score 55.9), Loomio (rank 158, score 42.1), CONSUL Democracy (rank 53, score 54.9), and Citizen OS (rank 47, score 55.9) are all penalised on C2. These are exactly the kind of open-source, community-governed, deployed-at-scale political technology that the longlist was designed to surface. The reflection.md identifies this as the constitutional failure mode.

### 2. Over-indexing on education because evidence is thickest there

**Specific inference:** C1 (inclusion, 20 pts) + C2 (empowerment, 20 pts) + M1 (excluded populations, +10-15) = up to 55 points for education-for-excluded-populations. This is 55% of the theoretical maximum for a single thematic dimension.

**Why it's weakly evidenced:** Owen's career IS focused on education-for-excluded-populations. But the constitution may be amplifying a career focus into an evaluative lens that penalises all non-education approaches to inclusion. A transparency tool that helps excluded communities contest algorithmic decisions (e.g., AlgorithmWatch, rank 62) may deserve more credit than the C2 rubric allows.

### 3. C7 (political technology, 6 points) may be too low

**Specific inference:** C7 is weighted LOW because evidence of Owen's political technology interest is "recent and thin." But he is currently doing a political technology fellowship at Newspeak House. The low weight may undervalue a genuine current interest.

**Impact:** Political technology platforms (Decidim, Loomio, CONSUL) get minimal C7 boost and are already penalised by C2. If C7 were 12 points (MEDIUM), these platforms would gain 3-6 points each. Not enough to change the top 10 but would shift the rank 40-60 band.

### 4. Double-counting guard may be over-restrictive

**Problem:** M1 caps at +5 when C1 >= 18. M4 caps at +3 when C3 >= 18. These guards prevent a single dimension from dominating but they also prevent the constitution from fully expressing its strongest signal — that excluded-population service + open-source education is Owen's core value. The top project (Humble Data Workshop, 77.7) hits the M1 cap, receiving +5 instead of the full +10-15.

**Trade-off:** Without the guards, the theoretical maximum for a perfect project would be ~115 before clamping (criteria 100 + modifiers up to 40+). With guards, the effective modifier range is compressed. The guards are a reasonable design choice but they dampen the signal from Owen's strongest values.

### 5. Criteria hard to apply consistently: C6 (scalability through people)

**Problem:** C6 asks whether a project "scales through trained practitioners, community facilitators, or volunteer networks." For most projects on the longlist, this information is not available in the dossier. The scoring agent must infer from `scraped_description` whether a project has a volunteer or trainer model. This makes C6 scores noisy and potentially unfair — projects that mention volunteers in their description score higher than equally volunteer-driven projects that don't mention it.

### 6. Procedural rule C.6 (novelty vs implementation) was not visibly applied

**Problem:** The constitution specifies that projects with "strong theory of change for underserved population + no deployment evidence" receive a max of 65/100. No projects in the ranking-table.csv appear to have hit this cap explicitly. Either no projects triggered it (unlikely given the longlist includes many prototypes) or the scoring algorithm did not implement it.

---

## Underdog Protection Audit

**Was it included in this constitution?** YES

**Mechanism:** Projects with `dossier_completeness` >= 0.25 and < 0.45 receive a score floor of 25/100 and are flagged `[UNDER-RESEARCHED]`. Suspended criteria defaults for thin dossiers: C4=5/12, C5=5/12, C6=5/12 when data absent.

**Which projects had it applied?** NONE. No projects in the longlist have completeness in the 0.25-0.45 range. The completeness distribution is bimodal: 2 projects below 0.25 (abstained) and 319 projects above 0.65.

**Did it change any rankings materially?** NO. The mechanism was structurally present but practically inert.

**Uncertainty floor:** 25/100 for projects with completeness 0.25-0.45. No project hit it.

**Assessment:** The underdog protection is insurance against a scenario that does not currently exist in this longlist. The enrichment pipeline has been thorough enough that nearly all projects have high completeness. If the longlist were expanded to include newer or more obscure projects, the mechanism would activate. For this run, it is a no-op.

---

## Rerun Triggers

1. **Twitter/X access restored.** If Owen's social media becomes accessible, it would provide first-person views that could significantly alter C7 weight (political technology) and potentially reveal views on participatory democracy tools that the current constitution cannot capture.

2. **Public writing or talks found.** Any first-person articulation from the Newspeak House fellowship period, Sigma Labs period, or CYF period would strengthen or correct the constitution's evidence base. Currently the entire constitution rests on career pattern + one 2018 quote.

3. **Dossier schema updated with proposed fields.** If `educational_component` and `target_population_exclusion_level` are added to the dossier schema, the scoring algorithm would be significantly more precise. A rerun would differentiate projects that currently score similarly due to inference imprecision.

4. **C2 rubric revised to include participatory empowerment.** The constitutional failure mode (empowerment-through-education vs empowerment-through-participation) is the most significant weakness. If the rubric is broadened, participatory democracy platforms would gain 5-10 points each, significantly reshuffling the rank 40-80 band.

5. **Real API jury runs replacing simulation.** All 25 jury logs are SIMULATED. A rerun with real API calls would produce genuine model-specific scoring patterns, meaningful abstention data, and reliable rank stability metrics (currently 0 HIGH-stability projects because noise parameters are too wide).

---

## Constitutional Performance Assessment

### What differentiated well

- **Top-tier selection.** The top 10 are cohesive and clearly aligned with Owen's values: open-source, volunteer-driven, serving excluded populations, with empowerment logic. Humble Data Workshop, Teaching Public Service, Mozilla Data Collective, Relational Tech Project, Landlord Tech Watch — these are exactly the projects an educator for excluded communities would champion.

- **Bottom-tier selection.** The bottom 10 (PolicyMogul, Overton, GovWise, Public Editor, etc.) are proprietary tools serving already-enfranchised users. The Modifier 3 reduction (-5 to -10 for "digitising power structures without expanding access") works as intended.

- **Mid-range differentiation.** The 50-65 score range contains projects that hit some criteria but not others. Creative Commons (rank 14, 60.9) scores well on openness but not on excluded-population focus. Security First (rank 17, 60.9) scores well on deployment but not on empowerment logic. The criteria produce meaningful distinctions here.

### What differentiated poorly

- **Rank 14-25 bunching.** Many projects score exactly 60.9, 59.9, or 58.9. This suggests the scoring algorithm is producing too many identical base scores with small modifier adjustments. The normalisation (raw/1.02) combined with integer-ish criteria scores creates a grid effect.

- **Participation platforms underranked.** Decidim (48), Loomio (158), CONSUL (53), Citizen OS (47) are open-source, community-governed, deployed participatory democracy tools that the longlist was designed to surface. The constitution's C2 rubric systematically depresses their scores. This is the primary constitutional failure mode identified in reflection.md.

- **Underdog protection inactive.** The mechanism exists but never fires. For this longlist, it adds nothing.

### Overall assessment

The constitution is well-constructed and internally consistent. The 5-contradiction resolution in the synthesiser step is thorough. The double-counting guards prevent dimensional dominance. The scoring procedure is clear and auditable. The primary weakness is the C2 empowerment rubric's education-specific framing, which produces a constitutional blind spot for an entire category of political technology (participation platforms) that Owen, as a Newspeak House fellow, might actually value highly.

---

## Issues Log

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| evidence-raw.md not persisted to disk | missing-file | Audit trail incomplete — intermediate evidence collection not reviewable | Content consumed by downstream agents; constitution.md cites sources | Known — pipeline should persist all intermediate files |
| evidence-verified.md not persisted to disk | missing-file | Verification outcomes not independently reviewable | Constitution source tags (CONFIRMED/PROBABLE) preserve key outcomes | Known |
| evidence-assessed.md not persisted to disk | missing-file | Confidence tiers and gap analysis not independently reviewable | Constitution "Why this constitution" section and synthesis notes preserve key content | Known |
| criteria.md not persisted to disk | missing-file | Criteria development process not auditable separately from synthesis | Content present in constitution.md Part A | Known |
| modifiers.md not persisted to disk | missing-file | Modifier development not auditable separately from synthesis | Content present in constitution.md Part B | Known |
| procedural.md not persisted to disk | missing-file | Procedural rules development not auditable | Content present in constitution.md Part C | Known |
| soul-chris-owen.md not found on disk | missing-file | No per-member parent agent file on current branch | Pipeline used shared sub-agent souls with inline instructions; no impact on output quality | Known |
| Jury simulation rather than real API calls | methodology-constraint | All jury scores are principled estimates, not real model output; rank stability metrics unreliable | All jury files labelled SIMULATED; constitutional ranking is definitive | Open — requires credit replenishment |
| Score bunching at 60.9, 59.9, 58.9 | scoring-artifact | Reduced differentiation in mid-range | Likely caused by integer criteria scores + normalisation grid effect | Known — consider continuous scoring in future |
| C.6 novelty cap (65/100) not visibly applied | pipeline-deviation | Early-stage projects may not have been capped as specified | No projects in ranking show explicit cap application | Open — verify scoring algorithm |
| 0 HIGH-stability projects in jury | simulation-artifact | Noise parameters (2-15 range) too wide relative to score distribution | Artefact of simulation; real API calls would produce tighter distributions | Known |
| Twitter/X inaccessible | evidence-gap | No first-person social media views available | Constitution built on career pattern + one quote | Open — rerun trigger |
| No public writing from Owen | evidence-gap | Constitution rests on career inference, not articulated views | Career pattern strong but not sufficient for evaluative specifics | Open — rerun trigger |
