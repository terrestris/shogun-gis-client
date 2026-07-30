import {
  test,
  expect
} from '@playwright/test';

import { closeWelcomeScreen, highlight } from './helpers';

export const scaleCombo = async (page: any) => {
  const initialScaleCombo = await page.getByLabel('scale-combo').innerText();
  const initialScaleLine = await page.getByLabel('scale-line').innerText();

  await expect(page.getByLabel('scale-combo').filter({
    hasText: initialScaleCombo[0].toString()
  })).toBeVisible();
  await highlight(page.getByLabel('scale-combo').filter({
    hasText: initialScaleCombo[0].toString()
  }));
  await expect(page.getByLabel('scale-line').filter({
    hasText: initialScaleLine[0].toString()
  })).toBeVisible();
  await highlight(page.getByLabel('scale-line').filter({
    hasText: initialScaleLine[0].toString()
  }));

  await page.getByText('Akzeptieren').click();
  await page.getByLabel('scalecombo-dropdown').filter({
    hasText: /1:/
  }).click();
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('Enter');

  const changedScaleCombo = await page.getByLabel('scale-combo').innerText();
  const changedScaleLine = await page.getByLabel('scale-line').innerText();

  await expect(page.getByLabel('scale-combo').filter({
    hasText: changedScaleCombo[0].toString()
  })).toBeVisible();
  await highlight(page.getByLabel('scale-combo').filter({
    hasText: changedScaleCombo[0].toString()
  }));
  await expect(page.getByLabel('scale-line').filter({
    hasText: changedScaleLine[0].toString()
  })).toBeVisible();
  await highlight(page.getByLabel('scale-line').filter({
    hasText: changedScaleLine[0].toString()
  }));

  await expect(initialScaleCombo).not.toEqual(changedScaleCombo);
  await expect(initialScaleLine).not.toEqual(changedScaleLine);
};

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('scale-combo', async ({
  page
}) => {

  await page.goto(`/client/?applicationId=${process.env.ID}`);
  await closeWelcomeScreen(page);

  await page.waitForLoadState('networkidle');

  await scaleCombo(page);
});
