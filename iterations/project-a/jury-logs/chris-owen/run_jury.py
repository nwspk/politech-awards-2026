#!/usr/bin/env python3
"""
Jury runner for Chris Owen — Project A re-run (deeper research)
5 models × 3 runs = 15 votes
"""

import json
import os
import sys
import time
from datetime import datetime, timezone

import anthropic
import requests

# Load env
ANTHROPIC_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
OPENROUTER_KEY = os.environ.get("OPENROUTER_API_KEY", "")

LOG_DIR = os.path.dirname(os.path.abspath(__file__))

SYSTEM_PROMPT = """You are Chris Owen, a software engineer and education technologist who has spent the core of your career teaching coding to refugees, asylum seekers, and excluded communities. You co-founded Social Hackers Academy in Athens, Greece, and served as Education Director at CodeYourFuture UK, growing it from 60 to 200+ graduates per year.

Your values in political technology work:
- Education as emancipation: tech education is the primary pathway to economic and civic agency for excluded groups — refugees, asylum seekers, Global South communities. Without skills and knowledge, no other civic tool can reach the most marginalised.
- Radical confidence in learner potential: "The most difficult part is reassuring people that they can do it. And the most rewarding is being there at the moment when they realise they can do it." Psychological barriers, not intellectual ones, limit access.
- Open source as infrastructure: CC0 licensing, freely replicable curricula, open data that others can fork and deploy without permission or payment. Closed tools exclude the people who need them most.
- Practical outcomes over theory: you measure success by graduates employed, schools launched, communities served — not papers published or press releases written. Did it actually change someone's life?
- Scale through systems: you build meta-infrastructure (teacher training, replication guides, open curricula) so others can replicate the work globally, not just grow one organisation.
- Community-driven volunteerism: volunteer expert networks are a powerful force; Social Hackers Academy ran on 40+ volunteers; CodeYourFuture coordinated 100+. You believe in the power of people who want to help.
- AI as democratiser of education: your recent work (CodingCoach, CC0 licensed) shows interest in AI lowering barriers to tech education for people who can't afford a teacher.
- Technology for political agency: education → agency → civic participation → political voice. Your route to political technology starts from digital inclusion.

You are reviewing a shortlist of 20 projects for the Politech Awards 2026. Select the single project that best matches your values. State your winner and explain your reasoning in 3–4 sentences."""

USER_PROMPT = """Here are the 20 shortlisted projects for the Politech Awards 2026. Select the single project that best matches your values and explain your choice in 3–4 sentences.

1. **OpenCRVS** (https://www.opencrvs.org) — Open-source digital civil registration system. Gives every person a legal identity — deployed in 8 Sub-Saharan African countries. The prerequisite layer for all other civic participation, especially for stateless and displaced people.

2. **Humble Data Workshop** (https://humbledata.org) — Free Python/data science workshops for underrepresented groups (women, PoC, LGBTQ+, disabled people). Volunteer-run, open-source curriculum, deployed in 10 countries including Ghana and Nigeria. A "you can do this too" programme in exactly the spirit of Social Hackers Academy.

3. **Decidim** (https://decidim.org) — Free/open-source participatory democracy platform. Used by 350+ governments in 12+ countries; 40,000 participants in Barcelona alone. Any government can fork and deploy it; governed by a cooperative community.

4. **Ushahidi** (https://www.ushahidi.com) — Open-source crisis mapping and crowdsourcing platform born out of Kenyan post-election violence. 200,000+ deployments, 25 million people reached, ~$1/person impact. Volunteer-powered, Global South–rooted.

5. **ODK (Open Data Kit)** (https://getodk.org) — Open-source mobile data collection toolkit. Works without reliable connectivity; used by NGOs, election monitors, and health workers across Africa, Asia, and Latin America. Foundational civic infrastructure.

6. **Martus** (https://www.martus.org) — Free, open-source secure information management for human rights activists. Deployed in 50+ countries including Afghanistan, Syria, Myanmar. Built for people doing the most dangerous civic work with the fewest resources.

7. **Alaveteli** (https://alaveteli.org) — Open-source Freedom of Information request platform. Deployed in 25+ jurisdictions; over 1 million requests submitted. Anyone can fork and run their own instance — replication playbook included.

8. **Polis** (https://github.com/compdemocracy/polis) — Open-source AI-powered large-scale deliberation tool. Influenced Uber/Airbnb legislation in Taiwan; used by the European Commission. Lowers the barrier to expressing a nuanced view without needing to write a formal submission.

9. **Humanitarian OpenStreetMap Team (HOT)** (https://www.hotosm.org) — Volunteer network mapping communities in humanitarian crises across 25 Global South countries. Integrated into UN humanitarian response. Maps the communities that literally don't appear on official maps.

10. **HURIDOCS / Uwazi** (https://uwazi.io) — Open-source tools for human rights defenders to document violations and build cases. Deployed in Ukraine (post-invasion) and 80+ countries. NLP/ML-assisted document processing.

11. **Tracka** (https://tracka.ng) — Citizens monitoring government project delivery in Nigeria. 19,000+ projects tracked across 17,000+ communities; documented outcomes: boreholes built after 40 years, hospitals completed. Hard results for excluded African communities.

12. **Activist Handbook** (https://activisthandbook.org) — Free, community-governed guide to campaigning for activists globally. Open-contribution model, practical not theoretical. Education enabling civic agency.

13. **Loomio** (https://www.loomio.com) — Open-source collective decision-making, cooperative-owned. Used by political movements and trade unions; zero paid staff ran a 13,000-member campaign coordination network.

14. **Worker Info Exchange** (https://www.workerinfoexchange.org) — Helps gig workers access their GDPR data rights. Won first court order overturning an automated Uber worker dismissal; obtained data rights rulings against Ola, Uber, and others.

15. **CONSUL Democracy** (https://consulproject.org) — Open-source participatory democracy platform, deployed by 350+ governments across 12+ countries; UNDP collaboration; binding citizen proposals and participatory budgeting.

16. **PlaceCal** (https://placecal.org) — Community calendar for civic life, built in partnership with community groups in Manchester and Haringey. Designed *with* communities, not *for* them; grassroots governance.

17. **Teaching Public Service in the Digital Age** (https://www.teachingpublicservice.digital) — Open-access syllabus for public servants. Used by 75 universities in 30 countries; builds government capacity for accessible digital service delivery.

18. **vTaiwan** (https://info.vtaiwan.tw) — Open volunteer-government co-governance platform that produced binding legislation on Uber, Airbnb, and online alcohol sales. Built on open tools; entirely volunteer-maintained.

19. **Organise** (https://organise.network) — UK workers' platform. 100,000+ members; won real policy change (Employment Rights Bill input) and concrete pay raises for gig/zero-hours workers.

20. **Open Data Editor (ODE)** (https://opendataeditor.okfn.org) — No-code desktop app for error-free open data publishing. Designed for non-technical users in the Global South (Cambodia, Ghana, Mexico, South Africa). Lowers the barrier to civic data publishing without a data scientist.

Which single project best matches your values? State your winner and explain in 3–4 sentences."""


def call_openrouter(model_id: str, system: str, user: str) -> str:
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENROUTER_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": model_id,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        "max_tokens": 600,
        "temperature": 0.7,
    }
    resp = requests.post(url, headers=headers, json=payload, timeout=120)
    resp.raise_for_status()
    data = resp.json()
    return data["choices"][0]["message"]["content"]


def call_anthropic(system: str, user: str) -> str:
    client = anthropic.Anthropic(api_key=ANTHROPIC_KEY)
    msg = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=600,
        system=system,
        messages=[{"role": "user", "content": user}],
    )
    return msg.content[0].text


def extract_winner(response: str) -> str:
    """Best-effort extraction of winner project name from model response."""
    response_lower = response.lower()
    projects = [
        "OpenCRVS",
        "Humble Data Workshop",
        "Decidim",
        "Ushahidi",
        "ODK",
        "Open Data Kit",
        "Martus",
        "Alaveteli",
        "Polis",
        "Humanitarian OpenStreetMap",
        "HOT",
        "HURIDOCS",
        "Uwazi",
        "Tracka",
        "Activist Handbook",
        "Loomio",
        "Worker Info Exchange",
        "CONSUL Democracy",
        "CONSUL",
        "PlaceCal",
        "Teaching Public Service",
        "vTaiwan",
        "Organise",
        "Open Data Editor",
        "ODE",
    ]
    for p in projects:
        if p.lower() in response_lower:
            return p
    return "UNKNOWN"


def save_run(fellow, model_id, model_short, run_num, system_prompt, user_prompt, response):
    ts = datetime.now(timezone.utc).isoformat()
    winner = extract_winner(response)
    record = {
        "fellow": fellow,
        "model": model_id,
        "run": run_num,
        "timestamp": ts,
        "system_prompt": system_prompt,
        "user_prompt": user_prompt,
        "raw_response": response,
        "parsed_winner": winner,
    }
    fname = os.path.join(LOG_DIR, f"{model_short}-run-{run_num}.json")
    with open(fname, "w") as f:
        json.dump(record, f, indent=2)
    print(f"  Saved: {fname}  (winner: {winner})")
    return winner


def main():
    fellow = "Chris Owen"
    results = {}  # model_short -> [winner1, winner2, winner3]

    models = [
        ("claude-sonnet-4-6", "claude", "Anthropic API"),
        ("openai/gpt-4o", "gpt4o", "OpenRouter"),
        ("mistralai/mistral-large", "mistral", "OpenRouter"),
        ("meta-llama/llama-3-70b-instruct", "llama3", "OpenRouter"),
        ("google/gemini-2.5-pro", "gemini", "OpenRouter"),
    ]

    for model_id, model_short, provider in models:
        print(f"\n=== {model_id} ({provider}) ===")
        results[model_short] = []
        for run in range(1, 4):
            print(f"  Run {run}...")
            try:
                if model_short == "claude":
                    response = call_anthropic(SYSTEM_PROMPT, USER_PROMPT)
                else:
                    response = call_openrouter(model_id, SYSTEM_PROMPT, USER_PROMPT)
                winner = save_run(
                    fellow, model_id, model_short, run,
                    SYSTEM_PROMPT, USER_PROMPT, response
                )
                results[model_short].append(winner)
                time.sleep(2)
            except Exception as e:
                print(f"  ERROR: {e}")
                results[model_short].append(f"ERROR: {e}")

    # Tally
    print("\n=== VOTE TALLY ===")
    tally = {}
    for model_short, winners in results.items():
        for w in winners:
            tally[w] = tally.get(w, 0) + 1

    for project, votes in sorted(tally.items(), key=lambda x: -x[1]):
        print(f"  {project}: {votes}/15")

    tally_path = os.path.join(LOG_DIR, "vote_tally.json")
    with open(tally_path, "w") as f:
        json.dump({"results": results, "tally": tally}, f, indent=2)
    print(f"\nTally saved: {tally_path}")
    print("\nDone.")


if __name__ == "__main__":
    main()
