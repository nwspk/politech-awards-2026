/**
 * build-iterations.ts
 *
 * Builds iterations.json from README.md in each iteration folder (iterations/v1/, iterations/v2/, ...).
 * The README.md in each iteration folder is the single source of truth per iteration.
 *
 * Usage: npx tsx scripts/build-iterations.ts
 *        npm run build:iterations
 *
 * Run after editing any iteration README to regenerate iterations.json.
 * The iteration details updater and finalize-merge also run this after updating README files.
 */

import {
  listIterationMdFiles,
  readIterationMd,
  mdToIteration,
} from "./iterations-md.js";
import type { Iteration, TopProject } from "./shared.js";
import { saveIterations } from "./shared.js";

function buildIterations(): void {
  const files = listIterationMdFiles();
  if (files.length === 0) {
    console.log("No iteration folders found in iterations/");
    return;
  }

  const iterations: Iteration[] = [];
  for (const file of files) {
    const version = file.replace(/\.md$/, "");
    const content = readIterationMd(version);
    const partial = mdToIteration(content, version);

    // mdToIteration returns Partial<Iteration>; we need full Iteration with defaults
    const topProject: TopProject = partial.top_project ?? {
      name: "",
      url: "",
      score: null,
    };
    const iter: Iteration = {
      version: partial.version ?? version,
      title: partial.title ?? null,
      date: partial.date ?? null,
      author: partial.author ?? null,
      pr_number: partial.pr_number ?? null,
      pr_url: partial.pr_url ?? null,
      pr_status: partial.pr_status ?? null,
      top_project: topProject,
      heuristic: partial.heuristic ?? "",
      rationale: partial.rationale ?? null,
      data_sources: partial.data_sources ?? null,
      keywords: partial.keywords ?? null,
      limitations: partial.limitations ?? null,
      assessment: partial.assessment ?? null,
      vote_result: null,
    };
    iterations.push(iter);
  }

  saveIterations(iterations);
  console.log(
    `✓ iterations.json built from ${iterations.length} iteration README(s) in iterations/`
  );
}

buildIterations();
