# AdSense content review

Updated 2 October 2026 after a second low-value-content rejection. The live site
already contained the September changes, so the new work focuses on the remaining
site-wide quality signals. These changes do not establish eligibility or guarantee approval.

## Implemented in this update

- Added an original revision workshop: a session calculator, worked maths,
  physics and chemistry exercises, error analysis and syllabus-checking guidance.
- Replaced three outdated software guides with concrete learning exercises,
  runnable examples, expected results and current official setup references.
- Removed displayed fabricated ratings, download counts and placeholder previews
  from the scholarly vault and entrance-test directory. Counts now use actual data.
- Distinguished external resources from Google search links and Edvvo-authored work.
- Removed empty board/past-paper choices from the resource explorer.
- Added an editorial/corrections policy and the owner-authorized public contact:
  zeeshanahmad0159@gmail.com. No expert credentials or staff identities are invented.
- Added semantic article lists and safe, readable code blocks.
- Included both new pages in navigation, metadata and sitemap generation.
  Production builds prerender full content, not just metadata. The canonical
  origin remains https://edvvo.netlify.app. Robots and sitemap are generated together.
- Preserved consent-before-analytics/ads and the configured publisher ID/ads.txt.
- Removed external-resource directories, repeated academic-field listings and the
  board/results hubs from the sitemap. They remain available to users with `noindex`.
- Limited the public guide catalog to the three tutorials that were manually rewritten
  and marked nine unreviewed legacy guides `noindex` until they can be replaced.
- Added a build failure for any indexable route with fewer than 200 visible words.
  This is a maintenance threshold, not an AdSense approval rule.
- Removed the remaining visible sample ratings, download totals, resource totals and
  fictional team bylines from shared resource and guide interfaces.
- Restricted AdSense loading to the original guides, roadmaps and study tools. Analytics
  can still run after consent on supporting pages, but ads do not load there.

## Owner review still required before requesting another review

1. Map each externally hosted textbook/PDF to its permission or license, including
   edition, distribution scope and expiry. The owner confirmed permission exists;
   the underlying documents have not been supplied or independently checked.
2. Replace or remove the nine noindexed legacy articles after subject review,
   especially legal, medical and professional guidance. Do not present introductory
   summaries as expert advice. Test external resource links and remove stale entries.
3. Verify deployed pages on mobile and desktop. Confirm real visitors can finish
   useful tasks, not simply navigate to another site's content. Maintain corrections
   based on real reports rather than inventing review activity or audience metrics.
4. Check AdSense Auto ads exclusions for utility, error, policy and non-content screens.
   Account-side ad placements and settings cannot be verified from this repository.
5. Configure Google's applicable consent requirements, including a Google-certified
   CMP where required. The custom consent banner is not a certified CMP.
6. Use genuine audience development. Do not purchase artificial visits/clicks, click
   your own ads or ask visitors to click ads. A word count, Lighthouse score, sitemap
   size or particular number of pages does not promise approval.
7. Request review only after deployment and a complete owner content/rights review.
   This work does not submit a review or assert every policy issue is resolved.

## Official references

- https://support.google.com/adsense/answer/10015918
- https://support.google.com/adsense/answer/48182
- https://support.google.com/publisherpolicies/answer/11035931
