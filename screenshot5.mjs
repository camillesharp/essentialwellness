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

// Navbar + hero (top of home)
await shot('brown-home-top', '/');
// Footer (bottom of home)
await shot('brown-home-footer', '/', 9999);
// CTA banner
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1200));
await page.waitForTimeout(200);
await page.screenshot({ path: 'screenshots/brown-cta.png' });
// About page header
await shot('brown-about', '/about');
// Contact page header
await shot('brown-contact', '/contact');
// Contact "Prefer to Call" box
await shot('brown-contact-box', '/contact', 700);
// Weight loss photo placeholder
await shot('brown-wl-photo', '/weight-loss', 400);

await browser.close();
console.log('done');
