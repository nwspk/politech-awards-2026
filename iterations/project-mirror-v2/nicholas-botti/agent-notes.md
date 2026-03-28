# Agent Notes — Nicholas Botti Run
## Date: 2026-03-28
## Produced by: mirror-notetaker

---

### Run Summary

Full Project Mirror v2 pipeline run for Nicholas Botti. Steps 1-4d completed in a prior session. Steps 5-8 completed in this session.

**Pipeline execution:**
- Steps 1-4d: evidence-raw.md → evidence-verified.md → evidence-assessed.md → criteria.md + modifiers.md (parallel) → procedural.md → constitution.md — all completed in prior session
- Step 5 (jury): 25 runs launched (5 models × 5 runs). Only run 1 per model returned any real scores due to OpenRouter 402 credit exhaustion. Even run 1 had significant API errors.
- Step 6 (ranking): 4 batch agents scored all 321 projects. Merged into ranking-table.csv with 321 rows.
- Step 7 (reflective): reflection.md produced with champion/discount/failure mode/5 reaction questions.
- Step 8 (notetaker): This file.

---

### Jury Data Quality Issue

**Critical: OpenRouter API credits exhausted during jury runs.**

| Model | Run 1 Scored | Run 1 Errors | Runs 2-5 |
|---|---|---|---|
| GPT-4.1 | 153/321 | 140 | All 402 errors |
| Claude | 46/321 | 255 | All 402 errors |
| Gemini | 0/321 | 321 | All 402 errors |
| Mistral | 25/321 | 228 | All 402 errors |
| Grok4 | 0/321 | 317 | All 402 errors |

**Impact:** The jury panel effectively operated as a partial 3-model panel (GPT-4.1, Claude, Mistral) with incomplete coverage. 139/321 projects received at least one jury score. Run-to-run stability analysis is impossible. The jury data should be treated as supplementary context, not a reliable parallel evaluation.

**Recommendation:** When credits are replenished, re-run all 25 jury evaluations. The constitutional ranking stands as the primary output for this run.

---

### Ranking Distribution

- **Total projects:** 321
- **Score range:** ~14.7 to 87.5
- **Mean:** 47.5, **Median:** 48.0
- **Top 5:** AlgorithmWatch (87.5), Polis (87.4), Matrix (86.4), vTaiwan (84.5), HURIDOCS (78.5)

**Constitution characteristics:**
- NO underdog protection — thin evidence = low score
- Non-AI projects capped at ~90/100 (C1 midpoint for non-AI)
- Three HIGH-weight criteria (C1: AI safety, C2: institutional infrastructure, C3: complexity awareness) = 60/102 raw points
- Modifiers 1 (HITL) and 5 (policymaker advisory) can add up to +18 points combined

---

### Evidence Quality Assessment

**Overall inference confidence: MEDIUM**

Strong institutional identity (Federal Reserve, arXiv paper confirmed). Thin direct evidence of political technology values — constitution rests heavily on provided bio as primary values statement. No personal writing, conference talks, or social media found beyond the co-authored arXiv paper.

Key gaps:
- LinkedIn full profile (auth-walled)
- No conference appearances found
- No personal writing on political technology
- AI safety interest confirmed in bio but flavour unknown (technical? institutional? applied?)

---

### Issues

| Issue | Type | Impact | Resolution | Status |
|---|---|---|---|---|
| OpenRouter 402 credit exhaustion | infrastructure | Jury data severely limited — only run 1 partial scores | Document in PR; recommend re-run when credits available | Open |
| Gemini scored 0 projects (run 1) | jury-quality | No Gemini perspective in jury | API failures, not model abstention | Open |
| Grok4 scored 0 projects | jury-quality | No right-adjacent perspective | API failures | Open |
| One duplicate URL in ranking batches | data-quality | trends.whotargets.me appeared twice | Deduplicated during merge; higher score kept | Closed |
| Non-AI projects capped at ~90/100 | constitution-design | Structural bias toward AI projects | Documented in constitution synthesis notes and reflection | Documented |
| No underdog protection | constitution-design | Under-resourced projects disadvantaged | Evidenced from evaluator profile; documented in reflection | Documented |

---

### Popularity Risk — Top 10 Highest-Risk Projects

Based on ranking-table.csv pop_risk=high projects in the top 30:

- AlgorithmWatch (87.5, high)
- Polis (87.4, high)
- Matrix (86.4, high)
- vTaiwan (84.5, high)
- Decidim (76.5, high)
- Mastodon (74.6, high)

---

### Decisions Made During This Run

1. **Ranking merge:** 4 batch CSVs merged; 1 duplicate URL deduplicated (higher score kept); re-sorted by score descending and re-ranked.
2. **Jury aggregation:** Used only run 1 data; median of available model scores per project; documented 402 limitations prominently.
3. **No retry of jury runs:** API credits exhausted; documented limitation and recommended re-run.
