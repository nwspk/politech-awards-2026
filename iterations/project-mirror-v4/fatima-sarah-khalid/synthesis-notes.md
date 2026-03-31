# Synthesis Notes: v3 + v5 → v4
## Evaluator: Fatima Sarah Khalid
## Version: v4 | 2026-03-30

---

## What the V3/V5 Comparison Reveals

The two framings ask a deceptively simple question in two different ways. V3 asks: *does this work?* V5 asks: *can communities govern this themselves?* These are not the same question, and the projects where the answers diverge are the most analytically interesting.

The divergence table reveals three distinct clusters: projects that score high on both axes (crossover champions), projects that score high on deployment but low on agency (proven but institutionally locked), and projects that score high on agency but have limited deployment (primitive but not yet proven at scale). The synthesis exists to hold all three clusters in view simultaneously — rewarding crossover champions while naming, rather than papering over, the tension between the other two.

---

## The Values Tension

Fatima's feedback describes a shift: "primitives over platforms, agency over participation, adaptability over fixed models." This signals a direction of travel in her thinking. But her background tells a different story — or at least, a complementary one. Code for Canada is explicitly about institutional embedding. The drone companion app worked because it engaged with Transport Canada's regulatory processes. Her career at GitLab is inside a large, well-resourced platform.

The tension is not a contradiction. It is the difference between what was necessary to build civic tech in 2019 (institutional partnership, government adoption, deployment at scale) and what she believes is needed now (primitives that communities can own and govern without institutional permission). The v3 framing reflects her earlier career; the v5 framing reflects her evolving framework. The v4 synthesis holds both in tension.

In practice, this means: CONSUL Democracy wins the synthesis not because it perfectly embodies either framing, but because it is one of a small number of projects that genuinely satisfies both. It is widely deployed AND self-hostable. It has government adoption AND open community governance. It is the rare project that does not force a choice between the two framings.

---

## Top 20 Crossover Projects (High on Both Axes)

These are the projects that rank in the top 20 of the synthesis table with divergence < 8 pts between v3 and v5 scores. They are the strongest consensus picks — both the implementation-first and agency-first lenses agree on their value.

1. CONSUL Democracy — widely deployed governments + self-hostable open source
2. LiquidFeedback — documented institutional adoption + open source, forkable
3. Decidim — Barcelona/Spain government deployment + active open-source community governance
4. Open Data Editor (ODE) — practical data tooling, open source, cross-jurisdiction
5. Polis — real-world deployment (vTaiwan, others) + open source, self-deployable
6. Alaveteli — FOI infrastructure, multi-country deployment + open source, forkable
7. mySociety Datasets and APIs — primitives (APIs), open, widely used
8. Cobudget — participatory budgeting deployments + community governance model
9. Open Standards for Data Guidebook — open standards documentation, highly forkable
10. Open Digital Planning — UK government deployment + open source
11. adhocracy+ — deployment evidence + open source community governance
12. Citizen OS — deliberation platform with real deployment + open source
13. Consul (Madrid) — the original deployment, both institutional and community
14. FixMyStreet — deployed across jurisdictions + open source
15. OpenFarm — community-governed, multi-locale, deployable
16. Countable — civic engagement, open source, multi-jurisdiction use
17. DemocracyOS — government deployment history + open source fork activity
18. Open Contracting Data Standard — standards-based, widely adopted
19. Popolo Project — open standards for legislative data, forkable
20. YourNextRepresentative / EveryPolitician — open data infrastructure, cross-jurisdictional

---

## Top 15 Divergences: What Patterns Emerge

These are the projects with the largest score gaps between v3 and v5 (in either direction).

| Project | V3 rank | V5 rank | Swing | Direction | Pattern |
|---|---|---|---|---|---|
| Open Access – Transparency International | 75 | 189 | 114 | V3 higher | Institutional reporting tool — deployment evidence strong, but requires civil society partnerships to function |
| deliberAIde | 60 | 169 | 109 | V3 higher | Government partnership dependency explicit; AI governance unclear |
| Polimorphic | 221 | 321 | 100 | V3 higher | Low both ways, but v5 reduces more for platform-only features |
| Privacy Badger | 274 | 190 | 84 | V5 higher | Increases user agency over surveillance — the canonical agency-first tool |
| vTaiwan | 7 | 17 | 10 | V3 higher | Taiwan government adoption earns M_IMPL boost; institutional dependency earns M_AGENCY neutral |
| Bonfire | 11 | 1 | 10 | V5 higher | Federated, self-hostable, forkable — canonical agency-first primitive |
| Your Priorities | varies | significantly lower | ~40 | V3 higher | Municipal adoption model; requires government buy-in |
| Talk to the City | varies | significantly lower | ~50+ | V3 higher | AI synthesis without community AI governance transparency |
| GOV.UK One Login | higher in v3 | much lower v5 | large | V3 higher | Government authentication — institutional platform, no community governance |
| Matrix / Element | higher in v5 | | ~20 | V5 higher | Federated, self-hostable, open protocol — exactly M_AGENCY boost |
| Security First / Umbrella | lower in v3 | higher in v5 | ~40+ | V5 higher | Privacy infrastructure, community-governed, designed for those without institutional support |
| LittleSis | lower in v3 | higher in v5 | ~30 | V5 higher | Maps power connections, open data, community-contributed — exposes decision logic |
| AlgorithmWatch | higher in v3 | lower in v5 | ~20 | V3 higher | Accountability work requires institutional engagement to produce value |
| Civic Tech Field Guide | moderate v3 | lower v5 | ~20 | V3 higher | Informational, not agency-raising; makes field legible but is not forkable infrastructure |
| Abstract Wikipedia | lower v3 | higher v5 | ~15 | V5 higher | Multilingual knowledge infrastructure, community-governed, globally forkable |

**Pattern emerging from divergences:**

The projects where v3 outscores v5 fall into two types: (a) tools with strong government adoption evidence that are nevertheless platform-dependent (deliberAIde, vTaiwan, Your Priorities), and (b) informational/accountability tools that require institutional engagement to deliver value (Open Access – TI, AlgorithmWatch, Civic Tech Field Guide). Both types earn M_IMPL boost in v3 but neutral-to-reduce in v5.

The projects where v5 outscores v3 are consistently tools that increase individual or community agency over surveillance and centralised systems: Privacy Badger, Bonfire, Matrix, Security First. They score lower in v3 because deployment evidence is limited; they score higher in v5 because their architecture and design score strongly on M_AGENCY.

---

## The Main Insight: "Primitives Over Platforms" in Practice

The phrase "primitives over platforms" is easy to misread as a preference for simplicity, or for early-stage tools over mature ones. The divergence table clarifies what it means in practice: favouring projects that are self-governable at the local level, not just open source.

The distinction matters. Many projects in the longlist are open source — they pass the "is the code available?" test easily. The agency-first filter asks a harder question: can a community outside the originating institution deploy this, govern it according to their own rules, and sustain it without the original creator's permission or ongoing involvement? For most projects, the answer is no — or at least, not clearly.

The projects that pass this harder test are genuinely rare. They require not just open source code but self-hosting documentation, forkable architecture, and community governance structures that don't depend on a central authority. Bonfire, Alaveteli, CONSUL Democracy, and Decidim all pass this test. Many projects that are technically open source do not.

---

## Why CONSUL Democracy Wins the Synthesis Despite the Agency Framing

CONSUL Democracy holds #1 in synthesis (score 83.7) despite Bonfire winning the agency-first run (83.3). This is not a surprise — it is the logic of synthesis. CONSUL is simultaneously the v3 winner (84.7) and the #2 in v5, while Bonfire wins v5 (83.3) but is only #11 in v3.

The synthesis average: CONSUL = (84.7 + ~82) / 2 ≈ 83.7. Bonfire = (~73 + 83.3) / 2 ≈ 78. The gap is explained by CONSUL's strong v3 score, which reflects its extensive deployment record. Bonfire's v3 score is pulled down by limited deployment evidence — it is genuinely early-stage relative to CONSUL.

This is not a conclusion that CONSUL is a better project than Bonfire. It is a conclusion that CONSUL better satisfies both framings simultaneously. If the question is "what project would Fatima be most likely to endorse given everything she values," the synthesis answer is CONSUL — because she values both deployment evidence (from her practice-oriented career) and community agency (from her stated current values).

---

## What Bonfire's V5 Rise Reveals

Bonfire's rise to #1 in v5 is perhaps the most revealing data point in the entire set of runs. It reveals what "primitives over platforms" looks like at the top: not a well-known, well-deployed government tool, but a federated social infrastructure that communities can run themselves. Bonfire is not trying to be adopted by governments; it is trying to be the substrate on which communities build their own digital infrastructure.

This is a fundamentally different civic tech proposition. Most civic tech is either (a) built for governments to use for citizens, or (b) built for citizens to engage with governments. Bonfire is neither — it is built for communities to run for themselves, without institutional permission. Under agency-first framing, that is the highest expression of what civic infrastructure can be.

The fact that this is not CONSUL's proposition — CONSUL is excellent but it is fundamentally a government adoption tool — is why the synthesis doesn't simply endorse Bonfire. But Bonfire's v5 position is a forecast: if Fatima's values continue in the direction her feedback indicates, a future v6 with even stronger agency weighting might change the winner.

---

## Surveillance-Adjacent Privacy Tools: A Secondary Pattern

Privacy Badger's swing (v3 #274 → v5 #190) represents a secondary pattern in the divergence table: privacy tools that increase user agency over surveillance rise in v5. The C6 weight promotion (12 → 30) means tools that reduce institutional monitoring capacity now score much higher on that criterion. This is internally consistent with the agency-first framing: if the concern is that technology too often serves institutional power at community expense, then tools that reverse that dynamic — even for individuals rather than communities — score well.

This pattern also explains why tools like Open Contracting Data Standard and others that expose government decision-making processes rise in v5 relative to their v3 positions: exposing decision logic is a form of agency, even when the project is not itself self-hostable.
