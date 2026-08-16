"use client";

import { useCallback, useMemo, useState } from "react";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { studioImages } from "@/lib/studio-images";

const slides = studioImages;

function GalleryGroup({ duplicate = false, onOpen }: { duplicate?: boolean; onOpen?: (index: number) => void }) {
  return (
    <div className="photo-carousel__group" aria-hidden={duplicate || undefined}>
      {slides.map(({ file, alt }, index) => duplicate ? (
        <figure className="studio-photo" key={file}>
          <img
            src={`/images/studio/${file}?v=4`}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
        </figure>
      ) : (
        <button className="studio-photo" type="button" key={file} onClick={() => onOpen?.(index)} aria-label={`Open photo ${index + 1} in expanded view`}>
          <img src={`/images/studio/${file}?v=4`} alt={alt} loading="eager" decoding="async" />
        </button>
      ))}
    </div>
  );
}

export function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos = useMemo(() => slides.map(({ file, alt }) => ({ src: `/images/studio/${file}`, alt })), []);
  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      <section className={`photo-carousel${activeIndex !== null ? " photo-carousel--paused" : ""}`} aria-label="Student artwork and studio gallery">
        <div className="photo-carousel__track"><GalleryGroup onOpen={setActiveIndex} /><GalleryGroup duplicate /></div>
      </section>
      {activeIndex !== null && <PhotoLightbox photos={photos} index={activeIndex} onIndexChange={setActiveIndex} onClose={closeLightbox} />}
    </>
  );
}
