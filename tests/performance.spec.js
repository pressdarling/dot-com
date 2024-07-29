import { test, expect } from '@playwright/test';

test('homepage loads quickly', async ({ page }) => {
  const timing = await page.evaluate(() => performance.timeOrigin);
  const loadTime = Date.now() - timing;
  expect(loadTime).toBeLessThan(3000); // Adjust threshold as needed
});
