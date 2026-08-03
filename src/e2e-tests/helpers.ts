import {
  Locator,
  Page
} from '@playwright/test';

export const switchLanguage = async (page: any, language: string) => {
  const isAlreadySet = await page.locator('#root').getByText(language).isVisible();
  if (isAlreadySet) {
    return;
  }
  await page.locator('.fa-language').click();
  await page.locator('.language-select').click();
  await page
    .locator('.ant-select-item-option-content')
    .getByText(language, { exact: true })
    .click();
  await page.locator('.fa-language').click();
};

export const closeWelcomeScreen = async (page: Page) => {
  await page.waitForLoadState('networkidle');
  const closeButton = page.getByRole('dialog').getByRole('button', { name: 'Close' });
  try {
    await closeButton.waitFor({
      state: 'visible',
      timeout: 5000
    });
    await closeButton.click();
  } catch {
    // Modal did not appear, nothing to close
  }
};

export async function highlight(locator: Locator) {
  await locator.evaluate((el) => {
    el.style.outline = '3px solid yellow';
    el.style.backgroundColor = 'yellow';
    setTimeout(() => {
      el.style.outline = '';
      el.style.backgroundColor = '';
    }, 800);
  });
}

