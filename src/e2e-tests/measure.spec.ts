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
  await expect(page.getByRole('button', { name: 'Distance' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Distance' }));
  await expect(page.getByRole('button', { name: 'Area' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Area' }));

  await page.getByRole('button', { name: 'Distance' }).click();
  await page.mouse.move(500, 300);
  await page.mouse.click(500, 300);
  await page.mouse.move(500, 400);
  await page.mouse.click(500, 400);
  await page.mouse.move(600, 200);
  await page.mouse.dblclick(600, 200);
  await page.waitForSelector('.react-geo-measure-tooltip');
  await page.getByRole('button', { name: 'Distance' }).click();
  await page.waitForSelector('.react-geo-measure-tooltip', { state: 'hidden' });

  // testing area-tool
  await page.getByRole('button', { name: 'Area' }).click();
  await page.mouse.move(500, 300);
  await page.mouse.click(500, 300);
  await page.mouse.move(500, 400);
  await page.mouse.click(500, 400);
  await page.mouse.move(600, 200);
  await page.mouse.dblclick(600, 200);
  await page.waitForSelector('.react-geo-measure-tooltip');
  await page.getByRole('button', { name: 'Area' }).click();
  await page.waitForSelector('.react-geo-measure-tooltip', { state: 'hidden' });
};

test.use({
  storageState: 'playwright/.auth/admin.json'
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
