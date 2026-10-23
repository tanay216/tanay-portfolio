import { chromium } from 'playwright'
import { writeFile } from 'node:fs/promises'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('https://jaintanay.wixsite.com/tanay', { waitUntil: 'domcontentloaded', timeout: 120000 })
await page.waitForTimeout(8000)

const data = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll('img')].map((img) => ({
    src: img.src,
    alt: img.alt,
    w: img.naturalWidth,
  }))
  const bgs = []
  for (const el of document.querySelectorAll('*')) {
    const bg = getComputedStyle(el).backgroundImage
    if (bg && bg !== 'none' && bg.includes('url')) {
      bgs.push({ bg, tag: el.tagName, text: (el.innerText || '').slice(0, 40) })
    }
  }
  const h2 = document.querySelector('h2')
  const demoreelSection = [...document.querySelectorAll('h2')].map((h) => ({
    text: h.innerText,
    styles: getComputedStyle(h),
    parentBg: getComputedStyle(h.parentElement).backgroundColor,
  }))
  return { imgs, bgs: bgs.slice(0, 30), demoreelSection }
})

await writeFile('/workspace/internal/wix-images.json', JSON.stringify(data, null, 2))
await browser.close()
