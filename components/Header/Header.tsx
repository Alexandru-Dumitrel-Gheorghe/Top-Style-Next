"use client";
import styles from "./Header.module.css";
import {
  FaCut,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Start", href: "#home" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über Uns", href: "#uberuns" },
    { name: "Preise", href: "#preise" },
    { name: "Galerie", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <FaCut className={styles.logoIcon} />
          <span className={styles.logoText}>TopStyle</span>
        </Link>
        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  className={styles.navLink}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.ctaContainer}>
            <a href="tel:+498951446722" className={styles.phoneLink}>
              <FaPhoneAlt className={styles.phoneIcon} />
              +49 89 51446722
            </a>
            <button className={styles.ctaButton} onClick={onOpenBookingModal}>
              <FaCalendarAlt
                className={styles.ctaIcon}
                style={{ marginRight: 8 }}
              />
              Termin buchen
            </button>
          </div>
        </nav>
        {/* Mobile Nav */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                    <li key={item.href}>
                      <button
                        className={styles.navLink}
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+498951446722"
                  className={styles.phoneLinkMobile}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaPhoneAlt className={styles.phoneIcon} />
                  +49 89 51446722
                </a>
                <button
                  className={styles.ctaButtonMobile}
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenBookingModal();
                  }}
                >
                  <FaCalendarAlt
                    className={styles.ctaIcon}
                    style={{ marginRight: 8 }}
                  />
                  Termin buchen
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
