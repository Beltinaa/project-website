import { CSSProperties, useEffect, useState } from "react";
import Button from "../ui/Button";
import ParticleBackground from "../animations/ParticleBackground";
import { company } from "../../data/company";

const HeroSection = () => {
  const heroImages = [
    "/images/background1.webp",
    "/images/background2.webp",
    "/images/background3.webp",
    "/images/background4.webp",
    "/images/background5.webp",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const updateMotion = () => {
      setAllowMotion(!motionQuery.matches && !mobileQuery.matches);
    };

    updateMotion();
    motionQuery.addEventListener("change", updateMotion);
    mobileQuery.addEventListener("change", updateMotion);

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      mobileQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    if (!allowMotion) return;
    const timeout = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4200);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, allowMotion, heroImages.length]);

  const heroStyle = {
    "--hero-image": `url('${heroImages[0]}')`,
  } as CSSProperties;

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-backgrounds" aria-hidden="true">
        {heroImages.map((image, index) => (
          <span
            key={image}
            className={`hero-bg ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>
      <ParticleBackground />
      <div className="container hero-content">
        <p className="hero-eyebrow">Rendering Specialists</p>
        <h1>{company.name}</h1>
        <h2>Rendering Specialists | Approved K Rend &amp; Weber Applicators</h2>
        <p className="hero-subtitle">{company.secondaryTagline}</p>
        <p className="hero-secondary">
          Covering East London, North London &amp; the South East. Available across the UK for larger projects.
        </p>
        <Button href="/contact" variant="accent" size="lg">
          GET A FREE QUOTE
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
