import { test } from '@playwright/test';

import { drawCircle } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawCircle';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-circle', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await drawCircle(page, workerInfo);
});
