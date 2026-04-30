import { useEffect, useRef, useState } from "react";
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
        <a href="#home">Haroon Zahid Bajwa</a>
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
          <a href="#home" onClick={handleMenuClose}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleMenuClose}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={handleMenuClose}>
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleMenuClose}>
            Contact
          </a>
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
