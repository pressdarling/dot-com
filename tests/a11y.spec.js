import { AxeBuilder } from '@axe-core/playwright';

test('homepage has no detectable accessibility issues', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
