/**
 * finalize-merge.ts
 *
 * Runs after a PR is merged to main (called by .github/workflows/on-merge.yml).
 *
 * iterations/*.md are the single source of truth. This script:
 * 1. Runs build-iterations to load current state from .md into iterations.json
 * 2. Finds entries with pr_status "open" (the just-merged iteration)
 * 3. Updates the .md file(s): pr_status → "merged", top_project from results
 * 4. Re-snapshots results/{version}.json
 * 5. Runs build-iterations to regenerate iterations.json from updated .md
 */

import { execSync } from "child_process";
import {
  projectName,
  loadIterations,
  loadResults,
  snapshotVersionResults,
} from "./shared.js";
import { updateIterationMdFrontmatter } from "./iterations-md.js";

function main(): void {
  const mergedPrNumber = parseInt(process.env.MERGED_PR_NUMBER || "", 10);
  if (!Number.isFinite(mergedPrNumber)) {
    console.error("MERGED_PR_NUMBER is required.");
    process.exit(1);
  }

  // Ensure iterations.json is current (built from .md)
  execSync("npx tsx scripts/build-iterations.ts", { stdio: "inherit" });

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
    // Re-snapshot results.json → results/{version}.json
    snapshotVersionResults(entry.version, results);
    console.log(`✓ Re-snapshotted results/${entry.version}.json`);

    // Update .md: pr_status → merged, top_project from current results
    const updates: { pr_status: string; top_project?: { name: string; url: string; score: number | null } } = {
      pr_status: "merged",
    };
    if (results.length > 0) {
      const top = results[0];
      updates.top_project = {
        name: projectName(top.url),
        url: top.url,
        score: top.score,
      };
    }
    updateIterationMdFrontmatter(entry.version, updates);
    console.log(`✓ iterations/${entry.version}.md updated (pr_status → merged)`);
  }

  // Regenerate iterations.json from updated .md
  execSync("npx tsx scripts/build-iterations.ts", { stdio: "inherit" });
}

main();
