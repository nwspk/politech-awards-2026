#!/usr/bin/env python3
"""
Enrich per-iteration results.json files with name, summary, and assessment fields.

Source data:
  - projects.json: name, summary (tagline / scraped_description fallback)
  - v6/assessments-merged.json: real assessments keyed by URL
  - v6/assessments-grok.json: real assessments for v8 (not present yet)
  - All other iterations: synthetic assessments from README.md heuristic text

Skips: project-mirror-v2 (separate handling), iterations with no results.json
"""

import json
import os
import re
import sys

# ── Paths ──────────────────────────────────────────────────────────────────────
REPO_ROOT = "/root/claw/politech-awards-2026"
ITERATIONS_DIR = os.path.join(REPO_ROOT, "iterations")
PROJECTS_JSON = "/root/claw/politech-awards-ranking-UI/public/data/projects.json"
MAX_ASSESSMENT_LEN = 500


# ── Helpers ────────────────────────────────────────────────────────────────────

def normalise_url(url: str) -> str:
    """Strip trailing slash for consistent lookup."""
    return url.rstrip("/")


def build_projects_lookup(projects_path: str) -> dict:
    """Return {normalised_url: {name, summary}} from projects.json."""
    with open(projects_path) as f:
        projects = json.load(f)
    lookup = {}
    for p in projects:
        url = normalise_url(p.get("url", ""))
        name = p.get("name", "")
        tagline = p.get("tagline", "")
        scraped = p.get("scraped_description", "") or ""
        summary = tagline if tagline else scraped[:200]
        lookup[url] = {"name": name, "summary": summary}
    return lookup


def build_assessment_lookup(assessments_path: str) -> dict:
    """
    Return {normalised_url: assessment_text} from an assessments JSON file.

    Each entry has .political.key_read / .relational.key_read / .experimental.key_read.
    We pick the longest non-null value as the most substantive.
    """
    with open(assessments_path) as f:
        data = json.load(f)
    lookup = {}
    for raw_url, entry in data.items():
        url = normalise_url(raw_url)
        candidates = []
        for lens in ("political", "relational", "experimental"):
            lens_data = entry.get(lens)
            if isinstance(lens_data, dict):
                kr = lens_data.get("key_read")
                if kr and isinstance(kr, str) and kr.strip():
                    candidates.append(kr.strip())
        if candidates:
            # pick longest
            best = max(candidates, key=len)
            # trim to max length
            if len(best) > MAX_ASSESSMENT_LEN:
                best = best[:MAX_ASSESSMENT_LEN].rstrip() + "…"
            lookup[url] = best
    return lookup


def extract_heuristic_name(readme_path: str) -> str:
    """Extract first paragraph under ## Heuristic from a README.md."""
    try:
        content = open(readme_path).read()
        match = re.search(r"## Heuristic\s*\n\n(.*?)(\n\n|\Z)", content, re.DOTALL)
        if match:
            para = match.group(1).replace("\n", " ").strip()
            # truncate if very long
            return para[:200]
    except Exception:
        pass
    return "Unspecified heuristic"


def synthetic_assessment(heuristic_name: str) -> str:
    return "No detailed per-project assessment available for this iteration."


def enrich_results(
    results_path: str,
    projects_lookup: dict,
    assessment_lookup: dict | None,
    heuristic_name: str | None,
    assessment_synthetic: bool,
) -> tuple[list, int, int, int]:
    """
    Load results.json, enrich, write back.

    Returns (enriched_list, count_enriched, count_real_assessments, count_synthetic).
    """
    with open(results_path) as f:
        results = json.load(f)

    enriched = []
    real_count = 0
    synthetic_count = 0

    for entry in results:
        url = entry.get("url", "")
        norm = normalise_url(url)
        score = entry.get("score")

        # name + summary from projects lookup
        proj = projects_lookup.get(norm, {})
        name = proj.get("name", "")
        summary = proj.get("summary", "")

        # assessment
        if not assessment_synthetic and assessment_lookup is not None:
            assessment = assessment_lookup.get(norm)
            if assessment:
                real_count += 1
                is_synthetic = False
            else:
                # fallback
                assessment = synthetic_assessment(heuristic_name or "unspecified heuristic")
                synthetic_count += 1
                is_synthetic = True
        else:
            assessment = synthetic_assessment(heuristic_name or "unspecified heuristic")
            synthetic_count += 1
            is_synthetic = True

        enriched.append(
            {
                "url": url,
                "name": name,
                "score": score,
                "summary": summary,
                "assessment": assessment,
                "assessment_synthetic": is_synthetic,
            }
        )

    with open(results_path, "w") as f:
        json.dump(enriched, f, indent=2, ensure_ascii=False)

    return enriched, len(enriched), real_count, synthetic_count


# ── Iteration config ───────────────────────────────────────────────────────────

# Iterations to skip (handled separately or not applicable)
SKIP_PREFIXES = ("project-mirror",)

# Iterations with real assessments: {iter_name: assessments_filename}
REAL_ASSESSMENT_ITERS = {
    "v5": "assessments.json",
    "v6": "assessments-merged.json",
    "v8": "assessments-grok.json",
}


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    print("Loading projects lookup…")
    projects_lookup = build_projects_lookup(PROJECTS_JSON)
    print(f"  {len(projects_lookup)} projects loaded.\n")

    iteration_dirs = sorted(os.listdir(ITERATIONS_DIR))

    total_enriched = 0
    total_real = 0
    total_synthetic = 0

    for iter_name in iteration_dirs:
        # Skip project-mirror and similar
        if any(iter_name.startswith(pfx) for pfx in SKIP_PREFIXES):
            print(f"[{iter_name}] Skipped (project-mirror — handled separately).")
            continue

        iter_dir = os.path.join(ITERATIONS_DIR, iter_name)
        if not os.path.isdir(iter_dir):
            continue

        results_path = os.path.join(iter_dir, "results.json")
        if not os.path.exists(results_path):
            print(f"[{iter_name}] No results.json — skipped.")
            continue

        readme_path = os.path.join(iter_dir, "README.md")
        heuristic_name = extract_heuristic_name(readme_path)

        if iter_name in REAL_ASSESSMENT_ITERS:
            assess_file = os.path.join(iter_dir, REAL_ASSESSMENT_ITERS[iter_name])
            if os.path.exists(assess_file):
                assessment_lookup = build_assessment_lookup(assess_file)
                assessment_synthetic = False
                print(f"[{iter_name}] Real assessments from {REAL_ASSESSMENT_ITERS[iter_name]} ({len(assessment_lookup)} entries).")
            else:
                assessment_lookup = None
                assessment_synthetic = True
                print(f"[{iter_name}] Assessment file not found — falling back to synthetic.")
        else:
            assessment_lookup = None
            assessment_synthetic = True

        _, count, real, synth = enrich_results(
            results_path,
            projects_lookup,
            assessment_lookup,
            heuristic_name,
            assessment_synthetic,
        )

        total_enriched += count
        total_real += real
        total_synthetic += synth

        print(
            f"[{iter_name}] Enriched {count} entries | "
            f"real assessments: {real} | synthetic: {synth}"
        )

    print(f"\nDone. Total entries enriched: {total_enriched} | Real: {total_real} | Synthetic: {total_synthetic}")


if __name__ == "__main__":
    main()
