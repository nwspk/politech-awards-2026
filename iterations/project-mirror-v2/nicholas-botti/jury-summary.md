# Jury Summary
## Evaluator: Nicholas Botti
## Date: 2026-03-28

---

### Important Note on Jury Data Quality

OpenRouter API credit exhaustion (HTTP 402) severely limited jury data collection. Only run 1 per model contains any real scores, and even run 1 suffered partial failures:

| Model | Projects Scored (Run 1) | API Errors (Run 1) | Runs 2-5 |
|---|---|---|---|
| gpt41 | 153/321 | 140 | All 402 errors |
| claude | 46/321 | 255 | All 402 errors |
| gemini | 0/321 | 321 | All 402 errors |
| mistral | 25/321 | 228 | All 402 errors |
| grok4 | 0/321 | 317 | All 402 errors |

Effective jury panel: **GPT-4.1 (153 projects), Claude (46), Mistral (25)**. Gemini and Grok4 scored zero projects.

---

### A. Constitution-Jury Rank Gap

**Jury ranked higher (gap > 20):**
- **docs.plus**: Jury #38, Const #273, Gap +235
- **FixMyBlock**: Jury #37, Const #243, Gap +206
- **CoTech**: Jury #48, Const #230, Gap +182
- **Pastecal**: Jury #102, Const #282, Gap +180
- **Digital Account Management Toolkit**: Jury #107, Const #285, Gap +178
- **Dovetail**: Jury #119, Const #293, Gap +174
- **The Commons Social Change Library**: Jury #74, Const #244, Gap +170
- **Filmot**: Jury #125, Const #294, Gap +169
- **Idealist**: Jury #53, Const #221, Gap +168
- **Anna's Archive**: Jury #118, Const #286, Gap +168

**Jury ranked lower (gap < -20):**
- **DISARM Frameworks**: Jury #108, Const #11, Gap -97
- **Creative Commons**: Jury #109, Const #25, Gap -84
- **Matrix**: Jury #84, Const #3, Gap -81
- **Mastodon**: Jury #85, Const #9, Gap -76
- **Community Notes (Birdwatch) Analysis Tool**: Jury #110, Const #47, Gap -63
- **UK Policy Dojo**: Jury #132, Const #82, Gap -50
- **Full Fact AI**: Jury #83, Const #36, Gap -47
- **OA.Report**: Jury #120, Const #91, Gap -29

---

### B. Inter-Model Disagreement

Limited to 42 projects scored by 2+ models.

### C. Abstention Analysis

- Projects with jury scores: 139/321
- Scored by 2+ models: 42
- Primary cause: API failures, not model abstention

### D. Rank Stability

Not assessable — only 1 run per model has data.

### Grok4 Divergence

Grok4 scored 0 projects. No divergence analysis.
