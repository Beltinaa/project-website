import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../animations/ScrollReveal";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { beforeAfterPairs } from "../../data/beforeAfter";

const BeforeAfterGallery = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Before & After" subtitle="Rendering Transformations" />
        <div className="before-after-grid">
          {beforeAfterPairs.map((pair, index) => (
            <ScrollReveal key={pair.caption} delay={150 + index * 120}>
              <BeforeAfterSlider before={pair.before} after={pair.after} caption={pair.caption} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
