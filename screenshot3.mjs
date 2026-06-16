import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('screenshots', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const shots = async (name, url, scrollSteps) => {
  await page.goto(`http://localhost:5173${url}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `screenshots/${name}-top.png` });
  for (const [i, px] of scrollSteps.entries()) {
    await page.evaluate(y => window.scrollTo(0, y), px);
    await page.waitForTimeout(250);
    await page.screenshot({ path: `screenshots/${name}-s${i + 1}.png` });
  }
};

await shots('home',    '/',              [520, 1200, 2000, 2900]);
await shots('cannabis','/cannabis',      [600, 1400]);
await shots('contact', '/contact',       [500]);
await shots('about',   '/about',         [600, 1400]);

await browser.close();
console.log('done');
