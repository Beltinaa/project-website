import PageMeta from "../components/seo/PageMeta";
import HeroSection from "../components/sections/HeroSection";
import RenderingSpotlight from "../components/sections/RenderingSpotlight";
import ServicesOverview from "../components/sections/ServicesOverview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ProjectShowcase from "../components/sections/ProjectShowcase";
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel";
import ContactCTA from "../components/sections/ContactCTA";

const Home = () => {
  return (
    <>
      <PageMeta
        title="KYR Construction Ltd | Rendering Specialists"
        description="KYR Construction Ltd are rendering specialists and approved K Rend & Weber applicators serving Barking, Luton, Greater London, and the South East, with availability across the UK on request."
      />
      <HeroSection />
      <RenderingSpotlight />
      <ServicesOverview />
      <WhyChooseUs />
      <ProjectShowcase />
      <TestimonialsCarousel />
      <ContactCTA />
    </>
  );
};

export default Home;
