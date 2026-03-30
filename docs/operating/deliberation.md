# Deliberation PRs

How to run a committee deliberation iteration and get it onto the site correctly.

Deliberation PRs are different from standard iteration PRs: they don't run `the-algorithm.ts`. Instead, they report the output of a multi-agent committee process (Project Mirror v2 or similar) using an aggregation method (average, median rank, stdev) over per-member scores.

---

## Checklist

1. [ ] PR body has all required sections (see template)
2. [ ] `results.json` at repo root — 321 entries, winner at `[0]`, scores are **mean committee scores** (0–100 scale)
3. [ ] Agent names follow `[First]'s Agent` convention for named members, `Agent [Codename]` for pseudonymous
4. [ ] All analytical claims in the PR body are directly verifiable from the underlying CSV
5. [ ] No editorial sections that reframe or introduce secondary winners not derivable from the stated method
6. [ ] Add `iteration` label to trigger the bot

---

## results.json

The bot reads `results.json` from the repo root and takes `[0].score` as the displayed score on the site. This must be:

- **All 321 projects**, one entry per project
- **Sorted by mean committee score descending** — regardless of which metric determined the "winner" (average, median rank, stdev), always use the mean committee score as the score field
- **Winner at index 0** — manually reorder if needed so the version's winner is first

The mean committee score is always available from `committee-ranking-v{N}.csv` → `avg_score` column.

**Why mean score, not the aggregation metric?**
The site displays `Score: X.00` with no label. Median rank (e.g. 11) and stdev (e.g. 7.59) display as misleadingly low quality scores. Mean score is on the same 0–100 scale as all other iterations.

```json
[
  { "url": "https://example.com/winner", "score": 65.08 },
  { "url": "https://example.com/second", "score": 63.20 },
  ...
]
```

---

## Agent naming convention

| Member type | Format | Example |
|---|---|---|
| Named member | `[First]'s Agent` | `Tuna's Agent`, `Fatima's Agent` |
| Pseudonymous member | `Agent [Codename]` | `Agent Beacon`, `Agent Signal` |

Use this format consistently in: committee composition tables, per-agent score tables, and narrative references to the evaluator. Use the member's full name (`Tuna Acisu`) only when referring to the person being profiled, not the evaluator agent.

---

## PR body requirements

The iteration-details-updater bot parses these exact section headers:

- `## Title` — short display name (e.g. "On Reflection — LiquidFeedback holds")
- `## Heuristic` — one sentence describing the aggregation method
- `## Rationale` — why this aggregation, what it reveals
- `## Limitations` — known blind spots (equal weighting, score provenance, etc.)
- `## Assessment` — analytical narrative; must only make claims directly verifiable from the underlying CSV

The `## Assessment` section is what appears on the awards site. Keep it accurate and grounded in the data. Do not introduce secondary winners or reframe the method's result (e.g. "the real winner is X by a different metric" belongs in Rationale, not Assessment, if at all).

---

## Triggering the bot

The bot only runs when:
1. PR has the `iteration` label
2. PR is marked Ready for review (not draft)
3. `results.json` exists at the repo root

Add the label last, after everything else is in place. The bot will:
- Auto-assign the next version number
- Create `iterations/v{N}/README.md` from the PR body sections
- Snapshot `iterations/v{N}/results.json`
- Regenerate `iterations.json` (the site's data source)

---

## Score provenance

If per-agent scores in the PR narrative come from a snapshot that is no longer at the branch tip (e.g. a member's constitution was updated after aggregation), document this in `## Limitations`. Do not silently use scores that cannot be reproduced from current branch data.

If a member's version is updated after the aggregation was run, re-run the aggregation before merging.
