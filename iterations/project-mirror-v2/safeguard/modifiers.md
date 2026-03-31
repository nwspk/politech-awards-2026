# Modifiers — Safeguard
## Project Mirror v2 — Step 4b: mirror-constitutional-modifiers
## Date: 2026-03-28

---

## Part B: Value modifiers

Six modifiers derived from the evidence base. Three boosts, two reductions, one weak boost. Applied after criteria scoring.

| # | Modifier | Direction | Magnitude | Trigger condition | Evidence for this modifier |
|---|---|---|---|---|---|
| M1 | Technical enforcement boost | boost | +8 to +14 | Project builds or enables hard enforcement infrastructure — audit trails, compliance verification, mandatory reporting, cryptographic proof, regulatory tools. The enforcement is technical, not just procedural or legal. | Safeguard's career trajectory from policy to Lucid Computing (TEE-based verification, AI Passports, automated audit trails). His "Safe before sale" report argues for regulatory access to models and pre-market approval — technical enforcement, not just rules on paper. The European AI Fund interview criticises the gap between policy and enforcement. |
| M2 | Voluntary-only reduction | reduce | -8 to -12 | Project relies entirely on voluntary adoption with no enforcement mechanism, mandatory compliance path, or structural incentive for adoption. Impact depends on powerful actors choosing to comply. | Safeguard's most quoted position: "companies will choose to prioritise corporate incentives over safety in the absence of a strong regulatory framework." He explicitly rejects voluntary GPAI codes of practice as sufficient. Any project that relies purely on goodwill triggers this penalty. |
| M3 | Precautionary design boost | boost | +5 to +9 | Project embeds precautionary principles — pre-market assessment, safety-by-design, risk assessment before deployment rather than post-hoc correction. | The FDA analogy is central to Safeguard's work. "Safe before sale" argues that the deploy-first-assess-later model "would very heavily run against" what is needed. He advocates shifting the burden of proof to developers before market entry. Projects that build in precaution from the start align with this. |
| M4 | Community co-governance boost | boost | +4 to +8 | Project gives affected communities genuine structural power over governance decisions — not advisory roles, not feedback mechanisms, but actual decision-making authority. Community members can shape what the project does, not just how it communicates. | Safeguard's distinction between "participatory and deliberative" engagement and "tick-box exercises." His advocacy for citizen assemblies within the EU AI office and patient-representative inclusion in approval processes. The standard is co-governance, not consultation. |
| M5 | Power concentration reduction | reduce | -10 to -15 | Project concentrates power in a single corporate actor, reinforces existing market dominance, or creates dependency on a proprietary platform without governance safeguards. | Safeguard's persistent concern with information asymmetries between regulators and industry. His arguments against self-exemption from high-risk obligations. His scepticism about commercial actors claiming "open source" status while maintaining strategic control. His advocacy for mandatory third-party audits and vetted researcher access. |
| M6 | Post-deployment monitoring boost | boost (weak) | +3 to +6 | Project includes or enables post-deployment monitoring, ongoing surveillance, feedback loops from deployment back to design, or incident reporting mechanisms. | "Safe beyond sale" blog post (title confirms focus even though content is 403). OECD Expert Group on AI Incidents membership. His advocacy for "trusted flagging mechanisms" and ecosystem-wide reporting. The lifecycle governance commitment extends specifically to the post-deployment phase. |

---

### Modifier interaction rules

- M1 and M3 can stack: a project that builds technical enforcement AND embeds precautionary design gets both boosts. This is by design — Safeguard's strongest signal is that enforcement should be built in from the start, not bolted on.
- M2 and M1 are mutually exclusive in practice: a project with hard enforcement infrastructure (M1 trigger) by definition does not rely entirely on voluntary adoption (M2 trigger).
- M4 and M5 can co-occur: a project could give communities co-governance power (M4 boost) while also concentrating platform power (M5 reduction). Net effect depends on magnitude.
- M6 stacks with M1 and M3: the full enforcement lifecycle — precaution, enforcement, monitoring — is Safeguard's ideal.
- Maximum positive modifier stack: M1(14) + M3(9) + M4(8) + M6(6) = +37. This would only apply to a project that builds technical enforcement, embeds precaution, gives communities co-governance, and includes post-deployment monitoring.
- Maximum negative modifier stack: M2(12) + M5(15) = -27. This would apply to a voluntary tool built by a dominant platform with no governance safeguards.
