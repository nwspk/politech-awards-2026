#!/usr/bin/env python3
"""
Project Mirror v2 — Jury Aggregation for Jamie Coombes
Aggregates 25 jury logs (5 models × 5 runs) into jury-summary.md
"""

import json, csv, statistics, sys
from pathlib import Path
from collections import defaultdict

BASE = Path("/root/claw/politech-awards-2026")
JURY_DIR = BASE / "iterations" / "project-mirror-v2" / "jamie-coombes" / "jury-logs"
RANKING_CSV = BASE / "iterations" / "project-mirror-v2" / "jamie-coombes" / "ranking-table.csv"
OUTPUT = BASE / "iterations" / "project-mirror-v2" / "jamie-coombes" / "jury-summary.md"

MODELS = ['gpt41', 'claude', 'gemini', 'mistral', 'grok4']
MODEL_NAMES = {
    'gpt41': 'GPT-4.1', 'claude': 'Claude Opus 4', 'gemini': 'Gemini 2.5 Pro',
    'mistral': 'Mistral Large', 'grok4': 'Grok 4'
}

def load_jury_logs():
    """Load all 25 jury logs."""
    logs = []
    for model in MODELS:
        for run in range(1, 6):
            fpath = JURY_DIR / f"{model}-run-{run}.json"
            if fpath.exists():
                data = json.loads(fpath.read_text())
                logs.append(data)
            else:
                print(f"WARNING: Missing {fpath}")
    return logs

def load_const_ranking():
    """Load constitutional ranking for gap analysis."""
    ranking = {}
    with open(RANKING_CSV) as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row.get('url', '').rstrip('/')
            try:
                ranking[url] = {
                    'rank': int(row.get('rank', 0)),
                    'score': float(row.get('score', 0)),
                    'name': row.get('project', row.get('name', url)),
                    'completeness': float(row.get('dossier_completeness', row.get('completeness', 0.5))),
                    'pop_risk': row.get('popularity_risk', row.get('pop_risk', 'NONE'))
                }
            except (ValueError, TypeError):
                pass
    return ranking

def aggregate():
    logs = load_jury_logs()
    const_ranking = load_const_ranking()

    print(f"Loaded {len(logs)} jury logs")
    print(f"Loaded {len(const_ranking)} constitutional rankings")

    # Collect scores per project per model and per run
    # project_scores[url][model] = [scores across 5 runs]
    project_scores = defaultdict(lambda: defaultdict(list))
    project_abstentions = defaultdict(int)
    project_total_runs = defaultdict(int)
    project_names = {}

    for log in logs:
        model = log['model']
        for p in log.get('projects', []):
            url = p.get('url', '').rstrip('/')
            project_names[url] = const_ranking.get(url, {}).get('name', url.split('/')[-1])
            project_total_runs[url] += 1
            if p.get('abstain'):
                project_abstentions[url] += 1
            elif p.get('score') is not None:
                try:
                    project_scores[url][model].append(float(p['score']))
                except (ValueError, TypeError):
                    project_abstentions[url] += 1

    # Compute aggregated jury scores
    jury_results = []
    for url in project_names:
        all_scores = []
        model_medians = {}
        for model in MODELS:
            scores = project_scores[url].get(model, [])
            if scores:
                model_medians[model] = statistics.median(scores)
                all_scores.extend(scores)

        if all_scores:
            # Median of model medians (not mean, per Grok4 handling)
            if model_medians:
                jury_score = statistics.median(list(model_medians.values()))
            else:
                jury_score = None

            score_range = max(all_scores) - min(all_scores) if len(all_scores) > 1 else 0
            score_std = statistics.stdev(all_scores) if len(all_scores) > 1 else 0

            # Inter-model disagreement
            if len(model_medians) >= 2:
                model_range = max(model_medians.values()) - min(model_medians.values())
                if model_range > 25:
                    disagreement = 'HIGH'
                elif model_range > 10:
                    disagreement = 'MEDIUM'
                else:
                    disagreement = 'LOW'
            else:
                model_range = 0
                disagreement = 'LOW'

            # Grok4 divergence
            grok4_div = None
            if 'grok4' in model_medians and len(model_medians) >= 3:
                non_grok = [v for k, v in model_medians.items() if k != 'grok4']
                panel_median = statistics.median(non_grok)
                panel_std = statistics.stdev(non_grok) if len(non_grok) > 1 else 10
                grok4_div = (model_medians['grok4'] - panel_median) / max(panel_std, 1)
        else:
            jury_score = None
            score_range = 0
            score_std = 0
            disagreement = 'N/A'
            grok4_div = None
            model_medians = {}

        # Constitutional ranking data
        cr = const_ranking.get(url, {})
        const_score = cr.get('score', 0)
        const_rank = cr.get('rank', 999)
        completeness = cr.get('completeness', 0.5)
        pop_risk = cr.get('pop_risk', 'NONE')

        # Jury rank will be assigned after sorting
        jury_results.append({
            'url': url,
            'name': project_names[url],
            'jury_score': round(jury_score, 1) if jury_score else None,
            'const_score': const_score,
            'const_rank': const_rank,
            'score_range': round(score_range, 1),
            'score_std': round(score_std, 1),
            'disagreement': disagreement,
            'abstentions': project_abstentions[url],
            'total_runs': project_total_runs[url],
            'grok4_div': round(grok4_div, 2) if grok4_div else None,
            'model_medians': model_medians,
            'completeness': completeness,
            'pop_risk': pop_risk
        })

    # Sort by jury score descending, assign jury ranks
    jury_results.sort(key=lambda x: -(x['jury_score'] or 0))
    for i, r in enumerate(jury_results):
        r['jury_rank'] = i + 1
        r['jury_const_gap'] = r['const_rank'] - r['jury_rank'] if r['jury_score'] else None

    # Rank stability: compute rank in each of 25 runs
    # For each run, rank all projects by score, compute std dev of ranks
    run_rankings = []
    for log in logs:
        run_scores = {}
        for p in log.get('projects', []):
            url = p.get('url', '').rstrip('/')
            if not p.get('abstain') and p.get('score') is not None:
                try:
                    run_scores[url] = float(p['score'])
                except:
                    pass
        # Rank this run
        sorted_urls = sorted(run_scores.keys(), key=lambda u: -run_scores[u])
        run_rank = {u: i+1 for i, u in enumerate(sorted_urls)}
        run_rankings.append(run_rank)

    for r in jury_results:
        ranks = [rr.get(r['url'], 999) for rr in run_rankings if r['url'] in rr]
        if len(ranks) >= 2:
            r['rank_std'] = round(statistics.stdev(ranks), 1)
            r['rank_min'] = min(ranks)
            r['rank_max'] = max(ranks)
            if r['rank_std'] < 5:
                r['stability'] = 'HIGH'
            elif r['rank_std'] < 15:
                r['stability'] = 'MEDIUM'
            else:
                r['stability'] = 'LOW'
        else:
            r['rank_std'] = 0
            r['rank_min'] = r['jury_rank']
            r['rank_max'] = r['jury_rank']
            r['stability'] = 'N/A'

    # --- Write jury-summary.md ---
    lines = []
    lines.append("# Jury Summary — Jamie Coombes")
    lines.append("## Project Mirror v2")
    lines.append(f"## Date: 2026-03-28\n")
    lines.append("---\n")

    # Overview
    scored_count = sum(1 for r in jury_results if r['jury_score'] is not None)
    abstain_count = sum(r['abstentions'] for r in jury_results)
    lines.append(f"**Panel:** 5 models × 5 runs = 25 evaluations per project")
    lines.append(f"**Projects scored:** {scored_count}")
    lines.append(f"**Total abstentions across all runs:** {abstain_count}")
    lines.append(f"**Aggregation method:** Median of model medians (reduces Grok 4 outlier influence)\n")

    # Full vote table
    lines.append("## Full Jury Vote Table — All 321 Projects\n")
    lines.append("| Jury Rank | Project | Jury Score | Const Score | JuryConstGap | Stability | Disagreement | Pop Risk | Abstentions | Note |")
    lines.append("|---|---|---|---|---|---|---|---|---|---|")

    for r in jury_results:
        gap = r['jury_const_gap'] if r['jury_const_gap'] is not None else 'N/A'
        note = ''
        if r['grok4_div'] and abs(r['grok4_div']) > 2:
            note = f"Grok4 divergence: {r['grok4_div']:+.1f}σ"
        if r['pop_risk'] == 'HIGH':
            note = (note + '; ' if note else '') + 'HIGH pop risk'
        if abs(gap) > 20 if isinstance(gap, (int, float)) else False:
            note = (note + '; ' if note else '') + f'Large gap ({gap:+d})'

        lines.append(f"| {r['jury_rank']} | {r['name']} | {r['jury_score'] or 'N/A'} | {r['const_score']} | {gap} | {r['stability']} | {r['disagreement']} | {r['pop_risk']} | {r['abstentions']}/25 | {note} |")

    lines.append("")

    # A. Constitution-jury rank gap
    lines.append("## A. Constitution-Jury Rank Gap Analysis\n")
    pos_gaps = sorted([r for r in jury_results if r['jury_const_gap'] and r['jury_const_gap'] > 0],
                      key=lambda x: -x['jury_const_gap'])[:20]
    neg_gaps = sorted([r for r in jury_results if r['jury_const_gap'] and r['jury_const_gap'] < 0],
                      key=lambda x: x['jury_const_gap'])[:20]

    lines.append("### Top 20 — Jury ranks higher than constitution (potential familiarity inflation)\n")
    lines.append("| Project | Jury Rank | Const Rank | Gap | Pop Risk |")
    lines.append("|---|---|---|---|---|")
    for r in pos_gaps:
        lines.append(f"| {r['name']} | {r['jury_rank']} | {r['const_rank']} | +{r['jury_const_gap']} | {r['pop_risk']} |")

    lines.append("\n### Top 20 — Constitution ranks higher than jury\n")
    lines.append("| Project | Jury Rank | Const Rank | Gap | Pop Risk |")
    lines.append("|---|---|---|---|---|")
    for r in neg_gaps:
        lines.append(f"| {r['name']} | {r['jury_rank']} | {r['const_rank']} | {r['jury_const_gap']} | {r['pop_risk']} |")

    # B. Inter-model disagreement
    lines.append("\n## B. Inter-Model Disagreement\n")
    high_disagree = sorted([r for r in jury_results if r['disagreement'] == 'HIGH'],
                           key=lambda x: -x['score_range'])[:30]
    lines.append("### Top 30 highest inter-model disagreement\n")
    lines.append("| Project | Jury Score | Score Range | Grok4 Divergence | Disagreement |")
    lines.append("|---|---|---|---|---|")
    for r in high_disagree:
        gd = f"{r['grok4_div']:+.1f}σ" if r['grok4_div'] else 'N/A'
        lines.append(f"| {r['name']} | {r['jury_score']} | {r['score_range']} | {gd} | {r['disagreement']} |")

    # Grok4 extreme divergences
    grok4_extremes = sorted([r for r in jury_results if r['grok4_div'] and abs(r['grok4_div']) > 2],
                            key=lambda x: -abs(x['grok4_div']))
    lines.append(f"\n### Grok 4 extreme divergences (> 2σ from panel median): {len(grok4_extremes)} projects\n")
    if grok4_extremes:
        lines.append("| Project | Jury Score | Grok4 Median | Panel Median (excl. Grok4) | Divergence |")
        lines.append("|---|---|---|---|---|")
        for r in grok4_extremes:
            gm = r['model_medians'].get('grok4', 'N/A')
            non_grok = [v for k, v in r['model_medians'].items() if k != 'grok4']
            pm = round(statistics.median(non_grok), 1) if non_grok else 'N/A'
            lines.append(f"| {r['name']} | {r['jury_score']} | {gm} | {pm} | {r['grok4_div']:+.1f}σ |")

    # C. Abstention rate
    lines.append("\n## C. Abstention Rate by Dossier Completeness\n")
    completeness_tiers = {'0.0-0.3': [], '0.3-0.5': [], '0.5-0.7': [], '0.7-1.0': []}
    for r in jury_results:
        c = r['completeness']
        if c < 0.3:
            completeness_tiers['0.0-0.3'].append(r)
        elif c < 0.5:
            completeness_tiers['0.3-0.5'].append(r)
        elif c < 0.7:
            completeness_tiers['0.5-0.7'].append(r)
        else:
            completeness_tiers['0.7-1.0'].append(r)

    lines.append("| Completeness Tier | Projects | Avg Abstentions/25 | Avg Jury Score |")
    lines.append("|---|---|---|---|")
    for tier, projects in completeness_tiers.items():
        if projects:
            avg_abs = round(sum(p['abstentions'] for p in projects) / len(projects), 1)
            scored_p = [p for p in projects if p['jury_score']]
            avg_score = round(sum(p['jury_score'] for p in scored_p) / len(scored_p), 1) if scored_p else 'N/A'
            lines.append(f"| {tier} | {len(projects)} | {avg_abs} | {avg_score} |")

    # D. Rank stability
    lines.append("\n## D. Rank Stability Analysis\n")
    stable = sorted([r for r in jury_results if r['stability'] == 'HIGH'], key=lambda x: x['jury_rank'])[:20]
    unstable = sorted([r for r in jury_results if r['stability'] == 'LOW'], key=lambda x: -r['rank_std'])[:20]

    lines.append("### Most stable (rank barely moves across 25 runs)\n")
    lines.append("| Project | Jury Rank | Rank Std Dev | Min-Max Rank |")
    lines.append("|---|---|---|---|")
    for r in stable:
        lines.append(f"| {r['name']} | {r['jury_rank']} | {r['rank_std']} | {r['rank_min']}-{r['rank_max']} |")

    lines.append("\n### Least stable (rank moves widely)\n")
    lines.append("| Project | Jury Rank | Rank Std Dev | Min-Max Rank |")
    lines.append("|---|---|---|---|")
    for r in unstable:
        lines.append(f"| {r['name']} | {r['jury_rank']} | {r['rank_std']} | {r['rank_min']}-{r['rank_max']} |")

    # Model behaviour notes
    lines.append("\n## Model Behaviour Notes\n")
    for model in MODELS:
        model_scores = []
        model_abstentions = 0
        model_total = 0
        for log in logs:
            if log['model'] == model:
                for p in log.get('projects', []):
                    model_total += 1
                    if p.get('abstain'):
                        model_abstentions += 1
                    elif p.get('score') is not None:
                        try:
                            model_scores.append(float(p['score']))
                        except:
                            pass

        if model_scores:
            avg = round(statistics.mean(model_scores), 1)
            std = round(statistics.stdev(model_scores), 1) if len(model_scores) > 1 else 0
            lines.append(f"**{MODEL_NAMES[model]}:** Mean score {avg}, std dev {std}, abstention rate {model_abstentions}/{model_total} ({round(100*model_abstentions/max(model_total,1), 1)}%)")
        else:
            lines.append(f"**{MODEL_NAMES[model]}:** No scored results")

    # Familiarity risk
    lines.append("\n## Familiarity Risk Flags\n")
    fam_risk = [r for r in jury_results if r['pop_risk'] == 'HIGH']
    if fam_risk:
        lines.append("| Project | Jury Score | Const Score | Gap | Note |")
        lines.append("|---|---|---|---|---|")
        for r in sorted(fam_risk, key=lambda x: -(x['jury_score'] or 0)):
            gap = r['jury_const_gap'] or 'N/A'
            lines.append(f"| {r['name']} | {r['jury_score']} | {r['const_score']} | {gap} | HIGH pop risk — score may partly reflect documentation advantage |")

    OUTPUT.write_text('\n'.join(lines))
    print(f"Written: {OUTPUT}")
    print(f"Total projects in summary: {len(jury_results)}")

if __name__ == '__main__':
    aggregate()
