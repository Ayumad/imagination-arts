import { studioImages } from "@/lib/studio-images";

const slides = studioImages.map(({ file }) => file);

function GalleryGroup({ images, duplicate = false }: { images: string[]; duplicate?: boolean }) {
  return (
    <div className="photo-carousel__group" aria-hidden={duplicate || undefined}>
      {images.map((file) => (
        <figure className="studio-photo" key={file}>
          <img
            src={`/images/studio/${file}?v=3`}
            alt={duplicate ? "" : "Student artwork and making moments from Imagination Arts."}
            aria-hidden={duplicate || undefined}
            loading="eager"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}

export function PhotoCarousel() {
  return (
    <section className="photo-carousel" aria-label="Student artwork and studio gallery">
      <div className="photo-carousel__track"><GalleryGroup images={slides} /><GalleryGroup images={slides} duplicate /></div>
    </section>
  );
}
