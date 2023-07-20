import { test } from '@playwright/test';

import { layertree } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/layertree';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}, workerInfo) => {

  await page.goto(`./client/?applicationId=${process.env.ID}`);

  await layertree(page, workerInfo);
});
