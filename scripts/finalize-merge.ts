/**
 * finalize-merge.ts
 *
 * Runs after a PR is merged to main (called by .github/workflows/on-merge.yml).
 *
 * What it does:
 * 1. Reads iterations.json and finds entries with pr_status "open"
 * 2. Re-snapshots results.json → results/{version}.json for each
 * 3. Updates pr_status to "merged"
 * 4. Writes back iterations.json
 *
 * This prevents stale per-version result files — the iteration bot writes
 * results/{version}.json at PR-open time (before the algorithm may have run
 * properly), and this script overwrites it with the final post-merge output.
 */

import {
  projectName,
  loadIterations,
  saveIterations,
  loadResults,
  snapshotVersionResults,
} from "./shared.js";

function main(): void {
  const iterations = loadIterations();
  const results = loadResults();

  // Find entries still marked "open" — these are the just-merged versions
  const openEntries = iterations.filter((i) => i.pr_status === "open");

  if (openEntries.length === 0) {
    console.log("No open iterations to finalize.");
    return;
  }

  for (const entry of openEntries) {
    // Re-snapshot results.json → results/{version}.json
    const path = snapshotVersionResults(entry.version, results);
    console.log(`✓ Re-snapshotted ${path} from results.json`);

    // Update top_project to reflect current results
    if (results.length > 0) {
      const top = results[0];
      entry.top_project = {
        name: projectName(top.url),
        url: top.url,
        score: top.score,
      };
    }

    // Mark as merged
    entry.pr_status = "merged";
    console.log(`✓ ${entry.version} pr_status → merged`);
  }

  saveIterations(iterations);
  console.log(`✓ iterations.json updated`);
}

main();
