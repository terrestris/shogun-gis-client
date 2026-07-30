import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawUpload = async (page: any, workerInfo: any) => {
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-upload-'
      + workerInfo.project.name + '-linux.png'
  });
  await page.getByRole('button', { name: 'Upload' }).click();

  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByText('Click or drag file to this').click()
  ]);

  await fileChooser.setFiles('node_modules/@terrestris/shogun-e2e-tests/dist/additional-files/download-example.geojson');
  await expect(page).not.toHaveScreenshot('draw-upload-'
    + workerInfo.project.name
    + '-linux.png');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-upload', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawUpload(page, workerInfo);
});
