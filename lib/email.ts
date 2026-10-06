import nodemailer from "nodemailer";
import type { ContactPayload } from "@/lib/schemas";
import { emailBody, emailSubject } from "@/lib/mailto";

export { emailBody, emailSubject, mailtoHref } from "@/lib/mailto";

export async function sendContactEmail(payload: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const subject = emailSubject(payload);
  const text = emailBody(payload);
  const replyTo = payload.email;

  if (!to || !from) {
    return { delivered: false as const, reason: "not-configured" as const };
  }

  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({ from, to, subject, text, replyTo });
    if (result.error) {
      throw new Error(result.error.message);
    }
    return { delivered: true as const };
  }

  if (process.env.SMTP_HOST) {
    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transporter.sendMail({ from, to, subject, text, replyTo });
    return { delivered: true as const };
  }

  return { delivered: false as const, reason: "not-configured" as const };
}
