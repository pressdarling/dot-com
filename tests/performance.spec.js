test("homepage loads quickly", async ({ page }) => {
  const timing = await page.evaluate(() => performance.timing);
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  expect(loadTime).toBeLessThan(3000); // Adjust threshold as needed
});
