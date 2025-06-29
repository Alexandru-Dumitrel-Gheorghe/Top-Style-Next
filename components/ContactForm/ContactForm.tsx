"use client";

import styles from "./ContactForm.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={styles.contact} id="kontakt">
      {/* Decorative elements */}
      <div className={styles.goldCircle}></div>
      <div className={styles.goldCircleSmall}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            <span className={styles.highlight}>Besuchen</span> Sie uns
          </h2>
          <p className={styles.subtitle}>
            Wir freuen uns auf Ihren Besuch in unserem Salon
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoHeader}>
              <h3 className={styles.infoTitle}>
                Salon<span className={styles.highlight}>Top</span> Style
              </h3>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>
                <div>
                  <h4 className={styles.itemLabel}>Adresse</h4>
                  <p className={styles.itemText}>
                    Lochhauser Straße 37
                    <br />
                    82178 Puchheim
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FaPhone className={styles.icon} />
                </div>
                <div>
                  <h4 className={styles.itemLabel}>Telefon</h4>
                  <a href="tel:+498951446722" className={styles.itemLink}>
                    +49 89 51446722
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FaEnvelope className={styles.icon} />
                </div>
                <div>
                  <h4 className={styles.itemLabel}>E-Mail</h4>
                  <a
                    href="mailto:top.style.puchheim@gmail.com"
                    className={styles.itemLink}
                  >
                    top.style.puchheim@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.hours}>
              <div className={styles.hoursHeader}>
                <FaClock className={styles.clockIcon} />
                <h4 className={styles.hoursTitle}>Öffnungszeiten</h4>
              </div>
              <div className={styles.hoursGrid}>
                <div className={styles.hoursRow}>
                  <span>Montag - Freitag</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Samstag</span>
                  <span>09:00 - 16:00</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sonntag</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.123456789012!2d11.3456789!3d48.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e123456789012%3A0x1234567890abcdef!2sLochhauser%20Stra%C3%9Fe%2037%2C%2082178%20Puchheim!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
            <div className={styles.mapOverlay}></div>
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapButton}
            >
              In Google Maps öffnen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
