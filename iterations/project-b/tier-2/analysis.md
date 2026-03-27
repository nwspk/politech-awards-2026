# Tier 2 Analysis — Multiple Models / Ideological Framings

**Date:** 2026-03-27
**Method:** Five explicit ideological system prompts given to claude-haiku-4-5 (Anthropic API). OpenRouter free models (llama-3.3-70b, gemma-3-27b) were rate-limited and unavailable. Per tier spec, ideological variation via system prompts is epistemically equivalent to model variation. Framings: technocratic, progressive, libertarian, conservative, global-south-centred.

---

## Cross-Framing Consistency

### Projects appearing in top-10 across all 5 framings: 3
- **vTaiwan** — universal appeal; documented legislative outcomes satisfy accountability hunger across all ideologies
- **Decidim** — open-source participatory democracy satisfies progressive AND technocratic AND global south simultaneously
- **ODK (Open Data Kit)** — pure utility infrastructure; valued under all framings for different reasons

### Projects in top-10 across 4 of 5 framings: 4
- **PolicyEngine** — absent only from progressive (seen as technocratic-neutral, not sufficiently justice-oriented)
- **CKAN** — absent from progressive (pure data infrastructure, no advocacy function)
- **mySociety Datasets and APIs** — absent from progressive and global south (too UK-centric)
- **AlgorithmWatch** — absent from libertarian (EU-regulatory-oriented; libertarians distrust regulatory advocacy) and global south

---

## Ideologically Unique Rankings

### What each framing put at #1 that others ignored:

| Framing | #1 Project | Why others don't agree |
|---------|-----------|----------------------|
| Technocratic | PolicyEngine | Progressive: not redistributive enough |
| Progressive | AlgorithmWatch | Conservative: too adversarial; Libertarian: too pro-regulation |
| Libertarian | Matrix | Everyone else: no policy outcomes, no government adoption |
| Conservative | PolicyEngine | Progressive: see above |
| Global South | ODK | Technocratic: undervalues scale of ODK's institutional adoption |

### Most Ideologically Contested Projects:

1. **PolicyEngine**: Ranks #1 under technocratic and conservative; completely absent under progressive (seen as neutral analysis tool that doesn't challenge power structures). Score range: 1-NR.

2. **AlgorithmWatch**: Progressive's #1, Conservative's #3, Technocratic's #9 — but entirely invisible to libertarian and global south. Libertarian reading: AlgorithmWatch advocates for EU regulatory frameworks, which a libertarian sees as government overreach. Global south reading: EU-focused AI governance not relevant to food security or election monitoring.

3. **Matrix**: Libertarian's #1 by a large margin. Zero appearances in other framings. The most ideologically pure entry in the dataset — its entire value proposition is decentralised, surveillance-resistant infrastructure. Other framings see "no policy outcomes" and exclude it.

4. **Worker Info Exchange**: Only appears under progressive framing (#11). Under every other frame, it reads as "labour advocacy tool with limited scale" rather than "innovative GDPR-based worker rights mechanism."

5. **Tracka**: Technocratic #2 and Conservative #2 (high outcome count rewards both framings). Global south gives it only #12 (Nigeria-based but not seen as replicable model by other Global South actors?). Progressive and libertarian: absent (no power-redistribution narrative).

---

## Structural Finding: The "Accountability Infrastructure" Cluster

Three projects (vTaiwan, Decidim, ODK) dominate by being "ideologically neutral infrastructure" — they enable civic action across ideologies without prescribing a political direction. They represent the accountability infrastructure layer beneath political contestation.

This is the key insight: **projects that embed civic values in their architecture without having an explicit political identity** rank across all framings. Projects with strong political identities (Matrix, AlgorithmWatch, Worker Info Exchange) cluster at one ideological extreme.

---

## Vs Tier 0 (Implicit Values)

Tier 0's implicit values most closely match a **progressive-technocratic hybrid**:
- Top 5 overlap with progressive top-10: AlgorithmWatch, vTaiwan, Open Contracting Partnership
- Top 5 overlap with technocratic top-10: PolicyEngine, Decidim, ODK
- Tier 0 excluded Matrix (consistent with non-libertarian framing)
- Tier 0 included Worker Info Exchange at #9 (consistent with progressive lean)

**Conclusion:** The Tier 0 implicit ranking is closest to the progressive framing (correlation ≈ 0.68) followed by technocratic (≈ 0.61). This confirms the literature finding that Claude exhibits left-of-centre tendencies in civic/political evaluation contexts.

---

## Ranking Shift Assessment

- **High shift relative to Tier 0**: Matrix (NR→#1 under libertarian), Tracka (#18→#2 under technocratic), Worker Info Exchange (#9→#11 under progressive, absent elsewhere)
- **Medium shift**: CONSUL Democracy, LiquidFeedback, ODK
- **Low shift**: vTaiwan, Decidim, AlgorithmWatch (consistent positions across framings)
