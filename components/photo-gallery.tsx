"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryPhoto, GallerySection } from "@/lib/gallery";
import { BLUR_DATA_URL } from "@/lib/utils";

export function PhotoGallery({ sections }: { sections: GallerySection[] }) {
  const photos = sections.flatMap((section) => section.photos);
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : photos[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index === null ? index : (index + 1) % photos.length));
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, photos.length]);

  let offset = 0;

  return (
    <>
      <div className="space-y-14">
        {sections.map((section) => {
          const start = offset;
          offset += section.photos.length;
          return (
            <section key={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2 id={`${section.id}-heading`} className="font-heading text-2xl font-semibold text-navy">
                {section.title}
              </h2>
              <p className="mt-2 max-w-3xl text-slate-600">{section.lede}</p>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {section.photos.map((photo, index) => (
                  <li key={photo.src} className={section.photos.length === 1 ? "sm:col-span-2" : undefined}>
                    <button
                      type="button"
                      className="group w-full overflow-hidden rounded-card border border-line bg-white text-left shadow-card"
                      onClick={() => setActive(start + index)}
                    >
                      <span
                        className={`relative block aspect-[3/2] ${photo.fit === "contain" ? "bg-neutral-950" : "bg-mist"}`}
                      >
                        <Image
                          src={photo.src}
                          alt=""
                          fill
                          sizes="(min-width: 1280px) 360px, (min-width: 640px) 45vw, 100vw"
                          className={photo.fit === "contain" ? "object-contain" : "object-cover"}
                          placeholder="blur"
                          blurDataURL={BLUR_DATA_URL}
                        />
                      </span>
                      <span className="block px-4 py-3">
                        <span className="block font-heading text-lg font-semibold text-navy group-hover:underline">
                          {photo.title}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {current ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={current.title}>
          <button type="button" className="absolute inset-0 bg-navy/80" aria-label="Close photo" onClick={() => setActive(null)} />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-card bg-white shadow-lift">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <p className="font-heading text-lg font-semibold text-navy">{current.title}</p>
              <button
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line text-navy"
                aria-label="Close photo"
                onClick={() => setActive(null)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className={`relative h-[min(60vh,32rem)] w-full ${current.fit === "contain" ? "bg-neutral-950" : "bg-mist"}`}>
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col gap-4 border-t border-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-slate-700">{current.caption}</p>
              <div className="flex shrink-0 items-center gap-2">
                {current.href ? (
                  <Link href={current.href} className="text-sm font-semibold text-navy underline">
                    View the product
                  </Link>
                ) : null}
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy"
                  aria-label="Previous photo"
                  onClick={() => setActive((index) => (index === null ? index : (index - 1 + photos.length) % photos.length))}
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy"
                  aria-label="Next photo"
                  onClick={() => setActive((index) => (index === null ? index : (index + 1) % photos.length))}
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
