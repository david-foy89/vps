# Vista Process Solutions

Marketing site for Vista Process Solutions, LLC, the exclusive SureFire Burner Management Systems sales and service representative in Texas, Oklahoma, Louisiana, and southern New Mexico.

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

`npm run build` writes a static site to `out/`, including `out/index.html`. GitHub Pages serves that folder. `npm run dev` is still the local preview. `npm run lint` runs ESLint.

The public inboxes are mickey.perry-vps@outlook.com and michael.perry-vps@outlook.com. Quote and catalog forms check the fields in the browser, then open a message to both inboxes in the visitor’s email app. GitHub Pages cannot run a mail server, so the site does not send mail itself.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, sitemap, Open Graph, and JSON-LD. No trailing slash. The Pages workflow sets this to the GitHub Pages address unless a repository variable overrides it. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (`G-XXXXXXXX`). Leave empty to keep the tag off. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID (digits only). Leave empty to keep the pixel off. |

## Deploy on GitHub Pages

The repository is [david-foy89/vps](https://github.com/david-foy89/vps). GitHub Pages only serves static files, and it requires an index page at the site root. `npm run build` creates that file at `out/index.html`, plus an `index.html` in each route folder (`out/about/index.html`, and so on).

`.github/workflows/pages.yml` builds the site and publishes the `out` folder on every push to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The project site is served from `https://david-foy89.github.io/vps/`. The workflow sets `NEXT_PUBLIC_SITE_URL` to that address unless the repository variable `NEXT_PUBLIC_SITE_URL` is set. On GitHub Actions the asset prefix is `/vps`, taken from the repository name. A repository named `*.github.io` is served from the domain root and does not get that prefix.

Local `npm run dev` stays at [http://localhost:3000](http://localhost:3000) with no prefix.

## Images

Files in `public/images/` were downloaded from surefirebms.com so the layout is not hotlinking.

**TODO:** confirm with SureFire that VPS may publish those photos and graphics, or replace them with VPS-owned pictures of trucks, yards, and installs. See `public/images/README.md`.

The optional solar-farm stock video was not added. It does not show oilfield work. The VPS logo in `public/brand/logo.jpg` is the supplied lockup (white background). A transparent SVG or PNG should replace it when one exists. `public/icon.svg` is a temporary favicon, not the official mark.

SureFire’s logo is not used as the VPS logo.

## Google Business Profile

After the domain is live, claim or update the Google Business Profile for Vista Process Solutions, LLC:

- Set the website to `NEXT_PUBLIC_SITE_URL`.
- Use the same phone numbers: Mickey Perry `(830) 328-1411`, Michael Perry `(830) 328-3074`.
- Use the office address: 192 Laguna Rd, Bandera, TX 78003.
- Choose categories consistent with an oilfield equipment supplier.
- Match the service area: Texas, Oklahoma, Louisiana, and southern New Mexico.

## Before launch

Work through the remaining items in [CONTENT-CHECKLIST.md](CONTENT-CHECKLIST.md): spec rows still marked `[ADD]`.

Facebook is https://www.facebook.com/vistaprocesssolutions/. SureFire program claims, the authorized-representative badge, and the product photos are confirmed for this site.
