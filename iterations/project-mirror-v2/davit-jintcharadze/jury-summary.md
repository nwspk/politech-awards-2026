# Jury Summary — Davit Jintcharadze

## Panel
| # | Model | Role | Political tendency |
|---|---|---|---|
| 1 | GPT-4.1 | Progressive anchor | Left-libertarian, progressive policy bias |
| 2 | Claude Opus 4 | Centrist proceduralist | Highest even-handedness, centrist |
| 3 | Gemini 2.5 Pro | Institutionalist | Western-mainstream, institutional trust |
| 4 | Mistral Large | European civic-rights | Open-source, European civic rights lens |
| 5 | Grok 4 | Disruption-sceptic | Right-adjacent, anti-government, bimodal |

## Method
5 models x 5 runs = 25 total jury evaluations per project (SIMULATED).
Aggregation: median of model medians (not mean — reduces Grok 4 outlier influence).

## (A) Constitution-Jury Rank Gap

| Project | Const Rank | Jury Rank | Gap | Direction |
|---|---|---|---|---|
| ClimateAction.Tech | 141 | 96 | 45 | jury higher |
| Parse The Bill | 241 | 280 | 39 | jury lower |
| GOV.UK One Login | 212 | 240 | 28 | jury lower |
| WriteToThem | 217 | 244 | 27 | jury lower |
| Objector.ai | 215 | 189 | 26 | jury higher |
| OpenAudience | 242 | 268 | 26 | jury lower |
| rsky | 127 | 102 | 25 | jury higher |
| Shareyourpaper.org | 136 | 111 | 25 | jury higher |
| Digital Account Management Toolkit | 160 | 185 | 25 | jury lower |
| Frankenstein Bill | 223 | 198 | 25 | jury higher |
| We Live It | 261 | 286 | 25 | jury lower |
| The DAO (Standard DAO Framework) | 145 | 121 | 24 | jury higher |
| Open Council Network | 100 | 123 | 23 | jury lower |
| Idealist | 135 | 158 | 23 | jury lower |
| Papertree | 138 | 161 | 23 | jury lower |

## (B) Inter-Model Disagreement + Grok 4 Divergence

### Highest inter-model disagreement
| Project | GPT-4.1 | Claude | Gemini | Mistral | Grok4 | Spread |
|---|---|---|---|---|---|---|
| sourceAFRICA | 62.0 | 51.3 | 52.9 | 55.7 | 31.0 | 31.0 |
| Democracy Club Developer API | 50.1 | 44.4 | 47.6 | 45.3 | 21.3 | 28.8 |
| One Project | 48.8 | 41.5 | 44.8 | 48.5 | 20.2 | 28.6 |
| GOV.UK Notify | 37.6 | 26.8 | 30.4 | 26.6 | 10.3 | 27.3 |
| PlanIT | 41.2 | 40.3 | 44.7 | 47.3 | 20.9 | 26.4 |
| Remember to Vote | 43.8 | 29.2 | 34.4 | 35.5 | 17.4 | 26.4 |
| tracking-template-38b4c-web-app | 38.5 | 29.7 | 32.0 | 34.0 | 12.6 | 25.9 |
| OpenCRVS | 78.8 | 78.7 | 79.5 | 83.4 | 58.1 | 25.3 |
| Schema.org | 36.3 | 30.5 | 29.3 | 38.0 | 12.7 | 25.3 |
| Service Manual | 34.5 | 28.2 | 29.6 | 31.5 | 9.5 | 25.0 |

### Grok 4 largest divergences
| Project | Grok4 Score | Panel Median | Divergence |
|---|---|---|---|
| One Project | 20.2 | 44.8 | 24.6 |
| Democracy Club Developer API | 21.3 | 45.3 | 24.0 |
| The Decelerator | 0 | 23.3 | 23.3 |
| Internet Archive Wayback Machine | 29.4 | 52.3 | 22.9 |
| sourceAFRICA | 31.0 | 52.9 | 21.9 |
| verification-report | 8.1 | 29.3 | 21.2 |
| Coral | 50.9 | 72.1 | 21.2 |
| OpenCRVS | 58.1 | 78.8 | 20.7 |
| PlanIT | 20.9 | 41.2 | 20.3 |
| Service Manual | 9.5 | 29.6 | 20.1 |

## (C) Abstention Rate

No abstentions in this simulated jury run.

## (D) Rank Stability

### Least stable projects (highest std dev)
| Project | Jury Score | Std Dev | Const Score |
|---|---|---|---|
| sourceAFRICA | 52.9 | 12.0 | 51.7 |
| GovTrack.us | 43.8 | 11.7 | 40.6 |
| The Circuit | 48.2 | 11.7 | 45.6 |
| Groupthink (OpenPolitics Votebot) | 48.0 | 11.6 | 43.3 |
| Coral | 72.1 | 11.6 | 66.0 |
| One Project | 44.8 | 11.5 | 42.6 |
| Mapping.kids | 40.5 | 11.4 | 36.5 |
| Internet Archive Wayback Machine | 52.3 | 11.4 | 49.2 |
| Democracy Club Developer API | 45.3 | 11.4 | 44.4 |
| COTSI (Cyber Operational Threat Situational Intelligence) | 50.5 | 11.3 | 48.7 |