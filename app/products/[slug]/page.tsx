import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, ContentNote } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { PageHero, PageSection } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { pageMetadata } from "@/lib/metadata";
import { getProduct, products, relatedProducts } from "@/lib/site-config";
import { BLUR_DATA_URL } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return pageMetadata({
    title: product.name,
    description: product.card,
    path: `/products/${product.slug}`,
  });
}

export default function ProductDetailPage({ params }: { params: Params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const related = relatedProducts(product.slug);

  return (
    <>
      <PageHero eyebrow="Products" title={product.name} lede={product.summary}>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { label: product.name },
          ]}
        />
      </PageHero>
      <PageSection>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`overflow-hidden rounded-card border border-line ${product.imageFit === "contain" ? "bg-neutral-950" : "bg-mist"}`}>
            {product.image ? (
              <div className="relative aspect-[3/2]">
                <Image
                  src={product.image}
                  alt={product.imageAlt ?? ""}
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className={product.imageFit === "contain" ? "object-contain" : "object-cover object-top"}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            ) : (
              <div className="flex aspect-[3/2] items-center justify-center p-6 text-center text-sm text-slate-600">
                [ADD PHOTO: {product.name}]
              </div>
            )}
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy">Where it fits</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              Need this on a location in the territory?{" "}
              <Link href="/contact" className="font-semibold text-navy underline">
                Request a quote
              </Link>
              .
            </p>
          </div>
        </div>

        <h2 className="mt-14 font-heading text-2xl font-semibold text-navy">Features</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="rounded-card border border-line bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-card">
              {feature}
            </li>
          ))}
        </ul>

        {product.models ? (
          <>
            <h2 className="mt-14 font-heading text-2xl font-semibold text-navy">Models</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {product.models.map((model) => (
                <article key={model.name} className="rounded-card border border-line bg-white p-5 shadow-card">
                  <h3 className="font-heading text-lg font-semibold text-navy">{model.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{model.summary}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {model.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </>
        ) : null}

        <h2 className="mt-14 font-heading text-2xl font-semibold text-navy">Specifications</h2>
        <div className="mt-4 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">{product.name} specifications</caption>
            <thead className="bg-mist text-navy">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Item</th>
                <th scope="col" className="px-4 py-3 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody>
              {product.specs.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="w-1/3 px-4 py-3 align-top font-semibold text-navy">
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-slate-700">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {product.notes?.length ? (
          <div className="mt-6 space-y-3">
            {product.notes.map((note) => (
              <ContentNote key={note}>{note}</ContentNote>
            ))}
          </div>
        ) : null}
      </PageSection>

      <section className="border-t border-line bg-mist">
        <PageSection>
          <h2 className="font-heading text-2xl font-semibold text-navy">Related equipment</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </PageSection>
      </section>
      <CTASection
        title={`Quote ${product.name}`}
        body="Include the state, the vessel, and the burner or pilot size if you know it. VPS will confirm whether the site is in territory."
      />
    </>
  );
}
