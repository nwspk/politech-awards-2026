## Title
In Dispute — Projects that split the committee

## Heuristic
Projects ranked by standard deviation of scores across all 17 members (v11 score set: 14×v2 + 3×v3). High stdev = the committee disagrees sharply. Only projects with coverage ≥ 15/17 included.

## Rationale
A committee average obscures disagreement. A project can land mid-table not because everyone finds it mediocre, but because half the committee loves it and half ignores it entirely. This analysis surfaces those fractures — projects where one evaluator's ceiling is another's floor, and where the score spread reveals genuine value conflicts rather than collective indifference.

## Limitations
- Standard deviation measures spread, not direction — a project with stdev 22 could be polarising (loved/hated) or just widely variable in how well it maps to different criteria
- Coverage threshold of 15/17 excludes a small number of projects ranked by fewer members
- The v11 score set is the input (14×v2 + 3×v3)

## Assessment

**#1 Most divisive: Gapminder Worldview Upgrader — stdev 22.3 (mean 42.8, range 10.6→100.0)**

The committee's sharpest disagreement. Prism gives it a perfect 100, its only top ranking: *"Founded in 2005 and funded by IKEA Foundation, Gapminder has institutional stability alongside genuine transparency — open-source, foundation governance. My highest-weight criteria (evidence legibility and methodological transparency) are both well-served."* At the other extreme, Asil gives it 10.6: *"My constitution is not built to see what Gapminder Worldview Upgrader does — it lacks the health equity, decolonial governance, or conflict-zone dimensions I prioritise."* Signal at 12.9, Francesca at 25.5: *"My constitution is not built to see what Gapminder Worldview Upgrader does. It may do valuable work, but it does not register on my criteria for civic engagement, digital commons, or data for social good."* Alexandra at 15.5 is the most pointed: *"Whose misconceptions are being corrected, towards whose framing of development? The adoption by Fortune 500 companies and educational institutions suggests this tool may function more as legitimacy infrastructure for development sector actors than as structural power redistribution."*

**#2 AlgorithmWatch — stdev 21.2 (mean 53.2, range 13.6→92.7)**

Safeguard ranks it #1 at 92.7: *"AlgorithmWatch is almost exactly what I look for: a project that builds enforcement infrastructure for AI governance while maintaining cross-jurisdictional reach. Strongest on enforcement/verification (C1: 20)."* Nick at 87.5: *"The EU AI Act FRIA requirement is a directly cited policy outcome — AlgorithmWatch claims to have led that advocacy."* But Alessandro, who acknowledges the project's importance, still scores it 39.7 (#167) and names the limitation directly: *"I keep coming back to this: my constitution scores AlgorithmWatch lower than its civic importance deserves. Algorithmic accountability is foundational to democratic governance. This is the clearest case where my constitution's blind spots are doing real damage to the ranking."* Gamithra gives it 13.6 (#267): *"My constitution struggles to see what AlgorithmWatch does — the criteria don't map well onto this kind of work. Modifiers pull this down."*

**#7 vTaiwan — stdev 19.2 (mean 53.3, range 17.0→87.5)**

Nick at 87.5 (#3): *"vTaiwan's documented influence on Uber, Airbnb, and alcohol sales regulation in Taiwan represents the strongest evidence of policymaker adoption in deliberative democracy that I have seen in this batch."* Alexandra at 80.6 (#4): *"Formal legislative consultation with documented policy outcomes; highest C1+C6 in batch."* Signal at 17.0 (#304): *"vTaiwan scores 17 through its constitutional fit."* Asil at 19.1 (#144): *"vTaiwan engages with governance redistribution in ways that resonate with my decolonial commitments — but the primary driver is community-centred design, and the evidence is thin."* The pattern: deliberative democracy specialists see a landmark. Constitutions built around health equity, campaign infrastructure, or enforcement see a Taiwan-specific platform with limited transferability.

**Worker Info Exchange — stdev 18.7 (mean 39.2, range 13.4→94.7)**

Alexandra gives it 94.7, her only top ranking in the entire dataset: *"This is the clearest case of a project that names a specific power asymmetry (algorithmic management of gig workers), builds formal legal mechanisms to contest it (GDPR Data Subject Access Requests, strategic litigation), and has documented wins: Amsterdam courts ordering Uber and Ola Cabs to disclose algorithmic data."* Nick at 67.0: *"The first court order overturning an automated worker dismissal under GDPR — landmark legal outcomes for algorithmic accountability."* Asil at 13.4: *"My constitution is not built to see what Worker Info Exchange does — it lacks the health equity, decolonial governance, or conflict-zone dimensions I prioritise."* Gamithra at 21.7: *"My constitution struggles to see what Worker Info Exchange does — the criteria don't map well onto this kind of work."* Fatima at 26.5: *"The highest-scoring criterion is making government processes legible at only 11 points — nothing here pulls strongly."*

**Polis — stdev 18.0 (mean 57.7, range 19.9→94.4)**

Nick ranks it #1 at 94.4: *"Polis is one of the most substantive deliberative democracy platforms in this list — the vTaiwan deployment directly informed Uber and Airbnb regulation, which is exactly the kind of policymaker advisory I value most."* Davit at 75.2: *"Polis explicitly models group opinion dynamics to find consensus — the psychological and behavioural dimension is stronger here than in most projects."* Signal at 33.0 (#175) and Asil at 19.9 (#131) barely register it. The split follows the same fault line as vTaiwan: the deliberative democracy constitutions treat Polis as a landmark; other constitutions see a tool that doesn't engage their criteria.

**Top 10 most divisive:**
| Divisiveness rank | Project | Stdev | Mean | Range |
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
| 10 | Worker Info Exchange | 18.7 | 39.2 | 13.4→94.7 |

Full list: `iterations/project-mirror-v2/committee-aggregation/divisive-projects.csv`

## Implementation
- [x] Code is ready to review
