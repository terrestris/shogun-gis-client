import { test } from '@playwright/test';

import { searchBar } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/header/searchBar';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('search-bar', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await searchBar(page);
});
