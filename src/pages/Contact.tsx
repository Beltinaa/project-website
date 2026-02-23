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
        backgroundImage="/images/background5.png"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19893.68808861043!2d-0.1286189!3d51.5072172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333be1e4c5%3A0x1e8f6c4b2b1f3c3f!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1716220000000!5m2!1sen!2suk"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
