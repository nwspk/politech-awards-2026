# Alexandra framework — Technology Evaluation (Award A: “Most Politically Transformative”)

Canonical rubric text for the **v9 three-model jury** pipeline (`scripts/alexandra/`).  
Prompts should **inject or reference** this file so scores stay contestable and versioned.

---

## CLUSTER A: Political significance (what it is doing)

### D1 — Power asymmetry addressed (1–5)

How significant is the power imbalance being corrected?

| Score | Description |
|------:|---------------|
| 1 | Improves access to information within existing power relations |
| 2 | Reduces information asymmetry between citizens and institutions |
| 3 | Enables collective action against an organized powerful actor |
| 4 | Exposes or disrupts a system of structural power (corporate, state, algorithmic) |
| 5 | Challenges a fundamental mechanism through which power reproduces itself |

**Example calibration:** MarksOutOfTenancy = 2; WorkerInfoExchange = 4; Tor = 5; OpenOwnership = 5

### D2 — Democratic depth (1–5)

How far along the participation spectrum does it go?

| Score | Description |
|------:|---------------|
| 1 | Inform — makes information available passively |
| 2 | Consult — collects citizen input for decision-makers to consider |
| 3 | Involve — citizens actively shape options and framing |
| 4 | Collaborate — citizens co-produce decisions or governance |
| 5 | Empower — citizens directly control outcomes or resources |

**Example calibration:** TheyWorkForYou = 1; FixMyStreet = 2; Decidim = 4; Quadratic Vote = 5; PolicyKit = 5

### D3 — Counterfactual impact (1–5)

What would the world look like without this project?

| Score | Description |
|------:|---------------|
| 1 | Easy substitutes exist; gap would be filled quickly |
| 2 | Partial alternatives exist but with significant degradation |
| 3 | No direct substitute; the function would be poorly served |
| 4 | Unique approach; nothing else does this in this way |
| 5 | Has enabled outcomes that are structurally impossible without it |

**Example calibration:** generic survey tool = 1; Alaveteli = 3; Polis = 4; SecureDrop = 5

---

## CLUSTER B: Reach and leverage (how much it is doing it)

### D4 — Scale (1–5)

How many people, places, or systems does it actually reach?

| Score | Description |
|------:|---------------|
| 1 | < 1,000 active users / 1 jurisdiction |
| 2 | 1,000–10,000 users / 2–5 jurisdictions |
| 3 | 10,000–100,000 users / 5–15 jurisdictions |
| 4 | 100,000–1M users / 15–50 jurisdictions |
| 5 | 1M+ users / 50+ jurisdictions or national infrastructure |

**Note:** For infrastructure (CKAN, MapIt, Schema.org), count **downstream** dependent applications, not direct users only.

### D5 — Leverage / infrastructure value (1–5)

Does this project enable other projects?

| Score | Description |
|------:|---------------|
| 1 | Standalone tool; no downstream dependencies |
| 2 | Has an API or data feed that a few others use |
| 3 | Is a platform that 10+ organisations build on |
| 4 | Is a standard or protocol that shapes an ecosystem |
| 5 | Foundational infrastructure without which a category of political technology could not function |

**Example calibration:** WardWatch = 1; GrantNav = 2; CKAN = 4; Creative Commons = 5; Schema.org = 5

### D6 — Demonstrated accountability outcomes (1–5)

Has it produced verifiable accountability events?

| Score | Description |
|------:|---------------|
| 1 | No documented accountability outcomes yet |
| 2 | Used in journalism or research; cited in public interest work |
| 3 | Directly contributed to disclosed wrongdoing, policy change, or legal outcome |
| 4 | Multiple documented cases; measurable policy or legal impact |
| 5 | Has demonstrably altered behaviour of powerful actors at scale (policy, corporate practice, legal precedent) |

**Example calibration:** new deliberation startup = 1; Open Contracting = 3; Aleph/OCCRP = 5; Tor = 5; OpenOwnership = 3 (growing)

---

## CLUSTER C: Project quality (how well it is doing it)

### D7 — Openness and commons orientation (1–5)

Is the project itself structured as a commons?

| Score | Description |
|------:|---------------|
| 1 | Proprietary / closed-source / commercial with no open components |
| 2 | Some open elements; primarily commercial model |
| 3 | Open-source but single-vendor controlled |
| 4 | Open-source, community governed, open data |
| 5 | Open-source, federated/forkable, actively designed against lock-in |

**Example calibration:** Granicus = 1; PolicyMogul = 2; TheyWorkForYou = 4; Decidim = 5; Matrix = 5

### D8 — Resource efficiency (1–5)

How much impact per unit of funding? (Requires funding data where possible.)

| Score | Description |
|------:|---------------|
| 1 | Large budget (>£5M/yr), modest impact relative to spend |
| 2 | Medium budget (£1–5M/yr), proportionate impact |
| 3 | Small budget (£100K–1M/yr), strong impact |
| 4 | Minimal budget (<£100K/yr), significant impact |
| 5 | Near-zero budget, substantial or foundational impact |

**Proxy:** Where funding is unknown, infer cautiously from organisational type and document uncertainty in evidence notes.

**Example calibration:** Granicus = 1; mySociety = 2–3; WorkerInfoExchange = 4; conservativepartyfunding.co.uk = 5; thegovernmentsays.com = 5

### D9 — Net civic benefit / misuse risk (1–5)

Can this project's positive societal impact be explicitly tracked? Is there documented or structural misuse risk?

| Score | Description |
|------:|-------------|
| 1 | Primary or equally prominent documented use is harmful or illegal; positive civic impact cannot be isolated from misuse; OR net societal impact is contested or demonstrably negative |
| 2 | Significant dual-use concern; positive civic use is real but structurally inseparable from harmful use; OR civic benefit is theoretical or structural, with no trackable positive outcomes |
| 3 | Primarily civic intent; some dual-use potential but not documented at scale; benefit measurable in principle but data is sparse or indirect |
| 4 | Explicit positive societal outcomes documented and attributable; misuse is limited or structurally contained by the tool's design |
| 5 | Demonstrable, population-level positive civic impact that can be tracked with specific evidence; misuse is structurally prevented or negligible by design |

**Scope rule:** Score the *net* effect across the full user population, not just intended use.
- A tool used by 90% activists and 10% criminals is not automatically a 4 — the 10% matters if the harm is severe and unmitigable.
- A tool with only civic users but no documented outcomes is a 3, not a 5.

**Evidence requirements:**
- D9 ≤ 2: cite documented misuse OR explain why positive benefit cannot be isolated from harm
- D9 ≥ 4: cite specific tracked outcomes — court cases, policy changes, user counts with a verified civic purpose, savings figures, or similar
- D9 = 3: state what evidence would be needed to move the score up or down

**Example calibration:**

| Score | Project | Rationale |
|------:|---------|-----------|
| 1 | Sci-Hub | Copyright infringement is the primary legal characterisation; no civic governance function; illegal in most jurisdictions |
| 1 | The DAO (2016) | $60M hack; Ethereum chain split; net societal impact contested or negative |
| 2 | Tor Project | Dark web criminal use (drug markets, CSAM) is structurally inseparable from activist use; positive impact on dissidents is real but cannot be isolated or quantified at the aggregate |
| 2 | Aragon | VC-backed crypto governance; outcomes primarily financial; civic benefit theoretical |
| 3 | Matrix | Hosts some extremist instances; net civic benefit likely positive but unquantified at instance level |
| 3 | Internet Archive | Clear preservation benefit; ongoing copyright litigation is a live misuse dispute |
| 4 | Aleph / OCCRP | Documented corruption exposures attributable to the tool; misuse structurally limited (vetted journalist access) |
| 4 | Open Contracting Partnership | Policy adoption documented across jurisdictions; savings figures published |
| 5 | SecureDrop | Whistleblowing outcomes documented; design structurally prevents misuse (no metadata retained, journalist-only access model) |
| 5 | Decidim | Participatory budgeting outcomes tracked per city; open governance audit trail |
| 5 | OpenProcurement (ProZorro) | $4B+ documented procurement savings; independently audited; anti-corruption by design |
| 5 | Worker Info Exchange | Court wins for gig workers are public record; direct attribution to tool |

---

## Award A weights (headline composite)

| Dimension | Weight |
|-----------|--------:|
| D1 Power asymmetry | 20% |
| D2 Democratic depth | 15% |
| D3 Counterfactual impact | 5% |
| D4 Scale | 10% |
| D5 Leverage | 10% |
| D6 Accountability outcomes | 15% |
| D7 Openness | 5% |
| D8 Resource efficiency | 5% |
| D9 Net civic benefit | 15% |

**Composite (1–5 scale):**
`0.20·D1 + 0.15·D2 + 0.05·D3 + 0.10·D4 + 0.10·D5 + 0.15·D6 + 0.05·D7 + 0.05·D8 + 0.15·D9`

**Rationale for weight changes vs. v9:**
- D9 (15%) is new: rewards demonstrable civic benefit, penalises unresolved misuse risk
- D6 raised 10%→15%: accountability outcomes are the primary proxy for trackable positive impact
- D3 reduced 15%→5%: counterfactual impact correlated too strongly with D1 (r=0.76); retained only as a tiebreaker
- D1 reduced 25%→20%, D2 reduced 20%→15%: weight redistributed to evidence-based dimensions

---

## Evidence and inter-rater process (design intent)

- **D1–D3, D7:** Suited to expert / juror judgment; target **≥3 independent scorers** and reliability metrics (e.g. Krippendorff’s α) in a full study.
- **D4:** Prefer stated user numbers, reports, SimilarWeb-style proxies; for infrastructure use **downstream** reach.
- **D5:** GitHub dependents, API usage, manual audit of downstream projects.
- **D6:** News search, academic citations, legal case mentions, impact reports — **verifiable URLs** where possible.
- **D7:** License file, governance docs, README.
- **D8:** Open Collective, charity filings, 990s, grant databases; else proxy + uncertainty flag.

**Calibration:** Score **5–10 anchor projects** first so all jurors align on the scale.

**Incomparability (optional extensions):**

- Infrastructure: apply D4 downstream multiplier; score D5 on full scale.
- Security tools: consider weighting D3 higher (absence of harm is hard to measure).
- Research / standards: D6 may need longer time horizon; use adoption / citations.
- Solo / unfunded: D8 achievement at a given D4 is weighted more heavily.

---

## Honest limitation

The most politically significant projects often have the **hardest-to-measure** impact. The framework leans on **D3 (counterfactual)** and **D5 (leverage)** for structural effects, and on **human (or juror) judgment** where metrics fail. Quantified scores are best for **shortlisting and transparency**, not for replacing final committee judgment.

---

## Taxonomy note

A separate **political technology taxonomy** (participation vs transparency vs OSINT, etc.) is useful for **category rankings** and **intra-category comparison**. It is **not** part of the numeric rubric above unless the committee explicitly adds category corrections.
