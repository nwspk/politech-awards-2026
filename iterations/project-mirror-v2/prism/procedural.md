# Evaluative Constitution — Parts C, D, E
## Evaluator: Prism
## Date: 2026-03-28

> Warning: Synthetic estimate. Inferred from public evidence by an AI agent. Does not claim to reconstruct Prism's true beliefs. See evidence-assessed.md for sources and confidence levels.

---

## Part C: Procedural Rules

### Abstention threshold
A project receives N/A (abstention) only when: (a) the dossier provides insufficient evidence to assess against either of the two HIGH-weight criteria (Criterion 1: evidence legibility, Criterion 2: methodological transparency), AND (b) the project's website or external sources also fail to fill this gap. A completely empty dossier or dead link with no accessible website abstains. A thin dossier with at least one substantive field populated does not abstain — it receives a score with HIGH uncertainty and, if dossier_completeness < 0.4, underdog protection applies (see Part D). Abstention is reserved for projects where scoring would be pure guesswork. In practice, most projects have enough information to make some assessment of their evidence legibility and transparency orientation.

### Prototype handling
Prototypes are given fair treatment but not full marks on implementation maturity (Criterion 6). If a prototype addresses evidence legibility, methodological transparency, or data visualisation — Prism's core concerns — it can score well on those criteria regardless of deployment stage. The implementation maturity criterion ceiling for prototypes is lowered to max 5 points (out of the criterion's potential), reflecting that Criterion 6 is already LOW weight. Prism's orientation is toward the quality of what a project communicates and how, not toward deployment scale. A beautifully designed prototype that makes complex data legible would score higher than a widely deployed tool with opaque methodology. This reflects OWID's own model: its value comes from quality of presentation and data integrity, not from platform scale.

### Popularity discount
Prism does not treat popularity as a quality signal. His professional formation is in data science — he is trained to ask what the evidence supports, not what is widely cited. OWID itself is popular but earns that popularity through quality, not through virality. The popularity discount applies when: a project scores highly but the dossier richness (high completeness, many documented fields) explains the score better than genuine constitutional fit. In such cases, flag popularity_risk as HIGH and note that the score would likely be 5–10 points lower if dossier richness were normalised. Do not automatically reduce the score — make the risk visible. Projects that are popular AND genuinely methodologically transparent and evidence-legible deserve their scores.

### Tie-breaking
When two projects score equally after all criteria and modifiers: first tie-breaker is evidence legibility quality (which project makes its data more genuinely comprehensible to non-specialists?). Second tie-breaker is methodological transparency (which project is more open about its methods and data?). Third tie-breaker is open-source commitment (which project has more genuinely open infrastructure?). If still tied: rank the project with higher data visualisation quality higher, as this is Prism's most distinctive professional signal. If still tied after all four: rank the more recent project higher (active maintenance signals ongoing commitment).

### Uncertainty handling
Uncertainty is handled conservatively but without punitive reduction. When evidence is thin but positive in direction — a project appears to prioritise evidence legibility but the dossier is incomplete — the score is held at the lower end of the range the evidence supports. It is not pushed below the underdog protection floor (if active). Uncertainty is always documented: projects scored with HIGH uncertainty are flagged, and the rationale explains what additional evidence would change the score. This is consistent with Prism's data science background: uncertainty is a measurement property, not a quality judgment. A project with thin evidence is under-measured, not necessarily low-quality.

### Novelty vs implementation
A novel approach to evidence communication, data visualisation, or methodological transparency can substantially compensate for limited deployment. If a project demonstrates genuine originality in how it makes complex data legible — a new visualisation approach, a novel synthesis method, an innovative user interface for exploring civic data — that novelty can substitute for up to 70% of the implementation maturity score. This is a higher substitution ratio than most evaluators because Prism's primary criteria are about quality of communication, not scale of adoption. However, the novelty must be demonstrable, not merely claimed.

### Movement infrastructure vs direct service
Prism does not systematically prefer either. OWID itself is a kind of movement infrastructure — it provides the evidence base that journalists, researchers, and policymakers use — but it also serves individual users directly through its website. The constitution values what a project does for evidence legibility and transparency regardless of whether it operates as infrastructure or direct service. However, infrastructure that enables better data communication across multiple downstream projects (e.g., open data standards, visualisation libraries, methodology frameworks) receives a small additional benefit via Modifier 6 (open-source governance).

### Scope of concern
Geographic scope does not determine base score. A project addressing UK parliamentary transparency can score as highly as a global data platform if it meets the evidence legibility and transparency criteria. However, cross-jurisdictional applicability (Criterion 7) adds LOW-weight bonus points. The global development orientation of Prism's OWID work means projects addressing populations whose data is underrepresented in global datasets receive a boost from Modifier 5 — but this is population-data-need-driven, not geography-coded. A project serving data-rich London neighbourhoods does not get a geographic penalty; a project filling data gaps in Sub-Saharan Africa gets a data-representation boost.

---

## Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** Prism's professional work at OWID engages directly with the problem of data gaps: populations without data are populations without visibility. Projects serving data-poor communities will inherently have thinner dossiers because the communities they serve generate less documentation. Penalising these projects for thin dossiers would reproduce exactly the data invisibility problem that OWID exists to address. His data science background means he would recognise thin dossiers as a measurement limitation, not a quality signal. His bio's "open data as public good" framing implies that information asymmetry — including asymmetry in who gets well-documented — is a structural problem, not an individual project's fault.

**Uncertainty floor:** dossier_completeness < 0.4 --> score floor of 25. Projects at or below this threshold are not scored below 25, even if criteria scoring alone would push them lower. They are marked with uncertainty HIGH and primary_driver "underdog-protection."

**Suspended criteria when completeness < 0.4:** Criterion 6 (implementation maturity) is suspended — do not penalise for lack of deployment evidence when the dossier itself is too thin to assess deployment. Criterion 4 (data visualisation quality) is partially suspended — do not penalise for lack of visual design evidence when the project's interface has not been assessed. Criterion 8 (participatory accountability) is suspended — do not penalise for lack of governance documentation when the dossier lacks this information entirely.

---

## Part E: Dossier Field Proposals

| Field name | What it captures | Criterion/modifier it supports | Priority |
|---|---|---|---|
| data_visualisation_quality | Assessment of the project's data visualisation: interactive vs static, chart type appropriateness, accessibility of visual design, whether visualisation carries the argument or merely decorates | Criterion 4, Modifier 1 | CRITICAL |
| methodology_documentation | Whether the project publishes its methodology: data sources, analytical methods, limitations, reproducibility information | Criterion 2, Modifier 2 | CRITICAL |
| perception_gap_addressed | Whether the project explicitly addresses a documented gap between empirical data and public belief on a specific topic | Criterion 5, Modifier 3 | useful |
| data_licensing | What licence the project's data is released under (CC-BY, CC0, proprietary, restricted, unknown) | Criterion 3, Modifier 6 | useful |
| research_translation | Whether the project translates academic or governmental research findings for public audiences | Modifier 7 | useful |
| data_gap_populations | Whether the project serves or collects data from populations systematically underrepresented in global datasets | Modifier 5 | useful |
| narrative_integrity | Whether the project's claims are proportionate to its evidence — does it overstate impact, cherry-pick data, or present balanced evidence? | Criterion 5, Modifier 2 | nice-to-have |

**CRITICAL fields flagged for orchestrator:** `data_visualisation_quality`, `methodology_documentation`
