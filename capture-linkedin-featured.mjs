import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targets = [
  {
    html: 'linkedin-featured-roadmap.html',
    out: 'linkedin-featured-roadmap.png',
  },
  {
    html: 'linkedin-featured-diagnostic.html',
    out: 'linkedin-featured-diagnostic.png',
  },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 628 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  for (const t of targets) {
    const htmlPath = path.join(__dirname, t.html);
    const outPath = path.join(__dirname, t.out);
    await page.goto('file://' + htmlPath.replace(/\\/g, '/'));
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);
    await page.screenshot({
      path: outPath,
      clip: { x: 0, y: 0, width: 1200, height: 628 },
      type: 'png',
      omitBackground: false,
    });
    console.log('PNG saved:', outPath);
  }

  await browser.close();
})();
