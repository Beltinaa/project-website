import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { company } from "../../data/company";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-divider" aria-hidden="true"></div>
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/images/icon.png" alt={`${company.name} logo`} loading="lazy" />
            </div>
            <p>
              Rendering specialists and approved K Rend &amp; Weber applicators based in Barking and Luton, serving
              Greater London, East London, and the South East. Available across the UK for larger projects on request.
            </p>
            <div className="socials">
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/rendering">Rendering Specialists</Link>
              </li>
              <li>
                <Link to="/gallery">Project Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Rendering</li>
              <li>Hard Landscaping</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>Based in Barking &amp; Luton, serving Greater London and the South East.</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
