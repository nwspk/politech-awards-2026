# Evaluative Constitution
## Evaluator: Huda Abdirahim
## Version: v3 | 2026-03-30

> ⚠️ Synthetic estimate. This constitution was inferred from public evidence by an AI agent. It does not claim to reconstruct Huda Abdirahim's true beliefs. See evidence-assessed.md for sources and confidence levels. Overall evidence confidence: MEDIUM.

> **v3 changes (2026-03-30):** Three changes based on Huda's direct feedback on v2. (1) C3 (collective ownership) reweighted 20→12 pts — exploration interest, not hard requirement. (2) Modifier 1 (programmable governance) expanded to include off-chain democratic software — the on/off-chain distinction is not meaningful, enforceability and legibility in practice is what matters. (3) New C8 (decision-making leverage, 8 pts) added — does participation lead to real outcomes? Addresses the vTaiwan gap in v2.

---

## Part A: Project Criteria

### Criterion 1: Budget and treasury transparency as civic infrastructure
- **Weight:** 20 points
- **Why Huda:** The bio's most explicit value claim: "budget transparency is a precondition for legitimate decision-making." TreasureCorp's entire design premise — making treasury data legible, auditable, analytically accessible — enacts this in code. [bio, CONFIRMED; TreasureCorp, CONFIRMED]
- **High score:** Projects that make public spending, institutional budgets, or collective resource allocation directly visible and actionable for accountability. Tools that treat financial transparency as democratic infrastructure, not a compliance requirement.
- **Low score:** Efficiency tools that improve internal spending decisions without increasing legibility to those affected. Tools where transparency flows only to administrators, not to communities.
- **Dossier fields:** political_relevance_summary, scraped_description, communities_served, primary_users_or_beneficiaries, issue_area

### Criterion 2: Governance legibility — making power and decision-making visible
- **Weight:** 20 points
- **Why Huda:** "Code shapes power and that relationship needs to be made visible and accountable." TreasureCorp tracks governance proposals and voting patterns as a core feature. [bio, CONFIRMED; TreasureCorp, CONFIRMED]
- **High score:** Projects that make decision-making processes explicitly visible to those affected — who has power, how it is exercised, what choices were made. Tools that enable accountability through visibility.
- **Low score:** Decision automation without legibility. Governance tools that increase efficiency without making processes inspectable. Tools that recommend without explaining.
- **Dossier fields:** political_relevance_summary, scraped_description, issue_area, primary_users_or_beneficiaries

### Criterion 3: Collective ownership and community governance of infrastructure
- **Weight:** 12 points
- **Why Huda:** "Collective ownership of resources should be technically legible and democratically governed" — the constitutional core of the bio. [bio, CONFIRMED] Reweighted in v3 based on direct feedback: collective ownership is an exploration space and interest, not a hard requirement. Strong ownership still helps but is no longer the dominant filter.
- **High score:** Projects owned or governed by their communities. Cooperatives, DAOs, community commons. Projects that make collective ownership technically viable — distributed governance rights over shared infrastructure.
- **Low score:** Platforms that serve communities without giving them ownership. Open-source code with centralised decision-making. Tools that extract value from collective use without redistributing governance rights.
- **Dossier fields:** scraped_description, political_relevance_summary, communities_served

### Criterion 4: Practical deployment and real-world use
- **Weight:** 12 points (max 8 for credible-but-undeployed prototypes)
- **Why Huda:** Builder-practitioner orientation; TreasureCorp is a live beta product making specific technical choices for operational reality. [TreasureCorp, PROBABLE inference]
- **High score:** Tools actively deployed with real users. Evidence of adoption. Platforms that have moved from prototype to practice.
- **Low score:** Concept proposals, white papers, frameworks without implementation. Reports produced by mature institutions.
- **Dossier fields:** scraped_description, homepage_http_status, primary_users_or_beneficiaries

### Criterion 5: Interoperability and open standards
- **Weight:** 12 points
- **Why Huda:** TreasureCorp's architecture relies on public on-chain data — a design choice preferring open, standardised data over proprietary APIs. Interest in "programmable governance" implies preference for composable, open infrastructure. [TreasureCorp, PROBABLE; bio, CONFIRMED]
- **High score:** Open standards, open data formats, interoperable protocols. Tools that can connect to adjacent civic tech. Portability commitments.
- **Low score:** Proprietary platforms with lock-in. Siloed infrastructure that cannot connect to adjacent systems.
- **Dossier fields:** scraped_description, political_relevance_summary, issue_area

### Criterion 6: Political infrastructure focus (not just political content)
- **Weight:** 12 points
- **Why Huda:** "Political infrastructure" is listed explicitly as an interest area. TreasureCorp is infrastructure for governance — a layer below applications. [bio, CONFIRMED]
- **High score:** Foundational plumbing for political participation — civic data APIs, governance frameworks, open identity infrastructure that other tools build on.
- **Low score:** Single-purpose civic applications with no infrastructure role. Consumer apps with political content.
- **Dossier fields:** political_relevance_summary, scraped_description, issue_area

### Criterion 7: Legitimacy — is the project itself accountable?
- **Weight:** 6 points (max 3 when underdog protection applies)
- **Why Huda:** "Accountability" appears twice in the bio. A person building accountability tools applies an accountability lens to projects she evaluates. [bio, CONFIRMED]
- **High score:** Transparent funding, published governance model, open-source code, public records of decisions.
- **Low score:** Projects advocating transparency while being opaque about their own operations.
- **Dossier fields:** scraped_description, political_relevance_summary

### Criterion 8: Decision-Making Leverage — does participation lead to real outcomes?
- **Weight:** 8 points
- **Why Huda:** Direct from feedback: "what I care about more is whether people actually have leverage over outcomes." She agreed vTaiwan should score higher — "even without strong ownership or treasury transparency, vTaiwan enables participation that feeds into real decisions. and that matters more to me." She proposed "effective participation" or "decision making leverage" as a core criteria.
- **High score (6–8):** Tools where participation demonstrably feeds into binding or consequential decisions. Participatory democracy tools with government adoption. Systems where the output of collective input has a documented pathway to affecting outcomes.
- **Medium score (3–5):** Tools that enable genuine participation with some pathway to influence, but binding outcomes are not guaranteed or documented.
- **Low score (0–2):** Tools that collect participation signals with no clear mechanism for those signals to affect outcomes. Consultation theatre. Reporting without action.
- **Dossier fields:** political_relevance_summary, policy_outcomes, government_partnerships, communities_served

**Criteria total maximum: 102 points. Normalise by dividing by 1.02 before applying modifiers.**

---

## Part B: Value Modifiers

### Modifier 1: Programmable governance and on-chain transparency
- **Direction:** boost
- **Magnitude:** strong (+8–12 points)
- **Applies when:** Project uses programmable governance mechanisms — whether on-chain/cryptographic OR off-chain democratic software (e.g. Decidim, vTaiwan, open-source participatory platforms). The key test is whether governance is **enforceable and legible in practice**, not the technical substrate used to achieve it.
- **Why Huda:** "Programmable governance" is explicitly listed as an interest. [bio, CONFIRMED] Updated in v3: the on-chain vs off-chain distinction is not meaningful. What matters is whether governance is actually enforceable and legible in practice — on-chain is one way to enforce things but not inherently better.

### Modifier 2: Tools serving communities excluded from traditional financial/governance systems
- **Direction:** boost
- **Magnitude:** moderate (+5–8 points)
- **Applies when:** Project explicitly serves communities shut out of traditional financial infrastructure, governance participation, or civic institutions. The exclusion must be named; the tool must directly address it.
- **Why Huda:** "Collective finance" and "collective ownership" values; DAO governance focus addressing gap where traditional institutions are inaccessible. [bio, CONFIRMED]

### Modifier 3: Making the code-power relationship explicit
- **Direction:** boost
- **Magnitude:** moderate (+4–7 points)
- **Applies when:** Project includes explicit design attention to how its architecture distributes or concentrates power — and makes this visible to users or the public. Not just open-source, but reflexively transparent about its own power architecture.
- **Why Huda:** "Code shapes power and that relationship needs to be made visible and accountable" — the most distinctive claim in the bio. [bio, CONFIRMED]

### Modifier 4: Extractive platforms and surveillance-adjacent tools
- **Direction:** reduce
- **Magnitude:** strong (−8–12 points)
- **Applies when:** Project's core model involves extracting data from communities, monetising collective activity, or increasing surveillance without accountability to those surveilled.
- **Why Huda:** Direct conflict with collective ownership and democratic governance values. [bio, CONFIRMED]

### Modifier 5: Digital governance tools that increase state power without accountability
- **Direction:** reduce
- **Magnitude:** moderate (−5–8 points)
- **Applies when:** Project enables government or institutional actors to manage or monitor civic activity without a corresponding increase in accountability to those affected.
- **Why Huda:** Accountability framing applies in both directions — collective/community power AND state/institutional power. [bio, CONFIRMED]

### Modifier 6: Early-stage tools with credible theory of change
- **Direction:** conditional boost
- **Magnitude:** weak (+3–5 points)
- **Applies when:** Prototype or early-deployment stage AND specifically articulated theory of change AND credible technical approach. Does NOT apply to purely conceptual proposals.
- **Why Huda:** TreasureCorp is itself early-stage; tolerance for credible prototypes is inferred from practitioner context. [TreasureCorp, PROBABLE]

---

## Part C: Procedural Rules

| Rule | Statement | Trigger |
|---|---|---|
| Abstention threshold | Abstain only when dossier has no functional description AND homepage is inaccessible. Thin evidence alone → underdog protection, not abstention. | completeness 0.0–0.1 AND dead link |
| Prototype handling | Prototypes not penalised under C4 — scored on reduced scale (max 8/12) when credible technical description exists. Full C4 credit requires documented deployment. | "beta"/"prototype"/"pilot" with no confirmed deployment |
| Popularity discount | Well-known projects: apply mental model check — score as if dossier were thin. Document result in rationale. | popularity_risk = HIGH AND completeness > 0.8 |
| Tie-breaking | Prefer: (1) populations with fewer alternatives; (2) earlier stage (more leverage); (3) stronger collective governance model. | Equal scores after all criteria + modifiers |
| Uncertainty handling | completeness < 0.35: floor protection (min 28). completeness 0.35–0.6: score capped at 70. completeness > 0.6: normal scoring. | See trigger conditions |
| Novelty credit | Novelty compensates for weak implementation up to +10 when: (a) technically specific theory of change; (b) working prototype exists; (c) gap is demonstrably underserved. No credit for pure concepts. | Novel approach + credible prototype + documented gap |
| Movement vs direct service | Tools serving only individual convenience (no collective governance enabling): −4 to −6 points. Tools doing both: medium-high scores. | Primary function = individual service, no collective governance function |
| Scope of concern | Geographic scope neutral. Cross-jurisdictional replicability is a positive (captured in C5). Global South context: mild positive under M2 when project names and addresses the exclusion gap. | See M2 trigger |

---

## Part D: Underdog Protection

**Decision: YES**

Huda's values — collective ownership, governance legibility for marginalised communities, making code-power relationships visible — are most urgent precisely where projects are least visible. DAO governance infrastructure and collective finance tools are underrepresented in civic tech documentation. Her own professional context (building an early-stage beta product) is the condition underdog protection addresses. A constitution that penalises low-documentation for being underdocumented would structurally bias against the work she is most interested in supporting.

**Uncertainty floor:** dossier_completeness < 0.35 → minimum score of 28 points

**Suspended criteria when floor applies:**
- Criterion 4 (practical deployment): SUSPENDED — scored binary (0 or partial only)
- Criterion 7 (project accountability): REDUCED to maximum 3 points

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Criterion/modifier | Priority |
|---|---|---|---|
| `governance_model` | How the project is governed — DAO, foundation, company, cooperative | C3, M3 | CRITICAL |
| `treasury_transparency` | Whether the project publishes its own finances publicly | C1, C7 | CRITICAL |
| `on_chain_verification` | Whether on-chain or cryptographically verifiable mechanisms are used | M1 | HIGH |
| `communities_excluded_served` | Explicitly excluded communities the project serves | M2, C1 | HIGH |
| `collective_ownership_mechanism` | Specific technical/legal mechanism for collective ownership | C3 | HIGH |
| `data_portability` | Commitment to data portability for users/communities | C5 | USEFUL |
| `funding_source_type` | Foundation/VC/public/collective/bootstrapped | C7, M4 | USEFUL |
| `policy_outcomes` | Documented pathway from participation to binding outcomes | C8 | HIGH |
| `government_partnerships` | Adoption by government or institutional actors | C8 | HIGH |

---

## Synthesis Notes

### Contradiction check

**Potential conflict: Criterion 4 (practical deployment, medium weight) vs Modifier 6 (early-stage prototype boost) vs Underdog Protection (floor for thin dossiers)**

These three elements pull in different directions on prototype/early-stage projects. Resolution: the hierarchy is (1) Underdog Protection sets a floor for thin-dossier projects; (2) Modifier 6 adds credit for credible theory of change; (3) Criterion 4 is scored on reduced scale (max 8/12) for credible-but-undeployed prototypes. The three together mean a credible prototype with thin documentation lands in the 35–50 range (floor + partial criteria + modifier), not at the bottom. This is intentional and coherent with the evidence.

**Potential conflict: Modifier 1 (programmable/democratic governance boost) applied to mainstream civic tech**

In v3, Modifier 1 fires for any project using enforceable, legible governance mechanisms — on-chain OR off-chain democratic software (Decidim, vTaiwan, Pol.is). The key test is enforceability and legibility in practice. A consultative website with no binding pathway does not fire M1. A participatory platform with documented government adoption and binding outcomes fires M1. Traditional civic information sites still do not qualify.

**Potential conflict: Criterion 2 (governance legibility) vs Modifier 5 (state power reduction)**

Criterion 2 can score government tools highly if they increase transparency of their own governance processes. Modifier 5 reduces tools that increase state power without accountability. Resolution: a government tool that increases its own transparency/accountability does not trigger M5; a government tool that increases surveillance or control over citizens without accountability mechanisms does trigger M5. The key is the direction of power and accountability — toward the governed, or away from them.

**New tension: C3 (reweighted down) vs C8 (new)**

C3 dropping from 20→12 means pure DAO/ownership tools lose up to 8 points. C8 (8 pts) rewards tools where participation has demonstrable binding outcomes. This should specifically rerank: vTaiwan (C8 high, was penalised by C3 in v2), Decidim (M1 now fires, C8 moderate), Aragon (C8 likely low — participation within DAO but limited binding outcomes beyond token governance).

### Operational gaps

- `governance_model` and `on_chain_verification` are not standard dossier fields. Score Criterion 3 and Modifier 1 from textual inference in scraped_description and political_relevance_summary. Flag in rationale when these fields are missing.
- The 70-point cap for moderate dossiers (completeness 0.35–0.6) is a conservative heuristic — a genuinely strong fit for C1–C2 could theoretically yield 60+ on criteria alone, so the cap is rarely binding for well-evidenced projects.
- C8 (decision-making leverage) depends on fields not always present in dossiers (policy_outcomes, government_partnerships). Score from political_relevance_summary and communities_served when specialist fields absent.

### Clear winner profile

A project that would clearly win under this constitution: a participatory democracy tool adopted by government or institutional actors with documented evidence that collective input feeds into binding decisions, built on open/programmable governance mechanisms, with transparent budget infrastructure and active deployment. Example: vTaiwan (participatory input feeding into real legislative decisions) or a municipal participatory budgeting platform with verifiable outcome tracking.

### Clear loser profile

A project that would clearly lose: a proprietary civic engagement platform that aggregates citizen data for government use, has opaque governance, and serves primarily to make government administrative processes more efficient without redistributing power or increasing accountability to citizens — and where participation signals have no documented pathway to affecting outcomes.
