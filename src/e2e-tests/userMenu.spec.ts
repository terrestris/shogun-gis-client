import { test } from '@playwright/test';

import { userMenu } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/header/userMenu';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('user-menu', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await userMenu(page);
});
