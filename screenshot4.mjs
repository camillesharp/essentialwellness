import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('screenshots', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto('http://localhost:5173/weight-loss', { waitUntil: 'networkidle' });

const scrollPositions = [0, 600, 1300, 2100, 2900];
for (const [i, y] of scrollPositions.entries()) {
  await page.evaluate(pos => window.scrollTo(0, pos), y);
  await page.waitForTimeout(250);
  await page.screenshot({ path: `screenshots/wl-${i}.png` });
}

await browser.close();
console.log('done');
