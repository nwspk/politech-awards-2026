# Jury Summary — Asil Sidahmed

**Date:** 2026-03-27
**Fellow:** Asil Sidahmed
**Shortlist size:** 20 projects
**Jury design:** 5 models × 3 runs = 15 total votes (1 technical failure → 14 valid votes)

---

## Model × Run Grid

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | OpenCRVS | OpenCRVS | OpenCRVS |
| GPT-4o | Guardian Project | Guardian Project | Guardian Project |
| Mistral Large | HURIDOCS | HURIDOCS | HURIDOCS |
| Llama 3 70B | OpenCRVS | OpenCRVS | OpenCRVS |
| Gemini 2.5 Pro | [technical failure] | VFRAME | VFRAME |

---

## Vote Totals

| Project | Votes | % (of valid 14) |
|---|---|---|
| OpenCRVS | 6 | 43% |
| Guardian Project | 3 | 21% |
| HURIDOCS | 3 | 21% |
| VFRAME | 2 | 14% |
| [technical failure] | 1 | — |

**Consensus level:** Contested (<8/15 votes for any single project)
**Plurality winner:** OpenCRVS (6/15 valid votes)

---

## Notable Model Reasoning

**Claude (OpenCRVS):**
> "Civil registration is the unglamorous but foundational rights infrastructure that determines who exists in the eyes of the state — and therefore who can access healthcare, education, legal protection, and humanitarian assistance. OpenCRVS attacks this problem at the root: it is open-source, deployed exclusively in Global South countries (Bangladesh, Zambia, Senegal, Sierra Leone…"

**GPT-4o (Guardian Project):**
> "This initiative excels in human rights accountability by providing secure, privacy-enhancing mobile apps for journalists, activists, and people at risk in repressive regimes. Its deployment in Egypt, Syria, Myanmar, Iran, and over 15 other countries demonstrates its applicability in Global South and conflict contexts, directly addressing [Asil's] values…"

**Mistral (HURIDOCS):**
> "HURIDOCS exemplifies my core values by centering human rights accountability in conflict and repressive contexts (Ukraine, Turkey, Mexico), directly empowering social movements and defenders to challenge abuse of power through community-led documentation. Its open-source, Global South-deployed tools like Uwazi address systemic barriers (e.g., impunity, state violence)…"

**Llama 3 70B (OpenCRVS):**
> "This project aligns with my values because it addresses health equity and access by providing a critical gateway to healthcare services through civil registration. As a digital system, it is also more resistant to corruption and bureaucratic exclusion, which are common barriers to healthcare access in many low/middle-income countries."

**Gemini 2.5 Pro (VFRAME, runs 2 & 3):**
> "VFRAME directly serves my highest priority: achieving human rights accountability for the abuse of power in conflict settings. Its specific focus on using computer vision to document war crimes in places like Syria and Ukraine provides investigators with powerful, verifiable evidence to challenge the impunity of states and armed groups."

---

## Analysis

The four-way split maps cleanly onto four different but legitimate interpretations of Asil Sidahmed's values:

1. **OpenCRVS** (Claude + Llama3, 6 votes): The health equity as structural exclusion interpretation. Civil registration is the root cause, and OpenCRVS addresses it where Asil's Oxford research is focused — technology reducing health inequity in LMICs.

2. **Guardian Project** (GPT-4o, 3 votes): The enabling security infrastructure interpretation. Without secure communications for activists in repressive contexts, all other rights work is impossible. GPT-4o weights this enabling condition highest.

3. **HURIDOCS** (Mistral, 3 votes): The information management for accountability interpretation. Asil's MSF work required systematic documentation of medical-humanitarian violations; HURIDOCS provides the organisational infrastructure for this.

4. **VFRAME** (Gemini, 2 votes): The conflict-specific accountability interpretation. Given Asil's work in Yemen and Sudan, the most pressing need is documenting specific crimes in active conflict zones — VFRAME's war crimes documentation function.

This split reveals a genuine ambiguity: does Asil's work primarily care about *preventing* exclusion upstream (OpenCRVS → civil registration → healthcare access), *enabling* the conditions for rights work (Guardian Project → secure comms), *documenting* violations for accountability (HURIDOCS → information management), or *prosecuting* the most extreme abuses (VFRAME → war crimes evidence)? The public record does not clearly resolve this.

---

## Technical Notes

- Gemini run 1 failed: `google/gemini-2.5-pro` is a reasoning model that consumes its token budget on reasoning traces before producing output. With `max_tokens: 500`, run 1 returned empty text. Corrected to `max_tokens: 2000` for subsequent runs (2 and 3 succeeded). A retry for run 1 with a simplified prompt also failed. Treating as 1 failed vote, 14 valid.
- All other 14 runs completed without technical issues.
- All models showed perfect internal consistency (same pick across all 3 runs per model), which is unusually stable even for a well-defined persona prompt.
