#!/usr/bin/env bash
# Run Project Mirror v2 pipeline for one cohort member
# Usage: bash /root/claw/scripts/run-one-member.sh <slug>

set -e

SLUG="$1"
if [ -z "$SLUG" ]; then
  echo "Usage: $0 <member-slug>"
  exit 1
fi

REPO="/root/claw/politech-awards-2026"
SOUL_FILE=".claude/agents/souls/soul-${SLUG}.md"

if [ ! -f "$REPO/$SOUL_FILE" ]; then
  echo "ERROR: soul file not found: $REPO/$SOUL_FILE"
  exit 1
fi

cd "$REPO"
source /root/claw/scripts/env.sh

echo "=== Starting Project Mirror v2: $SLUG ==="
echo "Soul file: $SOUL_FILE"
echo ""

exec claude -p \
  --add-dir /root/claw \
  --dangerously-skip-permissions \
  "You are the Project Mirror v2 agent for $SLUG. Read your full instructions at /root/claw/politech-awards-2026/${SOUL_FILE} and follow them exactly. Working directory: /root/claw/politech-awards-2026. Source /root/claw/scripts/env.sh before any API calls."
