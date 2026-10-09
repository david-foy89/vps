"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { nav, contacts, site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function currentPath(pathname: string) {
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function productLinkActive(href: string, path: string) {
  if (href === "/products") {
    return path === "/products" || (path.startsWith("/products/") && !path.startsWith("/products/vps"));
  }
  return path === href || path.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const path = currentPath(pathname);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
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
            if ("children" in item) {
              const active = item.children.some((child) => productLinkActive(child.href, path));
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setProductsOpen(false);
                  }}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-semibold text-navy/80 hover:text-navy",
                      active && "text-navy underline decoration-safety decoration-2 underline-offset-8",
                    )}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    aria-controls="products-menu"
                    onClick={() => setProductsOpen(true)}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", productsOpen && "rotate-180")} aria-hidden="true" />
                  </button>
                  {productsOpen ? (
                    <div className="absolute left-0 top-full z-50 pt-2">
                      <ul id="products-menu" className="min-w-52 rounded-card border border-line bg-white py-2 shadow-lift">
                        {item.children.map((child) => {
                          const childActive = productLinkActive(child.href, path);
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={childActive ? "page" : undefined}
                                className={cn(
                                  "block px-4 py-2 text-sm font-semibold text-navy/80 hover:bg-mist hover:text-navy",
                                  childActive && "text-navy",
                                )}
                                onClick={() => setProductsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            }

            const active = path === item.href || path.startsWith(`${item.href}/`);
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
          <div className="flex flex-col items-end leading-tight">
            {contacts.map((person) => (
              <a
                key={person.email}
                href={person.phoneHref}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy"
              >
                <Phone className="h-3.5 w-3.5 text-safety-ink" aria-hidden="true" />
                <span>{person.name}</span>
                <span>{person.phoneDisplay}</span>
              </a>
            ))}
          </div>
          <Button asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line px-3 text-sm font-semibold text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          Menu
        </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/55"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[min(22rem,calc(100%-2rem))] flex-col bg-white shadow-lift">
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-5">
              <p className="font-heading text-xl font-semibold text-navy">Menu</p>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-5" aria-label="Mobile">
              {nav.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="pb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-safety-ink">
                      {item.label}
                    </p>
                    <ul className="mt-2 overflow-hidden rounded-card border border-line">
                      {item.children.map((child) => {
                        const active = productLinkActive(child.href, path);
                        return (
                          <li key={child.href} className="border-b border-line last:border-b-0">
                            <Link
                              href={child.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "flex min-h-12 items-center px-4 py-3 text-base font-semibold text-navy",
                                active && "border-l-4 border-safety bg-mist pl-3",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={path === item.href || path.startsWith(`${item.href}/`) ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center border-t border-line py-3 text-base font-semibold text-navy first:border-t-0",
                      (path === item.href || path.startsWith(`${item.href}/`)) && "text-safety-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Call VPS
                </p>
                <div className="mt-3 grid gap-2">
                  {contacts.map((person) => (
                    <a
                      key={person.email}
                      href={person.phoneHref}
                      className="flex min-h-12 items-center gap-3 rounded-md border border-line px-4 py-2 text-navy"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="leading-tight">
                        <span className="block text-sm font-semibold">{person.name}</span>
                        <span className="block text-sm text-slate-600">{person.phoneDisplay}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            <div className="shrink-0 border-t border-line bg-white p-4">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-safety text-base font-semibold text-navy"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
