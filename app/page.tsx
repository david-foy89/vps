import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { AuthorizedBadge } from "@/components/chrome";
import { CTASection } from "@/components/cta-section";
import { FadeIn } from "@/components/fade-in";
import { FeatureCard } from "@/components/feature-card";
import { ProductCard } from "@/components/product-card";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeader } from "@/components/section-header";
import { TerritoryMap } from "@/components/territory-map";
import { Button } from "@/components/ui/button";
import { getArticles, formatArticleDate } from "@/lib/articles";
import { absoluteUrl, features, outcomes, products, programs, site } from "@/lib/site-config";
import { BLUR_DATA_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute:
      "SureFire BMS Sales and Service in Texas, Oklahoma, and New Mexico | Vista Process Solutions",
  },
  description:
    "Exclusive SureFire burner management sales and service for oilfield operators in Texas, Oklahoma, and southern New Mexico. Pilotless burners, sparkless ignition, and local support.",
  keywords: [
    "SureFire BMS Texas",
    "burner management system Texas",
    "burner management system Oklahoma",
    "burner management system New Mexico",
    "pilotless burner",
    "sparkless ignition",
    "flare ignition system",
    "OOOOb compliance",
    "firetube BMS",
    "oilfield equipment supplier",
  ],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "SureFire BMS Sales and Service | Vista Process Solutions",
    description:
      "Safer, cleaner, lower-cost burner management for operators in Texas, Oklahoma, and southern New Mexico.",
    url: absoluteUrl("/"),
  },
};

export default function HomePage() {
  const articles = getArticles().slice(0, 3);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-safety-ink">
              Exclusive SureFire BMS sales and service
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-navy md:text-5xl">
              Safer, cleaner, lower-cost burner management for Texas, Oklahoma, and New Mexico.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Vista Process Solutions supplies and supports SureFire burner management systems for flares, combustors, heater treaters, and other fired equipment. SureFire builds the equipment. VPS is the representative on the ground.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <AuthorizedBadge />
            </div>
            <p className="mt-4 text-sm text-slate-600">{site.territory}</p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-card bg-navy shadow-lift">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/field-install.jpg"
                  alt="Heater treater on a production site, with a burner management controller mounted on the vessel"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <p className="px-5 py-4 text-sm text-slate-200">
                A heater treater in the field, with burner management on the vessel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20" aria-labelledby="products-heading">
        <FadeIn>
          <SectionHeader
            id="products-heading"
            eyebrow="Equipment"
            title="SureFire systems VPS supplies"
            description="Five lines cover most of the calls: controllers, ignition, instrument air, parts, and a pilot maintainer for sites that do not need a full BMS."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <FadeIn key={product.slug}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-mist" aria-labelledby="why-heading">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20">
          <FadeIn>
            <SectionHeader
              id="why-heading"
              eyebrow="Why SureFire through VPS"
              title="The equipment is SureFire’s. The follow-through is local."
              description="Sparkless ignition, pilotless burners, and flame-front pilots come from SureFire. The reason to call VPS is that sales and service sit in the territory, not in another time zone."
            />
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} className={index < 3 ? "xl:col-span-2" : "xl:col-span-3"}>
                <FeatureCard feature={feature} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="territory-heading">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              id="territory-heading"
              eyebrow="Service area"
              title="Local sales and service"
              description="Texas and Oklahoma are covered statewide. New Mexico coverage is the southern part of the state. If a location might sit near that line, call before you write VPS into the bid."
            />
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link href="/service-area">See the service area</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn>
            <TerritoryMap />
          </FadeIn>
        </div>
      </section>

      <section className="on-navy bg-navy" aria-labelledby="compliance-heading">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader
              id="compliance-heading"
              light
              eyebrow="Emissions"
              title="Designed around OOOOb and OOOOc"
              description="SureFire’s ventless fuel train and pilotless burner are designed to lower methane emissions. Instrument-air packages do the same job for pneumatics that still run on supply gas. Compliance for a specific site is still a facility decision, not a slogan on a controller."
            />
            <div className="mt-6">
              <Button asChild>
                <Link href="/solutions/emissions-compliance">Read the compliance notes</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <Image
              src="/images/features/epa-white.png"
              alt="EPA emblem"
              fill
              sizes="320px"
              className="object-contain"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20" aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className="sr-only">
          Outcomes
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <FadeIn key={outcome.title}>
              <article className="h-full rounded-card border border-line bg-white p-6 shadow-card">
                <h3 className="font-heading text-2xl font-semibold text-navy">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{outcome.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-mist" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-page gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2">
          <div>
            <SectionHeader id="about-heading" eyebrow="About VPS" title={site.tagline} />
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              VPS is an oilfield equipment supplier and the exclusive SureFire BMS representative for Texas, Oklahoma, and southern New Mexico.
            </p>
            <div className="mt-6">
              <Button asChild variant="secondary">
                <Link href="/about">About the company</Link>
              </Button>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-lift">
              <Image
                src="/images/field-install.jpg"
                alt="Heater treater on a production site, with a burner management controller mounted on the vessel"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist" aria-labelledby="resources-heading">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader id="resources-heading" eyebrow="Resources" title="Field notes, written in plain language" />
            <Link href="/resources" className="text-sm font-semibold text-navy underline-offset-2 hover:underline">
              All resources
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.slug} className="flex h-full flex-col rounded-card border border-line bg-white p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {formatArticleDate(article.date)}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-navy">
                  <Link href={`/resources/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{article.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white" aria-labelledby="programs-heading">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20">
          <SectionHeader
            id="programs-heading"
            eyebrow="From SureFire, through VPS"
            title="What you can count on"
            description="These are SureFire program terms, available on equipment VPS quotes in Texas, Oklahoma, and southern New Mexico."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((item) => (
              <article key={item.title} className="rounded-card border border-line bg-mist p-5">
                <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-page items-start gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2" aria-labelledby="quote-heading">
        <div>
          <h2 id="quote-heading" className="font-heading text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Tell us what is on the location.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Vessel, burner size, and state are enough to start. VPS will come back with the SureFire equipment that fits, or with a straight answer if the site is outside southern New Mexico.
          </p>
          <p className="mt-4 text-sm text-slate-600">{site.hours}</p>
        </div>
        <QuoteForm compact id="quote" />
      </section>

      <CTASection
        title="Prefer the phone?"
        body={`Call ${site.phoneDisplay}. The line is the same one published for sales and service across the territory.`}
        showFormLink={false}
      />
    </>
  );
}
