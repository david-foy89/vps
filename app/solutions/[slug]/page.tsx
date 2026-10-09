import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { pageMetadata } from "@/lib/metadata";
import { getProduct, getSolution, solutions } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const solution = getSolution(params.slug);
  if (!solution) return {};
  return pageMetadata({
    title: solution.title,
    description: solution.card,
    path: `/solutions/${solution.slug}`,
  });
}

export default function SolutionPage({ params }: { params: Params }) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();
  const related = solution.productSlugs
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <>
      <PageHero eyebrow="Solutions" title={solution.title} lede={solution.lede}>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/solutions", label: "Solutions" },
            { label: solution.title },
          ]}
        />
      </PageHero>
      <PageSection>
        <div className="max-w-3xl space-y-10">
          {solution.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-2xl font-semibold text-navy">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        <h2 className="mt-14 font-heading text-2xl font-semibold text-navy">Equipment used here</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-600">
          Service coverage is{" "}
          <Link href="/service-area" className="font-semibold text-navy underline">
            Texas, Oklahoma, Louisiana, and southern New Mexico
          </Link>
          .
        </p>
      </PageSection>
      <CTASection
        title="Send the application, not a part number"
        body="If you know the vessel and the state, VPS can tell you which SureFire family belongs on the quote."
      />
    </>
  );
}
