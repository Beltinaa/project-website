import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { company } from "../../data/company";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3>Contact Information</h3>
      <p>
        Speak directly with our rendering specialists to discuss your project scope, systems, and timelines across
        Barking, Luton, and Greater London.
      </p>
      <ul>
        <li>
          <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
        </li>
        <li>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </li>
        <li>{company.address}</li>
      </ul>
      <div className="contact-block">
        <h4>Service Areas</h4>
        <p>{company.serviceAreas.join(" · ")}</p>
        <p>Surrounding areas of East London and North London, plus South East England.</p>
        <p>Available across the UK for larger projects on request.</p>
      </div>
      <div className="contact-block">
        <h4>Business Hours</h4>
        <p>{company.hours.join(" | ")}</p>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/kyrconstructionltd?igsh=MWRjczJyNWc4ZDBvbg%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61588065262334" aria-label="Facebook" target="_blank" rel="noreferrer">
          <FaFacebookF size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
