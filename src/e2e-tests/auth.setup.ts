import {
  test as setup
} from '@playwright/test';

const adminFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {

  await page.goto(`${process.env.HOST}/auth/realms/SHOGun/protocol/openid-connect/auth?`
  + `client_id=shogun-client&redirect_uri=https%3A%2F%2F${process.env.HOST}%2Fclient%2F&`
  + 'state=fb97b06e-b0fa-4ce2-8a37-30d31e45ab0b&response_mode=fragment&response_type=code'
  + '&scope=openid&nonce=d23e668a-2dc9-48cf-8b22-473d0580dee0');

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
