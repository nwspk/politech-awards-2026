import * as fs from 'fs';
import csv from 'csv-parser';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

interface Candidate {
    url: string;
    score: number;
}

interface ClusterMatch {
    cluster_id: string;
    cluster_name: string;
    framework: string;
    matched_keywords: string[];
    bonus: number;
}

interface ScoredCandidate {
    url: string;
    score: number;
    breakdown: {
        base_score: number;
        inclusion_bonus: number;
        cluster_matches: ClusterMatch[];
    };
}

interface KeywordCluster {
    id: string;
    name: string;
    framework: string;
    framework_url: string;
    rationale: string;
    weight: number;
    max_bonus: number;
    keywords: string[];
}

interface ClusterConfig {
    version: string;
    methodology: string;
    clusters: KeywordCluster[];
    tradeoffs: {
        false_positives: string[];
        false_negatives: string[];
        mitigations: string[];
    };
}

type ScoringFunction = (url: string) => number;

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

// generates a random base score between 1 and 100
function randomScore(): number {
    return Math.floor(Math.random() * 100) + 1;
}

// ═══════════════════════════════════════════════════════════════════════════════
// v1 — Random scoring (preserved for reference)
// ═══════════════════════════════════════════════════════════════════════════════

function heuristicV1(url: string): number {
    return randomScore();
}

// ═══════════════════════════════════════════════════════════════════════════════
// v2 — Random + flat keyword bonus (preserved for reference)
// ═══════════════════════════════════════════════════════════════════════════════

const EXCLUSION_KEYWORDS_V2 = [
    "benefits", "housing", "refugee", "migrant", "asylum",
    "eviction", "homeless", "disability", "accessibility", "low-income"
];

function exclusionScoreV2(url: string): number {
    const lower = url.toLowerCase();
    const matches = EXCLUSION_KEYWORDS_V2.filter(keyword => lower.includes(keyword));
    return matches.length * 5;
}

function heuristicV2(url: string): number {
    return randomScore() + exclusionScoreV2(url);
}

// ═══════════════════════════════════════════════════════════════════════════════
// v3 — Cited keyword clusters with weighted, capped, transparent scoring
//
// Changes from v2:
//   - Keywords organised into 4 cited clusters (see keyword-clusters.json):
//       1. Digital Inclusion / Exclusion     (Good Things Foundation + DCMS)
//       2. Socio-economic Vulnerability      (Joseph Rowntree Foundation)
//       3. Public Service Access / Gov       (LGA frameworks)
//       4. Marginalised Communities          (Equality Act 2010)
//   - Per-cluster weights reflect assessed relevance (not flat 5pts)
//   - Per-cluster caps prevent any single cluster from dominating
//   - Full match breakdown included in output for auditability
//   - Cluster definitions externalised to keyword-clusters.json
// ═══════════════════════════════════════════════════════════════════════════════

function loadClusters(): ClusterConfig {
    const raw = fs.readFileSync('keyword-clusters.json', 'utf8');
    return JSON.parse(raw) as ClusterConfig;
}

// scores a URL against all keyword clusters
// returns the total inclusion bonus and per-cluster match details
function scoreWithClusters(url: string, clusters: KeywordCluster[]): {
    inclusion_bonus: number;
    cluster_matches: ClusterMatch[];
} {
    const lower = url.toLowerCase();
    const cluster_matches: ClusterMatch[] = [];
    let inclusion_bonus = 0;

    for (const cluster of clusters) {
        const matched_keywords = cluster.keywords.filter(kw =>
            lower.includes(kw.toLowerCase())
        );

        if (matched_keywords.length > 0) {
            const raw_bonus = matched_keywords.length * cluster.weight;
            const capped_bonus = Math.min(raw_bonus, cluster.max_bonus);

            cluster_matches.push({
                cluster_id: cluster.id,
                cluster_name: cluster.name,
                framework: cluster.framework,
                matched_keywords,
                bonus: capped_bonus
            });

            inclusion_bonus += capped_bonus;
        }
    }

    return { inclusion_bonus, cluster_matches };
}

function heuristicV3(url: string, clusters: KeywordCluster[]): ScoredCandidate {
    const base_score = randomScore();
    const { inclusion_bonus, cluster_matches } = scoreWithClusters(url, clusters);

    return {
        url,
        score: base_score + inclusion_bonus,
        breakdown: {
            base_score,
            inclusion_bonus,
            cluster_matches
        }
    };
}

// ═══════════════════════════════════════════════════════════════════════════════
// PROCESSING
// ═══════════════════════════════════════════════════════════════════════════════

// v1/v2 processor (preserved for reference)
function processCandidates(scoringFunction: ScoringFunction): Promise<Candidate[]> {
    return new Promise((resolve, reject) => {
        const candidates: Candidate[] = [];

        fs.createReadStream('candidates.csv')
            .pipe(csv())
            .on('data', (data) => {
                const candidate: Candidate = {
                    url: data.project,
                    score: scoringFunction(data.project)
                };
                candidates.push(candidate);
            })
            .on('end', () => {
                resolve(candidates);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

// v3 processor — produces enriched output with match breakdowns
function processCandidatesV3(clusters: KeywordCluster[]): Promise<ScoredCandidate[]> {
    return new Promise((resolve, reject) => {
        const candidates: ScoredCandidate[] = [];

        fs.createReadStream('candidates.csv')
            .pipe(csv())
            .on('data', (data) => {
                candidates.push(heuristicV3(data.project, clusters));
            })
            .on('end', () => resolve(candidates))
            .on('error', (error) => reject(error));
    });
}

// sort candidates by score (highest first) and write results
function writeResults(candidates: ScoredCandidate[]): void {
    candidates.sort((a, b) => b.score - a.score);
    fs.writeFileSync('results.json', JSON.stringify(candidates, null, 2));
    console.log(`Scored ${candidates.length} candidates → results.json`);

    // Summary statistics
    const withBonus = candidates.filter(c => c.breakdown.inclusion_bonus > 0);
    console.log(`  ${withBonus.length} candidates matched at least one keyword cluster`);

    // Per-cluster hit counts
    const clusterHits: Record<string, number> = {};
    for (const c of candidates) {
        for (const m of c.breakdown.cluster_matches) {
            clusterHits[m.cluster_name] = (clusterHits[m.cluster_name] || 0) + 1;
        }
    }
    for (const [name, count] of Object.entries(clusterHits)) {
        console.log(`  └─ ${name}: ${count} matches`);
    }

    // Top 5 preview
    console.log(`\nTop 5:`);
    for (const c of candidates.slice(0, 5)) {
        const clusters = c.breakdown.cluster_matches.map(m => m.cluster_id).join(', ') || 'none';
        console.log(`  ${c.score}\t${c.url}\t[${clusters}]`);
    }
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════

async function main() {
    const config = loadClusters();
    console.log(`Using scoring ${config.version}: ${config.methodology.slice(0, 80)}...`);

    const candidates = await processCandidatesV3(config.clusters);
    writeResults(candidates);
}

main();
