import { Link } from "react-router-dom";
import ScrollReveal from "../animations/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    image: "/images/rendering-08.webp",
    caption: "Contemporary render finish — London",
  },
  {
    image: "/images/rendering-07.webp",
    caption: "Façade refurbishment — Surrey",
  },
  {
    image: "/images/rendering-10.webp",
    caption: "Luxury render detailing — Hertfordshire",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeading title="Project Showcase" subtitle="Premium Finishes Across East London & Greater London" />
        <div className="showcase-grid">
          {projects.map((project, index) => (
            <ScrollReveal key={project.caption} delay={150 + index * 120} variant="scale">
              <figure className="showcase-item">
                <img src={project.image} alt={project.caption} loading="lazy" />
                <figcaption>{project.caption}</figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={180}>
          <Link className="text-link" to="/gallery">
            View All Projects
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectShowcase;
