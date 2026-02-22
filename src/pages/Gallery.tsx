import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/layout/PageHero";
import GalleryGrid from "../components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <>
      <PageMeta
        title="Project Gallery | KYR Construction Ltd"
        description="Explore KYR Construction Ltd projects across rendering, formwork, hard landscaping, and civil engineering."
      />
      <PageHero
        title="Our Work"
        subtitle="Premium Rendering and Construction Projects"
        backgroundImage="/images/background.png"
      />
      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
};

export default Gallery;
