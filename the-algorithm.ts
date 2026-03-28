import * as fs from 'fs';
import csv from 'csv-parser';
import Database from 'better-sqlite3';
import path from 'path';

interface Candidate {
    url: string;
    score: number;
}

type ScoringFunction = (url: string) => number;

// generates a random base score between 1 and 100
function randomScore(): number {
    return Math.floor(Math.random() * 100) + 1;
}

// --- v1 ---
// heuristic function v1: random-only scoring (1-100)
// preserved for reference
function heuristicV1(url: string): number {
    return randomScore();
}

// --- v2 ---
// heuristic function v2: random base score (1-100) + inclusion bonus
// keywords indicate projects addressing populations likely to be excluded from government services
const EXCLUSION_KEYWORDS_V2 = [
    "benefits",
    "housing",
    "refugee",
    "migrant",
    "asylum",
    "eviction",
    "homeless",
    "disability",
    "accessibility",
    "low-income"
];

// calculates an inclusion bonus based on keyword matches in the project URL
// returns 5 points per matching keyword (intentionally crude heuristic)
function exclusionScoreV2(url: string): number {
    const lower = url.toLowerCase();
    const matches = EXCLUSION_KEYWORDS_V2.filter(keyword =>
        lower.includes(keyword)
    );
    return matches.length * 5;
}

function heuristicV2(url: string): number {
    const baseScore = randomScore();
    const inclusionBonus = exclusionScoreV2(url);
    return baseScore + inclusionBonus;
}

// --- v3a (from main): deterministic keyword-cluster scoring ---
// URL-only matching across four policy-framework-aligned clusters.
interface KeywordCluster {
    name: string;
    framework: string;
    frameworkUrl: string;
    keywords: string[];
    pointsPerMatch: number;
    maxPoints: number;
}

const KEYWORD_CLUSTERS_V3: KeywordCluster[] = [
    {
        name: "Digital Inclusion",
        framework: "DCMS Digital Inclusion Strategy 2014; Good Things Foundation",
        frameworkUrl: "https://www.gov.uk/government/publications/government-digital-inclusion-strategy",
        keywords: [
            "digital inclusion",
            "digital skills",
            "connectivity",
            "broadband access",
            "device access",
            "accessibility",
            "assistive technology"
        ],
        pointsPerMatch: 10,
        maxPoints: 25
    },
    {
        name: "Socio-economic Vulnerability",
        framework: "Joseph Rowntree Foundation poverty framing",
        frameworkUrl: "https://www.jrf.org.uk/",
        keywords: [
            "low income",
            "poverty",
            "deprivation",
            "food insecurity",
            "social housing",
            "benefits",
            "universal credit"
        ],
        pointsPerMatch: 10,
        maxPoints: 25
    },
    {
        name: "Public Service Access",
        framework: "GOV.UK Service Standard",
        frameworkUrl: "https://www.gov.uk/service-manual/service-standard",
        keywords: [
            "local authority",
            "council services",
            "public health",
            "nhs",
            "welfare",
            "casework",
            "legal aid"
        ],
        pointsPerMatch: 10,
        maxPoints: 25
    },
    {
        name: "Marginalised Communities",
        framework: "Equality Act 2010 protected characteristics",
        frameworkUrl: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
        keywords: [
            "refugees",
            "migrants",
            "asylum",
            "disabled",
            "care leavers",
            "domestic violence",
            "homelessness"
        ],
        pointsPerMatch: 10,
        maxPoints: 25
    }
];

const BASELINE_SCORE_V3 = 1;

function clusterScore(url: string, cluster: KeywordCluster): number {
    const lower = url.toLowerCase();
    let points = 0;
    for (const keyword of cluster.keywords) {
        const normalised = keyword.toLowerCase();
        const hyphenated = normalised.replace(/ /g, "-");
        const compounded = normalised.replace(/ /g, "");
        if (
            lower.includes(normalised) ||
            lower.includes(hyphenated) ||
            lower.includes(compounded)
        ) {
            points += cluster.pointsPerMatch;
        }
    }
    return Math.min(points, cluster.maxPoints);
}

function heuristicV3(url: string): number {
    let score = BASELINE_SCORE_V3;
    for (const cluster of KEYWORD_CLUSTERS_V3) {
        score += clusterScore(url, cluster);
    }
    return score;
}

// --- v3b: fetch information heuristic ---
// Uses cache to check if project is live and rewards AI-related keywords in body.
function readCacheSignals(): {
    isFailed(url: string): boolean;
    bodyFor(url: string): string;
    close(): void;
} {
    const db = new Database(path.resolve('cache', 'sites.sqlite'), { readonly: true });

    const failedRows = db
        .prepare('SELECT url FROM pages WHERE error IS NOT NULL')
        .all() as Array<{ url: string }>;

    const failedSet = new Set(failedRows.map(row => row.url));

    const bodyStmt = db.prepare('SELECT body FROM pages WHERE url = ?')

    return {
        isFailed(url: string): boolean {
            return failedSet.has(url);
        },
        bodyFor(url: string): string {
            const row = bodyStmt.get(url) as { body?: string | null };
            return row?.body ?? '';
        },
        close(): void {
            db.close();
        }
    };
}

function calculateFailedPenalty(url: string): number {
    const fetchCache = readCacheSignals();
    return fetchCache.isFailed(url) ? 10 : 0;
}


function calculateAIBonus(url: string): number {
    const fetchCache = readCacheSignals();
    const fetchBody = fetchCache.bodyFor(url);

    const AI_KEYWORDS = [
        'Artificial Intelligence',
        'existential',
        'systemic',
        'impact',
        'tractability',
        'neglectedness',
        'AI alignment',
        'AI governance',
        'AI policy',
        'AI regulation',
        'AI ethics',
        'AI safety',
        'AI risk',
        'alignment',
    ].map(keyword => keyword.toLowerCase());

    return Math.min(3, AI_KEYWORDS
        .filter(
            keyword => fetchBody.toLowerCase().includes(keyword.toLowerCase())
        ).length) * 5;  // same rules as exclusionScoreV2
}

function fetchInformationHeuristic(url: string): number {
    const baseScore = 50;  // non-random base score

    // continues to reward projects that address excluded populations
    const inclusivityBonus = exclusionScoreV2(url);

    // penalizes projects that have failed to fetch (indicates project is not live and accessible)
    const failedPenalty = calculateFailedPenalty(url);

    // awards projects that contain AI-related keywords in the body
    const AIBonus = calculateAIBonus(url);

    return baseScore + inclusivityBonus - failedPenalty + AIBonus;
}

// --- v5: ITN/A Multi-Agent Deliberation ---
// Reads from cache/deliberation.json (for the deliberated shortlist) and
// cache/assessments.json (for the full evaluated set), produced by:
//   npx tsx scripts/itn/itn-a-eval.ts        → cache/assessments.json
//   npx tsx scripts/itn/itn-a-deliberate.ts  → cache/deliberation.json
//
// Scoring tiers:
//   Deliberated projects:       aggregate_effective from final_scores (ITN/A + awards
//                               bonuses, 0–100) — matches deliberation ranking & winner.
//                               Falls back to aggregate if effective is absent.
//   2+ greens, not deliberated: 45  (strong signal, below deliberation floor)
//   1 green:                    20
//   0 greens / grey / red:       5  (baseline)
//
// URL matching is normalised (strips www., trailing slashes, lowercases)
// so candidates.csv URLs reliably match cache keys regardless of formatting.

interface AssessmentBuckets {
    political?: string;
    relational?: string;
    experimental?: string;
}

function normalizeUrl(raw: string): string {
    try {
        const u = new URL(raw.startsWith('http') ? raw : 'https://' + raw);
        return (u.hostname.replace(/^www\./, '') + u.pathname)
            .toLowerCase()
            .replace(/\/$/, '');
    } catch {
        return raw.toLowerCase().replace(/\/$/, '');
    }
}

function loadItnAScores(): {
    deliberation: Map<string, number>;
    assessments: Map<string, AssessmentBuckets>;
} {
    const deliberation = new Map<string, number>();
    const assessments = new Map<string, AssessmentBuckets>();

    const deliberationPath = process.env.DELIBERATION_PATH || path.resolve('cache', 'deliberation-grok.json');
    if (fs.existsSync(deliberationPath)) {
        const data = JSON.parse(fs.readFileSync(deliberationPath, 'utf-8'));
        for (const entry of data.final_scores ?? []) {
            const eff = entry.aggregate_effective;
            const raw = entry.aggregate;
            const score =
                typeof eff === 'number' && !Number.isNaN(eff) ? eff
                    : typeof raw === 'number' && !Number.isNaN(raw) ? raw
                        : 0;
            deliberation.set(normalizeUrl(entry.url), score);
        }
        console.log(`[v5] Loaded ${deliberation.size} deliberated scores from ${deliberationPath}`);
    } else {
        console.warn('[v5] No deliberation.json found — falling back to assessment tiers only');
    }

    const assessmentsPath = process.env.ASSESSMENTS_PATH || path.resolve('cache', 'assessments-grok.json');
    if (fs.existsSync(assessmentsPath)) {
        const data = JSON.parse(fs.readFileSync(assessmentsPath, 'utf-8'));
        for (const [url, a] of Object.entries(data) as [string, any][]) {
            assessments.set(normalizeUrl(url), {
                political: a.political?.bucket,
                relational: a.relational?.bucket,
                experimental: a.experimental?.bucket,
            });
        }
        console.log(`[v5] Loaded ${assessments.size} project assessments from ${assessmentsPath}`);
    } else {
        console.warn('[v5] No assessments.json found — unassessed projects will score 5');
    }

    return { deliberation, assessments };
}

// Load once per process, not per URL call
let _itnACache: ReturnType<typeof loadItnAScores> | null = null;
function getItnAScores() {
    if (!_itnACache) _itnACache = loadItnAScores();
    return _itnACache;
}

function countGreens(buckets: AssessmentBuckets): number {
    return ([buckets.political, buckets.relational, buckets.experimental] as (string | undefined)[])
        .filter(b => b === 'green').length;
}

function heuristicV5(url: string): number {
    const { deliberation, assessments } = getItnAScores();
    const key = normalizeUrl(url);

    // Tier 1: deliberated — effective score (ITN/A + bonuses) from final_scores
    if (deliberation.has(key)) {
        return deliberation.get(key)!;
    }

    // Tier 2: assessed but not deliberated — bucket-based tier
    const buckets = assessments.get(key);
    if (!buckets) return 5; // never assessed

    const greens = countGreens(buckets);
    if (greens >= 2) return 45; // strong signal, just below deliberation floor
    if (greens === 1) return 20;
    return 5; // grey / red / zero greens
}

// select which heuristic version to use
// v5 is the ITN/A multi-agent deliberation heuristic
const CURRENT_HEURISTIC: ScoringFunction = heuristicV5;

// process candidates from CSV and score them
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

// sort candidates by score (highest first) and write results
function writeResults(candidates: Candidate[]): void {
    candidates.sort((a, b) => b.score - a.score);
    const outPath = process.env.RESULTS_PATH || 'results.json';
    fs.writeFileSync(outPath, JSON.stringify(candidates, null, 2));
    console.log(`Results written to ${outPath}`);
}

// main execution
async function main() {
    const candidates = await processCandidates(CURRENT_HEURISTIC);
    writeResults(candidates);
}

main();