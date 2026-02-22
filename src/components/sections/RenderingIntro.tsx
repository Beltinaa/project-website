import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";

const RenderingIntro = () => {
  return (
    <section className="section">
      <div className="container split">
        <ScrollReveal>
          <div className="split-text">
            <SectionHeading title="Rendering Expertise" subtitle="Specialist Rendering Expertise" />
            <p>
              KYR Construction Ltd deliver premium rendering solutions for residential, commercial, new-build, and
              refurbishment projects. Our team specifies and applies advanced systems tailored to substrate, exposure,
              and architectural design.
            </p>
            <p>
              As approved K Rend and Weber applicators, we apply manufacturer-approved methods that maximise durability,
              breathability, and long-term colour performance. Our rendering process is precise, clean, and fully
              managed from survey to completion.
            </p>
            <p>
              We cover Greater London and surrounding counties, providing consistent quality, clear communication, and
              professional site management on every project.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={120}>
          <div className="split-image">
            <img src="/images/rendering-08.jpg" alt="Rendering specialists at work" loading="lazy" />
            <div className="image-overlay" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RenderingIntro;
