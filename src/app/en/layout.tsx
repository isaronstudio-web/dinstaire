import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: "Dinstaire C.A. | Air Conditioning in Maracay",
  description: "More than 40 years of experience in professional air conditioning in Maracay, Venezuela. Services including sales, installation, corporate projects and industrial refrigeration.",
  keywords: "air conditioning, refrigeration, Maracay, Dinstaire, installation, HVAC",
  openGraph: {
    title: "Dinstaire C.A. - Reliable Climate Always",
    description: "Air conditioning experts with more than 40 years of experience",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayoutEn({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}