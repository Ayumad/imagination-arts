const slides = [
  ["student-art", "Student artwork", "Future photo slot for a finished student art piece."],
  ["studio-hands", "Hands at work", "Future photo slot for artists making together in the studio."],
  ["color-play", "Color experiments", "Future photo slot for paint, clay, collage, or mixed-media details."],
  ["classroom", "Creative community", "Future photo slot for a welcoming classroom or group moment."],
  ["art-wall", "Art on display", "Future photo slot for an artwork wall, project display, or studio detail."],
];

function GalleryGroup({ duplicate = false }: { duplicate?: boolean }) {
  return <div className="photo-carousel__group" aria-hidden={duplicate || undefined}>{slides.map(([style, title, description]) => <figure className={`photo-placeholder photo-placeholder--${style}`} key={title} role={duplicate ? undefined : "img"} aria-label={duplicate ? undefined : description}><figcaption><span>Future photo</span><strong>{title}</strong></figcaption></figure>)}</div>;
}

export function PhotoCarousel() {
  return <section className="photo-carousel" aria-label="Future student art and studio photo gallery"><div className="photo-carousel__track"><GalleryGroup /><GalleryGroup duplicate /></div></section>;
}
