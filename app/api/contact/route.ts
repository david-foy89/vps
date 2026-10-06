import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { mailtoHref, sendContactEmail } from "@/lib/email";
import { site } from "@/lib/site-config";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json({ ok: false, error: "Request was rejected." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ ok: false, error: "Request was rejected." }, { status: 403 });
    }
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Request was not valid JSON." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Check the highlighted fields and try again." },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const result = await sendContactEmail(parsed.data);
    if (!result.delivered) {
      console.info("[vps-contact-mailto]", parsed.data.formType, parsed.data.email);
      return NextResponse.json({ ok: true, mailto: mailtoHref(parsed.data) });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[vps-contact]", error instanceof Error ? error.message : "send failed");
    return NextResponse.json(
      { ok: false, error: `The message could not be sent. Call ${site.phoneDisplay}.` },
      { status: 502 },
    );
  }
}
