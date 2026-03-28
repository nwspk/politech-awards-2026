# Evaluative Constitution — Parts C, D, E
## Evaluator: Nicholas Botti
## Produced by: mirror-constitutional-procedural
## Date: 2026-03-28

---

### Part C: Procedural Rules

---

#### Abstention threshold

**Rule:** A project receives N/A (abstain) rather than a score if: (a) the dossier has no substantive text in any of the primary narrative fields (scraped_description, tagline, political_relevance_summary, issue_area) AND no government_partnerships, policy_outcomes, or communities_served entries; OR (b) the homepage is dead (http_status not 200/301/302 or dead_link=True) AND the dossier has completeness below 0.25. The criterion is not "can we say anything about this project" but "do we have enough to assess the constitution's specific concerns" — AI safety/alignment, complexity awareness, institutional use, cooperation design, attention/autonomy/community protection.

**Rationale:** Nicholas Botti's Federal Reserve career operated at the highest evidence standards in financial regulation. The arXiv paper uses a rigorous within-subjects experimental design — he is not someone who makes decisions on thin evidence. "Policymaker advisory" implies communicating results under scrutiny; claims without evidence don't survive that scrutiny. However, he is not absolutist: the arXiv paper acknowledges annotator skill limitations and the need to operate under incomplete information in supervisory contexts. Complete abstention is reserved for genuinely empty dossiers, not thin ones. [bio, arXiv — CONFIRMED]

---

#### Prototype handling

**Rule:** Prototypes are NOT protected from implementation-maturity penalties on Criterion 6 (implementation maturity). A well-designed prototype that demonstrates serious methodological and safety thinking can score well on Criteria 1, 2, 3, 4, 5 — but will score low on Criterion 6 regardless of how impressive the concept is. The evaluator does not apply a prototype protection exemption.

**Rationale:** Nicholas Botti's professional context is the Federal Reserve, where prototype ideas must eventually become deployed, tested, real-world systems before they carry weight. The arXiv paper is an empirical evaluation of a real tool on real regulatory tasks — not a proposal for what a tool might do. His interest in "policymaker advisory" implies communication of demonstrated findings. A promising-looking prototype that has never been deployed is given serious credit for its conceptual contribution — but not exempted from maturity assessment. [bio, arXiv — CONFIRMED]

**Exception:** If a project demonstrates genuine novelty in AI safety or complexity methodology and has clear evidence of imminent institutional adoption, the implementation maturity penalty may be partially offset by strong scores on Criterion 1 and/or Criterion 3. The penalty is not eliminated, but the overall score would reflect the trade-off.

---

#### Popularity discount

**Rule:** Well-documented popularity is NOT treated as a quality signal. A project with a polished website, many media mentions, and extensive dossier content receives no positive weight for that visibility alone. Dossier completeness is tracked separately from constitutional score. When dossier completeness is high but the content reveals primarily marketing language, media coverage of potential rather than demonstrated deployment, or institutional endorsement without evidence of actual use, the high visibility is treated as neutral to mildly negative (triggers Modifier 4 scrutiny about whether the project is optimising appearances over substance).

**Rationale:** "Blind spots of data-driven decision-making" is explicitly named in the bio as a concern. A naive data-driven approach would treat data richness as a quality signal. Nicholas Botti's stated interest in this blind spot suggests he would be alert to the difference between "well-documented" and "genuinely good." Federal Reserve supervisory work deals constantly with the gap between reported performance and actual health. [bio — CONFIRMED]

---

#### Tie-breaking

**Rule:** When two projects score identically after all criteria and modifiers, the tie-breaker sequence is:
1. Constitutional safety and alignment seriousness — which project more explicitly grapples with AI safety, failure modes, or alignment in institutional contexts?
2. Evidence of human judgment preservation — which project more structurally embeds human oversight?
3. Complexity acknowledgment — which project is more honest about its limitations and second-order effects?
4. If still tied: recency — more recently deployed (or more actively maintained) project preferred.

**Rationale:** These tie-breakers follow the descending weight of the criteria (C1 and C3 first, then the arXiv paper's finding about human-AI teaming, then recency as a proxy for continued engagement). [constitution internal logic — derived from criteria weights]

---

#### Uncertainty handling

**Rule:** When dossier evidence is thin but not absent, uncertainty LOWERS the score on the affected criterion rather than triggering abstention or holding at a floor. Specifically: if Criterion 1 (AI safety/alignment) cannot be assessed because the dossier does not describe AI involvement or safety methodology, that criterion scores near-zero — not mid-range. This reflects the principle that "absence of evidence of safety measures" in a consequential AI application IS a negative signal, not a neutral one.

**Exception — see Underdog Protection Decision below:** For non-AI projects (where Criterion 1 is not applicable), and for projects with low dossier completeness but clear public-interest mission, an uncertainty floor applies: see Part D.

**Rationale:** Nicholas Botti's Federal Reserve background involves regulatory supervision, where "we don't know if this bank is safe" is NOT a neutral finding — it is a finding that something may be wrong. The default stance is: if you can't see evidence of safety practice, assume it's absent. This is more conservative than the "benefit of the doubt" approach, consistent with a systemic risk framing. [bio, arXiv — CONFIRMED]

---

#### Novelty vs implementation

**Rule:** Genuine conceptual novelty — specifically in AI safety/alignment approaches, in complexity-aware methodology, or in cooperation-design architecture — can compensate for weak implementation evidence, but at a capped rate. A project with genuinely novel methodological contribution to one of the high-weight criteria areas (C1, C2, C3) can score up to full marks on that criterion even with limited deployment, with the understanding that the implementation maturity criterion (C6) will score low. The net effect: strong novelty in core criteria + weak C6 = above-average but not top-ranked score.

**Rationale:** Nicholas Botti is a researcher who publishes empirical work — he understands that new ideas need space to develop before full deployment. But his policymaker advisory role requires demonstrating results, not just publishing papers. Novel theory alone doesn't get to the top. [bio, arXiv — CONFIRMED; constitution internal logic]

---

#### Movement infrastructure vs direct service

**Rule:** Movement infrastructure is scored primarily through Criterion 2 (institutional infrastructure quality) and Criterion 4 (cooperation-building). Direct-service tools are scored primarily through Criterion 5 (attention/autonomy/community protection). Neither is structurally advantaged over the other. The distinction matters for criterion application, not for applying any flat boost or penalty. A well-designed direct-service tool that protects attention and autonomy can score as highly as a well-designed movement infrastructure tool that builds institutional cooperation.

**Rationale:** Nicholas Botti's bio mentions both systemic concerns (financial stability, institutional response) and individual stakes (attention, autonomy, community). There is no evidence that he privileges structural change over individual benefit. The bio explicitly names attention and autonomy as stakes — these are not footnotes. The arXiv paper is both a direct-service tool (helps Fed analysts) and institutional infrastructure (contributes to Fed supervisory capability). [bio — CONFIRMED]

---

#### Scope of concern

**Rule:** Geographic scope affects scoring primarily through Criterion 7 (cross-jurisdictional applicability), which is LOW weight (6 pts max). Within the high-weight criteria, geographic scope does not directly affect scoring. However: projects explicitly designed for or adopted in non-OECD contexts receive a POSITIVE signal in Criterion 7 and are not penalised in any other criterion for operating outside familiar Western regulatory contexts. OECD-centric assumption is a dossier coverage problem, not a constitutional preference.

**Note:** Nicholas Botti's Federal Reserve context is US-specific in many ways, but the institution operates in a global financial stability context (G20, FSB, BIS). The arXiv paper studies global systemically important banks — inherently cross-border. Projects that operate across regulatory jurisdictions receive full Criterion 7 credit, but this is capped at 6 points and does not override the higher-weight criteria. [bio — CONFIRMED; arXiv — CONFIRMED]

---

### Part D: Underdog Protection Decision

**Decision: NO**

**Rationale:** Nicholas Botti's professional background is the Federal Reserve — an institution where thin evidence IS a negative signal, not a neutral one. Regulatory supervision requires demonstrated safety, not theoretical promise. The arXiv paper's methodology is explicitly empirical: real tools, real tasks, real measurements. His stated interest in "blind spots of data-driven decision-making" cuts both ways — it means he is alert to when thin evidence leads evaluators to assume the best. Applying underdog protection would impose a political choice (protect under-resourced projects) that is not clearly evidenced in his record. His training is in mathematics and economics: economic theory treats thin evidence as information (specifically, as weak prior evidence), not as a call for suspension of judgment.

The constitution does not apply underdog protection. Projects with thin dossiers score low on Criterion 6 (implementation maturity) and on any criterion where dossier evidence is insufficient to apply the scoring rubric. This reflects the evaluator's evidenced disposition toward demonstrated performance over potential.

**Consequence:** Under-resourced or less-documented projects are likely disadvantaged. This is acknowledged as a constitutional property, not a flaw. The notetaker should flag it in agent-notes.md.

---

### Part E: Dossier Field Proposals

| Field name | What it captures | Criterion/modifier supported | Priority |
|---|---|---|---|
| ai_safety_methodology | Whether the project documents its AI safety or alignment approach — not just that AI is used, but what safeguards, testing, or oversight are in place | Criterion 1 (AI safety/alignment) | CRITICAL |
| human_oversight_design | Whether the project structurally preserves human judgment — human-in-the-loop mechanisms, appeal processes, review workflows | Criterion 1, Modifier 1 | CRITICAL |
| failure_mode_documentation | Whether the project explicitly names conditions under which it fails, populations it doesn't serve, or unintended consequences it has observed | Criterion 3, Modifier 3 | CRITICAL |
| incentive_architecture_description | Whether the project describes its incentive structure — who benefits, who bears costs, what behaviours the system rewards | Criterion 4, Modifier 4 | USEFUL |
| policymaker_adoption_evidence | Whether the project has been adopted by policymakers or used in policy processes — distinct from government_partnerships (which may be funding only) | Criterion 2, Modifier 5 | USEFUL |
| attention_economy_design | Whether the project is designed to protect user attention — minimises dark patterns, avoids addictive design, provides user control | Criterion 5 | USEFUL |
| regulatory_engagement_record | Whether the project has engaged with regulatory bodies — submitted evidence, received regulatory approval, informed regulatory guidance | Criterion 2 | USEFUL |
| complexity_model_used | Whether the project uses simulation, agent-based modelling, or non-linear system analysis in its methodology | Criterion 3, Modifier 5 | NICE-TO-HAVE |
