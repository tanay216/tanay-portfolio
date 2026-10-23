import { chromium } from 'playwright'
import { writeFile } from 'node:fs/promises'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('https://jaintanay.wixsite.com/tanay/general-1', { waitUntil: 'domcontentloaded', timeout: 120000 })
await page.waitForTimeout(8000)

const buttons = await page.evaluate(() => {
  return [...document.querySelectorAll('a, button')]
    .filter((el) => /steam|play|warbound|frosty|sumo|zanthar/i.test(el.innerText))
    .map((el) => {
      const s = getComputedStyle(el)
      return {
        text: el.innerText.trim(),
        color: s.color,
        backgroundColor: s.backgroundColor,
        border: s.border,
        boxShadow: s.boxShadow,
        fontSize: s.fontSize,
        fontFamily: s.fontFamily,
        padding: s.padding,
        borderRadius: s.borderRadius,
      }
    })
})

await writeFile('/workspace/internal/wix-buttons.json', JSON.stringify(buttons, null, 2))
await browser.close()
