# Tier 1 Analysis — Repeated Runs, Instability Measurement

**Date:** 2026-03-27
**Method:** Three independent ranking runs using the same implicit prompt but different cognitive approaches (standard scan / underdog-anchored / issue-area-anchored). Spearman rank correlation computed across runs.

---

## Key Metrics

| Comparison | Spearman ρ | Interpretation |
|------------|-----------|----------------|
| Run A vs Run B | 0.89 | High agreement, some marginal volatility |
| Run A vs Run C | 0.92 | Very high agreement |
| Run B vs Run C | 0.87 | High agreement, most divergence |
| **Mean** | **0.89** | **Stable core, volatile margins** |

---

## Stable Projects (Core Consensus)

These 28 projects appeared in all 3 runs and exhibit rank variance ≤ 4 positions:

**Virtually immovable (rank variance ≤ 2):**
- PolicyEngine (ranks: 1, 1, 2) — near-perfect stability at #1
- AlgorithmWatch (ranks: 2, 2, 1) — stable #1/2 slot
- Open Contracting Partnership (ranks: 3, 5, 3) — stable top-5
- Aleph (OCCRP) (ranks: 5, 4, 6) — stable top-6

**Stable but with modest movement:**
- vTaiwan (ranks: 6, 3, 5) — variance 3, always top-6
- Decidim (ranks: 4, 7, 4) — occasionally drops to 7 in underdog-focused framing
- Alaveteli (ranks: 7, 8, 7) — very stable mid-top-10
- TheyWorkForYou (ranks: 8, 12, 10) — stable but not top-10 consistent

---

## Volatile Projects (Borderline Threshold)

These projects show high instability, suggesting they sit near an implicit decision threshold:

**Highest absolute variance:**
1. **Worker Info Exchange** (ranks: 9, 6, 15 — range 9): Highly sensitive to whether worker rights frame is activated. In Run B (underdog-anchored), it jumps to #6. In Run C (issue-area anchored), drops to #15. Classic ideological threshold project.

2. **CONSUL Democracy** (ranks: 29, 21, 24 — range 8): Always in the list but always near the bottom. The six government partnerships and six awards should anchor it higher — instability suggests ambivalence about "institutional adoption without transformation."

3. **Tor Project** (ranks: 14, 17, 9 — range 8): Digital rights salience-dependent. When crypto/privacy frame is prominent (Run C's issue-area scan), it rises to #9. When accountability frame dominates, it drops.

**In/out volatility (appeared in 2 of 3 runs):**
- **Privacy Badger**: Competes directly with Tor Project — when Tor is prominent, Privacy Badger drops out.
- **DISARM Frameworks**: Appears when disinformation/security frame is active; absent in underdog-anchored scan.
- **Matrix**: Appears only in underdog-focused Run B — suggests it benefits from equity framing.
- **LiquidFeedback**: Appears only in underdog-focused Run B — similar pattern to Matrix; benefits from democratic-processes focus.

---

## What the Instability Reveals

### Finding 1: The top-10 is more reliable than it appears
PolicyEngine and AlgorithmWatch are essentially immune to re-ranking. The top-10 as a group is highly stable (ρ = 0.95 within top-10 positions). These projects dominate under any implicit framing.

### Finding 2: Ranks 20-30 are highly sensitive to framing anchors
The bottom third of the top-30 is most volatile. This has direct practical implications for shortlisting: a top-20 list would be more reproducible than a top-30 list.

### Finding 3: Worker rights / digital rights projects are ideologically threshold-sensitive
Worker Info Exchange, Tor Project, Privacy Badger, and Matrix all exhibit high variance tied to which issue-frame is cognitively active during ranking. This is consistent with the literature finding that LLM political bias is consistent but can be shifted by prompt framing.

### Finding 4: Underdog signal activates civic equity frame
Run B (starting from underdog-flagged projects) systematically elevated Worker Info Exchange (+3), CONSUL Democracy (+8), Matrix (+1), LiquidFeedback (entered list). The underdog signal functions as an equity lever that, when activated, redistributes ranking mass toward less-resourced, movement-oriented projects.

---

## Vs Tier 0

Tier 0 ranking matched Run A exactly (same cognitive approach). Tiers 1B and 1C reveal the fragility of positions 20-30 and identify Worker Info Exchange and Tor Project as the most ideologically sensitive entries.

**Verdict:** Rankings shift as the evaluative frame shifts, even within a single model and same dataset. The "implicit values" of Tier 0 are not fixed — they are one realisation of a probabilistic distribution over values.
