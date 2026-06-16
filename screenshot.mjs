import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const dir = 'screenshots';
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());

const routes = [
  ['home', '/'],
  ['weight-loss', '/weight-loss'],
  ['cannabis', '/cannabis'],
  ['about', '/about'],
  ['contact', '/contact'],
];

for (const [name, path] of routes) {
  await page.goto(`http://localhost:5173${path}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${dir}/${name}.png`, fullPage: false });
  console.log(`✓ ${name}`);
}

await browser.close();
