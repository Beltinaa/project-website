import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/layout/PageHero";
import ScrollReveal from "../components/animations/ScrollReveal";
import StatsBar from "../components/sections/StatsBar";
import ValuesGrid from "../components/sections/ValuesGrid";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";

const About = () => {
  return (
    <>
      <PageMeta
        title="About KYR Construction | Rendering Specialists"
        description="Learn about KYR Construction Ltd, a rendering-first construction company serving Barking, Luton, Greater London, and the South East, with availability across the UK on request."
      />
      <PageHero
        title="About KYR Construction"
        subtitle="Rendering-First Craftsmanship Built on 15+ Years of Experience"
        backgroundImage="/images/background3.webp"
      />
      <section className="section">
        <div className="container split">
          <ScrollReveal>
            <div className="split-text">
              <SectionHeading title="Our Story" subtitle="Specialists Trusted Across East London & Greater London" />
              <p>
                KYR Construction Ltd was founded with a clear focus on premium rendering. Over the past 15+ years, we
                have grown into a trusted partner for homeowners, developers, and commercial clients across Barking,
                Luton, and Greater London seeking dependable façades and structural works.
              </p>
              <p>
                Our reputation is built on expert preparation, clean detailing, and approved application of K Rend and
                Weber systems. Every project is managed with professionalism, transparent communication, and strict
                adherence to safety standards.
              </p>
              <p>
                Today, KYR continues to expand across East London, North London, and the South East, delivering refined
                finishes and robust construction solutions with a rendering-first mindset. For larger projects, we are
                available across the UK on request.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="scale" delay={120}>
            <div className="split-image">
              <img src="/images/rendering-09.webp" alt="KYR Construction team on site" loading="lazy" />
              <div className="image-overlay" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <StatsBar />
      <ValuesGrid />
      <section className="section section-alt">
        <div className="container split reverse">
          <ScrollReveal>
            <div className="split-text">
              <SectionHeading title="Our Team" subtitle="Dedicated Workforce" />
              <p>
                Our skilled teams are trained to deliver consistent quality across rendering and hard landscaping. We
                keep sites tidy, schedules clear, and standards uncompromising.
              </p>
              <Button href="/contact" variant="accent" size="sm">
                Work With Us
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="scale" delay={120}>
            <div className="split-image">
              <img src="/images/rendering-08.webp" alt="Construction workforce delivering premium finishes" loading="lazy" />
              <div className="image-overlay" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <ScrollReveal>
            <div className="cta-inline">
              <h2>Work With a Team You Can Trust</h2>
              <Button href="/contact" variant="accent" size="sm">
                Contact KYR Construction
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
