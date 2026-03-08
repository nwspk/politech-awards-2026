#!/bin/bash
# v6 pipeline runner — run all evals, union, deliberations, and algorithm for Grok / Claude / Kimi.
# Usage: from repo root, with OPENROUTER_API_KEY set:
#   ./scripts/run-v6-pipeline.sh
# Or on a server (runs in foreground; use nohup or tmux for long run):
#   nohup ./scripts/run-v6-pipeline.sh >> v6-pipeline.log 2>&1 &
set -e
cd "$(dirname "$0")/.."

if [ -z "${OPENROUTER_API_KEY}" ]; then
  echo "Error: OPENROUTER_API_KEY is not set. Export it or source .env.v6"
  exit 1
fi

echo "Starting v6 pipeline at $(date)"

echo "1/4 — Evals (Grok, Claude, Kimi)..."
npx tsx scripts/itn-a-eval.ts --setup grok --model x-ai/grok-4.1-fast
npx tsx scripts/itn-a-eval.ts --setup all-claude --model anthropic/claude-sonnet-4
npx tsx scripts/itn-a-eval.ts --setup all-kimi --model moonshotai/kimi-latest

echo "2/4 — Top 100 greens union..."
npx tsx scripts/top-100-greens-from-assessments.ts --union \
  cache/assessments-grok.json cache/assessments-all-claude.json cache/assessments-all-kimi.json \
  --out cache/pilot-union-top100.json

echo "3/4 — Deliberations..."
npx tsx scripts/itn-a-deliberate.ts --setup grok --shortlist-file cache/pilot-union-top100.json --min-greens 2 --model x-ai/grok-4.1-fast
npx tsx scripts/itn-a-deliberate.ts --setup all-claude --shortlist-file cache/pilot-union-top100.json --min-greens 2 --model anthropic/claude-sonnet-4
npx tsx scripts/itn-a-deliberate.ts --setup all-kimi --shortlist-file cache/pilot-union-top100.json --min-greens 2 --model moonshotai/kimi-latest

echo "4/4 — Algorithm (results per setup)..."
ASSESSMENTS_PATH=cache/assessments-grok.json DELIBERATION_PATH=cache/deliberation-grok.json RESULTS_PATH=results-grok.json npx tsx the-algorithm.ts
ASSESSMENTS_PATH=cache/assessments-all-claude.json DELIBERATION_PATH=cache/deliberation-all-claude.json RESULTS_PATH=results-all-claude.json npx tsx the-algorithm.ts
ASSESSMENTS_PATH=cache/assessments-all-kimi.json DELIBERATION_PATH=cache/deliberation-all-kimi.json RESULTS_PATH=results-all-kimi.json npx tsx the-algorithm.ts

echo "v6 pipeline finished at $(date)"
