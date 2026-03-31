# Evaluative Constitution — Part A: Project Criteria
## Evaluator: Nicholas Botti
## Produced by: mirror-constitutional-criteria
## Date: 2026-03-30
## Version: v3

---

### Criterion 1: AI and institutional decision-making safety and alignment
- **Weight:** HIGH (max 20 pts)
- **Why Nicholas:** The clearest and most distinctive value in the entire evidence base. Bio explicitly names AI safety and alignment as core interests, framed specifically as: "AI systems applied to institutional decision-making require rigorous safety and alignment work." This is not generic AI safety concern — it is a specific claim about the application domain (institutional decision-making) and what it demands (rigorous safety work). The Federal Reserve context grounds it: a central bank deploying AI for supervisory decisions carries systemic risk implications that demand higher safety standards than consumer applications. [bio — CONFIRMED; arXiv paper's human-AI teaming focus — corroborating]
- **High score:** Projects that take AI alignment and safety seriously as design constraints, especially in institutional, governmental, or high-stakes civic contexts. Projects that document failure modes, test for unintended consequences, build in human oversight, and treat AI as a tool requiring governance rather than a neutral calculator. Projects that are transparent about what the AI does and doesn't know, and that build accountability mechanisms into the system architecture.
- **Low score:** Projects that deploy AI in consequential civic or governmental contexts without documented safety review, bias testing, or failure mode analysis. Projects that treat algorithmic output as ground truth. Projects that automate decisions affecting people's lives with no human-in-the-loop or appeal mechanism.
- **Dossier fields:** ai_involvement, documented_limitations, outcome_methodology, political_bias_allegations, causation_strength, disparity_tracking

---

### Criterion 2: Financial stability, regulatory, and institutional infrastructure quality
- **Weight:** HIGH (max 20 pts)
- **Why Nicholas:** His entire career was at the Federal Reserve — the institution whose explicit mission includes financial stability and regulation of the banking system. The arXiv paper studies AI tools for monitoring global systemically important banks. Bio names "AI for financial stability" and "policymaker advisory" as core research areas. Interest in "institutional response to technological change" implies awareness of how technology interacts with existing governance structures. [bio — CONFIRMED; arXiv — CONFIRMED; LinkedIn summary — corroborating]
- **High score:** Projects that help regulatory, governmental, or oversight institutions understand, monitor, or manage the risks introduced by technology. Projects that build or improve shared public infrastructure for financial or civic governance. Projects that make regulatory or supervisory processes more transparent, accurate, or efficient. Projects that help policymakers understand complex system dynamics — simulations, dashboards, analytical tools — particularly where AI or novel technology is the subject of governance.
- **Low score:** Projects that have no engagement with regulatory or governance dimensions. Purely commercial tools without public-interest mandate. Projects that increase institutional opacity or concentrate data power without accountability. Projects designed to evade or circumvent regulatory oversight.
- **Dossier fields:** government_partnerships, political_relevance_summary, issue_area, systemic_issue_area, jurisdictional_scope, policy_outcomes

---

### Criterion 3: Complexity-aware and epistemically honest methodology
- **Weight:** HIGH (max 20 pts)
- **Why Nicholas:** Bio explicitly names "blind spots of data-driven decision-making" as a core interest — an unusual and specific self-critical stance for someone with a quantitative mathematics + economics background. Also names "non-linear dynamics and complexity" as interests. The arXiv paper's central empirical finding — that annotator judgment (not just AI capability) determines task quality — is a direct instantiation of this: a linear "AI = accuracy" model would be false; the truth is more complex and contingent. The phrase "naive data-driven approaches can produce catastrophic failures" (from soul file framing) captures the stakes of ignoring complexity. [bio — CONFIRMED; arXiv — corroborating; soul file — paraphrase of bio]
- **High score:** Projects that are explicit about their limitations, uncertainty, and assumptions. Projects that model complex system dynamics rather than simple linear causation. Projects that document where their methodology could fail and under what conditions. Projects that build in mechanisms for detecting their own blind spots — feedback loops, red-teaming, audit trails. Projects that treat political or economic complexity honestly rather than oversimplifying for tractability.
- **Low score:** Projects that present algorithmic outputs as definitive or objective without uncertainty quantification. Projects that rely on simple linear models in inherently non-linear domains. Projects that make strong causal claims from correlational evidence. Projects that optimise for a single metric without acknowledging what that metric misses.
- **Dossier fields:** causation_strength, outcome_methodology, documented_limitations, ai_involvement, disparity_tracking, political_bias_allegations

---

### Criterion 4: Cooperation-building and pro-social incentive design
- **Weight:** MEDIUM (max 12 pts)
- **Why Nicholas:** Bio names "market and incentive design" and "cooperation vs conflict as a design choice" as specific interests, with the framing that "cooperation over conflict is a design choice that can be built into systems." This reflects formal game theory or mechanism design training (consistent with mathematics + economics degree) applied to the question of which equilibria to design toward. The framing "design choice" is key: it implies that technology is not neutral with respect to social outcomes, and that the designer has responsibility for choosing which equilibria their system incentivises. [bio — CONFIRMED]
- **High score:** Projects that are designed to build cooperation — among citizens, institutions, across jurisdictions — rather than optimise for competitive or zero-sum outcomes. Projects with explicit attention to incentive structures: who benefits, who bears costs, and whether the incentive structure creates perverse outcomes. Projects that use mechanism design principles to achieve pro-social outcomes (e.g., public goods provision, collective decision-making, coordination problems). Projects that explicitly consider how their design choices affect cooperative or conflictual dynamics.
- **Low score:** Projects that are indifferent to or actively generate zero-sum competitive dynamics. Projects that extract value from one group to benefit another without transparency about this trade-off. Projects that create incentive misalignments between tool designers, operators, and users. Projects that strengthen winner-takes-all dynamics in civic or political contexts.
- **Dossier fields:** project_type, issue_area, communities_served, primary_users_or_beneficiaries, government_partnerships, open_source

---

### Criterion 5: Protection of attention, autonomy, and community
- **Weight:** MEDIUM (max 12 pts)
- **Why Nicholas:** The bio frames "attention, autonomy, and community" as the stakes of political technology decisions — a specific and unusual articulation. This is not generic "human rights" language. "Attention" most likely refers to the attention economy and cognitive resource appropriation by technology platforms. "Autonomy" refers to individual and collective self-determination in the face of algorithmic shaping of choices. "Community" refers to social cohesion and collective life. Naming these three as "the stakes" signals that he evaluates technology by whether it protects or degrades these three things. [bio — CONFIRMED]
- **High score:** Projects that are explicitly designed to protect human attention — minimising dark patterns, resisting addictive design, giving users control over their information environment. Projects that strengthen individual or collective autonomy — civic participation tools, self-determination tools for communities, tools that reduce dependence on opaque algorithmic intermediaries. Projects that support community formation, social cohesion, and shared civic life rather than atomising or polarising users.
- **Low score:** Projects that exploit attention for engagement metrics. Projects that reduce human autonomy through algorithmic lock-in or opaque recommendation systems. Projects that fragment communities or optimise for outrage. Surveillance tools or tools that increase state or corporate power over individuals without accountability.
- **Dossier fields:** communities_served, primary_users_or_beneficiaries, issue_area, ai_involvement, disparity_tracking, political_bias_allegations

---

### Criterion 6: Implementation maturity and evidence of real-world institutional use
- **Weight:** MEDIUM (max 12 pts)
- **Why Nicholas:** His career was at the Federal Reserve — an institution with the highest evidence standards in financial regulation. The arXiv paper is explicitly empirical: it tests a real tool on a real regulatory task with real annotators using a rigorous experimental design. The bio mentions "policymaker advisory" — advising policymakers requires showing evidence, not just promising potential. The combination of regulatory background and quantitative training suggests he would weight demonstrated deployment over theoretical potential. [bio — CONFIRMED; arXiv — CONFIRMED]
- **High score:** Projects deployed in real institutional contexts with documented uptake — governments, regulatory agencies, civic organisations, communities. Published evidence of effectiveness. Active and maintained codebase. Documented impact on the problem the project addresses. Partnerships with credible institutions that have independently chosen to adopt the tool.
- **Low score:** Concept papers, prototypes with no documented real-world use, tools in perpetual development with no deployment evidence. Speculative impact claims without measurement. Tools that look well-designed but have no documented use by the populations they claim to serve.
- **Dossier fields:** government_partnerships, policy_outcomes, last_commit_date, published_performance_metrics, founding_year, decade_plus, homepage_http_status

---

### Criterion 7: Cross-jurisdictional applicability and global accessibility
- **Weight:** LOW (max 6 pts)
- **Why Nicholas:** The bio mentions "policymaker advisory" in a context that extends beyond any single national context — and the Federal Reserve operates in an international financial stability context (working with G20, FSB, BIS on global systemic risk). The arXiv paper studies GSIBs (global systemically important banks) — inherently cross-jurisdictional entities. The Newspeak House fellowship draws from a UK/international civic tech context. However, this is a lower-weight criterion because the primary concerns (AI safety, institutional use, complexity awareness) do not inherently privilege global vs. national scope. [bio — CONFIRMED; arXiv — corroborating]
- **High score:** Projects designed for or demonstrably adopted across multiple national contexts. Projects that use open standards enabling local adaptation. Projects addressing problems that transcend national boundaries (financial stability, climate, migration). Projects explicitly designed to be accessible in low-resource or non-OECD contexts.
- **Low score:** Projects tightly coupled to a single national political or legal system with no visible route to wider applicability. Projects with no documentation about internationalisability. Projects that implicitly assume OECD legal, technical, or civic infrastructure.
- **Dossier fields:** jurisdictional_scope, geography, open_source, government_partnerships
