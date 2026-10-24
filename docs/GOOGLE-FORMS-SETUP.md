# Google Forms + Google Sheets RSVP — Setup guide

The site is already prepared to link to **three Google Forms** (NL, DE, EN). All responses can be viewed in Google Sheets. This avoids database hosting, paid form subscriptions, or custom backend code.

## A. Create the first Google Form

1. Sign into the Google account that should own the wedding responses. Open [forms.google.com](https://forms.google.com), select **Blank form**.
2. Name it `BuckinxWedding RSVP — NL`. Set its description to mention **5 juni 2027** and the response deadline **1 maart 2027**.
3. Add these questions and suggested answer types:
   - `Voor- en achternaam` — **Short answer**, required.
   - `E-mailadres` — **Short answer**, required, enable email validation where available.
   - `Ben je aanwezig op onze trouwdag?` — **Multiple choice** (`Ja`, `Nee`), required.
   - `Aantal volwassenen (inclusief jezelf)` — **Dropdown** (1, 2, 3, 4, 5, 6; adjust for your invitations). Use conditional sections so this only appears for attendees.
   - `Namen van andere aanwezigen` — **Paragraph**, optional.
   - `Aantal kinderen` — **Dropdown** (0, 1, 2, 3, 4, 5), attendee section.
   - `Dieetwensen of voedselallergieën (voor wie?)` — **Paragraph**, optional, attendee section.
   - `Andere opmerkingen` — **Paragraph**, optional.
4. Use **sections** and “Go to section based on answer” to skip attendance details for guests selecting `Nee`. Test both paths.
5. Under Settings, do **not** enable “Limit to 1 response” (it requires Google sign-in). Avoid asking guests to sign in. Ensure respondents can access the published form and that results and summary charts are not shared with respondents. If email collection is enabled, choose respondent input rather than verified sign-in, or retain the required email question.
6. Customize the form header to match the wedding palette (dark botanical green and ivory), and add a gracious confirmation message. Do **not** enable public response summaries.
7. **Publish** the form, allow anyone with the link to respond, copy its **responder** link (not the editor link). Open that link in a private/incognito browser and submit a test response.

## B. Create the German and English forms

1. Duplicate the first form twice, rename to `BuckinxWedding RSVP — DE` and `BuckinxWedding RSVP — EN`.
2. Translate all question titles, instructions, choices, validation messages and confirmation messages. Keep the same order and answer meanings across all three forms.
3. Publish each form, copy each responder link, verify submission in an incognito window.
4. Suggestions for question labels:

| Field | NL | DE | EN |
|---|---|---|---|
| Name | Voor- en achternaam | Vor- und Nachname | Full name |
| Email | E-mailadres | E-Mail-Adresse | Email address |
| Attending? | Ben je aanwezig? | Bist du dabei? | Will you attend? |
| Adults | Aantal volwassenen | Anzahl Erwachsene | Number of adults |
| Children | Aantal kinderen | Anzahl Kinder | Number of children |
| Other names | Andere aanwezigen | Weitere Gäste | Other guests |
| Dietary | Dieetwensen / allergieën | Ernährung / Allergien | Dietary needs / allergies |

## C. Store submissions in Google Sheets

1. In **each Form**, open **Responses** and choose **Link to Sheets**.
2. For the NL form, create a new spreadsheet named `BuckinxWedding - Guest Responses`.
3. For DE and EN, choose **Select existing spreadsheet** and select the spreadsheet created in the previous step. Each Form should create a separate response tab. Rename tabs to `NL Responses`, `DE Responses`, and `EN Responses` if Google Sheets permits it (form linkage should remain intact).
4. Share this spreadsheet **privately** with Isabelle as an editor. Never select “Anyone with the link” for the sheet.
5. Optionally create a manual `Guest Overview` tab to consolidate all languages. Columns should include: timestamp, language, guest name, email, attending, adults, children, extra names, allergies, notes, and review status. Google Sheets formulas can combine tabs, but headings vary by language; map columns deliberately before using a formula.
6. In the Forms' response settings, you may enable an email notification for new submissions. Review the Sheet regularly, identify duplicate addresses/names, and decide which response is current.

## D. Connect the forms to the site on Vercel

In Vercel → Project → Settings → Environment Variables, add:

```dotenv
NEXT_PUBLIC_RSVP_FORM_NL=https://docs.google.com/forms/d/e/.../viewform
NEXT_PUBLIC_RSVP_FORM_DE=https://docs.google.com/forms/d/e/.../viewform
NEXT_PUBLIC_RSVP_FORM_EN=https://docs.google.com/forms/d/e/.../viewform
```

Use the real responder URLs. Do not include these example placeholders as real values. Apply to Production (and Preview if desired). **Redeploy** after changing `NEXT_PUBLIC_...` variables; they are compiled into the frontend at build time. The website opens each language's form in a new tab. Until configured, it shows a translated email RSVP fallback.

## E. Before distributing invitations

- Submit and verify a test response on every language.
- Check mobile access and test without a Google login.
- Confirm the 1 March 2027 cutoff. Google Forms' response acceptance can be turned off manually at the deadline. Set a calendar reminder for this.
- Avoid collecting unnecessary sensitive data. Dietary/allergy details should only be used for organizing the wedding and shared only with the appropriate venue/caterer.
- After the wedding, export what is necessary and delete unneeded personal responses according to your retention decision.
- Consider keeping accommodation requests by email: **30 November 2026** is a separate, earlier deadline.

**Important:** Google Forms does not provide dependable automatic duplicate prevention for anonymous respondents. A returning guest can submit again. That is acceptable for a small wedding but should be addressed by regular human review in the Sheet.
