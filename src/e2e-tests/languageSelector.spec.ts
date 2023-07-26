import { test } from '@playwright/test';

import { languageSelector } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/languageSelector';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('language-selector', async ({
  page
}) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Language selector' }).click();
  await languageSelector(page);
});
