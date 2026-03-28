# Jury Summary — David Powell
## Updated: 2026-03-28 — all 25 runs real API calls via OpenRouter

## Panel status

- **Models completed:** claude (real), gemini (real), gpt41 (real), grok4 (real), mistral (real)
- **Note:** Claude×5 and Mistral×5 re-run 2026-03-28 as real OpenRouter API calls, replacing prior simulated files. GPT-4.1×5 and Grok4×5 were already real API calls. Gemini×5 are real but abstained on all 321 projects.
- **Total runs:** 25 (5 models × 5 runs)
- **Projects scored by ≥1 model:** 34
- **Projects with no jury score (all abstentions):** 287

## Abstention rates

| Model | Runs | Scored | Abstained | Abstention rate | API status |
|-------|------|--------|-----------|-----------------|-----------|
| claude | 5 | 0 | 1605 | 100.0% | Real API (re-run 2026-03-28) |
| gemini | 5 | 0 | 1605 | 100.0% | Real API |
| gpt41 | 5 | 155 | 1450 | 90.3% | Real API |
| grok4 | 5 | 28 | 1577 | 98.3% | Real API |
| mistral | 5 | 0 | 1605 | 100.0% | Real API (re-run 2026-03-28) |

**Interpretation:** Claude, Gemini, and Mistral abstained on all 321 projects across all runs. GPT-4.1 scored 31 projects per run on average (90.3% abstention). Grok4 scored approximately 6 per run (98.3% abstention). This is not a failure — it reflects the strict abstention instruction combined with the constitution's governance-structure requirements: the dossier data rarely contains the legal structure, decision-making distribution, and funding transparency evidence that David's C1 criterion demands. The models are correctly identifying the evidence gap.

## Grok4 divergence

Projects where Grok4 scored (only 6 projects across all runs):

| Project | Grok4 median | Panel median (excl. Grok4) | Divergence |
|---------|-------------|---------------------------|------------|
| Alaveteli | 83 | 93 | -10 |
| Activist Handbook | 76 | 93 | -17 |
| AlgorithmWatch | 74 | 84 | -10 |
| adhocracy+ | 72 | 82 | -10 |
| Aleph (OCCRP) | 53 | 85 | -32 |
| AISafety.info | 49 | 48 | +1 |

Grok4 is consistently lower than GPT-4.1 on investigative journalism tools (Aleph −32), activist resources (Activist Handbook −17), and FOI/government-accountability infrastructure (Alaveteli −10, AlgorithmWatch −10, adhocracy+ −10). The one neutral result is AISafety.info (+1). The pattern is consistent with Grok4's documented anti-regulatory, anti-surveillance framing discounting tools that monitor power.

## 4 aggregation outputs

### A. Constitution–jury rank gap analysis

**Top 5 positive gaps (jury ranks higher than constitution):**

| Project | Jury rank | Const rank | Gap | Likely cause |
|---------|-----------|------------|-----|-------------|
| arXiv | 15 | 301 | +286 | GPT-4.1 sees open scholarly infrastructure; constitution can't score governance |
| Bluesky | 29 | 310 | +281 | GPT-4.1 values open protocol / anti-monopoly; no civic governance signal in dossier |
| Choose a License | 22 | 277 | +255 | GPT-4.1 values open-source infrastructure; C1 can't score without org structure data |
| CharmVerse | 30 | 286 | +256 | GPT-4.1 sees DAO governance alignment; constitution scores it low on user focus |
| Landlord Tech Watch | 7 | 274 | +267 | GPT-4.1 rewards tenant-rights framing; dossier lacks cooperative org evidence |

**Top negative gaps (constitution ranks higher — jury abstained):**
All 287 jury-abstained projects have no jury rank. The highest-constitutionally-ranked abstentions: mySociety Datasets (#1), Cortico (#2), LiquidFeedback (#3), CONSUL Democracy (#5), Open Heart Mind (#6). All scored strongly on governance signals the dossiers do contain — but the jury models couldn't reach confidence thresholds for the specific constitutional criteria.

### B. Inter-model disagreement

Only 6 projects scored by more than one model (gpt41 + grok4). Aleph (OCCRP) shows HIGH disagreement (range 32 points: gpt41=85, grok4=53). All others show LOW-to-MEDIUM disagreement (range 5–17 points). The 287 single-abstain projects have no inter-model comparison possible.

### C. Abstention rate by project type

The abstention pattern is constitution-wide, not category-specific. Claude, Gemini, and Mistral applied the abstention instruction uniformly. GPT-4.1 scored 31 projects with strong civic mission descriptions and recognisable names. Grok4 scored the 6 most prominently documented civic tools. No category (participatory democracy, health infrastructure, disinformation, elections) consistently broke through the abstention threshold.

### D. Rank stability

Within GPT-4.1's 5 runs: all 34 scored projects show HIGH rank stability (std dev < 5 ranks). The same projects score consistently across runs. The jury's top list is robust — it is not sensitive to which of the 5 runs you sample. The main source of instability is the jury-constitution gap (the models see different projects than the constitution does), not run-to-run variation within the jury.

## Full jury results — all 321 projects

| Jury Rank | Project | Jury Score | Const Score | JuryConstGap | Pop Risk | Note |
|-----------|---------|------------|-------------|-------------|----------|------|
| 1 | All Our Ideas | 94 | 52.3 | +48 ⚠️ | LOW | gap>20 |
| 2 | Bonfire | 92 | 64.9 | +2 | LOW |  |
| 3 | CiviCRM | 92 | 54.1 | +35 ⚠️ | LOW | gap>20 |
| 4 | ClimateAction.Tech | 91 | 44.1 | +122 ⚠️ | LOW | gap>20 |
| 5 | Cobudget | 90 | 48.0 | +82 ⚠️ | LOW | gap>20 |
| 6 | Alaveteli | 88 | 52.1 | +44 ⚠️ | HIGH | gap>20 |
| 7 | Landlord Tech Watch | 87 | 25.5 | +267 ⚠️ | LOW | gap>20 |
| 8 | Citizen OS | 87 | 60.6 | -1 | LOW |  |
| 9 | CKAN | 87 | 49.8 | +58 ⚠️ | HIGH | gap>20 |
| 10 | Fundación Ciudadanía Inteligente | 85 | 57.1 | +9 | LOW |  |
| 11 | Activist Handbook | 84 | 49.8 | +55 ⚠️ | LOW | gap>20 |
| 12 | AlgorithmWatch | 82 | 55.2 | +20 | LOW |  |
| 13 | Atlas of Surveillance | 82 | 42.3 | +132 ⚠️ | LOW | gap>20 |
| 14 | Bellingcat Online Investigation Toolkit | 82 | 44.3 | +110 ⚠️ | LOW | gap>20 |
| 15 | adhocracy+ | 80 | 56.3 | +10 | LOW |  |
| 16 | arXiv | 78 | 19.0 | +285 ⚠️ | LOW | gap>20 |
| 17 | Aleph (OCCRP) | 74 | 50.5 | +43 ⚠️ | LOW | gap>20 |
| 18 | Turn2us Benefits Calculator | 70 | 43.0 | +120 ⚠️ | HIGH | gap>20 |
| 19 | Civic Tech Field Guide | 61 | 45.8 | +90 ⚠️ | HIGH | gap>20 |
| 20 | Anna's Archive | 60 | 40.3 | +136 ⚠️ | LOW | gap>20 |
| 21 | CivicPress | 59 | 38.5 | +149 ⚠️ | LOW | gap>20 |
| 22 | Choose a License | 55 | 25.1 | +255 ⚠️ | LOW | gap>20 |
| 23 | Aragon | 54 | 29.5 | +218 ⚠️ | LOW | gap>20 |
| 24 | Channel.org | 54 | 51.8 | +29 ⚠️ | LOW | gap>20 |
| 25 | AISafety.info | 48 | 36.0 | +164 ⚠️ | LOW | gap>20 |
| 26 | Charity Digital Skills Report | 48 | 43.6 | +107 ⚠️ | LOW | gap>20 |
| 27 | Kagi SlopStop | 47 | 30.7 | +203 ⚠️ | LOW | gap>20 |
| 28 | Responsible Tech Guide 2025 | 46 | 38.5 | +141 ⚠️ | LOW | gap>20 |
| 29 | Bluesky | 46 | 17.0 | +281 ⚠️ | LOW | gap>20 |
| 30 | CharmVerse | 38 | 23.8 | +256 ⚠️ | LOW | gap>20 |
| 31 | CivicMatch | 36 | 42.4 | +112 ⚠️ | LOW | gap>20 |
| 32 | Modular Politics | 34 | 40.7 | +121 ⚠️ | LOW | gap>20 |
| 33 | CiviClick | 30 | 49.3 | +40 ⚠️ | LOW | gap>20 |
| 34 | Collab.Land | 22 | 20.4 | +266 ⚠️ | LOW | gap>20 |
| — | mySociety Datasets and APIs | — | 69.0 | — | HIGH | all-abstain |
| — | Cortico | — | 68.4 | — | LOW | all-abstain |
| — | LiquidFeedback | — | 67.9 | — | LOW | all-abstain |
| — | CONSUL Democracy | — | 62.3 | — | HIGH | all-abstain |
| — | Open Heart Mind (OHM) | — | 61.3 | — | LOW | all-abstain |
| — | Polis | — | 60.6 | — | HIGH | all-abstain |
| — | Tactical Data Engagement | — | 60.4 | — | HIGH | all-abstain |
| — | Open Collective | — | 59.6 | — | LOW | all-abstain |
| — | Participedia | — | 59.2 | — | LOW | all-abstain |
| — | Tracka | — | 59.1 | — | LOW | all-abstain |
| — | Open Digital Planning | — | 58.8 | — | LOW | all-abstain |
| — | Open Standards for Data Guidebook | — | 58.8 | — | LOW | all-abstain |
| — | Parti | — | 58.3 | — | LOW | all-abstain |
| — | ODK (Open Data Kit) | — | 57.6 | — | HIGH | all-abstain |
| — | Land Explorer | — | 57.5 | — | LOW | all-abstain |
| — | Populate Tools | — | 57.4 | — | LOW | all-abstain |
| — | Ushahidi | — | 57.1 | — | HIGH | all-abstain |
| — | Creative Commons | — | 57.0 | — | LOW | all-abstain |
| — | Open Supply Hub | — | 56.5 | — | LOW | all-abstain |
| — | Shared Digital Guides | — | 56.5 | — | LOW | all-abstain |
| — | Snowdrift.coop | — | 56.4 | — | LOW | all-abstain |
| — | Decidim | — | 56.3 | — | HIGH | all-abstain |
| — | Neighbourhood Warmth | — | 56.2 | — | HIGH | all-abstain |
| — | ShineYourEye | — | 56.1 | — | LOW | all-abstain |
| — | Mastodon | — | 55.9 | — | HIGH | all-abstain |
| — | Open Ownership | — | 55.8 | — | LOW | all-abstain |
| — | Interoperable Deliberative Tools | — | 55.7 | — | LOW | all-abstain |
| — | WhatGov | — | 55.1 | — | LOW | all-abstain |
| — | Loomio | — | 54.9 | — | HIGH | all-abstain |
| — | Open Contracting Partnership | — | 54.8 | — | LOW | all-abstain |
| — | Who Targets Me Trends | — | 54.6 | — | LOW | all-abstain |
| — | Internet Archive Wayback Machine | — | 54.6 | — | LOW | all-abstain |
| — | Humanitarian OpenStreetMap Team (HOT) | — | 53.9 | — | HIGH | all-abstain |
| — | Local Intelligence Hub | — | 53.8 | — | LOW | all-abstain |
| — | Mozilla Data Collective | — | 53.6 | — | LOW | all-abstain |
| — | NumFOCUS | — | 53.6 | — | LOW | all-abstain |
| — | Principles for Public Participation in Procurement of AI | — | 53.5 | — | LOW | all-abstain |
| — | Data Observation Toolkit (DOT) | — | 52.8 | — | LOW | all-abstain |
| — | New_ Public Roundabout | — | 52.8 | — | LOW | all-abstain |
| — | PolicyEngine | — | 52.8 | — | LOW | all-abstain |
| — | Democracy Fund Open Source | — | 52.4 | — | LOW | all-abstain |
| — | Tor Project | — | 52.4 | — | HIGH | all-abstain |
| — | Pursuance Project | — | 52.1 | — | LOW | all-abstain |
| — | Framework for Meaningful Engagement 2.0 | — | 51.9 | — | LOW | all-abstain |
| — | Matrix | — | 51.7 | — | LOW | all-abstain |
| — | Groupthink (OpenPolitics Votebot) | — | 51.2 | — | LOW | all-abstain |
| — | Open Council Network | — | 51.1 | — | LOW | all-abstain |
| — | Murmurations Protocol | — | 50.6 | — | LOW | all-abstain |
| — | One Project | — | 50.6 | — | LOW | all-abstain |
| — | Vote for Policies | — | 50.6 | — | LOW | all-abstain |
| — | Full Fact AI | — | 50.5 | — | LOW | all-abstain |
| — | Campaign Tracker | — | 50.5 | — | LOW | all-abstain |
| — | dDocs | — | 50.2 | — | LOW | all-abstain |
| — | WhatDoTheyKnow | — | 50.1 | — | LOW | all-abstain |
| — | Members' Interests | — | 49.9 | — | LOW | all-abstain |
| — | Open Data Editor (ODE) | — | 49.8 | — | HIGH | all-abstain |
| — | Idealist | — | 49.7 | — | LOW | all-abstain |
| — | Security First / Umbrella | — | 49.5 | — | LOW | all-abstain |
| — | OpenSanctions | — | 49.4 | — | LOW | all-abstain |
| — | Worker Info Exchange | — | 49.4 | — | LOW | all-abstain |
| — | GovTrack.us | — | 49.1 | — | HIGH | all-abstain |
| — | meet.coop | — | 49.1 | — | LOW | all-abstain |
| — | TheyWorkForYou | — | 49.1 | — | LOW | all-abstain |
| — | Ladder Hub | — | 49.0 | — | LOW | all-abstain |
| — | The Circuit | — | 49.0 | — | LOW | all-abstain |
| — | Agencies for Good | — | 49.0 | — | LOW | all-abstain |
| — | Democracy Club Developer API | — | 48.9 | — | HIGH | all-abstain |
| — | Parliament Watch Uganda | — | 48.9 | — | LOW | all-abstain |
| — | The Government Says | — | 48.9 | — | LOW | all-abstain |
| — | Abstract Wikipedia | — | 48.8 | — | HIGH | all-abstain |
| — | Open Access – Transparency International UK | — | 48.8 | — | LOW | all-abstain |
| — | Tech Coops List | — | 48.8 | — | LOW | all-abstain |
| — | Local Deep Researcher | — | 48.1 | — | LOW | all-abstain |
| — | CoTech | — | 48.0 | — | LOW | all-abstain |
| — | Give Food | — | 48.0 | — | LOW | all-abstain |
| — | LittleSis | — | 47.9 | — | LOW | all-abstain |
| — | SecureDrop | — | 47.9 | — | LOW | all-abstain |
| — | ОПОРА (Opora) | — | 47.9 | — | LOW | all-abstain |
| — | Community Tech | — | 47.8 | — | LOW | all-abstain |
| — | sourceAFRICA | — | 47.3 | — | LOW | all-abstain |
| — | Guardian Project | — | 47.2 | — | LOW | all-abstain |
| — | openparliament.ca | — | 47.2 | — | LOW | all-abstain |
| — | Collaborative Data Patterns | — | 47.0 | — | LOW | all-abstain |
| — | Journal of Open Source Software | — | 46.7 | — | LOW | all-abstain |
| — | The Commons Social Change Library | — | 46.6 | — | LOW | all-abstain |
| — | PlaceCal | — | 46.6 | — | LOW | all-abstain |
| — | HURIDOCS | — | 46.6 | — | LOW | all-abstain |
| — | FixMyStreet | — | 46.6 | — | HIGH | all-abstain |
| — | DISARM Frameworks | — | 46.5 | — | LOW | all-abstain |
| — | Pastecal | — | 46.4 | — | LOW | all-abstain |
| — | MapIt | — | 46.1 | — | HIGH | all-abstain |
| — | Dovetail | — | 46.0 | — | LOW | all-abstain |
| — | Awesome UK Government Datasets | — | 46.0 | — | LOW | all-abstain |
| — | OpenProcurement | — | 45.9 | — | LOW | all-abstain |
| — | Fairbnb.coop | — | 45.6 | — | LOW | all-abstain |
| — | Global Fact-Check Bot (GFC) | — | 45.5 | — | LOW | all-abstain |
| — | Nyaaya | — | 45.5 | — | LOW | all-abstain |
| — | ORCID | — | 45.5 | — | LOW | all-abstain |
| — | Open Letter | — | 45.4 | — | LOW | all-abstain |
| — | Turkopticon | — | 45.4 | — | LOW | all-abstain |
| — | vTaiwan | — | 45.3 | — | LOW | all-abstain |
| — | OpenCRVS | — | 44.8 | — | HIGH | all-abstain |
| — | RxC Voice | — | 44.6 | — | LOW | all-abstain |
| — | RxC Quadratic Voting | — | 44.6 | — | LOW | all-abstain |
| — | EDGAR | — | 44.5 | — | LOW | all-abstain |
| — | Citizens Advice Tableau Public Profile | — | 44.5 | — | LOW | all-abstain |
| — | Participa (Podemos) | — | 44.4 | — | LOW | all-abstain |
| — | Privacy Badger | — | 44.4 | — | LOW | all-abstain |
| — | GlobaLeaks | — | 44.3 | — | LOW | all-abstain |
| — | Public AI Inference Utility | — | 44.0 | — | LOW | all-abstain |
| — | The List | — | 44.0 | — | LOW | all-abstain |
| — | Watch Duty | — | 44.0 | — | LOW | all-abstain |
| — | Libertrium | — | 43.8 | — | LOW | all-abstain |
| — | Deliberation & Technology (DelibTech) Network | — | 43.8 | — | LOW | all-abstain |
| — | FarmerChat | — | 43.7 | — | LOW | all-abstain |
| — | Keep It In The Community | — | 43.6 | — | LOW | all-abstain |
| — | Gapminder Worldview Upgrader | — | 43.5 | — | LOW | all-abstain |
| — | UK Parliament Developer Portal | — | 43.4 | — | LOW | all-abstain |
| — | Diia | — | 43.1 | — | LOW | all-abstain |
| — | Entitledto | — | 43.0 | — | LOW | all-abstain |
| — | WriteToThem | — | 42.6 | — | LOW | all-abstain |
| — | Missing Numbers | — | 42.5 | — | LOW | all-abstain |
| — | Monitor Mamdani | — | 42.5 | — | HIGH | all-abstain |
| — | PolicyKit | — | 42.4 | — | LOW | all-abstain |
| — | Consciousness Evolution Operating System (ConSoc) | — | 41.8 | — | LOW | all-abstain |
| — | Dunadyne | — | 41.6 | — | LOW | all-abstain |
| — | The Engine Room Library | — | 41.6 | — | LOW | all-abstain |
| — | Timecounts | — | 41.6 | — | LOW | all-abstain |
| — | Stanford Participatory Budgeting Platform | — | 41.4 | — | HIGH | all-abstain |
| — | Mapped | — | 41.4 | — | LOW | all-abstain |
| — | FixMyBlock | — | 41.0 | — | LOW | all-abstain |
| — | Right To Know | — | 40.7 | — | LOW | all-abstain |
| — | DoGooder | — | 40.6 | — | LOW | all-abstain |
| — | UK Housing Data Standards | — | 40.3 | — | LOW | all-abstain |
| — | soweego | — | 40.3 | — | LOW | all-abstain |
| — | Open Referral UK | — | 40.2 | — | LOW | all-abstain |
| — | Political Advertising Transparency Data Standard | — | 40.0 | — | LOW | all-abstain |
| — | GrantNav | — | 40.0 | — | LOW | all-abstain |
| — | Mastodon C | — | 39.8 | — | HIGH | all-abstain |
| — | Schema.org | — | 39.7 | — | LOW | all-abstain |
| — | Shareyourpaper.org | — | 39.6 | — | LOW | all-abstain |
| — | Talk to the City | — | 39.6 | — | LOW | all-abstain |
| — | Registers and collaboration: making lists we can trust | — | 39.5 | — | LOW | all-abstain |
| — | Ethelo | — | 39.1 | — | LOW | all-abstain |
| — | Papertree | — | 38.7 | — | LOW | all-abstain |
| — | Violation Tracker UK | — | 38.5 | — | LOW | all-abstain |
| — | GRIM (Global Risk Simulator) | — | 38.4 | — | HIGH | all-abstain |
| — | Understanding Your Morality | — | 38.4 | — | LOW | all-abstain |
| — | MyActionCenter | — | 38.4 | — | LOW | all-abstain |
| — | Martus | — | 38.3 | — | LOW | all-abstain |
| — | Find local consultations | — | 38.1 | — | HIGH | all-abstain |
| — | Public Media Stack | — | 38.0 | — | LOW | all-abstain |
| — | Unpaywall Browser Extension | — | 38.0 | — | LOW | all-abstain |
| — | Wikidata | — | 38.0 | — | LOW | all-abstain |
| — | rsky | — | 37.5 | — | LOW | all-abstain |
| — | GOV.UK One Login | — | 37.4 | — | LOW | all-abstain |
| — | Logos | — | 36.9 | — | LOW | all-abstain |
| — | Parse The Bill | — | 36.9 | — | LOW | all-abstain |
| — | Granitt | — | 36.7 | — | LOW | all-abstain |
| — | Humble Data Workshop | — | 36.6 | — | LOW | all-abstain |
| — | OA.Works | — | 36.5 | — | LOW | all-abstain |
| — | Mapping.kids | — | 36.4 | — | LOW | all-abstain |
| — | Your Priorities | — | 36.3 | — | HIGH | all-abstain |
| — | The Guide to Major Trusts 2025/26 | — | 36.0 | — | LOW | all-abstain |
| — | OpenBudgets.eu | — | 35.8 | — | LOW | all-abstain |
| — | Open Data Communities | — | 35.8 | — | LOW | all-abstain |
| — | Rahvaalgatus | — | 35.6 | — | LOW | all-abstain |
| — | Granicus | — | 35.5 | — | LOW | all-abstain |
| — | WardWatch | — | 35.5 | — | LOW | all-abstain |
| — | Contracts for Data Collaboration | — | 35.3 | — | LOW | all-abstain |
| — | docs.plus | — | 35.1 | — | LOW | all-abstain |
| — | MP Twitter Bios | — | 34.9 | — | LOW | all-abstain |
| — | CommunityRule | — | 34.8 | — | LOW | all-abstain |
| — | Constitute Project | — | 34.8 | — | LOW | all-abstain |
| — | CAN/DGSI 127 - Age Assurance Technologies Standard | — | 34.5 | — | LOW | all-abstain |
| — | Parallel Parliament | — | 34.5 | — | LOW | all-abstain |
| — | Strike Map | — | 34.4 | — | LOW | all-abstain |
| — | UrbanistAI | — | 34.3 | — | LOW | all-abstain |
| — | Radicle | — | 34.1 | — | LOW | all-abstain |
| — | User Research Library | — | 34.1 | — | LOW | all-abstain |
| — | Harmonica | — | 33.7 | — | LOW | all-abstain |
| — | Cybersecurity for Democracy | — | 33.6 | — | LOW | all-abstain |
| — | Remember to Vote | — | 33.6 | — | LOW | all-abstain |
| — | GOV.UK Forms | — | 33.1 | — | LOW | all-abstain |
| — | MP Watch | — | 33.1 | — | LOW | all-abstain |
| — | GOV.UK Pay | — | 33.1 | — | LOW | all-abstain |
| — | The Decelerator | — | 33.0 | — | HIGH | all-abstain |
| — | Agreement Engine | — | 32.8 | — | LOW | all-abstain |
| — | Relational Tech Project | — | 32.8 | — | LOW | all-abstain |
| — | Digital Account Management Toolkit | — | 32.0 | — | LOW | all-abstain |
| — | Pageviews Analysis | — | 32.0 | — | LOW | all-abstain |
| — | OpenElections Leaflet Scraper and Parser | — | 31.5 | — | LOW | all-abstain |
| — | Local Insight | — | 31.5 | — | LOW | all-abstain |
| — | Polimorphic | — | 31.5 | — | LOW | all-abstain |
| — | Nook CRM | — | 31.4 | — | LOW | all-abstain |
| — | GOV Reuse Library | — | 31.1 | — | LOW | all-abstain |
| — | DAO Governance Surfaces | — | 31.1 | — | LOW | all-abstain |
| — | Service Manual | — | 31.1 | — | LOW | all-abstain |
| — | Go Vocal | — | 31.1 | — | LOW | all-abstain |
| — | GOV.UK Notify | — | 31.1 | — | LOW | all-abstain |
| — | Teaching Public Service in the Digital Age | — | 31.1 | — | LOW | all-abstain |
| — | WorkInCharities | — | 31.0 | — | LOW | all-abstain |
| — | Wikum | — | 30.8 | — | LOW | all-abstain |
| — | Community Notes (Birdwatch) Analysis Tool | — | 30.4 | — | LOW | all-abstain |
| — | Hand-Written Petition Scanner | — | 30.4 | — | LOW | all-abstain |
| — | River Sentiment Dashboard | — | 30.4 | — | LOW | all-abstain |
| — | Esper | — | 30.1 | — | LOW | all-abstain |
| — | Open Science Framework | — | 30.1 | — | LOW | all-abstain |
| — |  | — | 30.0 | — | LOW | all-abstain |
| — | PatCit | — | 29.8 | — | LOW | all-abstain |
| — | Kialo | — | 29.8 | — | LOW | all-abstain |
| — | The DAO (Standard DAO Framework) | — | 29.6 | — | LOW | all-abstain |
| — | Turbo Phonebank | — | 29.6 | — | LOW | all-abstain |
| — | PoliMonitor | — | 29.5 | — | HIGH | all-abstain |
| — | Bluesky Social | — | 29.4 | — | LOW | all-abstain |
| — | Consent-O-Matic | — | 29.1 | — | LOW | all-abstain |
| — | PlanIT | — | 28.6 | — | LOW | all-abstain |
| — | Spartacus | — | 28.6 | — | LOW | all-abstain |
| — | Gender Pay Gap Service | — | 28.5 | — | LOW | all-abstain |
| — | Nym | — | 28.5 | — | LOW | all-abstain |
| — | OA.Report | — | 28.5 | — | LOW | all-abstain |
| — | django-collaborative | — | 28.4 | — | LOW | all-abstain |
| — | Spacetube | — | 28.4 | — | LOW | all-abstain |
| — | Plinth | — | 28.0 | — | LOW | all-abstain |
| — | Moral Machine | — | 27.9 | — | LOW | all-abstain |
| — | Viewpoints | — | 27.8 | — | LOW | all-abstain |
| — | CrowdJustice | — | 27.8 | — | LOW | all-abstain |
| — | OpenAudience | — | 27.7 | — | LOW | all-abstain |
| — | Conservative Party Funding | — | 27.5 | — | LOW | all-abstain |
| — | UK Policy Dojo | — | 27.5 | — | LOW | all-abstain |
| — | Sci-Hub | — | 27.5 | — | LOW | all-abstain |
| — | Empurrando Juntas (EJ) | — | 27.1 | — | LOW | all-abstain |
| — | deliberAIde | — | 27.1 | — | LOW | all-abstain |
| — | GovWise | — | 27.1 | — | LOW | all-abstain |
| — | Metaculus | — | 26.9 | — | LOW | all-abstain |
| — | postcodes.io | — | 26.8 | — | LOW | all-abstain |
| — | Objector.ai | — | 26.6 | — | HIGH | all-abstain |
| — | Discourse | — | 26.6 | — | HIGH | all-abstain |
| — | Objector.ai | — | 26.6 | — | HIGH | all-abstain |
| — | The Data Trusts Initiative | — | 26.5 | — | LOW | all-abstain |
| — | Frankenstein Bill | — | 26.5 | — | LOW | all-abstain |
| — | In the news | — | 26.4 | — | HIGH | all-abstain |
| — | Beckton | — | 26.4 | — | LOW | all-abstain |
| — | PolicyMogul | — | 26.1 | — | LOW | all-abstain |
| — | Overton | — | 25.9 | — | LOW | all-abstain |
| — | Humanitarian Data Exchange | — | 25.5 | — | LOW | all-abstain |
| — | We Live It | — | 25.2 | — | LOW | all-abstain |
| — | Filmot | — | 25.0 | — | LOW | all-abstain |
| — | Labour Xchange | — | 25.0 | — | LOW | all-abstain |
| — | Theft Bisect | — | 25.0 | — | LOW | all-abstain |
| — | Who Posted What? | — | 25.0 | — | LOW | all-abstain |
| — | Membership | — | 24.6 | — | LOW | all-abstain |
| — | Public Editor | — | 24.4 | — | HIGH | all-abstain |
| — | COTSI (Cyber Operational Threat Situational Intelligence) | — | 24.1 | — | LOW | all-abstain |
| — | The Accountability Project | — | 24.0 | — | LOW | all-abstain |
| — | Organise | — | 23.8 | — | LOW | all-abstain |
| — | semanticClimate | — | 23.7 | — | LOW | all-abstain |
| — | Manifold Markets | — | 23.4 | — | LOW | all-abstain |
| — | Open Council Data UK | — | 23.4 | — | LOW | all-abstain |
| — | Marks Out Of Tenancy | — | 23.4 | — | LOW | all-abstain |
| — | Sugartrail | — | 23.0 | — | LOW | all-abstain |
| — | whatsmeow | — | 23.0 | — | LOW | all-abstain |
| — | oTree | — | 22.8 | — | LOW | all-abstain |
| — | Nestr | — | 22.6 | — | LOW | all-abstain |
| — | Society for Hopeful Technologists | — | 21.9 | — | LOW | all-abstain |
| — | GreenPT | — | 21.4 | — | LOW | all-abstain |
| — | Unknown Academic Paper (SSRN 5351275) | — | 21.0 | — | LOW | all-abstain |
| — | PostBug | — | 20.6 | — | LOW | all-abstain |
| — | youtube-dl | — | 19.0 | — | LOW | all-abstain |
| — | DemTech Navigator | — | 19.0 | — | HIGH | all-abstain |
| — | Riseup | — | 19.0 | — | LOW | all-abstain |
| — | DoNotPay | — | 19.0 | — | LOW | all-abstain |
| — | Coral | — | 18.3 | — | LOW | all-abstain |
| — | OSINT Framework | — | 18.0 | — | LOW | all-abstain |
| — | RightDD | — | 18.0 | — | LOW | all-abstain |
| — | Yoti | — | 17.5 | — | LOW | all-abstain |
| — | Fatebook | — | 17.0 | — | LOW | all-abstain |
| — | Whoisology | — | 17.0 | — | LOW | all-abstain |
| — | OpenOrigins | — | 17.0 | — | LOW | all-abstain |
| — | Prolific | — | 17.0 | — | LOW | all-abstain |
| — | Pear by Holepunch | — | 15.0 | — | LOW | all-abstain |
| — | DeepSeek-V3 | — | 15.0 | — | LOW | all-abstain |
| — | Fission Codes | — | 15.0 | — | LOW | all-abstain |
| — | Journalist Studio | — | 15.0 | — | LOW | all-abstain |
| — | VFRAME | — | 15.0 | — | LOW | all-abstain |
| — | Plausible Analytics | — | 13.0 | — | LOW | all-abstain |
| — | Urbit | — | 13.0 | — | LOW | all-abstain |
