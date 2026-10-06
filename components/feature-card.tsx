import Image from "next/image";
import { Flame, MapPin, ShieldCheck, Unlink, Wind } from "lucide-react";
import type { Feature } from "@/lib/site-config";
import { BLUR_DATA_URL, cn } from "@/lib/utils";

const icons = {
  flame: Flame,
  unlink: Unlink,
  wind: Wind,
  shield: ShieldCheck,
  map: MapPin,
};

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = icons[feature.icon];
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-card border shadow-card",
        feature.dark ? "border-navy bg-navy text-white" : "border-line bg-white text-navy",
      )}
    >
      {feature.image ? (
        <div className={cn("relative h-36", feature.dark ? "bg-navy-950" : "bg-mist")}>
          <Image
            src={feature.image}
            alt={feature.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 380px, 100vw"
            className="object-contain p-4"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <Icon className={cn("h-5 w-5", feature.dark ? "text-safety" : "text-safety-ink")} aria-hidden="true" />
        <h3 className="mt-3 font-heading text-lg font-semibold">{feature.title}</h3>
        <p className={cn("mt-2 text-sm leading-relaxed", feature.dark ? "text-slate-200" : "text-slate-600")}>
          {feature.body}
        </p>
      </div>
    </article>
  );
}
