import { test } from '@playwright/test';

import { exportPrint } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/exportPrint';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-print', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await exportPrint(page);
});
