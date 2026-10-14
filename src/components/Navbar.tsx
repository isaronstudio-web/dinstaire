"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Snowflake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/tienda", label: "Tienda" },
  { href: "/calculadora-btu", label: "Calculadora" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/admin", label: "🔧 Admin" },
];

const navLinksEN = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Services" },
  { href: "/tienda", label: "Store" },
  { href: "/calculadora-btu", label: "BTU Calc" },
  { href: "/proyectos", label: "Projects" },
  { href: "/sobre-nosotros", label: "About" },
  { href: "/contacto", label: "Contact" },
  { href: "/admin", label: "🔧 Admin" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  const links = lang === "es" ? navLinks : navLinksEN;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110 overflow-hidden">
              <img src="/proyectos/logo.jpg" alt="Dinstaire" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-white tracking-tight">
                Dinstaire
              </span>
              <span className="hidden sm:block text-xs text-cyan-400 font-medium">
                {lang === "es" ? "Clima Confiable Siempre" : "Reliable Climate Always"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side - Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-white/50 hover:text-cyan-400 transition-colors text-xs border border-white/10 px-2 py-1 rounded"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase">{lang}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4 bg-white rounded-xl p-4 shadow-lg">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-secondary hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}