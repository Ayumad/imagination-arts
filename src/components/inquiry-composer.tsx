"use client";

import { FormEvent, useState } from "react";
import { programs } from "@/lib/site-data";

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  artistAge: string;
  program: string;
  contactMethod: string;
  availability: string;
  message: string;
  website: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const initialInquiry: Inquiry = {
  name: "",
  email: "",
  phone: "",
  artistAge: "",
  program: "",
  contactMethod: "Email",
  availability: "",
  message: "",
  website: "",
};

export function InquiryComposer() {
  const [inquiry, setInquiry] = useState<Inquiry>(initialInquiry);
  const [status, setStatus] = useState<FormStatus>("idle");

  const update = (field: keyof Inquiry, value: string) => {
    setInquiry((current) => ({ ...current, [field]: value }));
    if (status !== "sending") setStatus("idle");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...inquiry, submissionId: crypto.randomUUID() }),
      });

      if (!response.ok) throw new Error("Inquiry delivery failed");

      setInquiry(initialInquiry);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <p className="eyebrow">Trial inquiry</p>
      <h2>Tell us about your artist.</h2>
      <p className="form-intro">Send your inquiry directly to Imagination Arts. Your details are delivered by email and are not stored in a website database.</p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Parent / adult name</label>
          <input id="name" autoComplete="name" required maxLength={100} value={inquiry.name} onChange={(event) => update("name", event.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="artistAge">Artist age or grade</label>
          <input id="artistAge" required maxLength={60} placeholder="For example: 7 or 3rd grade" value={inquiry.artistAge} onChange={(event) => update("artistAge", event.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" required maxLength={254} value={inquiry.email} onChange={(event) => update("email", event.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" autoComplete="tel" required maxLength={40} value={inquiry.phone} onChange={(event) => update("phone", event.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="program">What interests you?</label>
          <select id="program" value={inquiry.program} onChange={(event) => update("program", event.target.value)}>
            <option value="">I&apos;m not sure yet</option>
            {programs.map((program) => <option key={program.slug}>{program.name}</option>)}
            <option>Camp or workshop</option>
            <option>Birthday party</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="contactMethod">Best way to reply</label>
          <select id="contactMethod" value={inquiry.contactMethod} onChange={(event) => update("contactMethod", event.target.value)}>
            <option>Email</option>
            <option>Phone call</option>
            <option>Text message</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="availability">Best days or times</label>
          <input id="availability" maxLength={200} placeholder="For example: weekday afternoons or Saturday mornings" value={inquiry.availability} onChange={(event) => update("availability", event.target.value)} />
        </div>
        <div className="field field--full">
          <label htmlFor="message">Anything else you&apos;d like to share?</label>
          <textarea id="message" maxLength={2000} value={inquiry.message} onChange={(event) => update("message", event.target.value)} />
        </div>
        <div className="field field--website" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" tabIndex={-1} autoComplete="off" value={inquiry.website} onChange={(event) => update("website", event.target.value)} />
        </div>
      </div>

      <div className="form-actions">
        <button className="button button--coral" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending your inquiry…" : "Send inquiry"}
        </button>
        <p className="form-note">Sent securely to Imagination Arts—no email or texting app needed.</p>
      </div>

      {status === "success" && (
        <div className="prepared-message" role="status">
          <h3>Your inquiry is on its way!</h3>
          <p>Thank you for reaching out. Imagination Arts will reply using your preferred contact method.</p>
        </div>
      )}

      {status === "error" && (
        <div className="form-error" role="alert">
          <h3>We couldn&apos;t send that just yet.</h3>
          <p>Please try again, or use the direct email or phone options beside the form.</p>
        </div>
      )}
    </form>
  );
}
