"use client";

import styles from "./AGB.module.css";
import {
  FaFileContract,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AgbPage() {
  return (
    <main className={styles.agb}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroIcon}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaFileContract />
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Allgemeine Geschäftsbedingungen (AGB)
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Die rechtlichen Rahmenbedingungen unserer Dienstleistungen
          </motion.p>
        </div>
      </div>

      <div className={styles.container}>
        {[
          {
            title: "1. Geltungsbereich",
            content: (
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
                Leistungen und Angebote von Salon Top Style, Lochhauser Straße
                37, 82178 Puchheim.
              </p>
            ),
          },
          {
            title: "2. Terminvereinbarung und Stornierung",
            content: (
              <p>
                Termine können persönlich, telefonisch oder online vereinbart
                werden. Vereinbarte Termine sind verbindlich. Eine kostenfreie
                Stornierung ist bis 24 Stunden vor dem Termin möglich. Bei
                späterer Absage oder Nichterscheinen behalten wir uns das Recht
                vor, eine Ausfallgebühr in Höhe von 50% des
                Dienstleistungspreises zu berechnen.
              </p>
            ),
          },
          {
            title: "3. Preise und Zahlung",
            content: (
              <p>
                Es gelten die zum Zeitpunkt der Terminvereinbarung
                veröffentlichten Preise. Die Bezahlung erfolgt nach Erbringung
                der Dienstleistung in bar oder, falls verfügbar, per
                EC-/Kreditkarte.
              </p>
            ),
          },
          {
            title: "4. Gutscheine",
            content: (
              <p>
                Gutscheine sind ab Ausstellungsdatum 3 Jahre gültig und können
                nicht in bar ausgezahlt werden.
              </p>
            ),
          },
          {
            title: "5. Haftung",
            content: (
              <p>
                Salon Top Style haftet nur für Schäden, die vorsätzlich oder
                grob fahrlässig verursacht wurden. Für allergische Reaktionen
                oder Unverträglichkeiten übernehmen wir keine Haftung, sofern
                uns diese nicht vorher mitgeteilt wurden.
              </p>
            ),
          },
          {
            title: "6. Datenschutz",
            content: (
              <p>
                Personenbezogene Daten werden ausschließlich zur Erfüllung und
                Abwicklung der vereinbarten Leistungen genutzt. Weitere
                Informationen entnehmen Sie bitte unserer Datenschutzerklärung.
              </p>
            ),
          },
          {
            title: "7. Schlussbestimmungen",
            content: (
              <p>
                Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise
                unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
                Bestimmungen unberührt. Es gilt das Recht der Bundesrepublik
                Deutschland.
              </p>
            ),
          },
          {
            content: (
              <>
                <p>
                  <strong>Salon Top Style</strong>
                  <br />
                  Lochhauser Straße 37
                  <br />
                  82178 Puchheim
                  <br />
                  Telefon: <a href="tel:+498951446722">+49 89 51446722</a>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:top.style.puchheim@gmail.com">
                    top.style.puchheim@gmail.com
                  </a>
                </p>
                <p>Stand: {new Date().toLocaleDateString("de-DE")}</p>
              </>
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
            {section.title && (
              <h2 className={styles.sectionTitle}>{section.title}</h2>
            )}
            <div className={styles.sectionContent}>{section.content}</div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
