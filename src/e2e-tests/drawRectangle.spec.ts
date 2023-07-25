import { test } from '@playwright/test';

import { drawRectangle } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawRectangle';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-rectangle', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await drawRectangle(page, workerInfo);
});
