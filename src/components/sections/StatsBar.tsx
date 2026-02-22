import ScrollReveal from "../animations/ScrollReveal";
import StatCounter from "../ui/StatCounter";
import { stats } from "../../data/stats";

const StatsBar = () => {
  return (
    <section className="section section-muted">
      <div className="container">
        <ScrollReveal>
          <div className="stats-bar">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsBar;
