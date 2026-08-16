import type { Metadata } from "next";
import { InquiryComposer } from "@/components/inquiry-composer";
import { contact, faqs } from "@/lib/site-data";

export const metadata: Metadata = { title: "Trial Inquiry", description: "Ask about art classes, camps, workshops, and parties at Imagination Arts in Ardenwood, Fremont." };

export default function ContactPage() {
  return <><section className="page-hero"><p className="eyebrow">Let&apos;s make a plan</p><h1>Find a creative place to begin.</h1><p className="page-hero__lede">Tell us about your artist and send your inquiry right here. We&apos;ll receive it directly and get back to you about the best next step.</p></section><section className="section"><div className="contact-layout"><aside className="contact-card"><p className="eyebrow">Prefer to reach out directly?</p><h2>We&apos;d love to hear from you.</h2><p>Classes, camps, workshops, parties, and all the curious questions in between.</p><div className="contact-methods"><a className="contact-method" href={`mailto:${contact.email}`}><span>Email</span>{contact.email}</a><a className="contact-method" href={`tel:${contact.phoneInternational}`}><span>Call or text</span>{contact.phoneDisplay}</a><div className="contact-method"><span>Studio area</span>{contact.neighborhood}</div></div></aside><InquiryComposer /></div><div className="faq"><p className="eyebrow">Helpful questions</p><h2>Before your first colorful day.</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section></>;
}
