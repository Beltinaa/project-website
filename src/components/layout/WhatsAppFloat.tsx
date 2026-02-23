import { FaWhatsapp } from "react-icons/fa";
import { company } from "../../data/company";

const WhatsAppFloat = () => {
  let whatsappNumber = company.whatsapp.replace(/\D/g, "");
  if (whatsappNumber.startsWith("00")) {
    whatsappNumber = whatsappNumber.slice(2);
  }
  const message = encodeURIComponent(
    "Hello KYR Construction Ltd, I would like to request a free quote. Name: "
  );

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      aria-label="WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppFloat;
