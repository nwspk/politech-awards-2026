# Jury Summary: Jamie Coombes

**Date:** 2026-03-27
**Shortlist size:** 20 projects
**Run count:** 3 runs per model (15 total votes)
**Consensus threshold:** 8/15 majority, 12/15 strong

---

## Model × Run Grid

| Model | Run 1 | Run 2 | Run 3 |
|---|---|---|---|
| Claude Sonnet 4.6 | Polis | Polis | Polis |
| GPT-4o | deliberAIde | deliberAIde | deliberAIde |
| Mistral Large | AlgorithmWatch | AlgorithmWatch | AlgorithmWatch |
| Llama 3 70B | deliberAIde | deliberAIde | deliberAIde |
| Gemini 2.5 Pro* | PolicyEngine | Talk to the City | PolicyEngine |

*Gemini 1.5 Pro was unavailable on OpenRouter (404 error). Used google/gemini-2.5-pro as the closest available Google model. This maintains the 5-provider diversity intent.

---

## Vote Totals

| Project | Votes | % |
|---|---|---|
| deliberAIde | 6 | 40% |
| Polis | 3 | 20% |
| AlgorithmWatch | 3 | 20% |
| PolicyEngine | 2 | 13% |
| Talk to the City | 1 | 7% |

**Total votes:** 15 ✓

---

## Consensus Level

**Contested** (6/15 — below 8/15 majority threshold)

**Jury winner by plurality:** deliberAIde (6/15 votes)

---

## Notable Patterns and Reasoning

### The three-way split

Each of the three main vote-getters reflects a different reading of Jamie's values:

**Claude → Polis** (interpretability as mechanism): Claude focused heavily on the mechanical interpretability of Polis' opinion-clustering algorithm — the fact that the AI outputs are visually auditable by non-technical users. Claude's reasoning: "Polis inverts the usual dynamic where AI replaces participation: it uses AI to *amplify* genuine community input." Claude was also drawn to the fact that Polis passes Jamie's scepticism test — it's participatory AI with a structural mechanism rather than tokenistic consultation.

**GPT-4o + Llama → deliberAIde** (interpretability as dialogue): Both models latched on to deliberAIde's human-centred framing and explicit focus on making AI-facilitated conversation interpretable. GPT-4o: "Its approach to making AI-facilitated conversations more interpretable and human-directed tackles systemic risks associated with opaque AI systems in democratic contexts." Both models treated "interpretable" as a label applying to deliberAIde's conversational outputs, where Claude treated it as a more technical property. Neither model engaged with whether deliberAIde's interpretability claims are as mechanistically grounded as Polis's.

**Mistral → AlgorithmWatch** (interpretability as accountability): Mistral's consistent pick across all 3 runs for AlgorithmWatch reflects a European regulatory lens — AlgorithmWatch operates within EU AI governance, achieved concrete policy wins (Fundamental Rights Impact Assessments in the AI Act), and represents the watchdog function that makes government AI accountable. Mistral framed this as "evidence-based AI ethics" driving real policy change — a compelling reading of Jamie's government AI work, but one that prioritises external accountability over internal technical interpretability.

**Gemini → PolicyEngine/Talk to the City** (interpretability as transparency in practice): Gemini's split between PolicyEngine and Talk to the City suggests uncertainty between "transparent modelling of government decisions" (PolicyEngine) and "visible reasoning chain for LLMs" (Talk to the City). Gemini run 2 was the only model across all 15 runs to pick Talk to the City, citing Jamie's transformer interpretability background as directly relevant. This is a plausible reading but not consistent.

### The deliberAIde question

The plurality winner (6/15) across GPT-4o and Llama is not the primary scorer's choice (Polis). The key question for a human reviewer: does deliberAIde actually have mechanistic interpretability, or is "interpretable and human-directed" a design philosophy claim rather than a technical one? Jamie's work with `obvs` and Patchscopes is about mechanistic interpretability of transformer internals — understanding what the model is *doing*, not just what it *says*. Polis makes its AI outputs (opinion clusters, dimensionality-reduced consensus maps) auditable in this stronger sense. deliberAIde's "interpretability" claim may be softer.

### Why AlgorithmWatch won the original draft but not the jury

The previous draft of this file (see git history) proposed AlgorithmWatch as the winner. The jury shifted this: Polis was Claude's consistent pick across all 3 runs, and deliberAIde won the plurality. AlgorithmWatch remains a strong case — it's the external accountability layer for government AI, matching Jamie's professional context exactly — but the jury weighed interpretability-as-technical-property more heavily than accountability-as-watchdog-function.

---

## Flag for Human Review

**Contested result** — no project cleared the 8/15 majority threshold. The split reveals a genuine ambiguity in how Jamie's values translate to project selection: does "AI safety through interpretability" mean (a) making AI outputs visually auditable for citizens (→ Polis), (b) making AI-facilitated dialogue human-directed (→ deliberAIde), or (c) holding AI systems externally accountable through rigorous investigation (→ AlgorithmWatch)?

The research does not conclusively resolve this. All three readings are defensible from the public record. A human reviewer — ideally Jamie himself — should weigh in on which reading is correct.
