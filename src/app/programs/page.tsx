import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = { title: "Programs", description: "Art programs for ages four and up, high school students, and adults in Ardenwood, Fremont." };

export default function ProgramsPage() {
  return <><section className="page-hero"><p className="eyebrow">Programs for every stage</p><h1>Come as you are. Make what&apos;s next.</h1><p className="page-hero__lede">From age four through high school and adulthood, each group offers a supportive place to explore skills, ideas, and self-expression.</p></section><section className="section"><div className="program-list">{programs.map((program) => <article className="program-detail" key={program.slug}><div className="program-detail__age">{program.age}</div><div><h2>{program.name}</h2><p>{program.description}</p><div className="tag-list">{program.focuses.map((focus) => <span className="tag" key={focus}>{focus}</span>)}</div></div><Link className="button button--outline" href={program.route}>Explore this group</Link></article>)}</div><div className="info-strip"><span aria-hidden="true">✦</span><p>Not sure where to begin? Send a trial inquiry with your artist&apos;s age and interests. We&apos;ll help you find a comfortable fit.</p></div></section></>;
}
