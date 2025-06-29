"use client";

import styles from "./Preise.module.css";
import { FaFemale, FaMale, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function Preise() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "damen"
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const services = {
    damen: [
      { name: "Waschen, schneiden, föhnen (lang)", price: "ab 33 €" },
      { name: "Waschen, schneiden, föhnen (kurz)", price: "ab 27 €" },
      { name: "Ansatzfarbe (kurzer Ansatz)", price: "ab 35 €" },
      { name: "Ansatzfarbe (mittlerer Ansatz)", price: "ab 40 €" },
      { name: "Ansatzfarbe (großer Ansatz)", price: "ab 45 €" },
      { name: "Tönung bis Schulterlänge", price: "ab 45 €" },
      { name: "Tönung ab Schulterlänge", price: "ab 55 €" },
      { name: "Glossing / Abmattierung", price: "ab 25 €" },
      { name: "Strähnen (ganzer Kopf)", price: "ab 90 €" },
      { name: "Strähnen (Oberkopf & Seiten)", price: "ab 50 €" },
      { name: "Balayage", price: "ab 160 €" },
      { name: "Dauerwelle (kurz)", price: "ab 55 €" },
      { name: "Dauerwelle (mittel)", price: "ab 75 €" },
      { name: "Dauerwelle (lang)", price: "ab 95 €" },
      { name: "Intensivpflege", price: "ab 10 €" },
      { name: "Kreatin - Behandlung", price: "ab 160 €" },
      { name: "Waschen, föhnen", price: "ab 18 €" },
      { name: "Styling inkl. W/F", price: "ab 37 €" },
      { name: "Wimpern färben", price: "ab 8 €" },
      { name: "Augenbrauen färben", price: "ab 10 €" },
      { name: "Augenbrauen zupfen", price: "ab 10 €" },
    ],
    herren: [
      { name: "Trockenhaarschnitt", price: "18 €" },
      { name: "Waschen inkl. Massage", price: "5 €" },
      { name: "Waschen + Schneiden + Föhnen", price: "28 €" },
      { name: "Trockenhaarschnitt + Bartrasur", price: "12 €" },
      { name: "Bartrasur", price: "10 €" },
      { name: "Kinderhaarschnitt", price: "10 €" },
      { name: "Augenbrauen Zupfen", price: "6 €" },
      { name: "Gesichts-Haarentfernung mit Wachs", price: "ab 10 €" },
      { name: "All-Inclusive-Paket", price: "44 €" },
    ],
  };

  return (
    <section className={styles.preise} id="preise">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Unsere Preise</h2>
          <p className={styles.subtitle}>
            Transparente Preisgestaltung für erstklassige Dienstleistungen
          </p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.priceSections}>
          {/* Damen Section */}
          <div
            className={`${styles.section} ${
              expandedSection === "damen" ? styles.active : ""
            }`}
          >
            <div
              className={styles.sectionHeader}
              onClick={() => toggleSection("damen")}
            >
              <div className={styles.iconWrapper}>
                <FaFemale className={styles.sectionIcon} />
              </div>
              <h3 className={styles.sectionTitle}>Damen</h3>
              {expandedSection === "damen" ? (
                <FaChevronUp className={styles.chevron} />
              ) : (
                <FaChevronDown className={styles.chevron} />
              )}
            </div>

            <div
              className={`${styles.serviceList} ${
                expandedSection === "damen" ? styles.expanded : ""
              }`}
            >
              {services.damen.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.servicePrice}>{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Herren Section */}
          <div
            className={`${styles.section} ${
              expandedSection === "herren" ? styles.active : ""
            }`}
          >
            <div
              className={styles.sectionHeader}
              onClick={() => toggleSection("herren")}
            >
              <div className={styles.iconWrapper}>
                <FaMale className={styles.sectionIcon} />
              </div>
              <h3 className={styles.sectionTitle}>Herren</h3>
              {expandedSection === "herren" ? (
                <FaChevronUp className={styles.chevron} />
              ) : (
                <FaChevronDown className={styles.chevron} />
              )}
            </div>

            <div
              className={`${styles.serviceList} ${
                expandedSection === "herren" ? styles.expanded : ""
              }`}
            >
              {services.herren.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.servicePrice}>{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.note}>
          <p>
            * Alle Preise sind Richtwerte. Der endgültige Preis kann je nach
            Aufwand und Haarlänge variieren.
          </p>
        </div>
      </div>
    </section>
  );
}
