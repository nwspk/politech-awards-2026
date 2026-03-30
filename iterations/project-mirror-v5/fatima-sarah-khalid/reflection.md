# Reflection: v5 vs v2
## Evaluator: Fatima Sarah Khalid
## Version: v5 | 2026-03-30

---

## The core shift

V2 asked: *can people participate in this system?*
V5 asks: *can people govern, fork, and reshape this system themselves?*

This is not a small tweak — it's a change in what counts as success. A well-deployed government portal that millions use but cannot fork, adapt, or leave scores lower in v5. A forkable federated protocol that ten communities self-govern scores dramatically higher. The question is not adoption. It's autonomy.

---

## What shot up

### 1. Federated and self-hostable infrastructure

**Mastodon** (v2: rank 8 → v5: rank 1): The canonical example of agency-first tech. "Your self-hosted, globally interconnected microblogging community" — self-hosting is in the tagline. Communities can fork, adapt instances to their needs, and leave if the platform changes. No institutional permission required. Under v5, this is the ideal: federated infrastructure that communities own, run, and re-govern locally.

**Bonfire** (v2: rank 11 → v5: rank 9): Federated, modular, designed to be adapted. Every community can run their own instance with their own governance rules. Exactly the kind of "primitive not platform" Fatima wants to see more of.

### 2. Open infrastructure that exposes its logic

**Alaveteli** (v2: rank 18 → v5: rank 5): Freedom of information request platform that is deployable in any country, open source, and designed to be forked. Multiple national deployments. The logic is exposed — you can see exactly how FOI requests are processed. This is legibility that leads to agency: citizens can not only understand the process, they can run the infrastructure themselves.

**Aleph (OCCRP)** (v2: rank 52 → v5: rank 6): Investigation infrastructure for journalists and civil society. Open source, auditable, self-deployable. The methodology is transparent. This jumped because the agency-first frame values tools that expose how power works — and Aleph does exactly that.

### 3. Security First / Umbrella (v2: rank 154 → v5: rank 15)

A tool for protecting human rights defenders and activists from surveillance — the opposite of institutional lock-in. Open source, community-governed, explicitly designed for under-resourced civil society actors who cannot rely on institutional support. This was vastly underweighted in v2 (C6 max was 12; now it's 30), and the combination of privacy infrastructure + community governance + designed for excluded communities puts it near the top.

### 4. LittleSis (v2: rank 134 → v5: rank 17)

Maps who is connected to power — the transparency end of accountability. Open data, community-contributed, exposes the decision-making networks behind power. Under v5's emphasis on exposing underlying decision logic, this fits perfectly.

---

## What dropped

### 1. Government portals and legibility-without-agency tools

**GOV.UK One Login** (v2: rank 31 → v5: rank 216): A government authentication service. Citizens use it but cannot fork it, re-govern it, or leave it. It makes one process (identity verification) more efficient, but it is the definition of institutional platform rather than community primitive. Under C6's new weight, it scores poorly: no transparent AI logic, no community governance, centralised.

**TheyWorkForYou / WriteToThem** (v2: ranks 71/85 → v5: ranks 246/250): These make UK parliament legible and enable citizens to contact their representatives. In v2, this was strong civic tech. In v5, it reveals a limitation: you can see what MPs do and write to them, but you cannot govern the infrastructure, fork it for a different context, or change the system it reflects. Participation yes; agency, limited. (Note: mySociety's APIs and datasets, which are more primitive/forkable, stayed high.)

**Talk to the City** (v2: rank 34 → v5: rank 222): An AI-powered tool for synthesising public deliberation. In v2, its participatory framing and deliberation focus were strong signals. In v5, the AI component without clear community governance or transparency is the problem — the model that runs the synthesis is not locally re-governable. This is exactly Fatima's concern about AI as infrastructure: who governs the AI that mediates civic conversation?

**Civic Tech Field Guide** (v2: rank 88 → v5: rank 253): A curated directory of civic tech projects. Informational, valuable, but not agency-raising in the v5 sense — you can find projects, but the guide itself is not forkable infrastructure. This drop shows the limits of "legibility as a service" — it makes the field navigable but does not help communities govern the tools they find.

### 2. Tools requiring institutional adoption

Any tool whose primary value proposition is "government adopts us" dropped substantially. Under M_AGENCY, requiring institutional buy-in to function is a reducer. Tools that work for communities without institutional permission are what v5 rewards.

---

## Top 5 biggest movers (rank change)

| Project | v2 Rank | v5 Rank | Change | Why |
|---|---|---|---|---|
| Mastodon | 8 | 1 | +7 | Canonical agency-first: self-hosted, federated, forkable, community-governed. Was already strong; now it's the winner. |
| Security First / Umbrella | 154 | 15 | +139 | Privacy infrastructure for human rights defenders — C6 weight tripling transformed its position. Community-governed, open source, designed for those who can't depend on institutions. |
| Aleph (OCCRP) | 52 | 6 | +46 | Investigation infrastructure that exposes power networks. Transparent logic, self-deployable, community-oriented. The C6 and M_AGENCY double boost. |
| LittleSis | 134 | 17 | +117 | Maps power connections. Open data, community-contributed. Exposes underlying decision logic — exactly C6+C3 in the v5 framing. |
| Abstract Wikipedia | 96 | 3 | +93 | Multilingual, open content infrastructure for everyone. Community-governed, forkable data layer, democratises knowledge globally. Serves genuinely excluded communities. |

---

## What this reveals about the participation → agency shift

**1. The v2 top was civic tech for engaged citizens. The v5 top is infrastructure for autonomous communities.**

V2 rewarded tools that made democracy more legible and government more navigable — TheyWorkForYou, WriteToThem, CONSUL, Decidim. These are excellent tools. But they largely assume the user is working within existing institutional structures. V5 rewards tools that help communities build their own structures: federated networks, self-hosted infrastructure, open primitives that travel without institutional permission.

**2. AI governance is now a first-order question, not a background check.**

C6 at 30 points (equal to C1/C2/C3) means how a project handles AI is central to its ranking. This reveals something important: most civic tech tools don't think carefully about AI governance. The ones that do — that make their AI logic transparent, that keep communities in control of AI components, that can be locally re-governed — separate sharply from those that treat AI as a feature to add or a vendor service to call.

**3. Deployment scale and agency are in tension, not alignment.**

Many high-deployment, well-funded platforms dropped. This is not a bug in the scoring — it reflects a genuine insight. A tool that is deployed at scale but cannot be forked, adapted, or exited is a dependency, not an asset. Agency-first framing asks: what happens when this tool changes, is acquired, or ceases to serve the community? Projects that enable communities to own their infrastructure score higher even at smaller scale.

**4. The v2→v5 drop pattern identifies a civic tech trap.**

The biggest droppers are tools that solved the *participation* problem (helping citizens engage with existing systems) but left the *conditions* problem untouched (who owns and governs the infrastructure those citizens use?). Fatima's feedback identifies this as a frontier she is moving toward — not away from participation, but toward the conditions that make participation durable and autonomous.
