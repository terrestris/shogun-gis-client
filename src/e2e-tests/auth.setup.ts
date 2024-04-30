import {
  test as setup
} from '@playwright/test';

const adminFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {

  await page.goto(`https://${process.env.HOST}/auth/realms/SHOGun`
    + '/protocol/openid-connect/auth?client_id=shogun-client'
    + `&redirect_uri=https%3A%2F%2F${process.env.HOST}%2Fclient%2F%3FapplicationId%3D${process.env.ID}`
    + '&state=9a983abe-3b0c-41cb-9b7e-1d9120956959&response_mode=fragment&response_type'
    + '=code&scope=openid&nonce=72884466-0535-4a24-8c15-9e7f14d88a65');

  await page.getByLabel('Username or email').fill(`${process.env.ADMIN_LOGIN}`);
  await page.getByLabel('Password').fill(`${process.env.ADMIN_PASSWORD}`);
  await page.getByRole('button', {
    name: 'Sign in'
  }).click();
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({
    path: adminFile
  });
});

// More Users can be added here
