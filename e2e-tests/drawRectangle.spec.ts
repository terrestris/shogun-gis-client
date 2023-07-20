import { test } from '@playwright/test';

import { drawRectangle } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawRectangle';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}, workerInfo) => {

  await page.goto(`./client/?applicationId=${process.env.ID}`);

  await drawRectangle(page, workerInfo);
});
