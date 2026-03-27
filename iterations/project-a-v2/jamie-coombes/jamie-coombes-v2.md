# Project A v2: Jamie Coombes
## Constitutional Ranking + Synthetic Evaluator Benchmark
### Date: 2026-03-27 | Constitution: v2-fixed | Agent: v2-cohort-fellow-profiler

---

## Fellow Profile

**Name:** Jamie Coombes
**Cohort bio:** Team Lead & ML Engineer at Coefficient.ai — solving OFFICIAL-SENSITIVE AI for UK government (FCDO, HO, DCMS, DBT). Mechanistic Interpretability Research Lead, AI Safety Camp.
**Slug:** jamie-coombes
**Constitution confidence:** Medium-high

---

## Pipeline Summary

| Stage | Status | Key output |
|---|---|---|
| 1. Evidence gathering | Complete | 8 confirmed sources; new finding: Synthetic Users event (2026-03-24) |
| 2. Constitution drafting | Complete | 8 criteria, 5 modifiers, 4 procedural rules |
| 3. Constitution review | Complete | Confidence: medium-high; key gap: no public policy advocacy writing |
| 4. Dossier enrichment | Complete | 15 dossiers enriched with `ai_interpretability_layer` field |
| 5. Full ranking | Complete | 322 projects scored; mySociety Datasets and APIs #1 (62.6) |
| 6. Shortlist selection | Complete | Top 20 from full-ranking.csv used as shortlist |
| 7. Jury evaluation | Complete | 45 runs across 5 models × 3 rounds |
| 8. Inspection layer | Complete | See inspection-layer.md |
| 9. Output packaging | Complete | All files in this directory |

---

## Constitution Summary

**Core criteria (weights):**
- C1: Mechanistic Interpretability and Technical Transparency (High / weight 3)
- C2: Government AI Applicability (High / weight 3)
- C3: Systemic Risk Mitigation (High / weight 3)
- C4: Participatory Design and Community Input (Medium / weight 2)
- C5: Open Source and Open Methodology (Medium / weight 2)
- C6: Public Good Orientation over Private Capture (Medium / weight 2)
- C7: Evidence of Real-World Deployment and Impact (Low / weight 1)
- C8: Ethical AI Community Building (Low / weight 1)

**Key modifiers:**
- M1: Mechanistic interpretability as core purpose → strong boost (+8)
- M2: UK/EU government deployment with AI → moderate boost (+5/+3)
- M3: Closed/proprietary black-box AI → strong reduction (-6)
- M4: Synthetic voice as substitute for community input → conditional reduction (-4)
- M5: EA/AI alignment ecosystem → weak conditional boost (+3)

**Procedural rules:**
- R1: Mechanistic interpretability ≠ behavioral auditing (60% credit for behavioral)
- R2: For deliberation platforms, evaluate the interpretability layer not the participation layer
- R3: When C2 and C3 tie, prefer the more urgent near-term risk
- R4: Tiebreaker: prefer stronger open-source governance

---

## Full Ranking — Top 20 (Shortlist)

| Rank | Project | Final Score | Notes |
|---|---|---|---|
| 1 | mySociety Datasets and APIs | 62.6 | UK gov partnerships, open source, civic data infrastructure. M2 applies. |
| 2 | Matrix | 60.6 | Open decentralised comms standard; French DINUM deployment; C3=7. |
| 3 | Wikidata | 60.1 | Knowledge commons; C4=8, C5=9, C6=9; C1=2 (no ML layer). |
| 4 | CONSUL Democracy | 59.5 | Open-source participation platform; Madrid, Munich, UNDP; C5=9. |
| 5 | OpenCRVS | 59.5 | Civil registration infrastructure; C4=8, C5=9, C6=9; C3=2. |
| 6 | CiviCRM | 58.9 | Open-source CRM for nonprofits/NGOs; C5=9; C1=2. |
| 7 | Tor Project | 58.8 | Privacy/anonymity infrastructure; C4=8, C5=9, C6=9, C3=6. |
| 8 | AlgorithmWatch | 57.7 | AI accountability watchdog; C1=4 (behavioral), C2=8, C3=7. Jury plurality winner. |
| 9 | Mastodon C | 56.8 | Civic tech consultancy; UK gov partnerships; partial open source. |
| 10 | Open Contracting Partnership | 56.2 | Public procurement transparency; C2=9, C7=8, C6=8. |
| 11 | DISARM Frameworks | 54.1 | Disinformation infrastructure framework; C3=8; no AI interpretability. |
| 12 | Talk to the City | 55.4 | AI deliberation platform; C1=4 (behavioral), C2=8; academic/newer. |
| 13 | mySociety TheyWorkForYou | 54.9 | Parliamentary data; UK government; open source. |
| 14 | Decidim | 54.5 | Open-source participatory democracy; Barcelona, EU. |
| 15 | Full Fact AI | 53.9 | AI fact-checking; C1=3 (process); UK media/political context. |
| 16 | vTaiwan | 53.7 | Digital democracy platform; Polis-based; Taiwan gov. |
| 17 | deliberAIde | 53.5 | AI deliberation assistant; C1=4 (behavioral). |
| 18 | PolicyEngine | 53.4 | Open-source policy modelling; UK/US; C5=9. |
| 19 | Polis | 53.3 | Opinion clustering ML platform; R2 procedural penalty applies. |
| 20 | Global Fact-Check Bot | 52.8 | AI fact-checking network; multi-country. |

---

## Jury Results

### Overall Vote Distribution (45 runs, 5 models × 3 rounds × 3 runs)

| Project | Votes | % |
|---|---|---|
| AlgorithmWatch | 15 | 33% |
| mySociety Datasets and APIs | 10 | 22% |
| OpenCRVS | 8 | 18% |
| DISARM Frameworks | 6 | 13% |
| CONSUL Democracy | 3 | 7% |
| Talk to the City | 2 | 4% |
| Open Contracting Partnership | 1 | 2% |

### Model × Round Grid

| Model | R1-1 | R1-2 | R1-3 | R2-1 | R2-2 | R2-3 | R3-1 | R3-2 | R3-3 |
|---|---|---|---|---|---|---|---|---|---|
| Claude Sonnet 4.6 | AW | AW | AW | AW | mySoc | AW | TtC | DISARM | mySoc |
| GPT-4o | OCP | CONSUL | OpenCRVS | CONSUL | mySoc | AW | AW | TtC | CONSUL |
| Mistral Large | DISARM | OpenCRVS | DISARM | OpenCRVS | OpenCRVS | OpenCRVS | DISARM | DISARM | OpenCRVS |
| Llama 3 70B | mySoc | mySoc | OpenCRVS | mySoc | OpenCRVS | mySoc | mySoc | mySoc | mySoc |
| Gemini 2.5 Flash* | AW | DISARM | AW | AW | AW | AW | AW | AW | AW |

*Gemini 2.5 Flash substituted for Gemini 2.0 Flash (HTTP 400 "not a valid model ID" on OpenRouter).

Key: AW=AlgorithmWatch, mySoc=mySociety Datasets and APIs, TtC=Talk to the City, OCP=Open Contracting Partnership

### Stability Assessment

| Model | Cross-round stable? | Dominant choice | Deviation |
|---|---|---|---|
| Claude Sonnet 4.6 | No | AlgorithmWatch (R1, R2) | R3 split (TtC, DISARM, mySoc) |
| GPT-4o | No | None (6 different projects) | Most unstable model |
| Mistral Large | No | Oscillates DISARM ↔ OpenCRVS | Maps onto R3 (urgent risk) ambiguity |
| Llama 3 70B | **Yes** | mySociety Datasets and APIs | 2/9 to OpenCRVS |
| Gemini 2.5 Flash | **Yes** | AlgorithmWatch | 1/9 to DISARM |

**Overall: Unstable/Mixed** — all 3 rounds contested (<8/15). AlgorithmWatch wins plurality across all 45 votes.

---

## Key Findings

### 1. AlgorithmWatch: Rank-8 Scorer, Jury Plurality Winner

The central finding of this run: AlgorithmWatch ranks 8th in the scoring (final score 57.7) but wins 33% of all jury votes. This gap is the constitution's diagnostic. The scoring formula rewards civic infrastructure (C2, C4, C5, C6) where AlgorithmWatch is limited; the jury applies C1+C2+C3 holistically, where AlgorithmWatch's combination of behavioral AI accountability (C1=4), government monitoring (C2=8), and systemic risk (C3=7) is the best available combination on the shortlist.

No project on the 322-project list achieves mechanistic interpretability (C1 full weight) in a deployed government context. The jury recognises this and grades on the achievable curve; the scoring formula does not.

### 2. v1 Resolution

v1 produced a five-way contested jury split (deliberAIde 6/15, Polis 3/15, AlgorithmWatch 3/15, PolicyEngine 2/15, TtC 1/15). The v2 constitution's key improvements:

- **R1** (mechanistic vs behavioral) separates deliberAIde/Polis (behavioral clustering) from genuine interpretability tools
- **R2** (deliberation platform interpretability layer) penalises Polis and deliberAIde for behavioral-only transparency, dropping Polis to rank 19
- **C3** (systemic risk) now explicitly weighted as a separate criterion, pulling DISARM Frameworks into contention for Mistral models
- The v1 deliberAIde plurality does not survive into v2 — it falls to rank 17 (53.5)

The v2 split (4-way, AlgorithmWatch dominant at 33%) is meaningfully tighter than v1's 5-way split.

### 3. New Evidence: Synthetic Users Event

The Newspeak House "Synthetic Users and where to find them" event (March 24, 2026), hosted by Jamie Coombes, is the key v2 addition. It confirms:
- Participatory design is an active interest, not just a stated value
- He curated *both* pro and critical readings — he is not naively pro-synthetic-user
- The Shrestha et al "Beyond WEIRD" paper specifically signals concern about representational gaps for non-Western populations
- This supports M4 (synthetic voice substitution modifier) as legitimate, not speculative

### 4. Constitution Failure Mode Confirmed

The inspection layer documents that the constitution's stated failure mode — over-weighting civic infrastructure over AI-specific interpretability — is real and present in the top 10. The top 10 is dominated by civic data infrastructure tools (mySociety, Matrix, Wikidata, CONSUL, OpenCRVS, CiviCRM, Tor). Only AlgorithmWatch (rank 8) has a meaningful AI accountability dimension. This is not wrong — these are genuinely strong projects — but it likely doesn't reflect what Jamie Coombes would choose if asked to pick the Politech Award winner himself.

---

## Questions for Human Review

1. **AlgorithmWatch vs mySociety**: Would Jamie Coombes choose AlgorithmWatch (external AI accountability watchdog) or mySociety Datasets and APIs (civic data infrastructure enabling government AI accountability)? This is the central unresolved question.

2. **Behavioral auditing credit**: The constitution gives AlgorithmWatch C1=4 (behavioral, not mechanistic). Does Coombes value institutional accountability watchdogs even when they don't use his specific technical approach? If yes, the jury is right; if no, the scoring is right.

3. **DISARM relevance**: Does Coombes care about AI-enabled disinformation as a form of systemic AI risk (→ DISARM Frameworks, rank 11), or does his risk concern focus on government AI deployment failures? Mistral's consistent choice of DISARM suggests this question is genuinely ambiguous under the constitution.

4. **Polis rank**: Polis drops from v1 prominence to rank 19 under R2 (behavioral-only transparency penalty). Is this correct? Polis is evidence-backed, Taiwan-deployed, and directly relevant to government AI consultation. Does the interpretability penalty outweigh the deployment depth advantage?

5. **M1 modifier applicability**: No project in the 322 activates the M1 modifier (mechanistic interpretability as core purpose, +8). This means the highest possible scores are capped at the M2 level. Is this realistic, or does the 322-project list simply not include any mechanistic interpretability tools that have been nominated?

---

## Files in This Directory

| File | Description |
|---|---|
| `evidence.md` | 8 confirmed sources with confidence assessments |
| `constitution.md` | Fixed evaluative constitution (v2-fixed) |
| `full-ranking.csv` | All 322 projects scored and ranked |
| `jury-summary.md` | Full jury results with stability analysis |
| `inspection-layer.md` | Top/bottom 10, uncertainty analysis, disagreement mapping |
| `jury-runs/` | 45 JSON files (5 models × 3 rounds × 3 runs per model) |
