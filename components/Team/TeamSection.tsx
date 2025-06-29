"use client";
import styles from "./TeamSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

interface Barber {
  name: string;
  img: string;
  role: string;
  bio?: string;
  experience?: string;
  specialties?: string[];
  social?: {
    instagram?: string;
    facebook?: string;
  };
}

// Toate textele și biografiile adaptate pentru germană:
const barbers: Barber[] = [
  {
    name: "Andreas Müller",
    img: "/images/barber1.jpg",
    role: "Fade-Spezialist",
    bio: "Mit über 10 Jahren Erfahrung zaubert Andreas die schärfsten Fades der Stadt.",
    experience: "10+ Jahre",
    specialties: ["Skin Fades", "Undercuts", "Kontrastreiche Stylings"],
    social: {
      instagram: "andreas_barber",
      facebook: "andreas.barber",
    },
  },
  {
    name: "Maximilian Schmidt",
    img: "/images/barber1.jpg",
    role: "Bart-Experte",
    bio: "Maximilian verwandelt Bärte mit präzisen Techniken in echte Kunstwerke.",
    experience: "8 Jahre",
    specialties: ["Bart-Formung", "Heiße Kompressen-Rasur", "Bart-Färbung"],
    social: {
      instagram: "max_beardmaster",
      facebook: "max.beardmaster",
    },
  },
  {
    name: "Adrian Wagner",
    img: "/images/barber1.jpg",
    role: "Styling-Profi",
    bio: "Adrian ist immer am Puls der Zeit und bringt Ihnen die neuesten Trends.",
    experience: "7 Jahre",
    specialties: [
      "Moderne Pompadours",
      "Texturierte Crops",
      "Kreative Farbgebung",
    ],
    social: {
      instagram: "adrian_styles",
      facebook: "adrian.styles",
    },
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === barbers.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? barbers.length - 1 : prev - 1));
  }, []);

  const openBarberDetail = (barber: Barber) => {
    setSelectedBarber(barber);
    document.body.style.overflow = "hidden";
  };

  const closeBarberDetail = () => {
    setSelectedBarber(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedBarber) {
        if (e.key === "Escape") closeBarberDetail();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBarber]);

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
            Unser Team – Ihre Experten
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Handwerkskunst & Leidenschaft für Ihren perfekten Look
          </motion.p>
          <div className={styles.divider}></div>
        </div>

        {isMobile ? (
          <div className={styles.sliderContainer}>
            <div className={styles.slider}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={styles.roundCard}
                  onClick={() => openBarberDetail(barbers[currentIndex])}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={barbers[currentIndex].img}
                      alt={barbers[currentIndex].name}
                      width={200}
                      height={200}
                      className={styles.roundImage}
                      priority
                    />
                  </div>
                  <h3>{barbers[currentIndex].name}</h3>
                  <p>{barbers[currentIndex].role}</p>
                  <span className={styles.viewProfile}>Profil ansehen →</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className={styles.controls}>
              <button
                onClick={prevSlide}
                className={styles.navButton}
                aria-label="Vorheriger Barbier"
              >
                <FaChevronLeft />
              </button>
              <div className={styles.dots}>
                {barbers.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      index === currentIndex ? styles.active : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Gehe zu Barbier ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className={styles.navButton}
                aria-label="Nächster Barbier"
              >
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
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                onClick={() => openBarberDetail(barber)}
                whileHover={{ y: -10 }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={barber.img}
                    alt={barber.name}
                    width={200}
                    height={200}
                    className={styles.roundImage}
                    priority={index < 3}
                  />
                </div>
                <h3>{barber.name}</h3>
                <p>{barber.role}</p>
                <span className={styles.viewProfile}>Profil ansehen →</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Barber Detail Modal */}
      <AnimatePresence>
        {selectedBarber && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBarberDetail}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={closeBarberDetail}
                aria-label="Profil schließen"
              >
                &times;
              </button>

              <div className={styles.modalGrid}>
                <div className={styles.modalImageContainer}>
                  <Image
                    src={selectedBarber.img}
                    alt={selectedBarber.name}
                    fill
                    className={styles.modalImage}
                  />
                </div>

                <div className={styles.modalInfo}>
                  <h3>{selectedBarber.name}</h3>
                  <p className={styles.role}>{selectedBarber.role}</p>

                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <span>Erfahrung</span>
                      <p>{selectedBarber.experience}</p>
                    </div>

                    {selectedBarber.bio && (
                      <div className={styles.detailItem}>
                        <span>Über</span>
                        <p>{selectedBarber.bio}</p>
                      </div>
                    )}

                    {selectedBarber.specialties && (
                      <div className={styles.detailItem}>
                        <span>Spezialgebiete</span>
                        <ul className={styles.specialties}>
                          {selectedBarber.specialties.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {selectedBarber.social && (
                    <div className={styles.socialLinks}>
                      {selectedBarber.social.instagram && (
                        <a
                          href={`https://instagram.com/${selectedBarber.social.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <FaInstagram />
                        </a>
                      )}
                      {selectedBarber.social.facebook && (
                        <a
                          href={`https://facebook.com/${selectedBarber.social.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <FaFacebookF />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
