# Indexing investigation - 19 September 2026

## Scope and deployment status

Production: https://edvvo.netlify.app/. Changes are LOCAL ONLY, not pushed or deployed.
The live site has 41 sitemap URLs; the expanded local build has 57 (including 16 individual roadmaps).
Raw live evidence: `reports/indexing/live.json`. Local HTTP evidence: `reports/indexing/local.json`.
The live audit used ordinary HTTP and a Googlebot user-agent string, not a verified request from Google's infrastructure.
Browser automation failed with "Unable to load browser request-header policy". Search Console evidence is limited to the supplied screenshot, not account access or server crawl logs.

## 1. Verified root causes and weaknesses

### Conflicting Netlify routing: real deployment bug

`public/_redirects` contained `/* /index.html 200`. Netlify processes this file before `netlify.toml`, so it intercepted the intended alias redirects and unknown-page 404 rule. Vite copied it into every deployment.
Live requests to `/not-a-real-edvvo-page`, `/roadmaps/invalid`, `/solutions/invalid`, `/research-papers`, and `/board/scholarly-vault` returned HTTP 200 and indexable homepage metadata instead of the intended 404/301 responses. `/about.html` also returned homepage metadata. These are soft-404/duplicate-content risks; the screenshot does NOT establish that Google classified them as soft 404s.
Some subsequent variation requests timed out or failed DNS in the audit environment. Successful separate retries confirmed the above statuses; transport failures are not recorded as website HTTP 5xx errors.

Fix: deleted the conflicting file, retained one routing authority in `netlify.toml`, and made verification fail if `_redirects` reappears in the deployment output.

### URL shape disagreed with canonical URLs

All 40 non-homepage sitemap URLs redirected once (301) to a trailing-slash URL. Their HTML declared a slashless canonical, pointing back to the redirecting address. The generator emitted directory `index.html` files, causing the mismatch on Netlify. The homepage returned 200 directly.

Fix: generate document files such as `about.html` and `solutions/1.html` for the existing extensionless canonical URLs. Disable Netlify post-processing so dashboard Pretty URL rewriting does not silently change the build's link shape. This follows Netlify's file-based URL resolution; final edge behavior must still be tested after an authorized deployment. Query variations continue to canonicalize to the main page; query-driven functionality is retained.

### No page content or links in the initial response

All 41 live documents had an empty `#app`, zero headings, and zero app links before JavaScript. Their titles and canonical tags differed, but the body was the same empty shell. The previous build generated metadata copies, not actual page HTML.

Fix: prerender the real shared React routes at build time, waiting for lazy modules. All 73 documents now contain page content; 57 are eligible for the sitemap, and archived notifications and the 404 document remain noindex. This is the same content served to all visitors, not bot-specific cloaking. Interactive controls still require JavaScript. Google can render JavaScript, so CSR alone is not proof of why these particular URLs were not crawled.

### Three pages lacked crawlable incoming links

The local rendered link graph initially could not reach `/board/punjab-board`, `/engineering-programs`, or `/applied-science-programs` from `/`. Added a contextual board link and replaced program-card JavaScript-only navigation with semantic links. All 57 sitemap pages are now reachable from the homepage through HTML links.

## 2. Why the problem seemed to recur

Submitting a sitemap did not remove the routing file, change the directory-based output, or render the empty bodies. Every build reproduced those weaknesses. Search Console updates later, so a later report can expose a persistent issue rather than a new regression.

There is NO evidence here that pages were indexed and then removed after several days. The supplied report says **Discovered - currently not indexed**, with **Last crawled: N/A**. Google's crawl scheduling reason cannot be established from that screenshot. The earlier edvvo.com sitemap mismatch is a separate historical issue: all 41 current live sitemap URLs already use the correct Netlify domain.

## 3. Changes and regression prevention

- `build/seo.ts`: extensionless-document output using flat HTML files; existing canonical domain and route-derived sitemap retained.
- `src/entry-server.tsx` and `scripts/prerender.mjs`: render real routes, fail on rendering errors, timeout, missing heading, or unexpected app template.
- `package.json`: normal `npm run build` now runs Vite, prerendering, then SEO verification. Netlify already uses this command.
- `scripts/verify-seo.mjs`: fail on routing-file conflicts, empty/loading-only content, exact duplicate bodies, missing links, broken internal targets, orphan sitemap pages, missing assets, bad canonical/meta/schema/domain, or incorrect noindex behavior.
- Study planner's initial storage read now permits server rendering.
- `scripts/audit-indexing.mjs`: reusable live HTTP audit of every sitemap URL, both user agents, redirects, metadata, raw content, and representative variations.

No fabricated lastmod values are generated. The sitemap has no lastmod rather than claiming every deployment is a content update. Canonical origin is fixed in source, not inherited from a preview hostname or environment variable. These checks prevent the identified code regressions in the standard build; bypassing the build or changing hosting configuration still requires deployment validation.

## 4. Verification

- Production build, TypeScript, and all 49 unit/component tests passed.
- Fresh Lighthouse 12.8.2 mobile checks on this build: About 99/100/100/100 and Data Engineering 94/100/100/100 (performance/accessibility/best practices/SEO), no warnings. These are two local first-visit samples before optional tracking consent, not sitewide or production scores.
- All 57 local sitemap URLs returned HTTP 200 without redirects through Vite preview and included their own canonical URL and prerendered heading.
- All 57 have distinct complete body text, no noindex, matching social URLs, and valid assets.
- All 57 are reachable through HTML links from `/`; no broken internal HTML links were found.
- Two consecutive clean builds produced byte-identical sitemap, robots.txt, and all 73 HTML documents.
- The 404 output is rendered and noindex. Its **Netlify HTTP 404 status remains a post-deployment check**; Vite preview is not Netlify's redirect engine.
- All 41 live sitemap destinations ultimately returned 200, none had noindex/X-Robots-Tag restrictions, and the two user agents yielded identical recorded content and SEO fields.
- robots.txt permits Googlebot on all sitemap paths. Its Google-Extended block is separate from Google Search's Googlebot. CSS/JS paths are not blocked.
- No 403/410/429/5xx response or redirect loop was observed for the 41 live sitemap URLs in this sample. This is not an uptime history or proof that a verified Googlebot IP is never blocked.
- HTTP `/about` redirects to HTTPS. `www.edvvo.netlify.app` did not resolve from the audit environment; it is not the configured canonical host. No links or sitemap entries use it.
- Responses identify Netlify. No Cloudflare integration is configured in this repository; Netlify account firewall/rate-limit settings and historical crawler logs were not available.

## 5. Affected URLs and observed exclusions

All 41 live URLs had empty initial app bodies; all 40 non-root URLs had the slash/canonical mismatch. The complete list is in `reports/indexing/live.json` under `pages`.
The screenshot confirms 40 discovered-not-indexed URLs, but names only these ten: `/about`, `/academic-explorer`, `/agriculture-vet`, `/applied-science-programs`, `/architecture-design`, `/board/punjab-board`, `/business-finance`, `/computer-science`, `/contact`, `/education`. Do not assume the screenshot's remaining 30 identities solely from the sitemap.

Notifications intentionally remain noindex and outside the sitemap. Old `/research-papers` aliases and `/board/scholarly-vault` belong in redirects, not the sitemap. Unknown slugs must be 404/noindex. No evidence was available for Google-selected canonical differences, manual actions, crawled-not-indexed, blocked-by-robots, or other Search Console categories beyond the supplied report.

Exact duplicate bodies are now rejected. This is not a semantic near-duplicate/content-quality certification. Resource directories and tool pages have less editorial content than learning guides. Verify resource rights, maintained links, authorship and original usefulness; technical eligibility and Lighthouse scores do not guarantee ranking, indexing, or AdSense approval. External outbound references are not earned backlinks.

## 6. Remaining Google and deployment work

1. With approval, publish these changes using the full build command, not a manually assembled dist folder.
2. Run `node scripts/audit-indexing.mjs` against production again. Require direct 200 at all 57 sitemap URLs, canonical equality, populated HTML, working assets, proper 301 aliases, and 404/noindex for unknown URLs. Recheck slash and .html variants at the actual edge.
3. Inspect representative URLs in Search Console's live test, compare Google's rendered HTML and selected canonicals, and examine Crawl Stats and Netlify request logs if discovery still stalls.
4. The existing submitted `/sitemap.xml` address can stay the same. A resubmission is not the repair. Validate only after deployed responses pass; request indexing selectively, not as a repeated workaround.
5. Google must still fetch, render if needed, evaluate quality/canonicalization, and decide whether to index. There is no guaranteed deadline or indexing promise.

Status: **locally technically verified**, **not deployed**, previous sitemap **submitted per screenshot**, affected examples **not crawled per screenshot**, **indexing not confirmed**. Existing preview/branch deployments should be protected from indexing at the hosting layer; production canonical tags alone are not access control.

## References

- [Netlify redirect processing order](https://docs.netlify.com/manage/routing/redirects/overview/)
- [Netlify request chain and file matching](https://docs.netlify.com/resources/troubleshooting/request-chain/)
- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google Page Indexing report definitions](https://support.google.com/webmasters/answer/7440203)
