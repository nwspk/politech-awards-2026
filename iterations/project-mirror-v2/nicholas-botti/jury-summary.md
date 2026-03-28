# Jury Summary
## Evaluator: Nicholas Botti
## Date: 2026-03-28

---

### Important Note on Jury Data Quality

OpenRouter API credit exhaustion (HTTP 402) limited jury data. Only select runs per model contain real scores:

| Model | Good Runs | Projects Scored | Runs Failed |
|---|---|---|---|
| gpt41 | 3 (runs 1–3) | ~135/run | Runs 4–5: 402 errors |
| claude | 1 (run 1) | 130/321 | Runs 2–5: 402 errors |
| grok4 | 2 (runs 1–2) | ~134/run | Runs 3–5: 402 errors |
| mistral | 1 (run 1) | 132/321 | Runs 2–5: 402 errors |
| gemini | 0 | 0/321 | All runs failed (parse + 402 errors) |

Effective jury panel: **GPT-4.1 (3 runs), Grok4 (2 runs), Claude (1 run), Mistral (1 run)** — 7 good run files total. Gemini excluded entirely.

Jury score computed as mean of model medians across good runs per project. Coverage: **133 of 321 projects** have jury scores (URL matching against dossier data).

---

### A. Constitution-Jury Rank Gap

Gap = jury_rank − const_rank. Positive = jury ranks the project higher (familiarity inflation suspect). Negative = constitution ranks higher.

**Jury ranked much higher (gap > 10):**
- **Cortico**: C#16, J#90, Gap +74 — jury models see deliberative tech value; constitution flags thin deployment evidence
- **Overton**: C#56, J#92, Gap +36 — policy tracking tool; jury rewards accessibility, constitution penalises narrow scope
- **Gender Pay Gap Service**: C#66, J#88, Gap +22 — known UK government service; jury familiarity inflates score vs constitutional infrastructure weight

**Jury ranked much lower (constitution ranks higher):**
- **meet.coop**: C#291, J#24, Gap −267 — jury models rate cooperative infra highly; constitution penalises absence of regulatory/AI governance framing
- **WhatGov**: C#279, J#30, Gap −249 — parliamentary accountability tool; jury rewards civic transparency value
- **Papertree**: C#314, J#75, Gap −239 — constitution scores near-zero (thin dossier, no AI angle); jury models see open-access value

The large negative gaps reflect the constitution's sharp penalisation of projects without AI institutional safety or regulatory infrastructure hooks — jury models apply more general civic tech criteria.

---

### B. Inter-Model Agreement

7 good run files across 4 models. Projects scored by all 4 models: ~133 projects. Score correlation high within GPT-4.1's 3 runs (expected). Cross-model spread wider: GPT-4.1 tends to reward well-documented projects most; Claude and Mistral show more variance on niche tools.

### C. Coverage

- Projects with jury scores: **133/321** (41%)
- Not scored: 188 projects — primarily due to URL mismatches between ranking-table.csv (uses canonical/GitHub URLs) and dossier filenames
- Gemini excluded (0 valid runs)

### D. Rank Stability

GPT-4.1: 3 runs available — scores consistent within ±3 points for most projects. Grok4: 2 runs — similar consistency. Claude and Mistral: single runs each; stability unmeasurable.

---

### Summary

Constitutional winner: **AlgorithmWatch** (87.5/100)
Jury top: **Wikidata** (jury score 88.5, all 4 models agree)
Jury #2 constitutional winner: AlgorithmWatch ranks #4 in jury (84.6)

The constitution and jury broadly agree on the top tier. Main divergence: the constitution punishes absence of AI/regulatory framing severely; jury models apply broader civic value criteria.
