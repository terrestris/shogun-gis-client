import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

export const drawModifyColorScheme = async (page: any) => {
  await page.getByRole('button', { name: 'Open color palette' }).click();
  await expect(page.getByRole('dialog').filter({ hasText: 'Style' })).toBeVisible();
  await highlight(page.getByRole('dialog').filter({ hasText: 'Style' }));
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('draw-modify', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawModifyColorScheme(page);
});
