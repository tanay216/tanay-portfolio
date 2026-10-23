import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'

const OUT = '/opt/cursor/artifacts/screenshots'
await mkdir(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

await page.goto('https://jaintanay.wixsite.com/tanay', { waitUntil: 'domcontentloaded', timeout: 120000 })
await page.waitForTimeout(8000)

await page.screenshot({ path: `${OUT}/wix-home-full.png`, fullPage: true })

const tokens = await page.evaluate(() => {
  const pick = (el) => {
    if (!el) return null
    const s = getComputedStyle(el)
    const r = el.getBoundingClientRect()
    return {
      tag: el.tagName,
      text: (el.innerText || '').slice(0, 80).replace(/\s+/g, ' '),
      color: s.color,
      backgroundColor: s.backgroundColor,
      fontFamily: s.fontFamily,
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      letterSpacing: s.letterSpacing,
      lineHeight: s.lineHeight,
      padding: s.padding,
      margin: s.margin,
      textTransform: s.textTransform,
      width: Math.round(r.width),
      height: Math.round(r.height),
    }
  }

  const allText = [...document.querySelectorAll('h1,h2,h3,p,span,a,button,nav')]
    .filter((el) => {
      const t = (el.innerText || '').trim()
      return t.length > 2 && t.length < 120 && el.offsetParent !== null
    })
    .slice(0, 80)
    .map(pick)

  const body = pick(document.body)
  const header = pick(document.querySelector('header') || document.querySelector('[data-testid="header"]'))
  const navLinks = [...document.querySelectorAll('nav a, [role="navigation"] a')]
    .map((a) => ({ text: a.innerText.trim(), ...pick(a) }))
    .filter((x) => x.text)

  const sections = [...document.querySelectorAll('section, main > div')]
    .slice(0, 15)
    .map((el) => ({
      bg: getComputedStyle(el).backgroundColor,
      className: el.className?.slice?.(0, 60) || '',
      text: (el.innerText || '').slice(0, 100).replace(/\s+/g, ' '),
    }))

  const fonts = [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.style}`)

  return { body, header, navLinks, sampleText: allText, sections, fonts: [...new Set(fonts)].slice(0, 30) }
})

await writeFile('/workspace/internal/wix-tokens.json', JSON.stringify(tokens, null, 2))

// Scroll sections
const heights = await page.evaluate(() => document.documentElement.scrollHeight)
for (let y = 0; y < heights; y += 800) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y)
  await page.waitForTimeout(400)
}
await page.screenshot({ path: `${OUT}/wix-home-viewport.png` })

await page.goto('https://jaintanay.wixsite.com/tanay/general-1', { waitUntil: 'domcontentloaded', timeout: 120000 })
await page.waitForTimeout(2000)
await page.screenshot({ path: `${OUT}/wix-portfolio.png`, fullPage: true })

await browser.close()
console.log('Wrote', '/workspace/internal/wix-tokens.json')
