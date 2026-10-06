"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-page items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0" aria-label="Vista Process Solutions home">
          <Image
            src={site.logo}
            alt="Vista Process Solutions LLC"
            width={site.logoWidth}
            height={site.logoHeight}
            priority
            className="h-[3.25rem] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const current = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
            const active = current === item.href || current.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold text-navy/80 hover:text-navy",
                  active && "text-navy underline decoration-safety decoration-2 underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4 text-safety-ink" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Button asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 overflow-y-auto bg-white px-4 pb-8 pt-24 lg:hidden"
        >
          <nav className="mx-auto flex max-w-page flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-base font-semibold text-navy"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-navy text-base font-semibold text-white">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="mt-3 inline-flex h-12 items-center justify-center rounded-md bg-safety text-base font-semibold text-navy"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
