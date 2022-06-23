import {
  test,
  expect
} from '@playwright/test';

test.describe('Basic application tests', () => {
  test.beforeEach(async ({
    page
  }) => {
    await page.goto('/');
  });

  test('it has set the correct title', async ({
    page
  }) => {
    await expect(page).toHaveTitle('SHOGun Client');
  });

  test('it renders the most important components', async ({
    page
  }) => {
    await Promise.all([
      page.waitForSelector('div#map'),
      page.waitForSelector('canvas')
    ]);

    await expect(page.locator('div#map').first()).toBeVisible();
    await expect(page.locator('canvas').first()).toBeVisible();
    await expect(page.locator('div.header').first()).toBeVisible();
    await expect(page.locator('div.footer').first()).toBeVisible();
    await expect(page.locator('div.react-geo-nominatimsearch').first()).toBeVisible();
  });

  test('it successfully loads the example WMS layer', async ({
    page
  }) => {
    const [, response] = await Promise.all([
      page.waitForSelector('canvas'),
      page.waitForResponse(/https:\/\/gibs.earthdata.nasa.gov/),
      page.mouse.dblclick(400, 400)
    ]);

    expect(response.status()).toBe(200);
  });

  test('it successfully loads the OSM background layer', async ({
    page
  }) => {
    const [, response] = await Promise.all([
      page.waitForSelector('canvas'),
      page.waitForResponse(/tile.openstreetmap.org/),
      page.mouse.dblclick(400, 400)
    ]);

    expect(response.status()).toBe(200);
  });
});
