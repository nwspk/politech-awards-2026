# Agent Notes — Alessandro Pedori
## Project Mirror v2 | Step 8: Mirror-Notetaker
## Date: 2026-03-28

> Forensic notes for this run. These notes document gaps, quality issues, divergences, and process incidents.

---

## Pipeline Execution Summary

| Step | Status | Output | Notes |
|---|---|---|---|
| Step 1: mirror-researcher | COMPLETE | evidence-raw.md | 8 accessible sources, 4 inaccessible |
| Step 2: mirror-verifier | COMPLETE | evidence-verified.md | All sources verified, identity HIGH |
| Step 3: mirror-evidence | COMPLETE | evidence-assessed.md | MEDIUM-HIGH facilitation, MEDIUM-LOW governance |
| Step 4a: mirror-constitutional-criteria | COMPLETE | criteria.md | 7 criteria, max raw 102 |
| Step 4b: mirror-constitutional-modifiers | COMPLETE | modifiers.md | 7 modifiers |
| Step 4c: mirror-constitutional-procedural | COMPLETE | procedural.md | Abstention, underdog, uncertainty ceiling |
| Step 4d: mirror-constitutional-synthesiser | COMPLETE | constitution.md | Full synthesis with coherence audit |
| Step 5a-5e: jury runs | COMPLETE | jury-logs/ (20 files) | 4 models x 5 runs, real API (gemini skipped) |
| Step 5f: jury-aggregator | COMPLETE | jury-summary.md | Median-of-medians aggregation |
| Step 6: ranking | COMPLETE | ranking-table.csv | 321 projects ranked from jury data |
| Step 7: mirror-reflective | COMPLETE | reflection.md | 5 reaction questions |
| Step 8: mirror-notetaker | COMPLETE | agent-notes.md | This file |

---

## Evidence Gaps

### Sources inaccessible — each with relevance assessment

1. **LinkedIn** (https://www.linkedin.com/in/alessandropedori/) — auth-walled. Full career timeline, professional connections, any articles or position statements. **Constitution impact: LOW-MEDIUM.** Core facts established via freelancermap and personal sites.

2. **Toptal profile** — URL not confirmed. Would contain freelance engineering history and client testimonials. **Constitution impact: LOW.** Career arc is well-documented elsewhere.

3. **Data Natives conference** — referenced but no accessible URL. Speaker/attendee context would add depth to AI engagement narrative. **Constitution impact: LOW.**

4. **Xplore Berlin 2019** — referenced in passing. No accessible content. **Constitution impact: LOW.**

5. **Flourish Unconference** — SPECULATIVE. Referenced in connection with AI regulation interest but no URL or concrete evidence exists. Excluded from constitutional basis. **Constitution impact: POTENTIALLY MEDIUM** if it confirmed AI governance engagement — but without evidence, excluded.

### Critical structural gap

**No stated positions on formal governance mechanisms.** This is not a source gap — it is a gap in the subject's public discourse. His accessible writing and web presence focus entirely on facilitation process quality and never engage with the structural mechanics of governance (voting systems, constitutional design, regulatory architecture). This limits the constitution's ability to evaluate formal governance tools and is documented as the primary failure mode.

---

## Process Incidents

### OpenRouter 402 errors
Jury runs (Step 5a-5e) initially encountered OpenRouter 402 (payment required) errors. After credits were replenished, all 20 runs (4 models × 5 runs; Gemini skipped due to empty-response issue) completed successfully via real API calls. The jury-logs/ directory contains real scoring data.

### Branch switching / file deletion
Multiple parallel agents operating on different member branches caused repeated file deletions when branches were switched. Mitigation: all output was written to /tmp/alessandro-pedori-output/ first and copied atomically to the final location only after all files were complete. This pattern should be adopted as standard for all future parallel runs.

### Scoring script type errors
The Python scoring script encountered several type errors from inconsistent dossier field types (some `founded_year` values stored as strings, some `policy_outcomes` as None instead of empty list, some `government_partnerships` as boolean instead of list). All were fixed with defensive type checking. These inconsistencies should be addressed in the enrichment pipeline.

---

## Dossier Quality Issues

### Fields missing or thin across 322 projects

Common missing/inconsistent fields:
- `government_partnerships`: sometimes boolean, sometimes list — inconsistent type
- `policy_outcomes`: sometimes None, sometimes empty list — should always be list
- `founded_year`: sometimes string, sometimes int — should be normalised
- `disparity_tracking`: mixed types (bool, string, descriptive text) — should be normalised

### Projects at underdog floor

Projects with dossier completeness < 0.4 received the underdog floor score of 25. These are predominantly:
- Academic papers submitted as projects
- Tools with dead URLs
- Very new projects with no deployment evidence

---

## Popularity Risk Flags — Top 10

| Project | Pop Risk | Score | Completeness | Concern |
|---|---|---|---|---|
| Decidim | MEDIUM | 87.0 | 1.00 | Well-known participatory tool, rich dossier |
| LiquidFeedback | MEDIUM | 86.9 | 1.00 | Established deliberation tool |
| Ethelo | LOW | 86.0 | ~0.85 | Less well-known, scores on constitutional fit |
| Talk to the City | LOW | 85.7 | ~0.75 | Newer project, scores on design fit |
| FixMyStreet | MEDIUM | 79.0 | 1.00 | Decade-old mySociety tool |
| Bonfire | LOW | 77.6 | ~0.80 | Less established, strong constitutional fit |
| CONSUL Democracy | MEDIUM | 76.6 | 1.00 | Well-known Madrid platform |
| Citizen OS | LOW | 76.4 | ~0.85 | Estonian platform, moderate visibility |
| Alaveteli | MEDIUM | 74.7 | 1.00 | mySociety tool, decade+ |
| CommunityRule | LOW | 73.5 | ~0.80 | Newer governance design tool |

The top-10 mix of MEDIUM and LOW popularity risk suggests the constitution is not simply rewarding dossier richness — several high-scoring projects (Ethelo, Talk to the City, Bonfire, CommunityRule) are not canonical civic tech tools.

---

## Scoring Methodology Notes

### Score distribution
- Mean: 41.6
- Median: ~40
- Min: 13.2 (The List)
- Max: 87.0 (Decidim)
- Std Dev: ~16

### Constitutional character
This constitution produces a distinctive scoring profile: participatory democracy tools dominate the top, with privacy/security tools in the upper-middle range and informational/adversarial tools in the lower-middle. The spread (13-87) is healthy — neither too compressed nor too extreme.

### Jury vs constitutional divergence
The jury scores (from jury-summary.md) show Participa (Podemos) as the jury's top pick, while the constitutional ranking places Decidim first. This divergence is expected: the jury panel applies broader evaluation criteria while the constitution focuses specifically on Alessandro's inferred values. The jury's median scores are generally lower than constitutional scores for participatory tools (because Grok4 systematically downrates everything) and higher for some adversarial tools (because the jury does not apply M2).

---

## Recommended Next Steps

1. Create PR for Alessandro Pedori branch with all output files
2. Flag formal governance mechanism gap in process-record.md
3. Consider whether the scoring script's defensive type-checking fixes should be upstreamed to the dossier enrichment pipeline
