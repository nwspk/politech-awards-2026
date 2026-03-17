# Process Log

Structured process history for the awards committee. Canonical full log for `/awards` rendering.

## At a glance

| Area | Current state | Where to read details |
|---|---|---|
| Open tradeoffs | Active unresolved questions across iterations, data quality, framework, and event UX | [Open questions and unresolved tradeoffs](#open-questions-and-unresolved-tradeoffs) |
| Meeting record | Full canonical notes captured for Feb 4, Mar 4, Mar 13, and Mar 15 sessions | [Meeting notes](#meeting-notes-full-canonical-record) |
| Current emphasis | Data quality follow-up, citation reliability, typology, and theory-of-change framing | [2026-03-15 impromptu](#2026-03-15-impromptu) |
| Governance baseline | CODEOWNERS voting model and iterative PR process | [2026-02-04 notes](#2026-02-04-1800) |
| Canonical source | This file (canonical) | This file |

## Open questions and unresolved tradeoffs

Consolidated from process notes plus current iteration/data logs.

| Status | Area | Question | Why unresolved | Next action |
|---|---|---|---|---|
| Open | Iterations | Should confidence-ranked jury promotion remain the final selector? | Confidence is self-reported and may reward model style over reasoning quality | Compare alternative promotion rules using current six-jury outputs |
| Open | Iterations | How should model calibration asymmetry (especially Claude) be normalized? | Current shortlist behavior may structurally underrepresent some model judgments | Test calibration-aware shortlist thresholds |
| Open | Iterations | Should mixed-jury optimistic merging be retained? | It may bias toward charitable interpretations | Run merged-most-optimistic vs merged-median comparison |
| Open | Data | How much human review is required before final publication? | High-value evidence fields remain sparse for some projects | Add manual spot-check policy for high-risk dossiers |
| Open | Data | How should weak evidence fields (`policy_outcomes`, `causation_strength`) be handled in scoring? | Fields are partially filled but often hard to verify from public web traces | Gate scoring bonuses on link-backed evidence |
| Open | Data quality | How should citation quality be enforced in enrichment outputs? | Current citations may include keyword-match artifacts rather than verified references | Add citation validation + manual review criteria before promotion to canonical data |
| Open | Data | Should non-project or low-quality candidate URLs be filtered earlier? | Nomination quality still affects enrichment reliability | Add intake validation rules before enrichment runs |
| Open | Framework | Should the committee adopt a political typology for classifying projects? | Current comparisons mix different project types and intents | Propose and test a minimal typology (e.g. data extraction, workflow efficiency, organizing/coordination) |
| Open | Framework | How should each project's theory of change be captured and scored? | Current fields emphasize outputs/evidence but less explicit causal pathway framing | Add theory-of-change field and test weighting in one branch |
| Open | Framework | Where should human intervention sit in deliberation? | Committee interest in adding human checkpoints without losing inspectability | Prototype one human-in-the-loop branch and compare outcomes |
| Open | Framework | Should the committee branch into a model-evaluation framing in parallel to project ranking? | Team interest in comparing model political priors/training effects | Run a parallel branch and publish comparative findings |
| Open | Model behavior | How stable are model outputs run-to-run for the same setup? | Winner sensitivity across models may be compounded by within-model variance/noise | Run repeatability tests (e.g. Grok x10) and publish variance stats |
| Open | Explanations | What level of score explanation should be published per project? | Current ranking UI can surface outcomes without enough interpretability context | Add per-project explanation blocks tied to score components |
| Open | Data quality | Is scraped content sufficiently representative of each project? | Weak/partial page captures can distort both eval and deliberation quality | Add scrape-quality diagnostics and fallback source strategy |
| Open | Pipeline design | Should shortlist gating be removed or loosened when cost allows? | Shortlist may hide signal and lock in early-pass errors; full-run cost may be acceptable | Benchmark cost/quality tradeoff with and without shortlist |
| Open | Values design | Should committee values be explicitly reflected and aggregated in the scoring process? | Current framework may overweight one value schema vs committee plural values | Prototype value elicitation + aggregation pathway and compare rankings |
| Open | Methodology | What intermediate outputs should be treated as first-class process artifacts? | Useful artifacts exist (cache, assessments, deliberations) but taxonomy is unclear | Define artifact classes and publication policy in logs/docs |
| Open | Analysis | Can we model the ranking space to identify principal value axes? | Value structure is implicit and hard to reason about directly | Explore dimensionality-reduction analysis on project-score vectors |
| Open | Analysis | Can uncertainty-aware member estimators improve fairness and interpretability? | Current process lacks explicit uncertainty modeling and representation metrics | Prototype estimator + uncertainty outputs (e.g. controversy/uncertainty indicators) |
| Open | Event UX | Should attendees rank projects live (pairwise or values-driven ranking UI)? | Valuable for transparency, but interaction model is undecided | Prototype ranking UI ahead of showcase and test facilitation format |

## Meeting notes (full canonical record)

### 2026-02-04 18:00

- **Type**: Committee meeting
- **Attendees**: Gamithra, Asil, Jamie, Fatima
- **Apologies**: Fran, Fred
- **Key documents**: Cohort reflections folder for Political Technology Awards
- **Related PR/context**: [v2 PR](https://github.com/nwspk/politech-awards-2026/pull/2) (example of first inspectable criterion proposal)

#### Full notes

1. **Governance of committee / CODEOWNERS**
   - Committee operates under CODEOWNERS model.
   - Members can comment on PRs; codeowners ensure consistency.
   - PR decisions: majority vote from codeowners counts.
   - Meetings scheduled every two weeks until two weeks before the awards ceremony, which is the final decision point.
   - Each meeting sets actionable tasks for the next session.
   - Version trail in README should be maintained for presentations, blogging, and historical tracking.

2. **Collaborations and reflection document**
   - Reflections doc used for political reasoning, values, and learning goals.
   - Supports transparency and cohort visibility.
   - Could be co-opted for a committee tab tracking progress.

3. **Organizations and their data**
   - Some organizations have incomplete/low-quality data.
   - Need to balance scale vs quality.
   - Potential engagement approaches:
     - Mass emails/surveys requesting missing data.
     - Highlight organizations in Civic Fields guide or at ceremony.
   - Human judgment remains required; automation is not sufficient alone.

4. **Inclusive ways of working**
   - Engage cohort by repurposing operator bot to show rankings/top choices.
   - Provide explanation/rationale visibility so participants understand decisions.
   - Highlight quieter, high-impact contributors.
   - Continue exploration/iteration before committing to final process design.

5. **Non-automated tasks**
   - Event organizing (program/logistics).
   - PR review and inclusion work.
   - Publishing project guide / website page linking repo and updates.

6. **Additional discussion highlights**
   - Maintain version trail for presentation/blog context.
   - Automation should showcase impact, not replace judgment.
   - Engagement comms should be clear, incentivized, and considerate.

#### Action items captured

- Schedule next meeting — Fatima — due 2026-02-18.
- Populate reflections tab — all — due 2026-02-18.
- Submit at least one PR/iteration — all — due 2026-02-18.
- Create CSV of organization data — Asil — due 2026-02-11.
- Repurpose operator bot for ranking/engagement — Gamithra — due 2026-02-18.
- Website data management — Fatima — ongoing.

---

### 2026-03-04 17:15 (impromptu early meeting)

- **Type**: Impromptu early meeting
- **Attendees**: Gamithra, Jamie, Fatima
- **Apologies**: none recorded
- **Key documents**: none recorded
- **Related PR/context**: [v4 PR](https://github.com/nwspk/politech-awards-2026/pull/9), [v5 PR](https://github.com/nwspk/politech-awards-2026/pull/12)

#### Full notes

- Multi-agent PR debrief and next ideas.
- Core bottleneck identified: missing project data means agents often have little to reason on.
- Working assumption: more project information improves score quality.
- Concern: bots can make assumptions in data-poor contexts.
- Proposal discussed: de-rank known projects to surface less obvious award candidates.
- Proposal discussed: relevance bonus (e.g. 2026 relevance signal).
- Proposal discussed: values could be made clearer in what agents are asked to evaluate.
- Branch strategy agreed: each person experiments on own branch, then compare/merge learnings.
- Suggested additional data collection:
  - last-year activity signal,
  - blog/news pages,
  - three external links per project (news/blog/third-party),
  - search agent integrations (e.g. SERP APIs).
- Pricing/cost traceability considered valuable process output.

#### Action items captured

- Gamithra: publish dashboard of agent deliberation.
- Fatima: website integration path for deliberation outputs (link/table on awards site).
- Fatima: fix `candidates.csv` and add extended detail version.
- Fatima: scheduling updates.
- Move meetings to 17:00 weekly.
- Optional coworking hour on Sundays.

---

### 2026-03-13 17:00 (impromptu)

- **Type**: Impromptu meeting
- **Attendees**: Gamithra, Fatima
- **Apologies**: none recorded
- **Key documents**: updates from enrichment work
- **Related PR/context**: [v6 PR](https://github.com/nwspk/politech-awards-2026/pull/15), [Data log Attempt 3](data-log.md#attempt-3-enriched-dossiers-era)

#### Full notes

- Data merge progress reported as complete/near-complete.
- 10 projects identified for manual verification of missing pieces (Fatima follow-up).
- Scoring proposals discussed:
  - bonus scoring adjustments,
  - de-ranking known projects,
  - adding relevance bonus,
  - bonus for project vs organization profile,
  - numeric treatment on shortlist,
  - additional deliberation lens,
  - inclusivity-keyword lens.
- Delivery/workstream items:
  - publish deliberation interface (Gamithra),
  - operator publishes latest awards view (Gamithra),
  - hackathon planning for Sunday March 29 for showcase prep.
- Fatima reflections:
  - interest in adding explicit human intervention point in deliberation,
  - interest in branching and rethinking framework from scratch,
  - strong interest in using awards process to evaluate AI models as political artifacts,
  - interest in ranking UI for attendees (pairwise comparison or values -> criteria -> live ranking).
- Gamithra reflections:
  - publish deliberation interface,
  - run mini-workshop at event where attendees derive their own conclusion,
  - keep weekly Wednesday check-ins (even if remote),
  - data quality gains are significant and energizing,
  - possibility of democratic lens/persona contributions while retaining deliberation flow.

#### Action items captured

- Fatima: manually verify missing pieces for 10 flagged projects.
- Gamithra: publish deliberation interface.
- Gamithra: publish latest awards view via operator flow.
- Team: plan March 29 hackathon for showcase prep.
- Team: continue Wednesday check-ins.

---

### 2026-03-15 (impromptu)

- **Type**: Impromptu meeting
- **Attendees**: Ed, Hannah, Fatima
- **Apologies**: none recorded
- **Key documents**: data enrichment PR review context
- **Related PR/context**: [Data log Attempt 3](data-log.md#attempt-3-enriched-dossiers-era)

#### Full notes

- Citation quality concern: current citation behavior appears keyword-match-driven and needs review.
- Follow-up required on 10-15 projects with weak data quality at end of enrichment PR.
- Framing discussion: add political typology for projects (example categories discussed: data-scraping project, workflow-efficiency project, organizing/events project, process-efficiency project).
- Conceptual modeling discussion: define and capture each project's theory of change.

#### Action items captured

- Fatima: Review and correct citation strategy (move from keyword-match artifacts to verified citation logic).
- Fatima: Follow up on 10-15 low-quality dossiers and improve where evidence exists.
- Fatima: Draft and test a political typology proposal for project classification.
- Fatima: Draft and test a theory-of-change field for candidate dossiers/process use.

---

### 2026-03-09 (matrix discussion with Ed; v6 release context)

- **Type**: matrix discussion
- **Participants**: Ed, Fatima, Gamithra, Hannah
- **Related PR/context**: [v6 PR](https://github.com/nwspk/politech-awards-2026/pull/15), [Awards site](https://2025.newspeak.house/awards)

#### Notes captured

- Multi-model jury winners were surprising and highly divergent across juries.
- Key challenge raised: whether differences are only cross-model or also within-model (run-to-run stability/noise).
- UI/communication feedback: ranking display is useful, but needs richer per-score explanations.
- Cost discussion: full eval runs appeared affordable relative to expected budget (~$11 including re-runs), raising possibility of broader/no-shortlist runs.
- Data quality concern reaffirmed: scraped content may not sufficiently represent project reality.

#### Questions derived into tradeoffs table

- Model self-consistency and repeatability.
- Explanation depth for published rankings.
- Scrape quality adequacy for downstream scoring.
- Full-run vs shortlist cost-quality tradeoff.

---

### 2026-02-23 (matrix discussion with Ed; values/method framing)

- **Type**: matrix discussion
- **Participants**: Ed (+ cohort participants in thread)
- **Related context**: committee values framing and process architecture exploration

#### Notes captured

- Proposed reframing: rankings may be interpreted as an expression of committee values, not objective best-project claims.
- Suggested pathway:
  - reflect committee member values explicitly (biography/survey/published work),
  - aggregate those values through inspectable mechanisms (averaging, voting variants, debates, robust aggregations).
- Suggested treating intermediate outputs as meaningful artifacts rather than transient internals.
- Suggested ranking-space analysis:
  - characterize score vector space,
  - explore principal axes/components for value extraction,
  - estimate uncertainty and representation quality of member-level models.

#### Questions derived into tradeoffs table

- Explicit value reflection and aggregation design.
- Intermediate artifact taxonomy/publication policy.
- Dimensionality-reduction/value-axis analysis.
- Uncertainty-aware estimator approach for member/project scoring.

---

### 2026-03-31 - The Political Tech Awards Showcase

- **Type**: Milestone
- **Attendees**: TBD
- **Related link**: [Awards site](https://2025.newspeak.house/awards)
- **Planned outputs**:
  - publish winner list,
  - process presentation,
  - long-form statement.

### 2026-04-05

- **Type**: Milestone
- **Attendees**: TBD
- **Related link**: [Briefing document](https://docs.google.com/document/d/14GgwyiA7t-AMRj4P5JFNijHXjATEQvQUvaxyIVZG-LA/edit?tab=t.0#heading=h.yyqjou9klunq)
- **Planned outputs**:
  - committee reflections on limits, process, and standout projects.

## Decision and rationale log (high level)

| Date | Change | Why it changed | Source |
|---|---|---|---|
| 2026-02-04 | Opened first committee-scored heuristic workflow (v2) | Move from pure randomness to value-legible scoring signals | [v2 PR](https://github.com/nwspk/politech-awards-2026/pull/2) |
| 2026-02-07 | Removed randomness from scoring (v3) | Reproducibility and interpretability | [v3 PR](https://github.com/nwspk/politech-awards-2026/pull/7) |
| 2026-02-13 | Added cached page-content signals (v4) | URL-only heuristics were too weak | [v4 PR](https://github.com/nwspk/politech-awards-2026/pull/9) |
| 2026-02-22 | Introduced multi-agent deliberation pipeline (v5) | Shift from static criteria matching to contest-based evaluation | [v5 PR](https://github.com/nwspk/politech-awards-2026/pull/12) |
| 2026-03-09 | Tested six-jury model robustness design (v6) | Evaluate winner stability across model worldviews | [v6 PR](https://github.com/nwspk/politech-awards-2026/pull/15) |
| 2026-03-10 | Adopted full-dataset enriched dossiers and verification approach (data attempt 3) | Improve evidence quality and auditability across all candidates | [Data log](data-log.md#attempt-3-enriched-dossiers-era) |
| 2026-03-15 | Logged citation-quality and theory-of-change gaps during enrichment review | Improve evidence reliability and comparability across project types | [Data log](data-log.md#known-limitations-and-gaps) |

## Logging protocol

- Add process decisions here when they change committee operation, governance, or legitimacy framing.
- Do not store private or sensitive notes; keep this publication-ready.
- For algorithm changes, also update `iterations/` and `iterations.json`.
- For data collection changes, also update `docs/logs/data-log.md`.
