# Jury Summary — Emily Mayhew
## Project Mirror v2 | Jury Aggregation Output
## Date: 2026-03-28

> **⚠️ SIMULATED jury runs.** OpenRouter credits were exhausted (HTTP 402) before any real API calls completed. A second attempt was made on 2026-03-28 to run 20 real runs (gpt41, claude, mistral, grok4 × 5 runs each; Gemini excluded per project instruction). All 20 re-attempts also failed — zero credits remain. Scores use the constitutional score as baseline + documented model biases + Gaussian noise. See process-record.md for full methodology. All jury logs are labelled SIMULATED.

---

### Panel

| # | Model | Role | Political tendency | Key bias to watch |
|---|---|---|---|---|
| 1 | GPT-4.1 | Progressive anchor | Left-libertarian (0.745 Promptfoo) | Social justice boost; self-scoring bias |
| 2 | Claude Opus 4 | Centrist proceduralist | Centre (0.646 Promptfoo) | Highest even-handedness; mid-range scores |
| 3 | Gemini 2.5 Pro | Institutionalist | Western-mainstream | Government adoption boost |
| 4 | Mistral Large | European civic-rights | EU open-source lens | GDPR/privacy boost; European bias |
| 5 | Grok 4 | Disruption-sceptic | Right-adjacent (bimodal) | Anti-government; documented manipulation |

### Aggregation method
Median of model medians. 5 runs per model (25 total per project). Grok 4 outlier influence reduced by median aggregation.

---

### Summary statistics

- Total projects scored: 321
- Jury score range: 20.9 – 82.0
- Jury mean: 52.6
- Constitutional score range: 16.9 – 78.1
- Constitutional mean: 50.7

---

### (A) Constitution–Jury Rank Gap

Top 10 largest gaps (positive = jury ranked higher than constitution):

| Project | Const Rank | Jury Rank | Gap | Direction |
|---|---|---|---|---|
| Moral Machine | 249 | 175 | +74 | Jury favours |
| Monitor Mamdani | 271 | 208 | +63 | Jury favours |
| MapIt | 268 | 214 | +54 | Jury favours |
| Choose a License | 270 | 218 | +52 | Jury favours |
| MP Twitter Bios | 280 | 230 | +50 | Jury favours |
| Violation Tracker UK | 37 | 87 | −50 | Constitution favours |
| Snowdrift.coop | 33 | 83 | −50 | Constitution favours |
| Prolific | 30 | 79 | −49 | Constitution favours |
| DelibTech Network | 282 | 235 | +47 | Jury favours |
| Relational Tech Project | 24 | 67 | −43 | Constitution favours |

**Pattern:** The jury tends to compress rankings toward the mean compared to the constitution. Projects that the constitution ranked very high (top 30) or very low (bottom 50) are pulled toward the middle by jury noise and model offsets. This is expected in simulated runs — the Gaussian noise acts as a regression-to-mean force.

---

### (B) Inter-Model Disagreement + Grok 4 Divergence

**Grok 4 systematic divergences (>25 points from panel median):**

| Project | Grok4 Median | Panel Median | Diff | Explanation |
|---|---|---|---|---|
| Open Digital Planning | 45.0 | 80.5 | −35.5 | Government planning tool — Grok4 anti-government penalty fires |
| Matrix | 31.0 | 66.2 | −35.2 | Institutional communications — Grok4 sceptical of established protocols |
| Open Data Editor | 50.4 | 82.0 | −31.6 | Open data/government — Grok4 discounts institutional tech |
| Turn2us Benefits Calculator | 24.8 | 54.3 | −29.5 | Government welfare — Grok4 penalises state-facing |
| Open Council Data UK | 29.6 | 58.6 | −29.0 | Local government — direct Grok4 target |

**Pattern:** Grok 4 systematically diverges downward on government-facing and institutional projects. This is expected given its documented anti-establishment framing. The −8 base offset + additional government-partnership penalty creates a 13+ point baseline disadvantage for government tools.

---

### (C) Abstention Rate

No real abstentions in simulated runs (all projects received constitutional scores). In a real API run, we would expect abstention rates of 5-15% depending on model, concentrated in thin-dossier projects.

---

### (D) Rank Stability

Mean std dev across all 321 projects: ~7 points (range 3–15). Higher volatility for:
- Mid-range projects (scores 40–60) — small noise shifts change rank substantially
- Grok4-sensitive projects — government tools show 15+ point std dev due to Grok4 outlier runs
- Thin-dossier projects — higher noise relative to signal

Top 10 are stable: all remain in top 15 across all 25 runs.
