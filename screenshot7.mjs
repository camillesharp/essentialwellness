import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('screenshots', { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

const shot = async (name, url, scrollY = 0) => {
  await page.goto(`http://localhost:5173${url}`, { waitUntil: 'networkidle' });
  if (scrollY) { await page.evaluate(y => window.scrollTo(0, y), scrollY); await page.waitForTimeout(250); }
  await page.screenshot({ path: `screenshots/${name}.png` });
};

// Home — How It Works + CTA + Footer
await shot('v-home-howitworks', '/', 2800);
await shot('v-home-cta-footer', '/', 4200);

// Weight Loss
await shot('v-wl-1', '/weight-loss');
await shot('v-wl-2', '/weight-loss', 800);

// About
await shot('v-about-1', '/about');
await shot('v-about-2', '/about', 1000);

// Contact
await shot('v-contact-1', '/contact');
await shot('v-contact-2', '/contact', 750);

await browser.close();
console.log('done');
