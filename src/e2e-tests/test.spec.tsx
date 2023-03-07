import {
  test
} from '@playwright/test';

import myTest from 'shogun-e2e-tests/src/shogun-gis-client/toolbox/print';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}) => {

  // open application
  await page.goto(`${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await page.getByRole('button', {name: 'Export'}).click();

  await myTest(page);
});

