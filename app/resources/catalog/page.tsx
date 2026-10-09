import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/chrome";
import { CatalogForm } from "@/components/catalog-form";
import { PageHero, PageSection } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { contacts } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Request a Product Catalog",
  description:
    "Ask Vista Process Solutions for the SureFire BMS product catalog. Name, company, title, and email are required.",
  path: "/resources/catalog",
});

export default function CatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Request the product catalog"
        lede="VPS will send SureFire product literature to the person named on this form. The catalog describes equipment VPS sells and services. It is not a VPS manufacturing brochure."
      >
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/resources", label: "Resources" },
            { label: "Catalog" },
          ]}
        />
      </PageHero>
      <PageSection>
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <CatalogForm />
          <p className="text-sm leading-relaxed text-slate-700">
            The request goes to{" "}
            {contacts.map((person, index) => (
              <span key={person.email}>
                {index > 0 ? " and " : null}
                <a className="font-semibold text-navy underline" href={person.emailHref}>{person.email}</a>
              </span>
            ))}
            .
            VPS sends the SureFire catalog back to the address on the form.
          </p>
        </div>
      </PageSection>
    </>
  );
}
