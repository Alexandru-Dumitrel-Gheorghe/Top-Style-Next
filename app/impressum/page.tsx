"use client";

import styles from "./Impressum.module.css";
import {
  FaBalanceScale,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ImpressumPage() {
  return (
    <main className={styles.impressum}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroIcon}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaBalanceScale />
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Impressum
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Rechtliche Informationen und Kontaktdaten
          </motion.p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Contact Info Section */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.contactCard}>
            <motion.div className={styles.contactItem} whileHover={{ x: 5 }}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className={styles.contactTitle}>Adresse</h3>
                <p className={styles.contactText}>
                  Salon Top Style
                  <br />
                  Lochhauser Straße 37
                  <br />
                  82178 Puchheim
                  <br />
                  Deutschland
                </p>
              </div>
            </motion.div>

            <motion.div className={styles.contactItem} whileHover={{ x: 5 }}>
              <div className={styles.contactIcon}>
                <FaPhone />
              </div>
              <div>
                <h3 className={styles.contactTitle}>Telefon</h3>
                <a href="tel:+498951446722" className={styles.contactLink}>
                  +49 89 51446722
                </a>
              </div>
            </motion.div>

            <motion.div className={styles.contactItem} whileHover={{ x: 5 }}>
              <div className={styles.contactIcon}>
                <FaEnvelope />
              </div>
              <div>
                <h3 className={styles.contactTitle}>E-Mail</h3>
                <a
                  href="mailto:top.style.puchheim@gmail.com"
                  className={styles.contactLink}
                >
                  top.style.puchheim@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Legal Sections */}
        {[
          {
            title: "Angaben gemäß § 5 TMG",
            content: (
              <>
                <p>
                  <strong>Salon Top Style</strong>
                  <br />
                  Einzelunternehmen
                </p>
                <p>
                  Lochhauser Straße 37
                  <br />
                  82178 Puchheim
                  <br />
                  Deutschland
                </p>
              </>
            ),
          },
          {
            title: "Vertreten durch",
            content: <p>Geschäftsinhaber: [Ihr Name]</p>,
          },
          {
            title: "Umsatzsteuer-ID",
            content: (
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a
                Umsatzsteuergesetz:
                <br />
                [DE123456789]
              </p>
            ),
          },
          {
            title: "Haftung für Inhalte",
            content: (
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            ),
          },
          {
            title: "Haftung für Links",
            content: (
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft.
              </p>
            ),
          },
          {
            title: "Urheberrecht",
            content: (
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            ),
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionContent}>{section.content}</div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
