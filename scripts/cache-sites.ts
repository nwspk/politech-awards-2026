import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import Database from 'better-sqlite3';

type CacheRow = {
  url: string;
  fetched_at: string | null;
  status: number | null;
  final_url: string | null;
  body: string | null;
  error: string | null;
};

type FetchResult = {
  status: number | null;
  finalUrl: string | null;
  body: string | null;
  error: string | null;
};

const DEFAULT_TIMEOUT_MS = 15000;

function ensureCacheDir(dbPath: string): void {
  const dir = path.dirname(dbPath);
  fs.mkdirSync(dir, { recursive: true });
}

async function readCandidateUrls(csvPath: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const urls: string[] = [];
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => {
        const url = String(data.project || '').trim();
        if (url) {
          urls.push(url);
        }
      })
      .on('end', () => resolve(urls))
      .on('error', reject);
  });
}

async function fetchWithTimeout(url: string, timeoutMs: number): Promise<FetchResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'user-agent': 'politech-awards-cache/1.0'
      }
    });
    const body = await response.text();
    return {
      status: response.status,
      finalUrl: response.url,
      body,
      error: null
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const maybeStatus = (error as { status?: number }).status;
    return {
      status: typeof maybeStatus === 'number' ? maybeStatus : null,
      finalUrl: null,
      body: null,
      error: message
    };
  } finally {
    clearTimeout(timeout);
  }
}

function renderProgress(
  current: number,
  total: number,
  stats: { cached: number; fetched: number; failed: number }
): void {
  if (!process.stdout.isTTY) {
    return;
  }
  const width = 24;
  const ratio = total === 0 ? 1 : current / total;
  const filled = Math.round(width * ratio);
  const bar = `${'='.repeat(filled)}${'.'.repeat(width - filled)}`;
  const percent = Math.floor(ratio * 100);
  process.stdout.write(
    `\r[${bar}] ${percent}% ${current}/${total} C:${stats.cached} F:${stats.fetched} X:${stats.failed}`
  );
  if (current >= total) {
    process.stdout.write('\n');
  }
}

async function main() {
  const retryFailed = process.argv.includes('--retry-failed');
  const csvPath = path.resolve('candidates.csv');
  const dbPath = path.resolve('cache', 'sites.sqlite');

  ensureCacheDir(dbPath);
  const db = new Database(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS pages (
      url TEXT PRIMARY KEY,
      fetched_at TEXT,
      status INTEGER,
      final_url TEXT,
      body TEXT,
      error TEXT
    );
  `);

  const selectStmt = db.prepare('SELECT * FROM pages WHERE url = ?');
  const upsertStmt = db.prepare(`
    INSERT INTO pages (url, fetched_at, status, final_url, body, error)
    VALUES (@url, @fetched_at, @status, @final_url, @body, @error)
    ON CONFLICT(url) DO UPDATE SET
      fetched_at = excluded.fetched_at,
      status = excluded.status,
      final_url = excluded.final_url,
      body = excluded.body,
      error = excluded.error
  `);

  const urls = await readCandidateUrls(csvPath);
  const uniqueUrls = Array.from(new Set(urls));

  let cached = 0;
  let fetched = 0;
  let failed = 0;
  let processed = 0;

  renderProgress(processed, uniqueUrls.length, { cached, fetched, failed });

  for (const url of uniqueUrls) {
    const existing = selectStmt.get(url) as CacheRow | undefined;
    if (existing && (!retryFailed || !existing.error)) {
      cached += 1;
      processed += 1;
      renderProgress(processed, uniqueUrls.length, { cached, fetched, failed });
      continue;
    }

    const result = await fetchWithTimeout(url, DEFAULT_TIMEOUT_MS);
    const row: CacheRow = {
      url,
      fetched_at: new Date().toISOString(),
      status: result.status,
      final_url: result.finalUrl,
      body: result.body,
      error: result.error
    };
    upsertStmt.run(row);

    if (result.error) {
      failed += 1;
    } else {
      fetched += 1;
    }
    processed += 1;
    renderProgress(processed, uniqueUrls.length, { cached, fetched, failed });
  }

  console.log(`Cached: ${cached}`);
  console.log(`Fetched: ${fetched}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${uniqueUrls.length}`);
  console.log(`DB: ${dbPath}`);
  db.close();
}

main().catch((error) => {
  console.error('Cache failed:', error);
  process.exitCode = 1;
});
