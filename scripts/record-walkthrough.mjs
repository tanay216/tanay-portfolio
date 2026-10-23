import { chromium } from 'playwright'

const base = 'http://127.0.0.1:4317'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await chromium.launch({
  headless: false,
  channel: 'chrome',
  args: ['--start-maximized', '--window-position=0,0'],
})
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await context.newPage()

async function smoothScroll(pixels, steps = 20) {
  const step = pixels / steps
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, step)
    await sleep(80)
  }
}

await page.goto(base + '/', { waitUntil: 'domcontentloaded' })
await sleep(3500)

await smoothScroll(500, 25)
await sleep(2000)
await smoothScroll(500, 25)
await sleep(5000)

await page.getByRole('link', { name: 'PORTFOLIO' }).click()
await sleep(2000)
await smoothScroll(800, 30)
await sleep(3000)
await smoothScroll(800, 30)
await sleep(4000)
await smoothScroll(600, 25)
await sleep(3000)

await page.goto(base + '/music', { waitUntil: 'domcontentloaded' })
await sleep(4500)

await page.goto(base + '/contact', { waitUntil: 'domcontentloaded' })
await sleep(8000)

await page.getByRole('link', { name: 'HOME' }).click()
await sleep(3000)

await browser.close()
