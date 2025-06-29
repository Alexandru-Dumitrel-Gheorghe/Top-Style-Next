// app/page.tsx
import Hero from "@/components/Hero/Hero";
import Leistungen from "@/components/Leistungen/Leistungen";
import Preise from "@/components/Preise/Preise";
import ContactForm from "@/components/ContactForm/ContactForm";
import UberUns from "@/components/UberUns/UberUns";
import Testimonials from "@/components/Testimonials/Testimonials";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Leistungen />
        <UberUns />
        <Preise />
        <Testimonials />
        <ContactForm />
        <ScrollToTop />
      </main>
    </>
  );
}
