import {
  test,
  expect
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

const annotations = async (page: any, workerInfo: any) => {
  await page.getByRole('button', { name: 'Anmerkung' }).click();
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-annotation-'
      + workerInfo.project.name + '-linux.png'
  });
  await page.mouse.click(500, 300, { delay: 500 });
  await expect(page.getByRole('dialog').filter({ hasText: 'Text eingeben' })).toBeVisible();
  await highlight(page.getByRole('dialog').filter({ hasText: 'Text eingeben' }));
  await expect(page.getByRole('button').filter({ hasText: 'Ok' })).toBeVisible();
  await highlight(page.getByRole('button').filter({ hasText: 'Ok' }));
  await expect(page.getByRole('button').filter({ hasText: 'Abbrechen' })).toBeVisible();
  await highlight(page.getByRole('button').filter({ hasText: 'Abbrechen' }));

  (await page.waitForSelector('.ant-input')).fill('test');

  await page.getByRole('button').filter({ hasText: 'Ok' }).click();
  await expect(page).not.toHaveScreenshot('draw-annotation-'
    + workerInfo.project.name
    + '-linux.png');

  page.reload();
  await closeWelcomeScreen(page);
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Zeichnen' }).click();
  await page.getByRole('button', { name: 'Anmerkung' }).click();
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/draw-annotation-'
      + workerInfo.project.name + '-linux.png'
  });
  await page.mouse.click(500, 300, { delay: 500 });
  await expect(page.getByRole('dialog').filter({ hasText: 'Text eingeben' })).toBeVisible();
  await highlight(page.getByRole('dialog').filter({ hasText: 'Text eingeben' }));
  await expect(page.getByRole('button').filter({ hasText: 'Ok' })).toBeVisible();
  await highlight(page.getByRole('button').filter({ hasText: 'Ok' }));
  await expect(page.getByRole('button').filter({ hasText: 'Abbrechen' })).toBeVisible();
  await highlight(page.getByRole('button').filter({ hasText: 'Abbrechen' }));

  (await page.waitForSelector('.ant-input')).fill('test');

  await page.getByRole('button').filter({ hasText: 'Abbrechen' }).click();
  await expect(page).not.toHaveScreenshot('draw-annotation-'
    + workerInfo.project.name
    + '-linux.png');
};

test('draw-annotation', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'DE');
  await page.getByRole('button', { name: 'Zeichnen' }).click();
  await annotations(page, workerInfo);
});
