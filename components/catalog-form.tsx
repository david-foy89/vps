"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { catalogSchema, type CatalogValues } from "@/lib/schemas";
import { site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status =
  | { type: "idle" }
  | { type: "success"; delivery: "sent" | "mailto" }
  | { type: "error"; message: string };

export function CatalogForm() {
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CatalogValues>({
    resolver: zodResolver(catalogSchema),
    defaultValues: { formType: "catalog", name: "", company: "", jobTitle: "", email: "", website: "" },
  });

  useEffect(() => {
    if (status.type !== "idle") statusRef.current?.focus();
  }, [status]);

  async function onSubmit(values: CatalogValues) {
    setStatus({ type: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; mailto?: string; error?: string };
      if (!response.ok || !data.ok) {
        setStatus({ type: "error", message: data.error || `The form did not send. Email ${site.email}.` });
        return;
      }
      if (data.mailto) {
        window.location.href = data.mailto;
      }
      setStatus({ type: "success", delivery: data.mailto ? "mailto" : "sent" });
      reset({ formType: "catalog", name: "", company: "", jobTitle: "", email: "", website: "" });
    } catch {
      setStatus({ type: "error", message: `The form did not send. Call ${site.phoneDisplay}.` });
    }
  }

  if (status.type === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-card border border-line bg-white p-6 shadow-card">
        <h2 className="font-heading text-2xl font-semibold text-navy">Request received.</h2>
        <p className="mt-3 text-slate-700">
          {status.delivery === "mailto"
            ? `Your email app should open a catalog request to ${site.email}. Send that message to finish the request.`
            : `VPS will follow up from ${site.email} with the product catalog.`}{" "}
          You can also call <a className="font-semibold underline" href={site.phoneHref}>{site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-card border border-line bg-white p-5 shadow-card md:p-6">
      <input type="hidden" value="catalog" {...register("formType")} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="catalog-website">Website</label>
        <input id="catalog-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="catalog-name">Name <span className="text-safety-ink">*</span></Label>
          <Input id="catalog-name" className="mt-1.5" autoComplete="name" aria-invalid={Boolean(errors.name)} {...register("name")} />
          {errors.name ? <p className="mt-1 text-sm text-red-800">{errors.name.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="catalog-company">Company <span className="text-safety-ink">*</span></Label>
          <Input id="catalog-company" className="mt-1.5" autoComplete="organization" aria-invalid={Boolean(errors.company)} {...register("company")} />
          {errors.company ? <p className="mt-1 text-sm text-red-800">{errors.company.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="catalog-title">Title <span className="text-safety-ink">*</span></Label>
          <Input id="catalog-title" className="mt-1.5" autoComplete="organization-title" aria-invalid={Boolean(errors.jobTitle)} {...register("jobTitle")} />
          {errors.jobTitle ? <p className="mt-1 text-sm text-red-800">{errors.jobTitle.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="catalog-email">Email <span className="text-safety-ink">*</span></Label>
          <Input id="catalog-email" type="email" className="mt-1.5" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email")} />
          {errors.email ? <p className="mt-1 text-sm text-red-800">{errors.email.message}</p> : null}
        </div>
      </div>
      {status.type === "error" ? (
        <p ref={statusRef} tabIndex={-1} role="alert" className="mt-4 text-sm font-medium text-red-800">
          {status.message}
        </p>
      ) : null}
      <Button type="submit" className="mt-5" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Request the catalog"}
      </Button>
    </form>
  );
}
