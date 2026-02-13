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

// --- v3 ---
// heuristic function v3: deterministic keyword-cluster scoring
// removes all randomness; scores based solely on URL keyword matches
// across four policy-framework-aligned clusters.
//
// design tradeoffs (documented for inspectability):
//   - URL-only matching is intentionally limited. most projects will score 1
//     (baseline) because their URLs don't contain policy keywords.
//   - this is an honest reflection of what a URL string can tell us.
//     richer data sources (page content, metadata) are needed for future
//     iterations — this iteration exists to make that case legible.
//   - false negatives are high: a project may address homelessness without
//     the word appearing in its URL. false positives are low: if a keyword
//     appears in the URL, the project almost certainly relates to that topic.

interface KeywordCluster {
    name: string;
    framework: string;
    frameworkUrl: string;
    keywords: string[];
    pointsPerMatch: number;
    maxPoints: number;
}

const KEYWORD_CLUSTERS_V3: KeywordCluster[] = [
    // Cluster 1: Digital Inclusion / Exclusion
    // Framework: DCMS Government Digital Inclusion Strategy (2014)
    // + Good Things Foundation digital inclusion taxonomy
    // Ref: https://www.gov.uk/government/publications/government-digital-inclusion-strategy
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
    // Cluster 2: Socio-economic Vulnerability
    // Framework: Joseph Rowntree Foundation (JRF) poverty framing
    // Ref: https://www.jrf.org.uk/
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
    // Cluster 3: Public Service Access / Government Access
    // Framework: GOV.UK Service Standard
    // Ref: https://www.gov.uk/service-manual/service-standard
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
    // Cluster 4: Marginalised Communities
    // Framework: Equality Act 2010 protected characteristics
    // + equality impact assessment standard categories
    // Ref: https://www.legislation.gov.uk/ukpga/2010/15/contents
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

// every project gets a baseline of 1 point to distinguish
// "evaluated but no keyword signal" (1) from "not evaluated" (0)
const BASELINE_SCORE_V3 = 1;

// matches cluster keywords against the URL string.
// checks three forms to handle common URL conventions:
//   "digital skills"  →  "digital skills" | "digital-skills" | "digitalskills"
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

// select which heuristic version to use
// change this to switch between versions
const CURRENT_HEURISTIC: ScoringFunction = heuristicV3;

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
