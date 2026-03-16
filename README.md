# Political Technology Awards 2026

The Political Technology Awards is an open evaluation exercise run by the 2025–26 [Newspeak House](https://newspeak.house) fellowship cohort. We're building a public, inspectable ranking of civic and political technology projects — the kind of tools that help citizens understand institutions, participate in democracy, and hold power to account.

**How we evaluate:** We use a scoring algorithm that evolves over time. Each version applies different heuristics (governance signals, civic impact, data completeness, etc.) and produces a ranked list from our [longlist](candidates.csv) of 321 projects. The algorithm lives in this repo; you can inspect the code, the pull requests, and the rationale for every change. We may add written assessments per project as the evaluation matures.

**Why this matters:** Rankings are political. By making our process transparent and iterative, we hope to surface both strong projects and the tradeoffs inherent in any evaluation framework.

The committee iterates on the algorithm through pull requests. Each PR proposes a new heuristic; the timeline of proposals forms the basis of our public statement on process and legitimacy.

## Contents

- [Quick Start](#quick-start) — run the algorithm locally
- [Operating docs](#operating-docs) — committee workflow and automation references
- [Timeline logs](#timeline-logs) — process, iteration, and data logs for /awards rendering
- [Process progress](#process-progress) — key meetings, decisions, and open tradeoffs
- [Data progress](#data-progress) — how we've improved project data over time (cache → data dump → enriched dossiers)
- [Iterations](#iterations) — history of all algorithm versions
- [Briefing Document](https://docs.google.com/document/d/14GgwyiA7t-AMRj4P5JFNijHXjATEQvQUvaxyIVZG-LA/edit?tab=t.0#heading=h.yyqjou9klunq) — full project guidelines

## How It Works

1. **Propose** — Have an idea but no code? Open a [Heuristic suggestion](https://github.com/nwspk/politech-awards-2026/issues/new?template=heuristic-suggestion.md) issue (same fields as the PR template), then tag **@sugaroverflow** to implement it. If you're ready with code, open a PR — the template auto-fills.
2. **Bot runs** — When the PR is marked "Ready for review", a bot runs the algorithm, posts results, and assigns a version number.
3. **Vote** — Committee members vote with 👍 / 👎 on the voting comment. Majority of those who vote wins; abstentions don't count. PR author (if in the committee) counts as yes when abstaining.
4. **Merge or close** — Approved PRs get merged; rejected ones get closed.

## Quick Start

```bash
npm install
npx tsx the-algorithm.ts   # runs the algorithm, writes results.json
```

Edit `the-algorithm.ts` to add your heuristic, then open a PR.

## Operating docs

Operating docs (rules/reference):
- **Committee process**: [docs/operating/process.md](docs/operating/process.md) — proposal flow, voting rules, labels, and deliverables
- **Technical reference**: [docs/operating/technical.md](docs/operating/technical.md) — bot triggers, scripts, and iteration data model

## Timeline logs

Canonical historical logs (timeline/history):

| Log | What it contains | Canonical file |
|---|---|---|
| Process | Full meeting notes, decision and rationale entries, unresolved tradeoffs | [docs/logs/process-log.md](docs/logs/process-log.md) |
| Iterations | Full heuristic/rationale/limitations/assessment records for each iteration of the awards evaluation | [docs/logs/iterations-log.md](docs/logs/iterations-log.md) |
| Data gathering | Source changes, cleaning/normalization passes, coverage/quality notes, known gaps | [docs/logs/data-log.md](docs/logs/data-log.md) |

## Process progress

Recent checkpoints from the canonical process log:

| Date | Meeting | Focus | Related PRs / logs | Full notes |
|---|---|---|---|---|
| 2026-02-04 | Committee kickoff | Governance model, cadence, action planning | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) | [Entry](docs/logs/process-log.md#2026-02-04-1800) |
| 2026-03-04 | Impromptu early meeting | Data scarcity impacts on ranking quality and branch experiments | [v4](https://github.com/nwspk/politech-awards-2026/pull/9), [v5](https://github.com/nwspk/politech-awards-2026/pull/12) | [Entry](docs/logs/process-log.md#2026-03-04-1715-impromptu-early-meeting) |
| 2026-03-13 | Impromptu | Enrichment merge review, scoring/lens ideas, showcase planning | [v6](https://github.com/nwspk/politech-awards-2026/pull/15), [Data Attempt 3](docs/logs/data-log.md#attempt-3-enriched-dossiers-era) | [Entry](docs/logs/process-log.md#2026-03-13-1700-impromptu) |
| 2026-03-15 | Impromptu with Ed/Hannah | Citation quality, low-quality dossiers follow-up, typology + theory-of-change | [Data log](docs/logs/data-log.md) | [Entry](docs/logs/process-log.md#2026-03-15-impromptu) |

## Data progress

Recent checkpoints from the canonical data log:

| Attempt | Data shape | Coverage | Strengths | Limits | PR links | Log entry |
|---|---|---|---|---|---|---|
| 1 — Cache-first | Raw homepage cache + pipeline outputs in `cache/` | Broad page fetch coverage from v4 onward | Reproducible reruns; faster heuristic/deliberation iteration | Ephemeral and thin: model outputs + raw bodies, not stable dossiers | [v4](https://github.com/nwspk/politech-awards-2026/pull/9), [v5](https://github.com/nwspk/politech-awards-2026/pull/12) | [Attempt 1](docs/logs/data-log.md#attempt-1-cache-first-era) |
| 2 — Data dump | Flat CSV (`candidates-with-data.csv`) with basic metadata | ~80 / 321 projects | Better than URL-only scoring; improved baseline legibility | Partial coverage and ad-hoc schema | [v3](https://github.com/nwspk/politech-awards-2026/pull/7) | [Attempt 2](docs/logs/data-log.md#attempt-2-flat-data-dump-era) |
| 3 — Enriched dossiers (current) | Per-project JSON dossiers in `data/enriched/<slug>.json` | 321 / 321 dossiers | Shared schema, richer evidence fields, and verification passes | Evidence quality still constrained by web availability and source links | [v6](https://github.com/nwspk/politech-awards-2026/pull/15) | [Attempt 3](docs/logs/data-log.md#attempt-3-enriched-dossiers-era) |


## Iterations

Quick links into detailed iteration log entries (canonical full records):
- [v1](docs/logs/iterations-log.md#v1-random-scoring)
- [v2](docs/logs/iterations-log.md#v2-exclusion-keyword-bonus)
- [v3](docs/logs/iterations-log.md#v3-keyword-clusters-no-randomness)
- [v4](docs/logs/iterations-log.md#v4-ai-governance-body-bonus)
- [v5](docs/logs/iterations-log.md#v5-three-agent-itn-a-deliberation)
- [v6](docs/logs/iterations-log.md#v6-six-jury-itn-a-deliberation)

<!-- ITERATIONS:START -->

_Bot-maintained summary. Full records: [docs/logs/iterations-log.md](docs/logs/iterations-log.md)_

| Version | Date | Status | Top Project | PR | Full log |
|---------|------|--------|-------------|----|----------|
| v1 | n/a | merged | relationaltechproject.org | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) | [entry](docs/logs/iterations-log.md) |
| v2 | 2026-02-04 | merged | civicmatch.app | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) | [entry](docs/logs/iterations-log.md) |
| v3 | 2026-02-07 | merged | benefits-calculator.turn2us.org.uk | [v3](https://github.com/nwspk/politech-awards-2026/pull/7) | [entry](docs/logs/iterations-log.md) |
| v4 | 2026-02-13 | merged | algorithmwatch.org | [v4](https://github.com/nwspk/politech-awards-2026/pull/9) | [entry](docs/logs/iterations-log.md) |
| v5 | 2026-02-22 | merged | github.com | [v5](https://github.com/nwspk/politech-awards-2026/pull/12) | [entry](docs/logs/iterations-log.md) |
| v6 | 2026-03-09 | open | algorithmwatch.org | [v6](https://github.com/nwspk/politech-awards-2026/pull/15) | [entry](docs/logs/iterations-log.md) |

<!-- ITERATIONS:END -->
