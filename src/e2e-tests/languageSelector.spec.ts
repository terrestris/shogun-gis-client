import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('language-selector', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  expect(page.getByText('Karten').first()).toBeVisible();
  await switchLanguage(page, 'EN');
  await page.waitForTimeout(500);
  expect(page.getByText('Maps')).toBeVisible();
});
