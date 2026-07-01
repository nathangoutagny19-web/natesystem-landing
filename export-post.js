const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  const filePath = 'file:///' + path.resolve('linkedin-post-agent.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({
    path: 'natesystem_post_agent.png',
    type: 'png',
    clip: { x: 0, y: 0, width: 1080, height: 1080 },
  });
  console.log('PNG exported: natesystem_post_agent.png');
  await browser.close();
})();
