import {
  test as setup
} from '@playwright/test';

const adminFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {

  await page.goto(`https://${process.env.HOST}/auth/realms/SHOGun/protocol/openid-connect/auth?`
  + `client_id=shogun-client&redirect_uri=https%3A%2F%2F${process.env.HOST}%2Fclient%2F&state=`
  + 'f9c5c223-1028-4496-8fdb-ae1da0f5daba&response_mode=fragment&response_type='
  + 'code&scope=openid&nonce=6cd0da9a-b45c-4a9e-931d-99b6725a148e');

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
