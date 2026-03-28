# Evaluative Constitution — Parts C, D, E
## Evaluator: Frederick O'Brien

---

### Part C: Procedural Rules

| Rule | Statement | Trigger |
|---|---|---|
| Abstention threshold | A project receives N/A (abstention) only if: (a) the project URL returns a dead link AND there is no useful dossier text (less than 2 substantive fields populated beyond name/URL), OR (b) the project is so ambiguous from the dossier that none of the six criteria can be assessed even tentatively. A thin dossier alone is insufficient for abstention — underdog protection applies first. | dead_link=True AND completeness < 0.15; OR criteria completely inapplicable AND completeness < 0.2 |
| Prototype handling | Prototypes are protected from implementation maturity penalties. Criterion 5 (technology in service of human skill) and Criterion 2 (direct benefit to practitioners) are assessed on design intent when deployment is absent, not on deployment evidence. Modifier M6 (epistemic humility / prototype transparency) may additionally boost genuinely exploratory projects. A prototype that is clearly designed in service of practitioners but not yet deployed is not penalised for immaturity — this would contradict the Gonzo Engineering pattern of building exploratory tools (Soli as "thought experiment"). | dossier shows early-stage / prototype status; github_url or project notes indicate pre-deployment or experimental framing |
| Popularity discount | High dossier completeness is not treated as a positive quality signal. Projects with very rich dossiers and high web presence are flagged at HIGH popularity risk. Frederick has a demonstrated scepticism of mainstream tech culture ("The Web Is Decadent and Depraved") and builds deliberately outside the corporate mainstream — he would not defer to popularity or institutional visibility as evidence of merit. Scores for HIGH popularity risk projects should be accompanied by an estimate of what they would score with a median-quality dossier. | dossier_completeness > 0.8 AND project is well-known in civic tech / media circles |
| Tie-breaking | When two projects score equally after criteria and modifiers: prefer the project that serves more excluded or less-resourced users. If still tied: prefer the project with greater transparency (open source, documented governance, accessible code). If still tied: prefer the project with a more explicit theory of change for how it benefits practitioners. | Two projects have equal final scores |
| Uncertainty handling | Uncertainty triggers the uncertainty floor (hold at a minimum, do not score further down) rather than abstention or a direct penalty. Thin evidence is NOT treated as a negative signal — Frederick's work is full of projects that started with minimal documentation and grew into something durable. Under-documented projects may be serving obscure communities well; obscurity is not a quality signal in either direction. Uncertainty floor applies when completeness < 0.35. | completeness < 0.35; no abstention triggered |
| Novelty vs implementation | A compelling theory of change or genuine originality can partially compensate for weak implementation evidence — but only for criteria where design intent is assessable from the dossier. Criteria 1 (open access) and 3 (anti-extraction) require evidence, not just claims; these cannot be scored on intent alone. Criteria 2 (direct benefit to practitioners), 4 (community journalism), and 5 (human skill augmentation) can be assessed partly on design when deployment evidence is absent. Ratio: originality can substitute for at most 30% of the criteria score for the assessable criteria. | dossier shows clear design intent but no deployment evidence |
| Movement infrastructure vs direct service | No strong hierarchy. Frederick builds both infrastructure (Dummy as publishing platform, teeline.online as skill-building resource) and direct-service tools (Audioxide as direct cultural resource, Soli as direct artist payment mechanism). The criterion is not what type of tool it is but whether it genuinely routes value to practitioners and communities. Movement infrastructure that serves well-resourced organisers is not preferred over direct-service tools that serve excluded communities. | applies across all projects |
| Scope of concern | UK/local/community scope is not penalised relative to national or global scope. Frederick's most meaningful work (Social Streets, Roman Road LDN, teeline.online for NCTJ trainees) is explicitly local and practitioner-specific. Projects serving specific marginalised communities in a single city are not inferior to projects aiming for global adoption. Global scope may reduce a score if it comes at the expense of specificity or depth of service to a particular community. | geographic scope information in dossier |

---

### Part D: Underdog Protection Decision

**Decision: YES**

**Rationale:** Frederick builds projects that start without institutional backing, for communities without existing alternatives, in spaces that are under-documented and under-resourced. teeline.online, Soli, and Dummy all fit this profile at inception. His explicit preference for free, open, practitioner-serving tools means he would recognise that projects doing genuinely valuable work for marginalised communities may simply not have the website, GitHub stars, or press coverage of better-funded projects. The "freak kingdom" framing and the bias toward lesser-known free/open tools in the Gonzo Engineering resources repository both signal an active preference for the less-visible. Scoring under-documented projects down for their lack of documentation would contradict the core values evidenced in his public record.

**Uncertainty floor:** dossier_completeness < 0.35 → score floor of 28 points
**Suspended criteria when completeness < 0.35:** Criterion 6 (design ethics — requires design evidence to assess meaningfully). All other criteria can be assessed at reduced weight from dossier intent signals alone.

---

### Part E: Dossier Field Proposals

| Field name | What it captures | Criterion/modifier supported | Priority |
|---|---|---|---|
| access_model | Whether the tool is free, freemium, subscription, or institutionally licensed; whether open-source code is available | C1 (free and open access) | critical |
| platform_dependencies | Which external platforms/APIs the project depends on for core function (e.g., Twitter API, Google Maps, Stripe, AWS) | C3 (anti-extraction), M2 (reduce: extractive platform capture) | critical |
| economic_model | How the project is financially sustained and who benefits economically (creator, operator, community, platform) | C2 (direct benefit to practitioners), M5 (equitable economics) | critical |
| automation_stance | Whether the project automates human judgment in civic/editorial/political processes vs. augmenting human decision-making | C5 (human skill augmentation), M4 (reduce: replaces human judgment) | useful |
| community_governance | Whether the project has community ownership, cooperative governance, or multi-stakeholder accountability beyond a single operator | M3 (community ownership boost) | useful |
| prototype_framing | Whether the project is explicitly framed as experimental/prototype vs. production-ready; whether epistemic humility about limits is documented | M6 (prototype transparency boost) | nice-to-have |
