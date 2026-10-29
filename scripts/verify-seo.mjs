import fs from 'node:fs';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
const root = 'dist';
assert.ok(!fs.existsSync(`${root}/_redirects`), 'Routing must remain in netlify.toml; a public _redirects file can override its 404 and alias rules');
assert.match(fs.readFileSync('netlify.toml', 'utf8'), /to = "\/404\.html"\s+status = 404/, 'Unknown paths must return HTTP 404');
const sitemap = fs.readFileSync(`${root}/sitemap.xml`, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap entries');
const expectedIndexablePaths = ['/', '/about', '/editorial-policy', '/focus-timer', '/past-paper-tracker', '/revision-workshop', '/study-methods', '/study-plan'];
assert.deepEqual(urls.map(url => new URL(url).pathname).sort(), expectedIndexablePaths, 'Sitemap must contain only focused, original pages');
assert.equal([...sitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].length, urls.length, 'Every sitemap URL needs an accurate lastmod date');
const graph = new Map();
const bodyTexts = new Set();
for (const url of urls) {
  const { pathname, origin } = new URL(url);
  assert.equal(origin, 'https://edvvo.netlify.app');
  const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`;
  const document = new JSDOM(fs.readFileSync(`${root}/${filename}`, 'utf8')).window.document;
  assert.equal(document.querySelectorAll('link[rel=canonical]').length, 1, filename);
  assert.equal(document.querySelector('link[rel=canonical]').href, url, filename);
  assert.equal(document.querySelector('meta[property="og:url"]').content, url, filename);
  assert.ok(document.title.endsWith('| Edvvo'), filename);
  assert.ok(document.querySelector('meta[name=description]').content.length > 50, filename);
  assert.ok(!document.querySelector('meta[name=robots]').content.includes('noindex'), filename);
  assert.ok(document.querySelector('#app h1'), `${filename}: missing prerendered heading`);
  assert.ok(document.querySelector('#app').textContent.trim().length > 300, `${filename}: empty page body`);
  assert.ok(document.querySelectorAll('#app a[href]').length > 3, `${filename}: missing crawlable links`);
  assert.ok(!document.querySelector('[aria-busy="true"]'), `${filename}: unresolved loading shell`);
  const bodyText = document.querySelector('#app').textContent.replace(/\s+/g, ' ').trim();
  assert.ok(bodyText.split(/\s+/).length >= 200, `${filename}: indexable page has fewer than 200 visible words`);
  assert.ok(!bodyTexts.has(bodyText), `${filename}: duplicate page content`);
  bodyTexts.add(bodyText);
  const links = [...document.querySelectorAll('#app a[href]')].map(a => new URL(a.getAttribute('href'), url))
    .filter(link => link.origin === origin).map(link => link.pathname.replace(/\/+$/, '') || '/');
  graph.set(pathname, links);
  for (const link of links) {
    assert.ok(fs.existsSync(`${root}/${link === '/' ? 'index' : link.slice(1)}.html`) || fs.existsSync(`${root}${link}`), `${filename}: broken internal link ${link}`);
  }
  if (['/focus-timer', '/study-plan', '/revision-workshop', '/past-paper-tracker'].includes(pathname)) {
    const schema = JSON.parse(document.querySelector('#study-tool-schema').textContent);
    assert.equal(schema['@type'], 'WebApplication');
    assert.equal(schema.url, url);
  }
  for (const asset of document.querySelectorAll('script[src^="/assets/"], link[href^="/assets/"]')) {
    assert.ok(fs.existsSync(root + (asset.getAttribute('src') || asset.getAttribute('href'))), filename);
  }
}
const reached = new Set(['/']);
const queue = ['/'];
while (queue.length) {
  for (const link of graph.get(queue.shift()) || []) {
    if (!reached.has(link)) { reached.add(link); queue.push(link); }
  }
}
for (const url of urls) assert.ok(reached.has(new URL(url).pathname), `Orphan sitemap page: ${url}`);
const notFound = new JSDOM(fs.readFileSync(`${root}/404.html`, 'utf8')).window.document;
assert.match(notFound.querySelector('meta[name=robots]').content, /noindex/);
const home = fs.readFileSync(`${root}/index.html`, 'utf8');
assert.ok(!/src="https:\/\/(?:www\.googletagmanager|pagead2\.googlesyndication)/.test(home), 'Optional tracking must not bypass consent in HTML');
assert.ok(!home.includes('fonts.googleapis.com'), 'Use locally hosted fonts');
assert.ok(fs.existsSync(`${root}/fonts/manrope-latin-variable.woff2`), 'Missing local font');
assert.ok(!fs.readFileSync('netlify.toml', 'utf8').includes('from = "https://edvvo.netlify.app/*"'), 'Do not redirect the canonical Netlify domain away');
for (const file of fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html'))) {
  const doc = new JSDOM(fs.readFileSync(`${root}/${file}`, 'utf8')).window.document;
  for (const selector of ['link[rel=canonical]', 'meta[property="og:url"]', 'meta[property="og:image"]', 'meta[name="twitter:image"]']) {
    const element = doc.querySelector(selector);
    assert.equal(new URL(element.getAttribute('href') || element.getAttribute('content')).origin, 'https://edvvo.netlify.app', `${file}: ${selector}`);
  }
  const canonicalPath = new URL(doc.querySelector('link[rel=canonical]').href).pathname;
  if (file !== '404.html' && !expectedIndexablePaths.includes(canonicalPath)) assert.match(doc.querySelector('meta[name=robots]').content, /noindex/, `${file}: supporting page must be noindex`);
}
const publisher = home.match(/name="google-adsense-account" content="ca-(pub-\d+)"/)[1];
assert.ok(fs.readFileSync(`${root}/ads.txt`, 'utf8').includes(`google.com, ${publisher}, DIRECT, f08c47fec0942fa0`));
assert.ok(fs.readFileSync(`${root}/robots.txt`, 'utf8').includes('Sitemap: https://edvvo.netlify.app/sitemap.xml'));
assert.ok(!urls.some(url => url.includes('/research-papers') || url.includes('/notifications')));
console.log(`Verified ${urls.length} canonical pages, sitemap, robots, build assets, 404 noindex and AdSense publisher ID.`);
