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

---

## Award A weights (headline composite)

| Dimension | Weight |
|-----------|--------:|
| D1 Power asymmetry | 25% |
| D2 Democratic depth | 20% |
| D3 Counterfactual impact | 15% |
| D4 Scale | 10% |
| D5 Leverage | 10% |
| D6 Accountability outcomes | 10% |
| D7 Openness | 5% |
| D8 Resource efficiency | 5% |

**Composite (1–5 scale):**  
`0.25·D1 + 0.20·D2 + 0.15·D3 + 0.10·D4 + 0.10·D5 + 0.10·D6 + 0.05·D7 + 0.05·D8`

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
