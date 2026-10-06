import type { ReactNode } from "react";
import { SectionHeader } from "@/components/section-header";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-page px-4 py-12 md:px-6 md:py-16">
        {children ? <div className="mb-6">{children}</div> : null}
        <SectionHeader as="h1" eyebrow={eyebrow} title={title} description={lede} />
      </div>
    </section>
  );
}

export function PageSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-page px-4 py-14 md:px-6 md:py-16 ${className}`}>{children}</div>;
}
