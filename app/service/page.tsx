import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { programs, serviceItems, site } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Service and Support",
  description:
    "Local sales and service support for SureFire burner management systems in Texas, Oklahoma, and southern New Mexico. Call Vista Process Solutions at (830) 328-1411.",
  path: "/service",
});

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Support from the company that sold it"
        lede="VPS is the sales and service representative in the territory. SureFire builds the equipment. When a unit in Texas, Oklahoma, or southern New Mexico needs a part, a startup, or a straight answer, the call comes here."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Service and Support" }]} />
      </PageHero>
      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceItems.map((item) => (
            <article key={item.title} className="rounded-card border border-line bg-white p-6 shadow-card">
              <h2 className="font-heading text-xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.body}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-14 font-heading text-2xl font-semibold text-navy">How to request service</h2>
        <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-5 leading-relaxed text-slate-700">
          <li>
            Call <a className="font-semibold text-navy underline" href={site.phoneHref}>{site.phoneDisplay}</a>, email{" "}
            <a className="font-semibold text-navy underline" href={site.emailHref}>{site.email}</a>, or send the{" "}
            <Link href="/contact" className="font-semibold text-navy underline">quote form</Link> and choose “Service or repair.”
          </li>
          <li>Give the state and county, the SureFire model if it is on the tag, and what the unit is doing — or not doing.</li>
          <li>A photo of the controller face and the status code saves a round of questions.</li>
        </ol>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {programs.map((item) => (
            <article key={item.title} className="rounded-card border border-line bg-mist p-5">
              <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-600">Office hours: {site.hours}. Support calls are answered 24/7.</p>
      </PageSection>
      <CTASection
        title="Call for service"
        body={`${site.phoneDisplay}. If you are not sure the site is covered, say the county first.`}
      />
    </>
  );
}
