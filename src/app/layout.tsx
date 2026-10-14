import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

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
  metadataBase: new URL("https://dinstaire.netlify.app"),
  title: {
    default: "Dinstaire C.A. | Climatización Profesional en Maracay",
    template: "%s | Dinstaire C.A."
  },
  description: "Más de 40 años de experiencia en climatización profesional en Maracay, Venezuela. Venta e instalación de aire acondicionado, proyectos corporativos y refrigeración industrial. ¡Cotiza ahora!",
  keywords: [
    "climatización",
    "aire acondicionado", 
    "refrigeración industrial",
    "instalación de aire acondicionado",
    "proyectos de climatización",
    "mantenimiento de equipos",
    "Maracay",
    "Venezuela",
    "Dinstaire",
    "servicio técnico HVAC",
    "carga térmica",
    "cámara de refrigeración"
  ],
  authors: [{ name: "Dinstaire C.A." }],
  creator: "Dinstaire C.A.",
  publisher: "Dinstaire C.A.",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://dinstaire.netlify.app",
    siteName: "Dinstaire C.A.",
    title: "Dinstaire C.A. | Climatización Profesional en Maracay",
    description: "Más de 40 años de experiencia en climatización profesional. Venta e instalación de aire acondicionado, proyectos corporativos y refrigeración industrial.",
    images: [
      {
        url: "/proyectos/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dinstaire C.A. - Climatización Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinstaire C.A. | Climatización Profesional",
    description: "Más de 40 años de experiencia en climatización profesional en Maracay, Venezuela",
    images: ["/proyectos/hero.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/proyectos/logo.jpg" type="image/jpeg" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <SEO />
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