# Agent Notes — Aadi Kulkarni
## Project Mirror v2 | Step 8: Mirror-Notetaker
## Date: 2026-03-28

> Forensic notes for this pilot run. These notes document gaps, quality issues, divergences, and rerun triggers. They are the raw material for the process-record.md entry and the v2-summary PR.

---

## Evidence Gaps

### Sources inaccessible — each with relevance assessment

1. **Mitchell Scholars Blog** (https://blog.mitchellscholars.org/author/akulkarni/) — SSL certificate expired. This is the HIGHEST-VALUE inaccessible source. Mitchell Scholar blog posts are written during the scholarship year (2022-23 at UCD Dublin). They would contain first-person reflections on social data analytics, Irish policy context, how his thinking evolved during graduate study. If accessible, these posts could shift the constitution — particularly the criteria for data governance and Irish/EU regulatory framing. **Constitution impact: MEDIUM.** Core values are established without them, but the specific analytical voice is absent.

2. **LinkedIn profile** (https://www.linkedin.com/in/aadik/) — auth-walled. Full career timeline, endorsements, post history, and professional connections are not accessible. This is the most likely location for any current self-description, articles, or position statements from his Coinbase period. **Constitution impact: LOW-MEDIUM.** Core facts are established; LinkedIn would mainly fill timeline gaps and possibly reveal advisory roles.

3. **Twitter/X account** (https://x.com/aadi1111k) — private/protected. Cannot confirm this is the correct Aadi Kulkarni. No content visible. If active, would be the richest source for first-person political technology opinions. **Constitution impact: HIGH IF EXISTS AND ACTIVE.** Not confirmed as the right account.

4. **Polici.org** (https://polici.org) — domain offline, site defunct. Original mission statement, technology description, team page. Enough survives in press coverage to reconstruct the core; CollegeLeap has a 2021 internship posting for "Polici PBC." **Constitution impact: LOW.** Core mission is well-documented elsewhere.

5. **Honours thesis** (ML analysis of federal regulatory comments, with Max Kapustin) — not publicly archived or cited anywhere findable. Would directly evidence his analytical approach to regulatory data and his early engagement with ML-as-policy-tool. **Constitution impact: LOW-MEDIUM.**

6. **Published writing from Coinbase period (2023-present)** — no policy papers, regulatory submissions, op-eds, or articles found under his name. This is the most consequential gap: his current analytical voice on crypto regulation, open standards, and government digital infrastructure is entirely unknown from direct sources. All Coinbase period inference is from roles and career arc, not from his writing. **Constitution impact: MEDIUM-HIGH.** We are estimating his current views from trajectory, not text.

### Name collision

- **Identified:** Teen from Nashua, NH who founded TechPals (digital literacy for seniors). Covered by NHPR, StarterSky, union leader, and local NH press. Completely distinct person.
- **Resolution:** Trivial. Different institution, geography, age, timeline, and domain. All sources in this run have been checked against the correct person.
- **Residual risk:** LOW. The disambiguation markers (Cornell, Coinbase, Mitchell Scholar, London) are unique to the correct Aadi Kulkarni.

---

## Dossier Quality Issues

### Fields missing or thin across 321 projects

The most common missing fields across the dataset:
- `regulatory_engagement` — proposed in Part E of the constitution but not present in current dossier schema. Relevant to Criterion 3 scoring but must be inferred from policy_outcomes and issue_area.
- `accessibility_features` — proposed in Part E but not present. Cannot score Criterion 1 beyond presence/absence of exclusion keywords.
- `data_governance_model` — not in current schema; must be inferred from governance_model (sometimes present) or text analysis.
- `excluded_population_evidence` — not present; must use underdog_signal field and communities_served text.

### Projects below 0.4 dossier completeness

Only 5 projects fell below 0.4 completeness — indicating that the enrichment effort has been quite thorough:

| Project | Completeness | Score | Note |
|---|---|---|---|
| Unknown (SSRN 5351275) | 0.08 | 28 | Empty dossier, dead link — underdog protection |
| Unknown | 0.10 | 28 | Empty dossier — underdog protection |
| Local Deep Researcher | 0.30 | 32.4 | Thin; just above UDP floor |
| Hand-Written Petition Scanner | 0.38 | 38.4 | Thin; just above UDP floor |
| Membership | 0.38 | 38.4 | Thin; ambiguous purpose |

### Patterns in thin dossiers

The thin-dossier projects are overwhelmingly: (a) academic papers or preprints submitted as projects, (b) tools so new they have no deployment evidence, or (c) projects with dead URLs. The main structural pattern is that civic tech tools from non-Western contexts, smaller organisations, or non-English websites tend to have thinner `scraped_description` and missing `policy_outcomes` and `communities_served` fields — which mechanically lowers both completeness and constitutional scores. This is the structural popularity bias the dossier completeness field is designed to surface.

---

## Popularity Risk Flags — Top 10

The 10 projects most likely scoring high due to dossier richness or model familiarity:

| Project | Pop Risk Drivers | Score | Completeness | Confidence |
|---|---|---|---|---|
| CKAN | Decade-old, canonical open data infrastructure; 1.0 completeness; in all civic tech training data | 78.7 | 1.00 | If normalised: ~67 |
| Mastodon C | Well-known platform; very complete dossier; likely in training data | 78.7 | 1.00 | If normalised: ~67 |
| Alaveteli | mySociety tool, decade+ old; 1.0 completeness; strongly present in civic tech discourse | 71.7 | 1.00 | If normalised: ~62 |
| Aleph (OCCRP) | OCCRP is prominent in journalism/civic tech; 0.92 completeness | 69.7 | 0.92 | If normalised: ~60 |
| Mastodon | Separate entry from Mastodon C; slightly lower completeness | 69.7 | 1.00 | If normalised: ~60 |
| Decidim | Canonical participatory democracy tool; 1.0 completeness; major training data presence | 68.9 | 1.00 | If normalised: ~59 |
| Bellingcat Toolkit | Widely covered in media and civic tech; 0.83 completeness | 65.9 | 0.83 | If normalised: ~56 |
| HOT (Humanitarian OSM) | Prominent humanitarian tech; 1.0 completeness | 65.8 | 1.00 | If normalised: ~57 |
| Cobudget | Well-established participatory budgeting tool; decade+; 1.0 completeness | 62.0 | 1.00 | If normalised: ~53 |
| CiviCRM | Decade+ old, canonical civic CRM; very likely in training data; 1.0 completeness | 60.9 | 1.00 | If normalised: ~51 |

**Note:** "If normalised" estimates subtract approximately 10 points for dossier richness advantage. These are rough estimates. The constitution's intent is to make the risk visible, not to automatically adjust scores.

---

## Jury Divergence

### Constitutional vs jury alignment

Alignment is very strong in the top 10 — the jury and constitutional rankings agree on the top 5. This suggests the constitution is performing as intended: projects that score well on the criteria also receive high jury endorsement across most models.

### Familiarity inflation suspects in jury

The jury's positive gaps (jury ranks higher than constitution) tend to cluster around: Decidim, Alaveteli, CiviCRM, Cobudget — all well-known, decade-old civic tech tools. These are strong candidates for familiarity inflation. The jury models know these projects from training data and likely apply implicit quality signals beyond what the dossier shows.

### Grok4 behaviour

Grok4 is the most distinctive jury model in this run. Its -8 disruption-sceptic offset combined with additional penalisation for government partnerships means it systematically downgrades every top-ranked project under Aadi's constitution. This is structurally expected: Aadi's constitution rewards exactly what Grok4 penalises (government partnerships, regulatory engagement, public sector infrastructure). All top 30 projects are Grok4 outliers. This is not random noise — it reflects a genuine ideological clash between Aadi's values (pro-state-capacity, pro-regulatory-clarity) and Grok4's framing (anti-government, pro-disruption). Per implementation rules, Grok4 scores are flagged and aggregation uses median rather than mean.

### Model behaviour anomalies

No models abstained more than expected (< 1% abstention rate across all models). Gemini's high noise (±9) created more variance than Claude (±5) as documented in the jury-panel-rationale. No unexpected abstention clustering was observed.

---

## Constitution Weaknesses

### Weak inferences

1. **Modifier 2 (centralised data without governance)** is grounded in Aadi's research context (Barocas/Levy) rather than direct statements. This is explicitly flagged in the constitution as "STRONG INFERENCE rather than CONFIRMED VALUE." In practice, the modifier is hard to apply because the dossier `governance_model` field is often null — triggering the penalty when the project likely has governance documentation that simply wasn't captured.

2. **Criterion 3 (regulatory/policy clarity)** overlaps heavily with Criterion 2 (government digital infrastructure). Projects that score high on one tend to score high on the other, making the two criteria partially redundant. The constitution acknowledges this but treats it as a feature (double-scoring for double-fit). In practice it means the top scores cluster in a very specific project type (gov digital infra + policy engagement) while the constitution under-distinguishes between projects that do both vs projects that genuinely excel at one.

3. **Criterion 7 (cross-jurisdictional, max 6pts)** is so low-weight it barely affects rankings. The difference between rank 50 and rank 60 is often less than 6 points — meaning this criterion could swap projects meaningfully in the mid-range but has essentially no effect at the top or bottom. Its role as a "bonus not prerequisite" is operationally correct but its weight makes it noise rather than signal.

### Hard-to-apply criteria

The most difficult criteria to apply across 321 projects:

- **Criterion 4 (data ethics):** The dossier's `documented_limitations` field is not consistently populated. Many projects with excellent data ethics practices (based on external knowledge) have empty `documented_limitations` in the dossier. This mechanically lowers C4 for projects that are ethically sound but poorly documented.

- **Criterion 1 (accessibility):** The keyword approach captures projects that explicitly describe their excluded populations but misses projects that serve excluded populations implicitly (e.g., a civic tech tool primarily used in a low-income area without stating this in the dossier). The underdog_signal field partially compensates but is not consistently applied.

### Procedural rules — counterintuitive results

- **Dead link cap (max 45 pts):** Projects with dead links are capped at 45 points, but some dead-link projects have rich dossiers that would score higher under the constitution. The cap may be too aggressive for projects where the dossier fully documents an active tool that has simply moved domain.

---

## Underdog Protection Audit

**Decision: YES** (included in this constitution)

**Projects where UDP applied:**

| Project | Completeness | Pre-UDP Score | Post-UDP Score | Change |
|---|---|---|---|---|
| Unknown (SSRN 5351275) | 0.08 | ~15 | 28 | +13 |
| Unknown | 0.10 | ~12 | 28 | +16 |

**Assessment:** UDP was applied to only 2 projects — both were essentially empty dossiers (completely unknown tools with no accessible data). The protection did its job (prevented extreme penalties for unknowns) but had near-zero effect on the meaningful ranking. The remaining 319 projects have sufficient dossier data to score above the 28-point floor without protection.

**Floor effectiveness:** 28 points is a reasonable floor. No project with genuine content was artificially elevated; the 2 projects that hit the floor were genuinely unknown. The floor did not distort the ranking in any meaningful way.

**Suspended criteria when UDP active:** Criterion 5 (implementation maturity) and partial Criterion 4 (data ethics) were suspended per the constitution. This is correct — penalising unknown projects for lack of deployment evidence when the dossier itself is too thin to assess deployment would be circular.

---

## Rerun Triggers

The following conditions would justify a rerun of this profile:

1. **Mitchell Scholars Blog becomes accessible** — SSL expiry could be resolved. If blog posts are accessible, they may materially change the criterion weights, particularly around data governance and EU/Irish regulatory thinking.

2. **LinkedIn accessible** — if Aadi publishes substantive policy analysis or position statements on LinkedIn, these would provide the direct analytical voice currently absent from the record.

3. **Published writing from Coinbase period found** — any policy papers, regulatory submissions, or op-eds would provide the strongest basis for updating the constitution's current reliance on career trajectory inference.

4. **User correction of constitution errors** — if Aadi reads this PR and identifies specific criteria or modifiers that don't reflect his actual values, those corrections should be incorporated before any next run.

5. **Dossier schema updates** — if `regulatory_engagement`, `accessibility_features`, or `data_governance_model` fields are added to the enriched dossier schema (proposed in Part E of the constitution), a rerun would use these fields and produce materially different Criterion 1, 3, and Modifier 2 scores.

---

## Pilot Run Notes (issues specific to this being the first v2 run)

1. **No prior run to compare against:** This is the pilot — there is no baseline to compare whether the scoring distribution, constitution structure, or jury divergence patterns are normal or anomalous. Future runs will have this baseline.

2. **Score distribution:** Mean=48.5, Max=85.7, Min=17.6. The distribution is roughly normal with a slight left skew. The top projects cluster in 75-90 range; the bottom in 17-35 range; most projects fall in 40-70. This feels appropriate — no ceiling or floor bunching.

3. **M3 modifier over-firing:** The legal/regulatory keyword matching for Modifier 3 (boost for legal text legibility) may be triggering on projects that mention law or regulation in general context rather than specifically making legal text legible. This inflates scores for general policy advocacy tools that don't specifically address the text-legibility problem the modifier was designed for. Recommended fix: tighten trigger to require specific legal text integration evidence.

4. **Mastodon appears twice:** There are two Mastodon entries in the dossier (Mastodon and Mastodon C). Both received similar scores. This is a data quality issue in candidates.csv — these should be deduplicated or differentiated.
