import { test } from '@playwright/test';

import { userMenu } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/header/userMenu';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}) => {

  await page.goto(`./client/?applicationId=${process.env.ID}`);

  await userMenu(page);
});
