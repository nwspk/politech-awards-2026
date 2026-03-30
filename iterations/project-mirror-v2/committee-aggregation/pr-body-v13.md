## Title
In Dispute — Projects that split the committee

## Heuristic
Projects ranked by standard deviation of scores across all 17 members (v11 score set: 14×v2 + 3×v3). High stdev = the committee disagrees sharply. Low divisiveness rank = most contested. Only projects with coverage ≥ 15/17 included.

## Rationale
A committee average obscures disagreement. A project can land mid-table not because everyone finds it mediocre, but because half the committee loves it and half ignores it entirely. This analysis surfaces those fractures — projects where one evaluator's ceiling is another's floor, and where the score spread reveals genuine value conflicts rather than collective indifference.

## Limitations
- Standard deviation measures spread, not direction — a project with stdev 22 could be polarising (loved/hated) or just widely variable in how well it maps to different criteria
- Coverage threshold of 15/17 excludes a small number of projects ranked by fewer members
- The v11 score set is the input (14×v2 + 3×v3)

## Assessment
**Most divisive: Gapminder Worldview Upgrader — stdev 22.3 (mean 42.8, range 10.6→100.0)**

The committee's sharpest disagreement is over Gapminder. Prism ranks it #1 with a perfect 100 — institutional stability, open-source, IKEA Foundation governance, and genuine evidence legibility all align with their highest-weight criteria. Signal and Asil both score it below 15 — no health equity or decolonial dimension, no campaign infrastructure relevance. The same project reads as the exemplary civic data tool or as a well-funded Western epistemics project with no structural power dimension, depending entirely on whose constitution you're reading.

**AlgorithmWatch (stdev 21.2)** is the second most contested: strong enforcement and accountability signal for members who weight regulatory infrastructure, near-invisible for those whose criteria sit in health equity or participation architecture.

**vTaiwan and Polis** (stdev ~18–19) follow a consistent pattern: members whose constitutions centre deliberative democracy score them in the 70s–90s; members outside that frame score them in the teens. These projects are not universally understood as relevant to civic tech.

**Top 10 most divisive:**
| Rank | Project | Stdev | Mean | Range |
|------|---------|-------|------|-------|
| 1 | Gapminder Worldview Upgrader | 22.3 | 42.8 | 10.6→100.0 |
| 2 | AlgorithmWatch | 21.2 | 53.2 | 13.6→92.7 |
| 3 | Global Fact-Check Bot (GFC) | 20.7 | 38.2 | 10.8→79.0 |
| 4 | Landlord Tech Watch | 20.6 | 40.4 | 8.6→88.5 |
| 5 | OpenProcurement | 20.3 | 47.4 | 12.2→79.6 |
| 6 | DISARM Frameworks | 19.4 | 43.6 | 15.5→89.0 |
| 7 | vTaiwan | 19.2 | 53.3 | 17.0→87.5 |
| 8 | Turkopticon | 18.9 | 44.7 | 12.5→86.6 |
| 9 | Community Notes (Birdwatch) Analysis Tool | 18.7 | 46.5 | 10.3→82.0 |
| 10 | Guardian Project | 18.7 | 56.4 | 26.5→87.7 |

Full list: `iterations/project-mirror-v2/committee-aggregation/divisive-projects.csv`

## Implementation
- [x] Code is ready to review
