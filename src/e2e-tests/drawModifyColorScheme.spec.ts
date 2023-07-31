import { test } from '@playwright/test';

import { drawModifyColorScheme } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/drawModifyColorScheme';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-modify', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawModifyColorScheme(page);
});
