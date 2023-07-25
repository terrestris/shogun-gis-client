import { test } from '@playwright/test';

import { scaleCombo } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/footer/scaleCombo';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await scaleCombo(page);
});
