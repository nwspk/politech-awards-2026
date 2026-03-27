# Evaluative Constitution: Jamie Coombes
## Version: v2-fixed | Date: 2026-03-27

> This constitution is fixed before jury evaluation. Jury models apply it as written — they do not infer or adapt it.

---

## Part A — Project Criteria

### Criterion 1: Mechanistic Interpretability and Technical Transparency
**Weight:** High

**Description:** Does the project make AI systems understandable at a mechanistic level — revealing *how* they produce outputs, not just *that* they produce certain outputs? This is distinct from general "explainability" or black-box auditing. The project should expose internal representations, decision pathways, or feature-level behaviour. Projects that apply interpretability techniques to AI systems used in public or civic contexts score highest.

**High-scoring exemplar:** A platform that uses activation analysis, feature probing, or attention visualisation to let users inspect why an AI system made a specific recommendation in a government or civic setting. Or an interpretability library that enables researchers to audit deployed AI systems.

**Low-scoring exemplar:** A project that claims transparency through documentation or process governance (e.g., model cards, audits after the fact) but provides no mechanism for inspecting the model's internal behaviour. Also: civic technology projects that don't involve AI, or AI projects that are entirely black-box.

**Dossier field mapping:** `ai_involvement`, `open_source`, `replication_materials_available`, `documented_limitations`

---

### Criterion 2: Government AI Applicability
**Weight:** High

**Description:** Could this project be deployed, adopted, or used as a model by UK government departments working with sensitive data and complex policy decisions? The project need not be UK-specific, but it should address the class of problems that arise in OFFICIAL-SENSITIVE government AI contexts: accountability, data sensitivity, inter-departmental coordination, public trust, and resilience under adversarial conditions. Projects that have actual government partnerships score higher.

**High-scoring exemplar:** A tool for structured, transparent AI-assisted decision-making in public sector contexts; a deliberation platform used by government for policy consultation; an AI procurement framework with accountability mechanisms; open infrastructure already adopted by government agencies.

**Low-scoring exemplar:** A consumer-facing application with no government applicability; a purely commercial AI product with no accountability dimension; a tool designed for markets or contexts entirely unlike government decision-making.

**Dossier field mapping:** `government_partnerships`, `jurisdictional_scope`, `communities_served`, `political_units`, `org_type`

---

### Criterion 3: Systemic Risk Mitigation
**Weight:** High

**Description:** Does the project address AI-related risks at scale — not just individual-level harm prevention but second-order, systemic, or tail risks? This includes: concentration of AI power, cascading failures in public systems, manipulation of public opinion at scale, AI-enabled disinformation infrastructure, or failure modes that become catastrophic only at deployment scale. The project should demonstrate awareness of risk at the level of systems, not just individual applications.

**High-scoring exemplar:** A platform that monitors algorithmic systems across multiple institutions simultaneously; an early-warning system for AI-enabled manipulation; a framework that prevents government AI procurement from creating vendor lock-in or catastrophic dependencies; a simulation tool for modelling AI failure cascades.

**Low-scoring exemplar:** A project that addresses harms to individuals one at a time (important but not systemic); a project focused exclusively on current harms without attention to future or tail risks; a project whose main benefit is convenience or efficiency without a risk reduction dimension.

**Dossier field mapping:** `failure_modes`, `documented_limitations`, `systemic_issue_area`, `issue_area`, `causation_strength`

---

### Criterion 4: Participatory Design and Community Input
**Weight:** Medium

**Description:** Were affected communities, users, or the public involved in designing or governing the AI/civic system — not just as end users, but as genuine co-designers or decision-makers? This criterion specifically rewards projects that have moved beyond consultation toward actual shared governance or co-creation. The synthetic users event context makes this nuanced: the question is whether *real* community voices shape the project, not just simulated ones.

**High-scoring exemplar:** A project with community ownership structures, co-design processes documented and evidenced, or explicit mechanisms for affected communities to shape how the technology develops. Participatory budgeting platforms, co-governed deliberation tools, community land trust data systems.

**Low-scoring exemplar:** A project that claims to serve communities without evidence of community input into design; a project using AI to simulate community voices as a substitute for real engagement; a top-down tool deployed *at* communities without their involvement in its development.

**Dossier field mapping:** `community_ownership`, `disparity_tracking`, `contributor_governance`, `movement_building_utility`

---

### Criterion 5: Open Source and Open Methodology
**Weight:** Medium

**Description:** Is the technical approach, algorithm, or methodology open so that others can scrutinise, replicate, build on, or audit it? Given Coombes' commitment to building open-source infrastructure (MIT-licensed `obvs` library), openness is not just a preference but a values signal about who the work is for. Projects that are open-source *and* have active contributor communities score higher than those that are technically open but inactive.

**High-scoring exemplar:** An actively maintained open-source project with a contribution model, governance documentation, and evidence of reuse or adoption; or a research project with full methodology disclosure, replication materials, and published code.

**Low-scoring exemplar:** A closed, proprietary system without public code; a project that uses "open" branding but operates as a black box with no genuine transparency about technical decisions.

**Dossier field mapping:** `open_source`, `github_url`, `github_stars`, `last_commit_date`, `replication_materials_available`, `contributor_governance`

---

### Criterion 6: Public Good Orientation over Private Capture
**Weight:** Medium

**Description:** Is the project clearly oriented toward public benefit rather than private profit or platform capture? This is not a simple charity vs. for-profit distinction — a B Corp or social enterprise can score well if the value flows clearly to users and communities. The key question is: who captures the value this project creates? Projects where value extraction flows primarily to platform owners, investors, or national governments rather than communities score lower.

**High-scoring exemplar:** A nonprofit or commons-governed project with transparent funding and governance; a project explicitly designed to prevent data enclosure or monopoly; a project funded by grants or public institutions with demonstrated public benefit.

**Low-scoring exemplar:** A VC-backed platform that creates dependency on proprietary infrastructure; a project that makes civic participation conditional on using a commercial product; a project that monetises civic data without community consent.

**Dossier field mapping:** `org_type`, `funding_model`, `known_funders`, `community_ownership`, `governance_model`

---

### Criterion 7: Evidence of Real-World Deployment and Impact
**Weight:** Low

**Description:** Is there documented evidence that the project has been deployed in real contexts and produced measurable outcomes? Coombes' professional background in applied ML (not just research) means he values things that actually work, not just elegant ideas. However, this is weighted low because novel approaches that haven't yet been deployed at scale may still be important for the future.

**High-scoring exemplar:** A project with documented policy outcomes, adoption by multiple institutions, or published impact evaluations with independent verification. Evidence of sustained use over multiple years.

**Low-scoring exemplar:** A project at prototype stage with no deployments; a project with anecdotal claims of impact; a research tool with no evidence of use outside the original team.

**Dossier field mapping:** `policy_outcomes`, `causation_strength`, `outcome_methodology`, `published_performance_metrics`, `decade_plus`, `countries_deployed`

---

### Criterion 8: Ethical AI Community Building
**Weight:** Low

**Description:** Does the project support the broader community of practitioners working on responsible AI? This includes training programmes, convening infrastructure, knowledge commons, professional networks, or tools that help others do better work. Weighted low because Coombes' primary identity is as a builder and researcher, not primarily a community organiser — but community infrastructure is part of his values.

**High-scoring exemplar:** A training programme that upskills practitioners in responsible AI; a platform that facilitates knowledge sharing across the responsible AI ecosystem; a network that connects people working on AI accountability.

**Low-scoring exemplar:** A project with no community or ecosystem dimension; a tool that creates value for individual users without any network effects or shared infrastructure.

**Dossier field mapping:** `communities_served`, `in_civictech_guide`, `movement_building_utility`

---

## Part B — Value Modifiers

### Modifier 1: Mechanistic Interpretability as Core vs. Incidental (BOOST)
**Direction:** Boosts score
**Magnitude:** Strong
**Description:** If mechanistic interpretability — the ability to inspect *internal* model representations — is the *primary purpose* of the project (not just a feature, not just a general "AI transparency" claim), apply a strong boost. The distinction matters: many projects claim transparency but few actually expose model internals. Given that Coombes built `obvs` specifically to implement Patchscopes for inspecting hidden representations, he has specific technical criteria for what counts as real interpretability.

**Rationale:** Coombes' AISC project, his research lead role, and his `obvs` library all converge on mechanistic interpretability (activation patching, feature probing, representation analysis) as his core technical identity. Projects that do this — not just gesture at it — speak directly to his professional expertise.

---

### Modifier 2: Government-of-Record Deployment in Sensitive Data Context (BOOST)
**Direction:** Boosts score
**Magnitude:** Moderate
**Description:** If the project has actual documented partnerships with or adoption by government agencies — particularly UK, EU, or comparable governments handling sensitive data — apply a moderate boost. The OFFICIAL-SENSITIVE context of Coombes' day job means he has specific, practical experience with what it takes for a technology to be trusted by government.

**Rationale:** Coombes builds AI for FCDO, Home Office, DCMS, and DBT at OFFICIAL-SENSITIVE level. This is not hypothetical. Projects that have navigated the real requirements of government deployment (security, auditability, sensitivity, inter-departmental coordination) speak to his professional context in a way that purely civil society or commercial projects do not.

---

### Modifier 3: Closed/Proprietary Black-Box AI with No Transparency Layer (REDUCE)
**Direction:** Reduces score
**Magnitude:** Strong
**Description:** If the project deploys AI that cannot be inspected, audited, or understood — even in principle — by the people it affects, apply a strong reduction. This is the direct inverse of Criterion 1. The reduction is strong because Coombes' professional and research identity is explicitly defined in opposition to black-box AI deployment in consequential contexts.

**Rationale:** His `obvs` library exists precisely because the alternative — black-box LLMs — is unacceptable to him in research contexts. His government AI work involves OFFICIAL-SENSITIVE data where accountability is mandatory. A project that claims public benefit but operates as an opaque system is fundamentally at odds with his values.

---

### Modifier 4: Synthetic Voice as Substitute for Real Community Input (REDUCE)
**Direction:** Conditional reduce
**Condition:** Applies when a project uses AI-generated personas or synthetic user studies to *substitute for* rather than *supplement* real community engagement, especially for communities with limited digital access or high-stakes policy decisions.
**Magnitude:** Moderate
**Description:** The synthetic users event is important context here. Coombes is genuinely interested in synthetic user methods, but the event description explicitly included critical readings questioning whether they "truly honour user-centred design principles." This is not a blanket scepticism but a specific concern about substitution effects. Projects that use AI simulation to avoid genuine community engagement in high-stakes civic contexts should receive a moderate reduction.

**Rationale:** Coombes curated both pro and critical readings about synthetic users. The Shrestha et al "Beyond WEIRD" paper specifically challenges whether synthetic participants accurately represent non-Western, non-WEIRD populations — a concern consistent with his interest in global policy research and AI risk for diverse populations. He is not anti-synthetic; he is anti-substitution-without-critique.

---

### Modifier 5: Effective Altruism / AI Alignment Ecosystem Connection (CONDITIONAL BOOST)
**Direction:** Conditional boost
**Condition:** Applies when a project is explicitly designed to address long-term AI risk (including CBRN risks, deceptive alignment, catastrophic AI failures) and has credible research-backed methodology. Does not apply to projects that merely use EA language without substantive alignment work.
**Magnitude:** Weak
**Description:** Coombes' AISC work, GitHub bio seeking "AI Alignment" collaborators, and "AI risk" tagline at Newspeak House all signal engagement with EA-adjacent AI risk thinking. This is a weak modifier because his primary identity is in applied government AI and mechanistic interpretability, not in the EA movement per se. Projects in the EA/alignment space that have rigorous, technically grounded approaches to AI risk receive a small boost.

**Rationale:** His AI Safety Camp participation places him in the EA-adjacent AI safety community. His GitHub bio explicitly mentions alignment collaboration. But his professional context is government and applied ML, not academic alignment research — so this is a weak signal, not a dominant one.

---

## Part C — Procedural Rules

### Rule 1: Distinguish Mechanistic Interpretability from General AI Transparency
**Rule statement:** When a project claims to address "AI transparency," "explainability," or "algorithmic accountability," evaluate specifically whether it exposes *internal model representations* (mechanistic interpretability) or only *inputs/outputs* (black-box auditing). Score the former under Criterion 1 at full weight; score the latter at 60% of the Criterion 1 weight, and do not apply Modifier 1.
**Trigger condition:** Any project involving AI that claims transparency, explainability, or interpretability. Examples: audit tools, algorithmic accountability organisations, fact-checking AI, AI governance frameworks.

---

### Rule 2: For AI Deliberation Platforms — Evaluate the Interpretability Layer, Not Just the Participation Layer
**Rule statement:** When evaluating AI-powered deliberation or participation platforms (e.g., Polis, deliberAIde, Talk to the City), score Criterion 1 (Mechanistic Interpretability) based specifically on whether users can inspect *why the AI clustered, summarised, or synthesised* their input the way it did — not just whether they can see the outputs. A deliberation tool that shows users the final consensus map without exposing the AI's categorisation logic scores lower on Criterion 1 than one that exposes its reasoning.
**Trigger condition:** Any platform that uses AI to process, summarise, or synthesise human-generated deliberative content (consultation responses, comments, forum posts, survey data).

---

### Rule 3: When Government Applicability and Systemic Risk Both Fire, Weight the More Urgent
**Rule statement:** When a project scores highly on both Criterion 2 (Government Applicability) and Criterion 3 (Systemic Risk Mitigation), and these criteria point to *different* projects as the winner, prefer the project that addresses the more urgent risk. Assess urgency by: (a) is the risk currently active in UK government AI deployments? (b) does the project address near-term (0–5 year) risks or longer-term theoretical ones? Near-term, currently-active risks take priority.
**Trigger condition:** When the top 5 projects contain both government-deployment tools (Criterion 2) and risk-mitigation frameworks (Criterion 3) that would otherwise tie.

---

### Rule 4: When Two Projects Score Equally, Prefer the One with Stronger Open-Source Governance
**Rule statement:** When two projects have the same or near-identical final score (within 2 points), prefer the one with an active open-source repository, documented governance, and evidence of external contributions. This reflects Coombes' own practice: he maintains `obvs` under a separate org (`obvslib`) with MIT license, indicating belief in structured open governance rather than personal repo stewardship.
**Trigger condition:** Any tiebreaker situation among the top 20 projects.

---

## Champion and Discount Framing

### What Jamie Coombes would champion

A project that makes AI systems genuinely interpretable at the mechanistic level — not just auditable after the fact, but inspectable *while running* — and that deploys this in government or civic contexts where accountability is non-negotiable. He'd champion projects that treat interpretability as infrastructure, not as a feature: open-source tools that the whole ecosystem can build on, maintained by foundations or research organisations rather than locked behind commercial APIs. He'd be excited by anything that bridges his two worlds — the applied government ML engineer and the mechanistic interpretability researcher — in a way that makes the former more trustworthy. The synthetic users event suggests he'd also champion work that critically examines whether AI can genuinely stand in for human voices in policy research, not just assume it can.

### What Jamie Coombes would discount

He'd discount AI projects that claim "transparency" or "accountability" through process (policies, audits, documentation) without any technical mechanism for inspecting what the model is actually doing. He'd be sceptical of deliberation platforms that use AI to summarise community input without exposing the AI's reasoning — the participation layer without the interpretability layer. He'd also discount "participatory AI" projects that use synthetic personas as a substitute for genuine community engagement, especially for marginalised communities who most need authentic representation. Proprietary black-box systems deployed in government contexts without accountability mechanisms are a direct professional concern.

### Most likely constitution failure mode

This constitution might over-weight mechanistic interpretability as a formal technical property and under-weight the *practical accessibility* of that interpretability to non-technical government users. Coombes works with FCDO and Home Office users, not just ML researchers. A project that is technically interpretable but only accessible to experts might rank high on this constitution while ranking lower in his actual judgement. The constitution also might under-reward projects that address important civic problems (housing, migration, health) without an AI interpretability dimension — even if those projects are exactly what government needs.

---

## Constitution Confidence

**Medium-high**

**Rationale:** Part A (criteria) is well-evidenced. Criteria 1 (mechanistic interpretability) and 2 (government AI) are directly supported by his professional identity, GitHub output, and AISC research. Criterion 3 (systemic risk) is supported by his bio and Newspeak House tagline. Criteria 4 (participatory design) is now better evidenced than in v1, thanks to the synthetic users event. Criteria 5 and 6 (open source, public good) are consistent across sources.

Part B (modifiers) is reasonably evidenced but partly inferential. Modifier 4 (synthetic voice as substitute) is the most novel inference — the synthetic users event clearly evidences an interest in the *question*, but not a settled position. The constitution treats it as a conditional dampener, which is appropriately cautious.

Part C (procedural rules) is the most inferential. Rules 1 and 2 are directly motivated by the v1 jury split: the five-way disagreement maps almost exactly onto the ambiguity that Rules 1 and 2 are designed to resolve. Rule 3 is more speculative — we don't have direct evidence of how Coombes would prioritise between near-term and longer-term risk. Rule 4 is supported by his own practice with `obvslib`.

**Specific gap**: His positions on AI governance policy, regulation, or specific civic causes are not visible in public writing. The constitution is built primarily from what he *builds* and *researches*, not from what he *advocates*. This may produce a constitution that is more technically oriented than his actual civic values.
