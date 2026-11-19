import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Wedding Invitation — Core E2E', () => {
  test('website opens successfully', async ({ page }) => {
    const response = await page.goto(BASE_URL);
    expect(response?.status()).toBeLessThan(400);
  });

  test('page title is correct', async ({ page }) => {
    await page.goto(BASE_URL);
    const title = await page.title();
    expect(title).toContain('Yaanaki');
    expect(title).toContain('Kavinda');
  });

  test('hero video element exists with correct src', async ({ page }) => {
    await page.goto(BASE_URL);
    const video = page.locator('video').first();
    await expect(video).toBeAttached();
    const src = await video.getAttribute('src');
    expect(src).toContain('landing-video');
  });

  test('video has correct attributes for autoplay', async ({ page }) => {
    await page.goto(BASE_URL);
    const video = page.locator('video').first();
    await expect(video).toHaveAttribute('muted');
    await expect(video).toHaveAttribute('loop');
    await expect(video).toHaveAttribute('playsinline');
    await expect(video).toHaveAttribute('autoplay');
  });

  test('bride name Yaanaki appears over hero', async ({ page }) => {
    await page.goto(BASE_URL);
    const yaanaki = page.getByRole('heading', { name: 'Yaanaki', exact: true });
    await expect(yaanaki).toBeVisible();
  });

  test('best man name Kavinda appears over hero', async ({ page }) => {
    await page.goto(BASE_URL);
    const kavinda = page.getByRole('heading', { name: 'Kavinda', exact: true });
    await expect(kavinda).toBeVisible();
  });

  test('wedding date 27 January 2027 is displayed in date section', async ({ page }) => {
    await page.goto(BASE_URL);
    const dateSection = page.locator('#date');
    await expect(dateSection).toBeAttached();
    await expect(dateSection.getByText('27', { exact: true })).toBeVisible();
    await expect(dateSection.getByText('January', { exact: true })).toBeVisible();
    await expect(dateSection.getByText('2027', { exact: true })).toBeVisible();
  });

  test('countdown shows days, hours, minutes, seconds', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByText('Days').first()).toBeVisible();
    await expect(page.getByText('Hours').first()).toBeVisible();
    await expect(page.getByText('Mins').first()).toBeVisible();
    await expect(page.getByText('Secs').first()).toBeVisible();
  });

  test('floating music control button exists and is accessible', async ({ page }) => {
    await page.goto(BASE_URL);
    const musicBtn = page.getByRole('button', { name: 'Play music', exact: true });
    await expect(musicBtn).toBeVisible();
    await expect(musicBtn).toBeEnabled();
  });

  test('venue location link is present and has correct href', async ({ page }) => {
    await page.goto(BASE_URL);
    const locationLink = page.getByRole('link', { name: 'View Location' });
    await expect(locationLink).toBeVisible();
    const href = await locationLink.getAttribute('href');
    expect(href).toBe('https://share.google/1cWseSUUOuDbtpgZa');
  });

  test('venue link opens in new tab with rel=noopener', async ({ page }) => {
    await page.goto(BASE_URL);
    const link = page.getByRole('link', { name: 'View Location' });
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('no horizontal overflow on mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375);
  });

  test('no horizontal overflow on small mobile (320px)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto(BASE_URL);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(320);
  });

  test('Open Invitation button is present on first load', async ({ page }) => {
    await page.goto(BASE_URL);
    const enterBtn = page.getByRole('button', { name: /Open Invitation/i });
    await expect(enterBtn).toBeVisible();
  });

  test('invitation section renders', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByText(/Together With Their Families/i)).toBeVisible();
  });

  test('footer displays couple names and date', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const footer = page.locator('footer');
    await expect(footer).toContainText('Yaanaki');
    await expect(footer).toContainText('Kavinda');
    await expect(footer).toContainText('2027');
  });
});

test.describe('Wedding Invitation — Mobile Layout', () => {
  test('page loads correctly on iPhone 14', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const response = await page.goto(BASE_URL);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.getByRole('heading', { name: 'Yaanaki', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Kavinda', exact: true })).toBeVisible();
  });

  test('no horizontal overflow on iPhone 14', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE_URL);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(390);
  });
});
