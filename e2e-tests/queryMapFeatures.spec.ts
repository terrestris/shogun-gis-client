import { test } from '@playwright/test';

import { queryMapFeatures } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/queryMapFeatures';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}) => {

  await page.goto(`./client/?applicationId=${process.env.ID}`);

  await queryMapFeatures(page);
});
