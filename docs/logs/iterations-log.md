# Iterations Log

Canonical full iteration history for `/awards` rendering. Generated from `iterations.json`.

## Summary table

| Version | Date | Author | Status | Heuristic | PR | Entry |
|---|---|---|---|---|---|---|
| v1 | n/a | n/a | merged | Random score between 1 and 100 | [v1](https://github.com/nwspk/politech-awards-2026/pull/1) | [entry](#v1-random-scoring) |
| v2 | 2026-02-04 | @Asil | merged | Random base score (1-100) + inclusion bonus based on exclusion keywords in URL | [v2](https://github.com/nwspk/politech-awards-2026/pull/2) | [entry](#v2-exclusion-keyword-bonus) |
| v3 | 2026-02-07 | @sugaroverflow | merged | Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters. | [v3](https://github.com/nwspk/politech-awards-2026/pull/7) | [entry](#v3-keyword-clusters-no-randomness) |
| v4 | 2026-02-13 | @jcoombes | merged | Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords. | [v4](https://github.com/nwspk/politech-awards-2026/pull/9) | [entry](#v4-ai-governance-body-bonus) |
| v5 | 2026-02-22 | @Gamithra | merged | Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist. | [v5](https://github.com/nwspk/politech-awards-2026/pull/12) | [entry](#v5-three-agent-itn-a-deliberation) |
| v6 | 2026-03-09 | @sugaroverflow | open | This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heuristic](https://github.com/nwspk/politech-awards-2026/pull/12) with **6 independent AI juries** that run an ITN/A deliberation on a shortlist of 183 projects. The jury with the highest confidence score picks the project winner. | [v6](https://github.com/nwspk/politech-awards-2026/pull/15) | [entry](#v6-six-jury-itn-a-deliberation) |
| v7 | 2026-03-28 | @davit-jintcharadze | merged | Scores and filters projects based on Davit's eight evaluation criteria: | [v7](https://github.com/nwspk/politech-awards-2026/pull/20) | [entry](#v7-davit-aligned-political-relevance-heuristic) |
| v8 | 2026-03-27 | @Gamithra | merged | This iteration keeps the **v5 ITN/A architecture**: Grok 4.1 Fast assesses every candidate on political, relational, and experimental lenses, then a facilitator-led multi-agent deliberation scores and argues over a **shortlist** of projects that cleared a green threshold on those assessments. | [v8](https://github.com/nwspk/politech-awards-2026/pull/41) | [entry](#v8-itn-a-grok-re-run-with-awards-bonuses-effective-score-alignment) |
| v9 | 2026-03-28 | @nwspk | open | **Evaluation:** `npx tsx scripts/alexandra/alexandra-eval.ts` — each juror returns integers 1–5 for D1–D8 plus an `evidence[]` array (URL, quote, source type) per the prompt. Context = **enriched dossier** (`data/enriched/*.json`) + **cached page text** (`cache/sites.sqlite`), same spirit as `itn-a-eval.ts`. **Speed:** `--concurrency N` (e.g. `8`) runs N URLs in parallel; `--call-delay-ms 0` removes pauses between calls if your OpenRouter tier tolerates it (default `800`). | n/a | [entry](#v9-contestable-transparency-d1-d8-rubric-three-jurors-auditable-evidence) |
| v10 | 2026-03-29 | @sugaroverflow | merged | Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each score every candidate on **D1–D8** using the **Award A** weighted rubric in `docs/evaluation/alexandra-rubric.md`. Each juror returns integers **1–5** per dimension plus an **`evidence[]`** array (URL, quote, source type). **Aggregation** takes medians per dimension and a **median weighted composite** (`median_composite` on 1–5); dimensions with **max−min ≥ 2** across jurors are flagged as controversial. **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** maps `median_composite × 20` to **20–100** for the public leaderboard; URLs missing from the aggregate score **5**. This is a **parallel numeric track** to ITN/A — it does **not** replace green/yellow deliberation. | [v10](https://github.com/nwspk/politech-awards-2026/pull/89) | [entry](#v10-three-independent-llm-jurors-grok-claude-kimi-via-openrouter-each-score) |

## Full iteration records

### v10 Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each score

- **PR**: [v10](https://github.com/nwspk/politech-awards-2026/pull/89)
- **Status**: merged
- **Author**: @sugaroverflow
- **Date**: 2026-03-29
- **Top project**: [torproject.org](https://www.torproject.org) (score: 90)

#### Heuristic

Three **independent** LLM jurors (Grok, Claude, Kimi via OpenRouter) each score every candidate on **D1–D8** using the **Award A** weighted rubric in `docs/evaluation/alexandra-rubric.md`. Each juror returns integers **1–5** per dimension plus an **`evidence[]`** array (URL, quote, source type). **Aggregation** takes medians per dimension and a **median weighted composite** (`median_composite` on 1–5); dimensions with **max−min ≥ 2** across jurors are flagged as controversial. **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** maps `median_composite × 20` to **20–100** for the public leaderboard; URLs missing from the aggregate score **5**. This is a **parallel numeric track** to ITN/A — it does **not** replace green/yellow deliberation.

#### Rationale

### Committee context (Alexandra, summarized)

Candidates are **very different** and **website-only** material is a weak basis for fair comparison. Alexandra still favoured a **traditional rubric**: pick important dimensions, operationalise them, **weight** and score them, and use **three assessors** for inter-rater checks—with **auditable evidence** and, in a full process, **construct / discriminant validity**, consultation instead of **LLM-only** delegation, and work she skipped here (evidence logs, **sensitivity on weights**).

A **Claude-assisted taxonomy** (not fully reviewed by her) was useful mainly for **tensions** that force trade-offs—e.g. **reform vs rupture**, **state as partner vs subject**, **deliberation vs mobilisation**, **openness vs security**, **platform vs protocol**, **AI as tool vs threat**, **infrastructure vs advocacy**—and for the idea that **several award types** might fit reality better than one global score. She questioned whether **objective quantification** is always fairer than **subjective allocation within categories**, and noted **under-represented** themes (**climate**, **humanitarian**, **Global South**) and odd **regional spread** in this set. **This iteration scores only D1–D8 + Award A weights**, not taxonomy categories (the long ~250-project taxonomy stays reference-only).

Her **five-step** sketch maps here as: dimensions → **weights** → **data/proxies** → **category corrections** (infra, security, research, solo/unfunded) → outputs (e.g. composite, rankings, outliers). The repo implements the **dimension + weight** core; **Step 4** is documented but **not auto-applied in code**. **Honest limitation:** the most politically significant projects are often the **hardest to measure**—scores help **drop weak candidates** and build a **defensible shortlist**; **final selection still needs human judgment**; the win is **transparent, contestable** reasoning.

**Matrix:** She asked about **web-only** evaluation—this run uses **enriched dossiers** and **`cache/sites.sqlite`**, not scraping alone. **Three models** (Grok, Claude, Kimi) stand in for **three jurors**; she was clear outputs were **mostly Claude-driven** with **no strong sense of ownership**—treat them as **instrument tests**, not her personal scores. She pointed to next steps: **quotes / links** from primary sources per dimension for a **shortlist**, and later an **eval-of-eval** (accuracy, verifiability, consistency, reproducibility, transparency, fairness). **Edward Saperia:** *“trying to measure things that are hard to measure is really what this exercise is about!”*

### Award A rubric, lineage, and what v9 commits

The rubric frames **Award A: “Most Politically Transformative”** — eight dimensions from power asymmetry and democratic depth through counterfactual impact, scale, leverage, accountability outcomes, openness, and resource efficiency, with the **headline composite**  
`0.25·D1 + 0.20·D2 + 0.15·D3 + 0.10·D4 + 0.10·D5 + 0.10·D6 + 0.05·D7 + 0.05·D8`.

v9 **reuses v6’s multi-model independence** while swapping the **measurement instrument** from ITN/A buckets to **D1–D8**. Gamithra’s ITN/A + awards-bonuses iteration is **v8** ([PR #41](https://github.com/nwspk/politech-awards-2026/pull/41)); Davit’s aligned manual ranking track is **v7** ([PR #20](https://github.com/nwspk/politech-awards-2026/pull/20)).

### Illustrative manual scores (subset only — not the full 321)

Alexandra noted a table **was not applied to all candidates**. Illustrative calibration only (rank order as in her note; composites imply close ties):

| Rank | Project | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | Weighted score |
|-----:|---------|----|----|----|----|----|----|----|----|----------------:|
| 1 | Tor Project | 5 | 1 | 5 | 5 | 4 | 5 | 5 | 4 | 4.05 |
| 2 | Decidim | 4 | 5 | 3 | 4 | 4 | 3 | 5 | 4 | 4.00 |
| 3 | Polis (compdemocracy) | 4 | 4 | 5 | 3 | 3 | 4 | 5 | 4 | 4.00 |
| 4 | vTaiwan | 4 | 5 | 4 | 2 | 3 | 4 | 5 | 5 | 4.00 |
| 5 | Quadratic Vote (RxC) | 4 | 5 | 4 | 3 | 3 | 3 | 5 | 4 | 3.95 |
| 6 | WorkerInfoExchange | 5 | 3 | 5 | 2 | 2 | 4 | 5 | 5 | 3.90 |
| 7 | Ushahidi | 4 | 3 | 4 | 4 | 4 | 4 | 5 | 4 | 3.85 |
| 8 | Mastodon | 4 | 3 | 3 | 5 | 5 | 3 | 5 | 4 | 3.80 |
| 9 | ATProtocol (bluesky-social) | 4 | 3 | 4 | 4 | 5 | 2 | 5 | 3 | 3.70 |
| 10 | RxC Voice | 4 | 5 | 4 | 2 | 2 | 2 | 5 | 5 | 3.70 |
| 11 | GuardianProject | 5 | 2 | 4 | 3 | 4 | 3 | 5 | 4 | 3.70 |
| 12 | OneProject | 5 | 5 | 3 | 2 | 2 | 2 | 5 | 4 | 3.75 |

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

- **Not human inter-rater reliability:** three models ≠ three humans; calibration differs (e.g. Claude’s conservative greens in v6 may compress variance on some dimensions).
- **D4 / D8** often lack solid data; jurors infer and may set `cannot_assess_dimensions` — weak without manual audits.
- **Cost / time:** full **321 × 3** juror calls is expensive; **`--limit`** and **`--url`** exist for pilots.
- **Rubric “Step 4” category corrections** (infrastructure multiplier, security D3 weighting, etc.) are **not** auto-applied in code yet.
- **Provenance:** enriched JSON may contain imperfect citations; prompts ask jurors to prefer **primary** links.
- **Honest limitation (rubric):** quantified scores support **shortlisting and transparency**, not automatic winner selection.

#### Assessment

This PR ships **documentation** (`docs/evaluation/alexandra-rubric.md`), **scripts** (`scripts/alexandra/alexandra-eval.ts`, `alexandra-aggregate.ts`), **committed cache snapshots** (`cache/alexandra-assessments.json`, `cache/alexandra-aggregate.json`, `.csv`), **`iterations/v9/README.md`**, and the **`the-algorithm.ts`** hook under **`SCORING_MODE=v9`**. A full **321 × 3** juror run produced the aggregate in **Results** below; **re-running eval is optional** if the committee accepts this snapshot. **Tor Project** has the highest `median_composite` in that aggregate (also `top_project` in `iterations/v9/README.md`). **Winner selection** remains a **committee** choice; v9 makes the numeric layer **contestable** and auditable.

For the iteration bot and public leaderboard, commit **`results.json`** from **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** (321 rows, same ordering as the aggregate mapping).

---

### v9 Contestable transparency — D1–D8 rubric, three jurors, auditable evidence

- **PR**: n/a
- **Status**: open
- **Author**: @nwspk
- **Date**: 2026-03-28
- **Top project**: [www.torproject.org](https://www.torproject.org) (score: 90)

#### Heuristic

**Evaluation:** `npx tsx scripts/alexandra/alexandra-eval.ts` — each juror returns integers 1–5 for D1–D8 plus an `evidence[]` array (URL, quote, source type) per the prompt. Context = **enriched dossier** (`data/enriched/*.json`) + **cached page text** (`cache/sites.sqlite`), same spirit as `itn-a-eval.ts`. **Speed:** `--concurrency N` (e.g. `8`) runs N URLs in parallel; `--call-delay-ms 0` removes pauses between calls if your OpenRouter tier tolerates it (default `800`).

**Aggregation:** `npx tsx scripts/alexandra/alexandra-aggregate.ts` — per URL, median score per dimension across successful jurors; **median of juror weighted composites** as `median_composite`. Flags dimensions where max−min ≥ 2 across jurors as `controversial_dimensions`.

**Justifications (top N):** `npx tsx scripts/alexandra/alexandra-top10-justify.ts` — after aggregate exists; `--top 15`, `--url …`, `--out …`, `--aggregate …`. Does **not** re-score; it explains the **median** values already in the aggregate.

**Ranking hook:** `SCORING_MODE=v9 npx tsx the-algorithm.ts` maps `median_composite` (1–5) → **20–100** via `round(composite × 20)`; URLs absent from the aggregate file score **5** (same baseline as un-assessed v5 rows). Default remains **v5** if `SCORING_MODE` is unset.

Optional env: `ALEXANDRA_AGGREGATE_PATH` — override path to the aggregate JSON.

#### Rationale

Alexandra asked for a **traditional structured rubric** (weighted dimensions, auditable evidence, multiple raters) without delegating a single opaque score. Three models stand in for three human jurors for **this exercise**; inter-model spread is a **sensitivity signal**, not a substitute for Krippendorff’s α on human scores.

v9 reuses v6’s **multi-model independence** while swapping the **measurement instrument** from ITN/A buckets to **D1–D8**. Gamithra’s ITN/A + awards-bonuses line is documented as **v8** ([PR #41](https://github.com/nwspk/politech-awards-2026/pull/41)).

#### Data sources

- `docs/evaluation/alexandra-rubric.md` (frozen rubric text in prompts)
- `data/enriched/*.json` (committee dossiers)
- `cache/sites.sqlite` (scraped page bodies, via `npm run cache:sites`)
- `candidates.csv`
- OpenRouter API (`OPENROUTER_API_KEY`)

#### Limitations

- **Not human inter-rater reliability:** Three models ≠ three humans; calibration differs (e.g. Claude’s conservative greens in v6 may compress variance on some dimensions).
- **D4 / D8:** Downstream reach and funding are often **missing**; jurors must infer and mark `cannot_assess_dimensions` — still weak without manual audits.
- **Cost / time:** Full 321 × 3 jurors is expensive; use `--limit` and `--url` for development.
- **Category corrections** (infrastructure multiplier, security D3 weighting, etc.) in the rubric’s “Step 4” are **not** auto-applied in code yet — optional follow-up.
- **Provenance:** Enriched JSON may contain imperfect citations; jurors should prefer **primary** links when present.

#### Assessment

Ships the **documentation + scripts + aggregate + optional `the-algorithm.ts` mode** in one PR. Committee runs eval when ready, commits or archives `cache/alexandra-*.json` if they want a reproducible snapshot, then may set `top_project` in this README after a full run. **Winner selection** remains a committee choice; v9 makes the numeric layer **contestable**. Current `top_project` reflects the highest `median_composite` in the committed aggregate snapshot.

**Iteration bot:** commit root **`results.json`** from **`SCORING_MODE=v9 npx tsx the-algorithm.ts`** (not the default ITN/A path), and keep **`iterations/v9/results.json`** in sync with that file when you refresh the PR.

---

### v8 ITN/A Grok re-run with awards bonuses + effective-score alignment

- **PR**: [v8](https://github.com/nwspk/politech-awards-2026/pull/41)
- **Status**: merged
- **Author**: @Gamithra
- **Date**: 2026-03-27
- **Top project**: [blog.kagi.com](https://blog.kagi.com/slopstop) (score: 99)

#### Heuristic

This iteration keeps the **v5 ITN/A architecture**: Grok 4.1 Fast assesses every candidate on political, relational, and experimental lenses, then a facilitator-led multi-agent deliberation scores and argues over a **shortlist** of projects that cleared a green threshold on those assessments.

**New in v8 — awards framing without collapsing ITN/A:** During deliberation, each project receives three small bonuses (−5 to +5 each), tracked separately from the pure ITN/A aggregate:

- **bonus_relevance** — urgency and fit for *this* award cycle (e.g. 2026 debates).
- **bonus_project** — concrete product or intervention vs generic org or umbrella.
- **bonus_novelty** — newer or under-recognised entrant vs established incumbent.

The deliberation output stores both **`aggregate`** (ITN/A-only) and **`aggregate_effective`** (ITN/A plus sum of bonuses, clamped 0–100). **Ranking for deliberated projects uses `aggregate_effective`** so ordering reflects the full awards rubric the jury actually applied.

**Non-deliberated projects** keep the v5 tier rule: **2+ green dimensions → 45**, **1 green → 20**, **otherwise → 5**.

**Implementation details:** Dossier fields fed into eval/deliberation are normalised where enriched JSON was inconsistent (e.g. list-like `format` / `funding_model`, structured **`policy_outcomes`**). Candidate URLs are **normalised** when joining deliberation and assessments to `candidates.csv` (hostname without `www`, path, lowercase, no trailing slash).

Default cache paths for this run: **`cache/assessments-grok.json`**, **`cache/deliberation-grok.json`** (overridable with `ASSESSMENTS_PATH` / `DELIBERATION_PATH`).

#### Rationale

v5 showed that forced argument among political / relational / experimental voices produces legible tradeoffs and a defensible winner, but the **Political Tech Awards** are not only “best ITN/A fit” — they also care about **timeliness**, **whether the nomination is a real artefact**, and **whether we are lifting something fresh**. The bonus fields make that explicit without rewriting the core ITN/A scores mid-argument.

A separate issue appeared once bonuses existed: **`results.json` was still driven by `aggregate` only**, so the public ranking could disagree with the deliberation file (e.g. ordering among high ITN/A projects flipped by bonuses). v8 **aligns the algorithm with `aggregate_effective`** so the committed leaderboard is faithful to the deliberation artefact.

Pipeline robustness work in the same arc: **larger ROUND 1 output budgets**, **retries**, and **tighter prompting** where verbose JSON caused truncation; **safer parsing** of enriched dossier shapes so eval and deliberation do not fail on string-vs-array fields.

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

- **Single jury / single model family** for this iteration (Grok throughout evaluation and deliberation). Unlike v6, there is no cross-model robustness check.
- **Bonuses are model judgments**, not external facts; they can reinforce hype or familiarity as easily as they surface deserved recognition.
- **Most candidates remain in coarse non-deliberated tiers** (45 / 20 / 5); fine structure is concentrated on the shortlist.
- **Effective scores are ordinal guides**, not cardinal welfare measures — large gaps between tiers are intentional.

#### Assessment

With **`aggregate_effective`**, the head of **`results.json`** matches the deliberation ranking: **SlopStop** leads at **99**, reflecting strong ITN/A scores plus high awards bonuses on **relevance** (AI slop / information integrity in 2026) and **project concreteness**. **Bonfire** and **rsky** sit just behind at **97**, illustrating how bonuses reorder tightly contested ITN/A peers.

Worth comparing to **v5** (single Grok, no bonuses) and **v6** (six juries, confidence-based promotion) to see whether this is a stable “awards-shaped” correction or a single-model artefact. A useful follow-up is whether to **publish bonus breakdowns** next to ranks for committee audit, or to re-run the same rubric with a second model jury.

---

### v7 Davit-aligned political relevance heuristic

- **PR**: [v7](https://github.com/nwspk/politech-awards-2026/pull/20)
- **Status**: merged
- **Author**: @davit-jintcharadze
- **Date**: 2026-03-28
- **Top project**: [expo.diia.gov.ua](https://expo.diia.gov.ua) (score: 91)

#### Heuristic

Scores and filters projects based on Davit's eight evaluation criteria:

- **Real-world political relevance:** addresses concrete civic, governance, accountability, rights, or public-interest problems
- **Movement usefulness:** enables communities, journalists, or civil society to act, not just observe
- **Track record:** evidence of sustained use, trust, or measurable outcomes
- **Generalizability:** applicable across jurisdictions, including constrained contexts
- **Evidence quality:** supported by verifiable outcomes, citations, or case studies
- **Systemic significance:** engages deeper structural issues (corruption, participation, censorship, power)
- **Timeliness:** operates within real public-interest timelines where relevant
- **Integrity over hype:** prioritizes credible substance over trend visibility

### Process used in this iteration

1. **Taxonomy readiness check**
   - assess whether dossiers include fields needed for Davit's criteria
   - identify missing/weak fields and evidence gaps
2. **Candidate screening**
   - review full project pool
   - narrow to strongest candidates for manual evaluation
3. **Structured scoring**
   - score candidates across the eight criteria
4. **Shortlist production**
   - produce a review shortlist for manual judgment
5. **Winner recommendation format**
   - prepare winner/runner-up comparison for manual decision

### Scoring model in the process framing

- 3 = strong
- 2 = mixed/partial
- 1 = weak/unproven

Dimensions map to the eight criteria (total possible: 24), with confidence and shortlist recommendation fields in the structured output format.

### Davit's agent/process spec (detailed)

The v7 process text defines a dedicated **Davit's Agent** role with these constraints:

- politically grounded, evidence-sensitive judgment layer
- does not reward trendiness or prestige by default
- emphasizes practical civic/political utility in real conditions
- distinguishes local success from broader transferability
- surfaces evidence gaps and uncertainty explicitly
- outputs taxonomy readiness notes, project scoring, shortlist rationale, and winner recommendation structure

Reference examples used in the framing:
- **Bellingcat** (evidence quality, trust, cross-jurisdiction public-interest investigations)
- **Yoti** (privacy-preserving identity model with broader political use in sensitive contexts)

#### Rationale

This approach prioritizes:

- practical public-interest utility over visibility effects
- evidence-backed claims and explicit uncertainty handling
- transferability beyond a single national/elite context
- substantive political relevance over trend framing

Direct excerpts from Davit's email (Mar 22, 2026):

> "I realize my human review will probably be biased because I have a varying degree of familiarity with some of the software."

> "So far, the AI leader is my number two choice, and my top choice is Diia - Ukraine's all-in-one app to get all governmental services digitally."

> "I weighted it highly because, although it's one-country specific, the infrastructure is in principle transferable, it serves more than 20 million people (so more than 50% of the population, which is impressive for a developing country), and it has a real track record of solving issues during the Russian invasion - many people who can't access their physical passports can actually use world's first official digital passport in this app."

> "LiquidFeedback is perhaps another such example with which I have some familiarity, and it's highly experimentative idea of liquid democracy with transferring votes to others, but it already has some track record and is applied in field in a few different contexts."

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

- Davit explicitly noted familiarity effects in manual review: "my human review will probably be biased because I have a varying degree of familiarity with some of the software."
- The review was in progress in that email (first ~20 reviewed at the time, continuing afterward).
- As with prior iterations, any shortlist/winner structure depends on dossier coverage and evidence quality.

#### Assessment

### Full manual ranking table (sheet snapshot)

Transcribed from Davit's sheet (`Entry`, eight criteria percentages, `Overall`, `Comments`):

| Rank | Entry | Real-world political relevance | Movement usefulness | Track record | Generalizability | Evidence quality | Systemic significance | Timeliness | Integrity over hype | Overall | Comments |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Diia | 90% | 79% | 95% | 82% | 98% | 99% | 95% | 92% | 91% | Previous extensive knowledge of this one |
| 2 | Open contracting | 90% | 85% | 99% | 99% | 90% | 90% | 70% | 95% | 90% | — |
| 3 | Aleph (OCCRP) | 89% | 89% | 95% | 95% | 90% | 90% | 80% | 90% | 90% | Previous extensive knowledge of this one |
| 4 | LiquidFeedback | 85% | 95% | 80% | 89% | 89% | 90% | 85% | 95% | 89% | Previous knowledge of this one |
| 5 | SecureDrop | 90% | 85% | 90% | 90% | 80% | 90% | 70% | 90% | 86% | — |
| 6 | mySociety | 79% | 83% | 90% | 70% | 85% | 95% | 80% | 90% | 84% | — |
| 7 | Guardian Project | 88% | 88% | 90% | 70% | 80% | 80% | 80% | 85% | 83% | Previous knowledge of this one |
| 8 | Tor Project | 80% | 80% | 90% | 90% | 78% | 80% | 80% | 80% | 82% | Previous knowledge of this one |
| 9 | Alaveteli | 80% | 80% | 85% | 80% | 70% | 90% | 80% | 90% | 82% | — |
| 10 | Matrix | 75% | 75% | 85% | 79% | 80% | 85% | 85% | 85% | 81% | Previous knowledge of this one |
| 11 | FixMyStreet | 79% | 79% | 80% | 60% | 80% | 85% | 90% | 95% | 81% | — |
| 12 | Loomio | 85% | 85% | 90% | 70% | 75% | 80% | 80% | 80% | 81% | — |
| 13 | Polis | 75% | 80% | 89% | 75% | 80% | 80% | 75% | 70% | 78% | Previous knowledge of this one |
| 14 | ODK | 70% | 68% | 90% | 95% | 80% | 80% | 60% | 80% | 78% | — |
| 15 | CONSUL Democracy | 82% | 90% | 70% | 85% | 75% | 70% | 75% | 70% | 77% | — |
| 16 | Cobudget | 65% | 85% | 80% | 60% | 75% | 75% | 80% | 90% | 76% | — |
| 17 | AlgorithmWatch | 89% | 80% | 75% | 60% | 79% | 80% | 70% | 68% | 75% | — |
| 18 | CKAN | 80% | 60% | 85% | 68% | 75% | 80% | 60% | 75% | 73% | — |
| 19 | Mastodon | 60% | 65% | 75% | 55% | 65% | 75% | 75% | 65% | 67% | — |
| 20 | Creative Commons | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | — |
| 21 | GOV.UK Notify | 80% | 60% | 89% | 78% | 85% | 85% | 85% | 85% | 81% | — |
| 22 | Humanitarian OpenStreetMap | 90% | 80% | 95% | 95% | 95% | 85% | 85% | 95% | 90% | — |
| 23 | OpenCRVS | 90% | 80% | 95% | 90% | 80% | 95% | 90% | 90% | 89% | — |
| 24 | PolicyEngine | 70% | 60% | 70% | 70% | 80% | 80% | 70% | 70% | 71% | — |
| 25 | Privacy Badger | 90% | 80% | 85% | 80% | 85% | 85% | 85% | 85% | 84% | — |
| 26 | Ushahidi | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 27 | GlobaLeaks | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | 90% | — |
| 28 | HURIDOCS | 80% | 80% | 80% | 85% | 80% | 80% | 85% | 85% | 82% | — |
| 29 | Turkopticon | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 30 | Citizen OS | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 31 | CiviCRM | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 32 | Talk to the City | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | 80% | — |
| 33 | Full Fact AI | 90% | 90% | 78% | 88% | 80% | 95% | 90% | 85% | 87% | — |
| 34 | Open Ownership | 89% | 80% | 75% | 60% | 79% | 80% | 70% | 68% | 75% | — |
| 35 | Participedia | 70% | 68% | 90% | 95% | 80% | 80% | 60% | 80% | 78% | — |
| 36 | OpenSanctions | 65% | 85% | 80% | 60% | 75% | 75% | 80% | 90% | 76% | — |
| 37 | OpenProcurement | 89% | 80% | 89% | 80% | 89% | 80% | 80% | 89% | 85% | — |
| 38 | Tracka | 80% | 80% | 80% | 80% | 80% | 75% | 85% | 90% | 81% | — |
| 39 | OPORA | 89% | 90% | 95% | 68% | 88% | 80% | 90% | 95% | 87% | — |
| 40 | Worker Info Exchange | 88% | 90% | 78% | 78% | 90% | 95% | 75% | 99% | 87% | — |

### Linked entries (candidate URLs)

- [Diia](https://expo.diia.gov.ua)
- [Open contracting](https://www.open-contracting.org)
- [Aleph (OCCRP)](https://aleph.occrp.org)
- [Creative Commons](https://creativecommons.org)
- [Humanitarian OpenStreetMap](https://www.hotosm.org)
- [GlobaLeaks](https://www.globaleaks.org)
- [LiquidFeedback](https://liquidfeedback.com)
- [OpenCRVS](https://www.opencrvs.org)
- [Full Fact AI](https://fullfact.org/ai)
- [OPORA](https://www.oporaua.org)
- [Worker Info Exchange](https://www.workerinfoexchange.org)
- [SecureDrop](https://securedrop.org)
- [OpenProcurement](https://openprocurement.io)

---

### v6 Six-jury ITN/A deliberation

- **PR**: [v6](https://github.com/nwspk/politech-awards-2026/pull/15)
- **Status**: open
- **Author**: @sugaroverflow
- **Date**: 2026-03-09
- **Top project**: [algorithmwatch.org](https://algorithmwatch.org) (score: 97)

#### Heuristic

This heuristic inherits the approach in [v5: ITN/A multi-agent deliberation heuristic](https://github.com/nwspk/politech-awards-2026/pull/12) with **6 independent AI juries** that run an ITN/A deliberation on a shortlist of 183 projects. The jury with the highest confidence score picks the project winner.

v6 inherits the full ITN/A evaluation and deliberation pipeline from v5 — the same 4-agent structure (political, relational, experimental), the same multi-argument format with a facilitator, and the same scoring tiers (deliberated: 51–90, 2+ greens: 45, 1 green: 20, none: 5).

**The changes are in who runs the jury, how the shortlist is built, and how the winner is selected.**

**Total pipeline spend:** $11.30 USD

### Phase 1: Evaluation

Grok 4.1 Fast, Claude Sonnet 4, and Kimi 2.5 independently evaluate all **321 candidates** across three lenses: political, relational, and experimental. Each assessment produces a bucket (green / yellow / red / grey) and a rationale per dimension.

### Phase 2: Shortlist

Shortlist rule: **at least 2 of the 3 models** rated the project green or yellow in any dimension.

This **2-of-3 rule** produced **183 candidates**.

### Phase 3: Six Jury Deliberations

The three original models deliberate on their own evaluation data (each model reads only its own assessments). Each jury runs the full ITN/A multi-agent deliberation — agents argue, contest, revise scores, and produce a ranked shortlist with a winner, confidence score, and case for/against.

**Original juries:**

- Grok 4.1 Fast
- Claude Sonnet 4
- Kimi 2.5

**Mixed juries** (deliberate from merged assessments):

- **GPT-4o** — mainstream / average voter
- **DeepSeek-R1** — adversarial / contrarian
- **Specialist panel** — Gemini 2.5 Pro (political), Llama 3.3 70B (relational), Mistral Large (experimental)

### Phase 4: Promotion

The six jury verdicts are compared by confidence score. The **highest-confidence jury** is promoted and selects the final award winner.

---

#### Rationale

v5 showed us that a single deliberating agent via Grok could produce a well-reasoned winner (one that made sense in an obvious political-tech-award sort of way), but left an open question:

> Is the result robust to model choice?  
> Do different AI “worldviews” produce the same answer?

v6 tests this theory.

Three original juries read their own evaluation data. The three mixed juries read merged assessments and deliberately introduce different perspectives: GPT-4o as a mainstream / institutional voice, DeepSeek-R1 as a contrarian with different political training data, and a specialist panel routing each evaluation lens (political, relational, experimental) to a purpose-fit model.

### Confidence scoring

Winner selection is based on the **confidence score** — the jury that is most certain of its verdict wins.

Grok 4.1 Fast again had the highest confidence (as in v5). It was also the cheapest and fastest model while still producing interesting analysis.

---

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

- **Confidence is self-reported** by the deliberating model. A model that is overconfident by nature may win regardless of reasoning quality (e.g. Grok?).
- **Claude’s calibration asymmetry** skews the Claude jury’s deliberation pool to a very narrow shortlist, which likely explains its low confidence (42/100). This may not be a fair comparison.
- **Merged assessments** for mixed juries use the most optimistic bucket per dimension, which biases mixed juries toward charitable readings.
- **Specialist panel** (different model per lens) is experimental — no prior evidence that routing lenses to different models improves deliberation quality.
- **All six juries picked a different winner.** The result is sensitive to which jury gets promoted. The committee may want to treat the full set of verdicts as equally valid competing perspectives.
- **Technical issues:**
  - Pipeline ran on a VPS with a Nanoclaw agent overnight.
  - Kimi 2.5 was the least reliable model (repeated stalling, manual restarts).
  - Several container resets meant partial progress was lost and some evaluations were re-run.
  - Deliberation phase: ~6h 38m (14:40–21:18 UTC).
  - Total cost ~$11.30, mostly from re-runs due to stalling.

---

#### Assessment

Human-readable Markdown summaries of all six jury deliberations: [jury README](https://github.com/nwspk/politech-awards-2026/blob/main/iterations/v6/jury-delegations/README.md).

**All six juries disagreed on their winners:**

| Jury | Winner | Confidence |
|------|--------|------------|
| Grok | AlgorithmWatch | 95 |
| Specialist Mixed Jury | Alaveteli | 90 |
| Adversarial | SlopStop | 85 |
| Kimi | Worker Info Exchange | 82 |
| Mixed Jury | Bellingcat Toolkit | 75 |
| Claude | Awesome Gov Datasets | 42 |

Different AI training backgrounds appear to encode different political values:

- **Grok** — systemic advocacy, evidence-to-policy pipelines
- **DeepSeek** — decentralised infrastructure
- **Specialist panel** — civic access tools with proven relational networks

**AlgorithmWatch** as the promoted winner (score 97, confidence 95) is defensible: it scored near-uniformly high across all three lenses (political 98, relational 97, experimental 97) and was **contested**, meaning it survived challenge.

---

### Findings & reflections

#### Why is it always Grok?

Grok performed well on v5; testing against other model juries, it again came out on top by confidence. Grok may be trained to be opinionated (e.g. if its corpus includes Twitter/X debates). This task structure — high velocity, high conviction, argument format — may suit Grok’s design. The confidence score Grok reports (95/100) might reflect a greater willingness to say it’s confident (analogous to Claude being less willing to assign green). The ITN/A deliberation format (make a case, contest, revise) may be one Grok is natively good at.

#### Claude (claude-sonnet-4-6) is structurally conservative as an evaluator

| Model | Greens | Green+Yellow |
|-------|--------|--------------|
| Grok | 120 | 191 |
| Kimi | 33 | 230 |
| Claude | 3 | 92 |

Claude assigned **green to only 3 / 321 projects**, compared with Grok’s 120.

The shortlist rule was originally a union of green projects but had to be redesigned after evaluation. Research into Claude Sonnet 4 suggests this behaviour is related to RLHF calibration around political statements and alignment. The shortlist rule was changed to the **2-of-3 model rule**, widening the pool to **183 projects**.

#### Shortlist rule design

Goal: roughly **100 projects** (~⅓ of the dataset).

| Strategy | Count | Verdict |
|----------|-------|---------|
| Union — any model green or yellow | 242 | Too loose; single-model noise |
| **2-of-3 — at least 2 models green or yellow** | **183** | Chosen |
| Intersection — all 3 models green or yellow | 88 | Too tight; Claude’s calibration removes too many |

**Rule chosen:** A project enters the shortlist if **at least 2 of the 3 models** rated it green or yellow in any dimension.

#### Jury structure

**Original juries** (each reads its own evaluation data):

| Jury | Model | Assessments |
|------|-------|-------------|
| grok | x-ai/grok-4.1-fast | assessments-grok.json |
| claude | anthropic/claude-sonnet-4-6 | assessments-all-claude.json |
| kimi | moonshotai/kimi-k2 | assessments-all-kimi.json |

**Mixed juries** (read merged assessments):

| Jury | Model(s) | Rationale |
|------|----------|------------|
| mixed | openai/gpt-4o | mainstream / institutional perspective |
| adversarial | deepseek/deepseek-r1 | contrarian political training data |
| specialist | gemini-2.5-pro + llama-3.3-70b + mistral-large | per-lens specialists |

Winner selection compares `winner.confidence` across all six deliberation outputs.

---

### Open questions

- Does Claude’s calibration asymmetry reflect a different political epistemology, or just noise? The adversarial (DeepSeek) jury is an interesting contrast.
- The specialist jury (per-lens model specialisation) is experimental — does routing political/relational/experimental to different models improve deliberation quality?
- Confidence scores across juries indicate how contested the winner is. High variance = interesting; low variance = robust consensus.
- Open expansions from [the v5 iteration](https://github.com/nwspk/politech-awards-2026/pull/12).
- Trying a different framework could further test reflections on Grok vs Claude on deliberations and confidence.

---

### v5 Three-agent ITN/A deliberation

- **PR**: [v5](https://github.com/nwspk/politech-awards-2026/pull/12)
- **Status**: merged
- **Author**: @Gamithra
- **Date**: 2026-02-22
- **Top project**: [github.com](https://github.com/g0v/vue.vtaiwan.tw) (score: 90)

#### Heuristic

Three-agent ITN/A deliberation: independent AI evaluators assess each project through political, relational, and experimental personas on 4 different lenses, argue in multi-turn conversation, and produce a ranked shortlist.

#### Rationale

v5 changes the question from "does this project match criteria" to "does this project make sense to three evaluators who are forced to argue with each other."

The pipeline has two stages:

**Stage 1 — Evaluation** (`scripts/itn/itn-a-eval.ts`): Each of the 321 projects is assessed independently by three agents: political (power lens), relational (care lens), experimental (epistemics lens) — each applying the full ITN/A protocol: self-check, four lenses with spectrum positioning, felt sense, then a bucket assignment (green / yellow / red / grey). Results cached to `cache/assessments.json` (this is ~39k lines and took a good few hours to run).

**Stage 2 — Deliberation** (`scripts/itn/itn-a-deliberate.ts`): The projects that reached green consensus across all three agents enter a deliberation round. Agents score all 21 *relative to each other* with full page content available — not against an abstract rubric but against the actual field. The top conflicts by rank spread are then argued in multi-turn conversation (3 turns each, with a facilitator between turns who calls out evasion). Final scores reflect where positions settled after argument. Results cached to `cache/deliberation.json`.

**Scoring in the-algorithm.ts**:
- Deliberated projects: their argument-settled aggregate score (range in this run: 51–90)
- 2+ green assessments, not deliberated: 45
- 1 green assessment: 20
- 0 greens / grey / red: 5

The numeric scores should be read as *ordinal*, not cardinal — 90 means "won the deliberation," not "90% good." The gap between tiers (90 → 45 → 20 → 5) is intentionally large; the ranking within each tier is what matters.

**Winner this run: vTaiwan (g0v)**

vTaiwan ranked first in the deliberation — the agents converged on it as the project that most fully embodies political technology in 2026: proven participatory infrastructure, real policy impact (Uber regulation, same-sex marriage), and genuinely open forks (Poland, France). The case against: Taiwan-centric origins, uncertain scaling to low-trust or non-digital-first contexts.

See **[Documents](../../iterations/v5/README.md#documents)** below for the Stage 2 deliberation summary and raw outputs.

#### Data sources

- project URL
- scraped content
- additional data files

#### Limitations

Approximately 280 of 321 projects receive a score of 5, 20, or 45 with no fine-grained distinction within those tiers. The current cached page content isn't very useful. The projects that models have former knowledge of rank much higher.

**The agents argue from page content + prior assessments.** The deliberation agents see extracted page text (3000 chars) and the evaluation summaries. This is better than nothing but still lossy — page text isn't the same as knowing what a project actually does in practice.

**All agents run on the same model** (x-ai/grok-4.1-fast). True independence would use different models or temperatures. The disagreements that emerge are real — rank spreads of 15–20 on contested projects, genuine score revisions in argument — but they're disagreements within one model's possibility space. Tried a range of models in the process but this one emerged as the cheapest and fastest while producing interesting analysis.

The evaluation framework reflects specific values — systemic change over symptom treatment, genuine experimentation over locked gospel, nourishment over extraction, stewardship over ego. Projects that score low may be genuinely valuable under different value weightings.

#### Assessment

v5 validated that a contest-based evaluation can produce a legible shortlist and a defensible winner from noisy web evidence. Compared with earlier URL/content keyword approaches, the ITN/A pipeline produced richer disagreements, explicit tradeoffs, and clearer rationale trails for why `github.com/g0v/vue.vtaiwan.tw` won this run.

The main unresolved issue is calibration and robustness: most projects still collapse into coarse non-deliberated tiers, and all agents in this run shared the same base model family. This made v6's cross-model jury design the natural next step.

---

*Files added/modified:*
- `the-algorithm.ts` — v5 heuristic added, `CURRENT_HEURISTIC` switched to `heuristicV5`
- `scripts/itn/itn-a-eval.ts` — three-agent ITN/A evaluation pipeline entrypoint
- `scripts/itn/itn-a-deliberate.ts` — multi-turn deliberation with relative scoring and facilitator entrypoint
- `iterations/v5/` — snapshot of v5 deliverables (deliberation summary, deliberation.json, assessments.json) so future runs don’t overwrite them
- `cache/assessments.json` — evaluation outputs for all 321 projects (live cache; v5 snapshot in `iterations/v5/assessments.json`)
- `cache/deliberation.json` — deliberation outputs (live cache; v5 snapshot in `iterations/v5/deliberation.json`)

---

### v4 AI governance body bonus

- **PR**: [v4](https://github.com/nwspk/politech-awards-2026/pull/9)
- **Status**: merged
- **Author**: @jcoombes
- **Date**: 2026-02-13
- **Top project**: [algorithmwatch.org](https://algorithmwatch.org) (score: 65)

#### Heuristic

Base score (50) + inclusion bonus (URL keywords) − fetch-failure penalty (10) + AI-body bonus (up to 15). Uses cached page fetches to penalise dead/inaccessible sites and reward projects whose page content mentions AI governance, safety, or policy keywords.

#### Rationale

v3 showed that URL-only matching yields almost no signal. This iteration fetches each project's homepage, caches the HTML, and uses the cached body to surface projects that explicitly discuss AI governance, safety, or policy. Sites that fail to fetch receive a penalty.

#### Data sources

- project URL
- cached page body

#### Limitations

Requires cache to be populated (npm run cache:sites). AI bonus capped at 3 keyword matches × 5 points.

#### Assessment

n/a

---

### v3 Keyword clusters (no randomness)

- **PR**: [v3](https://github.com/nwspk/politech-awards-2026/pull/7)
- **Status**: merged
- **Author**: @sugaroverflow
- **Date**: 2026-02-07
- **Top project**: [benefits-calculator.turn2us.org.uk](https://benefits-calculator.turn2us.org.uk) (score: 11)

#### Heuristic

Removing the random scoring tilt mechanism by trying to score projects by keyword clusters. Each project receives points if the URL (the only data we currently have) matches across the 4 policy-framework-aligned keyword clusters.

#### Rationale

v2 showed that keyword matching against URLs can surface relevant projects — but the random base score meant that it was different each time it was run, which isn't very reliable. This iteration removes randomness entirely to ask:

**what can keyword clusters alone tell us about 321 projects when our only data source is a URL string?**

It turns out the answer is: almost nothing. Only 2 of 321 projects score above baseline. We can probably consider this a failure of our dataset which is only URLs.

#### Data sources

- project URL
- additional data files

#### Limitations

n/a

#### Assessment

n/a

---

### v2 Exclusion keyword bonus

- **PR**: [v2](https://github.com/nwspk/politech-awards-2026/pull/2)
- **Status**: merged
- **Author**: @Asil
- **Date**: 2026-02-04
- **Top project**: [civicmatch.app](https://civicmatch.app) (score: 100)

#### Heuristic

Random base score (1-100) + inclusion bonus based on exclusion keywords in URL

#### Rationale

The exclusion-focused scoring heuristic is intentionally crude: a keyword-based bonus derived from the project URL. It's meant to make political values legible and contestable, not definitive. The heuristic biases scores toward projects addressing populations most likely to be excluded from government services (inspired by GovCamp digital inclusion discussions).

#### Data sources

- project URL

#### Limitations

Only matches keywords in the URL string itself, not in actual project content. Many relevant projects won't have these keywords in their URL.

#### Assessment

n/a

---

### v1 Random scoring

- **PR**: [v1](https://github.com/nwspk/politech-awards-2026/pull/1)
- **Status**: merged
- **Author**: n/a
- **Date**: n/a
- **Top project**: [relationaltechproject.org](https://relationaltechproject.org)

#### Heuristic

Random score between 1 and 100

#### Rationale

n/a

#### Data sources

- project URL

#### Limitations

Entirely random; no meaningful evaluation of projects.

#### Assessment

n/a
