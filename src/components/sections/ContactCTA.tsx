import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";

const ContactCTA = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <ScrollReveal>
          <div className="cta-content">
            <div>
              <p className="section-title">Start Your Project</p>
              <h2>Ready to Transform Your Property?</h2>
              <p className="section-lead">Get a free, no-obligation quote today.</p>
            </div>
            <Button href="/contact" variant="accent" size="md">
              GET A FREE QUOTE
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactCTA;
