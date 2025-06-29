"use client";
import styles from "./Header.module.css";
import { FaCut, FaBars, FaTimes, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const navItems = [
    { name: "Startseite", path: "/" },
    { name: "Preise", path: "/preise" },
    { name: "Galerie", path: "/galerie" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <FaCut className={styles.logoIcon} />
          <span className={styles.logoText}>TopStyle</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className={styles.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.ctaContainer}>
            <a
              href="https://wa.me/40123456789"
              className={styles.whatsappButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.whatsappIcon} />
              WhatsApp
            </a>
            <button className={styles.ctaButton}>Termin buchen</button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween" }}
            >
              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                  {navItems.map((item) => (
                    <motion.li
                      key={item.path}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={item.path}
                        className={styles.mobileNavLink}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className={styles.mobileCtaContainer}>
                  <a
                    href="tel:+40123456789"
                    className={styles.mobilePhoneLink}
                    onClick={toggleMenu}
                  >
                    <FaPhoneAlt className={styles.phoneIcon} />
                    +40 123 456 789
                  </a>
                  <a
                    href="https://wa.me/40123456789"
                    className={styles.mobileWhatsappButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                  >
                    <FaWhatsapp className={styles.whatsappIcon} />
                    WhatsApp
                  </a>
                  <button
                    className={styles.mobileCtaButton}
                    onClick={toggleMenu}
                  >
                    Termin buchen
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
