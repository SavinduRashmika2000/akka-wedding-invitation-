import { test, expect } from '@playwright/test';

test.describe('Engagement Section & Wedding Ceremony Time', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Click Open Invitation to reveal sections
    const openButton = page.getByRole('button', { name: /open invitation/i });
    await openButton.click();
    await page.waitForTimeout(500);
  });

  test('engagement section is visible with 30 July 2026', async ({ page }) => {
    const engagementSection = page.locator('#engagement');
    await expect(engagementSection).toBeVisible();

    // Check heading
    await expect(page.getByRole('heading', { name: /our engagement/i })).toBeVisible();

    // Check engagement date
    await expect(page.getByText(/30 July 2026/i).first()).toBeVisible();
    await expect(page.getByText('30.07.2026').first()).toBeVisible();
  });

  test('displays 4 engagement photo cards', async ({ page }) => {
    const engagementSection = page.locator('#engagement');
    // There should be 4 cards in the grid
    const cards = engagementSection.locator('.grid > div');
    await expect(cards).toHaveCount(4);
  });

  test('wedding ceremony time 6:00 PM is displayed in Date and Location sections', async ({ page }) => {
    // Check in Date section
    const dateSection = page.locator('#date');
    await expect(dateSection.getByText('6:00 PM')).toBeVisible();

    // Check in Location section
    const locationSection = page.locator('#location');
    await expect(locationSection.getByText(/6:00 PM/)).toBeVisible();
  });
});
