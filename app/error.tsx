"use client";

import { contacts } from "@/lib/site-config";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-page px-4 py-20 md:px-6">
      <h1 className="font-heading text-4xl font-semibold text-navy">This page did not load.</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        Try it again. If it still fails, call {contacts.map((person) => `${person.name} at ${person.phoneDisplay}`).join(" or ")} and describe what you were opening.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center justify-center rounded-md bg-safety px-5 text-sm font-semibold text-navy"
        >
          Try again
        </button>
        {contacts.map((person) => (
          <a
            key={person.email}
            href={person.phoneHref}
            className="inline-flex h-11 items-center justify-center rounded-md bg-navy px-5 text-sm font-semibold text-white"
          >
            {person.name} {person.phoneDisplay}
          </a>
        ))}
      </div>
    </div>
  );
}
