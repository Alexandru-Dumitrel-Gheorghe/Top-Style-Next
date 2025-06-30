"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import Leistungen from "@/components/Leistungen/Leistungen";
import Preise from "@/components/Preise/Preise";
import ContactForm from "@/components/ContactForm/ContactForm";
import UberUns from "@/components/UberUns/UberUns";
import Testimonials from "@/components/Testimonials/Testimonials";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import TeamSection from "@/components/Team/TeamSection";
import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
  // Scroll la secțiune după redirect cu hash (ex: /#preise)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120); // delay mic pentru ca DOM-ul să fie încărcat
      }
    }
  }, []);

  return (
    <main>
      <Hero /> {/* asigură-te că are id="home" */}
      <Leistungen />
      <UberUns />
      <Preise /> {/* asigură-te că are id="preise" */}
      <Testimonials />
      <Gallery /> {/* asigură-te că are id="gallery" */}
      <TeamSection />
      <ContactForm /> {/* asigură-te că are id="kontakt" */}
      <ScrollToTop />
    </main>
  );
}
