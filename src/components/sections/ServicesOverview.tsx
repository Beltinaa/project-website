import { Building2, Ruler, TreePine, Paintbrush } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";
import ServiceCard from "../ui/ServiceCard";
import { serviceCards } from "../../data/services";

const iconMap = {
  rendering: Paintbrush,
  formwork: Ruler,
  landscaping: TreePine,
  groundworks: Building2,
};

const ServicesOverview = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading title="What We Do" subtitle="Specialist Construction Services" />
        <div className="service-grid">
          {serviceCards.map((service, index) => {
            const Icon = iconMap[service.id];
            return (
              <ScrollReveal key={service.id} delay={150 + index * 120} variant="scale">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  href={service.href}
                  icon={<Icon size={24} />}
                  featured={service.featured}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
