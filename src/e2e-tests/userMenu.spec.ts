import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

export const userMenu = async (page: any) => {
  await page.getByLabel('user-menu').click();
  await expect(page.getByRole('menu')).toBeVisible();
  await highlight(page.getByRole('menu'));
  await expect(page.getByText('Edit profile')).toBeVisible();
  await highlight(page.getByText('Edit profile'));
  await expect(page.getByText('Logout')).toBeVisible();
  await highlight(page.getByText('Logout'));
  await page.getByText('Logout').click();
  await expect(page).toHaveURL(/auth/);
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('user-menu', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await userMenu(page);
});
