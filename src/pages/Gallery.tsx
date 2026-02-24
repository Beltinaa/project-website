import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/layout/PageHero";
import GalleryGrid from "../components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <>
      <PageMeta
        title="Project Gallery | KYR Construction Ltd"
        description="Explore KYR Construction Ltd rendering projects across Barking, Luton, and Greater London."
      />
      <PageHero
        title="Our Work"
        subtitle="Premium Rendering and Construction Projects"
        backgroundImage="/images/background4.webp"
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
