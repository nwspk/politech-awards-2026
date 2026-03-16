/**
 * shared.ts
 *
 * Common types and utilities used by iteration-details-updater, finalize-merge,
 * and sync-readme.
 */

import * as fs from "fs";

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
  [key: string]: unknown;
}

export interface ResultEntry {
  url: string;
  score: number;
}

export function projectName(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

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
