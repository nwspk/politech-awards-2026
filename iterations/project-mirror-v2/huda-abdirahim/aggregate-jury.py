#!/usr/bin/env python3
"""
Jury aggregation script for Huda Abdirahim's Project Mirror v2 run.
Processes 25 jury log files (5 models x 5 runs) and produces jury-summary.md.
Uses median aggregation per implementation rules (Grok4 outlier handling).
"""

import json
import csv
import os
import statistics
from collections import defaultdict
from pathlib import Path

BASE = Path("/root/claw/politech-awards-2026/iterations/project-mirror-v2/huda-abdirahim")
JURY_DIR = BASE / "jury-logs"
RANKING_CSV = BASE / "ranking-table.csv"
OUTPUT = BASE / "jury-summary.md"

MODELS = ["gpt41", "claude", "gemini", "mistral", "grok4"]
RUNS = [1, 2, 3, 4, 5]

MODEL_NAMES = {
    "gpt41": "GPT-4.1 (OpenAI)",
    "claude": "Claude Opus 4 (Anthropic)",
    "gemini": "Gemini 2.5 Pro (Google)",
    "mistral": "Mistral Large (Mistral AI)",
    "grok4": "Grok 4 (xAI)",
}

# ---- Load all jury data ----
# Structure: project_url -> model -> [list of scores across runs (None if abstained)]
project_scores = defaultdict(lambda: defaultdict(list))
# Track all project URLs in order
all_project_urls = []
all_project_urls_set = set()
# Track abstention reasons
abstention_reasons = defaultdict(lambda: defaultdict(list))
# Track rationales
rationales = defaultdict(lambda: defaultdict(list))
# Track confidence
confidences = defaultdict(lambda: defaultdict(list))

# Model-level stats
model_stats = defaultdict(lambda: {"scored": 0, "abstained": 0, "runs_loaded": 0})

def normalize_url(u):
    """Normalize URL by stripping trailing slash for consistent matching."""
    return u.rstrip('/')

for model in MODELS:
    for run in RUNS:
        fpath = JURY_DIR / f"{model}-run-{run}.json"
        if not fpath.exists():
            print(f"WARNING: Missing {fpath}")
            continue
        with open(fpath) as f:
            data = json.load(f)
        model_stats[model]["runs_loaded"] += 1
        for p in data["projects"]:
            url = normalize_url(p["url"])
            if url not in all_project_urls_set:
                all_project_urls.append(url)
                all_project_urls_set.add(url)
            if p["abstain"]:
                project_scores[url][model].append(None)
                model_stats[model]["abstained"] += 1
                reason = p.get("abstain_reason", "unknown")
                abstention_reasons[url][model].append(reason)
            else:
                project_scores[url][model].append(p["score"])
                model_stats[model]["scored"] += 1
                rationales[url][model].append(p.get("rationale", ""))
                confidences[url][model].append(p.get("confidence", "low"))

print(f"Loaded {len(all_project_urls)} unique projects from jury logs")

# ---- Load constitutional ranking ----
const_data = {}  # url -> {rank, score, pop_risk, ...}
with open(RANKING_CSV, newline='') as f:
    # Handle potential BOM and Windows line endings
    content = f.read().replace('\r\n', '\n').replace('\r', '\n')
    import io
    reader = csv.DictReader(io.StringIO(content))
    # Detect column names (handle both quoted and unquoted headers)
    fieldnames = reader.fieldnames
    # Map expected names
    def col(candidates):
        for c in candidates:
            if c in fieldnames:
                return c
            # Try stripping quotes
            for fn in fieldnames:
                if fn.strip('"') == c:
                    return fn
        return candidates[0]

    URL_COL = col(["url", "URL"])
    NAME_COL = col(["project_name", "Project"])
    SCORE_COL = col(["score", "Score"])
    COMP_COL = col(["dossier_completeness", "Completeness"])
    POP_COL = col(["popularity_risk", "Pop Risk"])
    UNC_COL = col(["uncertainty", "Uncertainty"])
    RAT_COL = col(["rationale", "Rationale"])

    for i, row in enumerate(reader):
        url = normalize_url(row[URL_COL].strip().strip('"'))
        const_data[url] = {
            "rank": i + 1,
            "name": row[NAME_COL].strip().strip('"'),
            "score": float(row[SCORE_COL].strip().strip('"')),
            "completeness": float(row[COMP_COL].strip().strip('"')) if row.get(COMP_COL) else None,
            "pop_risk": row.get(POP_COL, "none").strip().strip('"'),
            "uncertainty": row.get(UNC_COL, "").strip().strip('"'),
            "rationale": row.get(RAT_COL, "").strip().strip('"'),
        }

print(f"Loaded {len(const_data)} projects from constitutional ranking")

# ---- Compute per-project aggregations ----

def median_of_non_none(values):
    """Return median of non-None values, or None if all None."""
    valid = [v for v in values if v is not None]
    if not valid:
        return None
    return statistics.median(valid)

def stdev_of_non_none(values):
    valid = [v for v in values if v is not None]
    if len(valid) < 2:
        return None
    return statistics.stdev(valid)

results = []

for url in all_project_urls:
    name = const_data.get(url, {}).get("name", url)
    const_rank = const_data.get(url, {}).get("rank", None)
    const_score = const_data.get(url, {}).get("score", None)
    pop_risk = const_data.get(url, {}).get("pop_risk", "unknown")

    # Per-model median scores
    model_medians = {}
    for model in MODELS:
        scores = project_scores[url].get(model, [])
        model_medians[model] = median_of_non_none(scores)

    # Jury score = median of model medians (excluding None/abstaining models)
    valid_model_medians = [v for v in model_medians.values() if v is not None]
    if valid_model_medians:
        jury_score = statistics.median(valid_model_medians)
    else:
        jury_score = None

    # Count abstentions (total across all 25 runs)
    total_abstentions = 0
    total_runs = 0
    for model in MODELS:
        scores = project_scores[url].get(model, [])
        total_runs += len(scores)
        total_abstentions += sum(1 for s in scores if s is None)

    # Count models that scored (at least once)
    models_that_scored = sum(1 for m in MODELS if model_medians[m] is not None)

    # All scores across all 25 runs (for rank stability)
    all_scores = []
    for model in MODELS:
        scores = project_scores[url].get(model, [])
        all_scores.extend([s for s in scores if s is not None])

    # Inter-model disagreement
    if len(valid_model_medians) >= 2:
        inter_model_range = max(valid_model_medians) - min(valid_model_medians)
        inter_model_stdev = statistics.stdev(valid_model_medians)
    else:
        inter_model_range = None
        inter_model_stdev = None

    # Grok4 divergence
    grok4_median = model_medians.get("grok4")
    grok4_divergence = None
    if grok4_median is not None and len(valid_model_medians) >= 3:
        # Panel median excluding grok4
        others = [v for m, v in model_medians.items() if m != "grok4" and v is not None]
        if others:
            panel_median_excl_grok = statistics.median(others)
            if len(others) >= 2:
                panel_stdev = statistics.stdev(others)
                if panel_stdev > 0:
                    grok4_divergence = abs(grok4_median - panel_median_excl_grok) / panel_stdev

    # Familiarity risk
    fam_risk = "LOW"
    high_conf_count = 0
    for model in MODELS:
        confs = confidences[url].get(model, [])
        if any(c == "high" for c in confs):
            high_conf_count += 1
    completeness = const_data.get(url, {}).get("completeness")
    if high_conf_count >= 3 and completeness is not None and completeness < 0.6:
        fam_risk = "HIGH"
    elif high_conf_count >= 2:
        fam_risk = "MEDIUM"

    results.append({
        "url": url,
        "name": name,
        "jury_score": jury_score,
        "const_rank": const_rank,
        "const_score": const_score,
        "pop_risk": pop_risk,
        "model_medians": model_medians,
        "valid_model_medians": valid_model_medians,
        "models_that_scored": models_that_scored,
        "total_abstentions": total_abstentions,
        "total_runs": total_runs,
        "all_scores": all_scores,
        "inter_model_range": inter_model_range,
        "inter_model_stdev": inter_model_stdev,
        "grok4_divergence": grok4_divergence,
        "fam_risk": fam_risk,
    })

# ---- Compute jury ranks ----
# Sort by jury_score descending; None-scored projects go to bottom
scored_results = [r for r in results if r["jury_score"] is not None]
unscored_results = [r for r in results if r["jury_score"] is None]
scored_results.sort(key=lambda r: -r["jury_score"])

for i, r in enumerate(scored_results):
    r["jury_rank"] = i + 1
for i, r in enumerate(unscored_results):
    r["jury_rank"] = len(scored_results) + i + 1  # after all scored

all_results = scored_results + unscored_results

# Jury-const gap
for r in all_results:
    if r["const_rank"] is not None and r["jury_score"] is not None:
        r["jury_const_gap"] = r["const_rank"] - r["jury_rank"]  # positive = jury ranks higher
    else:
        r["jury_const_gap"] = None

# ---- Compute rank stability across 25 runs ----
# For each run, compute a full ranking, then look at rank variance per project
# A "run" is one model-run combination. We have up to 25 runs.
run_rankings = []  # list of dicts: url -> rank in that run

for model in MODELS:
    for run in RUNS:
        # Get scores for all projects in this run
        run_scores = {}
        for url in all_project_urls:
            scores = project_scores[url].get(model, [])
            run_idx = run - 1
            if run_idx < len(scores) and scores[run_idx] is not None:
                run_scores[url] = scores[run_idx]

        if not run_scores:
            continue  # skip empty runs (e.g., gemini)

        # Rank projects in this run
        sorted_urls = sorted(run_scores.keys(), key=lambda u: -run_scores[u])
        run_rank = {}
        for i, u in enumerate(sorted_urls):
            run_rank[u] = i + 1
        run_rankings.append(run_rank)

# For each project, collect its ranks across all runs where it was scored
project_rank_lists = defaultdict(list)
for ranking in run_rankings:
    for url, rank in ranking.items():
        project_rank_lists[url].append(rank)

for r in all_results:
    ranks = project_rank_lists.get(r["url"], [])
    r["rank_appearances"] = len(ranks)
    if len(ranks) >= 2:
        r["rank_stdev"] = statistics.stdev(ranks)
        r["rank_median"] = statistics.median(ranks)
        r["rank_min"] = min(ranks)
        r["rank_max"] = max(ranks)
    elif len(ranks) == 1:
        r["rank_stdev"] = 0
        r["rank_median"] = ranks[0]
        r["rank_min"] = ranks[0]
        r["rank_max"] = ranks[0]
    else:
        r["rank_stdev"] = None
        r["rank_median"] = None
        r["rank_min"] = None
        r["rank_max"] = None

    if r["rank_stdev"] is not None:
        if r["rank_stdev"] < 5:
            r["rank_stability"] = "HIGH"
        elif r["rank_stdev"] <= 15:
            r["rank_stability"] = "MEDIUM"
        else:
            r["rank_stability"] = "LOW"
    else:
        r["rank_stability"] = "N/A"

# ---- Generate jury-summary.md ----

lines = []
def w(s=""):
    lines.append(s)

w("# Jury Summary: Huda Abdirahim")
w()
w("**Evaluator:** Huda Abdirahim")
w("**Pipeline:** Project Mirror v2")
w("**Date:** 2026-03-28")
w("**Jury panel:** GPT-4.1, Claude Opus 4, Gemini 2.5 Pro, Mistral Large, Grok 4")
w("**Runs per model:** 5 (25 total)")
w("**Aggregation method:** Median of model medians (not mean)")
w()
w("---")
w()
w("## Critical note on abstention rates")
w()
w("This jury run has exceptionally high abstention rates across all models. The constitutional")
w("familiarity instruction ('do not use familiarity as a proxy for quality') combined with")
w("Huda Abdirahim's specific constitution (focused on budget transparency, governance legibility,")
w("and collective ownership) led most models to abstain on projects where dossier evidence was")
w("insufficient to assess these narrow criteria.")
w()
w("| Model | Total scored (across 5 runs) | Total abstained | Scoring rate | Note |")
w("|---|---|---|---|---|")
for model in MODELS:
    s = model_stats[model]
    total = s["scored"] + s["abstained"]
    rate = f"{s['scored']/total*100:.1f}%" if total > 0 else "N/A"
    note = ""
    if model == "gemini":
        note = "API errors on all runs — 0% usable data"
    elif model == "grok4":
        note = "API credit exhaustion after first project in most runs"
    elif model == "gpt41":
        note = "Runs 1-2 partial; runs 3-5 fuller coverage"
    elif model == "claude":
        note = "Runs 1-2 minimal; runs 3-5 broader scoring"
    elif model == "mistral":
        note = "Run 1-2 minimal; runs 3-5 broader scoring"
    w(f"| {MODEL_NAMES[model]} | {s['scored']} | {s['abstained']} | {rate} | {note} |")

w()
w("**Effective jury panel:** Due to Gemini's total failure and Grok 4's near-total failure,")
w("the effective panel is 3 models (GPT-4.1, Claude Opus 4, Mistral Large) with partial")
w("coverage from Grok 4 on a handful of projects. This significantly reduces the panel's")
w("ideological diversity — the institutionalist and right-adjacent voices are effectively absent.")
w()
w("---")
w()

# ---- Full vote table ----
w("## Full jury vote table (all 321 projects)")
w()
w("Projects sorted by jury score (descending). Projects with no jury score listed at bottom.")
w()
w("| Jury Rank | Project | Jury Score | Const Rank | Const Score | Jury-Const Gap | Models Scored | Abstentions/25 | Pop Risk | Fam Risk | Note |")
w("|---|---|---|---|---|---|---|---|---|---|---|")

for r in all_results:
    js = f"{r['jury_score']:.1f}" if r['jury_score'] is not None else "N/A"
    cs = f"{r['const_score']:.1f}" if r['const_score'] is not None else "N/A"
    cr = str(r['const_rank']) if r['const_rank'] is not None else "N/A"
    gap = f"{r['jury_const_gap']:+d}" if r['jury_const_gap'] is not None else "N/A"

    note = ""
    if r["models_that_scored"] <= 1:
        note = "Single-model score only"
    elif r["models_that_scored"] == 2:
        note = "Two-model score"

    # Which models scored?
    scored_models = [m for m in MODELS if r["model_medians"][m] is not None]
    if scored_models and r["models_that_scored"] < 5:
        note += f" [{','.join(scored_models)}]" if note else f"[{','.join(scored_models)}]"

    w(f"| {r['jury_rank']} | {r['name']} | {js} | {cr} | {cs} | {gap} | {r['models_that_scored']}/5 | {r['total_abstentions']}/{r['total_runs']} | {r['pop_risk']} | {r['fam_risk']} | {note} |")

w()
w("---")
w()

# ---- Section A: Constitution-jury rank gap ----
w("## A. Constitution-jury rank gap analysis")
w()
w("Gap = Constitutional rank - Jury rank. Positive = jury ranks higher than constitution.")
w("Only includes projects with both a jury score and a constitutional rank.")
w()

gap_projects = [r for r in all_results if r["jury_const_gap"] is not None]

w("### Top 20 projects where jury ranks HIGHER than constitution (positive gap)")
w()
positive_gap = sorted([r for r in gap_projects if r["jury_const_gap"] > 0], key=lambda r: -r["jury_const_gap"])[:20]
w("| Project | Jury Rank | Const Rank | Gap | Jury Score | Models Scored |")
w("|---|---|---|---|---|---|")
for r in positive_gap:
    w(f"| {r['name']} | {r['jury_rank']} | {r['const_rank']} | {r['jury_const_gap']:+d} | {r['jury_score']:.1f} | {r['models_that_scored']}/5 |")

w()
w("### Top 20 projects where constitution ranks HIGHER than jury (negative gap)")
w()
negative_gap = sorted([r for r in gap_projects if r["jury_const_gap"] < 0], key=lambda r: r["jury_const_gap"])[:20]
w("| Project | Jury Rank | Const Rank | Gap | Jury Score | Models Scored |")
w("|---|---|---|---|---|---|")
for r in negative_gap:
    w(f"| {r['name']} | {r['jury_rank']} | {r['const_rank']} | {r['jury_const_gap']:+d} | {r['jury_score']:.1f} | {r['models_that_scored']}/5 |")

w()
flagged_gap = [r for r in gap_projects if abs(r["jury_const_gap"]) > 20]
w(f"**Projects with gap > 20 ranks:** {len(flagged_gap)}")
w()
w("### Interpretation")
w()
w("The jury-constitution gap must be interpreted with extreme caution given the data limitations:")
w()
w("1. **Selection bias in scoring:** Models only scored projects where they found sufficient dossier")
w("   evidence for the constitutional criteria. This means the jury ranking only covers a subset of")
w("   the 321 projects, and that subset is biased toward well-documented projects with clear alignment")
w("   to budget transparency / governance legibility / collective ownership themes.")
w()
w("2. **Positive gaps (jury ranks higher):** Likely reflect projects that are well-known to the models")
w("   and have strong dossier evidence. The constitution's more calibrated scoring (incorporating")
w("   completeness and popularity risk discounting) may be more reliable here.")
w()
w("3. **Negative gaps (constitution ranks higher):** May reflect projects with good constitutional")
w("   alignment but thin dossiers, where the jury abstained or scored conservatively.")
w()

# ---- Section B: Inter-model disagreement ----
w("---")
w()
w("## B. Inter-model disagreement and Grok 4 divergence")
w()

disagreement_projects = [r for r in all_results if r["inter_model_range"] is not None and r["models_that_scored"] >= 2]
disagreement_projects.sort(key=lambda r: -(r["inter_model_range"] or 0))

w("### Top 30 projects with highest inter-model score variance")
w()
w("| Project | Models Scored | Score Range | GPT-4.1 | Claude | Mistral | Grok4 | Disagreement |")
w("|---|---|---|---|---|---|---|---|")
for r in disagreement_projects[:30]:
    rng = r["inter_model_range"]
    level = "HIGH" if rng > 25 else ("MEDIUM" if rng > 10 else "LOW")
    mm = r["model_medians"]
    gpt = f"{mm['gpt41']:.0f}" if mm['gpt41'] is not None else "-"
    cl = f"{mm['claude']:.0f}" if mm['claude'] is not None else "-"
    mi = f"{mm['mistral']:.0f}" if mm['mistral'] is not None else "-"
    gr = f"{mm['grok4']:.0f}" if mm['grok4'] is not None else "-"
    w(f"| {r['name']} | {r['models_that_scored']}/5 | {rng:.0f} | {gpt} | {cl} | {mi} | {gr} | {level} |")

w()
w("### Grok 4 divergence flags (> 2 std dev from panel median)")
w()
grok_flagged = [r for r in all_results if r["grok4_divergence"] is not None and r["grok4_divergence"] > 2]
if grok_flagged:
    w("| Project | Grok 4 Score | Panel Median (excl Grok) | Divergence (std devs) |")
    w("|---|---|---|---|")
    for r in sorted(grok_flagged, key=lambda r: -r["grok4_divergence"]):
        grok_score = r["model_medians"]["grok4"]
        others = [v for m, v in r["model_medians"].items() if m != "grok4" and v is not None]
        panel_med = statistics.median(others) if others else None
        w(f"| {r['name']} | {grok_score:.0f} | {panel_med:.0f} | {r['grok4_divergence']:.1f} |")
else:
    w("No Grok 4 divergence flags found. This is expected given Grok 4 only scored ~10 projects")
    w("total across all 5 runs (API credit exhaustion). Insufficient data for meaningful divergence analysis.")

w()
w("### Note on Gemini absence")
w()
w("Gemini 2.5 Pro returned API errors on all 321 projects across all 5 runs (1,605 abstentions).")
w("This is a model-level failure, not a constitutional assessment. Gemini's institutionalist perspective")
w("is entirely absent from the jury results. This reduces panel diversity and removes the voice most")
w("likely to align with established democratic norms.")
w()

# ---- Section C: Abstention rate by project type ----
w("---")
w()
w("## C. Abstention rate by project type")
w()

# Analyze which projects got scored vs abstained
# Group by: number of models that scored them
scoring_tiers = defaultdict(list)
for r in all_results:
    scoring_tiers[r["models_that_scored"]].append(r)

w("### Scoring coverage by model count")
w()
w("| Models that scored | Project count | Percentage |")
w("|---|---|---|")
for tier in sorted(scoring_tiers.keys(), reverse=True):
    count = len(scoring_tiers[tier])
    pct = count / len(all_results) * 100
    w(f"| {tier}/5 | {count} | {pct:.1f}% |")

w()

# Group by pop_risk
w("### Scoring rate by popularity risk")
w()
pop_groups = defaultdict(lambda: {"total": 0, "scored": 0})
for r in all_results:
    pr = r["pop_risk"]
    pop_groups[pr]["total"] += 1
    if r["jury_score"] is not None:
        pop_groups[pr]["scored"] += 1

w("| Pop Risk | Total | Scored by jury | Scoring rate |")
w("|---|---|---|---|")
for pr in ["high", "medium", "none", "unknown"]:
    if pr in pop_groups:
        g = pop_groups[pr]
        rate = f"{g['scored']/g['total']*100:.1f}%" if g['total'] > 0 else "N/A"
        w(f"| {pr} | {g['total']} | {g['scored']} | {rate} |")

w()
w("### Scoring rate by constitutional rank tier")
w()
w("| Const Rank Tier | Total | Scored by jury | Scoring rate |")
w("|---|---|---|---|")
tier_ranges = [(1, 25, "Top 25"), (26, 50, "26-50"), (51, 100, "51-100"), (101, 200, "101-200"), (201, 321, "201-321")]
for lo, hi, label in tier_ranges:
    tier_projects = [r for r in all_results if r["const_rank"] is not None and lo <= r["const_rank"] <= hi]
    scored = sum(1 for r in tier_projects if r["jury_score"] is not None)
    total = len(tier_projects)
    rate = f"{scored/total*100:.1f}%" if total > 0 else "N/A"
    w(f"| {label} | {total} | {scored} | {rate} |")

w()
w("### Interpretation")
w()
w("The abstention pattern reveals a systematic bias: well-documented, high-alignment projects get")
w("scored; everything else gets abstained. This is the correct behaviour given the familiarity")
w("instruction in the jury prompt, but it means the jury ranking is a partial view — covering")
w("roughly the top constitutional-ranking projects and leaving the long tail unassessed.")
w()
w("Projects that are both constitutionally low-ranked AND not scored by the jury may be doubly")
w("disadvantaged — but this is appropriate if the dossier genuinely lacks evidence for the")
w("constitutional criteria.")
w()

# ---- Section D: Rank stability ----
w("---")
w()
w("## D. Rank stability analysis")
w()

stable_projects = [r for r in all_results if r["rank_stability"] != "N/A" and r["rank_stdev"] is not None]

w(f"**Projects with rank data:** {len(stable_projects)} (out of {len(all_results)} total)")
w()

stability_counts = defaultdict(int)
for r in stable_projects:
    stability_counts[r["rank_stability"]] += 1

w("| Stability | Count | Description |")
w("|---|---|---|")
w(f"| HIGH | {stability_counts.get('HIGH', 0)} | Rank std dev < 5 — robust across runs |")
w(f"| MEDIUM | {stability_counts.get('MEDIUM', 0)} | Rank std dev 5-15 — moderate sensitivity |")
w(f"| LOW | {stability_counts.get('LOW', 0)} | Rank std dev > 15 — fragile, sensitive to procedural variation |")

w()
w("### Most stable projects (HIGH stability, sorted by jury score)")
w()
high_stab = sorted([r for r in stable_projects if r["rank_stability"] == "HIGH"], key=lambda r: -(r["jury_score"] or 0))
w("| Project | Jury Score | Rank Std Dev | Rank Range | Appearances |")
w("|---|---|---|---|---|")
for r in high_stab[:20]:
    js = f"{r['jury_score']:.1f}" if r['jury_score'] is not None else "N/A"
    w(f"| {r['name']} | {js} | {r['rank_stdev']:.1f} | {r['rank_min']}-{r['rank_max']} | {r['rank_appearances']}/25 |")

w()
w("### Least stable projects (LOW stability)")
w()
low_stab = sorted([r for r in stable_projects if r["rank_stability"] == "LOW"], key=lambda r: -(r["rank_stdev"] or 0))
w("| Project | Jury Score | Rank Std Dev | Rank Range | Appearances |")
w("|---|---|---|---|---|")
for r in low_stab[:20]:
    js = f"{r['jury_score']:.1f}" if r['jury_score'] is not None else "N/A"
    w(f"| {r['name']} | {js} | {r['rank_stdev']:.1f} | {r['rank_min']}-{r['rank_max']} | {r['rank_appearances']}/25 |")

w()
w("### Interpretation")
w()
w("Rank stability is heavily influenced by which runs a project appeared in. Projects scored by")
w("GPT-4.1 (which had the broadest coverage in runs 3-5) tend to have more rank appearances.")
w("Projects scored by only 1-2 models in only 1-2 runs will show artificially high stability")
w("(small sample). The most reliable stability signals come from projects with 10+ appearances.")
w()

# ---- Model behaviour notes ----
w("---")
w()
w("## Model behaviour notes")
w()

w("### GPT-4.1 (Progressive anchor)")
w(f"- **Scoring rate:** {model_stats['gpt41']['scored']} scored / {model_stats['gpt41']['scored'] + model_stats['gpt41']['abstained']} total ({model_stats['gpt41']['scored']/(model_stats['gpt41']['scored']+model_stats['gpt41']['abstained'])*100:.1f}%)")
gpt_scores = []
for url in all_project_urls:
    for s in project_scores[url].get("gpt41", []):
        if s is not None:
            gpt_scores.append(s)
if gpt_scores:
    w(f"- **Score range:** {min(gpt_scores)}-{max(gpt_scores)}, median {statistics.median(gpt_scores):.0f}")
w("- **Behaviour:** Broadest scorer on the panel. Runs 3-5 scored ~150 projects each, while runs 1-2 were much sparser. Tends to score generously — progressive framing rewards participatory and justice-oriented projects.")
w("- **Consistency:** Moderate — scores shifted notably between runs 1-2 and runs 3-5, suggesting prompt sensitivity.")
w()

w("### Claude Opus 4 (Centrist proceduralist)")
w(f"- **Scoring rate:** {model_stats['claude']['scored']} scored / {model_stats['claude']['scored'] + model_stats['claude']['abstained']} total ({model_stats['claude']['scored']/(model_stats['claude']['scored']+model_stats['claude']['abstained'])*100:.1f}%)")
cl_scores = []
for url in all_project_urls:
    for s in project_scores[url].get("claude", []):
        if s is not None:
            cl_scores.append(s)
if cl_scores:
    w(f"- **Score range:** {min(cl_scores)}-{max(cl_scores)}, median {statistics.median(cl_scores):.0f}")
w("- **Behaviour:** Stricter scorer than GPT-4.1. Higher abstention rate — applied the familiarity instruction more conservatively. Focused scoring on projects with clear constitutional alignment.")
w("- **Consistency:** Good within runs 3-5; runs 1-2 were minimal (5 and 0 scored).")
w()

w("### Gemini 2.5 Pro (Institutionalist)")
w(f"- **Scoring rate:** 0 scored / {model_stats['gemini']['scored'] + model_stats['gemini']['abstained']} total (0.0%)")
w("- **Behaviour:** TOTAL FAILURE. All 1,605 project evaluations returned API errors across all 5 runs. The Gemini endpoint via OpenRouter was non-functional for this jury run.")
w("- **Impact:** The institutionalist voice is entirely absent. This is the most significant panel gap — Gemini was expected to provide the 'established democratic norms' perspective.")
w()

w("### Mistral Large (European civic-rights)")
w(f"- **Scoring rate:** {model_stats['mistral']['scored']} scored / {model_stats['mistral']['scored'] + model_stats['mistral']['abstained']} total ({model_stats['mistral']['scored']/(model_stats['mistral']['scored']+model_stats['mistral']['abstained'])*100:.1f}%)")
mi_scores = []
for url in all_project_urls:
    for s in project_scores[url].get("mistral", []):
        if s is not None:
            mi_scores.append(s)
if mi_scores:
    w(f"- **Score range:** {min(mi_scores)}-{max(mi_scores)}, median {statistics.median(mi_scores):.0f}")
w("- **Behaviour:** Moderate scorer. GDPR/data-rights framing visible in rationales. Sympathetic to open-source civic tech projects.")
w("- **Consistency:** Similar pattern to Claude — minimal in runs 1-2, broader in runs 3-5.")
w()

w("### Grok 4 (Disruption-sceptic / right-adjacent)")
w(f"- **Scoring rate:** {model_stats['grok4']['scored']} scored / {model_stats['grok4']['scored'] + model_stats['grok4']['abstained']} total ({model_stats['grok4']['scored']/(model_stats['grok4']['scored']+model_stats['grok4']['abstained'])*100:.1f}%)")
gr_scores = []
for url in all_project_urls:
    for s in project_scores[url].get("grok4", []):
        if s is not None:
            gr_scores.append(s)
if gr_scores:
    w(f"- **Score range:** {min(gr_scores)}-{max(gr_scores)}, median {statistics.median(gr_scores):.0f}")
w("- **Behaviour:** NEAR-TOTAL FAILURE due to API credit exhaustion (402 errors). Only scored ~10 projects total across all 5 runs. The right-adjacent / disruption-sceptic perspective is effectively absent.")
w("- **Impact:** Combined with Gemini's failure, the panel has lost its two most ideologically distinct voices. The remaining 3 models (GPT-4.1, Claude, Mistral) are all centre-to-left, reducing the jury's ability to surface genuine disagreement.")
w()

w("---")
w()
w("## Summary assessment")
w()
w("This jury run provides **limited but directionally useful** signal. Key limitations:")
w()
w("1. **Effective panel reduced from 5 to 3 models** — Gemini (API failure) and Grok 4 (credit exhaustion) are effectively absent")
w("2. **High abstention rates even among functioning models** — only ~150/321 projects scored by GPT-4.1, ~45 by Claude, ~65 by Mistral")
w("3. **Run-to-run inconsistency** — runs 1-2 for all models produced far fewer scores than runs 3-5, suggesting the API/prompt pipeline was unstable early")
w("4. **Ideological diversity collapsed** — the three functioning models are all centre-to-left, removing the right-adjacent and institutionalist checks")
w()
w("**Recommendation:** Treat jury scores as a weak signal for triangulation with the constitutional ranking.")
w("The constitution-jury gap analysis (Section A) is the most useful output — it highlights where the")
w("jury's partial-but-independent assessment agrees or disagrees with the constitution. Projects ranked")
w("highly by both constitution and jury have the strongest signal. Projects ranked highly by only one")
w("should be examined for familiarity inflation (jury) or dossier-quality inflation (constitution).")
w()

# Write output
with open(OUTPUT, "w") as f:
    f.write("\n".join(lines) + "\n")

print(f"\nWrote jury summary to {OUTPUT}")
print(f"Total projects: {len(all_results)}")
print(f"Projects with jury scores: {len(scored_results)}")
print(f"Projects without jury scores: {len(unscored_results)}")
