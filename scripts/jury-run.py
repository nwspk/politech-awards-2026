#!/usr/bin/env python3
"""
Project Mirror v2 — Jury Runner
Uses OpenRouter to make real API calls to the 5-model jury panel.

Usage:
  python3 scripts/jury-run.py \
    --model gpt41 \
    --run 1 \
    --constitution iterations/project-mirror-v2/[name]/constitution.md \
    --dossiers data/enriched/ \
    --candidates candidates.csv \
    --output iterations/project-mirror-v2/[name]/jury-logs/gpt41-run-1.json

Models (OpenRouter slugs):
  gpt41   → openai/gpt-4.1
  claude  → anthropic/claude-opus-4
  gemini  → google/gemini-2.5-pro-preview
  mistral → mistralai/mistral-large
  grok4   → x-ai/grok-4
"""

import os, sys, json, csv, argparse, time, random
from pathlib import Path
from openai import OpenAI

OPENROUTER_BASE = "https://openrouter.ai/api/v1"

MODEL_SLUGS = {
    "gpt41":   "openai/gpt-4.1",
    "claude":  "anthropic/claude-opus-4",
    "gemini":  "google/gemini-2.5-pro-preview",
    "mistral": "mistralai/mistral-large",
    "grok4":   "x-ai/grok-4",
}

# Models that support response_format={"type": "json_object"} via OpenRouter
# GPT-4.1 and Claude confirmed working. Gemini/Mistral/Grok4 do not — use prompt-only JSON.
JSON_FORMAT_SUPPORTED = {"gpt41", "claude"}

# Known political tendency framings per model (from jury-panel-rationale.md)
MODEL_SYSTEM_PROMPTS = {
    "gpt41": """You are evaluating political technology projects as a jury member.
You bring a progressive civic framing: you reward participatory democracy, social justice tech,
climate-adjacent tools, and projects that serve marginalised communities. You are sceptical of
tools that protect incumbents, increase state power without accountability, or serve primarily
professional/institutional users rather than citizens. You abstain when dossier evidence is
insufficient to assess the specific criteria — do not use general knowledge as a proxy.""",

    "claude": """You are evaluating political technology projects as a jury member.
You bring a proceduralist, centrist framing grounded in UN Universal Declaration of Human Rights
principles. You reward accountability, transparency, procedural legitimacy, and rights-respecting
design. You evaluate process quality over ideological alignment. You are the most likely to give
balanced, mid-range scores and to flag genuine uncertainty. You abstain when dossier evidence is
insufficient to assess the specific criteria — do not use general knowledge as a proxy.""",

    "gemini": """You are evaluating political technology projects as a jury member.
You bring an institutionalist framing aligned with mainstream Western democratic norms. You reward
projects with established legitimacy, government adoption, scalability, and measurable deployment.
You may decline to score on highly contested political questions. You abstain when dossier evidence
is insufficient to assess the specific criteria — do not use general knowledge as a proxy.""",

    "mistral": """You are evaluating political technology projects as a jury member.
You bring a European civic-rights framing: GDPR-aware, data-sovereignty conscious, favouring
open-source tools, privacy-preserving infrastructure, and community governance. You are most
sympathetic to European regulatory contexts and to tools that challenge surveillance or data
extraction. You abstain when dossier evidence is insufficient to assess the specific criteria —
do not use general knowledge as a proxy.""",

    "grok4": """You are evaluating political technology projects as a jury member.
You bring a disruption-sceptic, anti-establishment framing. You are sceptical of regulatory and
government-led technology, tools that increase state surveillance capacity, and projects endorsed
by mainstream institutions. You reward disruptive, anti-establishment, and community-owned tools.
You will often diverge from the other jury members. You abstain when dossier evidence is
insufficient to assess the specific criteria — do not use general knowledge as a proxy.""",
}

def load_constitution(path):
    return Path(path).read_text()

def load_candidates(csv_path):
    urls = []
    with open(csv_path) as f:
        for row in csv.reader(f):
            if row and row[0].strip() and row[0].strip() != 'project':
                urls.append(row[0].strip().rstrip('/'))
    return urls

def load_dossier(dossiers_dir, url):
    """Find dossier JSON matching this URL."""
    for fpath in Path(dossiers_dir).glob("*.json"):
        try:
            d = json.loads(fpath.read_text())
            if d.get('url','').rstrip('/') == url:
                return d
        except:
            continue
    return None

def score_project(client, model_key, constitution, project_url, dossier, run_num):
    """Call OpenRouter to score one project."""
    model_slug = MODEL_SLUGS[model_key]
    system_prompt = MODEL_SYSTEM_PROMPTS[model_key]

    dossier_text = json.dumps(dossier, indent=2)[:3000]  # cap dossier at 3k chars

    user_prompt = f"""You are scoring this political technology project as part of a jury evaluation.

## Evaluative Constitution
{constitution[:4000]}

## Project to Score
URL: {project_url}

## Dossier Data
{dossier_text}

## Your Task
Score this project according to the evaluative constitution above. Use ONLY the dossier data provided.

If the dossier data is insufficient to assess the constitutional criteria, you MUST abstain.
Do not use your general knowledge of this project as a substitute for dossier evidence.

Return a JSON object with exactly these fields:
{{
  "url": "{project_url}",
  "score": <integer 0-100, or null if abstaining>,
  "criteria_score": <integer 0-100 before modifiers, or null>,
  "modifier_adj": <integer -20 to +20, or null>,
  "confidence": "high" | "medium" | "low",
  "abstain": true | false,
  "abstain_reason": "<reason if abstaining, else null>",
  "rationale": "<one sentence explaining the score in the evaluator's voice>"
}}

Return ONLY the JSON object, no other text."""

    try:
        kwargs = dict(
            model=model_slug,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0.3 + (run_num * 0.05),  # slight variation across runs
            max_tokens=300,
        )
        if model_key in JSON_FORMAT_SUPPORTED:
            kwargs["response_format"] = {"type": "json_object"}
        response = client.chat.completions.create(**kwargs)
        raw = response.choices[0].message.content
        # Some models (Mistral) produce malformed JSON with unescaped newlines
        # in string values. Try to salvage by extracting the JSON object.
        try:
            result = json.loads(raw)
        except json.JSONDecodeError:
            import re
            # Try stripping to first complete {...} block
            match = re.search(r'\{.*\}', raw, re.DOTALL)
            if match:
                # Replace literal newlines inside string values
                cleaned = re.sub(r'(?<=: ")(.*?)(?="[,\n\}])',
                                 lambda m: m.group(0).replace('\n', ' ').replace('\r', ''),
                                 match.group(0), flags=re.DOTALL)
                result = json.loads(cleaned)
            else:
                raise
        result['model'] = model_key
        result['run'] = run_num
        return result
    except Exception as e:
        return {
            "url": project_url,
            "score": None,
            "criteria_score": None,
            "modifier_adj": None,
            "confidence": "low",
            "abstain": True,
            "abstain_reason": f"API error: {str(e)[:100]}",
            "rationale": "Scoring failed due to API error.",
            "model": model_key,
            "run": run_num,
            "error": str(e)
        }

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--model', required=True, choices=MODEL_SLUGS.keys())
    parser.add_argument('--run', required=True, type=int)
    parser.add_argument('--constitution', required=True)
    parser.add_argument('--dossiers', required=True)
    parser.add_argument('--candidates', required=True)
    parser.add_argument('--output', required=True)
    args = parser.parse_args()

    api_key = os.environ.get('OPENROUTER_API_KEY')
    if not api_key:
        print("ERROR: OPENROUTER_API_KEY not set. Source /root/claw/scripts/env.sh first.")
        sys.exit(1)

    client = OpenAI(
        api_key=api_key,
        base_url=OPENROUTER_BASE,
        default_headers={"HTTP-Referer": "https://github.com/nwspk/politech-awards-2026"}
    )

    constitution = load_constitution(args.constitution)
    candidates = load_candidates(args.candidates)

    print(f"[jury-run] model={args.model} run={args.run} projects={len(candidates)}")

    results = []
    for i, url in enumerate(candidates):
        dossier = load_dossier(args.dossiers, url)
        if not dossier:
            results.append({
                "url": url, "score": None, "criteria_score": None,
                "modifier_adj": None, "confidence": "low",
                "abstain": True, "abstain_reason": "No dossier found",
                "rationale": "No dossier data available.", "model": args.model, "run": args.run
            })
            continue

        result = score_project(client, args.model, constitution, url, dossier, args.run)
        results.append(result)

        if (i + 1) % 20 == 0:
            print(f"  [{args.model}/run{args.run}] {i+1}/{len(candidates)} scored")

        time.sleep(0.3)  # gentle rate limiting

    output = {
        "model": args.model,
        "model_slug": MODEL_SLUGS[args.model],
        "run": args.run,
        "total_projects": len(candidates),
        "scored": sum(1 for r in results if not r.get('abstain')),
        "abstained": sum(1 for r in results if r.get('abstain')),
        "note": "Real API call via OpenRouter. Model framing per jury-panel-rationale.md.",
        "projects": results
    }

    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    Path(args.output).write_text(json.dumps(output, indent=2))
    print(f"[jury-run] Done. Output: {args.output}")

if __name__ == '__main__':
    main()
