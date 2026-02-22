import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItem } from "../../data/gallery";

type GalleryLightboxProps = {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const GalleryLightbox = ({ items, activeIndex, onClose, onNext, onPrev }: GalleryLightboxProps) => {
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("no-scroll");

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [activeIndex, onClose, onNext, onPrev]);

  if (activeIndex === null) return null;

  const item = items[activeIndex];

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Close gallery" type="button">
        <X size={24} />
      </button>
      <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous image" type="button">
        <ChevronLeft size={24} />
      </button>
      <div className="lightbox-content">
        <img src={item.src} alt={item.title} loading="lazy" />
        <p>{item.title}</p>
      </div>
      <button className="lightbox-nav next" onClick={onNext} aria-label="Next image" type="button">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default GalleryLightbox;
