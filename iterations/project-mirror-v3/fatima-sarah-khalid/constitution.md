# Evaluative Constitution
## Evaluator: Fatima Sarah Khalid
## Version: v3 | 2026-03-30

> **Synthetic estimate.** This constitution was inferred from public evidence by an AI agent. It does not claim to reconstruct Fatima Sarah Khalid's true beliefs. See evidence-assessed.md for sources and confidence levels.

> **v3 changes:** Updated criteria weights per Fatima's direct feedback. Implementation-first framing applied — prioritises real-world deployment, government adoption, measurable policy impact. C6 promoted from MEDIUM (12) to HIGH (30). C5 demoted from MEDIUM (12) to LOW (6). C4 weight confirmed at 12. C7 confirmed at 6. C1, C2, C3 each raised to 30, creating a triple-core structure (accessibility + open source + legibility) with community tech infrastructure (C6) as a co-equal fourth pillar.

---

## Part A: Project Criteria

### Criterion 1: Accessibility of civic and political technology for excluded communities
- **Weight:** HIGH (max 30 pts) — raised from 20 in v2
- **Why Fatima:** Her entire career arc — from building a regulatory compliance app for Canadian drone pilots (Code for Canada × Transport Canada), to her Sessionize bio foregrounding "simplifying technical concepts" and "keynotes on inclusion & allyship," to her Medium bio's explicit pairing of "open source x intersectionality" — consistently prioritises making complex systems legible and accessible to people who are currently excluded from them. Weight raised to reflect the centrality of this criterion to her identity.
- **Implementation-first lens:** Under v3, accessibility is measured not just by stated intent but by demonstrated reach — projects that have actually reduced barriers for real excluded users score higher. Accessibility claims without deployment evidence score at the lower end of this criterion.
- **High score (80–100):** Projects that demonstrably reduce a specific access barrier — language, literacy, disability, complexity of government bureaucracy — for people who currently cannot participate in civic or political life because of that barrier. Evidence of actual users from excluded groups. Projects that make government regulatory processes legible to ordinary citizens.
- **Low score (0–30):** Projects aimed primarily at already-engaged, digitally literate professionals or activists who have multiple alternatives. Tools that improve efficiency for people who are already participating.
- **Dossier fields:** communities_served, primary_users_or_beneficiaries, accessibility_features (if present), geographic_focus, tagline, scraped_description

---

### Criterion 2: Open source commitment and community governance
- **Weight:** HIGH (max 30 pts) — raised from 20 in v2
- **Why Fatima:** Open source is not merely a technical preference — her Medium bio explicitly frames it as "open source x intersectionality," treating it as an ethical and political commitment. Weight raised to reflect that in v3, open source governance is also evidence of implementation health and durability.
- **Implementation-first lens:** Open source with an active, maintained codebase, recent commits, and structured governance carries more weight than dormant or unmaintained repositories. Community governance mechanisms must be operational, not merely documented.
- **High score (80–100):** Projects that are genuinely open source (code publicly accessible, actively maintained, recent commits), AND have structured community governance. Active GitHub repositories. Community has genuine input into project direction.
- **Low score (0–30):** Proprietary tools with no community governance. Projects with archived or inactive repositories. Tools that claim openness but have no active contribution pathway.
- **Dossier fields:** open_source, github_url, license, community_governance, project_type, last_commit_date

---

### Criterion 3: Making government and civic processes legible and navigable
- **Weight:** HIGH (max 30 pts) — raised from 20 in v2
- **Why Fatima:** The drone companion app is the clearest single piece of evidence: it translates Transport Canada's complex drone regulations into an accessible tool for ordinary citizens. Code for Canada's mission — embedding digital professionals in government to improve public service delivery — is the professional context she chose.
- **Implementation-first lens:** Under v3, projects score higher when they have documented evidence that citizens have actually navigated a previously opaque process more successfully — not just that the tool exists. Government partnerships or formal adoption are strong signals that the legibility goal has been validated.
- **High score (80–100):** Projects that take a genuinely complex government or regulatory process and make it legible to the citizens it affects. Tools that help people understand their rights, navigate bureaucracy, access services they are entitled to. Formally adopted by government or civic institutions.
- **Low score (0–30):** Tools that add a digital interface to existing processes without reducing complexity. Projects that serve government agencies rather than helping citizens navigate government.
- **Dossier fields:** political_relevance_summary, primary_users_or_beneficiaries, issue_area, scraped_description, government_partnerships

---

### Criterion 4: Inclusive community-building as a dimension of the project's design
- **Weight:** MEDIUM (max 12 pts) — confirmed at 12 (v2 unchanged)
- **Why Fatima:** Her work on DEI within the Drupal community and her WCT Rising Star award suggest she reads inclusion as part of a project's architecture, not an add-on. Weight held at MEDIUM — under the implementation-first framing, structural inclusion mechanisms are appreciated but secondary to deployment evidence.
- **High score (80–100):** Projects with documented mechanisms for including contributors or users from underrepresented groups — mentorship programmes, DEI audits, explicit representation in leadership.
- **Low score (0–30):** Projects where inclusion is claimed in marketing language but no structural mechanisms exist.
- **Dossier fields:** team_diversity_signals, community_governance, scraped_description

---

### Criterion 5: Implementation maturity and real-world deployment
- **Weight:** LOW (max 6 pts) — demoted from MEDIUM (12) in v2
- **Why demoted in v3:** Counter-intuitively, under the implementation-first framing this criterion is *demoted* rather than promoted. The reason: the M_IMPL modifier (new in v3) now captures government/institutional adoption at the modifier level where it has more granular impact. C5 at LOW prevents double-counting while keeping a signal for whether projects are live vs purely theoretical. A project with large-scale government adoption earns its implementation credit through M_IMPL (+8–12), not C5.
- **High score:** Projects with documented real-world deployment — real users, active codebase, evidence of sustained maintenance.
- **Low score:** Proof-of-concept tools with no deployment evidence. Archived repositories.
- **Dossier fields:** deployment_context, homepage_http_status, github_url, dead_link, last_updated, government_partnerships

---

### Criterion 6: AI and technology as community infrastructure, not surveillance infrastructure
- **Weight:** HIGH (max 30 pts) — promoted from MEDIUM (12) in v2
- **Why promoted in v3:** Under the implementation-first framing, how technology is deployed — and for whose benefit — becomes central. At-scale deployment makes the choice between community infrastructure and surveillance infrastructure consequential, not hypothetical. Projects that have proven they can deploy technology in ways that empower communities (not extract from them) are exactly what implementation-first Fatima would back.
- **Implementation-first lens:** Privacy tools and anti-surveillance infrastructure that are actually deployed and used at scale carry maximum weight here. Community-governed technology platforms with large userbases. Projects that have proven the community-infrastructure model works in practice.
- **High score (80–100):** Projects where AI or technology increases community capacity rather than enabling surveillance. Privacy-preserving tools with real users. Federated/decentralised infrastructure under community governance. Projects with documented data ethics commitments.
- **Low score (0–30):** Projects that use AI/data to increase state surveillance. Extractive platforms. Tools that automate government processes in ways that reduce community oversight.
- **Dossier fields:** ai_involvement, data_practices, political_relevance_summary, documented_limitations

---

### Criterion 7: Cross-jurisdictional replicability and knowledge sharing
- **Weight:** LOW (max 6 pts) — confirmed at 6 (v2 unchanged)
- **Why Fatima:** Her career has moved between Canadian civic tech, US government digital services, and European open-source community. Replicability is appreciated but lightly weighted — this is a WEAK to PROBABLE signal.
- **High score:** Projects with documented adoption in multiple jurisdictions. Designed for replicability with shared code and documented methodology.
- **Low score:** Highly context-specific tools with no transferability.
- **Dossier fields:** jurisdictional_scope, government_partnerships, open_source, countries_deployed

---

## Part B: Value Modifiers

### M1: Boost — community ownership or governance of the project itself
- **Direction:** boost
- **Magnitude:** strong (+8–14 points)
- **Trigger condition:** The project is governed by the community it serves — community voting on roadmap, community board membership, co-op structure, or explicitly community-run infrastructure. The community must be the *served* community, not just a developer community.

### M2: Reduce — extractive data practices or surveillance without community consent
- **Direction:** reduce
- **Magnitude:** strong (−10–16 points)
- **Trigger condition:** The project enables surveillance, collects data without meaningful consent, or increases state/institutional monitoring capacity without accountability mechanisms. Note: tools that *fight* surveillance (Tor, Privacy Badger) are NOT penalised — only tools that *enable* it.

### M3: Boost — designed specifically for under-resourced or under-served civic contexts
- **Direction:** boost
- **Magnitude:** moderate (+5–9 points)
- **Trigger condition:** The project was explicitly designed for communities or contexts that lack alternatives — design decisions made to accommodate low-resource contexts (offline capability, low-bandwidth, low-literacy interfaces).

### M4: Reduce — tools that digitise existing power structures without challenging them
- **Direction:** reduce
- **Magnitude:** moderate (−5–8 points)
- **Trigger condition:** The project adds a digital layer to an existing civic/government process but does not improve citizen access or shift power to communities. Only applied to proprietary or non-open-source tools.

### M5: Boost — inclusive developer community as a visible part of the project
- **Direction:** boost
- **Magnitude:** weak (+3–6 points)
- **Trigger condition:** The project has documented, active investment in diversity and inclusion within its developer or contributor community.

### M6: Conditional — prototype protection for accessibility-first projects
- **Direction:** conditional
- **Magnitude:** moderate (+4–8 points on implementation maturity criterion only)
- **Trigger condition:** A project scores low on C5 primarily because it addresses an access gap that has no existing alternatives. Applies when: (a) target population is clearly underserved, AND (b) evidence of design quality and intent exists, AND (c) dossier explains why deployment is limited.

### M_IMPL: Boost/Reduce — implementation at scale (NEW in v3)
- **Direction:** boost or reduce
- **Magnitude:** boost: strong (+8–12 points); reduce: moderate (−6–10 points)
- **Trigger for boost:** Documented government or institutional adoption at scale. Evidence: 3+ formal government partnerships, national-scale deployment, published performance metrics showing large user numbers, or official government mandate.
- **Trigger for reduce:** No deployment evidence beyond prototype. Applies when deployment_context describes prototype-only status and no government partners exist.
- **Why v3:** The implementation-first framing makes demonstrated adoption the primary differentiator above a baseline quality threshold. M_IMPL is the mechanism that rewards this.

---

## Part C: Procedural Rules

### Abstention threshold
**Rule:** Abstain (score N/A) when dossier_completeness < 0.15 AND the project's name, tagline, and scraped_description together provide fewer than 20 words of substantive content.

### Prototype handling
**Rule:** Prototypes receive protection from C5 penalties when Modifier M6 applies. Outside M6 conditions, prototypes are scored normally on C5 (now max 6 pts) but receive the M_IMPL penalty (−6–10) if there is no deployment evidence.

### Popularity discount
**Rule:** `popularity_risk` is set to HIGH for projects with dossier_completeness ≥ 0.8 that are widely known in civic tech circles and score in the top 30. In tie-breaking, HIGH popularity_risk loses to non-flagged projects.

### Tie-breaking
**Rule:** When two projects score within ±0.5 points, apply in order:
1. Higher score on Criterion 1 (accessibility for excluded communities) wins
2. Lower popularity_risk wins
3. Higher community governance evidence (M1 applicability) wins
4. More recent last_updated date wins

### Uncertainty handling
**Rule:** dossier_completeness 0.15–0.40 → uncertainty floor at minimum 25, flagged HIGH uncertainty. 0.40–0.60 → MEDIUM uncertainty, no floor. Above 0.60 → LOW uncertainty.

### Novelty vs implementation
**Rule:** A project with genuinely novel approach but no deployment evidence can score up to 65/100 maximum. Above 65 requires evidence of real-world use or formal adoption. (M6 exception applies for accessibility-first prototypes.)

### Dead link cap
**Rule:** Projects with dead homepages (dead_link=True or http_status not in 200/301/302) receive a ceiling of 45 on their final score.

---

## Part D: Underdog Protection

**Decision:** YES — maintained from v2.

**Rationale:** The implementation-first framing creates a structural tension with underdog protection. Well-funded, well-documented projects inherently have stronger implementation evidence. The underdog floor prevents this from systematically excluding projects serving marginalised communities that face deployment barriers not present for mainstream tools.

**Uncertainty floor:** When dossier_completeness < 0.35, final score is held at minimum 25 points, flagged HIGH uncertainty.

**Suspended criteria when completeness < 0.35:**
- Criterion 5 (implementation maturity): minimum 2/6 regardless of evidence
- Criterion 7 (cross-jurisdictional replicability): scored at 2/6 by default
- M_IMPL: not applied (insufficient evidence to penalise)

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Supports | Priority |
|---|---|---|---|
| `accessibility_features` | Documented accessibility mechanisms | C1, M3 | Critical |
| `community_governance_model` | How the project's community participates in governance | C2, M1 | Critical |
| `data_governance_model` | How user/community data is governed | C6, M2 | Critical |
| `deployment_scale` | Number of users, jurisdictions, or institutions | C5, M_IMPL | Critical in v3 |
| `dei_evidence` | Documented DEI commitments beyond marketing | C4, M5 | Useful |
| `government_adoption_evidence` | Formal government adoption details | C3, M_IMPL | Critical in v3 |

---

## Synthesis Notes

### V3 changes summary

1. **Weight rebalancing:** C1, C2, C3 each raised to 30 (from 20). C6 raised to 30 (from 12). C5 lowered to 6 (from 12). C4 and C7 unchanged. Total max score rises from 102 to 144, then normalised to 100.

2. **M_IMPL added:** New modifier rewards documented government/institutional adoption at scale (+8–12) and penalises prototype-only projects with no deployment evidence (−6–10).

3. **C6 reframing:** "AI as community infrastructure" now includes privacy tools and anti-surveillance technology as positive exemplars, not just AI governance projects. The implementation-first lens means tools that have *proven* they can resist surveillance at scale (Tor, Matrix, Mastodon) carry maximum weight.

4. **C5 demotion logic:** Implementation maturity signals are now captured at higher resolution through M_IMPL. Demoting C5 prevents double-counting while keeping a weak signal for live vs theoretical projects.

### Operational notes

All criteria reference dossier fields that exist in enriched dossiers. Three proposed fields (accessibility_features, community_governance_model, data_governance_model) remain absent — scoring relies on keyword inference from combined text fields. This is consistent with v2 methodology.
