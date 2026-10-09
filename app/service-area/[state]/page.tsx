import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { TerritoryMap } from "@/components/territory-map";
import { pageMetadata } from "@/lib/metadata";
import { getStatePage, statePages } from "@/lib/site-config";

type Params = { state: string };

export function generateStaticParams() {
  return statePages.map((state) => ({ state: state.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const state = getStatePage(params.state);
  if (!state) return {};
  return pageMetadata({
    title: state.title,
    description: state.description,
    path: `/service-area/${state.slug}`,
  });
}

export default function StateLandingPage({ params }: { params: Params }) {
  const state = getStatePage(params.state);
  if (!state) notFound();

  return (
    <>
      <PageHero eyebrow="Service area" title={state.title} lede={state.lede}>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/service-area", label: "Service Area" },
            { label: state.name },
          ]}
        />
      </PageHero>
      <PageSection>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-10">
            {state.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading text-2xl font-semibold text-navy">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <p className="text-sm text-slate-600">
              Related reading:{" "}
              <Link className="font-semibold text-navy underline" href="/solutions/firetube-and-heater-treaters">
                firetube and heater treaters
              </Link>
              ,{" "}
              <Link className="font-semibold text-navy underline" href="/solutions/flares-and-combustors">
                flares and combustors
              </Link>
              , and{" "}
              <Link className="font-semibold text-navy underline" href="/products">
                the product lines
              </Link>
              .
            </p>
          </div>
          <TerritoryMap />
        </div>
      </PageSection>
      <CTASection
        title="Not sure if we cover your site? Call us."
        body={
          state.slug === "new-mexico"
            ? "Southern New Mexico is covered. If the site might sit near that line, call before you assume either yes or no."
            : `Every site in ${state.name} is inside the territory. Call with the ${state.slug === "louisiana" ? "parish" : "county"} if you want that confirmed before a quote.`
        }
      />
    </>
  );
}
