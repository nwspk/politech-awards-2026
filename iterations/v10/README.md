---
title: "Prima Facie — LiquidFeedback wins the Mirror Agent's Committee's first read using Average"
author: "@sugaroverflow"
date: "2026-03-29"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/90"
version: v10
pr_number: 90
pr_status: "merged"
top_project:
  name: "LiquidFeedback"
  url: "https://liquidfeedback.com"
  score: 64.98
---

## Heuristic

Simple mean of all 18 members' scores per project, equally weighted — pure v2 constitutional rankings, no iteration substitutions.

## Rationale

The committee's first read — 18 agents (17 fellows + synthetic Harbour), all on their original v2 constitutions, simple average. No iteration, no reflection. Just: what does the synthetic committee say when you take everyone at face value?

Equal weighting treats each evaluator as a peer. v10 is the clean pre-iteration baseline; three members later iterated to v3 constitutions — see v11 (PR #100).

## Limitations

- All 18 inputs are weighted equally regardless of evidence confidence or dossier quality
- The Harbour agent contributes rankings only — no written constitution or criteria chain to audit
- Stdev values above 15 indicate significant disagreement; wins built on advocate outliers, not consensus
- Hannah O'Rourke's v2 ranking was included but her PR was experimental — see v11 for the 17-member read after she was excluded

## Assessment

**Winner: LiquidFeedback — 64.98 avg (stdev 15.96, coverage 18/18)**

LiquidFeedback leads across 18 diverse constitutions. The win is built on a combination of passionate advocates (Davit: 94.4, Alessandro: 86.9) and broad map-ability — liquid delegation addresses apathy/representation at a system level, open source and jurisdiction-independent.

**Top 5:**
| Rank | Project | Avg | Stdev | Coverage |
|------|---------|-----|-------|----------|
| 1 | LiquidFeedback | 64.98 | 15.96 | 18/18 |
| 2 | Open Data Editor (ODE) | 62.69 | 14.06 | 18/18 |
| 3 | mySociety Datasets and APIs | 61.47 | 12.56 | 18/18 |
| 4 | Alaveteli | 59.85 | 13.42 | 18/18 |
| 5 | Open Supply Hub | 59.71 | 14.02 | 18/18 |

Full ranking: `iterations/project-mirror-v2/committee-aggregation/committee-ranking.csv`
