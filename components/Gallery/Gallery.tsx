"use client";
import styles from "./Gallery.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
} from "react-icons/fa";

const galleryImages = [
  {
    src: "/images/barber2.webp",
    alt: "Fade Cut by Max",
    service: "Skin Fade",
  },
  {
    src: "/images/barber4.webp",
    alt: "Classic Cut by Alex",
    service: "Classic Cut",
  },
  {
    src: "/images/barber5.webp",
    alt: "Beard Care by Sara",
    service: "Beard Grooming",
  },
  {
    src: "/images/barber6.webp",
    alt: "Kids Cut by Mo",
    service: "Kids Haircut",
  },
  {
    src: "/images/barber2.webp",
    alt: "Color by Ines",
    service: "Hair Coloring",
  },
  {
    src: "/images/barber2.webp",
    alt: "Trendcut by Tom",
    service: "Trendy Style",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") setIsModalOpen(false);
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentIndex]);

  return (
    <section className={styles.gallerySection} id="gallery">
      <div className={styles.header}>
        <h2 className={styles.title}>Our Gallery</h2>
        <p className={styles.subtitle}>Premium Hair Transformations</p>
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
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setIsModalOpen(true);
              }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay}>
                  <span className={styles.service}>{image.service}</span>
                  <button className={styles.expandBtn}>
                    <FaExpand />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.navButtonPrev} onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className={styles.navButtonNext} onClick={nextSlide}>
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close gallery"
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

            <div className={styles.modalControls}>
              <button
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <span className={styles.modalService}>
                {galleryImages[currentIndex].service}
              </span>

              <button
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next image"
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
