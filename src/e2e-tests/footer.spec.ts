import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

export const footer = async (page: any) => {
  const cookieBanner = page.getByRole('button', { name: 'Accept cookies' });
  if (await cookieBanner.isVisible()) {
    await cookieBanner.click();
  }

  await expect(page.getByLabel('scale-line')).toBeVisible();
  await highlight(page.getByLabel('scale-line'));
  await expect(page.getByLabel('scale-combo')).toBeVisible();
  await highlight(page.getByLabel('scale-combo'));
  await expect(page.getByLabel('reference-system')).toBeVisible();
  await highlight(page.getByLabel('reference-system'));
  await expect(page.getByLabel('mouse-position')).toBeVisible();
  await highlight(page.getByLabel('mouse-position'));
};

test.use({
  storageState: './src/e2e-tests/.auth/admin.json'
});

test('footer', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  // Wait for the language switch to reflect in the UI before proceeding
  await expect(page.getByText('Maps')).toBeVisible();

  await footer(page);
});
