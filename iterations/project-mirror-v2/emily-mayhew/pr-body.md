# Project Mirror v2: synthetic evaluator — rankings-only publication

## What is Project Mirror v2?

Project Mirror v2 is a synthetic evaluator estimation workflow built for the Newspeak House Politech Awards 2026. It estimates how individual cohort members might evaluate the 321-project longlist based on their public record and provided bio. It is a research prototype — not a claim about anyone's true beliefs.

It operates as three things simultaneously:

- **A constitutional ranking system** — each evaluator's implicit values are made explicit as a written constitution before any scoring takes place
- **A synthetic evaluator benchmark** — testing whether AI can reliably infer evaluative constitutions from public evidence and apply them consistently across 321 projects
- **A simulated jury deliberation system** — a fixed 5-model panel votes on the top candidates, introducing structured disagreement into the process

**This branch publishes only the final per-project scores and drivers for committee aggregation.** Constitution, evidence dossiers, jury logs, and other mirror artefacts are not included here.

Methodology and design decisions: PR [#76](https://github.com/nwspk/politech-awards-2026/pull/76)

---

## Full ranking — all 321 projects

**Field glossary:**

- **Score**: final adjusted score (0–100) = criteria total + modifier adjustments + procedural effects
- **Criteria**: raw weighted sum of criterion scores, before modifiers
- **Mod Adj**: net modifier adjustment (positive = boost, negative = reduction)
- **Completeness**: dossier richness (0.0–1.0)
- **Pop Risk**: HIGH = well-documented/well-known project; score may partly reflect documentation advantage
- **Rationale**: not published in this rankings-only slice (column shows "—")


| Rank | Project | URL | Score | Criteria | Mod Adj | Completeness | Uncertainty | Pop Risk | Primary Driver | Rationale |
|------|---------|-----|-------|----------|---------|-------------|-------------|----------|----------------|-----------|
| 1 | Open Digital Planning | https://opendigitalplanning.org/ | 78.1 | 65.1 | 13 | 1.0 | LOW | MEDIUM | criteria | — |
| 2 | ODK (Open Data Kit) | https://getodk.org | 77.8 | 61.8 | 16 | 0.93 | LOW | HIGH | criteria | — |
| 3 | mySociety Datasets and APIs | https://data.mysociety.org | 77.7 | 66.7 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 4 | Open Data Editor (ODE) | https://okfn.org/en/projects/open-data-editor/ | 76.8 | 60.8 | 16 | 1.0 | LOW | HIGH | criteria | — |
| 5 | OpenCRVS | https://www.opencrvs.org | 75.8 | 59.8 | 16 | 0.93 | LOW | HIGH | criteria | — |
| 6 | AlgorithmWatch | https://algorithmwatch.org | 73.9 | 65.9 | 8 | 1.0 | LOW | LOW | criteria | — |
| 7 | OSINT Framework | https://osintframework.com | 73.3 | 57.3 | 16 | 0.93 | LOW | HIGH | criteria | — |
| 8 | Nym | https://nymtech.net | 72.9 | 56.9 | 16 | 0.93 | LOW | MEDIUM | criteria | — |
| 9 | Bellingcat Online Investigation Toolkit | https://bellingcat.gitbook.io/toolkit | 72.8 | 61.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 10 | SecureDrop | https://securedrop.org | 71.4 | 60.4 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 11 | LiquidFeedback | https://liquidfeedback.com | 70.9 | 54.9 | 16 | 0.93 | LOW | LOW | criteria | — |
| 12 | oTree | https://www.otree.org | 70.5 | 54.5 | 16 | 0.93 | LOW | MEDIUM | criteria | — |
| 13 | Frankenstein Bill | https://gordonguthrie.github.io/frankensteinbill | 69.9 | 56.9 | 13 | 0.93 | LOW | LOW | criteria | — |
| 14 | OpenSanctions | https://www.opensanctions.org | 69.9 | 56.9 | 13 | 0.93 | LOW | MEDIUM | criteria | — |
| 15 | Unpaywall Browser Extension | https://unpaywall.org/products/extension | 69.8 | 58.8 | 11 | 0.93 | LOW | MEDIUM | criteria | — |
| 16 | Aleph (OCCRP) | https://aleph.occrp.org | 69.4 | 61.4 | 8 | 1.0 | LOW | MEDIUM | criteria | — |
| 17 | Creative Commons | https://creativecommons.org | 68.9 | 52.9 | 16 | 1.0 | LOW | HIGH | criteria | — |
| 18 | WhatDoTheyKnow | https://www.whatdotheyknow.com | 68.8 | 57.8 | 11 | 0.93 | LOW | MEDIUM | criteria | — |
| 19 | Humanitarian OpenStreetMap Team (HOT) | https://www.hotosm.org | 68.5 | 52.5 | 16 | 0.93 | LOW | HIGH | criteria | — |
| 20 | Loomio | https://www.loomio.org | 68.3 | 57.3 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 21 | Channel.org | https://channel.org | 68.0 | 52.0 | 16 | 0.93 | LOW | LOW | criteria | — |
| 22 | youtube-dl | https://github.com/ytdl-org/youtube-dl | 68.0 | 52.0 | 16 | 0.93 | LOW | HIGH | criteria | — |
| 23 | The Circuit | https://thecircuit.cc | 67.8 | 59.8 | 8 | 1.0 | LOW | LOW | criteria | — |
| 24 | OA.Works | https://oa.works/ | 67.6 | 51.6 | 16 | 0.93 | LOW | LOW | criteria | — |
| 25 | Tor Project | https://www.torproject.org | 67.4 | 59.4 | 8 | 0.93 | LOW | HIGH | criteria | — |
| 26 | Open Science Framework | https://osf.io | 67.2 | 51.2 | 16 | 0.93 | LOW | MEDIUM | criteria | — |
| 27 | Open Referral UK | https://openreferraluk.org | 67.0 | 51.0 | 16 | 0.93 | LOW | LOW | criteria | — |
| 28 | Bluesky | https://bsky.app | 66.6 | 50.6 | 16 | 0.93 | LOW | HIGH | criteria | — |
| 29 | Coral | https://coralproject.net | 66.5 | 55.5 | 11 | 0.93 | LOW | MEDIUM | criteria | — |
| 30 | Framework for Meaningful Engagement 2.0 | https://ecnl.org/publications/framework-meaningful-engagement-20?mc_cid=b1c5158063&mc_eid=a09c64ec38 | 66.2 | 58.2 | 8 | 0.87 | LOW | LOW | criteria | — |
| 31 | NumFOCUS | https://numfocus.org | 66.0 | 50.0 | 16 | 1.0 | LOW | MEDIUM | criteria | — |
| 32 | OpenProcurement | https://openprocurement.io | 66.0 | 50.0 | 16 | 0.93 | LOW | LOW | criteria | — |
| 33 | Pageviews Analysis | https://pageviews.wmcloud.org | 66.0 | 50.0 | 16 | 0.93 | LOW | LOW | criteria | — |
| 34 | Participedia | https://participedia.net | 65.9 | 52.9 | 13 | 1.0 | LOW | LOW | criteria | — |
| 35 | Alaveteli | https://alaveteli.org | 65.5 | 57.5 | 8 | 0.93 | LOW | MEDIUM | criteria | — |
| 36 | The Government Says | https://thegovernmentsays.com | 65.5 | 54.5 | 11 | 0.93 | LOW | LOW | criteria | — |
| 37 | Guardian Project | https://guardianproject.info | 65.3 | 57.3 | 8 | 0.93 | LOW | HIGH | criteria | — |
| 38 | GlobaLeaks | https://www.globaleaks.org | 65.0 | 49.0 | 16 | 0.93 | LOW | MEDIUM | criteria | — |
| 39 | Open Contracting Partnership | https://www.open-contracting.org | 65.0 | 52.0 | 13 | 1.0 | LOW | LOW | criteria | — |
| 40 | PolicyEngine | https://policyengine.org/uk | 64.9 | 53.9 | 11 | 0.93 | LOW | MEDIUM | criteria | — |
| 41 | Open Heart Mind (OHM) | https://openheartmind.org | 64.6 | 51.6 | 13 | 0.93 | LOW | LOW | criteria | — |
| 42 | Open Ownership | https://www.openownership.org | 64.4 | 48.4 | 16 | 0.93 | LOW | LOW | criteria | — |
| 43 | Open Council Network | https://opencouncil.network | 64.3 | 56.3 | 8 | 0.93 | LOW | LOW | criteria | — |
| 44 | Open Standards for Data Guidebook | https://standards.theodi.org | 64.2 | 48.2 | 16 | 0.93 | LOW | LOW | criteria | — |
| 45 | Cybersecurity for Democracy | https://cybersecurityfordemocracy.org | 64.1 | 53.1 | 11 | 0.93 | LOW | LOW | criteria | — |
| 46 | UK Housing Data Standards | https://hact.org.uk/tools-and-services/uk-housing-data-standards | 64.1 | 56.1 | 8 | 1.0 | LOW | LOW | criteria | — |
| 47 | OpenBudgets.eu | https://openbudgets.eu | 64.0 | 48.0 | 16 | 0.93 | LOW | LOW | criteria | — |
| 48 | All Our Ideas | https://all-our-ideas.citizens.is | 63.9 | 52.9 | 11 | 1.0 | LOW | LOW | criteria | — |
| 49 | Political Advertising Transparency Data Standard | https://github.com/whotargetsme/ad-transparency-standards/blob/main/implement.md | 63.9 | 55.9 | 8 | 0.93 | LOW | LOW | criteria | — |
| 50 | Granicus | https://granicus.com/uk | 63.7 | 43.7 | 20 | 0.87 | LOW | LOW | criteria | — |
| 51 | CommunityRule | https://communityrule.info | 63.5 | 52.5 | 11 | 1.0 | LOW | LOW | criteria | — |
| 52 | Your Priorities | https://yrpri.org | 63.5 | 52.5 | 11 | 0.93 | LOW | LOW | criteria | — |
| 53 | Matrix | https://matrix.org | 63.4 | 52.4 | 11 | 1.0 | LOW | HIGH | criteria | — |
| 54 | Privacy Badger | https://privacybadger.org | 63.4 | 52.4 | 11 | 1.0 | LOW | MEDIUM | criteria | — |
| 55 | HURIDOCS | https://github.com/huridocs | 63.3 | 55.3 | 8 | 0.93 | LOW | LOW | criteria | — |
| 56 | sourceAFRICA | https://sourceafrica.net | 62.4 | 51.4 | 11 | 0.93 | LOW | LOW | criteria | — |
| 57 | Choose a License | https://choosealicense.com | 62.1 | 44.1 | 18 | 0.93 | LOW | MEDIUM | criteria | — |
| 58 | Pastecal | https://github.com/kazad/pastecal | 62.1 | 46.1 | 16 | 0.93 | LOW | LOW | criteria | — |
| 59 | CONSUL Democracy | https://consulproject.org | 62.0 | 51.0 | 11 | 1.0 | LOW | HIGH | criteria | — |
| 60 | One Project | https://oneproject.org/ | 61.6 | 48.6 | 13 | 0.93 | LOW | LOW | criteria | — |
| 61 | The DAO (Standard DAO Framework) | https://github.com/vbuterin/dao | 61.4 | 50.4 | 11 | 0.93 | LOW | LOW | criteria | — |
| 62 | Logos | https://logos.co/ | 61.1 | 45.1 | 16 | 0.93 | LOW | LOW | criteria | — |
| 63 | Polis | https://github.com/compdemocracy/polis | 61.0 | 50.0 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 64 | DAO Governance Surfaces | https://github.com/notchia/dao-governance-surfaces | 61.0 | 50.0 | 11 | 0.93 | LOW | LOW | criteria | — |
| 65 | Open Collective | https://opencollective.com | 60.7 | 44.7 | 16 | 0.93 | LOW | HIGH | criteria | — |
| 66 | Groupthink (OpenPolitics Votebot) | https://github.com/openpolitics/groupthink | 60.5 | 52.5 | 8 | 1.0 | LOW | LOW | criteria | — |
| 67 | Participa (Podemos) | https://github.com/podemos-info/participa | 60.4 | 52.4 | 8 | 0.93 | LOW | LOW | criteria | — |
| 68 | LittleSis | https://littlesis.org | 60.4 | 52.4 | 8 | 1.0 | LOW | LOW | criteria | — |
| 69 | openparliament.ca | https://openparliament.ca/ | 60.4 | 52.4 | 8 | 0.93 | LOW | LOW | criteria | — |
| 70 | Journal of Open Source Software | https://joss.theoj.org | 60.1 | 44.1 | 16 | 1.0 | LOW | MEDIUM | criteria | — |
| 71 | Pursuance Project | https://pursuanceproject.org | 60.1 | 47.1 | 13 | 0.93 | LOW | LOW | criteria | — |
| 72 | Decidim | https://decidim.org | 60.0 | 52.0 | 8 | 0.93 | LOW | HIGH | criteria | — |
| 73 | Populate Tools | https://github.com/populatetools | 60.0 | 49.0 | 11 | 0.93 | LOW | LOW | criteria | — |
| 74 | Principles for Public Participation in Procurement of AI | https://p4ai.net | 60.0 | 49.0 | 11 | 0.87 | LOW | LOW | criteria | — |
| 75 | Security First / Umbrella | https://secfirst.org | 60.0 | 52.0 | 8 | 1.0 | LOW | LOW | criteria | — |
| 76 | PlaceCal | https://github.com/geeksforsocialchange/placecal | 59.7 | 43.7 | 16 | 0.93 | LOW | LOW | criteria | — |
| 77 | Wikidata | https://www.wikidata.org | 59.6 | 48.6 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 78 | OpenOrigins | https://www.openorigins.com | 59.1 | 43.1 | 16 | 0.87 | LOW | LOW | criteria | — |
| 79 | CiviCRM | https://civicrm.org | 59.0 | 48.0 | 11 | 0.93 | LOW | LOW | criteria | — |
| 80 | Cobudget | https://cobudget.com | 59.0 | 48.0 | 11 | 0.93 | LOW | LOW | criteria | — |
| 81 | vTaiwan | https://github.com/g0v/vue.vtaiwan.tw | 59.0 | 51.0 | 8 | 0.93 | LOW | LOW | criteria | — |
| 82 | Community Notes (Birdwatch) Analysis Tool | https://github.com/travisbrown/birdwatch | 59.0 | 51.0 | 8 | 1.0 | LOW | LOW | criteria | — |
| 83 | Full Fact AI | https://fullfact.org/ai | 58.8 | 38.8 | 20 | 0.87 | LOW | LOW | criteria | — |
| 84 | FarmerChat | https://farmerchat.digitalgreen.org | 58.7 | 42.7 | 16 | 0.87 | LOW | LOW | criteria | — |
| 85 | Global Fact-Check Bot (GFC) | https://globalfactcheck.bot/ | 58.7 | 45.7 | 13 | 0.93 | LOW | LOW | criteria | — |
| 86 | Granitt | https://granitt.io | 58.7 | 42.7 | 16 | 0.93 | LOW | LOW | criteria | — |
| 87 | Open Letter | https://openletter.earth | 58.7 | 42.7 | 16 | 0.8 | LOW | LOW | criteria | — |
| 88 | Martus | https://www.martus.org | 58.6 | 47.6 | 11 | 0.93 | LOW | LOW | criteria | — |
| 89 | Contracts for Data Collaboration | https://contractsfordatacollaboration.org | 58.2 | 50.2 | 8 | 0.93 | LOW | LOW | criteria | — |
| 90 | EDGAR | https://github.com/bellingcat/edgar | 58.1 | 47.1 | 11 | 0.93 | LOW | LOW | criteria | — |
| 91 | Mastodon C | https://www.mastodonc.com | 58.1 | 47.1 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 92 | Ushahidi | https://www.ushahidi.com | 58.1 | 47.1 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 93 | Filmot | https://filmot.com | 57.8 | 41.8 | 16 | 0.87 | LOW | LOW | criteria | — |
| 94 | semanticClimate | https://semanticclimate.github.io | 57.7 | 46.7 | 11 | 0.93 | LOW | LOW | criteria | — |
| 95 | PatCit | https://github.com/cverluise/patcit | 57.6 | 41.6 | 16 | 0.93 | LOW | LOW | criteria | — |
| 96 | Open Council Data UK | https://opencouncildata.co.uk | 57.5 | 46.5 | 11 | 0.87 | LOW | LOW | criteria | — |
| 97 | deliberAIde | https://www.deliberaide.com | 57.2 | 41.2 | 16 | 0.93 | LOW | LOW | criteria | — |
| 98 | Parallel Parliament | https://www.parallelparliament.co.uk | 57.2 | 49.2 | 8 | 0.93 | LOW | LOW | criteria | — |
| 99 | adhocracy+ | https://adhocracy.plus | 57.1 | 46.1 | 11 | 0.93 | LOW | LOW | criteria | — |
| 100 | The Engine Room Library | https://library.theengineroom.org | 57.1 | 46.1 | 11 | 0.93 | LOW | LOW | criteria | — |
| 101 | VFRAME | https://vframe.io | 56.7 | 43.7 | 13 | 0.93 | LOW | MEDIUM | criteria | — |
| 102 | RxC Voice | https://github.com/radicalxchange/rxc-voice | 56.6 | 48.6 | 8 | 0.93 | LOW | LOW | criteria | — |
| 103 | Journalist Studio | https://journaliststudio.google.com | 56.6 | 48.6 | 8 | 0.93 | LOW | MEDIUM | criteria | — |
| 104 | The Accountability Project | https://publicaccountability.org | 56.5 | 45.5 | 11 | 0.87 | LOW | LOW | criteria | — |
| 105 | Esper | https://esper.com/product | 56.2 | 40.2 | 16 | 0.87 | LOW | LOW | criteria | — |
| 106 | Open Data Communities | https://opendatacommunities.org | 56.2 | 48.2 | 8 | 0.87 | LOW | LOW | criteria | — |
| 107 | Open Supply Hub | https://opensupplyhub.org | 56.2 | 40.2 | 16 | 1.0 | LOW | LOW | criteria | — |
| 108 | Interoperable Deliberative Tools | https://metagov.org/projects/interop | 56.1 | 45.1 | 11 | 0.93 | LOW | LOW | criteria | — |
| 109 | WhatGov | https://www.whatgov.co.uk | 56.1 | 45.1 | 11 | 1.0 | LOW | LOW | criteria | — |
| 110 | Constitute Project | https://constituteproject.org | 56.0 | 48.0 | 8 | 1.0 | LOW | LOW | criteria | — |
| 111 | Diia | https://expo.diia.gov.ua | 55.7 | 44.7 | 11 | 1.0 | LOW | MEDIUM | criteria | — |
| 112 | Consent-O-Matic | https://github.com/cavi-au/consent-o-matic | 55.7 | 44.7 | 11 | 0.87 | LOW | MEDIUM | criteria | — |
| 113 | Rahvaalgatus | https://github.com/rahvaalgatus/rahvaalgatus | 55.7 | 44.7 | 11 | 0.93 | LOW | LOW | criteria | — |
| 114 | Teaching Public Service in the Digital Age | https://www.teachingpublicservice.digital | 55.7 | 44.7 | 11 | 0.93 | LOW | LOW | criteria | — |
| 115 | Mastodon | https://github.com/mastodon/mastodon | 55.5 | 52.5 | 3 | 0.93 | LOW | HIGH | criteria | — |
| 116 | OpenElections Leaflet Scraper and Parser | https://github.com/thicknavyrain/uk_elections_leaflets | 55.5 | 47.5 | 8 | 0.93 | LOW | LOW | criteria | — |
| 117 | Nyaaya | https://nyaaya.org | 55.4 | 39.4 | 16 | 1.0 | LOW | MEDIUM | criteria | — |
| 118 | Overton | https://overton.io | 55.2 | 39.2 | 16 | 0.87 | LOW | LOW | criteria | — |
| 119 | Civic Tech Field Guide | https://civictech.guide | 55.1 | 44.1 | 11 | 0.87 | LOW | HIGH | criteria | — |
| 120 | CKAN | https://ckan.org | 55.1 | 44.1 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 121 | postcodes.io | https://github.com/ideal-postcodes/postcodes.io | 55.1 | 44.1 | 11 | 0.93 | LOW | MEDIUM | criteria | — |
| 122 | Stanford Participatory Budgeting Platform | https://github.com/stanfordcdt/pb | 55.1 | 47.1 | 8 | 0.93 | LOW | HIGH | criteria | — |
| 123 | Modular Politics | https://arxiv.org/abs/2005.13701 | 54.5 | 43.5 | 11 | 0.87 | LOW | LOW | criteria | — |
| 124 | Parti | https://parti.xyz | 54.3 | 46.3 | 8 | 1.0 | LOW | LOW | criteria | — |
| 125 | DoNotPay | https://www.donotpay.com | 54.2 | 38.2 | 16 | 0.93 | LOW | LOW | criteria | — |
| 126 | django-collaborative | https://github.com/propublica/django-collaborative | 54.1 | 46.1 | 8 | 0.93 | LOW | LOW | criteria | — |
| 127 | TheyWorkForYou | https://www.theyworkforyou.com | 54.1 | 46.1 | 8 | 0.93 | LOW | LOW | criteria | — |
| 128 | OA.Report | https://oa.report | 53.5 | 37.5 | 16 | 0.87 | LOW | LOW | criteria | — |
| 129 | ClimateAction.Tech | https://climateaction.tech | 53.3 | 37.3 | 16 | 0.93 | LOW | MEDIUM | criteria | — |
| 130 | Turn2us Benefits Calculator | https://benefits-calculator.turn2us.org.uk | 53.2 | 42.2 | 11 | 0.87 | LOW | HIGH | criteria | — |
| 131 | Bluesky Social | https://github.com/bluesky-social | 53.2 | 42.2 | 11 | 1.0 | LOW | HIGH | criteria | — |
| 132 | Bonfire | https://bonfirenetworks.org/ | 53.1 | 45.1 | 8 | 0.93 | LOW | LOW | criteria | — |
| 133 | Sugartrail | https://github.com/ribenamaplesyrup/sugartrail | 53.1 | 45.1 | 8 | 0.93 | LOW | LOW | criteria | — |
| 134 | Nestr | https://nestr.io | 52.9 | 36.9 | 16 | 0.87 | LOW | LOW | criteria | — |
| 135 | DISARM Frameworks | https://github.com/disarmfoundation/disarmframeworks | 52.7 | 44.7 | 8 | 0.93 | LOW | LOW | criteria | — |
| 136 | Parliament Watch Uganda | https://parliamentwatch.ug/ | 52.3 | 44.3 | 8 | 0.87 | LOW | LOW | criteria | — |
| 137 | rsky | https://github.com/blacksky-algorithms/rsky | 52.2 | 41.2 | 11 | 0.93 | LOW | LOW | criteria | — |
| 138 | Ethelo | https://ethelo.com | 52.1 | 44.1 | 8 | 0.93 | LOW | LOW | criteria | — |
| 139 | Service Manual | https://www.gov.uk/service-manual | 52.1 | 44.1 | 8 | 1.0 | LOW | LOW | criteria | — |
| 140 | UK Policy Dojo | https://github.com/mikekelly/policy-dojo | 51.8 | 40.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 141 | Public Media Stack | https://publicmediastack.com | 51.8 | 38.8 | 13 | 0.87 | LOW | LOW | criteria | — |
| 142 | Gender Pay Gap Service | https://gender-pay-gap.service.gov.uk | 51.3 | 35.3 | 16 | 0.87 | LOW | LOW | criteria | — |
| 143 | Internet Archive Wayback Machine | https://web.archive.org | 51.2 | 48.2 | 3 | 1.0 | LOW | LOW | criteria | — |
| 144 | Fundación Ciudadanía Inteligente | https://ciudadaniai.org | 51.1 | 43.1 | 8 | 0.93 | LOW | LOW | criteria | — |
| 145 | Tech Coops List | https://tech-coops.xyz | 51.1 | 43.1 | 8 | 0.93 | LOW | LOW | criteria | — |
| 146 | Who Targets Me Trends | https://trends.whotargets.me | 51.1 | 43.1 | 8 | 0.87 | LOW | LOW | criteria | — |
| 147 | Awesome UK Government Datasets | https://github.com/i-dot-ai/awesome-gov-datasets | 50.8 | 39.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 148 | Strike Map | https://strikemap.org | 50.8 | 39.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 149 | Moral Machine | https://moralmachine.net | 50.7 | 42.7 | 8 | 1.0 | LOW | MEDIUM | criteria | — |
| 150 | UrbanistAI | https://site.urbanistai.com | 50.7 | 42.7 | 8 | 0.8 | LOW | LOW | criteria | — |
| 151 | Talk to the City | https://talktothecity.org | 50.7 | 42.7 | 8 | 1.0 | LOW | LOW | criteria | — |
| 152 | Atlas of Surveillance | https://atlasofsurveillance.org | 50.6 | 39.6 | 11 | 1.0 | LOW | LOW | criteria | — |
| 153 | ShineYourEye | https://www.shineyoureye.org | 50.6 | 39.6 | 11 | 0.93 | LOW | LOW | criteria | — |
| 154 | WardWatch | https://wardwatch.uk | 50.3 | 34.3 | 16 | 0.87 | LOW | LOW | criteria | — |
| 155 | CharmVerse | https://charmverse.io/ | 50.2 | 39.2 | 11 | 0.93 | LOW | LOW | criteria | — |
| 156 | Citizen OS | https://citizenos.com/platform/ | 50.2 | 42.2 | 8 | 0.93 | LOW | LOW | criteria | — |
| 157 | dDocs | https://ddocs.new/ | 50.2 | 39.2 | 11 | 0.8 | LOW | LOW | criteria | — |
| 158 | GovTrack.us | https://www.govtrack.us | 50.0 | 49.0 | 1 | 1.0 | LOW | MEDIUM | criteria | — |
| 159 | ОПОРА (Opora) | https://www.oporaua.org | 50.0 | 49.0 | 1 | 0.93 | LOW | LOW | criteria | — |
| 160 | Radicle | https://radicle.xyz | 49.8 | 38.8 | 11 | 0.93 | LOW | MEDIUM | criteria | — |
| 161 | Who Posted What? | https://whopostedwhat.com | 49.8 | 38.8 | 11 | 0.87 | LOW | LOW | criteria | — |
| 162 | GOV.UK Pay | https://www.payments.service.gov.uk | 49.8 | 38.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 163 | Parse The Bill | https://parsethebill.com | 49.6 | 38.6 | 11 | 0.87 | LOW | LOW | criteria | — |
| 164 | User Research Library | https://research.localgov.digital | 49.6 | 38.6 | 11 | 0.87 | LOW | LOW | criteria | — |
| 165 | Shareyourpaper.org | https://shareyourpaper.org | 49.6 | 41.6 | 8 | 0.93 | LOW | LOW | criteria | — |
| 166 | Aragon | https://aragon.org | 49.5 | 45.5 | 4 | 0.93 | LOW | MEDIUM | criteria | — |
| 167 | Data Observation Toolkit (DOT) | https://github.com/datakind/data-observation-toolkit | 49.3 | 36.3 | 13 | 0.93 | LOW | LOW | criteria | — |
| 168 | Deliberation & Technology (DelibTech) Network | https://www.demnext.org/projects/delibtech-network | 49.3 | 36.3 | 13 | 0.87 | LOW | LOW | criteria | — |
| 169 | soweego | https://soweego.readthedocs.io | 49.2 | 38.2 | 11 | 0.93 | LOW | LOW | criteria | — |
| 170 | Discourse | https://www.discourse.org | 49.2 | 38.2 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 171 | MP Twitter Bios | https://www.mptwitterbios.co.uk | 49.2 | 41.2 | 8 | 0.93 | LOW | LOW | criteria | — |
| 172 | Activist Handbook | https://activisthandbook.org/ | 48.8 | 37.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 173 | Kialo | https://kialo.com | 48.8 | 37.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 174 | GOV.UK Notify | https://www.notifications.service.gov.uk | 48.8 | 40.8 | 8 | 0.93 | LOW | MEDIUM | criteria | — |
| 175 | Monitor Mamdani | https://monitormamdani.com/ | 48.6 | 37.6 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 176 | Objector.ai | https://objector.ai | 48.6 | 40.6 | 8 | 0.87 | LOW | HIGH | criteria | — |
| 177 | Objector.ai | https://www.objector.ai | 48.6 | 40.6 | 8 | 0.87 | LOW | HIGH | criteria | — |
| 178 | Harmonica | https://harmonica.chat/ | 48.3 | 37.3 | 11 | 0.8 | LOW | LOW | criteria | — |
| 179 | Humble Data Workshop | https://humbledata.org | 48.3 | 37.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 180 | Missing Numbers | https://missingnumbers.org | 48.3 | 37.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 181 | Theft Bisect | https://onodi.co/bisect/ | 48.3 | 37.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 182 | ORCID | https://orcid.org | 48.3 | 35.3 | 13 | 1.0 | LOW | MEDIUM | criteria | — |
| 183 | FixMyStreet | https://www.fixmystreet.com | 48.3 | 37.3 | 11 | 0.93 | LOW | HIGH | criteria | — |
| 184 | Plinth | https://www.plinth.org.uk | 48.3 | 37.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 185 | RightDD | https://www.rightsdd.com | 48.3 | 37.3 | 11 | 0.87 | LOW | LOW | criteria | — |
| 186 | Manifold Markets | https://manifold.markets | 48.2 | 40.2 | 8 | 0.93 | LOW | MEDIUM | criteria | — |
| 187 | GreenPT | https://greenpt.ai/ | 48.0 | 32.0 | 16 | 0.8 | LOW | LOW | criteria | — |
| 188 | Tactical Data Engagement | https://communities.sunlightfoundation.com/methodology | 47.8 | 39.8 | 8 | 0.87 | LOW | LOW | criteria | — |
| 189 | Gapminder Worldview Upgrader | https://upgrader.gapminder.org | 47.8 | 39.8 | 8 | 1.0 | LOW | MEDIUM | criteria | — |
| 190 | Pear by Holepunch | https://docs.holepunch.to | 47.4 | 31.4 | 16 | 0.93 | LOW | LOW | criteria | — |
| 191 | docs.plus | https://docs.plus | 47.3 | 36.3 | 11 | 0.87 | LOW | LOW | criteria | — |
| 192 | Find local consultations | https://gov.uk/find-local-consultations | 47.3 | 34.3 | 13 | 0.87 | LOW | HIGH | criteria | — |
| 193 | MapIt | https://mapit.mysociety.org | 47.3 | 36.3 | 11 | 1.0 | LOW | LOW | criteria | — |
| 194 | RxC Quadratic Voting | https://quadraticvote.radicalxchange.org | 47.2 | 39.2 | 8 | 0.93 | LOW | LOW | criteria | — |
| 195 | Wikum | https://www.csail.mit.edu/research/wikum-bridging-discussion-systems-and-wikis-collective-summarization | 47.2 | 39.2 | 8 | 0.93 | LOW | LOW | criteria | — |
| 196 | Campaign Tracker | https://www.campaigntracker.nl/en | 47.1 | 46.1 | 1 | 1.0 | LOW | LOW | criteria | — |
| 197 | Registers and collaboration: making lists we can trust | https://theodi.org/insights/reports/registers-and-collaboration-making-lists-we-can-trust-report | 46.9 | 33.9 | 13 | 0.87 | LOW | LOW | criteria | — |
| 198 | arXiv | https://arxiv.org | 46.8 | 38.8 | 8 | 1.0 | LOW | MEDIUM | criteria | — |
| 199 | Nook CRM | https://nookcrm.com | 46.4 | 30.4 | 16 | 0.93 | LOW | LOW | criteria | — |
| 200 | Papertree | https://www.papertree.earth | 46.4 | 30.4 | 16 | 0.6 | MEDIUM | NONE | criteria | — |
| 201 | CoTech | https://coops.tech | 46.3 | 35.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 202 | GrantNav | https://grantnav.threesixtygiving.org | 46.3 | 35.3 | 11 | 1.0 | LOW | LOW | criteria | — |
| 203 | Go Vocal | https://www.govocal.com | 46.3 | 35.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 204 | CivicPress | https://civicpress.io/ | 45.9 | 34.9 | 11 | 0.93 | LOW | LOW | criteria | — |
| 205 | Mozilla Data Collective | https://datacollective.mozillafoundation.org/ | 45.8 | 37.8 | 8 | 0.93 | LOW | HIGH | criteria | — |
| 206 | FixMyBlock | https://fixmyblock.org | 45.4 | 29.4 | 16 | 0.87 | MEDIUM | LOW | criteria | — |
| 207 | Empurrando Juntas (EJ) | https://sobre.ejparticipe.org | 45.4 | 29.4 | 16 | 0.8 | MEDIUM | LOW | criteria | — |
| 208 | Conservative Party Funding | https://conservativepartyfunding.co.uk | 45.3 | 34.3 | 11 | 0.87 | LOW | LOW | criteria | — |
| 209 | whatsmeow | https://github.com/tulir/whatsmeow | 45.3 | 34.3 | 11 | 0.73 | LOW | MEDIUM | criteria | — |
| 210 | Public AI Inference Utility | https://publicai.co/ | 45.3 | 34.3 | 11 | 1.0 | LOW | LOW | criteria | — |
| 211 | Snowdrift.coop | https://snowdrift.coop | 45.3 | 34.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 212 | WriteToThem | https://www.writetothem.com | 45.3 | 34.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 213 | Anna's Archive | https://annas-archive.pm | 45 | 46.7 | 8 | 0.93 | LOW | HIGH | criteria | — |
| 214 | Humanitarian Data Exchange | https://data.humdata.org | 45 | 44.7 | 16 | 1.0 | LOW | LOW | criteria | — |
| 215 | Dovetail | https://dovetail.network | 45.0 | 29.0 | 16 | 0.87 | MEDIUM | LOW | criteria | — |
| 216 | Entitledto | https://entitledto.co.uk | 45 | 40.8 | 16 | 0.93 | LOW | LOW | criteria | — |
| 217 | Agreement Engine | https://medium.com/metagov/introducing-the-agreement-engine-bf03b6d5c16c | 45 | 51.6 | 11 | 0.93 | LOW | LOW | criteria | — |
| 218 | Members' Interests | https://membersinterests.org.uk | 45 | 38.8 | 11 | 0.93 | LOW | LOW | criteria | — |
| 219 | Abstract Wikipedia | https://meta.wikimedia.org/wiki/abstract_wikipedia | 45 | 56.9 | 8 | 1.0 | LOW | HIGH | criteria | — |
| 220 | Metaculus | https://metaculus.com | 45 | 34.9 | 11 | 1.0 | LOW | LOW | criteria | — |
| 221 | New_ Public Roundabout | https://newpublic.substack.com/p/introducing-roundabout-built-for | 45.0 | 32.0 | 13 | 0.93 | LOW | LOW | criteria | — |
| 222 | Open Access – Transparency International UK | https://openaccess.transparency.org.uk | 45 | 45.3 | 11 | 0.93 | LOW | LOW | criteria | — |
| 223 | PlanIT | https://planit.org.uk | 45 | 45.1 | 11 | 0.93 | LOW | LOW | criteria | — |
| 224 | PolicyKit | https://policykit.org | 45 | 56.9 | 11 | 1.0 | LOW | MEDIUM | criteria | — |
| 225 | GovWise | https://www.govwise.ai/en | 45.0 | 29.0 | 16 | 0.8 | MEDIUM | LOW | criteria | — |
| 226 | Public Editor | https://www.publiceditor.io | 45 | 46.7 | 11 | 0.87 | LOW | HIGH | criteria | — |
| 227 | Agencies for Good | https://www.agenciesforgood.org | 44.9 | 36.9 | 8 | 0.93 | LOW | LOW | criteria | — |
| 228 | CrowdJustice | https://www.crowdjustice.com | 44.9 | 33.9 | 11 | 0.93 | LOW | LOW | criteria | — |
| 229 | Give Food | https://www.givefood.org.uk | 44.9 | 33.9 | 11 | 1.0 | LOW | LOW | criteria | — |
| 230 | Organise | https://www.organise.org.uk | 44.9 | 33.9 | 11 | 0.93 | LOW | LOW | criteria | — |
| 231 | Violation Tracker UK | https://violationtrackeruk.goodjobsfirst.org | 44.7 | 33.7 | 11 | 0.87 | LOW | LOW | criteria | — |
| 232 | Cortico | https://cortico.ai/platform | 44.3 | 36.3 | 8 | 0.87 | LOW | LOW | criteria | — |
| 233 | Relational Tech Project | https://relationaltechproject.org | 44.3 | 33.3 | 11 | 0.8 | LOW | LOW | criteria | — |
| 234 | Viewpoints | https://viewpoints.xyz | 44.3 | 33.3 | 11 | 0.87 | LOW | LOW | criteria | — |
| 235 | Prolific | https://www.prolific.com | 44.3 | 33.3 | 11 | 0.87 | LOW | LOW | criteria | — |
| 236 | PolicyMogul | https://policymogul.com | 43.7 | 32.7 | 11 | 0.87 | LOW | LOW | criteria | — |
| 237 | DoGooder | https://dogooder.co | 43.5 | 27.5 | 16 | 0.8 | MEDIUM | LOW | criteria | — |
| 238 | DemTech Navigator | https://navigator.oii.ox.ac.uk | 43.5 | 27.5 | 16 | 0.87 | MEDIUM | HIGH | criteria | — |
| 239 | Murmurations Protocol | https://murmurations.network | 43.4 | 32.4 | 11 | 0.93 | LOW | LOW | criteria | — |
| 240 | Sci-Hub | https://sci-hub.se | 43.4 | 32.4 | 11 | 0.93 | LOW | LOW | criteria | — |
| 241 | Collaborative Data Patterns | https://collaborative-data.theodi.org | 43.3 | 35.3 | 8 | 0.87 | LOW | LOW | criteria | — |
| 242 | COTSI (Cyber Operational Threat Situational Intelligence) | https://cotsi.org/ | 43.3 | 35.3 | 8 | 0.87 | LOW | LOW | criteria | — |
| 243 | Dunadyne | https://dunadyne.org | 43.0 | 30.0 | 13 | 0.8 | MEDIUM | LOW | criteria | — |
| 244 | GOV.UK One Login | https://www.sign-in.service.gov.uk | 43.0 | 32.0 | 11 | 1.0 | LOW | LOW | criteria | — |
| 245 | Tracka | https://yourtracka.org | 42.9 | 34.9 | 8 | 0.93 | LOW | LOW | criteria | — |
| 246 | UK Parliament Developer Portal | https://developer.parliament.uk | 42.4 | 31.4 | 11 | 0.93 | LOW | LOW | criteria | — |
| 247 | Digital Account Management Toolkit | https://digitalcharitylab.org/product/digital-account-management-toolkit | 42.4 | 29.4 | 13 | 0.87 | MEDIUM | LOW | criteria | — |
| 248 | Timecounts | https://timecounts.org | 42.4 | 31.4 | 11 | 0.87 | LOW | LOW | criteria | — |
| 249 | Polimorphic | https://www.polimorphic.com | 42.4 | 31.4 | 11 | 0.8 | LOW | LOW | criteria | — |
| 250 | In the news | https://en.wikipedia.org/wiki/wikipedia:in_the_news | 42.3 | 34.3 | 8 | 0.87 | LOW | LOW | criteria | — |
| 251 | Fairbnb.coop | https://fairbnb.coop | 42.0 | 31.0 | 11 | 1.0 | LOW | LOW | criteria | — |
| 252 | Fatebook | https://fatebook.io | 42.0 | 31.0 | 11 | 1.0 | LOW | MEDIUM | criteria | — |
| 253 | Land Explorer | https://landexplorer.coop | 42.0 | 31.0 | 11 | 0.87 | LOW | LOW | criteria | — |
| 254 | GOV.UK Forms | https://www.forms.service.gov.uk | 42.0 | 31.0 | 11 | 0.93 | LOW | LOW | criteria | — |
| 255 | Schema.org | https://schema.org | 41.9 | 33.9 | 8 | 0.67 | MEDIUM | LOW | criteria | — |
| 256 | The Data Trusts Initiative | https://datatrusts.uk | 41.5 | 33.5 | 8 | 0.87 | LOW | LOW | criteria | — |
| 257 | Shared Digital Guides | https://www.shareddigitalguides.org.uk | 41.4 | 30.4 | 11 | 0.87 | LOW | LOW | criteria | — |
| 258 | CiviClick | https://civiclick.com | 41.0 | 28.0 | 13 | 0.8 | MEDIUM | LOW | criteria | — |
| 259 | Membership | https://medium.com/@abscond/membership-a-prototype-ea822b2683b | 40.9 | 36.9 | 4 | 0.8 | LOW | LOW | criteria | — |
| 260 | Neighbourhood Warmth | https://www.mysociety.org/climate/neighbourhood-warmth | 40.5 | 27.5 | 13 | 0.87 | MEDIUM | LOW | criteria | — |
| 261 | Responsible Tech Guide 2025 | https://alltechishuman.org/responsible-tech-guide-2025 | 40.4 | 32.4 | 8 | 0.87 | LOW | LOW | criteria | — |
| 262 | Beckton | https://richardpope.org/2017/03/05/beckton-a-tool-to-build | 40.4 | 32.4 | 8 | 0.93 | LOW | LOW | criteria | — |
| 263 | Spartacus | https://spartacus.app | 40.4 | 29.4 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 264 | Watch Duty | https://www.watchduty.org | 40.4 | 29.4 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 265 | Yoti | https://www.yoti.com | 40.4 | 29.4 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 266 | Libertrium | https://liberopinion.com | 40.0 | 29.0 | 11 | 0.8 | MEDIUM | LOW | criteria | — |
| 267 | River Sentiment Dashboard | https://riversentiment.app | 39.8 | 31.8 | 8 | 0.87 | LOW | LOW | criteria | — |
| 268 | The Commons Social Change Library | https://commonslibrary.org | 39.4 | 31.4 | 8 | 0.87 | LOW | LOW | criteria | — |
| 269 | Democracy Fund Open Source | https://www.dfos.com | 39.4 | 28.4 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 270 | Local Deep Researcher | https://local-deep-researcher-hnmh.vercel.app/ | 39.0 | 28.0 | 11 | 0.6 | MEDIUM | NONE | criteria | — |
| 271 | Local Insight | https://localinsight.org | 39.0 | 28.0 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 272 | CAN/DGSI 127 - Age Assurance Technologies Standard | https://dgc-cgn.org/product/can-dgsi-127/ | 38.6 | 30.6 | 8 | 0.87 | LOW | LOW | criteria | — |
| 273 | Understanding Your Morality | https://programs.clearerthinking.org/understanding-your-morality/ | 38.5 | 27.5 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 274 | Whoisology | https://whoisology.com | 38.5 | 27.5 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 275 | We Live It | https://www.welivedit.ai | 38.5 | 27.5 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 276 | Urbit | https://urbit.org | 38.3 | 34.3 | 4 | 0.93 | LOW | MEDIUM | criteria | — |
| 277 | Remember to Vote | https://remembertovote.org.uk | 38.1 | 27.1 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 278 | Landlord Tech Watch | https://antievictionmappingproject.github.io/landlordtech | 38.0 | 30.0 | 8 | 0.93 | MEDIUM | LOW | criteria | — |
| 279 | GOV Reuse Library | https://dev.reuselibrary.service.justice.gov.uk/ | 38.0 | 30.0 | 8 | 0.87 | MEDIUM | LOW | criteria | — |
| 280 | Charity Digital Skills Report | https://charitydigitalskills.co.uk | 37.8 | 29.8 | 8 | 0.87 | MEDIUM | LOW | criteria | — |
| 281 | The Guide to Major Trusts 2025/26 | https://www.dsc.org.uk/publication/the-guide-to-major-trusts-2025-26/ | 37.6 | 21.6 | 16 | 0.87 | MEDIUM | LOW | criteria | — |
| 282 | Right To Know | https://right-to-know.org | 37.5 | 26.5 | 11 | 0.93 | MEDIUM | LOW | criteria | — |
| 283 | MP Watch | https://www.mpwatch.org | 37.5 | 26.5 | 11 | 0.93 | MEDIUM | LOW | criteria | — |
| 284 | Marks Out Of Tenancy | https://www.marksoutoftenancy.com | 37.4 | 29.4 | 8 | 0.87 | MEDIUM | LOW | criteria | — |
| 285 | Vote for Policies | https://voteforpolicies.org.uk | 37.0 | 29.0 | 8 | 0.87 | MEDIUM | LOW | criteria | — |
| 286 | Local Intelligence Hub | https://www.localintelligencehub.com | 37.0 | 29.0 | 8 | 1.0 | MEDIUM | LOW | criteria | — |
| 287 | OpenAudience | https://openaudience.org | 36.5 | 25.5 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 288 | Community Tech | https://www.communitytech.network | 36.5 | 25.5 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 289 | Worker Info Exchange | https://www.workerinfoexchange.org | 36.4 | 28.4 | 8 | 0.93 | MEDIUM | LOW | criteria | — |
| 290 | PostBug | https://postbug.com | 36.1 | 25.1 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 291 | Turbo Phonebank | https://turbophonebank.com | 36.1 | 25.1 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 292 | Idealist | https://idealist.org | 35.5 | 27.5 | 8 | 0.87 | MEDIUM | LOW | criteria | — |
| 293 | Riseup | https://riseup.net | 35.5 | 24.5 | 11 | 0.93 | MEDIUM | LOW | criteria | — |
| 294 | AISafety.info | https://aisafety.info | 34.5 | 23.5 | 11 | 1.0 | MEDIUM | LOW | criteria | — |
| 295 | DeepSeek-V3 | https://github.com/deepseek-ai/deepseek-v3 | 34.5 | 26.5 | 8 | 0.93 | MEDIUM | HIGH | criteria | — |
| 296 | GRIM (Global Risk Simulator) | https://github.com/sentinelteam/grim | 34.4 | 29.4 | 5 | 1.0 | MEDIUM | HIGH | criteria | — |
| 297 | Turkopticon | https://turkopticon.ucsd.edu | 34.4 | 31.4 | 3 | 0.93 | LOW | MEDIUM | criteria | — |
| 298 | Democracy Club Developer API | https://developers.democracyclub.org.uk/api/v1 | 34.3 | 33.3 | 1 | 1.0 | LOW | LOW | criteria | — |
| 299 | Hand-Written Petition Scanner | https://hand-written-petition-scanner.streamlit.app | 33.5 | 22.5 | 11 | 0.8 | MEDIUM | LOW | criteria | — |
| 300 | Ladder Hub | https://ladderhub.org/ | 33.5 | 22.5 | 11 | 0.93 | MEDIUM | LOW | criteria | — |
| 301 | Citizens Advice Tableau Public Profile | https://public.tableau.com/app/profile/citizensadvice/vizzes | 33.5 | 25.5 | 8 | 0.8 | MEDIUM | LOW | criteria | — |
| 302 | MyActionCenter | https://www.myaction.center | 33.5 | 22.5 | 11 | 0.8 | MEDIUM | LOW | criteria | — |
| 303 | PoliMonitor | https://www.polimonitor.com | 33.5 | 25.5 | 8 | 0.8 | MEDIUM | MEDIUM | criteria | — |
| 304 | meet.coop | https://www.meet.coop | 33.3 | 33.3 | 0 | 1.0 | LOW | LOW | criteria | — |
| 305 | Plausible Analytics | https://plausible.io | 33.0 | 30.0 | 3 | 0.93 | MEDIUM | HIGH | criteria | — |
| 306 | Collab.Land | https://collab.land | 32.6 | 21.6 | 11 | 0.87 | MEDIUM | LOW | criteria | — |
| 307 | Mapped | https://mapped.commonknowledge.coop | 32.5 | 24.5 | 8 | 0.93 | MEDIUM | LOW | criteria | — |
| 308 | Labour Xchange | https://labourxchange.uk | 31.6 | 20.6 | 11 | 0.93 | MEDIUM | LOW | criteria | — |
| 309 | Mapping.kids | https://mapping.kids | 31.2 | 20.2 | 11 | 0.67 | MEDIUM | LOW | criteria | — |
| 310 | WorkInCharities | https://www.workincharities.co.uk | 31.2 | 20.2 | 11 | 0.8 | MEDIUM | LOW | criteria | — |
| 311 | Society for Hopeful Technologists | https://societyforhopefultechnologists.org | 29.6 | 18.6 | 11 | 0.93 | MEDIUM | LOW | criteria | — |
| 312 | Spacetube | https://spacetu.be | 29.5 | 26.5 | 3 | 0.87 | MEDIUM | LOW | criteria | — |
| 313 | CivicMatch | https://civicmatch.app | 29.2 | 18.2 | 11 | 0.73 | MEDIUM | LOW | criteria | — |
| 314 | The Decelerator | https://decelerator.org.uk | 27.2 | 19.2 | 8 | 0.87 | MEDIUM | HIGH | criteria | — |
| 315 | Fission Codes | https://github.com/fission-codes/fission-codes | 26.5 | 22.5 | 4 | 0.8 | MEDIUM | LOW | criteria | — |
| 316 | Kagi SlopStop | https://blog.kagi.com/slopstop | 25.5 | 25.5 | 0 | 1.0 | MEDIUM | LOW | criteria | — |
| 317 | Unknown Academic Paper (SSRN 5351275) | https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5351275 | 25 | 15.3 | 8 | 0.33 | HIGH | NONE | underdog-protection | — |
| 318 | — | https://tracking-template-38b4c.web.app | 25 | 15.3 | 8 | 0.27 | HIGH | NONE | underdog-protection | — |
| 319 | Keep It In The Community | https://plunkett.my.site.com/keepitinthecommunity/s | 23.7 | 12.7 | 11 | 0.8 | MEDIUM | LOW | criteria | — |
| 320 | The List | https://the-list.uk | 22.1 | 24.1 | -2 | 0.93 | MEDIUM | LOW | criteria | — |
| 321 | Consciousness Evolution Operating System (ConSoc) | https://www.consoc.io | 16.9 | 5.9 | 11 | 0.47 | MEDIUM | NONE | criteria | — |
