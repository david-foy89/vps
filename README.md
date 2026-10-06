# Vista Process Solutions

Marketing site for Vista Process Solutions, LLC, the exclusive SureFire Burner Management Systems sales and service representative in Texas, Oklahoma, and southern New Mexico.

VPS supplies and supports the equipment. SureFire manufactures it. Do not add copy that says VPS designs, patents, or builds the systems.

## Requirements

- Node.js 18.18 or newer
- npm

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, copy the example env file with:

```powershell
Copy-Item .env.example .env.local
```

Open [http://localhost:3000](http://localhost:3000).

`npm run build` then `npm start` runs the production server. `npm run lint` runs ESLint.

The public inbox is mickey-vps@outlook.com. Quote and catalog forms validate either way. With `RESEND_API_KEY` or `SMTP_HOST`, the server sends the message. Without them, the form opens a mailto to that inbox so the visitor can send it from their own mail app. Do not commit an Outlook password. Use an app password in `SMTP_PASS` only on the host.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, sitemap, Open Graph, and JSON-LD. No trailing slash. Set this to the live domain before launch. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (`G-XXXXXXXX`). Leave empty to keep the tag off. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID (digits only). Leave empty to keep the pixel off. |
| `CONTACT_TO_EMAIL` | Inbox that receives quote and catalog requests. |
| `CONTACT_FROM_EMAIL` | From address. For Resend, this must be on a verified domain. |
| `RESEND_API_KEY` | Preferred mailer. Used when this key is present. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Nodemailer fallback, used only when `RESEND_API_KEY` is empty and `SMTP_HOST` is set. Port `465` turns on implicit TLS. |

## Deploy on Vercel

1. Push the repository and import the project in Vercel. Framework preset: Next.js. No custom build command.
2. Add the environment variables above to Production (and Preview, if you want forms to send there).
3. Set `NEXT_PUBLIC_SITE_URL` to the production origin, for example `https://www.example.com`.
4. Deploy. API routes need the Node.js runtime, which is the default on Vercel. Do not turn this project into a static export.

## Images

Files in `public/images/` were downloaded from surefirebms.com so the layout is not hotlinking.

**TODO:** confirm with SureFire that VPS may publish those photos and graphics, or replace them with VPS-owned pictures of trucks, yards, and installs. See `public/images/README.md`.

The optional solar-farm stock video was not added. It does not show oilfield work. The VPS logo in `public/brand/logo.jpg` is the supplied lockup (white background). A transparent SVG or PNG should replace it when one exists. `public/icon.svg` is a temporary favicon, not the official mark.

SureFire’s logo is not used as the VPS logo.

## Google Business Profile

After the domain is live, claim or update the Google Business Profile for Vista Process Solutions, LLC:

- Set the website to `NEXT_PUBLIC_SITE_URL`.
- Use the same phone number, `(830) 328-1411`.
- Use the office address: 192 Laguna Rd, Bandera, TX 78003.
- Choose categories consistent with an oilfield equipment supplier.
- Match the service area: Texas, Oklahoma, and southern New Mexico.

## Before launch

Work through the remaining items in [CONTENT-CHECKLIST.md](CONTENT-CHECKLIST.md): spec rows still marked `[ADD]`.

Facebook is https://www.facebook.com/vistaprocesssolutions/. SureFire program claims, the authorized-representative badge, and the product photos are confirmed for this site.
