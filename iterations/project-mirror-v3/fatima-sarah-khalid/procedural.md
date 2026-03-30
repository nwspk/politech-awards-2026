# Evaluative Constitution — Parts C, D, E
## Evaluator: Fatima Sarah Khalid
## Version: v3 | 2026-03-30

---

### Part C: Procedural Rules

#### Abstention threshold
**Rule:** Abstain (score N/A) when dossier_completeness < 0.15 AND the project's name, tagline, and scraped_description together provide fewer than 20 words of substantive content. A dead link alone does not trigger abstention — the dossier may still contain enough metadata to score (the dead link cap at 45 handles that separately). Abstention means the ranking agent cannot even determine which criteria apply.

**Why Fatima:** Her work centres on making invisible things visible. Abstaining only at extremely thin evidence levels reflects a disposition toward engaging with under-documented projects rather than dismissing them. The Civic Tech Guide curation role — selecting and categorising projects that are often obscure — suggests she would prefer to attempt a score with uncertainty flagged rather than refuse to engage. But at the floor (< 0.15 completeness with minimal text), there is genuinely nothing to score against.

**Exceptions:** None. The threshold is already low.

---

#### Prototype handling
**Rule:** Prototypes receive protection from Criterion 5 (implementation maturity) penalties when Modifier M6 applies — i.e., when the project is accessibility-first and targets an underserved population with no existing alternatives. Outside M6 conditions, prototypes are scored normally on Criterion 5 but are not penalised below 2/6 on that criterion if there is evidence of design intent and active development (as opposed to abandonment).

**Why Fatima:** Her own Code for Canada project (drone companion app) was a prototype that never reached production scale — not because it failed but because the fellowship ended. She understands that civic tech for under-resourced contexts faces structural deployment barriers. However, her career is practice-oriented: she builds things that work. Pure research prototypes without implementation intent would not receive the same protection. The distinction is between "early-stage with intent" and "theoretical without plan."

---

#### Popularity discount
**Rule:** Popularity is not directly discounted from scores, but the `popularity_risk` field is set to HIGH for any project that: (a) has dossier_completeness ≥ 0.8, AND (b) is widely known in civic tech circles (based on name recognition, media coverage fields in dossier), AND (c) scores in the top 30. The flag is informational — it does not reduce the score. However, in tie-breaking (below), a project with HIGH popularity_risk loses to one without it.

**Why Fatima:** Her BIFFUD affiliation and "chaos wrangler" role signal anti-establishment orientation. Her curation of the Civic Tech Guide suggests awareness that the most visible projects are not necessarily the most impactful. But her career at GitLab — a well-known, well-documented platform — means she does not treat visibility as inherently suspect. The approach: flag it, don't penalise it, but use it as a tiebreaker.

---

#### Tie-breaking
**Rule:** When two projects have equal final scores (within ±0.5 points), apply in order:
1. Higher score on Criterion 1 (accessibility for excluded communities) wins
2. If still tied: higher score on Criterion 6 (AI/tech as community infrastructure) wins
3. If still tied: lower popularity_risk wins
4. If still tied: higher community governance evidence (M1 applicability) wins
5. If still tied: more recent last_updated date wins

**Why Fatima:** Accessibility for excluded communities is her highest-weight criterion and the clearest single thread through her career. Using it as the primary tiebreaker reinforces the constitutional priority. C6 as secondary tiebreaker reflects its promoted status in v3. Popularity risk as tertiary reflects the anti-establishment signal without imposing it as a penalty.

---

#### Uncertainty handling
**Rule:** When evidence is thin but not absent (dossier_completeness 0.15–0.40), uncertainty *triggers the uncertainty floor* — the project's score is held at a minimum of 25 and flagged with HIGH uncertainty. Criteria are scored based on available evidence, but the final score cannot drop below 25. This is consistent with the underdog protection decision (Part D, below).

When evidence is moderate (completeness 0.40–0.60), uncertainty does not impose a floor but the uncertainty flag is set to MEDIUM. Scores reflect available evidence without artificial protection.

**Why Fatima:** Her "open source × intersectionality" framing positions her as someone who understands that under-documented work often serves the most marginalised communities. Penalising thin evidence would systematically disadvantage exactly the projects she cares about. But she is not naive — thin evidence does mean uncertainty, which should be visible, not hidden.

---

#### Novelty vs implementation
**Rule:** Under v3 (implementation-first), the ceiling for novel-but-undeployed projects is 65/100. Above 65 requires at least some evidence of real-world use or formal adoption. This ceiling does not apply if M6 (prototype protection) is active — M6 already handles accessibility-first prototypes.

**Why Fatima:** Her career shows both idealism (BIFFUD, civic tech guide, open source × intersectionality framing) and pragmatism (Code for Canada embedded in government, GitLab developer advocacy focused on real workflows). Under implementation-first framing, deployment evidence is given additional weight through M_IMPL, reinforcing the emphasis on what works in practice.

---

#### Movement infrastructure vs direct service
**Rule:** Movement infrastructure and direct service are scored equally through the criteria — there is no categorical preference. However, movement infrastructure projects that enable other civic tech projects (platforms, frameworks, shared tooling) receive a slight implicit advantage through Criterion 2 (open source + community governance) because infrastructure projects are more likely to have community governance structures. This is an emergent effect, not an explicit rule.

**Why Fatima:** Her career spans both: direct service (drone companion app for individual pilots) and infrastructure (analytics.usa.gov, Drupal CI toolchain, GitLab platform). She does not privilege one over the other. The Civic Tech Guide curation role suggests she sees the ecosystem as valuable — both the tools and the infrastructure that supports them.

---

#### Scope of concern
**Rule:** Geographic scope does not directly affect scoring. A local project solving a real access problem for a specific community scores the same as a global platform, all else being equal. However, Criterion 7 (cross-jurisdictional replicability) provides a LOW-weight bonus for projects that travel across contexts. This means global scope offers a small advantage (up to 6 points) but cannot dominate. Projects serving Global South communities receive no automatic bonus or penalty — they are scored on the same criteria.

**Why Fatima:** Her career crosses Canadian, American, and global contexts. She has not expressed a geographic priority. The Code for Canada fellowship was specifically Canadian; analytics.usa.gov was US federal; Drupal and GitLab are global. Her lens is community-level, not geographically bounded. Cross-jurisdictional replicability is appreciated (Criterion 7) but weighted LOW — reflecting that it is inferred, not directly evidenced.

---

### Part D: Underdog Protection Decision

**Decision:** YES

**Rationale:** Fatima's career is built around making complex systems accessible to excluded communities. Her "open source × intersectionality" framing explicitly links technology access to structural inequality. The Civic Tech Guide curation role — selecting and highlighting projects that are often obscure — directly demonstrates a practice of finding and elevating under-documented work. Her BIFFUD affiliation (anti-establishment, public interest) and her DEI work in Drupal reinforce that she does not equate visibility with quality. Projects serving marginalised communities are structurally less likely to have rich dossiers. Penalising them for thin documentation contradicts her core values.

**Uncertainty floor:** When dossier_completeness < 0.35, the project's final score is held at a minimum of 25 points. The project is flagged with HIGH uncertainty. This floor prevents under-documented projects from scoring lower than 25 regardless of how few criteria can be meaningfully assessed.

**Suspended criteria:** When completeness < 0.35:
- Criterion 5 (implementation maturity) is suspended — minimum 2/6 regardless of evidence
- Criterion 7 (cross-jurisdictional replicability) is suspended — scored at 2/6 by default
- All other criteria are scored on available evidence, with the uncertainty floor catching the total

---

### Part E: Dossier Field Proposals

| Field name | What it captures | Supports | Priority |
|---|---|---|---|
| `accessibility_features` | Documented accessibility mechanisms (multilingual, offline, low-bandwidth, screen reader support, reading level) | Criterion 1, M3 | Critical |
| `community_governance_model` | How the project's community participates in governance (voting, board seats, contribution pathways, decision-making structure) | Criterion 2, M1 | Critical |
| `data_governance_model` | How user/community data is governed — who controls it, consent mechanisms, data portability | Criterion 6, M2 | Critical |
| `dei_evidence` | Documented DEI commitments beyond marketing — structural programs, diverse leadership, inclusion audits | Criterion 4, M5 | Useful |
| `theory_of_change` | Explicit statement of how the project creates civic or political change | Novelty vs implementation rule | Useful |
| `regulatory_engagement` | Whether the project engages with government regulatory processes or has formal government partnerships | Criterion 3 | Useful |
| `deployment_scale` | Number of users, jurisdictions, or institutions using the project | Criterion 5, M_IMPL | Nice-to-have |
