# Evaluative Constitution
## Evaluator: Davit Jintcharadze
## Version: v2 / 2026-03-28

> ⚠️ Synthetic estimate. This constitution was inferred from public evidence by
> an AI agent. It does not claim to reconstruct Davit Jintcharadze's true beliefs.
> See evidence-assessed.md for sources and confidence levels.

---

## Part A: Project Criteria

**Criteria weight scheme:** 2 high (20 pts each), 3 medium (12 pts each), 2 low (6 pts each)
**Total max raw score:** 20+20+12+12+12+6+6 = 88 points
**Normalisation factor:** /0.88 (produces criteria score out of 100)

---

### C1: Democratic resilience utility
- **Weight:** 20 pts (high)
- **Why Davit:** His entire post-university arc is organised around resisting authoritarian backsliding — CEPA article on judicial sanctions, Freedom Fund (GBP 42k raised), OCCRP-covered petition campaign. Direct quote: "Regimes fall when the cost of supporting the authorities exceeds the costs of defecting." Projects that strategically shift power toward democratic actors are his highest priority.
- **High score (80–100):** Projects that directly strengthen democratic institutions, protect civic space, or create tools helping citizens/civil society/journalists resist authoritarian capture. Election monitoring, judicial accountability, secure activist communications, protest coordination tools in backsliding contexts.
- **Low score (0–30):** No connection to democratic governance or civic rights; administrative efficiency in stable democracies without addressing power dynamics.
- **Dossier fields:** political_relevance_summary, issue_area, communities_served, geography

---

### C2: Inclusivity of non-Western and crisis contexts
- **Weight:** 20 pts (high)
- **Why Davit:** EA Forum post explicitly critiques Western-centric global priorities: "still centered on a Western, straight narrative." Founded EA Georgia — first EA group in a backsliding country. Biographical arc (Georgia → NYU Abu Dhabi → refugee storybook in Jordan → FLEX exchange) consistently centres non-Western geographies.
- **High score (80–100):** Designed for/deployed in non-Western, fragile, or authoritarian-adjacent contexts. Built with local communities, not exported from Western institutions. Addresses problems specific to these contexts.
- **Low score (0–30):** Designed exclusively for stable Western democracies. Assumes high-bandwidth internet, strong rule of law, functioning independent judiciary as baseline.
- **Dossier fields:** geography, jurisdictional_scope, communities_served, primary_users_or_beneficiaries

---

### C3: Psychological/behavioural depth of intervention
- **Weight:** 12 pts (medium)
- **Why Davit:** Peer-reviewed publication in Scientific Reports (2023) on political face perception and election outcome prediction. Cambridge psychotherapy training. Substack applies psychoanalytic theory to political action. Bio flags "voter psychology and psychological bias" as the attack surface authoritarians exploit.
- **High score (80–100):** Explicitly models cognitive/psychological dimensions — voter education accounting for bias, tools detecting manipulation tactics, deliberative democracy tools designed around group psychology, disinformation counter-measures grounded in behavioural science.
- **Low score (0–30):** Treats political participation as purely information-driven, ignoring bias, manipulation, emotional and identity-based reasoning.
- **Dossier fields:** scraped_description, political_relevance_summary, tagline

---

### C4: Strategic impact clarity (theory of change)
- **Weight:** 12 pts (medium)
- **Why Davit:** CEPA article models strategic thinking: identifies mechanism (judicial complicity), proposes two specific tools (sanctions + defector incentives), frames in cost-benefit terms. Criticises West for not acting "strategically and quickly."
- **High score (80–100):** Specific, named theory of change. Named target population changing named behaviour in response to named tool with stated downstream effect. Evidence of deployment uptake is a strong signal.
- **Low score (0–30):** Vague impact claims ("raises awareness," "supports democracy"). Multiple inferential steps between tool and political outcome with no empirical grounding.
- **Dossier fields:** political_relevance_summary, scraped_description, primary_users_or_beneficiaries

---

### C5: Implementation maturity and real deployment
- **Weight:** 12 pts (medium)
- **Why Davit:** Operational consistency — GBP 42k raised, petition with 2,453 signatures, CEPA article with specific policy mechanisms. Medium weight (not high) because he values well-grounded theory and would protect genuine prototypes.
- **High score (80–100):** Documented real-world deployment in stated context. Active users, named partners, verifiable outcomes.
- **Low score (0–30):** Exists only as a website, white paper, or concept without any evidence of deployment or use.
- **Dossier fields:** homepage_http_status, scraped_description, dead_link, tagline
- **Note:** Suspended when dossier_completeness < 0.35 (see Part D).

---

### C6: Open access and anti-capture design
- **Weight:** 6 pts (low)
- **Why Davit:** EA Forum post connects AI safety to LGBTQ+ surveillance risk (Wang and Kosinski citation). Freedom Square affiliation reflects anti-oligarchic stance. Inferred preference — not a primary stated priority.
- **High score (80–100):** Open-source, governed against state/corporate capture, data transparency, community oversight.
- **Low score (0–30):** Proprietary, centralises sensitive civic data without accountability.
- **Dossier fields:** scraped_description, political_relevance_summary, tagline

---

### C7: Humanitarian and dignity-centred framing
- **Weight:** 6 pts (low)
- **Why Davit:** Refugee letter-writing project (age 16), refugee storybook (3,000 copies in Jordan), Cambridge psychotherapy training. Consistent orientation toward human dignity and concrete care for people without voice.
- **High score (80–100):** Primary beneficiaries are displaced persons, political prisoners, stateless communities, or people in active humanitarian crisis.
- **Low score (0–30):** No identifiable beneficiaries in vulnerable situations. Serves professional users or stable-democracy citizens only.
- **Dossier fields:** communities_served, primary_users_or_beneficiaries, issue_area

---

## Part B: Value Modifiers

Modifiers applied additively to normalised criteria score. Net modifier adjustment capped at ±20. Final score clamped to [0, 100].

---

### M1: Backsliding/hybrid regime deployment boost
- **Direction:** boost
- **Magnitude:** strong (+10–15 pts)
- **Applies when:** Project actively deployed in or explicitly designed for a country classified as hybrid regime, competitive authoritarian, or experiencing documented democratic backsliding (Freedom House "Partly Free" or "Not Free"). Deployment must be documented, not aspirational.

---

### M2: Western civic tech assumption penalty
- **Direction:** reduce
- **Magnitude:** moderate (−5 to −10 pts)
- **Applies when:** Project's design presupposes institutional conditions typical of consolidated Western democracies without acknowledging contexts where these do not hold. Also applies when a project claims "global" applicability but has only been tested in North America, Western Europe, or Australasia.

---

### M3: Strategic leverage boost
- **Direction:** boost
- **Magnitude:** moderate (+5–10 pts)
- **Applies when:** Project creates actionable pressure mechanisms — sanctions targeting, defector incentive structures, judicial accountability tools, asset-tracing — that impose material costs on authoritarian actors. Must go beyond documentation toward creating material consequences.

---

### M4: No-alternative population boost
- **Direction:** boost
- **Magnitude:** moderate (+5–10 pts)
- **Applies when:** Project serves a population or addresses a civic need where no prior digital tool or service existed. The absence must be structural — population was previously excluded from digital civic ecosystem entirely.

---

### M5: Surveillance/capture penalty
- **Direction:** reduce
- **Magnitude:** strong (−10 to −15 pts)
- **Applies when:** Project collects data about citizens, monitors public behaviour, or enables state/institutional surveillance AND either (a) has no documented community oversight/governance model, OR (b) could be repurposed by an authoritarian government to target dissidents, protesters, or minorities.

---

### M6: Grassroots vs institutional distribution (conditional)
- **Direction:** conditional
- **Magnitude:** weak (+2–5 pts boost / −2–5 pts reduce)
- **Boost applies when:** Project enables direct resource mobilisation by communities/movements without institutional intermediaries.
- **Reduce applies when:** Project's impact depends entirely on adoption by government agencies or large NGOs, with no pathway for grassroots/community-driven deployment.

---

## Part C: Procedural Rules

**Abstention threshold:** Abstain only when ALL of: dossier_completeness < 0.15 AND no verifiable deployment location AND no named beneficiary population AND dead homepage. Apply underdog protection before abstaining.

**Prototype handling:** Prototypes not penalised under C5 if: theoretical grounding is clear and evidence-informed, project addresses a problem with no alternative (Modifier 4 trigger), and project shows signs of active development.

**Popularity discount:** Apply moderate scepticism to dossier_completeness > 0.85 projects likely in jury training data (Decidim, Polis, mySociety tools, Creative Commons, Tor). Score stands but rationale must acknowledge documentation advantage.

**Tie-breaking:** (1) Prefer project serving non-Western/hybrid regime/conflict context; (2) prefer project with more specific named beneficiary populations; (3) prefer project with clearer power-shifting mechanism.

**Uncertainty handling:** Thin dossiers for projects in well-documented domains → score reduction. Thin dossiers for projects serving structurally hard-to-document populations (refugees, dissidents, stateless) → underdog protection floor, not penalty.

**Novelty vs implementation:** Compelling theory of change can compensate for weak implementation up to equivalent of 1 medium criterion (12 points) when: (a) theory connects to a mechanism grounded in his domain, AND (b) project is genuinely first-of-kind.

**Movement infrastructure vs direct service:** Movement infrastructure outranks direct service when serving democratic resistance in non-Western or backsliding contexts. Direct service equals movement infrastructure when Modifier 4 applies.

**Scope of concern:** Prioritise non-Western, hybrid regime, or fragile democracy deployment contexts. Scale does not automatically confer value — strategic leverage in a contested democracy > civic convenience in a stable one.

---

## Part D: Underdog Protection

**Decision: YES**

Davit's humanitarian and activist arc is built around operating where documentation and visibility are structurally suppressed. EA Georgia in a backsliding country. Refugee children with no voice in civic tech. CEPA advocacy for protection of people who face persecution because they are visible.

- **Uncertainty floor:** dossier_completeness < 0.35 → score floor of 28 points
- **Suspended when completeness < 0.35:** C5 (Implementation maturity); C7 given floor score of 4/6 when project clearly serves crisis population
- **Not suspended:** C1, C2, and Modifier 5 apply regardless of completeness

---

## Part E: Dossier Field Proposals

| Field | What it captures | Which criterion/modifier | Priority |
|---|---|---|---|
| democracy_context | Deployment in hybrid regime, backsliding democracy, or conflict context vs stable democracy | C1 (primary), M1 (primary), C2 (secondary) | Critical |
| surveillance_risk | Whether data collected could be repurposed for authoritarian surveillance | M5 (primary) | Critical |
| beneficiary_vulnerability_level | Whether primary beneficiaries are in structurally vulnerable situations | C3 (primary), M4 (secondary) | Critical |
| grassroots_deployment_model | Whether deployable by communities without institutional intermediaries | M6 (primary) | Useful |
| strategic_leverage_type | Whether project creates material consequences for authoritarian actors vs documentation only | M3 (primary), C4 (secondary) | Useful |
| lmic_design_intent | Whether LMIC design was primary intent vs aspiration vs not considered | C2 (primary) | Useful |

---

## Synthesis Notes

### Contradictions resolved

**C5 vs prototype handling vs underdog protection:** Sequential gates. Check: (1) completeness < 0.35 → apply underdog floor, suspend C5; (2) strong theoretical grounding + no alternative → apply prototype protection to C5; (3) otherwise apply C5 normally.

**M3 (strategic leverage) vs C4 (theory of change):** Not double-counting. C4 scores quality of theory of change (mechanism clarity). M3 scores type of mechanism (does it impose material costs on authoritarian actors?). A project can score well on C4 without triggering M3.

**M1 (backsliding context boost) vs C2 (non-Western context):** Not double-counting. C2 = design intent and applicability. M1 = documented active deployment in backsliding country. A project designed for but not yet deployed in a backsliding country scores on C2 but not M1.

### Gaps
The constitution has no criterion directly addressing disinformation detection because the evidence does not support this as a demonstrated preference — the bio claims this as a focus area, but it is speculative. C3 (psychological depth) will be difficult to score from dossier text alone; ranking agent should look for explicit signals (e.g., "deliberative," "cognitive bias," "behavioural," "manipulation").
