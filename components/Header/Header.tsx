"use client";
import styles from "./Header.module.css";
import { FaCut, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// ModalTermine loaded without SSR (important for modals in Next.js app dir)
const ModalTermine = dynamic(() => import("../ModalTermine/ModalTermine"), {
  ssr: false,
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Set active link based on current route
    setActiveLink(window.location.pathname);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const openModal = () => {
    setShowModal(true);
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <FaCut className={styles.logoIcon} />
            <span className={styles.logoText}>Top Style</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link
              href="/"
              className={`${styles.navLink} ${
                activeLink === "/" ? styles.active : ""
              }`}
            >
              Startseite
            </Link>
            <Link
              href="/preise"
              className={`${styles.navLink} ${
                activeLink === "/preise" ? styles.active : ""
              }`}
            >
              Preise
            </Link>
            <Link
              href="/galerie"
              className={`${styles.navLink} ${
                activeLink === "/galerie" ? styles.active : ""
              }`}
            >
              Galerie
            </Link>
            <Link
              href="/kontakt"
              className={`${styles.navLink} ${
                activeLink === "/kontakt" ? styles.active : ""
              }`}
            >
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
                aria-label="Termin buchen"
              >
                Termin buchen
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className={styles.menuIcon} />
            ) : (
              <FaBars className={styles.menuIcon} />
            )}
          </button>

          <div
            className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
          >
            <nav className={styles.mobileNav}>
              <Link
                href="/"
                className={`${styles.navLink} ${
                  activeLink === "/" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Startseite
              </Link>
              <Link
                href="/preise"
                className={`${styles.navLink} ${
                  activeLink === "/preise" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Preise
              </Link>
              <Link
                href="/galerie"
                className={`${styles.navLink} ${
                  activeLink === "/galerie" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Galerie
              </Link>
              <Link
                href="kontakt"
                className={`${styles.navLink} ${
                  activeLink === "/kontakt" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Kontakt
              </Link>
              <a
                href="tel:+123456789"
                className={styles.phoneLinkMobile}
                onClick={closeMenu}
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
        </div>
      </header>

      {/* ModalTermine */}
      <ModalTermine open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
