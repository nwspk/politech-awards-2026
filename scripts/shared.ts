/**
 * shared.ts
 *
 * Common types and utilities used by iteration-details-updater, finalize-merge,
 * and sync-readme.
 */

import * as fs from "fs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TopProject {
  name: string;
  url: string;
  score: number | null;
}

export interface Iteration {
  version: string;
  title: string | null;
  date: string | null;
  author: string | null;
  pr_number: number | null;
  pr_url: string | null;
  pr_status: string | null;
  top_project: TopProject;
  heuristic: string;
  rationale: string | null;
  data_sources: string[] | null;
  keywords: string[] | null;
  limitations: string | null;
  assessment: string | null;
  vote_result: string | null;
  [key: string]: unknown; // preserve extra fields like assessment_output
}

export interface ResultEntry {
  url: string;
  score: number;
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

/** Extract a display name from a URL (hostname without "www."). */
export function projectName(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

// ---------------------------------------------------------------------------
// Data I/O
// ---------------------------------------------------------------------------

export function loadIterations(): Iteration[] {
  return JSON.parse(fs.readFileSync("iterations.json", "utf-8"));
}

export function saveIterations(iterations: Iteration[]): void {
  fs.writeFileSync(
    "iterations.json",
    JSON.stringify(iterations, null, 2) + "\n"
  );
}

export function loadResults(): ResultEntry[] {
  return JSON.parse(fs.readFileSync("results.json", "utf-8"));
}

/**
 * Write (or overwrite) iterations/{version}/results.json with the given results.
 * Creates iterations/{version}/ if it doesn't exist.
 */
export function snapshotVersionResults(
  version: string,
  results: ResultEntry[]
): string {
  const dir = `iterations/${version}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const resultsPath = `${dir}/results.json`;
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2) + "\n");
  return resultsPath;
}

/**
 * Cache files to snapshot from cache/ into iterations/{version}/ on merge.
 * Only files that exist in cache/ are copied; missing files are skipped.
 */
const CACHE_SNAPSHOT_FILES: Record<string, string[]> = {
  v5: ["assessments.json", "deliberation.json"],
  v6: [
    "assessments-grok.json",
    "assessments-all-claude.json",
    "assessments-all-kimi.json",
    "assessments-merged.json",
    "deliberation-grok.json",
    "deliberation-all-claude.json",
    "deliberation-all-kimi.json",
    "deliberation-mixed.json",
    "deliberation-adversarial.json",
    "deliberation-specialist.json",
    "pilot-shortlist.json",
  ],
};

/**
 * Copy version-specific cache files from cache/ to iterations/{version}/.
 * Skips files that don't exist. Call after merge so iteration data is preserved.
 */
export function snapshotVersionCache(version: string): string[] {
  const files = CACHE_SNAPSHOT_FILES[version];
  if (!files || files.length === 0) return [];

  const dir = `iterations/${version}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const copied: string[] = [];
  for (const name of files) {
    const src = `cache/${name}`;
    if (!fs.existsSync(src)) continue;
    const dest = `${dir}/${name}`;
    fs.copyFileSync(src, dest);
    copied.push(name);
  }
  return copied;
}
