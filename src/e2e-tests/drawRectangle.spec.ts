import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawRectangle = async (page: any, workerInfo: any) => {
  await page.getByRole('button', { name: 'Rectangle' }).click();
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-rectangle-'
      + workerInfo.project.name + '-linux.png'
  });

  await page.mouse.move(500, 300);
  await page.mouse.click(500, 300);
  await page.mouse.move(400, 500);
  await page.mouse.click(400, 500);

  await expect(page).not.toHaveScreenshot('draw-rectangle-'
    + workerInfo.project.name
    + '-linux.png');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-rectangle', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawRectangle(page, workerInfo);
});
