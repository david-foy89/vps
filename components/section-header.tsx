import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as = "h2",
  id,
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("text-sm font-semibold uppercase tracking-[0.14em]", light ? "text-safety" : "text-safety-ink")}>
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-heading text-3xl font-semibold tracking-tight md:text-4xl",
          light ? "text-white" : "text-navy",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-slate-200" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
