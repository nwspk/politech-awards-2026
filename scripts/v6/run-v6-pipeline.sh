#!/bin/bash
# v6 pipeline runner — 6 juries (3 original + 3 mixed)
# Usage: from repo root, with OPENROUTER_API_KEY set:
#   bash scripts/v6/run-v6-pipeline.sh
#   bash scripts/v6/run-v6-pipeline.sh --promote
# Or on a server:
#   nohup bash scripts/v6/run-v6-pipeline.sh >> v6-pipeline.log 2>&1 &
set -e
cd "$(dirname "$0")/../.."

if [ -z "${OPENROUTER_API_KEY}" ]; then
  echo "Error: OPENROUTER_API_KEY is not set. Export it or source .env.v6"
  exit 1
fi

PROMOTE_FLAG=""
if [[ "$*" == *"--promote"* ]]; then
  PROMOTE_FLAG="--promote"
fi

SHORTLIST="cache/pilot-shortlist.json"
MERGED="cache/assessments-merged.json"

echo "=== v6 pipeline starting at $(date) ==="
echo ""

echo "1/6 — Evals (Grok, Claude, Kimi)..."
npx tsx scripts/itn-a-eval.ts --setup grok       --model x-ai/grok-4.1-fast
npx tsx scripts/itn-a-eval.ts --setup all-claude --model anthropic/claude-sonnet-4-6
npx tsx scripts/itn-a-eval.ts --setup all-kimi   --model moonshotai/kimi-k2

echo ""
echo "2/6 — Shortlist (union ≥2 greens, top-up to 100)..."
npx tsx scripts/v6/build-v6-shortlist.ts --out "$SHORTLIST"

echo ""
echo "3/6 — Merge assessments for mixed juries..."
npx tsx scripts/v6/merge-assessments.ts --out "$MERGED"

echo ""
echo "4/6 — Deliberations (6 juries)..."

npx tsx scripts/itn-a-deliberate.ts \
  --setup grok --shortlist-file "$SHORTLIST" --min-greens 2 \
  --model x-ai/grok-4.1-fast

npx tsx scripts/itn-a-deliberate.ts \
  --setup all-claude --shortlist-file "$SHORTLIST" --min-greens 2 \
  --model anthropic/claude-sonnet-4-6

npx tsx scripts/itn-a-deliberate.ts \
  --setup all-kimi --shortlist-file "$SHORTLIST" --min-greens 2 \
  --model moonshotai/kimi-k2

npx tsx scripts/itn-a-deliberate.ts \
  --setup mixed \
  --assessments-file "$MERGED" \
  --output-file cache/deliberation-mixed.json \
  --shortlist-file "$SHORTLIST" --min-greens 0 \
  --model openai/gpt-4o

npx tsx scripts/itn-a-deliberate.ts \
  --setup adversarial \
  --assessments-file "$MERGED" \
  --output-file cache/deliberation-adversarial.json \
  --shortlist-file "$SHORTLIST" --min-greens 0 \
  --model deepseek/deepseek-r1

npx tsx scripts/itn-a-deliberate.ts \
  --setup specialist \
  --assessments-file "$MERGED" \
  --output-file cache/deliberation-specialist.json \
  --shortlist-file "$SHORTLIST" --min-greens 0 \
  --model-political  google/gemini-2.5-pro \
  --model-relational meta-llama/llama-3.3-70b-instruct \
  --model-experimental mistralai/mistral-large

echo ""
echo "5/6 — Algorithm (results per jury)..."

ASSESSMENTS_PATH=cache/assessments-grok.json       DELIBERATION_PATH=cache/deliberation-grok.json       RESULTS_PATH=results-grok.json       npx tsx the-algorithm.ts
ASSESSMENTS_PATH=cache/assessments-all-claude.json  DELIBERATION_PATH=cache/deliberation-all-claude.json  RESULTS_PATH=results-all-claude.json  npx tsx the-algorithm.ts
ASSESSMENTS_PATH=cache/assessments-all-kimi.json    DELIBERATION_PATH=cache/deliberation-all-kimi.json    RESULTS_PATH=results-all-kimi.json    npx tsx the-algorithm.ts
ASSESSMENTS_PATH="$MERGED"                          DELIBERATION_PATH=cache/deliberation-mixed.json       RESULTS_PATH=results-mixed.json       npx tsx the-algorithm.ts
ASSESSMENTS_PATH="$MERGED"                          DELIBERATION_PATH=cache/deliberation-adversarial.json RESULTS_PATH=results-adversarial.json npx tsx the-algorithm.ts
ASSESSMENTS_PATH="$MERGED"                          DELIBERATION_PATH=cache/deliberation-specialist.json  RESULTS_PATH=results-specialist.json  npx tsx the-algorithm.ts

echo ""
echo "6/6 — Pick highest-confidence jury..."
npx tsx scripts/v6/pick-v6-winner.ts $PROMOTE_FLAG

echo ""
echo "=== v6 pipeline finished at $(date) ==="
