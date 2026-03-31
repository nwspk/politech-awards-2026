# Agent Notes — Project Mirror v3: Nicholas Botti
## Run date: 2026-03-30
## Agent: orchestrator (direct run, no jury)

---

## Pipeline Summary

This is a v3 rerun for Nicholas Botti. The pipeline was:

1. **Constitution update** — Added Modifier 7 (mechanism of action) based on Nicholas's direct feedback. All other v2 components unchanged.
2. **File copy** — evidence-assessed.md, criteria.md, modifiers.md, procedural.md copied from v2 and version-bumped to v3.
3. **Scoring** — All 321 projects re-scored applying M7 on top of v2 scores. No jury run.
4. **Output** — 4 ranking batches + merged ranking-table.csv.

## Methodology Notes

### M7 scoring approach
M7 was applied by assessing each project's `movement_building_utility.classification` field from the enriched dossier, supplemented by manual override logic for cases where the classification contradicted the dossier description. The classification values map to M7 as follows:

| Classification | M7 default | Override conditions |
|---|---|---|
| `direct_organizer_tool` | +7 | None |
| `advocacy_amplifier` | +5 | None |
| `infrastructure` | 0 or +3 | +3 if procurement/participatory/transparency keywords in description |
| `information_resource` | 0 or −4 | 0 if policymaker/gov users; +3 to +5 if strong action override keywords |
| `indirect_or_none` | −5 | +3 to +5 if strong action override keywords (deliberation, consultation, etc.) |

Override logic was applied to projects where the dossier description clearly indicated an action mechanism that the classification field had missed (e.g., vTaiwan classified as `indirect_or_none` despite being a direct democratic consultation platform).

**Known data quality issue:** The `movement_building_utility` classifications in the enriched dossier were produced by an earlier agent pass and have some inaccuracies. Approximately 5–10 projects in the 55–75 score range may have M7 applied inconsistently due to this. A human review of edge cases in that range is recommended before treating these scores as final.

### No jury run
Per the v3 brief, no jury run was performed. The `jury_score`, `jury_rank`, `jury_const_gap`, `jury_models`, `jury_runs` fields from v2 are not present in the v3 CSV (columns removed per the v3 format spec).

### Abstentions
Two projects received N/A scores (same as v2 — no change in abstention status).

### Score cap
The v3 modifier cap is: total positive modifier adjustment ≤ +25, total negative ≥ −20. In practice, no project hit the cap in this run. The highest total modifier was PolicyEngine at +15 (v2 modifier +10 + M7 +5).

## Confidence Assessment

- **Top 10 (Polis, AlgorithmWatch, vTaiwan, Matrix, HURIDOCS, Decidim, PolicyEngine, OpenProcurement, LiquidFeedback, Guardian Project):** HIGH confidence. Strong dossier data, clear application of M7.
- **Ranks 11–50:** MEDIUM-HIGH confidence. Good dossier coverage, M7 applied consistently.
- **Ranks 51–150:** MEDIUM confidence. Some dossier gaps; M7 applied from classification field which may not be fully accurate.
- **Ranks 151–321:** LOW-MEDIUM confidence. Thin dossiers, M7 signals less reliable.

## Bias Documentation

Per the v2 constitution (preserved in v3), this constitution has the following documented biases:
- **Against thin-dossier projects** (no underdog protection)
- **Toward AI-involving projects** (non-AI projects max out at ~90/100 due to C1 midpoint rule)
- **Toward policymaker advisory and institutional tools** (C2 and M5 both reward this)
- **New in v3: Toward projects with direct action mechanisms** (M7 adds to this bias)

The net effect of v3 vs v2 is to further advantage participatory democracy tools and direct accountability tools relative to pure information/data platforms. This is intentional and consistent with Nicholas's stated preferences.

## Files Produced

- `constitution.md` — v3 constitution with M7
- `criteria.md` — v2 criteria, version-bumped to v3 (unchanged)
- `modifiers.md` — v2 modifiers + M7 appended, version-bumped to v3
- `procedural.md` — v2 procedural rules, version-bumped to v3 (unchanged)
- `evidence-assessed.md` — v2 evidence file, unchanged
- `ranking-batch-1.csv` through `ranking-batch-4.csv` — ranked subsets
- `ranking-table.csv` — full merged ranking (321 rows)
- `reflection.md` — analysis of v3 vs v2 changes
- `status.md` — run status summary
