#!/usr/bin/env python3
"""
jury-run.py — Score all 321 projects via OpenRouter API using a jury model.

Each model scores every project against the evaluator's constitution, reading
the enriched dossier for evidence. Outputs a JSON file with scores, rationales,
and metadata.

Usage:
    source /root/claw/scripts/env.sh
    python3 scripts/jury-run.py \
        --model gpt41 --run 1 \
        --constitution iterations/project-mirror-v2/<member-slug>/constitution.md \
        --dossiers data/enriched/ \
        --candidates candidates.csv \
        --output iterations/project-mirror-v2/<member-slug>/jury-logs/gpt41-run-1.json
"""

import argparse
import csv
import json
import os
import re
import sys
import time
from pathlib import Path

import urllib.request
import urllib.error

MODEL_MAP = {
    "gpt41": "openai/gpt-4.1",
    "claude": "anthropic/claude-opus-4",
    "gemini": "google/gemini-2.5-pro",
    "mistral": "mistralai/mistral-large",
    "grok4": "x-ai/grok-4-fast",
}

MODEL_FRAMINGS = {
    "gpt41": "You are evaluating from a progressive civic lens. You reward participatory democracy, social justice technology, climate-adjacent tools, and projects that empower marginalised communities. You are sceptical of tools that protect incumbency or concentrate power.",
    "claude": "You are evaluating from a proceduralist/centrist perspective. You apply a rights-based UN UDHR framing, rewarding accountability, transparency, and procedural legitimacy. You evaluate process quality over ideological alignment and give balanced, measured scores.",
    "gemini": "You are evaluating from an institutionalist perspective aligned with mainstream Western democratic norms. You reward projects with established legitimacy, scalability, and government adoption. You hedge or note uncertainty on politically contested questions.",
    "mistral": "You are evaluating from a European civic-rights lens. You are GDPR/data-sovereignty aware and favour open-source, privacy-preserving, community-governed tools. You are most sympathetic to European regulatory frameworks and citizen data rights.",
    "grok4": "You are evaluating from a disruption-sceptic, anti-establishment perspective. You are sceptical of progressive consensus and government-led technology. You penalise projects that increase state surveillance or centralised power. You may diverge sharply from mainstream evaluations.",
}

BATCH_SIZE = 20  # projects per API call


def load_candidates(path):
    """Load project URLs from candidates.csv."""
    urls = []
    with open(path) as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row.get("project", "").strip().rstrip("/")
            if url:
                urls.append(url)
    return urls


def url_to_slug(url):
    """Convert URL to dossier filename slug."""
    slug = url.replace("https://", "").replace("http://", "")
    slug = slug.rstrip("/")
    slug = slug.split("/")[0]  # take domain
    slug = slug.replace("www.", "")
    slug = re.sub(r"[^a-z0-9]", "-", slug.lower())
    slug = re.sub(r"-+", "-", slug).strip("-")
    return slug


def find_dossier(url, dossier_dir):
    """Find the enriched dossier JSON for a given project URL."""
    slug = url_to_slug(url)
    dossier_path = Path(dossier_dir)

    # Try exact match
    exact = dossier_path / f"{slug}.json"
    if exact.exists():
        return json.loads(exact.read_text())

    # Try partial match
    for f in dossier_path.glob("*.json"):
        if slug in f.stem or f.stem in slug:
            return json.loads(f.read_text())

    return None


def build_dossier_summary(dossier):
    """Build a concise text summary of a dossier for the prompt."""
    if not dossier:
        return "No dossier available for this project."

    parts = []
    key_fields = [
        "project_name", "url", "description", "tagline",
        "founded_year", "geography", "countries_deployed",
        "communities_served", "funding_model", "funding_verified",
        "governance_model", "community_ownership", "contributor_governance",
        "license", "open_source", "github_stars", "github_url",
        "academic_citations", "news_articles", "policy_citations",
        "sector", "use_cases", "users_scale", "impact_evidence",
        "technology_stack", "dependency_risks", "generalizability_notes",
        "regulatory_alignment", "regulatory_citations",
        "decade_plus", "sustainability_score",
    ]

    for field in key_fields:
        val = dossier.get(field)
        if val is not None and val != "" and val != [] and val != 0:
            if isinstance(val, list):
                val = ", ".join(str(v) for v in val[:10])
            parts.append(f"- {field}: {val}")

    return "\n".join(parts) if parts else "Minimal dossier data available."


def score_batch(urls, dossier_dir, constitution, model_slug, api_key, model_key=None):
    """Score a batch of projects via OpenRouter API."""
    project_blocks = []
    for url in urls:
        dossier = find_dossier(url, dossier_dir)
        summary = build_dossier_summary(dossier)
        project_blocks.append(f"### Project: {url}\n{summary}")

    projects_text = "\n\n".join(project_blocks)

    framing = ""
    if model_key and model_key in MODEL_FRAMINGS:
        framing = f"\n## YOUR EVALUATIVE PERSPECTIVE\n\n{MODEL_FRAMINGS[model_key]}\n"

    prompt = f"""You are a jury member evaluating political technology projects for the Newspeak House Politech Awards 2026.

You must evaluate each project against the following evaluative constitution. The constitution defines the criteria, weights, modifiers, and procedural rules that govern scoring.
{framing}
## EVALUATIVE CONSTITUTION

{constitution}

## FAMILIARITY INSTRUCTION

You are evaluating these projects using the provided evaluative constitution. Draw your assessment from the dossier data provided — not from your general knowledge of the project.

If you recognise a project from your training data but the dossier does not provide sufficient evidence to assess it against the specific criteria in this constitution, you must abstain: return score null with reason 'insufficient dossier evidence for constitutional criteria'.

Do not use familiarity as a proxy for quality. Do not inflate confidence because you have seen this project discussed positively elsewhere. If the dossier is thin, your confidence must reflect that.

## PROJECTS TO SCORE

{projects_text}

## INSTRUCTIONS

For EACH project listed above, provide a JSON object with these fields:
- "url": the project URL (exactly as given)
- "score": integer 0-100, your overall score applying the constitution
- "criteria_score": integer 0-100, the raw criteria-weighted score before modifiers
- "modifier_adj": integer, the net modifier adjustment (can be negative)
- "confidence": "high", "medium", or "low" based on dossier completeness
- "abstain": true if you cannot score this project (insufficient information), false otherwise
- "abstain_reason": string or null
- "rationale": 1-2 sentence explanation of your score, referencing specific criteria/modifiers

Return ONLY a JSON array of objects. No markdown, no explanation outside the JSON.
Score = criteria_score + modifier_adj, clamped to 0-100.

If the dossier is too thin to score meaningfully, set abstain=true, score=0, and explain why in abstain_reason."""

    payload = {
        "model": model_slug,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.7,
        "max_tokens": 16000,
    }

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}",
        "HTTP-Referer": "https://github.com/nwspk/politech-awards-2026",
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        data=data,
        headers=headers,
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            result = json.loads(resp.read().decode("utf-8"))

        content = result["choices"][0]["message"]["content"]
        content = content.strip()
        if content.startswith("```"):
            content = re.sub(r"^```(?:json)?\n?", "", content)
            content = re.sub(r"\n?```$", "", content)

        scores = json.loads(content)
        return scores

    except (urllib.error.HTTPError, urllib.error.URLError) as e:
        print(f"  API error: {e}", file=sys.stderr)
        if hasattr(e, "read"):
            print(f"  Response: {e.read().decode()[:500]}", file=sys.stderr)
        return None
    except (json.JSONDecodeError, KeyError, IndexError) as e:
        print(f"  Parse error: {e}", file=sys.stderr)
        try:
            print(f"  Raw response: {content[:500]}", file=sys.stderr)
        except NameError:
            pass
        return None


def simulate_score(url, dossier_dir, constitution_text):
    """Fallback: produce a simulated score when API fails."""
    dossier = find_dossier(url, dossier_dir)
    completeness = 0.5
    if dossier:
        filled = sum(1 for v in dossier.values() if v not in (None, "", [], 0))
        completeness = min(1.0, filled / 30)

    import hashlib
    h = int(hashlib.md5(url.encode()).hexdigest()[:8], 16)
    base = 30 + (h % 40) + int(completeness * 20)
    base = max(0, min(100, base))
    mod = ((h >> 8) % 21) - 10
    criteria = max(0, min(100, base))
    score = max(0, min(100, criteria + mod))

    return {
        "url": url,
        "score": score,
        "criteria_score": criteria,
        "modifier_adj": mod,
        "confidence": "medium" if completeness > 0.4 else "low",
        "abstain": completeness < 0.15,
        "abstain_reason": "Insufficient dossier data" if completeness < 0.15 else None,
        "rationale": f"SIMULATED — score based on dossier completeness ({completeness:.2f}) and constitutional keyword heuristics.",
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", required=True, choices=MODEL_MAP.keys())
    parser.add_argument("--run", required=True, type=int)
    parser.add_argument("--evaluator", required=True, help="Evaluator slug (e.g., aadi-kulkarni)")
    parser.add_argument("--constitution", required=True)
    parser.add_argument("--dossiers", required=True)
    parser.add_argument("--candidates", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()

    api_key = os.environ.get("OPENROUTER_API_KEY", "")
    if not api_key:
        print("ERROR: OPENROUTER_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    model_slug = MODEL_MAP[args.model]
    constitution_text = Path(args.constitution).read_text()
    urls = load_candidates(args.candidates)

    print(f"Jury run: model={args.model} ({model_slug}), run={args.run}, projects={len(urls)}")

    all_scores = {}
    simulated_count = 0

    for i in range(0, len(urls), BATCH_SIZE):
        batch = urls[i : i + BATCH_SIZE]
        batch_num = i // BATCH_SIZE + 1
        total_batches = (len(urls) + BATCH_SIZE - 1) // BATCH_SIZE
        print(f"  Batch {batch_num}/{total_batches} ({len(batch)} projects)...")

        retries = 3
        results = None
        for attempt in range(retries + 1):
            results = score_batch(batch, args.dossiers, constitution_text, model_slug, api_key, model_key=args.model)
            if results:
                break
            if attempt < retries:
                wait = (attempt + 1) * 10
                print(f"  Retrying batch {batch_num} in {wait}s (attempt {attempt + 2})...", file=sys.stderr)
                time.sleep(wait)

        if results:
            for item in results:
                url = item.get("url", "").rstrip("/")
                item["model"] = args.model
                item["run"] = args.run
                all_scores[url] = item
        else:
            print(f"  ERROR: Batch {batch_num} failed after {retries+1} attempts. NO SIMULATION FALLBACK.", file=sys.stderr)
            for url in batch:
                all_scores[url.rstrip("/")] = {
                    "url": url,
                    "score": None,
                    "criteria_score": 0,
                    "modifier_adj": 0,
                    "confidence": "low",
                    "abstain": True,
                    "abstain_reason": f"API call failed after {retries+1} attempts",
                    "rationale": "FAILED — real API call did not succeed. No simulated fallback.",
                    "model": args.model,
                    "run": args.run,
                }
                simulated_count += 1

        if i + BATCH_SIZE < len(urls):
            time.sleep(2)

    # Build output: ensure all candidates are covered
    projects = []
    for url in urls:
        clean_url = url.rstrip("/")
        if clean_url in all_scores:
            projects.append(all_scores[clean_url])
        else:
            projects.append({
                "url": url,
                "score": None,
                "criteria_score": 0,
                "modifier_adj": 0,
                "confidence": "low",
                "abstain": True,
                "abstain_reason": "URL not matched in API results",
                "rationale": "FAILED — URL not returned by API. No simulated fallback.",
                "model": args.model,
                "run": args.run,
            })
            simulated_count += 1

    scored = sum(1 for p in projects if not p.get("abstain", False))
    abstained = sum(1 for p in projects if p.get("abstain", False))

    failed_count = simulated_count

    output = {
        "model": args.model,
        "model_id": model_slug,
        "run": args.run,
        "evaluator": args.evaluator if hasattr(args, 'evaluator') else "unknown",
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "total_projects": len(projects),
        "scored": scored,
        "abstained": abstained,
        "failed": failed_count,
        "note": f"Real API call via OpenRouter ({model_slug}). Model framing per jury-panel-rationale.md."
        if failed_count == 0
        else f"Real API call — {failed_count}/{len(urls)} projects failed (no simulation fallback).",
        "projects": projects,
    }

    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    with open(args.output, "w") as f:
        json.dump(output, f, indent=2)

    print(f"Done: {scored} scored, {abstained} abstained, {simulated_count} simulated")
    print(f"Output: {args.output}")


if __name__ == "__main__":
    main()
