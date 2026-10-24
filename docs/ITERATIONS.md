# Iteration log and roadmap

## V1 — Initial implementation (24 October 2026)

- [x] Public botanical wedding site with warm ivory, eucalyptus green and antique-gold accents.
- [x] First-visit language welcome screen; NL / DE / EN, each with distinct routes.
- [x] Remember selected language locally and allow changing via header/footer.
- [x] NL / DE / EN wedding-day information, hotels, travel details, Maastricht highlights, RSVP and email contact.
- [x] Responsive desktop and mobile layouts.
- [x] Google Forms links per language via Vercel environment variables; email fallback before setup.
- [x] Markdown-based maintenance and Google setup documentation.

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
