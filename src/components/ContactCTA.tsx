"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-6"
              >
                ¿Listo para trabajar con nosotros?
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Hagamos que tu espacio<br />tenga el clima perfecto
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-lg mb-8"
              >
                Contáctanos hoy para una consulta gratuita. Nuestro equipo te ayudará a encontrar la mejor solución para tus necesidades de climatización.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+58 424-3222919</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>Maracay, Estado Aragua - Avenida Intercomunal</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-5 h-5" />
                  <span>Atención: Lun-Vie 7:00am - 5:00pm</span>
                </div>
              </motion.div>
            </div>

            {/* Right - CTA Card */}
            <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display text-2xl font-bold text-secondary mb-4">
                  Solicita tu cotización
                </h3>
                <p className="text-muted mb-6">
                  Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada.
                </p>
                
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all hover-lift w-full"
                >
                  Contactar ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <p className="text-center text-sm text-muted mt-4">
                  Respuesta en menos de 24 horas
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}