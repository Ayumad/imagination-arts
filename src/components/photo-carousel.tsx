"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { studioImages } from "@/lib/studio-images";

const slides = studioImages;

function GalleryGroup({ duplicate = false, onOpen }: { duplicate?: boolean; onOpen?: (index: number) => void }) {
  return (
    <div className="photo-carousel__group" aria-hidden={duplicate || undefined}>
      {slides.map(({ file, alt }, index) => duplicate ? (
        <figure className="studio-photo" key={file}>
          <Image
            src={`/images/studio/${file}`}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 600px) 76vw, 22vw"
            quality={70}
          />
        </figure>
      ) : (
        <button className="studio-photo" type="button" key={file} onClick={() => onOpen?.(index)} aria-label={`Open photo ${index + 1} in expanded view`}>
          <Image
            src={`/images/studio/${file}`}
            alt={alt}
            fill
            sizes="(max-width: 600px) 76vw, 22vw"
            quality={70}
            priority={index < 5}
          />
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
