# Reflection: v4 Synthesis
## Evaluator: Fatima Sarah Khalid
## Version: v4 | 2026-03-30

---

## What the divergence reveals

Running implementation-first and agency-first framings back-to-back on the same project list produces a sharper map of the civic tech field than either framing alone.

The clearest structural finding: the field sorts into two failure modes and one success mode.

**Failure mode 1 — Captured Scale.** Forty projects score well under implementation-first criteria but drop sharply under agency-first. These are tools that have achieved real deployment, often with government adoption, but at the cost of community autonomy. arXiv (v3: 6, v5: 178), GOV.UK Pay (v3: 112, v5: 311), meet.coop (v3: 16, v5: 230), TheyWorkForYou (v3: 58, v5: 246). The pattern: effective at delivering civic value within a fixed institutional arrangement, but not forkable, not re-governable, not designed for communities that can't or won't route through that institution. Under Fatima's synthesis frame, these are not bad projects — they are incomplete ones.

**Failure mode 2 — Promising Primitives.** Forty-one projects score well under agency-first but remain unproven at scale. Abstract Wikipedia (v5: 3, v3: 206), PolicyKit (v5: 26, v3: 207), Pursuance Project (v5: 50, v3: 189). These are tools where the architecture is right — forkable, exposes logic, reduces institutional dependence — but real-world adoption hasn't followed yet. The question they raise: does a technically correct primitive count as civic impact if no community is actually using it?

**Success mode — Proven Commons.** 119 projects sit in both top halves simultaneously. These are the projects where deployment and autonomy are not in tension. They are rare — roughly 37% of the field. But they exist, and they cluster at the top of both rankings.

---

## Projects that surprised

### Plausible Analytics (v3: 91 → v5: 308, delta: −217)

The biggest downward mover in the agency-first framing. Plausible Analytics is a privacy-respecting, open source web analytics tool — exactly the kind of privacy infrastructure C6 rewards under both framings. Why the collapse in v5? Plausible has a hosted SaaS model: most users depend on Plausible's infrastructure rather than self-hosting. Under M_AGENCY, tools that are technically open source but practically require a vendor relationship score reduce. The gap between "open source in principle" and "forkable in practice" matters.

### meet.coop (v3: 16 → v5: 230, delta: −214)

One of the most striking inversions. Under v3, meet.coop was a top-20 project: worker-owned cooperative, community-governed, open source video conferencing. Under v5, it dropped sharply. Why? meet.coop's cooperative model is community-governed in the organisational sense, but its value depends on participation in a specific cooperative platform — you cannot fork meet.coop's community without founding a new cooperative. The agency-first frame distinguishes between community ownership of a platform (meet.coop) and community ownership of a primitive (Matrix, Mastodon). Matrix and Mastodon let you run your own infrastructure. meet.coop lets you join theirs.

### Abstract Wikipedia (v5: 3 → v3: 206, delta: +203)

The biggest upward mover toward agency. A Wikimedia project building a multilingual, structured content layer that any language community can use without translation bottlenecks. Under v5, it is near-ideal: community-governed, forkable data layer, serves genuinely excluded communities (especially smaller language communities), exposes its logic. Under v3, it scores poorly because deployment evidence is thin — it is still in development and has not reached the scale of adoption that v3 demands. This is the clearest Promising Primitive in the field.

### Privacy Badger (v3: 74 → v5: 280, delta: −206)

Privacy Badger's collapse in v5 reveals a subtle point about community infrastructure versus individual tools. Privacy Badger is excellent anti-surveillance software — it is exactly what C6 rewards. But it is a browser extension that works within an individual's browser. It is not community-governed, not forkable in the community sense, not designed to be deployed by a community as shared infrastructure. Under v3's implementation-first framing, it scored well as a widely-used, open source privacy tool. Under v5's community infrastructure emphasis, it reads as a personal tool rather than commons infrastructure.

### CONSUL Democracy (v3: 7 → v5: 2)

One of only a few projects that scored in the top 10 of both framings. CONSUL is deployed at scale across dozens of governments, AND it is open source, forkable, and designed for community adaptation. The v5 framing might have been expected to penalise CONSUL for its government-adoption model — but CONSUL's architecture is explicitly designed for communities to deploy independently, without institutional gatekeeping. The v5 top-2 ranking shows that government adoption and community autonomy are not mutually exclusive when the tool is built as a primitive rather than a platform.

---

## The synthesis winner: Bonfire (avg: 89.8)

Bonfire wins the v4 synthesis — v3 rank 4, v5 rank 9, average score 89.8.

Bonfire did not win either individual framing (Decidim won v3 at 82.8; Mastodon won v5 at 100.0). It wins the synthesis because it sits near the top of both rankings without the extremes that push Decidim down in v5 (government-heavy deployment model) or Mastodon down in v3 (limited government adoption evidence, too focused on individual expression rather than civic structure).

Bonfire is federated, modular, explicitly designed as a set of primitives rather than a single platform. Its components can be assembled for community organising, mutual aid coordination, or civic deliberation. It is open source under AGPL, has active community governance, and is deployed across community instances. Under the four heavyweight criteria (C1, C2, C3, C6 — each at max 30), it scores consistently high in both framings.

The synthesis winner is not the most dramatic choice — Mastodon's 100.0 in v5 is a stronger individual signal. But Bonfire represents what Fatima's feedback points toward: a primitive that scales through community replication rather than institutional adoption, deployed just enough to demonstrate viability, designed to be reshaped rather than just used.

---

## What this two-axis view raises for civic tech funding

**1. The "deployment or bust" bias in most funding criteria disadvantages the projects that matter most under agency-first framing.**

Most civic tech funders evaluate on implementation maturity, user numbers, and government adoption evidence. These are the criteria that produce Captured Scale outcomes. A funder using only v3 criteria would fund arXiv over Abstract Wikipedia, GOV.UK Pay over Bonfire. The agency-first framing suggests this systematically undervalues the tools that communities most need to own their own infrastructure.

**2. The gap between open source and forkable-in-practice is larger than it appears.**

Many projects in the Captured Scale quadrant are technically open source. The divergence analysis shows that open source licensing is not the same as community forkability. Funders assessing "open source" as a binary criterion may be counting Captured Scale projects as compliant when the meaningful question is: can a community with modest resources deploy and re-govern this themselves without help from the original vendor?

**3. Proven Commons projects are rare and deserve disproportionate attention.**

Only 119 of 319 shared projects (37%) sit in the Proven Commons quadrant. These are the projects that have solved the harder problem of achieving deployment without sacrificing autonomy. Funding rare successes more generously — and asking of every Promising Primitive "what would it take to get to Proven Commons?" — seems like a productive frame for civic tech grant-making.

**4. The Promising Primitives quadrant identifies the frontier of civic infrastructure.**

Abstract Wikipedia, PolicyKit, Pursuance Project, EDGAR — these are tools where the architecture is right but the adoption hasn't followed. The synthesis view raises a question: should funders care about the difference between "not yet deployed" and "not deployable without institutional support"? The former is a timing problem; the latter is an architecture problem. The two-axis framework helps identify which is which.

**5. The Mastodon paradox.**

Mastodon won the agency-first framing with a perfect score of 100.0. In the synthesis, it ranks 4th (avg: 87.0, v3 rank: 11). This gap between perfect in one frame and 4th in synthesis is not a problem — it is the synthesis working correctly. Mastodon is the canonical example of agency-first civic infrastructure, but its use in explicitly civic and governmental contexts is less documented than Bonfire's or Decidim's. The synthesis says: Mastodon is the ideal, but Bonfire may be the more practical model for civic technology deployment specifically.
