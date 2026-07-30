import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

test.use({
  storageState: './src/e2e-tests/.auth/admin.json'
});

test('language-selector', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Karten').first()).toBeVisible();
  await switchLanguage(page, 'EN');
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Maps')).toBeVisible();
});
