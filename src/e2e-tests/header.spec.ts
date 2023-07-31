import { test } from '@playwright/test';

import { header } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/header/header';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('header', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await header(page);

});
