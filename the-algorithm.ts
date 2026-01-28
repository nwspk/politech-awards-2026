import * as fs from 'fs';
import csv from 'csv-parser';

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

// select which heuristic version to use
// change this to switch between versions
const CURRENT_HEURISTIC: ScoringFunction = heuristicV2;

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
