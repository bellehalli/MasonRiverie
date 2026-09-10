# Maison Rivière — Five-Pass QA Audit

## Audit 1 — Internal links & asset paths
PASS after final check. All local href/src references resolve to files in the package.

## Audit 2 — HTML structure & accessibility
PASS after remediation. Every page has a title, meta description, one H1, accessible menu button, and alt text on all site images.

## Audit 3 — Local HTTP rendering
PASS. Home, Weddings, Estate, Experience, Gallery, Investment, Wedding Builder, Contact, and 404 pages all returned HTTP 200 from a local static server.

## Audit 4 — Responsive design checks
PASS. Mobile breakpoints at 960px and 640px, fluid typography with clamp(), responsive images, and viewport meta tags are present across all pages.

## Audit 5 — GitHub / deployment packaging
PASS. No temp/log/junk files, no individual file exceeds GitHub's 100MB per-file hard limit, required entry files are present, and the project has no dependency/build requirement.

## Deployment note
This is a dependency-free static website. Upload the folder contents to a GitHub repository. On Vercel use Framework Preset: Other, no build command, output directory ./.
