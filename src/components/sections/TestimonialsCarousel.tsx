import { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import ScrollReveal from "../animations/ScrollReveal";
import { testimonials } from "../../data/testimonials";

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [paused, index]);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Client Feedback" subtitle="Trusted by Homeowners and Developers" />
        <ScrollReveal delay={120}>
          <div
            className="testimonial-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div className="testimonial-slide" key={testimonial.name}>
                  <TestimonialCard
                    name={testimonial.name}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
            <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, dotIndex) => (
                <button
                  key={`dot-${dotIndex}`}
                  className={`dot ${dotIndex === index ? "active" : ""}`}
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`View testimonial ${dotIndex + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
