import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

export const measure = async (page: any) => {
  await expect(page.getByRole('button', {
    name: 'Distance',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', {
    name: 'Distance',
    exact: true
  }));
  await expect(page.getByRole('button', {
    name: 'Area',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', {
    name: 'Area',
    exact: true
  }));

  await page.getByRole('button', {
    name: 'Distance',
    exact: true
  }).click();
  await page.mouse.move(500, 300);
  await page.mouse.click(500, 300);
  await page.mouse.move(500, 400);
  await page.mouse.click(500, 400);
  await page.mouse.move(600, 200);
  await page.mouse.dblclick(600, 200);
  await expect(page.locator('.react-geo-measure-tooltip').first()).toBeVisible();
  await page.getByRole('button', {
    name: 'Distance',
    exact: true
  }).click();
  await expect(page.locator('.react-geo-measure-tooltip').first()).toBeHidden();

  // testing area-tool
  await page.getByRole('button', {
    name: 'Area',
    exact: true
  }).click();
  await page.mouse.move(500, 300);
  await page.mouse.click(500, 300);
  await page.mouse.move(500, 400);
  await page.mouse.click(500, 400);
  await page.mouse.move(600, 200);
  await page.mouse.dblclick(600, 200);
  await expect(page.locator('.react-geo-measure-tooltip').first()).toBeVisible();
  await page.getByRole('button', {
    name: 'Area',
    exact: true
  }).click();
  await expect(page.locator('.react-geo-measure-tooltip').first()).toBeHidden();
};

test.use({
  storageState: './src/e2e-tests/.auth/admin.json'
});

test('measure', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Measure' }).click();
  await measure(page);
});
