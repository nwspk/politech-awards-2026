# Agent Notes -- Alexandra Ciocanel
## Project Mirror v2 -- Step 8: mirror-notetaker
## Date: 2026-03-28

---

## Pipeline execution summary

All pipeline stages completed. Evidence quality was high due to Alexandra's strong academic publication record (6+ peer-reviewed papers, ORCID-verified, Nuffield Foundation-funded project). The principal gap was her MoJ/Justice AI period (2024-present) where no public writing exists.

## Key decisions and rationale

### Evidence stage
- **Twitter/X inaccessible** (402 error on @alexandra_cio). Could not retrieve any social media content. This is a significant gap since real-time views on AI deployment may differ from academic publications.
- **MoJ blog absence confirmed.** Searched mojdigital.blog.gov.uk -- no posts by Ciocanel. Same for DWP Digital blog. Her public sector work is entirely private.
- **Ethnographic Research Hub (Romania)** -- no web presence found. Mentioned in bio but could not verify. Listed as UNVERIFIED in evidence-assessed.md.

### Constitutional stage
- Constitution centres two HIGH-weight criteria (accountability infrastructure + centring excluded communities) based on overwhelming evidence from her 2022-2025 publications. This creates a narrow but well-grounded evaluative frame.
- Six modifiers derived from specific papers: M1 (contestability boost) from "Algorithmic tenancies"; M2 (empowerment-frame reduction) from "Open Banking"; M3 (specific exclusion boost) from "ordinal tenant" concept; M4 (surveillance without governance reduce) from "Automation hesitancy"; M5 (community involvement boost) from HCD professional identity; M6 (purely technical reduce) from "Valuing the manual."
- Underdog protection enabled: her research specifically analyses how excluded populations produce less administrative data.

### Ranking stage
- Batch 1 (projects 1-80): hand-scored with per-project dossier analysis. AlgorithmWatch scores highest (94.8) in this batch.
- Batch 2 (projects 81-160): hand-scored. Worker Info Exchange scores highest (96.0).
- Batch 3 (projects 161-240): automated keyword scoring from dossier fields. Scores are lower on average because the keyword approach cannot replicate the nuanced constitutional interpretation of batches 1, 2, and 4.
- Batch 4 (projects 241-321): hand-scored. HURIDOCS and Turkopticon score highest (75.0 each).
- **Batch 3 methodology gap:** The automated scoring for batch 3 is less reliable than hand-scored batches. Projects in batch 3 may be under-scored relative to their actual constitutional fit. This is documented as a known limitation.

### Jury stage
- 25 jury runs completed (5 models x 5 runs) via OpenRouter API.
- **Critical panel failure:** Gemini 2.5 Pro abstained 100%. Grok 4 abstained ~99.8%. Claude Opus 4 abstained ~97.4%. Only GPT-4.1 (~35% scoring rate) and Mistral Large (~5% scoring rate) provided meaningful scores.
- The jury is functionally a 1-1.5 model panel. Results have LOW confidence for ranking purposes.
- 138 projects received at least one score; 185 received no scores from any model in any run.

### Ranking merge
- 321 unique projects ranked. One duplicate (EDGAR) removed during merge.
- Score range: 7.9 (Plausible Analytics) to 96.0 (Worker Info Exchange).
- Top 5: Worker Info Exchange, AlgorithmWatch, Framework for Meaningful Engagement 2.0, Landlord Tech Watch, HURIDOCS/Turkopticon.

## Known issues and limitations

1. **Batch 3 scoring quality.** Automated keyword-based scoring is systematically different from hand-scored batches. Projects in batch 3 may rank lower than they would under full constitutional analysis.
2. **Jury panel attrition.** 3 of 5 models effectively did not participate. Inter-model disagreement analysis is meaningless with insufficient data.
3. **MoJ period views absent.** The constitution may not reflect her current professional views on generative AI, semantic search, or LLM deployment in government.
4. **Ethnographic Research Hub unverified.** Cannot confirm or deny the Romanian co-founded organisation mentioned in her bio.
5. **Twitter/X content inaccessible.** May contain direct views on civic technology, AI accountability, or specific projects in the longlist.

## Recommendations for process-record

- The batch 3 methodology gap should be flagged in the process record as a known issue for all future runs that use automated scoring.
- The jury panel failure pattern (Gemini universal abstention, Grok 4 near-universal abstention) appears consistent across multiple member runs and may be a structural issue with the jury prompt or model behaviour rather than specific to this constitution.
- Alexandra Ciocanel's evidence base is one of the richest in the cohort due to her active academic publication record. This provides high confidence in the constitutional criteria but does not compensate for the MoJ period gap.
