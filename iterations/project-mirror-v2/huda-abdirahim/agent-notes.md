# Agent Notes — Huda Abdirahim
Agent: mirror-notetaker | Date: 2026-03-28
Run: Project Mirror v2 | Branch: project-mirror-v2/huda-abdirahim

---

## Evidence gaps

**Gap 1: No public writing attributed to Huda Abdirahim (CRITICAL)**
No blog posts, essays, talks, or interviews found. The entire constitution rests on the bio (self-authored, ~50 words) and TreasureCorp's product architecture. This is a thin base for a 321-project ranking. The bio's three explicit value claims ("budget transparency is a precondition for legitimate decision-making," "code shapes power and that relationship needs to be made visible and accountable," "collective ownership of resources should be technically legible and democratically governed") are treated as authoritative — but without writing to flesh them out, we cannot know how she applies them, what she considers sufficient evidence, or how she resolves trade-offs.

**Gap 2: TreasureCorp co-founder attribution unverified (HIGH)**
The bio asserts co-founder status; no independent corroboration found. If she is a contributor rather than co-founder, the evidential weight placed on TreasureCorp's design choices (programmable governance modifier, underdog protection decision, interoperability criterion) is overstated. Held at PROBABLE throughout. Impact: medium-high — the three programmable governance modifiers and the underdog protection YES decision all partly derive from the co-founder inference.

**Gap 3: LinkedIn inaccessible (MEDIUM)**
Both LinkedIn profiles found were auth-walled. Kenya location and University of Mount Kenya education remain unverified (listed as WEAK). If verified, the Kenya location might have supported a Global South lens in the constitution. The decision to not build a geographic equity criterion on this was correct given the evidence quality.

**Gap 4: Digital asset custody background unexplored (MEDIUM)**
"Digital asset custody" suggests professional work in institutional finance (multi-sig custody, regulatory compliance, secure key management). This thread is completely undocumented publicly. If this background is significant, it might ground criteria around security architecture, regulatory compliance, or institutional legitimacy — none of which appear prominently in the constitution.

**Gap 5: Intellectual network unknown (LOW-MEDIUM)**
No conference appearances, co-authorships, or public collaborations found. TreasureCorp Twitter/X exists but content was not fully accessible.

**Inaccessible sources:**
- LinkedIn (both profiles found) — auth-walled; excluded
- Foundance profile — auth-walled; content inaccessible
- TreasureCorp Twitter/X — account exists but content not fully accessible at research time

---

## Dossier quality issues

**Completeness distribution:**
- Mean dossier completeness: 0.85 (high — most projects are well-documented)
- Projects with completeness < 0.4: 3 projects
- Projects with completeness >= 0.6: 318 of 321 projects

**Low-completeness projects (< 0.4):**
The three projects with very thin dossiers all triggered underdog protection consideration. Only one was scored below the underdog floor of 28 points in practice (the abstained project — SSRN paper with no homepage).

**Patterns in thin dossiers:**
Very few thin dossiers in this dataset overall — the enrichment pass was thorough. The main evidence gaps were not in dossier completeness but in constitutional criterion fit: many well-documented projects had no evidence relevant to C1 (treasury transparency), C3 (collective ownership), or M1 (on-chain governance) — the criteria that most define this constitution.

**Fields used by constitution not in dossier schema:**
- `governance_model` IS in schema — used successfully for C3 and C7
- `community_ownership` IS in schema — used for C3
- `on_chain_verification` NOT in schema — M1 scored from text inference in scraped_description
- `treasury_transparency` NOT in schema — C1 scored from keyword matching
- `collective_ownership_mechanism` NOT in schema — C3 inferred from governance_model + description text

---

## Popularity risk flags — top 10

| Project | Popularity risk drivers | Score | Completeness | Note |
|---|---|---|---|---|
| Decidim | Well-known cooperative governance platform, likely in training data, completeness 0.93 | 64.7 | 0.93 | Constitutional winner; but jury also ranked it #2 (score 92), suggesting real constitutional fit not just familiarity |
| Alaveteli | mySociety tool, well-documented, decade-plus history | 56.9 | 0.95 | Mid-high constitutional rank; jury ranked it #10 (score 80), close alignment |
| Loomio | Widely known cooperative decision tool, documented cooperative structure | 55.9 | 0.95 | Scores well on C3 (collective ownership) — dossier richness partially inflating confidence |
| Aragon | Well-known DAO governance platform, likely in training data | 53.1 | 0.95 | High completeness + DAO domain = familiarity inflation risk |
| Open Collective | Very well-known, widely documented, decade-plus | 52.9 | 0.95 | Constitution scores C3 (collective ownership) at max; pop risk is genuine |
| Ushahidi | Decade-old platform, widely cited in civic tech literature | 52.0 | 0.95 | Genuine constitutional fit on deployment + excluded communities; familiarity inflates confidence slightly |
| PolicyEngine | Growing visibility, high completeness | 50.0 | 0.93 | Mid-range constitutional score; pop risk medium-low given constitution's domain |
| Open Contracting Partnership | High institutional visibility, well-funded, well-documented | 47.1 | 0.98 | C1 (budget/procurement transparency) scores well — this may genuinely fit more than pop risk suggests |
| HOT (Humanitarian OpenStreetMap) | Very well-known, high humanitarian profile | 47.1 | 0.95 | Moderate constitutional fit; familiarity inflation likely on excluded communities criterion |
| CKAN | Open data infrastructure standard, decade-plus, government adoption | 47.1 | 0.95 | C5 (interoperability) and C6 (political infrastructure) genuine fit; pop risk real but score probably deserved |

---

## Jury divergence

**Overall abstention rate: 86.7% across 25 runs**
This is the most striking feature of the run. The jury models collectively abstained on 86.7% of all project-run combinations. This reflects the constitution's narrow domain: treasury transparency, collective ownership, and programmable governance criteria do not match the evidence in most civic tech dossiers. The familiarity abstention instruction did its job.

**Per-model abstention rates:**
- GPT-4.1: 38% scored (highest — progressive anchor applies civic framing broadly)
- Claude: 12% scored (conservative; requires explicit dossier evidence per criterion)
- Gemini: 0% scored (institutionalist framing entirely misaligned with DAO/collective ownership)
- Mistral: 17% scored (European civic-rights framing partially aligned)
- Grok4: 0.6% scored (near-zero despite disruption-sceptic framing; likely behavioural conservatism on niche constitution)

**Gemini near-total abstention (notable):**
Gemini abstained on all 321 projects across all 5 runs. This is interpretable as Gemini's institutionalist framing being structurally incompatible with a constitution centred on collective ownership and DAO governance. Gemini rewards established democratic institutions; the constitution challenges those institutions as legitimate reference points for governance. This is a genuine model-constitution values clash, not a technical failure.

**Largest positive gaps (jury > constitution): familiarity inflation candidates**
- The DAO (Standard DAO Framework): gap +109 — jury recognises the DAO concept broadly; constitution scores the specific dossier evidence
- CharmVerse: gap +83 — web3/DAO tooling is recognisable to jury models; dossier thin on governance legibility details
- vTaiwan: gap +79 (negative from constitution perspective) — jury rewards deliberative democracy scale; constitution scores ownership

**Largest negative gaps (constitution > jury): constitution over-valuing relative to jury**
- In the news, Landlord Tech Watch, Gender Pay Gap Service, Missing Numbers, Conservative Party Funding — all in the constitutional bottom 50 but unscored by jury (all abstained). The "negative gaps" here are an artefact: the jury assigned these projects the lowest possible position (unranked due to abstention) while the constitution scored them in the 20–35 range. The apparent gap reflects the jury's inability to assess these projects against the specific criteria rather than genuine disagreement.

**Grok4 divergence:** Only 2 projects scored across 5 runs, making statistical outlier detection unreliable. No valid Grok4 deviation flags.

---

## Constitution weaknesses

**Weakness 1: M1 (on-chain governance) trigger too narrow**
The modifier fires only for cryptographic/on-chain mechanisms. This means Decidim — which has sophisticated governance architecture — gets no M1 benefit, while projects with aspirational DAO framing and thin dossiers get +8. The constitution intended to reward functional on-chain transparency, but in practice the keyword trigger cannot distinguish functional from aspirational. The `on_chain_verification` field proposed in Part E would fix this.

**Weakness 2: C3 (collective ownership) over-fires on cooperative membership models**
The collective ownership criterion scores cooperatives and DAOs at maximum (19–20 points) regardless of whether they give governance rights to their communities or just to paying members. Loomio is a workers' cooperative — the collective ownership is for the workers, not the users. This is genuinely different from community ownership, but the criterion cannot distinguish it from keyword matching alone.

**Weakness 3: M3 (code-power relationship explicit) is hard to apply consistently**
The modifier requires "explicit design attention to how architecture distributes or concentrates power." In practice, "reflexive transparency about own governance" (a secondary trigger) fires on many projects that are simply well-documented and open-source. The modifier tends to double-count with C3 (collective ownership) and C7 (legitimacy). It was applied conservatively to avoid this, but the boundary is fuzzy.

**Weakness 4: The 70-point cap for moderate completeness (0.35–0.6) rarely binds**
Only 3 projects had completeness below 0.4, and the moderate completeness band (0.35–0.6) captured very few projects. The cap was designed to prevent over-confident scoring of thin dossiers, but the dataset has very few thin dossiers. The procedural rule is sound in principle but rarely activates in practice for this longlist.

**Weakness 5: No criterion for "making existing power accountable without replacing it"**
See constitutional failure mode in reflection.md. Landlord Tech Watch, Missing Numbers, OpenSanctions, and similar projects expose or track power without building alternative governance structures. The constitution has no home for this class of political technology.

---

## Underdog protection audit

**Decision: YES**
**Floor: 28 points at dossier_completeness < 0.35**
**Suspended criteria when floor applies: C4 (deployment, binary only), C7 (max 3 points)**

**Projects where underdog protection applied:** 1 project (Unknown Academic Paper — SSRN 5351275 — which ultimately abstained due to completeness ≤ 0.1 AND dead link)

**Material impact:** Near-zero. The dataset has very few thin dossiers, so the underdog floor almost never activated. The 1 project that triggered the floor also met the abstention condition. The decision to apply underdog protection was the right call in principle — it reflects the evaluator's values and the domain's under-documentation problem in general — but it had minimal practical effect on this specific longlist.

**What would have changed with underdog protection OFF:** No ranking changes. The three lowest-completeness projects would have been scored lower, but they were already near the bottom.

---

## Rerun triggers

1. **If Huda Abdirahim writes anything publicly** — even a single blog post or Twitter thread on DAO governance, budget transparency, or political infrastructure — the constitution should be rebuilt from scratch. The current version is constructed almost entirely from a 50-word bio and a product website. Any direct voice would materially improve inference quality.

2. **If TreasureCorp co-founder status is confirmed** — raises confidence on all TreasureCorp-derived inferences (M1, underdog protection, interoperability criterion).

3. **If the dossier schema adds `on_chain_verification` and `governance_model` detail fields** — M1 and C3 would be significantly more precise. Current keyword-matching over scraped_description produces false positives for aspirational DAO framing.

4. **If Gemini behaviour is investigated** — Gemini's near-total abstention warrants investigation: is this a genuine model-constitution values clash, or a scoring behaviour artifact? If it's the latter, a prompt adjustment might restore Gemini's contribution to the panel.

5. **If the reaction questions are answered by Huda** — particularly Q1 (does the ordering reflect her priorities?), Q2 (is on-chain the right trigger for M1?), and Q3 (does vTaiwan deserve better?). These answers would directly indicate which constitutional weights and triggers need adjustment.
