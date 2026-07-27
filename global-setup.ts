import {
    chromium, FullConfig
} from '@playwright/test';

const DEFAULT_HOST = 'https://localhost:8080';


async function globalSetup(config: FullConfig) {
    process.env.ID = '21';
    process.env.HOST = process.env.HOST ?? DEFAULT_HOST;
    process.env.ADMIN_LOGIN =  process.env.ADMIN_LOGIN;
    process.env.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
}



export default globalSetup;

