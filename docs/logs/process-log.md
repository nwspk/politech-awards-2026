# Process Log

Structured process history for the awards committee. Canonical full log for `/awards` rendering.

## Contributor notes

- Use this log for meeting notes, governance decisions, and open tradeoffs.
- Add new entries as new dated headings under `Meeting notes`.
- Keep the `Open questions and unresolved tradeoffs` table current when decisions change.
- Prefer concise notes that link to relevant PRs or docs.

For contribution workflow, see [CONTRIBUTING.md](https://github.com/nwspk/politech-awards-2026/blob/main/CONTRIBUTING.md).

### At a glance


| Area | Current state | Where to read details |
|---|---|---|
| Open tradeoffs | Active unresolved questions across iterations, data quality, framework, and event UX | [Open questions table](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/process-log.md#open-questions-and-unresolved-tradeoffs) |
| Meeting record | Canonical notes captured for Feb 4, Feb 23, Mar 4, Mar 9, Mar 13, Mar 15, Mar 17, Mar 22, and Mar 30 synthesis | [Meeting notes section](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/process-log.md#meeting-notes-full-canonical-record) |
| Current emphasis | Model confidence/variance checks, human intervention design, values/lens framing, and attendee ranking UX | [Latest consultation notes](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/process-log.md#2026-03-17-1600-consultation-with-sarah) |
| Governance baseline | CODEOWNERS voting model and iterative PR process | [2026-02-04 notes](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/process-log.md#2026-02-04-1800) |
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
| Open | Human review | How should stated familiarity bias be handled in manual ranking? | Davit explicitly noted uneven familiarity with projects while manually reviewing | Decide whether to add a second-pass normalization/review rule for manual scores |
| Open | Evaluation | How should Alexandra D1–D8 jury outputs feed awards (shortlist only vs `SCORING_MODE=v9` ranking)? | v9 adds numeric transparency; weights and category corrections still optional | Run pilot `npm run alexandra-eval -- --limit N`; compare spread to ITN/A; decide publication policy |
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
- Maintain website data management — Fatima — ongoing.

---

### 2026-02-23 (matrix discussion with Ed; values/method framing)

- **Type**: Matrix discussion
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

- Gamithra: Publish a dashboard of agent deliberation.
- Fatima: Define a website integration path for deliberation outputs (link/table on awards site).
- Fatima: Fix `candidates.csv` and add an extended detail version.
- Fatima: Publish scheduling updates.
- Team: Move meetings to 17:00 weekly.
- Team: Keep an optional coworking hour on Sundays.

---

### 2026-03-09 (matrix discussion with Ed; v6 release context)

- **Type**: Matrix discussion
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

### 2026-03-13 17:00 (impromptu)

- **Type**: Impromptu meeting
- **Attendees**: Gamithra, Fatima
- **Apologies**: none recorded
- **Key documents**: updates from enrichment work
- **Related PR/context**: [v6 PR](https://github.com/nwspk/politech-awards-2026/pull/15), [Data log Attempt 3](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/data-log.md#attempt-3-enriched-dossiers-era)

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

- Fatima: Manually verify missing pieces for 10 flagged projects.
- Gamithra: Publish the deliberation interface.
- Gamithra: Publish the latest awards view via operator flow.
- Team: Plan the March 29 hackathon for showcase prep.
- Team: Continue Wednesday check-ins.

---

### 2026-03-15 (impromptu)

- **Type**: Impromptu meeting
- **Attendees**: Ed, Hannah, Fatima
- **Apologies**: none recorded
- **Key documents**: data enrichment PR review context
- **Related PR/context**: [Data log Attempt 3](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/data-log.md#attempt-3-enriched-dossiers-era)

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

### 2026-03-17 16:00 (consultation with Sarah)

- **Type**: Consultation meeting
- **Attendees**: Fatima, Ed
- **Apologies**: none recorded
- **Key documents**: process framing notes from consultation
- **Related context**: committee deliberation design and event legitimacy framing

#### Full notes

- Confidence values are currently self-reported by deliberating models; this is a weak selector signal on its own.
- Suggested robustness check: run the same model repeatedly (for example x10) and measure winner variance.
- Core legitimacy question raised: if AI models decide the winner end-to-end, does the result still feel meaningful to attendees and recipients?
- Alternative framing discussed: use LLMs to help people articulate values and research evidence, while reserving final selection power for humans.
- Prompt design note: if keyword-based ranking is used, definitions of each keyword should be included directly in the prompt.
- Pairwise methods were discussed as useful for codifying values, but potentially misleading as a strict ranking system.
- Broad conclusion: the significance of the award is partly created by human participation in selection; over-automation risks undermining that legitimacy.

#### Questions derived into tradeoffs table

- Confidence should remain a diagnostic metric rather than the final promotion rule.
- Repeatability testing should be added before finalizing winner claims.
- Human intervention points should be explicit in the awards workflow.

#### Action items captured

- Run one repeatability benchmark for at least one jury setup and log variance stats.
- Draft one human-in-the-loop decision variant and compare its outputs to fully automated ranking.
- Add keyword-definition requirements wherever keyword-based scoring is retained.

---

### 2026-03-22 (email from Davit; manual review checkpoint)

- **Type**: Manual review checkpoint
- **Participants**: Davit, Fatima (email exchange)
- **Related PR/context**: [v7 PR](https://github.com/nwspk/politech-awards-2026/pull/20), [Davit ranking sheet](https://docs.google.com/spreadsheets/d/1wEQ35p2zkiBVUr8JEWgRmt_Zh1EYFFCxxs-d5H6NGgI/edit?gid=0#gid=0)

#### Notes captured

- Davit reported he had reviewed the first ~20 projects and would continue.
- He explicitly noted familiarity bias risk in his human review due to uneven prior knowledge across projects.
- He wrote that the AI leader was his number-two choice at that stage.
- He identified **Diia** as his top choice at that stage, with rationale: large-scale adoption (20M+ users), transferable infrastructure in principle, and wartime utility for digital passport access.
- He flagged **LiquidFeedback** as another familiar project with an experimentally strong model and some real-world track record.

#### Action items captured

- Update v7 iteration docs with Davit's written rationale and ranking-sheet context without adding new inferred claims.
- Confirm committee handling for manual-review familiarity bias (normalization or explicit caveat).

---

### 2026-03-30 (matrix chat synthesis through Mar 30)

- **Type**: Matrix synthesis note
- **Participants**: cohort thread participants (including Ed, Gamithra, Hannah, Fatima, others)
- **Source**: matrix export (Awards 2026 room, exported 2026-03-30)
- **Related context**: weekly process updates, ranking interpretation, showcase prep

#### Clustered themes

1. **Data quality and enrichment limits**
   - Repeated concern that cached/project-page data is too thin for reliable assessments.
   - Consensus that richer external evidence is needed (usage context, third-party references, clearer project descriptions).
   - Practical implication: enrichment quality should be treated as a first-order constraint on ranking quality.

2. **Values and legitimacy framing**
   - Rankings were framed as expressions of committee values rather than objective truth claims.
   - Discussion pointed toward making values explicit and inspectably aggregating them across members.
   - Intermediate outputs were treated as meaningful artifacts, not just pipeline exhaust.

3. **Model behavior and stability**
   - Strong interest in distinguishing cross-model disagreement from within-model variance.
   - Winner divergence across juries increased demand for repeatability checks before strong winner claims.
   - Communication need identified: publish clearer reasoning alongside numeric outputs.

4. **Process and event UX**
   - Ongoing interest in attendee-facing ranking interactions (pairwise or values-driven interfaces).
   - Mini-workshop format at the event was discussed as a way to expose deliberation complexity.
   - Showcase planning emphasized clear narrative continuity across iterations.

5. **Operational cadence**
   - Weekly Wednesday check-ins remained the default coordination rhythm.
   - PR cadence and incremental branch experiments continued to be used for rapid iteration.
   - Operator publishing and interface updates were treated as core delivery tasks.

#### Action items captured

- Keep publishing concise weekly synthesis notes that separate evidence, values claims, and decisions.
- Include an explicit "known limits" statement when presenting rankings publicly.
- Track repeatability and explanation quality as standing criteria before final showcase claims.

---

## Decision and rationale log (high level)

| Date | Change | Why it changed | Source |
|---|---|---|---|
| 2026-02-04 | Opened first committee-scored heuristic workflow (v2) | Move from pure randomness to value-legible scoring signals | [v2 PR](https://github.com/nwspk/politech-awards-2026/pull/2) |
| 2026-02-07 | Removed randomness from scoring (v3) | Reproducibility and interpretability | [v3 PR](https://github.com/nwspk/politech-awards-2026/pull/7) |
| 2026-02-13 | Added cached page-content signals (v4) | URL-only heuristics were too weak | [v4 PR](https://github.com/nwspk/politech-awards-2026/pull/9) |
| 2026-02-22 | Introduced multi-agent deliberation pipeline (v5) | Shift from static criteria matching to contest-based evaluation | [v5 PR](https://github.com/nwspk/politech-awards-2026/pull/12) |
| 2026-03-09 | Tested six-jury model robustness design (v6) | Evaluate winner stability across model worldviews | [v6 PR](https://github.com/nwspk/politech-awards-2026/pull/15) |
| 2026-03-10 | Adopted full-dataset enriched dossiers and verification approach (data attempt 3) | Improve evidence quality and auditability across all candidates | [Data log](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/data-log.md#attempt-3-enriched-dossiers-era) |
| 2026-03-15 | Logged citation-quality and theory-of-change gaps during enrichment review | Improve evidence reliability and comparability across project types | [Data log](https://github.com/nwspk/politech-awards-2026/blob/main/docs/logs/data-log.md#known-limitations-and-gaps) |

## Logging protocol

- Add process decisions here when they change committee operation, governance, or legitimacy framing.
- Do not store private or sensitive notes; keep this publication-ready.
- For algorithm changes, also update `iterations/` and `iterations.json`.
- For data collection changes, also update `docs/logs/data-log.md`.
