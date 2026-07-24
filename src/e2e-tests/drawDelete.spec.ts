import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawDelete = async (page: any, workerInfo: any) => {
  // add point to map
  await page.getByRole('button', { name: 'Point' }).click();
  await page.mouse.click(500, 300, { delay: 500 });
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-delete-'
      + workerInfo.project.name + '-linux.png'
  });

  // delete point
  await page.getByRole('button', { name: 'Delete all' }).click({ delay: 1000 });
  await page.mouse.click(500, 300, { delay: 500 });

  await expect(page).not.toHaveScreenshot('draw-delete-'
    + workerInfo.project.name
    + '-linux.png', { maxDiffPixels: 100 });
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-delete', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByText('Draw').click();
  await drawDelete(page, workerInfo);
});
