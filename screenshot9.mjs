import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('screenshots', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, 750));
await page.waitForTimeout(300);

// Default state — all turquoise
await page.screenshot({ path: 'screenshots/hover-default.png' });

// Hover Weight Loss button
await page.locator('text=Learn More').nth(0).hover();
await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshots/hover-wl.png' });

// Hover Wellness button
await page.locator('text=Learn More').nth(1).hover();
await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshots/hover-wellness.png' });

// Hover Aesthetics button
await page.locator('text=Learn More').nth(2).hover();
await page.waitForTimeout(400);
await page.screenshot({ path: 'screenshots/hover-aesthetics.png' });

await browser.close();
console.log('done');
