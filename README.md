# Political Technology Awards 2026

An open-source evaluation of 321 political technology projects by the [Newspeak House](https://newspeak.house) fellowship cohort, acting as an awards committee.

The committee iterates on a scoring algorithm through pull requests. Each PR proposes a new version of the heuristic that takes a project URL, scores it, and (eventually) produces a written assessment. The timeline of proposals and their outcomes forms the basis of the committee's public statement on process and legitimacy.

Run the current algorithm:

```
npx tsx the-algorithm.ts
```

Results are written to `results.json`.
The project longlist lives in `candidates.csv` (321 projects).

## How the Committee Works

- **Governance**: To join the Committee, add yourself to the [CODEOWNERS](./github/CODEOWNERS) file. Members comment on PRs; codeowners ensure consistency. Decisions by majority vote (excluding abstentions).
- **Cadence**: Meetings every two weeks until two weeks before the awards ceremony. Each meeting sets tasks for the next session.
- **Philosophy**: There is no perfect algorithm. Each iteration makes it a bit better — or meaningfully contests the last.
- **Exploration phase**: The committee is currently iterating, learning, and refining processes before committing to final approaches.

## How to Propose an Iteration

**You do not need to write code.** Describe your idea, and someone on the committee can implement it.

### The flow

1. **Open a PR** using the [iteration template](../../compare?template=iteration.md) — fill in two things:
   - **Heuristic**: one sentence describing what your scoring approach does
   - **Rationale**: why this is a good change, what values it encodes, any keywords or criteria, and its known blind spots
2. **Check the implementation box**: "just an idea" or "code is ready" — tag someone if you need help
3. **When the code is ready**, mark the PR as "Ready for review"
4. **The bot takes over**:
   - Runs the algorithm automatically
   - Auto-assigns a version number
   - Posts a comment with the top 5 projects and their scores
   - Detects what data sources the iteration uses
   - Updates `iterations.json` and this README
5. **The committee votes** — approve the PR to merge

### Adding new data

To add a new data source (scraped content, API data, survey results, etc.), use the [data collection template](../../compare?template=data-collection.md) instead.

## Iterations

<!-- ITERATIONS:START -->

| Version | Heuristic | Top Project | PR | Status |
|---------|-----------|-------------|-----|--------|
| v1 | Random score between 1 and 100 | relationaltechproject.org | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) | merged |
| v2 | Random base score (1-100) + inclusion bonus based on exclusion keywords in URL | dogooder.co | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) | merged |

### v2

- **Top project**: [dogooder.co](https://dogooder.co) (score: 100)
- **Heuristic**: Random base score (1-100) + inclusion bonus based on exclusion keywords in URL
- **Rationale**: The exclusion-focused scoring heuristic is intentionally a first pass: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions).
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

## Deliverables

### 31 March 2026 — Public Awards Ceremony

The committee hosts a public event at Newspeak Hall (https://luma.com/4j8zzq1s):
- Announcement of the winning projects
- A one-hour presentation on the process and algorithm
- Published on [2025.newspeak.house/awards](https://2025.newspeak.house/awards):
  - Link to this repo with the algorithm source code
  - A score (0–100%) and a **written assessment** for each project in the longlist
  - A joint statement of at least 3,000 words explaining the process and justifying the scores

### 5 April 2026 — Individual Reflections

Each committee member publishes a written reflection covering:
- Perspective on impact evaluation and the limits of automation
- How the committee developed its processes — what worked, what didn't
- Individual algorithm variations and standout projects

## Project Longlist

321 political technology projects in `candidates.csv`. Inclusion is not an endorsement. Some are mature and widely used; others are prototypes. The committee may value theory of change, uniqueness, or historical influence over concrete evidence of impact.

## Repo Structure

```
├── the-algorithm.ts       # The scoring algorithm (current: v2)
├── candidates.csv         # 321 project URLs
├── results.json           # Generated scores (run the algorithm to update)
├── iterations.json        # Structured metadata for all iterations (source of truth)
├── sync-readme.ts         # Regenerates the Iterations section from iterations.json
├── scripts/
│   └── iteration-bot.ts   # Bot: auto-version, run algo, post results on PRs
├── .github/
│   ├── workflows/
│   │   └── iteration-bot.yml   # GitHub Action that triggers the bot
│   └── PULL_REQUEST_TEMPLATE/
│       ├── iteration.md         # Template for algorithm iterations
│       └── data-collection.md   # Template for new data sources
├── package.json
└── tsconfig.json
```

---

## Technical Documentation

### Iteration Bot

The iteration bot is a GitHub Action (`.github/workflows/iteration-bot.yml`) backed by a TypeScript script (`scripts/iteration-bot.ts`). Its job is to automate everything a human shouldn't have to do manually when proposing an iteration.

#### Triggers

The bot runs when either of these happens on a PR:

| Trigger | When to use |
|---------|-------------|
| **PR marked "Ready for review"** | The normal flow — code is done, mark it ready, the bot takes over |
| **`run-bot` label added** | Re-run the bot after changes, or manually trigger on any PR |

The bot will not run on draft PRs.

#### What the bot does

When triggered, the workflow runs these steps in order:

1. **Checks out the PR branch** (not `main` — it works on the proposer's code)
2. **Installs dependencies** (`npm install`)
3. **Runs the algorithm** (`npx tsx the-algorithm.ts`) using the PR's version of `the-algorithm.ts`
4. **Runs the iteration bot script**, which:
   - **Parses the PR description** — extracts the `## Heuristic` and `## Rationale` sections from the PR body, stripping HTML comments
   - **Auto-assigns a version number** — reads `iterations.json`, finds the highest existing version, increments by 1. If the PR already has an entry (re-run), it keeps the same version
   - **Reads `results.json`** — pulls the top 5 highest-scoring projects
   - **Detects data sources** — scans `the-algorithm.ts` for patterns indicating what data the algorithm consumes (e.g., `fetch()` calls, LLM library imports, additional CSV/JSON files)
   - **Updates `iterations.json`** — adds or updates the entry for this PR
   - **Writes `bot-comment.md`** — the comment body that will be posted on the PR
5. **Syncs the README** (`npx tsx sync-readme.ts`) — regenerates the Iterations section from `iterations.json`
6. **Commits and pushes** — commits `iterations.json`, `README.md`, and `results.json` back to the PR branch as `iteration-bot[bot]`
7. **Posts a comment on the PR** with:
   - The auto-assigned version number
   - A table of the top 5 projects and their scores
   - Detected data sources
   - Next steps: asks the author for a written assessment and prompts the committee to vote

#### Data source detection

The bot scans `the-algorithm.ts` for patterns to infer what data the iteration uses:

| Pattern | Detected source |
|---------|----------------|
| `candidates.csv` | project URL |
| `fetch(`, `axios`, `got(`, `request(` | scraped content |
| `github.com.*api`, `octokit` | GitHub API |
| `openai`, `anthropic`, `claude`, `gpt`, `gemini` | LLM analysis |
| `.csv`, `.json`, `.tsv` (other than candidates.csv) | additional data files |

#### Re-runs

If the bot has already run on a PR (matched by PR number), re-triggering it (via the `run-bot` label) **updates the existing entry** in `iterations.json` rather than creating a duplicate. The version number stays the same.

#### Environment variables

The GitHub Action passes these to the bot script:

| Variable | Source |
|----------|--------|
| `PR_BODY` | The full PR description (markdown) |
| `PR_NUMBER` | The PR number (e.g. `3`) |
| `PR_URL` | The full GitHub URL of the PR |
| `PR_AUTHOR` | The GitHub username of the PR author |

### Voting Process

Voting happens through **GitHub PR reviews**. The process follows the committee's CODEOWNERS governance model:

1. The bot posts its results comment, which includes a checklist item asking the committee to review and vote
2. Committee members **approve** or **request changes** on the PR using GitHub's review system
3. A PR is merged when it has **majority approval from codeowners** (excluding abstentions)
4. When merged, the iteration's `pr_status` in `iterations.json` becomes the record of the committee's decision

> **Future automation**: A voting bot could be added to count approvals against the CODEOWNERS list and auto-merge when majority is reached, or to post a running tally as reviews come in. This would live in a separate workflow (e.g. `.github/workflows/voting-bot.yml`) triggered on `pull_request_review` events.

### sync-readme.ts

A utility script that regenerates the **Iterations** section of `README.md` from `iterations.json`. The rest of the README is left untouched.

#### How it works

The script looks for two HTML comment markers in `README.md`:

```
<!-- ITERATIONS:START -->
...everything between these markers is replaced...
<!-- ITERATIONS:END -->
```

It generates:
- A **summary table** of all iterations (version, heuristic, top project, PR link, status)
- **Detailed entries** for each iteration (most recent first), showing all available fields: top project, heuristic, rationale, data sources, keywords, limitations, author, date, and PR link

#### When it runs

| Context | Who runs it |
|---------|-------------|
| **On PRs** | The iteration bot runs it automatically after updating `iterations.json` |
| **Manually** | Run `npx tsx sync-readme.ts` locally if you've edited `iterations.json` by hand |

### iterations.json Schema

`iterations.json` is the single source of truth for all iteration metadata. It is consumed by `sync-readme.ts` (to generate the README), the iteration bot (to determine version numbers), and can be consumed by any external system (website, chat bot, etc.).

Each entry:

| Field | Type | Set by | Description |
|-------|------|--------|-------------|
| `version` | `string` | bot | Version label, e.g. `"v3"`. Auto-assigned based on highest existing version. |
| `date` | `string \| null` | bot | Date the bot ran (YYYY-MM-DD) |
| `author` | `string \| null` | bot | GitHub username of the PR author |
| `pr_number` | `number \| null` | bot | GitHub PR number. Also used to detect re-runs. |
| `pr_url` | `string \| null` | bot | Full URL to the PR |
| `pr_status` | `string \| null` | bot / manual | `"open"`, `"merged"`, or `"rejected"` |
| `top_project` | `object` | bot | `{ name, url, score }` — highest-scoring project under this heuristic |
| `heuristic` | `string` | bot (from PR) | One-line summary, parsed from the PR's `## Heuristic` section |
| `rationale` | `string \| null` | bot (from PR) | Parsed from the PR's `## Rationale` section |
| `data_sources` | `string[] \| null` | bot | Auto-detected from `the-algorithm.ts` |
| `keywords` | `string[] \| null` | manual | Specific keywords or criteria used, if any |
| `limitations` | `string \| null` | manual | Known blind spots (author should note in rationale) |
| `vote_result` | `string \| null` | manual | Outcome of committee vote, if recorded |
| `assessment_output` | `boolean` | bot / manual | Whether this iteration produces written assessments, not just scores |
