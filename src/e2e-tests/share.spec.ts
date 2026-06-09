import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

const share = async (page: any, context: any, workerInfo: any) => {
  function timeout(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
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

  await timeout(5000);
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/permalink-'
      + workerInfo.project.name + '-linux.png'
  });

  const url = await page.locator('#app input[type="text"]').nth(1).inputValue();

  await page.goto(`${url}`);
  await closeWelcomeScreen(page);
  await page.waitForLoadState('networkidle');

  await timeout(5000);
  await expect(page).toHaveScreenshot('permalink-'
    + workerInfo.project.name
    + '-linux.png', { maxDiffPixelRatio: 0.05 });
};

test.use({
  storageState: 'playwright/.auth/admin.json'
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
