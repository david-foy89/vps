import { z } from "zod";
import { locationOptions, productInterestOptions } from "@/lib/site-config";

const honeypot = z.string().max(200).optional().or(z.literal(""));

export const quoteSchema = z.object({
  formType: z.literal("quote"),
  name: z.string().trim().min(2, "Enter your name.").max(80),
  company: z.string().trim().min(2, "Enter your company.").max(120),
  jobTitle: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a phone number.")
    .max(30, "That phone number is too long."),
  state: z.enum(locationOptions, {
    errorMap: () => ({ message: "Choose a location." }),
  }),
  productInterest: z.enum(productInterestOptions, {
    errorMap: () => ({ message: "Choose a product interest." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Add a few details so we can route the request.")
    .max(2000),
  website: honeypot,
});

export const catalogSchema = z.object({
  formType: z.literal("catalog"),
  name: z.string().trim().min(2, "Enter your name.").max(80),
  company: z.string().trim().min(2, "Enter your company.").max(120),
  jobTitle: z.string().trim().min(2, "Enter your title.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  website: honeypot,
});

export const contactSchema = z.discriminatedUnion("formType", [quoteSchema, catalogSchema]);

export type QuoteValues = z.infer<typeof quoteSchema>;
export type CatalogValues = z.infer<typeof catalogSchema>;
export type ContactPayload = z.infer<typeof contactSchema>;
