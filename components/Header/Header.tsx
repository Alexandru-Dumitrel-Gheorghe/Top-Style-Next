"use client";

import styles from "./Header.module.css";
import { FaCut, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import ModalTermine from "../ModalTermine/ModalTermine"; // ajustează calea dacă e necesar

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll smooth la secțiuni când se apasă pe link (desktop și mobil)
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <FaCut className={styles.logoIcon} />
            <span className={styles.logoText}>Top Style</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <a
              href="#home"
              className={styles.navLink}
              onClick={(e) => handleScrollTo(e, "#home")}
            >
              Startseite
            </a>
            <a
              href="#preise"
              className={styles.navLink}
              onClick={(e) => handleScrollTo(e, "#preise")}
            >
              Preise
            </a>
            <a
              href="#gallery"
              className={styles.navLink}
              onClick={(e) => handleScrollTo(e, "#gallery")}
            >
              Galerie
            </a>
            <a
              href="#kontakt"
              className={styles.navLink}
              onClick={(e) => handleScrollTo(e, "#kontakt")}
            >
              Kontakt
            </a>
            <div className={styles.ctaContainer}>
              <a href="tel:+123456789" className={styles.phoneLink}>
                <FaPhoneAlt className={styles.phoneIcon} />
                <span>+40 123 456 789</span>
              </a>
              <button
                className={styles.ctaButton}
                onClick={() => setShowModal(true)}
                type="button"
              >
                Termin buchen
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <button className={styles.menuButton} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <nav className={styles.mobileNav}>
                <a
                  href="#home"
                  className={styles.navLink}
                  onClick={(e) => handleScrollTo(e, "#home")}
                >
                  Startseite
                </a>
                <a
                  href="#preise"
                  className={styles.navLink}
                  onClick={(e) => handleScrollTo(e, "#preise")}
                >
                  Preise
                </a>
                <a
                  href="#gallery"
                  className={styles.navLink}
                  onClick={(e) => handleScrollTo(e, "#gallery")}
                >
                  Galerie
                </a>
                <a
                  href="#kontakt"
                  className={styles.navLink}
                  onClick={(e) => handleScrollTo(e, "#kontakt")}
                >
                  Kontakt
                </a>
                <a
                  href="tel:+123456789"
                  className={styles.phoneLinkMobile}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaPhoneAlt className={styles.phoneIcon} />
                  <span>+40 123 456 789</span>
                </a>
                <button
                  className={styles.ctaButtonMobile}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowModal(true);
                  }}
                  type="button"
                >
                  Termin buchen
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Modalul */}
      <ModalTermine open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
