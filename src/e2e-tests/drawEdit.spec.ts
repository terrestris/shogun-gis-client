import { test } from '@playwright/test';

import { drawEdit } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawEdit';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-edit', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawEdit(page, workerInfo);
});
