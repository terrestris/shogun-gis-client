import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

export const exportPrint = async (page: any) => {
  await expect(page.getByLabel('print-title', { exact: true })).toBeVisible();
  await highlight(page.getByLabel('print-title', { exact: true }));
  await expect(page.getByLabel('print-comment', { exact: true })).toBeVisible();
  await highlight(page.getByLabel('print-comment', { exact: true }));
  await expect(page.getByLabel('print-layout', { exact: true })).toBeVisible();
  await highlight(page.getByLabel('print-layout', { exact: true }));
  await expect(page.getByLabel('print-scale', { exact: true })).toBeVisible();
  await highlight(page.getByLabel('print-scale', { exact: true }));
  await expect(page.getByLabel('print-dpi', { exact: true })).toBeVisible();
  await highlight(page.getByLabel('print-dpi', { exact: true }));
  await expect(page.getByLabel('print-format', { exact: true })).toBeVisible();
  await highlight(page.getByLabel('print-format', { exact: true }));
  await expect(page.getByLabel('create-print', { exact: true })).toBeVisible();
  await highlight(page.getByLabel('create-print', { exact: true }));

  await page.getByLabel('print-title-input').fill('My Test');
  await page.getByLabel('print-comment-input').fill('My comment using special characters: öäü!"§²%&[}=?*#');

  const downloadPromise = page.waitForEvent('download');
  await page.getByLabel('create-print').click();
  const download = await downloadPromise;
  await download.saveAs('./additional-files/print-download-example.pdf');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-print', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Export' }).click();
  await exportPrint(page);
});
