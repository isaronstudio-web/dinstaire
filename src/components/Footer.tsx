"use client";

import Link from "next/link";
import { Phone, MapPin, Snowflake, ArrowUpRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display text-xl font-bold">Dinstaire</span>
                <p className="text-xs text-gray-400">C.A.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "Clima confiable siempre"
            </p>
            <p className="text-sm text-gray-400">
              Más de 40 años de experiencia en climatización profesional en Maracay, Venezuela.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Tienda", "Proyectos", "Contacto"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Venta de Equipos</li>
              <li className="text-gray-300">Proyectos Corporativos</li>
              <li className="text-gray-300">Cálculo de Carga Térmica</li>
              <li className="text-gray-300">Instalación Profesional</li>
              <li className="text-gray-300">Refrigeración Industrial</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">+58 424-3222919</p>
                  <p className="text-sm text-gray-400">WhatsApp disponible</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Maracay, Estado Aragua</p>
                  <p className="text-sm text-gray-400">Avenida Intercomunal</p>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/dinstaire"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/dinstaire"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Dinstaire C.A. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400">
              Expertos en climatización con más de 40 años de experiencia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}