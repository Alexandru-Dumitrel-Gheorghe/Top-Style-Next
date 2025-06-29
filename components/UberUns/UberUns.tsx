"use client";

import styles from "./UberUns.module.css";
import Image from "next/image";
import { FaScissors, FaAward, FaUsers, FaThumbsUp } from "react-icons/fa6";
import { motion, easeOut, backOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function UberUns() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const featureVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: backOut,
      },
    },
  };

  return (
    <section className={styles.uberUns} id="uber-uns" ref={ref}>
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>

      <div className={styles.container}>
        {/* Image Section */}
        <motion.div
          className={styles.imageWrapper}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className={styles.imageContainer} variants={itemVariants}>
            <Image
              src="/images/about4.png"
              alt="Unser Team"
              fill
              className={styles.image}
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="/images/about4.png"
              alt="Unser Team"
              fill
              className={styles.image}
              quality={100}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </motion.div>

          <motion.div
            className={styles.experienceBadge}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.years}>10+</span>
            <span className={styles.text}>Jahre Erfahrung</span>
            <div className={styles.badgeGlow}></div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className={styles.content}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className={styles.title} variants={itemVariants}>
            Unsere <span className={styles.highlight}>Geschichte</span>
          </motion.h2>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Tradition meets Moderne - Ihr Vertrauen ist unser Antrieb
          </motion.p>

          <motion.div className={styles.description} variants={itemVariants}>
            <p>
              Seit unserer Gründung im Jahr 2013 setzen wir Maßstäbe in der
              Herrenpflege. Was als kleiner Familienbetrieb begann, ist heute
              eine der angesehensten Barbiere in Berlin.
            </p>
            <p>
              Unser Team aus Meisterfriseuren verbindet traditionelle
              Handwerkskunst mit modernsten Techniken für ein einzigartiges
              Erlebnis.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div className={styles.features} variants={containerVariants}>
            <motion.div
              className={styles.featureItem}
              variants={featureVariants}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>
                <FaScissors />
              </div>
              <h3>Handwerkskunst</h3>
              <p>Präzision und Sorgfalt in jedem Schnitt</p>
              <div className={styles.featureBorder}></div>
            </motion.div>

            <motion.div
              className={styles.featureItem}
              variants={featureVariants}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>
                <FaAward />
              </div>
              <h3>Premium Produkte</h3>
              <p>Nur die besten Marken für Ihr Haar</p>
              <div className={styles.featureBorder}></div>
            </motion.div>

            <motion.div
              className={styles.featureItem}
              variants={featureVariants}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>
                <FaUsers />
              </div>
              <h3>Individuelle Beratung</h3>
              <p>Persönliche Lösungen für Ihren Stil</p>
              <div className={styles.featureBorder}></div>
            </motion.div>

            <motion.div
              className={styles.featureItem}
              variants={featureVariants}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>
                <FaThumbsUp />
              </div>
              <h3>Zufriedenheit</h3>
              <p>Über 5.000 begeisterte Kunden</p>
              <div className={styles.featureBorder}></div>
            </motion.div>
          </motion.div>

          <motion.a
            href="/team"
            className={styles.teamLink}
            variants={itemVariants}
            whileHover={{
              x: 5,
              color: "var(--primary-dark)",
            }}
          >
            Unser Team kennenlernen →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
