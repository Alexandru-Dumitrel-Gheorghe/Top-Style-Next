import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// COMPONENTE GLOBALE
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Fonturi Google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Meta pentru SEO
export const metadata: Metadata = {
  title: "Top Style Barber Shop | Ihr moderner Friseur in [Stadt]",
  description:
    "Top Style Barber Shop – Professionelle Haarschnitte & Bartpflege für Herren, Damen & Kinder. Jetzt Termin buchen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
