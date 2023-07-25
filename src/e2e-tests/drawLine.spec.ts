import { test } from '@playwright/test';

import { drawLine } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawLine';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-line', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await drawLine(page, workerInfo);
});
