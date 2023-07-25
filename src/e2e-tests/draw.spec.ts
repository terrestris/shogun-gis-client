import { test } from '@playwright/test';

import { draw } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/draw';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await draw(page);
});
