import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

const share = async (page: any, context: any, workerInfo: any) => {
  await expect(page.getByLabel('whats-app')).toBeVisible();
  await expect(page.getByLabel('mail')).toBeVisible();
  await expect(page.getByLabel('copy')).toBeVisible();
  await expect(page.getByLabel('permalink-url')).toBeVisible();

  // test whats-app
  const whatsAppPromise = context.waitForEvent('page');
  await page.getByLabel('whats-app').click();
  const whatsApp = await whatsAppPromise;
  await expect(whatsApp).toHaveURL(/whatsapp.com/);
  whatsApp.close();

  await page.waitForLoadState('networkidle');

  await page.screenshot({
    path: './src/e2e-tests/additional-files/screenshots/permalink-'
      + workerInfo.project.name + '-linux.png'
  });

  const url = await page.getByLabel('permalink-url').locator('input').inputValue();

  await page.goto(`${url}`);
  await closeWelcomeScreen(page);
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('permalink-'
    + workerInfo.project.name
    + '-linux.png', { maxDiffPixelRatio: 0.05 });
};

test.use({
  storageState: './src/e2e-tests/.auth/admin.json'
});

test('share', async ({
  page,
  context
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Share' }).click();
  await share(page, context, workerInfo);
});
