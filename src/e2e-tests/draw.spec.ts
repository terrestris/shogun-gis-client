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

export const draw = async (page: any) => {
  await expect(page.getByRole('button', { name: 'Point' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Point' }));
  await expect(page.getByRole('button', { name: 'Line' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Line' }));
  await expect(page.getByRole('button', { name: 'Polygon' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Polygon' }));
  await expect(page.getByRole('button', { name: 'Circle' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Circle' }));
  await expect(page.getByRole('button', { name: 'Rectangle' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Rectangle' }));
  await expect(page.getByRole('button', { name: 'Annotation' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Annotation' }));
  await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Edit' }));
  await expect(page.getByRole('button', { name: 'Upload' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Upload' }));
  await expect(page.getByRole('button', {
    name: 'Export',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', {
    name: 'Export',
    exact: true
  }));
  await expect(page.getByRole('button', {
    name: 'Delete',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', {
    name: 'Delete',
    exact: true
  }));
  await expect(page.getByRole('button', { name: 'Delete all' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Delete all' }));
  await expect(page.getByRole('button', { name: 'Open color palette' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Open color palette' }));
};

test('draw', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'draw' }).click();
  await draw(page);
});
