# AdSense Preparation

This redesign does not establish eligibility or guarantee approval.

## Implemented
- Extended student-desk typography, surfaces, colors, focus styles and restrained motion
  to all routed pages, resource collections, article readers and shared UI controls.
- Added the missing notification index, consistent results/article navigation and a 404.
- Generated route-specific HTML titles, descriptions, Open Graph metadata and canonical
  URLs for 41 indexable pages, including all 12 learning guides. Content still renders
  through React; these HTML files provide metadata, not full server-rendered articles.
- Sitemap and robots are generated from the shared route catalog during production builds.
  The canonical origin is https://edvvo.netlify.app; old research-paper routes redirect to guides.
- Notifications are archived utility content and use noindex; they are not in the sitemap.
- Confirmed the current AdSense publisher matches public/ads.txt. Retained the current
  Analytics and Tag Manager account IDs from the repository.
- Removed unverified result-page ratings and board resource-count claims, repaired board
  portal URLs using the official BBISE directory, and removed misplaced object text from
  the first React guide.
- Clear navigation, working class shortcuts and labeled external search results.
- Removed invented testimonials and unsupported audience metrics from Home and About.
- Added a contact route using the site's existing public channels.
- Updated privacy disclosures to describe the Google scripts already in index.html.
- No new ad placements or deceptive download buttons.

## Review Before Applying
- In Netlify, set VITE_GEMINI_API_KEY if the optional quiz generator is needed. The key
  previously hardcoded in netlify.toml was removed; rotate it because it was exposed.
  A VITE-prefixed key is still public in the browser; restrict it or use a backend proxy.
- Submit https://edvvo.netlify.app/sitemap.xml in the verified Search Console property after
  deployment. Confirm the custom domain, redirects, certificate and final HTTP responses.
- Verify distribution rights for all linked books and PDFs. The vault includes commercial
  textbook titles on third-party file hosts; a link alone does not prove permission.
- Review original educational content, accuracy, attribution, and broken links across all
  legacy resource pages. Some collections remain unavailable and should not carry ads.
- Add a monitored direct contact address if available. Public social channels are currently
  the only contact information present in the repository.
- Review the privacy wording against actual hosting, Analytics, Tag Manager, chat and ad
  configuration. Server-side settings cannot be established from this repository.
- Configure and test Google's applicable consent requirements, including a certified CMP
  when required for visitors in the EEA, UK and Switzerland. No CMP is implemented here.
- Check existing AdSense auto-ad settings to avoid ads on empty, navigation-only or low-value
  screens. Keep ads distinguishable from resources and away from download controls.
- Review age-related ad settings for a site used by school students.

## Official Guidance
- https://support.google.com/adsense/answer/7299563
- https://support.google.com/adsense/answer/10502938
- https://support.google.com/adsense/answer/1348695
- https://support.google.com/adsense/answer/13554116

Design alone cannot replace content ownership, valuable original content, or policy review.

## Verification
Run npm run typecheck, npm run build, npm run verify:seo and npm test -- --run.
The SEO verifier checks every sitemap URL against the generated HTML, canonical uniqueness,
metadata, asset paths, the 404 robots directive and AdSense publisher consistency.
External references: https://bbise.edu.pk/OtherBoards and https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics.
