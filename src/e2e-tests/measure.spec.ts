import { test } from '@playwright/test';

import { measure } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/measure';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('measure', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await measure(page);
});
