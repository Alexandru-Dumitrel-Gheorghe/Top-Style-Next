"use client";
import styles from "./Gallery.module.css";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
  FaPause,
  FaPlay,
} from "react-icons/fa";

interface GalleryImage {
  src: string;
  alt: string;
  service: string;
  description?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/barber2.webp",
    alt: "Fade Cut von Max",
    service: "Skin Fade",
    description: "Präzise Fade-Technik für einen scharfen, sauberen Look",
  },
  {
    src: "/images/barber4.webp",
    alt: "Klassischer Schnitt von Alex",
    service: "Klassischer Schnitt",
    description: "Zeitloser Stil mit modernen Akzenten",
  },
  {
    src: "/images/barber5.webp",
    alt: "Bartpflege von Sara",
    service: "Bartpflege",
    description: "Professionelles Formen und Pflegen des Bartes",
  },
  {
    src: "/images/barber6.webp",
    alt: "Kinderhaarschnitt von Mo",
    service: "Kinderhaarschnitt",
    description: "Fröhliche und bequeme Schnitte für unsere jungen Kunden",
  },
  {
    src: "/images/barber7.webp",
    alt: "Färben von Ines",
    service: "Haarfarbe",
    description: "Leuchtende Farben mit hochwertigen Produkten",
  },
  {
    src: "/images/barber8.webp",
    alt: "Trendcut von Tom",
    service: "Trendfrisur",
    description: "Die neuesten Modetrends individuell gestylt",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === " ") toggleAutoPlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentIndex, prevSlide, nextSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className={styles.header}>
        <h2 className={styles.title}>Unsere Meisterwerke</h2>
        <p className={styles.subtitle}>Premium Haarverwandlungen</p>
      </div>

      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => openModal(index)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setIsLoading(false)}
                  priority={index < 3}
                />
                {isLoading && <div className={styles.skeleton}></div>}
                <div className={styles.overlay}>
                  <span className={styles.service}>{image.service}</span>
                  <button
                    className={styles.expandBtn}
                    aria-label="Bild vergrößern"
                  >
                    <FaExpand />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={styles.navButtonPrev}
          onClick={prevSlide}
          aria-label="Vorheriges Bild"
        >
          <FaChevronLeft />
        </button>
        <button
          className={styles.navButtonNext}
          onClick={nextSlide}
          aria-label="Nächstes Bild"
        >
          <FaChevronRight />
        </button>

        <div className={styles.dots}>
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Gehe zu Bild ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Galerie schließen"
            >
              <FaTimes />
            </button>

            <div className={styles.modalImageContainer}>
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className={styles.modalImage}
                priority
              />
            </div>

            <div className={styles.modalInfo}>
              <h3 className={styles.modalTitle}>
                {galleryImages[currentIndex].service}
              </h3>
              {galleryImages[currentIndex].description && (
                <p className={styles.modalDescription}>
                  {galleryImages[currentIndex].description}
                </p>
              )}
            </div>

            <div className={styles.modalControls}>
              <button
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Vorheriges Bild"
              >
                <FaChevronLeft />
              </button>

              <button
                className={styles.playPauseButton}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAutoPlay();
                }}
                aria-label={
                  isAutoPlaying ? "Diashow pausieren" : "Diashow abspielen"
                }
              >
                {isAutoPlaying ? <FaPause /> : <FaPlay />}
              </button>

              <button
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Nächstes Bild"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
