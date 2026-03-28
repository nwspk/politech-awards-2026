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

The jury consists of four language models (Gemini excluded — see below), each running five
independent evaluations (20 runs total). Median aggregation is used to reduce outlier influence.
Each model receives the full evaluative constitution and a familiarity abstention instruction:
abstain if dossier evidence is insufficient to assess the specific criteria.

**Panel change:** gpt41-run-5 was identified as simulated in the prior aggregation. It has been
replaced with a fresh real API call via OpenRouter (293 scored, 28 abstained). Gemini (google/gemini-2.5-pro-preview)
abstained on all 321 projects across all 5 runs — its institutionalist framing is structurally
incompatible with a constitution centred on DAO/collective ownership. Gemini is excluded from
this aggregation. Effective panel: 4 models × 5 runs = 20 jury logs.

**Abstention rate (4-model panel):** 55.5% (3560/6415 project-run combinations)
**Projects with any jury score:** 302/321
**Projects where all 4 models abstained:** 19/321

**Panel:**

| # | Model | Role | Political tendency | Avg scored | Key bias to watch |
|---|---|---|---|---|---|
| 1 | GPT-4.1 (OpenAI) | Progressive anchor | Left-progressive; rewards participatory/justice civic tech | 293/321 (91%) | — |
| 2 | Claude Opus 4 (Anthropic) | Centrist proceduralist | Rights-based UN UDHR framing; evaluates process quality over ideology | 71/321 (22%) | — |
| 3 | Mistral Large (Mistral AI) | European civic-rights / open-source | GDPR-aware, data-sovereignty conscious | 200/321 (62%) | — |
| 4 | Grok 4 (xAI) | Disruption-sceptic / right-adjacent outlier | Bimodal scoring; documented xAI system prompt manipulation | 7/321 (2%) | — |
| — | Gemini 2.5 Pro (Google) | Institutionalist | Western-mainstream institutionalist | **EXCLUDED** (0/321) | Near-total abstention — institutionalist framing incompatible with DAO/collective ownership constitution |

> **JuryConstGap** is the difference between a project's jury rank and its constitutional rank.
> Positive gap = jury ranked higher (potential familiarity inflation). Negative gap = jury ranked lower.
> Gaps > 20 ranks are flagged. Large apparent negative gaps for N/A-scored projects reflect abstention,
> not genuine disagreement.

> **Pop Risk** flags well-known projects where scores may reflect documentation advantage.

**Top 25 jury-scored projects (4-model panel):**

| Jury Rank | Project | Jury Score | Const Score | Const-Jury Gap | Pop Risk |
|---|---|---|---|---|---|
| 1 | Decidim | 92.0 | 57.8 | -21 ⚑ | HIGH |
| 2 | CONSUL Democracy | 88.0 | 56.9 | -21 ⚑ | MEDIUM |
| 3 | Open Contracting Partnership | 87.0 | 52.0 | -48 ⚑ | HIGH |
| 4 | vTaiwan | 87.0 | 50.0 | -64 ⚑ | MEDIUM |
| 5 | Open Collective | 85.0 | 60.9 | -11 | MEDIUM |
| 6 | Open Council Network | 85.0 | 55.9 | -24 ⚑ | LOW |
| 7 | Parti | 85.0 | 52.0 | -42 ⚑ | MEDIUM |
| 8 | Turkopticon | 84.5 | 51.1 | -47 ⚑ | MEDIUM |
| 9 | meet.coop | 84.5 | 43.0 | -120 ⚑ | LOW |
| 10 | LittleSis | 84.0 | 55.0 | -22 ⚑ | MEDIUM |
| 11 | CoTech | 84.0 | 50.0 | -55 ⚑ | MEDIUM |
| 12 | Riseup | 83.0 | 32.4 | -231 ⚑ | MEDIUM |
| 13 | LiquidFeedback | 82.5 | 65.8 | +8 | MEDIUM |
| 14 | OpenProcurement | 82.5 | 50.0 | -56 ⚑ | MEDIUM |
| 15 | Bonfire | 82.0 | 65.8 | +11 | LOW |
| 16 | mySociety Datasets and APIs | 82.0 | 62.7 | +3 | HIGH |
| 17 | Relational Tech Project | 82.0 | 43.1 | -109 ⚑ | NONE |
| 18 | Polis | 81.0 | 64.7 | +9 | HIGH |
| 19 | Loomio | 80.5 | 62.7 | +5 | MEDIUM |
| 20 | Rahvaalgatus | 80.5 | 52.0 | -28 ⚑ | MEDIUM |
| 21 | Mastodon | 80.0 | 52.1 | -25 ⚑ | HIGH |
| 22 | Ushahidi | 80.0 | 52.0 | -30 ⚑ | MEDIUM |
| 23 | HURIDOCS | 79.0 | 56.9 | -1 | MEDIUM |
| 24 | TheyWorkForYou | 79.0 | 47.1 | -68 ⚑ | HIGH |
| 25 | GlobaLeaks | 79.0 | 37.3 | -176 ⚑ | MEDIUM |

**Full jury vote table — all 321 projects:**

| Jury Rank | Project | Jury Score | Const Score | JuryConstGap | Pop Risk |
|---|---|---|---|---|---|
| 52 | Aragon | 72.0 | 70.7 | +51 ⚑ | LOW |
| 260 | The DAO (Standard DAO Framework) | 38.0 | 68.0 | +258 ⚑ | MEDIUM |
| 77 | Ethelo | 68.0 | 67.9 | +74 ⚑ | MEDIUM |
| 15 | Bonfire | 82.0 | 65.8 | +11 | LOW |
| 13 | LiquidFeedback | 82.5 | 65.8 | +8 | MEDIUM |
| 53 | Tech Coops List | 72.0 | 65.8 | +47 ⚑ | MEDIUM |
| 60 | Open Heart Mind (OHM) | 71.0 | 65.7 | +53 ⚑ | LOW |
| 36 | Cobudget | 76.0 | 64.7 | +28 ⚑ | HIGH |
| 18 | Polis | 81.0 | 64.7 | +9 | HIGH |
| 122 | Populate Tools | 61.0 | 64.7 | +112 ⚑ | MEDIUM |
| 102 | Open Standards for Data Guidebook | 63.0 | 64.7 | +91 ⚑ | LOW |
| 45 | Murmurations Protocol | 74.0 | 62.8 | +33 ⚑ | LOW |
| 16 | mySociety Datasets and APIs | 82.0 | 62.7 | +3 | HIGH |
| 19 | Loomio | 80.5 | 62.7 | +5 | MEDIUM |
| 46 | Matrix | 74.0 | 60.9 | +31 ⚑ | MEDIUM |
| 5 | Open Collective | 85.0 | 60.9 | -11 | MEDIUM |
| 92 | dDocs | 65.0 | 59.9 | +75 ⚑ | NONE |
| 96 | Logos | 64.0 | 59.0 | +78 ⚑ | LOW |
| 175 | CharmVerse | 52.0 | 58.9 | +156 ⚑ | LOW |
| 114 | RxC Voice | 62.5 | 58.9 | +94 ⚑ | LOW |
| 103 | Interoperable Deliberative Tools | 63.0 | 58.8 | +82 ⚑ | LOW |
| 1 | Decidim | 92.0 | 57.8 | -21 ⚑ | HIGH |
| 2 | CONSUL Democracy | 88.0 | 56.9 | -21 ⚑ | MEDIUM |
| 23 | HURIDOCS | 79.0 | 56.9 | -1 | MEDIUM |
| 78 | Mozilla Data Collective | 68.0 | 56.1 | +53 ⚑ | LOW |
| 123 | Nym | 61.0 | 56.0 | +97 ⚑ | LOW |
| 26 | Alaveteli | 78.0 | 55.9 | -1 | HIGH |
| 37 | Citizen OS | 76.0 | 55.9 | +9 | MEDIUM |
| 64 | NumFOCUS | 70.0 | 55.9 | +35 ⚑ | MEDIUM |
| 6 | Open Council Network | 85.0 | 55.9 | -24 ⚑ | LOW |
| 176 | ClimateAction.Tech | 52.0 | 55.1 | +145 ⚑ | LOW |
| 10 | LittleSis | 84.0 | 55.0 | -22 ⚑ | MEDIUM |
| 34 | Your Priorities | 76.5 | 54.9 | +1 | MEDIUM |
| 27 | Snowdrift.coop | 78.0 | 54.0 | -7 | MEDIUM |
| 76 | adhocracy+ | 68.5 | 53.9 | +41 ⚑ | LOW |
| 79 | CiviCRM | 68.0 | 53.9 | +43 ⚑ | HIGH |
| 38 | Fairbnb.coop | 76.0 | 53.9 | +1 | LOW |
| 31 | Open Supply Hub | 77.0 | 53.9 | -7 | MEDIUM |
| 93 | Pursuance Project | 65.0 | 53.9 | +54 ⚑ | MEDIUM |
| 32 | Talk to the City | 77.0 | 53.9 | -8 | LOW |
| 94 | ОПОРА (Opora) | 65.0 | 53.0 | +53 ⚑ | MEDIUM |
| 39 | CommunityRule | 76.0 | 52.9 | -3 | MEDIUM |
| 104 | PlaceCal | 63.0 | 52.9 | +61 ⚑ | MEDIUM |
| 51 | Political Advertising Transparency Data Stand | 72.5 | 52.9 | +7 | LOW |
| 134 | OpenSanctions | 57.0 | 52.9 | +89 ⚑ | LOW |
| 21 | Mastodon | 80.0 | 52.1 | -25 ⚑ | HIGH |
| 80 | Creative Commons | 68.0 | 52.0 | +33 ⚑ | HIGH |
| 20 | Rahvaalgatus | 80.5 | 52.0 | -28 ⚑ | MEDIUM |
| 7 | Parti | 85.0 | 52.0 | -42 ⚑ | MEDIUM |
| 33 | Humanitarian OpenStreetMap Team (HOT) | 77.0 | 52.0 | -17 | HIGH |
| 3 | Open Contracting Partnership | 87.0 | 52.0 | -48 ⚑ | HIGH |
| 22 | Ushahidi | 80.0 | 52.0 | -30 ⚑ | MEDIUM |
| 189 | DAO Governance Surfaces | 50.0 | 51.2 | +136 ⚑ | LOW |
| 125 | Tactical Data Engagement | 60.0 | 51.1 | +71 ⚑ | MEDIUM |
| 8 | Turkopticon | 84.5 | 51.1 | -47 ⚑ | MEDIUM |
| 95 | Papertree | 65.0 | 51.1 | +39 ⚑ | NONE |
| 97 | Constitute Project | 64.0 | 51.0 | +40 ⚑ | MEDIUM |
| 140 | Cybersecurity for Democracy | 56.0 | 51.0 | +82 ⚑ | LOW |
| 49 | Participa (Podemos) | 73.0 | 51.0 | -10 | MEDIUM |
| 65 | Stanford Participatory Budgeting Platform | 70.0 | 51.0 | +5 | MEDIUM |
| 54 | One Project | 72.0 | 51.0 | -7 | LOW |
| 85 | Open Digital Planning | 67.5 | 51.0 | +23 ⚑ | LOW |
| 218 | Awesome UK Government Datasets | 46.0 | 50.1 | +155 ⚑ | LOW |
| 66 | All Our Ideas | 70.0 | 50.0 | +2 | MEDIUM |
| 28 | Fundación Ciudadanía Inteligente | 78.0 | 50.0 | -37 ⚑ | MEDIUM |
| 11 | CoTech | 84.0 | 50.0 | -55 ⚑ | MEDIUM |
| 40 | Democracy Club Developer API | 76.0 | 50.0 | -27 ⚑ | MEDIUM |
| 4 | vTaiwan | 87.0 | 50.0 | -64 ⚑ | MEDIUM |
| 156 | UK Housing Data Standards | 54.0 | 50.0 | +87 ⚑ | LOW |
| 14 | OpenProcurement | 82.5 | 50.0 | -56 ⚑ | MEDIUM |
| 63 | Principles for Public Participation in Procur | 70.5 | 50.0 | -8 | LOW |
| 81 | Participedia | 68.0 | 50.0 | +9 | MEDIUM |
| 67 | GovTrack.us | 70.0 | 50.0 | -6 | MEDIUM |
| 152 | Bluesky Social | 55.0 | 49.1 | +78 ⚑ | HIGH |
| 89 | Activist Handbook | 66.0 | 49.0 | +14 | LOW |
| 194 | Kialo | 49.0 | 49.0 | +118 ⚑ | MEDIUM |
| 224 | Manifold Markets | 45.0 | 49.0 | +147 ⚑ | LOW |
| 115 | New_ Public Roundabout | 62.0 | 49.0 | +37 ⚑ | LOW |
| 42 | PolicyEngine | 75.0 | 49.0 | -37 ⚑ | LOW |
| 82 | Internet Archive Wayback Machine | 68.0 | 49.0 | +2 | MEDIUM |
| 261 | Agencies for Good | 38.0 | 49.0 | +180 ⚑ | LOW |
| N/A | Democracy Fund Open Source | N/A | 49.0 | N/A | MEDIUM |
| 87 | Organise | 66.5 | 49.0 | +4 | MEDIUM |
| 105 | ODK (Open Data Kit) | 63.0 | 48.0 | +21 ⚑ | MEDIUM |
| 61 | Groupthink (OpenPolitics Votebot) | 71.0 | 48.0 | -24 ⚑ | MEDIUM |
| 90 | Land Explorer | 66.0 | 48.0 | +4 | LOW |
| 83 | openparliament.ca | 68.0 | 48.0 | -4 | MEDIUM |
| 106 | RxC Quadratic Voting | 63.0 | 48.0 | +18 | HIGH |
| 98 | Framework for Meaningful Engagement 2.0 | 64.0 | 47.3 | +9 | LOW |
| 157 | Wikum | 54.0 | 47.1 | +67 ⚑ | LOW |
| 68 | FixMyStreet | 70.0 | 47.1 | -23 ⚑ | HIGH |
| 24 | TheyWorkForYou | 79.0 | 47.1 | -68 ⚑ | HIGH |
| 135 | AlgorithmWatch | 57.0 | 47.0 | +42 ⚑ | LOW |
| 278 | Kagi SlopStop | 35.0 | 46.2 | +184 ⚑ | LOW |
| 249 | Modular Politics | 40.0 | 46.1 | +154 ⚑ | HIGH |
| 219 | postcodes.io | 46.0 | 46.1 | +123 ⚑ | MEDIUM |
| 107 | Guardian Project | 63.0 | 46.1 | +10 | MEDIUM |
| 41 | Campaign Tracker | 76.0 | 46.1 | -57 ⚑ | MEDIUM |
| 177 | Mastodon C | 52.0 | 46.1 | +78 ⚑ | HIGH |
| 35 | Open Ownership | 76.5 | 46.1 | -65 ⚑ | MEDIUM |
| 158 | Discourse | 54.0 | 46.0 | +57 ⚑ | MEDIUM |
| 262 | Nestr | 38.0 | 45.3 | +160 ⚑ | LOW |
| 235 | Urbit | 43.0 | 45.2 | +132 ⚑ | LOW |
| 72 | sourceAFRICA | 69.0 | 45.1 | -32 ⚑ | MEDIUM |
| N/A | Membership | N/A | 45.0 | N/A | NONE |
| 88 | Abstract Wikipedia | 66.5 | 45.0 | -18 | HIGH |
| 116 | PlanIT | 62.0 | 45.0 | +9 | MEDIUM |
| 55 | PolicyKit | 72.0 | 45.0 | -53 ⚑ | LOW |
| 178 | Community Notes (Birdwatch) Analysis Tool | 52.0 | 44.2 | +69 ⚑ | LOW |
| 47 | CKAN | 74.0 | 44.1 | -63 ⚑ | HIGH |
| 126 | docs.plus | 60.0 | 44.1 | +15 | LOW |
| 159 | EDGAR | 54.0 | 44.1 | +47 ⚑ | HIGH |
| 128 | MapIt | 59.0 | 44.1 | +15 | HIGH |
| 127 | Open Data Editor (ODE) | 60.0 | 44.1 | +13 | LOW |
| 169 | Open Data Communities | 53.0 | 44.1 | +54 ⚑ | MEDIUM |
| 101 | SecureDrop | 63.5 | 44.1 | -15 | MEDIUM |
| 185 | Spartacus | 51.0 | 44.1 | +68 ⚑ | LOW |
| 136 | WriteToThem | 57.0 | 44.1 | +18 | MEDIUM |
| 200 | Anna's Archive | 48.0 | 43.2 | +81 ⚑ | NONE |
| 167 | Humble Data Workshop | 53.5 | 43.2 | +47 ⚑ | LOW |
| 124 | Spacetube | 61.0 | 43.2 | +3 | LOW |
| 131 | Aleph (OCCRP) | 58.0 | 43.1 | +9 | HIGH |
| 226 | Civic Tech Field Guide | 44.0 | 43.1 | +103 ⚑ | MEDIUM |
| 48 | Open Referral UK | 73.5 | 43.1 | -76 ⚑ | MEDIUM |
| 160 | Open Science Framework | 54.0 | 43.1 | +35 ⚑ | MEDIUM |
| 17 | Relational Tech Project | 82.0 | 43.1 | -109 ⚑ | NONE |
| 29 | Tracka | 78.0 | 43.1 | -98 ⚑ | MEDIUM |
| 179 | CrowdJustice | 52.0 | 43.0 | +51 ⚑ | MEDIUM |
| 9 | meet.coop | 84.5 | 43.0 | -120 ⚑ | LOW |
| 195 | MP Watch | 49.0 | 42.3 | +65 ⚑ | LOW |
| 108 | CivicPress | 63.0 | 42.2 | -23 ⚑ | LOW |
| 201 | Collaborative Data Patterns | 48.0 | 42.2 | +69 ⚑ | LOW |
| 161 | The Commons Social Change Library | 54.0 | 42.2 | +28 ⚑ | MEDIUM |
| 150 | The Engine Room Library | 55.5 | 42.2 | +16 | MEDIUM |
| 84 | Members' Interests | 68.0 | 42.2 | -51 ⚑ | MEDIUM |
| 180 | Open Council Data UK | 52.0 | 42.2 | +44 ⚑ | MEDIUM |
| 44 | Strike Map | 74.5 | 42.2 | -93 ⚑ | LOW |
| N/A | Give Food | N/A | 42.2 | N/A | MEDIUM |
| 141 | Neighbourhood Warmth | 56.0 | 42.2 | +2 | HIGH |
| 69 | OpenCRVS | 70.0 | 42.2 | -71 ⚑ | LOW |
| 56 | Landlord Tech Watch | 72.0 | 41.2 | -85 ⚑ | LOW |
| 142 | Bellingcat Online Investigation Toolkit | 56.0 | 41.2 | 0 | HIGH |
| 143 | Coral | 56.0 | 41.2 | 0 | MEDIUM |
| 181 | Cortico | 52.0 | 41.2 | +37 ⚑ | LOW |
| 263 | Fatebook | 38.0 | 41.2 | +118 ⚑ | LOW |
| 264 | UK Policy Dojo | 38.0 | 41.2 | +118 ⚑ | LOW |
| 137 | Sugartrail | 57.0 | 41.2 | -10 | LOW |
| 73 | GrantNav | 69.0 | 41.2 | -75 ⚑ | MEDIUM |
| 202 | Harmonica | 48.0 | 41.2 | +53 ⚑ | LOW |
| 162 | Idealist | 54.0 | 41.2 | +12 | MEDIUM |
| 121 | Parliament Watch Uganda | 61.5 | 41.2 | -30 ⚑ | MEDIUM |
| 144 | Shareyourpaper.org | 56.0 | 41.2 | -8 | LOW |
| 57 | The Government Says | 72.0 | 41.2 | -96 ⚑ | MEDIUM |
| 62 | Community Tech | 71.0 | 41.2 | -92 ⚑ | LOW |
| 203 | Deliberation & Technology (DelibTech) Network | 48.0 | 41.2 | +48 ⚑ | LOW |
| 243 | MP Twitter Bios | 41.0 | 41.2 | +87 ⚑ | LOW |
| 227 | oTree | 44.0 | 41.2 | +70 ⚑ | MEDIUM |
| 74 | ShineYourEye | 69.0 | 41.2 | -84 ⚑ | LOW |
| 43 | Wikidata | 75.0 | 41.2 | -116 ⚑ | MEDIUM |
| 238 | Metaculus | 42.0 | 41.1 | +78 ⚑ | MEDIUM |
| N/A | Fission Codes | N/A | 40.4 | N/A | LOW |
| 190 | arXiv | 50.0 | 40.2 | +28 ⚑ | HIGH |
| 163 | Channel.org | 54.0 | 40.2 | 0 | LOW |
| 153 | Contracts for Data Collaboration | 55.0 | 40.2 | -11 | LOW |
| 164 | Consent-O-Matic | 54.0 | 40.2 | -1 | LOW |
| 154 | Journal of Open Source Software | 55.0 | 40.2 | -12 | MEDIUM |
| 132 | Mapped | 58.0 | 40.2 | -35 ⚑ | LOW |
| 91 | OA.Works | 66.0 | 40.2 | -77 ⚑ | MEDIUM |
| 58 | OpenBudgets.eu | 72.0 | 40.2 | -111 ⚑ | MEDIUM |
| 239 | OSINT Framework | 42.0 | 40.2 | +69 ⚑ | MEDIUM |
| 170 | Vote for Policies | 53.0 | 40.2 | -1 | MEDIUM |
| 171 | OpenElections Leaflet Scraper and Parser | 53.0 | 39.3 | -1 | LOW |
| 240 | django-collaborative | 42.0 | 39.2 | +67 ⚑ | MEDIUM |
| N/A | Hand-Written Petition Scanner | N/A | 39.2 | N/A | NONE |
| 99 | WhatGov | 64.0 | 39.2 | -76 ⚑ | MEDIUM |
| 109 | Local Intelligence Hub | 63.0 | 39.1 | -67 ⚑ | LOW |
| 228 | Choose a License | 44.0 | 38.2 | +51 ⚑ | MEDIUM |
| 220 | DISARM Frameworks | 46.0 | 38.2 | +42 ⚑ | LOW |
| 221 | Frankenstein Bill | 46.0 | 38.2 | +42 ⚑ | LOW |
| 279 | Theft Bisect | 35.0 | 38.2 | +99 ⚑ | LOW |
| 265 | Beckton | 38.0 | 38.2 | +84 ⚑ | LOW |
| N/A | Schema.org | N/A | 38.2 | N/A | NONE |
| 117 | Unpaywall Browser Extension | 62.0 | 38.2 | -66 ⚑ | LOW |
| 172 | deliberAIde | 53.0 | 38.2 | -12 | LOW |
| 110 | Parallel Parliament | 63.0 | 38.2 | -75 ⚑ | MEDIUM |
| 297 | CAN/DGSI 127 - Age Assurance Technologies Sta | 28.0 | 37.3 | +111 ⚑ | LOW |
| 145 | Diia | 56.0 | 37.3 | -42 ⚑ | LOW |
| 100 | rsky | 64.0 | 37.3 | -88 ⚑ | LOW |
| N/A | GRIM (Global Risk Simulator) | N/A | 37.3 | N/A | LOW |
| 229 | Journalist Studio | 44.0 | 37.3 | +39 ⚑ | LOW |
| 204 | Libertrium | 48.0 | 37.3 | +13 | MEDIUM |
| 138 | Open Letter | 57.0 | 37.3 | -54 ⚑ | MEDIUM |
| 129 | Parse The Bill | 59.0 | 37.3 | -64 ⚑ | LOW |
| 111 | Radicle | 63.0 | 37.3 | -83 ⚑ | LOW |
| 173 | Security First / Umbrella | 53.0 | 37.3 | -22 ⚑ | MEDIUM |
| 256 | Empurrando Juntas (EJ) | 39.0 | 37.3 | +60 ⚑ | LOW |
| 266 | soweego | 38.0 | 37.3 | +69 ⚑ | LOW |
| 165 | Gapminder Worldview Upgrader | 54.0 | 37.3 | -33 ⚑ | MEDIUM |
| 130 | VFRAME | 58.5 | 37.3 | -69 ⚑ | MEDIUM |
| 217 | WardWatch | 46.5 | 37.3 | +17 | LOW |
| 25 | GlobaLeaks | 79.0 | 37.3 | -176 ⚑ | MEDIUM |
| 191 | Teaching Public Service in the Digital Age | 50.0 | 37.3 | -11 | LOW |
| 30 | Worker Info Exchange | 78.0 | 37.3 | -173 ⚑ | HIGH |
| 196 | UrbanistAI | 49.0 | 37.2 | -8 | LOW |
| 151 | Humanitarian Data Exchange | 55.5 | 36.3 | -54 ⚑ | MEDIUM |
| 197 | Find local consultations | 49.0 | 36.3 | -9 | MEDIUM |
| 198 | Monitor Mamdani | 49.0 | 36.3 | -9 | LOW |
| 118 | Open Access – Transparency International UK | 62.0 | 36.3 | -90 ⚑ | MEDIUM |
| 267 | ORCID | 38.0 | 36.3 | +58 ⚑ | MEDIUM |
| 250 | Turbo Phonebank | 40.0 | 36.3 | +40 ⚑ | LOW |
| 293 | DoNotPay | 31.0 | 36.3 | +82 ⚑ | LOW |
| 186 | Marks Out Of Tenancy | 51.0 | 36.3 | -26 ⚑ | LOW |
| 133 | Martus | 58.0 | 36.3 | -80 ⚑ | MEDIUM |
| 222 | River Sentiment Dashboard | 46.0 | 35.4 | +8 | LOW |
| 146 | The Data Trusts Initiative | 56.0 | 35.3 | -69 ⚑ | LOW |
| 166 | Agreement Engine | 54.0 | 35.3 | -50 ⚑ | NONE |
| 257 | The Guide to Major Trusts 2025/26 | 39.0 | 34.5 | +40 ⚑ | MEDIUM |
| 155 | Data Observation Toolkit (DOT) | 55.0 | 34.3 | -63 ⚑ | LOW |
| 199 | Pastecal | 49.0 | 34.3 | -20 | LOW |
| 236 | youtube-dl | 43.0 | 34.3 | +16 | MEDIUM |
| 174 | Granitt | 53.0 | 34.3 | -47 ⚑ | LOW |
| 230 | Nook CRM | 44.0 | 34.3 | +8 | LOW |
| 187 | Objector.ai | 51.0 | 34.3 | -36 ⚑ | LOW |
| 147 | Pageviews Analysis | 56.0 | 34.3 | -77 ⚑ | MEDIUM |
| 244 | Timecounts | 41.0 | 34.3 | +19 | MEDIUM |
| 112 | Who Targets Me Trends | 63.0 | 34.3 | -114 ⚑ | LOW |
| 182 | Objector.ai | 52.0 | 34.3 | -45 ⚑ | LOW |
| 50 | WhatDoTheyKnow | 73.0 | 34.3 | -178 ⚑ | MEDIUM |
| 192 | Bluesky | 50.0 | 34.2 | -37 ⚑ | HIGH |
| 268 | Viewpoints | 38.0 | 34.2 | +38 ⚑ | LOW |
| 75 | Public AI Inference Utility | 69.0 | 33.4 | -156 ⚑ | LOW |
| 277 | CiviClick | 36.0 | 33.3 | +45 ⚑ | LOW |
| 193 | UK Parliament Developer Portal | 50.0 | 33.3 | -40 ⚑ | MEDIUM |
| 119 | Global Fact-Check Bot (GFC) | 62.0 | 33.3 | -115 ⚑ | LOW |
| 231 | GOV.UK Forms | 44.0 | 33.3 | -4 | LOW |
| 296 | Charity Digital Skills Report | 30.5 | 32.4 | +60 ⚑ | MEDIUM |
| 120 | In the news | 62.0 | 32.4 | -117 ⚑ | LOW |
| 148 | Gender Pay Gap Service | 56.0 | 32.4 | -90 ⚑ | LOW |
| 269 | whatsmeow | 38.0 | 32.4 | +30 ⚑ | NONE |
| 216 | Moral Machine | 47.0 | 32.4 | -24 ⚑ | MEDIUM |
| 205 | The Accountability Project | 48.0 | 32.4 | -36 ⚑ | LOW |
| 248 | Remember to Vote | 40.5 | 32.4 | +6 | LOW |
| 12 | Riseup | 83.0 | 32.4 | -231 ⚑ | MEDIUM |
| 215 | Who Posted What? | 47.5 | 32.4 | -29 ⚑ | MEDIUM |
| 270 | GOV.UK One Login | 38.0 | 32.4 | +25 ⚑ | LOW |
| 70 | Tor Project | 69.5 | 32.2 | -176 ⚑ | HIGH |
| 251 | OA.Report | 40.0 | 31.4 | +4 | LOW |
| 255 | OpenAudience | 39.5 | 31.4 | +7 | MEDIUM |
| 271 | Overton | 38.0 | 31.4 | +22 ⚑ | LOW |
| 259 | PostBug | 38.5 | 31.4 | +9 | MEDIUM |
| 206 | semanticClimate | 48.0 | 31.4 | -45 ⚑ | LOW |
| 71 | The Circuit | 69.5 | 31.4 | -181 ⚑ | LOW |
| 149 | Go Vocal | 56.0 | 31.3 | -104 ⚑ | MEDIUM |
| 207 | Entitledto | 48.0 | 30.4 | -47 ⚑ | MEDIUM |
| 298 | DeepSeek-V3 | 28.0 | 30.4 | +43 ⚑ | HIGH |
| 139 | Nyaaya | 56.5 | 30.4 | -117 ⚑ | MEDIUM |
| 188 | Plausible Analytics | 51.0 | 30.4 | -69 ⚑ | LOW |
| 245 | GOV.UK Notify | 41.0 | 30.4 | -13 | MEDIUM |
| 287 | Prolific | 32.0 | 30.4 | +28 ⚑ | MEDIUM |
| 225 | Privacy Badger | 45.0 | 30.2 | -35 ⚑ | MEDIUM |
| 208 | Dunadyne | 48.0 | 29.4 | -53 ⚑ | LOW |
| 246 | Local Insight | 41.0 | 29.4 | -16 | MEDIUM |
| 286 | GovWise | 32.5 | 29.4 | +23 ⚑ | LOW |
| 252 | MyActionCenter | 40.0 | 29.4 | -12 | LOW |
| 288 | Collab.Land | 32.0 | 28.6 | +23 ⚑ | LOW |
| 289 | CivicMatch | 32.0 | 28.4 | +23 ⚑ | LOW |
| 272 | GOV Reuse Library | 38.0 | 28.4 | +5 | LOW |
| N/A | Citizens Advice Tableau Public Profile | N/A | 28.4 | N/A | NONE |
| 86 | Right To Know | 67.0 | 28.4 | -183 ⚑ | MEDIUM |
| N/A | Consciousness Evolution Operating System (Con | N/A | 28.4 | N/A | NONE |
| 234 | Plinth | 43.5 | 28.4 | -37 ⚑ | LOW |
| N/A | Local Deep Researcher | N/A | 28.0 | N/A | NONE |
| N/A | Unknown | N/A | 28.0 | N/A | NONE |
| 209 | Pear by Holepunch | 48.0 | 27.5 | -65 ⚑ | LOW |
| 232 | Full Fact AI | 44.0 | 27.5 | -43 ⚑ | HIGH |
| 273 | PatCit | 38.0 | 27.5 | -3 | LOW |
| N/A | Ladder Hub | N/A | 27.5 | N/A | LOW |
| N/A | Keep It In The Community | N/A | 27.5 | N/A | NONE |
| 247 | User Research Library | 41.0 | 27.5 | -32 ⚑ | MEDIUM |
| 294 | RightDD | 31.0 | 27.5 | +14 | MEDIUM |
| 210 | Watch Duty | 48.0 | 27.5 | -71 ⚑ | LOW |
| 258 | GOV.UK Pay | 39.0 | 27.4 | -24 ⚑ | MEDIUM |
| N/A | We Live It | N/A | 27.3 | N/A | LOW |
| 299 | AISafety.info | 28.0 | 26.5 | +15 | LOW |
| 211 | Turn2us Benefits Calculator | 48.0 | 26.5 | -74 ⚑ | MEDIUM |
| 212 | Violation Tracker UK | 48.0 | 26.5 | -74 ⚑ | NONE |
| 253 | Service Manual | 40.0 | 26.5 | -34 ⚑ | MEDIUM |
| 223 | Shared Digital Guides | 46.0 | 26.5 | -65 ⚑ | LOW |
| 233 | FixMyBlock | 44.0 | 25.5 | -56 ⚑ | LOW |
| 295 | Granicus | 31.0 | 25.5 | +5 | MEDIUM |
| 290 | GreenPT | 32.0 | 25.5 | -1 | LOW |
| 59 | Atlas of Surveillance | 72.0 | 25.2 | -233 ⚑ | LOW |
| 284 | Dovetail | 33.0 | 24.5 | -9 | LOW |
| 241 | FarmerChat | 42.0 | 24.5 | -53 ⚑ | LOW |
| 237 | Public Media Stack | 43.0 | 24.5 | -58 ⚑ | LOW |
| 213 | Society for Hopeful Technologists | 48.0 | 23.5 | -83 ⚑ | LOW |
| 183 | The List | 52.0 | 23.5 | -114 ⚑ | LOW |
| 274 | Polimorphic | 38.0 | 23.4 | -24 ⚑ | LOW |
| 242 | Labour Xchange | 42.0 | 22.5 | -57 ⚑ | MEDIUM |
| 113 | Missing Numbers | 63.0 | 22.5 | -187 ⚑ | LOW |
| 280 | Registers and collaboration: making lists we  | 35.0 | 22.5 | -21 ⚑ | LOW |
| 275 | OpenOrigins | 38.0 | 22.5 | -27 ⚑ | LOW |
| 291 | DoGooder | 32.0 | 21.6 | -12 | LOW |
| 285 | Filmot | 33.0 | 21.6 | -19 | LOW |
| N/A | Understanding Your Morality | N/A | 21.6 | N/A | MEDIUM |
| 281 | PoliMonitor | 35.0 | 21.6 | -25 ⚑ | LOW |
| N/A | Public Editor | N/A | 21.6 | N/A | NONE |
| 282 | Yoti | 35.0 | 21.6 | -26 ⚑ | MEDIUM |
| 300 | Responsible Tech Guide 2025 | 28.0 | 20.6 | -9 | LOW |
| N/A | Mapping.kids | N/A | 20.6 | N/A | NONE |
| 214 | DemTech Navigator | 48.0 | 20.6 | -97 ⚑ | LOW |
| 168 | Sci-Hub | 53.5 | 20.6 | -144 ⚑ | NONE |
| 283 | Digital Account Management Toolkit | 35.0 | 19.6 | -30 ⚑ | LOW |
| 292 | Esper | 32.0 | 19.6 | -22 ⚑ | LOW |
| 276 | Whoisology | 38.0 | 19.5 | -39 ⚑ | MEDIUM |
| 184 | Conservative Party Funding | 52.0 | 18.6 | -132 ⚑ | LOW |
| 301 | The Decelerator | 28.0 | 17.6 | -16 | LOW |
| 254 | COTSI (Cyber Operational Threat Situational I | 40.0 | 17.5 | -64 ⚑ | LOW |
| N/A | PolicyMogul | N/A | 16.7 | N/A | LOW |
| 302 | WorkInCharities | 22.0 | 16.7 | -18 | LOW |
| N/A | Unknown Academic Paper (SSRN 5351275) | N/A | N/A | N/A | NONE |

**Where jury and constitution agree (robust picks):**

- LiquidFeedback (const #5, jury #13, gap +8)
- Polis (const #9, jury #18, gap +9)
- mySociety Datasets and APIs (const #13, jury #16, gap +3)
- Loomio (const #14, jury #19, gap +5)
- HURIDOCS (const #24, jury #23, gap -1)
- Alaveteli (const #27, jury #26, gap -1)
- Citizen OS (const #28, jury #37, gap +9)
- Your Priorities (const #33, jury #34, gap +1)

**Where they diverge most and what it suggests:**

- The DAO (Standard DAO Framework): const #2, jury #260, gap +258 — jury recognises this project broadly; constitution scores specific dossier criteria
- Kagi SlopStop: const #94, jury #278, gap +184 — jury recognises this project broadly; constitution scores specific dossier criteria
- Agencies for Good: const #81, jury #261, gap +180 — jury recognises this project broadly; constitution scores specific dossier criteria
- Nestr: const #102, jury #262, gap +160 — jury recognises this project broadly; constitution scores specific dossier criteria
- CharmVerse: const #19, jury #175, gap +156 — jury recognises this project broadly; constitution scores specific dossier criteria

- Parti: const #49, jury #7, gap -42 — constitution over-values relative to jury
- Rahvaalgatus: const #48, jury #20, gap -28 — constitution over-values relative to jury
- Mastodon: const #46, jury #21, gap -25 — constitution over-values relative to jury
- Open Council Network: const #30, jury #6, gap -24 — constitution over-values relative to jury
- LittleSis: const #32, jury #10, gap -22 — constitution over-values relative to jury

**Grok4 divergence:** Limited scoring (avg 7/321) restricts statistical divergence detection.
**Abstention log:** Gemini: 0/321 scored (excluded). GPT-4.1: highest rate (293/321). Claude: 71/321. Mistral: 200/321. Grok4: 7/321.
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
| 1 | Aragon | https://aragon.org | 70.7 | 64.7 | 6 | 0.75 | LOW | LOW | criteria | Aragon scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 2 | The DAO (Standard DAO Framework) | https://github.com/vbuterin/dao | 68.0 | 52.0 | 16 | 0.75 | LOW | MEDIUM | modifier | The DAO (Standard DAO Framework) applies programmable, verifiable mechanisms to governance — this is precisely what I mean by 'programmable governance': not just a platform with governance features, but mechanisms where the rules are encoded and auditable. The on-chain or cryptographically verifiable component gets a meaningful boost from me — this is the rare case where 'programmable governance' isn't just a marketing claim. |
| 3 | Ethelo | https://ethelo.com | 67.9 | 54.9 | 13 | 1.0 | LOW | MEDIUM | criteria | Ethelo scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 4 | Bonfire | https://bonfirenetworks.org/ | 65.8 | 61.8 | 4 | 0.83 | LOW | LOW | criteria | Bonfire demonstrates what I mean by collective ownership being technically viable — the governance architecture gives communities actual decision-making rights over the infrastructure, not just advisory input. |
| 5 | LiquidFeedback | https://liquidfeedback.com | 65.8 | 61.8 | 4 | 1.0 | LOW | MEDIUM | criteria | LiquidFeedback scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 6 | Tech Coops List | https://tech-coops.xyz | 65.8 | 61.8 | 4 | 0.75 | LOW | MEDIUM | criteria | Tech Coops List scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 7 | Open Heart Mind (OHM) | https://openheartmind.org | 65.7 | 63.7 | 2 | 0.83 | LOW | LOW | criteria | Open Heart Mind (OHM) scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 8 | Cobudget | https://cobudget.com | 64.7 | 64.7 | 0 | 1.0 | LOW | HIGH | criteria | Cobudget scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: Cobudget is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 9 | Polis | https://github.com/compdemocracy/polis | 64.7 | 64.7 | 0 | 1.0 | LOW | HIGH | criteria | Polis scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: Polis is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 10 | Populate Tools | https://github.com/populatetools | 64.7 | 64.7 | 0 | 0.83 | LOW | MEDIUM | criteria | Populate Tools scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 11 | Open Standards for Data Guidebook | https://standards.theodi.org | 64.7 | 64.7 | 0 | 1.0 | LOW | LOW | criteria | Open Standards for Data Guidebook scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The interoperability architecture scores well: open standards and data portability are how infrastructure stays honest — no lock-in, no single point of control. |
| 12 | Murmurations Protocol | https://murmurations.network | 62.8 | 58.8 | 4 | 0.75 | LOW | LOW | criteria | Murmurations Protocol covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 13 | mySociety Datasets and APIs | https://data.mysociety.org | 62.7 | 62.7 | 0 | 1.0 | LOW | HIGH | criteria | mySociety Datasets and APIs scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: mySociety Datasets and APIs is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 14 | Loomio | https://www.loomio.org | 62.7 | 62.7 | 0 | 1.0 | LOW | MEDIUM | criteria | Loomio scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 15 | Matrix | https://matrix.org | 60.9 | 56.9 | 4 | 1.0 | LOW | MEDIUM | criteria | Matrix covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. The interoperability architecture scores well: open standards and data portability are how infrastructure stays honest — no lock-in, no single point of control. |
| 16 | Open Collective | https://opencollective.com | 60.9 | 56.9 | 4 | 0.75 | LOW | MEDIUM | criteria | Open Collective demonstrates what I mean by collective ownership being technically viable — the governance architecture gives communities actual decision-making rights over the infrastructure, not just advisory input. |
| 17 | dDocs | https://ddocs.new/ | 59.9 | 55.9 | 4 | 0.5 | MEDIUM | NONE | criteria | dDocs covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 18 | Logos | https://logos.co/ | 59.0 | 52.0 | 7 | 0.83 | LOW | LOW | criteria | Logos scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 19 | CharmVerse | https://charmverse.io/ | 58.9 | 54.9 | 4 | 0.75 | LOW | LOW | criteria | CharmVerse applies programmable, verifiable mechanisms to governance — this is precisely what I mean by 'programmable governance': not just a platform with governance features, but mechanisms where the rules are encoded and auditable. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 20 | RxC Voice | https://github.com/radicalxchange/rxc-voice | 58.9 | 54.9 | 4 | 0.75 | LOW | LOW | criteria | RxC Voice scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 21 | Interoperable Deliberative Tools | https://metagov.org/projects/interop | 58.8 | 58.8 | 0 | 0.75 | LOW | LOW | criteria | Interoperable Deliberative Tools scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 22 | Decidim | https://decidim.org | 57.8 | 57.8 | 0 | 1.0 | LOW | HIGH | criteria | Decidim scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: Decidim is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 23 | CONSUL Democracy | https://consulproject.org | 56.9 | 56.9 | 0 | 1.0 | LOW | MEDIUM | criteria | CONSUL Democracy scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 24 | HURIDOCS | https://github.com/huridocs | 56.9 | 56.9 | 0 | 1.0 | LOW | MEDIUM | criteria | There's genuine transparency infrastructure in HURIDOCS — the core function is making financial or resource flows visible and actionable, which aligns with my central conviction that budget transparency is a precondition for legitimate decision-making. |
| 25 | Mozilla Data Collective | https://datacollective.mozillafoundation.org/ | 56.1 | 45.1 | 11 | 0.83 | LOW | LOW | criteria | Mozilla Data Collective explicitly serves communities that traditional financial and governance systems don't reach. That's not a marketing claim here — the design is structured around the specific exclusion gap. The explicit focus on financially or governmentally excluded communities earns a boost — this is the kind of work that my constitution is most designed to surface. |
| 26 | Nym | https://nymtech.net | 56.0 | 52.0 | 4 | 0.75 | LOW | LOW | criteria | Nym covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 27 | Alaveteli | https://alaveteli.org | 55.9 | 55.9 | 0 | 1.0 | LOW | HIGH | criteria | Alaveteli scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: Alaveteli is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 28 | Citizen OS | https://citizenos.com/platform/ | 55.9 | 55.9 | 0 | 1.0 | LOW | MEDIUM | criteria | Citizen OS scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 29 | NumFOCUS | https://numfocus.org | 55.9 | 55.9 | 0 | 0.83 | LOW | MEDIUM | criteria | NumFOCUS covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 30 | Open Council Network | https://opencouncil.network | 55.9 | 55.9 | 0 | 1.0 | LOW | LOW | criteria | Open Council Network scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 31 | ClimateAction.Tech | https://climateaction.tech | 55.1 | 46.1 | 9 | 0.75 | LOW | LOW | criteria | ClimateAction.Tech covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 32 | LittleSis | https://littlesis.org | 55.0 | 51.0 | 4 | 0.92 | LOW | MEDIUM | criteria | LittleSis scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 33 | Your Priorities | https://yrpri.org | 54.9 | 54.9 | 0 | 1.0 | LOW | MEDIUM | criteria | Your Priorities scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 34 | Snowdrift.coop | https://snowdrift.coop | 54.0 | 50.0 | 4 | 0.83 | LOW | MEDIUM | criteria | Snowdrift.coop covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 35 | adhocracy+ | https://adhocracy.plus | 53.9 | 53.9 | 0 | 1.0 | LOW | LOW | criteria | adhocracy+ scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 36 | CiviCRM | https://civicrm.org | 53.9 | 53.9 | 0 | 1.0 | LOW | HIGH | criteria | CiviCRM scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: CiviCRM is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 37 | Fairbnb.coop | https://fairbnb.coop | 53.9 | 53.9 | 0 | 0.83 | LOW | LOW | criteria | Fairbnb.coop covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 38 | Open Supply Hub | https://opensupplyhub.org | 53.9 | 53.9 | 0 | 1.0 | LOW | MEDIUM | criteria | Open Supply Hub covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 39 | Pursuance Project | https://pursuanceproject.org | 53.9 | 53.9 | 0 | 0.75 | LOW | MEDIUM | criteria | Pursuance Project scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 40 | Talk to the City | https://talktothecity.org | 53.9 | 53.9 | 0 | 1.0 | LOW | LOW | criteria | Talk to the City scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 41 | ОПОРА (Opora) | https://www.oporaua.org | 53.0 | 48.0 | 5 | 1.0 | LOW | MEDIUM | criteria | ОПОРА (Opora) scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 42 | CommunityRule | https://communityrule.info | 52.9 | 52.9 | 0 | 1.0 | LOW | MEDIUM | criteria | CommunityRule scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 43 | PlaceCal | https://github.com/geeksforsocialchange/placecal | 52.9 | 52.9 | 0 | 0.75 | LOW | MEDIUM | criteria | PlaceCal scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 44 | Political Advertising Transparency Data Standard | https://github.com/whotargetsme/ad-transparency-standards/blob/main/implement.md | 52.9 | 52.9 | 0 | 1.0 | LOW | LOW | criteria | Political Advertising Transparency Data Standard covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 45 | OpenSanctions | https://www.opensanctions.org | 52.9 | 52.9 | 0 | 1.0 | LOW | LOW | criteria | OpenSanctions covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 46 | Mastodon | https://github.com/mastodon/mastodon | 52.1 | 43.1 | 9 | 1.0 | LOW | HIGH | criteria | Mastodon covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Mastodon is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 47 | Creative Commons | https://creativecommons.org | 52.0 | 52.0 | 0 | 1.0 | LOW | HIGH | criteria | Creative Commons covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Creative Commons is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 48 | Rahvaalgatus | https://github.com/rahvaalgatus/rahvaalgatus | 52.0 | 52.0 | 0 | 0.75 | LOW | MEDIUM | criteria | Rahvaalgatus scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 49 | Parti | https://parti.xyz | 52.0 | 52.0 | 0 | 1.0 | LOW | MEDIUM | criteria | Parti scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 50 | Humanitarian OpenStreetMap Team (HOT) | https://www.hotosm.org | 52.0 | 52.0 | 0 | 1.0 | LOW | HIGH | criteria | Humanitarian OpenStreetMap Team (HOT) scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: Humanitarian OpenStreetMap Team (HOT) is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 51 | Open Contracting Partnership | https://www.open-contracting.org | 52.0 | 52.0 | 0 | 1.0 | LOW | HIGH | criteria | The budget and treasury transparency work here is exactly what I mean when I say financial transparency should be democratic infrastructure — Open Contracting Partnership makes public money legible to those it belongs to, not just to administrators. High popularity risk: Open Contracting Partnership is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 52 | Ushahidi | https://www.ushahidi.com | 52.0 | 52.0 | 0 | 1.0 | LOW | MEDIUM | criteria | Ushahidi scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 53 | DAO Governance Surfaces | https://github.com/notchia/dao-governance-surfaces | 51.2 | 38.2 | 13 | 0.75 | LOW | LOW | modifier | DAO Governance Surfaces applies programmable, verifiable mechanisms to governance — this is precisely what I mean by 'programmable governance': not just a platform with governance features, but mechanisms where the rules are encoded and auditable. The on-chain or cryptographically verifiable component gets a meaningful boost from me — this is the rare case where 'programmable governance' isn't just a marketing claim. |
| 54 | Tactical Data Engagement | https://communities.sunlightfoundation.com/methodology | 51.1 | 46.1 | 5 | 1.0 | LOW | MEDIUM | criteria | Tactical Data Engagement scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 55 | Turkopticon | https://turkopticon.ucsd.edu | 51.1 | 47.1 | 4 | 0.92 | LOW | MEDIUM | criteria | Turkopticon covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 56 | Papertree | https://www.papertree.earth | 51.1 | 47.1 | 4 | 0.58 | MEDIUM | NONE | criteria | There's genuine transparency infrastructure in Papertree — the core function is making financial or resource flows visible and actionable, which aligns with my central conviction that budget transparency is a precondition for legitimate decision-making. |
| 57 | Constitute Project | https://constituteproject.org | 51.0 | 51.0 | 0 | 1.0 | LOW | MEDIUM | criteria | Constitute Project scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 58 | Cybersecurity for Democracy | https://cybersecurityfordemocracy.org | 51.0 | 51.0 | 0 | 1.0 | LOW | LOW | criteria | Cybersecurity for Democracy scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 59 | Participa (Podemos) | https://github.com/podemos-info/participa | 51.0 | 51.0 | 0 | 0.92 | LOW | MEDIUM | criteria | Participa (Podemos) scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 60 | Stanford Participatory Budgeting Platform | https://github.com/stanfordcdt/pb | 51.0 | 51.0 | 0 | 1.0 | LOW | MEDIUM | criteria | Stanford Participatory Budgeting Platform scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 61 | One Project | https://oneproject.org/ | 51.0 | 51.0 | 0 | 0.75 | LOW | LOW | criteria | One Project scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 62 | Open Digital Planning | https://opendigitalplanning.org/ | 51.0 | 51.0 | 0 | 1.0 | LOW | LOW | criteria | Open Digital Planning covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 63 | Awesome UK Government Datasets | https://github.com/i-dot-ai/awesome-gov-datasets | 50.1 | 47.1 | 3 | 0.92 | LOW | LOW | criteria | Awesome UK Government Datasets covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 64 | All Our Ideas | https://all-our-ideas.citizens.is | 50.0 | 50.0 | 0 | 0.75 | LOW | MEDIUM | criteria | All Our Ideas scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 65 | Fundación Ciudadanía Inteligente | https://ciudadaniai.org | 50.0 | 50.0 | 0 | 1.0 | LOW | MEDIUM | criteria | Fundación Ciudadanía Inteligente scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 66 | CoTech | https://coops.tech | 50.0 | 50.0 | 0 | 0.75 | LOW | MEDIUM | criteria | CoTech scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 67 | Democracy Club Developer API | https://developers.democracyclub.org.uk/api/v1 | 50.0 | 50.0 | 0 | 1.0 | LOW | MEDIUM | criteria | Democracy Club Developer API scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 68 | vTaiwan | https://github.com/g0v/vue.vtaiwan.tw | 50.0 | 50.0 | 0 | 1.0 | LOW | MEDIUM | criteria | vTaiwan scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 69 | UK Housing Data Standards | https://hact.org.uk/tools-and-services/uk-housing-data-standards | 50.0 | 50.0 | 0 | 1.0 | LOW | LOW | criteria | UK Housing Data Standards covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 70 | OpenProcurement | https://openprocurement.io | 50.0 | 50.0 | 0 | 1.0 | LOW | MEDIUM | criteria | There's genuine transparency infrastructure in OpenProcurement — the core function is making financial or resource flows visible and actionable, which aligns with my central conviction that budget transparency is a precondition for legitimate decision-making. |
| 71 | Principles for Public Participation in Procurement of AI | https://p4ai.net | 50.0 | 50.0 | 0 | 0.83 | LOW | LOW | criteria | Principles for Public Participation in Procurement of AI scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 72 | Participedia | https://participedia.net | 50.0 | 50.0 | 0 | 0.92 | LOW | MEDIUM | criteria | Participedia scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 73 | GovTrack.us | https://www.govtrack.us | 50.0 | 50.0 | 0 | 1.0 | LOW | MEDIUM | criteria | GovTrack.us scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 74 | Bluesky Social | https://github.com/bluesky-social | 49.1 | 45.1 | 4 | 0.75 | LOW | HIGH | criteria | Bluesky Social covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Bluesky Social is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 75 | Activist Handbook | https://activisthandbook.org/ | 49.0 | 49.0 | 0 | 0.75 | LOW | LOW | criteria | Activist Handbook scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 76 | Kialo | https://kialo.com | 49.0 | 49.0 | 0 | 0.75 | LOW | MEDIUM | criteria | Kialo scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 77 | Manifold Markets | https://manifold.markets | 49.0 | 49.0 | 0 | 0.75 | LOW | LOW | criteria | Manifold Markets scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 78 | New_ Public Roundabout | https://newpublic.substack.com/p/introducing-roundabout-built-for | 49.0 | 49.0 | 0 | 0.75 | LOW | LOW | criteria | New_ Public Roundabout scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 79 | PolicyEngine | https://policyengine.org/uk | 49.0 | 49.0 | 0 | 1.0 | LOW | LOW | criteria | PolicyEngine covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 80 | Internet Archive Wayback Machine | https://web.archive.org | 49.0 | 49.0 | 0 | 1.0 | LOW | MEDIUM | criteria | Internet Archive Wayback Machine covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 81 | Agencies for Good | https://www.agenciesforgood.org | 49.0 | 49.0 | 0 | 0.83 | LOW | LOW | criteria | Agencies for Good scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 82 | Democracy Fund Open Source | https://www.dfos.com | 49.0 | 49.0 | 0 | 0.75 | LOW | MEDIUM | criteria | Democracy Fund Open Source scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 83 | Organise | https://www.organise.org.uk | 49.0 | 49.0 | 0 | 0.92 | LOW | MEDIUM | criteria | Organise scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 84 | ODK (Open Data Kit) | https://getodk.org | 48.0 | 48.0 | 0 | 1.0 | LOW | MEDIUM | criteria | ODK (Open Data Kit) covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 85 | Groupthink (OpenPolitics Votebot) | https://github.com/openpolitics/groupthink | 48.0 | 48.0 | 0 | 0.92 | LOW | MEDIUM | criteria | Groupthink (OpenPolitics Votebot) scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 86 | Land Explorer | https://landexplorer.coop | 48.0 | 48.0 | 0 | 1.0 | LOW | LOW | criteria | Land Explorer scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 87 | openparliament.ca | https://openparliament.ca/ | 48.0 | 48.0 | 0 | 0.75 | LOW | MEDIUM | criteria | openparliament.ca scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 88 | RxC Quadratic Voting | https://quadraticvote.radicalxchange.org | 48.0 | 48.0 | 0 | 0.92 | LOW | HIGH | criteria | RxC Quadratic Voting scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: RxC Quadratic Voting is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 89 | Framework for Meaningful Engagement 2.0 | https://ecnl.org/publications/framework-meaningful-engagement-20?mc_cid=b1c5158063&mc_eid=a09c64ec38 | 47.3 | 37.3 | 10 | 0.92 | LOW | LOW | modifier | Framework for Meaningful Engagement 2.0 covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 90 | Wikum | https://www.csail.mit.edu/research/wikum-bridging-discussion-systems-and-wikis-collective-summarization | 47.1 | 47.1 | 0 | 0.75 | LOW | LOW | criteria | Wikum scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 91 | FixMyStreet | https://www.fixmystreet.com | 47.1 | 47.1 | 0 | 1.0 | LOW | HIGH | criteria | FixMyStreet scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: FixMyStreet is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 92 | TheyWorkForYou | https://www.theyworkforyou.com | 47.1 | 47.1 | 0 | 1.0 | LOW | HIGH | criteria | TheyWorkForYou scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: TheyWorkForYou is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 93 | AlgorithmWatch | https://algorithmwatch.org | 47.0 | 51.0 | -4 | 1.0 | LOW | LOW | criteria | AlgorithmWatch scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 94 | Kagi SlopStop | https://blog.kagi.com/slopstop | 46.2 | 41.2 | 5 | 0.83 | LOW | LOW | criteria | Kagi SlopStop covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 95 | Modular Politics | https://arxiv.org/abs/2005.13701 | 46.1 | 46.1 | 0 | 0.75 | LOW | HIGH | criteria | Modular Politics scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: Modular Politics is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 96 | postcodes.io | https://github.com/ideal-postcodes/postcodes.io | 46.1 | 46.1 | 0 | 0.75 | LOW | MEDIUM | criteria | postcodes.io covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 97 | Guardian Project | https://guardianproject.info | 46.1 | 46.1 | 0 | 0.92 | LOW | MEDIUM | criteria | Guardian Project covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 98 | Campaign Tracker | https://www.campaigntracker.nl/en | 46.1 | 46.1 | 0 | 1.0 | LOW | MEDIUM | criteria | Campaign Tracker covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 99 | Mastodon C | https://www.mastodonc.com | 46.1 | 46.1 | 0 | 1.0 | LOW | HIGH | criteria | Mastodon C covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Mastodon C is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 100 | Open Ownership | https://www.openownership.org | 46.1 | 46.1 | 0 | 1.0 | LOW | MEDIUM | criteria | Open Ownership covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 101 | Discourse | https://www.discourse.org | 46.0 | 52.0 | -6 | 0.75 | LOW | MEDIUM | criteria | Discourse scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 102 | Nestr | https://nestr.io | 45.3 | 37.3 | 8 | 0.75 | LOW | LOW | criteria | Nestr scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 103 | Urbit | https://urbit.org | 45.2 | 41.2 | 4 | 0.75 | LOW | LOW | criteria | Urbit covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 104 | sourceAFRICA | https://sourceafrica.net | 45.1 | 45.1 | 0 | 0.83 | LOW | MEDIUM | criteria | sourceAFRICA covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 105 | Membership | https://medium.com/@abscond/membership-a-prototype-ea822b2683b | 45 | 40.2 | 7 | 0.37999999999999995 | HIGH | NONE | procedural | Membership scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. I'm holding this score loosely — the dossier gaps mean I'm inferring fit from thin evidence, and I could be wrong in either direction. |
| 106 | Abstract Wikipedia | https://meta.wikimedia.org/wiki/abstract_wikipedia | 45 | 47.1 | 0 | 0.72 | LOW | HIGH | procedural | Abstract Wikipedia covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Abstract Wikipedia is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 107 | PlanIT | https://planit.org.uk | 45 | 45.1 | 0 | 0.72 | LOW | MEDIUM | procedural | PlanIT scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 108 | PolicyKit | https://policykit.org | 45 | 48.0 | 0 | 0.6299999999999999 | MEDIUM | LOW | procedural | PolicyKit scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 109 | Community Notes (Birdwatch) Analysis Tool | https://github.com/travisbrown/birdwatch | 44.2 | 41.2 | 3 | 0.92 | LOW | LOW | criteria | Community Notes (Birdwatch) Analysis Tool covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 110 | CKAN | https://ckan.org | 44.1 | 44.1 | 0 | 1.0 | LOW | HIGH | criteria | CKAN covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: CKAN is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 111 | docs.plus | https://docs.plus | 44.1 | 44.1 | 0 | 0.67 | MEDIUM | LOW | criteria | docs.plus scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 112 | EDGAR | https://github.com/bellingcat/edgar | 44.1 | 44.1 | 0 | 0.75 | LOW | HIGH | criteria | EDGAR covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: EDGAR is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 113 | MapIt | https://mapit.mysociety.org | 44.1 | 44.1 | 0 | 1.0 | LOW | HIGH | criteria | MapIt covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: MapIt is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 114 | Open Data Editor (ODE) | https://okfn.org/en/projects/open-data-editor/ | 44.1 | 44.1 | 0 | 1.0 | LOW | LOW | criteria | Open Data Editor (ODE) covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 115 | Open Data Communities | https://opendatacommunities.org | 44.1 | 44.1 | 0 | 0.92 | LOW | MEDIUM | criteria | Open Data Communities covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 116 | SecureDrop | https://securedrop.org | 44.1 | 44.1 | 0 | 0.92 | LOW | MEDIUM | criteria | SecureDrop covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 117 | Spartacus | https://spartacus.app | 44.1 | 44.1 | 0 | 0.75 | LOW | LOW | criteria | Spartacus scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 118 | WriteToThem | https://www.writetothem.com | 44.1 | 44.1 | 0 | 1.0 | LOW | MEDIUM | criteria | WriteToThem scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 119 | Anna's Archive | https://annas-archive.pm | 43.2 | 40.2 | 3 | 0.55 | MEDIUM | NONE | criteria | Anna's Archive covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 120 | Humble Data Workshop | https://humbledata.org | 43.2 | 38.2 | 5 | 0.75 | LOW | LOW | criteria | Humble Data Workshop covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 121 | Spacetube | https://spacetu.be | 43.2 | 39.2 | 4 | 0.67 | MEDIUM | LOW | criteria | Spacetube covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 122 | Aleph (OCCRP) | https://aleph.occrp.org | 43.1 | 43.1 | 0 | 0.92 | LOW | HIGH | criteria | Aleph (OCCRP) covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Aleph (OCCRP) is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 123 | Civic Tech Field Guide | https://civictech.guide | 43.1 | 43.1 | 0 | 0.83 | LOW | MEDIUM | criteria | Civic Tech Field Guide scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 124 | Open Referral UK | https://openreferraluk.org | 43.1 | 43.1 | 0 | 1.0 | LOW | MEDIUM | criteria | Open Referral UK covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 125 | Open Science Framework | https://osf.io | 43.1 | 43.1 | 0 | 0.92 | LOW | MEDIUM | criteria | Open Science Framework covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 126 | Relational Tech Project | https://relationaltechproject.org | 43.1 | 43.1 | 0 | 0.58 | MEDIUM | NONE | criteria | Relational Tech Project scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 127 | Tracka | https://yourtracka.org | 43.1 | 43.1 | 0 | 1.0 | LOW | MEDIUM | criteria | Tracka scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 128 | CrowdJustice | https://www.crowdjustice.com | 43.0 | 49.0 | -6 | 0.72 | LOW | MEDIUM | criteria | CrowdJustice scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 129 | meet.coop | https://www.meet.coop | 43.0 | 51.0 | -8 | 0.75 | LOW | LOW | criteria | meet.coop scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 130 | MP Watch | https://www.mpwatch.org | 42.3 | 34.3 | 8 | 0.92 | LOW | LOW | criteria | MP Watch scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 131 | CivicPress | https://civicpress.io/ | 42.2 | 39.2 | 3 | 0.83 | LOW | LOW | criteria | CivicPress covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 132 | Collaborative Data Patterns | https://collaborative-data.theodi.org | 42.2 | 42.2 | 0 | 0.67 | MEDIUM | LOW | criteria | Collaborative Data Patterns scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 133 | The Commons Social Change Library | https://commonslibrary.org | 42.2 | 42.2 | 0 | 0.75 | LOW | MEDIUM | criteria | The Commons Social Change Library scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 134 | The Engine Room Library | https://library.theengineroom.org | 42.2 | 42.2 | 0 | 0.75 | LOW | MEDIUM | criteria | The Engine Room Library covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 135 | Members' Interests | https://membersinterests.org.uk | 42.2 | 42.2 | 0 | 0.72 | LOW | MEDIUM | criteria | Members' Interests scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 136 | Open Council Data UK | https://opencouncildata.co.uk | 42.2 | 42.2 | 0 | 0.83 | LOW | MEDIUM | criteria | Open Council Data UK scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 137 | Strike Map | https://strikemap.org | 42.2 | 42.2 | 0 | 0.67 | MEDIUM | LOW | criteria | Strike Map covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 138 | Give Food | https://www.givefood.org.uk | 42.2 | 42.2 | 0 | 0.72 | LOW | MEDIUM | criteria | Give Food covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 139 | Neighbourhood Warmth | https://www.mysociety.org/climate/neighbourhood-warmth | 42.2 | 42.2 | 0 | 0.83 | LOW | HIGH | criteria | Neighbourhood Warmth scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. High popularity risk: Neighbourhood Warmth is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 140 | OpenCRVS | https://www.opencrvs.org | 42.2 | 42.2 | 0 | 1.0 | LOW | LOW | criteria | OpenCRVS covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 141 | Landlord Tech Watch | https://antievictionmappingproject.github.io/landlordtech | 41.2 | 41.2 | 0 | 0.83 | LOW | LOW | criteria | Landlord Tech Watch covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 142 | Bellingcat Online Investigation Toolkit | https://bellingcat.gitbook.io/toolkit | 41.2 | 41.2 | 0 | 0.83 | LOW | HIGH | criteria | Bellingcat Online Investigation Toolkit covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Bellingcat Online Investigation Toolkit is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 143 | Coral | https://coralproject.net | 41.2 | 41.2 | 0 | 0.92 | LOW | MEDIUM | criteria | Coral covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 144 | Cortico | https://cortico.ai/platform | 41.2 | 41.2 | 0 | 1.0 | LOW | LOW | criteria | Cortico scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 145 | Fatebook | https://fatebook.io | 41.2 | 41.2 | 0 | 0.75 | LOW | LOW | criteria | Fatebook covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 146 | UK Policy Dojo | https://github.com/mikekelly/policy-dojo | 41.2 | 38.2 | 3 | 0.83 | LOW | LOW | criteria | UK Policy Dojo covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 147 | Sugartrail | https://github.com/ribenamaplesyrup/sugartrail | 41.2 | 41.2 | 0 | 0.83 | LOW | LOW | criteria | Sugartrail covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 148 | GrantNav | https://grantnav.threesixtygiving.org | 41.2 | 41.2 | 0 | 1.0 | LOW | MEDIUM | criteria | GrantNav covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 149 | Harmonica | https://harmonica.chat/ | 41.2 | 41.2 | 0 | 0.83 | LOW | LOW | criteria | Harmonica scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 150 | Idealist | https://idealist.org | 41.2 | 41.2 | 0 | 0.75 | LOW | MEDIUM | criteria | Idealist scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 151 | Parliament Watch Uganda | https://parliamentwatch.ug/ | 41.2 | 41.2 | 0 | 0.75 | LOW | MEDIUM | criteria | Parliament Watch Uganda scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 152 | Shareyourpaper.org | https://shareyourpaper.org | 41.2 | 41.2 | 0 | 0.75 | LOW | LOW | criteria | Shareyourpaper.org covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 153 | The Government Says | https://thegovernmentsays.com | 41.2 | 41.2 | 0 | 1.0 | LOW | MEDIUM | criteria | The Government Says covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 154 | Community Tech | https://www.communitytech.network | 41.2 | 41.2 | 0 | 0.92 | LOW | LOW | criteria | Community Tech scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 155 | Deliberation & Technology (DelibTech) Network | https://www.demnext.org/projects/delibtech-network | 41.2 | 41.2 | 0 | 0.75 | LOW | LOW | criteria | Deliberation & Technology (DelibTech) Network scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 156 | MP Twitter Bios | https://www.mptwitterbios.co.uk | 41.2 | 38.2 | 3 | 0.75 | LOW | LOW | criteria | MP Twitter Bios scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 157 | oTree | https://www.otree.org | 41.2 | 41.2 | 0 | 0.83 | LOW | MEDIUM | criteria | oTree covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 158 | ShineYourEye | https://www.shineyoureye.org | 41.2 | 41.2 | 0 | 0.67 | MEDIUM | LOW | criteria | ShineYourEye scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 159 | Wikidata | https://www.wikidata.org | 41.2 | 41.2 | 0 | 0.92 | LOW | MEDIUM | criteria | Wikidata covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 160 | Metaculus | https://metaculus.com | 41.1 | 46.1 | -5 | 0.72 | LOW | MEDIUM | criteria | Metaculus covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 161 | Fission Codes | https://github.com/fission-codes/fission-codes | 40.4 | 28.4 | 12 | 0.75 | LOW | LOW | modifier | Fission Codes applies programmable, verifiable mechanisms to governance — this is precisely what I mean by 'programmable governance': not just a platform with governance features, but mechanisms where the rules are encoded and auditable. The on-chain or cryptographically verifiable component gets a meaningful boost from me — this is the rare case where 'programmable governance' isn't just a marketing claim. |
| 162 | arXiv | https://arxiv.org | 40.2 | 40.2 | 0 | 0.83 | LOW | HIGH | criteria | arXiv covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: arXiv is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 163 | Channel.org | https://channel.org | 40.2 | 40.2 | 0 | 0.75 | LOW | LOW | criteria | Channel.org scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 164 | Contracts for Data Collaboration | https://contractsfordatacollaboration.org | 40.2 | 40.2 | 0 | 1.0 | LOW | LOW | criteria | Contracts for Data Collaboration covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 165 | Consent-O-Matic | https://github.com/cavi-au/consent-o-matic | 40.2 | 40.2 | 0 | 0.75 | LOW | LOW | criteria | Consent-O-Matic covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 166 | Journal of Open Source Software | https://joss.theoj.org | 40.2 | 40.2 | 0 | 0.75 | LOW | MEDIUM | criteria | Journal of Open Source Software covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 167 | Mapped | https://mapped.commonknowledge.coop | 40.2 | 40.2 | 0 | 0.75 | LOW | LOW | criteria | Mapped scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 168 | OA.Works | https://oa.works/ | 40.2 | 40.2 | 0 | 1.0 | LOW | MEDIUM | criteria | OA.Works covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 169 | OpenBudgets.eu | https://openbudgets.eu | 40.2 | 40.2 | 0 | 1.0 | LOW | MEDIUM | criteria | There's genuine transparency infrastructure in OpenBudgets.eu — the core function is making financial or resource flows visible and actionable, which aligns with my central conviction that budget transparency is a precondition for legitimate decision-making. |
| 170 | OSINT Framework | https://osintframework.com | 40.2 | 40.2 | 0 | 0.75 | LOW | MEDIUM | criteria | OSINT Framework covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 171 | Vote for Policies | https://voteforpolicies.org.uk | 40.2 | 40.2 | 0 | 0.83 | LOW | MEDIUM | criteria | Vote for Policies scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 172 | OpenElections Leaflet Scraper and Parser | https://github.com/thicknavyrain/uk_elections_leaflets | 39.3 | 34.3 | 5 | 0.75 | LOW | LOW | criteria | OpenElections Leaflet Scraper and Parser covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 173 | django-collaborative | https://github.com/propublica/django-collaborative | 39.2 | 39.2 | 0 | 0.75 | LOW | MEDIUM | criteria | django-collaborative covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 174 | Hand-Written Petition Scanner | https://hand-written-petition-scanner.streamlit.app | 39.2 | 39.2 | 0 | 0.37999999999999995 | HIGH | NONE | criteria | Hand-Written Petition Scanner scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. I'm holding this score loosely — the dossier gaps mean I'm inferring fit from thin evidence, and I could be wrong in either direction. |
| 175 | WhatGov | https://www.whatgov.co.uk | 39.2 | 39.2 | 0 | 0.83 | LOW | MEDIUM | criteria | WhatGov scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 176 | Local Intelligence Hub | https://www.localintelligencehub.com | 39.1 | 44.1 | -5 | 0.92 | LOW | LOW | criteria | Local Intelligence Hub scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 177 | Choose a License | https://choosealicense.com | 38.2 | 38.2 | 0 | 0.75 | LOW | MEDIUM | criteria | Choose a License covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 178 | DISARM Frameworks | https://github.com/disarmfoundation/disarmframeworks | 38.2 | 38.2 | 0 | 1.0 | LOW | LOW | criteria | DISARM Frameworks covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 179 | Frankenstein Bill | https://gordonguthrie.github.io/frankensteinbill | 38.2 | 38.2 | 0 | 1.0 | LOW | LOW | criteria | Frankenstein Bill covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 180 | Theft Bisect | https://onodi.co/bisect/ | 38.2 | 38.2 | 0 | 0.92 | LOW | LOW | criteria | Theft Bisect covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 181 | Beckton | https://richardpope.org/2017/03/05/beckton-a-tool-to-build | 38.2 | 38.2 | 0 | 0.75 | LOW | LOW | criteria | Beckton covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 182 | Schema.org | https://schema.org | 38.2 | 38.2 | 0 | 0.5 | MEDIUM | NONE | criteria | Schema.org covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 183 | Unpaywall Browser Extension | https://unpaywall.org/products/extension | 38.2 | 38.2 | 0 | 0.67 | MEDIUM | LOW | criteria | Unpaywall Browser Extension covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 184 | deliberAIde | https://www.deliberaide.com | 38.2 | 38.2 | 0 | 1.0 | LOW | LOW | criteria | deliberAIde scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 185 | Parallel Parliament | https://www.parallelparliament.co.uk | 38.2 | 38.2 | 0 | 0.75 | LOW | MEDIUM | criteria | Parallel Parliament scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 186 | CAN/DGSI 127 - Age Assurance Technologies Standard | https://dgc-cgn.org/product/can-dgsi-127/ | 37.3 | 37.3 | 0 | 0.83 | LOW | LOW | criteria | CAN/DGSI 127 - Age Assurance Technologies Standard scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 187 | Diia | https://expo.diia.gov.ua | 37.3 | 37.3 | 0 | 1.0 | LOW | LOW | criteria | Diia covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 188 | rsky | https://github.com/blacksky-algorithms/rsky | 37.3 | 34.3 | 3 | 0.75 | LOW | LOW | criteria | rsky covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 189 | GRIM (Global Risk Simulator) | https://github.com/sentinelteam/grim | 37.3 | 34.3 | 3 | 0.83 | LOW | LOW | criteria | GRIM (Global Risk Simulator) covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 190 | Journalist Studio | https://journaliststudio.google.com | 37.3 | 37.3 | 0 | 0.75 | LOW | LOW | criteria | Journalist Studio covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 191 | Libertrium | https://liberopinion.com | 37.3 | 37.3 | 0 | 0.83 | LOW | MEDIUM | criteria | Libertrium scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 192 | Open Letter | https://openletter.earth | 37.3 | 37.3 | 0 | 0.92 | LOW | MEDIUM | criteria | Open Letter scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 193 | Parse The Bill | https://parsethebill.com | 37.3 | 37.3 | 0 | 0.75 | LOW | LOW | criteria | Parse The Bill scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 194 | Radicle | https://radicle.xyz | 37.3 | 37.3 | 0 | 0.75 | LOW | LOW | criteria | Radicle covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 195 | Security First / Umbrella | https://secfirst.org | 37.3 | 37.3 | 0 | 0.92 | LOW | MEDIUM | criteria | Security First / Umbrella covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 196 | Empurrando Juntas (EJ) | https://sobre.ejparticipe.org | 37.3 | 37.3 | 0 | 0.75 | LOW | LOW | criteria | Empurrando Juntas (EJ) scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 197 | soweego | https://soweego.readthedocs.io | 37.3 | 37.3 | 0 | 0.83 | LOW | LOW | criteria | soweego covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 198 | Gapminder Worldview Upgrader | https://upgrader.gapminder.org | 37.3 | 37.3 | 0 | 1.0 | LOW | MEDIUM | criteria | Gapminder Worldview Upgrader covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 199 | VFRAME | https://vframe.io | 37.3 | 37.3 | 0 | 1.0 | LOW | MEDIUM | criteria | VFRAME covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 200 | WardWatch | https://wardwatch.uk | 37.3 | 37.3 | 0 | 0.75 | LOW | LOW | criteria | WardWatch scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 201 | GlobaLeaks | https://www.globaleaks.org | 37.3 | 37.3 | 0 | 1.0 | LOW | MEDIUM | criteria | GlobaLeaks covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 202 | Teaching Public Service in the Digital Age | https://www.teachingpublicservice.digital | 37.3 | 37.3 | 0 | 0.83 | LOW | LOW | criteria | Teaching Public Service in the Digital Age covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 203 | Worker Info Exchange | https://www.workerinfoexchange.org | 37.3 | 37.3 | 0 | 0.92 | LOW | HIGH | criteria | Worker Info Exchange covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: Worker Info Exchange is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 204 | UrbanistAI | https://site.urbanistai.com | 37.2 | 42.2 | -5 | 0.92 | LOW | LOW | criteria | UrbanistAI scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 205 | Humanitarian Data Exchange | https://data.humdata.org | 36.3 | 36.3 | 0 | 0.92 | LOW | MEDIUM | criteria | Humanitarian Data Exchange covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 206 | Find local consultations | https://gov.uk/find-local-consultations | 36.3 | 36.3 | 0 | 0.83 | LOW | MEDIUM | criteria | Find local consultations scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 207 | Monitor Mamdani | https://monitormamdani.com/ | 36.3 | 36.3 | 0 | 0.75 | LOW | LOW | criteria | Monitor Mamdani scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 208 | Open Access – Transparency International UK | https://openaccess.transparency.org.uk | 36.3 | 36.3 | 0 | 0.72 | LOW | MEDIUM | criteria | Open Access – Transparency International UK covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 209 | ORCID | https://orcid.org | 36.3 | 36.3 | 0 | 0.92 | LOW | MEDIUM | criteria | ORCID covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 210 | Turbo Phonebank | https://turbophonebank.com | 36.3 | 36.3 | 0 | 0.75 | LOW | LOW | criteria | Turbo Phonebank scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 211 | DoNotPay | https://www.donotpay.com | 36.3 | 36.3 | 0 | 0.67 | MEDIUM | LOW | criteria | DoNotPay covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 212 | Marks Out Of Tenancy | https://www.marksoutoftenancy.com | 36.3 | 36.3 | 0 | 0.83 | LOW | LOW | criteria | Marks Out Of Tenancy scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 213 | Martus | https://www.martus.org | 36.3 | 36.3 | 0 | 0.75 | LOW | MEDIUM | criteria | Martus covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 214 | River Sentiment Dashboard | https://riversentiment.app | 35.4 | 30.4 | 5 | 0.75 | LOW | LOW | criteria | River Sentiment Dashboard covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 215 | The Data Trusts Initiative | https://datatrusts.uk | 35.3 | 35.3 | 0 | 1.0 | LOW | LOW | criteria | The Data Trusts Initiative covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 216 | Agreement Engine | https://medium.com/metagov/introducing-the-agreement-engine-bf03b6d5c16c | 35.3 | 35.3 | 0 | 0.55 | MEDIUM | NONE | criteria | Agreement Engine scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 217 | The Guide to Major Trusts 2025/26 | https://www.dsc.org.uk/publication/the-guide-to-major-trusts-2025-26/ | 34.5 | 26.5 | 8 | 0.75 | LOW | MEDIUM | modifier | The Guide to Major Trusts 2025/26 covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 218 | Data Observation Toolkit (DOT) | https://github.com/datakind/data-observation-toolkit | 34.3 | 34.3 | 0 | 1.0 | LOW | LOW | criteria | Data Observation Toolkit (DOT) covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 219 | Pastecal | https://github.com/kazad/pastecal | 34.3 | 34.3 | 0 | 0.75 | LOW | LOW | criteria | Pastecal covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 220 | youtube-dl | https://github.com/ytdl-org/youtube-dl | 34.3 | 34.3 | 0 | 0.75 | LOW | MEDIUM | criteria | youtube-dl covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 221 | Granitt | https://granitt.io | 34.3 | 34.3 | 0 | 0.75 | LOW | LOW | criteria | Granitt scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 222 | Nook CRM | https://nookcrm.com | 34.3 | 34.3 | 0 | 0.83 | LOW | LOW | criteria | Nook CRM covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 223 | Objector.ai | https://objector.ai | 34.3 | 34.3 | 0 | 0.92 | LOW | LOW | criteria | Objector.ai scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 224 | Pageviews Analysis | https://pageviews.wmcloud.org | 34.3 | 34.3 | 0 | 0.75 | LOW | MEDIUM | criteria | Pageviews Analysis covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 225 | Timecounts | https://timecounts.org | 34.3 | 34.3 | 0 | 0.75 | LOW | MEDIUM | criteria | Timecounts scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 226 | Who Targets Me Trends | https://trends.whotargets.me | 34.3 | 34.3 | 0 | 0.92 | LOW | LOW | criteria | Who Targets Me Trends covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 227 | Objector.ai | https://www.objector.ai | 34.3 | 34.3 | 0 | 0.83 | LOW | LOW | criteria | Objector.ai scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 228 | WhatDoTheyKnow | https://www.whatdotheyknow.com | 34.3 | 34.3 | 0 | 1.0 | LOW | MEDIUM | criteria | WhatDoTheyKnow covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 229 | Bluesky | https://bsky.app | 34.2 | 40.2 | -6 | 0.75 | LOW | HIGH | criteria | Bluesky covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 230 | Viewpoints | https://viewpoints.xyz | 34.2 | 40.2 | -6 | 0.75 | LOW | LOW | criteria | Viewpoints scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 231 | Public AI Inference Utility | https://publicai.co/ | 33.4 | 30.4 | 3 | 0.92 | LOW | LOW | criteria | Public AI Inference Utility covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 232 | CiviClick | https://civiclick.com | 33.3 | 33.3 | 0 | 0.75 | LOW | LOW | criteria | CiviClick scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 233 | UK Parliament Developer Portal | https://developer.parliament.uk | 33.3 | 33.3 | 0 | 0.72 | LOW | MEDIUM | criteria | UK Parliament Developer Portal covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 234 | Global Fact-Check Bot (GFC) | https://globalfactcheck.bot/ | 33.3 | 33.3 | 0 | 0.83 | LOW | LOW | criteria | Global Fact-Check Bot (GFC) covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 235 | GOV.UK Forms | https://www.forms.service.gov.uk | 33.3 | 33.3 | 0 | 1.0 | LOW | LOW | criteria | GOV.UK Forms covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 236 | Charity Digital Skills Report | https://charitydigitalskills.co.uk | 32.4 | 32.4 | 0 | 0.92 | LOW | MEDIUM | criteria | Charity Digital Skills Report covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 237 | In the news | https://en.wikipedia.org/wiki/wikipedia:in_the_news | 32.4 | 32.4 | 0 | 0.67 | MEDIUM | LOW | criteria | In the news covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 238 | Gender Pay Gap Service | https://gender-pay-gap.service.gov.uk | 32.4 | 32.4 | 0 | 1.0 | LOW | LOW | criteria | Gender Pay Gap Service covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 239 | whatsmeow | https://github.com/tulir/whatsmeow | 32.4 | 32.4 | 0 | 0.5 | MEDIUM | NONE | criteria | whatsmeow covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 240 | Moral Machine | https://moralmachine.net | 32.4 | 32.4 | 0 | 0.83 | LOW | MEDIUM | criteria | Moral Machine covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 241 | The Accountability Project | https://publicaccountability.org | 32.4 | 32.4 | 0 | 0.75 | LOW | LOW | criteria | The Accountability Project covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 242 | Remember to Vote | https://remembertovote.org.uk | 32.4 | 32.4 | 0 | 0.67 | MEDIUM | LOW | criteria | Remember to Vote scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 243 | Riseup | https://riseup.net | 32.4 | 32.4 | 0 | 0.75 | LOW | MEDIUM | criteria | Riseup covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 244 | Who Posted What? | https://whopostedwhat.com | 32.4 | 32.4 | 0 | 0.75 | LOW | MEDIUM | criteria | Who Posted What? covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 245 | GOV.UK One Login | https://www.sign-in.service.gov.uk | 32.4 | 32.4 | 0 | 1.0 | LOW | LOW | criteria | GOV.UK One Login covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 246 | Tor Project | https://www.torproject.org | 32.2 | 40.2 | -8 | 1.0 | LOW | HIGH | criteria | Tor Project covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 247 | OA.Report | https://oa.report | 31.4 | 31.4 | 0 | 0.92 | LOW | LOW | criteria | OA.Report covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 248 | OpenAudience | https://openaudience.org | 31.4 | 31.4 | 0 | 0.75 | LOW | MEDIUM | criteria | OpenAudience covers relevant terrain — governance features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 249 | Overton | https://overton.io | 31.4 | 31.4 | 0 | 0.83 | LOW | LOW | criteria | Overton scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 250 | PostBug | https://postbug.com | 31.4 | 31.4 | 0 | 0.75 | LOW | MEDIUM | criteria | PostBug scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 251 | semanticClimate | https://semanticclimate.github.io | 31.4 | 31.4 | 0 | 0.67 | MEDIUM | LOW | criteria | semanticClimate covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 252 | The Circuit | https://thecircuit.cc | 31.4 | 31.4 | 0 | 0.92 | LOW | LOW | criteria | The Circuit covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 253 | Go Vocal | https://www.govocal.com | 31.3 | 37.3 | -6 | 0.83 | LOW | MEDIUM | criteria | Go Vocal scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 254 | Entitledto | https://entitledto.co.uk | 30.4 | 30.4 | 0 | 0.72 | LOW | MEDIUM | criteria | Entitledto covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 255 | DeepSeek-V3 | https://github.com/deepseek-ai/deepseek-v3 | 30.4 | 30.4 | 0 | 0.75 | LOW | HIGH | criteria | DeepSeek-V3 covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. High popularity risk: DeepSeek-V3 is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 256 | Nyaaya | https://nyaaya.org | 30.4 | 30.4 | 0 | 0.83 | LOW | MEDIUM | criteria | Nyaaya covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 257 | Plausible Analytics | https://plausible.io | 30.4 | 30.4 | 0 | 0.75 | LOW | LOW | criteria | Plausible Analytics covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 258 | GOV.UK Notify | https://www.notifications.service.gov.uk | 30.4 | 30.4 | 0 | 1.0 | LOW | MEDIUM | criteria | GOV.UK Notify covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 259 | Prolific | https://www.prolific.com | 30.4 | 30.4 | 0 | 0.92 | LOW | MEDIUM | criteria | Prolific covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. |
| 260 | Privacy Badger | https://privacybadger.org | 30.2 | 38.2 | -8 | 0.92 | LOW | MEDIUM | criteria | Privacy Badger covers relevant terrain — open infrastructure features in the dossier — but the score is limited by partial fit against my highest-weight criteria. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 261 | Dunadyne | https://dunadyne.org | 29.4 | 30.4 | -1 | 0.67 | MEDIUM | LOW | criteria | Dunadyne increases state or institutional capacity to monitor and manage civic activity — but I can't find accountability mechanisms directed at those affected. That asymmetry is the problem. |
| 262 | Local Insight | https://localinsight.org | 29.4 | 29.4 | 0 | 0.83 | LOW | MEDIUM | criteria | Local Insight doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 263 | GovWise | https://www.govwise.ai/en | 29.4 | 29.4 | 0 | 0.75 | LOW | LOW | criteria | GovWise doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 264 | MyActionCenter | https://www.myaction.center | 29.4 | 29.4 | 0 | 0.75 | LOW | LOW | criteria | MyActionCenter scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. |
| 265 | Collab.Land | https://collab.land | 28.6 | 18.6 | 10 | 0.75 | LOW | LOW | modifier | Collab.Land applies programmable, verifiable mechanisms to governance — this is precisely what I mean by 'programmable governance': not just a platform with governance features, but mechanisms where the rules are encoded and auditable. The on-chain or cryptographically verifiable component gets a meaningful boost from me — this is the rare case where 'programmable governance' isn't just a marketing claim. |
| 266 | CivicMatch | https://civicmatch.app | 28.4 | 28.4 | 0 | 0.67 | MEDIUM | LOW | criteria | CivicMatch doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 267 | GOV Reuse Library | https://dev.reuselibrary.service.justice.gov.uk/ | 28.4 | 28.4 | 0 | 0.75 | LOW | LOW | criteria | GOV Reuse Library doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 268 | Citizens Advice Tableau Public Profile | https://public.tableau.com/app/profile/citizensadvice/vizzes | 28.4 | 28.4 | 0 | 0.58 | MEDIUM | NONE | criteria | Citizens Advice Tableau Public Profile doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 269 | Right To Know | https://right-to-know.org | 28.4 | 28.4 | 0 | 0.92 | LOW | MEDIUM | criteria | Right To Know doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 270 | Consciousness Evolution Operating System (ConSoc) | https://www.consoc.io | 28.4 | 28.4 | 0 | 0.42 | MEDIUM | NONE | criteria | Consciousness Evolution Operating System (ConSoc) doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 271 | Plinth | https://www.plinth.org.uk | 28.4 | 28.4 | 0 | 1.0 | LOW | LOW | criteria | Plinth doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 272 | Local Deep Researcher | https://local-deep-researcher-hnmh.vercel.app/ | 28 | 17.6 | 0 | 0.3 | HIGH | NONE | underdog-protection | The dossier on Local Deep Researcher is thin — I can't score it properly against my criteria. Underdog protection applies: I'm holding it at the floor rather than penalising it for being underdocumented. What little is there hints at relevance, but I'd need more to push higher. |
| 273 | Unknown | https://tracking-template-38b4c.web.app | 28 | 12.7 | 0 | 0.08 | HIGH | NONE | underdog-protection | The dossier on Unknown is thin — I can't score it properly against my criteria. Underdog protection applies: I'm holding it at the floor rather than penalising it for being underdocumented. What little is there hints at relevance, but I'd need more to push higher. |
| 274 | Pear by Holepunch | https://docs.holepunch.to | 27.5 | 27.5 | 0 | 0.75 | LOW | LOW | criteria | Pear by Holepunch doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 275 | Full Fact AI | https://fullfact.org/ai | 27.5 | 27.5 | 0 | 1.0 | LOW | HIGH | criteria | Full Fact AI doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. High popularity risk: Full Fact AI is well-known and well-documented, which inflates my confidence. Stripping out the documentation advantage, I'd estimate this 8-12 points lower. |
| 276 | PatCit | https://github.com/cverluise/patcit | 27.5 | 27.5 | 0 | 0.83 | LOW | LOW | criteria | PatCit doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 277 | Ladder Hub | https://ladderhub.org/ | 27.5 | 22.5 | 5 | 0.67 | MEDIUM | LOW | criteria | Ladder Hub doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 278 | Keep It In The Community | https://plunkett.my.site.com/keepitinthecommunity/s | 27.5 | 27.5 | 0 | 0.58 | MEDIUM | NONE | criteria | Keep It In The Community doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 279 | User Research Library | https://research.localgov.digital | 27.5 | 27.5 | 0 | 0.83 | LOW | MEDIUM | criteria | User Research Library doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 280 | RightDD | https://www.rightsdd.com | 27.5 | 27.5 | 0 | 0.75 | LOW | MEDIUM | criteria | RightDD doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 281 | Watch Duty | https://www.watchduty.org | 27.5 | 27.5 | 0 | 0.75 | LOW | LOW | criteria | Watch Duty doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 282 | GOV.UK Pay | https://www.payments.service.gov.uk | 27.4 | 32.4 | -5 | 1.0 | LOW | MEDIUM | criteria | GOV.UK Pay increases state or institutional capacity to monitor and manage civic activity — but I can't find accountability mechanisms directed at those affected. That asymmetry is the problem. |
| 283 | We Live It | https://www.welivedit.ai | 27.3 | 33.3 | -6 | 0.67 | MEDIUM | LOW | criteria | We Live It scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about: not just that decisions are made, but that those affected can see how. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 284 | AISafety.info | https://aisafety.info | 26.5 | 26.5 | 0 | 0.75 | LOW | LOW | criteria | AISafety.info doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 285 | Turn2us Benefits Calculator | https://benefits-calculator.turn2us.org.uk | 26.5 | 26.5 | 0 | 0.83 | LOW | MEDIUM | criteria | Turn2us Benefits Calculator doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 286 | Violation Tracker UK | https://violationtrackeruk.goodjobsfirst.org | 26.5 | 26.5 | 0 | 0.55 | MEDIUM | NONE | criteria | Violation Tracker UK doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 287 | Service Manual | https://www.gov.uk/service-manual | 26.5 | 26.5 | 0 | 1.0 | LOW | MEDIUM | criteria | Service Manual doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 288 | Shared Digital Guides | https://www.shareddigitalguides.org.uk | 26.5 | 26.5 | 0 | 0.67 | MEDIUM | LOW | criteria | Shared Digital Guides doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 289 | FixMyBlock | https://fixmyblock.org | 25.5 | 25.5 | 0 | 0.83 | LOW | LOW | criteria | FixMyBlock doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 290 | Granicus | https://granicus.com/uk | 25.5 | 25.5 | 0 | 0.92 | LOW | MEDIUM | criteria | Granicus doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 291 | GreenPT | https://greenpt.ai/ | 25.5 | 25.5 | 0 | 0.75 | LOW | LOW | criteria | GreenPT doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 292 | Atlas of Surveillance | https://atlasofsurveillance.org | 25.2 | 38.2 | -13 | 0.92 | LOW | LOW | modifier | I'm scoring Atlas of Surveillance low primarily because the core model involves data extraction or surveillance without meaningful accountability to those whose data is used — that's a direct conflict with my values around collective ownership and accountability. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 293 | Dovetail | https://dovetail.network | 24.5 | 24.5 | 0 | 0.75 | LOW | LOW | criteria | Dovetail doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 294 | FarmerChat | https://farmerchat.digitalgreen.org | 24.5 | 24.5 | 0 | 0.75 | LOW | LOW | criteria | FarmerChat doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 295 | Public Media Stack | https://publicmediastack.com | 24.5 | 24.5 | 0 | 0.75 | LOW | LOW | criteria | Public Media Stack doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 296 | Society for Hopeful Technologists | https://societyforhopefultechnologists.org | 23.5 | 23.5 | 0 | 0.75 | LOW | LOW | criteria | Society for Hopeful Technologists doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 297 | The List | https://the-list.uk | 23.5 | 23.5 | 0 | 0.83 | LOW | LOW | criteria | The List doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 298 | Polimorphic | https://www.polimorphic.com | 23.4 | 29.4 | -6 | 0.92 | LOW | LOW | criteria | Polimorphic doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. The extractive or surveillance dimension here is what pulls the score down — I can't endorse a model that extracts from communities without redistributing governance. |
| 299 | Labour Xchange | https://labourxchange.uk | 22.5 | 22.5 | 0 | 0.83 | LOW | MEDIUM | criteria | Labour Xchange doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 300 | Missing Numbers | https://missingnumbers.org | 22.5 | 22.5 | 0 | 0.92 | LOW | LOW | criteria | Missing Numbers doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 301 | Registers and collaboration: making lists we can trust | https://theodi.org/insights/reports/registers-and-collaboration-making-lists-we-can-trust-report | 22.5 | 22.5 | 0 | 0.75 | LOW | LOW | criteria | Registers and collaboration: making lists we can trust doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 302 | OpenOrigins | https://www.openorigins.com | 22.5 | 22.5 | 0 | 0.75 | LOW | LOW | criteria | OpenOrigins doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 303 | DoGooder | https://dogooder.co | 21.6 | 21.6 | 0 | 0.6299999999999999 | MEDIUM | LOW | criteria | DoGooder doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 304 | Filmot | https://filmot.com | 21.6 | 21.6 | 0 | 0.67 | MEDIUM | LOW | criteria | Filmot doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 305 | Understanding Your Morality | https://programs.clearerthinking.org/understanding-your-morality/ | 21.6 | 21.6 | 0 | 0.75 | LOW | MEDIUM | criteria | Understanding Your Morality doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 306 | PoliMonitor | https://www.polimonitor.com | 21.6 | 21.6 | 0 | 0.67 | MEDIUM | LOW | criteria | PoliMonitor doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 307 | Public Editor | https://www.publiceditor.io | 21.6 | 21.6 | 0 | 0.55 | MEDIUM | NONE | criteria | Public Editor doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 308 | Yoti | https://www.yoti.com | 21.6 | 21.6 | 0 | 0.92 | LOW | MEDIUM | criteria | Yoti doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 309 | Responsible Tech Guide 2025 | https://alltechishuman.org/responsible-tech-guide-2025 | 20.6 | 20.6 | 0 | 0.75 | LOW | LOW | criteria | Responsible Tech Guide 2025 doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 310 | Mapping.kids | https://mapping.kids | 20.6 | 20.6 | 0 | 0.42 | MEDIUM | NONE | criteria | Mapping.kids doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 311 | DemTech Navigator | https://navigator.oii.ox.ac.uk | 20.6 | 20.6 | 0 | 0.75 | LOW | LOW | criteria | DemTech Navigator doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 312 | Sci-Hub | https://sci-hub.se | 20.6 | 20.6 | 0 | 0.55 | MEDIUM | NONE | criteria | Sci-Hub doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 313 | Digital Account Management Toolkit | https://digitalcharitylab.org/product/digital-account-management-toolkit | 19.6 | 19.6 | 0 | 0.75 | LOW | LOW | criteria | Digital Account Management Toolkit doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 314 | Esper | https://esper.com/product | 19.6 | 19.6 | 0 | 0.83 | LOW | LOW | criteria | Esper doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 315 | Whoisology | https://whoisology.com | 19.5 | 24.5 | -5 | 0.75 | LOW | MEDIUM | criteria | Whoisology increases state or institutional capacity to monitor and manage civic activity — but I can't find accountability mechanisms directed at those affected. That asymmetry is the problem. |
| 316 | Conservative Party Funding | https://conservativepartyfunding.co.uk | 18.6 | 18.6 | 0 | 0.75 | LOW | LOW | criteria | Conservative Party Funding doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 317 | The Decelerator | https://decelerator.org.uk | 17.6 | 17.6 | 0 | 0.75 | LOW | LOW | criteria | The Decelerator doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 318 | COTSI (Cyber Operational Threat Situational Intelligence) | https://cotsi.org/ | 17.5 | 22.5 | -5 | 0.75 | LOW | LOW | criteria | COTSI (Cyber Operational Threat Situational Intelligence) increases state or institutional capacity to monitor and manage civic activity — but I can't find accountability mechanisms directed at those affected. That asymmetry is the problem. |
| 319 | PolicyMogul | https://policymogul.com | 16.7 | 16.7 | 0 | 0.67 | MEDIUM | LOW | criteria | PolicyMogul doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| 320 | WorkInCharities | https://www.workincharities.co.uk | 16.7 | 16.7 | 0 | 0.67 | MEDIUM | LOW | criteria | WorkInCharities doesn't land well against my constitution. The project sits outside my core focus: budget transparency, governance legibility, and collective ownership. |
| N/A | Unknown Academic Paper (SSRN 5351275) | https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5351275 | N/A | 0 | 0 | 0.1 | HIGH | NONE | abstained | Dossier is empty and homepage is inaccessible — I can't assess Unknown Academic Paper (SSRN 5351275) against any of my criteria. Abstaining. |
---

## 11. Ranking highlights

<details>
<summary>Ranking highlights</summary>

### Top 10 extended notes

- **Aragon** (score 70.7, completeness 0.75): "Aragon scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about..." [no major caveats]
- **The DAO (Standard DAO Framework)** (score 68.0, completeness 0.75): "The DAO (Standard DAO Framework) applies programmable, verifiable mechanisms to governance — this is precisely what I me..." [no major caveats]
- **Ethelo** (score 67.9, completeness 1.0): "Ethelo scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about..." [no major caveats]
- **Bonfire** (score 65.8, completeness 0.83): "Bonfire demonstrates what I mean by collective ownership being technically viable — the governance architecture gives co..." [no major caveats]
- **LiquidFeedback** (score 65.8, completeness 1.0): "LiquidFeedback scores well on governance legibility — it makes decision-making processes inspectable, which is what I ca..." [no major caveats]
- **Tech Coops List** (score 65.8, completeness 0.75): "Tech Coops List scores well on governance legibility — it makes decision-making processes inspectable, which is what I c..." [no major caveats]
- **Open Heart Mind (OHM)** (score 65.7, completeness 0.83): "Open Heart Mind (OHM) scores well on governance legibility — it makes decision-making processes inspectable, which is wh..." [no major caveats]
- **Cobudget** (score 64.7, completeness 1.0): "Cobudget scores well on governance legibility — it makes decision-making processes inspectable, which is what I care abo..." [HIGH popularity risk — documentation advantage likely inflates score]
- **Polis** (score 64.7, completeness 1.0): "Polis scores well on governance legibility — it makes decision-making processes inspectable, which is what I care about:..." [HIGH popularity risk — documentation advantage likely inflates score]
- **Populate Tools** (score 64.7, completeness 0.83): "Populate Tools scores well on governance legibility — it makes decision-making processes inspectable, which is what I ca..." [no major caveats]
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

- **Aragon at #1**: Aragon leads not on criteria breadth but on M1 (on-chain programmable governance, +6 points) plus strong constitutional alignment. Its score of 70.7 reflects on-chain verifiable treasury and governance — precisely what this constitution rewards. But Aragon is also a well-known DAO platform with HIGH familiarity risk. Strip documentation advantage and the score may sit 5-8 points lower, potentially handing the top spot to The DAO Framework or Bonfire.
- **Decidim at #22**: In the prior run (rank-huda.py), Decidim was #1 at 64.7. In the correct run (score_huda.py), it is #22 at 57.8 because it gets no M1 modifier benefit — Decidim's governance is sophisticated but not on-chain/cryptographic. The constitution's M1 trigger is the decisive differentiator between Aragon (#1) and Decidim (#22).
- **Ethelo at #3**: A commercial group-decision platform. Scores well on governance legibility and collective ownership framing. Unexpected because it is less community-owned than Aragon or Bonfire — but the constitution's keyword matching fires on its cooperative governance framing.
- **LittleSis at #32 constitutionally / #1 jury**: The largest single discrepancy between jury and constitution. LittleSis maps corporate-political power networks — directly relevant to 'making power visible'. The jury scores it at 93; the constitution scores it at 55.0 because it lacks collective ownership and treasury transparency. The failure mode in action.
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
| Cobudget | 64.7 | 54.7 | would drop in ranking |
| Polis | 64.7 | 54.7 | would drop in ranking |
| mySociety Datasets and APIs | 62.7 | 52.7 | would drop in ranking |
| Decidim | 57.8 | 47.8 | would drop in ranking |
| Alaveteli | 55.9 | 45.9 | would drop in ranking |
| CiviCRM | 53.9 | 43.9 | would drop in ranking |
| Mastodon | 52.1 | 42.1 | would drop in ranking |
| Creative Commons | 52.0 | 42.0 | would drop in ranking |
| Humanitarian OpenStreetMap Team (HOT) | 52.0 | 42.0 | would drop in ranking |
| Open Contracting Partnership | 52.0 | 42.0 | would drop in ranking |
| Bluesky Social | 49.1 | 39.1 | would drop in ranking |
| RxC Quadratic Voting | 48.0 | 38.0 | would drop in ranking |
| FixMyStreet | 47.1 | 37.1 | would drop in ranking |
| TheyWorkForYou | 47.1 | 37.1 | would drop in ranking |
| Modular Politics | 46.1 | 36.1 | would drop in ranking |
| Mastodon C | 46.1 | 36.1 | would drop in ranking |
| Abstract Wikipedia | 45.0 | 35.0 | would drop in ranking |
| CKAN | 44.1 | 34.1 | would drop in ranking |
| EDGAR | 44.1 | 34.1 | would drop in ranking |
| MapIt | 44.1 | 34.1 | would drop in ranking |

New top 10 with discount applied: Aragon (pop risk: LOW) drops by 10 points if HIGH. Aragon at 70.7 (pop risk: LOW) may overtake. The DAO Framework (#2, MEDIUM pop risk) is the most likely new leader under this scenario.

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
| Aragon | Well-known DAO governance platform, likely in training data, completeness 0.75 | 70.7 | 0.75 | Constitutional winner; LOW pop risk means documentation advantage is not a major concern here — score likely genuine |
| Alaveteli | mySociety tool, well-documented, decade-plus history | 56.9 | 0.95 | Mid-high constitutional rank; jury ranked it #10 (score 80), close alignment |
| Loomio | Widely known cooperative decision tool, documented cooperative structure | 55.9 | 0.95 | Scores well on C3 (collective ownership) — dossier richness partially inflating confidence |
| Aragon | Well-known DAO governance platform, likely in training data | 70.7 | 0.75 | Constitutional winner — LOW pop risk means documentation advantage is not driving the top score; M1 on-chain modifier (+6) is the decisive factor |
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
The modifier fires only for cryptographic/on-chain mechanisms. This means Decidim (#22, 57.8) — which has sophisticated governance architecture — gets no M1 benefit, while Aragon (#1, 70.7) does (+6 points). The winner is partly an artefact of this trigger boundary. The constitution intended to reward functional on-chain transparency, but in practice the keyword trigger cannot distinguish functional from aspirational. The `on_chain_verification` field proposed in Part E would fix this.

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

> 2. Modifier 1 (programmable governance, +8–12 points) fires only for cryptographic or on-chain mechanisms — this is the decisive factor separating Aragon (#1, 70.7) from Decidim (#22, 57.8). Aragon gets +6 from M1; Decidim gets 0. Is the distinction between "programmable governance via smart contracts" and "programmable governance via open-source democratic software" one you would actually draw? Or is on-chain mechanism too narrow a trigger for the value you're pointing at?

> 3. The jury ranked vTaiwan 4th (score 87.5) against the constitutional rank of 68th. vTaiwan is one of the most consequential participatory democracy experiments in recent history — government-binding, genuinely deliberative, open-source. The constitution scores it mid-range because it lacks collective ownership and treasury transparency mechanisms. Does that feel right to you, or is the jury closer to your actual intuition here than the constitution is?

> 4. Looking at your top-ranked projects: are there any you'd expect to score lower because they're well-known and well-documented rather than genuinely fitting your constitution? And are there obscure projects buried lower in the ranking that you think deserve higher consideration?

> 5. The constitutional failure mode identified here is that mass-participation deliberative democracy tools are systematically mid-ranked because the criteria are built around collective ownership as a structural property rather than participatory legitimacy as a process property. Is this a genuine blind spot you'd want corrected — and if so, how would you modify the criteria without losing the focus on collective ownership that makes this constitution distinctive?
