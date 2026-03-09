/**
 * pick-v6-winner.ts
 *
 * Reads the six deliberation files, compares winner.confidence, and prints
 * which jury won. Optionally runs the algorithm for that setup to produce results.json.
 *
 * Usage:
 *   npx tsx scripts/pick-v6-winner.ts
 *   npx tsx scripts/pick-v6-winner.ts --promote   # also runs the-algorithm.ts for the winner
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const args = process.argv.slice(2);
const PROMOTE = args.includes("--promote");

interface JuryConfig {
    name: string;
    deliberationFile: string;
    assessmentsFile: string;
    resultsFile: string;
    model: string;
    shortlistFilter: "own-greens" | "combined";
}

const JURIES: JuryConfig[] = [
    {
        name: "grok",
        deliberationFile: "cache/deliberation-grok.json",
        assessmentsFile: "cache/assessments-grok.json",
        resultsFile: "results-grok.json",
        model: "x-ai/grok-4.1-fast",
        shortlistFilter: "own-greens",
    },
    {
        name: "claude",
        deliberationFile: "cache/deliberation-all-claude.json",
        assessmentsFile: "cache/assessments-all-claude.json",
        resultsFile: "results-all-claude.json",
        model: "anthropic/claude-sonnet-4-6",
        shortlistFilter: "own-greens",
    },
    {
        name: "kimi",
        deliberationFile: "cache/deliberation-all-kimi.json",
        assessmentsFile: "cache/assessments-all-kimi.json",
        resultsFile: "results-all-kimi.json",
        model: "moonshotai/kimi-k2",
        shortlistFilter: "own-greens",
    },
    {
        name: "mixed",
        deliberationFile: "cache/deliberation-mixed.json",
        assessmentsFile: "cache/assessments-merged.json",
        resultsFile: "results-mixed.json",
        model: "openai/gpt-4o",
        shortlistFilter: "combined",
    },
    {
        name: "adversarial",
        deliberationFile: "cache/deliberation-adversarial.json",
        assessmentsFile: "cache/assessments-merged.json",
        resultsFile: "results-adversarial.json",
        model: "deepseek/deepseek-r1",
        shortlistFilter: "combined",
    },
    {
        name: "specialist",
        deliberationFile: "cache/deliberation-specialist.json",
        assessmentsFile: "cache/assessments-merged.json",
        resultsFile: "results-specialist.json",
        model: "google/gemini-2.5-pro + meta-llama/llama-3.3-70b + mistralai/mistral-large",
        shortlistFilter: "combined",
    },
];

interface WinnerDecision {
    url: string;
    display: string;
    score: number;
    confidence?: number;
    case_for: string;
    case_against: string;
}

interface DeliberationState {
    model: string;
    winner: WinnerDecision | null;
    status: string;
}

function loadDelib(filePath: string): DeliberationState | null {
    const resolved = path.resolve(filePath);
    if (!fs.existsSync(resolved)) return null;
    try {
        return JSON.parse(fs.readFileSync(resolved, "utf-8"));
    } catch {
        return null;
    }
}

function main() {
    console.log("\n═══════════════════════════════════════════");
    console.log("pick-v6-winner — comparing six jury verdicts");
    console.log("═══════════════════════════════════════════\n");

    const results: Array<{
        jury: JuryConfig;
        winner: WinnerDecision | null;
        confidence: number;
        status: string;
    }> = [];

    for (const jury of JURIES) {
        const delib = loadDelib(jury.deliberationFile);
        if (!delib) {
            console.log(`  [${jury.name}] — file not found: ${jury.deliberationFile}`);
            results.push({ jury, winner: null, confidence: -1, status: "missing" });
            continue;
        }

        const winner = delib.winner;
        const confidence = winner?.confidence ?? -1;
        const status = delib.status ?? "unknown";

        if (!winner) {
            console.log(`  [${jury.name}] — no winner yet (status: ${status})`);
        } else {
            console.log(`  [${jury.name}] winner: ${winner.display} | confidence: ${confidence}/100 | status: ${status}`);
            console.log(`    for: ${winner.case_for?.slice(0, 120)}...`);
        }

        results.push({ jury, winner, confidence, status });
    }

    // Find highest-confidence complete jury
    const complete = results.filter((r) => r.winner && r.confidence >= 0);
    if (complete.length === 0) {
        console.log("\nNo complete deliberations found. Run all six juries first.");
        return;
    }

    complete.sort((a, b) => b.confidence - a.confidence);
    const best = complete[0];

    console.log(`\n${"═".repeat(43)}`);
    console.log(`WINNER JURY: ${best.jury.name.toUpperCase()} (confidence: ${best.confidence}/100)`);
    console.log(`  Winner project: ${best.winner!.display}`);
    console.log(`  Model: ${best.jury.model}`);
    console.log(`  Assessments: ${best.jury.assessmentsFile}`);
    console.log(`${"═".repeat(43)}`);

    // Show full confidence ranking
    console.log("\nAll juries by confidence:");
    for (const r of complete) {
        const marker = r === best ? "★" : " ";
        console.log(`  ${marker} ${r.jury.name.padEnd(12)} ${String(r.confidence).padStart(3)}/100  winner: ${r.winner!.display}`);
    }

    if (!PROMOTE) {
        console.log("\nRun with --promote to run the full algorithm for the winning setup → results.json");
        return;
    }

    console.log(`\nPromoting ${best.jury.name} setup → running the-algorithm.ts...`);
    const env = {
        ...process.env,
        ASSESSMENTS_PATH: path.resolve(best.jury.assessmentsFile),
        DELIBERATION_PATH: path.resolve(best.jury.deliberationFile),
        RESULTS_PATH: path.resolve("results.json"),
    };

    try {
        execSync("npx tsx the-algorithm.ts", { env, stdio: "inherit" });
        console.log(`\nDone. results.json written for ${best.jury.name} jury.`);
    } catch (err) {
        console.error("Error running the-algorithm.ts:", err);
        process.exitCode = 1;
    }
}

main();
