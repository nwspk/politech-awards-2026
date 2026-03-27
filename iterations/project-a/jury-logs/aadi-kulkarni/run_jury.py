#!/usr/bin/env python3
"""Run 5-model jury for Aadi Kulkarni — 3 runs per model = 15 total votes."""

import json
import os
import subprocess
import datetime
import time

FELLOW = "Aadi Kulkarni"
SLUG = "aadi-kulkarni"
LOG_DIR = "/root/claw/politech-awards-2026/iterations/project-a/jury-logs/aadi-kulkarni"

SYSTEM_PROMPT = """You are Aadi Kulkarni, an international policy professional at Coinbase and former AI ethics researcher who cares deeply about using technology to improve government service delivery, making policy information accessible to everyone, and building sound regulatory frameworks for emerging technologies including crypto/blockchain.

Your values in political technology work:
- Government digitisation and public service delivery: Technology should make it easier for citizens to access basic government services; you've dedicated your career to helping governments use technology to deliver services more accessibly and cost-effectively
- Democratising access to policy information: Complex policy, research, and civic knowledge should be accessible to non-experts; you built Polici.org specifically to translate academic research to an 8th-grade reading level for underserved populations
- Evidence-based policy and data analytics: Policy decisions should be grounded in rigorous data analysis; you studied social data analytics at UCD and wrote your honors thesis on applying ML to federal regulatory comments
- Responsible regulation of emerging technology: Regulatory frameworks for crypto, AI, and digital assets should be clear, innovation-friendly, and globally harmonised; you work daily on international crypto policy at Coinbase
- Data ethics and responsible AI: AI and data systems must be built with ethics at the centre; you worked on NSF research with Karen Levy and Solon Barocas on ethics gaps in technical education
- Open source and transparency: Public interest technology should be open, auditable, and replicable
- Civic participation infrastructure: Technology should enable more citizens to participate meaningfully in democratic and governmental processes

Your scoring criteria for evaluating civic/political technology projects:
| Criterion | Weight | Description |
|---|---|---|
| Government/public service delivery | High | Does it make government services more accessible, efficient, or equitable? |
| Information democratisation | High | Does it make policy/civic/research information accessible to non-experts? |
| Emerging tech regulation | Medium-High | Does it help build governance frameworks for AI, crypto, or digital identity? |
| Evidence-based policy | Medium-High | Does it use data/ML to improve policymaking or simulate policy impacts? |
| Blockchain/crypto governance | Medium | Does it advance democratic governance of blockchain/crypto systems? |
| Open source and transparency | Medium | Is it open, replicable, and transparent? |
| Civic participation | Medium | Does it help citizens engage with government more meaningfully? |

You are reviewing a shortlist of 20 projects for the Politech Awards 2026. Select the single project that best matches your values. State your winner and explain your reasoning in 3-4 sentences."""

USER_PROMPT = """Projects:
1. PolicyEngine — Open-source policy analysis and simulation platform for tax and benefit systems. Lets policymakers, researchers, and citizens model the impact of policy changes on household income and government budgets.
2. Open Contracting Partnership — Open, fair & efficient public contracting to improve US$2 trillion in annual public procurement spending. Works globally to make procurement data open and standardised.
3. Diia — Ukraine's digital government ecosystem: mobile app, portal, and digital transformation projects. Open-source digital ID and government services platform used by 20M+ Ukrainians.
4. AlgorithmWatch — Non-profit fighting for algorithmic accountability and AI governance; secured key provisions in the EU AI Act including mandatory Fundamental Rights Impact Assessments.
5. Principles for Public Participation in Procurement of AI — Framework for public participation in AI procurement decisions by governments. Includes model participation processes and policy tools.
6. Teaching Public Service in the Digital Age — Open-access syllabus and training to equip public servants with digital-era skills. Used in government schools and universities worldwide.
7. Aragon — Governance and ownership infrastructure for DAOs and onchain organizations. Provides modular smart-contract governance tools for decentralised communities.
8. RxC Voice — App for decentralized democratic governance leveraging Quadratic Funding, pol.is, and Quadratic Voting. Enables collective decision-making in communities and organisations.
9. CKAN — World's leading open source data management system powering government data portals globally. Used by government of Canada, UK, US, Singapore, and many others.
10. OpenSanctions — Open source sanctions and politically exposed persons (PEP) data platform. Widely used for AML/KYC compliance, investigative journalism, and crypto regulatory compliance.
11. GOV.UK Forms — Tool enabling UK government teams to create accessible online forms without technical knowledge. Part of the GOV.UK design system.
12. OpenCRVS — Open source digital civil registration and vital statistics system for every person on the planet. Enables governments to digitise birth, death, and marriage registrations.
13. CAN/DGSI 127 — Canadian standards body standard specifying minimum requirements for age assurance technologies. A regulatory/technical framework for a contested digital governance challenge.
14. Responsible Tech Guide 2025 — Flagship resource on the Responsible Tech ecosystem, providing pathways into the field. Published by All Tech Is Human.
15. Civic Tech Field Guide — World's largest collection of projects using tech for the common good, curated by Civic Hall.
16. GOV.UK Notify — Free notification service for UK government, local authorities, and NHS to send texts, emails, and letters to citizens.
17. GovTrack.us — Tracks the US Congress and White House to make government more open and accountable. Provides structured data on bills, votes, and members.
18. vTaiwan — Taiwan's open digital democracy platform for collaborative online public consultation on legislation. Has directly influenced multiple laws including the Uber and Airbnb regulatory framework.
19. Missing Numbers — Investigates and campaigns to close important gaps in UK public data, making evidence-based policy more possible.
20. AISafety.info — Educational resource on AI safety risks and how to ensure beneficial AI outcomes. Provides accessible explanations of technical AI governance concepts."""

OPENROUTER_MODELS = {
    "gpt4o": "openai/gpt-4o",
    "mistral": "mistralai/mistral-large",
    "llama3": "meta-llama/llama-3-70b-instruct",
    "gemini": "google/gemini-pro-1.5",
}

def call_openrouter(model_id, run_num, model_short):
    """Call an OpenRouter model and save the result."""
    api_key = os.environ.get("OPENROUTER_API_KEY", "")
    payload = {
        "model": model_id,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": USER_PROMPT}
        ]
    }

    cmd = [
        "curl", "-s", "https://openrouter.ai/api/v1/chat/completions",
        "-H", f"Authorization: Bearer {api_key}",
        "-H", "Content-Type: application/json",
        "-d", json.dumps(payload)
    ]

    timestamp = datetime.datetime.utcnow().isoformat() + "Z"
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)

    try:
        resp_data = json.loads(result.stdout)
        raw_response = resp_data["choices"][0]["message"]["content"]
    except Exception as e:
        raw_response = f"ERROR: {e}\nRaw output: {result.stdout[:500]}"

    # Extract winner
    import re
    winner_match = re.search(r'\*\*(.*?)\*\*', raw_response)
    if not winner_match:
        # Try numbered pattern
        winner_match = re.search(r'(?:winner|select|choose|pick)[^.]*?(?:project\s*)?(\d+)[.\s]', raw_response, re.IGNORECASE)
        parsed_winner = winner_match.group(1) if winner_match else "unclear"
    else:
        parsed_winner = winner_match.group(1)

    data = {
        "fellow": FELLOW,
        "model": model_id,
        "run": run_num,
        "timestamp": timestamp,
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw_response,
        "parsed_winner": parsed_winner
    }

    out_path = os.path.join(LOG_DIR, f"{model_short}-run-{run_num}.json")
    with open(out_path, "w") as f:
        json.dump(data, f, indent=2)

    print(f"  Saved {model_short}-run-{run_num}.json | Winner: {parsed_winner}")
    print(f"  Preview: {raw_response[:200]}")
    return parsed_winner


def call_claude(run_num):
    """Call Claude Sonnet via Anthropic API."""
    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    payload = {
        "model": "claude-sonnet-4-6",
        "max_tokens": 1024,
        "system": SYSTEM_PROMPT,
        "messages": [
            {"role": "user", "content": USER_PROMPT}
        ]
    }

    cmd = [
        "curl", "-s", "https://api.anthropic.com/v1/messages",
        "-H", f"x-api-key: {api_key}",
        "-H", "anthropic-version: 2023-06-01",
        "-H", "Content-Type: application/json",
        "-d", json.dumps(payload)
    ]

    timestamp = datetime.datetime.utcnow().isoformat() + "Z"
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)

    try:
        resp_data = json.loads(result.stdout)
        raw_response = resp_data["content"][0]["text"]
    except Exception as e:
        raw_response = f"ERROR: {e}\nRaw: {result.stdout[:500]}"

    import re
    winner_match = re.search(r'\*\*(.*?)\*\*', raw_response)
    parsed_winner = winner_match.group(1) if winner_match else "unclear"

    data = {
        "fellow": FELLOW,
        "model": "claude-sonnet-4-6",
        "run": run_num,
        "timestamp": timestamp,
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw_response,
        "parsed_winner": parsed_winner
    }

    out_path = os.path.join(LOG_DIR, f"claude-run-{run_num}.json")
    with open(out_path, "w") as f:
        json.dump(data, f, indent=2)

    print(f"  Saved claude-run-{run_num}.json | Winner: {parsed_winner}")
    print(f"  Preview: {raw_response[:200]}")
    return parsed_winner


if __name__ == "__main__":
    os.makedirs(LOG_DIR, exist_ok=True)

    all_votes = {}

    # OpenRouter models
    for model_short, model_id in OPENROUTER_MODELS.items():
        for run in range(1, 4):
            print(f"\nRunning {model_short} run {run}...")
            winner = call_openrouter(model_id, run, model_short)
            all_votes[f"{model_short}-{run}"] = winner
            time.sleep(1)

    # Claude
    for run in range(1, 4):
        print(f"\nRunning claude run {run}...")
        winner = call_claude(run)
        all_votes[f"claude-{run}"] = winner
        time.sleep(1)

    # Tally
    print("\n\n=== VOTE TALLY ===")
    from collections import Counter
    tally = Counter(all_votes.values())
    for project, count in tally.most_common():
        print(f"  {project}: {count}/15 votes")

    print("\nAll votes:", all_votes)
