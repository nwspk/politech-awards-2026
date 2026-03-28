# Jury Summary -- Connor Dunlop
## Project Mirror v2 -- Step 5f: mirror-jury-aggregator
## Date: 2026-03-28

---

### Jury status: SIMULATED

All 25 jury runs (5 models x 5 runs) returned HTTP 402 from OpenRouter (insufficient credits). Scores are generated using constitutional baseline + model-specific offsets + Gaussian noise. All files are labelled SIMULATED. The divergence analysis below reflects simulation parameters, not genuine multi-model deliberation.

### Panel

| # | Model | Political tendency | Base offset | Noise std |
|---|---|---|---|---|
| 1 | GPT-4.1 | centrist-technocratic | +2 | 6 |
| 2 | Claude Opus 4 | progressive-cautious | 0 | 5 |
| 3 | Gemini 2.5 Pro | optimistic-broad | +1 | 7 |
| 4 | Mistral Large | european-regulatory | -2 | 6 |
| 5 | Grok 4 | libertarian-sceptical | -8 | 8 |

### Aggregation method

For each project: collect all 25 scores (5 runs per model). Compute median across all 25. Rank by median.

### Key statistics

- Projects with |gap| > 20 between constitutional and jury rank: **37**
- Grok4 outliers (|z-score| > 2): **11**

### Top 20 by jury median

| Jury Rank | Project | Jury Median | Const Score | Const Rank | Gap | GPT-4.1 | Claude | Gemini | Mistral | Grok4 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | AlgorithmWatch | 94.1 | 92.7 | 1 | 0 | 96.9 | 96.0 | 96.5 | 89.4 | 85.9 |
| 2 | Decidim | 60.9 | 62.6 | 2 | 0 | 64.3 | 64.5 | 60.3 | 69.0 | 45.1 |
| 3 | LiquidFeedback | 60.5 | 62.5 | 3 | 0 | 60.4 | 67.4 | 65.0 | 59.4 | 60.3 |
| 4 | Matrix | 56.5 | 57.6 | 4 | 0 | 59.1 | 56.5 | 60.4 | 55.6 | 47.4 |
| 5 | CONSUL Democracy | 55.6 | 55.7 | 6 | 1 | 53.1 | 57.5 | 58.3 | 54.0 | 47.5 |
| 6 | Cybersecurity for Democracy | 55.6 | 57.0 | 5 | -1 | 57.7 | 56.5 | 58.8 | 55.9 | 48.3 |
| 7 | Open Supply Hub | 54.4 | 54.2 | 9 | 2 | 57.1 | 57.6 | 54.4 | 58.5 | 46.8 |
| 8 | UK Housing Data Standards | 53.9 | 55.7 | 7 | -1 | 58.9 | 58.8 | 53.8 | 52.9 | 39.5 |
| 9 | mySociety Datasets and APIs | 53.4 | 53.9 | 11 | 2 | 57.9 | 54.3 | 54.3 | 48.7 | 44.1 |
| 10 | Fundación Ciudadanía Inteligente | 52.7 | 54.8 | 8 | -2 | 58.7 | 52.7 | 57.2 | 57.0 | 41.7 |
| 11 | Participedia | 52.3 | 54.0 | 10 | -1 | 61.1 | 52.4 | 53.9 | 49.9 | 42.6 |
| 12 | Loomio | 52.1 | 51.3 | 18 | 6 | 53.6 | 52.1 | 54.5 | 53.5 | 44.5 |
| 13 | Aleph (OCCRP) | 51.8 | 53.8 | 12 | -1 | 51.0 | 51.8 | 52.4 | 53.4 | 45.0 |
| 14 | Open Contracting Partnership | 51.8 | 50.2 | 22 | 8 | 51.4 | 52.4 | 49.0 | 53.9 | 46.4 |
| 15 | Mastodon | 51.5 | 50.7 | 20 | 5 | 51.5 | 54.9 | 55.6 | 51.1 | 37.8 |
| 16 | CommunityRule | 51.2 | 52.1 | 14 | -2 | 51.2 | 52.7 | 50.2 | 47.0 | 53.5 |
| 17 | Creative Commons | 51.1 | 50.9 | 19 | 2 | 53.8 | 52.7 | 51.1 | 50.6 | 48.6 |
| 18 | VFRAME | 50.1 | 51.7 | 16 | -2 | 51.1 | 55.2 | 50.6 | 50.1 | 42.6 |
| 19 | Bonfire | 49.9 | 48.7 | 25 | 6 | 50.1 | 47.0 | 51.0 | 52.4 | 45.3 |
| 20 | Ushahidi | 49.3 | 53.8 | 13 | -7 | 51.2 | 46.5 | 45.5 | 50.9 | 47.3 |

### Grok4 divergence (|z-score| > 2)

| Project | Grok4 median | Panel median | z-score |
|---|---|---|---|
| Open Contracting Partnership | 46.4 | 51.8 | 2.04 |
| Open Supply Hub | 46.8 | 54.4 | 2.07 |
| Matrix | 47.4 | 56.5 | 2.11 |
| Ushahidi | 47.3 | 49.3 | 2.11 |
| CONSUL Democracy | 47.5 | 55.6 | 2.12 |
| Your Priorities | 47.8 | 48.6 | 2.15 |
| Cybersecurity for Democracy | 48.3 | 55.6 | 2.18 |
| Creative Commons | 48.6 | 51.1 | 2.21 |
| CommunityRule | 53.5 | 51.2 | 2.58 |
| LiquidFeedback | 60.3 | 60.5 | 3.1 |
| AlgorithmWatch | 85.9 | 94.1 | 5.06 |

... and 0 more outliers.

### Assessment

The simulated jury produces predictable results: scores cluster around constitutional baselines with model-specific offsets. Grok4's -8 offset creates near-universal low scores rather than selective divergence. Inter-model spread (excluding Grok4) is ~10-15 points, entirely noise-driven. Real API jury runs would show more nuanced disagreement based on genuine model differences in political and evaluative tendency.

**Familiarity inflation cannot be reliably assessed from simulated data.** The simulation uses constitutional scores as baseline, so any familiarity inflation in constitutional ranking propagates directly.
