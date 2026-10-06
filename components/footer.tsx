import Link from "next/link";
import { footerNav, products, site } from "@/lib/site-config";
import { AuthorizedBadge } from "@/components/chrome";

export function Footer() {
  return (
    <footer className="on-navy bg-navy pb-14 text-slate-200 md:pb-0">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-semibold text-white">{site.legalName}</p>
          <p className="mt-3 text-sm leading-relaxed">{site.tagline}</p>
          <AuthorizedBadge light className="mt-4" />
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Products</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="hover:text-white">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="font-semibold text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.addressHref} className="hover:text-white">
                {site.address}
              </a>
            </li>
            <li>{site.hours}</li>
            <li>{site.territory}</li>
            <li>
              <a href={site.facebook} className="hover:text-white" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-page px-4 py-4 text-xs text-slate-400 md:px-6">
          © {new Date().getFullYear()} {site.legalName}. SureFire product names belong to their manufacturer. VPS is an authorized sales and service representative.
        </p>
      </div>
    </footer>
  );
}
