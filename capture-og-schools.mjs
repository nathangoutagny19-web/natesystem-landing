import puppeteer from './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import path from 'path'
import { fileURLToPath } from 'url'

/** Carte de partage de la home, 1200 × 630, la taille que LinkedIn attend. */
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
})
const page = await browser.newPage()
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 })
await page.goto('file://' + path.join(__dirname, 'og-image-schools.html'), { waitUntil: 'networkidle0' })
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 500))
await page.screenshot({ path: path.join(__dirname, 'public/og-schools.png'), clip: { x: 0, y: 0, width: 1200, height: 630 } })
await browser.close()
console.log('PNG : public/og-schools.png')
