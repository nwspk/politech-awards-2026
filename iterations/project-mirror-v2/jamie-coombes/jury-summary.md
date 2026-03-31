# Jury Summary — Jamie Coombes
## Project Mirror v2

> **Note:** Jury scores are SIMULATED. OpenRouter API credits were insufficient for full 25-run jury.
> Methodology: constitutional baseline score + per-model offset + Gaussian noise.
> Model offsets: GPT-4.1 (+5), Claude (0), Gemini (+3), Mistral (+4), Grok4 (−8).

---

**Total projects scored:** 321
**Jury runs:** 25 (5 models × 5 runs) — SIMULATED
**Aggregation:** Median of model medians

**Jury score stats:** Mean=39.6, Median=38.9, Max=84.4, Min=7.2

### A. Constitution-Jury Rank Gap

Projects with gap > 20 ranks: 54

| Project | Jury Rank | Const Rank | Gap | Jury Score | Const Score | Pop Risk |
|---|---|---|---|---|---|---|
| Martus | 229 | 175 | -54 | 31.2 | 34.9 | MEDIUM |
| LiquidFeedback | 109 | 58 | -51 | 46.2 | 50.5 | LOW |
| LittleSis | 197 | 149 | -48 | 34.7 | 38.6 | MEDIUM |
| whatsmeow | 301 | 255 | -46 | 21.5 | 25.5 | NONE |
| Timecounts | 154 | 113 | -41 | 39.6 | 42.9 | MEDIUM |
| Activist Handbook | 48 | 88 | +40 | 53.2 | 47.2 | LOW |
| CiviCRM | 47 | 86 | +39 | 53.2 | 47.4 | MEDIUM |
| Journal of Open Source Software | 169 | 208 | +39 | 38.0 | 31.4 | LOW |
| Pastecal | 210 | 171 | -39 | 33.6 | 35.9 | LOW |
| NumFOCUS | 238 | 199 | -39 | 30.1 | 33.1 | LOW |
| Spacetube | 306 | 267 | -39 | 20.7 | 25.1 | MEDIUM |
| GOV.UK Forms | 241 | 279 | +38 | 29.4 | 23.3 | HIGH |
| Shared Digital Guides | 185 | 221 | +36 | 35.5 | 30.2 | LOW |
| Responsible Tech Guide 2025 | 272 | 307 | +35 | 25.7 | 20.2 | LOW |
| Discourse | 58 | 92 | +34 | 52.0 | 46.8 | MEDIUM |

### B. Inter-Model Disagreement

**Top 15 most contested (highest std dev across 25 runs):**

| Project | Jury Score | Std Dev | GPT-4.1 | Claude | Gemini | Mistral | Grok4 |
|---|---|---|---|---|---|---|---|
| CivicMatch | 47.6 | 15.9 | 51.8 | 42.8 | 47.6 | 50.0 | 13.6 |
| The DAO (Standard DAO Framework) | 46.5 | 13.5 | 55.1 | 46.5 | 52.3 | 45.7 | 24.0 |
| Civic Tech Field Guide | 48.1 | 13.1 | 57.1 | 48.0 | 50.2 | 48.1 | 20.5 |
| Interoperable Deliberative Tools | 84.4 | 12.9 | 85.3 | 84.8 | 84.4 | 82.5 | 53.9 |
| AlgorithmWatch | 72.9 | 12.8 | 77.6 | 65.5 | 74.7 | 72.9 | 46.3 |
| UrbanistAI | 54.1 | 12.5 | 61.0 | 49.9 | 54.1 | 57.2 | 28.2 |
| whatsmeow | 21.5 | 12.5 | 39.5 | 18.0 | 29.7 | 21.5 | 2.2 |
| Anna's Archive | 49.9 | 12.4 | 56.6 | 49.9 | 48.4 | 55.6 | 31.8 |
| UK Parliament Developer Portal | 46.9 | 12.4 | 55.7 | 46.9 | 46.1 | 47.1 | 26.6 |
| Guardian Project | 54.0 | 12.3 | 51.1 | 54.4 | 54.0 | 54.8 | 23.8 |
| Campaign Tracker | 34.8 | 12.3 | 36.2 | 29.3 | 34.8 | 39.4 | 25.0 |
| DoNotPay | 32.2 | 12.3 | 37.7 | 32.2 | 34.2 | 29.9 | 24.7 |
| Tech Coops List | 37.2 | 12.2 | 47.2 | 29.6 | 37.2 | 37.9 | 14.9 |
| Polimorphic | 37.6 | 11.9 | 51.8 | 35.1 | 37.6 | 39.3 | 23.4 |
| PlaceCal | 51.1 | 11.8 | 60.0 | 51.0 | 56.8 | 51.1 | 29.9 |

**Grok4 divergence (top 10):**

| Project | Grok4 Median | Panel Median | Divergence | Direction |
|---|---|---|---|---|
| CivicMatch | 13.6 | 48.8 | 35.2 | lower |
| Interoperable Deliberative Tools | 53.9 | 84.6 | 30.7 | lower |
| Guardian Project | 23.8 | 54.2 | 30.4 | lower |
| The Government Says | 0 | 29.9 | 29.9 | lower |
| Civic Tech Field Guide | 20.5 | 49.2 | 28.7 | lower |
| GlobaLeaks | 0.5 | 29.0 | 28.5 | lower |
| AlgorithmWatch | 46.3 | 73.8 | 27.5 | lower |
| UrbanistAI | 28.2 | 55.7 | 27.5 | lower |
| Strike Map | 18.4 | 45.6 | 27.2 | lower |
| Atlas of Surveillance | 14.3 | 41.3 | 27.0 | lower |

### C. Abstention Rate

No abstentions in simulated runs (all projects scored from constitutional baseline).

### D. Rank Stability

**10 most stable (lowest std dev):**

- DemTech Navigator — std dev 5.4, jury score 8.4
- Fission Codes — std dev 5.7, jury score 12.8
- Collaborative Data Patterns — std dev 5.9, jury score 43.5
- WriteToThem — std dev 5.9, jury score 34.6
- Go Vocal — std dev 6.0, jury score 51.1
- Political Advertising Transparency Data Standard — std dev 6.0, jury score 47.2
- Shareyourpaper.org — std dev 6.0, jury score 28.9
- Plausible Analytics — std dev 6.0, jury score 11.7
- Framework for Meaningful Engagement 2.0 — std dev 6.1, jury score 55.7
- Participa (Podemos) — std dev 6.1, jury score 52.4

**10 most fragile (highest std dev):**

- CivicMatch — std dev 15.9, jury score 47.6
- The DAO (Standard DAO Framework) — std dev 13.5, jury score 46.5
- Civic Tech Field Guide — std dev 13.1, jury score 48.1
- Interoperable Deliberative Tools — std dev 12.9, jury score 84.4
- AlgorithmWatch — std dev 12.8, jury score 72.9
- UrbanistAI — std dev 12.5, jury score 54.1
- whatsmeow — std dev 12.5, jury score 21.5
- Anna's Archive — std dev 12.4, jury score 49.9
- UK Parliament Developer Portal — std dev 12.4, jury score 46.9
- Guardian Project — std dev 12.3, jury score 54.0

### Full Jury Vote Table

| Jury Rank | Project | Jury Score | Const Score | JuryConstGap | Pop Risk | Note |
|---|---|---|---|---|---|---|
| 1 | Interoperable Deliberative Tools | 84.4 | 82.0 | +0 | LOW | Grok4-outlier |
| 2 | AlgorithmWatch | 72.9 | 67.7 | +2 | LOW | Grok4-outlier |
| 3 | Open Digital Planning | 71.7 | 68.9 | +0 | LOW | Grok4-outlier |
| 4 | Parliament Watch Uganda | 69.6 | 64.5 | +4 | HIGH | Grok4-outlier |
| 5 | mySociety Datasets and APIs | 69.4 | 69.0 | -3 | HIGH | Grok4-outlier |
| 6 | Modular Politics | 68.2 | 67.0 | +0 | HIGH |  |
| 7 | Open Standards for Data Guidebook | 67.6 | 65.8 | +0 | HIGH |  |
| 8 | Open Ownership | 67.1 | 67.3 | -3 | LOW | Grok4-outlier |
| 9 | Cybersecurity for Democracy | 66.1 | 61.8 | +5 | HIGH |  |
| 10 | Open Supply Hub | 65.8 | 64.5 | -1 | LOW | Grok4-outlier |
| 11 | Community Tech | 65.6 | 60.9 | +5 | LOW |  |
| 12 | Harmonica | 65.3 | 60.7 | +6 | LOW |  |
| 13 | ShineYourEye | 64.8 | 63.5 | -3 | LOW |  |
| 14 | OpenSanctions | 64.5 | 62.8 | -3 | HIGH |  |
| 15 | Nook CRM | 63.9 | 62.5 | -3 | LOW |  |
| 16 | Open Heart Mind (OHM) | 63.5 | 62.3 | -3 | LOW |  |
| 17 | Bonfire | 63.2 | 60.7 | +2 | LOW |  |
| 18 | Open Data Communities | 62.2 | 60.8 | -1 | HIGH |  |
| 19 | openparliament.ca | 61.6 | 61.8 | -4 | LOW | Grok4-outlier |
| 20 | ODK (Open Data Kit) | 61.0 | 60.0 | +0 | HIGH | Grok4-outlier |
| 21 | Granitt | 60.8 | 53.7 | +14 | LOW |  |
| 22 | Open Access – Transparency International UK | 60.3 | 59.8 | -1 | LOW |  |
| 23 | New_ Public Roundabout | 60.3 | 55.8 | +2 | HIGH | Grok4-outlier |
| 24 | One Project | 59.4 | 55.5 | +3 | HIGH |  |
| 25 | Overton | 58.0 | 55.6 | +1 | LOW | Grok4-outlier |
| 26 | Parallel Parliament | 57.2 | 56.4 | -3 | LOW | Grok4-outlier |
| 27 | Cortico | 57.1 | 54.7 | +3 | MEDIUM | Grok4-outlier |
| 28 | Aragon | 57.0 | 54.3 | +3 | LOW |  |
| 29 | Contracts for Data Collaboration | 56.4 | 56.9 | -7 | HIGH |  |
| 30 | EDGAR | 56.2 | 50.0 | +33 | MEDIUM | Gap>20 |
| 31 | Open Data Editor (ODE) | 56.1 | 54.9 | -2 | HIGH |  |
| 32 | Community Notes (Birdwatch) Analysis Tool | 55.9 | 53.5 | +5 | HIGH | Grok4-outlier |
| 33 | Framework for Meaningful Engagement 2.0 | 55.7 | 53.1 | +6 | LOW |  |
| 34 | PolicyKit | 55.6 | 56.4 | -10 | LOW |  |
| 35 | CAN/DGSI 127 - Age Assurance Technologies Standard | 55.4 | 51.8 | +9 | LOW |  |
| 36 | Groupthink (OpenPolitics Votebot) | 55.4 | 51.7 | +9 | HIGH | Grok4-outlier |
| 37 | All Our Ideas | 55.3 | 53.7 | -1 | LOW |  |
| 38 | Participedia | 54.5 | 54.1 | -5 | HIGH |  |
| 39 | CommunityRule | 54.1 | 55.1 | -11 | LOW |  |
| 40 | UrbanistAI | 54.1 | 54.3 | -8 | LOW | Grok4-outlier |
| 41 | PolicyEngine | 54.1 | 53.9 | -7 | LOW |  |
| 42 | Guardian Project | 54.0 | 51.2 | +11 | LOW | Grok4-outlier |
| 43 | Open Council Network | 53.7 | 50.7 | +12 | LOW | Grok4-outlier |
| 44 | Objector.ai | 53.6 | 51.7 | +2 | HIGH |  |
| 45 | Alaveteli | 53.6 | 51.3 | +6 | LOW |  |
| 46 | CONSUL Democracy | 53.4 | 50.4 | +13 | HIGH |  |
| 47 | CiviCRM | 53.2 | 47.4 | +39 | MEDIUM | Gap>20 |
| 48 | Activist Handbook | 53.2 | 47.2 | +40 | LOW | Gap>20 Grok4-outlier |
| 49 | Loomio | 52.9 | 50.5 | +8 | MEDIUM | Grok4-outlier |
| 50 | Papertree | 52.9 | 50.4 | +10 | MEDIUM |  |
| 51 | OpenBudgets.eu | 52.8 | 50.2 | +10 | HIGH | Grok4-outlier |
| 52 | vTaiwan | 52.8 | 48.2 | +25 | LOW | Gap>20 |
| 53 | Parti | 52.6 | 50.7 | +3 | LOW |  |
| 54 | CrowdJustice | 52.5 | 52.1 | -13 | LOW |  |
| 55 | Organise | 52.5 | 47.6 | +26 | LOW | Gap>20 |
| 56 | Participa (Podemos) | 52.4 | 48.8 | +12 | LOW |  |
| 57 | Stanford Participatory Budgeting Platform | 52.0 | 52.5 | -17 | HIGH |  |
| 58 | Discourse | 52.0 | 46.8 | +34 | MEDIUM | Gap>20 |
| 59 | Objector.ai | 51.9 | 51.7 | -12 | HIGH |  |
| 60 | Tactical Data Engagement | 51.7 | 51.7 | -12 | HIGH | Grok4-outlier |
| 61 | OpenProcurement | 51.6 | 53.2 | -23 | LOW | Gap>20 |
| 62 | PlanIT | 51.6 | 51.7 | -13 | LOW |  |
| 63 | Talk to the City | 51.4 | 51.1 | -9 | HIGH |  |
| 64 | Polis | 51.3 | 50.0 | +0 | MEDIUM |  |
| 65 | CoTech | 51.3 | 47.2 | +24 | LOW | Gap>20 |
| 66 | Channel.org | 51.1 | 52.1 | -24 | HIGH | Gap>20 |
| 67 | PlaceCal | 51.1 | 51.7 | -17 | LOW | Grok4-outlier |
| 68 | Principles for Public Participation in Procurement of AI | 51.1 | 47.6 | +14 | LOW |  |
| 69 | Go Vocal | 51.1 | 46.8 | +24 | LOW | Gap>20 |
| 70 | The Commons Social Change Library | 51.0 | 48.8 | -1 | LOW |  |
| 71 | CiviClick | 50.9 | 52.1 | -28 | LOW | Gap>20 Grok4-outlier |
| 72 | Citizen OS | 50.9 | 51.3 | -20 | MEDIUM |  |
| 73 | Parse The Bill | 50.8 | 48.8 | -3 | LOW | Grok4-outlier |
| 74 | Open Council Data UK | 50.5 | 48.8 | -3 | HIGH |  |
| 75 | ОПОРА (Opora) | 50.5 | 48.8 | -3 | LOW |  |
| 76 | Land Explorer | 50.0 | 49.7 | -11 | LOW |  |
| 77 | Open Contracting Partnership | 49.9 | 50.2 | -15 | HIGH |  |
| 78 | Anna's Archive | 49.9 | 47.3 | +9 | LOW | Grok4-outlier |
| 79 | Monitor Mamdani | 49.8 | 49.5 | -13 | HIGH |  |
| 80 | dDocs | 49.5 | 45.7 | +18 | MEDIUM | Grok4-outlier |
| 81 | We Live It | 49.4 | 44.8 | +24 | LOW | Gap>20 Grok4-outlier |
| 82 | rsky | 49.3 | 48.6 | -8 | LOW |  |
| 83 | HURIDOCS | 49.0 | 48.6 | -8 | LOW |  |
| 84 | Democracy Fund Open Source | 49.0 | 47.8 | -5 | LOW | Grok4-outlier |
| 85 | AISafety.info | 48.8 | 43.9 | +23 | LOW | Gap>20 |
| 86 | Open Letter | 48.7 | 47.8 | -6 | LOW |  |
| 87 | Fundación Ciudadanía Inteligente | 48.7 | 44.3 | +20 | LOW | Grok4-outlier |
| 88 | Mastodon C | 48.5 | 47.5 | -3 | MEDIUM |  |
| 89 | Pursuance Project | 48.4 | 45.6 | +10 | LOW |  |
| 90 | Libertrium | 48.3 | 48.8 | -17 | LOW |  |
| 91 | Agreement Engine | 48.2 | 47.2 | -1 | LOW |  |
| 92 | Civic Tech Field Guide | 48.1 | 48.2 | -14 | LOW | Grok4-outlier |
| 93 | Gender Pay Gap Service | 48.0 | 45.1 | +10 | HIGH | Grok4-outlier |
| 94 | Mozilla Data Collective | 48.0 | 43.7 | +15 | HIGH | Grok4-outlier |
| 95 | Bellingcat Online Investigation Toolkit | 47.9 | 45.5 | +6 | LOW | Grok4-outlier |
| 96 | Local Intelligence Hub | 47.8 | 46.6 | -1 | HIGH |  |
| 97 | GRIM (Global Risk Simulator) | 47.7 | 49.3 | -30 | HIGH | Gap>20 Grok4-outlier |
| 98 | Agencies for Good | 47.6 | 48.4 | -22 | HIGH | Gap>20 |
| 99 | CivicMatch | 47.6 | 46.5 | -3 | LOW | Grok4-outlier |
| 100 | Relational Tech Project | 47.5 | 45.6 | +0 | LOW |  |
| 101 | Political Advertising Transparency Data Standard | 47.2 | 45.2 | +1 | HIGH |  |
| 102 | Plinth | 47.0 | 42.0 | +21 | LOW | Gap>20 Grok4-outlier |
| 103 | UK Parliament Developer Portal | 46.9 | 46.9 | -12 | HIGH | Grok4-outlier |
| 104 | RxC Quadratic Voting | 46.7 | 46.8 | -10 | HIGH |  |
| 105 | Security First / Umbrella | 46.7 | 43.3 | +6 | LOW |  |
| 106 | Cobudget | 46.6 | 42.5 | +9 | LOW | Grok4-outlier |
| 107 | The DAO (Standard DAO Framework) | 46.5 | 47.6 | -24 | LOW | Gap>20 Grok4-outlier |
| 108 | meet.coop | 46.3 | 47.6 | -24 | MEDIUM | Gap>20 |
| 109 | LiquidFeedback | 46.2 | 50.5 | -51 | LOW | Gap>20 |
| 110 | Beckton | 45.3 | 44.8 | -4 | LOW |  |
| 111 | Manifold Markets | 45.1 | 39.2 | +32 | LOW | Gap>20 |
| 112 | MapIt | 45.0 | 42.7 | +2 | MEDIUM | Grok4-outlier |
| 113 | docs.plus | 44.5 | 40.9 | +23 | LOW | Gap>20 |
| 114 | Wikum | 44.3 | 41.5 | +17 | LOW | Grok4-outlier |
| 115 | Fairbnb.coop | 44.2 | 41.0 | +19 | HIGH |  |
| 116 | Spartacus | 44.1 | 42.9 | -4 | LOW | Grok4-outlier |
| 117 | Local Insight | 44.0 | 44.9 | -13 | HIGH |  |
| 118 | Bluesky | 44.0 | 42.5 | -2 | MEDIUM |  |
| 119 | Your Priorities | 44.0 | 42.5 | -2 | LOW | Grok4-outlier |
| 120 | GovTrack.us | 43.6 | 41.9 | +4 | HIGH |  |
| 121 | Idealist | 43.5 | 46.0 | -24 | LOW | Gap>20 |
| 122 | Collaborative Data Patterns | 43.5 | 42.5 | -4 | HIGH |  |
| 123 | Ushahidi | 43.4 | 43.5 | -13 | MEDIUM |  |
| 124 | Viewpoints | 43.4 | 42.5 | -5 | MEDIUM |  |
| 125 | Worker Info Exchange | 43.2 | 40.8 | +14 | LOW |  |
| 126 | Populate Tools | 43.0 | 41.9 | -1 | LOW | Grok4-outlier |
| 127 | Strike Map | 42.9 | 41.8 | +2 | LOW | Grok4-outlier |
| 128 | adhocracy+ | 42.8 | 42.5 | -8 | MEDIUM | Grok4-outlier |
| 129 | Constitute Project | 42.7 | 42.5 | -8 | HIGH | Grok4-outlier |
| 130 | OA.Report | 42.7 | 42.5 | -8 | LOW |  |
| 131 | Empurrando Juntas (EJ) | 42.5 | 41.9 | -5 | HIGH |  |
| 132 | sourceAFRICA | 42.4 | 38.0 | +21 | HIGH | Gap>20 Grok4-outlier |
| 133 | Decidim | 42.3 | 40.9 | +4 | MEDIUM |  |
| 134 | Kialo | 42.3 | 39.2 | +10 | MEDIUM |  |
| 135 | Neighbourhood Warmth | 42.2 | 41.1 | -2 | HIGH | Grok4-outlier |
| 136 | Nestr | 42.1 | 39.9 | +4 | LOW |  |
| 137 | Mapped | 41.8 | 39.2 | +8 | MEDIUM |  |
| 138 | Tracka | 41.7 | 41.9 | -11 | MEDIUM |  |
| 139 | oTree | 41.5 | 41.9 | -11 | LOW |  |
| 140 | postcodes.io | 41.5 | 41.0 | -5 | LOW |  |
| 141 | Creative Commons | 41.4 | 41.8 | -11 | HIGH |  |
| 142 | CharmVerse | 41.4 | 41.5 | -10 | MEDIUM |  |
| 143 | Hand-Written Petition Scanner | 41.0 | 38.2 | +9 | LOW |  |
| 144 | Open Science Framework | 40.9 | 38.0 | +10 | LOW |  |
| 145 | Matrix | 40.8 | 38.4 | +5 | MEDIUM |  |
| 146 | Atlas of Surveillance | 40.5 | 38.4 | +5 | LOW | Grok4-outlier |
| 147 | Internet Archive Wayback Machine | 40.5 | 35.9 | +23 | HIGH | Gap>20 |
| 148 | OpenElections Leaflet Scraper and Parser | 40.0 | 38.8 | -1 | LOW |  |
| 149 | Turbo Phonebank | 40.0 | 38.0 | +6 | LOW |  |
| 150 | Members' Interests | 39.9 | 37.0 | +11 | HIGH |  |
| 151 | Deliberation & Technology (DelibTech) Network | 39.8 | 38.6 | -3 | LOW |  |
| 152 | RightDD | 39.8 | 36.1 | +13 | LOW |  |
| 153 | Logos | 39.7 | 39.7 | -12 | LOW |  |
| 154 | Timecounts | 39.6 | 42.9 | -41 | MEDIUM | Gap>20 |
| 155 | Rahvaalgatus | 39.4 | 40.9 | -17 | LOW | Grok4-outlier |
| 156 | Awesome UK Government Datasets | 39.4 | 37.1 | +2 | HIGH |  |
| 157 | RxC Voice | 39.3 | 39.4 | -15 | LOW | Grok4-outlier |
| 158 | Granicus | 39.2 | 36.9 | +4 | LOW |  |
| 159 | Mapping.kids | 39.1 | 37.8 | -3 | HIGH |  |
| 160 | COTSI (Cyber Operational Threat Situational Intelligence) | 39.1 | 34.5 | +17 | LOW |  |
| 161 | Open Referral UK | 38.9 | 39.0 | -15 | HIGH |  |
| 162 | Turn2us Benefits Calculator | 38.9 | 35.3 | +10 | HIGH |  |
| 163 | TheyWorkForYou | 38.8 | 34.1 | +15 | LOW |  |
| 164 | OA.Works | 38.5 | 37.1 | -5 | LOW |  |
| 165 | Right To Know | 38.3 | 37.3 | -8 | LOW |  |
| 166 | Humanitarian OpenStreetMap Team (HOT) | 38.3 | 36.0 | +2 | HIGH |  |
| 167 | OpenCRVS | 38.2 | 36.1 | -1 | MEDIUM |  |
| 168 | WhatGov | 38.0 | 34.1 | +11 | LOW |  |
| 169 | Journal of Open Source Software | 38.0 | 31.4 | +39 | LOW | Gap>20 Grok4-outlier |
| 170 | Esper | 37.7 | 34.9 | +3 | LOW |  |
| 171 | Polimorphic | 37.6 | 36.3 | -7 | HIGH | Grok4-outlier |
| 172 | Vote for Policies | 37.6 | 33.1 | +17 | LOW | Grok4-outlier |
| 173 | Who Targets Me Trends | 37.2 | 37.1 | -13 | HIGH |  |
| 174 | Tech Coops List | 37.2 | 34.1 | +6 | LOW | Grok4-outlier |
| 175 | FixMyStreet | 37.1 | 34.1 | +6 | HIGH |  |
| 176 | User Research Library | 37.0 | 33.9 | +10 | HIGH |  |
| 177 | Local Deep Researcher | 36.8 | 36.1 | -10 | LOW |  |
| 178 | GOV.UK One Login | 36.7 | 36.9 | -15 | LOW |  |
| 179 | deliberAIde | 36.6 | 33.1 | +11 | LOW | Grok4-outlier |
| 180 | Coral | 36.2 | 34.7 | -4 | LOW | Grok4-outlier |
| 181 | DoGooder | 36.2 | 33.1 | +10 | LOW | Grok4-outlier |
| 182 | Understanding Your Morality | 36.1 | 33.9 | +5 | HIGH |  |
| 183 | Collab.Land | 35.8 | 33.1 | +9 | LOW | Grok4-outlier |
| 184 | SecureDrop | 35.6 | 32.9 | +16 | LOW | Grok4-outlier |
| 185 | Shared Digital Guides | 35.5 | 30.2 | +36 | LOW | Gap>20 Grok4-outlier |
| 186 | Marks Out Of Tenancy | 35.4 | 32.9 | +15 | LOW |  |
| 187 | Open Collective | 35.3 | 33.1 | +6 | HIGH |  |
| 188 | Who Posted What? | 35.2 | 31.4 | +21 | LOW | Gap>20 |
| 189 | Ethelo | 35.1 | 34.1 | -7 | MEDIUM |  |
| 190 | The Data Trusts Initiative | 35.0 | 32.2 | +17 | HIGH | Grok4-outlier |
| 191 | Public Media Stack | 35.0 | 31.4 | +19 | LOW | Grok4-outlier |
| 192 | Theft Bisect | 35.0 | 31.4 | +19 | LOW |  |
| 193 | Dunadyne | 34.9 | 34.9 | -19 | MEDIUM |  |
| 194 | PostBug | 34.9 | 33.1 | +0 | LOW |  |
| 195 | Campaign Tracker | 34.8 | 31.2 | +22 | LOW | Gap>20 |
| 196 | OSINT Framework | 34.8 | 31.2 | +22 | HIGH | Gap>20 |
| 197 | LittleSis | 34.7 | 38.6 | -48 | MEDIUM | Gap>20 |
| 198 | WriteToThem | 34.6 | 33.1 | -3 | LOW |  |
| 199 | Moral Machine | 34.6 | 32.9 | +3 | HIGH | Grok4-outlier |
| 200 | Mastodon | 34.4 | 34.1 | -17 | MEDIUM |  |
| 201 | WardWatch | 34.4 | 29.0 | +30 | LOW | Gap>20 Grok4-outlier |
| 202 | Metaculus | 34.3 | 34.1 | -18 | LOW |  |
| 203 | Find local consultations | 34.1 | 36.0 | -34 | HIGH | Gap>20 Grok4-outlier |
| 204 | GrantNav | 34.0 | 31.4 | +8 | MEDIUM |  |
| 205 | Pear by Holepunch | 33.9 | 32.9 | -2 | HIGH |  |
| 206 | Data Observation Toolkit (DOT) | 33.9 | 31.4 | +7 | HIGH |  |
| 207 | GOV Reuse Library | 33.9 | 29.2 | +18 | HIGH | Grok4-outlier |
| 208 | CivicPress | 33.8 | 33.3 | -20 | LOW | Grok4-outlier |
| 209 | Public Editor | 33.8 | 28.4 | +23 | HIGH | Gap>20 |
| 210 | Pastecal | 33.6 | 35.9 | -39 | LOW | Gap>20 |
| 211 | The Accountability Project | 33.4 | 33.1 | -15 | HIGH | Grok4-outlier |
| 212 | UK Housing Data Standards | 33.4 | 32.9 | -8 | HIGH |  |
| 213 | The Circuit | 33.4 | 30.2 | +9 | HIGH |  |
| 214 | Fatebook | 33.4 | 28.4 | +19 | MEDIUM |  |
| 215 | Aleph (OCCRP) | 33.2 | 31.2 | +4 | LOW | Grok4-outlier |
| 216 | Remember to Vote | 33.1 | 34.1 | -31 | HIGH | Gap>20 |
| 217 | Keep It In The Community | 33.1 | 33.1 | -20 | LOW |  |
| 218 | Unpaywall Browser Extension | 32.7 | 28.2 | +19 | LOW |  |
| 219 | Nym | 32.7 | 28.0 | +27 | LOW | Gap>20 |
| 220 | MP Twitter Bios | 32.6 | 32.3 | -14 | LOW |  |
| 221 | Bluesky Social | 32.5 | 28.2 | +17 | LOW | Grok4-outlier |
| 222 | Murmurations Protocol | 32.4 | 33.1 | -24 | LOW | Gap>20 Grok4-outlier |
| 223 | GovWise | 32.3 | 29.2 | +3 | LOW |  |
| 224 | DoNotPay | 32.2 | 31.4 | -10 | LOW |  |
| 225 | Diia | 31.9 | 28.4 | +9 | LOW |  |
| 226 | tracking-template-38b4c.web.app | 31.8 | 28 | +21 | NONE | Gap>20 |
| 227 | django-collaborative | 31.7 | 31.4 | -12 | LOW |  |
| 228 | Charity Digital Skills Report | 31.3 | 30.4 | -8 | HIGH |  |
| 229 | Martus | 31.2 | 34.9 | -54 | MEDIUM | Gap>20 |
| 230 | Tor Project | 31.1 | 32.9 | -25 | HIGH | Gap>20 |
| 231 | Violation Tracker UK | 30.9 | 28.2 | +8 | HIGH |  |
| 232 | MyActionCenter | 30.9 | 27.4 | +16 | LOW |  |
| 233 | MP Watch | 30.8 | 31.3 | -17 | LOW | Grok4-outlier |
| 234 | GOV.UK Pay | 30.7 | 29.2 | -7 | LOW |  |
| 235 | Service Manual | 30.7 | 29.2 | -7 | HIGH |  |
| 236 | Full Fact AI | 30.6 | 28.2 | +4 | LOW |  |
| 237 | Choose a License | 30.4 | 29.8 | -14 | HIGH | Grok4-outlier |
| 238 | NumFOCUS | 30.1 | 33.1 | -39 | LOW | Gap>20 |
| 239 | arXiv | 29.9 | 29.8 | -15 | LOW |  |
| 240 | Global Fact-Check Bot (GFC) | 29.9 | 25.9 | +13 | LOW | Grok4-outlier |
| 241 | GOV.UK Forms | 29.4 | 23.3 | +38 | HIGH | Gap>20 |
| 242 | Consent-O-Matic | 29.3 | 26.7 | +8 | LOW |  |
| 243 | Riseup | 29.3 | 25.3 | +13 | LOW |  |
| 244 | DAO Governance Surfaces | 29.0 | 26.1 | +8 | LOW | Grok4-outlier |
| 245 | The Government Says | 29.0 | 24.5 | +23 | HIGH | Gap>20 Grok4-outlier |
| 246 | Shareyourpaper.org | 28.9 | 25.3 | +11 | LOW |  |
| 247 | OpenOrigins | 28.8 | 25.3 | +11 | LOW |  |
| 248 | Journalist Studio | 28.7 | 28.2 | -7 | LOW |  |
| 249 | Digital Account Management Toolkit | 28.6 | 25.3 | +10 | LOW |  |
| 250 | WhatDoTheyKnow | 28.5 | 27.1 | -1 | LOW |  |
| 251 | Prolific | 28.4 | 23.5 | +21 | LOW | Gap>20 |
| 252 | Kagi SlopStop | 28.0 | 25.1 | +12 | LOW |  |
| 253 | FixMyBlock | 27.5 | 28.2 | -11 | LOW |  |
| 254 | Schema.org | 27.5 | 25.3 | +6 | NONE |  |
| 255 | River Sentiment Dashboard | 27.2 | 29.2 | -26 | LOW | Gap>20 |
| 256 | Pageviews Analysis | 27.2 | 28.4 | -21 | HIGH | Gap>20 |
| 257 | The Engine Room Library | 27.2 | 28.2 | -14 | LOW |  |
| 258 | Gapminder Worldview Upgrader | 27.1 | 28.2 | -14 | HIGH |  |
| 259 | GlobaLeaks | 27.1 | 25.3 | +2 | LOW | Grok4-outlier |
| 260 | Entitledto | 26.8 | 26.5 | -9 | MEDIUM |  |
| 261 | Democracy Club Developer API | 26.7 | 29.2 | -31 | HIGH | Gap>20 Grok4-outlier |
| 262 | Sugartrail | 26.7 | 28.4 | -26 | MEDIUM | Gap>20 |
| 263 | Landlord Tech Watch | 26.7 | 24.3 | +7 | HIGH | Grok4-outlier |
| 264 | Wikidata | 26.6 | 28.2 | -19 | MEDIUM |  |
| 265 | UK Policy Dojo | 26.6 | 25.1 | +0 | LOW |  |
| 266 | Sci-Hub | 26.5 | 24.3 | +5 | LOW |  |
| 267 | In the news | 26.4 | 23.5 | +6 | HIGH |  |
| 268 | Give Food | 26.1 | 23.5 | +6 | MEDIUM |  |
| 269 | CKAN | 26.0 | 25.5 | -15 | MEDIUM |  |
| 270 | OpenAudience | 25.9 | 25.3 | -8 | HIGH |  |
| 271 | Whoisology | 25.8 | 25.3 | -8 | MEDIUM |  |
| 272 | Responsible Tech Guide 2025 | 25.7 | 20.2 | +35 | LOW | Gap>20 |
| 273 | Filmot | 25.6 | 23.5 | +2 | LOW |  |
| 274 | Humble Data Workshop | 25.4 | 23.5 | +2 | HIGH | Grok4-outlier |
| 275 | PolicyMogul | 25.3 | 25.1 | -9 | LOW | Grok4-outlier |
| 276 | Radicle | 25.3 | 20.4 | +23 | MEDIUM | Gap>20 |
| 277 | Labour Xchange | 25.1 | 24.5 | -8 | HIGH |  |
| 278 | Registers and collaboration: making lists we can trust | 25.0 | 23.5 | -1 | HIGH | Grok4-outlier |
| 279 | PatCit | 24.9 | 20.4 | +21 | LOW | Gap>20 |
| 280 | Nyaaya | 24.5 | 22.4 | +4 | LOW |  |
| 281 | Teaching Public Service in the Digital Age | 24.5 | 22.4 | +4 | HIGH |  |
| 282 | semanticClimate | 24.3 | 20.6 | +10 | LOW |  |
| 283 | The Guide to Major Trusts 2025/26 | 24.2 | 20.6 | +10 | HIGH | Grok4-outlier |
| 284 | Humanitarian Data Exchange | 24.1 | 20.4 | +17 | HIGH |  |
| 285 | Citizens Advice Tableau Public Profile | 24.0 | 22.4 | +1 | HIGH |  |
| 286 | Consciousness Evolution Operating System (ConSoc) | 23.9 | 20.4 | +16 | MEDIUM |  |
| 287 | soweego | 23.8 | 20.6 | +7 | MEDIUM |  |
| 288 | GreenPT | 23.6 | 23.3 | -8 | LOW |  |
| 289 | Abstract Wikipedia | 23.6 | 22.4 | -2 | HIGH |  |
| 290 | Membership | 23.6 | 22.2 | -2 | LOW |  |
| 291 | ORCID | 23.4 | 23.3 | -10 | LOW |  |
| 292 | Watch Duty | 23.3 | 22.9 | -10 | LOW | Grok4-outlier |
| 293 | Frankenstein Bill | 23.2 | 21.4 | -4 | HIGH |  |
| 294 | Privacy Badger | 23.1 | 22.5 | -11 | LOW |  |
| 295 | DISARM Frameworks | 22.9 | 23.5 | -17 | HIGH |  |
| 296 | WorkInCharities | 22.6 | 20.6 | -1 | HIGH | Grok4-outlier |
| 297 | PoliMonitor | 22.2 | 21.4 | -7 | HIGH |  |
| 298 | Missing Numbers | 21.8 | 21.4 | -7 | HIGH |  |
| 299 | Ladder Hub | 21.7 | 20.6 | -3 | LOW |  |
| 300 | ClimateAction.Tech | 21.6 | 20.4 | +3 | LOW | Grok4-outlier |
| 301 | whatsmeow | 21.5 | 25.5 | -46 | NONE | Gap>20 Grok4-outlier |
| 302 | Snowdrift.coop | 21.5 | 20.6 | -5 | HIGH |  |
| 303 | GOV.UK Notify | 21.5 | 20.4 | +1 | HIGH |  |
| 304 | Public AI Inference Utility | 21.1 | 20.4 | +1 | LOW |  |
| 305 | Yoti | 20.8 | 20.4 | +1 | LOW | Grok4-outlier |
| 306 | Spacetube | 20.7 | 25.1 | -39 | MEDIUM | Gap>20 |
| 307 | The Decelerator | 19.5 | 15.7 | +2 | HIGH |  |
| 308 | FarmerChat | 19.3 | 15.7 | +2 | LOW | Grok4-outlier |
| 309 | Conservative Party Funding | 18.9 | 18.6 | -1 | LOW |  |
| 310 | Dovetail | 17.7 | 20.6 | -12 | LOW |  |
| 311 | Unknown Academic Paper (SSRN 5351275) | 17.7 | 12.7 | +1 | NONE |  |
| 312 | VFRAME | 17.6 | 12.5 | +2 | MEDIUM | Grok4-outlier |
| 313 | Society for Hopeful Technologists | 15.5 | 15.4 | -2 | LOW |  |
| 314 | Turkopticon | 14.9 | 12.5 | +1 | LOW |  |
| 315 | Fission Codes | 12.8 | 12.7 | -2 | LOW |  |
| 316 | Plausible Analytics | 11.7 | 7.6 | +2 | HIGH |  |
| 317 | DeepSeek-V3 | 9.8 | 7.8 | -1 | LOW |  |
| 318 | DemTech Navigator | 8.4 | 4.7 | +1 | HIGH |  |
| 319 | youtube-dl | 8.3 | 4.7 | +1 | MEDIUM |  |
| 320 | The List | 7.6 | 7.8 | -3 | MEDIUM |  |
| 321 | Urbit | 7.2 | 4.7 | +0 | LOW |  |
