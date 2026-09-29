import puppeteer from './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import path from 'path'
import { fileURLToPath } from 'url'

/**
 * Rend la couverture LinkedIn à sa taille native, 1584 × 396.
 *   node capture-linkedin-ecoles.mjs            → version anglaise
 *   node capture-linkedin-ecoles.mjs fr         → version française
 *   node capture-linkedin-ecoles.mjs [fr] debug → avec la zone photo en surimpression
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const fr = args.includes('fr')
const debug = args.includes('debug')

const base = 'linkedin-banner-ecoles' + (fr ? '-fr' : '')
const html = 'file://' + path.join(__dirname, base + '.html') + (debug ? '?debug' : '')
const out = path.join(__dirname, base + (debug ? '-debug' : '') + '.png')

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
})
const page = await browser.newPage()
// deviceScaleFactor 2 : le PNG sort en 3168 × 792, LinkedIn le redescend proprement.
await page.setViewport({ width: 1584, height: 396, deviceScaleFactor: 2 })
await page.goto(html, { waitUntil: 'networkidle0' })
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 600))
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1584, height: 396 } })
await browser.close()
console.log('PNG :', out)
