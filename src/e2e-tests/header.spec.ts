import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight
} from './helpers';

export const header = async (page: any) => {
  await expect(page.getByTestId('logo')).toBeVisible();
  await highlight(page.getByTestId('logo'));
  await expect(page.getByLabel('title')).toBeVisible();
  await highlight(page.getByLabel('title'));
  await expect(page.getByLabel('search-field')).toBeVisible();
  await highlight(page.getByLabel('search-field'));
  await expect(page.getByLabel('documentation-button')).toBeVisible();
  await highlight(page.getByLabel('documentation-button'));
  await expect(page.getByLabel('user-menu')).toBeVisible();
  await highlight(page.getByLabel('user-menu'));
};

test.use({
  storageState: './src/e2e-tests/.auth/admin.json'
});

test('header', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await header(page);

});
