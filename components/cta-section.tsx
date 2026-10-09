import Link from "next/link";
import { Phone } from "lucide-react";
import { contacts } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection({
  title,
  body,
  showFormLink = true,
}: {
  title: string;
  body: string;
  showFormLink?: boolean;
}) {
  return (
    <section className="on-navy bg-navy">
      <div className={cn("mx-auto flex max-w-page flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between md:px-6")}>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-200">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {showFormLink ? (
            <Button asChild size="lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          ) : null}
          {contacts.map((person) => (
            <Button
              key={person.email}
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <a href={person.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {person.name} {person.phoneDisplay}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
