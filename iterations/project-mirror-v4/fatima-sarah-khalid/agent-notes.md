# Agent Notes: project-mirror-v4/fatima-sarah-khalid

**Run:** v4 (synthesis)
**Date:** 2026-03-30
**Agent:** synthesiser

---

## Run Summary

This is the synthesis run for Fatima Sarah Khalid. It combines v3 (implementation-first) and v5 (agency-first) scoring outputs into a single ranking using simple averaging: v4_score = (v3_score + v5_score) / 2.

The two input CSVs are:
- `/iterations/project-mirror-v3/fatima-sarah-khalid/ranking-table.csv` — 321 projects, v3 scores
- `/iterations/project-mirror-v5/fatima-sarah-khalid/ranking-table.csv` — 321 projects, v5 scores

The output CSVs produced:
- `ranking-table.csv` — 321 projects, v4 synthesis scores, sorted by score desc
- `divergence-table.csv` — 321 projects, both scores and the absolute divergence, sorted by divergence desc

---

## Method

**Score formula:** `v4_score = (v3_score + v5_score) / 2`

**Divergence formula:** `divergence = abs(v3_score - v5_score)`

Projects are ranked by v4_score. Tie-breaking uses v3/v5 average of C1 scores, then C6 scores, then C3 scores (consistent with both constitutional tiebreaker rules).

No additional modifiers are applied at the synthesis stage. The modifiers were applied at the v3 and v5 scoring stages respectively. The synthesis is a weighted average of two scored outputs, not a re-scoring.

---

## Winner

**CONSUL Democracy — 83.7**

This is the arithmetic average of CONSUL's v3 score (84.7) and its v5 score (approximately 82.7). CONSUL wins the synthesis because it ranks #1 in v3 and #2 in v5 — no other project is consistently top-ranked in both framings.

Bonfire wins v5 at 83.3 but sits at v3 #11 (~74 range), pulling its synthesis average below CONSUL. LiquidFeedback and Polis are strong in both framings but not top-5 in either.

---

## Top 10 (Synthesis)

1. CONSUL Democracy (83.7)
2. LiquidFeedback
3. Polis
4. Decidim
5. Open Data Editor (ODE)
6. mySociety Datasets and APIs
7. Bonfire
8. Alaveteli
9. Open Digital Planning
10. vTaiwan

---

## Key Divergence Observations

The divergence-table.csv reveals the 15 highest-swing projects — these are the analytically most interesting items because they represent genuine disagreement between the framings. The top divergences:

- Open Access – Transparency International: swing 114 (v3 much higher)
- deliberAIde: swing 109 (v3 much higher)
- Polimorphic: swing 100 (v3 higher)
- Privacy Badger: swing 84 (v5 higher)
- Bonfire: swing ~10 in absolute terms but top-1 in v5 vs top-11 in v3

Projects with < 5 pt divergence are consensus-stable — both framings agree. These should have high confidence shortlist recommendations. Projects with 10+ pt divergence should be flagged as framing-dependent — their position in the shortlist depends on which values axis is prioritised.

---

## Confidence

**Overall confidence: MEDIUM**

The synthesis is arithmetic — confidence inherits from the input runs. V3 confidence was MEDIUM-HIGH; v5 confidence was MEDIUM-HIGH. The synthesis introduces one additional source of uncertainty: the equal weighting assumption. In practice, it is not clear that Fatima would weight the implementation-first and agency-first framings equally. Her direct feedback leans toward the agency-first framing as her stated current position. An asymmetric synthesis (e.g., 60% v5, 40% v3) might be more accurate but would introduce arbitrary assumptions. Equal weighting is a defensible conservative choice.

---

## Open Questions

1. **Equal weighting assumption:** Is it correct to weight v3 and v5 equally? Fatima's feedback was about moving toward agency-first — she may value the v5 framing more. A future v4-asymmetric run could test sensitivity to this assumption.

2. **Bonfire's deployment trajectory:** Bonfire's v3 score is pulled down by limited deployment evidence at time of scoring. If deployment evidence has grown since the dossier was written, Bonfire's v3 score would be higher and its synthesis position might change. This is a dossier-staleness risk for any rapidly-developing project.

3. **vTaiwan's v5 position:** vTaiwan drops to #17 in v5 due to institutional dependency signals. But vTaiwan's civic infrastructure is also, in principle, self-hostable open source — the M_AGENCY reduce might be too strong relative to actual dependency. This is a scoring judgment call that could be revisited.

4. **Representing the tension:** The synthesis score is useful for ranking, but it risks obscuring the genuine tension between the framings. A future reporting format might separate "consensus picks" from "framing-dependent picks" rather than merging them into a single ranked list.
