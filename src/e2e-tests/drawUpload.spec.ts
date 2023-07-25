import { test } from '@playwright/test';

import { drawUpload } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawUpload';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-upload', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await drawUpload(page, workerInfo);
});
