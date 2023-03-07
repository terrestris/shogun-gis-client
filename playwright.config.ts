import {
  defineConfig
} from '@playwright/test';

export default defineConfig({
  // @ts-ignore
  globalSetup: require.resolve('./global-setup.ts'),
  testDir: './e2e-tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  // @ts-ignore
  forbidOnly: !!process.env.CI,
  retries: 4,
  // @ts-ignore
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', {
    open: 'never'
  }]],
  use: {
    // @ts-ignore
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
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
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
