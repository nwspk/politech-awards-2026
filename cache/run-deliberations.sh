#!/bin/bash
# Run remaining v6 deliberations + algorithm + pick-winner (242-entry shortlist, ≥1-of-3 rule)
# DELIB 1 (grok) already complete. Resuming from DELIB 2.
# set -e removed — continue even if a single jury fails
cd /root/politech-awards-2026
source .env.v6

LOG=/root/politech-awards-2026/cache/v6-pipeline.log
SHORTLIST="cache/pilot-shortlist.json"
MERGED="cache/assessments-merged.json"

log() { echo "[$(date '+%H:%M:%S')] $*" | tee -a "$LOG"; }

log "=== v6 deliberations resuming (242-entry shortlist, ≥1-of-3) ==="
log "DELIB 1/6 — grok jury: ALREADY DONE (skipping)"

# ── Phase 2: Deliberations ───────────────────────────────────────────────────
# Claude is structurally conservative (0 entries with ≥2 pure greens).
# Use --min-greens 0 and rely on --shortlist-file for filtering.
log "DELIB 2/6 — claude jury (anthropic/claude-sonnet-4-6)"
npx tsx scripts/itn/itn-a-deliberate.ts \
  --setup all-claude --shortlist-file "$SHORTLIST" --min-greens 0 \
  --model anthropic/claude-sonnet-4-6 2>&1 | tee -a "$LOG" || log "DELIB 2/6 FAILED — continuing"
log "DELIB 2/6 DONE"

# Kimi has 33 entries with ≥1 pure green in shortlist — use --min-greens 1
log "DELIB 3/6 — kimi jury (moonshotai/kimi-k2)"
npx tsx scripts/itn/itn-a-deliberate.ts \
  --setup all-kimi --shortlist-file "$SHORTLIST" --min-greens 1 \
  --model moonshotai/kimi-k2 2>&1 | tee -a "$LOG" || log "DELIB 3/6 FAILED — continuing"
log "DELIB 3/6 DONE"

log "DELIB 4/6 — mixed jury (openai/gpt-4o)"
npx tsx scripts/itn/itn-a-deliberate.ts \
  --setup mixed \
  --assessments-file "$MERGED" \
  --output-file cache/deliberation-mixed.json \
  --shortlist-file "$SHORTLIST" --min-greens 0 \
  --model openai/gpt-4o 2>&1 | tee -a "$LOG" || log "DELIB 4/6 FAILED — continuing"
log "DELIB 4/6 DONE"

log "DELIB 5/6 — adversarial jury (deepseek/deepseek-r1)"
npx tsx scripts/itn/itn-a-deliberate.ts \
  --setup adversarial \
  --assessments-file "$MERGED" \
  --output-file cache/deliberation-adversarial.json \
  --shortlist-file "$SHORTLIST" --min-greens 0 \
  --model deepseek/deepseek-r1 2>&1 | tee -a "$LOG" || log "DELIB 5/6 FAILED — continuing"
log "DELIB 5/6 DONE"

log "DELIB 6/6 — specialist jury (gemini+llama+mistral)"
npx tsx scripts/itn/itn-a-deliberate.ts \
  --setup specialist \
  --assessments-file "$MERGED" \
  --output-file cache/deliberation-specialist.json \
  --shortlist-file "$SHORTLIST" --min-greens 0 \
  --model-political  google/gemini-2.5-pro \
  --model-relational meta-llama/llama-3.3-70b-instruct \
  --model-experimental mistralai/mistral-large 2>&1 | tee -a "$LOG" || log "DELIB 6/6 FAILED — continuing"
log "DELIB 6/6 DONE"

# ── Phase 2b: Algorithm ───────────────────────────────────────────────────────
log "ALGO — Running the-algorithm.ts for all 6 juries..."
ASSESSMENTS_PATH=cache/assessments-grok.json      DELIBERATION_PATH=cache/deliberation-grok.json        RESULTS_PATH=cache/results-grok.json        npx tsx the-algorithm.ts 2>&1 | tee -a "$LOG" || log "ALGO grok FAILED"
ASSESSMENTS_PATH=cache/assessments-all-claude.json DELIBERATION_PATH=cache/deliberation-all-claude.json  RESULTS_PATH=cache/results-all-claude.json   npx tsx the-algorithm.ts 2>&1 | tee -a "$LOG" || log "ALGO claude FAILED"
ASSESSMENTS_PATH=cache/assessments-all-kimi.json   DELIBERATION_PATH=cache/deliberation-all-kimi.json    RESULTS_PATH=cache/results-all-kimi.json     npx tsx the-algorithm.ts 2>&1 | tee -a "$LOG" || log "ALGO kimi FAILED"
ASSESSMENTS_PATH="$MERGED"                         DELIBERATION_PATH=cache/deliberation-mixed.json       RESULTS_PATH=cache/results-mixed.json        npx tsx the-algorithm.ts 2>&1 | tee -a "$LOG" || log "ALGO mixed FAILED"
ASSESSMENTS_PATH="$MERGED"                         DELIBERATION_PATH=cache/deliberation-adversarial.json RESULTS_PATH=cache/results-adversarial.json   npx tsx the-algorithm.ts 2>&1 | tee -a "$LOG" || log "ALGO adversarial FAILED"
ASSESSMENTS_PATH="$MERGED"                         DELIBERATION_PATH=cache/deliberation-specialist.json  RESULTS_PATH=cache/results-specialist.json    npx tsx the-algorithm.ts 2>&1 | tee -a "$LOG" || log "ALGO specialist FAILED"
log "ALGO DONE"

# ── Phase 3: Pick winner ──────────────────────────────────────────────────────
log "PICK — Selecting highest-confidence jury..."
npx tsx scripts/v6/pick-v6-winner.ts 2>&1 | tee -a "$LOG" || log "PICK FAILED"

log "=== v6 pipeline COMPLETE ==="
