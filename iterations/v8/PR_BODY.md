<!--
  Paste this body into a GitHub iteration PR (template: Iteration proposal), or open:
  compare view with ?template=iteration.md
  After the PR exists, set pr_url and pr_number in iterations/v8/README.md and re-run npm run build:iterations if needed.
-->

## Title

ITN/A Grok re-run with awards bonuses + effective-score alignment (v8)

## Heuristic

Same **v5 ITN/A** setup (Grok 4.1 Fast: tri-lens assessment → shortlist → facilitator-led deliberation with relative scoring and multi-turn argument). **Deliberation adds awards-context bonuses** (−5 to +5 each: relevance, project concreteness, novelty) stored separately from the pure ITN/A aggregate. **`the-algorithm.ts` uses `aggregate_effective`** (ITN/A + bonuses, clamped 0–100; fallback to `aggregate`) for deliberated rows so **`results.json` matches deliberation ordering**. Non-deliberated rows keep v5 tiers: 2+ greens → 45, 1 green → 20, else 5. Dossier normalisation and URL normalisation keep `candidates.csv` aligned with `cache/assessments-grok.json` and `cache/deliberation-grok.json`.

## Rationale

Bonuses make **timeliness, concreteness, and novelty** legible without corrupting the core ITN/A debate. Aligning the algorithm to **`aggregate_effective`** fixes a consistency bug: the jury saw bonus-adjusted scores but the leaderboard did not. Together with **ROUND 1 token budget / retries** and **safer enriched-field parsing**, this iteration is a deliberate **awards-focused** refinement of the v5 pipeline rather than a new jury architecture.

## Limitations

Single model throughout (no v6-style multi-jury check). Bonus dimensions are subjective. Most projects still sit in coarse non-deliberated tiers. Scores remain ordinal, not cardinal.

## Assessment

**SlopStop** (99) at the top is consistent with high relevance to 2026 platform-quality / “slop” debates plus strong concrete-project signalling in the bonus pass; **Bonfire** and **rsky** (97) illustrate tight ITN/A fields separated by awards bonuses. Committee should compare to v5 and v6 winners and decide whether to treat bonus fields as first-class audit artefacts in the next iteration.

## Implementation

- [ ] Code is ready to review
