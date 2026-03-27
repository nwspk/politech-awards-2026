#!/usr/bin/env python3
"""Run remaining jury calls (OpenRouter only — Claude already done)."""

import json
import os
import sys
import time
import re
from datetime import datetime, timezone
import urllib.request

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY", "")

SYSTEM_PROMPT = """You are Huda Abdirahim, a software engineer who co-founded TreasureCorp (real-time treasury analytics for DAOs) and works at Deutsche Bank Securities Services building digital asset custody infrastructure. You care deeply about programmable governance, collective finance as political infrastructure, and how decentralised communities build legitimacy.

Your values in political technology work:
- Programmable governance: governance rules should be codifiable, auditable, and executable -- you believe collective decisions can and should be embedded in transparent systems
- Collective financial sovereignty: communities should control and understand their shared finances; transparent treasury management is foundational to political legitimacy
- Decentralized legitimacy: deeply interested in how communities that lack central authority build trust, accountability, and shared governance
- Open source and community ownership: you contribute to open source and believe in commons-based development of civic infrastructure
- Governance pluralism: "on-chain, off-chain, and everything in between" -- not a blockchain maximalist; hybrid approaches matter
- Institutional-grade infrastructure: your day job building digital asset custody shows you believe decentralized systems need institutional-grade reliability, not just ideological purity
- Inclusion in technical spaces: you support women in tech and believe diversity in who builds political infrastructure matters

Your scoring criteria for evaluating civic/political technology projects:
| Criterion | Weight | Description |
|---|---|---|
| On-chain/programmable governance | high | Does the project use smart contracts, tokens, or executable code for governance? |
| Transparent collective finance | high | Does it make collective financial flows transparent, auditable, and accountable? |
| Open source + community ownership | high | Is the code open? Does the community govern the platform? |
| DAO/decentralized community applicability | medium | Is it useful for DAOs or decentralised collectives? |
| Governance mechanism innovation | medium | Does it experiment with novel mechanisms? |
| Infrastructure orientation | medium | Is it building foundational infrastructure rather than point solutions? |
| Hybrid on/off-chain bridge | medium | Does it bridge blockchain-based and traditional governance? |
| Inclusion + access | low | Does it lower barriers for underrepresented communities? |

You are reviewing a shortlist of 20 projects for the Politech Awards 2026. Select the single project that best matches your values. State your winner and explain your reasoning in 3-4 sentences."""

USER_PROMPT = """Projects shortlist (Politech Awards 2026 -- please select one winner):

1. **Aragon** -- DAO governance infrastructure; onchain smart contract voting, proposal creation and execution via ANT tokens, Aragon OSx modular governance plugins, token-weighted quorum with timelocks; $35B+ assets governed; 10,000+ projects launched; partially open source; Ethereum/Arbitrum/Base.

2. **Open Collective** -- Transparent collective finance platform; all transactions publicly visible; fiscal infrastructure for movements, open-source projects, and cooperatives; community-governed since 2024 (OFiCo, a 501c6 association of fiscal hosts); open source; international scale.

3. **Logos** -- Decentralised technology stack for civil society: Waku (p2p messaging), Codex (decentralised storage), Nomos (consensus layer); governance built into protocol stack; community ownership; open source; Status/Vac ecosystem.

4. **RxC Voice** -- Full participatory governance pipeline combining Quadratic Funding (resource allocation), pol.is (deliberation), and Quadratic Voting (decision); multi-mechanism approach; open source; RadicalxChange Foundation.

5. **Cobudget** -- Collective budgeting tool; each member receives a budget share to fund proposals; makes financial allocation a democratic act; cooperative governance (Cobudget Association); open source; deployed by cooperatives and nonprofits globally.

6. **DAO Governance Surfaces** -- Academic tool for extracting and labelling governance surfaces from DAO smart contracts; static analysis of onchain governance parameters; open source; direct relevance to auditing DAO governance configurations.

7. **PolicyKit** -- Governance as code for online communities; governance actions (kick, post, vote) expressed as Python code blocks; actions trigger automatically on platform events; governance is literally executable policy; open source; academic origin (University of Washington).

8. **The DAO Standard DAO Framework** -- Standard DAO governance framework written in Solidity; proposal/voting/execution lifecycle encoded in EVM; infrastructure layer for DAOs; open source; grassroots/indie.

9. **One Project** -- Economic democracy infrastructure; Horizon Fund for community capital allocation; Common Platform connecting cooperatives, movement organisations, and communities; community wealth building; open source.

10. **RxC Quadratic Voting** -- Mathematical optimisation of democratic preference expression; participants receive voice credits and allocate them with quadratic cost; prevents majority tyranny; open source; nonprofit (RadicalxChange Foundation).

11. **LiquidFeedback** -- Liquid democracy pioneer; transitive proxy voting (programmable delegation chains); initiative-based proposal lifecycle; open source; deployed by Pirate Party Germany and others; programmatic governance rules.

12. **Polis** -- Open-source AI deliberation platform; matrix factorisation finds genuine consensus across participant clusters without majority-rule; used by vTaiwan for real legislation; nonprofit; community ownership; deployed by governments and civil society worldwide.

13. **Modular Politics** -- Academic framework for composable, modular online governance; governance actions as discrete, interoperable modules; open source research; foundational to PolicyKit and next-generation governance tools.

14. **Radicle** -- Sovereign peer-to-peer code forge built on Git; decentralised infrastructure for software collaboration without central servers; community ownership; open source; Ethereum-based funding integration (Drips).

15. **Decidim** -- Open-source participatory democracy platform; cooperative governance (Decidim Free Software Association); 40,000+ participants in Barcelona; European Commission, Government of Brazil, Finnish Senate; real policy outcomes documented.

16. **vTaiwan** -- Taiwan's open digital democracy platform; civic tech community (g0v); online consultation process using Polis and other tools that produced actual enacted laws (e.g., regulating Uber, online alcohol sales); bridge between digital deliberation and formal governance; open source.

17. **Snowdrift.coop** -- Crowdmatching for public goods; novel coordination mechanism where your pledge scales proportionally with total number of co-pledgers; solves the collective action problem for public goods funding; patron-member cooperative; open source.

18. **Loomio** -- Proven collective decision-making tool; structured proposal lifecycle (Sense Check -> Proposal -> Outcome); time-boxed deliberation with closure rules; used by cooperatives, governments, NGOs; open source; social enterprise model.

19. **Bonfire** -- Federated social network for communities to design and control their own digital spaces; open source; finances transparently managed on Open Collective; fediverse-based; no VC involvement.

20. **CommunityRule** -- Governance toolkit; templates and documentation for community governance rules; helps communities design their own governance structures; open source; academic (Nathan Schneider, University of Colorado); free to use.

Please select one winner and explain your reasoning in 3-4 sentences."""


def extract_winner(text):
    patterns = [
        r'\*\*Winner[:\s]+([^*\n]+)\*\*',
        r'Winner[:\s]+\*\*([^*\n]+)\*\*',
        r'winner[:\s]+\*\*([^*\n]+)\*\*',
        r'## (?:Winner|My (?:pick|choice))[:\s]*\*\*([^*\n]+)\*\*',
        r'^#+\s+(?:Winner|My\s+(?:pick|choice))[:\s]*([^\n]+)',
    ]
    for p in patterns:
        m = re.search(p, text, re.IGNORECASE | re.MULTILINE)
        if m:
            return m.group(1).strip().rstrip('*').strip()

    projects = [
        "Aragon", "Open Collective", "Logos", "RxC Voice", "Cobudget",
        "DAO Governance Surfaces", "PolicyKit", "The DAO Standard",
        "One Project", "RxC Quadratic Voting", "LiquidFeedback",
        "Polis", "Modular Politics", "Radicle", "Decidim",
        "vTaiwan", "Snowdrift", "Loomio", "Bonfire", "CommunityRule"
    ]
    first = text[:500]
    for proj in projects:
        if proj.lower() in first.lower():
            return proj
    return "unknown"


def call_openrouter(model_id, model_short, run_num, log_dir):
    payload = {
        "model": model_id,
        "max_tokens": 600,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": USER_PROMPT}
        ]
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        data=data,
        headers={
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json; charset=utf-8",
            "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
            "X-Title": "Politech Awards 2026 - Project A"
        }
    )

    ts = datetime.now(timezone.utc).isoformat()
    with urllib.request.urlopen(req, timeout=90) as resp:
        result = json.loads(resp.read())

    raw = result["choices"][0]["message"]["content"]

    log = {
        "fellow": "Huda Abdirahim",
        "model": model_id,
        "run": run_num,
        "timestamp": ts,
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw,
        "parsed_winner": extract_winner(raw)
    }

    path = os.path.join(log_dir, f"{model_short}-run-{run_num}.json")
    with open(path, "w") as f:
        json.dump(log, f, indent=2)
    print(f"[{model_short}-run-{run_num}] winner: {log['parsed_winner']}")
    return log


def main():
    log_dir = os.path.dirname(os.path.abspath(__file__))

    models = [
        ("openai/gpt-4o", "gpt4o"),
        ("mistralai/mistral-large", "mistral"),
        ("meta-llama/llama-3-70b-instruct", "llama3"),
        ("google/gemini-pro-1.5", "gemini"),
    ]

    all_logs = []
    for model_id, model_short in models:
        for run in range(1, 4):
            try:
                log = call_openrouter(model_id, model_short, run, log_dir)
                all_logs.append(log)
                time.sleep(2)
            except Exception as e:
                print(f"[{model_short}-run-{run}] ERROR: {e}")
                import traceback; traceback.print_exc()

    from collections import Counter
    votes = Counter()
    for log in all_logs:
        votes[log["parsed_winner"]] += 1

    print("\n=== OPENROUTER VOTE TALLY ===")
    for proj, count in votes.most_common():
        print(f"  {proj}: {count}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
