import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/layout/PageHero";
import Button from "../components/ui/Button";
import ScrollReveal from "../components/animations/ScrollReveal";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceDetailSection from "../components/sections/ServiceDetailSection";
import { serviceDetails } from "../data/services";

const Services = () => {
  return (
    <>
      <PageMeta
        title="Our Services | KYR Construction Ltd"
        description="Rendering specialists and approved K Rend & Weber applicators. Explore KYR Construction Ltd services including formwork, hard landscaping, and groundworks."
      />
      <PageHero
        title="Our Services"
        subtitle="Rendering Specialists & Approved K Rend and Weber Applicators"
        backgroundImage="/images/background.png"
      />
      <section className="section service-detail service-feature" id="rendering">
        <div className="container split">
          <ScrollReveal>
            <div className="split-text">
              <SectionHeading title="Rendering Focus" subtitle={serviceDetails.rendering.title} />
              {serviceDetails.rendering.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <div className="approval-inline">
                <span className="approval-pill">K Rend Approved</span>
                <span className="approval-pill">Weber Certified</span>
              </div>
              <Button href="/contact" variant="accent" size="sm">
                {serviceDetails.rendering.cta}
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="scale" delay={120}>
            <div className="split-image">
              <img
                src={serviceDetails.rendering.image}
                alt="Rendering specialists delivering premium finishes"
                loading="lazy"
              />
              <div className="image-overlay" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <ServiceDetailSection
        id="formwork"
        title={serviceDetails.formwork.title}
        paragraphs={serviceDetails.formwork.paragraphs}
        image={serviceDetails.formwork.image}
        ctaLabel={serviceDetails.formwork.cta}
      />
      <ServiceDetailSection
        id="landscaping"
        title={serviceDetails.landscaping.title}
        paragraphs={serviceDetails.landscaping.paragraphs}
        image={serviceDetails.landscaping.image}
        ctaLabel={serviceDetails.landscaping.cta}
        reverse
      />
      <ServiceDetailSection
        id="groundworks"
        title={serviceDetails.groundworks.title}
        paragraphs={serviceDetails.groundworks.paragraphs}
        image={serviceDetails.groundworks.image}
        ctaLabel={serviceDetails.groundworks.cta}
      />
      <section className="section section-muted">
        <div className="container">
          <ScrollReveal>
            <div className="cta-inline">
              <h2>Not Sure What You Need? Contact Us for Expert Advice</h2>
              <Button href="/contact" variant="accent" size="sm">
                Speak with a Specialist
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Services;
