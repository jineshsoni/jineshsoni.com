// Renders the /resume/ page of the built site to public/Jinesh-Soni-Resume.pdf with headless Chrome,
// so the downloadable PDF always matches the website.
//
//   npm run resume:pdf
//
// Set CHROME_PATH if Chrome isn't in a standard location.
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { tmpdir } from 'node:os';
import { promisify } from 'node:util';
import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const DIST = resolve('dist');
const FILE = 'Jinesh-Soni-Resume.pdf';
const OUT = resolve('public', FILE);

const chrome =
  process.env.CHROME_PATH ??
  [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].find((p) => existsSync(p));

if (!chrome) throw new Error('Chrome not found — set CHROME_PATH.');
if (!existsSync(join(DIST, 'resume/index.html'))) throw new Error('Run `astro build` first.');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

// Minimal static server for dist/ — avoids depending on `astro preview` process handling.
const server = createServer((req, res) => {
  let file = join(DIST, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!file.startsWith(DIST) || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
  res.end(readFileSync(file));
});

await new Promise((r) => server.listen(0, '127.0.0.1', r));
const { port } = server.address();

// Async on purpose: a sync call would block this process and the server above could never respond.
const profile = mkdtempSync(join(tmpdir(), 'resume-pdf-'));
try {
  await promisify(execFile)(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      `--user-data-dir=${profile}`,
      '--no-pdf-header-footer',
      '--virtual-time-budget=8000',
      `--print-to-pdf=${OUT}`,
      `http://127.0.0.1:${port}/resume/`,
    ],
    { timeout: 60_000 },
  );
} finally {
  server.close();
  rmSync(profile, { recursive: true, force: true });
}

copyFileSync(OUT, join(DIST, FILE));
console.log(`✓ Wrote ${OUT}`);
