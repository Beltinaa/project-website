import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";
import { whyChooseUs } from "../../data/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Why Choose Us" subtitle="Trusted Specialists with Proven Results" />
        <div className="icon-grid">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={150 + index * 120} variant="scale">
                <div className="icon-card">
                  <span className="icon-wrapper">
                    <Icon size={28} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
