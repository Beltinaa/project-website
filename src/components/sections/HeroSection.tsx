import { CSSProperties } from "react";
import Button from "../ui/Button";
import ParticleBackground from "../animations/ParticleBackground";
import { company } from "../../data/company";

const HeroSection = () => {
  const heroStyle = {
    "--hero-image": "url('/images/rendering-09.jpg')",
  } as CSSProperties;

  return (
    <section className="hero" style={heroStyle}>
      <ParticleBackground />
      <div className="container hero-content">
        <p className="hero-eyebrow">Rendering Specialists</p>
        <h1>{company.name}</h1>
        <h2>Rendering Specialists | Approved K Rend &amp; Weber Applicators</h2>
        <p className="hero-subtitle">{company.secondaryTagline}</p>
        <Button href="/contact" variant="accent" size="lg">
          Get a Free Quote
        </Button>
      </div>
      <a className="scroll-indicator" href="#rendering-spotlight" aria-label="Scroll to rendering spotlight">
        Scroll
        <span></span>
      </a>
    </section>
  );
};

export default HeroSection;
