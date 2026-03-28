# Evaluative Constitution
## Evaluator: Emily Mayhew
## Version: v2 / 2026-03-28

> ⚠️ Synthetic estimate. This constitution was inferred from public evidence by
> an AI agent. It does not claim to reconstruct Emily Mayhew's true beliefs.
> See evidence-assessed.md for sources and confidence levels.

---

## Part A: Project Criteria

### Criterion 1: Practical deployment in government or public services
- **Weight:** HIGH (20 pts)
- **Why Emily Mayhew:** Ten-year career spanning DLUHC, DCMS, local government digital transformation, major incidents, and refugee resettlement — all operational government delivery contexts [bio, CONFIRMED]. Co-authored cross-institutional cyber resilience guidance [Government Business article, CONFIRMED].
- **High score (80–100):** Project is in active use by government bodies or public institutions, with documented deployment in real operational contexts.
- **Low score (0–30):** Project is a prototype, concept paper, or tool with no documented government or public sector uptake.
- **Dossier fields:** communities_served, primary_users_or_beneficiaries, scraped_description, political_relevance_summary

### Criterion 2: Protection and empowerment of affected populations
- **Weight:** HIGH (20 pts)
- **Why Emily Mayhew:** Past roles in refugee resettlement and major incidents — both contexts involving vulnerable populations under state decision-making [bio, CONFIRMED]. Army Reserves background [bio, CONFIRMED]. X/Twitter bio frames technology through the lens of what it does to people [PROBABLE].
- **High score (80–100):** Project explicitly serves populations affected by government decisions, displacement, emergencies, or structural exclusion. Designed with the affected population's needs.
- **Low score (0–30):** Project serves institutional efficiency without visible consideration of affected populations.
- **Dossier fields:** communities_served, primary_users_or_beneficiaries, issue_area, political_relevance_summary

### Criterion 3: Creative industries and cultural value lens
- **Weight:** HIGH (20 pts)
- **Why Emily Mayhew:** Currently at AI/creative industries intersection at DCMS [CREATe listing, CONFIRMED]. Bio frames interest around "culture and creativity in society" [PROBABLE]. Content marketplace work positions creative workers' rights as live policy frontier [bio, CONFIRMED].
- **High score (80–100):** Project directly addresses technology–creative industries relationship, protects creative workers, supports cultural institutions, or addresses AI/copyright/licensing.
- **Low score (0–30):** No connection to creative industries, culture, or the relationship between technology and creative expression.
- **Dossier fields:** issue_area, scraped_description, tagline, political_relevance_summary, tag_text

### Criterion 4: Open infrastructure and interoperability
- **Weight:** MEDIUM (12 pts)
- **Why Emily Mayhew:** Aspiration to build things [bio, CONFIRMED] + decade inside government digital infrastructure + cross-departmental work (DLUHC + NCSC) [Government Business article, CONFIRMED].
- **High score (80–100):** Open-source, interoperable, designed to work across institutional boundaries. Open standards, open APIs, community governance.
- **Low score (0–30):** Proprietary, locked to single platform, no interoperability.
- **Dossier fields:** scraped_description, tag_text, political_relevance_summary

### Criterion 5: Implementation maturity and evidence of impact
- **Weight:** MEDIUM (12 pts)
- **Why Emily Mayhew:** Career built on operational delivery [bio, CONFIRMED]. "Wants to start building things" signals valuing shipped work [bio, CONFIRMED].
- **High score (80–100):** Project is live, maintained, with documented users and measurable outcomes.
- **Low score (0–30):** Abandoned, undocumented, or exists only as concept.
- **Dossier fields:** homepage_http_status, scraped_description, communities_served

### Criterion 6: Policy clarity and regulatory engagement
- **Weight:** MEDIUM (12 pts)
- **Why Emily Mayhew:** Works at policy–technology intersection on AI regulation, copyright, Data (Use and Access) Act [CREATe listing, CONFIRMED; GOV.UK, PROBABLE]. Co-authored policy guidance [Government Business article, CONFIRMED].
- **High score (80–100):** Project explicitly addresses a policy domain, engages with regulation, supports compliance, or creates tools for policy implementation.
- **Low score (0–30):** Ignores regulatory landscape, operates in a policy vacuum.
- **Dossier fields:** political_relevance_summary, issue_area, tag_text

### Criterion 7: Cross-jurisdictional or international applicability
- **Weight:** LOW (6 pts)
- **Why Emily Mayhew:** French/Spanish speaker [bio, CONFIRMED]. DCMS copyright/AI work involves EU coordination. Cross-departmental experience.
- **High score (80–100):** Designed for or deployed across multiple jurisdictions with documented international use.
- **Low score (0–30):** Narrowly single-jurisdiction with no cross-border consideration.
- **Dossier fields:** communities_served, scraped_description, political_relevance_summary

**Criteria total: 20+20+20+12+12+12+6 = 102. Normalised to 100 by dividing by 1.02.**

---

## Part B: Value Modifiers

### M1: Boost for projects that bridge government and civil society
- **Direction:** boost
- **Magnitude:** moderate (+6–10 pts)
- **Applies when:** Project creates shared infrastructure, communication, or accountability between government and communities.
- **Evidence:** Career arc from DLUHC/DCMS to Newspeak House fellowship — explicitly bridging the government/civil society boundary [bio, CONFIRMED].

### M2: Boost for projects centring creative workers or cultural practitioners
- **Direction:** boost
- **Magnitude:** moderate (+5–8 pts)
- **Applies when:** Project explicitly serves creative workers, artists, cultural institutions, especially AI/copyright/licensing contexts.
- **Evidence:** Creative Content Exchange work [bio, CONFIRMED]. "Culture and creativity in society" as primary frame [PROBABLE].

### M3: Reduce for technology-first projects without human-centred framing
- **Direction:** reduce
- **Magnitude:** moderate (−5–10 pts)
- **Applies when:** Project leads with technical innovation without articulating human needs served.
- **Evidence:** Technology "is/isn't changing everything" sceptical framing [PROBABLE]. Career applying technology within human-centred government contexts.

### M4: Boost for projects demonstrating operational resilience
- **Direction:** boost
- **Magnitude:** weak (+3–6 pts)
- **Applies when:** Project works in resource-constrained, high-pressure, or crisis contexts.
- **Evidence:** Army Reserves + major incidents + refugee resettlement [bio, CONFIRMED].

### M5: Reduce for surveillance/control without accountability
- **Direction:** reduce
- **Magnitude:** strong (−8–12 pts)
- **Applies when:** Project extends government monitoring or decision-making power without oversight or rights protections.
- **Evidence:** Orientation toward protecting affected populations + insider understanding of government technology [bio, CONFIRMED; inference PROBABLE].

### M6: Boost for clear, accessible communication
- **Direction:** boost
- **Magnitude:** weak (+2–5 pts)
- **Applies when:** Project's public description is jargon-free and legible to non-specialists.
- **Evidence:** Bio's own plain-language style. Cross-departmental policymaker communication requirements [bio, CONFIRMED; inference PROBABLE].

**Modifier range: net adjustment capped at ±20 pts.**

---

## Part C: Procedural Rules

### Abstention threshold
Abstain (N/A) when dossier_completeness < 0.15 AND no issue_area or communities_served data available.

### Prototype handling
Prototypes scored at 50% weight on Criterion 5 (implementation maturity) if they have a clear theory of change and identifiable target population. Otherwise full maturity penalties apply.

### Popularity discount
High visibility neither boosted nor penalised. Projects with dossier_completeness > 0.8 and well-known civic tech name flagged as HIGH popularity_risk. Scores held but flagged.

### Tie-breaking
Equal scores resolved by: (1) stronger Criterion 2 score (affected populations), then (2) stronger Criterion 3 score (creative industries), then (3) less well-known project preferred.

### Uncertainty handling
Uncertainty does not deflate scores. Thin-evidence projects receive best-supported score with HIGH uncertainty flag.

### Novelty vs implementation
Novel projects with no implementation evidence capped at 60. Cannot reach top quartile without some deployment evidence.

### Movement infrastructure vs direct service
No systematic preference. Both valued on criteria fit.

### Scope of concern
UK/local context not penalised. Cross-jurisdictional applicability is a modest bonus (Criterion 7, 6 pts). No specific Global South boost or penalty.

---

## Part D: Underdog Protection

**Decision: YES**

**Rationale:** Emily Mayhew's aspiration to "start building things, test transferable skills outside govt" signals respect for early-stage, non-established work. Her technology-sceptical framing suggests she does not equate visibility with quality. Her operational background with vulnerable populations creates a disposition toward not dismissing work because it lacks mainstream recognition.

**Uncertainty floor:** dossier_completeness < 0.35 → score floor of 25 pts.

**Suspended criteria:** At completeness < 0.35, Criterion 5 (implementation maturity) and Criterion 7 (cross-jurisdictional) suspended.

---

## Part E: Dossier Field Proposals

| Field | Captures | Supports | Priority |
|---|---|---|---|
| creative_industries_relevance | Creative sector/cultural relevance | C3, M2 | CRITICAL |
| government_deployment_context | Specific gov bodies using it | C1 | USEFUL |
| affected_populations_served | Vulnerable/marginalised populations | C2 | USEFUL |
| accountability_mechanisms | Oversight/rights protections | M5 | USEFUL |
| licensing_model | Open-source, proprietary, etc. | C4 | NICE-TO-HAVE |

---

## Synthesis Notes

### Contradictions found and resolved

**1. Criterion 5 (maturity) vs Prototype handling rule**
Criterion 5 rewards implementation maturity. The prototype handling rule protects early-stage projects from full maturity penalties. These are in tension but the procedural rule resolves it: prototypes get 50% weight on C5, not 0%. This is consistent with Emily Mayhew's profile — she values shipping (decade of operational delivery) but also respects the attempt to build (Newspeak House aspiration). The resolution is: prototypes are not penalised as harshly, but they still cannot reach the top without deployment evidence.

**2. Criterion 3 (creative industries) may be narrow for a 321-project longlist**
Most civic tech projects have no creative industries dimension. Criterion 3 at HIGH weight (20 pts) means many projects start with a 20-point ceiling disadvantage. This is intentional — it reflects that creative industries is her current professional focus and a distinctive part of her value system. But it means the top of the ranking will be dominated by projects with creative/cultural dimensions, which may be a small subset. This is flagged as a constitutional feature, not a bug — it is what makes her constitution distinctive rather than generic.

**3. No explicit contradiction between underdog protection (YES) and uncertainty handling**
Both are aligned: thin evidence does not deflate, floor applies, uncertainty flagged. Consistent.

### Gaps identified

**1. AI ethics and AI regulation specifics**
Emily Mayhew works on AI regulation but her specific views on AI governance (e.g. hard regulation vs soft governance, sectoral vs horizontal approaches) are unknown. The constitution treats AI/copyright as part of Criterion 3 and Criterion 6 but cannot distinguish between different AI governance philosophies.

**2. Community governance models**
No criterion specifically rewards community ownership or participatory governance of projects. This could be added but there is no direct evidence that Emily Mayhew prioritises this specifically — it is absorbed into Criterion 4 (open infrastructure) and Modifier M1 (government–civil society bridging).

### Operational readiness

All criteria and modifiers can be applied from dossier fields. The main operational limitation is Criterion 3 (creative industries relevance) — this must be inferred from scraped_description, issue_area, and tag_text since no dedicated field exists. Keyword matching for creative/cultural/copyright/licensing/arts/music/media terms will be used.

**Constitution certified for ranking.**
