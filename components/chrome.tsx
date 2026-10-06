import type { ReactNode } from "react";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function AuthorizedBadge({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        light ? "border-white/20 text-white" : "border-navy/15 bg-white text-navy",
        className,
      )}
    >
      <BadgeCheck className={cn("h-4 w-4", light ? "text-safety" : "text-safety-ink")} aria-hidden="true" />
      Authorized SureFire BMS Representative
    </p>
  );
}

export function ContentNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("rounded-card border border-dashed border-slate-300 bg-mist px-4 py-3 text-sm leading-relaxed text-slate-700", className)}>
      {children}
    </p>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="underline-offset-2 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
