import { test } from '@playwright/test';

import { scan } from '@terrestris/shogun-e2e-tests/dist/accessibility/client';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('accessibility', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);
  await page.waitForTimeout(5000);

  await page.waitForLoadState('networkidle');
  await scan(page);
});
