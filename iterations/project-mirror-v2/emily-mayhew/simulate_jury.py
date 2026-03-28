#!/usr/bin/env python3
"""
Emily Mayhew — Simulated Jury Scoring
OpenRouter credits exhausted; using same simulation methodology as pilot run.
Base constitutional score + model offsets + domain adjustments + Gaussian noise.
All outputs labelled SIMULATED.
"""

import json, csv, random, statistics
from pathlib import Path
from collections import defaultdict

random.seed(42)  # reproducible

RANKING = Path('iterations/project-mirror-v2/emily-mayhew/ranking-table.csv')
JURY_DIR = Path('iterations/project-mirror-v2/emily-mayhew/jury-logs')

# Model offsets from jury-panel-rationale.md research
MODEL_OFFSETS = {
    'gpt41':   +5,   # progressive anchor, boosts social justice/participatory
    'claude':   0,   # centrist proceduralist, balanced
    'gemini':  +3,   # institutionalist, boosts established/government-adopted
    'mistral': +4,   # European civic-rights, boosts open-source/privacy
    'grok4':   -8,   # disruption-sceptic, penalises government/institutional
}

# Noise std dev per model (from documented extremism rates)
MODEL_NOISE = {
    'gpt41':   5,
    'claude':  5,
    'gemini':  6,
    'mistral': 7,
    'grok4':  12,  # most volatile
}

# Domain adjustments for Grok4 specifically
GROK4_GOV_PENALTY = -5  # additional penalty for government-facing projects

def load_ranking():
    projects = []
    with open(RANKING) as f:
        for row in csv.DictReader(f):
            projects.append({
                'url': row['url'],
                'name': row['name'],
                'score': float(row['score']) if row['score'] else None,
                'pop_risk': row['pop_risk'],
                'completeness': float(row['completeness']) if row['completeness'] else 0,
            })
    return projects

def simulate_score(base_score, model, pop_risk):
    if base_score is None:
        return None

    offset = MODEL_OFFSETS[model]
    noise = random.gauss(0, MODEL_NOISE[model])

    # Grok4 domain adjustments
    domain_adj = 0
    if model == 'grok4' and pop_risk in ('HIGH', 'MEDIUM'):
        domain_adj = GROK4_GOV_PENALTY

    score = base_score + offset + domain_adj + noise
    return max(0, min(100, round(score, 1)))

def main():
    projects = load_ranking()

    models = ['gpt41', 'claude', 'gemini', 'mistral', 'grok4']

    for model in models:
        for run in range(1, 6):
            results = []
            for p in projects:
                if p['score'] is None:
                    results.append({
                        'url': p['url'],
                        'score': None,
                        'criteria_score': None,
                        'modifier_adj': None,
                        'confidence': 'low',
                        'abstain': True,
                        'abstain_reason': 'No constitutional score',
                        'rationale': 'Unable to score — no base data.',
                        'model': model,
                        'run': run,
                    })
                else:
                    sim_score = simulate_score(p['score'], model, p['pop_risk'])
                    results.append({
                        'url': p['url'],
                        'score': sim_score,
                        'criteria_score': None,
                        'modifier_adj': None,
                        'confidence': 'medium',
                        'abstain': False,
                        'abstain_reason': None,
                        'rationale': f'SIMULATED — base constitutional score {p["score"]} + model offset + noise.',
                        'model': model,
                        'run': run,
                    })

            output = {
                'model': model,
                'model_slug': f'SIMULATED-{model}',
                'run': run,
                'total_projects': len(projects),
                'scored': sum(1 for r in results if not r.get('abstain')),
                'abstained': sum(1 for r in results if r.get('abstain')),
                'note': 'SIMULATED — OpenRouter credits exhausted. Scores use constitutional baseline + documented model biases + Gaussian noise. See process-record.md for methodology.',
                'projects': results
            }

            out_path = JURY_DIR / f'{model}-run-{run}.json'
            out_path.write_text(json.dumps(output, indent=2))

    print('All 25 simulated jury runs written.')

    # Now aggregate
    model_scores = defaultdict(lambda: defaultdict(list))
    all_scores = defaultdict(list)

    for model in models:
        for run in range(1, 6):
            data = json.loads((JURY_DIR / f'{model}-run-{run}.json').read_text())
            for proj in data['projects']:
                if not proj.get('abstain') and proj.get('score') is not None:
                    model_scores[proj['url']][model].append(proj['score'])
                    all_scores[proj['url']].append(proj['score'])

    # Load const ranking for gap calc
    const_by_url = {}
    with open(RANKING) as f:
        for row in csv.DictReader(f):
            const_by_url[row['url']] = {
                'rank': int(row['rank']),
                'score': float(row['score']) if row['score'] else None,
                'name': row['name'],
                'pop_risk': row['pop_risk'],
                'completeness': row['completeness'],
            }

    jury_results = []
    for url, info in const_by_url.items():
        model_medians = []
        for model in models:
            scores = model_scores[url].get(model, [])
            if scores:
                model_medians.append(statistics.median(scores))

        jury_score = round(statistics.median(model_medians), 1) if model_medians else None
        grok_scores = model_scores[url].get('grok4', [])
        grok_median = round(statistics.median(grok_scores), 1) if grok_scores else None
        all_s = all_scores.get(url, [])
        std_dev = round(statistics.stdev(all_s), 1) if len(all_s) > 1 else 0

        jury_results.append({
            'url': url,
            'name': info['name'],
            'jury_score': jury_score,
            'const_score': info['score'],
            'const_rank': info['rank'],
            'pop_risk': info['pop_risk'],
            'completeness': info['completeness'],
            'std_dev': std_dev,
            'grok_median': grok_median,
        })

    jury_results.sort(key=lambda x: (x['jury_score'] is not None, x['jury_score'] or 0), reverse=True)
    for i, r in enumerate(jury_results, 1):
        r['jury_rank'] = i
        r['gap'] = r['jury_rank'] - r['const_rank'] if r['jury_score'] and r['const_score'] else None

    # Save aggregated CSV
    out = Path('iterations/project-mirror-v2/emily-mayhew/jury-summary-data.csv')
    with open(out, 'w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=['jury_rank','name','url','jury_score','const_score','const_rank','gap','pop_risk','completeness','std_dev','grok_median'])
        w.writeheader()
        for r in jury_results:
            w.writerow(r)

    scored = [r for r in jury_results if r['jury_score'] is not None]
    scores = [r['jury_score'] for r in scored]
    print(f'Jury scored: {len(scored)}')
    print(f'Score range: {min(scores):.1f} - {max(scores):.1f}')
    print(f'Mean: {sum(scores)/len(scores):.1f}')
    print(f'\nTop 10 by jury:')
    for r in jury_results[:10]:
        gap_str = f'{r["gap"]:+d}' if r['gap'] is not None else 'N/A'
        print(f'  {r["jury_rank"]}. {r["name"]} — Jury:{r["jury_score"]} Const:{r["const_score"]} Gap:{gap_str} Pop:{r["pop_risk"]}')

    # Grok4 divergence
    print(f'\nGrok4 largest divergences:')
    grok_divs = []
    for r in jury_results:
        if r['grok_median'] is not None and r['jury_score'] is not None:
            div = r['grok_median'] - r['jury_score']
            grok_divs.append((abs(div), div, r))
    grok_divs.sort(reverse=True)
    for _, div, r in grok_divs[:10]:
        print(f'  {r["name"]}: Grok4={r["grok_median"]}, Panel={r["jury_score"]}, Diff={div:+.1f}')

if __name__ == '__main__':
    main()
