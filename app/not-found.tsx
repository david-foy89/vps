import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-page px-4 py-20 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-safety-ink">404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-navy">That page is not on this site.</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        The link may be old, or the page was never published. You can go back to the equipment, the service area, or call VPS.
      </p>
      <ul className="mt-8 flex flex-col gap-3 text-navy sm:flex-row sm:gap-6">
        <li>
          <Link href="/" className="font-semibold underline">Home</Link>
        </li>
        <li>
          <Link href="/products" className="font-semibold underline">Products</Link>
        </li>
        <li>
          <Link href="/service-area" className="font-semibold underline">Service area</Link>
        </li>
        <li>
          <Link href="/contact" className="font-semibold underline">Contact</Link>
        </li>
        <li>
          <a href={site.phoneHref} className="font-semibold underline">Call {site.phoneDisplay}</a>
        </li>
      </ul>
    </div>
  );
}
