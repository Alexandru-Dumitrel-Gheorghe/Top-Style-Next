"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Zurück nach oben"
    >
      <FaChevronUp className={styles.icon} />
    </button>
  );
}
