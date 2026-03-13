const { test, expect } = require('@playwright/test');

test('Verificar título da página', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  console.log('Título da página:', title);
  expect(title).toContain('Playwright');
});

test('Verificar elemento na página', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  const heading = page.locator('h1');
  await expect(heading).toContainText('Example Domain');
  console.log('Teste concluído com sucesso!');
});
