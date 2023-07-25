import { test } from '@playwright/test';

import { share } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/share';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('share', async ({
  page,
  context
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await share(page, context, workerInfo);
});
