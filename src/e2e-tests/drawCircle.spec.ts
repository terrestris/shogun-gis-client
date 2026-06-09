import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawCircle = async (page: any, workerInfo: any) => {
  await page.getByRole('button', { name: 'Circle' }).click();
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-circle-'
      + workerInfo.project.name + '-linux.png'
  });
  await page.mouse.click(500, 300, { delay: 500 });
  await page.mouse.click(500, 500, { delay: 500 });

  await expect(page).not.toHaveScreenshot('draw-circle-'
    + workerInfo.project.name
    + '-linux.png');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-circle', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByText('Draw').click();
  await drawCircle(page, workerInfo);
});
