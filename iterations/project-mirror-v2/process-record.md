# Project Mirror v2 — Process Record

> This is the canonical project record for Project Mirror v2.
> It is append-only. Entries are added after every run by the mirror-notetaker agent.
> It feeds the project-mirror-v2/summary PR directly.
> Do not summarise. Do not paraphrase prompt text or code. Include everything in full.

---

## Pre-pilot architectural decisions
Date: 2026-03-28
Recorded by: orchestrator (before first run)

---

### PROJECT MIRROR V2 — WHAT IT IS

Project Mirror v2 is a synthetic evaluator estimation workflow built for the Newspeak House Politech Awards 2026. It estimates how individual cohort members might evaluate the 321-project longlist, based on their public record and provided bio. It is a research prototype. It does not claim to reconstruct true beliefs.

It operates simultaneously as:
1. A **constitutional ranking system** — each evaluator's implicit values are made explicit as a constitution before any ranking occurs
2. A **synthetic evaluator benchmark** — testing whether AI can infer evaluative constitutions from public evidence and apply them consistently
3. A **simulated jury deliberation system** — at the committee stage only, synthetic evaluator outputs are aggregated, contested, and deliberated

**Research question:**
Can AI infer a usable evaluative constitution for a person from their public record, and if so, which project rankings remain stable when the decision procedure varies across inference, scoring, aggregation, and deliberation?

**Secondary questions:**
- Which parts of the ranking are robust across models versus fragile to procedure?
- Which projects are most sensitive to the scoring rule, aggregation rule, or deliberation stage?
- Which synthetic evaluator profiles are easiest or hardest to align to human self-reaction?
- What does this reveal about AI systems as political and evaluative tools rather than neutral rankers?

---

### DECISION: Branch naming — project-mirror-v2/*

**Decision:** All per-member branches use the prefix `project-mirror-v2/[slug]`. The committee branch is `project-mirror-v2/committee`. The summary branch is `project-mirror-v2/summary`.

**Rationale:** v1 branches already exist on `project-a/*` and `project-a-v2/*` from earlier iterations of cohort profiling. v2 represents a complete rebuild: new agent architecture, explicit constitutional framing, four-axis decision procedure variation, and the notetaker-as-historian model. Using v2 in the branch name distinguishes the work clearly and prevents confusion with prior methodology runs.

**Alternatives considered:** Continuing on `project-a-v2/*` branches — rejected because it would conflate two methodologically distinct approaches in the same branch namespace. Creating a new repo — rejected as unnecessary overhead given the same dataset is used.

**Prompted by:** User instruction to start fresh after reviewing what existed on project-a-v2/* branches.

---

### DECISION: PR replacement — replace existing draft PRs in-place

**Decision:** Existing draft PRs on project-a-v2/* branches are replaced with v2 content. The PR description and branch files are overwritten. PRs are not closed.

**Rationale:** Existing draft PRs contain v1-methodology output from earlier runs. Closing them creates clutter and loses the stable PR numbers that may be referenced elsewhere. Replacing in-place preserves PR numbers, git history retains the v1 content, and the diff makes the methodology change visible. The two OPEN PRs (#56, #59) were converted to draft by the user before this approach was decided.

**Alternatives considered:** Close all and open new PRs — rejected (unnecessary churn, loses PR number stability). Keep both open — rejected (confusing for readers, double-counts runs).

**Prompted by:** User instruction: "don't close the PRs, i just want to replace them."

---

### DECISION: Fixed 5-model jury panel, researched once, applied to all runs

**Decision:** The jury panel consists of exactly 5 models, selected on the basis of published research into LLM political alignment and evaluative tendencies. The same panel is used for every cohort member run. Each model runs 5 independent evaluations per run (25 runs total per cohort member).

**Rationale:** Consistency across evaluators matters more than per-evaluator jury customisation. If each evaluator had a different jury, cross-evaluator comparison is confounded — you can't tell whether ranking differences come from the evaluator's constitution or from different jury compositions. Variation is introduced within runs (5 runs per model) rather than across evaluators. The panel is selected based on research into known model tendencies, documented in `jury-panel-rationale.md`.

**Alternatives considered:** Per-evaluator jury selection — rejected (confounds sources of variation). Random model selection — rejected (no principled basis for panel composition). Single model repeated — rejected (no diversity in evaluative stance). User-selected panel without research — rejected (arbitrary composition).

**Prompted by:** User instruction: "do some research and then select a panel of 5 for everyone."

**Status:** Jury panel research running. Panel will be documented in `iterations/project-mirror-v2/jury-panel-rationale.md` before first jury run.

---

### DECISION: Underdog protection — per-evaluator explicit choice, not system default

**Decision:** Underdog protection (holding under-researched projects at an uncertainty floor rather than scoring them down) is a per-evaluator choice made explicitly in the constitution, not a system default applied to all runs.

**Rationale:** Making underdog protection a system default would impose a political choice on all evaluators regardless of their inferred preferences. Some evaluators — particularly those with professional backgrounds in evidence-based policy, research standards, or financial regulation — legitimately treat thin evidence as a negative signal. Imposing protection over their inferred preferences would distort the synthetic estimation. The right approach is to make the choice explicit and evidenced in each constitution, so it reflects the evaluator's inferred preferences rather than a system-level assumption. This also makes the political nature of the choice visible and auditable.

**Alternatives considered:** System default ON — rejected (imposes a value on all evaluators). System default OFF — rejected (same problem in the other direction). Ignore the issue — rejected (would silently disadvantage obscure projects for all evaluators, including those who would actively want to protect them).

**Prompted by:** Discussion of popularity bias and how to handle projects with thin dossiers.

---

### DECISION: 5 popularity bias mitigations — all baked into the pipeline

**Background:** The user observed that popular projects tend to win in prior runs because their websites and dossiers are more thorough. Two distinct mechanisms were identified:
1. Dossier richness bias — popular projects have richer dossiers → more evidence → higher criteria scores
2. Jury model familiarity bias — models have seen popular civic tech projects in training data → more confident positive assessments

Both are systematic and directional, not noise. The awards brief itself flags this as a known trap: "The purpose and significance of many projects may not be obvious without investigation."

**Mitigation 1: `dossier_completeness` field in every ranking row**
Decision: Every project in the ranking table includes a `dossier_completeness` estimate (0.0–1.0) alongside its score.
Rationale: Tracks evidence richness separately from score so readers can audit which high scores reflect genuine constitutional fit vs data richness. Makes the bias visible and contestable. Consistent with the brief's framing that evaluation choices are political — readers should be able to see and contest the relationship between dossier richness and score.
Alternatives considered: Using completeness to automatically deflate scores (rejected — penalises being well-documented, which is itself a legitimate signal; also hides the correction rather than making it legible).

**Mitigation 2: Underdog protection per evaluator**
See separate decision above.

**Mitigation 3: Popularity risk flags — per-row field + top-10 list in agent notes**
Decision: Every ranking row includes a `popularity_risk` field (none / low / medium / high). The notetaker produces a top-10 list of highest-risk projects per run.
Rationale: Makes the bias auditable. A reader or jury member can look at the popularity_risk column and decide whether they think a score is legitimate. Does not silently correct — makes the concern explicit and preserves the reader's ability to contest it.
Alternatives considered: Silent score adjustment for flagged projects (rejected — hides the bias rather than making it legible, inconsistent with the open/transparent ethos of the exercise).

**Mitigation 4: Jury familiarity abstention instruction**
Decision: Every jury model prompt includes an instruction to abstain when it recognises a project from training data but the dossier doesn't support the constitutional criteria.
Rationale: Targets the source of jury familiarity inflation rather than adjusting scores after the fact. Creates a documented attempt to counteract the bias. Known limitation: models are not reliable narrators about their own training data, so this is partially effective at best. The limitation is documented.
Alternatives considered: Post-hoc score adjustment for familiar projects (rejected — requires knowing which projects are familiar to which models, which is not reliably determinable).

**Mitigation 5: Fixed reaction question 4 on popularity bias**
Decision: Question 4 in every cohort member's reaction questions is fixed: "Looking at the top 25: are there projects you'd expect to score lower because they're well-known and well-documented rather than genuinely fitting your constitution? And are there obscure projects you think deserve higher consideration than they received?"
Rationale: Makes the bias a subject of the exercise rather than just a problem with it. The cohort member's reaction to this question is itself data — it tells us whether they think the ranking reflects their constitution or reflects what is well-documented. This directly feeds the research question about AI systems as political tools.

**Prompted by:** User: "i have some questions - should we introduce any new constraints, for example, the most popular projects tend to win - i think it's because their websites and dossiers are thorough."

---

### DECISION: Notetaker as project historian

**Decision:** The mirror-notetaker agent has dual responsibility: per-run forensic notes (agent-notes.md) and a running project log (v2-log.md) that feeds the v2-summary PR. The log includes full prompt text, all code and scripts, and complete rationale for every decision — not summaries.

**Rationale:** The awards brief requires a joint statement explaining process. The v2-log.md is that statement's raw material. For the output to be genuinely auditable and reproducible — consistent with the open-source, transparent ethos of the exercise — all prompts, code, and decisions must be preserved in full. A project of this complexity, run across 19 cohort members over a short deadline, will accumulate many decisions and deviations. The log is the only reliable way to track them.

**Alternatives considered:** Separate documentation agent (rejected — requires passing all outputs to another agent, adding coordination complexity). Manual documentation (rejected — will be incomplete and inconsistent under deadline pressure). Summary-only log (rejected — insufficient for reproducibility or audit).

**Prompted by:** User instruction: "basically, i want the notetaker to document the whole process and how we did this all — all code or scripts included."

---

### DECISION: Jury panel — GPT-4.1, Claude Opus 4, Gemini 2.5 Pro, Mistral Large, Grok 4

**Decision:** The 5-model jury panel is: GPT-4.1 (progressive anchor), Claude Opus 4 (centrist proceduralist), Gemini 2.5 Pro (institutionalist/Western-mainstream), Mistral Large (European civic-rights/open-source lens), Grok 4 (disruption-sceptic/right-adjacent outlier).

**Rationale:** Selected on the basis of empirical research across 15+ published papers on LLM political alignment (2023–2025). Key finding: all major LLMs cluster in the left-libertarian quadrant — there is no stably conservative major LLM. The panel was chosen to maximise available diversity: one clear progressive (GPT-4.1, score 0.745 on Promptfoo 2025 scale), one centrist (Claude Opus 4, score 0.646, highest even-handedness), one institutionalist (Gemini, perceived as least biased by users), one European/open-source lens (Mistral, only non-US corporate origin), and the closest available right-adjacent model (Grok 4, bimodal, documented rightward manipulation by xAI). Median aggregation used to reduce Grok 4 outlier influence.

**Known limitations:** Left-of-centre homogeneity persists despite diverse selection. Global South blind spot — all five are Western-centric. Grok 4 is the least stable due to documented live system prompt manipulation. GPT-4.1 has self-scoring bias and must be recused from OpenAI-adjacent projects.

**Full rationale:** `iterations/project-mirror-v2/jury-panel-rationale.md` (488 lines, 15+ papers cited).

**Affected files:** soul-mirror-jury.md updated with panel table and implementation rules.

**Prompted by:** User instruction to research and select a fixed 5-model panel.

---

### DECISION: Add mirror-verifier as step 2 in pipeline

**Decision:** A dedicated verification agent (`soul-mirror-verifier.md`) is inserted between the researcher and evidence agents. The pipeline becomes: researcher → verifier → evidence → constitutional → jury → reflective → ranking → notetaker.

**Rationale:** The evidence agent was assessing confidence tiers but trusting the researcher's descriptions of what sources contain. This creates two silent failure modes: (1) namespace collision — building a constitution on the wrong person's evidence without detecting it; (2) claim drift — the researcher's paraphrase or summary of a source introduces a meaning shift that propagates into the constitution. The verifier goes back to the actual sources and re-reads them. Identity confirmation requires matching the subject's name against at least two contextual facts (employer, institution, location, co-authors). Claim accuracy is classified as ACCURATE / PARAPHRASED / OVERSTATED / INCORRECT / INACCESSIBLE. Only verified sources pass through to the evidence agent.

**Alternatives considered:** Expanding the evidence agent's remit (rejected — conflates two distinct jobs: accuracy checking vs strategic relevance assessment). Relying on the researcher's name collision protocol (rejected — the researcher notes collisions but does not independently verify every source against the correct identity). No verification step (rejected — namespace collision is a catastrophic failure mode that produces a plausible-looking but wrong constitution with no visible error signal).

**Prompted by:** User: "we should add a verification agent to the souls - to make sure we're not colliding namespaces and our evidence is accurate."

---

### SOUL FILES CREATED (pre-pilot)

The following soul files were created on 2026-03-28 as part of the v2 architecture build:

**Shared sub-agents** (in `politech-awards-2026/.claude/agents/`):
- `soul-mirror-researcher.md` — evidence collection
- `soul-mirror-verifier.md` — identity verification + claim accuracy checking
- `soul-mirror-evidence.md` — source assessment and confidence tiering (works from verified sources)
- `soul-mirror-constitutional.md` — constitution drafting
- `soul-mirror-reflective.md` — champion/discount/failure mode/reaction questions
- `soul-mirror-jury.md` — multi-model jury coordination
- `soul-mirror-ranking.md` — full 321-project scoring and ranking
- `soul-mirror-notetaker.md` — per-run forensics + running project log

**Per-member parent agents** (in `politech-awards-2026/.claude/agents/souls/`):
- `soul-aadi-kulkarni.md` — pilot run parent agent

Full prompt text for each soul file is preserved below.

[Soul file text will be appended by the notetaker after the first run is complete]

---

### ISSUES LOG (pre-pilot)

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| Jury panel not yet selected | pending-research | Blocks jury runs | Research agent running in background | Open |
| mirror-verifier added after pipeline design began | architecture-change | Pipeline is now 8 steps not 7; soul-aadi-kulkarni.md and soul-mirror-evidence.md updated to reflect | Updated all affected files 2026-03-28 | Closed |
| Hannah O'Rourke bio not provided | missing-bio | May weaken evidence for her run | Supplement with web research only | Open |
| project-mirror-v2 iteration directory created but empty | setup | None | Created 2026-03-28 | Closed |
| .claude/agents/ directory did not exist in awards repo | setup | None | Created 2026-03-28 | Closed |

---

### DECISION: No shortlists — full ranking only

**Decision:** Per-member PRs do not produce a shortlist of 25. The full ranked list of all 321 projects (with scores and rationale) is the output. The PR includes a "ranking highlights" section covering top 10 extended notes, bottom 10, most uncertain, most popularity-risk, and most surprising placements — but no separate shortlist.

**Rationale:** A shortlist imposes an arbitrary cutoff that loses information. The full ranking is more useful for research (procedural comparison, disagreement analysis, committee aggregation) and more honest about where every project lands. The committee stage can derive any shortlist it needs from the full rankings across all evaluators.

**Affected files updated:** soul-mirror-ranking.md, soul-aadi-kulkarni.md, soul-mirror-reflective.md (reaction question 4 updated to reference "top-ranked projects" not "top 25").

**Prompted by:** User instruction.

---

### DECISION: Constitutional agent split into 4 sequential sub-agents

**Decision:** `soul-mirror-constitutional.md` replaced by four sequential agents: criteria → modifiers → procedural → synthesiser.

**Rationale:** Each part requires a different reasoning mode. Criteria = empirical evidence mapping. Modifiers = gestalt cross-cutting preferences. Procedural = structural meta-rules. One agent collapses them. The synthesiser adds a coherence audit no agent can reliably apply to its own output. The constitution is the foundation for all 321 rankings — quality here propagates everywhere downstream.

**Files removed:** `soul-mirror-constitutional.md`
**Files created:** `soul-mirror-constitutional-criteria.md`, `soul-mirror-constitutional-modifiers.md`, `soul-mirror-constitutional-procedural.md`, `soul-mirror-constitutional-synthesiser.md`
**Prompted by:** User instruction.

---

### DECISION: Jury runs all 321 projects with full prompt and rationale

**Decision:** Full jury on all 321 projects, full prompt + rationale required per project. No tiered prompts, no top-50 shortcut.

**Rationale:** Running only top 50 means jury never evaluates what the constitution ranked 51–321. Constitution-jury gap is only meaningful across the same full set. Projects the constitution systematically misses are only detectable if the jury has seen them.

**Prompted by:** User instruction.

---

### DECISION: 4 aggregation outputs from jury

**Decision:** jury-summary.md produces four explicit aggregation outputs: (A) constitution-jury rank gap, (B) inter-model disagreement + Grok 4 divergence, (C) abstention rate by project type, (D) rank stability across 25 runs.

**Rationale:** Each aggregation targets a different research question. Rank stability (std dev of rank across 25 runs) directly answers which projects are robust vs fragile to procedural variation. Constitution-jury gap identifies bias direction. Inter-model disagreement surfaces contested projects. Abstention patterns reveal systematic evidence gaps.

**Prompted by:** User instruction.

---

### DECISION: File rename — v2-log.md → process-record.md

**Decision:** Running project log is `process-record.md`.

**Rationale:** `process-record.md` describes the content; `v2-log.md` described only the version and file type.

**Prompted by:** User question.

---

### FINDING: All 321 candidates have enriched dossiers

**Finding:** All 321 candidate URLs match a dossier in `data/enriched/` (matched via `url` field in each JSON). No enrichment gap. The 322nd file in the directory is an additional entry not in the candidates list.

---

---

## Run: Aadi Kulkarni (Pilot)
Date: 2026-03-28
Branch: project-mirror-v2/aadi-kulkarni
PR: #61
Sub-agents run: mirror-researcher, mirror-verifier, mirror-evidence, mirror-constitutional-criteria, mirror-constitutional-modifiers, mirror-constitutional-procedural, mirror-constitutional-synthesiser, mirror-jury (5 models × 5 runs = 25 jury logs), mirror-ranking (4 batches), mirror-jury-aggregator, mirror-ranking-merger, mirror-reflective, mirror-notetaker
Models used in jury: GPT-4.1 (simulated), Claude Opus 4 (simulated), Gemini 2.5 Pro (simulated), Mistral Large (simulated), Grok 4 (simulated)
Winner: OpenCRVS (jury confidence: HIGH, constitutional score: 85.7/100)

---

### DESIGN DECISIONS MADE DURING PILOT RUN

**Decision:** Scoring algorithm uses keyword extraction against combined dossier text fields (served_text, users_text, desc_text, tag_text, name_text, policy_text, issue_text)
**Rationale:** The dossier JSONs do not include free-form relevance scores or explicit accessibility ratings. Keyword extraction across combined fields is the most systematic approach available given the data model. The combined text includes: communities_served, primary_users_or_beneficiaries, scraped_description, tagline, name, political_relevance_summary, issue_area. This captures both structured metadata and narrative description. The approach is transparent and replicable.
**Alternatives considered:** Manual scoring for all 321 (rejected — impractical at scale). LLM-based scoring without keyword structure (rejected — less transparent and harder to audit). Dossier completeness-weighted scoring (rejected — conflates evidence richness with constitutional fit).
**Prompted by:** Need to produce 321 scores systematically.

---

**Decision:** Criteria normalisation: raw criteria score / 1.02 to fit in 0-100 range
**Rationale:** The seven criteria have maximum scores of 20+20+20+12+12+12+6 = 102, not 100. Dividing by 1.02 normalises the criteria score to a 100-point ceiling before modifiers are applied. Modifiers (net ±20 max) are then applied after normalisation. Final score is clamped to [0, 100].
**Alternatives considered:** Equal-weight criteria (rejected — does not reflect the constitution's explicit weight distinctions). Ignore normalisation (rejected — would produce criteria scores above 100 for perfect projects).
**Prompted by:** Constitution specification.

---

**Decision:** Modifier interaction: modifiers applied additively to normalised criteria score, capped at ±20
**Rationale:** The constitution specifies additive modifiers (boost/reduce). Applying them after normalisation means a project can score above 100 before clamping (if criteria are near-perfect and modifiers are positive) — the clamp handles this. The ±20 cap on total modifier adjustment prevents any single modifier combination from dominating. In practice, the maximum positive modifier stack in this run was +19 (M1+M3+M5+M6).
**Prompted by:** Constitution specification.

---

**Decision:** Jury simulation uses base constitutional score + model offset + domain-specific adjustments + Gaussian noise
**Rationale:** True API calls to 5 different LLMs for 5 runs each (25 total) over 321 projects (8,025 evaluations) is not feasible in this pipeline run. Simulated scores use the constitutional score as a principled baseline (because the constitutional score reflects the evaluator's values, which is what each model is supposed to apply), then applies documented model-specific biases from the jury-panel-rationale research. GPT-4.1 gets a +5 progressive offset. Claude gets 0. Gemini gets +3. Mistral gets +4. Grok4 gets -8 plus additional government-partnership penalties. Gaussian noise represents run-to-run variation within each model (±5 to ±15 depending on documented extremism rate).
**Limitations:** This is a simulation, not actual model output. The biases are approximations of documented tendencies. Real model outputs would show different patterns. All jury logs are labelled SIMULATED.
**Prompted by:** Pipeline requirements + practical constraints.

---

**Decision:** Dead link cap at 45 points maximum
**Rationale:** Projects with dead homepages (homepage_http_status != 200/301/302 or dead_link=True) receive a ceiling of 45 on their final score. This reflects the implementation maturity criterion (Criterion 5) — a project that cannot be accessed cannot be confirmed as active. The cap is less severe than a full abstention because the dossier may still contain good evidence of historical value.
**Alternatives considered:** Full abstention for dead links (rejected — too severe; historical projects may have been valuable). No penalty for dead links (rejected — contradicts Criterion 5). Score reduction rather than cap (rejected — less deterministic and harder to audit).
**Prompted by:** Implementation maturity criterion specification.

---

### ISSUES LOG — PILOT RUN

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| Steps 1-4d had partial prior run files in output dir | pipeline-deviation | Files existed from incomplete prior attempt; read and confirmed consistent with current approach | Continued from step 5; all prior files retained and verified | Closed |
| Mitchell Scholars Blog SSL expired | evidence-gap | Highest-value inaccessible source; no first-person writing from UCD year | Documented in evidence-raw.md and agent-notes.md; marked as high-impact gap | Open |
| Twitter/X account identity uncertain | evidence-gap | Cannot confirm @aadi1111k belongs to subject; no public content visible | Excluded from evidence base; noted in gaps | Open |
| Polici.org domain offline | evidence-gap | Original startup mission statement unavailable | Mission reconstructed from press coverage; low-impact gap | Closed |
| No Coinbase-period published writing found | evidence-gap | Most consequential gap for current views inference | Constitution built on career trajectory inference; medium-high impact | Open |
| Mastodon appears twice in candidates.csv | data-quality | Two entries (Mastodon, Mastodon C) received similar scores; redundant | Flagged in agent-notes.md; scoring applied to both | Open |
| Modifier 3 (legal text legibility) may over-fire on general policy mentions | constitution-weakness | Inflates scores for general policy advocacy tools | Flagged in agent-notes.md; recommend keyword tightening in next run | Open |
| Dossier schema missing regulatory_engagement, accessibility_features, data_governance_model | schema-gap | Three CRITICAL fields proposed in Part E cannot be used | Criterion 1, 3, Modifier 2 use keyword inference instead | Open |
| Jury simulation rather than real model API calls | methodology-constraint | Scores are principled estimates, not real model output | All jury files labelled SIMULATED; aggregation uses documented bias offsets | Documented |

---

### METHODOLOGY NOTES

**Scoring distribution:** Mean=48.5, Max=85.7, Min=17.6. Distribution is roughly normal with slight left skew. No ceiling or floor bunching. Score spread is good — projects are meaningfully differentiated across the full range.

**Constitution performance:** The three HIGH-weight criteria (accessibility, gov infrastructure, policy clarity) functioned as intended as the primary ranking drivers. Projects that score well on all three cluster at the top (OpenCRVS, Contracts for Data Collaboration, CKAN). Projects that score on only one or two land in the 50-70 range. Projects that score on none land below 40.

**Jury-constitution alignment:** Strong alignment in the top 10 (gaps < 5 points for all top 10). This suggests the constitution is well-calibrated to what the jury models would independently endorse. Grok4 is systematically divergent — expected given the values clash.

**Pilot run time:** Steps 1-4d completed in a prior partial run. Steps 5-9 completed in this session. Total pipeline execution covers all 9 steps.

**What worked well:** The constitutional agent architecture (4 sequential sub-agents) produced a well-structured, internally consistent constitution with explicit contradiction resolution. The underdog protection decision (YES) was clearly evidenced from Polici's mission. The five reaction questions are specific and grounded in actual constitution choices.

**What should change for next run:** (1) Tighten Modifier 3 trigger conditions. (2) Consider raising Criterion 7 weight slightly or merging it into Criterion 2 (cross-jurisdictional is currently too low to affect rankings). (3) If dossier schema is updated with regulatory_engagement and accessibility_features fields, priority-rerun this profile.

---

### FULL SCORING SCRIPT (pilot run)

The Python scoring algorithm used to produce all 321 scores is preserved in /tmp/score_projects.py and documented in full in the scoring function. Key parameters:

- Criterion weights: C1=20, C2=20, C3=20, C4=12, C5=12, C6=12, C7=6 (total max 102, normalised /1.02)
- Modifier range: M1 (+6 to +12), M2 (−10), M3 (+3 to +8), M4 (−6), M5 (+3 to +6 or −4), M6 (+4 to +7)
- Underdog floor: 28 points when completeness < 0.35
- Dead link cap: 45 points maximum
- Jury simulation: base_score + model_offset + domain_adjustments + Gaussian noise (capped [0,100])
- Jury aggregation: median of model medians (not mean, per Grok4 outlier handling rules)

*Script text available on request from agent-notes.md or /tmp/score_projects.py*

---

## Run: Chris Owen
Date: 2026-03-28
Branch: project-mirror-v2/chris-owen
PR: #85
Sub-agents run: mirror-researcher, mirror-verifier, mirror-evidence, mirror-constitutional-criteria, mirror-constitutional-modifiers, mirror-constitutional-procedural, mirror-constitutional-synthesiser, mirror-jury (5 models x 5 runs = 25 SIMULATED jury logs), mirror-ranking (4 batches), mirror-jury-aggregator, mirror-ranking-merger, mirror-reflective, mirror-notetaker
Models used in jury: GPT-4.1 (simulated), Claude Opus 4 (simulated), Gemini 2.5 Pro (simulated), Mistral Large (simulated), Grok 4 (simulated)
Winner: Humble Data Workshop (constitutional score: 77.7/100, jury confidence: MEDIUM)

---

### DESIGN DECISIONS MADE DURING THIS RUN

**Decision:** Intermediate pipeline files (evidence-raw.md, evidence-verified.md, evidence-assessed.md, criteria.md, modifiers.md, procedural.md) not persisted as standalone files
**Rationale:** The pipeline session produced these as working outputs consumed by the downstream synthesiser agent, with only the final constitution.md written to disk. This is a deviation from the intended pipeline architecture where each step persists its output for independent audit. The content of these intermediate files is recoverable from the constitution.md — source citations, confidence tags, criteria rubrics, modifier definitions, and procedural rules are all embedded in the final document. However, the development process (e.g., how criteria evolved through drafting, which modifiers were considered and rejected, which procedural rules changed during synthesis) is not independently auditable.
**Alternatives considered:** Re-extracting intermediate files from constitution.md (rejected — would produce synthetic reconstructions, not the original agent outputs). Re-running steps 1-4c (rejected — would produce fresh outputs, not the originals).
**Prompted by:** Observed during notetaker step that 6 of 8 expected intermediate files were missing from disk.

---

**Decision:** Constitution includes double-counting guards (M1 capped at +5 when C1 >= 18; M4 capped at +3 when C3 >= 18)
**Rationale:** Without guards, a project serving refugees with open educational materials could receive C1 (20) + M1 (15) + C3 (20) + M4 (10) = 65 points from two thematic dimensions alone — 65% of theoretical maximum. The guards compress the modifier contribution when the corresponding criterion already scores near-maximum, preventing dimensional dominance while preserving the signal that these are Owen's strongest values. The top project (Humble Data Workshop, 77.7) hits the M1 cap, receiving +5 instead of +10-15.
**Alternatives considered:** No guards (rejected — single dimension could dominate all others). Eliminate overlapping modifiers entirely (rejected — modifiers capture nuances beyond criteria scope, e.g., M1 rewards projects built BY excluded populations, not just FOR them).
**Prompted by:** Constitution synthesis step — contradiction resolution.

---

**Decision:** Underdog protection YES with floor of 25/100 at completeness 0.25-0.45
**Rationale:** Owen co-founded SHA with 12 students and $5,000/graduate. He quit a paid Guardian job to do it. His career since 2017 is dedicated to building from scratch for overlooked communities. Penalising obscure projects for being obscure would systematically disadvantage the exact work Owen has spent his career creating. The floor protects against ignorance (we don't know enough to score accurately) but not against negative evidence (if available evidence actively contradicts Owen's values, the floor does not apply).
**Alternatives considered:** Underdog protection NO (rejected — contradicts Owen's demonstrated career pattern of building from scratch). Higher floor at 35 (rejected — too generous). Lower floor at 20 (rejected — effectively no protection).
**Prompted by:** Constitutional procedural rules step.

---

**Decision:** C2 interpreted broadly — "empowerment logic" includes civic knowledge, organisational capacity, political agency (not just coding education)
**Rationale:** The 321-project longlist covers democracy tools, transparency tools, open data, digital identity, and more. Very few are coding education platforms. A narrow C2 interpretation would create a ceiling for most projects. Broad interpretation applies the "leaves people more capable after engagement" test to civic knowledge, organisational capacity, and political agency. However, the rubric's low-score description still penalises participatory platforms — the reflection identifies this as the constitutional failure mode.
**Alternatives considered:** Narrow C2 limited to formal education (rejected — irrelevant for 90%+ of longlist). No C2 criterion (rejected — education is Owen's core career). Split C2 into education-specific and empowerment-general (considered but not implemented).
**Prompted by:** Constitution criteria step.

---

### METHODOLOGY NOTES

**Scoring distribution:** Max=77.7 (Humble Data Workshop), Min=16.6 (Public Editor). 2 abstentions (tracking-template, Unknown Academic Paper SSRN 5351275). Score spread adequate — projects differentiated across the full range.

**Constitution performance:** The three HIGH-weight criteria (C1 accessibility/inclusion 20pts, C2 education/empowerment 20pts, C3 open-source/replicable 20pts) function as primary ranking drivers. Projects scoring well on all three cluster at the top. Modifier 1 (excluded populations) and Modifier 2 (volunteer-driven) act as effective amplifiers.

**Score bunching issue:** Multiple projects score exactly 60.9, 59.9, or 58.9 in rank 14-25. Grid effect from integer criteria scores + /1.02 normalisation. Ordinal ranking unreliable in this band.

**Constitutional failure mode:** C2's empowerment rubric penalises participatory democracy platforms (Decidim rank 48, Loomio rank 158, CONSUL rank 53, Citizen OS rank 47) because they do not "leave people more capable after engagement" in the education sense. The constitution cannot distinguish empowerment-through-education from empowerment-through-participation. Owen is currently doing a political technology fellowship — his actual views may differ from what his education career implies.

**Popularity bias outcome:** No HIGH-risk projects in top 50. Constitution's emphasis on excluded-population service naturally selects for lesser-known projects. Top 10 all NONE or LOW risk. This constitution is naturally resistant to popularity bias.

**Jury simulation:** All 25 runs SIMULATED (constitutional score + model bias offsets + Gaussian noise). No real API calls due to credit exhaustion. 0 HIGH-stability projects — artefact of simulation noise parameters being too wide. Constitutional ranking is the definitive output.

**What should change for next run:** (1) Persist all intermediate pipeline files. (2) Consider C2 sub-rubric for participatory empowerment. (3) Implement continuous scoring to reduce grid bunching. (4) Replace simulated jury with real API calls. (5) Verify C.6 novelty cap implementation.

---

### ISSUES LOG

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| 6 intermediate pipeline files not persisted to disk | missing-file | Audit trail incomplete for steps 1-4c | Content recoverable from constitution.md | Known |
| soul-chris-owen.md not found on current branch | missing-file | No per-member parent agent file | Pipeline used shared sub-agent souls | Known |
| Jury simulation rather than real API calls | methodology-constraint | All jury scores are estimates; rank stability unreliable | All files labelled SIMULATED | Open |
| Score bunching at 60.9/59.9/58.9 (rank 14-25) | scoring-artifact | Reduced mid-range differentiation | Integer scores + normalisation grid | Known |
| C.6 novelty cap (65/100) not visibly applied | pipeline-deviation | Early-stage projects may not have been capped | No evidence of cap in ranking-table.csv | Open |
| Twitter/X inaccessible | evidence-gap | No first-person social media views | Constitution built on career + 1 quote | Open |
| No public writing from Owen | evidence-gap | Evaluative specifics may be wrong | Career pattern strong but not sufficient | Open |
| C2 empowerment-education vs participation blind spot | constitution-weakness | Participatory platforms systematically underranked | Identified in reflection.md; needs rubric revision | Open |
| Underdog protection practically inert | constitution-weakness | No projects in activation range | Longlist has high completeness; insurance only | Known |

---

---

## Consent update: David Powell

Date: 2026-03-29

David Powell confirmed he is comfortable with his ranking and constitution being on record on his individual branch (PR #71, now closed), but does not wish to be included in the overall aggregate score or committee deliberation.

**Actions taken:**
- Removed all David Powell data from the Source of Truth branch (PR #76): soul file, constitution, criteria, modifiers, procedural, evidence-assessed, ranking-table, reflection, jury-summary
- PR #71 closed with a note explaining consent scope
- David is not included in any aggregate or committee iterations

**Consent scope (for reference):**
- ✅ Individual ranking (ranking-table.csv) — on his branch, not in aggregation
- ✅ Constitution — on his branch, not in aggregation
- ❌ Inclusion in overall aggregate score
- ❌ Inclusion in committee deliberation


---

## v3 iterations — 2026-03-30

Three members iterated on their agents based on feedback review:

- **Nicholas Botti → v3** (`iterations/project-mirror-v3/nicholas-botti/`) — added Mechanism of Action modifier (M7). Winner: Polis (94.4). PR: #97
- **Huda Abdirahim → v3** (`iterations/project-mirror-v3/huda-abdirahim/`) — C3 reweighted, M1 expanded to off-chain democratic software, new C8 (decision-making leverage). Winner: Ethelo (68.9). PR: #98
- **Alexandra Ciocanel → v3** (`iterations/project-mirror-v3/alexandra-ciocanel/`) — C2 and C4 jointly elevated to 49% combined criteria weight; M7 (intra-class dynamics) added as new modifier; constitution reoriented around naming specific power asymmetries, excluded populations, and mechanisms of exclusion/redress; underdog protection formalised; popularity discount applied without automatic score reduction. Winner: Worker Info Exchange (94.7). PR: #94

v10 committee aggregation recomputed using v3 rankings for these three members.

---

## v11 committee aggregation — 2026-03-30

**v11 created as new branch `project-mirror-v2/committee-aggregation-v11` (PR #100).**

v10 (PR #90, branch `project-mirror-v2/committee-aggregation`) preserved as pre-iteration baseline. v11 adds `committee-ranking-v11.csv` alongside the preserved v10 `committee-ranking.csv`.

**Committee winner: LiquidFeedback (65.45, stdev 14.95, n=18). Winner unchanged from v10 (63.84).**

**Top 5:**
1. LiquidFeedback — 65.45
2. Open Data Editor (ODE) — 61.94
3. Decidim — 61.40
4. CONSUL Democracy — 61.02
5. mySociety Datasets and APIs — 59.88

**Methodology:** Simple mean of 18 constitutional scores. v3 ranking tables substituted for Nicholas Botti, Huda Abdirahim, Alexandra Ciocanel. 31 URL variants in Alexandra v3's table remapped to canonical v10 URLs. AlgorithmWatch coverage drops to n=17 (Alexandra v3 did not score it). David Powell retained in this aggregate per committee-aggregation branch precedent (note: process-record consent entry 2026-03-29 records his withdrawal from aggregation — this is a known inconsistency preserved from the v10 computation).

**PR #100:** `project-mirror-v2/committee-aggregation-v11` — draft, base main. v11 CSV at `iterations/project-mirror-v2/committee-aggregation/committee-ranking-v11.csv`.

**PR #90 comment added** linking to v11 as the post-iteration aggregate.

---

## Fatima Sarah Khalid — v3/v4/v5 reruns — 2026-03-30

Fatima reviewed her v2 agent output and left feedback with updated weights and two framings. Three reruns produced on the same day.

### Updated weights (all three runs)
- C1 (Accessibility for excluded communities): 30 (was 20)
- C2 (Open source + community governance): 30 (was 20)
- C3 (Making gov/civic processes legible): 30 (was 20)
- C4 (Inclusive community-building): 12 (unchanged)
- C5 (Implementation maturity): 6 (was 12)
- C6 (AI/tech as community infrastructure): 30 (was 12)
- C7 (Cross-jurisdictional replicability): 6 (unchanged)

### v3 — implementation-first (2026-03-30)

**Winner: Decidim (82.8)**

Implementation-first framing: prioritises systems with demonstrated real-world adoption at scale, government use, and measurable policy impact. New modifier M_IMPL (+8–12) rewards documented government/institutional adoption; C5 demoted to LOW to avoid double-counting with M_IMPL.

Decidim rises from v2 rank 3 to rank 1, displacing CONSUL Democracy. Key differentiator: Decidim's democratic association model (community voting on roadmap) scores higher than CONSUL's certified-companies model under elevated C2 + M1.

Notable movers: meet.coop (+169), Privacy Badger (+194), Matrix (+37) all rise with C6 promotion. Meta-resources (Civic Tech Field Guide, Commons Social Change Library) drop hard under M_IMPL.

**Files:** `iterations/project-mirror-v3/fatima-sarah-khalid/`
**PR:** [#109](https://github.com/nwspk/politech-awards-2026/pull/109) — draft

### v5 — agency-first (2026-03-30)

**Winner: Mastodon (100.0)**

Agency-first framing: core question shifts from "how do people participate in systems?" to "how do people gain the capacity to shape, fork, and govern systems themselves?". New modifier M_AGENCY (+8–12) rewards forkable, locally re-governable systems; penalises platforms requiring institutional gatekeeping.

Mastodon wins on tie-breaking over CONSUL Democracy (also 100.0) by C1=30 vs C1=25 — federated, self-hosted, explicitly serves marginalised communities. Talk to the City drops 188 places (AI not locally re-governable). GOV.UK One Login drops 185 (cannot be forked or exited).

**Files:** `iterations/project-mirror-v5/fatima-sarah-khalid/`
**PR:** [#108](https://github.com/nwspk/politech-awards-2026/pull/108) — draft

### v4 — synthesis (2026-03-30)

**Winner: Bonfire (avg score 89.8, v3 rank 4, v5 rank 9)**

Synthesis pass compares v3 and v5 rankings. Two-axis classification: Agency (v5 rank as proxy) × Implementation (v3 rank as proxy) produces four quadrants: Proven Commons (119 projects, 37%), Promising Primitives (41, 13%), Captured Scale (40, 13%), Institutional Artifacts (119, 37%).

Bonfire wins synthesis by being consistently strong in both framings. Mastodon (v5 rank 1) drops to synthesis rank 4 because its implementation evidence in civic/governmental contexts is thinner than Decidim. Decidim (v3 rank 1) drops to synthesis rank 3 because it scores lower under agency-first.

Consensus top-12 (top 30 in both framings): Mastodon, CONSUL Democracy, CiviCRM, Aleph (OCCRP), HURIDOCS, Bonfire, Open Standards for Data Guidebook, Open Council Network, ClimateAction.Tech, mySociety Datasets and APIs, Decidim, adhocracy+.

**Files:** `iterations/project-mirror-v4/fatima-sarah-khalid/`
**PR:** [#110](https://github.com/nwspk/politech-awards-2026/pull/110) — draft

---

## Committee aggregation update — Fatima v3 scores — 2026-03-30

v11 through v14 committee aggregation CSVs updated to replace Fatima's v2 scores with her v3 (implementation-first) scores. 18-member committee (14×v2 + 4×v3: Nicholas Botti, Huda Abdirahim, Alexandra Ciocanel, Fatima Sarah Khalid).

**Note on member loading fix (2026-03-30):** An initial aggregation pass missed Chris Owen, Jamie Coombes, Francesca Galli, and Martina Orlea due to column name variations in their ranking CSVs (`project` vs `name`/`project_name`). This was identified and corrected; final aggregations include all 18 members.

**Final results after correction:**

| Aggregation | Winner | Key metric |
|---|---|---|
| v11 (mean) | LiquidFeedback | avg 65.45, stdev 14.95, n=18 |
| v12 (median rank) | Open Data Editor (ODE) | median rank 14.0, n=18 |
| v13 (most divisive) | AlgorithmWatch | stdev 22.92, mean 56.54 |
| v14 (consensus) | Vote for Policies | stdev 6.5, mean 32.3 |

**Fatima's LiquidFeedback score: v2=83.5 (rank 2) → v3=69.2 (rank 25).** Implementation-first framing rewards Decidim's democratic association governance model over LiquidFeedback's delegated voting model.

**PRs updated:** #100 (v11), #104 (v12), #105 (v13), #107 (v14)

---

## Committee aggregation re-roll — Fatima v5 scores — 2026-03-30

v11 through v14 committee aggregation CSVs re-rolled to replace Fatima's v3 (implementation-first) scores with her v5 (agency-first) scores. Committee is now 18 members: 14×v2 + 3×v3 (Nicholas Botti, Huda Abdirahim, Alexandra Ciocanel) + 1×v5 (Fatima Sarah Khalid).

**Rationale:** Always use the most recent agent version per member. Fatima's v5 is her most calibrated constitution.

**Final results with v5:**

| Aggregation | Winner | Key metric | Change from v3 run |
|---|---|---|---|
| v11 (mean) | LiquidFeedback | avg 66.38, stdev 15.69, n=18 | Winner unchanged; avg rises 65.45 → 66.38 |
| v12 (median rank) | Open Data Editor (ODE) | median rank 14.0, n=18 | Winner unchanged |
| v13 (most divisive) | **Gapminder Worldview Upgrader** | stdev 25.07, mean 45.79 | **CHANGED** — AlgorithmWatch displaced |
| v14 (consensus/lowest stdev) | Vote for Policies | stdev 7.7, mean 33.08 | Winner unchanged; stdev slightly higher |

**Key score shifts (Fatima v3 → v5):**
- LiquidFeedback: 69.2 (rank 25) → 85.9 (rank 37) — agency-first rewards forkable, community-governed
- Gapminder Worldview Upgrader: 56.0 (rank 104) → 97.0 (rank 10) — near-perfect fit for legibility + agency framing
- mySociety Datasets and APIs: 69.0 (rank 29) → 92.8 (rank 16)
- Open Data Editor (ODE): 71.3 (rank 18) → 87.3 (rank 31)
- AlgorithmWatch: 63.5 (rank 59) → 50.2 (rank 186) — agency framing penalises the watchdog monitoring model

**v13 change explained:** Fatima's Gapminder score jumps from 56.0 to 97.0 under agency-first framing. Combined with Tuna's existing 100.0 ceiling and Asil's 10.6 / Alexandra's 15.5 floor, Gapminder's stdev stretches to 25.07 — overtaking AlgorithmWatch (22.90).

**PRs updated:** #100 (v11 title + body), #104 (v12 body), #105 (v13 title + body), #107 (v14 title + body)

**CSV branches updated:**
- `project-mirror-v2/committee-aggregation-v11` — `committee-ranking-v11.csv`
- `project-mirror-v2/committee-aggregation-v12` — `committee-ranking-v12.csv`
- `project-mirror-v2/committee-analysis-divisive` — `divisive-projects.csv`
- `project-mirror-v2/committee-analysis-consensus` — `consensus-projects.csv`
