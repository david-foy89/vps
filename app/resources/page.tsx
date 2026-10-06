import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/chrome";
import { PageHero, PageSection } from "@/components/page-hero";
import { formatArticleDate, getArticles } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description:
    "Plain-language notes on burner management systems, sparkless ignition, pilotless burners, and how to choose a BMS for firetube or flare service.",
  path: "/resources",
});

export default function ResourcesPage() {
  const articles = getArticles();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Notes for the people who spec and run the equipment"
        lede="Short explanations of burner management, written for operators, foremen, and the environmental staff who have to describe what a package actually changes."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Resources" }]} />
      </PageHero>
      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article key={article.slug} className="rounded-card border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {formatArticleDate(article.date)}
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold text-navy">
                <Link href={`/resources/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.description}</p>
            </article>
          ))}
        </div>
        <aside className="mt-10 rounded-card bg-navy p-6 text-white on-navy">
          <h2 className="font-heading text-2xl font-semibold">Product catalog</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
            Request the SureFire product catalog through VPS. The form asks for a name, company, title, and email so the file goes to a person, not a blank inbox.
          </p>
          <Link href="/resources/catalog" className="mt-4 inline-flex h-11 items-center rounded-md bg-safety px-5 text-sm font-semibold text-navy">
            Request the catalog
          </Link>
        </aside>
      </PageSection>
    </>
  );
}
