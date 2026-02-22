import { CSSProperties } from "react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const style = {
    "--hero-image": `url('${backgroundImage}')`,
  } as CSSProperties;

  return (
    <section className="page-hero" style={style}>
      <div className="container page-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;
