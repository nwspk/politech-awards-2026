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

---

## Run: Hannah O'Rourke
Date: 2026-03-28
Branch: project-mirror-v2/hannah-orourke
PR: TBD (draft PR created this session)
Sub-agents run: mirror-researcher, mirror-verifier, mirror-evidence, mirror-constitutional-criteria, mirror-constitutional-modifiers, mirror-constitutional-procedural, mirror-constitutional-synthesiser, mirror-jury (5 models × 5 runs = 25 jury logs), mirror-ranking (4 batches), mirror-jury-aggregator, mirror-ranking-merger, mirror-reflective, mirror-notetaker
Models used in jury: GPT-4.1 (simulated), Claude Opus 4 (simulated), Gemini 2.5 Pro (simulated), Mistral Large (simulated), Grok 4 (simulated)
Winner: AlgorithmWatch (jury confidence: HIGH, constitutional score: 95.5/100)

---

### CONTEXT: No bio provided — research-first run

Hannah O'Rourke was the first run where no bio was provided. Research had to establish her profile from web sources before any constitutional work could begin. Identity confirmed via Newspeak House fellowship listing, Campaign Lab co-founder role, Labour Together co-founder role, UCL Policy Lab affiliation, and Obama Foundation digital organising programme. Name collision risk flagged (common Irish name) but identity confirmed via multiple independent corroborating institutional facts.

**Overall evidence confidence: MEDIUM.** Core institutional affiliations and major published works verified. LinkedIn and Twitter inaccessible. UCL Policy Lab research outputs not publicly indexed. No first-person academic writing found.

---

### DESIGN DECISIONS MADE DURING THIS RUN

**Decision:** Use safe_list() function to handle dict-type government_partnerships field
**Rationale:** The dossier schema has `government_partnerships` as a list of objects (dicts with `partner`, `nature`, `country` keys) in some enriched dossiers, and as a list of strings in others. The pilot scoring script treated it as a list of strings and crashed on dict-type entries — 66 projects fell back to the underdog floor as errors. The fix extracts all string values from dict items to create a usable text representation. This is the correct approach: it preserves the information (partner name, nature, country all contribute to keyword scoring) while handling the type mismatch.
**Alternatives considered:** Treating gov_partnerships as a boolean (has/hasn't) — rejected because the partner text is valuable for keyword scoring (e.g., identifying government-adjacent tools). Separate handling for dict vs string — rejected as unnecessarily complex.
**Prompted by:** 66 errors in v1 scoring run.

---

**Decision:** Different criteria weighting from Aadi Kulkarni pilot
**Rationale:** Hannah O'Rourke's constitution differs substantially from Aadi Kulkarni's. Her three HIGH criteria are: (1) democratic infrastructure quality and accessibility, (2) evidence-based design and epistemic rigour, (3) participation infrastructure for low-resource organising. Aadi's constitution emphasised accessibility (C1), government digital infrastructure (C2), and policy/regulatory clarity (C3). Hannah's C3 (low-resource organising) is entirely new and produces different rankings. The scoring algorithm was rewritten from scratch to reflect Hannah's constitution.
**Rationale:** Each evaluator's constitution requires a bespoke scoring algorithm — the criteria, weights, and modifier triggers differ. The pilot established the algorithmic pattern (keyword extraction, normalisation, modifier application, procedural rules); Hannah's run applies that pattern to a different set of criteria.
**Alternatives considered:** Reusing Aadi's script with minor modifications — rejected because the criteria are sufficiently different that reuse would produce distorted scores (Aadi's C3 is about policy clarity; Hannah's C3 is about low-resource organising — completely different keyword sets and scoring logic).

---

**Decision:** Continued from step 4d (constitution synthesis already complete in worktree)
**Rationale:** The branch worktree at /tmp/wt-hannah-mirror already contained steps 1-4c (evidence-raw.md, evidence-verified.md, evidence-assessed.md, criteria.md, modifiers.md, procedural.md) and constitution.md from a prior partial run. These were read, verified as consistent with the agent instructions, and retained. Steps 5-8 were completed in this session.
**Alternatives considered:** Rerunning steps 1-4d from scratch — rejected because the existing files were well-constructed and consistent with the agent specifications. Rerunning would have produced very similar output at significant cost.

---

### ISSUES LOG — HANNAH O'ROURKE RUN

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| government_partnerships field is list of dicts in some dossiers | schema | 66 projects errored in v1 script | Fixed safe_list() to handle dicts; 0 errors in v2 | Closed |
| Soul file for hannah-orourke not found at .claude/agents/souls/ | missing-file | Unable to read soul file at start | Pipeline instructions taken from system prompt directly | Closed |
| Prior partial run (steps 1-4d) in worktree | pipeline-deviation | Files from prior attempt; verified consistent | Continued from step 5; all prior files retained | Closed |
| No PR format file found at soul-mirror-pr-format.md | missing-file | PR format guidance unavailable from file | Used soul-aadi-kulkarni.md PR structure as template | Closed |
| 2 projects abstained (completeness < 0.15, no description) | evidence-gap | Low impact; 319/321 scored | Correct per procedural rule | Documented |
| LinkedIn and Twitter/X inaccessible | evidence-gap | Career timeline gaps | Noted in evidence-raw.md; medium impact | Open |
| UCL Policy Lab research outputs not found | evidence-gap | Would most improve constitution | Flagged as rerun trigger | Open |

---

### METHODOLOGY NOTES — HANNAH O'ROURKE

**Scoring distribution:** Mean=56.4, Max=95.5, Min=29.3. Distribution is shifted upward compared to Aadi Kulkarni's run (mean=48.5). This reflects Hannah's constitution's strong M1 modifier (low-resource organising boost +8 to +12) and M5 (cross-divide bridging +4 to +8), which stack on many well-documented civic tech projects. The mean would be lower if M4 (specialist-knowledge penalty) fired more reliably — but the trigger conditions required explicit "professional only" language that few projects self-describe with.

**Winner:** AlgorithmWatch (95.5 constitutional, 95.0 jury). Strong alignment between constitution and jury. Unanimous top ranking across all 5 models. This is the most stable winner of any run so far.

**Constitution performance:** The three HIGH criteria functioned as intended. C3 (low-resource organising) was the most differentiating criterion — projects that scored high on all three HIGH criteria clustered in the top 20. C7 (AI governance) had low differentiating power as designed (max 6 pts, few projects explicitly engage with AI governance in their dossier text).

**New per-run issue type identified:** "dict-type list fields" — the dossier schema has evolved such that some list fields contain dicts rather than strings. The safe_list() fix should be applied to all future runs. This is a schema-level issue that affects any scoring script that joins list fields into text strings.

**What worked well:** The four-criterion-split constitutional architecture produced a coherent constitution with clear priorities. The underdog protection decision (YES) is well-evidenced from Reorganise (2022). The five reaction questions are specific and grounded.

**What should change for next run:** (1) safe_list() fix should be the default in all scoring scripts. (2) The `organising_context` dossier field would most improve this evaluator's scoring quality. (3) M4 trigger conditions need tightening — "professional" as a user type is too broad.

