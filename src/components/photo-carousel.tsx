const slides = [
  "737c23b1-6787-4a03-9b5f-83cdf9a2cbe0.JPG",
  "83a8422d-e177-48e1-ab2d-1ac1ee7f9b6a.jpeg",
  "IMG_0086.jpeg",
  "IMG_0088.jpeg",
  "IMG_0270.jpeg",
  "IMG_0350.jpeg",
  "IMG_2088.JPG",
  "IMG_2667.jpeg",
  "IMG_2671.jpeg",
  "IMG_2804.jpeg",
  "IMG_2810.jpeg",
  "IMG_2907.jpeg",
  "IMG_4101.jpeg",
  "IMG_4103.jpeg",
  "IMG_4719.jpeg",
  "IMG_4805.jpeg",
  "IMG_5143.jpeg",
  "IMG_5727.jpeg",
  "IMG_5827.jpeg",
  "IMG_8167.JPG",
  "IMG_8977.jpeg",
  "IMG_9230.jpeg",
  "IMG_9977.jpeg",
];

function GalleryGroup({ images, duplicate = false }: { images: string[]; duplicate?: boolean }) {
  return (
    <div className="photo-carousel__group" aria-hidden={duplicate || undefined}>
      {images.map((file) => (
        <figure className="studio-photo" key={file}>
          <img
            src={`/images/studio/${file}`}
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
