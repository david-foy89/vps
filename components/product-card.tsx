import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site-config";
import { BLUR_DATA_URL } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <Link href={`/products/${product.slug}`} className="flex h-full flex-col">
        <div className={`relative aspect-[3/2] overflow-hidden ${product.imageFit === "contain" ? "bg-neutral-950" : "bg-mist"}`}>
          {product.image ? (
            <Image
              src={product.image}
              alt={product.imageAlt ?? ""}
              fill
              sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
              className={product.imageFit === "contain" ? "object-contain" : "object-cover object-top"}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-600">
              [ADD PHOTO: {product.name}]
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-heading text-xl font-semibold text-navy">{product.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.card}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-safety-ink">
            View details
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
