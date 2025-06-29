"use client";

import styles from "./TeamSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const barbers = [
  {
    name: "Andreas",
    img: "/images/barber1.jpg",
    role: "Fade Specialist",
  },
  {
    name: "Maximilian",
    img: "/images/barber1.jpg",
    role: "Beard Expert",
  },
  {
    name: "Adrian",
    img: "/images/barber1.jpg",
    role: "Styling Pro",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === barbers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? barbers.length - 1 : prev - 1));
  };

  return (
    <section className={styles.teamSection} id="team">
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
            Unser Team
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Professionelle Barbiere für jeden Style
          </motion.p>
          <div className={styles.divider}></div>
        </div>

        {isMobile ? (
          <div className={styles.sliderContainer}>
            <div className={styles.slider}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.roundCard}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={barbers[currentIndex].img}
                    alt={barbers[currentIndex].name}
                    width={200}
                    height={200}
                    className={styles.roundImage}
                  />
                </div>
                <h3>{barbers[currentIndex].name}</h3>
                <p>{barbers[currentIndex].role}</p>
              </motion.div>
            </div>

            <div className={styles.controls}>
              <button onClick={prevSlide} className={styles.navButton}>
                <FaChevronLeft />
              </button>
              <div className={styles.dots}>
                {barbers.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className={styles.navButton}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.grid}>
            {barbers.map((barber, index) => (
              <motion.div
                key={barber.name}
                className={styles.roundCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={barber.img}
                    alt={barber.name}
                    width={200}
                    height={200}
                    className={styles.roundImage}
                  />
                </div>
                <h3>{barber.name}</h3>
                <p>{barber.role}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
