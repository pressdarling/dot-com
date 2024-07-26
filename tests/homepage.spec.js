// tests/homepage.spec.js
import { test, expect } from "@playwright/test";

test("homepage has the correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Brady Clarke/);
});

test("homepage links are working", async ({ page }) => {
  await page.goto("/");
  await page.click("text=About");
  await expect(page).toHaveURL(/.*about/);
});
