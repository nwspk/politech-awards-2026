# Evaluative Constitution
## Evaluator: Fatima Sarah Khalid
## Version: v5 | 2026-03-30

> **Synthetic estimate.** This constitution was inferred from public evidence by
> an AI agent. It does not claim to reconstruct Fatima Sarah Khalid's true beliefs.
> See evidence-assessed.md for sources and confidence levels.

> **v5 changes:** Updated criteria weights per Fatima's direct feedback. Agency-first framing — prioritises forkability, local re-governance, exposing decision logic, reducing institutional dependence. Deprioritises platforms requiring institutional buy-in. C6 promoted from MEDIUM (12) to HIGH (30). C5 demoted from MEDIUM (12) to LOW (6). New modifier M_AGENCY added. Core question shift: from *how do people participate in systems?* to *how do people gain the capacity to shape, fork, and govern systems themselves?*

---

## Part A: Project Criteria

### Criterion 1: Accessibility of civic and political technology for excluded communities
- **Weight:** HIGH (max 30 pts)
- **Why Fatima:** Her entire career arc — from building a regulatory compliance app for Canadian drone pilots (Code for Canada × Transport Canada), to her Sessionize bio foregrounding "simplifying technical concepts" and "keynotes on inclusion & allyship," to her Medium bio's explicit pairing of "open source x intersectionality" — consistently prioritises making complex systems legible and accessible to people who are currently excluded from them. [Sessionize, GitHub drone-companion-app, Medium bio — all CONFIRMED]
- **High score (80–100%):** Projects that demonstrably reduce a specific access barrier — language, literacy, disability, complexity of government bureaucracy — for people who currently cannot participate in civic or political life because of that barrier. Extra weight if the barrier is named and the mechanism of removal is specific.
- **Low score (0–30%):** Projects aimed primarily at already-engaged, digitally literate professionals or activists who have multiple alternatives. Tools that improve efficiency for people who are already participating, without opening participation to new groups.
- **Dossier fields:** communities_served, primary_users_or_beneficiaries, geographic_focus, tagline, scraped_description

### Criterion 2: Open source commitment and community governance
- **Weight:** HIGH (max 30 pts)
- **Why Fatima:** Her Medium bio explicitly frames open source as "open source x intersectionality" — an ethical and political commitment. Her @drupaldiversity membership and GitLab co-create program post show her treating community contributors as genuine partners in governance. [Medium bio, GitHub profile, GitLab co-create post — all CONFIRMED]
- **v5 framing:** High scores if the community can fork, adapt, and re-govern the project locally. Low scores if governance is institutionally controlled despite being technically open-source. The test is not "is the code open?" but "can the governed community reshape this?"
- **High score (80–100%):** Projects that are genuinely open source AND where the communities served can shape the project's direction through forking, contributing, or governing. Evidence: active contribution pathways, community governance structures, forkable architecture that enables local re-deployment.
- **Low score (0–30%):** Proprietary tools; or projects that are technically open-source but controlled by a single institution with no meaningful community governance. Tools that extract value from communities without returning governance to them.
- **Dossier fields:** open_source, github_url, license, community_governance, community_ownership, contributor_governance, governance_model

### Criterion 3: Making government and civic processes legible and navigable
- **Weight:** HIGH (max 30 pts)
- **Why Fatima:** The drone companion app translates Transport Canada's complex drone regulations into an accessible tool for ordinary citizens. "Making complex technical concepts approachable" is named as a core specialism (Sessionize). [Sessionize bio, GitHub drone-companion-app, Code for Canada fellowship — CONFIRMED]
- **v5 framing:** High scores if citizens gain the capacity to act and shape — not just understand. Legibility that leads to agency is valued; legibility that is informational-only scores lower. The question is not "can people understand the system?" but "does understanding this give them power to change it?"
- **High score (80–100%):** Projects that help people understand their rights, navigate bureaucracy, or engage with policy — AND that create conditions for them to act, petition, shape, or contest. Extra credit where the legibility tool itself is community-governed or forkable.
- **Low score (0–30%):** Tools that add a digital interface to existing processes without meaningfully reducing complexity. Projects where "civic" means the subject matter rather than citizen empowerment. Read-only information portals with no action pathway.
- **Dossier fields:** political_relevance_summary, primary_users_or_beneficiaries, issue_area, scraped_description, tagline

### Criterion 4: Inclusive community-building as a dimension of the project's design
- **Weight:** MEDIUM (max 12 pts)
- **Why Fatima:** Her DEI work within the Drupal community and WCT Rising Star award suggest she reads inclusion as part of a project's architecture, not an add-on. [Sessionize, @drupaldiversity membership, Medium bio, WCT award — CONFIRMED/PROBABLE]
- **High score (80–100%):** Projects with documented mechanisms for including contributors or users from underrepresented groups — mentorship programmes, accessible contribution pathways, DEI audits of community governance, explicit representation in leadership.
- **Low score (0–30%):** Projects where inclusion is claimed in marketing language but no structural mechanisms exist.
- **Dossier fields:** team_diversity_signals, community_governance, scraped_description, political_relevance_summary

### Criterion 5: Implementation maturity and real-world deployment
- **Weight:** LOW (max 6 pts) — *demoted from MEDIUM in v5*
- **Why demoted:** Agency-first framing values conditions and primitives over deployment scale. A forkable, community-governed primitive that serves ten communities with full autonomy is worth more than a scaled platform that 10,000 communities depend on without control. Deployment maturity remains a tie-breaker signal but no longer a primary driver.
- **High score (80–100%):** Projects with documented real-world deployment — real users, real government or community partners, active codebase, sustained maintenance. Formal adoption by government or civil society institutions.
- **Low score (0–30%):** Proof-of-concept tools with no deployment evidence. Archived repositories. Dead links.
- **Dossier fields:** deployment_context, homepage_http_status, github_url, dead_link, last_updated, government_partnerships

### Criterion 6: AI and technology as community infrastructure, not surveillance infrastructure
- **Weight:** HIGH (max 30 pts) — *promoted from MEDIUM in v5*
- **Why promoted:** The consistent thread in Fatima's AI writing is that AI must serve communities rather than extract from them. Her BIFFUD affiliation reinforces scepticism of technology that increases institutional power at community expense. In an agency-first frame, how a project handles AI is now a primary question, not a secondary one. [GitLab ChatGPT post, co-create post, Medium bio BIFFUD affiliation — CONFIRMED]
- **v5 framing:** High scores if AI exposes its logic and can be locally re-governed. Low scores if AI operates as a black box, centralises decision power, or requires a vendor relationship to access. The test: can the community govern the AI component, or do they depend on someone else to run it?
- **High score (80–100%):** Projects where AI/technology increases community capacity; where AI logic is transparent, auditable, or open-source; where AI components can be locally deployed or replaced. Non-AI projects that are decentralised, federated, privacy-first, or community-governed infrastructure score high here.
- **Low score (0–30%):** Projects where AI operates as a black box or centralises decision power. AI that automates government processes without accountability. Surveillance tools. Extractive data platforms. Technology that increases institutional power at community expense.
- **Dossier fields:** ai_involvement, data_practices, political_relevance_summary, documented_limitations, scraped_description

### Criterion 7: Cross-jurisdictional replicability and knowledge sharing
- **Weight:** LOW (max 6 pts)
- **Why Fatima:** Her career has moved between Canadian civic tech, US government digital services, and European open-source community. Cross-jurisdictional replicability is appreciated but not a primary driver. [GitHub repos — CONFIRMED; inference level — WEAK]
- **High score (80–100%):** Projects with documented adoption in multiple jurisdictions. Projects that explicitly design for replicability — shared code, documented methodology, open standards.
- **Low score (0–30%):** Highly context-specific tools with no transferability.
- **Dossier fields:** jurisdictional_scope, government_partnerships, open_source, github_url

---

## Part B: Value Modifiers

### M_AGENCY (new v5): Agency amplifier
- **Direction:** boost or reduce
- **Magnitude:** boost +8–12 points / reduce -8–14 points
- **Boost applies when:** The project can be meaningfully forked or adapted locally AND exposes its decision-making logic AND raises user agency over system behaviour (not just participation within it). Evidence: forkable architecture, self-hosting documentation, transparent methodology, community re-governance capability.
- **Reduce applies when:** The project requires institutional gatekeeping to function, cannot be locally re-governed, or locks users into vendor relationships. Platforms that are functional only within specific institutional contexts; tools that increase participation but not agency; systems that expose outputs but not logic.
- **Why Fatima:** "Prioritise systems that can be forked, adapted, and re-governed locally." "Deprioritise systems that operate primarily as platforms rather than primitives." [Direct feedback — v5 framing]

### M1: Boost — community ownership or governance of the project itself
- **Direction:** boost
- **Magnitude:** strong (+8–14 points)
- **Applies when:** The project is governed by the community it serves — not just open source, but actively community-governed. Evidence: community voting on roadmap, community board membership, formally community-owned legal structure (co-op, not-for-profit with community representation), or explicitly community-run infrastructure.
- **Why Fatima:** The co-create post treats structural investment in community governance as the marker of genuine partnership. Her Medium bio frames open source as a commitment alongside intersectionality — she cares about who holds power, not just whether the code is open. [GitLab co-create post — CONFIRMED; Medium bio — CONFIRMED; BIFFUD — PROBABLE]

### M2: Reduce — extractive data practices or surveillance without community consent
- **Direction:** reduce
- **Magnitude:** strong (−10–16 points)
- **Applies when:** The project collects, aggregates, or sells data about citizens or community members without meaningful consent or without returning governance of that data to the people it concerns. Also applies to projects that use data or AI to increase state or institutional monitoring capacity without accountability mechanisms.
- **Why Fatima:** Community expertise and human judgment must remain in the loop — AI that replaces community rather than serving it is the failure mode she names. Her BIFFUD affiliation signals anti-extractive orientation. [GitLab ChatGPT post — CONFIRMED; BIFFUD affiliation — PROBABLE; Medium bio — CONFIRMED]

### M3: Boost — designed specifically for under-resourced or under-served civic contexts
- **Direction:** boost
- **Magnitude:** moderate (+5–9 points)
- **Applies when:** The project was explicitly designed for communities or contexts that lack alternatives — not as a nice feature but as the primary design constraint. Evidence: project documentation naming specific underserved groups as primary users, design decisions for low-resource contexts (offline capability, low-bandwidth, low-literacy), or deployment primarily in under-resourced settings.
- **Why Fatima:** The drone companion app's mission — helping ordinary citizens navigate complex regulatory requirements — is exactly this. Sessionize bio: "simplifying technical concepts." Open source × intersectionality positions underserved communities as the reason for the work. [Sessionize bio — CONFIRMED; GitHub drone-companion-app — PROBABLE]

### M4: Reduce — tools that digitise existing power structures without challenging them
- **Direction:** reduce
- **Magnitude:** moderate (−5–8 points)
- **Applies when:** The project adds a digital layer to an existing civic or government process but does not improve citizen access, reduce barriers, or shift any power to communities. Projects where "civic tech" means government efficiency rather than citizen empowerment.
- **Why Fatima:** Her career (Code for Canada, Microsoft Civic Tech) is explicitly about improving services for citizens — not just modernising government for its own sake. [Code for Canada fellowship — CONFIRMED; bio — CONFIRMED]

### M5: Boost — inclusive developer community as a visible part of the project
- **Direction:** boost
- **Magnitude:** weak (+3–6 points)
- **Applies when:** The project has documented, active investment in diversity and inclusion within its developer or contributor community — not just in its user community. Evidence: DEI statements with structural commitments, visible diverse leadership, active inclusion programs for contributors.
- **Why Fatima:** Her @drupaldiversity work is specifically DEI within developer communities. She believes inclusive developer communities are a prerequisite for inclusive civic tech. [Sessionize bio — CONFIRMED; @drupaldiversity membership — CONFIRMED]

### M6: Conditional — prototype protection for accessibility-first projects
- **Direction:** conditional
- **Magnitude:** moderate (+4–8 points on implementation maturity criterion only)
- **Applies when:** A project scores low on C5 primarily because it is addressing an access gap with no existing alternatives. Applies when: (a) target population is clearly underserved, AND (b) there is evidence of design quality and intent even without deployment evidence, AND (c) the dossier explains why deployment is limited (resource constraints, early stage) rather than because the project is abandoned.
- **Note in v5:** With C5 demoted to max 6 pts, M6 has reduced absolute impact. Still applies for thin-dossier projects meeting all three conditions.

---

## Part C: Procedural Rules

### Abstention threshold
**Rule:** Abstain (score N/A) when dossier content provides fewer than 20 words of substantive content. A dead link alone does not trigger abstention.

### Dead link cap
**Rule:** Projects with dead homepages (homepage_http_status != 200/301/302 or dead_link=True) receive a ceiling of 45 on their final score.

### Prototype handling
**Rule:** Prototypes receive protection from C5 penalties when M6 applies. Outside M6 conditions, prototypes are scored normally on C5 but not penalised below 2/6 if there is evidence of design intent and active development.

### Popularity discount
**Rule:** Popularity is not directly discounted from scores, but `popularity_risk` is set to HIGH for projects with high completeness that are widely known in civic tech circles and score in the top 30. In tie-breaking, HIGH popularity_risk loses to non-flagged projects.

### Tie-breaking
**Rule:** When two projects score within ±0.5 points, apply in order:
1. Higher C1 score (accessibility for excluded communities) wins
2. Higher C6 score (AI/tech as community infrastructure) wins
3. Higher C3 score (legibility + agency) wins
4. Lower popularity_risk wins

### Uncertainty handling
**Rule:** When dossier_completeness < 0.35, the project's score is held at a minimum of 25 (uncertainty floor) and flagged HIGH uncertainty.

### Novelty vs implementation
**Rule:** In v5, this ceiling is relaxed. A genuinely novel forkable primitive with no deployment evidence can score up to 75/100 (up from 65 in v2) because agency-first framing values conditions and primitives, not just deployed implementations.

---

## Part D: Underdog Protection

**Decision:** YES — preserved and strengthened in v5.

**Rationale:** Agency-first framing is especially important for under-documented projects. A project that enables genuine local re-governance but lacks the institutional backing to be well-documented should not be punished for its independence from institutional visibility systems.

**Uncertainty floor:** When dossier_completeness < 0.35, the project's final score is held at a minimum of 25 points, flagged HIGH uncertainty.

---

## Part E: Synthesis Notes

### Core shift from v2 to v5

The fundamental reorientation: v2 asked "how do people participate in systems?" V5 asks "how do people gain the capacity to shape, fork, and govern systems themselves?"

This shift has concrete scoring consequences:
- A tool that makes government data legible but offers no action pathway scores lower in v5
- A protocol that enables federated self-governance scores dramatically higher in v5
- A well-deployed platform with institutional lock-in scores lower in v5
- A prototype that is forkable, community-governed, and exposes its logic scores higher in v5

### Weight changes from v2
| Criterion | v2 weight | v5 weight | Change |
|---|---|---|---|
| C1 (Accessibility) | 20 | 30 | +10 |
| C2 (Open source + governance) | 20 | 30 | +10 |
| C3 (Legibility) | 20 | 30 | +10 |
| C4 (Inclusive community) | 12 | 12 | no change |
| C5 (Implementation maturity) | 12 | 6 | -6 |
| C6 (AI as infrastructure) | 12 | 30 | +18 |
| C7 (Cross-jurisdictional) | 6 | 6 | no change |

### New modifier
M_AGENCY: +8–12 for forkable+exposes logic+raises agency; -8–14 for institutional gatekeeping or vendor lock-in.
