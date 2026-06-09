import {
    chromium, FullConfig
} from '@playwright/test';

async function globalSetup(config: FullConfig) {
    process.env.ID = '21';
    process.env.HOST = 'https://shogun.intranet.terrestris.de';
    process.env.ADMIN_LOGIN = 'shogun';
    process.env.ADMIN_PASSWORD = 'shogun';
}



export default globalSetup;

