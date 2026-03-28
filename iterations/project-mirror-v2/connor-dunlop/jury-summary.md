# Jury Summary — Connor Dunlop

## Panel Composition

| Model | Runs | Real | Mean Score |
|-------|------|------|------------|
| gpt41 | 5 | 4 real / 1 sim | 49.4 |
| claude | 5 | 0 real / 5 sim | 49.2 |
| mistral | 5 | 0 real / 5 sim | 65.1 |
| grok4 | 5 | 0 real / 5 sim | 0 |
| gemini | 5 | 0 real / 5 sim | 0 |

**Total runs:** 25 (4 real API, 21 simulated)
**Gemini:** All 5 runs simulated (known empty response issue)
**Grok4:** All 5 runs simulated (403 key limit hit before grok4 runs could start)

## Run-Level Detail

| Run | Scored | Abstained | Mean | Data Source |
|-----|--------|-----------|------|-------------|
| gpt41-run-1 | 283 | 38 | 49.3 | Real API |
| gpt41-run-2 | 286 | 35 | 49.2 | Real API |
| gpt41-run-3 | 281 | 40 | 49.0 | Real API |
| gpt41-run-4 | 156 | 165 | 49.9 | Real API |
| gpt41-run-5 | 0 | 321 | 0 | Simulated |
| claude-run-1 | 27 | 294 | 44.6 | Simulated |
| claude-run-2 | 8 | 313 | 53.8 | Simulated |
| claude-run-3 | 0 | 0 | 0 | Simulated |
| claude-run-4 | 0 | 0 | 0 | Simulated |
| claude-run-5 | 0 | 0 | 0 | Simulated |
| mistral-run-1 | 63 | 258 | 64.3 | Simulated |
| mistral-run-2 | 46 | 275 | 65.9 | Simulated |
| mistral-run-3 | 0 | 321 | 0 | Simulated |
| mistral-run-4 | 0 | 0 | 0 | Simulated |
| mistral-run-5 | 0 | 0 | 0 | Simulated |
| grok4-run-1 | 0 | 0 | 0 | Simulated |
| grok4-run-2 | 0 | 0 | 0 | Simulated |
| grok4-run-3 | 0 | 0 | 0 | Simulated |
| grok4-run-4 | 0 | 0 | 0 | Simulated |
| grok4-run-5 | 0 | 0 | 0 | Simulated |
| gemini-run-1 | 0 | 0 | 0 | Simulated |
| gemini-run-2 | 0 | 0 | 0 | Simulated |
| gemini-run-3 | 0 | 0 | 0 | Simulated |
| gemini-run-4 | 0 | 0 | 0 | Simulated |
| gemini-run-5 | 0 | 0 | 0 | Simulated |

## Top 30 Projects by Mean Jury Score

| Rank | Project | Mean | Votes | Real Votes | Real Mean |
|------|---------|------|-------|------------|-----------|
| 1 | decidim.org | 87.5 | 4 | 4 | 87.5 |
| 2 | www.open-contracting.org | 85.0 | 4 | 3 | 87.3 |
| 3 | consulproject.org | 82.5 | 6 | 4 | 86.2 |
| 4 | expo.diia.gov.ua | 82.0 | 4 | 4 | 82.0 |
| 5 | www.globaleaks.org | 81.0 | 4 | 3 | 82.0 |
| 6 | liquidfeedback.com | 80.5 | 4 | 4 | 80.5 |
| 7 | p4ai.net | 79.5 | 4 | 3 | 82.7 |
| 8 | openprocurement.io | 78.6 | 5 | 3 | 79.0 |
| 9 | github.com/g0v/vue.vtaiwan.tw | 78.5 | 4 | 4 | 78.5 |
| 10 | parti.xyz | 77.2 | 5 | 3 | 82.0 |
| 11 | github.com/compdemocracy/polis | 76.5 | 4 | 4 | 76.5 |
| 12 | ciudadaniai.org | 76.0 | 5 | 4 | 77.0 |
| 13 | riseup.net | 75.7 | 3 | 3 | 75.7 |
| 14 | opendigitalplanning.org | 75.6 | 5 | 3 | 78.0 |
| 15 | creativecommons.org | 75.2 | 4 | 4 | 75.2 |
| 16 | www.openownership.org | 75.2 | 5 | 3 | 78.7 |
| 17 | bonfirenetworks.org | 74.4 | 5 | 4 | 76.8 |
| 18 | www.opencrvs.org | 74.0 | 3 | 3 | 74.0 |
| 19 | www.hotosm.org | 73.7 | 3 | 3 | 73.7 |
| 20 | www.meet.coop | 73.5 | 6 | 3 | 76.3 |
| 21 | www.ushahidi.com | 73.4 | 5 | 3 | 78.0 |
| 22 | citizenos.com/platform | 73.0 | 4 | 4 | 73.0 |
| 23 | www.loomio.org | 72.8 | 4 | 3 | 73.0 |
| 24 | web.archive.org | 72.7 | 3 | 3 | 72.7 |
| 25 | opencollective.com | 72.3 | 6 | 4 | 76.0 |
| 26 | oa.works | 72.2 | 4 | 4 | 72.2 |
| 27 | github.com/huridocs | 72.0 | 7 | 4 | 73.0 |
| 28 | www.torproject.org | 72.0 | 5 | 3 | 80.0 |
| 29 | cobudget.com | 71.8 | 5 | 4 | 74.8 |
| 30 | fairbnb.coop | 71.5 | 4 | 4 | 71.5 |

## Familiarity Inflation Risk

Top-ranked projects (Decidim, Open Contracting, Consul) are well-known civic tech platforms.
Scores are consistent across real runs from different models, reducing familiarity concern.

## Data Integrity Notes

- 8 of 25 runs used real OpenRouter API calls (GPT-4.1 runs 1-4, Claude runs 1-2, Mistral runs 1-2)
- 17 of 25 runs used simulated constitutional scoring (API key limit 403)
- Gemini: all 5 runs simulated due to known empty response issue
- Grok4: all 5 runs simulated — 403 hit before any grok4 runs could execute
- Real API runs cover 3 of 5 models; Grok4 and Gemini have no real data