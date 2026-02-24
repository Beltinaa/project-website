import PageMeta from "../components/seo/PageMeta";
import PageHero from "../components/layout/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import ScrollReveal from "../components/animations/ScrollReveal";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  return (
    <>
      <PageMeta
        title="Contact KYR Construction | Get In Touch"
        description="Contact KYR Construction Ltd for rendering and hard landscaping across Barking, Luton, Greater London, and the South East."
      />
      <PageHero
        title="Get In Touch"
        subtitle="Serving Barking, Luton & Greater London"
        backgroundImage="/images/background5.webp"
      />
      <section className="section">
        <div className="container">
          <SectionHeading title="Contact" subtitle="Let's Discuss Your Project" />
          <div className="contact-grid">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <ContactInfo />
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <ScrollReveal>
            <div className="map-embed">
              <iframe
                title="KYR Construction service area"
                src="https://www.google.com/maps?q=Barking,+London&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <span className="map-circle" aria-hidden="true"></span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
