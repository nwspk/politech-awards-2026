/**
 * finalize-merge.ts
 *
 * Runs after a PR is merged to main.
 */

import { execSync } from "child_process";
import {
  projectName,
  loadIterations,
  loadResults,
  snapshotVersionResults,
  snapshotVersionCache,
} from "./shared.js";
import { updateIterationMdFrontmatter } from "./iterations-md.js";

function main(): void {
  const mergedPrNumber = parseInt(process.env.MERGED_PR_NUMBER || "", 10);
  if (!Number.isFinite(mergedPrNumber)) {
    console.error("MERGED_PR_NUMBER is required.");
    process.exit(1);
  }

  execSync("npx tsx scripts/bots/build-iterations.ts", { stdio: "inherit" });

  const iterations = loadIterations();
  const results = loadResults();
  const openEntries = iterations.filter(
    (i) => i.pr_status === "open" && i.pr_number === mergedPrNumber
  );

  if (openEntries.length === 0) {
    console.log(`No open iteration found for PR #${mergedPrNumber}.`);
    return;
  }

  for (const entry of openEntries) {
    snapshotVersionResults(entry.version, results);
    const copied = snapshotVersionCache(entry.version);
    if (copied.length > 0) {
      console.log(`✓ Snapshot cache → iterations/${entry.version}/: ${copied.join(", ")}`);
    }

    const updates: {
      pr_status: string;
      top_project?: { name: string; url: string; score: number | null };
    } = { pr_status: "merged" };
    if (results.length > 0) {
      const top = results[0];
      updates.top_project = {
        name: projectName(top.url),
        url: top.url,
        score: top.score,
      };
    }
    updateIterationMdFrontmatter(entry.version, updates);
  }

  execSync("npx tsx scripts/bots/build-iterations.ts", { stdio: "inherit" });
}

main();
