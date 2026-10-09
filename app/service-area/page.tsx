import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { TerritoryMap } from "@/components/territory-map";
import { pageMetadata } from "@/lib/metadata";
import { statePages } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Service Area",
  description:
    "Vista Process Solutions covers all of Texas, all of Oklahoma, all of Louisiana, and southern New Mexico for SureFire BMS sales and service.",
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title="Texas, Oklahoma, Louisiana, and southern New Mexico"
        lede="The agreement is statewide in Texas, Oklahoma, and Louisiana. In New Mexico it is the southern portion of the state, not a license to claim the San Juan Basin. If you are unsure, call."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Service Area" }]} />
      </PageHero>
      <PageSection>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <TerritoryMap />
          <div className="space-y-4">
            {statePages.map((state) => (
              <article key={state.slug} className="rounded-card border border-line bg-white p-5 shadow-card">
                <h2 className="font-heading text-xl font-semibold text-navy">
                  <Link href={`/service-area/${state.slug}`} className="hover:underline">
                    {state.name}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{state.lede}</p>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
      <CTASection
        title="Not sure if we cover your site? Call us."
        body="A county or parish is enough. VPS will tell you whether the location is in the territory before you spend time on a specification."
      />
    </>
  );
}
