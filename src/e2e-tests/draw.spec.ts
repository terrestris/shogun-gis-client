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
  storageState: './src/e2e-tests/.auth/admin.json'
});

export const draw = async (page: any) => {
  await expect(page.getByRole('button', {
    name: 'Point',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Point',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'Line',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Line',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'Polygon',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Polygon',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'Circle',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Circle',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'Rectangle',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Rectangle',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'Annotation',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Annotation',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'Edit',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Edit',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'draw-upload',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'draw-upload',
    exact: true
  }));
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
  await expect(page.getByRole('button', { 
    name: 'Delete all',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Delete all',
    exact: true
  }));
  await expect(page.getByRole('button', { 
    name: 'Open color palette',
    exact: true
  })).toBeVisible();
  await highlight(page.getByRole('button', { 
    name: 'Open color palette',
    exact: true
  }));
};

test('draw', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Draw' }).click();
  await draw(page);
});
