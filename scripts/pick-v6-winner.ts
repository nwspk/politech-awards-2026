/**
 * pick-v6-winner.ts — Phase 3: pick jury with highest confidence, optionally promote
 *
 * Reads the four deliberation JSONs; picks the setup whose winner.confidence is highest.
 * With --promote, runs full deliberation (no shortlist filter, ≥2 greens only) for that setup
 * and then the algorithm → results.json.
 *
 * Usage:
 *   npx tsx scripts/pick-v6-winner.ts
 *   npx tsx scripts/pick-v6-winner.ts --promote
 *   npx tsx scripts/pick-v6-winner.ts --delib cache/deliberation-grok.json cache/deliberation-all-claude.json cache/deliberation-all-kimi.json cache/deliberation-mixed.json --promote
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const DEFAULT_DELIBS = [
  "cache/deliberation-grok.json",
  "cache/deliberation-all-claude.json",
  "cache/deliberation-all-kimi.json",
  "cache/deliberation-mixed.json",
];

const args = process.argv.slice(2);
const promote = args.includes("--promote");
let delibPaths: string[] = DEFAULT_DELIBS;
const delibIdx = args.indexOf("--delib");
if (delibIdx !== -1) {
  delibPaths = [];
  for (let i = delibIdx + 1; i < args.length && !args[i].startsWith("--"); i++) {
    delibPaths.push(args[i]);
  }
}

function setupNameFromPath(p: string): string {
  const base = path.basename(p, ".json");
  if (base === "deliberation-grok") return "grok";
  if (base === "deliberation-all-claude") return "all-claude";
  if (base === "deliberation-all-kimi") return "all-kimi";
  if (base === "deliberation-mixed") return "mixed";
  return base.replace("deliberation-", "");
}

function main() {
  const repoRoot = path.resolve(__dirname, "..");
  process.chdir(repoRoot);

  const scores: { setup: string; path: string; confidence: number }[] = [];

  for (const p of delibPaths) {
    const full = path.resolve(p);
    if (!fs.existsSync(full)) {
      console.error(`Missing: ${full}`);
      continue;
    }
    const data = JSON.parse(fs.readFileSync(full, "utf-8"));
    const confidence = data.winner?.confidence;
    const setup = setupNameFromPath(p);
    scores.push({
      setup,
      path: full,
      confidence: typeof confidence === "number" ? confidence : 0,
    });
  }

  if (scores.length === 0) {
    console.error("No deliberation files found.");
    process.exit(1);
  }

  scores.sort((a, b) => b.confidence - a.confidence);
  const winner = scores[0];
  console.log("Confidence by setup:");
  scores.forEach((s) => console.log(`  ${s.setup}: ${s.confidence}%`));
  console.log(`\nWinner: ${winner.setup} (${winner.confidence}%)`);

  if (!promote) return;

  const modelFlag =
    winner.setup === "grok"
      ? "--model x-ai/grok-4.1-fast"
      : winner.setup === "all-claude"
        ? "--model anthropic/claude-sonnet-4"
        : winner.setup === "all-kimi"
          ? "--model moonshotai/kimi-latest"
          : winner.setup === "mixed"
            ? "--models political=x-ai/grok-4.1-fast,relational=anthropic/claude-sonnet-4,experimental=moonshotai/kimi-latest"
            : "";

  if (!modelFlag) {
    console.error("Unknown setup for promote:", winner.setup);
    process.exit(1);
  }

  const assessmentsPath = path.resolve("cache", `assessments-${winner.setup}.json`);
  const deliberationPath = path.resolve("cache", `deliberation-${winner.setup}.json`);
  if (!fs.existsSync(assessmentsPath)) {
    console.error(`Assessments not found: ${assessmentsPath}. Run evals and merge (for mixed) first.`);
    process.exit(1);
  }

  console.log("\nPromoting: full deliberation (≥2 greens, no shortlist) then algorithm...");
  execSync(
    `npx tsx scripts/itn-a-deliberate.ts --setup ${winner.setup} --min-greens 2 ${modelFlag}`,
    { stdio: "inherit" }
  );
  execSync(
    `ASSESSMENTS_PATH=${assessmentsPath} DELIBERATION_PATH=${deliberationPath} RESULTS_PATH=results.json npx tsx the-algorithm.ts`,
    { stdio: "inherit" }
  );
  console.log("Done. results.json written.");
}

main();
