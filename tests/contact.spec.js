// tests/contact.spec.js
import { test, expect } from '@playwright/test';

test('contact page has form', async ({ page }) => {
  await page.goto('/contact');
  await expect(page).toHaveTitle(/Contact Brady Clarke/);
  await expect(page.locator('form')).toBeVisible();
});
