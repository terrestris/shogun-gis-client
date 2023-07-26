import { test } from '@playwright/test';

import { drawDelete } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawDelete';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-delete', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawDelete(page, workerInfo);
});
