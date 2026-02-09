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


// --- v3 ---
// fetch information added
// we can now check if the project is live and accessible
// we can now reward projects that describe their project well.

// heuristic function as non-random version of heuristicV2; 
// with a penalty for failing to fetch, and a bonus for containing 
// body terms. This example uses AI-related keywords.

function readCacheSignals(): {
    isFailed(url: string): boolean;
    bodyFor(url: string): string;
    close(): void;
} {
    const db = new Database(path.resolve('cache', 'sites.sqlite'), {readonly: true});

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
            const row = bodyStmt.get(url) as {body?: string | null};
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

// select which heuristic version to use
// change this to switch between versions
const CURRENT_HEURISTIC: ScoringFunction = fetchInformationHeuristic;

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
    fs.writeFileSync('results.json', JSON.stringify(candidates, null, 2));
    console.log(`Results written to results.json`);
}

// main execution
async function main() {
    const candidates = await processCandidates(CURRENT_HEURISTIC);
    writeResults(candidates);
}

main();
