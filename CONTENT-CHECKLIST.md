# Content checklist

Items still marked on the site, plus claims that were left off on purpose. Replace a placeholder in `lib/site-config.ts` when the fact is company-wide (phone, email, hours, address). Page-only notes live next to the section they describe.

Do not invent customers, years in business, certifications, or testimonials to clear this list.

## Business facts — `[ADD]`

- `[ADD A SPECIFIC EXAMPLE OF FIELD EXPERIENCE, IF VPS WANTS ONE PUBLISHED]`
- `[ADD TRAVEL / TRIP CHARGE POLICY]` — not published; do not invent a dollar amount
- `[ADD PRIVACY POLICY DATE]`
- `[ADD RETENTION PERIOD]`
- Transparent logo file to replace `public/brand/logo.jpg` (the current file has a white background)
- Official favicon to replace `public/icon.svg`
- Production domain in `NEXT_PUBLIC_SITE_URL`

## Confirmed with SureFire

Published on the site:

- Email mickey.perry-vps@outlook.com (Mickey Perry) and michael.perry-vps@outlook.com (Michael Perry). Facebook https://www.facebook.com/vistaprocesssolutions/
- Office hours: Monday–Friday, 8 AM–5 PM
- Office address: 192 Laguna Rd, Bandera, TX 78003
- Authorized SureFire BMS Representative badge
- Product and feature photos in `public/images/`
- Three-year SureFire warranty on BMS controllers. FT and FTL-F ignition units are two years from purchase. The SF-50 spec sheet says two years from the date of sale.
- Controller ratings from the August 2026 spec sheets: 12 VDC (24 VDC with an adapter), 7.8 A max, polycarbonate 12 × 10 × 6, IP66 / Type 4/4X, Class I Division 2 Groups A–D T4A
- SF-50: 12 or 24 VDC, NEMA 4X metallic 10 × 8 × 6. No area classification is printed on that spec sheet.
- FT firetube units: stainless nozzle, high-grade aluminum body. FT-4 spec sheet is 2-inch NPT at 500,000 BTU/hr.
- Flame arrestors: ignition units are compliant with API RP 12N flame-arrestor testing
- ACP-100: 200 W solar, 100 Ah battery, about 60–70 scf/day
- ACP-200: 400 W solar, 200 Ah battery, about 120–140 scf/day
- Compressor warranty: 90 days from the date of sale
- On-site startup in Texas, Oklahoma, Louisiana, and southern New Mexico
- Phone support 24/7, with a technician available inside the territory
- Quote within 24 hours, in-stock ship in 3–5 business days ARO, Try Before You Buy
- VPS sends the SureFire catalog

## Brand and legal

- Have counsel review `app/privacy/page.tsx`
- The EPA emblem is used beside emissions copy. The copy does not say the EPA endorses VPS. Reconfirm that this use is acceptable

## Analytics and Google

- Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_META_PIXEL_ID` only if VPS wants them. Both stay off when unset
- Claim the Google Business Profile and point it at the new domain. Use 192 Laguna Rd, Bandera, TX 78003. See the README.
