import type { ContactPayload } from "@/lib/schemas";
import { contacts } from "@/lib/site-config";

function linesFor(payload: ContactPayload) {
  if (payload.formType === "catalog") {
    return [
      "Catalog request",
      `Name: ${payload.name}`,
      `Company: ${payload.company}`,
      `Title: ${payload.jobTitle}`,
      `Email: ${payload.email}`,
    ];
  }

  return [
    "Quote request",
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Job title: ${payload.jobTitle || "[not provided]"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Location: ${payload.state}`,
    `Product interest: ${payload.productInterest}`,
    "",
    payload.message,
  ];
}

export function emailBody(payload: ContactPayload) {
  return linesFor(payload).join("\n");
}

export function emailSubject(payload: ContactPayload) {
  const who = payload.company.replace(/[\r\n]+/g, " ").slice(0, 80);
  return payload.formType === "catalog"
    ? `VPS catalog request — ${who}`
    : `VPS quote request — ${who}`;
}

export function mailtoHref(payload: ContactPayload) {
  const subject = encodeURIComponent(emailSubject(payload));
  const body = encodeURIComponent(emailBody(payload));
  const to = contacts.map((person) => person.email).join(",");
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
