import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const outDir = '/cursor/stores/bc-37b9811b-2bda-41c1-8c65-086f6cf739b9/media'
await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://127.0.0.1:4317/', { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(1500)
await page.screenshot({ path: `${outDir}/wix-match-preview.png`, fullPage: true })
await browser.close()
