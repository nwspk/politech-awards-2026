# Political Technology Awards 2026

An open-source evaluation of 321 political technology projects by the [Newspeak House](https://newspeak.house) fellowship cohort.

The committee iterates on a scoring algorithm through pull requests. Each PR proposes a new heuristic that scores projects from the [longlist](candidates.csv). The timeline of proposals forms the basis of the committee's public statement on process and legitimacy.

## How It Works

1. **Propose** — Open a PR with your scoring idea (the template auto-fills). You don't need to write code — describe your heuristic and tag someone for help.
2. **Bot runs** — When the PR is marked "Ready for review", a bot runs the algorithm, posts results, and assigns a version number.
3. **Vote** — Committee members vote with 👍 / 👎 on the voting comment. Majority required within 48 hours.
4. **Merge or close** — Approved PRs get merged; rejected ones get closed.

## Contents

- [Quick Start](#quick-start) — run the algorithm locally
- [Iterations](#iterations) — history of all algorithm versions
- [Committee Process](PROCESS.md) — step-by-step details for opening a PR, voting, and deliverables
- [Technical Details](TECHNICAL.md) — bots, scripts, and data formats
- [Briefing Document](https://docs.google.com/document/d/14GgwyiA7t-AMRj4P5JFNijHXjATEQvQUvaxyIVZG-LA/edit?tab=t.0#heading=h.yyqjou9klunq) — full project guidelines

## Quick Start

```bash
npm install
npx tsx the-algorithm.ts   # runs the algorithm, writes results.json
```

Edit `the-algorithm.ts` to add your heuristic, then open a PR.

## Iterations

<!-- ITERATIONS:START -->

| Version | Heuristic | Top Project | PR | Status |
|---------|-----------|-------------|-----|--------|
| v1 | Random score between 1 and 100 | relationaltechproject.org | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) | merged |
| v2 | Random base score (1-100) + inclusion bonus based on exclusion keywords in URL | dogooder.co | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) | merged |
| v3 | Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters. | benefits-calculator.turn2us.org.uk | [v3](https://github.com/nwspk/politech-awards-2026/pull/6) | open |
| v4 | Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters. | benefits-calculator.turn2us.org.uk | [v4](https://github.com/nwspk/politech-awards-2026/pull/7) | open |

### v4

- **Top project**: [benefits-calculator.turn2us.org.uk](https://benefits-calculator.turn2us.org.uk) (score: 11)
- **Heuristic**: Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters.
- **Rationale**: v2 showed that keyword matching against URLs can surface relevant projects — but the random base score meant that it was different each time it was run, which isn't very reliable. This iteration removes randomness entirely to ask:  

**what can keyword clusters alone tell us about 321 projects when our only data source is a URL string?**

It turns out the answer is: almost nothing. Only 2 of 321 projects score above baseline. We can probably consider this a failure of our dataset which is only URLs.
- **Data sources**: project URL, additional data files
- **Proposed** by sugaroverflow on 2026-02-07
- **PR**: [v4](https://github.com/nwspk/politech-awards-2026/pull/7) (open)

### v3

- **Top project**: [benefits-calculator.turn2us.org.uk](https://benefits-calculator.turn2us.org.uk) (score: 11)
- **Heuristic**: Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters.
- **Rationale**: v2 showed that keyword matching against URLs can surface relevant projects — but the random base score meant that it was different each time it was run, which isn't very reliable. This iteration removes randomness entirely to ask:  

**what can keyword clusters alone tell us about 321 projects when our only data source is a URL string?**

It turns out the answer is: almost nothing. Only 2 of 321 projects score above baseline. We can probably consider this a failure of our dataset which is only URLs.
- **Data sources**: project URL, additional data files
- **Proposed** by sugaroverflow on 2026-02-07
- **PR**: [v3](https://github.com/nwspk/politech-awards-2026/pull/6) (open)

### v2

- **Top project**: [dogooder.co](https://dogooder.co) (score: 100)
- **Heuristic**: Random base score (1-100) + inclusion bonus based on exclusion keywords in URL
- **Rationale**: The exclusion-focused scoring heuristic is intentionally crude: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions).
- **Data sources**: project URL
- **Keywords**: benefits, housing, refugee, migrant, asylum, eviction, homeless, disability, accessibility, low-income
- **Limitations**: Only matches keywords in the URL string itself, not in actual project content. Many relevant projects won't have these keywords in their URL.
- **Proposed** by Asil on 2026-02-04
- **PR**: [v2](https://github.com/nwspk/politech-awards-2026/pull/2) (merged)

### v1

- **Top project**: [relationaltechproject.org](https://relationaltechproject.org)
- **Heuristic**: Random score between 1 and 100
- **Data sources**: project URL
- **Limitations**: Entirely random; no meaningful evaluation of projects.
- **PR**: [v1](https://github.com/nwspk/politech-awards-2026/pull/1) (merged)

<!-- ITERATIONS:END -->
