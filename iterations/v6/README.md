---
title: "This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heur"
author: "@sugaroverflow"
date: "2026-03-09"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/15"
version: v6
pr_number: 15
pr_status: "open"
top_project:
  name: "algorithmwatch.org"
  url: "https://algorithmwatch.org"
  score: 97
---

## Heuristic

This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heuristic](https://github.com/nwspk/politech-awards-2026/pull/12) with 6 independent AI juries that run an ITN/A deliberation on a shortlist of 183 projects. The jury with the highest confidence score picks the project winner.

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

## Rationale

v5 showed us that a single deliberating agent via Grok could produce a well-reasoned winner (one that made sense in an obvious political-tech-award sort of way), but left an open question:

> is the result robust to model choice?  
> Do different AI “worldviews” produce the same answer?

v6 tests this theory.

Three original juries read their own evaluation data. The three mixed juries read merged assessments and deliberately introduce different perspectives: GPT-4o as a mainstream / institutional voice, DeepSeek-R1 as a contrarian with different political training data, and a specialist panel routing each evaluation lens (political, relational, experimental) to a purpose-fit model.

### Confidence Scoring

Winner selection is based on the **confidence score** — the jury that is most certain of its verdict wins.

I was surprised to find this was **Grok 4.1 Fast again**, as with the assessment in v5. It was also the cheapest and fastest model while still producing interesting analysis.

---

## Data sources

- project URL
- scraped content
- additional data files

## Limitations

- Confidence is self-reported by the deliberating model. A model that is overconfident by nature will win regardless of the reasoning and coherence of arguments (is this the case with Grok?)
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

## Assessment

You can read human-readable Markdown summaries of all six jury deliberations in the [jury README]([nwspk/politech-awards-2026/blob/main/iterations/v6/jury-delegations/README.md)

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
