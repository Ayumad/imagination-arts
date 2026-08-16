import Image from "next/image";

const slides = [
  { file: "painting-landscape.jpeg", title: "Painting in progress", alt: "A young artist painting a bright landscape on canvas." },
  { file: "sunset-artwork.jpeg", title: "Artwork on display", alt: "A student-made sunset painting with silhouetted trees." },
  { file: "pencil-sketching.jpeg", title: "Sketching details", alt: "An artist drawing a palm tree scene in pencil." },
  { file: "colorful-bird.jpeg", title: "Colorful ideas", alt: "A young artist painting a colorful bird on canvas." },
  { file: "cherry-blossom-art.jpeg", title: "Making something special", alt: "A student adding details to a cherry blossom artwork." },
];

function GalleryGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="photo-carousel__group" aria-hidden={duplicate || undefined}>
      {slides.map((slide) => (
        <figure className="studio-photo" key={slide.file}>
          <Image
            src={`/images/studio/${slide.file}`}
            alt={duplicate ? "" : slide.alt}
            fill
            sizes="(max-width: 600px) 158px, (max-width: 1180px) 18vw, 211px"
            priority={!duplicate}
          />
          <figcaption>{slide.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function PhotoCarousel() {
  return <section className="photo-carousel" aria-label="Student artwork and studio gallery"><div className="photo-carousel__track"><GalleryGroup /><GalleryGroup duplicate /></div></section>;
}
