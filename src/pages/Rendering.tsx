import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/layout/PageHero";
import RenderingIntro from "../components/sections/RenderingIntro";
import RenderSystems from "../components/sections/RenderSystems";
import ApprovalBadges from "../components/sections/ApprovalBadges";
import BeforeAfterGallery from "../components/sections/BeforeAfterGallery";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import Button from "../components/ui/Button";
import ScrollReveal from "../components/animations/ScrollReveal";

const Rendering = () => {
  return (
    <>
      <PageMeta
        title="Rendering Specialists | KYR Construction Ltd"
        description="Approved K Rend & Weber applicators delivering premium rendering systems, insulated facades, and long-lasting finishes across the UK."
      />
      <PageHero
        title="Rendering Specialists"
        subtitle="Approved Applicators of K Rend & Weber Systems"
        backgroundImage="/images/background.png"
      />
      <RenderingIntro />
      <RenderSystems />
      <ApprovalBadges />
      <BeforeAfterGallery />
      <ProcessTimeline />
      <section className="section section-muted">
        <div className="container">
          <ScrollReveal>
            <div className="cta-inline">
              <h2>Ready for a Premium Rendering Finish?</h2>
              <Button href="/contact" variant="accent" size="sm">
                GET A FREE QUOTE
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Rendering;
