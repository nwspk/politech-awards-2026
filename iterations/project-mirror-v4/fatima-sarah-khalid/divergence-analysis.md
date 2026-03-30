# Divergence Analysis: v3 vs v5
## Evaluator: Fatima Sarah Khalid
## Version: v4 synthesis | 2026-03-30

---

## Overview

- v3 (implementation-first): 319 projects scored
- v5 (agency-first): 321 projects scored (includes 2 blanks/unknown)
- Shared projects analysed: 319
- Median rank v3: 159.5 | Median rank v5: 160.5

Delta = v3_rank − v5_rank. Positive = v3 ranked higher (implementation wins). Negative = v5 ranked higher (agency wins).

---

## Top 20: Agency wins (v5 ranks much higher than v3)

These projects scored much better under the agency-first framing. They tend to be technically open source but deployed in ways that create institutional dependency rather than community autonomy.

| Project | v3 rank | v5 rank | Delta |
|---|---|---|---|
| Plausible Analytics | 91 | 308 | −217 |
| meet.coop | 16 | 230 | −214 |
| Privacy Badger | 74 | 280 | −206 |
| GOV.UK Pay | 112 | 311 | −199 |
| ORCID | 23 | 215 | −192 |
| TheyWorkForYou | 58 | 246 | −188 |
| GOV.UK Notify | 124 | 310 | −186 |
| GrantNav | 136 | 312 | −176 |
| arXiv | 6 | 178 | −172 |
| Choose a License | 97 | 267 | −170 |
| Urbit | 152 | 306 | −154 |
| OSINT Framework | 64 | 210 | −146 |
| Parti | 34 | 167 | −133 |
| Talk to the City | 89 | 222 | −133 |
| Libertrium | 143 | 273 | −130 |
| FixMyStreet | 105 | 235 | −130 |
| AlgorithmWatch | 59 | 186 | −127 |
| Riseup | 164 | 287 | −123 |
| OpenCRVS | 17 | 139 | −122 |
| WriteToThem | 137 | 250 | −113 |

**Pattern:** GOV.UK services (Pay, Notify), mySociety tools (TheyWorkForYou, WriteToThem, FixMyStreet), and privacy tools that are open source but not self-governable (Privacy Badger, Plausible, OSINT Framework). These projects serve their users well but do not raise user agency over the underlying systems.

---

## Top 20: Implementation wins (v3 ranks much higher than v5)

These projects scored much better under the implementation-first framing. They tend to be forkable and agency-raising but lack documented real-world deployment at scale.

| Project | v3 rank | v5 rank | Delta |
|---|---|---|---|
| Abstract Wikipedia | 206 | 3 | +203 |
| PolicyKit | 207 | 26 | +181 |
| Prolific | 315 | 140 | +175 |
| Citizens Advice Tableau Public Profile | 297 | 136 | +161 |
| EDGAR | 201 | 47 | +154 |
| Full Fact AI | 249 | 98 | +151 |
| Kialo | 253 | 106 | +147 |
| Pursuance Project | 189 | 50 | +139 |
| Society for Hopeful Technologists | 279 | 141 | +138 |
| Security First / Umbrella | 151 | 15 | +136 |
| Humanitarian Data Exchange | 213 | 83 | +130 |
| Ladder Hub | 233 | 105 | +128 |
| Dunadyne | 301 | 173 | +128 |
| Watch Duty | 292 | 168 | +124 |
| ShineYourEye | 252 | 130 | +122 |
| Metaculus | 203 | 84 | +119 |
| PatCit | 198 | 80 | +118 |
| soweego | 186 | 68 | +118 |
| Relational Tech Project | 218 | 107 | +111 |
| Missing Numbers | 273 | 163 | +110 |

**Pattern:** Infrastructure primitives (Abstract Wikipedia, EDGAR, soweego), deliberation tools (PolicyKit, Kialo, Metaculus), and community safety/accountability tools (Security First, Watch Duty, ShineYourEye). These projects often expose decision logic and are forkable but remain at earlier deployment stages.

---

## Consensus top-30

Projects appearing in the top 30 of BOTH framings. These 12 projects represent the clearest consensus: they hold up under both implementation-first and agency-first scrutiny.

| Project | v3 rank | v5 rank |
|---|---|---|
| Mastodon | 11 | 1 |
| CONSUL Democracy | 7 | 2 |
| CiviCRM | 26 | 4 |
| Aleph (OCCRP) | 28 | 6 |
| HURIDOCS | 21 | 7 |
| Bonfire | 4 | 9 |
| Open Standards for Data Guidebook | 19 | 11 |
| Open Council Network | 30 | 13 |
| ClimateAction.Tech | 9 | 14 |
| mySociety Datasets and APIs | 29 | 16 |
| Decidim | 1 | 18 |
| adhocracy+ | 25 | 27 |

All 12 are Proven Commons projects. They are open source, community-governed, and deployed at meaningful scale. The framing shift does not significantly affect their position relative to the rest of the field.

---

## Consensus bottom-50

Projects appearing in the bottom 50 of BOTH framings. These 21 projects score poorly regardless of framing — they combine low community value signals with weak deployment evidence.

Collab.Land | Conservative Party Funding | DoGooder | DoNotPay | Filmot | Local Deep Researcher | OpenOrigins | Public Editor | Public Media Stack | Registers and collaboration: making lists we can trust | Remember to Vote | RightDD | Shared Digital Guides | Spartacus | The Decelerator | Understanding Your Morality | Unknown Academic Paper (SSRN 5351275) | Who Posted What? | Whoisology | WorkInCharities | Yoti

---

## Interpretation

The divergence is asymmetric in an interesting way. The top-20 "agency wins" list contains many well-known, well-resourced civic tech tools (GOV.UK services, mySociety tools). The top-20 "implementation wins" list contains more obscure projects (PolicyKit, Pursuance Project, soweego). This suggests the agency-first framing surfaces genuinely different priorities — not just a reweighting, but a different map of what counts as success.

The 12 consensus top-30 projects are narrowly concentrated in the participatory democracy and open infrastructure spaces. There is no investigative journalism tool, no accountability platform, and no direct civic tech in the consensus top. The tools that hold up under both framings are those that have built their governance model into their architecture — federated, community-owned, or explicitly designed for community adaptation.
