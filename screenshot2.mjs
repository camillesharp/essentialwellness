import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const dir = 'screenshots';
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

// Services section (scroll to it)
await page.evaluate(() => window.scrollBy(0, 500));
await page.waitForTimeout(300);
await page.screenshot({ path: `${dir}/home-services.png` });

// How it works (tan section)
await page.evaluate(() => window.scrollBy(0, 900));
await page.waitForTimeout(300);
await page.screenshot({ path: `${dir}/home-howitworks.png` });

// Weight loss page — benefits (tan section)
await page.goto('http://localhost:5173/weight-loss', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollBy(0, 700));
await page.waitForTimeout(300);
await page.screenshot({ path: `${dir}/weightloss-benefits.png` });

await browser.close();
console.log('done');
