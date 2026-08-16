import Link from "next/link";
import { SectionDoodle } from "@/components/visuals";
import { PhotoCarousel } from "@/components/photo-carousel";
import { contact, programs } from "@/lib/site-data";

const highlights = [
  ["Explore", "Curious projects that make room for play, questions, and happy accidents."],
  ["Practice", "Friendly guidance in drawing, painting, color, mixed media, and making."],
  ["Share", "A supportive studio where every artist has something original to say."],
];

export default function Home() {
  return (
    <>
      <section className="hero hero--stacked">
        <div className="hero__copy hero__copy--center hero__copy--heading">
          <h1 className="studio-title">Imagination Arts</h1>
        </div>
        <PhotoCarousel />
        <div className="hero__copy hero__copy--center hero__copy--intro">
          <p className="hero__tagline">Big imaginations start with one colorful idea.</p>
          <p className="hero__lede">
            Joyful, skill-building art classes for artists ages four and up, from young creators to high schoolers and adults.
            Come make a beautiful mess, learn something new, and create work that feels like you.
          </p>
          <div className="button-row">
            <Link className="button button--coral" href="/contact">Ask about a trial class</Link>
            <Link className="text-link" href="/programs">Explore programs <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero__note">Ages 4+ · Small-group learning · All levels welcome</p>
        </div>
      </section>

      <section className="section section--cream intro-grid">
        <div>
          <p className="eyebrow">Made for growing artists</p>
          <h2>A studio where trying counts.</h2>
          <p className="body-large">
            Imagination Arts is a welcoming neighborhood studio for artists who are just beginning,
            deepening their skills, or returning to creativity after a long pause.
          </p>
        </div>
        <div className="stacked-notes" aria-label="What students experience">
          {highlights.map(([title, description], index) => (
            <article className={`note-card note-card--${index + 1}`} key={title}>
              <span className="note-card__number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section programs-preview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your starting point</p>
            <h2>Art grows with you.</h2>
          </div>
          <Link className="text-link" href="/programs">See all programs <span aria-hidden="true">→</span></Link>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className={`program-card program-card--${program.tone}`} key={program.slug}>
              <span className="program-card__shape" aria-hidden="true" />
              <p className="program-card__age">{program.age}</p>
              <h3>{program.name}</h3>
              <p>{program.shortDescription}</p>
              <Link href={program.route} className="arrow-link" aria-label={`Learn about ${program.name}`}>Learn more <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section visit-section">
        <div>
          <p className="eyebrow">Visit the studio</p>
          <h2>Find your creative corner in Ardenwood.</h2>
          <p className="body-large">Imagination Arts is part of the Ardenwood neighborhood in Fremont, California. Exact arrival details are shared directly with enrolled families.</p>
        </div>
        <div className="visit-card"><span className="visit-card__pin" aria-hidden="true">●</span><p>Studio area</p><strong>{contact.neighborhood}</strong><Link className="text-link" href="/contact">Ask about a visit <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="section studio-band">
        <SectionDoodle />
        <div className="studio-band__copy">
          <p className="eyebrow">The Imagination Arts way</p>
          <h2>Thoughtful teaching, plenty of room to play.</h2>
          <p>
            We pair real art foundations with open-ended creative choices. That means students can
            build confidence with technique while making work that still feels wonderfully their own.
          </p>
          <Link className="button button--ink" href="/about">Our studio approach</Link>
        </div>
      </section>

      <section className="section callout">
        <div className="callout__ribbon" aria-hidden="true">Make something wonderful</div>
        <p className="eyebrow">Ready when you are</p>
        <h2>Let&apos;s find the right creative fit.</h2>
        <p>Tell us a little about your artist and we&apos;ll help you choose a welcoming place to begin.</p>
        <Link className="button button--sun" href="/contact">Start a trial inquiry</Link>
      </section>
    </>
  );
}
