"use client";

import styles from "./Leistungen.module.css";
import { FaShower, FaChild, FaChevronRight } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { GiBeard } from "react-icons/gi";
import { motion, easeOut } from "framer-motion";

export default function Leistungen() {
  const services = [
    {
      title: "Haarschnitt Herren",
      description: "Präziser Schnitt nach Wunsch mit Beratung",
      price: "ab 35€",
      icon: <FaScissors className={styles.icon} />,
      highlight: false,
    },
    {
      title: "Haarschnitt Damen",
      description: "Moderne Schnitte und Stylingberatung",
      price: "ab 45€",
      icon: <FaScissors className={styles.icon} />,
      highlight: true,
    },
    {
      title: "Bartpflege & Rasur",
      description: "Klassische Rasur mit warmem Handtuch und Pflege",
      price: "ab 25€",
      icon: <GiBeard className={styles.icon} />,
      highlight: false,
    },
    {
      title: "Komplett-Service",
      description: "Haarschnitt, Bartpflege und Gesichtsbehandlung",
      price: "ab 60€",
      icon: <FaScissors className={styles.icon} />,
      highlight: true,
    },
    {
      title: "Waschen & Styling",
      description: "Shampoo, Pflege und professionelle Stylingberatung",
      price: "ab 20€",
      icon: <FaShower className={styles.icon} />,
      highlight: false,
    },
    {
      title: "Kinderhaarschnitt",
      description: "Stressfreier Besuch für unsere kleinen Gäste",
      price: "ab 25€",
      icon: <FaChild className={styles.icon} />,
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section className={styles.leistungen} id="leistungen">
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Unsere Premium Leistungen
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Handwerkliche Perfektion und moderne Styles in entspannter
            Atmosphäre
          </motion.p>
          <div className={styles.divider}></div>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${
                service.highlight ? styles.highlight : ""
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.iconContainer}>
                <div className={styles.iconBackground}></div>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <div className={styles.footer}>
                <span className={styles.price}>{service.price}</span>
                <button className={styles.button}>
                  Termin buchen <FaChevronRight className={styles.arrow} />
                </button>
              </div>
              {service.highlight && (
                <div className={styles.badge}>Bestseller</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
