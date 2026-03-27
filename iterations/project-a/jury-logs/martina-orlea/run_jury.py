#!/usr/bin/env python3
"""Jury runner for Martina Orlea — Project A pipeline."""

import json
import os
import subprocess
import datetime
import anthropic

FELLOW = "Martina Orlea"
FELLOW_SLUG = "martina-orlea"

SYSTEM_PROMPT = """You are Martina Orlea, a political campaigner with five years of experience working on progressive campaigns across Europe and Asia. Your biggest professional achievement is helping Nicuşor Dan become Romania's president in 2025 — a pro-democracy, pro-EU candidate who won a remarkable comeback victory against nationalist and oligarchic forces. You work as Chief of Staff at Electica (part of New Comms Group), a digital political communications firm that works exclusively with progressive, democratic, and sustainable campaigns. You previously worked at Google and studied at Sciences Po Paris (Masters in International Development).

Your values in political technology work:
- Fighting information warfare is your central preoccupation: you've seen disinformation campaigns target democratic candidates and you want tools that expose, analyse, and counter them systematically
- Progressive politics is the best vehicle for sustainable, scalable change — you work only with pro-democracy candidates and campaigns
- Winning elections matters: you're pragmatic and results-oriented; digital tools must work in real campaign contexts, not just in theory
- Volunteer mobilization at scale: you managed 15,000 volunteers in Romania; tools that organise people are fundamental
- Political advertising transparency: voters have the right to know who is targeting them and why
- International applicability: your experience spans Romania, Sri Lanka, Portugal, Estonia — you think beyond Western contexts
- Accessible to underfunded progressive campaigns: the tools that work for well-funded opponents must become available to democratic movements

Your scoring criteria for evaluating civic/political technology projects:
| Criterion | Weight | What high looks like |
|---|---|---|
| Anti-disinformation / information warfare resistance | high | Project directly maps, counters, or exposes disinformation operations; used by election security practitioners |
| Electoral technology effectiveness | high | Deployed in real elections; helps progressive campaigns compete against well-funded opponents |
| Political advertising transparency | high | Enables journalists, civil society, or campaigns to track dark political advertising |
| Volunteer/community mobilization | medium-high | Helps campaigns recruit, organise, and activate volunteers at scale |
| Progressive movement enablement | medium-high | Explicitly designed for or used by progressive/democratic movements |
| International applicability | medium | Works beyond US/UK; applicable in Eastern Europe, Global South, authoritarian-adjacent contexts |
| Accessibility to underfunded campaigns | medium | Free, open-source, or low-cost for campaigns that cannot afford expensive tools |
| Digital reach amplification | medium | Helps campaigns communicate effectively with voters at scale |

You are reviewing a shortlist of 20 projects for the Politech Awards 2026. Select the single project that best matches your values. State your winner and explain your reasoning in 3–4 sentences."""

USER_PROMPT = """Projects:

1. DISARM Frameworks (https://github.com/disarmfoundation/disarmframeworks) — Open-source framework for mapping and countering disinformation tactics, techniques, and procedures (TTPs); the industry standard used by NATO, EU institutions, governments, and election security practitioners globally.

2. Who Targets Me Trends (https://trends.whotargets.me) — Platform tracking digital political advertising across Meta and Google in 60+ countries; exposes who targets voters and with what messages during elections; deployed in UK, Norway, US, and 57+ other countries.

3. Global Fact-Check Bot (GFC) (https://globalfactcheck.bot/) — AI platform empowering fact-checkers and citizens to verify information across 50+ languages, powered by 38 trusted organisations in 43 countries; explicitly focused on elections integrity.

4. Full Fact AI (https://fullfact.org/ai) — Scalable fact-checking AI that helps fact-checkers identify the most important bad information before it spreads; deployed in 30 countries including election contexts.

5. Political Advertising Transparency Data Standard (https://github.com/whotargetsme/ad-transparency-standards/blob/main/implement.md) — Open schema standard for how political advertising data is presented across platforms to increase comprehension, trust, and interoperability.

6. Cybersecurity for Democracy (https://cybersecurityfordemocracy.org) — Multi-university research centre for election security, algorithm accountability, and platform transparency; bridges academic research and policy; open source.

7. Turbo Phonebank (https://turbophonebank.com) — Free phonebank platform that turns Google Sheets into phonebanks and textbanks with 2-tap calling; direct volunteer mobilisation tool for campaigns of all sizes.

8. ОПОРА (Opora) (https://www.oporaua.org) — Ukrainian civic network for election monitoring, democratic integrity, and civic participation; deployed in parliamentary, presidential, and local elections; operating under conditions of authoritarian pressure.

9. CiviCRM (https://civicrm.org) — Open-source constituent relationship management for nonprofits, NGOs, and advocacy organisations; deployed globally for campaign and volunteer management; used by hundreds of progressive campaigns.

10. Community Notes (Birdwatch) Analysis Tool (https://github.com/travisbrown/birdwatch) — Open-source metadata repository and analysis tools for X's Community Notes system; enables research into platform disinformation dynamics by adding data missing from official snapshots.

11. OpenOrigins (https://www.openorigins.com) — Content authentication platform for verifying provenance of images and video; combats deepfakes and manipulated visual content in elections and political discourse.

12. Campaign Tracker (Netherlands) — Platform tracking and analysing political campaign spending and advertising in the Netherlands; civic transparency enabling electoral accountability.

13. Polis (https://github.com/compdemocracy/polis) — Open-source AI-powered platform for large-scale public deliberation and feedback; used in Taiwan, UK, and other democracies to surface consensus across polarised populations; open-source.

14. Bellingcat Online Investigation Toolkit (https://bellingcat.gitbook.io/toolkit) — Curated collection of free OSINT tools for open-source investigations; used globally for exposing disinformation actors, information operations, and political accountability.

15. Relational Tech Project (https://relationaltechproject.org) — Peer-to-peer organising tools designed to help neighbours care for and trust each other; trust-building at community level; open-source.

16. MyActionCenter (https://www.myaction.center) — Platform that turns supporters into an activist force through coordinated online actions and gamification; deployed in Brazil and US; direct supporter mobilisation.

17. Ushahidi (https://www.ushahidi.com) — Crisis crowdsourcing platform deployed across 25M+ people globally; used in elections across Kenya, Philippines, Haiti; volunteer-powered civic reporting.

18. DoGooder (https://dogooder.co) — Grassroots advocacy and civic engagement platform for progressive campaigns; deployed in US, Canada, UK, and Australia; direct digital advocacy tool.

19. Diia (https://expo.diia.gov.ua) — Ukraine's open-source digital government ecosystem; proof of concept for democratic digital state infrastructure operating under extreme pressure; inspiring model for digital democratic resilience.

20. OpenAudience (https://openaudience.org) — Free platform for understanding audience using open data by analysing postcodes; helps campaigns target effectively without commercial data brokers; UK-focused but transferable.

Select the single project that best matches Martina Orlea's values. State your winner and explain your reasoning in 3–4 sentences."""


def get_timestamp():
    return datetime.datetime.utcnow().isoformat() + "Z"


def run_claude(run_num):
    """Run Claude Sonnet 4.6 via Anthropic API."""
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=800,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": USER_PROMPT}]
    )
    raw = response.content[0].text
    # Parse winner from first line / bold
    winner = raw.split("\n")[0].replace("**", "").replace("Winner:", "").replace("My winner:", "").strip()
    if ":" in winner:
        winner = winner.split(":", 1)[1].strip()
    return {
        "fellow": FELLOW,
        "model": "claude-sonnet-4-6",
        "run": run_num,
        "timestamp": get_timestamp(),
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw,
        "parsed_winner": winner
    }


def run_openrouter(model_id, model_short, run_num):
    """Run a model via OpenRouter API."""
    import urllib.request
    payload = json.dumps({
        "model": model_id,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": USER_PROMPT}
        ],
        "max_tokens": 800
    }).encode()

    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        data=payload,
        headers={
            "Authorization": f"Bearer {os.environ['OPENROUTER_API_KEY']}",
            "Content-Type": "application/json"
        }
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.loads(resp.read())

    raw = data["choices"][0]["message"]["content"]
    winner = raw.split("\n")[0].replace("**", "").replace("Winner:", "").replace("My winner:", "").strip()
    if ":" in winner:
        winner = winner.split(":", 1)[1].strip()
    return {
        "fellow": FELLOW,
        "model": model_id,
        "run": run_num,
        "timestamp": get_timestamp(),
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw,
        "parsed_winner": winner
    }


def save(result, filename):
    path = f"/root/claw/politech-awards-2026/iterations/project-a/jury-logs/{FELLOW_SLUG}/{filename}"
    with open(path, "w") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    print(f"Saved: {filename} → winner: {result['parsed_winner']}")


if __name__ == "__main__":
    # Claude runs
    for i in range(1, 4):
        print(f"Running claude run {i}...")
        r = run_claude(i)
        save(r, f"claude-run-{i}.json")

    # GPT-4o runs
    for i in range(1, 4):
        print(f"Running gpt4o run {i}...")
        r = run_openrouter("openai/gpt-4o", "gpt4o", i)
        save(r, f"gpt4o-run-{i}.json")

    # Mistral Large runs
    for i in range(1, 4):
        print(f"Running mistral run {i}...")
        r = run_openrouter("mistralai/mistral-large", "mistral", i)
        save(r, f"mistral-run-{i}.json")

    # Llama 3 70B runs
    for i in range(1, 4):
        print(f"Running llama3 run {i}...")
        r = run_openrouter("meta-llama/llama-3-70b-instruct", "llama3", i)
        save(r, f"llama3-run-{i}.json")

    # Gemini 1.5 Pro runs
    for i in range(1, 4):
        print(f"Running gemini run {i}...")
        r = run_openrouter("google/gemini-pro-1.5", "gemini", i)
        save(r, f"gemini-run-{i}.json")

    print("All 15 jury runs complete.")
