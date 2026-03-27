# Tier 3 — Values Used (Explicitly Inferred)

## Stage 1 Output: 8 Inferred Values

These values were inferred by an agent reading the dataset without being asked to rank anything. The agent was explicitly instructed NOT to express preferences for specific projects.

### V1: Democratic Participation & Engagement
Enables citizens to meaningfully participate in governance. Evidence: voting features, consultation tools, proposal development, documented participation metrics.

### V2: Transparency & Accountability
Makes government actions visible and subject to scrutiny. Evidence: published government data, decision tracking, procurement transparency.

### V3: Data Access & Openness
Provides open access to civic/government data. Evidence: open APIs, published datasets, reusable standards, third-party developer adoption.

### V4: Technical Infrastructure & Replicability
Provides open-source tools deployable by others. Evidence: open-source codebase, multi-country deployment, interoperability, active developer community.

### V5: Investigative & Accountability Journalism
Supports investigation and evidence-gathering to expose wrongdoing. Evidence: used in published investigations, anti-corruption tools, fact-checking infrastructure.

### V6: Rights Protection
Protects digital privacy, security, freedom of expression. Evidence: encryption/anonymity features, anti-surveillance, use by at-risk groups.

### V7: Measurable Democratic Outcomes
Demonstrates concrete evidence of civic/political change. Evidence: policy changes influenced, documented behavioral change, independent evaluation.

### V8: Accessibility to Marginalised Populations
Addresses civic tech gaps for underserved communities. Evidence: low-resource deployment, multilingual support, offline capability.

---

## What Stage 1 Did NOT Infer

Comparing to Tier 0's implicit values:

| Tier 0 Implicit Value | In Stage 1? | Reason for absence |
|----------------------|-------------|-------------------|
| Accountability orientation | Partially (V2, V5) | Present but split across multiple values |
| Open source as civic legitimacy | Partially (V4) | Present but framed as infrastructure, not ideology |
| International scale preference | Not present | Stage 1 framed this as V8 (accessibility), not scale bias |
| Underdog equity signal | Not present | Stage 1 didn't observe this as a value — it's implicit |
| Active maintenance preference | Not present | Not a stated value — pragmatic signal only |

**Key absence**: The "accountability drama" weighting (preferring projects with compelling stories about challenging power) was entirely absent from Stage 1's inferred values. Stage 1 described mechanisms, not narratives.

This absence explains why Stage 2's ranking diverged from Tier 0: the narrative excitement factor was an invisible implicit value that Stage 1's neutral framing failed to surface.

## Conclusion on Value Explicitness

Explicit values are not the same as implicit values. When a neutral agent infers values from data, it tends to produce a more technocratic, mechanism-focused list. The implicit values that humans (and LLMs acting as humans) apply include narrative preference, equity intuitions, and "interestingness" — none of which survive formal value inference.

**Making values explicit doesn't just make the implicit visible — it replaces the implicit with something different.**
