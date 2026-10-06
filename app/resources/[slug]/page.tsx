import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/chrome";
import { mdxComponents } from "@/components/mdx";
import { CTASection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { formatArticleDate, getArticle, getArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, site } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
  });
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: absoluteUrl(`/resources/${article.slug}`),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <header className="border-b border-line bg-mist">
          <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/resources", label: "Resources" },
                { label: article.title },
              ]}
            />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-safety-ink">
              {formatArticleDate(article.date)}
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-navy">{article.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{article.description}</p>
          </div>
        </header>
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:text-navy">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>
        </div>
      </article>
      <CTASection
        title="Bring the application, not just the article"
        body="VPS can turn a vessel type and a state into a SureFire recommendation. Manufacturing stays with SureFire. Support in the territory stays here."
      />
    </>
  );
}
