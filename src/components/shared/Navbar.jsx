import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    if (isMenuOpen) {
      closeTimerRef.current = setTimeout(() => {
        setIsMenuOpen(false);
      }, 5000);
    }

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        <Link to="/" onClick={handleMenuClose}>
          Haroon Zahid Bajwa
        </Link>
        <span>Projects | Operations | QA</span>
      </div>

      <button
        type="button"
        className={`navbar__toggle ${isMenuOpen ? "navbar__toggle--open" : ""}`}
        onClick={handleMenuToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav-links"
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        id="mobile-nav-links"
        className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
      >
        <li>
          <NavLink to="/" onClick={handleMenuClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleMenuClose}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={handleMenuClose}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" onClick={handleMenuClose}>
            Contact
          </NavLink>
        </li>
        <li>
          <a
            className="navbar__button"
            href="https://pk.linkedin.com/in/haroon-bajwa-1891b7242"
            target="_blank"
            rel="noreferrer"
            onClick={handleMenuClose}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
