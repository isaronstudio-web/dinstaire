"use client";

import { motion } from "framer-motion";
import { Award, Users, Wrench, Shield, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-cyan-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
             Sobre Dinstaire
            </h1>
            <p className="text-lg text-white/50 font-light">
              Más de 40 años garantizando el mejor clima para empresas y hogares en Maracay y toda la región central de Venezuela.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Especialistas en Climatización
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    En Dinstaire, somos una empresa especializada en el diseño de proyectos, venta, instalación y mantenimiento de sistemas de aire acondicionado y refrigeración en Maracay y toda la región central de Venezuela. Contamos con una trayectoria sólida en el sector de la climatización, brindando soluciones térmicas eficientes tanto para espacios residenciales como para proyectos comerciales e industriales.
                  </p>
                  <p>
                    Nuestro enfoque principal está en garantizar ambientes con temperatura controlada y óptimo rendimiento energético, combinando equipos de alta tecnología con mano de obra técnica calificada para asegurar instalaciones duraderas y seguras.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Soluciones y Servicios Técnicos
                </h3>
                <p className="text-gray-300 mb-6">
                  Ejecutamos proyectos de climatización adaptados a la infraestructura de cada cliente, asegurando un soporte operativo continuo:
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Venta de Equipos", desc: "Suministro de sistemas de aire acondicionado y refrigeración con tecnología eficiente y marcas reconocidas en el mercado." },
                    { title: "Proyectos e Instalación", desc: "Diseño y montaje de redes de ductos, sistemas de climatización central, unidades compactas y equipos residenciales bajo normas técnicas estrictas." },
                    { title: "Mantenimiento Técnico", desc: "Planes preventivos y correctivos para prolongar la vida útil de los compresores, optimizar el consumo eléctrico y garantizar la pureza del aire." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "40+", label: "Años de Experiencia" },
                  { value: "500+", label: "Proyectos Entregados" },
                  { value: "100%", label: "Compromiso" },
                  { value: "24/7", label: "Soporte" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#111] rounded-2xl p-6 border border-white/5 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Wrench, title: "Ingeniería y diagnóstico real", desc: "Evaluamos la carga térmica real de cada espacio antes de recomendar un equipo, evitando gastos excesivos en sistemas sobredimensionados o fallas por falta de capacidad." },
                    { icon: MapPin, title: "Respuesta operativa local", desc: "Al estar establecidos directamente en Maracay, coordinamos las visitas técnicas, instalaciones y servicios de emergencia de manera rápida y sin demoras de traslado." },
                    { icon: Shield, title: "Garantía de instalación", desc: "Todo proyecto ejecutado cuenta con respaldo técnico directo, asegurando que las presiones, refrigerantes y conexiones eléctricas queden perfectamente calibradas desde el primer día." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h4 className="font-semibold text-white">Certificaciones</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Contamos con certificación ISO 9001 y todos nuestros técnicos están certificados para garantizar trabajos de calidad profesional.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-3xl p-8 md:p-12 text-center border border-white/5"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos para una evaluación técnica gratuita y descubre por qué somos la opción preferida de empresas líderes.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
            >
              Solicitar Evaluación Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}