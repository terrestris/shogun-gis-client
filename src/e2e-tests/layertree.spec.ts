import {
  test,
  expect,
  Page
} from '@playwright/test';

import {
  closeWelcomeScreen,
  highlight,
  switchLanguage
} from './helpers';

const openLayerContextMenu = async (page: Page) => {
  const menuButton = page.getByLabel('layer-context-menu').first();
  const menu = page.getByLabel('layer-context', { exact: true }).first();

  for (let attempt = 0; attempt < 3; attempt++) {
    await menuButton.click();

    if (await menu.isVisible()) {
      return;
    }
  }

  throw new Error('Layer context menu did not stay open.');
};

const clickLayerContextMenuItem = async (page: Page, itemName: string) => {
  const menuButton = page.getByLabel('layer-context-menu').first();
  const menuItem = page.getByRole('menuitem', { name: itemName });

  for (let attempt = 0; attempt < 5; attempt++) {
    await menuButton.click();

    try {
      await menuItem.click({ timeout: 1000 });
      return;
    } catch {
      await page.keyboard.press('Escape');
    }
  }

  throw new Error(`Could not click layer context menu item: ${itemName}`);
};

export const layertree = async (page: any, workerInfo: any) => {
  await expect(page.getByLabel('layertree')).toBeVisible();
  await expect(page.getByRole('button', { name: /Add WMS/ })).toBeVisible();
  await page.getByRole('button', { name: /Add WMS/ }).click();

  // add wms
  await expect(page.getByRole('dialog')).toBeVisible();
  await highlight(page.getByRole('dialog'));
  await expect(page.getByLabel('add-all')).toBeVisible();
  await highlight(page.getByLabel('add-all'));
  await expect(page.getByLabel('add-all')).toBeDisabled();
  await expect(page.getByLabel('add-selected')).toBeVisible();
  await highlight(page.getByLabel('add-selected'));
  await expect(page.getByLabel('add-selected')).toBeDisabled();
  await expect(page.getByLabel('Select all').nth(1)).toBeVisible();
  await expect(page.getByLabel('input-search')).toBeVisible();
  await expect(page.getByRole('combobox', { name: 'select-version' })).toBeVisible();
  await highlight(page.getByRole('combobox', { name: 'select-version' }));
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await highlight(page.getByRole('button', { name: 'Close' }));

  await page.getByLabel('input-search').fill('https://sgx.geodatenzentrum.de/wms_topplus_open');
  await page.getByRole('button', {
    name: 'search',
    exact: true
  }).click();
  await page.getByRole('checkbox', { name: 'Select all' }).check();
  await page.getByLabel('add-selected').click();

  // test layertree
  await expect(page.getByLabel('holder').first()).toBeVisible();
  await highlight(page.getByLabel('holder').first());
  await expect(page.getByLabel('caret-down').first()).toBeVisible();
  await highlight(page.getByLabel('caret-down').first());
  await expect(page.getByLabel('layer-group').filter({ hasText: 'External layers' })).toBeVisible();
  await highlight(page.getByLabel('layer-group').filter({ hasText: 'External layers' }));

  // test layertree-node
  await page.getByLabel('caret-down').first().click();
  await expect(page.getByLabel('layer-name').first()).toBeVisible();
  await highlight(page.getByLabel('layer-name').first());
  await expect(page.getByLabel('transparency-slider').first()).toBeVisible();
  await highlight(page.getByLabel('transparency-slider').first());
  await expect(page.getByLabel('layer-context-menu').first()).toBeVisible();
  await highlight(page.getByLabel('layer-context-menu').first());
  await openLayerContextMenu(page);
  await expect(page.getByLabel('layer-context', { exact: true }).first()).toBeVisible();
  await highlight(page.getByLabel('layer-context', { exact: true }).first());

  // test layer context - zoom to extent
  await page.waitForLoadState('networkidle');
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/zoom-'
      + workerInfo.project.name + '-linux.png'
  });
  await clickLayerContextMenuItem(page, 'Zoom to layer extent');
  await page.waitForLoadState('networkidle');
  await expect(page).not.toHaveScreenshot('zoom-'
    + workerInfo.project.name
    + '-linux.png');

  // test layer context - legend
  await clickLayerContextMenuItem(page, 'Show legend');
  await expect(page.getByAltText('TopPlusOpen Light Grau legend')).toBeVisible();
  await highlight(page.getByAltText('TopPlusOpen Light Grau legend'));

  // test layer context - remove layer
  await expect(page.getByLabel('layer-name').filter({ hasText: 'TopPlusOpen Light Grau' })).toBeVisible();
  await highlight(page.getByLabel('layer-name').filter({ hasText: 'TopPlusOpen Light Grau' }));
  await page.waitForLoadState('networkidle');
  await page.screenshot({
    path: './e2e-tests/additional-files/screenshots/delete-layer-'
      + workerInfo.project.name + '-linux.png'
  });
  await clickLayerContextMenuItem(page, 'Remove layer');
  await expect(page.getByLabel('layer-name').filter({ hasText: 'TopPlusOpen Light Grau' })).toBeHidden();
  await page.waitForLoadState('networkidle');
  await expect(page).not.toHaveScreenshot('delete-layer-'
    + workerInfo.project.name
    + '-linux.png');
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('layertree', async ({
  page
}, workerInfo) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');
  await switchLanguage(page, 'EN');
  await page.getByRole('button', { name: 'Maps' }).click();
  await layertree(page, workerInfo);
});
