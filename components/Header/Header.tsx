"use client";

import styles from "./Header.module.css";
import { FaCut, FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import ModalTermine from "../ModalTermine/ModalTermine";

const MAIN_LINKS = [
  { label: "Startseite", hash: "#home" },
  { label: "Preise", hash: "#preise" },
  { label: "Galerie", hash: "#gallery" },
  { label: "Kontakt", hash: "#kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navighează către homepage și dă scroll la secțiune, sau scroll direct dacă ești pe homepage
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname !== "/") {
      router.push("/" + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setTimeout(() => {
          const el2 = document.querySelector(hash);
          if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerContainer}>
          <div
            className={styles.logo}
            onClick={(e) => handleNav(e as any, "#home")}
            style={{ cursor: "pointer" }}
          >
            <FaCut className={styles.logoIcon} />
            <span className={styles.logoText}>Top Style</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {MAIN_LINKS.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                className={styles.navLink}
                onClick={(e) => handleNav(e, link.hash)}
              >
                {link.label}
              </a>
            ))}
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
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="Menü"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <nav className={styles.mobileNav}>
                {MAIN_LINKS.map((link) => (
                  <a
                    key={link.hash}
                    href={link.hash}
                    className={styles.navLink}
                    onClick={(e) => handleNav(e, link.hash)}
                  >
                    {link.label}
                  </a>
                ))}
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
      <ModalTermine open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
