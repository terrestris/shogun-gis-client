import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawExport = async (page: any, workerInfo: any) => {
  await page.getByRole('button', { name: 'Rectangle' }).click();
  await page.mouse.click(500, 300, { delay: 500 });
  await page.mouse.click(400, 500, { delay: 500 });
  await page.getByRole('button', { name: 'Rectangle' }).click();

  await page.waitForLoadState('networkidle');
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-export-'
      + workerInfo.project.name + '-linux.png'
  });

  // Export file
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', {
    name: 'Export',
    exact: true
  }).click();
  const download = await downloadPromise;
  // console.log(await download.path());
  await download.saveAs('./additional-files/download-example.geojson');

  await page.reload();
  await closeWelcomeScreen(page);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Draw' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();

  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByText('Click or drag file to this').click()
  ]);

  await fileChooser.setFiles('./additional-files/download-example.geojson');
  await expect(page).toHaveScreenshot('draw-export-'
    + workerInfo.project.name
    + '-linux.png', { maxDiffPixelRatio: 0.04 });
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-export', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawExport(page, workerInfo);
});
