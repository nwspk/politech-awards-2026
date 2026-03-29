# Iterations Log

Canonical full iteration history for `/awards` rendering. Generated from `iterations.json`.

## Summary table

| Version | Date | Author | Status | Heuristic | PR | Entry |
|---|---|---|---|---|---|---|
| v1 | n/a | n/a | merged | Random score between 1 and 100 | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) | [entry](#v1-random-scoring) |
| v2 | 2026-02-04 | @Asil | merged | Random base score (1-100) + inclusion bonus based on exclusion keywords in URL | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) | [entry](#v2-exclusion-keyword-bonus) |
| v3 | 2026-02-07 | @sugaroverflow | merged | Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters. | [v3](https://github.com/nwspk/politech-awards-2026/pull/7) | [entry](#v3-keyword-clusters-no-randomness) |
| v4 | 2026-02-13 | @jcoombes | merged | Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords. | [v4](https://github.com/nwspk/politech-awards-2026/pull/9) | [entry](#v4-ai-governance-body-bonus) |
| v5 | 2026-02-22 | @Gamithra | merged | Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist. | [v5](https://github.com/nwspk/politech-awards-2026/pull/12) | [entry](#v5-three-agent-itn-a-deliberation) |
| v6 | 2026-03-09 | @sugaroverflow | open | This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heuristic](https://github.com/nwspk/politech-awards-2026/pull/12) with **6 independent AI juries** that run an ITN/A deliberation on a shortlist of 183 projects. The jury with the highest confidence score picks the project winner. | [v6](https://github.com/nwspk/politech-awards-2026/pull/15) | [entry](#v6-six-jury-itn-a-deliberation) |
| v7 | 2026-03-29 | @sugaroverflow | open | For each of 18 Newspeak House fellows, a multi-stage AI pipeline infers an explicit **evaluative constitution** from their public record — weighted criteria, value modifiers, and procedural rules, written in first person. That constitution scores all 321 longlist projects (0–100). A **4-model jury panel** (GPT-4.1, Gemini 2.5 Pro, Mistral Large, Grok 4) independently cross-checks each ranking across 5 runs each. The committee score is the **simple mean of all 18 constitutional scores** per project. | [v7](https://github.com/nwspk/politech-awards-2026/pull/90) | [entry](#v7-for-each-of-18-newspeak-house-fellows-a-multi-stage-ai-pipeline-infers-an-expli) |

## Full iteration records

### v7 For each of 18 Newspeak House fellows, a multi-stage AI pipeline infers an expli

- **PR**: [v7](https://github.com/nwspk/politech-awards-2026/pull/90)
- **Status**: open
- **Author**: @sugaroverflow
- **Date**: 2026-03-29
- **Top project**: [liquidfeedback.com](https://liquidfeedback.com) (score: 65)

#### Heuristic

For each of 18 Newspeak House fellows, a multi-stage AI pipeline infers an explicit **evaluative constitution** from their public record — weighted criteria, value modifiers, and procedural rules, written in first person. That constitution scores all 321 longlist projects (0–100). A **4-model jury panel** (GPT-4.1, Gemini 2.5 Pro, Mistral Large, Grok 4) independently cross-checks each ranking across 5 runs each. The committee score is the **simple mean of all 18 constitutional scores** per project.

`SCORING_MODE=v10` in `the-algorithm.ts` reads `iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv` and maps `avg_score` directly to the leaderboard (scores are already 0–100).

#### Rationale

### What this iteration is

v10 is the first heuristic that uses **individual evaluative constitutions** rather than a shared rubric. Instead of asking "what dimensions matter?" once for the whole committee, it asks: "what does *this person's* public record reveal about what they value?" — separately for each of 18 fellows — then aggregates across them.

The constitutional approach was developed as Project Mirror v2. Each fellow's pipeline runs in sequence:

1. **Research** — public record scraped and verified (LinkedIn, GitHub, writing, talks)
2. **Evidence assessment** — sources tiered by confidence; durable values separated from situational interests
3. **Constitution inference** — Part A: project criteria with weights; Part B: value modifiers (boost/penalise/conditional); Part C: procedural rules and underdog protection
4. **Scoring** — all 321 projects scored against the constitution with first-person prose rationales
5. **Jury cross-check** — 4-model panel (GPT-4.1, Gemini 2.5 Pro, Mistral Large, Grok 4) runs 5 independent passes; jury scores cross-check but do not override the constitutional ranking

The committee score is the **mean constitutional score** across all 18 fellows. This is v1 of the aggregation — fellows are reviewing their individual PRs and can request re-runs if the constitution feels wrong.

### Design decisions

- **Constitutional score is authoritative**, not the jury median. The jury is a structured cross-check — it catches cases where the constitutional score is fragile or dossier evidence is thin (e.g. Gapminder: constitutional rank 1, jury: all models abstained).
- **Simple mean**, not weighted or normalised. This PR does not claim to know whose constitution should count more. That is a political decision for the committee.
- **Score inflation vs v9:** constitutional scores tend to be higher than D1–D8 composites because they are calibrated to each fellow's own scale, not a shared rubric. Inter-fellow comparison is meaningful for *rank* more than for absolute score.

### Per-fellow results

Each fellow's constitutional winner and individual PR:

| PR | Fellow | Constitutional Winner |
|----|--------|----------------------|
| [#73](https://github.com/nwspk/politech-awards-2026/pull/73) | Aadi Kulkarni | OpenCRVS |
| [#82](https://github.com/nwspk/politech-awards-2026/pull/82) | Alessandro Pedori | Decidim |
| [#83](https://github.com/nwspk/politech-awards-2026/pull/83) | Alexandra Ciocanel | AlgorithmWatch |
| [#87](https://github.com/nwspk/politech-awards-2026/pull/87) | Asil Sidahmed | Ushahidi |
| [#85](https://github.com/nwspk/politech-awards-2026/pull/85) | Chris Owen | Humble Data Workshop |
| [#81](https://github.com/nwspk/politech-awards-2026/pull/81) | Connor Dunlop | AlgorithmWatch |
| [#71](https://github.com/nwspk/politech-awards-2026/pull/71) | David Powell | mySociety Datasets and APIs |
| [#86](https://github.com/nwspk/politech-awards-2026/pull/86) | Davit Jintcharadze | LiquidFeedback |
| [#67](https://github.com/nwspk/politech-awards-2026/pull/67) | Fatima Sarah Khalid | CONSUL Democracy |
| [#88](https://github.com/nwspk/politech-awards-2026/pull/88) | Francesca Galli | mySociety Datasets and APIs |
| [#72](https://github.com/nwspk/politech-awards-2026/pull/72) | Frederick O'Brien | Open Heart Mind |
| [#68](https://github.com/nwspk/politech-awards-2026/pull/68) | Gamithra Marga | Bonfire |
| [#84](https://github.com/nwspk/politech-awards-2026/pull/84) | Hannah O'Rourke | AlgorithmWatch |
| [#74](https://github.com/nwspk/politech-awards-2026/pull/74) | Huda Abdirahim | Aragon |
| [#70](https://github.com/nwspk/politech-awards-2026/pull/70) | Jamie Coombes | Interoperable Deliberative Tools |
| [#80](https://github.com/nwspk/politech-awards-2026/pull/80) | Martina Orlea | Martus |
| [#75](https://github.com/nwspk/politech-awards-2026/pull/75) | Nicholas Botti | AlgorithmWatch |
| [#79](https://github.com/nwspk/politech-awards-2026/pull/79) | Tuna Acisu | Gapminder Worldview Upgrader (100 — only perfect score in cohort) |

Full methodology: PR [#76](https://github.com/nwspk/politech-awards-2026/pull/76)

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

- **AI-inferred constitutions are not the fellows' actual views.** Each PR invites the fellow to review and flag what's wrong. Re-runs are possible. This is v1.
- **Simple mean treats all fellows equally.** No weighting by expertise, engagement, or domain. That's a deliberate choice for this version but contestable.
- **Constitutional scores are not cross-calibrated.** One fellow's 70 is not the same as another's 70. Rankings are more meaningful than absolute scores for inter-fellow comparison.
- **Jury coverage is partial.** The 4-model jury scores ~130–150/321 projects per member (thin dossiers cause abstentions). Jury data cross-checks the constitutional score but doesn't replace it.
- **Claude Opus 4 was excluded** from jury runs due to enterprise API pricing. Most members have a 4-model jury; a small number have residual claude data from the original pipeline.
- **Gapminder edge case:** Tuna's constitution gave Gapminder Worldview Upgrader a constitutional score of 100. All 4 jury models abstained — insufficient public evidence to evaluate. The constitutional score stands; the abstention is documented.

#### Assessment

This PR ships `iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv` (321 rows, avg_score, stdev, coverage) and this PR body as the v10 iteration entry. Individual mirror PRs (#67–88) remain open for fellow amendments. A v10.1 re-aggregation will run after the feedback window closes.

**319 of 321 projects** scored by all 18 fellows. 2 projects scored by fewer (URL deduplication across Alessandro and Davit's CSVs).

---

### v6 Six-jury ITN/A deliberation

- **PR**: [v6](https://github.com/nwspk/politech-awards-2026/pull/15)
- **Status**: open
- **Author**: @sugaroverflow
- **Date**: 2026-03-09
- **Top project**: [algorithmwatch.org](https://algorithmwatch.org) (score: 97)

#### Heuristic

This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heuristic](https://github.com/nwspk/politech-awards-2026/pull/12) with **6 independent AI juries** that run an ITN/A deliberation on a shortlist of 183 projects. The jury with the highest confidence score picks the project winner.

v6 inherits the full ITN/A evaluation and deliberation pipeline from v5 — the same 4-agent structure (political, relational, experimental), the same multi-argument format with a facilitator, and the same scoring tiers (deliberated: 51–90, 2+ greens: 45, 1 green: 20, none: 5).

**The changes are in who runs the jury, how the shortlist is built, and how the winner is selected.**

**Total pipeline spend:** $11.30 USD

### Phase 1: Evaluation

Grok 4.1 Fast, Claude Sonnet 4, and Kimi 2.5 independently evaluate all **321 candidates** across three lenses: political, relational, and experimental. Each assessment produces a bucket (green / yellow / red / grey) and a rationale per dimension.

### Phase 2: Shortlist

Shortlist rule: **at least 2 of the 3 models** rated the project green or yellow in any dimension.

This **2-of-3 rule** produced **183 candidates**.

### Phase 3: Six Jury Deliberations

The three original models deliberate on their own evaluation data (each model reads only its own assessments). Each jury runs the full ITN/A multi-agent deliberation — agents argue, contest, revise scores, and produce a ranked shortlist with a winner, confidence score, and case for/against.

**Original juries:**

- Grok 4.1 Fast
- Claude Sonnet 4
- Kimi 2.5

**Mixed juries** (deliberate from merged assessments):

- **GPT-4o** — mainstream / average voter
- **DeepSeek-R1** — adversarial / contrarian
- **Specialist panel** — Gemini 2.5 Pro (political), Llama 3.3 70B (relational), Mistral Large (experimental)

### Phase 4: Promotion

The six jury verdicts are compared by confidence score. The **highest-confidence jury** is promoted and selects the final award winner.

---

#### Rationale

v5 showed us that a single deliberating agent via Grok could produce a well-reasoned winner (one that made sense in an obvious political-tech-award sort of way), but left an open question:

> Is the result robust to model choice?  
> Do different AI “worldviews” produce the same answer?

v6 tests this theory.

Three original juries read their own evaluation data. The three mixed juries read merged assessments and deliberately introduce different perspectives: GPT-4o as a mainstream / institutional voice, DeepSeek-R1 as a contrarian with different political training data, and a specialist panel routing each evaluation lens (political, relational, experimental) to a purpose-fit model.

### Confidence scoring

Winner selection is based on the **confidence score** — the jury that is most certain of its verdict wins.

Grok 4.1 Fast again had the highest confidence (as in v5). It was also the cheapest and fastest model while still producing interesting analysis.

---

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

- **Confidence is self-reported** by the deliberating model. A model that is overconfident by nature may win regardless of reasoning quality (e.g. Grok?).
- **Claude’s calibration asymmetry** skews the Claude jury’s deliberation pool to a very narrow shortlist, which likely explains its low confidence (42/100). This may not be a fair comparison.
- **Merged assessments** for mixed juries use the most optimistic bucket per dimension, which biases mixed juries toward charitable readings.
- **Specialist panel** (different model per lens) is experimental — no prior evidence that routing lenses to different models improves deliberation quality.
- **All six juries picked a different winner.** The result is sensitive to which jury gets promoted. The committee may want to treat the full set of verdicts as equally valid competing perspectives.
- **Technical issues:**
  - Pipeline ran on a VPS with a Nanoclaw agent overnight.
  - Kimi 2.5 was the least reliable model (repeated stalling, manual restarts).
  - Several container resets meant partial progress was lost and some evaluations were re-run.
  - Deliberation phase: ~6h 38m (14:40–21:18 UTC).
  - Total cost ~$11.30, mostly from re-runs due to stalling.

---

#### Assessment

Human-readable Markdown summaries of all six jury deliberations: [jury README](https://github.com/nwspk/politech-awards-2026/blob/main/iterations/v6/jury-delegations/README.md).

**All six juries disagreed on their winners:**

| Jury | Winner | Confidence |
|------|--------|------------|
| Grok | AlgorithmWatch | 95 |
| Specialist Mixed Jury | Alaveteli | 90 |
| Adversarial | SlopStop | 85 |
| Kimi | Worker Info Exchange | 82 |
| Mixed Jury | Bellingcat Toolkit | 75 |
| Claude | Awesome Gov Datasets | 42 |

Different AI training backgrounds appear to encode different political values:

- **Grok** — systemic advocacy, evidence-to-policy pipelines
- **DeepSeek** — decentralised infrastructure
- **Specialist panel** — civic access tools with proven relational networks

**AlgorithmWatch** as the promoted winner (score 97, confidence 95) is defensible: it scored near-uniformly high across all three lenses (political 98, relational 97, experimental 97) and was **contested**, meaning it survived challenge.

---

### Findings & reflections

#### Why is it always Grok?

Grok performed well on v5; testing against other model juries, it again came out on top by confidence. Grok may be trained to be opinionated (e.g. if its corpus includes Twitter/X debates). This task structure — high velocity, high conviction, argument format — may suit Grok’s design. The confidence score Grok reports (95/100) might reflect a greater willingness to say it’s confident (analogous to Claude being less willing to assign green). The ITN/A deliberation format (make a case, contest, revise) may be one Grok is natively good at.

#### Claude (claude-sonnet-4-6) is structurally conservative as an evaluator

| Model | Greens | Green+Yellow |
|-------|--------|--------------|
| Grok | 120 | 191 |
| Kimi | 33 | 230 |
| Claude | 3 | 92 |

Claude assigned **green to only 3 / 321 projects**, compared with Grok’s 120.

The shortlist rule was originally a union of green projects but had to be redesigned after evaluation. Research into Claude Sonnet 4 suggests this behaviour is related to RLHF calibration around political statements and alignment. The shortlist rule was changed to the **2-of-3 model rule**, widening the pool to **183 projects**.

#### Shortlist rule design

Goal: roughly **100 projects** (~⅓ of the dataset).

| Strategy | Count | Verdict |
|----------|-------|---------|
| Union — any model green or yellow | 242 | Too loose; single-model noise |
| **2-of-3 — at least 2 models green or yellow** | **183** | Chosen |
| Intersection — all 3 models green or yellow | 88 | Too tight; Claude’s calibration removes too many |

**Rule chosen:** A project enters the shortlist if **at least 2 of the 3 models** rated it green or yellow in any dimension.

#### Jury structure

**Original juries** (each reads its own evaluation data):

| Jury | Model | Assessments |
|------|-------|-------------|
| grok | x-ai/grok-4.1-fast | assessments-grok.json |
| claude | anthropic/claude-sonnet-4-6 | assessments-all-claude.json |
| kimi | moonshotai/kimi-k2 | assessments-all-kimi.json |

**Mixed juries** (read merged assessments):

| Jury | Model(s) | Rationale |
|------|----------|------------|
| mixed | openai/gpt-4o | mainstream / institutional perspective |
| adversarial | deepseek/deepseek-r1 | contrarian political training data |
| specialist | gemini-2.5-pro + llama-3.3-70b + mistral-large | per-lens specialists |

Winner selection compares `winner.confidence` across all six deliberation outputs.

---

### Open questions

- Does Claude’s calibration asymmetry reflect a different political epistemology, or just noise? The adversarial (DeepSeek) jury is an interesting contrast.
- The specialist jury (per-lens model specialisation) is experimental — does routing political/relational/experimental to different models improve deliberation quality?
- Confidence scores across juries indicate how contested the winner is. High variance = interesting; low variance = robust consensus.
- Open expansions from [the v5 iteration](https://github.com/nwspk/politech-awards-2026/pull/12).
- Trying a different framework could further test reflections on Grok vs Claude on deliberations and confidence.

---

### v5 Three-agent ITN/A deliberation

- **PR**: [v5](https://github.com/nwspk/politech-awards-2026/pull/12)
- **Status**: merged
- **Author**: @Gamithra
- **Date**: 2026-02-22
- **Top project**: [github.com](https://github.com/g0v/vue.vtaiwan.tw) (score: 90)

#### Heuristic

Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist.

#### Rationale

v5 changes the question from "does this project match criteria" to "does this project make sense to three evaluators who are forced to argue with each other."

The pipeline has two stages:

**Stage 1 — Evaluation** (`scripts/itn/itn-a-eval.ts`): Each of the 321 projects is assessed independently by three agents: political (power lens), relational (care lens), experimental (epistemics lens) — each applying the full ITN/A protocol: self-check, four lenses with spectrum positioning, felt sense, then a bucket assignment (green / yellow / red / grey). Results cached to `cache/assessments.json` (this is ~39k lines and took a good few hours to run).

**Stage 2 — Deliberation** (`scripts/itn/itn-a-deliberate.ts`): The projects that reached green consensus across all three agents enter a deliberation round. Agents score all 21 *relative to each other* with full page content available — not against an abstract rubric but against the actual field. The top conflicts by rank spread are then argued in multi-turn conversation (3 turns each, with a facilitator between turns who calls out evasion). Final scores reflect where positions settled after argument. Results cached to `cache/deliberation.json`.

**Scoring in the-algorithm.ts**:
- Deliberated projects: their argument-settled aggregate score (range in this run: 51–90)
- 2+ green assessments, not deliberated: 45
- 1 green assessment: 20
- 0 greens / grey / red: 5

The numeric scores should be read as *ordinal*, not cardinal — 90 means "won the deliberation," not "90% good." The gap between tiers (90 → 45 → 20 → 5) is intentionally large; the ranking within each tier is what matters.

**Winner this run: vTaiwan (g0v)**

vTaiwan ranked first in the deliberation — the agents converged on it as the project that most fully embodies political technology in 2026: proven participatory infrastructure, real policy impact (Uber regulation, same-sex marriage), and genuinely open forks (Poland, France). The case against: Taiwan-centric origins, uncertain scaling to low-trust or non-digital-first contexts.

See **[Documents](../../iterations/v5/README.md#documents)** below for the Stage 2 deliberation summary and raw outputs.

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

Approximately 280 of 321 projects receive a score of 5, 20, or 45 with no fine-grained distinction within those tiers. The current cached page content isn't very useful. The projects that models have former knowledge of rank much higher.

**The agents argue from page content + prior assessments.** The deliberation agents see extracted page text (3000 chars) and the evaluation summaries. This is better than nothing but still lossy — page text isn't the same as knowing what a project actually does in practice.

**All agents run on the same model** (x-ai/grok-4.1-fast). True independence would use different models or temperatures. The disagreements that emerge are real — rank spreads of 15–20 on contested projects, genuine score revisions in argument — but they're disagreements within one model's possibility space. Tried a range of models in the process but this one emerged as the cheapest and fastest while producing interesting analysis.

The evaluation framework reflects specific values — systemic change over symptom treatment, genuine experimentation over locked gospel, nourishment over extraction, stewardship over ego. Projects that score low may be genuinely valuable under different value weightings.

#### Assessment

v5 validated that a contest-based evaluation can produce a legible shortlist and a defensible winner from noisy web evidence. Compared with earlier URL/content keyword approaches, the ITN/A pipeline produced richer disagreements, explicit tradeoffs, and clearer rationale trails for why `github.com/g0v/vue.vtaiwan.tw` won this run.

The main unresolved issue is calibration and robustness: most projects still collapse into coarse non-deliberated tiers, and all agents in this run shared the same base model family. This made v6's cross-model jury design the natural next step.

---

*Files added/modified:*
- `the-algorithm.ts` — v5 heuristic added, `CURRENT_HEURISTIC` switched to `heuristicV5`
- `scripts/itn/itn-a-eval.ts` — three-agent ITN/A evaluation pipeline entrypoint
- `scripts/itn/itn-a-deliberate.ts` — multi-turn deliberation with relative scoring and facilitator entrypoint
- `iterations/v5/` — snapshot of v5 deliverables (deliberation summary, deliberation.json, assessments.json) so future runs don’t overwrite them
- `cache/assessments.json` — evaluation outputs for all 321 projects (live cache; v5 snapshot in `iterations/v5/assessments.json`)
- `cache/deliberation.json` — deliberation outputs (live cache; v5 snapshot in `iterations/v5/deliberation.json`)

---

### v4 AI governance body bonus

- **PR**: [v4](https://github.com/nwspk/politech-awards-2026/pull/9)
- **Status**: merged
- **Author**: @jcoombes
- **Date**: 2026-02-13
- **Top project**: [algorithmwatch.org](https://algorithmwatch.org) (score: 65)

#### Heuristic

Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords.

#### Rationale

v3 showed that URL-only matching yields almost no signal. This iteration fetches each project's homepage, caches the HTML, and uses the cached body to surface projects that explicitly discuss AI governance, safety, or policy. Sites that fail to fetch receive a penalty.

#### Data sources

- project URL
- cached page body

#### Limitations

Requires cache to be populated (npm run cache:sites). AI bonus capped at 3 keyword matches × 5 points.

#### Assessment

n/a

---

### v3 Keyword clusters (no randomness)

- **PR**: [v3](https://github.com/nwspk/politech-awards-2026/pull/7)
- **Status**: merged
- **Author**: @sugaroverflow
- **Date**: 2026-02-07
- **Top project**: [benefits-calculator.turn2us.org.uk](https://benefits-calculator.turn2us.org.uk) (score: 11)

#### Heuristic

Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters.

#### Rationale

v2 showed that keyword matching against URLs can surface relevant projects — but the random base score meant that it was different each time it was run, which isn't very reliable. This iteration removes randomness entirely to ask:

**what can keyword clusters alone tell us about 321 projects when our only data source is a URL string?**

It turns out the answer is: almost nothing. Only 2 of 321 projects score above baseline. We can probably consider this a failure of our dataset which is only URLs.

#### Data sources

- project URL
- additional data files

#### Limitations

n/a

#### Assessment

n/a

---

### v2 Exclusion keyword bonus

- **PR**: [v2](https://github.com/nwspk/politech-awards-2026/pull/2)
- **Status**: merged
- **Author**: @Asil
- **Date**: 2026-02-04
- **Top project**: [civicmatch.app](https://civicmatch.app) (score: 100)

#### Heuristic

Random base score (1-100) + inclusion bonus based on exclusion keywords in URL

#### Rationale

The exclusion-focused scoring heuristic is intentionally crude: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions).

#### Data sources

- project URL

#### Limitations

Only matches keywords in the URL string itself, not in actual project content. Many relevant projects won't have these keywords in their URL.

#### Assessment

n/a

---

### v1 Random scoring

- **PR**: [v1](https://github.com/nwspk/politech-awards-2026/pull/1)
- **Status**: merged
- **Author**: n/a
- **Date**: n/a
- **Top project**: [relationaltechproject.org](https://relationaltechproject.org)

#### Heuristic

Random score between 1 and 100

#### Rationale

n/a

#### Data sources

- project URL

#### Limitations

Entirely random; no meaningful evaluation of projects.

#### Assessment

n/a
