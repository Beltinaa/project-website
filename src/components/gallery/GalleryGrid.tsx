import { useMemo, useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import GalleryLightbox from "./GalleryLightbox";
import { galleryCategories, galleryItems, GalleryFilter } from "../../data/gallery";

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % filteredItems.length));
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length));
  };

  return (
    <div className="gallery-section">
      <div className="filter-bar" role="tablist" aria-label="Filter projects">
        {galleryCategories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? "active" : ""}`}
            onClick={() => {
              setActiveFilter(category as GalleryFilter);
              setActiveIndex(null);
            }}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <ScrollReveal key={item.id} delay={100 + index * 80} variant="scale">
            <button
              className="gallery-item"
              onClick={() => openLightbox(index)}
              aria-label={`Open ${item.title}`}
              type="button"
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.category}</span>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>
      <GalleryLightbox
        items={filteredItems}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </div>
  );
};

export default GalleryGrid;
