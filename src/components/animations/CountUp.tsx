import { useEffect, useState } from "react";

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

export const useCountUp = (target: number, start: boolean, duration = 1800) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, target, duration]);

  return value;
};
