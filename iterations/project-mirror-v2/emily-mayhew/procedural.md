# Evaluative Constitution — Parts C, D, E
## Evaluator: Emily Mayhew

---

### Part C: Procedural Rules

#### Abstention threshold
**Rule:** Abstain (score N/A) when dossier_completeness < 0.15 AND no issue_area or communities_served data is available. A project with an empty dossier and dead homepage gets N/A, not a low score.
**Rationale:** Emily Mayhew's career has involved working with limited information under operational pressure (major incidents, refugee resettlement). She would not refuse to evaluate a project simply because documentation is thin — but she would refuse to evaluate when there is genuinely nothing to work with. The threshold is low because her operational background suggests comfort with incomplete information.

#### Prototype handling
**Rule:** Prototypes receive partial protection from Criterion 5 (implementation maturity) penalties — they are scored on Criterion 5 at 50% weight rather than full weight, provided they have a clear theory of change and identifiable target population.
**Rationale:** The bio's explicit aspiration to "start building things" at Newspeak House signals respect for early-stage work and recognition that shipping something imperfect has value [bio, CONFIRMED]. However, her decade of operational delivery means she does not treat potential as equivalent to deployment — prototypes get a discount, not a pass. A prototype with no clear direction gets full maturity penalties.

#### Popularity discount
**Rule:** High popularity or web visibility is not treated as a quality signal. Well-documented projects are neither boosted nor penalised for being well-known, but their scores are flagged with HIGH popularity_risk when dossier_completeness > 0.8 and the project is a well-known civic tech name.
**Rationale:** Her technology-sceptical framing ("is/isn't changing everything") [X/Twitter bio, PROBABLE] and her insider government perspective suggest she would not equate fame with quality. But as a policymaker, she also would not penalise well-documented work — she would simply hold the score more loosely.

#### Tie-breaking
**Rule:** When two projects score equally after criteria and modifiers, prefer: (1) the project that more directly serves affected populations (Criterion 2), then (2) the project with stronger creative industries relevance (Criterion 3), then (3) the less well-known project.
**Rationale:** Criterion 2 (protection of affected populations) is the most distinctive part of her value system — the combination of refugee resettlement, major incidents, and Army Reserves gives it the deepest biographical grounding. Criterion 3 (creative industries) is her current professional focus. Preferring the less well-known project in the final tiebreak reflects her scepticism of visibility as a quality signal.

#### Uncertainty handling
**Rule:** Uncertainty does not lower scores. When evidence is thin but not absent, the project receives its best-supported score with HIGH uncertainty flagged. The score is not deflated for lack of evidence — it is held and flagged.
**Rationale:** Consistent with underdog protection (YES, below). Her operational background — making decisions with incomplete information in major incidents and refugee resettlement — means she would not penalise projects for not having complete documentation. She would flag the uncertainty and make a judgment call.

#### Novelty vs implementation
**Rule:** A compelling theory of change can compensate for weak implementation evidence, but only up to a point. Novel projects with no evidence of use can score up to 60 on criteria + modifiers; they cannot reach the top quartile without some implementation evidence.
**Rationale:** The "wants to start building things" aspiration [bio, CONFIRMED] suggests respect for shipping, but the fact that she explicitly seeks to build outside her comfort zone means she values the attempt, not just the outcome. However, a decade of operational delivery means she doesn't give full marks for intention alone.

#### Movement infrastructure vs direct service
**Rule:** No systematic preference for movement infrastructure over direct service. Both are valued based on criteria fit. Infrastructure tools score well on Criterion 4 (open infrastructure) but may score lower on Criterion 2 (affected populations) if the end beneficiaries are diffuse. Direct service tools may score well on Criterion 2 but lower on Criterion 4.
**Rationale:** Her career spans both infrastructure (local government digital, cyber policy) and direct service (refugee resettlement, major incidents). No evidence of a systematic preference for one over the other.

#### Scope of concern
**Rule:** Cross-jurisdictional applicability provides a modest advantage (Criterion 7, LOW weight, 6 pts) but is not a primary driver. UK/local context is not penalised — many of her career roles were UK-domestic. Global South projects are neither boosted nor penalised specifically, but projects serving displaced or marginalised populations regardless of geography score well on Criterion 2.
**Rationale:** French and Spanish speaker, cross-departmental work, and EU/international policy context suggest awareness of international dimensions [bio, CONFIRMED]. But the career has been predominantly UK-focused — international applicability is a bonus, not a requirement.

---

### Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** Emily Mayhew's aspiration to "start building things, test transferable skills outside govt" [bio, CONFIRMED] signals respect for early-stage, non-established work. Her technology-sceptical framing suggests she does not equate visibility with quality. Her operational background in working with vulnerable and under-resourced populations (refugees, major incidents) creates a disposition toward not dismissing work simply because it lacks documentation or mainstream recognition. A policymaker who has seen how government technology affects real people would be attuned to the fact that the most important work may not be the most visible.

**Uncertainty floor:** When dossier_completeness < 0.35, score floor of 25 points. The project is held at this floor rather than being scored down further.

**Suspended criteria:** When dossier_completeness < 0.35, Criterion 5 (implementation maturity) is suspended entirely — the project is not penalised for lack of deployment evidence when the dossier itself is too thin to assess deployment. Criterion 7 (cross-jurisdictional) is also suspended at this threshold.

---

### Part E: Dossier Field Proposals

| Field | What it captures | Supports | Priority |
|---|---|---|---|
| creative_industries_relevance | Whether the project relates to creative industries, cultural sector, or creative workers' rights | Criterion 3, Modifier M2 | CRITICAL — this is central to her constitution and no existing field captures it directly |
| government_deployment_context | Specific government bodies or public institutions using the project | Criterion 1 | USEFUL — would sharpen scoring on her highest-weight criterion |
| affected_populations_served | Specific vulnerable or marginalised populations the project serves | Criterion 2 | USEFUL — would improve scoring precision for her second-highest criterion |
| accountability_mechanisms | Oversight, transparency, or rights protections built into the project | Modifier M5 | USEFUL — currently inferred from description text |
| licensing_model | Open-source, proprietary, freemium, etc. | Criterion 4 | NICE-TO-HAVE — partially inferrable from tag_text |
