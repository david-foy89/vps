import { Phone } from "lucide-react";
import { contacts } from "@/lib/site-config";

export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid h-14 grid-cols-2 md:hidden">
      {contacts.map((person) => (
        <a
          key={person.email}
          href={person.phoneHref}
          className="on-navy flex flex-col items-center justify-center gap-0.5 border-r border-navy/15 bg-safety text-[11px] font-semibold leading-tight text-navy last:border-r-0"
        >
          <span className="inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {person.name}
          </span>
          <span>{person.phoneDisplay}</span>
        </a>
      ))}
    </div>
  );
}
