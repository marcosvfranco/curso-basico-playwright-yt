import { test, expect } from '@playwright/test';

test('Acessando página do Playwright', async ({ page }) => {
  // actions
  await page.goto('https://playwright.dev/');

  // locators
  const botaoGetStarted = page.locator('Get Started');

  await botaoGetStarted.click();

  // Expects / Verificações
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});
