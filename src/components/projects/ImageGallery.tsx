import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { projectCopy } from "../../i18n/projectCopy";
import type { ProjectImage } from "../../types";

export function ImageGallery({
  images,
}: Readonly<{ images: readonly ProjectImage[] }>) {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (activeIndex !== null && !element.open) element.showModal();
    if (activeIndex === null && element.open) element.close();
  }, [activeIndex]);

  if (images.length === 0) return null;
  const close = () => setActiveIndex(null);
  const move = (direction: number) =>
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + direction + images.length) % images.length,
    );

  return (
    <>
      <div className="image-gallery">
        {images.map((image, index) => (
          <button
            className={`gallery-item gallery-${image.kind}`}
            type="button"
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`${t(projectCopy.expandImage)}: ${t(image.alt)}`}
          >
            <img src={image.src} alt={t(image.alt)} loading="lazy" />
            <span>
              <span>{t(image.alt)}</span>
              <ZoomIn size={18} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      <dialog
        className="gallery-dialog"
        ref={dialog}
        aria-label={t(projectCopy.gallery)}
        onClose={close}
        onCancel={close}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <button
          className="gallery-close"
          type="button"
          onClick={close}
          aria-label={t(projectCopy.closeGallery)}
        >
          <X aria-hidden="true" />
        </button>
        {activeImage && (
          <figure>
            <img src={activeImage.src} alt={t(activeImage.alt)} />
            <figcaption>{t(activeImage.alt)}</figcaption>
          </figure>
        )}
        {images.length > 1 && (
          <div className="gallery-controls">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={t(projectCopy.previousImage)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <span aria-live="polite">
              {(activeIndex ?? 0) + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label={t(projectCopy.nextImage)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}

export default ImageGallery;
