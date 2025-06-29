"use client";
import styles from "./Header.module.css";
import { FaCut, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// ModalTermine încărcat fără SSR (important pentru modale în Next.js app dir)
const ModalTermine = dynamic(() => import("../ModalTermine/ModalTermine"), {
  ssr: false,
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Deschide modalul și închide meniul mobil dacă e deschis
  const openModal = () => {
    setShowModal(true);
    setIsMenuOpen(false);
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
            <Link href="/" className={styles.navLink}>
              Startseite
            </Link>
            <Link href="/preise" className={styles.navLink}>
              Preise
            </Link>
            <Link href="/galerie" className={styles.navLink}>
              Galerie
            </Link>
            <Link href="/kontakt" className={styles.navLink}>
              Kontakt
            </Link>
            <div className={styles.ctaContainer}>
              <a href="tel:+123456789" className={styles.phoneLink}>
                <FaPhoneAlt className={styles.phoneIcon} />
                <span>+40 123 456 789</span>
              </a>
              <button
                className={styles.ctaButton}
                onClick={openModal}
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
                <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                  Startseite
                </Link>
                <Link
                  href="/preise"
                  className={styles.navLink}
                  onClick={toggleMenu}
                >
                  Preise
                </Link>
                <Link
                  href="/galerie"
                  className={styles.navLink}
                  onClick={toggleMenu}
                >
                  Galerie
                </Link>
                <Link
                  href="/kontakt"
                  className={styles.navLink}
                  onClick={toggleMenu}
                >
                  Kontakt
                </Link>
                <a
                  href="tel:+123456789"
                  className={styles.phoneLinkMobile}
                  onClick={toggleMenu}
                >
                  <FaPhoneAlt className={styles.phoneIcon} />
                  <span>+40 123 456 789</span>
                </a>
                <button
                  className={styles.ctaButtonMobile}
                  type="button"
                  onClick={openModal}
                >
                  Termin buchen
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ModalTermine */}
      <ModalTermine open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
