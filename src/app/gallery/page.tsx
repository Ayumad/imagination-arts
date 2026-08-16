import Image from "next/image";
import Link from "next/link";
import { studioImages } from "@/lib/studio-images";

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero gallery-hero">
        <p className="eyebrow">Studio gallery</p>
        <h1>Made with curious hands and big ideas.</h1>
        <p className="page-hero__lede">A look inside the colorful work, careful details, and creative energy of Imagination Arts.</p>
      </section>

      <section className="section gallery-section" aria-label="Student artwork and studio moments">
        <div className="gallery-grid">
          {studioImages.map((image, index) => (
            <figure className="gallery-tile" key={image.file}>
              <Image src={`/images/studio/${image.file}`} alt={image.alt} fill sizes="(max-width: 600px) 50vw, (max-width: 850px) 33vw, 25vw" priority={index < 4} />
            </figure>
          ))}
        </div>
      </section>

      <section className="section section--cream gallery-callout">
        <p className="eyebrow">Your artist&apos;s turn</p>
        <h2>Come make something worth looking at twice.</h2>
        <Link className="button button--ink" href="/contact">Ask about a trial class</Link>
      </section>
    </>
  );
}
