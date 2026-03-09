/**
 * One-off: snapshot cache/ into iterations/{version}/ for existing versions (v5, v6).
 * Run from repo root: npx tsx scripts/snapshot-existing-cache.ts
 */

import { snapshotVersionCache } from "./shared.js";

const VERSIONS = ["v5", "v6"];

function main(): void {
  console.log("Snapshot cache → iterations/{version}/ for existing versions\n");
  for (const version of VERSIONS) {
    const copied = snapshotVersionCache(version);
    if (copied.length > 0) {
      console.log(`✓ ${version}: ${copied.join(", ")}`);
    } else {
      console.log(`  ${version}: no cache files found (none of the listed files exist in cache/)`);
    }
  }
}

main();
