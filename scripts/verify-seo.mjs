import fs from 'node:fs';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
const root = 'dist';
const sitemap = fs.readFileSync(`${root}/sitemap.xml`, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap entries');
assert.ok(urls.length > 30, 'Missing route coverage');
for (const url of urls) {
  const { pathname, origin } = new URL(url);
  assert.equal(origin, 'https://edvvo.com');
  const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}/index.html`;
  const document = new JSDOM(fs.readFileSync(`${root}/${filename}`, 'utf8')).window.document;
  assert.equal(document.querySelectorAll('link[rel=canonical]').length, 1, filename);
  assert.equal(document.querySelector('link[rel=canonical]').href, url, filename);
  assert.equal(document.querySelector('meta[property="og:url"]').content, url, filename);
  assert.ok(document.title.endsWith('| Edvvo'), filename);
  assert.ok(document.querySelector('meta[name=description]').content.length > 50, filename);
  assert.ok(!document.querySelector('meta[name=robots]').content.includes('noindex'), filename);
  for (const asset of document.querySelectorAll('script[src^="/assets/"], link[href^="/assets/"]')) {
    assert.ok(fs.existsSync(root + (asset.getAttribute('src') || asset.getAttribute('href'))), filename);
  }
}
const notFound = new JSDOM(fs.readFileSync(`${root}/404.html`, 'utf8')).window.document;
assert.match(notFound.querySelector('meta[name=robots]').content, /noindex/);
const home = fs.readFileSync(`${root}/index.html`, 'utf8');
const publisher = home.match(/name="google-adsense-account" content="ca-(pub-\d+)"/)[1];
assert.ok(fs.readFileSync(`${root}/ads.txt`, 'utf8').includes(`google.com, ${publisher}, DIRECT, f08c47fec0942fa0`));
assert.ok(fs.readFileSync(`${root}/robots.txt`, 'utf8').includes('Sitemap: https://edvvo.com/sitemap.xml'));
assert.ok(!urls.some(url => url.includes('/research-papers') || url.includes('/notifications')));
console.log(`Verified ${urls.length} canonical pages, sitemap, robots, build assets, 404 noindex and AdSense publisher ID.`);
