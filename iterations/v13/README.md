---
title: "In Dispute — Gapminder, AlgorithmWatch, vTaiwan split the room"
author: "@sugaroverflow"
date: "2026-03-30"
pr_url: "https://github.com/nwspk/politech-awards-2026/pull/105"
version: v13
pr_status: "open"
top_project:
  name: "Gapminder Worldview Upgrader"
  url: "https://upgrader.gapminder.org"
  score: 25.76
---

## Heuristic

Projects ranked by standard deviation of scores across all 17 members (v11 score set: 14×v2 + 3×v3). High stdev = the committee disagrees sharply. Only projects with coverage ≥ 15/17 included.

## Rationale

A committee average obscures disagreement. A project can land mid-table not because everyone finds it mediocre, but because half the committee loves it and half ignores it entirely. This analysis surfaces those fractures — projects where one evaluator's ceiling is another's floor, and where the score spread reveals genuine value conflicts rather than collective indifference.

## Data sources

- `iterations/project-mirror-v2/committee-aggregation/divisive-projects.csv`
- 17 member constitution score sets (14×v2 + 3×v3) from v11

## Limitations

- Standard deviation measures spread, not direction — a project with stdev 22 could be polarising (loved/hated) or just widely variable in how well it maps to different criteria
- Coverage threshold of 15/17 excludes a small number of projects ranked by fewer members
- The v11 score set is the input (14×v2 + 3×v3)

## Assessment

The committee's sharpest disagreement sits at Gapminder Worldview Upgrader (stdev 25.76), where one member gives a perfect 100 and another gives 10.6. The pattern repeats across the top of this list: AlgorithmWatch, vTaiwan, Worker Info Exchange, and Polis all show splits that follow clear constitutional fault lines — deliberative democracy specialists versus constitutions built around health equity, enforcement, or campaign infrastructure.

These are not cases of random scatter. The high stdev projects are those with strong, legible value propositions that only resonate with specific constitutional orientations. The disagreement is signal, not noise: it reveals where the committee's diversity of values produces genuine divergence rather than shared indifference.

**Top 10 most divisive:**

| Divisiveness rank | Project | Stdev | Mean | Range |
|------|---------|-------|------|-------|
| 1 | Gapminder Worldview Upgrader | 25.76 | 45.31 | 10.6→100.0 |
| 2 | Turkopticon | 22.15 | 47.41 | 12.5→92.3 |
| 3 | Landlord Tech Watch | 21.57 | 42.27 | 8.6→88.5 |
| 4 | DISARM Frameworks | 21.26 | 45.11 | 15.5→89.0 |
| 5 | AlgorithmWatch | 21.15 | 53.27 | 13.6→92.7 |
| 6 | OA.Works | 21.09 | 47.28 | 21.9→99.8 |
| 7 | CKAN | 20.92 | 49.05 | 21.5→95.4 |
| 8 | oTree | 20.86 | 45.71 | 10.9→86.1 |
| 9 | Global Fact-Check Bot (GFC) | 20.76 | 39.12 | 10.8→79.0 |
| 10 | OpenProcurement | 20.72 | 48.05 | 12.2→79.6 |

Full list: `iterations/project-mirror-v2/committee-aggregation/divisive-projects.csv`
