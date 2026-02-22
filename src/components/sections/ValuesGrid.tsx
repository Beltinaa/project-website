import { Clock, Handshake, Hammer, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";

const values = [
  {
    title: "Quality Craftsmanship",
    description: "Meticulous preparation and flawless finishing on every project.",
    icon: Hammer,
  },
  {
    title: "Safety First",
    description: "Strict compliance with site safety standards and best practice.",
    icon: ShieldCheck,
  },
  {
    title: "Reliability",
    description: "Clear timelines, proactive communication, and dependable delivery.",
    icon: Clock,
  },
  {
    title: "Professional Service",
    description: "Respectful, tidy, and customer-focused on every site.",
    icon: Handshake,
  },
];

const ValuesGrid = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Our Values" subtitle="Built on Quality, Safety, and Trust" />
        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={value.title} delay={150 + index * 120} variant="scale">
                <div className="value-card">
                  <span className="icon-wrapper">
                    <Icon size={28} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
