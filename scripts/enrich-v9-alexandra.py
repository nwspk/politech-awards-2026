#!/usr/bin/env python3
"""
Enrich v9/results.json with Alexandra's D1-D8+D9 assessments.
Source: cache/alexandra-aggregate.json + cache/alexandra-assessments.json
from PR #89 head (nwspk/politech-awards-2026).

Downloads the files from the PR head ref via raw.githubusercontent.com.
"""

import json
import os
import urllib.request

REPO_ROOT = "/root/claw/politech-awards-2026"
V9_RESULTS = os.path.join(REPO_ROOT, "iterations/v9/results.json")

# PR #89 head ref — files are in cache/ dir committed in the PR
PR_HEAD_BASE = "https://raw.githubusercontent.com/nwspk/politech-awards-2026/refs/pull/89/head"
AGGREGATE_URL = f"{PR_HEAD_BASE}/cache/alexandra-aggregate.json"
ASSESSMENTS_URL = f"{PR_HEAD_BASE}/cache/alexandra-assessments.json"

DIMENSION_LABELS = {
    "D1": "democratic participation and civic empowerment",
    "D2": "political utility for movements",
    "D3": "counterfactual impact",
    "D4": "geographic reach and scale",
    "D5": "ecosystem leverage",
    "D6": "evidence of real-world change",
    "D7": "openness and anti-capture",
    "D8": "resource efficiency",
    "D9": "net civic benefit / misuse risk",
}


def fetch_json(url: str) -> dict | list:
    print(f"  Fetching {url.split('/')[-1]}…")
    with urllib.request.urlopen(url) as r:
        return json.load(r)


def normalise_url(url: str) -> str:
    return url.rstrip("/").lower()


def build_assessment(url: str, aggregate_entry: dict, assessments: dict) -> str:
    median_scores = aggregate_entry.get("median_scores", {})
    composite = aggregate_entry.get("median_composite", 0)
    controversial = aggregate_entry.get("controversial_dimensions", [])

    # Collect rater_notes from all jurors
    norm_url = normalise_url(url)
    notes = []
    assess_entry = None
    for k, v in assessments.items():
        if normalise_url(k) == norm_url:
            assess_entry = v
            break

    if assess_entry:
        for juror_name, juror_data in assess_entry.get("jurors", {}).items():
            note = juror_data.get("scores", {}).get("rater_notes", "")
            if note:
                notes.append(note)

    # Top 3 dimensions by score
    scored_dims = [(d, s) for d, s in median_scores.items() if d != "D9" and isinstance(s, (int, float))]
    scored_dims.sort(key=lambda x: x[1], reverse=True)
    top_dims = scored_dims[:3]

    top_str = ", ".join(
        f"{DIMENSION_LABELS.get(d, d)} ({s}/5)" for d, s in top_dims if s >= 3
    )

    d9 = median_scores.get("D9")

    parts = [f"Alexandra's rubric evaluation: composite score {composite:.2f}/5."]
    if top_str:
        parts.append(f"Strongest on {top_str}.")
    if d9 is not None:
        parts.append(f"Net civic benefit (D9): {d9}/5.")
    if controversial:
        parts.append(f"Juror disagreement on: {', '.join(controversial)}.")
    if notes:
        parts.append(notes[0])  # First juror's rater notes

    return " ".join(parts)


def main():
    print("Fetching v9 assessment data from PR #89…")
    aggregate = fetch_json(AGGREGATE_URL)
    assessments = fetch_json(ASSESSMENTS_URL)
    print(f"  Aggregate: {len(aggregate['projects'])} projects")
    print(f"  Assessments: {len(assessments)} entries")

    # Build lookup: normalised_url → aggregate entry
    agg_lookup = {}
    for p in aggregate["projects"]:
        agg_lookup[normalise_url(p["url"])] = p

    print(f"\nEnriching v9/results.json…")
    with open(V9_RESULTS) as f:
        results = json.load(f)

    enriched = 0
    synthetic = 0
    for entry in results:
        url = entry.get("url", "")
        agg = agg_lookup.get(normalise_url(url))
        if agg:
            entry["assessment"] = build_assessment(url, agg, assessments)
            entry["assessment_synthetic"] = False
            enriched += 1
        else:
            entry["assessment"] = "No detailed per-project assessment available for this iteration."
            entry["assessment_synthetic"] = True
            synthetic += 1

    with open(V9_RESULTS, "w") as f:
        json.dump(results, f, indent=2)
        f.write("\n")

    print(f"Done. Real: {enriched} | Synthetic: {synthetic}")


if __name__ == "__main__":
    main()
