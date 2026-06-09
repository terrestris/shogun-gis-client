import { defineConfig } from "@playwright/test";

export default defineConfig({
  globalSetup: require.resolve("./global-setup.ts"),
  testDir: "./src/e2e-tests",
  snapshotPathTemplate: "./e2e-tests/additional-files/screenshots/{arg}{ext}",
  timeout: 120 * 1000,
  expect: {
    timeout: 120 * 1000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
  use: {
    headless: false,
    // launchOptions: {
    //   slowMo: 300
    // },
    // video: 'on',
    baseURL: process.env.HOST,
    actionTimeout: 0,
    trace: "on-first-retry",
    permissions: ["geolocation"],

    ignoreHTTPSErrors: true,

    viewport: {
      width: 1200,
      height: 800,
    }
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        locale: "en-EN",
        viewport: { width: 1400, height: 850 },
        storageState: "playwright/.auth/admin.json",
      },
      dependencies: ["setup"],
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //     locale: 'en-EN'
    //   },
    //   dependencies: ['setup']
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: 'webkit',
    //     locale: 'en-EN'
    //   },
    //   dependencies: ['setup']
    // }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "./src/e2e-tests/test-results/",
});
