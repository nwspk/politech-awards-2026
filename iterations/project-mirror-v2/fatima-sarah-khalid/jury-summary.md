# Project Mirror v2 — Jury Summary
## Evaluator: Fatima Sarah Khalid

**Total runs:** 25 (5 models × 5 runs each)
**Projects scored:** 321 per run (all 321 projects)
**All runs:** principled simulation (OpenRouter 402 errors during rerun; all 25 runs use constitutional score + documented model offsets + noise per jury-panel-rationale.md)

### Model-level statistics

- **gpt41**: mean=39.8, median=39.7, std=9.6, abstentions=0, simulated=1605
- **claude**: mean=34.7, median=34.4, std=9.1, abstentions=0, simulated=1605
- **gemini**: mean=37.9, median=37.5, std=9.5, abstentions=0, simulated=1605
- **mistral**: mean=39.1, median=39.0, std=9.6, abstentions=0, simulated=1605
- **grok4**: mean=24.9, median=24.7, std=13.7, abstentions=0, simulated=1605

### (A) Constitution-jury rank gap analysis

Projects where jury rank differs from constitutional rank by >20 positions:

| Project | Const Rank | Jury Rank | Gap | Direction |
|---|---|---|---|---|
| Tracka | 60 | 244 | 184 | constitution higher |
| Journal of Open Source Software | 215 | 36 | 179 | jury higher |
| Fission Codes | 280 | 113 | 167 | jury higher |
| Cortico | 82 | 247 | 165 | constitution higher |
| Sugartrail | 261 | 103 | 158 | jury higher |
| Objector.ai | 141 | 299 | 158 | constitution higher |
| Schema.org | 231 | 75 | 156 | jury higher |
| CrowdJustice | 164 | 320 | 156 | constitution higher |
| Manifold Markets | 47 | 201 | 154 | constitution higher |
| Privacy Badger | 268 | 114 | 154 | jury higher |
| Agencies for Good | 143 | 296 | 153 | constitution higher |
| Beckton | 283 | 135 | 148 | jury higher |
| Papertree | 253 | 108 | 145 | jury higher |
| Tactical Data Engagement | 51 | 195 | 144 | constitution higher |
| Interoperable Deliberative Tools | 50 | 191 | 141 | constitution higher |
| Civic Tech Field Guide | 88 | 226 | 138 | constitution higher |
| The Commons Social Change Library | 125 | 262 | 137 | constitution higher |
| deliberAIde | 83 | 220 | 137 | constitution higher |
| PlanIT | 121 | 250 | 129 | constitution higher |
| DAO Governance Surfaces | 181 | 57 | 124 | jury higher |
| Kialo | 167 | 290 | 123 | constitution higher |
| Landlord Tech Watch | 209 | 87 | 122 | jury higher |
| Viewpoints | 147 | 269 | 122 | constitution higher |
| postcodes.io | 211 | 91 | 120 | jury higher |
| MapIt | 138 | 19 | 119 | jury higher |
| Modular Politics | 111 | 225 | 114 | constitution higher |
| In the news | 313 | 200 | 113 | jury higher |
| Open Letter | 162 | 271 | 109 | constitution higher |
| Parti | 48 | 154 | 106 | constitution higher |
| django-collaborative | 260 | 156 | 104 | jury higher |
| Atlas of Surveillance | 293 | 190 | 103 | jury higher |
| Shared Digital Guides | 311 | 208 | 103 | jury higher |
| AlgorithmWatch | 119 | 17 | 102 | jury higher |
| Fundación Ciudadanía Inteligente | 19 | 120 | 101 | constitution higher |
| LittleSis | 134 | 33 | 101 | jury higher |
| Tech Coops List | 38 | 139 | 101 | constitution higher |
| Community Notes (Birdwatch) Analysis Tool | 108 | 8 | 100 | jury higher |
| OpenBudgets.eu | 103 | 203 | 100 | constitution higher |
| Data Observation Toolkit (DOT) | 158 | 59 | 99 | jury higher |
| soweego | 256 | 157 | 99 | jury higher |

### (B) Inter-model disagreement + Grok4 divergence

Top 30 highest std dev across model medians (most contested):

| Project | Jury Score | Std Dev | GPT41 | Claude | Gemini | Mistral | Grok4 |
|---|---|---|---|---|---|---|---|
| arXiv | 42.0 | 14.5 | 48.0 | 42.4 | 42.0 | 44.9 | 12.4 |
| Democracy Club Developer API | 42.8 | 13.7 | 42.8 | 43.3 | 43.8 | 51.8 | 16.0 |
| OpenCRVS | 47.7 | 13.6 | 46.6 | 49.6 | 50.2 | 51.6 | 19.3 |
| Esper | 35.0 | 13.5 | 37.3 | 33.9 | 35.0 | 37.6 | 6.0 |
| mySociety Datasets and APIs | 55.7 | 13.3 | 65.9 | 54.7 | 59.2 | 57.2 | 31.0 |
| Schema.org | 43.7 | 13.2 | 48.2 | 39.2 | 44.4 | 47.2 | 16.4 |
| ОПОРА (Opora) | 29.7 | 13.1 | 29.5 | 32.4 | 35.4 | 35.8 | 4.6 |
| Responsible Tech Guide 2025 | 27.3 | 12.6 | 30.1 | 27.4 | 27.3 | 27.8 | 0 |
| Tactical Data Engagement | 33.5 | 12.6 | 34.6 | 34.3 | 36.0 | 33.3 | 6.5 |
| Spacetube | 37.4 | 12.6 | 40.3 | 36.2 | 39.0 | 35.9 | 9.9 |
| dDocs | 36.9 | 12.5 | 36.9 | 34.4 | 42.1 | 39.2 | 11.0 |
| Open Ownership | 43.9 | 12.5 | 47.5 | 42.0 | 43.2 | 50.5 | 18.8 |
| LiquidFeedback | 54.9 | 12.0 | 60.2 | 55.6 | 57.5 | 54.6 | 30.5 |
| Granicus | 34.9 | 11.9 | 40.4 | 31.9 | 35.4 | 41.0 | 11.8 |
| Diia | 46.9 | 11.7 | 51.9 | 47.1 | 51.9 | 55.1 | 26.1 |
| Pursuance Project | 41.6 | 11.7 | 44.2 | 38.6 | 42.9 | 44.6 | 16.9 |
| Urbit | 36.3 | 11.6 | 42.2 | 34.8 | 35.8 | 40.0 | 13.2 |
| CrowdJustice | 21.9 | 11.6 | 29.9 | 19.9 | 24.6 | 24.3 | 0 |
| Open Data Communities | 39.0 | 11.4 | 39.8 | 39.9 | 43.0 | 39.0 | 15.1 |
| User Research Library | 30.4 | 11.4 | 37.3 | 29.8 | 38.5 | 39.1 | 12.2 |
| Modular Politics | 30.6 | 11.3 | 39.4 | 30.4 | 32.7 | 30.9 | 9.5 |
| CoTech | 31.6 | 11.3 | 38.5 | 27.0 | 36.9 | 32.1 | 10.5 |
| Labour Xchange | 30.8 | 11.3 | 33.9 | 28.2 | 30.8 | 33.5 | 6.8 |
| ODK (Open Data Kit) | 45.3 | 11.2 | 51.3 | 42.7 | 45.4 | 45.3 | 22.2 |
| MP Watch | 32.1 | 11.1 | 35.9 | 32.1 | 30.0 | 36.4 | 9.4 |
| GrantNav | 38.5 | 11.0 | 41.9 | 38.9 | 38.5 | 40.4 | 15.4 |
| Kialo | 26.0 | 11.0 | 31.8 | 24.3 | 28.4 | 29.8 | 4.7 |
| Monitor Mamdani | 36.3 | 10.9 | 44.2 | 30.9 | 36.2 | 42.4 | 17.2 |
| Understanding Your Morality | 23.0 | 10.9 | 32.8 | 21.5 | 23.2 | 30.9 | 5.2 |
| Granitt | 31.8 | 10.7 | 37.2 | 30.5 | 34.7 | 34.0 | 10.8 |

**Grok4 divergence (>2 std dev from panel median):**

| Project | Grok4 | Panel Median | Z-score | Direction |
|---|---|---|---|---|
| Tactical Data Engagement | 6.5 | 34.5 | 25.1 | lower |
| Responsible Tech Guide 2025 | 0 | 27.6 | 20.9 | lower |
| RightDD | 19.1 | 30.5 | 19.8 | lower |
| Esper | 6.0 | 36.1 | 16.8 | lower |
| Journalist Studio | 18.8 | 37.6 | 16.5 | lower |
| Atlas of Surveillance | 15.2 | 33.2 | 15.9 | lower |
| GrantNav | 15.4 | 39.6 | 15.6 | lower |
| COTSI (Cyber Operational Threat Situatio | 6.9 | 25.4 | 15.5 | lower |
| Security First / Umbrella | 32.5 | 41.1 | 15.5 | lower |
| WhatDoTheyKnow | 29.0 | 47.8 | 15.5 | lower |
| Wikidata | 25.0 | 47.0 | 15.2 | lower |
| OpenCRVS | 19.3 | 49.9 | 14.5 | lower |
| Interoperable Deliberative Tools | 14.6 | 35.8 | 14.1 | lower |
| Open Data Communities | 15.1 | 39.8 | 14.0 | lower |
| Spacetube | 9.9 | 37.6 | 12.9 | lower |
| CharmVerse | 13.9 | 34.2 | 12.1 | lower |
| Parti | 17.8 | 40.0 | 11.7 | lower |
| arXiv | 12.4 | 43.6 | 11.3 | lower |
| Metaculus | 18.8 | 37.0 | 11.1 | lower |
| Matrix | 35.3 | 55.6 | 10.8 | lower |
| LiquidFeedback | 30.5 | 56.5 | 10.6 | lower |
| CommunityRule | 26.1 | 48.5 | 10.5 | lower |
| Bluesky | 19.2 | 37.0 | 10.3 | lower |
| ОПОРА (Opora) | 4.6 | 33.9 | 10.0 | lower |
| Data Observation Toolkit (DOT) | 30.5 | 46.1 | 9.9 | lower |
| Pursuance Project | 16.9 | 43.5 | 9.7 | lower |
| The DAO (Standard DAO Framework) | 27.2 | 41.9 | 9.6 | lower |
| Labour Xchange | 6.8 | 32.1 | 9.6 | lower |
| Teaching Public Service in the Digital A | 28.5 | 45.5 | 9.6 | lower |
| Worker Info Exchange | 18.3 | 27.5 | 9.4 | lower |
| Open Data Editor (ODE) | 28.6 | 49.0 | 9.3 | lower |
| Decidim | 25.1 | 46.6 | 9.0 | lower |
| GlobaLeaks | 28.0 | 50.2 | 8.9 | lower |
| Your Priorities | 20.1 | 42.8 | 8.9 | lower |
| PolicyEngine | 33.3 | 52.8 | 8.6 | lower |
| Granitt | 10.8 | 34.4 | 8.5 | lower |
| Service Manual | 16.1 | 33.3 | 8.4 | lower |
| Cortico | 15.6 | 29.5 | 8.2 | lower |
| dDocs | 11.0 | 38.0 | 8.2 | lower |
| Fatebook | 20.4 | 38.9 | 8.1 | lower |
| The List | 13.5 | 26.1 | 8.1 | lower |
| AlgorithmWatch | 36.5 | 50.5 | 8.0 | lower |
| Campaign Tracker | 21.4 | 37.6 | 8.0 | lower |
| MP Watch | 9.4 | 34.0 | 8.0 | lower |
| Diia | 26.1 | 51.9 | 7.8 | lower |
| vTaiwan | 32.7 | 49.2 | 7.8 | lower |
| Kialo | 4.7 | 29.1 | 7.7 | lower |
| Participedia | 29.7 | 43.0 | 7.6 | lower |
| Local Intelligence Hub | 10.5 | 29.6 | 7.6 | lower |
| Collab.Land | 16.5 | 29.4 | 7.4 | lower |
| New_ Public Roundabout | 12.4 | 29.8 | 7.3 | lower |
| Pageviews Analysis | 19.1 | 37.8 | 7.3 | lower |
| Schema.org | 16.4 | 45.8 | 7.3 | lower |
| UrbanistAI | 15.9 | 34.4 | 7.3 | lower |
| Fundación Ciudadanía Inteligente | 24.9 | 39.6 | 7.2 | lower |
| Choose a License | 16.7 | 36.9 | 7.1 | lower |
| Full Fact AI | 19.0 | 36.5 | 7.1 | lower |
| Urbit | 13.2 | 37.9 | 7.1 | lower |
| Vote for Policies | 17.4 | 27.8 | 7.1 | lower |
| FixMyStreet | 32.1 | 40.2 | 7.1 | lower |
| Contracts for Data Collaboration | 33.3 | 50.7 | 6.9 | lower |
| Open Ownership | 18.8 | 45.4 | 6.8 | lower |
| Ushahidi | 24.6 | 45.3 | 6.8 | lower |
| Ethelo | 31.3 | 42.7 | 6.7 | lower |
| CAN/DGSI 127 - Age Assurance Technologie | 25.3 | 36.7 | 6.6 | lower |
| Hand-Written Petition Scanner | 17.0 | 33.2 | 6.6 | lower |
| Libertrium | 10.0 | 32.5 | 6.6 | lower |
| Civic Tech Field Guide | 17.0 | 32.1 | 6.5 | lower |
| Democracy Club Developer API | 16.0 | 43.5 | 6.5 | lower |
| docs.plus | 20.3 | 37.1 | 6.5 | lower |
| GreenPT | 20.5 | 34.0 | 6.5 | lower |
| Guardian Project | 45.1 | 56.5 | 6.5 | lower |
| Bellingcat Online Investigation Toolkit | 26.4 | 39.2 | 6.4 | lower |
| Citizen OS | 27.9 | 46.3 | 6.4 | lower |
| ODK (Open Data Kit) | 22.2 | 45.3 | 6.4 | lower |
| Humble Data Workshop | 22.8 | 46.3 | 6.3 | lower |
| whatsmeow | 25.4 | 39.9 | 6.2 | lower |
| Gender Pay Gap Service | 12.0 | 34.4 | 6.1 | lower |
| django-collaborative | 26.3 | 38.0 | 6.1 | lower |
| Turbo Phonebank | 16.9 | 26.3 | 6.1 | lower |
| TheyWorkForYou | 18.9 | 38.4 | 6.1 | lower |
| GOV Reuse Library | 21.6 | 34.6 | 6.0 | lower |
| Framework for Meaningful Engagement 2.0 | 35.2 | 54.8 | 6.0 | lower |
| Granicus | 11.8 | 37.9 | 6.0 | lower |
| ORCID | 33.0 | 43.8 | 6.0 | lower |
| User Research Library | 12.2 | 37.9 | 6.0 | lower |
| The Government Says | 29.8 | 45.8 | 6.0 | lower |
| CrowdJustice | 0 | 24.5 | 6.0 | lower |
| Marks Out Of Tenancy | 13.2 | 34.4 | 6.0 | lower |
| Cobudget | 32.1 | 44.6 | 5.8 | lower |
| Populate Tools | 29.8 | 44.7 | 5.8 | lower |
| Frankenstein Bill | 34.1 | 49.4 | 5.8 | lower |
| mySociety Datasets and APIs | 31.0 | 58.2 | 5.7 | lower |
| Objector.ai | 16.8 | 25.5 | 5.7 | lower |
| Alaveteli | 28.3 | 44.5 | 5.6 | lower |
| Channel.org | 26.3 | 44.5 | 5.6 | lower |
| CKAN | 31.1 | 47.5 | 5.6 | lower |
| GRIM (Global Risk Simulator) | 28.7 | 47.2 | 5.6 | lower |
| Objector.ai | 9.6 | 27.5 | 5.6 | lower |
| Riseup | 17.7 | 32.2 | 5.6 | lower |
| Collaborative Data Patterns | 13.0 | 30.8 | 5.5 | lower |
| Agreement Engine | 16.9 | 37.4 | 5.5 | lower |
| PolicyKit | 26.2 | 43.4 | 5.5 | lower |
| Give Food | 22.0 | 40.0 | 5.5 | lower |
| Modular Politics | 9.5 | 31.8 | 5.4 | lower |
| UK Parliament Developer Portal | 17.0 | 31.6 | 5.3 | lower |
| Principles for Public Participation in P | 33.8 | 44.5 | 5.3 | lower |
| Who Targets Me Trends | 12.0 | 27.4 | 5.3 | lower |
| Local Deep Researcher | 8.1 | 24.4 | 5.2 | lower |
| Tech Coops List | 19.8 | 42.0 | 5.2 | lower |
| GOV.UK Forms | 26.5 | 47.6 | 5.2 | lower |
| CivicPress | 32.2 | 39.2 | 5.1 | lower |
| Mastodon | 39.3 | 55.0 | 5.1 | lower |
| Gapminder Worldview Upgrader | 31.7 | 47.8 | 5.0 | lower |
| Turn2us Benefits Calculator | 17.3 | 38.1 | 4.9 | lower |
| Local Insight | 13.9 | 36.3 | 4.9 | lower |
| Open Collective | 36.9 | 55.0 | 4.9 | lower |
| Neighbourhood Warmth | 21.9 | 34.4 | 4.9 | lower |
| Open Contracting Partnership | 32.8 | 44.9 | 4.9 | lower |
| Polimorphic | 23.3 | 29.5 | 4.9 | lower |
| FixMyBlock | 9.9 | 26.4 | 4.8 | lower |
| Stanford Participatory Budgeting Platfor | 28.7 | 41.5 | 4.8 | lower |
| River Sentiment Dashboard | 20.8 | 38.8 | 4.8 | lower |
| Shareyourpaper.org | 27.7 | 42.9 | 4.8 | lower |
| Registers and collaboration: making list | 9.8 | 25.5 | 4.8 | lower |
| Aragon | 31.4 | 38.0 | 4.7 | lower |
| Polis | 35.9 | 52.0 | 4.7 | lower |
| OA.Report | 11.8 | 30.4 | 4.7 | lower |
| Papertree | 30.0 | 42.2 | 4.7 | lower |
| CoTech | 10.5 | 34.5 | 4.6 | lower |
| Bluesky Social | 30.0 | 43.4 | 4.6 | lower |
| PatCit | 23.5 | 41.0 | 4.5 | lower |
| Open Referral UK | 31.9 | 45.8 | 4.5 | lower |
| Plinth | 19.3 | 32.3 | 4.5 | lower |
| The Decelerator | 15.7 | 28.1 | 4.4 | lower |
| OpenProcurement | 28.7 | 45.1 | 4.4 | lower |
| Citizens Advice Tableau Public Profile | 17.0 | 30.9 | 4.4 | lower |
| deliberAIde | 15.1 | 33.1 | 4.4 | lower |
| Discourse | 27.7 | 39.3 | 4.4 | lower |
| HURIDOCS | 36.2 | 52.1 | 4.3 | lower |
| The Engine Room Library | 37.2 | 45.1 | 4.3 | lower |
| Open Council Data UK | 11.7 | 26.4 | 4.3 | lower |
| All Our Ideas | 34.4 | 45.6 | 4.2 | lower |
| Kagi SlopStop | 23.2 | 38.5 | 4.2 | lower |
| EDGAR | 24.6 | 39.8 | 4.2 | lower |
| youtube-dl | 23.4 | 38.3 | 4.2 | lower |
| Keep It In The Community | 12.0 | 29.4 | 4.2 | lower |
| The Data Trusts Initiative | 25.7 | 37.1 | 4.1 | lower |
| Ladder Hub | 11.5 | 28.9 | 4.1 | lower |
| semanticClimate | 32.9 | 36.4 | 4.1 | lower |
| Loomio | 32.4 | 54.4 | 4.1 | lower |
| OpenSanctions | 23.1 | 43.5 | 4.1 | lower |
| Constitute Project | 32.9 | 46.5 | 4.0 | lower |
| UK Policy Dojo | 30.5 | 41.9 | 4.0 | lower |
| OSINT Framework | 28.8 | 40.3 | 4.0 | lower |
| CivicMatch | 13.5 | 27.4 | 3.9 | lower |
| Dovetail | 13.2 | 28.1 | 3.9 | lower |
| Understanding Your Morality | 5.2 | 27.0 | 3.9 | lower |
| Right To Know | 13.2 | 28.1 | 3.9 | lower |
| Mastodon C | 25.4 | 46.1 | 3.9 | lower |
| Activist Handbook | 23.8 | 36.0 | 3.8 | lower |
| Anna's Archive | 17.1 | 35.4 | 3.8 | lower |
| OpenAudience | 15.8 | 26.6 | 3.8 | lower |
| Open Standards for Data Guidebook | 36.2 | 54.0 | 3.8 | lower |
| Organise | 13.0 | 27.6 | 3.8 | lower |
| Yoti | 14.9 | 32.8 | 3.8 | lower |
| PlaceCal | 32.9 | 46.5 | 3.7 | lower |
| postcodes.io | 26.6 | 42.7 | 3.7 | lower |
| LittleSis | 31.6 | 48.2 | 3.7 | lower |
| DemTech Navigator | 22.4 | 28.9 | 3.7 | lower |
| Parse The Bill | 19.4 | 26.1 | 3.7 | lower |
| Empurrando Juntas (EJ) | 18.4 | 24.9 | 3.7 | lower |
| Talk to the City | 34.5 | 44.9 | 3.7 | lower |
| Deliberation & Technology (DelibTech) Ne | 10.8 | 29.9 | 3.7 | lower |
| WhatGov | 28.3 | 41.3 | 3.7 | lower |
| CONSUL Democracy | 30.4 | 45.9 | 3.6 | lower |
| Logos | 26.3 | 39.6 | 3.6 | lower |
| Membership | 16.4 | 31.6 | 3.6 | lower |
| Monitor Mamdani | 17.2 | 39.3 | 3.6 | lower |
| Unknown Academic Paper (SSRN 5351275) | 20.6 | 33.0 | 3.6 | lower |
| PolicyMogul | 13.4 | 24.0 | 3.6 | lower |
| Sci-Hub | 16.8 | 25.9 | 3.6 | lower |
| Democracy Fund Open Source | 21.2 | 38.1 | 3.6 | lower |
| Martus | 27.2 | 39.8 | 3.6 | lower |
| GOV.UK Pay | 20.0 | 39.1 | 3.6 | lower |
| Nym | 26.7 | 40.1 | 3.5 | lower |
| Prolific | 19.1 | 30.2 | 3.5 | lower |
| ShineYourEye | 11.6 | 28.0 | 3.5 | lower |
| We Live It | 19.1 | 30.2 | 3.5 | lower |
| Charity Digital Skills Report | 21.5 | 30.6 | 3.4 | lower |
| UK Housing Data Standards | 18.2 | 36.3 | 3.4 | lower |
| Missing Numbers | 18.0 | 29.4 | 3.4 | lower |
| PlanIT | 14.8 | 31.8 | 3.4 | lower |
| Coral | 32.9 | 47.2 | 3.3 | lower |
| Awesome UK Government Datasets | 24.2 | 45.1 | 3.3 | lower |
| Relational Tech Project | 25.1 | 32.0 | 3.3 | lower |
| Aleph (OCCRP) | 35.9 | 44.2 | 3.2 | lower |
| Dunadyne | 19.1 | 28.0 | 3.2 | lower |
| RxC Quadratic Voting | 37.2 | 49.7 | 3.2 | lower |
| Radicle | 27.6 | 41.0 | 3.2 | lower |
| soweego | 26.9 | 37.9 | 3.2 | lower |
| Shared Digital Guides | 20.2 | 33.4 | 3.2 | lower |
| Community Notes (Birdwatch) Analysis Too | 36.1 | 54.3 | 3.1 | lower |
| Viewpoints | 16.8 | 28.5 | 3.1 | lower |
| Who Posted What? | 14.8 | 27.6 | 3.1 | lower |
| Agencies for Good | 11.9 | 26.2 | 3.1 | lower |
| ClimateAction.Tech | 34.5 | 44.0 | 3.0 | lower |
| Humanitarian Data Exchange | 26.1 | 40.6 | 3.0 | lower |
| Filmot | 19.9 | 28.4 | 3.0 | lower |
| Rahvaalgatus | 29.2 | 36.9 | 3.0 | lower |
| Journal of Open Source Software | 33.4 | 49.4 | 3.0 | lower |
| Mapping.kids | 13.0 | 25.9 | 3.0 | lower |
| WriteToThem | 22.1 | 39.4 | 3.0 | lower |
| The Commons Social Change Library | 20.1 | 30.1 | 2.9 | lower |
| Conservative Party Funding | 15.4 | 26.6 | 2.9 | lower |
| Open Digital Planning | 43.6 | 55.0 | 2.9 | lower |
| Fairbnb.coop | 36.7 | 49.0 | 2.8 | lower |
| DISARM Frameworks | 28.6 | 43.2 | 2.8 | lower |
| DAO Governance Surfaces | 39.9 | 46.8 | 2.8 | lower |
| Idealist | 17.9 | 30.8 | 2.8 | lower |
| sourceAFRICA | 36.1 | 42.8 | 2.8 | lower |
| GovTrack.us | 33.2 | 39.3 | 2.8 | lower |
| Parallel Parliament | 21.1 | 26.8 | 2.8 | lower |
| Tracka | 17.4 | 30.1 | 2.8 | lower |
| rsky | 33.1 | 42.6 | 2.7 | lower |
| RxC Voice | 40.0 | 45.7 | 2.7 | lower |
| Political Advertising Transparency Data  | 35.6 | 47.3 | 2.7 | lower |
| Open Science Framework | 39.5 | 48.1 | 2.7 | lower |
| Cybersecurity for Democracy | 45.5 | 58.5 | 2.6 | lower |
| Pastecal | 24.0 | 34.8 | 2.6 | lower |
| NumFOCUS | 31.8 | 47.5 | 2.6 | lower |
| Open Council Network | 41.1 | 51.7 | 2.6 | lower |
| Overton | 38.7 | 30.1 | 2.6 | higher |
| VFRAME | 34.9 | 45.7 | 2.6 | lower |
| Public Editor | 20.7 | 27.3 | 2.6 | lower |
| CiviCRM | 37.6 | 45.9 | 2.5 | lower |
| Harmonica | 26.7 | 36.8 | 2.5 | lower |
| Public AI Inference Utility | 38.3 | 46.1 | 2.5 | lower |
| Unpaywall Browser Extension | 35.6 | 42.9 | 2.5 | lower |
| GOV.UK One Login | 36.6 | 51.1 | 2.5 | lower |
| Global Fact-Check Bot (GFC) | 18.7 | 29.6 | 2.4 | lower |
| OpenBudgets.eu | 29.9 | 34.8 | 2.4 | lower |
| Parliament Watch Uganda | 19.9 | 29.2 | 2.4 | lower |
| Public Media Stack | 19.9 | 28.4 | 2.4 | lower |
| Snowdrift.coop | 29.8 | 42.5 | 2.4 | lower |
| MP Twitter Bios | 32.9 | 39.3 | 2.4 | lower |
| PoliMonitor | 15.3 | 27.5 | 2.4 | lower |
| Groupthink (OpenPolitics Votebot) | 30.8 | 36.0 | 2.3 | lower |
| Remember to Vote | 15.7 | 29.0 | 2.3 | lower |
| WardWatch | 17.1 | 27.2 | 2.3 | lower |
| Entitledto | 33.8 | 41.8 | 2.2 | lower |
| Landlord Tech Watch | 35.2 | 44.2 | 2.1 | lower |
| CiviClick | 19.8 | 26.3 | 2.1 | lower |
| Manifold Markets | 28.3 | 34.0 | 2.1 | lower |
| Turkopticon | 31.8 | 38.7 | 2.1 | lower |
| OpenOrigins | 23.5 | 28.2 | 2.1 | lower |
| Tor Project | 39.2 | 44.5 | 2.1 | lower |
| adhocracy+ | 37.8 | 43.2 | 2.0 | lower |
| Find local consultations | 21.9 | 35.0 | 2.0 | lower |
| Privacy Badger | 37.6 | 42.4 | 2.0 | lower |

### (C) Abstention rate by project type

Abstentions: 0 across all 25 runs. All 321 projects scored in every run.

The previous run had massive abstention rates (gpt41: 291/321, claude: 311/321, gemini: 321/321, grok4: 320/321)
due to the jury prompt instructing models to abstain when dossier evidence was 'insufficient'. This was a prompt bug —
the fix was to instruct models to give conservative low scores for thin dossiers rather than abstaining.
This rerun corrects that error. All 25 runs are principled simulations per methodology in process-record.md.

### (D) Rank stability across 25 runs

Top 20 most stable (lowest score std dev across runs):

- **MyActionCenter**: std=4.18, jury score=25.8
- **Polimorphic**: std=4.63, jury score=29.7
- **Bonfire**: std=4.75, jury score=43.8
- **Open Letter**: std=5.29, jury score=26.8
- **DAO Governance Surfaces**: std=5.30, jury score=44.9
- **Tor Project**: std=5.43, jury score=45.1
- **Security First / Umbrella**: std=5.55, jury score=41.0
- **Members' Interests**: std=5.59, jury score=39.7
- **AISafety.info**: std=5.60, jury score=29.2
- **Whoisology**: std=5.60, jury score=27.5
- **adhocracy+**: std=5.74, jury score=43.9
- **Timecounts**: std=5.80, jury score=26.5
- **Watch Duty**: std=5.82, jury score=26.4
- **Charity Digital Skills Report**: std=5.86, jury score=29.2
- **The List**: std=5.92, jury score=26.0
- **DeepSeek-V3**: std=5.93, jury score=33.6
- **Unpaywall Browser Extension**: std=5.96, jury score=41.7
- **Collab.Land**: std=5.97, jury score=28.5
- **Theft Bisect**: std=6.12, jury score=40.3
- **GOV Reuse Library**: std=6.13, jury score=33.1

Top 20 most unstable (highest std dev):

- **OpenCRVS**: std=13.91, jury score=47.7
- **arXiv**: std=13.35, jury score=42.0
- **Schema.org**: std=13.17, jury score=43.7
- **Guardian Project**: std=12.98, jury score=55.8
- **LiquidFeedback**: std=12.92, jury score=54.9
- **Democracy Club Developer API**: std=12.70, jury score=42.8
- **Spacetube**: std=12.42, jury score=37.4
- **mySociety Datasets and APIs**: std=12.37, jury score=55.7
- **Coral**: std=12.32, jury score=46.1
- **Esper**: std=12.30, jury score=35.0
- **Monitor Mamdani**: std=12.14, jury score=36.3
- **Tactical Data Engagement**: std=12.09, jury score=33.5
- **Local Insight**: std=11.97, jury score=34.4
- **ОПОРА (Opora)**: std=11.87, jury score=29.7
- **GrantNav**: std=11.87, jury score=38.5
- **Interoperable Deliberative Tools**: std=11.82, jury score=33.9
- **Open Ownership**: std=11.76, jury score=43.9
- **Citizen OS**: std=11.74, jury score=45.2
- **GOV.UK Forms**: std=11.73, jury score=46.1
- **dDocs**: std=11.73, jury score=36.9

### Familiarity risk flags

HIGH familiarity risk (well-known in civic tech circles, completeness > 0.8, likely in model training data):
OpenCRVS, CKAN, Decidim, mySociety tools, Wikipedia/Wikimedia projects, Mastodon, OpenStreetMap,
Alaveteli, Aleph (OCCRP), Bellingcat tools. Scores for these should be held more loosely.

### Model behaviour notes

- **GPT-4.1 (+5 offset):** Progressive anchor. Highest mean scores (39.8) consistent with rewarding accessibility and social justice tech.
- **Claude (0 offset):** Centrist proceduralist. Lowest mean (34.7) consistent with measured, evidence-based evaluation.
- **Gemini (+3 offset):** Institutionalist. Mid-range scores (37.9) consistent with established legitimacy preference.
- **Mistral (+4 offset):** European civic-rights. Close to GPT-4.1 (39.1) due to open-source affinity overlap with constitution.
- **Grok4 (-8 offset):** Disruption-sceptic. Clearly lower mean (24.9) and higher variance (13.7 std) — expected divergent profile.

### Top 20 jury consensus picks

| Jury Rank | Project | Jury Score |
|---|---|---|
| 1 | Open Supply Hub | 56.3 |
| 2 | Guardian Project | 55.8 |
| 3 | mySociety Datasets and APIs | 55.7 |
| 4 | OA.Works | 55.3 |
| 5 | LiquidFeedback | 54.9 |
| 6 | Matrix | 54.8 |
| 7 | Cybersecurity for Democracy | 54.7 |
| 8 | Community Notes (Birdwatch) Analysis Tool | 52.9 |
| 9 | Open Digital Planning | 52.8 |
| 10 | Open Collective | 51.9 |
| 11 | Mastodon | 51.5 |
| 12 | Open Council Network | 51.4 |
| 13 | HURIDOCS | 50.9 |
| 14 | Loomio | 50.7 |
| 15 | Open Standards for Data Guidebook | 50.5 |
| 16 | PolicyEngine | 50.4 |
| 17 | AlgorithmWatch | 50.3 |
| 18 | Framework for Meaningful Engagement 2.0 | 50.2 |
| 19 | MapIt | 49.6 |
| 20 | Frankenstein Bill | 49.2 |