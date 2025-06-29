"use client";

import styles from "./Gallery.module.css";
import { FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

// Replace these with your actual images from public/images
const galleryImages = [
  {
    src: "/images/barbershop-hero.png",
    alt: "Professioneller Haarschnitt",
    category: "Herren",
  },
  {
    src: "/images/barbershop-hero.png",
    alt: "Stylische Damenfrisur",
    category: "Damen",
  },
  {
    src: "/images/barbershop-hero.png",
    alt: "Präzise Bartpflege",
    category: "Bart",
  },
  {
    src: "/images/barbershop-hero.png",
    alt: "Moderne Haarfarbe",
    category: "Farbe",
  },
  {
    src: "/images/barbershop-hero.png",
    alt: "Kreativer Kinderhaarschnitt",
    category: "Kinder",
  },
  {
    src: "/images/barbershop-hero.png",
    alt: "Klassische Rasur",
    category: "Rasur",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Alle");

  const categories = [
    "Alle",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  const filteredImages =
    activeCategory === "Alle"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage((prev) =>
        prev === 0 ? filteredImages.length - 1 : (prev || 0) - 1
      );
    } else {
      setSelectedImage((prev) =>
        (prev || 0) === filteredImages.length - 1 ? 0 : (prev || 0) + 1
      );
    }
  };

  return (
    <section className={styles.gallery} id="galerie">
      <div className={styles.container}>
        <h2 className={styles.title}>Unsere Galerie</h2>
        <p className={styles.subtitle}>
          Entdecken Sie unsere handwerkliche Perfektion in Bildern
        </p>

        {/* Category Filters */}
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={styles.imageContainer}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <FaExpand className={styles.zoomIcon} />
                <span className={styles.categoryTag}>{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className={styles.lightbox}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              &times;
            </button>

            <button
              className={styles.navButton}
              onClick={() => navigate("prev")}
            >
              <FaChevronLeft />
            </button>

            <div className={styles.lightboxContent}>
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className={styles.lightboxImage}
              />
              <p className={styles.lightboxCaption}>
                {filteredImages[selectedImage].alt}
              </p>
            </div>

            <button
              className={styles.navButton}
              onClick={() => navigate("next")}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
