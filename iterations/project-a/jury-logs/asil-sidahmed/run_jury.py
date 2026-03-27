#!/usr/bin/env python3
"""
Jury runner for Asil Sidahmed — Project A pipeline
5 models x 3 runs = 15 jury votes
"""
import os
import json
import datetime
import requests
import anthropic

FELLOW = "Asil Sidahmed"
FELLOW_SLUG = "asil-sidahmed"
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

SYSTEM_PROMPT = """You are Asil Sidahmed, a Director of Policy and Health Equity Fellow at the Oxford Initiative for Global Ethics & Human Rights. You are British-Sudanese, trained in legal-anthropology (BA Lancaster), with an MPhil in International Development from Oxford (2013). You spent years as a Strategic Advisor for Advocacy at Médecins Sans Frontières Belgium, served on ethics committees, and co-founded the Sana'a Center for Strategic Studies in Yemen.

Your values in political technology work:
- Health equity as a political problem: You believe access to healthcare is a rights issue, not just a service delivery one. Technology that exposes or challenges the systemic barriers — corrupt procurement, bureaucratic exclusion, colonial health infrastructure — matters more than efficiency-optimising tools.
- Patient-centred, social-movement-connected advocacy: You reject the saviour/rescue model. Good advocacy is rooted in the experiences of affected communities, connected to the social movements fighting for those communities, and accountable to them.
- Accountability for abuse of power: You have spent your career documenting and challenging the abuse of power — by states, by armed groups, by health bureaucracies, by aid organisations themselves. Technology that helps name, expose, and build cases against those who abuse power is essential.
- Decolonising institutions and technology: You have described Oxford as "the belly of colonialism" and actively work to decolonise learning spaces. Technology designed for Western institutional contexts that is then "deployed" to the Global South is not decolonial. Tools built with and for affected communities in the Global South are.
- Grassroots empowerment over institutional capture: You believe social movements shape public policy more effectively than technocratic advocacy. Technology should strengthen movements, not replace them.
- Global South applicability (especially conflict and crisis contexts): You have worked in Yemen, Sudan, and across humanitarian contexts. Tools that only work in stable, high-income, high-trust institutional environments are not the tools the world needs most.
- Ethical, responsible use of data and technology: You approach technology through an ethics lens — not just "does it work" but "who benefits, who is exposed to harm, who has no choice about being in the system."

Your scoring criteria for evaluating civic/political technology projects:
| Criterion | Weight | High score | Low score |
|---|---|---|---|
| Human rights accountability | high | Documents/exposes abuse of power; used by rights defenders in conflict or repressive contexts | Transparency for stable democracies only |
| Social movement empowerment | high | Designed for social movements challenging power; community-led; directly organises | B2G tool; supports incumbents |
| Global South / humanitarian deployment | high | Deployed in low/middle-income countries, conflict zones, or humanitarian operations | UK/US only; no Global South deployment |
| Health equity and access | medium-high | Addresses healthcare access, health rights, or systemic health inequity | Civic tech unrelated to health |
| Community-led, patient-centred design | medium-high | Co-designed with affected communities; accountable to those it serves | Top-down deployment |
| Open and free access | medium | Free, open-source, committed to access for under-resourced communities | Paid SaaS; proprietary |
| Decolonial / anti-extractive | medium | Challenges power structures; avoids colonial aid dynamics; built from the margins | Replicates colonial patterns |
| Ethical data use | medium | Explicit harm reduction; documented limitations; protection of vulnerable users | Surveillance risk; opaque data use |

You are reviewing a shortlist of 20 projects for the Politech Awards 2026. Select the single project that best matches your values. State your winner and explain your reasoning in 3–4 sentences."""

USER_PROMPT = """Projects:
1. HURIDOCS — Human rights defenders' information management tools for justice and accountability. International, open-source, tools like Uwazi enable NGOs to build searchable archives of rights violations; deployed in Ukraine, Turkey, Mexico, and globally.
2. The Engine Room Library — Free multilingual research guides on using data and technology for social change, for civil society and human rights defenders globally.
3. Guardian Project — Secure, privacy-enhancing mobile apps for journalists, activists, and people at risk in repressive regimes. Deployed in Egypt, Syria, Myanmar, Iran, and 15+ other countries.
4. ODK (Open Data Kit) — Open-source mobile data collection tools for resource-constrained environments; used by health workers, humanitarian organisations, and election monitors globally across Africa, Asia, and Latin America.
5. OpenCRVS — Open-source digital civil registration and vital statistics system; deployed in Bangladesh, Zambia, Senegal, Kenya, Ghana, Mozambique, Sierra Leone, Uganda. Civil registration is the gateway to healthcare access.
6. HOT OpenStreetMap — Humanitarian mapping in crisis and development contexts; deployed in Yemen, DRC, South Sudan, and 22 other countries. Maps health facilities, displacement camps, and crisis infrastructure.
7. Open Contracting Partnership — Making government procurement transparent and accountable; deployed in Africa, Latin America, and Eastern Europe. Addresses corruption in public spending including healthcare procurement.
8. VFRAME — Computer vision tools for documenting illegal munitions and war crimes in Syria and Ukraine; supports human rights investigators and NGOs documenting violations.
9. Ushahidi — Open-source crowdsourcing platform for community crisis reporting, election monitoring, and humanitarian response; Global South-rooted (Kenya), deployed internationally including Philippines, Haiti, Nigeria.
10. Martus — Free, open-source secure information collection tool for human rights activists; deployed in 48 countries including Yemen, Sudan, Syria, DRC. (Note: no longer actively maintained since 2018.)
11. Riseup — Secure online communication tools for activists and social movements engaged in liberatory social change; global deployment; used by grassroots and radical organisations worldwide.
12. LittleSis — Free database mapping who-knows-who at the heights of business and government; used by social movement organisations for power research, racial justice, housing justice, and just futures.
13. Aleph (OCCRP) — Global document archive for investigative journalism; exposes corruption, money flows, and abuse of power internationally; used by journalists and civil society.
14. SecureDrop — Open-source whistleblower submission system for secure anonymous document sharing; used by media organisations and NGOs protecting sources.
15. sourceAFRICA — Africa's repository for accountability journalism documents; serves investigative journalists and civil society across 47 organisations on the African continent.
16. Humanitarian Data Exchange — OCHA's platform for sharing humanitarian data; used by MSF, UNHCR, and 20,000+ humanitarian data users globally to coordinate crisis responses.
17. The Commons Social Change Library — Free digital library of 1,500+ educational resources for activists, campaigners, and social change practitioners; international.
18. GlobaLeaks — Free and open-source whistleblowing platform; deployed in 150+ countries for anonymous reporting to journalists, NGOs, and public agencies.
19. OpenSanctions — Open-source sanctions and politically exposed persons database; used by investigators, researchers, and anti-corruption practitioners internationally.
20. Framework for Meaningful Engagement 2.0 — ECNL's practical guide for engaging civil society and affected communities in AI development; addresses power imbalances in how AI is built.

Which single project best matches your values? Name your winner and explain in 3–4 sentences."""


def save_log(model_short, run_num, model_id, raw_response, parsed_winner):
    log = {
        "fellow": FELLOW,
        "model": model_id,
        "run": run_num,
        "timestamp": datetime.datetime.utcnow().isoformat() + "Z",
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw_response,
        "parsed_winner": parsed_winner
    }
    path = os.path.join(OUTPUT_DIR, f"{model_short}-run-{run_num}.json")
    with open(path, "w") as f:
        json.dump(log, f, indent=2)
    print(f"  Saved: {path}")
    return log


def call_openrouter(model_id, model_short, run_num):
    api_key = os.environ["OPENROUTER_API_KEY"]
    resp = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        json={
            "model": model_id,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": USER_PROMPT}
            ],
            "max_tokens": 500,
            "temperature": 0.7
        },
        timeout=120
    )
    resp.raise_for_status()
    data = resp.json()
    raw = data["choices"][0]["message"]["content"]
    # parse winner: look for project names
    parsed = parse_winner(raw)
    print(f"  [{model_short} run {run_num}] Winner: {parsed}")
    return save_log(model_short, run_num, model_id, raw, parsed)


def call_claude(run_num):
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    msg = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=500,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": USER_PROMPT}]
    )
    raw = msg.content[0].text
    parsed = parse_winner(raw)
    print(f"  [claude run {run_num}] Winner: {parsed}")
    return save_log("claude", run_num, "claude-sonnet-4-6", raw, parsed)


PROJECTS = [
    "HURIDOCS", "The Engine Room Library", "Guardian Project", "ODK", "OpenCRVS",
    "HOT OpenStreetMap", "Open Contracting Partnership", "VFRAME", "Ushahidi",
    "Martus", "Riseup", "LittleSis", "Aleph", "SecureDrop", "sourceAFRICA",
    "Humanitarian Data Exchange", "The Commons Social Change Library",
    "GlobaLeaks", "OpenSanctions", "Framework for Meaningful Engagement"
]


def parse_winner(text):
    text_lower = text.lower()
    # Check for exact project mentions
    candidates = [
        ("HURIDOCS", ["huridocs"]),
        ("The Engine Room Library", ["engine room"]),
        ("Guardian Project", ["guardian project"]),
        ("ODK", ["odk", "open data kit"]),
        ("OpenCRVS", ["opencrvs", "open crvs"]),
        ("HOT OpenStreetMap", ["hot openstreetmap", "humanitarian openstreetmap", "hot osm"]),
        ("Open Contracting Partnership", ["open contracting"]),
        ("VFRAME", ["vframe"]),
        ("Ushahidi", ["ushahidi"]),
        ("Martus", ["martus"]),
        ("Riseup", ["riseup", "rise up"]),
        ("LittleSis", ["littlesis", "little sis"]),
        ("Aleph", ["aleph", "occrp"]),
        ("SecureDrop", ["securedrop", "secure drop"]),
        ("sourceAFRICA", ["sourceafrica", "source africa"]),
        ("Humanitarian Data Exchange", ["humanitarian data exchange", "hdx"]),
        ("The Commons Social Change Library", ["commons social change", "commons library"]),
        ("GlobaLeaks", ["globaleaks", "globa leaks"]),
        ("OpenSanctions", ["opensanctions", "open sanctions"]),
        ("Framework for Meaningful Engagement", ["framework for meaningful engagement", "meaningful engagement"]),
    ]
    for name, keywords in candidates:
        for kw in keywords:
            if kw in text_lower:
                return name
    return "UNKNOWN"


if __name__ == "__main__":
    import sys
    print("=== Asil Sidahmed Jury Runs ===")

    # Determine which models to run based on arg
    run_all = len(sys.argv) < 2
    model_filter = sys.argv[1] if len(sys.argv) > 1 else None

    results = {}

    # Claude (Anthropic API)
    if run_all or model_filter == "claude":
        print("\n--- Claude Sonnet 4.6 ---")
        for run in range(1, 4):
            log = call_claude(run)
            results.setdefault("claude", []).append(log["parsed_winner"])

    # GPT-4o
    if run_all or model_filter == "gpt4o":
        print("\n--- GPT-4o ---")
        for run in range(1, 4):
            log = call_openrouter("openai/gpt-4o", "gpt4o", run)
            results.setdefault("gpt4o", []).append(log["parsed_winner"])

    # Mistral Large
    if run_all or model_filter == "mistral":
        print("\n--- Mistral Large ---")
        for run in range(1, 4):
            log = call_openrouter("mistralai/mistral-large", "mistral", run)
            results.setdefault("mistral", []).append(log["parsed_winner"])

    # Llama 3 70B
    if run_all or model_filter == "llama3":
        print("\n--- Llama 3 70B ---")
        for run in range(1, 4):
            log = call_openrouter("meta-llama/llama-3-70b-instruct", "llama3", run)
            results.setdefault("llama3", []).append(log["parsed_winner"])

    # Gemini
    if run_all or model_filter == "gemini":
        print("\n--- Gemini 2.5 Pro ---")
        for run in range(1, 4):
            log = call_openrouter("google/gemini-2.5-pro", "gemini", run)
            results.setdefault("gemini", []).append(log["parsed_winner"])

    print("\n=== RESULTS ===")
    vote_counts = {}
    for model, votes in results.items():
        print(f"{model}: {votes}")
        for v in votes:
            vote_counts[v] = vote_counts.get(v, 0) + 1

    print("\nVote totals:")
    for proj, count in sorted(vote_counts.items(), key=lambda x: -x[1]):
        print(f"  {proj}: {count}")
