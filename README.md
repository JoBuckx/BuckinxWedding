# BuckinxWedding

Botanical, trilingual wedding information website for **Isabelle & Joris — 5 June 2027, Maastricht**.

**Stack:** Next.js + TypeScript + CSS, deployed on Vercel. No database or paid service required for the website; RSVP collection uses Google Forms with linked Google Sheets.

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and select NL, DE, or EN. `npm run build` performs a production build. Use `npm run lint` for TypeScript checking.

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Select the **Next.js** preset; leave standard build settings unchanged.
3. Deploy. The site works before RSVP form URLs are configured, showing a mailto fallback.
4. Configure `NEXT_PUBLIC_RSVP_FORM_NL`, `_DE`, and `_EN` in Vercel project Settings → Environment Variables using public Google Form responder URLs. Redeploy.
5. Attach a custom domain if desired. HTTPS is supplied through Vercel.

## What to edit

- `content/data.ts` — wedding date, venue, hotel list, map links, email, RSVP form environment variables.
- `content/translations.ts` — all NL / DE / EN text, kept parallel.
- `app/globals.css` — botanical palette, spacing, typography and mobile layout.
- `app/[lang]/page.tsx` — the content sections and layouts.
- `app/page.tsx` — language choice screen.
- `docs/CONTENT-CHECKLIST.md` — corrections and information to verify before sharing.
- `docs/ITERATIONS.md` — development history and next iterations.
- `docs/GOOGLE-FORMS-SETUP.md` — step-by-step RSVP setup (important).

## Important

This is a public site; do **not** commit guest data or private Google Sheet URLs. Google Form response submissions are managed by Google, not stored in the repo. Individual guests can submit multiple times; reconcile duplicates in the Sheet. The site includes `noindex` metadata to discourage search indexing but remains publicly accessible by URL; this is not privacy protection. Publicly displayed contact is limited to the shared wedding email.

## Content source

Based on the supplied 20-page `Wedding_Guest_Guide.docx.pdf` (NL, DE, EN). See content verification checklist for remaining confirmations and the guide's booking conditions.
