"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { studioImages } from "@/lib/studio-images";

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos = useMemo(() => studioImages.map(({ file, alt }) => ({ src: `/images/studio/${file}`, alt })), []);
  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      <div className="gallery-grid">
        {studioImages.map((image, index) => (
          <button className="gallery-tile" type="button" key={image.file} onClick={() => setActiveIndex(index)} aria-label={`Open photo ${index + 1} in expanded view`}>
            <Image src={`/images/studio/${image.file}`} alt={image.alt} fill sizes="(max-width: 600px) 50vw, (max-width: 850px) 33vw, 25vw" quality={70} priority={index < 4} />
          </button>
        ))}
      </div>
      {activeIndex !== null && <PhotoLightbox photos={photos} index={activeIndex} onIndexChange={setActiveIndex} onClose={closeLightbox} />}
    </>
  );
}
