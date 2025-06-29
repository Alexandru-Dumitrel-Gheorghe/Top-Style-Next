"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Leistungen from "@/components/Leistungen/Leistungen";
import UberUns from "@/components/UberUns/UberUns";
import Preise from "@/components/Preise/Preise";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import TeamSection from "@/components/Team/TeamSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

// Dynamic import (ssr:false!) pentru ModalTermine
const ModalTermine = dynamic(
  () => import("@/components/ModalTermine/ModalTermine"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header onOpenBookingModal={() => setShowModal(true)} />
      <main>
        <Hero />
        <Leistungen />
        <UberUns />
        <Preise />
        <Testimonials />
        <Gallery />
        <TeamSection />
        <ContactForm />
        <ScrollToTop />
      </main>
      {showModal && (
        <ModalTermine open={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
