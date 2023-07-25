import { test } from '@playwright/test';

import { layertree } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/layertree';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('layertree', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await layertree(page, workerInfo);
});
