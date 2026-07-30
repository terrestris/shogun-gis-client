import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawPoint = async (page: any, workerInfo: any) => {
  await page.getByRole('button', { name: 'Point' }).click();
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-point-'
      + workerInfo.project.name + '-linux.png'
  });
  await page.mouse.click(500, 300, { delay: 2000 });

  await expect(page).not.toHaveScreenshot('draw-point-'
    + workerInfo.project.name
    + '-linux.png');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-point', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawPoint(page, workerInfo);
});
