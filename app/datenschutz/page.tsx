"use client";

import styles from "./Datenschutz.module.css";
import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function DatenschutzPage() {
  return (
    <main className={styles.datenschutz}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroIcon}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaShieldAlt />
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Datenschutzerklärung
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transparenz und Sicherheit für Ihre persönlichen Daten
          </motion.p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Data Controller Section */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.responsibleCard}>
            <h2 className={styles.sectionTitle}>
              <FaUserShield className={styles.titleIcon} />
              Verantwortlicher für die Datenverarbeitung
            </h2>
            <div className={styles.responsibleContent}>
              <p>
                <strong>Salon Top Style</strong>
                <br />
                Lochhauser Straße 37
                <br />
                82178 Puchheim
                <br />
                Deutschland
              </p>
              <div className={styles.contactLinks}>
                <motion.a
                  href="tel:+498951446722"
                  className={styles.contactLink}
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className={styles.contactIcon} /> +49 89 51446722
                </motion.a>
                <motion.a
                  href="mailto:top.style.puchheim@gmail.com"
                  className={styles.contactLink}
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className={styles.contactIcon} />{" "}
                  top.style.puchheim@gmail.com
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Privacy Sections */}
        {[
          {
            title: "1. Allgemeine Informationen",
            content: (
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
                Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf
                Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In
                dieser Datenschutzerklärung informieren wir Sie über die
                wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
                Website.
              </p>
            ),
          },
          {
            title: "2. Datenverarbeitung auf unserer Website",
            content: (
              <>
                <h3 className={styles.subsectionTitle}>
                  2.1 Technisch notwendige Daten
                </h3>
                <p>
                  Beim Zugriff auf unsere Website erheben wir automatisch
                  Informationen wie Browsertyp, Betriebssystem, Referrer-URL,
                  besuchte Seiten und Zugriffszeitpunkt. Diese Daten dienen
                  ausschließlich der Sicherstellung eines reibungslosen
                  Website-Betriebs und werden nach 30 Tagen gelöscht.
                </p>

                <h3 className={styles.subsectionTitle}>
                  2.2 Kontaktformular & Terminbuchung
                </h3>
                <p>
                  Bei Kontaktaufnahme oder Terminbuchung speichern wir Ihre
                  angegebenen Daten zwecks Bearbeitung Ihrer Anfrage. Die Daten
                  geben wir nicht ohne Ihre Einwilligung weiter und löschen sie
                  nach Erledigung Ihrer Anfrage, sofern keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </p>
              </>
            ),
          },
          {
            title: "3. Ihre Rechte",
            content: (
              <>
                <p>
                  Ihnen stehen grundsätzlich die Rechte auf Auskunft,
                  Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
                  Widerruf und Widerspruch zu. Sofern Sie glauben, dass die
                  Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt,
                  haben Sie das Recht, sich bei der Aufsichtsbehörde zu
                  beschweren.
                </p>
                <ul className={styles.rightsList}>
                  <li>
                    <strong>Auskunftsrecht:</strong> Sie können jederzeit
                    Auskunft über Ihre bei uns gespeicherten Daten verlangen.
                  </li>
                  <li>
                    <strong>Berichtigungsrecht:</strong> Unrichtige Daten werden
                    wir unverzüglich berichtigen.
                  </li>
                  <li>
                    <strong>Löschungsrecht:</strong> Daten werden gelöscht,
                    sofern keine gesetzlichen Aufbewahrungspflichten
                    entgegenstehen.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "4. Sicherheitsmaßnahmen",
            content: (
              <>
                <div className={styles.securityCard}>
                  <FaLock className={styles.securityIcon} />
                  <div>
                    <h3 className={styles.securityTitle}>
                      Technische Sicherheit
                    </h3>
                    <p>
                      Wir setzen technische und organisatorische
                      Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige
                      oder vorsätzliche Manipulationen, Verlust oder Zugriff
                      unberechtigter Personen zu schützen.
                    </p>
                  </div>
                </div>
                <p className={styles.securityNote}>
                  Diese Website nutzt eine SSL-Verschlüsselung zur sicheren
                  Übertragung vertraulicher Inhalte. Eine verschlüsselte
                  Verbindung erkennen Sie an der "https://" Adresszeile und dem
                  Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </>
            ),
          },
          {
            title: "5. Cookies & Analyse-Tools",
            content: (
              <p>
                Diese Website verwendet ausschließlich technisch notwendige
                Cookies, die für den Betrieb der Website erforderlich sind. Wir
                setzen bewusst keine Analyse-Tools wie Google Analytics ein, um
                Ihre Privatsphäre bestmöglich zu schützen.
              </p>
            ),
          },
          {
            title: "6. Kontakt & Auskunftsrecht",
            content: (
              <>
                <p>
                  Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte
                  können Sie sich jederzeit an uns wenden:
                </p>
                <div className={styles.contactBox}>
                  <motion.a
                    href="mailto:top.style.puchheim@gmail.com"
                    className={styles.contactButton}
                    whileHover={{ y: -3 }}
                  >
                    <FaEnvelope /> E-Mail senden
                  </motion.a>
                  <motion.a
                    href="tel:+498951446722"
                    className={styles.contactButton}
                    whileHover={{ y: -3 }}
                  >
                    <FaPhone /> Anrufen
                  </motion.a>
                </div>
              </>
            ),
          },
          {
            title: "7. Aktualität der Datenschutzerklärung",
            content: (
              <p>
                Diese Datenschutzerklärung wurde zuletzt am 01.01.2023
                aktualisiert. Wir behalten uns vor, diese Erklärung anzupassen,
                um sie stets mit den aktuellen rechtlichen Anforderungen in
                Einklang zu bringen.
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
