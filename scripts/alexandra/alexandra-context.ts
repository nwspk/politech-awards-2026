/**
 * Shared dossier + cached page text loading for Alexandra scripts (eval, justify, etc.).
 */

import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ROOT = path.resolve(__dirname, "..", "..");
export const CACHE_DB_PATH = path.join(ROOT, "cache", "sites.sqlite");
export const ENRICHED_DIR = path.join(ROOT, "data", "enriched");
export const BODY_CHAR_LIMIT = 3500;
export const ENRICHED_CHAR_LIMIT = 14000;

export function normalizeUrlKey(raw: string): string {
  try {
    const u = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    return (u.hostname.replace(/^www\./, "") + u.pathname).toLowerCase().replace(/\/$/, "");
  } catch {
    return raw.toLowerCase().replace(/\/$/, "");
  }
}

export function extractReadableText(html: string): string {
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
  const mainMatch =
    text.match(/<main[\s\S]*?<\/main>/i) ||
    text.match(/<article[\s\S]*?<\/article>/i);
  const working = mainMatch ? mainMatch[0] : text;
  const stripped = working
    .replace(/<[^>]+>/g, " ")
    .replace(/\s{3,}/g, "  ")
    .trim();
  return stripped.slice(0, BODY_CHAR_LIMIT);
}

export function openCache(): Database.Database {
  if (!fs.existsSync(CACHE_DB_PATH)) {
    console.error(`Cache not found at ${CACHE_DB_PATH}. Run: npm run cache:sites`);
    process.exit(1);
  }
  return new Database(CACHE_DB_PATH, { readonly: true });
}

export function getCachedPageText(
  db: Database.Database,
  url: string
): { text: string; hadCache: boolean } {
  const row = db.prepare("SELECT body, error FROM pages WHERE url = ?").get(url) as
    | { body: string | null; error: string | null }
    | undefined;
  if (!row) return { text: "", hadCache: false };
  if (row.error || !row.body) return { text: "", hadCache: true };
  return { text: extractReadableText(row.body), hadCache: true };
}

export function loadEnrichedSnippets(): Map<string, string> {
  const map = new Map<string, string>();
  if (!fs.existsSync(ENRICHED_DIR)) return map;
  const files = fs.readdirSync(ENRICHED_DIR).filter((f) => f.endsWith(".json") && f !== "verification-report.json");
  for (const f of files) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(ENRICHED_DIR, f), "utf-8")) as { url?: string };
      if (!j.url) continue;
      const key = normalizeUrlKey(j.url);
      const blob = JSON.stringify(j, null, 2);
      map.set(key, blob.length > ENRICHED_CHAR_LIMIT ? blob.slice(0, ENRICHED_CHAR_LIMIT) + "\n…[truncated]" : blob);
    } catch {
      /* skip */
    }
  }
  return map;
}

export function enrichedForUrl(map: Map<string, string>, url: string): string {
  const key = normalizeUrlKey(url);
  if (map.has(key)) return map.get(key)!;
  try {
    const u = new URL(url.startsWith("http") ? url : `https://${url}`);
    const alt = normalizeUrlKey(u.origin + u.pathname.replace(/\/$/, ""));
    if (map.has(alt)) return map.get(alt)!;
  } catch {
    /* */
  }
  return "(No enriched dossier matched this URL.)";
}
