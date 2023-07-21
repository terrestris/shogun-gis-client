import { test } from '@playwright/test';

import { annotations } from '@terrestris/shogun-e2e-tests/dist/shogun-gis-client/toolbox/annotation';
// import {header} from './header'

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({
  page
}, workerInfo) => {

  await page.goto(`https://${process.env.HOST}/client/?applicationId=${process.env.ID}`);

  await annotations(page, workerInfo);
});
