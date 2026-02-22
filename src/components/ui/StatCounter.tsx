import useInView from "../animations/useInView";
import { useCountUp } from "../animations/CountUp";

type StatCounterProps = {
  target: number;
  suffix: string;
  label: string;
};

const StatCounter = ({ target, suffix, label }: StatCounterProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3, once: true });
  const value = useCountUp(target, isInView);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-value">
        {value}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default StatCounter;
