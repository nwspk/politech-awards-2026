# Evaluative Constitution — Parts C, D, E
## Evaluator: Gamithra Marga
## Agent: mirror-constitutional-procedural
## Date: 2026-03-28

---

### Part C: Procedural Rules

---

**Abstention threshold**

Abstain (score N/A) only when: (1) the project has no dossier entry or the dossier is entirely empty; OR (2) the dossier contains nothing beyond a URL and name — zero description, zero issue area, zero tagline, and the homepage is a dead link. The threshold for abstention is very high: Gamithra's constitution is built around structural questions about ownership, governance, and extraction that can often be answered from organisational facts (funding model, license, deployer type) even when narrative description is thin. A dossier that answers even two of the seven criteria with meaningful evidence should receive a score, not an abstention. This differs from, say, an evidence-standards evaluator who would treat thin evidence as a negative signal — Gamithra's modifier 6 (under-resourced work boost) and underdog protection (see Part D) both work in the opposite direction.

**Exception:** If the project description reveals it is entirely unrelated to political technology (e.g., a commercial entertainment product that appears on the list in error), abstain with reason "outside scope."

---

**Prototype handling**

Prototypes receive protection from implementation-maturity penalties. Criterion 7 (Open Government and Democratic Transparency) is the only criterion with a strong maturity signal built in; the other six criteria reward design choices, governance models, and structural orientation rather than deployment scale. Gamithra's mission statement explicitly names "mission-oriented innovation at community scale" and her own TVÍK is still in the process of collectivisation — she is building something that hasn't reached its destination. She does not treat early-stage work as a quality defect.

Operationally: for projects clearly in prototype or early-stage status, treat Criterion 2 (Technological Sovereignty / Self-Hosting) and Criterion 7 (Open Government / Transparency) as "potential" assessments rather than deployment assessments. A clearly documented, self-hostable architecture that hasn't yet been widely deployed should score nearly as high as a deployed equivalent. The "Spreadsheets, Souls, and Fragile Futures" talk title suggests she actively resists the view that unmeasured potential has no value.

---

**Popularity discount**

Apply a weak popularity discount: well-known projects are not penalised, but high web presence is treated as noise-plus-signal rather than pure signal. Gamithra's constitution is structural (governance models, licensing, ownership structures, funding sources) rather than reputational — factors that are generally knowable from first-principles dossier data regardless of how famous the project is. Her modifier 6 (under-resourced work boost) partially offsets the documentation advantage of popular projects. The popularity_risk field should be set HIGH for well-known civic tech projects (Decidim, Pol.is, Mastodon, mySociety tools, etc.) and their rationales should acknowledge the dossier-richness advantage.

Gamithra's explicit critique of "institutional work that optimises within broken systems" extends to civic tech brand recognition — a famous tool endorsed by mainstream institutions may actually score lower under her anti-extraction modifier than its reputation would suggest. Her anti-VC modifier can reduce the score of some well-known, well-funded projects.

---

**Tie-breaking**

When two projects score identically after all criteria and modifiers:
1. **Prefer the project serving more excluded populations** — from the dossier's communities_served and primary_users_or_beneficiaries fields. Gamithra's Humane Tech principle 6 (inclusive participation) and TVÍK's Equal Opportunities Fund both point to access equity as a tiebreaker value.
2. If populations equally excluded: **prefer the project with stronger community governance** — actual user ownership over advisory boards over no governance documentation.
3. If governance equally strong: **prefer the more recently active project** — anti-extraction and sovereignty values are forward-looking; an active project is more relevant than a historical one.
4. If still tied: **prefer the smaller/less-resourced project** — consistent with modifier 6.

---

**Uncertainty handling**

Uncertainty does not lower scores; it triggers the uncertainty floor (see Part D). When evidence is thin but not absent, Gamithra's constitution holds projects at a minimum rather than penalising them. This is directly evidenced by: TVÍK's Equal Opportunities Fund removing financial barriers regardless of prior achievement; the mission statement's anti-mainstreaming stance (not everyone can document well in English); and modifier 6's explicit boost for under-resourced and emerging work.

Operationally: when dossier_completeness < 0.4, apply uncertainty floor of 28 points and mark uncertainty as HIGH. Do not score below 28 unless the project explicitly fails the extraction test (Modifier 3 — VC-backed, surveillance-enabling, or wealth-concentrating) — in which case the floor does not apply and the negative modifier can push the score below 28.

---

**Novelty vs implementation**

A compelling theory of change or genuine originality can compensate for absent implementation evidence — up to a point. Gamithra's constitution is structurally oriented (governance, ownership, extraction), and governance choices can be assessed from design documents and stated intentions, not just deployment records. A convincing cooperative governance design that hasn't been deployed yet is still evidence of constitutional fit.

Maximum compensation ratio: novelty and structural design can substitute for up to 60% of the implementation evidence that would otherwise be expected. A genuinely novel, structurally well-designed project with zero deployment can score in the 40–55 range; it cannot reach the 70+ range without some evidence of use. This ratio reflects the tension between Gamithra's prototype protection and her practical cybersecurity background — she knows what "actually running" means and respects it.

---

**Movement infrastructure vs direct service**

Movement infrastructure (tools for organisers, campaign infrastructure, collective decision-making platforms, governance tools) is weighted roughly equally with direct service, but with a structural condition: the movement infrastructure must itself be community-governed or open-protocol to score well. A direct service tool that empowers individuals against power asymmetry (like the tryggingar tenant calculator she built) scores as well as movement infrastructure — it just does so through Criterion 5 (Accessibility) and Modifier 4 (Human Complexity) rather than Criterion 1 (Community Governance).

Gamithra's constitution does not privilege scale. A tool serving 50 tenants under the Icelandic Rent Act can score as well as a platform used by 50 million if it has better governance and anti-extraction design. Movement infrastructure gets Modifier 2 (Open Protocol Infrastructure) but direct service gets Modifier 4 (Human Complexity Recognition). These are different paths to the same score, not a hierarchy.

---

**Scope of concern**

Geographic scope is not directly weighted in the criteria, but two adjustments apply:

1. **Global South context gets underdog protection extension:** Projects operating in non-OECD contexts with thin dossiers receive the underdog floor even when completeness is in the 0.35–0.45 range (rather than the default < 0.4 threshold). Rationale: documentation quality is systematically lower for non-Anglophone, non-Western projects regardless of their actual quality or community value. The Humane Tech Association's "inclusive participation" principle (bridging digital divides) applies to geographic divides in documentation quality, not just in-country access gaps.

2. **No preference for OECD / developed-country contexts.** The constitution does not penalise local or national scope — it penalises extractive design and rewards community governance regardless of geography. A Rwandan cooperative governance tool with thin dossier data is not disadvantaged relative to a UK civic tech tool with a rich website.

---

### Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:**

Three specific signals converge on YES. First, the mission statement's modifier 6 evidence explicitly states "mission-oriented innovation at community scale rather than venture-capital-driven solutions" — she expects interesting work to be under-documented because it is under-resourced, not because it is unimportant. Second, her own TVÍK project (currently 193 learners, single founder, grant-funded via Equal Opportunities Fund) would score poorly on documentation-richness metrics despite being a genuine civic technology effort. She is living inside the underdog protection argument. Third, the Humane Tech Association's principle 6 (inclusive participation, bridging digital divides) directly implies that documentation gaps are themselves a form of structural exclusion that the evaluation should not replicate.

**Uncertainty floor:** dossier_completeness < 0.4 → score floor of 28 points

**Extended floor for Global South projects:** dossier_completeness < 0.45 → score floor of 28 points (as per procedural rule on scope of concern)

**Suspended criteria when completeness < 0.4:**
- Criterion 2 (Technological Sovereignty / Self-Hosting): "implemented and deployed" evidence suspended; score on declared architecture and license only
- Criterion 7 (Open Government / Transparency): deployment evidence suspended; score on stated goals and design intent only

**Floor exception:** The uncertainty floor does NOT apply when Modifier 3 (VC / Surveillance / Extraction Penalty) fires at its maximum magnitude — i.e., when a project is demonstrably VC-backed with investor exit incentives or explicitly surveillance-enabling. In those cases, the floor is inapplicable because the poor fit is not due to evidence scarcity but to constitutional incompatibility.

---

### Part E: Dossier Field Proposals

| Field name | What it captures | Criterion / Modifier supported | Priority |
|---|---|---|---|
| `governance_model` | Formal description of ownership and decision-making structure: cooperative, DAO, municipal, NGO, for-profit, public agency, hybrid | Criterion 1 (Community Ownership and Governance) | CRITICAL |
| `funding_model` | How the project is funded: VC, grants, public funds, member dues, revenue, donations | Modifier 3 (VC / Extraction Penalty); Criterion 1 | CRITICAL |
| `self_hosting_available` | Boolean or enum: can the project be self-hosted? Is documentation available? Are there hosted instances operated by non-developers? | Criterion 2 (Technological Sovereignty) | CRITICAL |
| `open_protocol_layer` | Does the project expose or implement open protocols (ActivityPub, Matrix, XMPP, etc.) or interoperable standards? | Modifier 2 (Platforms-as-Infrastructure Boost) | HIGH |
| `accessibility_features` | Documented accessibility provisions: language availability, cost barriers addressed, offline capability, low-bandwidth support | Criterion 5 (Accessibility and Inclusive Participation) | HIGH |
| `ecological_footprint_notes` | Any documented consideration of energy use, lifecycle impact, or regenerative design | Criterion 6 (Environmental Responsibility) | USEFUL |
| `addictive_design_flags` | Does the project use engagement-maximising design patterns (infinite scroll, recommendation loops, engagement metrics)? | Modifier 5 (Addictive / Algorithmic Harm Penalty) | USEFUL |
| `worker_ownership_notes` | Are the people building this project also part-owners or participants in governance? (Beyond the standard governance_model field) | Criterion 1; Modifier 3 | USEFUL |

*Note for orchestrator: The three CRITICAL fields (governance_model, funding_model, self_hosting_available) directly support the three highest-weight criteria (C1, C2, C3, each 20 pts). Their absence means those criteria are scored primarily from keyword inference in scraped_description and political_relevance_summary, which is less reliable than structured data. Adding these fields would materially improve scoring confidence for any re-run.*
