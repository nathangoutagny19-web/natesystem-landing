/**
 * Capture the cover page of a live Partner Audit PDF as a PNG.
 * Run from the Landing folder:
 *   node nate-reviews-assets/capture-audit-pdf.mjs
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { createCanvas } from 'canvas';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = 'https://restau-image-pilot.vercel.app';
const EMAIL = 'landing-capture@natesystem.com';
const PASSWORD = 'Landing123.';
const AUDIT_ID = '7b1c8059-7360-4f6d-ba1b-9324ab215afd';
const OUT = path.join(__dirname, '04-audit-pdf.png');

async function loginAndFetchPdf() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 1000, deviceScaleFactor: 1 });

    console.log('→ login');
    await page.goto(`${BASE}/auth/login`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('input[type="email"]');
    await page.click('input[type="email"]', { clickCount: 3 });
    await page.keyboard.press('Backspace');
    await page.type('input[type="email"]', EMAIL, { delay: 40 });
    await page.click('input[type="password"]', { clickCount: 3 });
    await page.keyboard.press('Backspace');
    await page.type('input[type="password"]', PASSWORD, { delay: 40 });
    await new Promise((r) => setTimeout(r, 300));
    await page.click('button[type="submit"]');
    const start = Date.now();
    while (page.url().includes('/auth/login') && Date.now() - start < 30000) {
      await new Promise((r) => setTimeout(r, 500));
    }
    if (page.url().includes('/auth/login')) throw new Error('login failed');
    console.log('  ok');

    console.log('→ fetching PDF');
    const pdfBase64 = await page.evaluate(async (auditId) => {
      const res = await fetch(`/api/audits/${auditId}/pdf`, { credentials: 'include' });
      if (!res.ok) throw new Error('pdf fetch failed: ' + res.status);
      const buf = await res.arrayBuffer();
      let binary = '';
      const bytes = new Uint8Array(buf);
      for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
      return btoa(binary);
    }, AUDIT_ID);

    return Buffer.from(pdfBase64, 'base64');
  } finally {
    await browser.close();
  }
}

async function renderFirstPage(pdfBuffer) {
  console.log('→ rendering cover page');
  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(pdfBuffer),
    disableFontFace: false,
    useSystemFonts: true,
  });
  const doc = await loadingTask.promise;
  const page = await doc.getPage(1);
  const scale = 2.5;
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext('2d');
  await page.render({ canvasContext: context, viewport }).promise;
  const png = canvas.toBuffer('image/png');
  fs.writeFileSync(OUT, png);
  console.log('  saved ' + path.basename(OUT) + ' (' + viewport.width + '×' + viewport.height + ')');
}

const pdfBuffer = await loginAndFetchPdf();
await renderFirstPage(pdfBuffer);
console.log('done');
