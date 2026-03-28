# Jury Summary — Huda Abdirahim
Agent: mirror-jury-aggregator | Date: 2026-03-28

---

## Overview

Jury runs completed: 25 (5 models x 5 runs). Of these, 20 produced usable scores.
- **Gemini**: 5 runs, 0 scored — model compatibility error (not constitutional abstention). Excluded from aggregation.
- **GPT-4.1**: 5 runs, fully refreshed via real API calls (292-296/321 scored per run)
- **Mistral**: 5 runs, fully refreshed via real API calls (197-203/321 scored per run)
- **Claude**: 5 runs, partial data from earlier credit-exhausted runs (67-83/321 scored per run)
- **Grok4**: 5 runs, partial data from earlier credit-exhausted runs (6-9/321 scored per run)

**Effective panel**: GPT-4.1 and Mistral are the primary contributors. Claude and Grok4 provide partial supplementary data.

Projects with at least 1 jury score: **305**/321
Projects where all models abstained: **19**

Overall score rate across 25 runs: 2862/8025 (35.7%)

---

## Panel

| # | Model | Role | Runs | Avg scored/321 | Avg abstain rate | Status |
|---|---|---|---|---|---|---|
| 1 | claude | Contrarian | 5 | 71 | 250 (78%) | Partial (credit exhaustion) |
| 2 | gemini | Institutional voice | 5 | 0 | 321 (100%) | EXCLUDED — model error |
| 3 | gpt41 | Progressive anchor | 5 | 294 | 27 (8%) | Full (refreshed) |
| 4 | grok4 | Provocateur | 5 | 7 | 314 (98%) | Partial (credit exhaustion) |
| 5 | mistral | Technical purist | 5 | 200 | 121 (38%) | Full (refreshed) |

> **Note on abstention rates:** The jury prompt instructs models to abstain when the dossier is
> insufficient to assess the specific constitutional criteria. Huda's constitution is centred on
> treasury transparency, collective ownership, and programmable governance — a narrow domain that
> most mainstream civic tech dossiers don't address directly. High abstention rates here reflect
> genuine dossier-criteria mismatch, not model failure.
>
> Gemini's 100% abstention is different: it is a model compatibility error where the model returned
> zero-score responses for all projects. This is NOT constitutional abstention.

---

## Full vote table — all 321 projects

> **JuryConstGap**: difference between constitutional rank and jury rank. Positive = jury ranked higher
> (potential familiarity inflation). Negative = jury ranked lower (constitution may be over-valuing).
> Gaps > 20 ranks are flagged.

> **Pop Risk**: HIGH = well-known, well-documented project; score may reflect documentation advantage.

| Const Rank | Project | Jury Score | Jury Rank | Const Score | JuryConstGap | Score Count | Models | Pop Risk | Stability | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Aragon | 72 | 54 | 70.7 | -53 ⚑ | 15 | 3 | LOW | HIGH |  |
| 2 | The DAO (Standard DAO Framework) | 38 | 272 | 68.0 | -270 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 3 | Ethelo | 68.0 | 80 | 67.9 | -77 ⚑ | 12 | 3 | MEDIUM | LOW |  |
| 4 | Bonfire | N/A | N/A | 65.8 | N/A | 0 | 0 | LOW | N/A |  |
| 5 | LiquidFeedback | 82.0 | 14 | 65.8 | -9 | 10 | 2 | MEDIUM | HIGH |  |
| 6 | Tech Coops List | 72.0 | 62 | 65.8 | -56 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 7 | Open Heart Mind (OHM) | 68 | 84 | 65.7 | -77 ⚑ | 5 | 1 | LOW | HIGH |  |
| 8 | Cobudget | 76 | 34 | 64.7 | -26 ⚑ | 15 | 3 | HIGH | MEDIUM |  |
| 9 | Polis | 80.0 | 23 | 64.7 | -14 | 10 | 2 | HIGH | MEDIUM |  |
| 10 | Populate Tools | 61.0 | 124 | 64.7 | -114 ⚑ | 8 | 2 | MEDIUM | HIGH |  |
| 11 | Open Standards for Data Guidebook | 63.0 | 113 | 64.7 | -102 ⚑ | 10 | 2 | LOW | HIGH |  |
| 12 | Murmurations Protocol | 73.0 | 49 | 62.8 | -37 ⚑ | 10 | 2 | LOW | HIGH |  |
| 13 | mySociety Datasets and APIs | 81 | 19 | 62.7 | -6 | 15 | 3 | HIGH | MEDIUM |  |
| 14 | Loomio | 80.0 | 22 | 62.7 | -8 | 10 | 2 | MEDIUM | HIGH |  |
| 15 | Matrix | 72.0 | 57 | 60.9 | -42 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 16 | Open Collective | 84.5 | 7 | 60.9 | +9 | 10 | 2 | MEDIUM | MEDIUM |  |
| 17 | dDocs | N/A | N/A | 59.9 | N/A | 0 | 0 | NONE | N/A |  |
| 18 | Logos | N/A | N/A | 59.0 | N/A | 0 | 0 | LOW | N/A |  |
| 19 | CharmVerse | N/A | N/A | 58.9 | N/A | 0 | 0 | LOW | N/A |  |
| 20 | RxC Voice | 64.0 | 103 | 58.9 | -83 ⚑ | 10 | 2 | LOW | HIGH |  |
| 21 | Interoperable Deliberative Tools | 63.0 | 111 | 58.8 | -90 ⚑ | 10 | 2 | LOW | HIGH |  |
| 22 | Decidim | 92 | 1 | 57.8 | +21 ⚑ | 15 | 3 | HIGH | MEDIUM |  |
| 23 | CONSUL Democracy | 88 | 2 | 56.9 | +21 ⚑ | 15 | 3 | MEDIUM | MEDIUM |  |
| 24 | HURIDOCS | 78.5 | 26 | 56.9 | -2 | 10 | 2 | MEDIUM | MEDIUM |  |
| 25 | Mozilla Data Collective | N/A | N/A | 56.1 | N/A | 0 | 0 | LOW | N/A |  |
| 26 | Nym | 60 | 128 | 56.0 | -102 ⚑ | 9 | 2 | LOW | HIGH |  |
| 27 | Alaveteli | 80.0 | 21 | 55.9 | +6 | 20 | 4 | HIGH | MEDIUM |  |
| 28 | Citizen OS | N/A | N/A | 55.9 | N/A | 0 | 0 | MEDIUM | N/A |  |
| 29 | NumFOCUS | 69.0 | 73 | 55.9 | -44 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 30 | Open Council Network | 83.5 | 10 | 55.9 | +20 | 10 | 2 | LOW | HIGH |  |
| 31 | ClimateAction.Tech | 52 | 180 | 55.1 | -149 ⚑ | 15 | 3 | LOW | LOW |  |
| 32 | LittleSis | 86.5 | 5 | 55.0 | +27 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 33 | Your Priorities | 76.0 | 41 | 54.9 | -8 | 10 | 2 | MEDIUM | HIGH |  |
| 34 | Snowdrift.coop | 79.0 | 25 | 54.0 | +9 | 10 | 2 | MEDIUM | MEDIUM |  |
| 35 | adhocracy+ | 72.5 | 53 | 53.9 | -18 | 20 | 4 | LOW | LOW |  |
| 36 | CiviCRM | 68 | 78 | 53.9 | -42 ⚑ | 15 | 3 | HIGH | MEDIUM |  |
| 37 | Fairbnb.coop | 76 | 37 | 53.9 | 0 | 11 | 3 | LOW | MEDIUM |  |
| 38 | Open Supply Hub | 78.0 | 29 | 53.9 | +9 | 10 | 2 | MEDIUM | HIGH |  |
| 39 | Pursuance Project | 64.5 | 96 | 53.9 | -57 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 40 | Talk to the City | 76.5 | 33 | 53.9 | +7 | 10 | 2 | LOW | MEDIUM |  |
| 41 | ОПОРА (Opora) | 63.0 | 115 | 53.0 | -74 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 42 | CommunityRule | 76 | 35 | 52.9 | +7 | 15 | 3 | MEDIUM | MEDIUM |  |
| 43 | PlaceCal | 64.0 | 100 | 52.9 | -57 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 44 | Political Advertising Transparency Data Standard | 72.0 | 60 | 52.9 | -16 | 10 | 2 | LOW | HIGH |  |
| 45 | OpenSanctions | 55.0 | 155 | 52.9 | -110 ⚑ | 10 | 2 | LOW | HIGH |  |
| 46 | Mastodon | 77.0 | 31 | 52.1 | +15 | 10 | 2 | HIGH | HIGH |  |
| 47 | Creative Commons | 68 | 79 | 52.0 | -32 ⚑ | 15 | 3 | HIGH | MEDIUM |  |
| 48 | Rahvaalgatus | 82.0 | 15 | 52.0 | +33 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 49 | Parti | 85.0 | 6 | 52.0 | +43 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 50 | Humanitarian OpenStreetMap Team (HOT) | 74.5 | 45 | 52.0 | +5 | 10 | 2 | HIGH | MEDIUM |  |
| 51 | Open Contracting Partnership | 88.0 | 3 | 52.0 | +48 ⚑ | 10 | 2 | HIGH | HIGH |  |
| 52 | Ushahidi | 79.5 | 24 | 52.0 | +28 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 53 | DAO Governance Surfaces | 49.0 | 198 | 51.2 | -145 ⚑ | 10 | 2 | LOW | HIGH |  |
| 54 | Tactical Data Engagement | 60 | 130 | 51.1 | -76 ⚑ | 15 | 3 | MEDIUM | MEDIUM |  |
| 55 | Turkopticon | 83.0 | 13 | 51.1 | +42 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 56 | Papertree | 66 | 90 | 51.1 | -34 ⚑ | 5 | 1 | NONE | HIGH |  |
| 57 | Constitute Project | 64 | 99 | 51.0 | -42 ⚑ | 15 | 3 | MEDIUM | MEDIUM |  |
| 58 | Cybersecurity for Democracy | 56 | 144 | 51.0 | -86 ⚑ | 15 | 3 | LOW | MEDIUM |  |
| 59 | Participa (Podemos) | 73.0 | 50 | 51.0 | +9 | 10 | 2 | MEDIUM | HIGH |  |
| 60 | Stanford Participatory Budgeting Platform | 72.0 | 61 | 51.0 | -1 | 10 | 2 | MEDIUM | HIGH |  |
| 61 | One Project | N/A | N/A | 51.0 | N/A | 0 | 0 | LOW | N/A |  |
| 62 | Open Digital Planning | N/A | N/A | 51.0 | N/A | 0 | 0 | LOW | N/A |  |
| 63 | Awesome UK Government Datasets | 48 | 202 | 50.1 | -139 ⚑ | 9 | 2 | LOW | HIGH |  |
| 64 | All Our Ideas | 69 | 72 | 50.0 | -8 | 19 | 4 | MEDIUM | MEDIUM |  |
| 65 | Fundación Ciudadanía Inteligente | 78 | 27 | 50.0 | +38 ⚑ | 15 | 3 | MEDIUM | MEDIUM |  |
| 66 | CoTech | 84 | 8 | 50.0 | +58 ⚑ | 15 | 3 | MEDIUM | MEDIUM |  |
| 67 | Democracy Club Developer API | 76.0 | 36 | 50.0 | +31 ⚑ | 12 | 3 | MEDIUM | MEDIUM |  |
| 68 | vTaiwan | 87.0 | 4 | 50.0 | +64 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 69 | UK Housing Data Standards | 53.0 | 176 | 50.0 | -107 ⚑ | 10 | 2 | LOW | HIGH |  |
| 70 | OpenProcurement | 83.5 | 11 | 50.0 | +59 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 71 | Principles for Public Participation in Procurement of AI | 80.5 | 20 | 50.0 | +51 ⚑ | 6 | 2 | LOW | MEDIUM |  |
| 72 | Participedia | 66.0 | 91 | 50.0 | -19 | 10 | 2 | MEDIUM | HIGH |  |
| 73 | GovTrack.us | 70.0 | 69 | 50.0 | +4 | 10 | 2 | MEDIUM | HIGH |  |
| 74 | Bluesky Social | 57.0 | 138 | 49.1 | -64 ⚑ | 6 | 2 | HIGH | HIGH |  |
| 75 | Activist Handbook | N/A | N/A | 49.0 | N/A | 0 | 0 | LOW | N/A |  |
| 76 | Kialo | 49.0 | 199 | 49.0 | -123 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 77 | Manifold Markets | 48 | 212 | 49.0 | -135 ⚑ | 9 | 2 | LOW | MEDIUM |  |
| 78 | New_ Public Roundabout | 62 | 118 | 49.0 | -40 ⚑ | 5 | 1 | LOW | HIGH |  |
| 79 | PolicyEngine | 76.0 | 38 | 49.0 | +41 ⚑ | 10 | 2 | LOW | HIGH |  |
| 80 | Internet Archive Wayback Machine | 71.0 | 64 | 49.0 | +16 | 6 | 2 | MEDIUM | HIGH |  |
| 81 | Agencies for Good | 38.0 | 254 | 49.0 | -173 ⚑ | 2 | 1 | LOW | HIGH |  |
| 82 | Democracy Fund Open Source | 54 | 162 | 49.0 | -80 ⚑ | 1 | 1 | MEDIUM | SINGLE |  |
| 83 | Organise | 67.0 | 88 | 49.0 | -5 | 10 | 2 | MEDIUM | MEDIUM |  |
| 84 | ODK (Open Data Kit) | 60 | 129 | 48.0 | -45 ⚑ | 11 | 3 | MEDIUM | MEDIUM |  |
| 85 | Groupthink (OpenPolitics Votebot) | 70.5 | 67 | 48.0 | +18 | 10 | 2 | MEDIUM | MEDIUM |  |
| 86 | Land Explorer | 67.5 | 87 | 48.0 | -1 | 10 | 2 | LOW | HIGH |  |
| 87 | openparliament.ca | N/A | N/A | 48.0 | N/A | 0 | 0 | MEDIUM | N/A |  |
| 88 | RxC Quadratic Voting | 64.0 | 102 | 48.0 | -14 | 10 | 2 | HIGH | HIGH |  |
| 89 | Framework for Meaningful Engagement 2.0 | 68.0 | 82 | 47.3 | +7 | 10 | 2 | LOW | LOW |  |
| 90 | Wikum | 54 | 171 | 47.1 | -81 ⚑ | 5 | 1 | LOW | HIGH |  |
| 91 | FixMyStreet | 68.0 | 81 | 47.1 | +10 | 10 | 2 | HIGH | HIGH |  |
| 92 | TheyWorkForYou | 82.0 | 17 | 47.1 | +75 ⚑ | 10 | 2 | HIGH | HIGH |  |
| 93 | AlgorithmWatch | 55.5 | 152 | 47.0 | -59 ⚑ | 20 | 4 | LOW | MEDIUM |  |
| 94 | Kagi SlopStop | 38.0 | 260 | 46.2 | -166 ⚑ | 10 | 2 | LOW | HIGH |  |
| 95 | Modular Politics | 41.5 | 248 | 46.1 | -153 ⚑ | 10 | 2 | HIGH | HIGH |  |
| 96 | postcodes.io | 45.0 | 233 | 46.1 | -137 ⚑ | 8 | 2 | MEDIUM | HIGH |  |
| 97 | Guardian Project | 61.0 | 122 | 46.1 | -25 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 98 | Campaign Tracker | 75.0 | 43 | 46.1 | +55 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 99 | Mastodon C | 52 | 183 | 46.1 | -84 ⚑ | 5 | 1 | HIGH | HIGH |  |
| 100 | Open Ownership | 75.0 | 44 | 46.1 | +56 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 101 | Discourse | 54.5 | 158 | 46.0 | -57 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 102 | Nestr | 38 | 261 | 45.3 | -159 ⚑ | 5 | 1 | LOW | HIGH |  |
| 103 | Urbit | 41.0 | 250 | 45.2 | -147 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 104 | sourceAFRICA | 71.0 | 66 | 45.1 | +38 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 105 | Membership | N/A | N/A | 45.0 | N/A | 0 | 0 | NONE | N/A |  |
| 106 | Abstract Wikipedia | 68.5 | 76 | 45.0 | +30 ⚑ | 8 | 2 | HIGH | MEDIUM |  |
| 107 | PlanIT | 62 | 120 | 45.0 | -13 | 5 | 1 | MEDIUM | HIGH |  |
| 108 | PolicyKit | 72 | 59 | 45.0 | +49 ⚑ | 5 | 1 | LOW | HIGH |  |
| 109 | Community Notes (Birdwatch) Analysis Tool | 57.0 | 139 | 44.2 | -30 ⚑ | 6 | 2 | LOW | MEDIUM |  |
| 110 | CKAN | 74 | 46 | 44.1 | +64 ⚑ | 15 | 3 | HIGH | HIGH |  |
| 111 | docs.plus | 60 | 131 | 44.1 | -20 | 15 | 3 | LOW | MEDIUM |  |
| 112 | EDGAR | 56 | 146 | 44.1 | -34 ⚑ | 11 | 3 | HIGH | MEDIUM |  |
| 113 | MapIt | 60.0 | 127 | 44.1 | -14 | 10 | 2 | HIGH | HIGH |  |
| 114 | Open Data Editor (ODE) | N/A | N/A | 44.1 | N/A | 0 | 0 | LOW | N/A |  |
| 115 | Open Data Communities | 52.5 | 177 | 44.1 | -62 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 116 | SecureDrop | 64.0 | 104 | 44.1 | +12 | 10 | 2 | MEDIUM | HIGH |  |
| 117 | Spartacus | 51.5 | 193 | 44.1 | -76 ⚑ | 10 | 2 | LOW | HIGH |  |
| 118 | WriteToThem | 58.0 | 136 | 44.1 | -18 | 10 | 2 | MEDIUM | HIGH |  |
| 119 | Anna's Archive | 52 | 178 | 43.2 | -59 ⚑ | 11 | 3 | NONE | HIGH |  |
| 120 | Humble Data Workshop | 63 | 110 | 43.2 | +10 | 7 | 2 | LOW | MEDIUM |  |
| 121 | Spacetube | 59.0 | 133 | 43.2 | -12 | 10 | 2 | LOW | HIGH |  |
| 122 | Aleph (OCCRP) | 64.0 | 98 | 43.1 | +24 ⚑ | 20 | 4 | HIGH | LOW |  |
| 123 | Civic Tech Field Guide | 48 | 203 | 43.1 | -80 ⚑ | 15 | 3 | MEDIUM | HIGH |  |
| 124 | Open Referral UK | 72.0 | 58 | 43.1 | +66 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 125 | Open Science Framework | 54 | 166 | 43.1 | -41 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 126 | Relational Tech Project | 82 | 16 | 43.1 | +110 ⚑ | 5 | 1 | NONE | HIGH |  |
| 127 | Tracka | 77.5 | 30 | 43.1 | +97 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 128 | CrowdJustice | 56 | 143 | 43.0 | -15 | 9 | 2 | MEDIUM | MEDIUM |  |
| 129 | meet.coop | 84.0 | 9 | 43.0 | +120 ⚑ | 10 | 2 | LOW | HIGH |  |
| 130 | MP Watch | 48.0 | 211 | 42.3 | -81 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 131 | CivicPress | N/A | N/A | 42.2 | N/A | 0 | 0 | LOW | N/A |  |
| 132 | Collaborative Data Patterns | 48 | 204 | 42.2 | -72 ⚑ | 13 | 3 | LOW | HIGH |  |
| 133 | The Commons Social Change Library | 52 | 188 | 42.2 | -55 ⚑ | 15 | 3 | MEDIUM | MEDIUM |  |
| 134 | The Engine Room Library | 56 | 151 | 42.2 | -17 | 9 | 2 | MEDIUM | HIGH |  |
| 135 | Members' Interests | 68 | 83 | 42.2 | +52 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 136 | Open Council Data UK | 52.0 | 185 | 42.2 | -49 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 137 | Strike Map | 76.5 | 32 | 42.2 | +105 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 138 | Give Food | N/A | N/A | 42.2 | N/A | 0 | 0 | MEDIUM | N/A |  |
| 139 | Neighbourhood Warmth | 56.0 | 149 | 42.2 | -10 | 10 | 2 | HIGH | MEDIUM |  |
| 140 | OpenCRVS | 68.0 | 85 | 42.2 | +55 ⚑ | 10 | 2 | LOW | HIGH |  |
| 141 | Landlord Tech Watch | 72 | 56 | 41.2 | +85 ⚑ | 15 | 3 | LOW | MEDIUM |  |
| 142 | Bellingcat Online Investigation Toolkit | 56.0 | 142 | 41.2 | 0 | 14 | 3 | HIGH | MEDIUM |  |
| 143 | Coral | 54 | 160 | 41.2 | -17 | 15 | 3 | MEDIUM | MEDIUM |  |
| 144 | Cortico | 52 | 182 | 41.2 | -38 ⚑ | 15 | 3 | LOW | MEDIUM |  |
| 145 | Fatebook | 44.0 | 235 | 41.2 | -90 ⚑ | 6 | 2 | LOW | MEDIUM |  |
| 146 | UK Policy Dojo | 38 | 274 | 41.2 | -128 ⚑ | 5 | 1 | LOW | HIGH |  |
| 147 | Sugartrail | 57.0 | 141 | 41.2 | +6 | 10 | 2 | LOW | HIGH |  |
| 148 | GrantNav | 70.0 | 70 | 41.2 | +78 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 149 | Harmonica | N/A | N/A | 41.2 | N/A | 0 | 0 | LOW | N/A |  |
| 150 | Idealist | 54 | 165 | 41.2 | -15 | 5 | 1 | MEDIUM | HIGH |  |
| 151 | Parliament Watch Uganda | N/A | N/A | 41.2 | N/A | 0 | 0 | MEDIUM | N/A |  |
| 152 | Shareyourpaper.org | 65.5 | 94 | 41.2 | +58 ⚑ | 6 | 2 | LOW | MEDIUM |  |
| 153 | The Government Says | 72.5 | 52 | 41.2 | +101 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 154 | Community Tech | 74 | 47 | 41.2 | +107 ⚑ | 9 | 2 | LOW | MEDIUM |  |
| 155 | Deliberation & Technology (DelibTech) Network | 48 | 206 | 41.2 | -51 ⚑ | 5 | 1 | LOW | HIGH |  |
| 156 | MP Twitter Bios | 41.0 | 249 | 41.2 | -93 ⚑ | 10 | 2 | LOW | HIGH |  |
| 157 | oTree | 44.0 | 243 | 41.2 | -86 ⚑ | 6 | 2 | MEDIUM | HIGH |  |
| 158 | ShineYourEye | 66.0 | 92 | 41.2 | +66 ⚑ | 10 | 2 | LOW | HIGH |  |
| 159 | Wikidata | 76.0 | 39 | 41.2 | +120 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 160 | Metaculus | 42 | 246 | 41.1 | -86 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 161 | Fission Codes | N/A | N/A | 40.4 | N/A | 0 | 0 | LOW | N/A |  |
| 162 | arXiv | 52.0 | 190 | 40.2 | -28 ⚑ | 10 | 2 | HIGH | HIGH |  |
| 163 | Channel.org | 52 | 179 | 40.2 | -16 | 7 | 2 | LOW | HIGH |  |
| 164 | Contracts for Data Collaboration | 54 | 159 | 40.2 | +5 | 15 | 3 | LOW | HIGH |  |
| 165 | Consent-O-Matic | 55 | 153 | 40.2 | +12 | 11 | 3 | LOW | MEDIUM |  |
| 166 | Journal of Open Source Software | 56 | 147 | 40.2 | +19 | 9 | 2 | MEDIUM | HIGH |  |
| 167 | Mapped | 57.0 | 140 | 40.2 | +27 ⚑ | 10 | 2 | LOW | HIGH |  |
| 168 | OA.Works | N/A | N/A | 40.2 | N/A | 0 | 0 | MEDIUM | N/A |  |
| 169 | OpenBudgets.eu | 70.0 | 71 | 40.2 | +98 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 170 | OSINT Framework | 38 | 263 | 40.2 | -93 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 171 | Vote for Policies | 54 | 170 | 40.2 | +1 | 5 | 1 | MEDIUM | HIGH |  |
| 172 | OpenElections Leaflet Scraper and Parser | 52.0 | 186 | 39.3 | -14 | 10 | 2 | LOW | HIGH |  |
| 173 | django-collaborative | 43.0 | 244 | 39.2 | -71 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 174 | Hand-Written Petition Scanner | N/A | N/A | 39.2 | N/A | 0 | 0 | NONE | N/A |  |
| 175 | WhatGov | 64.0 | 105 | 39.2 | +70 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 176 | Local Intelligence Hub | 63.0 | 112 | 39.1 | +64 ⚑ | 10 | 2 | LOW | HIGH |  |
| 177 | Choose a License | 44 | 234 | 38.2 | -57 ⚑ | 13 | 3 | MEDIUM | MEDIUM |  |
| 178 | DISARM Frameworks | 48.0 | 205 | 38.2 | -27 ⚑ | 6 | 2 | LOW | HIGH |  |
| 179 | Frankenstein Bill | 48.0 | 210 | 38.2 | -31 ⚑ | 10 | 2 | LOW | HIGH |  |
| 180 | Theft Bisect | N/A | N/A | 38.2 | N/A | 0 | 0 | LOW | N/A |  |
| 181 | Beckton | 38 | 255 | 38.2 | -74 ⚑ | 5 | 1 | LOW | HIGH |  |
| 182 | Schema.org | N/A | N/A | 38.2 | N/A | 0 | 0 | NONE | N/A |  |
| 183 | Unpaywall Browser Extension | 62 | 121 | 38.2 | +62 ⚑ | 5 | 1 | LOW | HIGH |  |
| 184 | deliberAIde | 52.0 | 191 | 38.2 | -7 | 10 | 2 | LOW | HIGH |  |
| 185 | Parallel Parliament | 61.0 | 123 | 38.2 | +62 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 186 | CAN/DGSI 127 - Age Assurance Technologies Standard | N/A | N/A | 37.3 | N/A | 0 | 0 | LOW | N/A |  |
| 187 | Diia | 56 | 145 | 37.3 | +42 ⚑ | 11 | 3 | LOW | MEDIUM |  |
| 188 | rsky | 64 | 109 | 37.3 | +79 ⚑ | 11 | 3 | LOW | MEDIUM |  |
| 189 | GRIM (Global Risk Simulator) | N/A | N/A | 37.3 | N/A | 0 | 0 | LOW | N/A |  |
| 190 | Journalist Studio | 44 | 238 | 37.3 | -48 ⚑ | 5 | 1 | LOW | HIGH |  |
| 191 | Libertrium | 46.0 | 232 | 37.3 | -41 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 192 | Open Letter | 56.0 | 150 | 37.3 | +42 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 193 | Parse The Bill | 59.5 | 132 | 37.3 | +61 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 194 | Radicle | 64.0 | 101 | 37.3 | +93 ⚑ | 10 | 2 | LOW | HIGH |  |
| 195 | Security First / Umbrella | 55.0 | 157 | 37.3 | +38 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 196 | Empurrando Juntas (EJ) | 38 | 256 | 37.3 | -60 ⚑ | 7 | 2 | LOW | HIGH |  |
| 197 | soweego | 38 | 281 | 37.3 | -84 ⚑ | 5 | 1 | LOW | HIGH |  |
| 198 | Gapminder Worldview Upgrader | 54 | 164 | 37.3 | +34 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 199 | VFRAME | 59.0 | 134 | 37.3 | +65 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 200 | WardWatch | 48.0 | 222 | 37.3 | -22 ⚑ | 10 | 2 | LOW | HIGH |  |
| 201 | GlobaLeaks | 78.0 | 28 | 37.3 | +173 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 202 | Teaching Public Service in the Digital Age | 48.0 | 219 | 37.3 | -17 | 10 | 2 | LOW | HIGH |  |
| 203 | Worker Info Exchange | 76.0 | 40 | 37.3 | +163 ⚑ | 10 | 2 | HIGH | MEDIUM |  |
| 204 | UrbanistAI | 54 | 169 | 37.2 | +35 ⚑ | 7 | 2 | LOW | MEDIUM |  |
| 205 | Humanitarian Data Exchange | 55.0 | 154 | 36.3 | +51 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 206 | Find local consultations | 50.5 | 195 | 36.3 | +11 | 10 | 2 | MEDIUM | HIGH |  |
| 207 | Monitor Mamdani | N/A | N/A | 36.3 | N/A | 0 | 0 | LOW | N/A |  |
| 208 | Open Access – Transparency International UK | 62 | 119 | 36.3 | +89 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 209 | ORCID | 38 | 262 | 36.3 | -53 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 210 | Turbo Phonebank | 38.0 | 273 | 36.3 | -63 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 211 | DoNotPay | 32 | 295 | 36.3 | -84 ⚑ | 3 | 1 | LOW | HIGH |  |
| 212 | Marks Out Of Tenancy | 50.0 | 197 | 36.3 | +15 | 10 | 2 | LOW | MEDIUM |  |
| 213 | Martus | 56.0 | 148 | 36.3 | +65 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 214 | River Sentiment Dashboard | 48.0 | 216 | 35.4 | -2 | 10 | 2 | LOW | HIGH |  |
| 215 | The Data Trusts Initiative | 54 | 168 | 35.3 | +47 ⚑ | 15 | 3 | LOW | MEDIUM |  |
| 216 | Agreement Engine | 53 | 172 | 35.3 | +44 ⚑ | 5 | 1 | NONE | HIGH |  |
| 217 | The Guide to Major Trusts 2025/26 | N/A | N/A | 34.5 | N/A | 0 | 0 | MEDIUM | N/A |  |
| 218 | Data Observation Toolkit (DOT) | 54.0 | 161 | 34.3 | +57 ⚑ | 10 | 2 | LOW | HIGH |  |
| 219 | Pastecal | 52 | 187 | 34.3 | +32 ⚑ | 7 | 2 | LOW | HIGH |  |
| 220 | youtube-dl | 38.0 | 283 | 34.3 | -63 ⚑ | 6 | 2 | MEDIUM | HIGH |  |
| 221 | Granitt | 53 | 174 | 34.3 | +47 ⚑ | 5 | 1 | LOW | HIGH |  |
| 222 | Nook CRM | 48 | 214 | 34.3 | +8 | 7 | 2 | LOW | HIGH |  |
| 223 | Objector.ai | 52.0 | 184 | 34.3 | +39 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 224 | Pageviews Analysis | 55.0 | 156 | 34.3 | +68 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 225 | Timecounts | 39.5 | 252 | 34.3 | -27 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 226 | Who Targets Me Trends | 64.0 | 106 | 34.3 | +120 ⚑ | 10 | 2 | LOW | HIGH |  |
| 227 | Objector.ai | 53.0 | 175 | 34.3 | +52 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 228 | WhatDoTheyKnow | 73.0 | 51 | 34.3 | +177 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 229 | Bluesky | 50.0 | 196 | 34.2 | +33 ⚑ | 10 | 2 | HIGH | HIGH |  |
| 230 | Viewpoints | 38 | 276 | 34.2 | -46 ⚑ | 5 | 1 | LOW | HIGH |  |
| 231 | Public AI Inference Utility | N/A | N/A | 33.4 | N/A | 0 | 0 | LOW | N/A |  |
| 232 | CiviClick | 35.0 | 286 | 33.3 | -54 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 233 | UK Parliament Developer Portal | 48.5 | 201 | 33.3 | +32 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 234 | Global Fact-Check Bot (GFC) | N/A | N/A | 33.3 | N/A | 0 | 0 | LOW | N/A |  |
| 235 | GOV.UK Forms | 46 | 231 | 33.3 | +4 | 5 | 1 | LOW | HIGH |  |
| 236 | Charity Digital Skills Report | 32.0 | 291 | 32.4 | -55 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 237 | In the news | 65.0 | 95 | 32.4 | +142 ⚑ | 10 | 2 | LOW | LOW |  |
| 238 | Gender Pay Gap Service | 60 | 126 | 32.4 | +112 ⚑ | 11 | 3 | LOW | MEDIUM |  |
| 239 | whatsmeow | 38.0 | 282 | 32.4 | -43 ⚑ | 2 | 1 | NONE | HIGH |  |
| 240 | Moral Machine | 47 | 227 | 32.4 | +13 | 5 | 1 | MEDIUM | HIGH |  |
| 241 | The Accountability Project | 48.0 | 220 | 32.4 | +21 ⚑ | 10 | 2 | LOW | HIGH |  |
| 242 | Remember to Vote | 51.0 | 194 | 32.4 | +48 ⚑ | 6 | 2 | LOW | MEDIUM |  |
| 243 | Riseup | 83.0 | 12 | 32.4 | +231 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 244 | Who Posted What? | 48 | 224 | 32.4 | +20 | 9 | 2 | MEDIUM | HIGH |  |
| 245 | GOV.UK One Login | 38 | 259 | 32.4 | -14 | 5 | 1 | LOW | HIGH |  |
| 246 | Tor Project | 70.5 | 68 | 32.2 | +178 ⚑ | 10 | 2 | HIGH | MEDIUM |  |
| 247 | OA.Report | 40 | 251 | 31.4 | -4 | 9 | 2 | LOW | HIGH |  |
| 248 | OpenAudience | 38.0 | 264 | 31.4 | -16 | 10 | 2 | MEDIUM | HIGH |  |
| 249 | Overton | 38 | 266 | 31.4 | -17 | 5 | 1 | LOW | HIGH |  |
| 250 | PostBug | 38.0 | 270 | 31.4 | -20 | 10 | 2 | MEDIUM | MEDIUM |  |
| 251 | semanticClimate | 48 | 226 | 31.4 | +25 ⚑ | 5 | 1 | LOW | HIGH |  |
| 252 | The Circuit | 71.0 | 65 | 31.4 | +187 ⚑ | 10 | 2 | LOW | LOW |  |
| 253 | Go Vocal | 53.0 | 173 | 31.3 | +80 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 254 | Entitledto | 54 | 163 | 30.4 | +91 ⚑ | 9 | 2 | MEDIUM | MEDIUM |  |
| 255 | DeepSeek-V3 | 28 | 302 | 30.4 | -47 ⚑ | 5 | 1 | HIGH | HIGH |  |
| 256 | Nyaaya | 58.0 | 135 | 30.4 | +121 ⚑ | 10 | 2 | MEDIUM | LOW |  |
| 257 | Plausible Analytics | 47.0 | 228 | 30.4 | +29 ⚑ | 10 | 2 | LOW | LOW |  |
| 258 | GOV.UK Notify | 38 | 258 | 30.4 | 0 | 7 | 2 | MEDIUM | HIGH |  |
| 259 | Prolific | 32 | 298 | 30.4 | -39 ⚑ | 3 | 1 | MEDIUM | HIGH |  |
| 260 | Privacy Badger | 47.0 | 229 | 30.2 | +31 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 261 | Dunadyne | 48 | 208 | 29.4 | +53 ⚑ | 5 | 1 | LOW | HIGH |  |
| 262 | Local Insight | 42.0 | 245 | 29.4 | +17 | 10 | 2 | MEDIUM | HIGH |  |
| 263 | GovWise | 32 | 296 | 29.4 | -33 ⚑ | 9 | 2 | LOW | HIGH |  |
| 264 | MyActionCenter | 48.0 | 213 | 29.4 | +51 ⚑ | 8 | 2 | LOW | MEDIUM |  |
| 265 | Collab.Land | 32.0 | 293 | 28.6 | -28 ⚑ | 10 | 2 | LOW | HIGH |  |
| 266 | CivicMatch | 32 | 292 | 28.4 | -26 ⚑ | 5 | 1 | LOW | HIGH |  |
| 267 | GOV Reuse Library | N/A | N/A | 28.4 | N/A | 0 | 0 | LOW | N/A |  |
| 268 | Citizens Advice Tableau Public Profile | N/A | N/A | 28.4 | N/A | 0 | 0 | NONE | N/A |  |
| 269 | Right To Know | 67.0 | 89 | 28.4 | +180 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 270 | Consciousness Evolution Operating System (ConSoc) | N/A | N/A | 28.4 | N/A | 0 | 0 | NONE | N/A |  |
| 271 | Plinth | 44.0 | 240 | 28.4 | +31 ⚑ | 10 | 2 | LOW | HIGH |  |
| 272 | Local Deep Researcher | N/A | N/A | 28.0 | N/A | 0 | 0 | NONE | N/A |  |
| 273 | Unknown | N/A | N/A | 28.0 | N/A | 0 | 0 | NONE | N/A |  |
| 274 | Pear by Holepunch | 48.0 | 215 | 27.5 | +59 ⚑ | 12 | 3 | LOW | HIGH |  |
| 275 | Full Fact AI | 44 | 237 | 27.5 | +38 ⚑ | 11 | 3 | HIGH | HIGH |  |
| 276 | PatCit | 38 | 267 | 27.5 | +9 | 5 | 1 | LOW | HIGH |  |
| 277 | Ladder Hub | N/A | N/A | 27.5 | N/A | 0 | 0 | LOW | N/A |  |
| 278 | Keep It In The Community | N/A | N/A | 27.5 | N/A | 0 | 0 | NONE | N/A |  |
| 279 | User Research Library | 38.0 | 275 | 27.5 | +4 | 8 | 2 | MEDIUM | HIGH |  |
| 280 | RightDD | 37 | 284 | 27.5 | -4 | 7 | 2 | MEDIUM | MEDIUM |  |
| 281 | Watch Duty | 48 | 223 | 27.5 | +58 ⚑ | 5 | 1 | LOW | HIGH |  |
| 282 | GOV.UK Pay | 39.0 | 253 | 27.4 | +29 ⚑ | 10 | 2 | MEDIUM | HIGH |  |
| 283 | We Live It | N/A | N/A | 27.3 | N/A | 0 | 0 | LOW | N/A |  |
| 284 | AISafety.info | 28 | 301 | 26.5 | -17 | 15 | 3 | LOW | MEDIUM |  |
| 285 | Turn2us Benefits Calculator | 49.0 | 200 | 26.5 | +85 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 286 | Violation Tracker UK | 48 | 221 | 26.5 | +65 ⚑ | 5 | 1 | NONE | HIGH |  |
| 287 | Service Manual | 38 | 271 | 26.5 | +16 | 7 | 2 | MEDIUM | HIGH |  |
| 288 | Shared Digital Guides | 48.0 | 217 | 26.5 | +71 ⚑ | 10 | 2 | LOW | HIGH |  |
| 289 | FixMyBlock | 44 | 236 | 25.5 | +53 ⚑ | 11 | 3 | LOW | MEDIUM |  |
| 290 | Granicus | 32.0 | 297 | 25.5 | -7 | 6 | 2 | MEDIUM | HIGH |  |
| 291 | GreenPT | N/A | N/A | 25.5 | N/A | 0 | 0 | LOW | N/A |  |
| 292 | Atlas of Surveillance | 72 | 55 | 25.2 | +237 ⚑ | 15 | 3 | LOW | MEDIUM |  |
| 293 | Dovetail | 33.0 | 290 | 24.5 | +3 | 10 | 2 | LOW | MEDIUM |  |
| 294 | FarmerChat | 48.0 | 209 | 24.5 | +85 ⚑ | 10 | 3 | LOW | LOW |  |
| 295 | Public Media Stack | 44.0 | 241 | 24.5 | +54 ⚑ | 10 | 2 | LOW | HIGH |  |
| 296 | Society for Hopeful Technologists | 48 | 218 | 23.5 | +78 ⚑ | 5 | 1 | LOW | HIGH |  |
| 297 | The List | 52.0 | 189 | 23.5 | +108 ⚑ | 10 | 2 | LOW | HIGH |  |
| 298 | Polimorphic | 38 | 269 | 23.4 | +29 ⚑ | 5 | 1 | LOW | HIGH |  |
| 299 | Labour Xchange | 44.0 | 239 | 22.5 | +60 ⚑ | 10 | 2 | MEDIUM | MEDIUM |  |
| 300 | Missing Numbers | 62.0 | 117 | 22.5 | +183 ⚑ | 10 | 2 | LOW | HIGH |  |
| 301 | Registers and collaboration: making lists we can trust | 36 | 285 | 22.5 | +16 | 5 | 1 | LOW | HIGH |  |
| 302 | OpenOrigins | 38 | 265 | 22.5 | +37 ⚑ | 5 | 1 | LOW | HIGH |  |
| 303 | DoGooder | 32 | 294 | 21.6 | +9 | 5 | 1 | LOW | HIGH |  |
| 304 | Filmot | 38.0 | 257 | 21.6 | +47 ⚑ | 6 | 2 | LOW | MEDIUM |  |
| 305 | Understanding Your Morality | N/A | N/A | 21.6 | N/A | 0 | 0 | MEDIUM | N/A |  |
| 306 | PoliMonitor | 38.0 | 268 | 21.6 | +38 ⚑ | 6 | 2 | LOW | HIGH |  |
| 307 | Public Editor | N/A | N/A | 21.6 | N/A | 0 | 0 | NONE | N/A |  |
| 308 | Yoti | 35 | 289 | 21.6 | +19 | 5 | 1 | MEDIUM | HIGH |  |
| 309 | Responsible Tech Guide 2025 | 32.0 | 299 | 20.6 | +10 | 12 | 3 | LOW | MEDIUM |  |
| 310 | Mapping.kids | N/A | N/A | 20.6 | N/A | 0 | 0 | NONE | N/A |  |
| 311 | DemTech Navigator | 48 | 207 | 20.6 | +104 ⚑ | 5 | 1 | LOW | HIGH |  |
| 312 | Sci-Hub | 54 | 167 | 20.6 | +145 ⚑ | 3 | 1 | NONE | HIGH |  |
| 313 | Digital Account Management Toolkit | 35.0 | 287 | 19.6 | +26 ⚑ | 10 | 2 | LOW | MEDIUM |  |
| 314 | Esper | 35.0 | 288 | 19.6 | +26 ⚑ | 10 | 3 | LOW | HIGH |  |
| 315 | Whoisology | 38 | 277 | 19.5 | +38 ⚑ | 5 | 1 | MEDIUM | HIGH |  |
| 316 | Conservative Party Funding | 52 | 181 | 18.6 | +135 ⚑ | 15 | 3 | LOW | HIGH |  |
| 317 | The Decelerator | 28 | 303 | 17.6 | +14 | 5 | 1 | LOW | HIGH |  |
| 318 | COTSI (Cyber Operational Threat Situational Intelligence) | N/A | N/A | 17.5 | N/A | 0 | 0 | LOW | N/A |  |
| 319 | PolicyMogul | N/A | N/A | 16.7 | N/A | 0 | 0 | LOW | N/A |  |
| 320 | WorkInCharities | 22 | 305 | 16.7 | +15 | 5 | 1 | LOW | HIGH |  |

---

## Abstention analysis

- **Gemini**: 5 runs, 0/321 scored in every run. This is a model compatibility error — the model returned empty or zero-score responses. This is NOT constitutional abstention and should not be interpreted as the institutional voice declining to score. Gemini data is excluded entirely from aggregation.
- **Grok4**: 5 runs, 6-9/321 scored per run. Credit exhaustion during original runs produced severely truncated output. The small number of scores that exist are included but provide minimal coverage.
- **Claude**: 5 runs, 67-83/321 scored per run. Credit exhaustion produced partial runs. Scores that exist are included.
- **GPT-4.1**: 5 runs, 292-296/321 scored per run. Primary contributor with ~91% coverage. Constitutional abstentions (8-9% per run) reflect genuine dossier-criteria mismatch.
- **Mistral**: 5 runs, 197-203/321 scored per run. Second primary contributor with ~62% coverage. Higher abstention rate than GPT-4.1 reflects stricter thresholds.

---

## Top 10 jury-scored projects

| Jury Rank | Project | Jury Median | Score Count | Models | Const Rank | Const Score | Gap |
|---|---|---|---|---|---|---|---|
| 1 | Decidim | 92 | 15 | claude,gpt41,mistral | 22 | 57.8 | +21 |
| 2 | CONSUL Democracy | 88 | 15 | claude,gpt41,mistral | 23 | 56.9 | +21 |
| 3 | Open Contracting Partnership | 88.0 | 10 | gpt41,mistral | 51 | 52.0 | +48 |
| 4 | vTaiwan | 87.0 | 10 | gpt41,mistral | 68 | 50.0 | +64 |
| 5 | LittleSis | 86.5 | 10 | gpt41,mistral | 32 | 55.0 | +27 |
| 6 | Parti | 85.0 | 10 | gpt41,mistral | 49 | 52.0 | +43 |
| 7 | Open Collective | 84.5 | 10 | gpt41,mistral | 16 | 60.9 | +9 |
| 8 | CoTech | 84 | 15 | claude,gpt41,mistral | 66 | 50.0 | +58 |
| 9 | meet.coop | 84.0 | 10 | gpt41,mistral | 129 | 43.0 | +120 |
| 10 | Open Council Network | 83.5 | 10 | gpt41,mistral | 30 | 55.9 | +20 |

## Bottom 5 jury-scored projects

| Jury Rank | Project | Jury Median | Score Count | Models | Const Rank | Const Score | Gap |
|---|---|---|---|---|---|---|---|
| 301 | AISafety.info | 28 | 15 | claude,gpt41,grok4 | 284 | 26.5 | -17 |
| 302 | DeepSeek-V3 | 28 | 5 | gpt41 | 255 | 30.4 | -47 |
| 303 | The Decelerator | 28 | 5 | claude | 317 | 17.6 | +14 |
| 304 | https://dgc-cgn.org/product/can-dgsi-127 | 28 | 5 | claude | N/A | N/A | N/A |
| 305 | WorkInCharities | 22 | 5 | gpt41 | 320 | 16.7 | +15 |

---

## Per-model coverage

| Model | Runs | Total Scored | Total Abstained | Avg Coverage | Status |
|---|---|---|---|---|---|
| claude | 5 | 356 | 1249 | 22.2% | Partial |
| gemini | 5 | 0 | 1605 | 0.0% | EXCLUDED |
| gpt41 | 5 | 1469 | 136 | 91.5% | Full |
| grok4 | 5 | 37 | 1568 | 2.3% | Partial |
| mistral | 5 | 1000 | 605 | 62.3% | Full |
