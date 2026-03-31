# Agent Notes: Project Mirror v3 — Alexandra Ciocanel
## Agent: mirror-synthesiser | Version: v3 / 2026-03-29

---

## Run Summary

Project Mirror v3 is a feedback-driven rerun for Alexandra Ciocanel only. v2 completed on 2026-03-28 and produced a full ranking with AlgorithmWatch as the winner (78.0). Alexandra's feedback was received on 2026-03-29 and triggered a full rerun of Steps 4–9. The jury pipeline was skipped entirely (no OpenRouter spend); all scoring is Claude-only single-pass. The winner in v3 is **Worker Info Exchange** (94.7) — a 16.7-point increase in the top score, reflecting the constitution's shift toward direct structural correction of named power asymmetries rather than monitoring and documentation work.

---

## v2 → v3 Changes

### Constitution changes (from Alexandra's direct feedback)

| Change | v2 | v3 | Reason |
|---|---|---|---|
| C1 weight | 20 pts | 12 pts | Accountability infrastructure alone no longer wins — must accompany C2+C4 |
| C2 weight | 20 pts | 20 pts | Held — joint highest with C4 |
| C3 scope | Qualitative/ethnographic grounding | Full lifecycle participation (5 stages) | Expanded at her request |
| C4 weight | 12 pts | 20 pts | Raised — joint highest with C2; SKEPSIS dimension added |
| C5 | Not present | Structural underdog signal (6 pts) | New criterion, proposed directly by her |
| C6 | Implementation maturity (12 pts) | Democratic depth via IAP2 spectrum (12 pts) | Replaced entirely — concept-stage projects with genuine empowerment logic now score higher than deployed informational tools |
| M7 | Not present | Intra-class dynamics/complicity (+3–6) | New modifier from her feedback on class inequalities framing |
| Framing | Exclusion focus | Class inequalities + complicity focus | Central correction from her feedback |

### Factual corrections applied in v3

- Romania paper was not authored by her (removed from evidence base)
- Current employer is Transform, not MoJ (corrected throughout)
- Code Encounters papers are collective outputs, not solo (attribution corrected)

---

## What Went Well

**Constitution rewrite landed cleanly.** The v3 criteria are internally consistent and the feedback-derived changes (C4 raised, C6 inverted, C5 added, M7 added) all operationalise correctly from available dossier fields. The C4/C2 joint-high-weight structure reliably distinguishes projects that have examined their own power dynamics from those that haven't.

**The traceability requirement was achievable.** Per-criterion evidence breakdown across 315 projects produced ~2044 rows in traceability-log.csv. The format (evidence_field, evidence_value, interpretation, score, max_score, justification) is granular enough to audit any individual score.

**The winner is constitutionally defensible.** Worker Info Exchange scores 94.7 because it fires C1+C2+C3+C4 simultaneously — named asymmetry, named population, named exclusion mechanism (trade secret exemptions), documented legal wins, and intra-class dynamics analysis. Every modifier it triggers (M1+M5+M7) is clearly applicable. There is no component of the score that relies on dossier richness alone.

**C6 (democratic depth via IAP2) produced meaningful differentiation.** Replacing implementation maturity with IAP2 depth caused several large, widely-deployed "transparency" platforms to score lower than smaller participatory tools with genuine empowerment mechanisms. This is exactly the inversion Alexandra's feedback suggested.

**Underdog protection worked.** 23 projects reached the floor score of 30.0 — thin dossiers with plausible but undocumentable civic work. Without the floor these projects would have scored near zero on C3, C4, and C6. The C5 modifier also surfaced several under-resourced projects (Tracka, Opora, Martus) into the top 20 that might otherwise have clustered in the 40-60 range.

---

## What Was Harder in v3

**The class inequalities framing is harder to operationalise than the exclusion framing.** C2's high-score descriptor asks for intra-class dynamics analysis — "who benefits from exclusion" — but most dossiers do not contain this level of structural analysis explicitly. The distinction between "names excluded population" and "names the relational class position of those who benefit from that exclusion" required interpretive judgment in many cases. M7 helps, but it operates as a weak modifier rather than a primary criterion.

**C6 (democratic depth) required more interpretive work than C1–C5.** The IAP2 spectrum distinction between "informs," "consults," "involves," "collaborates," and "empowers" is not always derivable from dossier fields. The democratic_depth_indicator field was often absent or insufficiently granular. Many scores relied on interpretation of governance_model, outcome_methodology, and political_relevance_summary as proxies. This is flagged in traceability entries.

**The modifier_adj normalization across batches.** Batches 1–2 used "+X" format for positive modifier adjustments; batches 3–4 used plain numbers. The ranking-table merge required manual normalization. Future runs should standardize the format in the scoring prompt.

**First-person vs third-person rationale voice.** Batches 1–2 used third-person summary rationales; batches 3–4 used first-person rationales (Alexandra's voice). The merged ranking-table.csv contains both styles. This inconsistency is documented but not corrected — both are accurate representations of the scoring judgment.

---

## Scoring Observations

**Top score increase:** v3 winner (Worker Info Exchange, 94.7) scores 16.7 points higher than v2 winner (AlgorithmWatch, 78.0). The change reflects the v3 C4 increase (12→20 pts) and C6 replacement (maturity → democratic depth): AlgorithmWatch is primarily a monitoring and documentation organisation, which scores well on C1 and M1 but does not trigger C4 strongly (its self-critical reflexivity is implied but not publicly documented) and scores lower on C6 (IAP2: "informs/consults" rather than "empowers"). Worker Info Exchange, by contrast, scores on all six criteria and triggers M1+M5+M7.

**The 70-point cluster:** 16 projects score 68–75. This cluster contains several large, well-regarded platforms (HOT, Ushahidi, Decidim, Consul, OpenCRVS) that are capped by C4 — they don't demonstrate public critical self-examination of their own power dynamics. The cluster is wider in v3 than v2, which reflects the C4 weight increase.

**Floor at 30.0:** 23 projects. More than expected. This suggests either (a) dossier completeness for the longlist is systematically lower than anticipated, or (b) the floor is too high relative to scores for genuinely limited-scope projects. The procedural rules intentionally set the floor high (30/100) to prevent penalising underdocumented projects, but it means 7% of the ranked list is artificially equalized.

**3 abstentions:** DFOS, RightsDD, yrpri. Abstained per procedural rules — no dossier available and no accessible web presence establishing any basis for scoring judgment.

---

## Jury Pipeline Status

**Skipped entirely.** v2 ran a 5-model jury (OpenRouter). v3 is Claude-only single-pass ranking. No jury-logs directory exists for v3. The jury pipeline was skipped to reduce cost and time, given the feedback-driven rerun scope. The traceability-log.csv provides the per-criterion evidence record that the jury would have supplemented with multi-model validation.

**Confidence:** Single-model scoring without jury cross-validation means uncertainty is higher than in a fully-juried run. The traceability requirement partially compensates by requiring explicit evidence for every criterion score. For top-ranked projects (Worker Info Exchange, Landlord Tech Watch, Turkopticon), the evidence is strong enough that jury validation would be unlikely to change the outcome. For mid-table projects (ranks 80–200), jury cross-validation might produce meaningful reordering.

---

## Recommended Future Improvements

1. **Standardize modifier_adj format** in scoring prompts (plain numbers throughout, no "+" prefix).
2. **Standardize rationale voice** — specify first-person (evaluator's voice) from batch 1 onwards.
3. **Add democratic_depth_indicator** as a required dossier field — it is currently the hardest criterion to score from existing fields.
4. **Consider M7 as a criterion** in a future iteration if Alexandra's interest in class inequalities/complicity framing remains central. At 3–6 pts as a modifier it is too weak to distinguish projects that do the intra-class analysis from those that don't.
5. **Differentiate within the floor group** — 23 projects at exactly 30.0 is a documentation artefact. A secondary tiebreaker within the floor group (e.g., C2 score, C5 score) would produce a more useful ranking.
