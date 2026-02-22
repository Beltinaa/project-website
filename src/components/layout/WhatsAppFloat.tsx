import { FaWhatsapp } from "react-icons/fa";
import { company } from "../../data/company";

const WhatsAppFloat = () => {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${company.whatsapp}`}
      aria-label="WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppFloat;
