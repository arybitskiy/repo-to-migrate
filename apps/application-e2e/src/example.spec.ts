import { test, expect } from '@playwright/test';

test('colors are correct initially', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('navbar')).toHaveCSS(
    'background-color',
    'rgb(198, 193, 154)'
  );

  await expect(page.getByTestId('left')).toHaveCSS(
    'background-color',
    'rgb(187, 250, 251)'
  );

  await expect(page.getByTestId('right')).toHaveCSS(
    'background-color',
    'rgb(151, 225, 250)'
  );

  await expect(page.getByTestId('center')).toHaveCSS(
    'background-color',
    'rgb(254, 233, 179)'
  );

  await expect(page.getByTestId('footer')).toHaveCSS(
    'background-color',
    'rgb(248, 206, 206)'
  );

  await expect(page.getByTestId('home-link')).toHaveCSS(
    'color',
    'rgb(112, 6, 0)'
  );
});

test('colors are correct after clicking on Page 2', async ({ page }) => {
  await page.goto('/');

  await page.click('[data-testid="page-2-link"]');

  await expect(page.getByTestId('navbar')).toHaveCSS(
    'background-color',
    'rgb(198, 193, 154)'
  );

  await expect(page.getByTestId('left')).toHaveCSS(
    'background-color',
    'rgb(187, 250, 251)'
  );

  await expect(page.getByTestId('right')).toHaveCSS(
    'background-color',
    'rgb(151, 225, 250)'
  );

  await expect(page.getByTestId('center')).toHaveCSS(
    'background-color',
    'rgb(254, 233, 179)'
  );

  await expect(page.getByTestId('footer')).toHaveCSS(
    'background-color',
    'rgb(248, 206, 206)'
  );

  await expect(page.getByTestId('page-2-link')).toHaveCSS(
    'color',
    'rgb(112, 6, 0)'
  );
});
