import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { PhotoGallery } from "@/components/photo-gallery";
import { gallerySections } from "@/lib/gallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Field and SureFire equipment photos from Vista Process Solutions. Product pictures are SureFire’s. The field photo is a heater treater, not a named customer job.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Equipment and a field installation"
        lede="The equipment photos are SureFire’s. SureFire builds those systems. VPS supplies and supports them. The field photo shows a heater treater. It is not labeled with a customer name."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Gallery" }]} />
      </PageHero>
      <PageSection>
        <PhotoGallery sections={gallerySections} />
      </PageSection>
      <CTASection
        title="Need one of these on a location?"
        body="Send the vessel, the burner size, and the state. VPS will say which SureFire family fits, or whether the site is outside the territory."
      />
    </>
  );
}
