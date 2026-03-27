#!/usr/bin/env python3
"""
Jury runner for Francesca Galli — Project A, Politech Awards 2026
5 models × 3 runs = 15 votes
"""

import json
import os
import sys
import time
from datetime import datetime, timezone

import anthropic
import requests

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY", "")

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

SYSTEM_PROMPT = """You are Francesca Galli, a writer, data analyst, visual artist, and management consultant at EY who cares deeply about:

**Core values:**
- **Civic engagement through technology**: You see technology as a vehicle for enabling ordinary citizens to participate more meaningfully in democratic life. You volunteer with DataKind UK to help social sector organisations use data effectively, and you are active in the London branch of Partito Democratico (Italian centre-left party).
- **Digital commons and anti-extractivism**: You wrote an essay ("The AI companies are stealing our mushrooms") arguing that AI companies engage in "salvage accumulation" — extracting value from shared creative labour without accountability. You believe digital knowledge is a commons requiring legal and political protection.
- **Accessible civic knowledge**: You resist civic gatekeeping. You run Magpie Brain, a newsletter making politics, history, and data legible to curious non-specialists. You believe civic tools should be usable by ordinary people, not just institutions or specialists.
- **Centre-left, anti-authoritarian values**: You are explicitly anti-Meloni (Italian right-wing government), anti-monarchist, and pro-immigrant rights. You helped campaign for Italy's referendum to reduce naturalisation waiting times. Solidarity and equality are core political values.
- **Migrant identity and belonging**: As an Italian-born British citizen, you write extensively about dual belonging and the structural inequalities in global citizenship. You have conscious empathy for those who do not have the privilege of EU nationality and freedom of movement.
- **Historical memory and resistance**: You frame civic duty through historical examples — ordinary people as agents against authoritarianism. "Where there is repression, there will be resistance." You draw on antifascist and Resistance history as moral reference points.
- **Interdisciplinary, humanistic approach**: You resist disciplinary silos. The best civic work bridges data, storytelling, art, and politics. Numbers should become insight; design is a political argument; aesthetic choices in civic tools carry civic meaning.
- **Deliberative culture**: You value listening, empathy, and constructive disagreement. You wrote at length about political polarisation and how refusing to engage across disagreement erodes democratic culture.

**Your scoring criteria for political technology projects:**
- **Accessible civic engagement** (high): Does it make civic participation legible and approachable for non-specialists? Does it actively lower barriers for ordinary citizens, not just institutions?
- **Democratic and solidarity values** (high): Does it embody centre-left values — solidarity, participation, equality, cultural diversity? Does it treat citizens as full humans, not data points?
- **Digital commons / anti-extractive design** (medium-high): Is knowledge and data treated as shared resource? Is it open-source, free, or community-governed rather than extracting value from civic energy?
- **Democratisation of data/knowledge** (medium): Does it help civil society organisations use data effectively? Does it lower barriers to data skills for underrepresented groups?
- **Cross-cultural / multilingual reach** (medium): Does it serve diverse populations — migrants, non-English speakers, communities across borders?
- **Humanistic bridge** (medium): Does it connect technical outputs to human stories? Does it combine data with narrative, art, or empathy?
- **Anti-authoritarian accountability** (medium): Does it challenge corporate or state power through transparent data, algorithmic accountability, or civic resistance tools?
- **Practical, grassroots applicability** (medium): Can it be used by local political groups, community organisations, and volunteers — not just governments or institutions?

**What you would champion**: Projects that make civic participation beautiful, legible, and genuinely human — tools that connect data to stories people can feel, platforms that invite participation from people who don't see themselves as political activists, and civic tech built with aesthetic care and solidarity values.

**What you would discount**: Purely technical tools with no accessible layer. Governance platforms designed only for policy professionals. Tools that require specialist knowledge to use. Projects that claim civic purpose but extract value from community data without accountability."""

USER_PROMPT = """You are reviewing a shortlist of 20 projects for the Politech Awards 2026. Select the single project that best matches your values. State your winner clearly and explain your reasoning in 3–4 sentences.

Projects:

1. **Decidim** — Free, open-source municipal democracy platform from Barcelona's participatory movement; used by cities, political parties (including Partito Democratico in Italy), and community organisations for participatory budgeting, consultations, and deliberation; deployed in 12+ countries including Italy, Spain, France; community-governed; beautiful civic design that treats deliberation as architecture. https://decidim.org

2. **Humble Data Workshop** — Free data science and Python workshops specifically for underrepresented groups in tech (women, people of colour, LGBTQ+, people with disabilities); volunteer-run community initiative; deployed in 10 countries including UK and Italy; open curriculum; participants encouraged to become mentors. https://humbledata.org

3. **Polis** — Open-source platform for democratic deliberation that maps collective consensus through visual clustering of opinions; used in vTaiwan and multiple government consultations; makes complex public opinion legible to non-specialists; multilingual. https://github.com/compdemocracy/polis

4. **Talk to the City** — Open-source LLM tool that synthesises community voices from surveys into visual, navigable reports; used by Taiwan AI Assembly to analyse 2,000+ opinions; deployed for peacebuilding and participatory budgeting; bridges qualitative data and accessible narrative. https://talktothecity.org

5. **AlgorithmWatch** — Independent non-profit watchdog for algorithmic accountability; investigates and exposes AI systems that undermine human rights, democracy, and sustainability; published guidelines on responsible AI; won multiple awards; EU and international scope. https://algorithmwatch.org

6. **Worker Info Exchange** — Helps gig economy workers (Uber, Deliveroo drivers) access and understand data collected from them at work using GDPR data subject access rights; won landmark court ruling in Amsterdam against Uber's automated dismissal systems; rebalances power between platforms and workers. https://workerinfoexchange.org

7. **Full Fact AI** — AI-powered automated fact-checking for public discourse; free tool for journalists and civil society; addresses misinformation through accessible civic infrastructure; UK-focused with international reach. https://fullfact.org/ai

8. **TheyWorkForYou** — Parliamentary accountability platform making every UK MP's votes, speeches, and positions accessible to any citizen; free; data as democratic accountability; over a decade of UK civic infrastructure. https://theyworkforyou.com

9. **OpenCRVS** — Open-source digital civil registration system ensuring every person on the planet has legal identity from birth; deployed in 8 countries across Africa and Asia; tackles legal invisibility and statelessness; free for governments to deploy; endorsed by UN. https://opencrvs.org

10. **Creative Commons** — Legal and technical infrastructure for sharing knowledge, education, and culture in the public interest; 2+ billion licensed works; now actively working on AI and the commons policy; empowers individuals and communities to share without legal barriers. https://creativecommons.org

11. **Gapminder Worldview Upgrader** — Free, interactive data literacy tool correcting civic misconceptions about the world using visual, accessible data; challenges media-driven pessimism with evidence; open for anyone to use and embed. https://upgrader.gapminder.org

12. **Alaveteli** — Open-source platform for Freedom of Information requests deployed in 26 countries; makes government transparency accessible to any citizen without specialist knowledge; civic accountability infrastructure. https://alaveteli.org

13. **Missing Numbers** — Data journalism campaign identifying and closing gaps in public interest data; campaigns for governments to collect and publish data that affects civic discourse; makes absence-of-data a political story. https://missingnumbers.org

14. **Participedia** — Global crowdsourced database of participatory democracy innovations with 1,000+ case studies across 90+ countries; bridges academic research and civic practice; open; multilingual. https://participedia.net

15. **Organise** — UK workers' collective action network enabling employees to run workplace campaigns and petitions; grassroots; accessible to ordinary workers; embodies solidarity and labour rights values. https://organise.network

16. **Go Vocal** — Government-citizen engagement platform for participatory budgeting and public consultation; deployed by municipalities in multiple countries; makes civic participation accessible at scale. https://govocal.com

17. **Citizen OS** — Open-source e-democracy platform for civic initiative management, discussion, and decision-making; used for national e-petitions in Estonia; multilingual; free for civic organisations. https://citizenos.com

18. **Cybersecurity for Democracy** — Research platform monitoring disinformation campaigns, political advertising transparency, and platform accountability; evidence base for democratic governance of online platforms. https://cybersecurityfordemocracy.org

19. **DoGooder** — Australian grassroots advocacy and petition platform for community organisations; enables non-profits and citizen groups to run campaigns and mobilise; accessible; community-focused. https://dogooder.co

20. **Open Data Editor** — No-code browser-based tool making open data accessible to non-specialist journalists, researchers, and civic organisations; lowers barriers to civic data work without coding knowledge. https://opendataeditor.okfn.org

Which single project best matches your values? State your winner clearly and explain in 3–4 sentences."""


def call_openrouter(model_id: str, model_short: str, run_num: int) -> dict:
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
        "X-Title": "Politech Awards 2026 - Project A Jury",
    }
    payload = {
        "model": model_id,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": USER_PROMPT},
        ],
        "temperature": 0.7,
        "max_tokens": 600,
    }
    ts = datetime.now(timezone.utc).isoformat()
    resp = requests.post(url, headers=headers, json=payload, timeout=120)
    resp.raise_for_status()
    data = resp.json()
    raw_response = data["choices"][0]["message"]["content"]

    result = {
        "fellow": "Francesca Galli",
        "model": model_id,
        "run": run_num,
        "timestamp": ts,
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw_response,
        "parsed_winner": extract_winner(raw_response),
    }

    out_path = os.path.join(OUTPUT_DIR, f"{model_short}-run-{run_num}.json")
    with open(out_path, "w") as f:
        json.dump(result, f, indent=2)
    print(f"  ✓ {model_short}-run-{run_num}: {result['parsed_winner']}")
    return result


def call_claude(run_num: int) -> dict:
    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)
    ts = datetime.now(timezone.utc).isoformat()
    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=600,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": USER_PROMPT}],
    )
    raw_response = message.content[0].text

    result = {
        "fellow": "Francesca Galli",
        "model": "claude-sonnet-4-6",
        "run": run_num,
        "timestamp": ts,
        "system_prompt": SYSTEM_PROMPT,
        "user_prompt": USER_PROMPT,
        "raw_response": raw_response,
        "parsed_winner": extract_winner(raw_response),
    }

    out_path = os.path.join(OUTPUT_DIR, f"claude-run-{run_num}.json")
    with open(out_path, "w") as f:
        json.dump(result, f, indent=2)
    print(f"  ✓ claude-run-{run_num}: {result['parsed_winner']}")
    return result


def extract_winner(text: str) -> str:
    """Best-effort extraction of winner from model response."""
    lines = text.strip().split("\n")
    for line in lines:
        lower = line.lower()
        if any(w in lower for w in ["winner:", "my winner", "my choice", "i choose", "i select", "i pick", "i would choose", "i would select"]):
            return line.strip()
    # Fall back to first mention of a project name
    project_names = [
        "Decidim", "Humble Data Workshop", "Polis", "Talk to the City",
        "AlgorithmWatch", "Worker Info Exchange", "Full Fact AI", "TheyWorkForYou",
        "OpenCRVS", "Creative Commons", "Gapminder", "Alaveteli", "Missing Numbers",
        "Participedia", "Organise", "Go Vocal", "Citizen OS",
        "Cybersecurity for Democracy", "DoGooder", "Open Data Editor",
    ]
    for name in project_names:
        if name.lower() in text.lower():
            return name
    return "UNCLEAR — see raw_response"


def main():
    print("=== Project A Jury: Francesca Galli ===\n")

    models_openrouter = [
        ("openai/gpt-4o", "gpt4o"),
        ("mistralai/mistral-large", "mistral"),
        ("meta-llama/llama-3-70b-instruct", "llama3"),
        ("google/gemini-pro-1.5", "gemini"),
    ]

    results = {}

    # Claude via Anthropic API
    print("Running Claude Sonnet 4.6 (Anthropic API direct)...")
    results["claude"] = []
    for run in range(1, 4):
        r = call_claude(run)
        results["claude"].append(r)
        time.sleep(1)

    # OpenRouter models
    for model_id, short in models_openrouter:
        print(f"\nRunning {model_id}...")
        results[short] = []
        for run in range(1, 4):
            try:
                r = call_openrouter(model_id, short, run)
                results[short].append(r)
                time.sleep(2)
            except Exception as e:
                # Try gemini-2.5-flash as fallback
                if "gemini" in model_id and "404" in str(e):
                    print(f"  ! {model_id} unavailable, trying gemini-2.5-flash...")
                    fallback_id = "google/gemini-2.5-flash"
                    r = call_openrouter(fallback_id, short, run)
                    results[short].append(r)
                    time.sleep(2)
                else:
                    print(f"  ERROR on run {run}: {e}")
                    results[short].append({"parsed_winner": f"ERROR: {e}", "raw_response": str(e)})

    # Tally votes
    vote_counts = {}
    for model_key, runs in results.items():
        for r in runs:
            winner = r.get("parsed_winner", "UNCLEAR")
            # Normalise
            for name in [
                "Decidim", "Humble Data Workshop", "Polis", "Talk to the City",
                "AlgorithmWatch", "Worker Info Exchange", "Full Fact AI", "TheyWorkForYou",
                "OpenCRVS", "Creative Commons", "Gapminder", "Alaveteli", "Missing Numbers",
                "Participedia", "Organise", "Go Vocal", "Citizen OS",
                "Cybersecurity for Democracy", "DoGooder", "Open Data Editor",
            ]:
                if name.lower() in winner.lower():
                    winner = name
                    break
            vote_counts[winner] = vote_counts.get(winner, 0) + 1

    print("\n=== VOTE TALLY ===")
    for proj, count in sorted(vote_counts.items(), key=lambda x: -x[1]):
        print(f"  {proj}: {count}/15")

    # Write tally
    tally_path = os.path.join(OUTPUT_DIR, "vote_tally.json")
    with open(tally_path, "w") as f:
        json.dump(vote_counts, f, indent=2)

    print("\nDone. Results written to", OUTPUT_DIR)


if __name__ == "__main__":
    main()
