import { test } from '@playwright/test';

import { footer } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/footer/footer';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}) => {

  await page.goto(`./client/?applicationId=${process.env.ID}`);

  await footer(page);
});
