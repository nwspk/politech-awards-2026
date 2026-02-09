import fs from 'fs';
import http from 'http';
import os from 'os';
import path from 'path';
import Database from 'better-sqlite3';

const url = process.argv[2];
const port = Number.parseInt(process.argv[3] ?? '8799', 10);

if (!url) {
  console.error('Usage: npx tsx scripts/read-cache.ts <url> [port]');
  process.exit(1);
}

const db = new Database(path.resolve('cache', 'sites.sqlite'));
const row = db.prepare('SELECT body FROM pages WHERE url = ?').get(url) as {
  body?: string | null;
};
db.close();

if (!row?.body) {
  console.error('No cached body found for URL.');
  process.exit(1);
}

const tmpPath = path.join(os.tmpdir(), `politech-cache-${Date.now()}.html`);
fs.writeFileSync(tmpPath, row.body, 'utf8');

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(tmpPath, 'utf8'));
});

const cleanup = () => {
  try {
    fs.unlinkSync(tmpPath);
  } catch {
    // ignore cleanup errors
  }
};

server.on('close', cleanup);

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

server.listen(port, () => {
  console.log(`Serving cached page: ${url}`);
  console.log(`Open: http://localhost:${port}`);
});
