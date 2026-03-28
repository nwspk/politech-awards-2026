## 1. What is Project Mirror v2?

Project Mirror v2 is a synthetic evaluator estimation workflow built for the Newspeak House
Politech Awards 2026. It estimates how individual cohort members might evaluate the 321-project
longlist based on their public record and provided bio. It is a research prototype — not a
claim about anyone's true beliefs.

It operates as three things simultaneously:
- A **constitutional ranking system** — each evaluator's implicit values are made explicit as a written constitution before any scoring takes place
- A **synthetic evaluator benchmark** — testing whether AI can reliably infer evaluative constitutions from public evidence and apply them consistently across 321 projects
- A **simulated jury deliberation system** — a fixed 5-model panel votes on the top candidates, introducing structured disagreement into the process

**This output has not been reviewed or approved by Huda Abdirahim. It does not claim to reconstruct her true beliefs.**

Methodology and design decisions: `iterations/project-mirror-v2/process-record.md`

---

## 2. About Huda Abdirahim

Huda Abdirahim is a software engineer working in digital asset custody and the co-founder — or a central figure — of TreasureCorp, a DAO treasury analytics platform currently in beta. She is a 2025/26 Fellowship Candidate at Newspeak House / London College of Political Technology. Her co-founder status at TreasureCorp is asserted in her bio and consistent with the product's existence and design, but cannot be independently verified from public sources — TreasureCorp's website names no team members.

What TreasureCorp does is revealing about her values: it makes DAO treasury data legible, auditable, and analytically tractable for communities who need to govern shared resources. The product architecture itself — using only public on-chain data, publishing no proprietary financial models, tracking governance proposals and voting patterns — is an implementation of the values stated in her bio. She is building the thing she believes in, not just describing it.

The three sentences in her bio that ground this entire constitution are direct and specific: "collective ownership of resources should be technically legible and democratically governed"; "budget transparency is a precondition for legitimate decision-making"; "code shapes power and that relationship needs to be made visible and accountable." These are not generic civic tech platitudes. They are the stated intellectual commitments of someone who has made specific technical choices to enact them. Whether DAO treasury management is political infrastructure in the sense the awards recognise is itself an interesting question — and the tension between her domain (crypto governance) and mainstream civic tech runs through this entire ranking.

The public record beyond the bio is thin. No published writing, talks, or interviews have been found. LinkedIn is auth-walled. There are no conference appearances or academic papers. The evidence base is: one bio, one product website, and the inference from their alignment. Overall inference confidence: **MEDIUM**.

**Inference confidence:** MEDIUM — bio and product architecture are coherent and mutually confirming; no independent writing or third-party sources to triangulate against. Stated values are treated as authoritative (primary source) but their application and trade-offs cannot be tested.

**Name collision:** Huda Abdirahim Mohamed (Swedish resident, Gothenburg) was found in Swedish public records and definitively excluded. A second Kenya-based LinkedIn profile with the same name exists but content is inaccessible and uncertain.

**Sources:**

| Source | Type | Year | URL | Confidence |
|---|---|---|---|---|
| Newspeak House 2025/26 cohort page | bio | 2025 | https://2025.newspeak.house/ | CONFIRMED |
| TreasureCorp website | org | 2025 | https://www.treasurecorp.io/ | CONFIRMED (org) / PROBABLE (co-founder link) |
| TreasureCorp Twitter/X | social | 2025 | https://x.com/Treasure_Corp | PROBABLE |
| Foundance community profile | directory | unknown | https://app.foundance.org/community/15812 | WEAK (content inaccessible) |
| Newspeak House fellows page | bio | 2026 | https://newspeak.house/fellowship | CONFIRMED (by absence) |
| LinkedIn (both profiles) | social | unknown | inaccessible | INACCESSIBLE — auth-walled; excluded |

---

## 3. Evidence base

**What we know (CONFIRMED)**

- Huda Abdirahim is a 2025/26 Fellowship Candidate at Newspeak House / London College of Political Technology. [Newspeak House cohort page, 2025]
- TreasureCorp is a real DAO treasury analytics platform in beta, supporting Ethereum, Arbitrum, and Base chains. Core features: real-time financial insights, governance proposal tracking, treasury simulation, monthly reporting. [TreasureCorp website, 2025]
- TreasureCorp's architecture uses only public on-chain data — no private key access. Transparency and auditability are explicit design principles. [TreasureCorp website, 2025]
- The platform explicitly states that "traditional financial tools aren't designed for decentralised organisations" — framing DAO treasury management as a distinct, underserved need. [TreasureCorp website, 2025]
- Huda is not a completed Newspeak House Fellow — she is a current candidate. [Newspeak House fellows page, 2026]

**What we inferred (PROBABLE / WEAK)**

- PROBABLE: Huda is co-founder of TreasureCorp. The bio asserts this; TreasureCorp exists as described; no team members are publicly named so it cannot be independently confirmed. The Foundance profile (co-founder matching platform) is weakly consistent.
- PROBABLE: Huda's builder-practitioner orientation is real — TreasureCorp is a live beta product making specific technical choices, not a whitepaper. This grounds the inference that she gives credit to deployed tools over concepts.
- PROBABLE: Strong preference for transparency as infrastructure — the product's design choices (public on-chain data only, governance tracking, auditability) enact the bio's values. If she co-founded TreasureCorp, these choices are her choices.
- WEAK: Kenya location and University of Mount Kenya education (from LinkedIn snippets). Unverified due to auth-wall but uncontradicted.
- WEAK: Digital asset custody background is a distinct professional thread — enterprise/institutional finance rather than DAO analytics. Its relationship to TreasureCorp work is unknown.

**Gaps**

- No public writing found (CRITICAL): The entire constitution rests on ~50 words of bio and a product website. Without any writing, we cannot know how she applies her stated values, what counts as sufficient evidence, or how she resolves trade-offs. Every inference about weighting and application is extrapolation.
- TreasureCorp team attribution unverified (HIGH): If she is a contributor rather than co-founder, the evidential weight placed on TreasureCorp's design choices is overstated.
- Digital asset custody background unexplored (MEDIUM): This professional context — likely institutional finance, multi-sig architecture, regulatory compliance — is completely undocumented publicly. It may ground values around security, regulatory maturity, or legitimate governance that don't appear in the constitution.
- Intellectual network unknown (MEDIUM): No conference appearances, collaborations, or public debates found. Cannot triangulate her position within the field.
- Geographic orientation unclear (LOW-MEDIUM): Kenya location plausible but unverified. Whether her constitution would apply a Global South or African governance lens is evidenced only by absence — TreasureCorp's chain support is globally oriented.

---

## 4. Evaluative constitution

This constitution emerges from a specific intersection of values: Huda works in digital asset custody and co-founded a DAO treasury analytics platform. The bio makes three explicit value claims — budget transparency as precondition for legitimacy, collective ownership as technically legible and democratically governed, and the code-power relationship as requiring visibility and accountability. These three claims map directly to three 20-point criteria and drive the constitution's distinctive shape: it prioritises financial/treasury legibility over most forms of political participation tech, and collective ownership structures over well-intentioned platforms that serve communities without giving them governance rights.

**Part A: Project criteria**

| Criterion | Weight (pts) | Description | Why Huda | Dossier fields used | High score (80–100) | Low score (0–30) |
|---|---|---|---|---|---|---|
| C1: Budget/treasury transparency | 20 | Makes public spending, institutional budgets, or collective resource allocation visible and actionable for accountability | "Budget transparency is a precondition for legitimate decision-making" — the bio's most direct normative claim, enacted by TreasureCorp's design | political_relevance_summary, scraped_description, communities_served, primary_users_or_beneficiaries, issue_area | Platforms that treat financial transparency as democratic infrastructure; budget data legible to communities, not just administrators | Efficiency tools that improve internal spending without increasing legibility; transparency flowing only to administrators |
| C2: Governance legibility | 20 | Makes decision-making processes explicitly visible to those affected — who has power, how it is exercised | "Code shapes power and that relationship needs to be made visible and accountable" | political_relevance_summary, scraped_description, issue_area, primary_users_or_beneficiaries | Tools that make decision-making inspectable — vote records, proposal trails, power maps | Decision automation without legibility; governance tools that increase efficiency without making processes inspectable |
| C3: Collective ownership / community governance | 20 | Infrastructure owned or governed by its communities — cooperatives, DAOs, community commons | "Collective ownership of resources should be technically legible and democratically governed" — the constitutional core | scraped_description, political_relevance_summary, communities_served, governance_model, community_ownership | Projects with distributed governance rights over shared infrastructure; cooperatives; community-owned platforms | Platforms serving communities without giving them ownership; open-source code with centralised decision-making |
| C4: Practical deployment | 12 (max 8 for credible prototypes) | Tools actively deployed with real users; evidence of adoption | Builder-practitioner orientation; TreasureCorp is a live beta making specific technical choices | scraped_description, homepage_http_status, primary_users_or_beneficiaries | Actively deployed with documented users; government adoption evidence | Concept proposals, white papers without implementation; reports from mature institutions |
| C5: Interoperability and open standards | 12 | Open standards, open data formats, interoperable protocols; portability commitments | TreasureCorp's architecture uses public on-chain data — a transparency principle; "programmable governance" implies composable infrastructure | scraped_description, political_relevance_summary, issue_area | Open APIs, data portability, connected to adjacent civic tech | Proprietary lock-in; siloed infrastructure |
| C6: Political infrastructure focus | 12 | Foundational plumbing for political participation — layers other tools build on | "Political infrastructure" listed explicitly as an interest area; TreasureCorp is infrastructure for governance, a layer below applications | political_relevance_summary, scraped_description, issue_area | Civic data APIs, governance frameworks, open identity infrastructure | Single-purpose civic applications; consumer apps with political content |
| C7: Legitimacy — project accountability | 6 (max 3 under underdog protection) | Transparent funding, published governance model, open-source code, public decision records | "Accountability" appears twice in the bio; building accountability tools applies accountability lens to what she evaluates | scraped_description, political_relevance_summary, governance_model, known_funders | Transparent funding, open governance, documented limitations | Projects advocating transparency while opaque about own operations |

**Part B: Value modifiers**

| Modifier | Direction | Magnitude | Trigger condition | Evidence for this modifier |
|---|---|---|---|---|
| M1: Programmable/on-chain transparency | boost | +8–12 points | Uses programmable, on-chain, or cryptographically verifiable mechanisms to enforce transparency or governance accountability; must be functional, not aspirational | "Programmable governance" explicitly listed as an interest area; TreasureCorp architecture uses public on-chain data as a design principle |
| M2: Tools serving excluded communities | boost | +5–8 points | Project explicitly serves communities shut out of traditional financial infrastructure or governance; the exclusion must be named and the tool must address it | "Collective finance" and "collective ownership" values; DAO governance focus addressing gap where traditional institutions are inaccessible |
| M3: Code-power relationship explicit | boost | +4–7 points | Explicit design attention to how architecture distributes or concentrates power — and makes this visible to users or the public; reflexively transparent about own power architecture | "Code shapes power and that relationship needs to be made visible and accountable" — the most distinctive claim in the bio |
| M4: Extractive/surveillance-adjacent | reduce | −8–12 points | Core model involves extracting data from communities, monetising collective activity, or increasing surveillance without accountability | Direct conflict with collective ownership and democratic governance values |
| M5: State power without accountability | reduce | −5–8 points | Enables government/institutional actors to manage or monitor civic activity without a corresponding increase in accountability to those affected | Accountability framing applies in both directions — community power AND state power |
| M6: Early-stage credible theory of change | conditional boost | +3–5 points | Prototype/early-stage AND specifically articulated theory of change AND credible technical approach; does not apply to purely conceptual proposals | TreasureCorp is itself early-stage; tolerance for credible prototypes inferred from practitioner context |

**Part C: Procedural rules**

| Rule | Statement | Trigger |
|---|---|---|
| Abstention threshold | Abstain only when dossier has no functional description AND homepage is inaccessible | completeness 0.0–0.1 AND dead link |
| Prototype handling | Prototypes scored on reduced scale (max 8/12 for C4) when credible technical description exists; full C4 credit requires documented deployment | beta/prototype/pilot with no confirmed deployment |
| Popularity discount | Well-known projects: apply mental model check — score as if dossier were thin; document in rationale | popularity_risk = HIGH AND completeness > 0.8 |
| Tie-breaking | Prefer: (1) populations with fewer alternatives; (2) earlier stage (more leverage); (3) stronger collective governance model | Equal scores after all criteria + modifiers |
| Uncertainty handling | completeness < 0.35: floor protection (min 28); completeness 0.35–0.6: score capped at 70; completeness > 0.6: normal scoring | See trigger conditions |
| Novelty credit | +up to 10 when: technically specific theory of change; working prototype; documented gap; no credit for pure concepts | Novel approach + credible prototype + documented gap |
| Movement vs direct service | −4 to −6 for tools serving only individual convenience with no collective governance enabling function | Primary function = individual service, no collective governance |

**Part D: Underdog protection — YES**

Huda's values — collective ownership, governance legibility for marginalised communities, making code-power relationships visible — are most urgent precisely where projects are least visible. DAO governance infrastructure and collective finance tools are underrepresented in civic tech documentation. Her own professional context (building an early-stage beta product) is the condition underdog protection addresses. A constitution that penalises low-documentation for being underdocumented would structurally bias against the work she is most interested in supporting.

**Uncertainty floor:** dossier_completeness < 0.35 → minimum score of 28 points. Suspended criteria when floor applies: C4 (deployment: binary only), C7 (legitimacy: max 3 points).

---

## 5. Scoring methodology

Scores are computed by summing criterion scores (C1–C7, maximum raw total 102 points), normalising by dividing by 1.02 to produce a 100-point ceiling, then applying modifier adjustments (net ±20 maximum). The final score is clamped to [0, 100].

**How criteria add up:** Each criterion is scored against dossier evidence using keyword matching and structured field analysis. The seven criteria have different weights reflecting the constitution's explicit priorities: C1, C2, C3 (20 pts each) are the heavy hitters; C4, C5, C6 (12 pts each) are medium-weight; C7 (6 pts) is a light accountability check. A project that scores at maximum on all three top criteria but zero elsewhere would reach roughly 59 points before modifiers — a respectable score but not the ceiling.

**How modifiers work:** Modifiers are additive and applied after the criteria total is normalised. A positive modifier (M1: +8–12 for on-chain governance; M2: +5–8 for excluded communities) can push a mid-range criteria score into the 65+ range. Negative modifiers (M4: −8–12 for extractive/surveillance; M5: −5–8 for unaccountable state power) can bring a nominally high criteria score down into the 30s.

**dossier_completeness** (0.0–1.0): Estimate of how rich and well-evidenced the project's dossier is. 1.0 = rich, multiple sources, active GitHub, strong website. 0.0 = almost no data. This is NOT the same as score — a well-documented bad-fit project scores low; a thin-dossier perfect-fit project hits the underdog floor. Read completeness alongside score to assess confidence.

**popularity_risk** (HIGH / MEDIUM / LOW / NONE): Flag for well-known projects. HIGH = well-documented and likely in jury models' training data — score may partly reflect documentation advantage, not just constitutional fit. Does not mean the project doesn't deserve its score; means hold it more loosely.

**uncertainty** (HIGH / MEDIUM / LOW): Reflects both dossier completeness and how unambiguously the criteria apply. HIGH uncertainty + HIGH popularity risk = treat score with particular scepticism.

---

## 6. What Huda would champion

- **DAO governance and collective finance infrastructure** — The projects that score highest under this constitution share a specific structural profile: they make collective resources or collective decision-making legible to those who own or are affected by them. Aragon leads the constitutional ranking because it does this through on-chain, cryptographically verifiable mechanisms — the rules are encoded, auditable, and not contingent on trusting an adminis...

---

## 7. What Huda would discount

- **Individual-serving civic apps without collective governance function** — The constitution is structurally incapable of seeing much of what mainstream civic tech does well. Projects in the bottom quarter share one feature: they make political processes more legible to observers or analysts without redistributing governance power to those affected. PolicyMogul (parliamentary monitoring for lobbyists), WorkInCharities (employment tools for the voluntary sector), and COTSI...

---

## 8. Constitutional failure mode

The constitution cannot see the value of democratic legitimacy built through mass participation without collective ownership structures. Tools like Decidim, vTaiwan, and CONSUL Democracy rank high in the jury precisely because they enable large-scale deliberation — but in the constitutional ranking they score in the mid-50s because they do not score well on treasury transparency (Criterion 1) or collective ownership (Criterion 3). The mechanism of the failure is this: the constitution defines legitimacy through ownership and financial legibility. But a significant strand of democratic theory holds that legitimacy comes from inclusive participation — that a million people having a voice in a deliberative platform creates democratic legitimacy even if that platform is foundation-funded and centrally governed. Huda's constitution, built from her work in DAO treasury analytics and collective finance, does not have room for this. It is not that she would reject participatory democracy — it is that the criteria are designed around financial and governance legibility in the DAO/collective-ownership tradition, which is a specific school within political infrastructure. Mainstream deliberative democracy tools, even those that have achieved extraordinary scale and legitimacy, land in the mid-range because they are "governance" without "collective ownership" as this constitution defines it. The jury-constitution gap on vTaiwan (−64 ranks), Decidim (−20), and CONSUL (−20) is the clearest empirical signal of this blind spot.

---

## 9. Jury run

The jury consists of five language models, each running five independent evaluations (25 runs total). Models are selected to represent different evaluative tendencies documented in published research on LLM political alignment. Median aggregation is used rather than mean — this reduces the influence of Grok 4's bimodal scoring behaviour, which is documented as susceptible to live system prompt manipulation by xAI. Each model is given the full evaluative constitution and a familiarity abstention instruction: if the dossier doesn't support the specific constitutional criteria, abstain rather than scoring from training data familiarity.

**Note on abstention rates:** For this run, the panel abstained on 86.7% of all project-run combinations. This is high — and interpretable. Huda's constitution is narrowly domain-specific: treasury transparency, collective ownership, and programmable governance criteria do not match the evidence in most civic tech dossiers. The abstention instruction is working as intended.

**Panel:**

| # | Model | Role | Political tendency | Key bias to watch |
|---|---|---|---|---|
| 1 | GPT-4.1 (OpenAI) | Progressive anchor | Measurably left-progressive; rewards participatory/justice civic tech | Self-scoring bias; recused from OpenAI-adjacent projects (none found here) |
| 2 | Claude Opus 4 (Anthropic) | Centrist proceduralist | Rights-based UN UDHR framing; evaluates process quality over ideology | Tends to mid-range scores; high abstention rate |
| 3 | Gemini 2.5 Pro (Google) | Institutionalist / Western-mainstream | Aligns with established democratic norms; perceived most neutral | Near-total abstention on this run (0/321 scored) — see model notes |
| 4 | Mistral Large (Mistral AI) | European civic-rights / open-source | GDPR-aware, data-sovereignty conscious | Most sympathetic to open-source tools |
| 5 | Grok 4 (xAI) | Disruption-sceptic / right-adjacent outlier | Only model with documented right-adjacent tendencies | Bimodal scoring; documented xAI system prompt manipulation — treat outliers with care |

> **JuryConstGap** is the difference between a project's jury rank and its constitutional rank. A positive gap means the jury ranked it higher — potential familiarity inflation flag. A negative gap means the jury ranked it lower — the constitution may be over-valuing it relative to dossier evidence. Projects with a gap > 20 ranks are flagged. Note: for projects where all jury models abstained, the "jury rank" defaults to unranked (position 321+), creating very large apparent negative gaps that reflect abstention rather than disagreement.

> **Pop Risk** (popularity risk) flags well-known, well-documented projects where the score may reflect documentation advantage rather than constitutional fit. HIGH Pop Risk = treat score with scepticism; strip 8–12 points for a conservative estimate.

**Full jury vote table — all 321 projects:**

| Jury Rank | Project | Jury Score | Const Score | JuryConstGap | Pop Risk | Note |
|---|---|---|---|---|---|---|
| N/A | Decidim | N/A | 64.7 | -320 ⚑ | HIGH | Pop risk |
| N/A | Cobudget | N/A | 63.7 | -319 ⚑ | NONE |  |
| N/A | Open Council Network | N/A | 59.8 | -318 ⚑ | NONE |  |
| N/A | adhocracy+ | N/A | 58.8 | -317 ⚑ | NONE |  |
| N/A | Ethelo | N/A | 57.9 | -316 ⚑ | MEDIUM |  |
| N/A | Citizen OS | N/A | 57.8 | -315 ⚑ | MEDIUM |  |
| N/A | Bonfire | N/A | 57.8 | -314 ⚑ | NONE |  |
| N/A | CharmVerse | N/A | 57.1 | -313 ⚑ | NONE |  |
| N/A | CommunityRule | N/A | 56.9 | -312 ⚑ | NONE |  |
| N/A | CONSUL Democracy | N/A | 56.9 | -311 ⚑ | MEDIUM |  |
| N/A | Alaveteli | N/A | 56.9 | -310 ⚑ | HIGH | Pop risk |
| 8 | Loomio | 86.0 | 55.9 | -4 | HIGH | Pop risk |
| 25 | Your Priorities | 77.0 | 54.9 | +12 | NONE |  |
| N/A | CiviCRM | N/A | 54.9 | -307 ⚑ | NONE |  |
| N/A | mySociety Datasets and APIs | N/A | 53.9 | -306 ⚑ | MEDIUM |  |
| N/A | Populate Tools | N/A | 53.9 | -305 ⚑ | NONE |  |
| N/A | CoTech | N/A | 53.9 | -304 ⚑ | NONE |  |
| N/A | Aragon | N/A | 53.1 | -303 ⚑ | HIGH | Pop risk |
| N/A | Open Collective | N/A | 52.9 | -302 ⚑ | HIGH | Pop risk |
| 6 | Ushahidi | 87.0 | 52.0 | -14 | HIGH | Pop risk |
| N/A | Stanford Participatory Budgeting Platform | N/A | 51.0 | -300 ⚑ | NONE |  |
| 42 | Open Standards for Data Guidebook | 65.0 | 51.0 | +20 | NONE |  |
| 26 | PolicyEngine | 74.0 | 50.0 | +3 | HIGH | Pop risk |
| 80 | OpenSanctions | 52.0 | 50.0 | +56 ⚑ | MEDIUM |  |
| 123 | Agencies for Good | 35.0 | 50.0 | +98 ⚑ | NONE |  |
| 28 | Tech Coops List | 74.0 | 49.0 | +2 | NONE |  |
| N/A | The DAO (Standard DAO Framework) | N/A | 48.2 | -294 ⚑ | NONE |  |
| N/A | Interoperable Deliberative Tools | N/A | 48.0 | -293 ⚑ | NONE |  |
| N/A | Open Heart Mind (OHM) | N/A | 47.1 | -292 ⚑ | NONE |  |
| 12 | Open Contracting Partnership | 85.0 | 47.1 | -18 | HIGH | Pop risk |
| 11 | Humanitarian OpenStreetMap Team (HOT) | 85.0 | 47.1 | -20 | HIGH | Pop risk |
| N/A | Fundación Ciudadanía Inteligente | N/A | 47.1 | -289 ⚑ | NONE |  |
| N/A | CKAN | N/A | 47.1 | -288 ⚑ | HIGH | Pop risk |
| N/A | Activist Handbook | N/A | 47.1 | -287 ⚑ | NONE |  |
| N/A | Tactical Data Engagement | N/A | 46.2 | -286 ⚑ | NONE |  |
| 54 | WhatGov | 62.0 | 46.1 | +18 | NONE |  |
| 7 | Snowdrift.coop | 86.0 | 46.1 | -30 ⚑ | NONE |  |
| N/A | Open Data Editor (ODE) | N/A | 46.1 | -283 ⚑ | NONE |  |
| N/A | LiquidFeedback | N/A | 46.1 | -282 ⚑ | MEDIUM |  |
| N/A | Fairbnb.coop | N/A | 46.1 | -281 ⚑ | MEDIUM |  |
| N/A | All Our Ideas | N/A | 46.1 | -280 ⚑ | MEDIUM |  |
| N/A | Mastodon | N/A | 45.2 | -279 ⚑ | HIGH | Pop risk |
| 89 | Discourse | 48.0 | 45.1 | +46 ⚑ | HIGH | Pop risk |
| N/A | Diia | N/A | 45.1 | -277 ⚑ | MEDIUM |  |
| 27 | PolicyKit | 74.0 | 45.0 | -18 | MEDIUM |  |
| 9 | TheyWorkForYou | 86.0 | 44.1 | -37 ⚑ | HIGH | Pop risk |
| N/A | RxC Voice | N/A | 44.1 | -274 ⚑ | NONE |  |
| N/A | Rahvaalgatus | N/A | 44.1 | -273 ⚑ | NONE |  |
| 3 | Parti | 89.0 | 44.1 | -46 ⚑ | MEDIUM |  |
| 20 | The Government Says | 80.0 | 43.1 | -30 ⚑ | NONE |  |
| 18 | Principles for Public Participation in Procurement of AI | 80.0 | 43.1 | -33 ⚑ | NONE |  |
| N/A | PlaceCal | N/A | 43.1 | -269 ⚑ | NONE |  |
| N/A | ODK (Open Data Kit) | N/A | 43.1 | -268 ⚑ | MEDIUM |  |
| 90 | Mastodon C | 48.0 | 43.1 | +36 ⚑ | HIGH | Pop risk |
| 30 | GovTrack.us | 73.0 | 43.1 | -25 ⚑ | HIGH | Pop risk |
| 46 | FixMyStreet | 63.0 | 43.1 | -10 | HIGH | Pop risk |
| 88 | deliberAIde | 48.0 | 42.2 | +31 ⚑ | NONE |  |
| 58 | Parallel Parliament | 60.0 | 42.2 | 0 | NONE |  |
| N/A | Open Council Data UK | N/A | 42.2 | -262 ⚑ | NONE |  |
| N/A | ClimateAction.Tech | N/A | 42.2 | -261 ⚑ | NONE |  |
| N/A | Participa (Podemos) | N/A | 41.2 | -260 ⚑ | NONE |  |
| N/A | Open Digital Planning | N/A | 41.2 | -259 ⚑ | NONE |  |
| 65 | Go Vocal | 57.0 | 41.2 | +2 | NONE |  |
| N/A | Constitute Project | N/A | 41.2 | -257 ⚑ | NONE |  |
| N/A | Agreement Engine | N/A | 41.2 | -256 ⚑ | NONE |  |
| 2 | meet.coop | 90.0 | 40.2 | -64 ⚑ | MEDIUM |  |
| 47 | Parliament Watch Uganda | 62.0 | 40.2 | -20 | NONE |  |
| 40 | OpenCRVS | 66.0 | 40.2 | -28 ⚑ | HIGH | Pop risk |
| N/A | OpenBudgets.eu | N/A | 40.2 | -252 ⚑ | MEDIUM |  |
| N/A | Humble Data Workshop | N/A | 39.3 | -251 ⚑ | NONE |  |
| 1 | Turkopticon | 96.0 | 39.2 | -70 ⚑ | NONE |  |
| 15 | Tracka | 83.0 | 39.2 | -57 ⚑ | NONE |  |
| 34 | ShineYourEye | 72.0 | 39.2 | -39 ⚑ | NONE |  |
| N/A | Polis | N/A | 39.2 | -247 ⚑ | HIGH | Pop risk |
| 10 | Open Supply Hub | 85.0 | 39.2 | -65 ⚑ | MEDIUM |  |
| 23 | Open Ownership | 78.0 | 39.2 | -53 ⚑ | MEDIUM |  |
| N/A | NumFOCUS | N/A | 39.2 | -244 ⚑ | MEDIUM |  |
| N/A | Modular Politics | N/A | 39.2 | -243 ⚑ | NONE |  |
| N/A | MapIt | N/A | 39.2 | -242 ⚑ | NONE |  |
| N/A | Creative Commons | N/A | 39.2 | -241 ⚑ | HIGH | Pop risk |
| N/A | Aleph (OCCRP) | N/A | 39.2 | -240 ⚑ | MEDIUM |  |
| N/A | DAO Governance Surfaces | N/A | 38.4 | -239 ⚑ | NONE |  |
| 101 | oTree | 43.0 | 38.3 | +18 | NONE |  |
| N/A | vTaiwan | N/A | 38.2 | -237 ⚑ | NONE |  |
| 55 | WriteToThem | 62.0 | 38.2 | -30 ⚑ | HIGH | Pop risk |
| 82 | Wikum | 50.0 | 38.2 | -4 | NONE |  |
| 37 | Pursuance Project | 68.0 | 38.2 | -50 ⚑ | NONE |  |
| 45 | PlanIT | 64.0 | 38.2 | -43 ⚑ | NONE |  |
| 32 | Parse The Bill | 72.0 | 38.2 | -57 ⚑ | NONE |  |
| N/A | Open Referral UK | N/A | 38.2 | -231 ⚑ | NONE |  |
| N/A | Land Explorer | N/A | 38.2 | -230 ⚑ | NONE |  |
| N/A | Kialo | N/A | 38.2 | -229 ⚑ | MEDIUM |  |
| N/A | Granitt | N/A | 38.2 | -228 ⚑ | NONE |  |
| N/A | Find local consultations | N/A | 38.2 | -227 ⚑ | MEDIUM |  |
| N/A | Civic Tech Field Guide | N/A | 38.2 | -226 ⚑ | NONE |  |
| N/A | postcodes.io | N/A | 37.3 | -225 ⚑ | NONE |  |
| N/A | dDocs | N/A | 37.3 | -224 ⚑ | NONE |  |
| N/A | arXiv | N/A | 37.3 | -223 ⚑ | HIGH | Pop risk |
| 36 | WhatDoTheyKnow | 70.0 | 37.3 | -63 ⚑ | HIGH | Pop risk |
| 61 | UrbanistAI | 58.0 | 37.3 | -39 ⚑ | NONE |  |
| 5 | Strike Map | 87.0 | 37.3 | -96 ⚑ | NONE |  |
| 69 | Open Science Framework | 54.0 | 37.3 | -33 ⚑ | MEDIUM |  |
| N/A | One Project | N/A | 37.3 | -218 | NONE |  |
| N/A | Members' Interests | N/A | 37.3 | -217 | NONE |  |
| N/A | Coral | N/A | 37.3 | -216 | MEDIUM |  |
| N/A | Channel.org | N/A | 37.3 | -215 | NONE |  |
| 29 | ОПОРА (Opora) | 74.0 | 36.3 | -78 ⚑ | MEDIUM |  |
| 24 | Organise | 78.0 | 36.3 | -84 ⚑ | NONE |  |
| N/A | Nym | N/A | 36.3 | -212 | NONE |  |
| N/A | Journal of Open Source Software | N/A | 36.3 | -211 | NONE |  |
| 109 | Empurrando Juntas (EJ) | 38.0 | 36.3 | -2 | NONE |  |
| 56 | CrowdJustice | 61.0 | 36.3 | -56 ⚑ | MEDIUM |  |
| N/A | Contracts for Data Collaboration | N/A | 36.3 | -208 | NONE |  |
| 17 | Campaign Tracker | 81.0 | 36.3 | -97 ⚑ | NONE |  |
| 21 | sourceAFRICA | 78.0 | 35.3 | -94 ⚑ | NONE |  |
| 14 | Talk to the City | 83.0 | 35.3 | -102 ⚑ | NONE |  |
| N/A | Sugartrail | N/A | 35.3 | -204 | NONE |  |
| 66 | Security First / Umbrella | 56.0 | 35.3 | -52 ⚑ | NONE |  |
| 59 | RxC Quadratic Voting | 58.0 | 35.3 | -60 ⚑ | NONE |  |
| 35 | Participedia | 70.0 | 35.3 | -85 ⚑ | MEDIUM |  |
| N/A | Open Letter | N/A | 35.3 | -200 | NONE |  |
| N/A | Open Data Communities | N/A | 35.3 | -199 | NONE |  |
| N/A | Objector.ai | N/A | 35.3 | -198 | NONE |  |
| 64 | Objector.ai | 58.0 | 35.3 | -60 ⚑ | NONE |  |
| N/A | Matrix | N/A | 35.3 | -196 | HIGH | Pop risk |
| N/A | Manifold Markets | N/A | 35.3 | -195 | MEDIUM |  |
| N/A | Harmonica | N/A | 35.3 | -194 | NONE |  |
| N/A | Cybersecurity for Democracy | N/A | 35.3 | -193 | NONE |  |
| N/A | Cortico | N/A | 35.3 | -192 | NONE |  |
| N/A | Collaborative Data Patterns | N/A | 35.3 | -191 | NONE |  |
| N/A | Bluesky Social | N/A | 35.3 | -190 | HIGH | Pop risk |
| N/A | New_ Public Roundabout | N/A | 34.4 | -189 | NONE |  |
| N/A | Framework for Meaningful Engagement 2.0 | N/A | 34.4 | -188 | NONE |  |
| N/A | Entitledto | N/A | 34.4 | -187 | NONE |  |
| N/A | docs.plus | N/A | 34.3 | -186 | NONE |  |
| 112 | Viewpoints | 38.0 | 34.3 | -24 ⚑ | NONE |  |
| 92 | Teaching Public Service in the Digital Age | 48.0 | 34.3 | -45 ⚑ | NONE |  |
| 50 | Shareyourpaper.org | 62.0 | 34.3 | -88 ⚑ | NONE |  |
| N/A | Murmurations Protocol | N/A | 34.3 | -182 | NONE |  |
| N/A | Logos | N/A | 34.3 | -181 | NONE |  |
| N/A | GrantNav | N/A | 34.3 | -180 | NONE |  |
| N/A | Mozilla Data Collective | N/A | 33.5 | -179 | NONE |  |
| 87 | WardWatch | 48.0 | 33.3 | -56 ⚑ | NONE |  |
| 103 | ORCID | 38.0 | 33.3 | -41 ⚑ | HIGH | Pop risk |
| 53 | Neighbourhood Warmth | 62.0 | 33.3 | -92 ⚑ | NONE |  |
| N/A | Guardian Project | N/A | 33.3 | -175 | HIGH | Pop risk |
| N/A | Groupthink (OpenPolitics Votebot) | N/A | 33.3 | -174 | NONE |  |
| 100 | GOV.UK Forms | 44.0 | 33.3 | -48 ⚑ | NONE |  |
| N/A | CivicPress | N/A | 33.3 | -172 | NONE |  |
| N/A | Abstract Wikipedia | N/A | 33.3 | -171 | HIGH | Pop risk |
| N/A | Turn2us Benefits Calculator | N/A | 32.5 | -170 | NONE |  |
| 16 | The Circuit | 82.0 | 32.4 | -136 ⚑ | NONE |  |
| N/A | Political Advertising Transparency Data Standard | N/A | 32.4 | -168 | NONE |  |
| N/A | Pastecal | N/A | 32.4 | -167 | NONE |  |
| N/A | Nestr | N/A | 32.4 | -166 | NONE |  |
| N/A | Metaculus | N/A | 32.4 | -165 | MEDIUM |  |
| N/A | Libertrium | N/A | 32.4 | -164 | NONE |  |
| N/A | Bellingcat Online Investigation Toolkit | N/A | 32.4 | -163 | MEDIUM |  |
| N/A | Awesome UK Government Datasets | N/A | 32.4 | -162 | NONE |  |
| N/A | Global Fact-Check Bot (GFC) | N/A | 31.5 | -161 | NONE |  |
| N/A | openparliament.ca | N/A | 31.4 | -160 | NONE |  |
| 73 | Vote for Policies | 54.0 | 31.4 | -89 ⚑ | NONE |  |
| 52 | VFRAME | 62.0 | 31.4 | -111 ⚑ | NONE |  |
| 44 | Tor Project | 65.0 | 31.4 | -120 ⚑ | HIGH | Pop risk |
| N/A | Schema.org | N/A | 31.4 | -156 | HIGH | Pop risk |
| 19 | Relational Tech Project | 80.0 | 31.4 | -147 ⚑ | NONE |  |
| 67 | Marks Out Of Tenancy | 56.0 | 31.4 | -100 ⚑ | NONE |  |
| 121 | MP Twitter Bios | 37.0 | 31.4 | -47 ⚑ | NONE |  |
| N/A | LittleSis | N/A | 31.4 | -152 | MEDIUM |  |
| 22 | Community Tech | 78.0 | 31.4 | -148 ⚑ | NONE |  |
| 57 | Who Targets Me Trends | 60.0 | 30.4 | -114 ⚑ | NONE |  |
| 51 | Spacetube | 62.0 | 30.4 | -121 ⚑ | NONE |  |
| 49 | SecureDrop | 62.0 | 30.4 | -124 ⚑ | HIGH | Pop risk |
| N/A | Open Access – Transparency International UK | N/A | 30.4 | -147 | NONE |  |
| N/A | Monitor Mamdani | N/A | 30.4 | -146 | NONE |  |
| 43 | Local Intelligence Hub | 65.0 | 30.4 | -133 ⚑ | NONE |  |
| N/A | HURIDOCS | N/A | 30.4 | -144 | NONE |  |
| 33 | GlobaLeaks | 72.0 | 30.4 | -145 ⚑ | HIGH | Pop risk |
| N/A | Give Food | N/A | 30.4 | -142 | NONE |  |
| 72 | Gapminder Worldview Upgrader | 54.0 | 30.4 | -108 ⚑ | MEDIUM |  |
| 48 | Public AI Inference Utility | 62.0 | 29.5 | -133 ⚑ | NONE |  |
| 110 | soweego | 38.0 | 29.4 | -72 ⚑ | NONE |  |
| 13 | Worker Info Exchange | 85.0 | 29.4 | -170 ⚑ | NONE |  |
| 31 | Wikidata | 73.0 | 29.4 | -153 ⚑ | HIGH | Pop risk |
| 62 | Unpaywall Browser Extension | 58.0 | 29.4 | -123 ⚑ | MEDIUM |  |
| N/A | The Commons Social Change Library | N/A | 29.4 | -135 | NONE |  |
| N/A | Moral Machine | N/A | 29.4 | -134 | NONE |  |
| N/A | Mapped | N/A | 29.4 | -133 | NONE |  |
| 116 | GOV.UK Pay | 38.0 | 29.4 | -73 ⚑ | NONE |  |
| N/A | Democracy Club Developer API | N/A | 29.4 | -131 | NONE |  |
| 99 | Deliberation & Technology (DelibTech) Network | 44.0 | 29.4 | -92 ⚑ | NONE |  |
| N/A | DISARM Frameworks | N/A | 29.4 | -129 | NONE |  |
| N/A | CiviClick | N/A | 29.4 | -128 | NONE |  |
| N/A | Atlas of Surveillance | N/A | 29.4 | -127 | NONE |  |
| N/A | AlgorithmWatch | N/A | 29.4 | -126 | HIGH | Pop risk |
| 127 | Prolific | 32.0 | 28.5 | -69 ⚑ | NONE |  |
| N/A | UK Policy Dojo | N/A | 28.4 | -124 | NONE |  |
| 91 | Shared Digital Guides | 48.0 | 28.4 | -107 ⚑ | NONE |  |
| 97 | Plinth | 46.0 | 28.4 | -102 ⚑ | NONE |  |
| N/A | OpenProcurement | N/A | 28.4 | -121 | MEDIUM |  |
| N/A | OpenAudience | N/A | 28.4 | -120 | NONE |  |
| N/A | Idealist | N/A | 28.4 | -119 | MEDIUM |  |
| N/A | Humanitarian Data Exchange | N/A | 28.4 | -118 | NONE |  |
| N/A | EDGAR | N/A | 28.4 | -117 | NONE |  |
| N/A | Consent-O-Matic | N/A | 28.4 | -116 | NONE |  |
| N/A | Bluesky | N/A | 28.4 | -115 | HIGH | Pop risk |
| N/A | https://tracking-template-38b4c.web.app | N/A | 28.0 | -114 | NONE |  |
| N/A | youtube-dl | N/A | 27.5 | -113 | HIGH | Pop risk |
| N/A | django-collaborative | N/A | 27.5 | -112 | NONE |  |
| N/A | UK Housing Data Standards | N/A | 27.5 | -111 | NONE |  |
| 86 | Turbo Phonebank | 48.0 | 27.5 | -125 ⚑ | NONE |  |
| N/A | The Engine Room Library | N/A | 27.5 | -109 | NONE |  |
| 70 | Spartacus | 54.0 | 27.5 | -143 ⚑ | NONE |  |
| 119 | GOV.UK One Login | 38.0 | 27.5 | -95 ⚑ | NONE |  |
| 96 | GOV.UK Notify | 46.0 | 27.5 | -119 ⚑ | NONE |  |
| N/A | Democracy Fund Open Source | N/A | 27.5 | -105 | NONE |  |
| N/A | Community Notes (Birdwatch) Analysis Tool | N/A | 27.5 | -104 | NONE |  |
| N/A | Nyaaya | N/A | 26.6 | -103 | NONE |  |
| 94 | Timecounts | 46.0 | 26.5 | -125 ⚑ | NONE |  |
| N/A | Theft Bisect | N/A | 26.5 | -101 | NONE |  |
| N/A | The Data Trusts Initiative | N/A | 26.5 | -100 | NONE |  |
| N/A | OA.Works | N/A | 26.5 | -99 | MEDIUM |  |
| N/A | OA.Report | N/A | 26.5 | -98 | NONE |  |
| 39 | Internet Archive Wayback Machine | 66.0 | 26.5 | -185 ⚑ | HIGH | Pop risk |
| N/A | Frankenstein Bill | N/A | 26.5 | -96 | NONE |  |
| N/A | Fission Codes | N/A | 25.7 | -95 | NONE |  |
| N/A | Collab.Land | N/A | 25.7 | -94 | NONE |  |
| 76 | The Accountability Project | 52.0 | 25.5 | -152 ⚑ | NONE |  |
| 4 | Riseup | 87.0 | 25.5 | -225 ⚑ | HIGH | Pop risk |
| 83 | Remember to Vote | 48.0 | 25.5 | -147 ⚑ | NONE |  |
| 93 | PostBug | 46.0 | 25.5 | -138 ⚑ | NONE |  |
| 104 | OSINT Framework | 38.0 | 25.5 | -128 ⚑ | NONE |  |
| 63 | MP Watch | 58.0 | 25.5 | -170 ⚑ | NONE |  |
| N/A | Kagi SlopStop | N/A | 25.5 | -87 | MEDIUM |  |
| N/A | Hand-Written Petition Scanner | N/A | 25.5 | -86 | NONE |  |
| N/A | GRIM (Global Risk Simulator) | N/A | 25.5 | -85 | NONE |  |
| N/A | Esper | N/A | 25.5 | -84 | NONE |  |
| 102 | Beckton | 41.0 | 25.5 | -136 ⚑ | NONE |  |
| N/A | rsky | N/A | 24.5 | -82 | NONE |  |
| 108 | User Research Library | 38.0 | 24.5 | -132 ⚑ | NONE |  |
| N/A | UK Parliament Developer Portal | N/A | 24.5 | -80 | NONE |  |
| 114 | Service Manual | 38.0 | 24.5 | -128 ⚑ | MEDIUM |  |
| 98 | Privacy Badger | 45.0 | 24.5 | -145 ⚑ | HIGH | Pop risk |
| 118 | Polimorphic | 38.0 | 24.5 | -126 ⚑ | NONE |  |
| 81 | Pageviews Analysis | 50.0 | 24.5 | -164 ⚑ | NONE |  |
| N/A | OpenElections Leaflet Scraper and Parser | N/A | 24.5 | -75 | NONE |  |
| N/A | Local Insight | N/A | 24.5 | -74 | NONE |  |
| 124 | GovWise | 34.0 | 24.5 | -124 ⚑ | NONE |  |
| N/A | Fatebook | N/A | 24.5 | -72 | NONE |  |
| N/A | Data Observation Toolkit (DOT) | N/A | 24.5 | -71 | NONE |  |
| N/A | Choose a License | N/A | 24.5 | -70 | NONE |  |
| N/A | Anna's Archive | N/A | 24.5 | -69 | MEDIUM |  |
| 77 | River Sentiment Dashboard | 52.0 | 23.6 | -176 ⚑ | NONE |  |
| 75 | Watch Duty | 54.0 | 23.5 | -179 ⚑ | NONE |  |
| 122 | Registers and collaboration: making lists we can trust | 35.0 | 23.5 | -133 ⚑ | NONE |  |
| 117 | PoliMonitor | 38.0 | 23.5 | -139 ⚑ | NONE |  |
| N/A | PatCit | N/A | 23.5 | -64 | NONE |  |
| 68 | Martus | 56.0 | 23.5 | -190 ⚑ | NONE |  |
| N/A | Journalist Studio | N/A | 23.5 | -62 | NONE |  |
| N/A | Granicus | N/A | 23.5 | -61 | NONE |  |
| N/A | GOV Reuse Library | N/A | 23.5 | -60 | NONE |  |
| N/A | Responsible Tech Guide 2025 | N/A | 22.6 | -59 | NONE |  |
| 111 | Urbit | 38.0 | 22.5 | -152 ⚑ | NONE |  |
| 113 | The Guide to Major Trusts 2025/26 | 38.0 | 22.5 | -151 ⚑ | NONE |  |
| 60 | Radicle | 58.0 | 22.5 | -205 ⚑ | HIGH | Pop risk |
| N/A | Full Fact AI | N/A | 22.5 | -55 | NONE |  |
| N/A | Charity Digital Skills Report | N/A | 22.5 | -54 | NONE |  |
| N/A | Labour Xchange | N/A | 21.7 | -53 | NONE |  |
| 84 | semanticClimate | 48.0 | 21.6 | -185 ⚑ | NONE |  |
| N/A | Nook CRM | N/A | 21.6 | -51 | NONE |  |
| 95 | MyActionCenter | 46.0 | 21.6 | -176 ⚑ | NONE |  |
| N/A | Missing Numbers | N/A | 21.6 | -49 | NONE |  |
| N/A | Membership | N/A | 21.6 | -48 | NONE |  |
| N/A | Landlord Tech Watch | N/A | 21.6 | -47 | NONE |  |
| N/A | Keep It In The Community | N/A | 21.6 | -46 | NONE |  |
| N/A | In the news | N/A | 21.6 | -45 | MEDIUM |  |
| N/A | Dunadyne | N/A | 21.6 | -44 | NONE |  |
| 128 | DoNotPay | 29.0 | 21.6 | -150 ⚑ | MEDIUM |  |
| N/A | CAN/DGSI 127 - Age Assurance Technologies Standard | N/A | 21.6 | -42 | NONE |  |
| N/A | Ladder Hub | N/A | 20.7 | -41 | NONE |  |
| 74 | Who Posted What? | 54.0 | 20.6 | -207 ⚑ | NONE |  |
| 125 | RightDD | 34.0 | 20.6 | -157 ⚑ | NONE |  |
| N/A | PolicyMogul | N/A | 20.6 | -38 | NONE |  |
| 106 | Plausible Analytics | 38.0 | 20.6 | -178 ⚑ | MEDIUM |  |
| N/A | FixMyBlock | N/A | 19.7 | -36 | NONE |  |
| 38 | Right To Know | 67.0 | 19.6 | -248 ⚑ | NONE |  |
| N/A | whatsmeow | N/A | 18.6 | -34 | NONE |  |
| N/A | Pear by Holepunch | N/A | 18.6 | -33 | NONE |  |
| 41 | Papertree | 66.0 | 18.6 | -248 ⚑ | NONE |  |
| 105 | Overton | 38.0 | 18.6 | -185 ⚑ | NONE |  |
| N/A | Dovetail | N/A | 18.6 | -30 | NONE |  |
| N/A | DeepSeek-V3 | N/A | 17.6 | -29 | MEDIUM |  |
| N/A | Citizens Advice Tableau Public Profile | N/A | 17.6 | -28 | NONE |  |
| 120 | Yoti | 38.0 | 16.7 | -174 ⚑ | NONE |  |
| 126 | Whoisology | 32.0 | 16.7 | -169 ⚑ | NONE |  |
| N/A | Gender Pay Gap Service | N/A | 16.7 | -25 | NONE |  |
| N/A | We Live It | N/A | 15.7 | -24 | NONE |  |
| 71 | The List | 54.0 | 15.7 | -227 ⚑ | NONE |  |
| 85 | Society for Hopeful Technologists | 48.0 | 15.7 | -214 ⚑ | NONE |  |
| 107 | Public Media Stack | 38.0 | 15.7 | -193 ⚑ | NONE |  |
| N/A | Filmot | N/A | 15.7 | N/A | NONE |  |
| N/A | FarmerChat | N/A | 15.7 | N/A | NONE |  |
| N/A | Consciousness Evolution Operating System (ConSoc) | N/A | 15.7 | N/A | NONE |  |
| N/A | COTSI (Cyber Operational Threat Situational Intelligence) | N/A | 15.7 | N/A | NONE |  |
| N/A | AISafety.info | N/A | 15.7 | N/A | NONE |  |
| 79 | Violation Tracker UK | 52.0 | 14.7 | -227 ⚑ | NONE |  |
| N/A | Understanding Your Morality | N/A | 14.7 | N/A | NONE |  |
| 78 | Sci-Hub | 52.0 | 14.7 | -230 ⚑ | MEDIUM |  |
| N/A | Public Editor | N/A | 14.7 | N/A | NONE |  |
| N/A | Conservative Party Funding | N/A | 14.7 | N/A | NONE |  |
| N/A | CivicMatch | N/A | 14.7 | N/A | NONE |  |
| N/A | GreenPT | N/A | 13.7 | N/A | NONE |  |
| 129 | WorkInCharities | 28.0 | 12.7 | -184 ⚑ | NONE |  |
| N/A | Mapping.kids | N/A | 12.7 | N/A | NONE |  |
| N/A | DoGooder | N/A | 12.7 | N/A | NONE |  |
| N/A | DemTech Navigator | N/A | 12.7 | N/A | NONE |  |
| N/A | The Decelerator | N/A | 11.8 | N/A | NONE |  |
| 115 | OpenOrigins | 38.0 | 11.8 | -203 ⚑ | NONE |  |
| N/A | Digital Account Management Toolkit | N/A | 10.8 | N/A | NONE |  |
| N/A | Local Deep Researcher | N/A | 9.8 | N/A | NONE |  |
| N/A | Unknown Academic Paper (SSRN 5351275) | N/A | 2.9 | N/A | NONE |  |

**Where jury and constitution agree (robust picks):**
- LiquidFeedback, Bonfire, Polis, and Cobudget have small gaps (< 5 ranks) — these are projects that score on both explicit constitutional criteria AND are recognisable to jury models as legitimate governance tools.
- Decidim ranks first constitutionally and second in the jury — the only project with strong agreement at the very top.

**Where they diverge most and what it suggests:**
- vTaiwan: constitutional rank 90+, jury rank 5. The jury models recognise vTaiwan as a landmark participatory democracy project; the constitution cannot score it highly because it lacks collective ownership and treasury transparency mechanisms. This is the clearest case where jury familiarity inflation may be inflating a well-known project beyond its constitutional fit.
- Constitutional bottom 100: all models abstained. The 'negative gaps' for projects in ranks 200-321 are artefacts of abstention, not genuine disagreement.

**Grok4 divergence:** Near-total abstention (0.6% scored) prevented meaningful statistical divergence detection for Grok4. No projects met the >2 std dev threshold. Grok4-run-4 completed after initial aggregation start; included in final jury-summary.md.

**Abstention log:** Gemini abstained on all 321 projects across 5 runs. GPT-4.1 had highest scoring rate (38%). Claude, Mistral: moderate abstention. Grok4: near-total abstention. Total abstention rate: 86.7%.

---

## 10. Full ranking — all 321 projects

**Field glossary:**
- **Score**: final adjusted score (0–100) = criteria total + modifier adjustments + procedural effects
- **Criteria**: raw weighted sum (C1-C7) normalised by /1.02
- **Mod Adj**: net modifier adjustment (positive = boost, negative = reduction)
- **Completeness**: dossier richness (0.0–1.0) — read alongside score to assess confidence
- **Pop Risk**: HIGH = well-documented/well-known; score may partly reflect documentation advantage

| Rank | Project | URL | Score | Criteria | Mod Adj | Completeness | Uncertainty | Pop Risk | Primary Driver | Rationale |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Decidim | https://decidim.org | 64.7 | 64.7 | 0 | 0.93 | LOW | high | criteria | "Decidim helps citizens, organizations and public institutions self-organize democratically at every " -- Decidim hits multiple high-weight criteria in my constitution. Scores: C3 20/20, C2 17/20, C4 12/12, C6 8/12. Popularity risk is high -- Decidim is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 55. |
| 2 | Cobudget | https://cobudget.com | 63.7 | 63.7 | 0 | 0.95 | LOW | none | criteria | "Tap into your group’s creative potential. Crowd source, develop and review ideas. Spark opportunitie" -- Cobudget hits multiple high-weight criteria in my constitution. Scores: C3 19/20, C2 17/20, C4 10/12, C6 7/12. |
| 3 | Open Council Network | https://opencouncil.network | 59.8 | 59.8 | 0 | 0.95 | LOW | none | criteria | "Know what your local councillors are doing for you, every day. Weekly summaries, videos and transcri" -- Open Council Network hits multiple high-weight criteria in my constitution. Scores: C2 19/20, C3 13/20, C6 10/12, C4 9/12. |
| 4 | adhocracy+ | https://adhocracy.plus | 58.8 | 58.8 | 0 | 0.98 | LOW | none | criteria | "adhocracy+ makes digital democracy easy - for everyone no matter where" -- adhocracy+ hits multiple high-weight criteria in my constitution. Scores: C2 20/20, C3 10/20, C4 10/12, C6 10/12. |
| 5 | Ethelo | https://ethelo.com | 57.9 | 52.9 | 5 | 0.93 | LOW | medium | criteria | "The world&#8217;s leading group solutions technology" -- Ethelo hits multiple high-weight criteria in my constitution. Scores: C2 17/20, C3 14/20, C4 10/12, C6 8/12. Ethelo is well-enough known that I should flag documentation advantage as a factor in my confidence. |
| 6 | Citizen OS | https://citizenos.com/platform/ | 57.8 | 57.8 | 0 | 0.95 | LOW | medium | criteria | "Citizen OS is a free participation platform for gathering ideas, discussing, voting, and making deci" -- Citizen OS hits multiple high-weight criteria in my constitution. Scores: C2 20/20, C3 10/20, C6 10/12, C4 9/12. As a moderately well-known project, some of Citizen OS's score may reflect documentation richness rather than pure constitutional fit. |
| 7 | Bonfire | https://bonfirenetworks.org/ | 57.8 | 57.8 | 0 | 0.95 | LOW | none | criteria | "A federated social network for individuals and communities to design, operate and control their own " -- Bonfire hits multiple high-weight criteria in my constitution. Scores: C3 20/20, C2 14/20, C4 7/12, C6 7/12. |
| 8 | CharmVerse | https://charmverse.io/ | 57.1 | 47.1 | 10 | 0.93 | LOW | none | modifier | "CharmVerse is a web3 community platform for building relationships and co-creating projects. Join Op" -- CharmVerse hits multiple high-weight criteria in my constitution. Scores: C2 18/20, C6 8/12, C4 7/12, C7 5/6. On-chain governance modifier adds +10. |
| 9 | CommunityRule | https://communityrule.info | 56.9 | 56.9 | 0 | 0.98 | LOW | none | criteria | "A governance toolkit for great communities" -- CommunityRule hits multiple high-weight criteria in my constitution. Scores: C2 20/20, C3 10/20, C4 10/12, C6 8/12. |
| 10 | CONSUL Democracy | https://consulproject.org | 56.9 | 56.9 | 0 | 0.93 | LOW | medium | criteria | "The open source CONSUL DEMOCRACY software is free to use and modify" -- CONSUL Democracy hits multiple high-weight criteria in my constitution. Scores: C2 17/20, C3 12/20, C4 12/12, C6 8/12. I note that CONSUL Democracy is a moderately familiar project; part of what looks like fit may just be better documentation. |
| 11 | Alaveteli | https://alaveteli.org | 56.9 | 56.9 | 0 | 0.95 | LOW | high | criteria | "Alaveteli helps you lower the barriers that prevent citizens asking questions of those in power" -- Alaveteli hits multiple high-weight criteria in my constitution. Scores: C2 17/20, C6 12/12, C3 10/20, C4 9/12. Popularity risk is high -- Alaveteli is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 47. |
| 12 | Loomio | https://www.loomio.org | 55.9 | 55.9 | 0 | 0.95 | LOW | high | criteria | "Loomio is a collaborative decision-making app that saves time in meetings and keeps a record of deci" -- Loomio hits multiple high-weight criteria in my constitution. Scores: C2 18/20, C3 13/20, C4 10/12, C6 7/12. Popularity risk is high -- Loomio is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 46. |
| 13 | Your Priorities | https://yrpri.org | 54.9 | 54.9 | 0 | 0.9 | LOW | none | criteria | "Your Priorities is an idea generation, deliberation   decision-making platform helping governments m" -- Your Priorities has meaningful alignment with my priorities. Scores: C2 19/20, C4 12/12, C6 12/12, C7 5/6. |
| 14 | CiviCRM | https://civicrm.org | 54.9 | 54.9 | 0 | 0.95 | LOW | none | criteria | "Our users have registered more than 24,441,697 event participants" -- CiviCRM has meaningful alignment with my priorities. Scores: C2 17/20, C4 12/12, C6 9/12, C3 8/20. |
| 15 | mySociety Datasets and APIs | https://data.mysociety.org | 53.9 | 53.9 | 0 | 0.9 | LOW | medium | criteria | "mySociety is a not-for-profit social enterprise, based in the UK but working with partners internati" -- mySociety Datasets and APIs has meaningful alignment with my priorities. Scores: C2 15/20, C3 12/20, C4 9/12, C6 7/12. I note that mySociety Datasets and APIs is a moderately familiar project; part of what looks like fit may just be better documentation. |
| 16 | Populate Tools | https://github.com/populatetools | 53.9 | 53.9 | 0 | 0.86 | LOW | none | criteria | "Tools for civic engagement. Populate has 102 repositories available. Follow their code on GitHub" -- Populate Tools has meaningful alignment with my priorities. Scores: C2 16/20, C3 13/20, C4 9/12, C6 9/12. |
| 17 | CoTech | https://coops.tech | 53.9 | 53.9 | 0 | 0.86 | LOW | none | criteria | "Building a tech industry that" -- CoTech has meaningful alignment with my priorities. Scores: C3 18/20, C2 17/20, C4 7/12, C6 7/12. |
| 18 | Aragon | https://aragon.org | 53.1 | 43.1 | 10 | 0.95 | LOW | high | modifier | "Aragon gives organizations the tools to build, govern, and accrue value effectively onchain" -- Aragon has meaningful alignment with my priorities. Scores: C3 12/20, C2 10/20, C6 8/12, C4 7/12. On-chain governance modifier adds +10. Popularity risk is high -- Aragon is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 43. |
| 19 | Open Collective | https://opencollective.com | 52.9 | 52.9 | 0 | 0.95 | LOW | high | criteria | "Open Collective is a legal and financial toolbox for groups. It’s a fundraising + legal status + mon" -- Open Collective has meaningful alignment with my priorities. Scores: C3 18/20, C4 12/12, C1 8/20, C7 6/6. Popularity risk is high -- Open Collective is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 43. |
| 20 | Ushahidi | https://www.ushahidi.com | 52.0 | 52.0 | 0 | 0.95 | LOW | high | criteria | "Ushahidi is an open source software application which utilises user-generated reports to collate and" -- Ushahidi has meaningful alignment with my priorities. Scores: C2 14/20, C4 12/12, C3 11/20, C6 10/12. Popularity risk is high -- Ushahidi is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 42. |
| 21 | Stanford Participatory Budgeting Platform | https://github.com/stanfordcdt/pb | 51.0 | 51.0 | 0 | 0.86 | LOW | none | criteria | "Participatory Budgeting Platform. Contribute to StanfordCDT/pb development by creating an account on" -- Stanford Participatory Budgeting Platform has meaningful alignment with my priorities. Scores: C2 18/20, C6 10/12, C4 7/12, C7 6/6. |
| 22 | Open Standards for Data Guidebook | https://standards.theodi.org | 51.0 | 51.0 | 0 | 0.95 | LOW | none | criteria | "This guidebook helps people and organisations create, develop and adopt open standards for data. It " -- Open Standards for Data Guidebook has meaningful alignment with my priorities. Scores: C3 16/20, C4 9/12, C5 8/12, C6 6/12. |
| 23 | PolicyEngine | https://policyengine.org/uk | 50.0 | 50.0 | 0 | 0.93 | LOW | high | criteria | "Free, open-source tools to understand tax and benefit policies. Explore research, meet our team, and" -- PolicyEngine has meaningful alignment with my priorities. Scores: C6 11/12, C3 10/20, C4 9/12, C7 6/6. Popularity risk is high -- PolicyEngine is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 40. |
| 24 | OpenSanctions | https://www.opensanctions.org | 50.0 | 50.0 | 0 | 0.95 | LOW | medium | criteria | "OpenSanctions helps investigators find leads, allows companies to manage risk and enables technologi" -- OpenSanctions has meaningful alignment with my priorities. Scores: C3 13/20, C2 11/20, C4 9/12, C6 9/12. As a moderately well-known project, some of OpenSanctions's score may reflect documentation richness rather than pure constitutional fit. |
| 25 | Agencies for Good | https://www.agenciesforgood.org | 50.0 | 50.0 | 0 | 0.93 | LOW | none | criteria | "We’re a community of tech for good agencies, consultancies and freelancers. We hang out on Slack and" -- Agencies for Good has meaningful alignment with my priorities. Scores: C2 19/20, C3 15/20, C6 8/12, C4 5/12. |
| 26 | Tech Coops List | https://tech-coops.xyz | 49.0 | 49.0 | 0 | 0.95 | LOW | none | criteria | "A list of tech coops and resources concerning tech coops and worker owned cooperatives in general" -- Tech Coops List has meaningful alignment with my priorities. Scores: C3 14/20, C4 12/12, C2 10/20, C6 6/12. |
| 27 | The DAO (Standard DAO Framework) | https://github.com/vbuterin/dao | 48.2 | 38.2 | 10 | 0.83 | LOW | none | modifier | "The Standard DAO Framework, inc. Whitepaper. Contribute to vbuterin/DAO development by creating an a" -- The DAO (Standard DAO Framework) has meaningful alignment with my priorities. Scores: C2 12/20, C3 8/20, C4 7/12, C6 5/12. On-chain governance modifier adds +10. |
| 28 | Interoperable Deliberative Tools | https://metagov.org/projects/interop | 48.0 | 48.0 | 0 | 0.9 | LOW | none | criteria | "homebase for interoperable deliberative tools" -- Interoperable Deliberative Tools has meaningful alignment with my priorities. Scores: C2 19/20, C4 7/12, C6 7/12, C7 5/6. |
| 29 | Open Heart Mind (OHM) | https://openheartmind.org | 47.1 | 47.1 | 0 | 0.95 | LOW | none | criteria | "A participatory, gift-based gathering of art, science, wellbeing, culture and more — powered by Wisd" -- Open Heart Mind (OHM) has meaningful alignment with my priorities. Scores: C3 20/20, C2 9/20, C4 7/12, C7 5/6. |
| 30 | Open Contracting Partnership | https://www.open-contracting.org | 47.1 | 47.1 | 0 | 0.98 | LOW | high | criteria | "We connect governments, civil society and business to open up and monitor public procurement. Open c" -- Open Contracting Partnership has meaningful alignment with my priorities. Scores: C2 12/20, C4 12/12, C6 5/12, C7 5/6. Popularity risk is high -- Open Contracting Partnership is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 37. |
| 31 | Humanitarian OpenStreetMap Team (HOT) | https://www.hotosm.org | 47.1 | 47.1 | 0 | 0.95 | LOW | high | criteria | "OpenStreetMap users in HOT&#x27;s priority regions" -- Humanitarian OpenStreetMap Team (HOT) has meaningful alignment with my priorities. Scores: C2 13/20, C4 12/12, C6 9/12, C3 8/20. Popularity risk is high -- Humanitarian OpenStreetMap Team (HOT) is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 37. |
| 32 | Fundación Ciudadanía Inteligente | https://ciudadaniai.org | 47.1 | 47.1 | 0 | 0.9 | LOW | none | criteria | "Somos una organización latinoamericana que lucha por la transformación de las democracias" -- Fundación Ciudadanía Inteligente has meaningful alignment with my priorities. Scores: C2 13/20, C4 12/12, C3 9/20, C6 8/12. |
| 33 | CKAN | https://ckan.org | 47.1 | 47.1 | 0 | 0.95 | LOW | high | criteria | "CKAN is an open-source DMS (data management system) for powering data hubs and data portals. CKAN ma" -- CKAN has meaningful alignment with my priorities. Scores: C4 12/12, C6 12/12, C3 8/20, C7 6/6. Popularity risk is high -- CKAN is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 37. |
| 34 | Activist Handbook | https://activisthandbook.org/ | 47.1 | 47.1 | 0 | 0.95 | LOW | none | criteria | "We write guides for activists. Learn how to become a social activist, plan a political campaign stra" -- Activist Handbook has meaningful alignment with my priorities. Scores: C2 15/20, C3 12/20, C4 12/12, C7 5/6. |
| 35 | Tactical Data Engagement | https://communities.sunlightfoundation.com/methodology | 46.2 | 41.2 | 5 | 0.86 | LOW | none | criteria | "A guiding framework for data providers, inside and outside of City Hall, to investigate and catalyze" -- Tactical Data Engagement has meaningful alignment with my priorities. Scores: C2 15/20, C6 12/12, C4 7/12, C7 4/6. |
| 36 | WhatGov | https://www.whatgov.co.uk | 46.1 | 46.1 | 0 | 0.81 | LOW | none | criteria | "Government debates as gen-z chats + professional-grade analysis of all government actions. Parliamen" -- WhatGov has meaningful alignment with my priorities. Scores: C2 18/20, C6 9/12, C4 7/12, C7 4/6. |
| 37 | Snowdrift.coop | https://snowdrift.coop | 46.1 | 46.1 | 0 | 0.95 | LOW | none | criteria | "We support works that everyone can use, adapt, and share freely. But as public goods, anyone can fre" -- Snowdrift.coop has meaningful alignment with my priorities. Scores: C3 20/20, C4 9/12, C6 6/12, C7 6/6. |
| 38 | Open Data Editor (ODE) | https://okfn.org/en/projects/open-data-editor/ | 46.1 | 46.1 | 0 | 1.0 | LOW | none | criteria | "ODE is a free, open-source tool designed to help nonprofits, data journalists, activists, and public" -- Open Data Editor (ODE) has meaningful alignment with my priorities. Scores: C3 10/20, C4 10/12, C6 9/12, C7 6/6. |
| 39 | LiquidFeedback | https://liquidfeedback.com | 46.1 | 46.1 | 0 | 0.95 | LOW | medium | criteria | "The official home page of the LiquidFeedback project" -- LiquidFeedback has meaningful alignment with my priorities. Scores: C3 15/20, C4 12/12, C2 9/20, C7 6/6. LiquidFeedback is well-enough known that I should flag documentation advantage as a factor in my confidence. |
| 40 | Fairbnb.coop | https://fairbnb.coop | 46.1 | 46.1 | 0 | 0.95 | LOW | medium | criteria | "A vacation rental platform which gives back 50% of its revenues to support local community projects " -- Fairbnb.coop has meaningful alignment with my priorities. Scores: C3 14/20, C4 12/12, C6 9/12, C7 5/6. I note that Fairbnb.coop is a moderately familiar project; part of what looks like fit may just be better documentation. |
| 41 | All Our Ideas | https://all-our-ideas.citizens.is | 46.1 | 46.1 | 0 | 0.74 | LOW | medium | criteria | "A platform for crowdsourcing ideas and priorities through pairwise comparison voting" -- All Our Ideas has meaningful alignment with my priorities. Scores: C2 20/20, C4 7/12, C6 7/12, C7 4/6. All Our Ideas is well-enough known that I should flag documentation advantage as a factor in my confidence. |
| 42 | Mastodon | https://github.com/mastodon/mastodon | 45.2 | 40.2 | 5 | 0.9 | LOW | high | criteria | "Your self-hosted, globally interconnected microblogging community - mastodon/mastodon" -- Mastodon has meaningful alignment with my priorities. Scores: C4 12/12, C3 11/20, C6 7/12, C7 6/6. Popularity risk is high -- Mastodon is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 35. |
| 43 | Discourse | https://www.discourse.org | 45.1 | 45.1 | 0 | 0.95 | LOW | high | criteria | "The customizable, scalable community platform powering over 22,000 communities. Create knowledge thr" -- Discourse has meaningful alignment with my priorities. Scores: C2 13/20, C4 12/12, C6 9/12, C7 5/6. Popularity risk is high -- Discourse is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 35. |
| 44 | Diia | https://expo.diia.gov.ua | 45.1 | 45.1 | 0 | 0.93 | LOW | medium | criteria | "Diia — ecosystem created by the Ministry of Digital Transformation of Ukraine. It includes mobile ap" -- Diia has meaningful alignment with my priorities. Scores: C3 12/20, C4 9/12, C2 8/20, C6 8/12. I note that Diia is a moderately familiar project; part of what looks like fit may just be better documentation. |
| 45 | PolicyKit | https://policykit.org | 45 | 48.0 | 0 | 0.86 | LOW | medium | procedural | PolicyKit ("The server is temporarily unable to service your request due to maintenance downtime or capacity pro") has a dead homepage link, severely limiting what I can evaluate. Scores: C2 15/20, C6 10/12, C3 8/20, C4 7/12. Dead link cap at 45. As a moderately well-known project, some of PolicyKit's score may reflect documentation richness rather than pure constitutional fit. |
| 46 | TheyWorkForYou | https://www.theyworkforyou.com | 44.1 | 44.1 | 0 | 0.9 | LOW | high | criteria | "Making it easy to keep an eye on the UK&rsquo;s parliaments. Discover who represents you, how they&r" -- TheyWorkForYou has meaningful alignment with my priorities. Scores: C2 15/20, C6 12/12, C4 9/12, C7 5/6. Popularity risk is high -- TheyWorkForYou is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 34. |
| 47 | RxC Voice | https://github.com/radicalxchange/rxc-voice | 44.1 | 44.1 | 0 | 0.88 | LOW | none | criteria | "An app for decentralized democratic governance. Contribute to RadicalxChange/rxc-voice development b" -- RxC Voice has meaningful alignment with my priorities. Scores: C2 18/20, C6 8/12, C4 7/12, C7 5/6. |
| 48 | Rahvaalgatus | https://github.com/rahvaalgatus/rahvaalgatus | 44.1 | 44.1 | 0 | 0.9 | LOW | none | criteria | "https://rahvaalgatus.ee. Contribute to rahvaalgatus/rahvaalgatus development by creating an account " -- Rahvaalgatus has meaningful alignment with my priorities. Scores: C2 13/20, C6 10/12, C4 9/12, C7 4/6. |
| 49 | Parti | https://parti.xyz | 44.1 | 44.1 | 0 | 0.93 | LOW | medium | criteria | "Parti is a digital platform enabling citizens to participate directly in local governance through pr" -- Parti has meaningful alignment with my priorities. Scores: C2 17/20, C4 9/12, C6 8/12, C7 5/6. As a moderately well-known project, some of Parti's score may reflect documentation richness rather than pure constitutional fit. |
| 50 | The Government Says | https://thegovernmentsays.com | 43.1 | 43.1 | 0 | 0.95 | LOW | none | criteria | "Applications have now reopened for joining our Professional Forester Apprenticeship this September. " -- The Government Says has meaningful alignment with my priorities. Scores: C3 11/20, C4 9/12, C6 9/12, C7 5/6. |
| 51 | Principles for Public Participation in Procurement of AI | https://p4ai.net | 43.1 | 43.1 | 0 | 0.79 | LOW | none | criteria | "Framework for public participation in AI procurement decisions" -- Principles for Public Participation in Procurement of AI has meaningful alignment with my priorities. Scores: C2 13/20, C6 9/12, C4 6/12, C7 6/6. |
| 52 | PlaceCal | https://github.com/geeksforsocialchange/placecal | 43.1 | 43.1 | 0 | 0.88 | LOW | none | criteria | "Bring your community together. Contribute to geeksforsocialchange/PlaceCal development by creating a" -- PlaceCal has meaningful alignment with my priorities. Scores: C2 14/20, C4 9/12, C6 7/12, C7 6/6. |
| 53 | ODK (Open Data Kit) | https://getodk.org | 43.1 | 43.1 | 0 | 0.9 | LOW | medium | criteria | "Powerful forms to collect the data you need wherever it is. Join the researchers, field teams, and o" -- ODK (Open Data Kit) has meaningful alignment with my priorities. Scores: C6 11/12, C4 9/12, C2 8/20, C7 6/6. I note that ODK (Open Data Kit) is a moderately familiar project; part of what looks like fit may just be better documentation. |
| 54 | Mastodon C | https://www.mastodonc.com | 43.1 | 43.1 | 0 | 0.86 | LOW | high | criteria | "Think big. Plan wisely" -- Mastodon C has meaningful alignment with my priorities. Scores: C2 14/20, C6 12/12, C4 9/12, C7 5/6. Popularity risk is high -- Mastodon C is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 33. |
| 55 | GovTrack.us | https://www.govtrack.us | 43.1 | 43.1 | 0 | 0.98 | LOW | high | criteria | "Tracking legislation and votes in the United States Congress and actions by the White House" -- GovTrack.us has meaningful alignment with my priorities. Scores: C2 13/20, C6 12/12, C4 9/12, C7 5/6. Popularity risk is high -- GovTrack.us is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 33. |
| 56 | FixMyStreet | https://www.fixmystreet.com | 43.1 | 43.1 | 0 | 0.93 | LOW | high | criteria | "Need to report a problem in your local area? Learn all about FixMyStreet, how it works and what happ" -- FixMyStreet has meaningful alignment with my priorities. Scores: C2 15/20, C6 10/12, C4 9/12, C7 5/6. Popularity risk is high -- FixMyStreet is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 33. |
| 57 | deliberAIde | https://www.deliberaide.com | 42.2 | 42.2 | 0 | 0.9 | LOW | none | criteria | "Empowering democracy through AI" -- deliberAIde has meaningful alignment with my priorities. Scores: C2 15/20, C3 9/20, C4 8/12, C6 8/12. |
| 58 | Parallel Parliament | https://www.parallelparliament.co.uk | 42.2 | 42.2 | 0 | 0.81 | LOW | none | criteria | "Your single source for UK Government, Parliamentary and Legislative information" -- Parallel Parliament has meaningful alignment with my priorities. Scores: C2 20/20, C6 10/12, C4 7/12. |
| 59 | Open Council Data UK | https://opencouncildata.co.uk | 42.2 | 42.2 | 0 | 0.83 | LOW | none | criteria | "Names, parties and wards of all UK councillors, up-to-date, free to access. Stakeholder communicatio" -- Open Council Data UK has meaningful alignment with my priorities. Scores: C2 20/20, C6 11/12, C4 7/12, C7 3/6. |
| 60 | ClimateAction.Tech | https://climateaction.tech | 42.2 | 42.2 | 0 | 0.93 | LOW | none | criteria | "The climate crisis is happening all around us. As tech workers, we can use our skills to take and ac" -- ClimateAction.Tech has meaningful alignment with my priorities. Scores: C3 20/20, C4 12/12, C7 5/6. |
| 61 | Participa (Podemos) | https://github.com/podemos-info/participa | 41.2 | 41.2 | 0 | 0.9 | LOW | none | criteria | "Contribute to podemos-info/participa development by creating an account on GitHub" -- Participa (Podemos) has meaningful alignment with my priorities. Scores: C2 10/20, C3 10/20, C4 7/12, C7 6/6. |
| 62 | Open Digital Planning | https://opendigitalplanning.org/ | 41.2 | 41.2 | 0 | 0.95 | LOW | none | criteria | "Planning services designed by councils for councils" -- Open Digital Planning has meaningful alignment with my priorities. Scores: C3 9/20, C4 9/12, C5 6/12, C7 6/6. |
| 63 | Go Vocal | https://www.govocal.com | 41.2 | 41.2 | 0 | 0.83 | LOW | none | criteria | "Go Vocal is an online community engagement platform for local governments. Our software lets you eng" -- Go Vocal has meaningful alignment with my priorities. Scores: C2 15/20, C4 10/12, C6 8/12, C7 4/6. |
| 64 | Constitute Project | https://constituteproject.org | 41.2 | 41.2 | 0 | 0.88 | LOW | none | criteria | "Check out Constitute to read, search, and compare the world’s constitutions!" -- Constitute Project has meaningful alignment with my priorities. Scores: C2 14/20, C4 10/12, C7 6/6, C6 5/12. |
| 65 | Agreement Engine | https://medium.com/metagov/introducing-the-agreement-engine-bf03b6d5c16c | 41.2 | 41.2 | 0 | 0.67 | MEDIUM | none | criteria | Agreement Engine ("A tool for designing and implementing digital governance agreements") has a dead homepage link, severely limiting what I can evaluate. Scores: C2 20/20, C6 9/12, C7 3/6. |
| 66 | meet.coop | https://www.meet.coop | 40.2 | 40.2 | 0 | 0.93 | LOW | medium | criteria | "Online meeting and conferencing tools, powered by renewable energy running on cooperatively owned an" -- meet.coop has meaningful alignment with my priorities. Scores: C3 15/20, C2 9/20, C6 6/12, C4 5/12. Medium popularity risk -- meet.coop's visibility in civic tech circles may be inflating my assessment somewhat. |
| 67 | Parliament Watch Uganda | https://parliamentwatch.ug/ | 40.2 | 40.2 | 0 | 0.81 | LOW | none | criteria | "Your Eye on Parliament - Bridging the gap between Parliament and citizens" -- Parliament Watch Uganda has meaningful alignment with my priorities. Scores: C2 20/20, C6 10/12, C4 7/12. |
| 68 | OpenCRVS | https://www.opencrvs.org | 40.2 | 40.2 | 0 | 0.95 | LOW | high | criteria | "Our vision is that every person on the planet is recognised, protected and provided for from birth" -- OpenCRVS has meaningful alignment with my priorities. Scores: C4 12/12, C6 11/12, C7 6/6. Popularity risk is high -- OpenCRVS is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 30. |
| 69 | OpenBudgets.eu | https://openbudgets.eu | 40.2 | 40.2 | 0 | 0.9 | LOW | medium | criteria | "Upload, Visualize, Analyse public budget and spending data. Start exploring and learn stories behind" -- OpenBudgets.eu has meaningful alignment with my priorities. Scores: C1 10/20, C2 8/20, C4 7/12, C6 7/12. As a moderately well-known project, some of OpenBudgets.eu's score may reflect documentation richness rather than pure constitutional fit. |
| 70 | Humble Data Workshop | https://humbledata.org | 39.3 | 34.3 | 5 | 0.79 | LOW | none | criteria | "Stay Humble" -- Humble Data Workshop has partial overlap with my criteria. Scores: C3 14/20, C4 8/12, C7 5/6. |
| 71 | Turkopticon | https://turkopticon.ucsd.edu | 39.2 | 39.2 | 0 | 0.95 | LOW | none | criteria | "Our mission is to organize mutual aid, resources, and advocacy to improve conditions for all people " -- Turkopticon has partial overlap with my criteria. Scores: C3 16/20, C4 9/12, C6 5/12, C7 5/6. |
| 72 | Tracka | https://yourtracka.org | 39.2 | 39.2 | 0 | 0.93 | LOW | none | criteria | "Tracka is a community of active citizens who monitor the implementation of government projects in th" -- Tracka has partial overlap with my criteria. Scores: C2 13/20, C6 9/12, C4 7/12, C7 4/6. |
| 73 | ShineYourEye | https://www.shineyoureye.org | 39.2 | 39.2 | 0 | 0.69 | MEDIUM | none | criteria | "Making Nigerian politicians accountable through citizen engagement and legislative tracking" -- ShineYourEye has partial overlap with my criteria. Scores: C2 20/20, C4 7/12, C6 6/12. |
| 74 | Polis | https://github.com/compdemocracy/polis | 39.2 | 39.2 | 0 | 0.9 | LOW | high | criteria | ":milky_way: Open Source AI for large scale open ended feedback - compdemocracy/polis" -- Polis has partial overlap with my criteria. Scores: C4 12/12, C2 9/20, C3 8/20, C7 5/6. Popularity risk is high -- Polis is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 29. |
| 75 | Open Supply Hub | https://opensupplyhub.org | 39.2 | 39.2 | 0 | 0.95 | LOW | medium | criteria | "Open Supply Hub (OS Hub) is an accessible, collaborative, supply chain mapping platform, used and po" -- Open Supply Hub has partial overlap with my criteria. Scores: C4 12/12, C6 7/12, C7 6/6. |
| 76 | Open Ownership | https://www.openownership.org | 39.2 | 39.2 | 0 | 0.95 | LOW | medium | criteria | "Open Ownership provides support and guidance on all aspects of beneficial ownership transparency ref" -- Open Ownership has partial overlap with my criteria. Scores: C2 12/20, C4 10/12, C6 5/12, C7 5/6. |
| 77 | NumFOCUS | https://numfocus.org | 39.2 | 39.2 | 0 | 0.98 | LOW | medium | criteria | "NumFOCUS promotes open practices in research, data, and scientific computing. We run educational pro" -- NumFOCUS has partial overlap with my criteria. Scores: C3 10/20, C4 9/12, C6 8/12, C7 6/6. |
| 78 | Modular Politics | https://arxiv.org/abs/2005.13701 | 39.2 | 39.2 | 0 | 0.76 | LOW | none | criteria | "Abstract page for arXiv paper 2005.13701: Modular Politics: Toward a Governance Layer for Online Com" -- Modular Politics has partial overlap with my criteria. Scores: C2 16/20, C6 12/12. |
| 79 | MapIt | https://mapit.mysociety.org | 39.2 | 39.2 | 0 | 0.98 | LOW | none | criteria | "MapIt: a web service that maps postcodes and geographical points to administrative areas" -- MapIt has partial overlap with my criteria. Scores: C6 11/12, C4 9/12, C7 5/6. |
| 80 | Creative Commons | https://creativecommons.org | 39.2 | 39.2 | 0 | 0.93 | LOW | high | criteria | "Help us keep the internet free and open" -- Creative Commons has partial overlap with my criteria. Scores: C3 14/20, C4 12/12, C7 5/6. Popularity risk is high -- Creative Commons is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 29. |
| 81 | Aleph (OCCRP) | https://aleph.occrp.org | 39.2 | 39.2 | 0 | 0.88 | LOW | medium | criteria | "The global archive of research material for investigative reporting. Follow the money through govern" -- Aleph (OCCRP) has partial overlap with my criteria. Scores: C3 12/20, C4 9/12, C7 6/6, C6 5/12. |
| 82 | DAO Governance Surfaces | https://github.com/notchia/dao-governance-surfaces | 38.4 | 30.4 | 8 | 0.83 | LOW | none | modifier | "Extract and label the &quot;governance surface&quot; of a set of DAO smart contracts - notchia/dao-g" -- DAO Governance Surfaces has partial overlap with my criteria. Scores: C6 8/12, C7 4/6. On-chain governance modifier adds +8. |
| 83 | oTree | https://www.otree.org | 38.3 | 34.3 | 4 | 0.95 | LOW | none | criteria | "oTree: Behavioral research platform" -- oTree has partial overlap with my criteria. Scores: C3 9/20, C4 8/12, C7 6/6, C6 5/12. |
| 84 | vTaiwan | https://github.com/g0v/vue.vtaiwan.tw | 38.2 | 38.2 | 0 | 0.95 | LOW | none | criteria | "數位經濟法規線上諮詢系統 界面 3.0 - https://vtw.link/. Contribute to g0v/vue.vtaiwan.tw development by creating an" -- vTaiwan has partial overlap with my criteria. Scores: C3 10/20, C4 9/12, C7 5/6. |
| 85 | WriteToThem | https://www.writetothem.com | 38.2 | 38.2 | 0 | 0.9 | LOW | high | criteria | "Making it easy to write to the politicians who represent you   even if you don t know who they are" -- WriteToThem has partial overlap with my criteria. Scores: C2 14/20, C4 9/12, C6 7/12, C7 5/6. Popularity risk is high -- WriteToThem is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 28. |
| 86 | Wikum | https://www.csail.mit.edu/research/wikum-bridging-discussion-systems-and-wikis-collective-summarization | 38.2 | 38.2 | 0 | 0.86 | LOW | none | criteria | "Large-scale discussions between many participants abound on the internet today. But as these discuss" -- Wikum has partial overlap with my criteria. Scores: C2 12/20, C6 10/12, C4 7/12, C7 5/6. |
| 87 | Pursuance Project | https://pursuanceproject.org | 38.2 | 38.2 | 0 | 0.98 | LOW | none | criteria | "Pursuance is a secure, open source collaboration tool for activists, journalists, and nonprofits" -- Pursuance Project has partial overlap with my criteria. Scores: C2 10/20, C4 9/12, C6 5/12, C7 5/6. |
| 88 | PlanIT | https://planit.org.uk | 38.2 | 38.2 | 0 | 0.69 | MEDIUM | none | criteria | PlanIT ("Digital platform enabling community participation in local planning decisions") has a dead homepage link, severely limiting what I can evaluate. Scores: C2 18/20, C6 10/12, C4 5/12, C7 4/6. |
| 89 | Parse The Bill | https://parsethebill.com | 38.2 | 38.2 | 0 | 0.79 | LOW | none | criteria | "Introduces a regulatory framework for online safety, governed by OFCOM. It mandates services to mini" -- Parse The Bill has partial overlap with my criteria. Scores: C2 20/20, C6 11/12, C4 5/12. |
| 90 | Open Referral UK | https://openreferraluk.org | 38.2 | 38.2 | 0 | 0.95 | LOW | none | criteria | "Open Referral UK is a open data standard which makes it easy to publish, find and use community serv" -- Open Referral UK has partial overlap with my criteria. Scores: C3 12/20, C4 9/12, C5 6/12, C7 6/6. |
| 91 | Land Explorer | https://landexplorer.coop | 38.2 | 38.2 | 0 | 0.81 | LOW | none | criteria | "Mapping tools that help your community Work, Play, Eat, &amp; Grow. We believe in common good land u" -- Land Explorer has partial overlap with my criteria. Scores: C3 15/20, C2 9/20, C6 8/12, C4 5/12. |
| 92 | Kialo | https://kialo.com | 38.2 | 38.2 | 0 | 0.81 | LOW | medium | criteria | "Kialo is the platform for rational debate. Empowering reason through friendly and open discussions" -- Kialo has partial overlap with my criteria. Scores: C2 10/20, C6 9/12, C3 8/20, C4 8/12. |
| 93 | Granitt | https://granitt.io | 38.2 | 38.2 | 0 | 0.69 | MEDIUM | none | criteria | "Government transparency and civic engagement platform" -- Granitt has partial overlap with my criteria. Scores: C2 16/20, C6 11/12, C4 7/12. |
| 94 | Find local consultations | https://gov.uk/find-local-consultations | 38.2 | 38.2 | 0 | 0.76 | LOW | medium | criteria | "Councils carry out consultations to help plan, manage and deliver services. Have your say about loca" -- Find local consultations has partial overlap with my criteria. Scores: C2 15/20, C6 10/12, C4 7/12, C7 3/6. |
| 95 | Civic Tech Field Guide | https://civictech.guide | 38.2 | 38.2 | 0 | 0.83 | LOW | none | criteria | "A rich, crowdsourced collection of thousands of tech for good projects from around the world" -- Civic Tech Field Guide has partial overlap with my criteria. Scores: C2 17/20, C6 8/12, C4 7/12, C7 4/6. |
| 96 | postcodes.io | https://github.com/ideal-postcodes/postcodes.io | 37.3 | 37.3 | 0 | 0.88 | LOW | none | criteria | "UK postcode &amp; geolocation API, serving up open data - ideal-postcodes/postcodes.io" -- postcodes.io has partial overlap with my criteria. Scores: C6 12/12, C4 9/12, C5 7/12, C7 4/6. |
| 97 | dDocs | https://ddocs.new/ | 37.3 | 37.3 | 0 | 0.71 | LOW | none | criteria | "Decentralized documentation platform for civic and open governance" -- dDocs has partial overlap with my criteria. Scores: C3 13/20, C6 6/12, C4 5/12, C5 5/12. |
| 98 | arXiv | https://arxiv.org | 37.3 | 37.3 | 0 | 0.98 | LOW | high | criteria | "arXiv is a free distribution service and an open-access archive for nearly 2.4 million       scholar" -- arXiv has partial overlap with my criteria. Scores: C3 12/20, C4 9/12, C6 5/12, C7 5/6. Popularity risk is high -- arXiv is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 27. |
| 99 | WhatDoTheyKnow | https://www.whatdotheyknow.com | 37.3 | 37.3 | 0 | 0.9 | LOW | high | criteria | "Printed from https://www.whatdotheyknow.com/ on February 09, 2026 12:47" -- WhatDoTheyKnow has partial overlap with my criteria. Scores: C6 12/12, C4 9/12, C7 6/6. Popularity risk is high -- WhatDoTheyKnow is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 27. |
| 100 | UrbanistAI | https://site.urbanistai.com | 37.3 | 37.3 | 0 | 0.79 | LOW | none | criteria | "UrbanistAI enables human-AI cooperation to reimagine the future of our cities" -- UrbanistAI has partial overlap with my criteria. Scores: C2 13/20, C6 12/12, C4 6/12, C7 3/6. |
| 101 | Strike Map | https://strikemap.org | 37.3 | 37.3 | 0 | 0.83 | LOW | none | criteria | "Interactive mapping platform documenting labor strikes and worker organizing actions" -- Strike Map has partial overlap with my criteria. Scores: C2 12/20, C6 10/12, C4 6/12, C7 4/6. |
| 102 | Open Science Framework | https://osf.io | 37.3 | 37.3 | 0 | 0.81 | LOW | medium | criteria | "A free, open platform for researchers to collaborate and share their work" -- Open Science Framework has partial overlap with my criteria. Scores: C4 9/12, C6 9/12, C7 6/6. |
| 103 | One Project | https://oneproject.org/ | 37.3 | 37.3 | 0 | 0.9 | LOW | none | criteria | "We partner with the rising global movement for economic democracy to build core technology, mobilize" -- One Project has partial overlap with my criteria. Scores: C3 10/20, C2 9/20, C4 7/12, C7 5/6. |
| 104 | Members' Interests | https://membersinterests.org.uk | 37.3 | 37.3 | 0 | 0.76 | LOW | none | criteria | Members' Interests ("Database of UK Members of Parliament financial interests and declarations") has a dead homepage link, severely limiting what I can evaluate. Scores: C2 15/20, C6 9/12, C4 5/12, C7 5/6. |
| 105 | Coral | https://coralproject.net | 37.3 | 37.3 | 0 | 0.95 | LOW | medium | criteria | "Coral improves community on your website through smart technology, effective design, and strategies " -- Coral has partial overlap with my criteria. Scores: C4 12/12, C3 8/20, C6 6/12, C7 6/6. |
| 106 | Channel.org | https://channel.org | 37.3 | 37.3 | 0 | 0.71 | LOW | none | criteria | "Home channel page" -- Channel.org has partial overlap with my criteria. Scores: C2 15/20, C4 6/12, C6 5/12, C7 3/6. |
| 107 | ОПОРА (Opora) | https://www.oporaua.org | 36.3 | 36.3 | 0 | 0.9 | LOW | medium | criteria | "Громадянська мережа ОПОРА – спостерігаємо за виборами, моніторимо парламент, аналізуємо дані соцмере" -- ОПОРА (Opora) has partial overlap with my criteria. Scores: C2 15/20, C4 7/12, C6 5/12, C7 4/6. |
| 108 | Organise | https://www.organise.org.uk | 36.3 | 36.3 | 0 | 0.86 | LOW | none | criteria | "The million-strong workers&#x27; network to anonymously chat to colleagues, let off steam, and campa" -- Organise has partial overlap with my criteria. Scores: C2 15/20, C4 7/12, C6 5/12, C7 4/6. |
| 109 | Nym | https://nymtech.net | 36.3 | 36.3 | 0 | 0.88 | LOW | none | criteria | "Stay private online with Nym’s decentralized VPN. Block trackers, hide your IP, and browse safely—no" -- Nym has partial overlap with my criteria. Scores: C3 11/20, C4 9/12, C7 6/6. |
| 110 | Journal of Open Source Software | https://joss.theoj.org | 36.3 | 36.3 | 0 | 0.93 | LOW | none | criteria | "Committed to publishing quality research software with zero article processing charges or         su" -- Journal of Open Source Software has partial overlap with my criteria. Scores: C3 14/20, C4 9/12, C7 6/6. |
| 111 | Empurrando Juntas (EJ) | https://sobre.ejparticipe.org | 36.3 | 36.3 | 0 | 0.76 | LOW | none | criteria | "A EJ é uma plataforma de pesquisa de opinião multicanal que permite segmentação. Comece a coletar op" -- Empurrando Juntas (EJ) has partial overlap with my criteria. Scores: C2 15/20, C6 10/12, C4 5/12, C7 3/6. |
| 112 | CrowdJustice | https://www.crowdjustice.com | 36.3 | 36.3 | 0 | 0.76 | LOW | medium | criteria | CrowdJustice ("CrowdJustice is a crowdfunding platform that enables individuals and organizations to raise funds fo") has a dead homepage link, severely limiting what I can evaluate. Scores: C2 14/20, C6 7/12, C4 6/12, C7 4/6. |
| 113 | Contracts for Data Collaboration | https://contractsfordatacollaboration.org | 36.3 | 36.3 | 0 | 0.86 | LOW | none | criteria | "Contracts for Data Collaboration (C4DC) seeks to strengthen trust, transparency, and accountability " -- Contracts for Data Collaboration has partial overlap with my criteria. Scores: C6 11/12, C2 9/20, C4 6/12, C7 6/6. |
| 114 | Campaign Tracker | https://www.campaigntracker.nl/en | 36.3 | 36.3 | 0 | 0.98 | LOW | none | criteria | "This visualization shows how many AI-generated contents each politician, party, or actor has publish" -- Campaign Tracker has partial overlap with my criteria. Scores: C4 9/12, C6 8/12, C7 5/6. |
| 115 | sourceAFRICA | https://sourceafrica.net | 35.3 | 35.3 | 0 | 0.83 | LOW | none | criteria | "Africa's premier repository for actionable documents" -- sourceAFRICA has partial overlap with my criteria. Scores: C4 9/12, C5 9/12, C6 5/12, C7 5/6. |
| 116 | Talk to the City | https://talktothecity.org | 35.3 | 35.3 | 0 | 0.83 | LOW | none | criteria | "Talk to the City" -- Talk to the City has partial overlap with my criteria. Scores: C2 12/20, C4 8/12, C6 7/12, C7 4/6. |
| 117 | Sugartrail | https://github.com/ribenamaplesyrup/sugartrail | 35.3 | 35.3 | 0 | 0.9 | LOW | none | criteria | "Visualise networks of companies, officers and addresses connected through UK Companies House - riben" -- Sugartrail has partial overlap with my criteria. Scores: C6 10/12, C2 8/20, C4 7/12, C7 4/6. |
| 118 | Security First / Umbrella | https://secfirst.org | 35.3 | 35.3 | 0 | 0.98 | LOW | none | criteria | "Security First develops Umbrella, a free open source digital and physical security handbook app for " -- Security First / Umbrella has partial overlap with my criteria. Scores: C3 12/20, C4 9/12, C7 6/6, C6 5/12. |
| 119 | RxC Quadratic Voting | https://quadraticvote.radicalxchange.org | 35.3 | 35.3 | 0 | 0.88 | LOW | none | criteria | "An easy tool to host a quadratic vote" -- RxC Quadratic Voting has partial overlap with my criteria. Scores: C2 11/20, C4 10/12, C7 5/6. |
| 120 | Participedia | https://participedia.net | 35.3 | 35.3 | 0 | 0.93 | LOW | medium | criteria | "On an entry page there are three fields that are filled with user-generated free form text. We call " -- Participedia has partial overlap with my criteria. Scores: C4 12/12, C2 11/20, C7 6/6. |
| 121 | Open Letter | https://openletter.earth | 35.3 | 35.3 | 0 | 0.74 | LOW | none | criteria | "Open Letter is a platform for writing and signing open letters" -- Open Letter has partial overlap with my criteria. Scores: C2 14/20, C4 10/12, C6 7/12. |
| 122 | Open Data Communities | https://opendatacommunities.org | 35.3 | 35.3 | 0 | 0.83 | LOW | none | criteria | "Open data from MHCLG Open Data available to browse, download and via API" -- Open Data Communities has partial overlap with my criteria. Scores: C6 11/12, C4 7/12, C5 5/12, C7 5/6. |
| 123 | Objector.ai | https://objector.ai | 35.3 | 35.3 | 0 | 0.76 | LOW | none | criteria | "Object to planning applications in the UK with Objector.ai. Check objection  grounds for free &amp;" -- Objector.ai has partial overlap with my criteria. Scores: C2 19/20, C6 8/12, C4 5/12. |
| 124 | Objector.ai | https://www.objector.ai | 35.3 | 35.3 | 0 | 0.76 | LOW | none | criteria | "Object to planning applications in the UK with Objector.ai. Check objection  grounds for free &amp;" -- Objector.ai has partial overlap with my criteria. Scores: C2 19/20, C6 8/12, C4 5/12. |
| 125 | Matrix | https://matrix.org | 35.3 | 35.3 | 0 | 0.98 | LOW | high | criteria | "Matrix, the open protocol for secure decentralised communications" -- Matrix has partial overlap with my criteria. Scores: C4 12/12, C5 11/12, C7 6/6. Popularity risk is high -- Matrix is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 25. |
| 126 | Manifold Markets | https://manifold.markets | 35.3 | 35.3 | 0 | 0.83 | LOW | medium | criteria | "Manifold is a social prediction game. Bet on news, politics, tech, &amp; AI with play money. Or crea" -- Manifold Markets has partial overlap with my criteria. Scores: C2 10/20, C6 9/12, C4 7/12, C7 5/6. |
| 127 | Harmonica | https://harmonica.chat/ | 35.3 | 35.3 | 0 | 0.71 | LOW | none | criteria | "Harmonica acts as a virtual facilitator by talking to your team, event guests or discussion particip" -- Harmonica has partial overlap with my criteria. Scores: C2 16/20, C6 10/12, C4 6/12. |
| 128 | Cybersecurity for Democracy | https://cybersecurityfordemocracy.org | 35.3 | 35.3 | 0 | 0.9 | LOW | none | criteria | "Cybersecurity for Democracy is a research-based effort to expose online threats to our social fabric" -- Cybersecurity for Democracy has partial overlap with my criteria. Scores: C4 10/12, C2 9/20, C7 6/6. |
| 129 | Cortico | https://cortico.ai/platform | 35.3 | 35.3 | 0 | 0.83 | LOW | none | criteria | "Conversations that travel Listen in Joanna shares her experience interacting with the U.S. Education" -- Cortico has partial overlap with my criteria. Scores: C2 15/20, C4 7/12, C6 6/12, C7 4/6. |
| 130 | Collaborative Data Patterns | https://collaborative-data.theodi.org | 35.3 | 35.3 | 0 | 0.86 | LOW | none | criteria | "This guidebook helps people design and run projects that involve the collaborative maintenance of da" -- Collaborative Data Patterns has partial overlap with my criteria. Scores: C2 14/20, C4 7/12, C6 6/12, C7 5/6. |
| 131 | Bluesky Social | https://github.com/bluesky-social | 35.3 | 35.3 | 0 | 0.93 | LOW | high | criteria | "bluesky-social has 41 repositories available. Follow their code on GitHub" -- Bluesky Social has partial overlap with my criteria. Scores: C3 11/20, C4 8/12, C6 6/12, C7 6/6. Popularity risk is high -- Bluesky Social is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 25. |
| 132 | New_ Public Roundabout | https://newpublic.substack.com/p/introducing-roundabout-built-for | 34.4 | 30.4 | 4 | 0.88 | LOW | none | criteria | "New_ Public’s app for local communities enters closed beta in five pilot communities" -- New_ Public Roundabout has partial overlap with my criteria. Scores: C3 8/20, C6 8/12, C4 5/12, C7 3/6. |
| 133 | Framework for Meaningful Engagement 2.0 | https://ecnl.org/publications/framework-meaningful-engagement-20?mc_cid=b1c5158063&mc_eid=a09c64ec38 | 34.4 | 28.4 | 6 | 0.9 | LOW | none | criteria | "The updated FME 2.0 offers very practical suggestions on how to engage civil society and affected co" -- Framework for Meaningful Engagement 2.0 has partial overlap with my criteria. Scores: C6 8/12, C7 6/6, C4 5/12. |
| 134 | Entitledto | https://entitledto.co.uk | 34.4 | 29.4 | 5 | 0.67 | MEDIUM | none | criteria | Entitledto ("Free online benefits calculator helping UK citizens understand welfare entitlements") has a dead homepage link, severely limiting what I can evaluate. Scores: C6 12/12, C2 8/20, C4 5/12, C7 4/6. |
| 135 | docs.plus | https://docs.plus | 34.3 | 34.3 | 0 | 0.81 | LOW | none | criteria | "docs.plus is an open-source, real-time collaborative tool that enables communities to share and orga" -- docs.plus has partial overlap with my criteria. Scores: C2 10/20, C6 6/12, C7 6/6, C4 5/12. |
| 136 | Viewpoints | https://viewpoints.xyz | 34.3 | 34.3 | 0 | 0.86 | LOW | none | criteria | "Create and share polls with Viewpoints. Use our intuitive platform to collect opinions, build consen" -- Viewpoints has partial overlap with my criteria. Scores: C2 12/20, C6 11/12, C4 6/12, C7 4/6. |
| 137 | Teaching Public Service in the Digital Age | https://www.teachingpublicservice.digital | 34.3 | 34.3 | 0 | 0.95 | LOW | none | criteria | "Select \u201CAccept all\u201D to agree to our use of cookies and similar technologies to enhance you" -- Teaching Public Service in the Digital Age has partial overlap with my criteria. Scores: C4 12/12, C6 6/12, C7 5/6. |
| 138 | Shareyourpaper.org | https://shareyourpaper.org | 34.3 | 34.3 | 0 | 0.9 | LOW | none | criteria | "We can help you make your paper Open Access, for free, wherever you publish. It’s legal and takes ju" -- Shareyourpaper.org has partial overlap with my criteria. Scores: C6 9/12, C3 8/20, C4 7/12, C7 6/6. |
| 139 | Murmurations Protocol | https://murmurations.network | 34.3 | 34.3 | 0 | 0.98 | LOW | none | criteria | "The Murmurations protocol makes distributed data interoperable by combining three key elements: Prof" -- Murmurations Protocol has partial overlap with my criteria. Scores: C4 10/12, C3 8/20, C5 6/12, C6 5/12. |
| 140 | Logos | https://logos.co/ | 34.3 | 34.3 | 0 | 0.9 | LOW | none | criteria | "Logos is a social movement and decentralised technology stack built to revitalise civil society. The" -- Logos has partial overlap with my criteria. Scores: C2 10/20, C6 6/12, C4 5/12, C7 5/6. |
| 141 | GrantNav | https://grantnav.threesixtygiving.org | 34.3 | 34.3 | 0 | 0.88 | LOW | none | criteria | "You can use GrantNav to search, filter and download data about awarded grants supporting good causes" -- GrantNav has partial overlap with my criteria. Scores: C6 11/12, C4 9/12, C2 8/20, C7 5/6. |
| 142 | Mozilla Data Collective | https://datacollective.mozillafoundation.org/ | 33.5 | 27.5 | 6 | 0.93 | LOW | none | criteria | "Mozilla Data Collective is rebuilding the AI data ecosystem with communities at the centre" -- Mozilla Data Collective has partial overlap with my criteria. Scores: C4 7/12, C6 7/12, C7 6/6. |
| 143 | WardWatch | https://wardwatch.uk | 33.3 | 33.3 | 0 | 0.81 | LOW | none | criteria | "We scan council minutes, local news, and social media to build a complete picture" -- WardWatch has partial overlap with my criteria. Scores: C2 13/20, C6 11/12, C4 5/12, C7 3/6. |
| 144 | ORCID | https://orcid.org | 33.3 | 33.3 | 0 | 0.83 | LOW | high | criteria | "A persistent digital identifier for researchers to distinguish themselves and connect with their pro" -- ORCID has partial overlap with my criteria. Scores: C6 10/12, C4 9/12, C7 5/6. Popularity risk is high -- ORCID is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 23. |
| 145 | Neighbourhood Warmth | https://www.mysociety.org/climate/neighbourhood-warmth | 33.3 | 33.3 | 0 | 0.81 | LOW | none | criteria | "mySociety provides technology, research and data to help people be active citizens, in more than 40 " -- Neighbourhood Warmth has partial overlap with my criteria. Scores: C2 10/20, C6 9/12, C4 5/12, C7 3/6. |
| 146 | Guardian Project | https://guardianproject.info | 33.3 | 33.3 | 0 | 0.79 | LOW | high | criteria | "Secure, privacy-enhancing mobile applications and tools for journalists, activists, and people at ri" -- Guardian Project has partial overlap with my criteria. Scores: C4 12/12, C3 9/20, C7 6/6. Popularity risk is high -- Guardian Project is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 23. |
| 147 | Groupthink (OpenPolitics Votebot) | https://github.com/openpolitics/groupthink | 33.3 | 33.3 | 0 | 0.9 | LOW | none | criteria | "A collaborative democratic platform built atop GitHub, designed for open policymaking and manifesto " -- Groupthink (OpenPolitics Votebot) has partial overlap with my criteria. Scores: C3 10/20, C4 7/12, C7 5/6. |
| 148 | GOV.UK Forms | https://www.forms.service.gov.uk | 33.3 | 33.3 | 0 | 0.93 | LOW | none | criteria | "We’d like to use analytics cookies so we can understand how you use this website and make improvemen" -- GOV.UK Forms has partial overlap with my criteria. Scores: C6 12/12, C2 8/20, C4 7/12, C7 5/6. |
| 149 | CivicPress | https://civicpress.io/ | 33.3 | 33.3 | 0 | 0.93 | LOW | none | criteria | "CivicPress is an open-source civic platform that helps municipalities publish records, meetings, and" -- CivicPress has partial overlap with my criteria. Scores: C6 11/12, C4 7/12, C7 5/6. |
| 150 | Abstract Wikipedia | https://meta.wikimedia.org/wiki/abstract_wikipedia | 33.3 | 33.3 | 0 | 0.88 | LOW | high | criteria | Abstract Wikipedia ("Abstract Wikipedia is a Wikimedia Foundation project to create a language-independent layer of struc") has a dead homepage link, severely limiting what I can evaluate. Scores: C3 8/20, C6 7/12, C7 6/6, C4 5/12. Popularity risk is high -- Abstract Wikipedia is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 23. |
| 151 | Turn2us Benefits Calculator | https://benefits-calculator.turn2us.org.uk | 32.5 | 27.5 | 5 | 0.79 | LOW | none | criteria | "Use the Turn2us Benefits Calculator to find out which welfare benefits you may be entitled to" -- Turn2us Benefits Calculator has partial overlap with my criteria. Scores: C6 11/12, C4 7/12, C7 3/6. |
| 152 | The Circuit | https://thecircuit.cc | 32.4 | 32.4 | 0 | 0.95 | LOW | none | criteria | "The Circuit is a multi-yearlong collaborative journalism project focused on investigating and reveal" -- The Circuit has partial overlap with my criteria. Scores: C4 7/12, C6 6/12, C7 5/6. |
| 153 | Political Advertising Transparency Data Standard | https://github.com/whotargetsme/ad-transparency-standards/blob/main/implement.md | 32.4 | 32.4 | 0 | 0.9 | LOW | none | criteria | "A proposed schema for disclosure of advertising transparency data. - ad-transparency-standards/imple" -- Political Advertising Transparency Data Standard has partial overlap with my criteria. Scores: C4 10/12, C5 6/12, C6 6/12, C7 5/6. |
| 154 | Pastecal | https://github.com/kazad/pastecal | 32.4 | 32.4 | 0 | 0.83 | LOW | none | criteria | "Shared, no-login online calendar. Contribute to kazad/pastecal development by creating an account on" -- Pastecal has partial overlap with my criteria. Scores: C2 10/20, C6 6/12, C4 5/12, C7 4/6. |
| 155 | Nestr | https://nestr.io | 32.4 | 32.4 | 0 | 0.83 | LOW | none | criteria | "Collaboration &amp; Productivity software. Create &amp; find organisations you actually care for!" -- Nestr has partial overlap with my criteria. Scores: C2 11/20, C3 9/20, C4 5/12, C6 5/12. |
| 156 | Metaculus | https://metaculus.com | 32.4 | 32.4 | 0 | 0.86 | LOW | medium | criteria | Metaculus ("Metaculus is a community prediction platform where forecasters make probabilistic predictions on fut") has a dead homepage link, severely limiting what I can evaluate. Scores: C3 9/20, C4 7/12, C6 7/12, C7 5/6. |
| 157 | Libertrium | https://liberopinion.com | 32.4 | 32.4 | 0 | 0.69 | MEDIUM | none | criteria | "Promover a inovação e a desmaterialização dos processos da Administração Pública,                  " -- Libertrium has partial overlap with my criteria. Scores: C2 15/20, C6 9/12, C4 5/12. |
| 158 | Bellingcat Online Investigation Toolkit | https://bellingcat.gitbook.io/toolkit | 32.4 | 32.4 | 0 | 0.98 | LOW | medium | criteria | "A toolkit for open source researchers" -- Bellingcat Online Investigation Toolkit has partial overlap with my criteria. Scores: C3 8/20, C7 6/6, C4 5/12. |
| 159 | Awesome UK Government Datasets | https://github.com/i-dot-ai/awesome-gov-datasets | 32.4 | 32.4 | 0 | 0.88 | LOW | none | criteria | "A curated set of references to useful UK Government datasets  - GitHub - i-dot-ai/awesome-gov-datase" -- Awesome UK Government Datasets has partial overlap with my criteria. Scores: C4 7/12, C5 6/12, C7 6/6. |
| 160 | Global Fact-Check Bot (GFC) | https://globalfactcheck.bot/ | 31.5 | 26.5 | 5 | 0.88 | LOW | none | criteria | "A pioneering AI platform that empowers fact-checkers and citizens           worldwide to verify info" -- Global Fact-Check Bot (GFC) has partial overlap with my criteria. Scores: C3 12/20, C4 5/12, C7 3/6. |
| 161 | openparliament.ca | https://openparliament.ca/ | 31.4 | 31.4 | 0 | 0.88 | LOW | none | criteria | "Info on what your representatives are doing in Ottawa can be hard to find and use. We" -- openparliament.ca has partial overlap with my criteria. Scores: C4 9/12, C6 6/12, C5 5/12, C7 5/6. |
| 162 | Vote for Policies | https://voteforpolicies.org.uk | 31.4 | 31.4 | 0 | 0.83 | LOW | none | criteria | "Vote for Policies helps you to vote and know what you" -- Vote for Policies has partial overlap with my criteria. Scores: C2 11/20, C4 6/12, C6 6/12, C7 4/6. |
| 163 | VFRAME | https://vframe.io | 31.4 | 31.4 | 0 | 0.95 | LOW | none | criteria | "Human rights researchers often rely on videos shared online to document war crimes, atrocities, and " -- VFRAME has partial overlap with my criteria. Scores: C4 10/12, C3 9/20, C7 5/6. |
| 164 | Tor Project | https://www.torproject.org | 31.4 | 31.4 | 0 | 0.95 | LOW | high | criteria | "Anonymity Online \| Defend yourself against tracking and surveillance. Circumvent censorship" -- Tor Project has partial overlap with my criteria. Scores: C4 9/12, C7 6/6, C6 5/12. Popularity risk is high -- Tor Project is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 21. |
| 165 | Schema.org | https://schema.org | 31.4 | 31.4 | 0 | 0.83 | LOW | high | criteria | "Schema.org is a set of extensible schemas that enables webmasters to embed     structured data on th" -- Schema.org has partial overlap with my criteria. Scores: C3 11/20, C4 7/12, C7 4/6. Popularity risk is high -- Schema.org is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 21. |
| 166 | Relational Tech Project | https://relationaltechproject.org | 31.4 | 31.4 | 0 | 0.83 | LOW | none | criteria | "Many of us wish our neighborhoods were more connected. We want to live in neighborhoods where we lea" -- Relational Tech Project has partial overlap with my criteria. Scores: C2 10/20, C4 5/12, C6 5/12, C7 4/6. |
| 167 | Marks Out Of Tenancy | https://www.marksoutoftenancy.com | 31.4 | 31.4 | 0 | 0.86 | LOW | none | criteria | "We&#039;re all about landlord reviews. Get the real inside story from renters like you. Read, write " -- Marks Out Of Tenancy has partial overlap with my criteria. Scores: C2 13/20, C6 9/12, C4 5/12, C7 3/6. |
| 168 | MP Twitter Bios | https://www.mptwitterbios.co.uk | 31.4 | 31.4 | 0 | 0.86 | LOW | none | criteria | "How many MPs disclose their party in their Twitter bio?" -- MP Twitter Bios has partial overlap with my criteria. Scores: C2 12/20, C6 6/12, C4 5/12, C7 3/6. |
| 169 | LittleSis | https://littlesis.org | 31.4 | 31.4 | 0 | 0.93 | LOW | medium | criteria | "The Public Accountability Initiative, LittleSis, is a nonprofit public interest research organizatio" -- LittleSis has partial overlap with my criteria. Scores: C2 9/20, C4 9/12, C7 6/6, C5 5/12. |
| 170 | Community Tech | https://www.communitytech.network | 31.4 | 31.4 | 0 | 0.86 | LOW | none | criteria | "How communities work with technology and innovation to shape better places" -- Community Tech has partial overlap with my criteria. Scores: C2 14/20, C4 7/12, C7 3/6. |
| 171 | Who Targets Me Trends | https://trends.whotargets.me | 30.4 | 30.4 | 0 | 0.79 | LOW | none | criteria | "Trends from Who Targets Me makes navigating and understanding digital political advertising data eas" -- Who Targets Me Trends has partial overlap with my criteria. Scores: C4 8/12, C6 7/12, C7 4/6. |
| 172 | Spacetube | https://spacetu.be | 30.4 | 30.4 | 0 | 0.83 | LOW | none | criteria | "Spacetube lets you open a channel to other groups from your chat platform, so you can             ta" -- Spacetube has partial overlap with my criteria. Scores: C2 9/20, C6 7/12, C4 5/12, C7 4/6. |
| 173 | SecureDrop | https://securedrop.org | 30.4 | 30.4 | 0 | 0.95 | LOW | high | criteria | "SecureDrop is an open-source whistleblower submission system that media organizations can install to" -- SecureDrop has partial overlap with my criteria. Scores: C4 12/12, C7 6/6, C6 5/12. Popularity risk is high -- SecureDrop is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 20. |
| 174 | Open Access – Transparency International UK | https://openaccess.transparency.org.uk | 30.4 | 30.4 | 0 | 0.76 | LOW | none | criteria | Open Access – Transparency International UK ("Platform providing access to corporate transparency data and beneficial ownership information") has a dead homepage link, severely limiting what I can evaluate. Scores: C2 10/20, C6 6/12, C4 5/12, C7 5/6. |
| 175 | Monitor Mamdani | https://monitormamdani.com/ | 30.4 | 30.4 | 0 | 0.81 | LOW | none | criteria | "Real-time monitoring dashboard for NYC Mayor Zohran Mamdani. Track campaign promises, prediction mar" -- Monitor Mamdani has partial overlap with my criteria. Scores: C2 15/20, C6 9/12. |
| 176 | Local Intelligence Hub | https://www.localintelligencehub.com | 30.4 | 30.4 | 0 | 0.86 | LOW | none | criteria | "Your starting point for data about local MPs, constituencies, public opinion and the climate and nat" -- Local Intelligence Hub has partial overlap with my criteria. Scores: C2 11/20, C6 9/12, C4 5/12, C7 4/6. |
| 177 | HURIDOCS | https://github.com/huridocs | 30.4 | 30.4 | 0 | 0.9 | LOW | none | criteria | "HURIDOCS equips human rights defenders with tools to mobilise information for justice and accountabi" -- HURIDOCS has partial overlap with my criteria. Scores: C4 10/12, C7 6/6, C5 5/12. |
| 178 | GlobaLeaks | https://www.globaleaks.org | 30.4 | 30.4 | 0 | 0.9 | LOW | high | criteria | "GlobaLeaks - Free and Open-Source Whistleblowing Software" -- GlobaLeaks has partial overlap with my criteria. Scores: C3 10/20, C4 7/12, C7 6/6, C6 5/12. Popularity risk is high -- GlobaLeaks is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 20. |
| 179 | Give Food | https://www.givefood.org.uk | 30.4 | 30.4 | 0 | 0.81 | LOW | none | criteria | Give Food ("UK charity using data to highlight and alleviate local food insecurity") has a dead homepage link, severely limiting what I can evaluate. Scores: C3 9/20, C4 7/12, C6 6/12, C7 5/6. |
| 180 | Gapminder Worldview Upgrader | https://upgrader.gapminder.org | 30.4 | 30.4 | 0 | 0.95 | LOW | medium | criteria | "Gapminder Worldview Upgrader - Get rid of your misconceptions about global development!" -- Gapminder Worldview Upgrader has partial overlap with my criteria. Scores: C3 10/20, C4 9/12, C7 6/6. |
| 181 | Public AI Inference Utility | https://publicai.co/ | 29.5 | 25.5 | 4 | 0.95 | LOW | none | criteria | "A nonprofit, open-source service to make public and sovereign AI models more accessible" -- Public AI Inference Utility has partial overlap with my criteria. Scores: C4 6/12, C6 5/12, C7 5/6. |
| 182 | soweego | https://soweego.readthedocs.io | 29.4 | 29.4 | 0 | 0.9 | LOW | none | criteria | "import the target catalog into a local database;" -- soweego has partial overlap with my criteria. Scores: C5 8/12, C4 7/12, C7 6/6, C6 5/12. |
| 183 | Worker Info Exchange | https://www.workerinfoexchange.org | 29.4 | 29.4 | 0 | 0.83 | LOW | none | criteria | "Worker Info Exchange is a non profit organisation dedicated to helping workers access and gain insig" -- Worker Info Exchange has partial overlap with my criteria. Scores: C2 9/20, C6 9/12, C4 7/12. |
| 184 | Wikidata | https://www.wikidata.org | 29.4 | 29.4 | 0 | 0.95 | LOW | high | criteria | "Wikidata is a free and open knowledge base that can be read and edited by both humans and machines" -- Wikidata has partial overlap with my criteria. Scores: C4 9/12, C7 6/6. Popularity risk is high -- Wikidata is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 19. |
| 185 | Unpaywall Browser Extension | https://unpaywall.org/products/extension | 29.4 | 29.4 | 0 | 0.76 | LOW | medium | criteria | "Browser extension to find legal, open access versions of academic papers" -- Unpaywall Browser Extension has partial overlap with my criteria. Scores: C4 9/12, C6 8/12, C7 6/6. |
| 186 | The Commons Social Change Library | https://commonslibrary.org | 29.4 | 29.4 | 0 | 0.81 | LOW | none | criteria | "Do you want to change the world for the better? Commons Library is an online library for social chan" -- The Commons Social Change Library has partial overlap with my criteria. Scores: C2 10/20, C4 8/12, C7 3/6. |
| 187 | Moral Machine | https://moralmachine.net | 29.4 | 29.4 | 0 | 0.83 | LOW | none | criteria | "A platform for exploring ethical dilemmas in autonomous vehicle decision-making through crowdsourced" -- Moral Machine has partial overlap with my criteria. Scores: C2 9/20, C4 7/12, C6 7/12, C7 5/6. |
| 188 | Mapped | https://mapped.commonknowledge.coop | 29.4 | 29.4 | 0 | 0.88 | LOW | none | criteria | "Enrich member spreadsheets with political geography metadata" -- Mapped has partial overlap with my criteria. Scores: C2 9/20, C6 8/12, C4 5/12, C7 5/6. |
| 189 | GOV.UK Pay | https://www.payments.service.gov.uk | 29.4 | 29.4 | 0 | 0.9 | LOW | none | criteria | "GOV.UK Pay is for central government, local authorities, police and the NHS. It lets them take payme" -- GOV.UK Pay has partial overlap with my criteria. Scores: C4 9/12, C6 9/12, C7 5/6. |
| 190 | Democracy Club Developer API | https://developers.democracyclub.org.uk/api/v1 | 29.4 | 29.4 | 0 | 0.93 | LOW | none | criteria | "Example of a response when there are no upcoming ballots" -- Democracy Club Developer API has partial overlap with my criteria. Scores: C4 9/12, C7 6/6. |
| 191 | Deliberation & Technology (DelibTech) Network | https://www.demnext.org/projects/delibtech-network | 29.4 | 29.4 | 0 | 0.83 | LOW | none | criteria | "We are an international network of technologists, practitioners, and experts who are building, study" -- Deliberation & Technology (DelibTech) Network has partial overlap with my criteria. Scores: C2 15/20, C6 7/12, C7 3/6. |
| 192 | DISARM Frameworks | https://github.com/disarmfoundation/disarmframeworks | 29.4 | 29.4 | 0 | 0.9 | LOW | none | criteria | "Master copies of the DISARM frameworks, with generated files to help you explore the data - DISARMFo" -- DISARM Frameworks has partial overlap with my criteria. Scores: C3 10/20, C4 8/12, C7 5/6. |
| 193 | CiviClick | https://civiclick.com | 29.4 | 29.4 | 0 | 0.74 | LOW | none | criteria | "Choose CiviClick&#039;s Grassroot Advocacy Software for your public affairs campaign. Simplify and a" -- CiviClick has partial overlap with my criteria. Scores: C2 14/20, C6 7/12, C4 5/12. |
| 194 | Atlas of Surveillance | https://atlasofsurveillance.org | 29.4 | 29.4 | 0 | 0.98 | LOW | none | criteria | "Atlas of Surveillance is a project of the Electronic Frontier Foundation" -- Atlas of Surveillance has partial overlap with my criteria. Scores: C4 9/12, C6 5/12, C7 5/6. |
| 195 | AlgorithmWatch | https://algorithmwatch.org | 29.4 | 29.4 | 0 | 1.0 | LOW | high | criteria | "Whether you use ChatGPT, Claude or Gemini, Copilot or Perplexity – generative AI poses massive probl" -- AlgorithmWatch has partial overlap with my criteria. Scores: C4 8/12, C7 5/6. Popularity risk is high -- AlgorithmWatch is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 19. |
| 196 | Prolific | https://www.prolific.com | 28.5 | 24.5 | 4 | 0.83 | LOW | none | criteria | "Prolific helps AI developers, researchers, and organizations easily access the highest-quality human" -- Prolific has partial overlap with my criteria. Scores: C4 8/12, C6 8/12, C7 4/6. |
| 197 | UK Policy Dojo | https://github.com/mikekelly/policy-dojo | 28.4 | 28.4 | 0 | 0.88 | LOW | none | criteria | "A policy dojo for AIs to discuss UK policy options - mikekelly/Policy-Dojo" -- UK Policy Dojo has partial overlap with my criteria. Scores: C4 7/12, C7 5/6. |
| 198 | Shared Digital Guides | https://www.shareddigitalguides.org.uk | 28.4 | 28.4 | 0 | 0.81 | LOW | none | criteria | "Step-by-step Guides to how non-profits are using digital tools. Contributed by charities themselves" -- Shared Digital Guides has partial overlap with my criteria. Scores: C6 8/12, C4 7/12, C7 5/6. |
| 199 | Plinth | https://www.plinth.org.uk | 28.4 | 28.4 | 0 | 0.81 | LOW | none | criteria | "An AI-powered ecosystem to improve the way community organisations, non-profits and funders work tog" -- Plinth has partial overlap with my criteria. Scores: C6 12/12, C4 7/12, C7 3/6. |
| 200 | OpenProcurement | https://openprocurement.io | 28.4 | 28.4 | 0 | 0.9 | LOW | medium | criteria | "OpenProcurement is an open source toolkit, designed specifically for procurement of goods and servic" -- OpenProcurement has partial overlap with my criteria. Scores: C4 9/12, C7 6/6. |
| 201 | OpenAudience | https://openaudience.org | 28.4 | 28.4 | 0 | 0.79 | LOW | none | criteria | "Understand your audience using open data. Paste in your audience's postcodes or output areas to get " -- OpenAudience has partial overlap with my criteria. Scores: C2 9/20, C4 7/12, C6 6/12. |
| 202 | Idealist | https://idealist.org | 28.4 | 28.4 | 0 | 0.81 | LOW | medium | criteria | "Find volunteer opportunities, nonprofit jobs, social-impact opportunities and more on the Idealist p" -- Idealist has partial overlap with my criteria. Scores: C2 9/20, C6 9/12, C4 5/12, C7 4/6. |
| 203 | Humanitarian Data Exchange | https://data.humdata.org | 28.4 | 28.4 | 0 | 0.81 | LOW | none | criteria | "Find, share and use humanitarian data all in one place" -- Humanitarian Data Exchange has partial overlap with my criteria. Scores: C4 7/12, C6 6/12, C7 5/6. |
| 204 | EDGAR | https://github.com/bellingcat/edgar | 28.4 | 28.4 | 0 | 0.88 | LOW | none | criteria | "Tool for the retrieval of corporate and financial data from the SEC - bellingcat/EDGAR" -- EDGAR has partial overlap with my criteria. Scores: C4 7/12, C7 6/6, C6 5/12. |
| 205 | Consent-O-Matic | https://github.com/cavi-au/consent-o-matic | 28.4 | 28.4 | 0 | 0.86 | LOW | none | criteria | "Browser extension that automatically fills out cookie popups based on your preferences - cavi-au/Con" -- Consent-O-Matic has partial overlap with my criteria. Scores: C4 9/12, C6 8/12, C7 3/6. |
| 206 | Bluesky | https://bsky.app | 28.4 | 28.4 | 0 | 0.93 | LOW | high | criteria | "Social media as it should be. Find your community among millions of users, unleash your creativity, " -- Bluesky has partial overlap with my criteria. Scores: C4 8/12, C6 6/12, C7 5/6. Popularity risk is high -- Bluesky is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 18. |
| 207 | https://tracking-template-38b4c.web.app | https://tracking-template-38b4c.web.app | 28 | 4.9 | 0 | 0.19 | HIGH | none | underdog-protection | Almost nothing is visible about https://tracking-template-38b4c.web.app in the dossier -- thin evidence means underdog protection applies. Underdog protection floor at 28 (completeness 0.19). |
| 208 | youtube-dl | https://github.com/ytdl-org/youtube-dl | 27.5 | 27.5 | 0 | 0.9 | LOW | high | criteria | "Command-line program to download videos from YouTube.com and other video sites - ytdl-org/youtube-dl" -- youtube-dl does something real, but my constitution is not built to reward it. Scores: C4 9/12, C6 6/12, C7 5/6. Popularity risk is high -- youtube-dl is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 18. |
| 209 | django-collaborative | https://github.com/propublica/django-collaborative | 27.5 | 27.5 | 0 | 0.88 | LOW | none | criteria | "ProPublica&#39;s collaborative tip-gathering framework. Import and manage CSV, Google Sheets and Scr" -- django-collaborative does something real, but my constitution is not built to reward it. Scores: C6 9/12, C4 7/12, C7 6/6. |
| 210 | UK Housing Data Standards | https://hact.org.uk/tools-and-services/uk-housing-data-standards | 27.5 | 27.5 | 0 | 0.95 | LOW | none | criteria | "As a social housing organisation, you know the importance of collecting consistent, coherent, and co" -- UK Housing Data Standards does something real, but my constitution is not built to reward it. Scores: C3 11/20, C4 9/12, C7 4/6. |
| 211 | Turbo Phonebank | https://turbophonebank.com | 27.5 | 27.5 | 0 | 0.81 | LOW | none | criteria | "A phonebank platform you & your volunteers will love. Turbo Phonebank turns any Google Sheet into a " -- Turbo Phonebank does something real, but my constitution is not built to reward it. Scores: C2 12/20, C4 5/12, C6 5/12, C7 3/6. |
| 212 | The Engine Room Library | https://library.theengineroom.org | 27.5 | 27.5 | 0 | 0.86 | LOW | none | criteria | "We're always finding information through our direct support, community and research work that we thi" -- The Engine Room Library does something real, but my constitution is not built to reward it. Scores: C4 9/12, C7 6/6. |
| 213 | Spartacus | https://spartacus.app | 27.5 | 27.5 | 0 | 0.86 | LOW | none | criteria | "&quot;Kickstarter&quot; for Collective Action. Bootstrap projects, organize people around a common p" -- Spartacus does something real, but my constitution is not built to reward it. Scores: C2 10/20, C6 7/12, C7 4/6. |
| 214 | GOV.UK One Login | https://www.sign-in.service.gov.uk | 27.5 | 27.5 | 0 | 0.93 | LOW | none | criteria | "We’d like to use analytics cookies so we can understand how you use this website and make improvemen" -- GOV.UK One Login does something real, but my constitution is not built to reward it. Scores: C6 9/12, C4 7/12, C7 5/6. |
| 215 | GOV.UK Notify | https://www.notifications.service.gov.uk | 27.5 | 27.5 | 0 | 0.93 | LOW | none | criteria | "GOV.UK Notify lets you send emails, text messages and letters to your users. Try it now if you work " -- GOV.UK Notify does something real, but my constitution is not built to reward it. Scores: C4 9/12, C6 8/12, C7 5/6. |
| 216 | Democracy Fund Open Source | https://www.dfos.com | 27.5 | 27.5 | 0 | 0.79 | LOW | none | criteria | "Dark Forest Operating System" -- Democracy Fund Open Source does something real, but my constitution is not built to reward it. Scores: C4 7/12, C7 5/6. |
| 217 | Community Notes (Birdwatch) Analysis Tool | https://github.com/travisbrown/birdwatch | 27.5 | 27.5 | 0 | 0.9 | LOW | none | criteria | "Data related to X&#39;s Community Notes system. Contribute to travisbrown/birdwatch development by c" -- Community Notes (Birdwatch) Analysis Tool does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12, C7 6/6. |
| 218 | Nyaaya | https://nyaaya.org | 26.6 | 21.6 | 5 | 0.95 | LOW | none | criteria | "Nyaaya’s repository of legal explainers with simple, actionable, reliable and accessible legal infor" -- Nyaaya does something real, but my constitution is not built to reward it. Scores: C4 9/12, C6 5/12, C7 5/6. |
| 219 | Timecounts | https://timecounts.org | 26.5 | 26.5 | 0 | 0.79 | LOW | none | criteria | "Discover Timecounts, the free all-in-one volunteer management software built for leaders of voluntee" -- Timecounts does something real, but my constitution is not built to reward it. Scores: C2 10/20, C4 7/12, C6 6/12. |
| 220 | Theft Bisect | https://onodi.co/bisect/ | 26.5 | 26.5 | 0 | 0.88 | LOW | none | criteria | "If it is available we will review around two hours of CCTV footage to try to identify the incident, " -- Theft Bisect does something real, but my constitution is not built to reward it. Scores: C6 8/12, C4 7/12, C7 4/6. |
| 221 | The Data Trusts Initiative | https://datatrusts.uk | 26.5 | 22.5 | 4 | 0.83 | LOW | none | criteria | "This is the web presence of the data trusts initiative" -- The Data Trusts Initiative does something real, but my constitution is not built to reward it. Scores: C4 5/12, C7 4/6. |
| 222 | OA.Works | https://oa.works/ | 26.5 | 26.5 | 0 | 0.88 | LOW | medium | criteria | "We partner to build" -- OA.Works does something real, but my constitution is not built to reward it. Scores: C4 10/12, C7 6/6. |
| 223 | OA.Report | https://oa.report | 26.5 | 26.5 | 0 | 0.76 | LOW | none | criteria | "Find your publications, measure their openness, and take action to increase your Open Access policy " -- OA.Report does something real, but my constitution is not built to reward it. Scores: C6 10/12, C4 8/12, C7 3/6. |
| 224 | Internet Archive Wayback Machine | https://web.archive.org | 26.5 | 26.5 | 0 | 0.95 | LOW | high | criteria | "Capture a web page as it appears now for use as a trusted                           citation in the " -- Internet Archive Wayback Machine does something real, but my constitution is not built to reward it. Scores: C4 10/12, C7 6/6. Popularity risk is high -- Internet Archive Wayback Machine is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 16. |
| 225 | Frankenstein Bill | https://gordonguthrie.github.io/frankensteinbill | 26.5 | 26.5 | 0 | 0.88 | LOW | none | criteria | "Frankenstein Bill - a dummy parliamentary bill collecting and explaining potential speedbumps for go" -- Frankenstein Bill does something real, but my constitution is not built to reward it. Scores: C4 9/12, C7 6/6. |
| 226 | Fission Codes | https://github.com/fission-codes/fission-codes | 25.7 | 15.7 | 10 | 0.67 | MEDIUM | none | modifier | "Status codes for smart contracts powering microservices for Web3 - fission-codes/fission-codes" -- Fission Codes does something real, but my constitution is not built to reward it. Scores: C4 5/12, C6 5/12. On-chain governance modifier adds +10. |
| 227 | Collab.Land | https://collab.land | 25.7 | 15.7 | 10 | 0.81 | LOW | none | modifier | "Generated by Collab.Land" -- Collab.Land does something real, but my constitution is not built to reward it. Scores: C4 6/12, C6 6/12, C7 3/6. On-chain governance modifier adds +10. |
| 228 | The Accountability Project | https://publicaccountability.org | 25.5 | 25.5 | 0 | 0.79 | LOW | none | criteria | "A searchable database of 1.9+ billion public records for researchers and journalists" -- The Accountability Project does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 7/12, C7 4/6. |
| 229 | Riseup | https://riseup.net | 25.5 | 25.5 | 0 | 0.9 | LOW | high | criteria | "Riseup provides online communication tools for people and groups working on liberatory social change" -- Riseup does something real, but my constitution is not built to reward it. Scores: C4 7/12, C7 4/6. Popularity risk is high -- Riseup is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 16. |
| 230 | Remember to Vote | https://remembertovote.org.uk | 25.5 | 25.5 | 0 | 0.71 | LOW | none | criteria | "Free SMS reminder service for polling station locations and voter ID requirements" -- Remember to Vote does something real, but my constitution is not built to reward it. Scores: C2 10/20, C6 6/12, C4 5/12. |
| 231 | PostBug | https://postbug.com | 25.5 | 25.5 | 0 | 0.81 | LOW | none | criteria | "Get noticed by enabling your supporters to send real, printed postcards and letters to politicians, " -- PostBug does something real, but my constitution is not built to reward it. Scores: C2 10/20, C4 7/12. |
| 232 | OSINT Framework | https://osintframework.com | 25.5 | 25.5 | 0 | 0.9 | LOW | none | criteria | "I originally created this framework with an information security point of view.  Since then, the res" -- OSINT Framework does something real, but my constitution is not built to reward it. Scores: C4 9/12, C6 7/12, C7 4/6. |
| 233 | MP Watch | https://www.mpwatch.org | 25.5 | 25.5 | 0 | 0.88 | LOW | none | criteria | "Along with environmental and democratic allies, we aim to address the democratic deficit,  by buildi" -- MP Watch does something real, but my constitution is not built to reward it. Scores: C2 12/20, C4 7/12, C7 3/6. |
| 234 | Kagi SlopStop | https://blog.kagi.com/slopstop | 25.5 | 25.5 | 0 | 0.95 | LOW | medium | criteria | "------------------------------------------------------------------- Your collective defense against " -- Kagi SlopStop does something real, but my constitution is not built to reward it. Scores: C4 10/12, C3 9/20, C7 4/6. |
| 235 | Hand-Written Petition Scanner | https://hand-written-petition-scanner.streamlit.app | 25.5 | 25.5 | 0 | 0.62 | MEDIUM | none | criteria | Hand-Written Petition Scanner ("Tool for digitizing and analyzing hand-written petitions using optical character recognition") has a dead homepage link, severely limiting what I can evaluate. Scores: C2 11/20, C6 8/12, C7 3/6. |
| 236 | GRIM (Global Risk Simulator) | https://github.com/sentinelteam/grim | 25.5 | 25.5 | 0 | 0.95 | LOW | none | criteria | "AI Wargamer and Global Risk Simulator. Contribute to SentinelTeam/grim development by creating an ac" -- GRIM (Global Risk Simulator) does something real, but my constitution is not built to reward it. Scores: C4 8/12, C7 5/6. |
| 237 | Esper | https://esper.com/product | 25.5 | 25.5 | 0 | 0.74 | LOW | none | criteria | "Esper provides a purpose-built policy management platform for local, state and federal government ag" -- Esper does something real, but my constitution is not built to reward it. Scores: C6 11/12, C4 7/12. |
| 238 | Beckton | https://richardpope.org/2017/03/05/beckton-a-tool-to-build | 25.5 | 25.5 | 0 | 0.88 | LOW | none | criteria | "10 years on from PledgeBank, it should be many times easier to build a focused conditional commitmen" -- Beckton does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 5/12, C7 5/6. |
| 239 | rsky | https://github.com/blacksky-algorithms/rsky | 24.5 | 24.5 | 0 | 0.9 | LOW | none | criteria | "An AT Protocol implementation prioritizing community safety and self-governance, written in Rust. - " -- rsky does something real, but my constitution is not built to reward it. Scores: C6 6/12, C4 5/12, C7 4/6. |
| 240 | User Research Library | https://research.localgov.digital | 24.5 | 24.5 | 0 | 0.86 | LOW | none | criteria | "Research related to people who need help to find somewhere to live" -- User Research Library does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12, C7 4/6. |
| 241 | UK Parliament Developer Portal | https://developer.parliament.uk | 24.5 | 24.5 | 0 | 0.64 | MEDIUM | none | criteria | UK Parliament Developer Portal ("APIs and data for accessing UK Parliament information") has a dead homepage link, severely limiting what I can evaluate. Scores: C6 7/12, C4 5/12, C7 3/6. |
| 242 | Service Manual | https://www.gov.uk/service-manual | 24.5 | 24.5 | 0 | 0.88 | LOW | medium | criteria | "Helping government teams create and run great digital services that meet the Service Standard" -- Service Manual does something real, but my constitution is not built to reward it. Scores: C6 9/12, C4 7/12, C7 4/6. |
| 243 | Privacy Badger | https://privacybadger.org | 24.5 | 24.5 | 0 | 0.93 | LOW | high | criteria | "Privacy Badger is a browser extension that stops advertisers and other third-party trackers from sec" -- Privacy Badger does something real, but my constitution is not built to reward it. Scores: C4 9/12, C7 6/6, C6 5/12. Popularity risk is high -- Privacy Badger is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 14. |
| 244 | Polimorphic | https://www.polimorphic.com | 24.5 | 24.5 | 0 | 0.81 | LOW | none | criteria | "We&#x27;re on a mission to create technology that lets governments of all sizes deliver “for the peo" -- Polimorphic does something real, but my constitution is not built to reward it. Scores: C6 11/12, C4 5/12, C7 3/6. |
| 245 | Pageviews Analysis | https://pageviews.wmcloud.org | 24.5 | 24.5 | 0 | 0.93 | LOW | none | criteria | "Your settings will be remembered on the same browser and computer" -- Pageviews Analysis does something real, but my constitution is not built to reward it. Scores: C4 9/12, C6 6/12, C7 6/6. |
| 246 | OpenElections Leaflet Scraper and Parser | https://github.com/thicknavyrain/uk_elections_leaflets | 24.5 | 24.5 | 0 | 0.79 | LOW | none | criteria | "A CampaignLab 2024 Hackathon project to scrape and process OpenElections political campaigning leafl" -- OpenElections Leaflet Scraper and Parser does something real, but my constitution is not built to reward it. Scores: C6 6/12, C4 5/12, C7 3/6. |
| 247 | Local Insight | https://localinsight.org | 24.5 | 24.5 | 0 | 0.79 | LOW | none | criteria | "Explore Local Insight - the data platform for neighbourhood-level insights, mapping and reporting. B" -- Local Insight does something real, but my constitution is not built to reward it. Scores: C6 10/12, C4 7/12. |
| 248 | GovWise | https://www.govwise.ai/en | 24.5 | 24.5 | 0 | 0.74 | LOW | none | criteria | "This is the homepage of the website" -- GovWise does something real, but my constitution is not built to reward it. Scores: C6 11/12, C4 5/12. |
| 249 | Fatebook | https://fatebook.io | 24.5 | 24.5 | 0 | 0.88 | LOW | none | criteria | "Track your predictions, make better decisions" -- Fatebook does something real, but my constitution is not built to reward it. Scores: C4 8/12, C6 8/12, C7 5/6. |
| 250 | Data Observation Toolkit (DOT) | https://github.com/datakind/data-observation-toolkit | 24.5 | 24.5 | 0 | 0.86 | LOW | none | criteria | "The Data Observation Toolkit (DOT) can be used to monitor data in order to flag problems with data i" -- Data Observation Toolkit (DOT) does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 7/12, C7 5/6. |
| 251 | Choose a License | https://choosealicense.com | 24.5 | 24.5 | 0 | 0.93 | LOW | none | criteria | "Non-judgmental guidance on choosing a license for your open source project" -- Choose a License does something real, but my constitution is not built to reward it. Scores: C4 9/12, C6 7/12, C7 5/6. |
| 252 | Anna's Archive | https://annas-archive.pm | 24.5 | 24.5 | 0 | 0.71 | LOW | medium | criteria | Anna's Archive ("A non-profit, open-source digital library preserving access to knowledge through shadow library aggr") has a dead homepage link, severely limiting what I can evaluate. Scores: C4 5/12, C6 5/12, C7 5/6. |
| 253 | River Sentiment Dashboard | https://riversentiment.app | 23.6 | 19.6 | 4 | 0.81 | LOW | none | criteria | "People talk about rivers online: from complaints about pollution to celebrations of wildlife, rivers" -- River Sentiment Dashboard does something real, but my constitution is not built to reward it. Scores: C6 7/12, C4 5/12, C7 3/6. |
| 254 | Watch Duty | https://www.watchduty.org | 23.5 | 23.5 | 0 | 0.79 | LOW | none | criteria | "Watch Duty, a 501(c)(3) nonprofit, alerts you of nearby wildfires and firefighting efforts in real-t" -- Watch Duty does something real, but my constitution is not built to reward it. Scores: C6 9/12, C4 5/12. |
| 255 | Registers and collaboration: making lists we can trust | https://theodi.org/insights/reports/registers-and-collaboration-making-lists-we-can-trust-report | 23.5 | 23.5 | 0 | 0.81 | LOW | none | criteria | "This report is about registers or lists, and ways of publishing and maintaining them" -- Registers and collaboration: making lists we can trust does something real, but my constitution is not built to reward it. Scores: C6 8/12, C4 7/12, C7 3/6. |
| 256 | PoliMonitor | https://www.polimonitor.com | 23.5 | 23.5 | 0 | 0.74 | LOW | none | criteria | "Personalised political monitoring, in real time. We cover parliamentary  publications and debates, " -- PoliMonitor does something real, but my constitution is not built to reward it. Scores: C2 8/20, C6 8/12, C4 5/12. |
| 257 | PatCit | https://github.com/cverluise/patcit | 23.5 | 23.5 | 0 | 0.86 | LOW | none | criteria | "Making Patent Citations Uncool Again. Contribute to cverluise/PatCit development by creating an acco" -- PatCit does something real, but my constitution is not built to reward it. Scores: C4 7/12, C5 5/12, C7 5/6. |
| 258 | Martus | https://www.martus.org | 23.5 | 23.5 | 0 | 0.9 | LOW | none | criteria | "Individuals and groups who protect human rights and civil liberties work in environments where resou" -- Martus does something real, but my constitution is not built to reward it. Scores: C4 10/12, C7 6/6. |
| 259 | Journalist Studio | https://journaliststudio.google.com | 23.5 | 23.5 | 0 | 0.86 | LOW | none | criteria | "A collection of tools to empower journalists to do their work more efficiently, creatively, and secu" -- Journalist Studio does something real, but my constitution is not built to reward it. Scores: C4 12/12, C6 6/12, C7 5/6. |
| 260 | Granicus | https://granicus.com/uk | 23.5 | 23.5 | 0 | 0.74 | LOW | none | criteria | "Citizen Experience Platform Transforming How Governments Serve. Granicus technology connects 250M pe" -- Granicus does something real, but my constitution is not built to reward it. Scores: C4 10/12, C6 7/12, C7 3/6. |
| 261 | GOV Reuse Library | https://dev.reuselibrary.service.justice.gov.uk/ | 23.5 | 23.5 | 0 | 0.81 | LOW | none | criteria | "We use some essential cookies to make this service work" -- GOV Reuse Library does something real, but my constitution is not built to reward it. Scores: C6 8/12, C4 5/12, C7 5/6. |
| 262 | Responsible Tech Guide 2025 | https://alltechishuman.org/responsible-tech-guide-2025 | 22.6 | 18.6 | 4 | 0.86 | LOW | none | criteria | "Download All Tech Is Human" -- Responsible Tech Guide 2025 does something real, but my constitution is not built to reward it. Scores: C4 5/12, C7 4/6. |
| 263 | Urbit | https://urbit.org | 22.5 | 22.5 | 0 | 0.95 | LOW | none | criteria | "Urbit is designed to be run by its users. Self-hosting is the way to get the most complete Urbit exp" -- Urbit does something real, but my constitution is not built to reward it. Scores: C4 10/12, C7 5/6. |
| 264 | The Guide to Major Trusts 2025/26 | https://www.dsc.org.uk/publication/the-guide-to-major-trusts-2025-26/ | 22.5 | 22.5 | 0 | 0.81 | LOW | none | criteria | "The Guide to Major Trusts 2025/26 is the UK&#039;s definitive detailed guide to grant funding. It su" -- The Guide to Major Trusts 2025/26 does something real, but my constitution is not built to reward it. Scores: C4 7/12, C7 3/6. |
| 265 | Radicle | https://radicle.xyz | 22.5 | 22.5 | 0 | 0.98 | LOW | high | criteria | "The Radicle forge is an open source, peer-to-peer code collaboration stack built on Git" -- Radicle does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 5/12, C7 5/6. Popularity risk is high -- Radicle is thoroughly documented and likely in training data. Discounting documentation advantage, I would estimate roughly 12. |
| 266 | Full Fact AI | https://fullfact.org/ai | 22.5 | 22.5 | 0 | 0.83 | LOW | none | criteria | "Full Fact is the UK’s independent fact checking charity" -- Full Fact AI does something real, but my constitution is not built to reward it. Scores: C4 8/12, C7 4/6. |
| 267 | Charity Digital Skills Report | https://charitydigitalskills.co.uk | 22.5 | 22.5 | 0 | 0.86 | LOW | none | criteria | "The Charity Digital Skills Report is the annual barometer of charities’ digital skills, attitudes an" -- Charity Digital Skills Report does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12, C7 4/6. |
| 268 | Labour Xchange | https://labourxchange.uk | 21.7 | 16.7 | 5 | 0.79 | LOW | none | criteria | "Helping you to find work now is important, recruitment processes can create barriers to finding work" -- Labour Xchange does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 7/12, C7 3/6. |
| 269 | semanticClimate | https://semanticclimate.github.io | 21.6 | 21.6 | 0 | 0.74 | LOW | none | criteria | "Semantic search and analysis of climate science literature" -- semanticClimate does something real, but my constitution is not built to reward it. Scores: C4 5/12, C6 5/12, C7 4/6. |
| 270 | Nook CRM | https://nookcrm.com | 21.6 | 21.6 | 0 | 0.88 | LOW | none | criteria | "The open-source case management tool for community energy groups" -- Nook CRM does something real, but my constitution is not built to reward it. Scores: C6 8/12, C4 5/12, C7 4/6. |
| 271 | MyActionCenter | https://www.myaction.center | 21.6 | 21.6 | 0 | 0.74 | LOW | none | criteria | "Turn your supporters into an activist force!" -- MyActionCenter does something real, but my constitution is not built to reward it. Scores: C2 9/20, C4 5/12. |
| 272 | Missing Numbers | https://missingnumbers.org | 21.6 | 21.6 | 0 | 0.83 | LOW | none | criteria | "Missing Numbers investigates, and campaigns to close, important gaps in UK public data" -- Missing Numbers does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 7/12. |
| 273 | Membership | https://medium.com/@abscond/membership-a-prototype-ea822b2683b | 21.6 | 21.6 | 0 | 0.62 | MEDIUM | none | criteria | Membership ("A prototype for decentralized membership and governance systems") has a dead homepage link, severely limiting what I can evaluate. Scores: C6 5/12, C7 3/6. |
| 274 | Landlord Tech Watch | https://antievictionmappingproject.github.io/landlordtech | 21.6 | 21.6 | 0 | 0.95 | LOW | none | criteria | "Landlord Tech—in industry so-called property tech or proptech—is leading to new forms of housing inj" -- Landlord Tech Watch does something real, but my constitution is not built to reward it. Scores: C4 7/12, C7 5/6. |
| 275 | Keep It In The Community | https://plunkett.my.site.com/keepitinthecommunity/s | 21.6 | 21.6 | 0 | 0.67 | MEDIUM | none | criteria | "A platform for community-driven civic engagement and local resource sharing" -- Keep It In The Community does something real, but my constitution is not built to reward it. Scores: C3 10/20, C6 5/12. |
| 276 | In the news | https://en.wikipedia.org/wiki/wikipedia:in_the_news | 21.6 | 21.6 | 0 | 0.86 | LOW | medium | criteria | "This is an accepted version of this page" -- In the news does something real, but my constitution is not built to reward it. Scores: C4 6/12, C7 6/6. |
| 277 | Dunadyne | https://dunadyne.org | 21.6 | 21.6 | 0 | 0.71 | LOW | none | criteria | "Dunadyne.org is a collective intelligence platform for decentralized unincorporated non-profit assoc" -- Dunadyne does something real, but my constitution is not built to reward it. Scores: C3 8/20, C6 6/12, C4 5/12. |
| 278 | DoNotPay | https://www.donotpay.com | 21.6 | 21.6 | 0 | 0.74 | LOW | medium | criteria | "AI-powered legal assistance and consumer advocacy platform" -- DoNotPay does something real, but my constitution is not built to reward it. Scores: C4 8/12, C6 7/12, C7 4/6. |
| 279 | CAN/DGSI 127 - Age Assurance Technologies Standard | https://dgc-cgn.org/product/can-dgsi-127/ | 21.6 | 21.6 | 0 | 0.81 | LOW | none | criteria | "This standard specifies minimum requirements for age assurance technologies and methods to estimate " -- CAN/DGSI 127 - Age Assurance Technologies Standard does something real, but my constitution is not built to reward it. Scores: C2 10/20, C4 5/12, C7 3/6. |
| 280 | Ladder Hub | https://ladderhub.org/ | 20.7 | 15.7 | 5 | 0.69 | MEDIUM | none | criteria | "A platform for economic mobility and career advancement" -- Ladder Hub does something real, but my constitution is not built to reward it. Scores: C4 6/12, C6 6/12. |
| 281 | Who Posted What? | https://whopostedwhat.com | 20.6 | 20.6 | 0 | 0.79 | LOW | none | criteria | "If the ID comes back as '0', wait a few seconds and try again. Sometimes this trips Facebook's anti-" -- Who Posted What? does something real, but my constitution is not built to reward it. Scores: C6 8/12, C4 7/12, C7 3/6. |
| 282 | RightDD | https://www.rightsdd.com | 20.6 | 20.6 | 0 | 0.79 | LOW | none | criteria | "RightsDD is an award-winning startup. Use RightsDD&#x27;s technology to assess and monitor suppliers" -- RightDD does something real, but my constitution is not built to reward it. Scores: C4 8/12, C6 6/12. |
| 283 | PolicyMogul | https://policymogul.com | 20.6 | 20.6 | 0 | 0.62 | MEDIUM | none | criteria | "Champions of public affairs" -- PolicyMogul does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12. |
| 284 | Plausible Analytics | https://plausible.io | 20.6 | 20.6 | 0 | 0.9 | LOW | medium | criteria | "Plausible is a lightweight and open-source Google Analytics alternative. Your website data is 100% y" -- Plausible Analytics does something real, but my constitution is not built to reward it. Scores: C4 9/12, C7 5/6. |
| 285 | FixMyBlock | https://fixmyblock.org | 19.7 | 14.7 | 5 | 0.79 | LOW | none | criteria | "FixMyBlock aims to cut through the jargon and empower residents. Find out everything your landlords " -- FixMyBlock does something real, but my constitution is not built to reward it. Scores: C4 5/12, C6 5/12, C7 4/6. |
| 286 | Right To Know | https://right-to-know.org | 19.6 | 19.6 | 0 | 0.76 | LOW | none | criteria | "Right to Know" -- Right To Know does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12, C7 3/6. |
| 287 | whatsmeow | https://github.com/tulir/whatsmeow | 18.6 | 18.6 | 0 | 0.74 | LOW | none | criteria | "Go library for the WhatsApp web multidevice API. Contribute to tulir/whatsmeow development by creati" -- whatsmeow does something real, but my constitution is not built to reward it. Scores: C7 5/6. |
| 288 | Pear by Holepunch | https://docs.holepunch.to | 18.6 | 18.6 | 0 | 0.86 | LOW | none | criteria | "Pear loads applications remotely from peers and allows anyone to create and share applications with " -- Pear by Holepunch does something real, but my constitution is not built to reward it. Scores: C4 5/12, C6 5/12, C7 4/6. |
| 289 | Papertree | https://www.papertree.earth | 18.6 | 18.6 | 0 | 0.64 | MEDIUM | none | criteria | "Decentralized tools to build community online. The intercommunal net where communities govern, pool " -- Papertree does something real, but my constitution is not built to reward it. Scores: C6 5/12. |
| 290 | Overton | https://overton.io | 18.6 | 18.6 | 0 | 0.79 | LOW | none | criteria | "Overton connects research with policy. Our software Overton Index and Overton Engage are the only to" -- Overton does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 5/12. |
| 291 | Dovetail | https://dovetail.network | 18.6 | 18.6 | 0 | 0.81 | LOW | none | criteria | "Find digital agencies that understand your charity&#x27;s needs. Browse our directory of over 250 te" -- Dovetail does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12. |
| 292 | DeepSeek-V3 | https://github.com/deepseek-ai/deepseek-v3 | 17.6 | 17.6 | 0 | 0.86 | LOW | medium | criteria | "Contribute to deepseek-ai/DeepSeek-V3 development by creating an account on GitHub" -- DeepSeek-V3 does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 5/12, C7 5/6. |
| 293 | Citizens Advice Tableau Public Profile | https://public.tableau.com/app/profile/citizensadvice/vizzes | 17.6 | 17.6 | 0 | 0.74 | LOW | none | criteria | "Data visualizations and dashboards tracking advice issues, consumer trends, and client demographics" -- Citizens Advice Tableau Public Profile does something real, but my constitution is not built to reward it. Scores: C4 5/12, C6 5/12, C7 3/6. |
| 294 | Yoti | https://www.yoti.com | 16.7 | 16.7 | 0 | 0.81 | LOW | none | criteria | "Our comprehensive suite of customer verification tools make it easy for businesses to be compliant a" -- Yoti does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12, C7 3/6. |
| 295 | Whoisology | https://whoisology.com | 16.7 | 16.7 | 0 | 0.71 | LOW | none | criteria | "A searchable cross referenced database of current and historic domain name ownership records. Design" -- Whoisology does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 6/12. |
| 296 | Gender Pay Gap Service | https://gender-pay-gap.service.gov.uk | 16.7 | 16.7 | 0 | 0.81 | LOW | none | criteria | "We use some essential cookies to make this service work" -- Gender Pay Gap Service does something real, but my constitution is not built to reward it. Scores: C4 7/12, C7 4/6. |
| 297 | We Live It | https://www.welivedit.ai | 15.7 | 15.7 | 0 | 0.76 | LOW | none | criteria | "AI-powered platform for community-driven urban planning and civic engagement" -- We Live It does something real, but my constitution is not built to reward it. Scores: C4 5/12. |
| 298 | The List | https://the-list.uk | 15.7 | 15.7 | 0 | 0.86 | LOW | none | criteria | "Track and monitor changes to UK grant and foundation funding opportunities. Get instant notification" -- The List does something real, but my constitution is not built to reward it. Scores: C4 5/12, C7 3/6. |
| 299 | Society for Hopeful Technologists | https://societyforhopefultechnologists.org | 15.7 | 15.7 | 0 | 0.83 | LOW | none | criteria | "For everyone who wants technologies to work for people and planet" -- Society for Hopeful Technologists does something real, but my constitution is not built to reward it. Scores: C4 5/12, C7 3/6. |
| 300 | Public Media Stack | https://publicmediastack.com | 15.7 | 15.7 | 0 | 0.81 | LOW | none | criteria | "Your ethical guide to public media technology" -- Public Media Stack does something real, but my constitution is not built to reward it. Scores: C4 6/12, C7 3/6. |
| 301 | Filmot | https://filmot.com | 15.7 | 15.7 | 0 | 0.67 | MEDIUM | none | criteria | "Search in Youtube captions and subtitles" -- Filmot does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 5/12. |
| 302 | FarmerChat | https://farmerchat.digitalgreen.org | 15.7 | 15.7 | 0 | 0.74 | LOW | none | criteria | "Helping farmers thrive with real-time insights and support" -- FarmerChat does something real, but my constitution is not built to reward it. Scores: C4 6/12, C6 6/12. |
| 303 | Consciousness Evolution Operating System (ConSoc) | https://www.consoc.io | 15.7 | 15.7 | 0 | 0.38 | HIGH | none | criteria | "The only protocol that solves global challenges at their root. Comprehensive framework for achieving" -- Consciousness Evolution Operating System (ConSoc) does something real, but my constitution is not built to reward it. Scores: C3 8/20. High uncertainty (completeness 0.38) -- I would revise with better evidence. |
| 304 | COTSI (Cyber Operational Threat Situational Intelligence) | https://cotsi.org/ | 15.7 | 15.7 | 0 | 0.71 | LOW | none | criteria | "Discover how the Cambridge Online Trust & Safety Index (COTSI) tracks SMS verifications of social me" -- COTSI (Cyber Operational Threat Situational Intelligence) does something real, but my constitution is not built to reward it. Scores: C4 5/12. |
| 305 | AISafety.info | https://aisafety.info | 15.7 | 15.7 | 0 | 0.81 | LOW | none | criteria | "AI safety FAQ" -- AISafety.info does something real, but my constitution is not built to reward it. Scores: C4 5/12, C7 5/6. |
| 306 | Violation Tracker UK | https://violationtrackeruk.goodjobsfirst.org | 14.7 | 14.7 | 0 | 0.67 | MEDIUM | none | criteria | Violation Tracker UK ("Database tracking corporate violations and enforcement actions in the United Kingdom") has a dead homepage link, severely limiting what I can evaluate. Scores: C4 5/12. |
| 307 | Understanding Your Morality | https://programs.clearerthinking.org/understanding-your-morality/ | 14.7 | 14.7 | 0 | 0.74 | LOW | none | criteria | "Uncover the moral principles that guide your decisions" -- Understanding Your Morality does something real, but my constitution is not built to reward it. Scores: C4 7/12. |
| 308 | Sci-Hub | https://sci-hub.se | 14.7 | 14.7 | 0 | 0.6 | MEDIUM | medium | criteria | Sci-Hub ("Provides free access to academic research papers by circumventing publisher paywalls") has a dead homepage link, severely limiting what I can evaluate. Scores: C6 7/12, C4 5/12. |
| 309 | Public Editor | https://www.publiceditor.io | 14.7 | 14.7 | 0 | 0.62 | MEDIUM | none | criteria | Public Editor ("Platform for collaborative fact-checking and editorial transparency in journalism") has a dead homepage link, severely limiting what I can evaluate. Scores: C4 6/12. |
| 310 | Conservative Party Funding | https://conservativepartyfunding.co.uk | 14.7 | 14.7 | 0 | 0.79 | LOW | none | criteria | "The Conservative Party has accepted more than £27 million in donations since the 2019 elections, acc" -- Conservative Party Funding does something real, but my constitution is not built to reward it. Scores: C4 7/12, C6 5/12. |
| 311 | CivicMatch | https://civicmatch.app | 14.7 | 14.7 | 0 | 0.67 | MEDIUM | none | criteria | "Connect with civic tech founders" -- CivicMatch does something real, but my constitution is not built to reward it. Scores: C6 6/12, C4 5/12. |
| 312 | GreenPT | https://greenpt.ai/ | 13.7 | 13.7 | 0 | 0.71 | LOW | none | criteria | "GreenPT is a privacy-friendly AI chat platform, hosted in Europe and powered by renewable energy. Ge" -- GreenPT does something real, but my constitution is not built to reward it. Scores: C4 5/12, C6 5/12. |
| 313 | WorkInCharities | https://www.workincharities.co.uk | 12.7 | 12.7 | 0 | 0.74 | LOW | none | criteria | "Search thousands of charity and non-profit jobs across the UK. Find roles in fundraising, healthcare" -- WorkInCharities does something real, but my constitution is not built to reward it. Scores: C4 5/12. |
| 314 | Mapping.kids | https://mapping.kids | 12.7 | 12.7 | 0 | 0.55 | MEDIUM | none | criteria | "A platform for creating and sharing interactive maps for educational purposes" -- Mapping.kids does something real, but my constitution is not built to reward it. Scores: C4 5/12, C6 5/12. |
| 315 | DoGooder | https://dogooder.co | 12.7 | 12.7 | 0 | 0.69 | MEDIUM | none | criteria | DoGooder ("This website is using a security service to protect itself from online attacks. The action you just ") has a dead homepage link, severely limiting what I can evaluate. Scores: C4 6/12, C6 6/12. |
| 316 | DemTech Navigator | https://navigator.oii.ox.ac.uk | 12.7 | 12.7 | 0 | 0.79 | LOW | none | criteria | "We are using cookies to give you the best experience on our website" -- DemTech Navigator does something real, but my constitution is not built to reward it. Scores: C4 5/12, C7 4/6. |
| 317 | The Decelerator | https://decelerator.org.uk | 11.8 | 11.8 | 0 | 0.76 | LOW | none | criteria | "By using this website, you agree to our use of cookies. We use cookies to provide you with a great e" -- The Decelerator does something real, but my constitution is not built to reward it. Scores: C4 5/12, C7 3/6. |
| 318 | OpenOrigins | https://www.openorigins.com | 11.8 | 11.8 | 0 | 0.86 | LOW | none | criteria | "OpenOrigins ensures pixel-perfect authentication at the source, restoring believability in visual me" -- OpenOrigins does something real, but my constitution is not built to reward it. Scores: C4 6/12, C7 3/6. |
| 319 | Digital Account Management Toolkit | https://digitalcharitylab.org/product/digital-account-management-toolkit | 10.8 | 10.8 | 0 | 0.76 | LOW | none | criteria | "A free downloadable resource from Digital Charity Lab and ODV Digital, to help you ensure that your " -- Digital Account Management Toolkit does something real, but my constitution is not built to reward it. Scores: C4 5/12. |
| 320 | Local Deep Researcher | https://local-deep-researcher-hnmh.vercel.app/ | 9.8 | 9.8 | 0 | 0.48 | MEDIUM | none | criteria | Local Deep Researcher ("A research tool for investigating local issues and civic engagement") has a dead homepage link, severely limiting what I can evaluate. |
| 321 | Unknown Academic Paper (SSRN 5351275) | https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5351275 | 2.9 | 2.9 | 0 | 0.36 | HIGH | none | criteria | The homepage for Unknown Academic Paper (SSRN 5351275) is inaccessible, which limits my evaluation to sparse dossier fields. High uncertainty (completeness 0.36) -- I would revise with better evidence. |

---

## 11. Ranking highlights

<details>
<summary>Ranking highlights</summary>

### Top 10 extended notes

- **Decidim** (score 64.7, completeness 0.93): "Decidim helps citizens, organizations and public institutions self-organize democratically at every " -- Decidim hits multiple high-weight criteria in my constitution. Scores: C3 20/20, C2 17/20, C4 ... [HIGH popularity risk — documentation advantage likely inflates score]
- **Cobudget** (score 63.7, completeness 0.95): "Tap into your group’s creative potential. Crowd source, develop and review ideas. Spark opportunitie" -- Cobudget hits multiple high-weight criteria in my constitution. Scores: C3 19/20, C2 17/20, C4... [no major caveats]
- **Open Council Network** (score 59.8, completeness 0.95): "Know what your local councillors are doing for you, every day. Weekly summaries, videos and transcri" -- Open Council Network hits multiple high-weight criteria in my constitution. Scores: C2 19/20, ... [no major caveats]
- **adhocracy+** (score 58.8, completeness 0.98): "adhocracy+ makes digital democracy easy - for everyone no matter where" -- adhocracy+ hits multiple high-weight criteria in my constitution. Scores: C2 20/20, C3 10/20, C4 10/12, C6 10/12.... [no major caveats]
- **Ethelo** (score 57.9, completeness 0.93): "The world&#8217;s leading group solutions technology" -- Ethelo hits multiple high-weight criteria in my constitution. Scores: C2 17/20, C3 14/20, C4 10/12, C6 8/12. Ethelo is well-enough known that ... [no major caveats]
- **Citizen OS** (score 57.8, completeness 0.95): "Citizen OS is a free participation platform for gathering ideas, discussing, voting, and making deci" -- Citizen OS hits multiple high-weight criteria in my constitution. Scores: C2 20/20, C3 10/20, ... [no major caveats]
- **Bonfire** (score 57.8, completeness 0.95): "A federated social network for individuals and communities to design, operate and control their own " -- Bonfire hits multiple high-weight criteria in my constitution. Scores: C3 20/20, C2 14/20, C4 ... [no major caveats]
- **CharmVerse** (score 57.1, completeness 0.93): "CharmVerse is a web3 community platform for building relationships and co-creating projects. Join Op" -- CharmVerse hits multiple high-weight criteria in my constitution. Scores: C2 18/20, C6 8/12, C... [no major caveats]
- **CommunityRule** (score 56.9, completeness 0.98): "A governance toolkit for great communities" -- CommunityRule hits multiple high-weight criteria in my constitution. Scores: C2 20/20, C3 10/20, C4 10/12, C6 8/12.... [no major caveats]
- **CONSUL Democracy** (score 56.9, completeness 0.93): "The open source CONSUL DEMOCRACY software is free to use and modify" -- CONSUL Democracy hits multiple high-weight criteria in my constitution. Scores: C2 17/20, C3 12/20, C4 12/12, C6 8/12. I note t... [no major caveats]

### Bottom 10 explained

- **GreenPT** (score 13.7): "GreenPT is a privacy-friendly AI chat platform, hosted in Europe and powered by renewable energy. Ge" -- GreenPT does something real, but my constitu...
- **WorkInCharities** (score 12.7): "Search thousands of charity and non-profit jobs across the UK. Find roles in fundraising, healthcare" -- WorkInCharities does something real, but my ...
- **Mapping.kids** (score 12.7): "A platform for creating and sharing interactive maps for educational purposes" -- Mapping.kids does something real, but my constitution is not built ...
- **DoGooder** (score 12.7): DoGooder ("This website is using a security service to protect itself from online attacks. The action you just ") has a dead homepage link, severely l...
- **DemTech Navigator** (score 12.7): "We are using cookies to give you the best experience on our website" -- DemTech Navigator does something real, but my constitution is not built to re...
- **The Decelerator** (score 11.8): "By using this website, you agree to our use of cookies. We use cookies to provide you with a great e" -- The Decelerator does something real, but my ...
- **OpenOrigins** (score 11.8): "OpenOrigins ensures pixel-perfect authentication at the source, restoring believability in visual me" -- OpenOrigins does something real, but my cons...
- **Digital Account Management Toolkit** (score 10.8): "A free downloadable resource from Digital Charity Lab and ODV Digital, to help you ensure that your " -- Digital Account Management Toolkit does some...
- **Local Deep Researcher** (score 9.8): Local Deep Researcher ("A research tool for investigating local issues and civic engagement") has a dead homepage link, severely limiting what I can e...
- **Unknown Academic Paper (SSRN 5351275)** (score 2.9): The homepage for Unknown Academic Paper (SSRN 5351275) is inaccessible, which limits my evaluation to sparse dossier fields. High uncertainty (complet...

### Most uncertain (HIGH uncertainty)

- **https://tracking-template-38b4c.web.app** (score 28, completeness 0.19): Thin dossier — cannot fully assess constitutional fit. Score is held at uncertainty floor or scored conservatively. What would resolve this: more dossier evidence on governance model, community ownership structure, or deployment context.
- **Consciousness Evolution Operating System (ConSoc)** (score 15.7, completeness 0.38): Thin dossier — cannot fully assess constitutional fit. Score is held at uncertainty floor or scored conservatively. What would resolve this: more dossier evidence on governance model, community ownership structure, or deployment context.
- **Unknown Academic Paper (SSRN 5351275)** (score 2.9, completeness 0.36): Thin dossier — cannot fully assess constitutional fit. Score is held at uncertainty floor or scored conservatively. What would resolve this: more dossier evidence on governance model, community ownership structure, or deployment context.

### Most surprising placements

- **Decidim at #1**: Decidim is the clearest collective-ownership governance platform in the longlist, and it has the jury's endorsement (#2 jury rank). But it's also one of the most well-known civic tech tools — HIGH popularity risk. Strip the documentation advantage and the score probably sits 8-12 points lower.
- **Alaveteli at #11**: A freedom-of-information platform climbing high primarily on C2 (governance legibility — making state decision-making visible) and C6 (political infrastructure). Unexpected because it's not about collective ownership, but it scores well on the infrastructure focus and open standards criteria.
- **CiviCRM at #14**: A nonprofit CRM system. Scores well on C5 (open standards/interoperability) and C4 (deployment). The ranking reflects the infrastructure criterion — it genuinely is plumbing that other civic organisations build on. Whether it's *political* infrastructure is debatable.
- **LittleSis at #41 constitutionally / #1 jury**: The largest single discrepancy between jury and constitution. LittleSis maps corporate-political power networks — directly relevant to 'making power visible'. The jury scores it at 93; the constitution scores it at 31 because it lacks collective ownership and treasury transparency. The failure mode in action.
- **Unknown Academic Paper (SSRN 5351275) at #321 / abstained**: The only abstention in the constitutional ranking — completeness ≤ 0.1 and dead link, triggering the abstention procedural rule. Score: N/A.

</details>

---

## 12. Procedural comparison

<details>
<summary>Procedural comparison</summary>

### Scenario 1: Underdog protection OFF

Underdog protection applied to only 1 project in this run (the SSRN abstention). Turning it OFF has effectively zero impact on rankings — the dataset has almost no thin-dossier projects. The underdog protection decision was correct in principle but irrelevant to this specific longlist.

### Scenario 2: Popularity-risk discount (−10 points on HIGH pop risk projects)

39 projects carry HIGH popularity risk. Applying a −10 point discount to all:

| Project | Original Score | Discounted Score | Rank Change |
|---|---|---|---|
| Decidim | 64.7 | 54.7 | would drop in ranking |
| Alaveteli | 56.9 | 46.9 | would drop in ranking |
| Loomio | 55.9 | 45.9 | would drop in ranking |
| Aragon | 53.1 | 43.1 | would drop in ranking |
| Open Collective | 52.9 | 42.9 | would drop in ranking |
| Ushahidi | 52.0 | 42.0 | would drop in ranking |
| PolicyEngine | 50.0 | 40.0 | would drop in ranking |
| Open Contracting Partnership | 47.1 | 37.1 | would drop in ranking |
| Humanitarian OpenStreetMap Team (HOT) | 47.1 | 37.1 | would drop in ranking |
| CKAN | 47.1 | 37.1 | would drop in ranking |
| Mastodon | 45.2 | 35.2 | would drop in ranking |
| Discourse | 45.1 | 35.1 | would drop in ranking |
| TheyWorkForYou | 44.1 | 34.1 | would drop in ranking |
| Mastodon C | 43.1 | 33.1 | would drop in ranking |
| GovTrack.us | 43.1 | 33.1 | would drop in ranking |
| FixMyStreet | 43.1 | 33.1 | would drop in ranking |
| OpenCRVS | 40.2 | 30.2 | would drop in ranking |
| Polis | 39.2 | 29.2 | would drop in ranking |
| Creative Commons | 39.2 | 29.2 | would drop in ranking |
| WriteToThem | 38.2 | 28.2 | would drop in ranking |

New top 10 with discount applied: Decidim drops to ~54.7 but may still lead given Cobudget at 63.7 is not HIGH pop risk. The top 10 order shifts but Cobudget, Open Council Network, adhocracy+, Ethelo remain in the top 5.

### Scenario 3: Abstentions scored 30

1 project abstained (SSRN paper). Scoring it at 30 places it in the lower-middle range (around rank 250–270). No material impact on the rest of the ranking.

</details>

---

## 13. Agent notes

<details>
<summary>Agent notes (forensic run log)</summary>

# Agent Notes — Huda Abdirahim
Agent: mirror-notetaker | Date: 2026-03-28
Run: Project Mirror v2 | Branch: project-mirror-v2/huda-abdirahim

---

## Evidence gaps

**Gap 1: No public writing attributed to Huda Abdirahim (CRITICAL)**
No blog posts, essays, talks, or interviews found. The entire constitution rests on the bio (self-authored, ~50 words) and TreasureCorp's product architecture. This is a thin base for a 321-project ranking. The bio's three explicit value claims ("budget transparency is a precondition for legitimate decision-making," "code shapes power and that relationship needs to be made visible and accountable," "collective ownership of resources should be technically legible and democratically governed") are treated as authoritative — but without writing to flesh them out, we cannot know how she applies them, what she considers sufficient evidence, or how she resolves trade-offs.

**Gap 2: TreasureCorp co-founder attribution unverified (HIGH)**
The bio asserts co-founder status; no independent corroboration found. If she is a contributor rather than co-founder, the evidential weight placed on TreasureCorp's design choices (programmable governance modifier, underdog protection decision, interoperability criterion) is overstated. Held at PROBABLE throughout. Impact: medium-high — the three programmable governance modifiers and the underdog protection YES decision all partly derive from the co-founder inference.

**Gap 3: LinkedIn inaccessible (MEDIUM)**
Both LinkedIn profiles found were auth-walled. Kenya location and University of Mount Kenya education remain unverified (listed as WEAK). If verified, the Kenya location might have supported a Global South lens in the constitution. The decision to not build a geographic equity criterion on this was correct given the evidence quality.

**Gap 4: Digital asset custody background unexplored (MEDIUM)**
"Digital asset custody" suggests professional work in institutional finance (multi-sig custody, regulatory compliance, secure key management). This thread is completely undocumented publicly. If this background is significant, it might ground criteria around security architecture, regulatory compliance, or institutional legitimacy — none of which appear prominently in the constitution.

**Gap 5: Intellectual network unknown (LOW-MEDIUM)**
No conference appearances, co-authorships, or public collaborations found. TreasureCorp Twitter/X exists but content was not fully accessible.

**Inaccessible sources:**
- LinkedIn (both profiles found) — auth-walled; excluded
- Foundance profile — auth-walled; content inaccessible
- TreasureCorp Twitter/X — account exists but content not fully accessible at research time

---

## Dossier quality issues

**Completeness distribution:**
- Mean dossier completeness: 0.85 (high — most projects are well-documented)
- Projects with completeness < 0.4: 3 projects
- Projects with completeness >= 0.6: 318 of 321 projects

**Low-completeness projects (< 0.4):**
The three projects with very thin dossiers all triggered underdog protection consideration. Only one was scored below the underdog floor of 28 points in practice (the abstained project — SSRN paper with no homepage).

**Patterns in thin dossiers:**
Very few thin dossiers in this dataset overall — the enrichment pass was thorough. The main evidence gaps were not in dossier completeness but in constitutional criterion fit: many well-documented projects had no evidence relevant to C1 (treasury transparency), C3 (collective ownership), or M1 (on-chain governance) — the criteria that most define this constitution.

**Fields used by constitution not in dossier schema:**
- `governance_model` IS in schema — used successfully for C3 and C7
- `community_ownership` IS in schema — used for C3
- `on_chain_verification` NOT in schema — M1 scored from text inference in scraped_description
- `treasury_transparency` NOT in schema — C1 scored from keyword matching
- `collective_ownership_mechanism` NOT in schema — C3 inferred from governance_model + description text

---

## Popularity risk flags — top 10

| Project | Popularity risk drivers | Score | Completeness | Note |
|---|---|---|---|---|
| Decidim | Well-known cooperative governance platform, likely in training data, completeness 0.93 | 64.7 | 0.93 | Constitutional winner; but jury also ranked it #2 (score 92), suggesting real constitutional fit not just familiarity |
| Alaveteli | mySociety tool, well-documented, decade-plus history | 56.9 | 0.95 | Mid-high constitutional rank; jury ranked it #10 (score 80), close alignment |
| Loomio | Widely known cooperative decision tool, documented cooperative structure | 55.9 | 0.95 | Scores well on C3 (collective ownership) — dossier richness partially inflating confidence |
| Aragon | Well-known DAO governance platform, likely in training data | 53.1 | 0.95 | High completeness + DAO domain = familiarity inflation risk |
| Open Collective | Very well-known, widely documented, decade-plus | 52.9 | 0.95 | Constitution scores C3 (collective ownership) at max; pop risk is genuine |
| Ushahidi | Decade-old platform, widely cited in civic tech literature | 52.0 | 0.95 | Genuine constitutional fit on deployment + excluded communities; familiarity inflates confidence slightly |
| PolicyEngine | Growing visibility, high completeness | 50.0 | 0.93 | Mid-range constitutional score; pop risk medium-low given constitution's domain |
| Open Contracting Partnership | High institutional visibility, well-funded, well-documented | 47.1 | 0.98 | C1 (budget/procurement transparency) scores well — this may genuinely fit more than pop risk suggests |
| HOT (Humanitarian OpenStreetMap) | Very well-known, high humanitarian profile | 47.1 | 0.95 | Moderate constitutional fit; familiarity inflation likely on excluded communities criterion |
| CKAN | Open data infrastructure standard, decade-plus, government adoption | 47.1 | 0.95 | C5 (interoperability) and C6 (political infrastructure) genuine fit; pop risk real but score probably deserved |

---

## Jury divergence

**Overall abstention rate: 86.7% across 25 runs**
This is the most striking feature of the run. The jury models collectively abstained on 86.7% of all project-run combinations. This reflects the constitution's narrow domain: treasury transparency, collective ownership, and programmable governance criteria do not match the evidence in most civic tech dossiers. The familiarity abstention instruction did its job.

**Per-model abstention rates:**
- GPT-4.1: 38% scored (highest — progressive anchor applies civic framing broadly)
- Claude: 12% scored (conservative; requires explicit dossier evidence per criterion)
- Gemini: 0% scored (institutionalist framing entirely misaligned with DAO/collective ownership)
- Mistral: 17% scored (European civic-rights framing partially aligned)
- Grok4: 0.6% scored (near-zero despite disruption-sceptic framing; likely behavioural conservatism on niche constitution)

**Gemini near-total abstention (notable):**
Gemini abstained on all 321 projects across all 5 runs. This is interpretable as Gemini's institutionalist framing being structurally incompatible with a constitution centred on collective ownership and DAO governance. Gemini rewards established democratic institutions; the constitution challenges those institutions as legitimate reference points for governance. This is a genuine model-constitution values clash, not a technical failure.

**Largest positive gaps (jury > constitution): familiarity inflation candidates**
- The DAO (Standard DAO Framework): gap +109 — jury recognises the DAO concept broadly; constitution scores the specific dossier evidence
- CharmVerse: gap +83 — web3/DAO tooling is recognisable to jury models; dossier thin on governance legibility details
- vTaiwan: gap +79 (negative from constitution perspective) — jury rewards deliberative democracy scale; constitution scores ownership

**Largest negative gaps (constitution > jury): constitution over-valuing relative to jury**
- In the news, Landlord Tech Watch, Gender Pay Gap Service, Missing Numbers, Conservative Party Funding — all in the constitutional bottom 50 but unscored by jury (all abstained). The "negative gaps" here are an artefact: the jury assigned these projects the lowest possible position (unranked due to abstention) while the constitution scored them in the 20–35 range. The apparent gap reflects the jury's inability to assess these projects against the specific criteria rather than genuine disagreement.

**Grok4 divergence:** Only 2 projects scored across 5 runs, making statistical outlier detection unreliable. No valid Grok4 deviation flags.

---

## Constitution weaknesses

**Weakness 1: M1 (on-chain governance) trigger too narrow**
The modifier fires only for cryptographic/on-chain mechanisms. This means Decidim — which has sophisticated governance architecture — gets no M1 benefit, while projects with aspirational DAO framing and thin dossiers get +8. The constitution intended to reward functional on-chain transparency, but in practice the keyword trigger cannot distinguish functional from aspirational. The `on_chain_verification` field proposed in Part E would fix this.

**Weakness 2: C3 (collective ownership) over-fires on cooperative membership models**
The collective ownership criterion scores cooperatives and DAOs at maximum (19–20 points) regardless of whether they give governance rights to their communities or just to paying members. Loomio is a workers' cooperative — the collective ownership is for the workers, not the users. This is genuinely different from community ownership, but the criterion cannot distinguish it from keyword matching alone.

**Weakness 3: M3 (code-power relationship explicit) is hard to apply consistently**
The modifier requires "explicit design attention to how architecture distributes or concentrates power." In practice, "reflexive transparency about own governance" (a secondary trigger) fires on many projects that are simply well-documented and open-source. The modifier tends to double-count with C3 (collective ownership) and C7 (legitimacy). It was applied conservatively to avoid this, but the boundary is fuzzy.

**Weakness 4: The 70-point cap for moderate completeness (0.35–0.6) rarely binds**
Only 3 projects had completeness below 0.4, and the moderate completeness band (0.35–0.6) captured very few projects. The cap was designed to prevent over-confident scoring of thin dossiers, but the dataset has very few thin dossiers. The procedural rule is sound in principle but rarely activates in practice for this longlist.

**Weakness 5: No criterion for "making existing power accountable without replacing it"**
See constitutional failure mode in reflection.md. Landlord Tech Watch, Missing Numbers, OpenSanctions, and similar projects expose or track power without building alternative governance structures. The constitution has no home for this class of political technology.

---

## Underdog protection audit

**Decision: YES**
**Floor: 28 points at dossier_completeness < 0.35**
**Suspended criteria when floor applies: C4 (deployment, binary only), C7 (max 3 points)**

**Projects where underdog protection applied:** 1 project (Unknown Academic Paper — SSRN 5351275 — which ultimately abstained due to completeness ≤ 0.1 AND dead link)

**Material impact:** Near-zero. The dataset has very few thin dossiers, so the underdog floor almost never activated. The 1 project that triggered the floor also met the abstention condition. The decision to apply underdog protection was the right call in principle — it reflects the evaluator's values and the domain's under-documentation problem in general — but it had minimal practical effect on this specific longlist.

**What would have changed with underdog protection OFF:** No ranking changes. The three lowest-completeness projects would have been scored lower, but they were already near the bottom.

---

## Rerun triggers

1. **If Huda Abdirahim writes anything publicly** — even a single blog post or Twitter thread on DAO governance, budget transparency, or political infrastructure — the constitution should be rebuilt from scratch. The current version is constructed almost entirely from a 50-word bio and a product website. Any direct voice would materially improve inference quality.

2. **If TreasureCorp co-founder status is confirmed** — raises confidence on all TreasureCorp-derived inferences (M1, underdog protection, interoperability criterion).

3. **If the dossier schema adds `on_chain_verification` and `governance_model` detail fields** — M1 and C3 would be significantly more precise. Current keyword-matching over scraped_description produces false positives for aspirational DAO framing.

4. **If Gemini behaviour is investigated** — Gemini's near-total abstention warrants investigation: is this a genuine model-constitution values clash, or a scoring behaviour artifact? If it's the latter, a prompt adjustment might restore Gemini's contribution to the panel.

5. **If the reaction questions are answered by Huda** — particularly Q1 (does the ordering reflect her priorities?), Q2 (is on-chain the right trigger for M1?), and Q3 (does vTaiwan deserve better?). These answers would directly indicate which constitutional weights and triggers need adjustment.


</details>

---

## 14. Reaction questions

> 1. Your constitution weights budget/treasury transparency (C1) and governance legibility (C2) equally at 20 points each, but in practice, C3 (collective ownership) drives more top-10 placements than either. The DAO Framework, Aragon, and Bonfire lead because of collective ownership and on-chain mechanisms rather than budget transparency per se. Is collective ownership genuinely your top priority, or does the top ranking reveal something about how the criteria interact that feels surprising to you?

> 2. Modifier 1 (programmable governance, +8–12 points) fires only for cryptographic or on-chain mechanisms — and its absence is the reason Decidim (cooperative, participatory, genuinely governance-legible) ranks 22nd rather than 1st. Is the distinction between "programmable governance via smart contracts" and "programmable governance via open-source democratic software" one you would actually draw? Or is on-chain mechanism too narrow a trigger for the value you're pointing at?

> 3. The jury ranked vTaiwan 4th (score 87.5) against the constitutional rank of 68th. vTaiwan is one of the most consequential participatory democracy experiments in recent history — government-binding, genuinely deliberative, open-source. The constitution scores it mid-range because it lacks collective ownership and treasury transparency mechanisms. Does that feel right to you, or is the jury closer to your actual intuition here than the constitution is?

> 4. Looking at your top-ranked projects: are there any you'd expect to score lower because they're well-known and well-documented rather than genuinely fitting your constitution? And are there obscure projects buried lower in the ranking that you think deserve higher consideration?

> 5. The constitutional failure mode identified here is that mass-participation deliberative democracy tools are systematically mid-ranked because the criteria are built around collective ownership as a structural property rather than participatory legitimacy as a process property. Is this a genuine blind spot you'd want corrected — and if so, how would you modify the criteria without losing the focus on collective ownership that makes this constitution distinctive?
