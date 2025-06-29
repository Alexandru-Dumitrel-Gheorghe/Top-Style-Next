"use client";

import styles from "./Header.module.css";
import {
  FaCut,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Importă modalul lazy pentru optimizare (evită SSR warning la emailjs)
const ModalTermine = dynamic(() => import("../ModalTermine/ModalTermine"), {
  ssr: false,
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = ["home", "services", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const navLinks = [
    { id: "home", label: "Startseite", href: "/" },
    { id: "services", label: "Leistungen", href: "#services" },
    { id: "pricing", label: "Preise", href: "#pricing" },
    { id: "gallery", label: "Galerie", href: "#gallery" },
    { id: "contact", label: "Kontakt", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerContainer}>
          {/* Logo */}
          <motion.div
            className={styles.logo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCut className={styles.logoIcon} />
            <span className={styles.logoText}>
              <span>Top</span> Style
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${
                      activeLink === link.id ? styles.active : ""
                    }`}
                    onClick={() => setActiveLink(link.id)}
                  >
                    {link.label}
                    <span className={styles.navUnderline}></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.ctaContainer}>
              <a href="tel:+498951446722" className={styles.phoneLink}>
                <div className={styles.phoneIconWrapper}>
                  <FaPhoneAlt className={styles.phoneIcon} />
                </div>
                <span>+49 89 51446722</span>
              </a>
              <motion.button
                className={styles.ctaButton}
                whileHover={{
                  backgroundColor: "var(--accent-gold-light)",
                  transform: "translateY(-2px)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
              >
                Termin buchen <FaChevronRight className={styles.arrowIcon} />
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.menuButton}
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <FaTimes className={styles.menuIcon} />
            ) : (
              <FaBars className={styles.menuIcon} />
            )}
          </motion.button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className={styles.mobileMenu}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", ease: "easeInOut" }}
              >
                <nav className={styles.mobileNav}>
                  <ul className={styles.mobileNavList}>
                    {navLinks.map((link) => (
                      <motion.li
                        key={link.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                      >
                        <Link
                          href={`#${link.id}`}
                          className={styles.mobileNavLink}
                          onClick={toggleMenu}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <div className={styles.mobileCtaContainer}>
                    <a
                      href="tel:+498951446722"
                      className={styles.phoneLinkMobile}
                      onClick={toggleMenu}
                    >
                      <div className={styles.phoneIconWrapper}>
                        <FaPhoneAlt className={styles.phoneIcon} />
                      </div>
                      <span>+49 89 51446722</span>
                    </a>
                    <motion.button
                      className={styles.ctaButtonMobile}
                      whileHover={{
                        backgroundColor: "var(--accent-gold-light)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setShowModal(true);
                        toggleMenu();
                      }}
                    >
                      Termin buchen{" "}
                      <FaChevronRight className={styles.arrowIcon} />
                    </motion.button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* MODALUL de TERMINE */}
      <ModalTermine open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
