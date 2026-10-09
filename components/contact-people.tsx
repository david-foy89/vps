import { contacts } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ContactPeople({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const nameClass = tone === "light" ? "font-semibold text-white" : "font-semibold text-navy";
  const linkClass =
    tone === "light" ? "text-slate-200 hover:text-white" : "font-semibold text-navy underline";

  return (
    <ul className="space-y-4">
      {contacts.map((person) => (
        <li key={person.email}>
          <p className={nameClass}>{person.name}</p>
          <a className={cn("mt-1 block", linkClass)} href={person.phoneHref}>
            {person.phoneDisplay}
          </a>
          <a className={cn("mt-1 block break-all", linkClass)} href={person.emailHref}>
            {person.email}
          </a>
        </li>
      ))}
    </ul>
  );
}
