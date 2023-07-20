import { test } from '@playwright/test';

import { draw } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/draw';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}) => {

  await page.goto(`./client/?applicationId=${process.env.ID}`);

  await draw(page);
});
