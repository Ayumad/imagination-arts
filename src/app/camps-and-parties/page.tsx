import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Camps & Parties", description: "Ask about art camps, creative workshops, and birthday parties at Imagination Arts." };
const offerings = [
  ["☀", "School-break art camps", "Colorful multi-day creative experiences built around projects, materials, and room to explore. Ask about seasonal availability."],
  ["✦", "One-day workshops", "A focused, welcoming way to try a new material, celebrate a season, or make something surprising in one sitting."],
  ["◌", "Birthday art parties", "Celebrate with a hands-on project designed for your group. We’ll help you start the conversation around age range, theme, and timing."],
  ["▧", "Creative gatherings", "Bring a group together for an art-forward get-together, community event, or adult creative session."],
];

export default function CampsAndPartiesPage() {
  return <><section className="page-hero"><p className="eyebrow">More ways to make</p><h1>Turn an ordinary day into a colorful one.</h1><p className="page-hero__lede">Camps, workshops, parties, and creative gatherings offer extra ways to make room for art. Availability changes with the season, so let&apos;s start with a conversation.</p></section><section className="section"><div className="content-grid">{offerings.map(([icon, title, description]) => <article className="offering-card" key={title}><div className="offering-card__icon" aria-hidden="true">{icon}</div><h2>{title}</h2><p>{description}</p><Link className="text-link" href="/contact">Ask about availability <span aria-hidden="true">→</span></Link></article>)}</div><div className="callout" style={{ marginBottom: 0 }}><p className="eyebrow">A little planning goes a long way</p><h2>Have a creative occasion in mind?</h2><p>Share the date, age group, and what you&apos;re imagining. We&apos;ll follow up with the current options.</p><Link className="button button--coral" href="/contact">Start an inquiry</Link></div></section></>;
}
