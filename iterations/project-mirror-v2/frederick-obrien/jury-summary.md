# Jury Summary — Frederick O'Brien

## Panel Coverage

**Limitation: OpenRouter API credits exhausted during jury execution.** Only partial data available.

| Model | Runs attempted | Projects scored (run-1 only) | Runs 2-5 |
|---|---|---|---|
| GPT-4.1 | 5 | 45/321 (14%) | All failed (402 insufficient credits) |
| Mistral Large | 4 | 35/321 (11%) | All failed (402) |
| Claude Opus 4 | 5 | 20/321 (6%) | All failed (402) |
| Grok 4 | 4 | 2/321 (<1%) | All failed (402) |
| Gemini 2.5 Pro | 5 | 0/321 (0%) | All failed (402) |

**Total real jury scores:** 102 out of 8,025 possible (1.3% coverage)
**Unique projects with ≥1 score:** ~70

## What Happened

Each model's run-1 began making real OpenRouter API calls. Credits ran out partway through, causing the remaining calls to return HTTP 402 errors. The jury-run.py script records 402 failures as abstentions with reason "API error: Error code: 402". Runs 2-5 for all models began after credits were fully exhausted, producing zero real scores.

## Available Jury Scores (run-1 only)

### GPT-4.1 (45 projects scored)

Top-scored projects by GPT-4.1:
- Scores range from those 45 projects that were processed before credit exhaustion
- These represent the first ~45 projects in candidate list order, not a curated selection

### Mistral Large (35 projects scored)

- 35 projects scored before credit exhaustion
- Mistral brought a European civic-rights, open-source, privacy-preserving framing

### Claude Opus 4 (20 projects scored)

- 20 projects scored before credit exhaustion
- Claude brought a proceduralist, centrist framing

### Grok 4 (2 projects scored)

- Only 2 projects scored — credits exhausted almost immediately
- Insufficient data for any conclusions

### Gemini 2.5 Pro (0 projects scored)

- Zero projects scored — all calls returned 402
- No jury data available from this model

## Interpretation Guidance

Given the severe data limitations:

1. **The constitutional ranking (ranking-table.csv) is the authoritative output** — it scores all 321 projects using Frederick's evaluative constitution via keyword-based criteria extraction against dossier text
2. **Jury scores are anecdotal only** — 102 scores across ~70 projects from 3 working models cannot provide statistically meaningful cross-validation
3. **Run-to-run variance cannot be assessed** — only run-1 has any data, so jury consistency is unknown
4. **Cross-model comparison is unreliable** — different models scored different subsets (the first N projects in candidate order), making model agreement analysis impossible

## Raw Data

All 23 jury log files are preserved in `jury-logs/`. Failed runs contain full 321-project arrays where each entry records the 402 error as the abstain reason. This provides transparency about what was attempted vs what succeeded.
