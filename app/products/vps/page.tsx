import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { contacts } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "VPS Products",
  description:
    "Oilfield equipment supplied by Vista Process Solutions, separate from the SureFire burner management systems VPS represents.",
  path: "/products/vps",
});

export default function VpsProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="VPS Products"
        title="Equipment supplied by Vista Process Solutions"
        lede="This page is for equipment VPS supplies on its own. SureFire burner management systems are a separate line. VPS does not manufacture those systems."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "VPS Products" }]} />
      </PageHero>
      <PageSection>
        <div className="max-w-3xl space-y-4 leading-relaxed text-slate-700">
          <p>
            Vista Process Solutions is an oilfield equipment supplier. A VPS product quote starts with what is on the location: the equipment, the vessel if there is one, and the state. Call{" "}
            {contacts.map((person, index) => (
              <span key={person.email}>
                {index > 0 ? " or " : null}
                <a className="font-semibold text-navy underline" href={person.phoneHref}>
                  {person.name} at {person.phoneDisplay}
                </a>
              </span>
            ))}
            , or send the quote form and name the equipment.
          </p>
          <p>
            SureFire controllers, ignition units, air compressor packages, parts, and the SF-50 are listed under{" "}
            <Link href="/products" className="font-semibold text-navy underline">
              SureFire Products
            </Link>
            . Those pages describe equipment SureFire builds and VPS sells and services.
          </p>
        </div>
      </PageSection>
      <CTASection
        title="Tell us what you need quoted."
        body="Name the equipment and the state. VPS will say whether it can supply it, and whether a SureFire system belongs on the same quote."
      />
    </>
  );
}
