import {
  test
} from '@playwright/test';

import { closeWelcomeScreen } from './helpers';

const searchBar = async (page: any) => {
  await page.locator('.ant-input').fill('Bonn');
  await page.getByText('Bonn, North Rhine-Westphalia, Germany').first().click({ delay: 500 });
  await page.waitForLoadState('networkidle');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('search-bar', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');

  await searchBar(page);
});
