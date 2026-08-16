"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type LightboxPhoto = {
  src: string;
  alt: string;
};

type PhotoLightboxProps = {
  photos: LightboxPhoto[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export function PhotoLightbox({ photos, index, onIndexChange, onClose }: PhotoLightboxProps) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const indexRef = useRef(index);
  const photo = photos[index];

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onIndexChange((indexRef.current - 1 + photos.length) % photos.length);
      if (event.key === "ArrowRight") onIndexChange((indexRef.current + 1) % photos.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, onIndexChange, photos.length]);

  return (
    <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Expanded studio photo" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <button ref={closeButton} className="photo-lightbox__close" type="button" onClick={onClose} aria-label="Close expanded photo">×</button>
      <button className="photo-lightbox__nav photo-lightbox__nav--previous" type="button" onClick={() => onIndexChange((index - 1 + photos.length) % photos.length)} aria-label="Previous photo">‹</button>
      <div className="photo-lightbox__image">
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 600px) 100vw, 86vw" quality={82} priority />
      </div>
      <button className="photo-lightbox__nav photo-lightbox__nav--next" type="button" onClick={() => onIndexChange((index + 1) % photos.length)} aria-label="Next photo">›</button>
    </div>
  );
}
