import { FaPhoneAlt } from "react-icons/fa";
import { company } from "../../data/company";

const CallNowBar = () => {
  return (
    <a className="call-now-bar" href={`tel:${company.phoneTel}`} aria-label="Call now">
      <FaPhoneAlt size={18} />
      <span>Call Now</span>
    </a>
  );
};

export default CallNowBar;
