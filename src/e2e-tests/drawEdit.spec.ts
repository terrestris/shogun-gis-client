import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  switchLanguage
} from './helpers';

export const drawEdit = async (page: any, workerInfo: any) => {
  // add point to map
  await page.getByRole('button', { name: 'Point' }).click();
  await page.mouse.click(500, 300, { delay: 500 });
  await page.screenshot({
    path: './src/e2e-tests/additional-files/screenshots/draw-edit-'
      + workerInfo.project.name + '-linux.png'
  });

  // modify point
  await page.getByRole('button', {
    name: 'Edit',
    exact: true
  }).click({ delay: 1000 });
  await expect(page.getByRole('button', {
    name: 'Edit',
    exact: true
  })).toHaveAttribute('aria-pressed', 'true');
  await page.mouse.click(500, 300, { delay: 500 });

  await page.mouse.move(500, 300);
  await page.mouse.down();
  await page.mouse.move(500, 400, { steps: 5 });
  await page.mouse.up();
  await page.mouse.click(500, 300, { delay: 500 });

  await expect(page).not.toHaveScreenshot('draw-edit-'
    + workerInfo.project.name
    + '-linux.png', { maxDiffPixels: 100 });
};

test.use({
  storageState: './src/e2e-tests/.auth/admin.json'
});

test('draw-edit', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await drawEdit(page, workerInfo);
});
