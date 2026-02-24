import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import Button from "../ui/Button";
import { navLinks } from "../../data/navLinks";
import { company } from "../../data/company";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="container nav-inner">
        <Link className="brand" to="/" aria-label={`${company.name} home`}>
          <img
            className="brand-icon"
            src="/images/icon.webp"
            alt={`${company.name} icon`}
            loading="eager"
          />
          <span className="brand-text">{company.name}</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <Button href="/contact" variant="accent" size="sm">
            GET A FREE QUOTE
          </Button>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />
      <div className={`nav-drawer ${menuOpen ? "active" : ""}`} aria-hidden={!menuOpen}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button href="/contact" variant="accent" size="sm" onClick={closeMenu}>
          GET A FREE QUOTE
        </Button>
        <div className="nav-socials">
          <a href="https://www.instagram.com/kyrconstructionltd?igsh=MWRjczJyNWc4ZDBvbg%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61588065262334" aria-label="Facebook" target="_blank" rel="noreferrer">
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
