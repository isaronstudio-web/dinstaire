import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap"
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dinstaire C.A. | Climatización en Maracay",
  description: "Más de 40 años de experiencia en climatización profesional en Maracay, Venezuela. Servicios de venta, instalación, proyectos corporativos y refrigeración industrial.",
  keywords: "climatización, aire acondicionado, refrigeración, Maracay, Dinstaire, instalación",
  openGraph: {
    title: "Dinstaire C.A. - Clima confiable siempre",
    description: "Expertos en climatización con más de 40 años de experiencia",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
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