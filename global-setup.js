import {
  FullConfig
} from '@playwright/test';

import 'dotenv/config';

async function globalSetup() {
  process.env.ID
  process.env.HOST
  process.env.ADMIN_LOGIN
  process.env.ADMIN_PASSWORD
}

export default globalSetup;
