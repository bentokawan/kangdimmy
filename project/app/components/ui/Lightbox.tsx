"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Photo } from "../../lib/site";
import { Modal } from "./Modal";

export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const photo = photos[index];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, photos.length, onNavigate]);

  if (!photo) return null;

  return (
    <Modal
      open
      onClose={onClose}
      label={`Dokumentasi ${index + 1} dari ${photos.length}: ${photo.caption || photo.alt}`}
      size="image"
    >
      <div
        className={
          "relative w-full bg-[#111111] rounded-[10px] overflow-hidden " +
          (photo.height > photo.width ? "aspect-[3/4] max-w-[420px] mx-auto" : "aspect-[3/2]")
        }
      >
        <Image src={photo.src} alt={photo.alt} fill sizes="90vw" className="object-contain" />
      </div>
      <div className="flex items-center justify-between gap-4 mt-3">
        <button
          type="button"
          className="btn"
          onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
        >
          ← Sebelumnya
        </button>
        <p className="text-sm text-[#3A3A3A] text-center">{photo.caption}</p>        <button
          type="button"
          className="btn"
          onClick={() => onNavigate((index + 1) % photos.length)}
        >
          Berikutnya →
        </button>
      </div>
    </Modal>
  );
}
