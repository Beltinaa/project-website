import useInView from "../animations/useInView";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
};

const SectionHeading = ({ title, subtitle, alignment = "left" }: SectionHeadingProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`section-heading-block align-${alignment} ${isInView ? "is-visible" : ""}`}
    >
      <p className="section-title">{title}</p>
      <h2 className="section-heading">{subtitle}</h2>
    </div>
  );
};

export default SectionHeading;
