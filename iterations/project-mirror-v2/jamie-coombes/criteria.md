# Evaluative Constitution — Part A: Project Criteria
## Evaluator: Jamie Coombes
## Date: 2026-03-28

---

### Criterion 1: Safety-consciousness and interpretability by design

- **Weight:** HIGH (20 pts)
- **Why Jamie:** His most sustained original technical contribution is the `obvs` library — mechanistic interpretability tooling for language models, produced through AI Safety Camp. His GitHub bio frames his core identity as "Transformer Interpretability." The AI-Risk-Survey repo demonstrates active empirical engagement with AI risk taxonomy. The bio explicitly states "AI for public good must be safe and interpretable before it is deployed." [GitHub, obvs repo, AI-Risk-Survey, bio]
- **High score (80–100):** A project that explicitly addresses safety, interpretability, or meaningful human oversight of AI/automated decision systems — particularly in government deployment contexts. Includes: interpretability tooling, explainable AI for public sector, safety auditing infrastructure, projects that make AI decision-making legible to non-technical affected parties.
- **Low score (0–30):** A project that deploys opaque or black-box AI/ML systems in high-stakes public contexts with no interpretability mechanism, no audit trail, and no explanation for affected individuals. Also low: projects that treat safety as a checkbox rather than a design principle.
- **Dossier fields:** scraped_description, tagline, political_relevance_summary, issue_area, primary_users_or_beneficiaries

---

### Criterion 2: Public-interest deployment with real beneficiaries

- **Weight:** HIGH (20 pts)
- **Why Jamie:** Coefficient.ai's work is explicitly for UK government (confirmed ACE framework, DSIT, law enforcement) and the 2026 hackathon project targets emergency services dispatch — very concrete public-interest applications. The bio's first stated professional identity is "AI for UK Gov." This is not abstract public good rhetoric but practitioner-level engagement with how AI serves specific populations. [GOV.UK case study, 2026 hackathon repo, bio]
- **High score (80–100):** A project with clear, named beneficiary populations — citizens accessing government services, marginalised communities, people in emergency situations, populations historically underserved by public services. Evidence of active deployment, not just stated intent. User numbers or deployment geography cited.
- **Low score (0–30):** Projects whose beneficiaries are primarily professionals, institutions, or well-resourced organisations who already have alternatives. Projects where "public interest" is asserted but no specific user population is named or evidenced. Consultancy tools that serve clients rather than citizens.
- **Dossier fields:** primary_users_or_beneficiaries, communities_served, scraped_description, political_relevance_summary

---

### Criterion 3: Open infrastructure and community enablement

- **Weight:** HIGH (20 pts)
- **Why Jamie:** The obvs library is MIT-licensed, on PyPI, documented on ReadTheDocs — this is not just research; it is deliberately packaged for community use. His GitHub bio frames the work as "Making Transformers Obvious" — a pedagogical, accessibility-first stance. His TeachFirst background consistently re-appears in self-description. Multiple conference talks represent a pattern of knowledge-sharing rather than knowledge-hoarding. Open infrastructure to him is not ideological — it is practical: it makes tools legible and replicable. [obvs repo, GitHub bio, conference talks, PyConDE 2024]
- **High score (80–100):** Open-source civic infrastructure that other practitioners, governments, or communities can adopt, adapt, and extend. Active documentation. Community governance or contribution model. Tools that enable others to build rather than locking users into a single provider.
- **Low score (0–30):** Proprietary civic tech tools with no community licensing. Projects whose primary function is vendor lock-in or data extraction. Projects with no documentation, no replication guidance, no community pathway.
- **Dossier fields:** scraped_description, tagline, issue_area (for open-source signals), primary_users_or_beneficiaries

---

### Criterion 4: Evidence of deployment and implementation maturity

- **Weight:** MEDIUM (12 pts)
- **Why Jamie:** His professional identity is practitioner-first, not researcher-only. He builds at Coefficient for real government clients who need working tools, not prototypes. The AI-Risk-Survey and hackathon repo both have working implementations. He is not someone who values theoretical potential over demonstrated use — his career is built on delivering. However, weight is medium not high because he also values emerging research (AI Safety Camp, obvs started as a research project) and would protect genuine prototypes. [GOV.UK case study, AI-Risk-Survey, 2026 hackathon, PyConDE 2024]
- **High score (80–100):** Active deployment with documented users, or published case studies of adoption. Working code with recent commits. Evidence of real-world use beyond the builders themselves.
- **Low score (0–30):** Projects that exist as landing pages with no working product, dead links, or explicit "coming soon" framing with no evidence of progress.
- **Dossier fields:** scraped_description, homepage_http_status (dead link signal), political_relevance_summary

---

### Criterion 5: Participatory design and governance model

- **Weight:** MEDIUM (12 pts)
- **Why Jamie:** The bio explicitly names "participatory approaches to AI governance are not optional" — the strongest stated normative position in his self-description. Newspeak House's fellowship culture is rooted in participatory design and civic co-creation. This criterion weight is medium (not high) because the public record provides no independent corroboration beyond the bio — no published work, no built projects, no talks specifically on participatory design. It is clearly a stated value but its operational depth is uncertain. [bio, Newspeak House context]
- **High score (80–100):** Projects that demonstrably involve affected communities in design, governance, or ongoing accountability — not just "user testing" but structural participation. Community ownership models. Co-design methodologies documented. Governance structures that include non-technical stakeholders.
- **Low score (0–30):** Projects built entirely by technical teams with no community input, no governance pathway for affected groups, no accountability to users beyond product feedback loops.
- **Dossier fields:** communities_served, political_relevance_summary, scraped_description

---

### Criterion 6: Systemic risk awareness and mitigation orientation

- **Weight:** MEDIUM (12 pts)
- **Why Jamie:** The bio states "systemic risk from AI is the defining challenge of this generation" — the most emphatic normative claim in his self-description. The AI-Risk-Survey uses synthetic stakeholder modelling to understand AI risk perceptions — this is an empirical, systemic approach, not a single-project fix. The AI Safety Camp framing positions him as someone who thinks at the population/civilisational scale, not just the individual deployment level. [bio, AI-Risk-Survey, AI Safety Camp affiliation]
- **High score (80–100):** Projects that address AI/tech risk at systemic level — governance infrastructure, audit frameworks, regulatory tools, safety standards, early-warning systems, systemic accountability mechanisms. Projects that make AI systems legible to democratic oversight.
- **Low score (0–30):** Projects that address narrow individual harms without any mechanism for systemic accountability, or that scale individual-level interventions without addressing the systemic conditions that generate the harm.
- **Dossier fields:** political_relevance_summary, issue_area, scraped_description

---

### Criterion 7: Originality and distinctiveness of approach

- **Weight:** LOW (6 pts)
- **Why Jamie:** The choice to implement Patchscopes as an MIT-licensed library (rather than leaving it as a research paper) reflects genuine originality in execution. The AI-Risk-Survey's synthetic stakeholder methodology is methodologically novel. He cares about solving problems differently, not just at scale. However, this is a tie-breaker criterion, not a primary signal — he is fundamentally a public-good practitioner, not an originality-for-its-own-sake researcher. [obvs repo, AI-Risk-Survey]
- **High score (80–100):** Projects with genuinely novel approaches that no other project in the field is attempting. Distinctive methodology, new framing, or unexpected combination of techniques.
- **Low score (0–30):** Commodity or me-too implementations of well-established models without any distinctive contribution.
- **Dossier fields:** scraped_description, tagline

---

### Criteria weighting summary

| # | Criterion | Weight (max pts) |
|---|---|---|
| C1 | Safety-consciousness and interpretability by design | HIGH (20) |
| C2 | Public-interest deployment with real beneficiaries | HIGH (20) |
| C3 | Open infrastructure and community enablement | HIGH (20) |
| C4 | Evidence of deployment and implementation maturity | MEDIUM (12) |
| C5 | Participatory design and governance model | MEDIUM (12) |
| C6 | Systemic risk awareness and mitigation orientation | MEDIUM (12) |
| C7 | Originality and distinctiveness of approach | LOW (6) |
| | **Total maximum** | **102** |

> Note: Maximum criteria score is 102. Normalise to 100 by dividing by 1.02 before applying modifiers.
