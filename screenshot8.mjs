import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('screenshots', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(300);

// Screenshot before hover
await page.screenshot({ path: 'screenshots/btn-before.png' });

// Hover the first Learn More button
const btn = page.locator('text=Learn More').first();
await btn.hover();
await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshots/btn-hover.png' });

await browser.close();
console.log('done');
