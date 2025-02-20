import 'dotenv/config';
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
  env: {
    ENV: process.env.ENV,
    HOST: process.env.HOST,
    ID: process.env.ID,
    ADMIN_LOGIN: process.env.ADMIN_LOGIN,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
});

