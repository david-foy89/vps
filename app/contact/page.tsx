import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/chrome";
import { PageHero, PageSection } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact and Request a Quote",
  description:
    "Request a SureFire BMS quote from Vista Process Solutions, or call (830) 328-1411. Serving Texas, Oklahoma, and southern New Mexico.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote"
        lede="Tell VPS what is on the location. A person answers from the representative’s side of the business — sales and service — not from a factory floor."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      </PageHero>
      <PageSection>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6 text-sm leading-relaxed text-slate-700">
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Phone</h2>
              <a className="mt-1 inline-block text-base font-semibold text-navy underline" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Email</h2>
              <a className="mt-1 inline-block font-semibold text-navy underline" href={site.emailHref}>
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Address</h2>
              <a className="mt-1 inline-block font-semibold text-navy underline" href={site.addressHref}>
                {site.streetAddress}
                <br />
                {site.addressLocality}, {site.addressRegion} {site.postalCode}
              </a>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Hours</h2>
              <p className="mt-1">{site.hours}</p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Territory</h2>
              <p className="mt-1">{site.territory}</p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-navy">Facebook</h2>
              <a className="mt-1 inline-block font-semibold text-navy underline" href={site.facebook} rel="noopener noreferrer">
                vistaprocesssolutions
              </a>
            </div>
          </aside>
          <QuoteForm id="quote" />
        </div>
      </PageSection>
    </>
  );
}
