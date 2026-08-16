import { NextRequest, NextResponse } from "next/server";
import { contact } from "@/lib/site-data";

type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  artistAge: string;
  program: string;
  contactMethod: string;
  availability: string;
  message: string;
  website: string;
  submissionId: string;
};

const fieldLimits: Record<keyof Omit<InquiryPayload, "submissionId">, number> = {
  name: 100,
  email: 254,
  phone: 40,
  artistAge: 60,
  program: 100,
  contactMethod: 30,
  availability: 200,
  message: 2000,
  website: 200,
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function readPayload(value: unknown): InquiryPayload | null {
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const payload = {} as InquiryPayload;

  for (const [field, limit] of Object.entries(fieldLimits) as [keyof typeof fieldLimits, number][]) {
    if (typeof record[field] !== "string" || record[field].length > limit) return null;
    payload[field] = record[field].trim();
  }

  if (typeof record.submissionId !== "string" || !/^[0-9a-f-]{36}$/i.test(record.submissionId)) return null;
  payload.submissionId = record.submissionId;

  if (!payload.name || !payload.email || !payload.phone || !payload.artistAge) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return null;

  return payload;
}

function detailRow(label: string, value: string) {
  return `<tr><td style="padding:8px 12px 8px 0;color:#657082;font-weight:700;vertical-align:top">${label}</td><td style="padding:8px 0;color:#27344a">${escapeHtml(value || "Not provided")}</td></tr>`;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid inquiry." }, { status: 400 });
  }

  const inquiry = readPayload(body);
  if (!inquiry) return NextResponse.json({ error: "Please check the inquiry fields." }, { status: 400 });

  // Quietly accept honeypot submissions so simple bots do not retry.
  if (inquiry.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Inquiry delivery is not configured." }, { status: 503 });

  const program = inquiry.program || "Not sure yet";
  const availability = inquiry.availability || "Not provided";
  const message = inquiry.message || "—";
  const subject = `New Imagination Arts inquiry — ${program}`;
  const text = [
    "New inquiry from imaginationarts.studio",
    "",
    `Parent / adult name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Artist age or grade: ${inquiry.artistAge}`,
    `Interested in: ${program}`,
    `Preferred contact: ${inquiry.contactMethod}`,
    `Best days / times: ${availability}`,
    "",
    "Anything else:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:28px;color:#27344a">
      <div style="background:#fff8e9;border-radius:18px;padding:26px;border-top:8px solid #f26f61">
        <p style="margin:0 0 8px;color:#9b609e;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.08em">New website inquiry</p>
        <h1 style="margin:0 0 20px;font-size:28px">${escapeHtml(program)}</h1>
        <table style="width:100%;border-collapse:collapse">
          ${detailRow("Name", inquiry.name)}
          ${detailRow("Email", inquiry.email)}
          ${detailRow("Phone", inquiry.phone)}
          ${detailRow("Artist age / grade", inquiry.artistAge)}
          ${detailRow("Program", program)}
          ${detailRow("Preferred reply", inquiry.contactMethod)}
          ${detailRow("Availability", availability)}
        </table>
        <div style="margin-top:20px;padding:18px;background:#fff;border-radius:12px">
          <strong>Anything else</strong>
          <p style="white-space:pre-wrap;line-height:1.55;margin:8px 0 0">${escapeHtml(message)}</p>
        </div>
      </div>
    </div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `inquiry-${inquiry.submissionId}`,
    },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM_EMAIL ?? "Imagination Arts <inquiries@imaginationarts.studio>",
      to: [contact.email],
      reply_to: inquiry.email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const providerError = await response.text();
    console.error("Inquiry email delivery failed", response.status, providerError.slice(0, 500));
    return NextResponse.json({ error: "Inquiry delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
