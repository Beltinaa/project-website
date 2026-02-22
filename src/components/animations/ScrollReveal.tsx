import { ReactNode } from "react";
import useInView from "./useInView";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "scale" | "slide-left";
};

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: ScrollRevealProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  const variantClass =
    variant === "scale"
      ? "reveal-scale"
      : variant === "slide-left"
        ? "reveal-left"
        : "reveal";

  const classes = [variantClass, isInView ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default ScrollReveal;
