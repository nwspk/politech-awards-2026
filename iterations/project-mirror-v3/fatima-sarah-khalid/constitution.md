# Evaluative Constitution
## Evaluator: Fatima Sarah Khalid
## Version: v3 | 2026-03-30

> Synthetic estimate. This constitution was inferred from public evidence by an AI agent. It does not claim to reconstruct Fatima Sarah Khalid's true beliefs. See evidence-assessed.md for sources and confidence levels.

> **v3 changes (2026-03-30):** Updated criteria weights per Fatima's direct feedback (C1:30, C2:30, C3:30, C4:12, C5:6, C6:30, C7:6). Implementation-first framing applied. Added modifier M_IMPL: boost (+6–12) for documented government adoption at scale, reduce (−8) for no deployment evidence. Dead link cap at 45 applies. All other modifiers (M1–M6) carried from v2.

---

## Part A: Project Criteria

### Criterion 1: Accessibility of civic and political technology for excluded communities
- **Weight:** HIGH (max 30 pts)
- **Why Fatima:** Her entire career arc — from building a regulatory compliance app for Canadian drone pilots (Code for Canada × Transport Canada), to her Sessionize bio foregrounding "simplifying technical concepts" and "keynotes on inclusion & allyship," to her Medium bio's explicit pairing of "open source x intersectionality" — consistently prioritises making complex systems legible and accessible to people who are currently excluded from them. This is not a recent addition to her profile; it runs from her earliest civic tech work (2019) through her current developer advocacy. [Sessionize, GitHub drone-companion-app, Medium bio — all CONFIRMED]
- **High score (80–100%):** Projects that demonstrably reduce a specific access barrier — language, literacy, disability, complexity of government bureaucracy — for people who currently cannot participate in civic or political life because of that barrier. Extra weight if the barrier is named and the mechanism of removal is specific. Projects that make government regulatory processes legible to ordinary citizens. Projects that enable non-technical communities to use or govern technology.
- **Low score (0–30%):** Projects aimed primarily at already-engaged, digitally literate professionals or activists who have multiple alternatives. Tools that improve efficiency for people who are already participating, without opening participation to new groups.
- **Dossier fields:** communities_served, primary_users_or_beneficiaries, accessibility_features (if present), geographic_focus, tagline, scraped_description

---

### Criterion 2: Open source commitment and community governance
- **Weight:** HIGH (max 30 pts)
- **Why Fatima:** Open source is not merely a technical preference — her Medium bio explicitly frames it as "open source x intersectionality," treating it as an ethical and political commitment. Her career choices reinforce this: @drupaldiversity membership, Drupal CI toolchain contributions, Code for Canada fellowship (open methodology), GitLab (a platform with open-core roots and a deep open-source community culture). The co-create program post shows her treating community contributors as genuine partners in governance, not just external contributors. [Medium bio, GitHub profile, GitLab co-create post — all CONFIRMED]
- **High score (80–100%):** Projects that are genuinely open source (code publicly accessible, actively maintained, open to contributions), AND that have structured community governance — ways for the communities they serve to shape the project's direction. Projects where the community is genuinely involved in platform development, not just as users. Active GitHub repositories with community contribution patterns.
- **Low score (0–30%):** Proprietary tools with no community governance. Projects that claim openness but have no active open-source codebase or community contribution pathway. Tools that extract value from communities without returning governance to them.
- **Dossier fields:** open_source, github_url, license, community_governance, project_type, format

---

### Criterion 3: Making government and civic processes legible and navigable
- **Weight:** HIGH (max 30 pts)
- **Why Fatima:** The drone companion app is the clearest single piece of evidence: it translates Transport Canada's complex drone regulations into an accessible tool for ordinary citizens. "Making complex technical concepts approachable" is named as a core specialism (Sessionize). Code for Canada's mission — embedding digital professionals in government to improve public service delivery — is the professional context she chose. This is not a generic "civic tech" criterion; it is specific to the interface between government complexity and citizen capacity to navigate it. [Sessionize bio, GitHub drone-companion-app, Code for Canada fellowship — CONFIRMED]
- **High score (80–100%):** Projects that take a genuinely complex government or regulatory process and make it legible to the citizens it affects — without requiring professional mediation. Tools that help people understand their rights, navigate bureaucracy, access services they are entitled to, or engage with policy processes they are formally excluded from. Projects where the complexity reduction is specific and measurable.
- **Low score (0–30%):** Tools that add a layer of digital interface to existing processes without meaningfully reducing their complexity. Projects that serve government agencies rather than helping citizens navigate government. Projects where "civic" means the subject matter rather than empowerment of citizens.
- **Dossier fields:** political_relevance_summary, primary_users_or_beneficiaries, issue_area, scraped_description, tagline

---

### Criterion 4: Inclusive community-building as a dimension of the project's design
- **Weight:** MEDIUM (max 12 pts)
- **Why Fatima:** Her work on DEI within the Drupal community, her WCT Rising Star award in women in communications technology, and her explicit framing of inclusion as a structural requirement ("inclusive developer communities are a prerequisite for inclusive civic tech") suggest she reads inclusion as part of a project's architecture, not an add-on. The co-create program post values structured investment in bringing new contributors in — not just welcoming language. [Sessionize, @drupaldiversity membership, Medium bio, WCT award — CONFIRMED/PROBABLE]
- **High score (80–100%):** Projects with documented mechanisms for including contributors or users from underrepresented groups — mentorship programmes, accessible contribution pathways, DEI audits of community governance, explicit representation in leadership. Projects where the team composition or governance reflects the communities served.
- **Low score (0–30%):** Projects with exclusively homogeneous teams or contributor bases. Projects where inclusion is claimed in marketing language but no structural mechanisms exist.
- **Dossier fields:** team_diversity_signals, community_governance, scraped_description, political_relevance_summary

---

### Criterion 5: Implementation maturity and real-world deployment
- **Weight:** LOW (max 6 pts) — *demoted from MEDIUM in v3*
- **Why demoted:** Implementation-first framing shifts emphasis to deployment evidence and government adoption via M_IMPL. The criterion itself is weighted low (6 pts) but M_IMPL provides a strong implementation signal as a separate modifier (+6–12 boost or −8 reduce). The combined effect for well-deployed projects is larger than C5 alone would suggest.
- **High score (80–100%):** Projects with documented real-world deployment — real users, real government or community partners using it, active codebase, evidence of sustained maintenance. Formal adoption by government or civil society institutions.
- **Low score (0–30%):** Proof-of-concept tools with no deployment evidence. Projects that describe potential users rather than actual users. Archived repositories. Dead links (homepage not accessible).
- **Dossier fields:** deployment_context, homepage_http_status, github_url, dead_link, last_updated, government_partnerships

---

### Criterion 6: AI and technology as community infrastructure, not surveillance infrastructure
- **Weight:** HIGH (max 30 pts) — *promoted from MEDIUM in v3*
- **Why promoted:** The consistent thread in her AI writing (ChatGPT post 2023, agentic chat 2025, ICYMI 2024) is that AI must serve communities rather than extract from them or replace them. Her BIFFUD affiliation and the explicitly anti-commercial, public interest orientation of that collective reinforce a scepticism of technology that increases institutional power at community expense. With C6 promoted to 30 pts, how a project handles AI and data governance is now equally weighted with accessibility and open source. [GitLab ChatGPT post, co-create post, Medium bio BIFFUD affiliation — CONFIRMED]
- **High score (80–100%):** Projects where AI or technology is used in ways that increase community capacity rather than institutional surveillance. Projects where AI is explicitly positioned as a tool under community governance. Projects that document their approach to AI ethics, data governance, and accountability. Non-AI projects that are decentralised, federated, privacy-first, or community-governed infrastructure score high here.
- **Low score (0–30%):** Projects that use AI or data to increase state or institutional surveillance capacity without community oversight. Projects that extract community data without returning value or governance to communities. Tools that automate government processes in ways that reduce human oversight.
- **Dossier fields:** ai_involvement, data_practices, political_relevance_summary, documented_limitations, scraped_description

---

### Criterion 7: Cross-jurisdictional replicability and knowledge sharing
- **Weight:** LOW (max 6 pts)
- **Why Fatima:** Her career has moved between Canadian civic tech (Code for Canada), US government digital services (analytics.usa.gov, Boston311), European open-source community (Drupal is global; GitLab is used worldwide). She has not stated cross-jurisdictional replicability as a priority in so many words, but her work pattern suggests appreciation for tools that travel. This is a WEAK to PROBABLE signal; weighted accordingly. [GitHub repos — CONFIRMED as evidence of cross-context engagement; inference level — WEAK]
- **High score (80–100%):** Projects with documented adoption in multiple jurisdictions or cultural contexts. Projects that explicitly design for replicability — shared code, documented methodology, open standards. Projects that have been forked or adapted by other governments or communities.
- **Low score (0–30%):** Highly context-specific tools with no transferability. Projects that solve a uniquely local problem in a way that cannot be generalised.
- **Dossier fields:** jurisdictional_scope, government_partnerships, open_source, github_url

---

## Implementation-First Framing Notes

Under v3 (implementation-first), scoring guidance is adjusted as follows:
- Criterion 5 (implementation maturity): scoring guidance emphasises deployment at scale, government/institutional use, measurable policy impact, stable governance
- Modifier M_IMPL applies: +6–12 for projects with documented government adoption at scale; −8 for projects with no deployment evidence
- Projects that demonstrate measurable policy impact (regulation changed, services improved for citizens) receive maximum C5 and full M_IMPL boost
- Projects described as platforms requiring institutional buy-in receive no M_IMPL penalty but also no boost — they are assessed on demonstrated adoption evidence only

---

## Part B: Value Modifiers

### M_IMPL: Implementation-First Modifier
- **Direction:** conditional
- **Boost magnitude:** +6–12 points
- **Reduce magnitude:** −8 points
- **Boost applies when:** The project has documented government adoption at scale — formal government partnerships, national/city deployment, measurable policy impact (regulation changed, service improved), or institutional use by public sector organisations with evidence
- **Reduce applies when:** The project has no deployment evidence — proof-of-concept only, no active users, archived or defunct, homepage dead with no other evidence of use
- **Neutral when:** Evidence is ambiguous — project exists and is used but scale is unclear

### M1: Boost — community ownership or governance of the project itself
- **Direction:** boost
- **Magnitude:** strong (+8–14 points)
- **Applies when:** The project is governed by the community it serves — not just open source, but actively community-governed. Evidence of governance could include: community voting on roadmap, community board membership, formally community-owned legal structure (co-op, not-for-profit with community representation), or explicitly community-run infrastructure. The community must be the *governed* community (the people the project serves), not just a developer community.
- **Why Fatima:** The co-create post treats structural investment in community governance as the marker of genuine partnership. Her Medium bio frames open source as a commitment alongside intersectionality — she cares about who holds power in a project, not just whether the code is open. The BIFFUD collective itself is community-owned and anti-institutional. Her Drupal community DEI work is about governance of the community as much as code. [GitLab co-create post — CONFIRMED; Medium bio — CONFIRMED; BIFFUD — PROBABLE]

---

### M2: Reduce — extractive data practices or surveillance without community consent
- **Direction:** reduce
- **Magnitude:** strong (−10–16 points)
- **Applies when:** The project collects, aggregates, or sells data about citizens or community members without meaningful consent or without returning governance of that data to the people it concerns. Also applies to projects that use data or AI to increase state or institutional monitoring capacity without accountability mechanisms. Applies even if the stated purpose is beneficial.
- **Why Fatima:** The consistent theme in her AI writing is that community expertise and human judgment must remain in the loop — AI that replaces community rather than serving it is the failure mode she names. Her BIFFUD affiliation signals anti-extractive orientation. Her DEI work in Drupal is about community power, which requires data not flowing to extractors without accountability. [GitLab ChatGPT post — CONFIRMED; BIFFUD affiliation — PROBABLE; Medium bio — CONFIRMED]

---

### M3: Boost — designed specifically for under-resourced or under-served civic contexts
- **Direction:** boost
- **Magnitude:** moderate (+5–9 points)
- **Applies when:** The project was explicitly designed for communities or contexts that lack alternatives — not as a nice feature but as the primary design constraint. Evidence: project documentation naming specific underserved groups as primary users, design decisions made to accommodate low-resource contexts (offline capability, low-bandwidth, low-literacy interfaces), or deployment primarily in under-resourced settings.
- **Why Fatima:** The drone companion app's mission — helping ordinary citizens navigate complex regulatory requirements — is exactly this: making something accessible that would otherwise require professional mediation. Sessionize bio: "simplifying technical concepts." Her framing of open source × intersectionality positions underserved communities as the reason for the work, not its beneficiaries as afterthought. [Sessionize bio — CONFIRMED; GitHub drone-companion-app — PROBABLE]

---

### M4: Reduce — tools that digitise existing power structures without challenging them
- **Direction:** reduce
- **Magnitude:** moderate (−5–8 points)
- **Applies when:** The project adds a digital layer to an existing civic or government process but does not improve citizen access, reduce barriers, or shift any power to communities. Digital interfaces to bureaucracy that remain just as opaque, just as inaccessible, or that primarily benefit institutions rather than the people they nominally serve. Projects where "civic tech" means serving government efficiency rather than citizen empowerment.
- **Why Fatima:** Her career path (Code for Canada, Microsoft Civic Tech) is explicitly about embedding digital professionals in government to improve services for citizens — not just to modernise government for its own sake. The distinction between government efficiency tools and citizen empowerment tools is fundamental to her lens. [Code for Canada fellowship — CONFIRMED; bio — CONFIRMED]

---

### M5: Boost — inclusive developer community as a visible part of the project
- **Direction:** boost
- **Magnitude:** weak (+3–6 points)
- **Applies when:** The project has documented, active investment in diversity and inclusion within its developer or contributor community — not just in its user community. Evidence: DEI statements with structural commitments (not just marketing), visible diverse leadership, active inclusion programs for contributors, DEI audits.
- **Why Fatima:** Her @drupaldiversity work is specifically DEI within developer communities. Her WCT awards are for inclusion in technology communities. Her Sessionize bio names D&I as a specialism alongside CI/CD — she sees these as equally technical. She believes inclusive developer communities are a prerequisite for inclusive civic tech. [Sessionize bio — CONFIRMED; @drupaldiversity membership — CONFIRMED; WCT award — PROBABLE]

---

### M6: Conditional — prototype protection for accessibility-first projects
- **Direction:** conditional
- **Magnitude:** moderate (+4–8 points on implementation maturity criterion only)
- **Applies when:** A project scores low on Criterion 5 (implementation maturity) primarily because it is addressing an access gap that has no existing alternatives — meaning the relevant maturity comparator is not "is this deployed at scale" but "is this the only tool that even attempts to solve this for this population." Applies when: (a) the target population is clearly underserved, AND (b) there is evidence of design quality and intent even without deployment evidence, AND (c) the dossier explains why deployment is limited (resource constraints, early stage) rather than because the project is abandoned.
- **Note in v3:** With C5 demoted to max 6 pts, M6 has reduced absolute impact but still applies for accessibility-first projects meeting all three conditions.
- **Why Fatima:** Her Code for Canada fellowship period shows her building tools that were inherently limited by the fellowship duration (18 months) and government procurement cycles — not by lack of quality or commitment. She would recognise that civic tech for under-resourced contexts is structurally harder to deploy at scale. [GitHub drone-companion-app — PROBABLE; Code for Canada fellowship context — CONFIRMED]

---

## Part C: Procedural Rules

### Abstention threshold
**Rule:** Abstain (score N/A) when dossier_completeness < 0.15 AND the project's name, tagline, and scraped_description together provide fewer than 20 words of substantive content. A dead link alone does not trigger abstention.

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
3. Higher C3 score (legibility) wins
4. Lower popularity_risk wins

### Uncertainty handling
**Rule:** When dossier_completeness < 0.35, the project's score is held at a minimum of 25 (uncertainty floor) and flagged HIGH uncertainty.

### Novelty vs implementation
**Rule:** Under v3 (implementation-first), the ceiling for novel-but-undeployed projects remains at 65/100. Above 65 requires at least some evidence of real-world use or formal adoption. M6 can override this ceiling for accessibility-first prototypes.

---

## Part D: Underdog Protection

**Decision:** YES

**Rationale:** Fatima's career is built around making complex systems accessible to excluded communities. Her "open source × intersectionality" framing explicitly links technology access to structural inequality. The Civic Tech Guide curation role — selecting and highlighting projects that are often obscure — directly demonstrates a practice of finding and elevating under-documented work.

**Uncertainty floor:** When dossier_completeness < 0.35, the project's final score is held at a minimum of 25 points, flagged HIGH uncertainty.

---

## Part E: Weight Change Summary (v2 → v3)

| Criterion | v2 weight | v3 weight | Change |
|---|---|---|---|
| C1 (Accessibility) | 20 | 30 | +10 |
| C2 (Open source + governance) | 20 | 30 | +10 |
| C3 (Legibility) | 20 | 30 | +10 |
| C4 (Inclusive community) | 12 | 12 | no change |
| C5 (Implementation maturity) | 12 | 6 | -6 |
| C6 (AI as infrastructure) | 12 | 30 | +18 |
| C7 (Cross-jurisdictional) | 6 | 6 | no change |

New modifier: M_IMPL (+6–12 boost for documented government adoption at scale; −8 for no deployment evidence)
