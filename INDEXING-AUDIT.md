# Edvvo indexing and AdSense investigation - 30 October 2026

## Current status

- Production: `https://edvvo.netlify.app/`
- Deployed source commit: `14b722b8809f59d98a50f2b6491a2982e200f989`
- Search Console property is verified.
- Search Console reports no manual actions and no security issues.
- The current eight-URL sitemap is live and was submitted successfully. Search Console read it on 30 October and reports exactly eight discovered pages.
- Search Console's Page indexing report was last updated 23 October and still showed 29 discovered-not-indexed pages and one indexed page. That report predates this deployment.

## Root-cause conclusion

The current problem is not a robots, canonical, JavaScript-rendering, HTTP-status, manual-action or security block. Google's live test for the previous `/about` page reported that the page could be indexed, while affected URLs had `Last crawl: N/A`. The Search Console Links report also showed zero detected external links and zero detected internal links.

The evidence therefore points to a new-host discovery and quality/authority problem:

1. The site moved from the unavailable `edvvo.com` domain without redirects or a Search Console Change of Address, so the Netlify host did not inherit the old domain's signals.
2. The submitted sitemap previously exposed 30 indexable pages across unrelated subjects, including 16 similarly structured technology roadmaps and generic tutorials.
3. Google knew many URLs but had not scheduled a first crawl. A sitemap is a discovery hint, not a guarantee of crawling or indexing.
4. Search Console detected no backlinks. Backlinks cannot be manufactured safely in site code; they require genuine references from relevant websites or communities.

## Permanent remediation deployed

### Focused indexable surface

The sitemap now contains only eight original, maintained pages:

- `/`
- `/focus-timer`
- `/study-plan`
- `/revision-workshop`
- `/past-paper-tracker`
- `/study-methods`
- `/editorial-policy`
- `/about`

Roadmaps, technology tutorials, resource directories, result portals and policy utilities remain available to users but are `noindex, follow`. They are excluded from the sitemap and cannot load AdSense. This prevents broad supporting inventory from competing with Edvvo's original student tools.

### Original publisher value

- Added a private past-paper mistake tracker with marks calculation, error notes and browser-only persistence.
- Added an evidence-informed study-method guide with primary research references and practical examples.
- Reworked the homepage and global navigation around one clear purpose: planning, practising and reviewing study sessions.
- Kept the existing study planner, focus timer and worked-example revision workshop as the primary product.
- Limited ad eligibility to the homepage and five original study pages. Analytics and ads remain disabled until consent.

### Crawl and metadata controls

- Every indexable URL is prerendered with a visible heading and complete body content in the initial HTTP response.
- Every sitemap URL returns `200` directly, declares one matching self-canonical, and has `index, follow` metadata.
- Every sitemap URL has an explicit `lastmod` date matching this substantive update.
- Study tools include truthful `WebApplication` structured data.
- Unknown URLs return HTTP `404`; archived pages retain their own canonical and `noindex, follow` metadata.
- `robots.txt` permits Google Search crawling and points to the canonical sitemap.
- `ads.txt` returns `200` and lists publisher `pub-1073239228894562` as an authorized direct seller.

## Verification evidence

- TypeScript passed.
- All 52 Vitest tests passed.
- Production build and prerender passed for 77 route documents.
- The SEO regression gate passed: `Verified 8 canonical pages, sitemap, robots, build assets, 404 noindex and AdSense publisher ID.`
- Local Lighthouse mobile result: Performance 99, Accessibility 100, Best Practices 100, SEO 100; LCP 1.7 seconds, CLS 0, TBT 50 ms.
- Netlify production verification passed for all eight sitemap URLs: direct `200`, matching canonical, prerendered `h1`, and indexable robots metadata.
- Representative archived routes `/roadmaps`, `/roadmaps/web-development`, `/solutions/1` and `/privacy-policy` return `200` with `noindex, follow`.
- A random unknown production URL returns HTTP `404`.
- Production `ads.txt` returns `200` and contains the configured publisher ID.

## Search Console evidence

- Page indexing snapshot: 29 not indexed, one indexed; reason `Discovered - currently not indexed`; report last updated 23 October 2026.
- Refreshed sitemap row: success, submitted 30 October, last read 30 October, eight discovered pages.
- `/past-paper-tracker` now lists `https://edvvo.netlify.app/sitemap.xml` as its referring sitemap. Its Google-index view remains `Discovered - currently not indexed` with last crawl `N/A` until Google schedules the first crawl.
- Google's 30 October live test reports `URL is available to Google` and `Page can be indexed` for `/past-paper-tracker`.
- Links report: zero detected external links and zero detected internal links.
- Manual actions: no issues detected.
- Security issues: no issues detected.

## Required follow-through

1. Request indexing for at most the homepage and `/past-paper-tracker` when the daily quota is available; repeated requests do not accelerate crawling.
2. Wait for Search Console to update the Page indexing report. Google's documentation says crawling may take days to weeks and does not guarantee indexing.
3. Earn genuine discovery signals: link directly to the relevant tool from Edvvo's existing YouTube, Facebook and WhatsApp profiles; ask a teacher, school club or education publisher to reference a specific useful tool only if they independently find it useful. Do not buy, exchange or mass-create backlinks.
4. Collect real usage and feedback before requesting another AdSense review. A technically valid site can still be rejected when it has little original value, authority or demonstrated user interest.

## Limits

No code change can guarantee Google indexing or AdSense approval. The deployment removes the verified technical and inventory-quality weaknesses, but Google controls crawl scheduling, index selection and AdSense review. The unavailable old domain means its authority cannot be transferred without domain control and redirects.

## Official references

- Google Search crawl troubleshooting: https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google recrawl guidance: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google Publisher Policies: https://support.google.com/adsense/answer/10502938
