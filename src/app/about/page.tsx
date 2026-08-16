import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">A neighborhood art studio</p>
        <h1>Creativity feels better when you feel welcome.</h1>
        <p className="page-hero__lede">Imagination Arts is built around a simple belief: every artist deserves the tools, encouragement, and breathing room to make something that feels like their own.</p>
      </section>

      <section className="section">
        <div className="about-grid">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>Guidance with room for surprise.</h2>
            <ul className="approach-list">
              <li><span className="approach-list__number">01</span><div><strong>Start with curiosity</strong><p>Questions, experiments, and happy accidents are part of the work—not detours from it.</p></div></li>
              <li><span className="approach-list__number">02</span><div><strong>Build real skills</strong><p>Students gain confidence through approachable foundations in drawing, color, composition, and materials.</p></div></li>
              <li><span className="approach-list__number">03</span><div><strong>Honor every voice</strong><p>There is more than one good way to make art. We celebrate the details that make each artist&apos;s work personal.</p></div></li>
              <li><span className="approach-list__number">04</span><div><strong>Make room for community</strong><p>The studio is a friendly place to learn alongside others, share ideas, and enjoy the process together.</p></div></li>
            </ul>
          </div>
          <figure className="about-photo">
            <Image src="/images/studio/studio-making.jpeg" alt="A student adding careful details to a colorful artwork in the studio." fill sizes="(max-width: 850px) 100vw, 46vw" />
            <figcaption>Every idea deserves a little room to grow.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--cream">
        <div className="section-heading"><div><p className="eyebrow">Local and welcoming</p><h2>Rooted in Ardenwood, open to every artist.</h2></div></div>
        <p className="body-large">We&apos;re proud to be part of the Fremont community. Exact studio arrival details are shared directly with enrolled families.</p>
        <Link className="button button--ink" href="/contact">Ask about a trial class</Link>
      </section>
    </>
  );
}
