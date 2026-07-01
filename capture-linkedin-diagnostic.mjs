import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const htmlPath = path.join(__dirname, 'linkedin-thumbnail-diagnostic.html');
const outPath = path.join(__dirname, 'linkedin-thumbnail-diagnostic.png');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto('file://' + htmlPath.replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);

  await page.screenshot({
    path: outPath,
    clip: { x: 0, y: 0, width: 1280, height: 720 },
    type: 'png',
    omitBackground: false,
  });

  await browser.close();
  console.log('PNG saved:', outPath);
})();
