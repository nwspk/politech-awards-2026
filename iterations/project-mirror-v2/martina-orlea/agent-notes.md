# Agent Notes — Martina Orlea
## Project Mirror v2 — Step 8
## Date: 2026-03-28

## Pipeline Log
| Step | Output | Status |
|---|---|---|
| 1 researcher | evidence-raw.md | Complete |
| 2 verifier | evidence-verified.md | Complete |
| 3 evidence | evidence-assessed.md | Complete |
| 4a-d constitutional | criteria/modifiers/procedural/constitution.md | Complete |
| 5 jury (25 runs) | jury-logs/*.json, jury-summary.md | Complete (24/25 real; gemini-run-3 failed — credits exhausted) |
| 6 ranking | ranking-table.csv (307 projects scored) | Complete |
| 7 reflective | reflection.md | Complete |
| 8 notetaker | agent-notes.md | Complete |

## Key Decisions
- Real jury panel: 24/25 runs via OpenRouter (gpt41×5, claude×5, gemini×4, grok4×5, mistral×5)
- 307/321 projects received at least 1 real vote
- Underdog ON (floor 28)
- Three HIGH criteria at 20pts (60/90 raw)
- Bot scepticism modifier (unique negative)

## Top 5 (real jury data)
1. CONSUL Democracy (90.4), 2. Guardian Project (89.4), 3. Tor Project (88.4), 4. Mastodon (85.8), 5. HOT (85.8)

## Issues
- Branch switching by parallel agents repeatedly destroyed untracked files
- OpenRouter credits exhausted during run — gemini-run-3 excluded; 24/25 real runs used
