import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/chrome";
import { ContactPeople } from "@/components/contact-people";
import { PageHero, PageSection } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { pageMetadata } from "@/lib/metadata";
import { contacts, site } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact and Request a Quote",
  description:
    "Request a SureFire BMS quote from Vista Process Solutions, or call Mickey Perry or Michael Perry for sales and tech support. Serving Texas, Oklahoma, Louisiana, and southern New Mexico.",
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
              <h2 className="font-heading text-lg font-semibold text-navy">Sales and service</h2>
              <div className="mt-3">
                <ContactPeople />
              </div>
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

        <section className="mt-16 border-t border-line pt-12" aria-labelledby="tech-support-heading">
          <h2 id="tech-support-heading" className="font-heading text-2xl font-semibold text-navy">
            Tech support
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            Phone support is available 24/7 for equipment VPS supplied in the territory. A technician can come to a site inside the territory. Sales calls are answered {site.hours}.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {contacts.map((person) => (
              <li key={person.email} className="rounded-card border border-line bg-mist p-5">
                <p className="font-heading text-lg font-semibold text-navy">{person.name}</p>
                <a className="mt-2 block font-semibold text-navy underline" href={person.phoneHref}>
                  {person.phoneDisplay}
                </a>
                <a className="mt-1 block break-all font-semibold text-navy underline" href={person.emailHref}>
                  {person.email}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">
            You can also send the form on this page and choose “Service or repair.” Include the state and the county or parish, the SureFire model if it is on the tag, and what the unit is doing — or not doing. A photo of the controller face saves a round of questions.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            <Link href="/service" className="font-semibold text-navy underline">
              How service and support works
            </Link>
          </p>
        </section>
      </PageSection>
    </>
  );
}
