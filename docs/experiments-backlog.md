# Experiments Backlog

Generated: 2026-03-27
Source: synthesised from process log, iteration history (v1–v7), data log, Project B tier analyses (tiers 0–1), open GitHub PRs, and orchestrator progress log

---

## Open questions (unresolved from process log)

| Question | Context | Why it matters | Suggested experiment |
|---|---|---|---|
| Should confidence-ranked jury promotion remain the final selector? | Confidence is self-reported; Grok wins every time | May reward model overconfidence over reasoning quality | EXP-001: test alternative promotion rules (median, voting, weighted by jury diversity) |
| How should model calibration asymmetry (especially Claude) be normalised? | Claude assigned green to only 3/321 vs Grok's 120 | Structural underrepresentation of Claude's political epistemology | EXP-002: calibration-aware shortlist thresholds; normalise each model's green/yellow rates before shortlisting |
| Should mixed-jury optimistic merging be retained? | Mixed juries use most-optimistic bucket, biasing toward charitable readings | May hide genuine disagreements between models | EXP-003: merged-median vs merged-most-optimistic comparison on same shortlist |
| How much human review is required before final publication? | Evidence fields sparse for some projects | Risk of publishing weak dossier data as authoritative | EXP-004: spot-check policy trial — human review 20 highest-scoring dossiers before sign-off |
| How should weak evidence fields (`policy_outcomes`, `causation_strength`) be handled in scoring? | Fields exist but are hard to verify from public sources | Scoring bonuses for unverified claims distort results | EXP-005: gate scoring bonuses on link-backed evidence only; compare delta against current results |
| How should citation quality be enforced at enrichment time? | Verifier removed 538 vague citations post-enrichment | Upstream fixes cheaper than post-hoc cleaning | EXP-006: add citation validation at enrichment generation (reject descriptive strings without URL/DOI) |
| Should non-project or low-quality candidate URLs be filtered earlier? | Some nominations are papers/templates/blog posts, not projects | Enrichment effort wasted on non-candidates | EXP-007: intake validation ruleset to flag non-project URLs before enrichment |
| Should the committee adopt a political typology for classifying projects? | Current comparisons mix data extraction, workflow efficiency, and organising/coordination tools | Comparing apples and oranges inflates noise in deliberation | EXP-008: propose and implement minimal typology; test whether within-typology rankings are more stable |
| How should each project's theory of change be captured and scored? | Current fields emphasise outputs/evidence but not causal pathways | Harder to assess whether projects produce structural vs symptomatic change | EXP-009: add theory-of-change field to enrichment schema; weight in one deliberation branch |
| Where should human intervention sit in deliberation? | Committee interest in adding human checkpoints | Inspectability vs automation tension | EXP-010: prototype one human-in-the-loop deliberation branch using Discord approval gates |
| Should the committee branch into model-evaluation framing parallel to project ranking? | Team interest in comparing model political priors | Politically significant: different models encode different values | EXP-011: run parallel model-evaluation branch and publish comparative findings |
| How stable are model outputs run-to-run for the same setup? | Winner sensitivity may compound within-model noise | If Grok x1 and Grok x10 produce different winners, the result is fragile | EXP-012: repeatability test — run Grok jury 10 times on same inputs; publish variance stats |
| What level of score explanation should be published per project? | Current ranking UI surfaces outcomes without interpretability context | Transparency requirement for legitimate public output | EXP-013: add per-project explanation blocks tied to score components in results output |
| Is scraped content sufficiently representative of each project? | Weak/partial page captures distort eval and deliberation quality | Fundamental input quality issue | EXP-014: scrape quality diagnostics — measure content length, recency, and coverage across dossiers |
| Should shortlist gating be removed or loosened when cost allows? | Shortlist may hide signal; full-run cost ~$11 may be acceptable | Removing shortlist could surface currently suppressed projects | EXP-015: full-run without shortlist gate on reduced model set; benchmark cost vs quality delta |
| Should committee values be explicitly reflected and aggregated in scoring? | Current framework may overweight one value schema | Awards legitimacy depends on plural value representation | EXP-016: value elicitation survey with committee; aggregate and compare rankings under different member-value weightings |
| Can we model the ranking space to identify principal value axes? | Value structure implicit in score vectors | Would reveal what is actually being measured | EXP-017: dimensionality-reduction analysis on project-score vectors from v6 six-jury outputs |
| Can uncertainty-aware estimators improve fairness and interpretability? | Current process lacks explicit uncertainty modeling | Projects near thresholds deserve uncertainty indicators | EXP-018: compute controversy scores from jury disagreement; surface in rankings UI |
| Should attendees rank projects live at the event? | Valuable for transparency; interaction model undecided | Event engagement and democratic legitimacy | EXP-019: prototype ranking UI (pairwise or values-driven) for showcase event |
| Do rankings shift as values become explicit and accountability increases? | Project B research question | Core empirical question for this iteration's contribution | EXP-020: complete Project B tiers 2–5 and publish cross-tier comparison |

---

## Failed / abandoned approaches worth revisiting

### URL-only keyword matching (v2, v3)
**What was tried:** Score projects using keyword matches against URL strings alone (exclusion keywords in v2; four policy-aligned clusters in v3).
**Why it failed/stopped:** Almost no signal — only 2 of 321 projects scored above baseline in v3. URL strings are not representative of project content or values.
**What a retry might look like:** Apply keyword matching to full dossier text (now available via `data/enriched/`) rather than URLs. This has never been attempted with the enriched dataset. Keyword clusters could now match against `description`, `tagline`, `issue_area`, and `theory_of_change` fields. Would be fast, cheap, and provide a heuristic baseline comparable to deliberation outputs.

### Single-model same-family deliberation (v5 limitation)
**What was tried:** Three ITN/A agents all running on Grok 4.1 Fast. True model independence was not achieved.
**Why it failed/stopped:** Disagreements were real but within one model's possibility space. Identified as a limitation; v6 then addressed this.
**What a retry might look like:** Now that v6 has the multi-model infrastructure, run a v5-style three-agent deliberation with genuinely different base models (e.g. Claude, Llama, Mistral) and compare directly against the same-model v5 result to quantify how much model family changes the outcome.

### Union shortlist rule (abandoned during v6)
**What was tried:** Shortlist any project where at least one model assigned green or yellow. Produced 242 candidates.
**Why it failed/stopped:** Too loose; allowed single-model noise through. Replaced by 2-of-3 rule.
**What a retry might look like:** Now that Claude's calibration is understood, a weighted union (e.g. Claude green = 3 points, Grok/Kimi green = 1 point each; threshold = 2) could recover calibration-aware shortlisting without excluding Claude's strong signals entirely.

### Intersection shortlist rule (abandoned during v6)
**What was tried:** Require all three models to assign green or yellow. Produced only 88 candidates.
**Why it failed/stopped:** Too tight; Claude's calibration asymmetry removed too many strong candidates.
**What a retry might look like:** After calibration normalisation (EXP-002), re-test the intersection rule. If Claude's effective green rate approaches Grok's, the intersection would produce a tighter, higher-confidence shortlist that may be more defensible.

### davit-agent (v7 DRAFT PR #20)
**What was tried:** Davit's evaluation criteria translated into an agent prompt; shortlisted 42 projects; produced a winner recommendation.
**Why it failed/stopped:** PR is in DRAFT state; davit-agent archived; final winner selection was to be by Davit's manual review, which has not been completed.
**What a retry might look like:** Use the davit-agent's 42-project shortlist as an input to the main deliberation pipeline. Compare how the davit-criteria shortlist and the ITN/A shortlist overlap, and whether the final winner changes. This is already well-scoped and just needs a run.

---

## Untested ideas (mentioned but never attempted)

| Idea | Source | Suggested agent or approach |
|---|---|---|
| De-rank known/famous projects to surface less obvious candidates | 2026-03-04 meeting | awards-builder: add de-ranking bonus for underdog_signal field in scoring |
| Relevance bonus for 2026-specific political context | 2026-03-04 meeting | awards-researcher: identify 2026 political context markers; awards-builder: add relevance field |
| SERP API / search agent integration for enrichment | 2026-03-04 meeting | awards-researcher: add web search pass to enrichment pipeline |
| Last-year activity signal as quality filter | 2026-03-04 meeting | awards-builder: add last-commit-date or last-update field to scoring weight |
| Blog/news page scraping as third-party evidence source | 2026-03-04 meeting | awards-researcher: extend fetch pipeline to include /blog, /news, /press paths per project |
| Operator bot integration showing live rankings/top choices | 2026-02-04 meeting | bot-builder: repurpose operator bot for ranking display |
| Democratic lens / persona contributions to deliberation | 2026-03-13 meeting | awards-builder: add democratic-citizen persona to v5/v6 jury alongside political/relational/experimental |
| Mini-workshop at event: attendees derive their own conclusion from deliberation data | 2026-03-13 meeting | event team + UI: expose deliberation arguments to attendees at event |
| Pricing / cost traceability as published process output | 2026-03-04 meeting | awards-builder: add cost metadata to iteration schema and publish per-run cost breakdown |
| Cohort member values profiling (Project A) — compare AI-inferred vs self-reported | 2026-03-27 progress log | cohort-fellow-profiler: run profiles for all cohort members; compare against Project B revealed-preference rankings |
| Global South lens as an explicit scoring dimension | Tier 0 analysis (project-b) | awards-builder: add global-south deployment as positive scoring weight; test ranking delta |
| Labour rights / workers' rights as an explicit evaluation frame | Tier 1 analysis (project-b) | awards-builder: prototype labour-rights frame as system prompt variant; compare against baseline |
| Sci-Hub inclusion (legally controversial projects) | Tier 0 analysis (project-b) | Process decision needed: should the committee have an explicit policy on legally contested projects? |
| Re-run WebSearch-unavailable citations verification (153 entries) | Citation verification report 2026-03-20 | awards-verifier: re-run with WebSearch enabled; recover real URLs for ~153 semi-specific entries |
| Aggregate committee values through inspectable mechanisms (voting variants, debates) | 2026-02-23 matrix discussion | Process design: elicit explicit value rankings from each committee member; aggregate into a combined weight vector |

---

## Experiment proposals (ready to run)

### EXP-001: Alternative jury promotion rules
**Hypothesis:** Confidence-ranked promotion structurally advantages Grok due to overconfidence bias. Median ranking, Borda count, or weighted-diversity promotion rules would produce more robust winners.
**Method:** Take the six existing v6 jury verdicts (already produced). Apply three alternative promotion rules: (a) Borda count across all six juries' ranked shortlists, (b) weighted voting where diversity-of-winner gets higher weight, (c) median position across all six jury rankings. Compare winners and final rankings under each rule.
**Data needed:** v6 jury deliberation outputs (already in cache/iterations)
**Agent to run it:** awards-builder
**Estimated effort:** small
**Priority:** high
**Why now:** All data already exists. This is a pure analysis and schema change with no new pipeline runs needed. Directly resolves the highest-priority open question about promotion rules.

---

### EXP-002: Calibration-aware shortlist normalisation
**Hypothesis:** Claude's calibration asymmetry (3 greens vs Grok's 120) means the current 2-of-3 shortlist rule still under-represents Claude's political epistemology. Per-model rate normalisation before shortlisting would produce a fairer comparison.
**Method:** For each model, compute its green rate and yellow rate across all 321 projects. Scale each model's bucket scores so effective green rates are comparable (e.g. normalise to 30% green target). Re-run shortlist rule on normalised scores. Compare resulting shortlist to v6 shortlist of 183 — what enters, what exits?
**Data needed:** v6 assessments-grok.json, assessments-all-claude.json, assessments-all-kimi.json
**Agent to run it:** awards-builder
**Estimated effort:** small
**Priority:** high
**Why now:** This is an analysis of existing data. Required before any fair cross-model comparison can be claimed.

---

### EXP-003: Merged-median vs merged-most-optimistic jury comparison
**Hypothesis:** Mixed juries using most-optimistic merging are biased toward charitable readings. Median merging would produce more conservative but potentially more representative mixed-jury outputs.
**Method:** Re-merge the three model assessments using median bucket per dimension (green=3, yellow=2, red=1, grey=0; median value). Re-run GPT-4o mixed jury and DeepSeek adversarial jury on median-merged assessments. Compare their winners and confidence scores against v6 results.
**Data needed:** v6 assessments-grok.json, assessments-all-claude.json, assessments-all-kimi.json; GPT-4o and DeepSeek API access
**Agent to run it:** awards-builder
**Estimated effort:** medium
**Priority:** medium
**Why now:** Resolves a clear methodological flaw in the mixed-jury design identified in v6 limitations.

---

### EXP-004: Enrichment schema citation validation at generation time
**Hypothesis:** Adding citation validation at enrichment generation (reject descriptive strings without URL or DOI) would eliminate the need for post-hoc citation cleanup, saving time and reducing error.
**Method:** Audit the enrichment pipeline scripts. Add a validation step that rejects any citation entry without a URL or DOI before it is written to the dossier. Run a test enrichment pass on 10 dossiers. Compare output to the v7 post-cleanup versions.
**Data needed:** enrichment pipeline scripts; 10 sample dossiers
**Agent to run it:** awards-builder
**Estimated effort:** small
**Priority:** high
**Why now:** The verifier removed 538 vague citations post-hoc. Adding upstream validation is a one-time fix that prevents recurrence and was explicitly recommended in the citation verification report.

---

### EXP-005: Citation recovery pass with WebSearch enabled
**Hypothesis:** 153 entries in the citation verification run had specific enough bibliographic information (headlines, author names, dates) that WebSearch could recover real URLs, turning nulled citations into verified ones.
**Method:** Re-run the citation verifier on the 153 "specific but unverifiable" entries flagged in the 2026-03-20 report. For each entry, use WebSearch to find the article or paper URL. Replace nulled entries with recovered URLs. Spot-check 20 recovered citations for accuracy.
**Data needed:** 2026-03-20 citation verification report; data/enriched/ dossiers; WebSearch access
**Agent to run it:** awards-verifier
**Estimated effort:** medium
**Priority:** high
**Why now:** 153 citations are missing that may be recoverable. The report explicitly flagged this as the first recommended next action. Improves dossier quality directly.

---

### EXP-006: Intake validation ruleset for non-project URLs
**Hypothesis:** A subset of the 321 candidates are papers, templates, blog posts, or other non-project endpoints. Identifying and flagging them before enrichment would improve data quality and avoid wasted enrichment effort.
**Method:** Review all 321 candidate URLs. Apply a validation ruleset: (a) is the URL a specific page rather than a project homepage? (b) does the URL resolve to a PDF, GitHub repository README, or blog post? (c) does the dossier `project_type` field contain "template", "paper", or "post"? Produce a flagged list for human review.
**Data needed:** candidates.csv; data/enriched/ dossiers
**Agent to run it:** awards-verifier
**Estimated effort:** small
**Priority:** medium
**Why now:** Non-project entries contaminate all scoring runs. This is a data hygiene task that improves all downstream analysis. Low effort, high impact.

---

### EXP-007: Political typology proposal and stability test
**Hypothesis:** Projects of different types (data extraction, workflow efficiency, organising/coordination, accountability/transparency, infrastructure) are implicitly mixed in comparisons. Within-typology rankings are more stable and more meaningful.
**Method:** Propose a minimal typology with 5–7 categories. Classify all 321 candidates. Re-run v6 jury deliberations within each typology bucket (i.e. separate shortlists per type). Compare per-type winners to overall winner. Measure whether cross-type rank stability increases.
**Data needed:** data/enriched/ dossiers; v6 pipeline
**Agent to run it:** awards-researcher (typology design), then awards-builder (classification + re-run)
**Estimated effort:** large
**Priority:** medium
**Why now:** Explicitly requested by the committee in the 2026-03-15 meeting. Also needed for Project B tiers, which are currently mixing types.

---

### EXP-008: Theory-of-change field addition and weighted scoring test
**Hypothesis:** Adding a `theory_of_change` field to enrichment schema and weighting it in deliberation would differentiate projects that produce structural change vs symptomatic relief.
**Method:** Design a theory-of-change taxonomy (e.g. direct-service, systemic-change, civic-infrastructure, accountability, research-to-policy). Add field to enrichment schema. Classify 30 dossiers manually. Test deliberation weighting using the field as an additional scoring input.
**Data needed:** 30 sample dossiers; enrichment schema
**Agent to run it:** awards-researcher (field design), awards-builder (schema + scoring test)
**Estimated effort:** medium
**Priority:** medium
**Why now:** Committee request from 2026-03-15 meeting. Would directly address the concern that current fields emphasise outputs but miss causal pathways.

---

### EXP-009: Repeatability test — Grok jury x10
**Hypothesis:** Grok's self-reported confidence of 95/100 may mask within-model run-to-run variance. Running the same Grok jury 10 times on identical inputs would reveal variance in winner selection and score distributions.
**Method:** Run the Grok ITN/A jury deliberation pipeline 10 times with identical inputs (same shortlist, same assessments). Record winner, confidence score, and top-5 ranking for each run. Compute mean, variance, and win-rate per project.
**Data needed:** v6 Grok assessments and shortlist (already in cache)
**Agent to run it:** awards-builder (automated pipeline runner)
**Estimated effort:** medium (cost: ~$11–15 estimated based on v6 Grok spend)
**Priority:** high
**Why now:** Directly addresses the open question from the 2026-03-09 meeting. Grok's dominance could be an artefact of overconfidence rather than quality. This test would either confirm or undermine that claim.

---

### EXP-010: Scrape quality diagnostics
**Hypothesis:** Weak or partial page captures systematically disadvantage projects with bot-blocking, JS-heavy frontends, or unstable homepages — creating a structural bias toward well-documented, English-language Western nonprofits.
**Method:** For each dossier, compute: (a) character count of cached homepage content, (b) whether Jina fallback was used, (c) whether the page resolved at all. Segment projects by scrape quality tier (rich / thin / failed). Compare score distributions across tiers. Identify specific projects where thin scrapes may have suppressed ranking.
**Data needed:** cache/sites.sqlite; data/enriched/ dossiers; v6 results.json
**Agent to run it:** awards-verifier
**Estimated effort:** small
**Priority:** medium
**Why now:** Identified as an open question in the process log and the 2026-03-09 discussion. Would take one analysis pass on existing cached data.

---

### EXP-011: Project B tiers 2–5 completion
**Hypothesis:** Rankings shift as values become more explicit and accountability (human-in-the-loop) increases. Completing the full tiered pipeline (tiers 2–5) would test whether value transparency changes outcomes or merely changes appearance of legitimacy.
**Method:**
- Tier 2: Run five ideological framings (technocratic, progressive, libertarian, conservative, global-south-centred) using explicit system prompts. Compare to Tier 0 baseline.
- Tier 3: Two-stage pipeline — infer values from dossiers first, then rank only on those values. Compare to Tier 0.
- Tier 4: Evidence-grounded ranking requiring citation of specific dossier fields. Record abstentions.
- Tier 5: Pairwise comparison of top 30 projects. Identify non-transitive cycles.
**Data needed:** project-summaries.json (already in project-b); data/enriched/ dossiers
**Agent to run it:** tier-runner (Project B agent)
**Estimated effort:** large
**Priority:** high
**Why now:** Tiers 0–1 are complete. The research question is active and the data is ready. The showcase deadline creates urgency.

---

### EXP-012: Cohort fellow profiling (Project A) — expand beyond Nicholas Botti
**Hypothesis:** AI-inferred value profiles from public content can predict how cohort members would rank projects, producing rankings that differ from both the model's implicit values and the committee's explicit criteria.
**Method:** Run cohort-fellow-profiler on all cohort members with sufficient public content. For each profile, produce a ranking of the top-30 project shortlist using the inferred values. Compare inferred rankings across fellows and against Tier 0 baseline.
**Data needed:** docs/cohort-2025.md (cohort member list); public content for each member
**Agent to run it:** cohort-fellow-profiler
**Estimated effort:** large
**Priority:** medium
**Why now:** Project A is in-progress per the progress log. Nicholas Botti profile is complete. Expanding to other fellows is the natural next step and feeds directly into the Project A vs Project C comparison (the core research payoff).

---

### EXP-013: Underdog de-ranking bonus experiment
**Hypothesis:** Well-known projects (AlgorithmWatch, vTaiwan, Bellingcat) have name-recognition advantages in model evaluation that inflate their scores. Applying a de-ranking penalty for high-profile projects would surface less-obvious candidates.
**Method:** Add an `underdog_boost` parameter to the scoring pipeline. For projects where `underdog_signal = true` and `github_stars < 500` and `team_size = small`, apply a +5 to +10 score boost. Run full pipeline with boost applied. Compare shortlist composition to baseline — how many new projects enter the top 30?
**Data needed:** project-summaries.json; data/enriched/ dossiers; existing pipeline
**Agent to run it:** awards-builder
**Estimated effort:** small
**Priority:** medium
**Why now:** Proposed in the 2026-03-04 meeting. The `underdog_signal` field already exists in the enriched dossiers. Implementation is small.

---

### EXP-014: Specialist panel validation — does per-lens model routing improve deliberation quality?
**Hypothesis:** The v6 specialist panel (Gemini 2.5 Pro for political, Llama 3.3 70B for relational, Mistral Large for experimental) was described as experimental with no prior evidence of improvement. A comparison against a single-model specialist panel would isolate the routing effect.
**Method:** Run the specialist panel configuration again. Also run a single-model specialist panel (e.g. Gemini 2.5 Pro across all three lenses). Compare winner, confidence score, ranking, and deliberation quality (coherence of argument, score revision behaviour). Assess whether multi-model routing produces meaningfully different reasoning.
**Data needed:** v6 merged assessments; Gemini/Llama/Mistral API access
**Agent to run it:** awards-builder
**Estimated effort:** medium
**Priority:** low
**Why now:** The specialist panel is an unvalidated design choice. Low priority because it doesn't change the final winner but matters for methodological integrity of future runs.

---

### EXP-015: Full-run without shortlist gate
**Hypothesis:** The 2-of-3 shortlist rule excludes projects that may rank highly under certain jury configurations. A full-run with all 321 projects entering deliberation would test whether the shortlist is hiding signal.
**Method:** Run a single jury deliberation (Grok, as the cheapest) on all 321 projects without a shortlist filter. Compare the resulting top-30 to the v6 shortlist-filtered top-30. Identify any projects that enter the top 30 that were excluded by the shortlist rule.
**Data needed:** v6 Grok assessments for all 321 projects; Grok API access
**Agent to run it:** awards-builder
**Estimated effort:** medium (cost: estimated $20–30 for full-field deliberation)
**Priority:** medium
**Why now:** Cost was identified as a blocker, but at ~$11 for the full six-jury v6 run, a single full jury run should be within budget. Directly tests the shortlist design.

---

### EXP-016: Committee values elicitation and aggregation
**Hypothesis:** Committee members hold different but articulable value hierarchies. Explicitly eliciting and aggregating these would produce a committee-weighted ranking that is more democratically legitimate than model-generated rankings.
**Method:** Design a short values survey (6–8 dimensions, forced ranking). Send to all committee members. Aggregate responses using three methods: simple average, Borda count, and robust aggregation (median rank). Apply each aggregated value vector to the enriched dossiers as a scoring weight. Compare resulting rankings.
**Data needed:** Committee member list; values dimensions from Tier 0 analysis
**Agent to run it:** Human-led (survey design + distribution); awards-builder (aggregation + scoring)
**Estimated effort:** medium
**Priority:** high
**Why now:** Core to the awards' legitimacy framing. Directly addresses the 2026-02-23 proposal about treating rankings as expressions of committee values. Also provides ground truth for comparing against Project A AI-inferred profiles.

---

### EXP-017: Dimensionality reduction on six-jury score vectors
**Hypothesis:** The six v6 jury rankings encode different political value axes. Applying PCA or UMAP to the six-dimensional score vectors for all 183 shortlisted projects would reveal principal dimensions of political-technology value.
**Method:** Extract per-project scores across all six v6 juries. Apply PCA (or UMAP for non-linear structure). Identify 2–3 principal components. Interpret each component axis. Plot projects in 2D value space. Identify clusters and outliers.
**Data needed:** v6 jury rankings for all 183 shortlisted projects
**Agent to run it:** awards-builder (or a new analysis agent)
**Estimated effort:** medium
**Priority:** medium
**Why now:** Proposed in the 2026-02-23 matrix discussion. Would produce a publishable visualisation and improve interpretability of the results. Input data already exists.

---

### EXP-018: Controversy / uncertainty scores from jury disagreement
**Hypothesis:** Projects where juries strongly disagree are "controversial" in a meaningful political sense. Publishing controversy scores alongside rankings would improve transparency and interpretability.
**Method:** For each project in the v6 shortlist, compute: (a) rank variance across the six juries' shortlists, (b) whether the project appeared in all six, some, or only one jury's shortlist. Label each project: consensus / contested / divisive / invisible. Surface these labels in results.json and the viewer.
**Data needed:** v6 jury rankings for all six juries
**Agent to run it:** awards-builder
**Estimated effort:** small
**Priority:** medium
**Why now:** Directly adds value to the existing results without requiring new pipeline runs. Can be computed analytically from existing data.

---

### EXP-019: v7 Davit shortlist integration with main pipeline
**Hypothesis:** The Davit-criteria shortlist of 42 projects (PR #20, DRAFT) partially overlaps with the ITN/A shortlist. Running the davit-agent's shortlist through the main ITN/A deliberation pipeline would test whether criteria-based and deliberation-based pipelines converge on the same winner.
**Method:** Extract the 42-project davit shortlist from PR #20. Run the Grok ITN/A deliberation on this shortlist (as an alternative to the 2-of-3 shortlist rule). Compare winners and ranking against v6 outputs. Identify projects that ranked high under davit criteria but were suppressed by the ITN/A pipeline.
**Data needed:** v7 davit shortlist (from PR #20); v6 Grok assessments; Grok API access
**Agent to run it:** awards-builder
**Estimated effort:** medium
**Priority:** medium
**Why now:** PR #20 is drafted and has a defined shortlist. The davit criteria explicitly represent a human evaluator's political framing. Comparing it against model-generated ranking is a concrete test of human vs AI value alignment.

---

### EXP-020: Per-project explanation block generation
**Hypothesis:** Publishing per-project explanation blocks (which score components contributed, what the jury said about it, why it ranked where it did) would make the results interpretable to awards attendees and the public.
**Method:** For the top 30 projects in v6 results, generate structured explanation blocks from deliberation outputs: (a) overall score and tier, (b) jury breakdown (which juries included it), (c) strongest argument for and against from deliberation logs, (d) score component breakdown. Output as JSON and render in viewer.
**Data needed:** v6 jury deliberation logs; results.json
**Agent to run it:** awards-builder
**Estimated effort:** medium
**Priority:** high
**Why now:** Needed before the showcase event. Without explanations, the ranking is opaque. This is a presentation-readiness task with a deadline.

---

## Ideas needing more thinking

These came up in the logs but aren't ready to spec as experiments:

- **Model-evaluation framing as a parallel track**: The idea of using the awards process to evaluate AI models as political artefacts (Fatima's interest, 2026-03-13) is compelling but requires a separate research design. Not clear who the audience is, what the output would be, or how it relates to project ranking. Worth a dedicated design session.

- **Attendee ranking UI (pairwise or values-driven)**: The event ranking UI (EXP-019 is the pipeline integration; this is the front-end) would need UX design, a facilitation format, and a decision about whether attendee rankings should influence the final result or just run in parallel. Requires product and process design before it can be a buildable experiment.

- **Operator bot for live ranking display**: Repurposing the operator bot to show rankings to cohort members was proposed in Feb 2026. Still undone. Would require access to the bot's infrastructure and a decision about what data to expose. Low-hanging fruit if bot access is available but not scoped here.

- **Publishing intermediate artifacts (assessments, deliberations, cache)**: The 2026-02-23 suggestion to treat intermediate outputs as first-class process artifacts is a publication and governance decision, not an experiment. Needs a decision about what to publish, in what format, and with what framing. Could be important for the research contribution of the whole project.

- **Replacing confidence promotion with democratic legitimacy scoring**: The committee discussed whether model confidence is a legitimate promotion criterion. An alternative would be to weight jury promotion by how well the jury's values map onto committee values (once those are elicited via EXP-016). This is only designable after EXP-016 completes.

- **Cross-jurisdiction applicability as a standalone scoring dimension**: Several juries and the davit criteria emphasised generalizability across jurisdictions (including non-Western and constrained contexts). Currently a qualitative judgment embedded in deliberation. Making it an explicit scoring field would require enrichment schema changes and a methodology for assessing cross-jurisdiction claims.
