# Political Technology Awards 2026

The Political Technology Awards is an open evaluation exercise run by the 2025–26 [Newspeak House](https://newspeak.house) fellowship cohort. We're building a public, inspectable ranking of civic and political technology projects — the kind of tools that help citizens understand institutions, participate in democracy, and hold power to account.

**How we evaluate:** We use a scoring algorithm that evolves over time. Each version applies different heuristics (governance signals, civic impact, data completeness, etc.) and produces a ranked list from our [longlist](candidates.csv) of 321 projects. The algorithm lives in this repo; you can inspect the code, the pull requests, and the rationale for every change. We may add written assessments per project as the evaluation matures.

**Why this matters:** Rankings are political. By making our process transparent and iterative, we hope to surface both strong projects and the tradeoffs inherent in any evaluation framework.

The committee iterates on the algorithm through pull requests. Each PR proposes a new heuristic; the timeline of proposals forms the basis of our public statement on process and legitimacy.

## How It Works

1. **Propose** — Have an idea but no code? Open a [Heuristic suggestion](https://github.com/nwspk/politech-awards-2026/issues/new?template=heuristic-suggestion.md) issue (same fields as the PR template), then tag **@sugaroverflow** to implement it. If you're ready with code, open a PR — the template auto-fills.
2. **Bot runs** — When the PR is marked "Ready for review", a bot runs the algorithm, posts results, and assigns a version number.
3. **Vote** — Committee members vote with 👍 / 👎 on the voting comment. Majority of those who vote wins; abstentions don't count. PR author (if in the committee) counts as yes when abstaining.
4. **Merge or close** — Approved PRs get merged; rejected ones get closed.

## Contents

- [Quick Start](#quick-start) — run the algorithm locally
- [Iterations](#iterations) — history of all algorithm versions
- [Committee Process](docs/PROCESS.md) — step-by-step details for opening a PR, voting, and deliverables
- [Technical Documentation](docs/TECHNICAL.md) — bots, scripts, labels, and reference
- [Briefing Document](https://docs.google.com/document/d/14GgwyiA7t-AMRj4P5JFNijHXjATEQvQUvaxyIVZG-LA/edit?tab=t.0#heading=h.yyqjou9klunq) — full project guidelines

## Quick Start

```bash
npm install
npx tsx the-algorithm.ts   # runs the algorithm, writes results.json
```

Edit `the-algorithm.ts` to add your heuristic, then open a PR.

## Iterations

<!-- ITERATIONS:START -->

| Version | Title | Heuristic | Top Project | PR |
|---------|-------|-----------|-------------|-----|
| v1 | Random scoring | Random score between 1 and 100 | relationaltechproject.org | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) |
| v2 | Exclusion keyword bonus | Random base score (1-100) + inclusion bonus based on exclusion keywords in URL | civicmatch.app | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) |
| v3 | Keyword clusters (no randomness) | Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters. | benefits-calculator.turn2us.org.uk | [v3](https://github.com/nwspk/politech-awards-2026/pull/7) |
| v4 | AI governance body bonus | Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords. | algorithmwatch.org | [v4](https://github.com/nwspk/politech-awards-2026/pull/9) |
| v5 | Three-agent ITN/A deliberation | Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist. | github.com | [v5](https://github.com/nwspk/politech-awards-2026/pull/12) |
| v6 | This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heur | This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heuristic](https://github.com/nwspk/politech-awards-2026/pull/12) with 6 independent AI juries that run an ITN/A deliberation on a shortlist of 183 projects. The jury with the highest confidence score picks the project winner.

V6 inherits the full ITN/A evaluation and deliberation pipeline from v5 — the same 4-agent structure (political, relational, experimental), the same multi-argument format with a facilitator, and the same scoring tiers (deliberated: 51–90, 2+ greens: 45, 1 green: 20, none: 5).

The changes are in **who runs the jury, how the shortlist is built, and how the winner is selected.**

Total pipeline spend: **$11.30 USD**

### Phase 1: Evaluation

Grok 4.1 Fast, Claude Sonnet 4, and Kimi 2.5 independently evaluate all **321 candidates** across three lenses: political, relational, and experimental. Each assessment produces a bucket (green / yellow / red / grey) and a rationale per dimension.

### Phase 2: Shortlist

Shortlist rule: at least **2 of the 3 models rated the project green or yellow in any dimension.**

This **2-of-3 rule produced 183 candidates.**

### Phase 3: Six Jury Deliberations

The three original models deliberate on their own evaluation data (each model reads only its own assessments). Each jury runs the full ITN/A multi-agent deliberation — agents argue, contest, revise scores, and produce a ranked shortlist with a winner, confidence score, and case for/against.

Original juries:

- Grok 4.1 Fast  
- Claude Sonnet 4  
- Kimi 2.5  

Three mixed juries deliberate from the **merged assessments** (intersection of the models' shortlists):

- GPT-4o — representing the mainstream / average voter  
- DeepSeek-R1 — representing the adversarial / contrarian  
- A specialist panel  
  - Gemini 2.5 Pro on political  
  - Llama 3.3 70B on relational  
  - Mistral Large on experimental  

### Phase 4: Promotion

The six jury verdicts are compared by confidence score. The highest-confidence jury is promoted and selects the final award winner.

--- | algorithmwatch.org | [v6](https://github.com/nwspk/politech-awards-2026/pull/15) |

### v6 — This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heur

- **Top project**: [algorithmwatch.org](https://algorithmwatch.org) (score: 97)
- **Heuristic**: This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heuristic](https://github.com/nwspk/politech-awards-2026/pull/12) with 6 independent AI juries that run an ITN/A deliberation on a shortlist of 183 projects. The jury with the highest confidence score picks the project winner.

V6 inherits the full ITN/A evaluation and deliberation pipeline from v5 — the same 4-agent structure (political, relational, experimental), the same multi-argument format with a facilitator, and the same scoring tiers (deliberated: 51–90, 2+ greens: 45, 1 green: 20, none: 5).

The changes are in **who runs the jury, how the shortlist is built, and how the winner is selected.**

Total pipeline spend: **$11.30 USD**

### Phase 1: Evaluation

Grok 4.1 Fast, Claude Sonnet 4, and Kimi 2.5 independently evaluate all **321 candidates** across three lenses: political, relational, and experimental. Each assessment produces a bucket (green / yellow / red / grey) and a rationale per dimension.

### Phase 2: Shortlist

Shortlist rule: at least **2 of the 3 models rated the project green or yellow in any dimension.**

This **2-of-3 rule produced 183 candidates.**

### Phase 3: Six Jury Deliberations

The three original models deliberate on their own evaluation data (each model reads only its own assessments). Each jury runs the full ITN/A multi-agent deliberation — agents argue, contest, revise scores, and produce a ranked shortlist with a winner, confidence score, and case for/against.

Original juries:

- Grok 4.1 Fast  
- Claude Sonnet 4  
- Kimi 2.5  

Three mixed juries deliberate from the **merged assessments** (intersection of the models' shortlists):

- GPT-4o — representing the mainstream / average voter  
- DeepSeek-R1 — representing the adversarial / contrarian  
- A specialist panel  
  - Gemini 2.5 Pro on political  
  - Llama 3.3 70B on relational  
  - Mistral Large on experimental  

### Phase 4: Promotion

The six jury verdicts are compared by confidence score. The highest-confidence jury is promoted and selects the final award winner.

---
- **Rationale**: v5 showed us that a single deliberating agent via Grok could produce a well-reasoned winner (one that made sense in an obvious political-tech-award sort of way), but left an open question:

> is the result robust to model choice?  
> Do different AI “worldviews” produce the same answer?

v6 tests this theory.

Three original juries read their own evaluation data. The three mixed juries read merged assessments and deliberately introduce different perspectives: GPT-4o as a mainstream / institutional voice, DeepSeek-R1 as a contrarian with different political training data, and a specialist panel routing each evaluation lens (political, relational, experimental) to a purpose-fit model.

### Confidence Scoring

Winner selection is based on the **confidence score** — the jury that is most certain of its verdict wins.

I was surprised to find this was **Grok 4.1 Fast again**, as with the assessment in v5. It was also the cheapest and fastest model while still producing interesting analysis.

---
- **Data sources**: project URL, scraped content, additional data files
- **Limitations**: - Confidence is self-reported by the deliberating model. A model that is overconfident by nature will win regardless of the reasoning and coherence of arguments (is this the case with Grok?)
- Claude's calibration asymmetry skews the Claude jury's deliberation pool to a very narrow shortlist, which likely explains its low confidence (42/100). This may not be a fair comparison.
- Merged assessments for mixed juries use the **most optimistic bucket per dimension**, which biases mixed juries toward charitable readings of projects.
- The specialist panel (different model per lens) is experimental — there is no prior evidence that routing lenses to different models improves deliberation quality versus a single capable model.
- All six juries picked a **different winner**. This is honest, but means the result is sensitive to which jury gets promoted. The committee may want to treat the full set of verdicts as equally valid competing perspectives rather than deferring to the confidence winner.
- Technical issues:
  - The project ran on a VPS with a Nanoclaw agent managing the pipeline overnight.
  - **Kimi 2.5 was the least reliable model**, repeatedly stalling during evaluation and requiring manual restarts and re-runs.
  - Several container resets mid-run meant partial progress was lost and some evaluations were re-run from scratch.
  - The full deliberation phase took **~6h 38m (14:40–21:18 UTC)**.
  - Total cost was approximately **$11.30**, mostly from re-runs caused by stalling.

---
- **Assessment**: You can read human-readable Markdown summaries of all six jury deliberations in the  
[jury README](/nwspk/politech-awards-2026/blob/main/iterations/v6/jury-delegations/README.md)

The most striking result is that **all six juries disagreed on their winners:**

- Grok — AlgorithmWatch (95 confidence)
- Specialist Mixed Jury — Alaveteli (90 confidence)
- Adversarial — SlopStop (85 confidence)
- Kimi — Worker Info Exchange (82 confidence)
- Mixed Jury — Bellingcat Toolkit (75 confidence)
- Claude — Awesome Gov Datasets (42 confidence)

Different AI training backgrounds appear to encode different political values:

- Grok emphasises systemic advocacy and evidence-to-policy pipelines
- DeepSeek gravitates toward decentralised infrastructure
- The specialist panel favours civic access tools with proven relational networks

AlgorithmWatch as the promoted winner (score 97, confidence 95) is defensible: it scored near-uniformly high across all three evaluation lenses (political 98, relational 97, experimental 97) and was **contested**, meaning it survived challenge.

---

### Findings & Reflections

#### Why is it always Grok lol 

While Grok performed well on v5, I wondered if it would perform well against some other model juries and was surprised to find it "on top" with the highest confidence scores. This led me down discovering that Grok is likely trained to be opinionated - if it's corpus of data is the Twitter/X debates. Is it such that this task structure suits Grok's design - high velocity, high conviction, argument format (sound familiar? lol twitter thread debates).  The confidence score Grok reports (95/100) might just reflect that Grok is more willing to say it's confident, the same way Claude is less willing to say something is green. The ITN/A deliberation (make a case, contest, revise) might just be a format Grok is natively good at (something to explore!). 

#### Claude (claude-sonnet-4-6) is structurally conservative as an evaluator

| Model | Greens | Green+Yellow |
|------|------|------|
| Grok | 120 | 191 |
| Kimi | 33 | 230 |
| Claude | 3 | 92 |

Claude assigned **green to only 3 / 321 projects**, compared with Grok assigning 120.

The shortlist rule was originally a **union of green projects**, but had to be redesigned after evaluation. Research into Claude Sonnet 4 suggests this behaviour is related to RLHF calibration around political statements and alignment. The shortlist rule was therefore changed to the **2-of-3 model rule**, widening the pool to **183 projects**.

#### Shortlist rule design

Goal: roughly **100 projects** (~⅓ of the dataset).

| Strategy | Count | Verdict |
|----------|-------|---------|
| Union — any model green or yellow | 242 | Too loose; single-model noise included |
| **2-of-3 — at least 2 models green or yellow** | **183** | ✅ Chosen |
| Intersection — all 3 models green or yellow | 88 | Too tight; Claude’s conservative calibration removes too many |

**Rule chosen:** A project enters the shortlist if **at least 2 of the 3 models** rated it green or yellow in any dimension.

#### Jury Structure

Original juries (each reads its own evaluation data):

| Jury | Model | Assessments |
|------|------|-------------|
| grok | x-ai/grok-4.1-fast | assessments-grok.json |
| claude | anthropic/claude-sonnet-4-6 | assessments-all-claude.json |
| kimi | moonshotai/kimi-k2 | assessments-all-kimi.json |

**Mixed juries (read merged assessments):**

| Jury | Model(s) | Rationale |
|------|------|------|
| mixed | openai/gpt-4o | mainstream / institutional perspective |
| adversarial | deepseek/deepseek-r1 | contrarian political training data |
| specialist | gemini-2.5-pro + llama-3.3-70b + mistral-large | per-lens specialists |

Winner selection compares `winner.confidence` across all six deliberation outputs.

---

### Open Questions

- Claude's calibration asymmetry is worth discussing: does RLHF conservatism reflect a different political epistemology, or just noise? The adversarial (DeepSeek) jury is an interesting contrast.
- The specialist jury (per-lens model specialisation) is experimental - there is no prior evidence that routing political/relational/experimental to different models improves deliberation quality.
- Confidence scores across juries will tell us how contested the winner is. High variance = interesting; low variance = robust consensus.
- Open expansions to still experiment with from [the v5 iteration](https://github.com/nwspk/politech-awards-2026/pull/12)
- I would personally like to try a different framework to test my reflections on Grok vs Claude on deliberations and confidence.
- **Proposed** by @sugaroverflow on 2026-03-09
- **PR**: [v6](https://github.com/nwspk/politech-awards-2026/pull/15)

---

### v5 — Three-agent ITN/A deliberation

- **Top project**: [github.com](https://github.com/g0v/vue.vtaiwan.tw) (score: 90)
- **Heuristic**: Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist.
- **Rationale**: v5 changes the question from "does this project match criteria" to "does this project make sense to three evaluators who are forced to argue with each other."

The pipeline has two stages:

**Stage 1 — Evaluation** (`scripts/itn-a-eval.ts`): Each of the 321 projects is assessed independently by three agents: political (power lens), relational (care lens), experimental (epistemics lens) — each applying the full ITN/A protocol: self-check, four lenses with spectrum positioning, felt sense, then a bucket assignment (green / yellow / red / grey). Results cached to `cache/assessments.json` (this is ~39k lines and took a good few hours to run).

**Stage 2 — Deliberation** (`scripts/itn-a-deliberate.ts`): The projects that reached green consensus across all three agents enter a deliberation round. Agents score all 21 *relative to each other* with full page content available — not against an abstract rubric but against the actual field. The top conflicts by rank spread are then argued in multi-turn conversation (3 turns each, with a facilitator between turns who calls out evasion). Final scores reflect where positions settled after argument. Results cached to `cache/deliberation.json`.

**Scoring in the-algorithm.ts**:
- Deliberated projects: their argument-settled aggregate score (range in this run: 51–90)
- 2+ green assessments, not deliberated: 45
- 1 green assessment: 20
- 0 greens / grey / red: 5

The numeric scores should be read as *ordinal*, not cardinal — 90 means "won the deliberation," not "90% good." The gap between tiers (90 → 45 → 20 → 5) is intentionally large; the ranking within each tier is what matters.

**Winner this run: vTaiwan (g0v)**

vTaiwan ranked first in the deliberation — the agents converged on it as the project that most fully embodies political technology in 2026: proven participatory infrastructure, real policy impact (Uber regulation, same-sex marriage), and genuinely open forks (Poland, France). The case against: Taiwan-centric origins, uncertain scaling to low-trust or non-digital-first contexts.

See **[Documents](#documents)** below for the Stage 2 deliberation summary and raw outputs.
- **Data sources**: project URL, scraped content, additional data files
- **Limitations**: Approximately 280 of 321 projects receive a score of 5, 20, or 45 with no fine-grained distinction within those tiers. The current cached page content isn't very useful. The projects that models have former knowledge of rank much higher.

**The agents argue from page content + prior assessments.** The deliberation agents see extracted page text (3000 chars) and the evaluation summaries. This is better than nothing but still lossy — page text isn't the same as knowing what a project actually does in practice.

**All agents run on the same model** (x-ai/grok-4.1-fast). True independence would use different models or temperatures. The disagreements that emerge are real — rank spreads of 15–20 on contested projects, genuine score revisions in argument — but they're disagreements within one model's possibility space. Tried a range of models in the process but this one emerged as the cheapest and fastest while producing interesting analysis.

The evaluation framework reflects specific values — systemic change over symptom treatment, genuine experimentation over locked gospel, nourishment over extraction, stewardship over ego. Projects that score low may be genuinely valuable under different value weightings.
- **Assessment**: to be completed

---

*Files added/modified:*
- `scripts/the-algorithm.ts` — v5 heuristic added, `CURRENT_HEURISTIC` switched to `heuristicV5`
- `scripts/itn-a-eval.ts` — new: three-agent ITN/A evaluation pipeline
- `scripts/itn-a-deliberate.ts` — new: multi-turn deliberation with relative scoring and facilitator
- `iterations/v5/` — snapshot of v5 deliverables (deliberation summary, deliberation.json, assessments.json) so future runs don’t overwrite them
- `cache/assessments.json` — evaluation outputs for all 321 projects (live cache; v5 snapshot in `iterations/v5/assessments.json`)
- `cache/deliberation.json` — deliberation outputs (live cache; v5 snapshot in `iterations/v5/deliberation.json`)
- **Proposed** by @Gamithra on 2026-02-22
- **PR**: [v5](https://github.com/nwspk/politech-awards-2026/pull/12)

---

### v4 — AI governance body bonus

- **Top project**: [algorithmwatch.org](https://algorithmwatch.org) (score: 65)
- **Heuristic**: Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords.
- **Rationale**: v3 showed that URL-only matching yields almost no signal. This iteration fetches each project's homepage, caches the HTML, and uses the cached body to surface projects that explicitly discuss AI governance, safety, or policy. Sites that fail to fetch receive a penalty.
- **Data sources**: project URL, cached page body
- **Keywords**: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income, AI alignment, AI governance, AI safety
- **Limitations**: Requires cache to be populated (npm run cache:sites). AI bonus capped at 3 keyword matches × 5 points.
- **Proposed** by @jcoombes on 2026-02-13
- **PR**: [v4](https://github.com/nwspk/politech-awards-2026/pull/9)

---

### v3 — Keyword clusters (no randomness)

- **Top project**: [benefits-calculator.turn2us.org.uk](https://benefits-calculator.turn2us.org.uk) (score: 11)
- **Heuristic**: Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters.
- **Rationale**: v2 showed that keyword matching against URLs can surface relevant projects — but the random base score meant that it was different each time it was run, which isn't very reliable. This iteration removes randomness entirely to ask:

**what can keyword clusters alone tell us about 321 projects when our only data source is a URL string?**

It turns out the answer is: almost nothing. Only 2 of 321 projects score above baseline. We can probably consider this a failure of our dataset which is only URLs.
- **Data sources**: project URL, additional data files
- **Proposed** by @sugaroverflow on 2026-02-07
- **PR**: [v3](https://github.com/nwspk/politech-awards-2026/pull/7)

---

### v2 — Exclusion keyword bonus

- **Top project**: [civicmatch.app](https://civicmatch.app) (score: 100)
- **Heuristic**: Random base score (1-100) + inclusion bonus based on exclusion keywords in URL
- **Rationale**: The exclusion-focused scoring heuristic is intentionally crude: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions).
- **Data sources**: project URL
- **Keywords**: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income
- **Limitations**: Only matches keywords in the URL string itself, not in actual project content. Many relevant projects won't have these keywords in their URL.
- **Proposed** by @Asil on 2026-02-04
- **PR**: [v2](https://github.com/nwspk/politech-awards-2026/pull/2)

---

### v1 — Random scoring

- **Top project**: [relationaltechproject.org](https://relationaltechproject.org)
- **Heuristic**: Random score between 1 and 100
- **Data sources**: project URL
- **Limitations**: Entirely random; no meaningful evaluation of projects.
- **PR**: [v1](https://github.com/nwspk/politech-awards-2026/pull/1)

<!-- ITERATIONS:END -->
