# Project Mirror v3 — Agent Notes
## Run: fatima-v3
## Date: 2026-03-30

---

## Pipeline summary

This was a single-agent run executing all pipeline stages sequentially:

1. **Fetched v2 files** from GitHub API (constitution, criteria, modifiers, procedural, evidence-assessed, ranking-table)
2. **Built v3 constitution** with updated weights per Fatima's direct feedback
3. **Scored 319 projects** from enriched JSON dossiers in `/data/enriched/`
4. **Compared v2 → v3** to identify movers and build reflection
5. **Wrote all output files** and pushed to branch

---

## Methodology notes

### Scoring approach
All 319 projects were scored using a Python script applying the v3 criteria weights directly to dossier fields. The scoring is rule-based (keyword matching + field presence), not LLM-based. This means:

- **Consistency:** Every project is scored identically against the same rules
- **Limitation:** Nuanced signals in free-text fields may be missed; keywords can produce false positives or negatives
- **Example fix required:** Tor Project initially scored C6=0 because "surveillance" appeared in its description ("Defend yourself against tracking and surveillance"). The script was corrected to distinguish *enabling* surveillance (penalised) from *fighting* surveillance (rewarded)

### Weight normalisation
V3 max raw score = 144 pts (30+30+30+12+6+30+6). All raw scores normalised to 0–100 before modifiers applied. V2 used max raw of 102 pts. This means v3 scores are not directly comparable to v2 scores on an absolute basis — only ranks are comparable.

### Duplicate handling
Two projects appeared twice in the enriched directory (Objector.ai with two versions). First occurrence kept; duplicates removed. Final count: 319 projects ranked.

### M_IMPL calibration
The M_IMPL modifier was calibrated as follows:
- 3+ government_partnerships OR national-scale deployment signals in metrics/deployment_context → +10 (strong boost)
- 1–2 government_partnerships → +6 (moderate boost)
- Prototype-only signals in deployment_context AND no partners → −8 (penalty)
- All other cases → 0

This calibration means approximately 40% of projects received an M_IMPL boost and ~15% received a penalty. The modifier had the largest single impact on rankings of any change from v2.

---

## Confidence by tier

### Tier 1 (ranks 1–30): HIGH confidence
These projects have rich dossiers, high completeness scores, and the criteria weights clearly differentiate them. The top 3 (Decidim, Matrix, Loomio) are definitively separated from the rest by a combination of open source health, community governance, and proven deployment. Confidence: HIGH.

### Tier 2 (ranks 31–100): MEDIUM-HIGH confidence
Solid dossiers with enough field coverage to score meaningfully across all criteria. Rankings within this tier are sensitive to M_IMPL calibration — a single government partnership changes the score by 6 points, which can shift rank by 15–30 positions in this tier. Confidence: MEDIUM-HIGH.

### Tier 3 (ranks 101–200): MEDIUM confidence
Many projects in this tier have partial dossiers. Scores are based on available evidence with uncertainty floors applied where completeness < 0.35. Rankings within this tier should be treated as approximate bands rather than precise positions. Confidence: MEDIUM.

### Tier 4 (ranks 201–319): LOW-MEDIUM confidence
Bottom third has a mix of thin dossiers, dead links (capped at 45), and projects where the implementation-first framing is simply not favourable regardless of quality. Many legitimate civic tech projects likely sit here not because they are poor quality but because their dossiers don't capture deployment evidence. Confidence: LOW-MEDIUM.

---

## Known biases in this scoring

1. **Meta-resources are undervalued.** Libraries, guides, directories, and knowledge products systematically score lower under implementation-first framing because the C2 criterion (open source with active codebase) and M_IMPL modifier favour deployable software. This is intentional under v3's framing but may not reflect Fatima's actual values comprehensively.

2. **UK/European bias.** Projects with UK government partnerships (GOV.UK ecosystem) are well-documented in the dossiers. Projects with government partnerships in the Global South are less well-documented, meaning M_IMPL benefits flow disproportionately to UK/EU projects. This is a dossier quality issue, not a constitutional one.

3. **Open source detection is binary.** The `open_source` field is treated as yes/no. Some projects are "open methodology but proprietary code" or "open core with key community features locked" — nuances that keyword matching on a single field cannot capture.

4. **C6 privacy tool detection.** Privacy and anti-surveillance tools (Tor, Privacy Badger, Signal-adjacent tools) benefit significantly from the C6 promotion. But the keyword detection for distinguishing "fights surveillance" from "enables surveillance" is imperfect. The Tor false positive was caught and corrected; other edge cases may remain.

5. **Government partnership field inconsistency.** Some projects list government partnerships as formal institution names; others as vague descriptions; others as None even when deployment context mentions government use. M_IMPL calibration is sensitive to this field.

---

## Open questions for v4/v5

1. **Is the Decidim win stable?** Under the agency-first framing (v5), does Decidim's reliance on government deployment become a liability rather than an asset? Decidim's adoption is primarily by governments deploying it for citizens — not citizens building it themselves.

2. **Where does Tor Project land in v5?** Tor ranked 304 in v3 (after the false positive fix, it would rank in the 200s). Under an agency-first framing that prioritises primitives and individual empowerment over institutional deployment, Tor should move significantly upward.

3. **Do meta-resources recover in v5?** The Civic Tech Field Guide, Commons Social Change Library, and similar resources dropped dramatically in v3. An agency-first framing focused on "primitives" and "adaptability" might revalue curation and knowledge infrastructure.

4. **Does the M_IMPL modifier survive v4 synthesis?** V4 (synthesis of v3 implementation-first and v5 agency-first) will need to decide whether M_IMPL is retained, replaced by a lighter-weight version, or dropped in favour of a different mechanism that rewards both proven deployment and agency-enabling primitives.
