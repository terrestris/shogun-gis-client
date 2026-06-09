import {
  test,
  expect,
  Page
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

const isGetFeatureInfoRequest = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const requestParam = parsedUrl.searchParams.get('REQUEST') || parsedUrl.searchParams.get('request');
    return requestParam?.toLowerCase() === 'getfeatureinfo';
  } catch {
    return /getfeatureinfo/i.test(url);
  }
};

export const queryMapFeatures = async (page: Page) => {
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: 'Query map features' }).click();
  await expect(page.getByText('Click on the map to get details about the clicked coordinate.')).toBeVisible();
  await highlight(page.getByText('Click on the map to get details about the clicked coordinate.'));

  const getFeatureInfoRequest = page.waitForRequest(req => {
    return isGetFeatureInfoRequest(req.url());
  }, {
    timeout: 10000
  });

  await page.mouse.click(500, 300, { delay: 500 });
  await getFeatureInfoRequest;
  await expect(page.locator('.feature-info-tabs')).toBeVisible();
  await highlight(page.locator('.feature-info-tabs'));
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('query-map-features', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');

  await queryMapFeatures(page);
});
