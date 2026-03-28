#!/usr/bin/env bash
# Project Mirror v2 — tmux launcher
# Creates one window per member, runs claude -p pipeline in each
# Usage: bash /root/claw/scripts/tmux-mirror-v2.sh [slug...]

SESSION="mirror"
REPO="/root/claw/politech-awards-2026"
STAGGER=5  # seconds between window starts to avoid rate limit spikes

SLUGS=(
  aadi-kulkarni
  huda-abdirahim
  tuna-acisu
  nicholas-botti
  alexandra-ciocanel
  jamie-coombes
  connor-dunlop
  francesca-galli
  davit-jintcharadze
  fatima-sarah-khalid
  gamithra-marga
  emily-mayhew
  frederick-obrien
  martina-orlea
  chris-owen
  alessandro-pedori
  david-powell
  asil-sidahmed
  hannah-orourke
)

if [ $# -gt 0 ]; then
  SLUGS=("$@")
fi

# Kill any existing session
tmux kill-session -t "$SESSION" 2>/dev/null

# Create session with first member
first="${SLUGS[0]}"
tmux new-session -d -s "$SESSION" -n "$first" -x 220 -y 50

# Create windows for remaining members
for i in "${!SLUGS[@]}"; do
  [ $i -eq 0 ] && continue
  tmux new-window -t "$SESSION" -n "${SLUGS[$i]}"
done

echo "Created $SESSION session with ${#SLUGS[@]} windows."
echo ""

# Launch one-member script in each window, staggered
for i in "${!SLUGS[@]}"; do
  slug="${SLUGS[$i]}"
  tmux send-keys -t "$SESSION:$slug" "bash /root/claw/scripts/run-one-member.sh $slug; echo '=== DONE: $slug ==='; exec bash" Enter
  echo "[$((i+1))/${#SLUGS[@]}] Started: $slug"

  if [ $i -lt $((${#SLUGS[@]}-1)) ]; then
    sleep $STAGGER
  fi
done

echo ""
echo "All ${#SLUGS[@]} pipelines launched."
echo ""
echo "Attach in iTerm2:  tmux -CC attach -t $SESSION"
echo "Navigate windows:  Ctrl+B then w (list), or Ctrl+B then 0-9"
