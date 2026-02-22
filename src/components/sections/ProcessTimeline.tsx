import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";

const steps = [
  {
    title: "Survey & Quote",
    description: "Detailed site survey, specification advice, and transparent quotation.",
  },
  {
    title: "Surface Preparation",
    description: "Substrate checks, repairs, and priming to ensure perfect adhesion.",
  },
  {
    title: "Render Application",
    description: "Approved systems applied by specialist teams with clean detailing.",
  },
  {
    title: "Final Inspection",
    description: "Quality checks, client walkthrough, and aftercare guidance.",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading title="How We Work" subtitle="A Clear, Professional Process" />
        <div className="process-grid">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={150 + index * 120} variant="scale">
              <div className="process-step">
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
