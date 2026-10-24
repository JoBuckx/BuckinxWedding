# Iteration log and roadmap

## V1 — Initial implementation (24 October 2026)

- [x] Public botanical wedding site with warm ivory, eucalyptus green and antique-gold accents.
- [x] First-visit language welcome screen; NL / DE / EN, each with distinct routes.
- [x] Remember selected language locally and allow changing via header/footer.
- [x] NL / DE / EN wedding-day information, hotels, travel details, Maastricht highlights, RSVP and email contact.
- [x] Responsive desktop and mobile layouts.
- [x] Google Forms links per language via Vercel environment variables; email fallback before setup.
- [x] Markdown-based maintenance and Google setup documentation.


## V1.2 — Visual refresh and compare themes (24 October 2026)

- [x] Replaced the placeholder botanical SVG with the uploaded eucalyptus branch artwork.
- [x] Added the uploaded couple photo in hero/story usage.
- [x] Added the uploaded Maastricht watercolor illustration in the welcome and content sections.
- [x] Created a second design direction for comparison: **Theme B — Romantic Gallery**.
- [x] Added `/compare` plus localized preview routes for side-by-side decision-making.
- [x] Kept theme A as the default route so one candidate remains deployment-ready.

## V1.1 — Before public launch

- [ ] Add actual Google Form URLs and verify response Sheets.
- [ ] Approve final native-language wording and venue/church logistics.
- [ ] Add original invitation illustration and couple/venue images (with rights to use).
- [ ] Add a short, wedding-specific privacy statement and data retention policy.
- [ ] Do real-device and accessibility QA; check link targets and color contrast.
- [ ] Add a custom domain and choose whether to permit search indexing.

## V2 — Optional later improvements

- [ ] Custom share preview / Open Graph image.
- [ ] Calendar download file and countdown.
- [ ] Accommodation filter by city and budget.
- [ ] Translated printable one-page day itinerary.
- [ ] Small curated photo gallery.

## Architectural notes

The site intentionally has **no custom RSVP backend** or guest account. Google Forms owns submitted records, and Google Sheets acts as admin. Translation content is kept in `content/translations.ts`, factual content in `content/data.ts`; modifications should update these rather than duplicating entire pages. Dates, rates and available accommodation are not live feeds.

## V1.3 — Design A color comparison (24 October 2026)

- [x] Keep **Design A — Editorial Botanical** as the chosen layout.
- [x] Add a palette comparison bar on `/nl`, `/de`, `/en` with four options: Eucalyptus, Olive & Champagne, Rose & Terracotta, Blue & Silver.
- [x] Save selected palette locally in browser storage. No backend or Google Forms changes.
- [ ] Once a palette is approved, remove the preview bar and promote that palette to final design variables.

Color variables and overrides are at the bottom of `app/globals.css`. The comparison UI is in `components/PaletteSwitcher.tsx`.

## V1.4 — Approved palette and hotel CTA refinement

- [x] Locked in Design A, Olive & Champagne palette.
- [x] Removed temporary palette switcher.
- [x] Split Van Oys booking deadline and room-request button onto separate lines.
- [x] Made the CTA fit content instead of stretching across the text column.
- [x] Used consistent spacing for mobile and desktop views.

## Venue and Maastricht photography (24 October 2026)

- [x] Replaced the Van Oys hotel-card watercolor with an exterior photograph of Château Van Oys (Michael Huber Photography, sourced via locaties.nl).
- [x] Replaced the Discover Maastricht watercolor with an illuminated Sint Servaasbrug photograph (Henk Meijer Fotografie, via Werk aan de Muur thumbnail CDN).
- [ ] Obtain publication/reuse permission for both third-party photographs before distributing the public wedding website broadly. Their current URLs are external and could stop working; after permission, host approved optimized copies locally.
