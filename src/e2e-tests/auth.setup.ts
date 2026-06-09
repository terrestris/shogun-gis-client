import {
  test as setup
} from '@playwright/test';

const adminFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {

  await page.goto(`/admin`);

  if (await page.getByLabel('Username or email').isVisible()) {
    await page.getByLabel('Username or email').fill(`${process.env.ADMIN_LOGIN}`);
    await page.getByLabel('Password', { exact: true }).fill(`${process.env.ADMIN_PASSWORD}`);
    await page.getByRole('button', {
      name: 'Sign in'
    }).click();

    await page.waitForURL(`/admin/**`, { timeout: 15000 });
    await page.waitForLoadState('networkidle');

    await page.waitForSelector('.header-logo');

    await page.context().storageState({
      path: adminFile
    });
  }
});

// More Users can be added here
