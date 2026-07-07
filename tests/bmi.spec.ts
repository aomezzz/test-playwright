import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.calculator.net/bmi-calculator.html');
  await page.locator('#cage').click();
  await page.locator('#cage').fill('23');
  await page.locator('#cheightmeter').click();
  await page.locator('#cheightmeter').fill('161');
  await page.locator('#ckg').click();
  await page.locator('#ckg').fill('51');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.locator('svg')).toContainText('BMI = 19.7');
});