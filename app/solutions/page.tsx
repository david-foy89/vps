import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/chrome";
import { PageHero, PageSection } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { solutions } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Solutions",
  description:
    "SureFire burner management for flares and combustors, firetube heaters, and emissions-driven equipment changes. Specified and supported by VPS.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Match the equipment to the flame"
        lede="A heater treater, a combustor, and a methane question do not start with the same part number. These pages are how VPS sorts the work before a quote."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Solutions" }]} />
      </PageHero>
      <PageSection>
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <article key={solution.slug} className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card">
              <h2 className="font-heading text-2xl font-semibold text-navy">
                <Link href={`/solutions/${solution.slug}`} className="hover:underline">
                  {solution.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{solution.card}</p>
              <Link href={`/solutions/${solution.slug}`} className="mt-4 text-sm font-semibold text-safety-ink">
                Read the application
              </Link>
            </article>
          ))}
        </div>
      </PageSection>
    </>
  );
}
