/**
 * shared.ts
 *
 * Common types and utilities used by iteration-bot, finalize-merge,
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
 * Write (or overwrite) results/{version}.json with the given results.
 * Creates the results/ directory if it doesn't exist.
 */
export function snapshotVersionResults(
  version: string,
  results: ResultEntry[]
): string {
  if (!fs.existsSync("results")) {
    fs.mkdirSync("results", { recursive: true });
  }
  const resultsPath = `results/${version}.json`;
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2) + "\n");
  return resultsPath;
}
