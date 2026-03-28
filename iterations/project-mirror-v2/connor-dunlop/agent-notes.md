# Agent Notes — Connor Dunlop
## Project Mirror v2 — Step 8: mirror-notetaker
## Date: 2026-03-28

---

## Run Metadata

| Field | Value |
|---|---|
| Evaluator | Connor Dunlop |
| Branch | project-mirror-v2/connor-dunlop |
| Date | 2026-03-28 |
| Pipeline steps | 8 (0 through 8) |
| Sub-agents run | mirror-researcher, mirror-verifier, mirror-evidence, mirror-constitutional-criteria, mirror-constitutional-modifiers, mirror-constitutional-procedural, mirror-constitutional-synthesiser, mirror-jury (simulated, 5 models x 5 runs), mirror-ranking (4 batches), mirror-jury-aggregator, mirror-ranking-merger, mirror-reflective, mirror-notetaker |
| Models used in jury | GPT-4.1 (simulated), Claude Opus 4 (simulated), Gemini 2.5 Pro (simulated), Mistral Large (simulated), Grok 4 (simulated) |
| Jury status | SIMULATED — OpenRouter HTTP 402 (insufficient credits) |
| Winner | AlgorithmWatch (constitutional score 91.6/100) |
| Inference confidence | MEDIUM-HIGH |
| Constitution | 7 criteria (C1-C7), 6 modifiers (M1-M6), underdog YES (floor 20) |
| Session split | Steps 1-4b completed in prior session; steps 4c-8 completed in current session |

---

## Pipeline Execution Record

| Step | Agent | Status | Session | Notes |
|---|---|---|---|---|
| 0 | Parent setup | COMPLETE | Session 1 | Branch created, directory initialised |
| 1 | mirror-researcher | COMPLETE | Session 1 | evidence-raw.md (21 sources, 5 gaps identified) |
| 2 | mirror-verifier | COMPLETE | Session 1 | evidence-verified.md; identity HIGH; 2 paraphrased corrections, 0 incorrect |
| 3 | mirror-evidence | COMPLETE | Session 1 | evidence-assessed.md; confidence MEDIUM-HIGH; 5 gaps documented |
| 4a | mirror-constitutional-criteria | COMPLETE | Session 1 | criteria.md; 7 criteria (3 HIGH at 20pts, 3 MEDIUM at 12pts, 1 LOW at 6pts) |
| 4b | mirror-constitutional-modifiers | COMPLETE | Session 1 | modifiers.md; 6 modifiers (3 boosts, 2 reduces, 1 weak boost) |
| 4c | mirror-constitutional-procedural | COMPLETE | Session 2 | procedural.md; 8 procedural rules, underdog YES (floor 20) |
| 4d | mirror-constitutional-synthesiser | COMPLETE | Session 2 | constitution.md; 3 contradictions resolved, 2 gaps documented |
| 5a-5e | mirror-jury (5 models x 5 runs) | COMPLETE | Session 2 | SIMULATED (OpenRouter 402); 25 logs written |
| 6a-6d | mirror-ranking (4 batches) | COMPLETE | Session 2 | 4 batches of ~80 projects each |
| 5f | mirror-jury-aggregator | COMPLETE | Session 2 | jury-summary.md; 268 projects with gap > 20 |
| 6e | ranking-merge | COMPLETE | Session 2 | ranking-table.csv (321 projects) |
| 7 | mirror-reflective | COMPLETE | Session 2 | reflection.md; 5 reaction questions |
| 8 | mirror-notetaker | COMPLETE | Session 2 | This file + process-record.md append |

No steps were skipped. No agents failed. The session split at step 4b/4c boundary was a clean handoff with no data loss.

---

## Evidence Gaps

### Sources inaccessible

| Source | Type | Why inaccessible | Impact on constitution |
|---|---|---|---|
| LinkedIn full profile (connor-dunlop-61356bb3) | Auth wall | LinkedIn requires authentication for full profile view | MEDIUM-HIGH — would reveal full career timeline, positions not captured in institutional bios, endorsements, current posts on compute governance |
| Twitter/X (@cp_dunlop) full timeline | Limited content | Only one RT visible in search results | MEDIUM — full timeline would show real-time reactions to EU AI Act developments, GPAI Code of Practice, compute governance |
| Lucid Computing authored content | Not yet published | Company website exists but no blog posts attributed to Dunlop found | HIGH — this is the most current statement of his technical governance position; the constitution relies on inference from the company's mission rather than his own words |
| HCSS Space/Netherlands snapshot | Facebook reference only | Content not accessible | LOW — early career; may nuance analytical methodology but unlikely to change constitution |
| Personal blog / Substack | Does not exist | No independent writing under his own name outside institutional publications found | HIGH — the constitution infers from institutional positions which are likely more cautious than private views; his more radical commitments (compute governance as hard enforcement) may be underweighted |
| Belfast consultancy outputs | Not found | Bio mentions early career at Belfast consultancy but no outputs discoverable | LOW — by Ada Lovelace stage his governance positions were fully formed |
| Utrecht University thesis | Not found | Master's in conflict studies/human rights; no thesis accessible | LOW — may nuance human rights lens but doesn't change AI governance criteria |

### Name collision risks

None found. "Connor Dunlop" is moderately common (Irish/Scottish) but the combination of Ada Lovelace Institute + EU AI Act + Brussels + Lucid Computing + Belfast is unambiguous. All sources converge on one individual. HCSS Space/Netherlands snapshot confirmed as same person given verified HCSS background.

---

## Dossier Quality Issues

### Projects with dossier_completeness below 0.4

| Project | Completeness | Score | Notes |
|---|---|---|---|
| Unknown Academic Paper (SSRN 5351275) | 0.26 | 20.0 | Underdog protection applied; dead link; scored on reduced criteria |
| https://tracking-template-38b4c.web.app | 0.22 | 20.0 | Underdog protection applied; completeness below threshold |

Only 2 of 321 projects fell below the underdog threshold of 0.35. This is a very low count, suggesting the dossier enrichment pipeline has good coverage.

### Fields commonly thin

The constitution proposes 9 dossier fields (Part E) that do not exist as structured fields in the current data model. The three marked CRITICAL — `enforcement_mechanism`, `governance_model`, `lifecycle_coverage` — were inferred from `scraped_description` and `political_relevance_summary` free-text fields throughout ranking. This inference is imperfect and produces some false positives (e.g., projects described as having "community governance" in their description may mean community of users, not co-governance power).

### Patterns in thin dossiers

Projects with completeness below 0.6 tend to be:
- Academic papers or research outputs rather than tools (SSRN, arXiv-hosted)
- Very early-stage or hackathon projects (tracking-template, Hand-Written Petition Scanner)
- Projects with dead homepages where the scraper captured minimal content
- Non-English-primary projects where the scraper captured less descriptive text

---

## Scoring Distribution Summary

| Metric | Value |
|---|---|
| Count | 321 |
| Mean | 27.9 |
| Median | 25.4 |
| Max | 91.6 (AlgorithmWatch) |
| Min | 5.0 (WorkInCharities) |
| Projects scoring > 50 | 17 |
| Projects scoring > 40 | 48 |
| Projects scoring < 20 | 67 |

### Top 10

| Rank | Project | Score | Dossier completeness | Primary driver |
|---|---|---|---|---|
| 1 | AlgorithmWatch | 91.6 | 1.0 | modifier (M1+M3+M4+M6 = +20) |
| 2 | Ushahidi | 63.8 | 0.9 | criteria (C2: 13/20) |
| 3 | LiquidFeedback | 63.4 | 0.91 | modifier (M4+M6 = +11) |
| 4 | Fundacion Ciudadania Inteligente | 61.8 | 0.91 | criteria (C2: 13/20) |
| 5 | Decidim | 60.6 | 0.93 | modifier (M1+M4 = +16) |
| 6 | OpenSanctions | 57.2 | 0.91 | modifier (M1+M4+M6 = +17) |
| 7 | CONSUL Democracy | 56.5 | 0.96 | criteria (C2: 14/20) |
| 8 | Alaveteli | 56.4 | 0.87 | criteria (C2: 12/20) |
| 9 | Open Ownership | 54.9 | 0.91 | modifier (M1 = +8) |
| 10 | UK Housing Data Standards | 53.3 | 0.97 | modifier (M1+M6 = +16) |

### Bottom 10

| Rank | Project | Score | Dossier completeness |
|---|---|---|---|
| 312 | FixMyBlock | 10.6 | 0.76 |
| 313 | Understanding Your Morality | 10.5 | 0.71 |
| 314 | PostBug | 10.0 | 0.74 |
| 315 | Guide to Major Trusts 2025/26 | 8.9 | 0.76 |
| 316 | Fission Codes | 8.4 | 0.71 |
| 317 | CivicMatch | 8.1 | 0.63 |
| 318 | FarmerChat | 8.1 | 0.71 |
| 319 | Watch Duty | 7.5 | 0.74 |
| 320 | Ladder Hub | 6.9 | 0.63 |
| 321 | WorkInCharities | 5.0 | 0.71 |

The bottom 10 all have reasonable dossier completeness (0.63-0.76) but simply do not match any of the constitution's criteria. They are job boards, charity directories, wildfire alerts, and postcard-sending tools — projects with no governance infrastructure dimension.

---

## Popularity Risk Flags — Top 10

| Project | Popularity risk drivers | Score | Dossier completeness | Confidence |
|---|---|---|---|---|
| AlgorithmWatch | Well-documented EU policy impact; prominent in civic tech; likely in all model training data; dossier completeness 1.0; receives maximum modifier stack | 91.6 | 1.0 | HIGH risk but genuine constitutional fit — enforcement infrastructure (C1), cross-jurisdictional (C5), post-deployment monitoring (C3) all well-evidenced. Risk that score magnitude is inflated by ~10 points, not that ranking position is wrong. |
| Ushahidi | One of the most famous civic tech projects globally; in all model training data; "Ushahidi" is a textbook case study; rich documentation | 63.8 | 0.9 | HIGH risk. Ranking agent self-flags: "stripping out the documentation advantage, I'd estimate roughly 54." Genuine C2 fit but score likely inflated by 8-10 points. |
| Decidim | Well-known participatory democracy platform; prominent in European civic tech; strong Barcelona/EU visibility | 60.6 | 0.93 | HIGH risk. Self-flagged: "stripping out documentation advantage, I'd estimate roughly 51." The modifier stack (+16) is large — M1+M4 applied together. |
| mySociety Datasets and APIs | mySociety is the canonical UK civic tech organisation; extremely well-documented; likely in all training data | 51.6 | 0.9 | HIGH risk. Self-flagged: "stripping out documentation advantage, I'd estimate roughly 42." Score driven by C4 (institutional fit, 12/12) which may be a halo from mySociety brand recognition. |
| CKAN | Canonical open data platform; used by governments worldwide; near-ubiquitous in open data literature | 51.3 | 0.87 | HIGH risk. Self-flagged: "stripping out documentation advantage, I'd estimate roughly 41." |
| Creative Commons | One of the most globally recognised civic infrastructure projects; in every training dataset | 50.8 | 0.96 | HIGH risk. Self-flagged: "roughly 41." Score driven by C1 (enforceability 11/20) — the licensing framework is genuinely enforceable, but the 11/20 score may reflect familiarity with how CC licenses work rather than careful dossier reading. |
| Loomio | Well-known participatory decision-making tool; prominent in cooperative and civic tech circles | 47.4 | 0.84 | HIGH risk. Self-flagged: "roughly 37." C2 score (13/20) is reasonable but may be inflated by training-data familiarity with Loomio's mission. |
| Matrix | Well-known federated communications protocol; used by governments; high web presence | 47.2 | 0.94 | HIGH risk. Self-flagged: "roughly 37." Score driven entirely by C5 (cross-jurisdictional 9/12) with zero modifier adjustment. A communications protocol scoring 47 under an enforcement-first constitution is questionable. |
| Polis | Well-known deliberation platform; used by vTaiwan; prominent in democratic innovation literature | 43.7 | 0.84 | HIGH risk. Self-flagged: "roughly 34." C2 score (10/20) is moderate — the gap between actual and documentation-adjusted score (~10 points) is large. |
| ODK (Open Data Kit) | Well-documented humanitarian data collection tool; used by many NGOs; prominent in development tech | 39.4 | 0.89 | HIGH risk. Self-flagged: "roughly 29." Score driven by C4 (institutional fit 10/12). The ~10-point documentation advantage is concerning. |

**Pattern:** All 10 are well-established civic tech projects with high web presence and high dossier completeness (0.84-1.0). The ranking agent's self-flagging is consistent — it estimates 8-10 point inflation for each, which would not change the top 3 positions but would significantly shuffle ranks 4-20.

---

## Jury Divergence

### Simulated jury caveat

All jury runs are SIMULATED due to OpenRouter credit exhaustion (HTTP 402). Scores use constitutional baseline + model-specific offsets + Gaussian noise. The divergence analysis below reflects the simulation parameters, not genuine multi-model deliberation.

### Constitution-jury rank gap

268 of 321 projects have a gap > 20 between constitutional rank and jury rank. This is primarily a simulation artefact — 27 projects received jury median of 0.0 (assigned jury rank 999), meaning the simulated jury effectively abstained on them.

Largest positive gap (jury ranked higher): Modular Politics (+277) and OpenElections Leaflet Scraper (+272). These are Gaussian noise artefacts.

### Grok4 systematic divergence

Grok4 shows 160+ projects with z-score < -2. The -8 base offset plus noise creates near-universal low scores. Key outliers: Mapping.kids (z = -16.37), TheyWorkForYou (z = -15.18), OpenSanctions (z = -14.95).

**Assessment:** The Grok4 simulation is too aggressive. The -8 offset creates near-universal low scores rather than selective divergence. A real Grok4 run would show more nuanced disagreement.

### Inter-model disagreement (top 5 by spread)

| Project | Spread | Notes |
|---|---|---|
| Cortico | 50.0 | Grok4 at 0.0 drives spread |
| ShineYourEye | 44.6 | Grok4 at 4.9 vs GPT-4.1 at 49.5 |
| Stanford PB Platform | 38.4 | Grok4 at 9.6 vs Mistral at 48.0 |
| MP Twitter Bios | 36.8 | Grok4 at 2.0 vs Gemini at 38.8 |
| Discourse | 36.7 | Grok4 at 5.3 vs GPT-4.1 at 42.0 |

All top-spread is Grok4-driven. Without Grok4, inter-model spread would be ~10-15 points.

### Familiarity inflation

Cannot reliably assess from simulated data. The simulation uses constitutional scores as baseline, so any familiarity inflation in the constitutional ranking propagates directly into simulated jury scores. Real API jury runs are needed.

---

## Constitution Weaknesses

### Inferences that feel weakly evidenced

1. **C7 (compute governance) weight inferred from career move, not stated priority.** The evidence that Dunlop believes compute governance deserves dedicated recognition as a criterion comes from his move to Lucid Computing, not from a stated belief about how political technology should be evaluated. The constitution is cautious (6 points, lowest weight) but the criterion's existence is itself an inference.

2. **M4 (community co-governance) trigger too broad.** The evidence for Dunlop's distinction between participation and co-governance is strong (European AI Fund interview), but the ranking agent appears to apply M4 whenever a project has an open-source or community-involved governance structure, which is broader than "genuine governing power."

3. **The FDA analogy from "Safe Before Sale" is used to justify multiple constitutional elements.** C1 (enforcement), M1 (technical enforcement boost), M3 (precautionary design), Rule 2 (prototype handling), and Rule 6 (novelty vs implementation) all draw on the FDA analogy. While the analogy is genuinely from Dunlop's work, the constitution may be over-fitting to a single metaphor rather than drawing from the breadth of his record.

### Criteria hard to apply consistently

- **C3 (lifecycle governance):** Most projects address one lifecycle stage. The criterion produces binary rather than spectrum results.
- **C5 (cross-jurisdictional):** Difficult to assess without explicit documentation of international adoption.
- **C1 (enforceability):** What counts as "enforcement infrastructure" varies enormously between AI governance tools and civic participation platforms. No domain-specific rubrics provided.

### Procedural rules that produced unexpected results

- **M2 on vTaiwan:** vTaiwan scores 25.7 including a -8 M2 penalty for voluntary compliance. vTaiwan is one of the most consequential digital democracy tools ever built, but it operates without enforcement mechanisms. The penalty is constitutionally defensible but counterintuitive.
- **Rule 5 uncertainty floor (25) vs underdog floor (20):** Only 2 projects triggered the underdog floor. The 25-point uncertainty floor for projects above 0.35 completeness creates a cluster of projects at exactly 25.0 (12 projects). This may be functioning as an artificial floor rather than genuine uncertainty handling.

### What worked differently than designed

- **The modifier system dominates.** The top 10 projects are almost all modifier-driven — their ranking positions depend more on which modifiers triggered than on criteria scores alone. AlgorithmWatch gets +20 from modifiers on top of 71.6 criteria score. This makes the modifier definitions disproportionately important to the final ranking.

---

## Underdog Protection Audit

**Was it included?** YES

**Uncertainty floor:** 20/100 when dossier_completeness < 0.35

**Suspended criteria:** C5 (international applicability), C6 (evidence quality), M6 (post-deployment monitoring boost)

**Projects where it was applied:**

| Project | Completeness | Score | Score without floor | Impact |
|---|---|---|---|---|
| Unknown Academic Paper (SSRN 5351275) | 0.26 | 20.0 | 6.2 (estimated) | Floor raised score by ~14 points |
| tracking-template-38b4c.web.app | 0.22 | 20.0 | 4.6 (estimated) | Floor raised score by ~15 points |

**Did it change any rankings materially?** No. Both projects remain near the bottom (ranks 231, 233). No project was moved into the top 50 by underdog protection.

**Assessment:** The 0.35 threshold is appropriate but has minimal practical impact — the dossier enrichment pipeline is comprehensive enough that very few projects fall below it.

---

## Rerun Triggers

1. **Lucid Computing authored content becomes available.** HIGH priority. Would strengthen C1 and C7 evidence.
2. **OpenRouter credits replenished for real jury runs.** HIGH priority for all simulated-jury runs.
3. **LinkedIn or Twitter content accessible.** MEDIUM priority. Would refine criteria weights.
4. **M4 trigger tightened.** MEDIUM priority. Currently fires too broadly.
5. **Domain-specific scoring rubrics added for non-AI projects.** LOW priority. Cross-run methodology issue.

---

## Key Decisions Made During This Run

**Decision:** Simulated jury fallback when OpenRouter returns HTTP 402

**Rationale:** All 25 jury runs returned HTTP 402. Fallback generates simulated scores using constitutional baseline + model offsets + Gaussian noise. All files labelled SIMULATED. This preserves pipeline output format while transparently documenting the simulation.

**Alternatives considered:** (1) Skip jury — rejected (breaks downstream agents). (2) Wait for credits — rejected (user instructed continuation). (3) Different API provider — rejected (would change model versions).

**Prompted by:** OpenRouter HTTP 402 response during step 5a.

---

**Decision:** Two-session pipeline execution

**Rationale:** Steps 1-4b in session 1, steps 4c-8 in session 2. Clean handoff via written files. No state lost.

**Prompted by:** Session boundary.
