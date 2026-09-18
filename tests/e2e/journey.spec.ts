import { test, expect, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import experiences from '../../src/data/ExperiencesData.json' with { type: 'json' }
import projects from '../../src/data/ProjetsData.json' with { type: 'json' }
import certifications from '../../src/data/CertificationsData.json' with { type: 'json' }
import publications from '../../src/data/ArticlesData.json' with { type: 'json' }

async function jump(page: Page, selector: string) {
  await page.locator(selector).evaluate((element) => element.scrollIntoView({ behavior: 'instant', block: 'start' }))
  await page.waitForTimeout(1000)
}

test('professional content, original links and images survive the redesign', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
  await page.goto('./')
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page.locator('h1')).toContainText('Jessem')
  await expect(page.locator('.experience-entry')).toHaveCount(3)
  await expect(page.locator('.mission')).toHaveCount(4)
  await expect(page.locator('.skill-group')).toHaveCount(4)
  await expect(page.locator('.project-card')).toHaveCount(4)
  await expect(page.locator('.education-entry')).toHaveCount(3)
  await expect(page.locator('.certification-list > li')).toHaveCount(4)
  await expect(page.locator('.publication-entry')).toHaveCount(2)
  for (const item of experiences) await expect(page.locator(`a[href="${item.linkCompany}"]`)).toContainText(item.company)
  for (const item of projects) {
    await expect(page.locator(`a[href="${item.lien}"]`)).toHaveCount(1)
    await expect(page.getByRole('heading', { name: item.titre, exact: true })).toHaveCount(1)
  }
  for (const item of certifications) await expect(page.locator(`a[href="${item.url}"]`)).toContainText(item.name)
  for (const item of publications) await expect(page.locator(`a[href="${item.lien}"]`).first()).toContainText(item.description)
  for (const selector of ['#passage', '#profil', '#competences', '#projets', '#archives', '#contact']) await jump(page, selector)
  await expect(page.locator('.environment-finale img')).toBeAttached()
  expect(await page.locator('img').evaluateAll((images) => images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src))).toEqual([])
  expect(errors).toEqual([])
})

test('navigation works with keyboard and mobile menu', async ({ page, isMobile }) => {
  await page.goto('./')
  if (isMobile) {
    const menu = page.locator('.menu-toggle')
    await menu.click()
    await expect(menu).toHaveAttribute('aria-expanded', 'true')
    await page.keyboard.press('Escape')
    await expect(menu).toHaveAttribute('aria-expanded', 'false')
    await menu.click()
  }
  const link = page.getByRole('navigation', { name: 'Navigation principale' }).getByRole('link', { name: 'Projets', exact: true })
  await link.focus()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#projets$/)
  await expect(page.locator('#projets')).toBeFocused()
  if (isMobile) await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute('aria-expanded', 'false')
})

test('no horizontal overflow at narrow mobile, tablet or desktop widths', async ({ page }) => {
  await page.goto('./')
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await expect.poll(async () => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    await jump(page, '#projets')
    expect(await page.locator('.project-card').first().evaluate((element) => element.getBoundingClientRect().right <= window.innerWidth)).toBe(true)
  }
})

test('character walks only with scroll and reverses deterministically', async ({ page }) => {
  await page.goto('./')
  await page.evaluate(() => document.fonts.ready)
  const character = page.locator('.walking-character')
  await page.evaluate(() => window.scrollTo({ top: 1200, behavior: 'instant' }))
  await expect.poll(async () => Number(await character.getAttribute('data-progress'))).toBeGreaterThan(0)
  await page.waitForTimeout(300)
  const position = await character.getAttribute('style')
  const frame = await character.getAttribute('data-frame')
  await page.waitForTimeout(550)
  expect(await character.getAttribute('data-frame')).toBe(frame)
  expect(await character.getAttribute('style')).toBe(position)
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'instant' }))
  await expect.poll(async () => character.getAttribute('style')).not.toBe(position)
  await page.evaluate(() => window.scrollTo({ top: 1200, behavior: 'instant' }))
  await expect.poll(async () => character.getAttribute('data-frame')).toBe(frame)
  await expect.poll(async () => character.getAttribute('style')).toBe(position)
})

test('archives expand and the finale remains reachable after layout changes', async ({ page }) => {
  await page.goto('./#formations')
  const education = page.locator('.education-entry').first()
  await education.locator('summary').click()
  await expect(education).toHaveAttribute('open', '')
  await expect(education.locator('.education-detail')).toBeVisible()
  await jump(page, '#contact')
  await expect(page.locator('#finale-title')).toBeInViewport()
  await expect.poll(async () => page.locator('[role="progressbar"]').getAttribute('aria-valuenow')).toMatch(/^(9[0-9]|100)$/)
})

test('the gate blends both environments and restores the exterior on reverse scroll', async ({ page }) => {
  await page.goto('./')
  await page.evaluate(() => document.fonts.ready)
  const midpoint = await page.locator('#passage').evaluate((element) => {
    const bounds = element.getBoundingClientRect()
    return bounds.top + window.scrollY + bounds.height / 2 - window.innerHeight * .775
  })
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), midpoint)
  await page.waitForTimeout(1000)
  const opacity = await page.locator('.environment-city').evaluate((element) => Number(getComputedStyle(element).opacity))
  expect(opacity).toBeGreaterThan(.1)
  expect(opacity).toBeLessThan(.95)
  await jump(page, '#profil')
  await expect.poll(async () => page.locator('.environment-city').evaluate((element) => Number(getComputedStyle(element).opacity))).toBe(1)
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await expect.poll(async () => page.locator('.environment-city').evaluate((element) => Number(getComputedStyle(element).opacity))).toBe(0)
  await expect.poll(async () => page.locator('.hero-content').evaluate((element) => Number(getComputedStyle(element).opacity))).toBe(1)
})

test('reduced motion remains readable and passes accessibility scan', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('./')
  await expect(page.locator('.character-track')).toBeHidden()
  await jump(page, '#profil')
  await expect(page.locator('.experience-entry').first()).toBeVisible()
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(results.violations).toEqual([])
})

test('direct contact link loads its environment and all contact links', async ({ page }) => {
  await page.goto('./#contact')
  await expect(page.locator('.environment-finale img')).toBeAttached()
  await expect.poll(async () => page.locator('.environment-finale img').evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
  await expect(page.locator('#finale-title')).toBeInViewport()
  await expect(page.locator('#contact a[href="mailto:jessemettaghouti@gmail.com"]').first()).toBeVisible()
  await expect(page.locator('#contact a[href="tel:+33671090148"]')).toBeVisible()
})
