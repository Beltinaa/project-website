import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";

export type ServiceDetailSectionProps = {
  id?: string;
  title: string;
  paragraphs: string[];
  image: string;
  ctaLabel: string;
  reverse?: boolean;
};

const ServiceDetailSection = ({
  id,
  title,
  paragraphs,
  image,
  ctaLabel,
  reverse = false,
}: ServiceDetailSectionProps) => {
  return (
    <section className="section service-detail" id={id}>
      <div className={`container split ${reverse ? "reverse" : ""}`}>
        <ScrollReveal variant="fade-up">
          <div className="split-text">
            <SectionHeading title="Service" subtitle={title} />
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <Button href="/contact" variant="accent" size="sm">
              {ctaLabel}
            </Button>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={120}>
          <div className="split-image">
            <img src={image} alt={title} loading="lazy" />
            <div className="image-overlay" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
