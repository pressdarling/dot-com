// tests/cv-resume.spec.js
import { test, expect } from '@playwright/test';

test('CV/Resume page loads correctly', async ({ page }) => {
  await page.goto('/cv-resume');
  await expect(page).toHaveTitle(/CV\/Resume \| Brady Clarke/);
  await expect(page.locator('h1')).toContainText('CV/Resume');
});
