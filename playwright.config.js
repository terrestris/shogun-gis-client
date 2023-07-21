import {
  defineConfig
} from '@playwright/test';

export default defineConfig({
  globalSetup: './global-setup',
  testDir: './e2e-tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 4,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', {
    open: 'never'
  }]],
  use: {
    baseURL: process.env.HOST,
    actionTimeout: 0,
    trace: 'on-first-retry',
    permissions: ['geolocation'],

    ignoreHTTPSErrors: true,

    viewport: {
      width: 800,
      height: 600
    }
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth.setup\.ts/
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        locale: 'de-DE'
      },
      dependencies: ['setup']
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        locale: 'de-DE'
      },
      dependencies: ['setup']
    },

    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        locale: 'de-DE'
      },
      dependencies: ['setup']
    }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: './e2e-tests/test-results/'
});
