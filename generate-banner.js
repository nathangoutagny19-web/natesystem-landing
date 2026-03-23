const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });

  // Personal banner — 1584x396 @2x
  const page1 = await browser.newPage();
  await page1.setViewport({ width: 1584, height: 396, deviceScaleFactor: 2 });
  await page1.goto('file:///' + path.resolve('banner-perso.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page1.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));
  const b1 = await page1.$('.banner');
  await b1.screenshot({ path: 'linkedin-banner-perso.png', type: 'png' });
  console.log('✓ linkedin-banner-perso.png (1584x396 @2x = 3168x792)');

  // Company banner — 1128x191 @2x
  const page2 = await browser.newPage();
  await page2.setViewport({ width: 1128, height: 191, deviceScaleFactor: 2 });
  await page2.goto('file:///' + path.resolve('banner-company.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page2.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));
  const b2 = await page2.$('.banner');
  await b2.screenshot({ path: 'linkedin-banner-company.png', type: 'png' });
  console.log('✓ linkedin-banner-company.png (1128x191 @2x = 2256x382)');

  // YouTube banner — 2560x1440 @1x
  const page3 = await browser.newPage();
  await page3.setViewport({ width: 2560, height: 1440, deviceScaleFactor: 1 });
  await page3.goto('file:///' + path.resolve('youtube-banner.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page3.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));
  const b3 = await page3.$('.banner');
  await b3.screenshot({ path: 'youtube-banner.png', type: 'png' });
  console.log('✓ youtube-banner.png (2560x1440)');

  // Logo icon — 512x512 @2x
  const page4 = await browser.newPage();
  await page4.setViewport({ width: 512, height: 512, deviceScaleFactor: 2 });
  await page4.goto('file:///' + path.resolve('logo-export.html').replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page4.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));
  const icon = await page4.$('#icon');
  await icon.screenshot({ path: 'natesystem-logo.png', type: 'png' });
  console.log('✓ natesystem-logo.png (512x512 @2x = 1024x1024)');

  await browser.close();
})();
