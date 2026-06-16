import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('screenshots', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const shot = async (name, url, scrollY = 0) => {
  await page.goto(`http://localhost:5173${url}`, { waitUntil: 'networkidle' });
  if (scrollY) { await page.evaluate(y => window.scrollTo(0, y), scrollY); await page.waitForTimeout(200); }
  await page.screenshot({ path: `screenshots/${name}.png` });
};

// Home
await shot('full-home-1', '/');
await shot('full-home-2', '/', 900);
await shot('full-home-3', '/', 1800);
await shot('full-home-4', '/', 9999); // footer + CTA

// Weight Loss
await shot('full-wl-1', '/weight-loss');
await shot('full-wl-2', '/weight-loss', 700);

// About
await shot('full-about-1', '/about');
await shot('full-about-2', '/about', 900);

// Contact
await shot('full-contact-1', '/contact');
await shot('full-contact-2', '/contact', 700);

await browser.close();
console.log('done');
