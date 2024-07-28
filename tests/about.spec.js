// tests/about.spec.js
import { test, expect } from "@playwright/test";

test("about page has correct content", async ({ page }) => {
  await page.goto("/about");
  await expect(page).toHaveTitle(/About Brady Clarke/);
  await expect(page.locator("h1")).toContainText("About Me");
});
