import { Phone } from "lucide-react";
import { site } from "@/lib/site-config";

export function StickyCall() {
  return (
    <a
      href={site.phoneHref}
      className="on-navy fixed inset-x-0 bottom-0 z-30 flex h-14 items-center justify-center gap-2 bg-safety text-sm font-semibold text-navy shadow-lift md:hidden"
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call {site.phoneDisplay}
    </a>
  );
}
