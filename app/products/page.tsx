import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { PageHero, PageSection } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { pageMetadata } from "@/lib/metadata";
import { products } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "SureFire BMS Products",
  description:
    "BMS controllers, FT ignition units, air compressor packages, parts, and the SF-50 pilot maintainer. Supplied by Vista Process Solutions in Texas, Oklahoma, Louisiana, and southern New Mexico.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="SureFire Products"
        title="SureFire equipment, supplied by VPS"
        lede="VPS does not manufacture these systems. SureFire does. The pages below describe what VPS quotes, stocks parts for, and supports in Texas, Oklahoma, Louisiana, and southern New Mexico."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "SureFire Products" }]} />
      </PageHero>
      <PageSection>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </PageSection>
      <CTASection
        title="Not sure which family fits the vessel?"
        body="Send the equipment type and the state. VPS will separate a heater controller from a flare pilot before anyone writes a part number."
      />
    </>
  );
}
