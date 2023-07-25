import { test } from '@playwright/test';

import { drawPoint } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawPoint';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-point', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await drawPoint(page, workerInfo);
});
