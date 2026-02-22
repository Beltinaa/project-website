import { ReactNode } from "react";
import { Link } from "react-router-dom";

export type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: ReactNode;
  featured?: boolean;
};

const ServiceCard = ({ title, description, image, href, icon, featured }: ServiceCardProps) => {
  return (
    <article className={`service-card ${featured ? "featured" : ""}`}>
      <div className="service-image">
        <img src={image} alt={`${title} service`} loading="lazy" />
        <div className="image-overlay" aria-hidden="true" />
      </div>
      <div className="service-content">
        {featured && <span className="service-badge">Our Speciality</span>}
        <div className="service-heading">
          {icon && <span className="service-icon">{icon}</span>}
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <Link className="service-link" to={href}>
          Learn More
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
