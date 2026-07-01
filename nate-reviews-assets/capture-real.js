/**
 * Capture screenshots from the live ScrapAvis deployment for the NateSystem · Reviews landing.
 *
 * What gets captured (6 PNGs, landing-ready):
 *   01-reputation-score.png  Overview — RepScore, KPIs, critical alert, SWOT
 *   02-action-plan.png       Action Plan — 90-day strategic roadmap (1 of 8 done)
 *   03-aspect-analysis.png   Analytics > Aspects — per-aspect ranking + keyword cards
 *   04-audit-pdf.png         (handled by capture-audit-pdf.mjs — not this script)
 *   05-reviews-ai.png        Reviews — feed with AI analysis, aspects, keywords
 *   06-responses.png         Responses — HU drafts + AgentConfigPanel expanded
 *
 * Run (from this folder): node capture-real.js
 */
const path = require('path');
const puppeteer = require('puppeteer');

const BASE = 'https://restau-image-pilot.vercel.app';
const EMAIL = 'landing-capture@natesystem.com';
const PASSWORD = 'Landing123.';
const SLUG = 'kefrenkos';
const OUT = __dirname;
const VIEWPORT = { width: 1600, height: 1000, deviceScaleFactor: 2 };

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function login(page) {
  console.log('→ login');
  await page.goto(`${BASE}/auth/login`, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForSelector('input[type="email"]', { timeout: 20000 });

  await page.click('input[type="email"]', { clickCount: 3 });
  await page.keyboard.press('Backspace');
  await page.type('input[type="email"]', EMAIL, { delay: 40 });

  await page.click('input[type="password"]', { clickCount: 3 });
  await page.keyboard.press('Backspace');
  await page.type('input[type="password"]', PASSWORD, { delay: 40 });

  await sleep(300);
  await page.click('button[type="submit"]');

  const start = Date.now();
  while (page.url().includes('/auth/login') && Date.now() - start < 30000) {
    await sleep(500);
  }
  if (page.url().includes('/auth/login')) {
    throw new Error('Login failed — still on /auth/login');
  }
  console.log('  landed on ' + page.url());
  await sleep(1500);
}

async function forceChartsPaint(page) {
  // Recharts lines/pies/radars animate in via requestAnimationFrame. In some
  // headless Chrome builds the first rAF stalls and the path `d` attribute is
  // left empty. Force-tick rAF a few times, then resize the viewport to
  // invalidate the ResponsiveContainer and let the SVG recompute.
  await page.evaluate(() => {
    // Synthesize 30 rAF ticks — should flush any pending Recharts animation.
    for (let i = 0; i < 30; i++) {
      // @ts-expect-error inside-browser
      if (typeof window.__tick === 'function') window.__tick();
    }
    window.dispatchEvent(new Event('resize'));
  });
  await sleep(600);
  for (const delta of [3, -2, -1]) {
    await page.setViewport({
      width: VIEWPORT.width + delta,
      height: VIEWPORT.height,
      deviceScaleFactor: VIEWPORT.deviceScaleFactor,
    });
    await sleep(700);
  }
  await page.setViewport(VIEWPORT);
  await sleep(2500);
}

/** Inject CSS that forces Recharts animation to skip to the end state. */
async function disableChartAnimation(page) {
  await page.addStyleTag({
    content: `
      /* Force recharts animated paths to be fully drawn */
      .recharts-wrapper path, .recharts-wrapper polygon, .recharts-wrapper polyline {
        animation: none !important;
        transition: none !important;
      }
    `,
  });
}

async function navAndScreenshot(page, url, filename, { wait = 2500, afterLoad } = {}) {
  console.log(`→ ${filename}  ${url}`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await sleep(wait);
  if (afterLoad) await afterLoad(page);
  // Wait for any Recharts paths to have non-empty `d` attributes, up to 10s.
  // If timeout, we still capture (the layout may legitimately have no chart).
  await page.evaluate(async () => {
    const ok = () => {
      const paths = document.querySelectorAll('.recharts-curve, .recharts-pie-sector, .recharts-radar-polygon');
      if (paths.length === 0) return true; // no charts on this page
      return [...paths].every((p) => (p.getAttribute('d') || '').length > 5);
    };
    for (let i = 0; i < 50; i++) {
      if (ok()) return;
      await new Promise((r) => setTimeout(r, 200));
    }
  });
  await forceChartsPaint(page);
  await page.screenshot({
    path: path.join(OUT, filename),
    clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
  });
  console.log(`  saved ${filename}`);
}

/** Click a button by its exact visible text. */
async function clickByText(page, text) {
  const handle = await page.evaluateHandle((t) => {
    const btns = [...document.querySelectorAll('button')];
    return btns.find((b) => b.textContent && b.textContent.trim() === t) || null;
  }, text);
  const el = handle.asElement();
  if (!el) throw new Error(`button "${text}" not found`);
  await el.click();
  await handle.dispose();
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);
    await page.setDefaultNavigationTimeout(60000);

    await login(page);

    // 01 — Overview (RepScore + alerts + SWOT)
    await navAndScreenshot(page, `${BASE}/restaurant/${SLUG}/overview`, '01-reputation-score.png', {
      wait: 3000,
    });

    // 02 — Action Plan (the 90-day strategic roadmap we deliver as an agency)
    await navAndScreenshot(page, `${BASE}/restaurant/${SLUG}/action-plan`, '02-action-plan.png', {
      wait: 3000,
    });

    // 03 — Analytics > Aspects, scrolled past the empty radar to show ranking + cards
    await navAndScreenshot(page, `${BASE}/restaurant/${SLUG}/analytics`, '03-aspect-analysis.png', {
      wait: 4000,
      afterLoad: async (p) => {
        await clickByText(p, 'Aspects');
        await sleep(2500);
        // Scroll down so the empty radar box leaves the viewport;
        // frame shows Aspect Ranking (top-right in layout) and the 6 aspect cards.
        await p.evaluate(() => window.scrollTo(0, 220));
        await sleep(500);
      },
    });

    // 05 — Reviews feed with AI analysis visible
    await navAndScreenshot(page, `${BASE}/restaurant/${SLUG}/reviews`, '05-reviews-ai.png', {
      wait: 3500,
    });

    // 06 — Responses page with AgentConfigPanel expanded
    await navAndScreenshot(page, `${BASE}/restaurant/${SLUG}/responses`, '06-responses.png', {
      wait: 3500,
      afterLoad: async (p) => {
        // The AgentConfigPanel toggle button contains "Agent" in its label.
        // Try clicking any button whose text includes "Agent" (case-insensitive).
        const clicked = await p.evaluate(() => {
          const btns = [...document.querySelectorAll('button')];
          const target = btns.find((b) => /agent/i.test(b.textContent || ''));
          if (target) { target.click(); return true; }
          return false;
        });
        if (clicked) {
          console.log('  opened AgentConfigPanel');
          await sleep(800);
        } else {
          console.log('  no Agent button found — capturing without panel');
        }
      },
    });
  } finally {
    await browser.close();
    console.log('done');
  }
})();
