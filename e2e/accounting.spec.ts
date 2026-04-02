import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Greenfield.*Associates|Accounting/)
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    const servicesLink = page.getByRole('navigation').getByRole('link', { name: 'Services' })
    await expect(servicesLink).toBeVisible()
    await servicesLink.click()
    await expect(page).toHaveURL('/services')
  })
})

test.describe('Services Page', () => {
  test('displays services from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page).toHaveTitle(/Services/)
    await expect(page.getByText('Tax Preparation').first()).toBeVisible()
  })
})

test.describe('Team Page', () => {
  test('displays team members from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page).toHaveTitle(/Team/)
    await expect(page.getByText('Sarah Mitchell').first()).toBeVisible()
  })
})

test.describe('Resources Page', () => {
  test('displays resources from Drupal', async ({ page }) => {
    await page.goto('/resources')
    await expect(page).toHaveTitle(/Resources/)
    await expect(page.getByText('Tax Deadlines', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header is present on all pages', async ({ page }) => {
    for (const path of ['/', '/services', '/team', '/resources']) {
      await page.goto(path)
      await expect(page.getByText('Greenfield', { exact: false }).first()).toBeVisible()
    }
  })
})
