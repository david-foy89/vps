import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/chrome";
import { PageHero, PageSection } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { contacts, site } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Vista Process Solutions, LLC handles information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lede="This page describes what the VPS website collects. It is not a substitute for a reviewed legal policy. Have counsel read it before launch."
      >
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Privacy" }]} />
      </PageHero>
      <PageSection>
        <div className="prose prose-slate max-w-3xl">
          <p>Effective date: [ADD PRIVACY POLICY DATE]</p>
          <h2>Who we are</h2>
          <p>
            {site.legalName} operates this website.{" "}
            {contacts.map((person) => (
              <span key={person.email}>
                {person.name}: {person.phoneDisplay}, {person.email}.{" "}
              </span>
            ))}
            Address: {site.address}.
          </p>
          <h2>What you send us</h2>
          <p>
            Quote and catalog forms collect the fields you fill in: name, company, job title, email, phone, location, product interest, and message, depending on the form. A hidden field is used to catch automated spam. If that field is filled, the submission is discarded and is not treated as a real inquiry.
          </p>
          <p>
            The form opens a message in the visitor’s email app addressed to {contacts.map((person) => person.email).join(" and ")}. Sending that message delivers the request. Do not send payment card numbers or passwords through the form.
          </p>
          <h2>Analytics</h2>
          <p>
            If a Google Analytics 4 measurement ID or a Meta Pixel ID is set in the site environment, those services may receive pages you view and similar technical data. If the variables are empty, those scripts are not loaded. VPS does not sell form submissions.
          </p>
          <h2>How long it is kept</h2>
          <p>
            [ADD RETENTION PERIOD]. Until that is decided, assume quote emails stay in the company inbox the way other business email does.
          </p>
          <h2>Your requests</h2>
          <p>
            To ask what information a form submission contains, or to ask VPS to delete it, call {contacts.map((person) => `${person.name} at ${person.phoneDisplay}`).join(" or ")} or email {contacts.map((person) => person.email).join(" or ")}.
          </p>
          <h2>Links</h2>
          <p>
            The Facebook link leaves this site. Facebook’s own policy applies there.
          </p>
        </div>
      </PageSection>
    </>
  );
}
