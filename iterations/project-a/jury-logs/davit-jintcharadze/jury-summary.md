# Jury Summary — Davit Jintcharadze

**Fellow:** Davit Jintcharadze
**Date:** 2026-03-27
**Shortlist size:** 20 projects
**Total votes:** 15 (5 models × 3 runs each)

---

## Model × Run Grid

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 (Anthropic direct) | Polis | Polis | Polis |
| GPT-4o (`openai/gpt-4o`) | DISARM Frameworks | DISARM Frameworks | DISARM Frameworks |
| Mistral Large (`mistralai/mistral-large`) | Martus | Martus | Martus |
| Llama 3 70B (`meta-llama/llama-3-70b-instruct`) | Martus | Martus | Martus |
| Gemini 2.5 Pro (`google/gemini-2.5-pro`)\* | ODK (Open Data Kit) | ODK (Open Data Kit) | ODK (Open Data Kit) |

\* Gemini 1.5 Pro (`google/gemini-pro-1.5`) returned 404 on OpenRouter. Substituted `google/gemini-2.5-pro`. This is documented in logs and consistent with Martina Orlea run behaviour.

---

## Vote Totals

| Project | Votes | % |
|---|---|---|
| Martus | 6 | 40% |
| Polis | 3 | 20% |
| DISARM Frameworks | 3 | 20% |
| ODK (Open Data Kit) | 3 | 20% |

---

## Consensus Level

**Contested** — No project reaches the 8/15 majority threshold. Martus leads with 6/15 (40%) but is short of majority. Four distinct winners chosen across five models.

**Flag for human review:** The contested result reflects a genuine ambiguity in Davit's inferred values — different models emphasise different aspects of his profile: Martus (activist/survivability lens), Polis (research/measurement lens), DISARM (analytical/taxonomy lens), ODK (infrastructure/LMIC lens).

---

## Notable Quotes

### Claude Sonnet 4.6 — Polis (all 3 runs)
> "Polis is the most strategically underrated tool on this list for my specific research agenda: it enables cheap, scalable, open-ended public opinion measurement that surfaces genuine consensus patterns rather than manufactured ones — which is precisely the methodological gap I care about in LMIC and authoritarian-adjacent contexts. Its AI-driven clustering can expose when opinion is organically distributed versus artificially polarised by coordinated influence operations, giving researchers and movements a diagnostic instrument for detecting opinion engineering rather than just documenting its effects."

**Why:** Claude prioritised Davit's stated academic research goal (measuring genuine vs. manufactured public opinion) over his activist/practitioner background. Polis's bridging-consensus algorithm was framed as a direct counter to authoritarian opinion engineering — not just a deliberation tool.

### GPT-4o — DISARM Frameworks (all 3 runs)
> "This project excels in measuring and exposing the systematic manipulation of public discourse by authoritarian regimes, a core concern of mine. It has been utilized by NATO and international partners, demonstrating its applicability in adversarial political contexts. Furthermore, DISARM Frameworks is open-source, making it accessible and adaptable to low/middle-income countries."

**Why:** GPT-4o emphasised the "disinformation/opinion engineering exposure" criterion and the open-source/international applicability. It treated DISARM as the definitive conceptual framework for the problem Davit researches — the vocabulary that names what he fights. Notably, it described DISARM as usable in LMICs, though the tool is primarily used by Western security researchers and NATO partners.

### Mistral Large — Martus (all 3 runs)
> "Martus is the clear standout because it directly embodies my core values: authoritarian context applicability, LMIC measurement capability, and movement infrastructure resilience. It's battle-tested in Georgia, Syria, Myanmar, and other high-risk environments, providing secure, open-source documentation of abuses — critical for targeted accountability in regimes where evidence is systematically erased."

**Why:** Mistral applied a literal reading of the scoring criteria — highest-weight criteria for a project explicitly deployed in Davit's home country. The "battle-tested in Georgia" dimension was compelling because the specificity is real, not inferred.

### Llama 3 70B — Martus (all 3 runs)
> "Martus aligns with my values by functioning in non-democratic contexts, enabling cheap and reliable measurement in low/middle-income countries, and exposing human rights abuses, which is critical in countering authoritarian manipulation. By protecting activists documenting abuses, Martus supports movement infrastructure resilience in environments where other tools cannot operate."

**Why:** Llama took a similar analytical approach to Mistral — grounded in the scoring criteria and the Georgia deployment specificity. Both Mistral and Llama were independently consistent across all three runs.

### Gemini 2.5 Pro — ODK Open Data Kit (all 3 runs)
> "ODK is the essential, foundational toolkit for achieving my core research mission: to cheaply, reliably, and safely measure public opinion and manipulation in low-income, resource-constrained environments. It has been tested across Africa, Asia, and Latin America — the exact contexts where the gap between authoritarian narrative and actual public sentiment is widest and least well-documented."

**Why:** Gemini latched on to the most literal expression of Davit's stated goals — "build tools to measure public opinion in LMICs cheaply, reliably, safely" — and found ODK to be the direct technical answer. This interpretation is coherent but less psychologically specific than the Polis/Claude reading.

---

## Analysis

The four-way split is the most fragmented jury result in the Project A pipeline to date (Connor Dunlop: unanimous 15/15; Martina Orlea: 11/15 majority). The fragmentation reflects a genuine ambiguity in Davit's profile: he is simultaneously:
1. An **activist in the field** who needs tools that survive in hostile environments (→ Martus)
2. A **researcher** who wants to measure genuine opinion patterns (→ Polis)
3. An **analyst** studying the taxonomy of authoritarian manipulation (→ DISARM)
4. A **builder** who wants measurement infrastructure for LMICs (→ ODK)

Each of these framings is valid. The jury chose along the lines of which aspect of the profile each model weighted most heavily. Claude emphasised the research/academic identity; GPT-4o the analytical/framework identity; Mistral and Llama the activist/survivability identity; Gemini the builder/infrastructure identity.

The primary run (Claude) chose Polis. The proposed winner in the main file is Martus. This divergence is documented — it represents the single most important interpretive question about Davit's values: does he prioritise understanding manipulation (Polis/research) or enabling survival under it (Martus/activism)?

---

## Recommendations for Human Review

1. **Ask Davit**: Does Polis vs. Martus feel like the right tension? Does he see himself more as a researcher or an activist in the context of political technology?
2. **Clarify the "co-founder" claim**: Civil Georgia and Wikipedia do not list him as a Freedom Square co-founder. This doesn't affect scoring but affects how the bio should be written.
3. **Check ODK applicability**: Gemini's consistent ODK picks may reflect a real gap — is ODK actually being used for public opinion measurement in authoritarian contexts, or only for health/humanitarian data? If the former, it might deserve a higher placement.
