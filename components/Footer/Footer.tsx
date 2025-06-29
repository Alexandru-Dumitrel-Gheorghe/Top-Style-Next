"use client";

import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Decorative elements */}
      <div className={styles.footerPattern}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.div className={styles.section} whileHover={{ y: -5 }}>
            <div className={styles.logo}>
              <span className={styles.logoText}>
                Salon<span>Top</span>Style
              </span>
            </div>
            <p className={styles.aboutText}>
              Professionelle Haarpflege und Bartstyling in entspannter
              Atmosphäre. Wir setzen auf Qualität und individuelle Beratung.
            </p>
            <div className={styles.socialLinks}>
              <motion.a
                href="https://facebook.com"
                aria-label="Facebook"
                whileHover={{ y: -3, color: "#1877F2" }}
              >
                <FaFacebook className={styles.socialIcon} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                aria-label="Instagram"
                whileHover={{ y: -3, color: "#E1306C" }}
              >
                <FaInstagram className={styles.socialIcon} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                aria-label="Twitter"
                whileHover={{ y: -3, color: "#1DA1F2" }}
              >
                <FaTwitter className={styles.socialIcon} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className={styles.section} whileHover={{ y: -5 }}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              {["Startseite", "Leistungen", "Preise", "Galerie", "Kontakt"].map(
                (link, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <a href={`/${link.toLowerCase()}`} className={styles.link}>
                      {link}
                      <span className={styles.linkUnderline}></span>
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className={styles.section} whileHover={{ y: -5 }}>
            <h3 className={styles.heading}>Kontakt</h3>
            <ul className={styles.contactInfo}>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>Lochhauser Straße 37, 82178 Puchheim</span>
                </div>
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <a href="tel:+498951446722">+49 89 51446722</a>
                </div>
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <a href="mailto:top.style.puchheim@gmail.com">
                    top.style.puchheim@gmail.com
                  </a>
                </div>
              </motion.li>
              <motion.li
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className={styles.contactItem}>
                  <FaClock className={styles.contactIcon} />
                  <div>
                    <p>Mo-Fr: 9:00 - 19:00</p>
                    <p>Sa: 9:00 - 16:00</p>
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className={styles.section} whileHover={{ y: -5 }}>
            <h3 className={styles.heading}>Newsletter</h3>
            <p className={styles.newsletterText}>
              Melden Sie sich für exklusive Angebote und Neuigkeiten an.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className={styles.newsletterInput}
                required
              />
              <motion.button
                type="submit"
                className={styles.newsletterButton}
                whileHover={{ backgroundColor: "var(--accent-gold-light)" }}
                whileTap={{ scale: 0.98 }}
              >
                Anmelden
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} SalonTopStyle | Alle Rechte vorbehalten.</p>
          <div className={styles.legalLinks}>
            <a href="/datenschutz">Datenschutz</a>
            <span className={styles.divider}>|</span>
            <a href="/impressum">Impressum</a>
            <span className={styles.divider}>|</span>
            <a href="/agb">AGB</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
