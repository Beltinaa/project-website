import { Award, BadgeCheck, Timer } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";

const features = [
  {
    title: "K Rend Approved",
    description: "Certified application with manufacturer-backed specifications.",
    icon: BadgeCheck,
  },
  {
    title: "Weber Certified",
    description: "Approved applicators delivering consistent, premium finishes.",
    icon: Award,
  },
  {
    title: "15+ Years Experience",
    description: "Proven expertise across premium residential and commercial façades.",
    icon: Timer,
  },
];

const RenderingSpotlight = () => {
  return (
    <section className="section" id="rendering-spotlight">
      <div className="container">
        <SectionHeading title="Rendering Focus" subtitle="London's Trusted Rendering Experts" />
        <ScrollReveal delay={150}>
          <p className="section-lead">
            KYR Construction Ltd are specialist rendering contractors delivering refined, long-lasting finishes. As
            approved K Rend and Weber applicators, we specify and apply premium systems built for performance in the
            UK climate.
          </p>
        </ScrollReveal>
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={200 + index * 120} variant="scale">
                <div className="feature-card">
                  <span className="feature-icon">
                    <Icon size={28} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RenderingSpotlight;
