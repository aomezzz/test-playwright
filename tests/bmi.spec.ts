import { test, expect } from '@playwright/test';

test('bmi test calculator', async ({ page }) => {
  await page.goto('https://www.calculator.net/bmi-calculator.html');
  await page.locator('#cage').click();
  await page.locator('#cage').click();
  await page.locator('#cage').fill('21');
  await page.getByText('Female').click();
  await page.locator('label:nth-child(2) > .rbmark').click();
  await page.locator('#cheightmeter').click();
  await page.locator('#cheightmeter').fill('16');
  await page.locator('#cheightmeter').press('PageUp');
  await page.locator('#cheightmeter').fill('167');
  await page.locator('#ckg').click();
  await page.locator('#ckg').fill('47');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.getByText('BMI = 16.9', { exact: true }).click();
});