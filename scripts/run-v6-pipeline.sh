#!/bin/bash
# v6 pipeline — evals (all 321), shortlist (union ≥2 greens + top-up to 100), merge for mixed,
# four juries (Grok, Claude, Kimi, mixed), algorithm per jury, then pick winner by confidence.
# Usage: from repo root, with OPENROUTER_API_KEY set:
#   ./scripts/run-v6-pipeline.sh
#   ./scripts/run-v6-pipeline.sh --promote   # also run Phase 3: promote best to results.json
# Or on a server: nohup ./scripts/run-v6-pipeline.sh >> v6-pipeline.log 2>&1 &
set -e
cd "$(dirname "$0")/.."

if [ -z "${OPENROUTER_API_KEY}" ]; then
  echo "Error: OPENROUTER_API_KEY is not set. Export it or source .env.v6"
  exit 1
fi

PROMOTE=""
for a in "$@"; do
  [ "$a" = "--promote" ] && PROMOTE="--promote" && break
done

echo "Starting v6 pipeline at $(date)"

echo "1/6 — Evals (Grok, Claude, Kimi, all 321)..."
npx tsx scripts/itn-a-eval.ts --setup grok --model x-ai/grok-4.1-fast
npx tsx scripts/itn-a-eval.ts --setup all-claude --model anthropic/claude-sonnet-4
npx tsx scripts/itn-a-eval.ts --setup all-kimi --model moonshotai/kimi-k2.5

echo "2/6 — Shortlist (union ≥2 greens, top up to 100 with ≥2Y or 1G+1Y)..."
npx tsx scripts/build-v6-shortlist.ts \
  cache/assessments-grok.json cache/assessments-all-claude.json cache/assessments-all-kimi.json \
  --out cache/pilot-shortlist.json --min-size 100

echo "3/6 — Merge assessments for mixed jury..."
npx tsx scripts/merge-assessments.ts \
  cache/assessments-grok.json cache/assessments-all-claude.json cache/assessments-all-kimi.json \
  --out cache/assessments-mixed.json

echo "4/6 — Deliberations (Grok, Claude, Kimi, mixed-model jury)..."
npx tsx scripts/itn-a-deliberate.ts --setup grok --shortlist-file cache/pilot-shortlist.json --min-greens 2 --model x-ai/grok-4.1-fast
npx tsx scripts/itn-a-deliberate.ts --setup all-claude --shortlist-file cache/pilot-shortlist.json --min-greens 2 --model anthropic/claude-sonnet-4
npx tsx scripts/itn-a-deliberate.ts --setup all-kimi --shortlist-file cache/pilot-shortlist.json --min-greens 2 --model moonshotai/kimi-k2.5
npx tsx scripts/itn-a-deliberate.ts --setup mixed --shortlist-file cache/pilot-shortlist.json --min-greens 2 \
  --models "political=x-ai/grok-4.1-fast,relational=anthropic/claude-sonnet-4,experimental=moonshotai/kimi-k2.5"

echo "5/6 — Algorithm (results per jury)..."
ASSESSMENTS_PATH=cache/assessments-grok.json DELIBERATION_PATH=cache/deliberation-grok.json RESULTS_PATH=results-grok.json npx tsx the-algorithm.ts
ASSESSMENTS_PATH=cache/assessments-all-claude.json DELIBERATION_PATH=cache/deliberation-all-claude.json RESULTS_PATH=results-all-claude.json npx tsx the-algorithm.ts
ASSESSMENTS_PATH=cache/assessments-all-kimi.json DELIBERATION_PATH=cache/deliberation-all-kimi.json RESULTS_PATH=results-all-kimi.json npx tsx the-algorithm.ts
ASSESSMENTS_PATH=cache/assessments-mixed.json DELIBERATION_PATH=cache/deliberation-mixed.json RESULTS_PATH=results-mixed.json npx tsx the-algorithm.ts

echo "6/6 — Pick winner (highest confidence)..."
npx tsx scripts/pick-v6-winner.ts $PROMOTE

echo "v6 pipeline finished at $(date)"
