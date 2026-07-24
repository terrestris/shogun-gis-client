import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawPolygon = async (page: any, workerInfo: any) => {
  await page.getByRole('button', { name: 'Polygon' }).click();
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-polygon-'
      + workerInfo.project.name + '-linux.png'
  });

  await page.mouse.move(500, 300);
  await page.mouse.click(500, 300);
  await page.mouse.move(400, 300);
  await page.mouse.click(400, 300);
  await page.mouse.move(500, 500);
  await page.mouse.click(500, 500);

  await expect(page).not.toHaveScreenshot('draw-polygon-'
    + workerInfo.project.name
    + '-linux.png');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-polygon', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawPolygon(page, workerInfo);
});
