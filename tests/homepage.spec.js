// tests/homepage.spec.js
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  for (let i = 0; i < 3; i++) {
    try {
      await page.goto('/');
      break;
    } catch (error) {
      console.log(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === 2) throw error;
      await new Promise((r) => setTimeout(r, 5000)); // Wait 5 seconds before retrying
    }
  }
});

test('homepage has the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Brady Clarke/);
});

test('homepage links are working', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');
  await expect(page).toHaveURL(/.*about/);
});
