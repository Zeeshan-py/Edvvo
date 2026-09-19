import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { JSDOM } from 'jsdom';

const origin = process.env.AUDIT_ORIGIN || 'https://edvvo.netlify.app';
const agents = { browser: 'Mozilla/5.0 SEO-Verification', googlebot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' };
async function inspect(path, agent) {
  let url = new URL(path, origin).href;
  const chain = [];
  try {
    for (let i = 0; i < 8; i++) {
      const response = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': agent }, signal: AbortSignal.timeout(20000) });
      chain.push({ url, status: response.status, location: response.headers.get('location') });
      if (response.status >= 300 && response.status < 400 && response.headers.has('location')) {
        url = new URL(response.headers.get('location'), url).href;
        await response.body?.cancel();
        continue;
      }
      const html = await response.text();
      const document = new JSDOM(html, { url }).window.document;
      const body = document.querySelector('#app');
      return { chain, canonical: document.querySelector('link[rel=canonical]')?.href, robots: document.querySelector('meta[name=robots]')?.content,
        xRobots: response.headers.get('x-robots-tag'), server: response.headers.get('server'), title: document.title,
        bodyCharacters: body?.textContent.trim().length || 0, headings: [...document.querySelectorAll('h1')].map(h => h.textContent),
        links: [...document.querySelectorAll('#app a[href]')].map(a => a.href), bodyHash: createHash('sha256').update(body?.innerHTML || '').digest('hex') };
    }
    return { chain, error: 'Too many redirects' };
  } catch (error) { return { chain, error: error.message }; }
}
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error(`Sitemap HTTP ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
if (!urls.length) throw new Error('Empty or invalid sitemap');
const report = { checkedAt: new Date().toISOString(), origin, robots: await (await fetch(`${origin}/robots.txt`)).text(), sitemap, pages: [], variations: [] };
for (const url of urls) {
  const path = new URL(url).pathname;
  const results = {};
  for (const [name, agent] of Object.entries(agents)) results[name] = await inspect(path, agent);
  report.pages.push({ url, ...results });
  console.log(path, results.browser.chain.map(r => r.status).join(' -> '), `body=${results.browser.bodyCharacters}`);
}
for (const path of ['/about/', '/about.html', '/about?utm_source=audit', '/research-papers', '/board/scholarly-vault', '/not-a-real-edvvo-page', '/roadmaps/invalid', '/solutions/invalid', '/notifications', 'http://edvvo.netlify.app/about', 'https://www.edvvo.netlify.app/']) {
  report.variations.push({ path, ...await inspect(path, agents.browser) });
}
await fs.mkdir('reports/indexing', { recursive: true });
const name = new URL(origin).hostname === 'edvvo.netlify.app' ? 'live' : 'local';
await fs.writeFile(`reports/indexing/${name}.json`, JSON.stringify(report, null, 2));
console.log(`Saved reports/indexing/${name}.json (${urls.length} URLs, two user agents). A spoofed user agent is not verified Googlebot.`);
