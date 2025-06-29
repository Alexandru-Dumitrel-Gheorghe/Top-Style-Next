"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion, type Variants } from "framer-motion"; // <--- importă tipul Variants!
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Tipizare explicită!
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.hero} id="home" ref={ref}>
      {/* Decorative elements */}
      <div className={styles.goldCircle}></div>
      <div className={styles.goldDots}></div>

      {/* Background with parallax effect */}
      <div className={styles.parallaxWrapper}>
        <div className={styles.backgroundOverlay}></div>
        <Image
          src="/images/barbershop-hero.png"
          alt="Premium Barber Experience"
          fill
          className={styles.heroImage}
          priority
          quality={100}
        />
      </div>

      {/* Main content */}
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <motion.div
            className={styles.content}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Text content */}
            <motion.div className={styles.textContent} variants={itemVariants}>
              <motion.div
                className={styles.badge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                SalonTop Style
              </motion.div>

              <motion.h1 className={styles.mainTitle} variants={itemVariants}>
                Handgemachte <span className={styles.highlight}>Präzision</span>{" "}
                für Ihren Stil
              </motion.h1>

              <motion.p className={styles.subtitle} variants={itemVariants}>
                Traditionelles Handwerk meets modernes Design - erleben Sie
                Haarpflege auf Meisterniveau
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className={styles.buttonGroup}
                variants={itemVariants}
              >
                <motion.a
                  href="/booking"
                  className={styles.primaryButton}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaCalendarAlt className={styles.buttonIcon} />
                  Online Termin buchen
                  <FaArrowRight className={styles.arrowIcon} />
                </motion.a>

                <motion.a
                  href="#services"
                  className={styles.secondaryButton}
                  whileHover={{
                    y: -3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Unsere Services
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Info cards */}
            <motion.div className={styles.infoCards} variants={itemVariants}>
              <motion.div
                className={styles.infoCard}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
              >
                <div className={styles.cardIconWrapper}>
                  <FaMapMarkerAlt className={styles.cardIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Unser Standort</h3>
                  <p className={styles.cardText}>
                    Lochhauser Straße 37
                    <br />
                    82178 Puchheim
                  </p>
                  <a href="#map" className={styles.cardLink}>
                    Auf Karte anzeigen
                  </a>
                </div>
              </motion.div>

              <motion.div
                className={styles.infoCard}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
              >
                <div className={styles.cardIconWrapper}>
                  <FaClock className={styles.cardIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Öffnungszeiten</h3>
                  <p className={styles.cardText}>Mo-Fr: 9:00 - 19:00</p>
                  <p className={styles.cardText}>Samstag: 9:00 - 16:00</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.mouse}>
          <div className={styles.scroller}></div>
        </div>
        <span>Scrollen</span>
      </motion.div>
    </section>
  );
}
