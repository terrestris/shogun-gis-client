import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight
} from './helpers';

export const header = async (page: any) => {
  await expect(page.locator('[data-testid="logo"]')).toBeVisible();
  await highlight(page.locator('[data-testid="logo"]'));
  await expect(page.locator('[aria-label="title"]')).toBeVisible();
  await highlight(page.locator('[aria-label="title"]'));
  await expect(page.locator('[aria-label="search-field"]')).toBeVisible();
  await highlight(page.locator('[aria-label="search-field"]'));
  await expect(page.locator('[aria-label="documentation-button"]')).toBeVisible();
  await highlight(page.locator('[aria-label="documentation-button"]'));
  await expect(page.locator('[aria-label="user-menu"]')).toBeVisible();
  await highlight(page.locator('[aria-label="user-menu"]'));
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('header', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await header(page);

});
