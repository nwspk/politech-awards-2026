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
- [Technical Details](docs/TECHNICAL.md) — bots, scripts, and data formats
- [Briefing Document](https://docs.google.com/document/d/14GgwyiA7t-AMRj4P5JFNijHXjATEQvQUvaxyIVZG-LA/edit?tab=t.0#heading=h.yyqjou9klunq) — full project guidelines

## Quick Start

```bash
npm install
npx tsx the-algorithm.ts   # runs the algorithm, writes results.json
```

Edit `the-algorithm.ts` to add your heuristic, then open a PR.

## Iterations

<!-- ITERATIONS:START -->

| Version | Heuristic | Top Project | PR |
|---------|-----------|-------------|-----|
| v1 | Random score between 1 and 100 | relationaltechproject.org | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) |
| v2 | Random base score (1-100) + inclusion bonus based on exclusion keywords in URL | civicmatch.app | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) |
| v3 | Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters. | benefits-calculator.turn2us.org.uk | [v3](https://github.com/nwspk/politech-awards-2026/pull/7) |
| v4 | Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords. | algorithmwatch.org | [v4](https://github.com/nwspk/politech-awards-2026/pull/9) |
| v5 | Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist. | github.com | [v5](https://github.com/nwspk/politech-awards-2026/pull/12) |

### v5

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

Read deliberation-summary.md to see the Stage 2 discussions between agents.
- **Data sources**: project URL, scraped content, additional data files
- **Limitations**: Approximately 280 of 321 projects receive a score of 5, 20, or 45 with no fine-grained distinction within those tiers. The current cached page content isn't very useful. The projects that models have former knowledge of rank much higher.

**The agents argue from page content + prior assessments.** The deliberation agents see extracted page text (3000 chars) and the evaluation summaries. This is better than nothing but still lossy — page text isn't the same as knowing what a project actually does in practice.

**All agents run on the same model** (x-ai/grok-4.1-fast). True independence would use different models or temperatures. The disagreements that emerge are real — rank spreads of 15–20 on contested projects, genuine score revisions in argument — but they're disagreements within one model's possibility space. Tried a range of models in the process but this one emerged as the cheapest and fastest while producing interesting analysis.

The evaluation framework reflects specific values — systemic change over symptom treatment, genuine experimentation over locked gospel, nourishment over extraction, stewardship over ego. Projects that score low may be genuinely valuable under different value weightings.

### v4

- **Top project**: [algorithmwatch.org](https://algorithmwatch.org) (score: 65)
- **Heuristic**: Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords.
- **Rationale**: v3 showed that URL-only matching yields almost no signal. This iteration fetches each project's homepage, caches the HTML, and uses the cached body to surface projects that explicitly discuss AI governance, safety, or policy. Sites that fail to fetch receive a penalty.
- **Data sources**: project URL, cached page body
- **Keywords**: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income, AI alignment, AI governance, AI safety
- **Limitations**: Requires cache to be populated (npm run cache:sites). AI bonus capped at 3 keyword matches × 5 points.
- **Proposed** by jcoombes on 2026-02-13
- **PR**: [v4](https://github.com/nwspk/politech-awards-2026/pull/9)

### v3

- **Top project**: [benefits-calculator.turn2us.org.uk](https://benefits-calculator.turn2us.org.uk) (score: 11)
- **Heuristic**: Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters.
- **Rationale**: v2 showed that keyword matching against URLs can surface relevant projects — but the random base score meant that it was different each time it was run, which isn't very reliable. This iteration removes randomness entirely to ask:  

**what can keyword clusters alone tell us about 321 projects when our only data source is a URL string?**


It turns out the answer is: almost nothing. Only 2 of 321 projects score above baseline. We can probably consider this a failure of our dataset which is only URLs.
- **Data sources**: project URL, additional data files
- **Proposed** by sugaroverflow on 2026-02-07
- **PR**: [v3](https://github.com/nwspk/politech-awards-2026/pull/7)

### v2

- **Top project**: [civicmatch.app](https://civicmatch.app) (score: 100)
- **Heuristic**: Random base score (1-100) + inclusion bonus based on exclusion keywords in URL
- **Rationale**: The exclusion-focused scoring heuristic is intentionally crude: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions).
- **Data sources**: project URL
- **Keywords**: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income
- **Limitations**: Only matches keywords in the URL string itself, not in actual project content. Many relevant projects won't have these keywords in their URL.
- **Proposed** by Asil on 2026-02-04
- **PR**: [v2](https://github.com/nwspk/politech-awards-2026/pull/2)

### v1

- **Top project**: [relationaltechproject.org](https://relationaltechproject.org)
- **Heuristic**: Random score between 1 and 100
- **Data sources**: project URL
- **Limitations**: Entirely random; no meaningful evaluation of projects.
- **PR**: [v1](https://github.com/nwspk/politech-awards-2026/pull/1)

<!-- ITERATIONS:END -->
