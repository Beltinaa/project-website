import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";
import { renderSystems } from "../../data/renderSystems";

const RenderSystems = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading title="Render Systems" subtitle="Approved K Rend & Weber Solutions" />
        <div className="system-list">
          {renderSystems.map((system, index) => (
            <div
              key={system.title}
              className={`system-item ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <ScrollReveal>
                <div className="system-text">
                  <h3>{system.title}</h3>
                  <p>{system.description}</p>
                  <ul>
                    {system.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="scale" delay={120}>
                <div className="system-image">
                  <img src={system.image} alt={system.title} loading="lazy" />
                  <div className="image-overlay" aria-hidden="true" />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenderSystems;
