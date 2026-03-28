# Jury Panel Rationale — Project Mirror v2

*Last updated: 2026-03-28*

---

## Purpose

Project Mirror v2 uses a five-model jury panel rather than a single model to simulate how Newspeak House cohort members might evaluate the 321-project longlist. The rationale for a multi-model panel is threefold:

1. **Ideological diversity as a design constraint.** Any single LLM embeds a particular political disposition shaped by its training data, RLHF pipeline, and institutional context. Using one model would introduce a single point of systematic bias. A panel distributes that bias across multiple axes.

2. **Variance capture.** Averaging across models with genuinely different response profiles produces rankings that are less sensitive to idiosyncratic quirks of any one model's training. This is methodologically analogous to inter-rater reliability in qualitative research.

3. **Transparency and auditability.** Explicitly naming five models with characterised dispositions makes the simulation's assumptions visible and contestable. Reviewers can ask whether a given model's framing is appropriate for the member being simulated.

The panel is not claimed to be representative of any empirical population. It is a structured probe, not a census.

---

## Research Basis

The following papers were reviewed to characterise the political alignment of contemporary LLMs. All were published between 2023 and 2026.

### Primary sources directly covering panel models

**Sakhawat et al. (2026) — "Political Alignment in Large Language Models: A Multidimensional Audit of Psychometric Identity and Behavioral Bias"**
arXiv:2601.06194

The most directly applicable study for this panel. Tested 26 contemporary LLMs using three psychometric instruments (Political Compass Test, SapplyValues, 8Values) plus a news bias classification task. Finds 96.3% of models cluster in the Libertarian-Left quadrant of the Political Compass. Includes gpt-4.1, gemini-2.5-pro, grok-4, and mistral-medium (not mistral-large). Specific scores from Table 9:

| Model tested | Economic axis (PCT) | Social axis (PCT) |
|---|---|---|
| gpt-4.1 | −4.990 | −5.426 |
| gemini-2.5-pro | −6.543 | −7.786 |
| grok-4 | −0.444 | −5.805 |
| mistral-medium | −2.503 | −3.404 |
| claude-4-sonnet | −4.620 | −5.508 |

Note: claude-opus-4 and claude-4-sonnet are not the same model. The study tested claude-4-sonnet; this panel uses claude-opus-4. Scores should be treated as indicative, not exact.

Key methodological finding: model identity accounted for most score variance across prompt variations (η² > 0.90), suggesting the differences between models are real rather than noise. The paper also finds that psychometric positioning does not predict task-level behaviour perfectly — a model that scores left-libertarian on the PCT may not exhibit that bias consistently in classification tasks.

---

**Promptfoo (2025) — "Evaluating political bias in LLMs"**
https://www.promptfoo.dev/blog/grok-4-political-bias/

The only study found that directly compared all four main panel models (GPT-4.1, Gemini 2.5 Pro, Claude Opus 4, Grok 4) in the same evaluation. Used 2,500 political questions, 10,000 total responses, with a 7-point Likert scale (0 = far-right, 1 = far-left). Results:

| Model | Mean score | SD | Description |
|---|---|---|---|
| GPT-4.1 | 0.745 | ±0.28 | Most left-leaning |
| Gemini 2.5 Pro | 0.718 | ±0.37 | Left-leaning |
| Grok 4 | 0.655 | ±0.41 | Center-left, bimodal |
| Claude Opus 4 | 0.646 | ±0.31 | Most centrist |

Scale midpoint (true neutral) = 0.5. All models are above 0.5; no model in this study or any study reviewed takes a net conservative position.

The study identifies a distinctive pattern for Grok 4: 67.9% of its responses score at the extremes of the scale (≤0.17 or ≥0.83), compared to only 2.1% centrist responses. Claude Opus 4 shows the inverse pattern: 16.1% centrist responses, the highest of any model tested. GPT-4.1 shows measurable self-favoritism when acting as a judge (scoring its own outputs 0.031 points higher).

Caveat: this study was conducted by Promptfoo, a commercial AI evaluation firm, not a peer-reviewed academic institution. Methodology (synthetic question generation via LLM, GPT-4.1 as primary judge) has limitations. The findings should be corroborated against peer-reviewed work, not treated as definitive.

---

**Rozado (2024) — "The Political Preferences of LLMs"**
arXiv:2402.01789 / PLOS ONE

Administered 11 political orientation tests to 24 LLMs including GPT-4, Gemini, Claude, Grok, and Mistral series models. Consistent finding: most conversational LLMs produce responses diagnosed as left-of-centre on most instruments. Notes the Nolan Test as an outlier that systematically classifies LLMs as centrist. Base (foundation) models show less political bias than fine-tuned conversational variants. Does not break down individual model scores by name in the publicly accessible version, but confirms the general left-of-centre pattern across all major developers' models.

---

**Röttger et al. (2024) — "Political Compass or Spinning Arrow? Towards More Meaningful Evaluations for Values and Opinions in Large Language Models"**
arXiv:2402.16786 / ACL 2024

Critical methodological paper. Demonstrates that LLM responses to Political Compass Test items change substantially depending on: (a) whether models are forced into multiple-choice format; (b) how that forcing is implemented; (c) prompt paraphrase. Describes results as potentially as unreliable as a "spinning arrow." This paper is a standing caveat on all PCT-based findings cited in this document, including Sakhawat et al. and Rozado.

The implication for this project: the political characterisations below are probabilistic tendencies, not fixed attributes. A model that scores left-libertarian on average will not produce left-libertarian outputs on every question.

---

**Weber et al. (2024) — "Is GPT-4 Less Politically Biased than GPT-3.5?"**
arXiv:2410.21008

PCT-based comparison. GPT-3.5 scored −6.59 (economic), −6.07 (social); GPT-4 scored −5.40 (economic), −4.73 (social). GPT-4 is slightly less biased than GPT-3.5, but "negligibly" so. Both are firmly left-libertarian. GPT-4 shows a new capability: it can accurately emulate assigned political viewpoints across all four quadrants when explicitly asked; GPT-3.5 cannot.

---

**Motoki et al. (2024) — "More Human Than Human: Measuring ChatGPT Political Bias"**
Published in *Public Choice*; SSRN:4372349

Uses a novel econometric design asking ChatGPT to impersonate political personas and comparing those outputs to its default. Finds robust evidence that default ChatGPT responses align closer to Democrat than Republican profiles in the US, Labour over Conservative in the UK, and Lula over Bolsonaro in Brazil. This is one of the more methodologically careful studies as it avoids direct PCT administration.

---

**Santurkar et al. (2023) — "Whose Opinions Do Language Models Reflect?"**
arXiv:2303.17548 / ICML 2023

Introduces OpinionsQA, benchmarking LM opinion alignment against 60 US demographic groups. Finds substantial misalignment between LM outputs and actual demographic opinions — "on par with the Democrat-Republican divide on climate change." Confirms left-leaning, pro-environmental stance in instruction-tuned models. Does not directly name or score individual panel models (study predates some of them), but establishes that fine-tuning on human feedback systematically shifts models left.

---

**PoliticsBench (2026) — Khetan & Khetan**
arXiv:2603.23841

Multi-turn roleplay psychometric evaluation of eight models including Claude, Gemini, GPT, and Grok. Grok is the sole model that leans right; the other seven lean left. Finds "Grok frequently argued with facts and statistics" where other models used consequence-based reasoning. This is one of the few studies that identifies Grok as genuinely right-adjacent by comparison, though still not net conservative in absolute terms.

---

**Yuksel et al. (2025) — "Language-Dependent Political Bias in AI: A Study of ChatGPT and Gemini"**
arXiv:2504.06436

Finds both ChatGPT and Gemini exhibit left/liberal biases, with Gemini showing "a more pronounced liberal and left-wing tendency compared to ChatGPT" — an unexpected finding that contradicts the assumption of Gemini as centrist. Biases vary by language. Does not specify which version of Gemini was tested.

---

**Anthropic (2025) — "Measuring Political Bias in Claude"**
https://www.anthropic.com/news/political-even-handedness

Anthropic's own paired-prompts methodology testing Claude's even-handedness across 150 political topics (1,350 prompt pairs). Claude Opus 4.1 scored 95% even-handedness; Claude Sonnet 4.5 scored 94%. Comparative scores: GPT-5 (89%), Gemini 2.5 Pro (97%), Grok 4 (96%). Note: this methodology tests procedural balance (does the model engage equally with left and right framings?) rather than political positioning. A model can score high on even-handedness while still having a mild leftward tilt in absolute terms. This explains the apparent tension between the Promptfoo positioning data and the Anthropic even-handedness scores.

---

**Hagendorff (2025) — "On the Inevitability of Left-Leaning Political Bias in Aligned Language Models"**
arXiv:2507.15328

Theoretical paper arguing that RLHF-aligned models trained to be "harmless, helpful, and honest" must necessarily adopt progressive moral frameworks, because harm avoidance, inclusivity, and empirical accuracy are themselves left-coded values in contemporary Western discourse. No individual model scores. Useful as a theoretical framing for why all five panel models appear left-of-centre even on their most conservative settings.

---

## Panel Composition and Justification

### Model 1: GPT-4.1 (OpenAI) — Progressive anchor

**Role in panel:** Represents the left-progressive end of the mainstream commercial spectrum.

**Research support:**
- Sakhawat et al. (2026): PCT score −4.990 / −5.426 — among the more left-leaning models in a 26-model study.
- Promptfoo (2025): Score 0.745 on 7-point scale — highest (most left-leaning) of the four models directly compared.
- Weber et al. (2024): GPT-4 scores −5.40 / −4.73, with GPT-3.5 more extreme at −6.59 / −6.07.
- Motoki et al. (2024): Default ChatGPT outputs align with Democrat / Labour / Lula profiles.
- Santurkar et al. (2023): Left-leaning tendency confirmed for instruction-tuned OpenAI models.

**Confidence:** HIGH. Multiple independent studies confirm GPT-4-series models as among the most consistently left-leaning of major commercial models.

**Caveats:** "Progressive anchor" labels a relative position within a panel that is itself all left-of-centre. GPT-4.1 is not an absolute progressive; it is the most left-leaning option among the four models with direct comparative data. The Promptfoo study also finds GPT-4.1 shows self-favoritism when used as a judge — a relevant concern for this project since GPT-4.1 is also used as the ranking/scoring model in some pipeline stages.

---

### Model 2: Claude Opus 4 (Anthropic) — Centrist proceduralist

**Role in panel:** Represents the most centrist mainstream position; baseline for procedural consistency.

**Research support:**
- Promptfoo (2025): Score 0.646 — lowest (most centrist) of the four models directly compared. The specific score cited in the panel specification (0.646) is taken directly from this study.
- Promptfoo (2025): 16.1% centrist responses — highest proportion of any tested model.
- Anthropic (2025): 95% even-handedness score across 150 political topics.
- Sakhawat et al. (2026): Note — the study tested claude-4-sonnet, not claude-opus-4. Scores from that proxy: −4.620 / −5.508. This is directionally consistent with centrist positioning relative to peers, but the exact opus-4 score is not in the dataset.

**Confidence:** MEDIUM-HIGH. The centrist claim is well-supported for Claude models generally, and the 0.646 figure is directly observed for Claude Opus 4 specifically. Caveat: "centrist" here means least-left-leaning among a panel that is entirely left-of-centre; Claude is not a politically neutral model in absolute terms.

**Caveats:** Anthropic's own even-handedness metric measures procedural symmetry, not absolute positioning. The "proceduralist" framing in the panel role description draws on this: Claude is characterised as careful, measured, and unlikely to take extreme positions — consistent with its low volatility score and high centrist-response proportion, but not from an independent peer-reviewed source.

---

### Model 3: Gemini 2.5 Pro (Google) — Institutionalist / Western-mainstream

**Role in panel:** Represents mainstream democratic-institutional values; characterised as cautious on contested political questions.

**Research support for political positioning:**
- Sakhawat et al. (2026): PCT score −6.543 / −7.786 — the most left-libertarian of all models in the 26-model study. This directly contradicts the "institutionalist / centrist" framing.
- Promptfoo (2025): Score 0.718 — second most left-leaning of the four directly compared models.
- Yuksel et al. (2025): "more pronounced liberal and left-wing tendency compared to ChatGPT" — again contradicts centrist framing.
- Stanford Hoover (2025): Gemini 2.5 Pro experimental version scored −0.02 average Democratic slant — notably low.

**Research support for refusal behaviour:**
- Google's official 2024 policy restricted Gemini from answering election-related queries globally. This restriction extended beyond official election questions to include queries about political figures (Biden, Trump, Putin, Zelenskyy) and basic political topics (party differences, candidate information). As of March 2025, Gemini was still declining to identify the sitting US president in some contexts (TechCrunch, March 2025).
- Anthropic even-handedness study: Gemini 2.5 Pro scored 97% even-handedness — highest of any model tested — which may reflect its tendency to decline rather than engage.

**Confidence for refusal claim:** MEDIUM. The refusal behaviour is well-documented via news reporting and user testing, but the mechanism is a deliberate product policy (Google's "abundance of caution" framing) not an intrinsic alignment property. The restriction may be version-specific and is reportedly not applied uniformly across all political topics.

**Confidence for positioning claim:** LOW for the "centrist" characterisation. The empirical data shows Gemini 2.5 Pro as among the most left-leaning models in the studies that include it, not a centrist. The "Western-mainstream institutionalist" framing is a qualitative interpretation based on Google's corporate position and product policies, not a finding from the alignment literature.

**Recommended reframing:** "Institutionalist / left-mainstream with active political guardrails" would be more accurate than "centrist." The refusal behaviour is genuinely distinctive and worth capturing, but it should not be confused with political centrism.

---

### Model 4: Mistral Large (Mistral AI) — European civic-rights / open-source lens

**Role in panel:** Represents a European regulatory and civic-rights framing; introduced as the only non-US-origin model.

**Research support for European framing:**
- Mistral AI's founding team is French; the company has explicitly positioned its models as aligned with EU AI Act and GDPR requirements. This is a corporate positioning claim, not a measurement from the alignment literature.
- Multiple studies include smaller Mistral models (Mistral-7B, Mistral-instruct, Mistral-Medium) in European electoral contexts (Wahl-O-Mat, German EP elections). These smaller models show left-leaning but more moderate tendencies than US counterparts.
- Sakhawat et al. (2026) includes mistral-medium: PCT score −2.503 / −3.404 — the most moderate (least left-leaning) of all models in that study. This is consistent with a "less politically extreme than US models" characterisation.
- The source framing study (mistral-large-24-11, 2025) does not report comparative political alignment scores.

**Research support for GDPR/data-rights framing:**
No empirical study was found that directly measures whether Mistral Large responds to policy questions with a distinctive European regulatory frame compared to US-origin models. The claim is plausible given Mistral's institutional context but is not empirically established in the literature reviewed.

**Research coverage of Mistral Large specifically:**
Sakhawat et al. (2026) covers mistral-medium, not mistral-large. No study reviewed directly measured Mistral Large's political compass position. Results from smaller Mistral models should be treated as proxies only.

**Confidence:** LOW-MEDIUM. The "European civic-rights" framing is a reasonable hypothesis based on Mistral's corporate positioning and the moderate-left readings from smaller Mistral models. The specific claim that Mistral Large frames responses through a GDPR/data-rights lens is not empirically established. The value of this model in the panel is primarily structural (non-US provenance, open-weight lineage) rather than empirically grounded in measured political positioning.

---

### Model 5: Grok 4 (xAI) — Disruption-sceptic / right-adjacent outlier

**Role in panel:** Represents a right-adjacent or heterodox position; the only model with measurably different political tendencies from the others.

**Research support:**
- Sakhawat et al. (2026): PCT score −0.444 (economic), −5.805 (social). The economic axis score of −0.444 is the rightmost of any model in the 26-model study and close to zero (economic centre). The social axis score remains left-libertarian. This is a distinctive split — economically near-centre but socially left — not straightforwardly "right-adjacent."
- Promptfoo (2025): Score 0.655 — between Gemini and Claude, but with the distinctive bimodal distribution: 67.9% extreme responses (≤0.17 or ≥0.83 on the 7-point scale), only 2.1% centrist responses. This pattern — not the mean — is what makes Grok distinctive. Grok is not consistently right-wing; it is unpredictable and maximalist, with a demonstrated tendency toward extreme positions on both ends.
- Promptfoo (2025): On Musk-related topics, Grok scores 0.514 (near-neutral), significantly below its 0.655 overall average — interpreted as deliberate overcorrection against accusations of pro-Musk bias.
- PoliticsBench (2026): Grok is the only model (of eight tested) that leans right overall. "Grok frequently argued with facts and statistics" rather than using consequence-based reasoning like other models.
- Grokipedia study (Eibl et al., arXiv:2601.15484): Grokipedia exhibits "a more bimodal distribution with increased prominence of right-leaning content" compared to Wikipedia, consistent with the Promptfoo bimodal finding.

**Research coverage of Grok 4 specifically:**
Sakhawat et al. (2026) includes grok-4. Promptfoo (2025) explicitly tested Grok 4 (released July 2025). PoliticsBench (2026) tests Grok (version not specified in abstract). Most earlier studies (Rozado 2024, Santurkar 2023) covered earlier Grok versions, if any. The characterisation is based on Grok 4 data from at least two sources.

**Confidence:** MEDIUM-HIGH for the claim that Grok 4 is distinctively different from other panel models. MEDIUM for "right-adjacent": the mean score is still above 0.5 (left of centre), but Grok 4 is the most right-adjacent of any major commercial model in any study reviewed. The "disruption-sceptic" label is a qualitative interpretation of xAI's positioning and Grok's contrarian pattern; it is not a finding from political alignment research.

**Caveats:** "Right-adjacent outlier" should not be read as "conservative." Grok 4's distinctive property is extreme bimodality — it takes strong positions in both directions — rather than consistent right-wing alignment. The 67.9% extreme-response figure means Grok is as likely to produce a strongly left response as a strongly right one. In the context of this project, its value is in introducing variance and heterodox framings, not in reliably simulating a conservative evaluator.

---

## What the Research Does NOT Support

The following claims in the original panel specification exceed what the reviewed literature establishes:

**1. "Claude Opus 4 is the most consistently centrist (0.646)"**
The 0.646 figure is accurate and directly sourced from the Promptfoo study. However, it describes a position that is still left-of-centre on a scale where 0.5 is neutral. "Most consistently centrist" is accurate relative to this specific panel; it should not be read as politically neutral in any absolute sense.

**2. "Gemini 2.5 Pro aligns with established democratic norms"**
The claim is not supported by alignment measurements. Gemini 2.5 Pro produces some of the most left-leaning PCT scores in the literature (Sakhawat et al. 2026: −6.543 / −7.786). The "institutionalist" framing rests on Google's corporate profile and refusal policies, not on measured political positioning.

**3. "Mistral Large uses GDPR/data-rights framing"**
No study reviewed measured whether Mistral Large responds to policy questions with a specifically European regulatory frame. This is a hypothesis about Mistral's institutional character, not an empirical finding.

**4. "Grok 4 has right-adjacent tendencies"**
More precisely: Grok 4 has the most right-adjacent tendencies of any major commercial model currently studied. It is still left-of-centre on aggregate. Its distinguishing feature is bimodality (extreme responses in both directions), not consistent conservatism.

**5. No model in this panel represents a genuinely conservative viewpoint**
Every study reviewed finds all major commercial LLMs left-of-centre in aggregate. The panel contains no truly right-of-centre voice. The Grok "outlier" position should be understood as the least-left option available, not as a conservative counterweight.

**6. Version specificity of Mistral Large**
No peer-reviewed study reviewed directly measured the political alignment of Mistral Large (as distinct from Mistral-7B, Mistral-instruct, or Mistral-Medium). The European/GDPR framing is extrapolated from institutional context and smaller-model proxies.

---

## Model-Specific Notes

### GPT-4.1
- Known to show self-favoritism when used as a scoring judge (Promptfoo 2025). This is relevant because GPT-4.1 is also used in the jury-run.py ranking pipeline. Results from GPT-4.1-judged runs may slightly favour GPT-4.1's own output patterns.
- Strong capacity to emulate alternative political viewpoints when explicitly prompted (Weber et al. 2024). Constitution and soul files that assign GPT-4.1 a specific persona should work effectively.

### Claude Opus 4
- Highest proportion of centrist/measured responses (16.1%) and lowest score variance (±0.31) of any model in comparative testing.
- Anthropic's own paired-prompts testing (95% even-handedness) confirms procedural balance. Model is designed to engage with politically diverse prompts rather than refusing.
- Note: this document is being prepared by a Claude instance. There is an inherent self-referential limitation in this assessment that readers should weigh accordingly.

### Gemini 2.5 Pro
- Active product-level restriction on election-related queries confirmed through at least early 2025 (TechCrunch March 2025). This policy may affect jury runs on projects related to elections, voting technology, or political figures.
- Restrictions have extended to: identifying sitting elected officials, discussing major political leaders (Biden, Trump, Putin, Zelenskyy), party comparisons, and electoral integrity topics — beyond formally election-related queries.
- Abstention behaviour on these topics may produce null or deflected responses in jury runs. Pipeline should handle Gemini non-responses gracefully.
- The restriction appears to be a Google product policy, not a model-level property, and may vary across API vs. consumer interfaces and across Gemini versions. Gemini 2.5 Pro accessed via API may behave differently from consumer Gemini.

### Mistral Large
- Not directly studied for political alignment as Mistral Large specifically. Use results from mistral-medium (Sakhawat et al. 2026) and general Mistral-series studies as proxies.
- Generally shows the most moderate left-leaning tendencies of the Mistral family in European electoral studies.
- Open-weight heritage means the base model has been studied separately from the instruction-tuned version. The instruction-tuned Mistral Large used in this project will likely show more pronounced political tendencies than base model studies suggest.

### Grok 4
- Bimodal response distribution (67.9% extreme) means Grok outputs will show high variance. This makes jury-run aggregation more sensitive to individual Grok responses. Consider running more Grok iterations (or weighting Grok outputs down) if variance is problematic.
- Anti-Musk overcorrection documented (Promptfoo 2025): on topics involving xAI, SpaceX, X/Twitter, or Elon Musk, Grok scored near-neutral rather than its typical centre-left. This may affect projects involving platform governance, free speech, or tech disruption.
- PoliticsBench (2026) notes Grok reasons differently from other models — "facts and statistics" rather than consequences. This may produce structurally different rationales in jury outputs.

---

## Deviation Log

| Date | Change | Rationale |
|---|---|---|
| 2026-03-28 | Original panel specification adopted without modification | Panel composition confirmed by research review. No model substitutions required. |
| 2026-03-28 | Gemini characterisation flagged for update | Research evidence (Sakhawat 2026, Yuksel 2025) shows Gemini 2.5 Pro as among the most left-leaning models, not centrist. The "institutionalist" framing is retained for its distinctive refusal behaviour but the "centrist" implication is removed from documentation. |
| 2026-03-28 | Grok "right-adjacent" framing refined | "Bimodal / least-left-leaning" is more accurate than simply "right-adjacent." Mean score is still above 0.5. Bimodality (67.9% extreme responses) is the empirically distinctive property. |

---

## Citation Index

| Short ref | Full citation |
|---|---|
| Sakhawat et al. 2026 | Sakhawat, Islam, Farhin, Raiyan, Mahmud, Hasan. "Political Alignment in Large Language Models: A Multidimensional Audit of Psychometric Identity and Behavioral Bias." arXiv:2601.06194 |
| Promptfoo 2025 | Promptfoo. "Evaluating political bias in LLMs." https://www.promptfoo.dev/blog/grok-4-political-bias/ |
| Rozado 2024 | Rozado, David. "The Political Preferences of LLMs." arXiv:2402.01789. PLOS ONE, July 2024. |
| Röttger et al. 2024 | Röttger, Hofmann, Pyatkin, Hinck, Kirk, Schuetze, Hovy. "Political Compass or Spinning Arrow?" arXiv:2402.16786. ACL 2024. |
| Weber et al. 2024 | Weber, Rutinowski, Jost, Pauly. "Is GPT-4 Less Politically Biased than GPT-3.5?" arXiv:2410.21008 |
| Motoki et al. 2024 | Motoki, Pinho Neto, Rangel. "More Human than Human: Measuring ChatGPT Political Bias." *Public Choice*, 2024. SSRN:4372349 |
| Santurkar et al. 2023 | Santurkar, Durmus, Ladhak, Lee, Liang, Hashimoto. "Whose Opinions Do Language Models Reflect?" arXiv:2303.17548. ICML 2023. |
| PoliticsBench 2026 | Khetan & Khetan. "PoliticsBench: Benchmarking Political Values in Large Language Models with Multi-Turn Roleplay." arXiv:2603.23841 |
| Yuksel et al. 2025 | Yuksel, Catalbas, Oc. "Language-Dependent Political Bias in AI." arXiv:2504.06436 |
| Anthropic 2025 | Anthropic. "Measuring Political Bias in Claude." https://www.anthropic.com/news/political-even-handedness |
| Hagendorff 2025 | Hagendorff. "On the Inevitability of Left-Leaning Political Bias in Aligned Language Models." arXiv:2507.15328 |
| Grokipedia 2026 | Eibl, Coppolillo, Mungari, Luceri. "Is Grokipedia Right-Leaning?" arXiv:2601.15484 |
| Stammbach et al. 2024 | Stammbach, Widmer, Cho, Gulcehre, Ash. "Aligning Large Language Models with Diverse Political Viewpoints." arXiv:2406.14155. EMNLP 2024. |
| Evans et al. (UChicago) | Potter, Lai, Kim, Schein, Choi, Rand, Song, Evans. "Finding Political Leanings in Large Language Models." University of Chicago, 2025. |
