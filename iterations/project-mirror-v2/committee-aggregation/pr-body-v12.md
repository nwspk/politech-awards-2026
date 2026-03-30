## Title
On Balance — Mirror Agents Committee Average, median rank

## Heuristic
For each project, compute the median of its rank position across all 17 members' v11 scores (14×v2 + 3×v3). Projects are ordered by median rank ascending — lower is better. Ties broken by mean rank.

## Rationale
Mean score rewards projects that a few members champion very highly, even if most members are indifferent. Median rank asks a different question: which projects does the typical evaluator place highest? It is more robust to outliers and suppresses projects that win on the strength of one or two superfans.

## Limitations
- Median rank discards score magnitude — a project ranked #1 with 94 points and one ranked #1 with 52 points are treated identically
- Projects not scored by a member are excluded from their rank contribution, which slightly favours projects with full 17/17 coverage
- The v11 score set is used as input (14×v2 + 3×v3), so this inherits v11's constitution mix

## Assessment
**Winner: Open Data Editor (ODE) — median rank 12 (mean rank 31.5, coverage 17/17)**

Under median rank, Open Data Editor displaces LiquidFeedback for the first time. LiquidFeedback's mean-score dominance relies on three members scoring it in the 80s and 90s — but its median rank of 16 reveals that the typical evaluator places it outside their top 15. ODE, by contrast, lands in most members' top 10–15 without any single member dragging it down. The top five is a mix of participation infrastructure (LiquidFeedback, Decidim, CONSUL Democracy) and civic data tooling (ODE, mySociety), suggesting the committee is broadly split between these two orientations.

**Top 5:**
| Rank | Project | Median Rank | Mean Rank | Coverage |
|------|---------|-------------|-----------|----------|
| 1 | Open Data Editor (ODE) | 12.0 | 31.5 | 17/17 |
| 2 | LiquidFeedback | 16.0 | 22.8 | 17/17 |
| 3 | CONSUL Democracy | 19.0 | 37.0 | 17/17 |
| 4 | mySociety Datasets and APIs | 20.0 | 30.5 | 17/17 |
| 5 | Decidim | 20.0 | 39.4 | 17/17 |

Full ranking: `iterations/project-mirror-v2/committee-aggregation/committee-ranking-v12.csv`

## Implementation
- [x] Code is ready to review
