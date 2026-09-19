# Roadmaps and search discovery

Production origin: https://edvvo.netlify.app/

These changes are local only. No deployment or push is included.

## Included

- Sixteen distinct roadmap URLs, including Python and data analysis, Android development, cloud and DevOps, and web accessibility.
- Four additional professional paths: Data Engineering, Applied Machine Learning, QA and Test Automation, and Business Intelligence. Each has prerequisites, six practical stages, readiness checkpoints and a portfolio deliverable. These are learning guides, not professional certifications or promises of employment.
- Original practice exercises, completion checkpoints and portfolio deliverables, with relevant official documentation links.
- Related-roadmap, study-tool and project-guide links with descriptive anchor text.
- Unique titles, descriptions, canonical URLs, social metadata and breadcrumb structured data. Lesson query parameters canonicalize to their parent roadmap.
- All roadmap URLs are generated into sitemap.xml. robots.txt references the Netlify sitemap.
- Legacy `?path=<id>&step=<number>` bookmarks still open the corresponding lesson.
- Page-level code splitting and on-demand homepage search data, so unrelated lessons and library datasets are not downloaded on first load.
- Locally hosted, licensed Manrope font removes the external render-blocking stylesheet request. Motion remains, while the headline is visible immediately.
- Optional analytics and advertising load only after acceptance. Visitors can decline without losing study tools, and change their choice through the footer. Withdrawal reloads the page to stop already-running tags.

## Genuine backlinks

Outbound source links are not backlinks. An inbound backlink exists only when another website links to Edvvo. No external posts or link placements were made.

After publishing and reviewing the content:

1. Share a relevant roadmap with a teacher or student society that already maintains a resource page. Ask for feedback, not a mandatory reciprocal link.
2. Publish a real student project following a roadmap, then cite the roadmap naturally in the project's README or write-up.
3. Offer useful corrections or original exercises to education communities where resource-sharing is allowed. Disclose your connection to Edvvo.

Do not buy ranking links, mass-submit comments, or use automated link exchanges. See Google's [link-spam policy](https://developers.google.com/search/docs/essentials/spam-policies#link-spam).

## Validation

Expanded-catalog validation, September 18, 2026: TypeScript checking, the production build, all 49 tests and SEO checks for 57 canonical pages pass. The directory now links all 16 paths; tests exercise the prerequisites, portfolio outcomes and final stage of each new professional roadmap.

Baseline verified September 17-18, 2026 with Lighthouse 12.8.2 before the four additional professional paths. All 14 baseline reports referenced that build and had no run warnings. This table is historical, not a new measurement of the expanded catalog.

| Profile | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 95-99 | 100 | 96-100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Scope: homepage, roadmap directory, all four new roadmap pages, and resource library. These are fresh-visit, pre-consent scores, not an audit of every route or accepted-advertising state. The library's mobile Best Practices deduction is for small text, not a runtime error. All 45 tests, TypeScript checking and generated SEO checks for 53 canonical pages pass. Existing roadmap lessons were compared with the original repository version and preserved.

Run `npm run typecheck`, `npm test -- --run`, `npm run build`, and `npm run verify:seo`.
Audit the production build, not the Vite development server. Start `npx vite preview --host 127.0.0.1 --port 4173`.

Install isolated audit tooling with `npm install --prefix .cache/audit --no-audit --no-fund --ignore-scripts lighthouse@12.8.2`, then run `node scripts/audit-lighthouse.mjs`. Chrome must be installed; `CHROME_PATH` can point to its executable. The runner audits seven representative URLs on mobile and desktop and fails if any category is 80 or lower. Pass specific paths to narrow a rerun. `AUDIT_ORIGIN`, `AUDIT_PROFILES` and `LIGHTHOUSE_CLI` are optional overrides.

HTML and JSON audit reports are written to the ignored `reports/lighthouse/` directory. No analytics or advertising requests are blocked by the audit runner.
The default audit measures a fresh visit before consent. Accepted-consent visits can score lower because Google's advertising services use third-party cookies. Do not describe a first-visit score as a guarantee for every consent state.

The local consent control is not an IAB TCF-certified CMP. Configure a [Google-certified CMP](https://support.google.com/adsense/answer/13554116) for applicable advertising regions before launch. It does not guarantee legal compliance or AdSense approval. Review the existing GTM container to avoid duplicate GA4 configuration; the code retains the provided GA4 and GTM IDs.

Lighthouse scores depend on device, network, browser and third-party scripts. A local score is not a guarantee of a deployed score or AdSense approval. Recheck the deployed URLs after an authorized release; this change does not authorize a release.
