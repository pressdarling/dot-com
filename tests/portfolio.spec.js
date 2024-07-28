// tests/portfolio.spec.js
import { test, expect } from "@playwright/test";

test("portfolio page displays projects", async ({ page }) => {
  await page.goto("/portfolio");
  await expect(page).toHaveTitle(/Brady Clarke's Portfolio/);
  await expect(page.locator(".portfolio-item")).toHaveCount(1); // Adjust count as needed
});
