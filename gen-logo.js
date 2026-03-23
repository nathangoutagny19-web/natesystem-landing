const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 });
  await page.goto('file:///' + path.resolve('logo-export.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 2000));
  const icon = await page.$('#icon');
  await icon.screenshot({ path: 'natesystem-logo.png', type: 'png' });
  console.log('✓ natesystem-logo.png (512x512 @2x = 1024x1024)');
  await browser.close();
})();
