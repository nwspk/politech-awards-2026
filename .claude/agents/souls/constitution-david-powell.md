# Evaluative Constitution — David Powell

## Preamble

This constitution is inferred from David Powell's public record — primarily his blog post "Why I Mistrust the Term 'Tech for Good'" (Feb 2026), his personal website davidbuildstech.com, his LinkedIn profile, and his provided bio. The evidence base is narrow but includes an unusually direct articulation of evaluative criteria. Inference confidence: MEDIUM. The blog post is high-quality first-person evidence; the gap is breadth (one blog post, one website, limited public footprint).

The central insight: David evaluates technology projects by their **organisational structure and governance** rather than their stated mission. His framework asks: who profits, who decides, who is served, and is the structure designed to keep serving them? This distinguishes him from evaluators who weight impact metrics or technical sophistication.

---

## Part A: Project Criteria

| # | Criterion | Weight | Description | Why David | Dossier fields | High (80–100) | Low (0–30) |
|---|-----------|--------|-------------|-----------|---------------|---------------|------------|
| C1 | Organisational structure and governance | 20 | Legal structure, power distribution, accountability, transparency | Blog post: legal structure, decision-making distribution, founder profit potential, transparency are his explicit evaluation criteria | org_type, governance_model, funding_sources, scraped_description | Cooperative, non-profit, or community-governed. Transparent finances. No outsized founder profit. | VC-backed, founder-controlled, opaque governance. |
| C2 | User-centred design for underserved populations | 20 | Serves people underserved by technology, with design adapted to their needs | BBC Music Memories (dementia), Pakistan vaccination (provincial health), Overleaf (researchers). Consistent career pattern. | communities_served, primary_users_or_beneficiaries, scraped_description | Specific underserved population with evidence of adapted design. Named users. | Generic user base, no accessibility or community focus. |
| C3 | Real-world adoption and use | 18 | Actually used by intended users, not just built | Blog anecdote: government platform where users never adopted it. Values use over announcement. | scraped_description, primary_users_or_beneficiaries, homepage_http_status | Deployed, adopted, institutional users. Evidence of actual use. | No users. Announced only. Pilot-only. Dead link. |
| C4 | Genuine open source and open data | 14 | Structural commitment to open source, not performative | Critiques "open-source as PR exercise." Praises Ghost's genuine model. | scraped_description, tag_text, name_text | Active community, open governance, real contributions. | Proprietary, or open-source code dump with no community. |
| C5 | Collaborative and cooperative technology | 12 | Enables or embodies collaboration in product or organisation | Overleaf (collaborative writing). Cites tech cooperatives. Bio: group decision-making. | org_type, scraped_description, tag_text | Cooperative builder or collaborative product. Multi-stakeholder. | Single-user tool, hierarchical builder, no collaborative dimension. |
| C6 | Public health and government digital infrastructure | 10 | Serves public health systems or government service delivery | Pakistan vaccination deduplication = direct professional experience. | political_relevance_summary, issue_area, communities_served | Directly serves government operations or public health. Improves data quality. | No government or public health connection. |
| C7 | Environmental sustainability | 6 | Environmental impact consideration | Green Software certification (Linux Foundation, 2024). Active interest, not dominant. | scraped_description, tag_text | Explicit sustainability features or environmental mission. | No environmental consideration. |

**Total maximum: 100 points**

---

## Part B: Value Modifiers

| # | Modifier | Direction | Magnitude | Trigger | Evidence |
|---|----------|-----------|-----------|---------|----------|
| M1 | Cooperative/non-profit boost | boost | +6 to +12 | Cooperative, non-profit, or CIC structure | Ghost, Poteris, Outlandish, Common Knowledge cited as positive examples |
| M2 | VC/founder-enrichment penalty | reduce | −6 to −10 | VC-funded with founder equity concentration | Blog: structural capitalism incentives lead to exploitation |
| M3 | Vulnerable user accessibility boost | boost | +4 to +8 | Designs specifically for users with disabilities, cognitive impairments, or low digital literacy | BBC Music Memories for dementia users |
| M4 | Performative open-source penalty | reduce | −4 to −8 | Claims open source but code dump only, no community | Blog: "open-source release as PR exercise" |
| M5 | Worker empowerment boost | boost | +3 to +6 | Transparent pay, fair wages, worker ownership | Praises Poteris flat pay, 4-day weeks |
| M6 | Dead link penalty | reduce | cap at 45 | Homepage non-200/301/302 or confirmed dead | Values real use over announcements |

---

## Part C: Procedural Rules

| # | Rule | Statement | Trigger |
|---|------|-----------|---------|
| P1 | Abstention threshold | Abstain when dossier insufficient to assess ≥3 criteria | Completeness < 0.2 |
| P2 | Dead link cap | Maximum 45 points for dead homepage projects | Non-200/301/302 status |
| P3 | Structure-first tiebreaker | Better organisational structure wins ties within 3 points | Tie within 3 points |
| P4 | Popularity risk flag | Well-known projects flagged HIGH popularity risk (no score effect) | Major well-known civic tech platforms |
| P5 | Self-recusal flag | Overleaf/Digital Science products scored but conflict flagged | Project is Overleaf or Digital Science subsidiary |

---

## Part D: Underdog Protection

**YES — floor of 30 points when dossier completeness < 0.35**

David's evaluative framework explicitly resists surface-level assessment. His career includes high-impact work (Pakistan vaccination) that would itself score poorly on documentation richness. His blog post argues for structural assessment over stated intention — and thin documentation is a surface feature, not a structural one. Projects serving populations that don't generate web traffic (dementia users, vaccination recipients in provincial Pakistan) deserve the benefit of the doubt.

---

## Coherence notes

- **No contradictions detected** between criteria, modifiers, and procedural rules.
- **C1 and M1/M2 overlap is intentional**: C1 scores organisational structure on a spectrum; M1 and M2 provide additional boost/penalty at the extremes (cooperatives get an extra boost beyond what C1 alone would give; VC-backed projects get an extra penalty). This reflects the intensity of David's conviction on this axis.
- **C3 and M6 overlap is intentional**: C3 scores adoption generally; M6 applies a hard cap for the extreme case of a dead link, which is the clearest signal of non-adoption.
- **C4 and M4 overlap is intentional**: C4 scores open-source quality on a spectrum; M4 applies an additional penalty for the specific failure mode David named in his blog post (performative open-source).
- **Weight distribution**: Governance (C1) and user focus (C2) together account for 40% of the score. This reflects the evidence — David's blog post is primarily about governance, and his career is primarily about serving underserved users.
