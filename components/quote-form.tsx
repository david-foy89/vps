"use client";

import { cloneElement, useEffect, useId, useRef, useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteValues } from "@/lib/schemas";
import { locationOptions, productInterestOptions, site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status =
  | { type: "idle" }
  | { type: "success"; delivery: "sent" | "mailto" }
  | { type: "error"; message: string };

const fieldClass = "mt-1.5";

export function QuoteForm({ compact = false, id = "quote" }: { compact?: boolean; id?: string }) {
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      formType: "quote",
      name: "",
      company: "",
      jobTitle: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  useEffect(() => {
    if (status.type !== "idle") {
      statusRef.current?.focus();
    }
  }, [status]);

  async function onSubmit(values: QuoteValues) {
    setStatus({ type: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; mailto?: string; error?: string };
      if (!response.ok || !data.ok) {
        setStatus({
          type: "error",
          message: data.error || `The form did not send. Call ${site.phoneDisplay} or email ${site.email}.`,
        });
        return;
      }
      if (data.mailto) {
        window.location.href = data.mailto;
      }
      setStatus({ type: "success", delivery: data.mailto ? "mailto" : "sent" });
      reset({ formType: "quote", name: "", company: "", jobTitle: "", email: "", phone: "", message: "", website: "" });
    } catch {
      setStatus({ type: "error", message: `The form did not send. Call ${site.phoneDisplay}.` });
    }
  }

  if (status.type === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-card border border-line bg-white p-6 shadow-card"
      >
        <h3 className="font-heading text-2xl font-semibold text-navy">Request received.</h3>
        {status.delivery === "mailto" ? (
          <p className="mt-3 text-slate-700">
            Your email app should open a message to{" "}
            <a className="font-semibold text-navy underline" href={site.emailHref}>{site.email}</a>.
            Send that message to finish the request. You can also call{" "}
            <a className="font-semibold text-navy underline" href={site.phoneHref}>{site.phoneDisplay}</a>.
          </p>
        ) : (
          <p className="mt-3 text-slate-700">
            VPS has the details at {site.email} and will follow up at the email or phone you listed. If the job is time-sensitive, call{" "}
            <a className="font-semibold text-navy underline" href={site.phoneHref}>{site.phoneDisplay}</a>.
          </p>
        )}
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-card border border-line bg-white p-5 shadow-card md:p-6">
      <input type="hidden" value="quote" {...register("formType")} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} required>
          <Input className={fieldClass} autoComplete="name" aria-invalid={Boolean(errors.name)} {...register("name")} />
        </Field>
        <Field label="Company" error={errors.company?.message} required>
          <Input className={fieldClass} autoComplete="organization" aria-invalid={Boolean(errors.company)} {...register("company")} />
        </Field>
        {compact ? null : (
          <Field label="Job title" error={errors.jobTitle?.message}>
            <Input className={fieldClass} autoComplete="organization-title" {...register("jobTitle")} />
          </Field>
        )}
        <Field label="Email" error={errors.email?.message} required>
          <Input className={fieldClass} type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} {...register("email")} />
        </Field>
        <Field label="Phone" error={errors.phone?.message} required>
          <Input className={fieldClass} type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} {...register("phone")} />
        </Field>
        <Field label="Location / state" error={errors.state?.message} required>
          <select
            className="mt-1.5 flex h-11 w-full rounded-md border border-line bg-white px-3 text-base text-navy shadow-sm"
            aria-invalid={Boolean(errors.state)}
            defaultValue=""
            {...register("state")}
          >
            <option value="" disabled>
              Select
            </option>
            {locationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Product interest" error={errors.productInterest?.message} required className={compact ? "" : "sm:col-span-2"}>
          <select
            className="mt-1.5 flex h-11 w-full rounded-md border border-line bg-white px-3 text-base text-navy shadow-sm"
            aria-invalid={Boolean(errors.productInterest)}
            defaultValue=""
            {...register("productInterest")}
          >
            <option value="" disabled>
              Select
            </option>
            {productInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" error={errors.message?.message} required className="sm:col-span-2">
          <Textarea
            className={fieldClass}
            aria-invalid={Boolean(errors.message)}
            placeholder="Site location, equipment, burner size, and what you need."
            {...register("message")}
          />
        </Field>
      </div>

      {status.type === "error" ? (
        <p ref={statusRef} tabIndex={-1} role="alert" className="mt-4 text-sm font-medium text-red-800">
          {status.message}
        </p>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} className="scroll-mb-20">
          {isSubmitting ? "Sending…" : "Request a Quote"}
        </Button>
        <p className="text-sm text-slate-600">
          Or call <a className="font-semibold text-navy underline" href={site.phoneHref}>{site.phoneDisplay}</a>
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  className,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactElement;
}) {
  const uid = useId();
  const fieldId = `${uid}-field`;
  const errorId = `${uid}-error`;
  const control = cloneElement(children, {
    id: fieldId,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  });

  return (
    <div className={className}>
      <Label htmlFor={fieldId}>
        {label}
        {required ? <span className="text-safety-ink"> *</span> : null}
      </Label>
      {control}
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}
