import type { Metadata } from "next";
import Image from "next/image";
import { Facebook, MapPin, Phone } from "lucide-react";
import { Breadcrumbs, Tagline } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { contacts, site, values } from "@/lib/site-config";
import { BLUR_DATA_URL } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Vista Process Solutions, LLC is an oilfield equipment supplier and the exclusive SureFire BMS sales and service representative for Texas, Oklahoma, Louisiana, and southern New Mexico.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={site.statement} lede={site.description}>
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      </PageHero>
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 leading-relaxed text-slate-700">
            <Tagline />
            <h2 className="font-heading text-2xl font-semibold text-navy">The relationship with SureFire</h2>
            <p>
              SureFire designs and builds burner management systems, including the patented sparkless ignition in the FT ignition units. Vista Process Solutions is the exclusive sales and service representative for that equipment in Texas, Oklahoma, Louisiana, and southern New Mexico.
            </p>
            <p>
              That split matters in a quote. VPS specifies, supplies, and supports the package. SureFire manufactures it, including the patented sparkless ignition. VPS is an authorized SureFire BMS representative for this territory.
            </p>
          </div>
          <div className="space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-card">
              <Image
                src="/images/field-install.jpg"
                alt="Heater treater on a production site, with a burner management controller mounted on the vessel"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {contacts.map((person) => (
            <li key={person.email} className="flex h-full items-start gap-3 rounded-card border border-line bg-mist p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-white">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">{person.name}</span>
                <a className="mt-1 block font-semibold text-navy underline" href={person.phoneHref}>
                  {person.phoneDisplay}
                </a>
                <a className="mt-1 block break-all font-semibold text-navy underline" href={person.emailHref}>
                  {person.email}
                </a>
              </span>
            </li>
          ))}
          <li>
            <a
              href={site.addressHref}
              className="flex h-full items-start gap-3 rounded-card border border-line bg-mist p-4 hover:border-navy/30 hover:bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Office</span>
                <span className="mt-1 block font-semibold text-navy">
                  {site.streetAddress}
                  <br />
                  {site.addressLocality}, {site.addressRegion} {site.postalCode}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={site.facebook}
              rel="noopener noreferrer"
              className="flex h-full items-start gap-3 rounded-card border border-line bg-mist p-4 hover:border-navy/30 hover:bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-white">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Facebook</span>
                <span className="mt-1 block font-semibold text-navy">vistaprocesssolutions</span>
              </span>
            </a>
          </li>
        </ul>

        <h2 className="mt-14 font-heading text-2xl font-semibold text-navy">How the company says it will work</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="rounded-card border border-line bg-white p-6 shadow-card">
              <h3 className="font-heading text-xl font-semibold text-navy">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{value.body}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <CTASection
        title="Talk to VPS"
        body={`Sales and service: ${contacts.map((person) => `${person.name} ${person.phoneDisplay}`).join(", ")}. ${site.hours}.`}
      />
    </>
  );
}
