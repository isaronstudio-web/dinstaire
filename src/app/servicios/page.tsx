"use client";

import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Building2, 
  Calculator, 
  Wrench, 
  Snowflake,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: ShoppingCart,
    title: "Venta de Equipos",
    description: "Comercialización de equipos de aire acondicionado y sistemas de refrigeración de las mejores marcas del mercado. Garantizamos equipos de primera calidad para cada necesidad.",
    features: [
      "Equipos de todas las capacidades",
      "Marcas reconocidas nacional e internacional",
      "Asesoría técnica especializada",
      "Garantía en todos los equipos"
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Building2,
    title: "Proyectos Corporativos",
    description: "Diseño de ingeniería de climatización a nivel corporativo y empresarial. Soluciones integrales para oficinas, locales comerciales y naves industriales.",
    features: [
      "Diseño personalizado según necesidades",
      "Cumplimiento de normas de seguridad",
      "Proyectos de cualquier escala",
      "Asesoría desde la planificación"
    ],
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Calculator,
    title: "Cálculo de Carga Térmica",
    description: "Realizamos estudios técnicos previos para determinar la capacidad exacta en BTU o toneladas que requiere su infraestructura.",
    features: [
      "Análisis técnico profesional",
      "Evita sobrecostos en equipos",
      "Previene deficiencias en enfriamiento",
      "Optimización de consumo energético"
    ],
    color: "from-cyan-400 to-teal-500",
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description: "Montajes técnicos bajo rigurosas normativas y estándares de seguridad industrial. Nuestro equipo garantiza trabajos limpios y correctos.",
    features: [
      "Personal técnico certificado",
      "Cumplimiento de normativas",
      "Trabajos precisos y limpios",
      "Compromiso garantizado"
    ],
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Snowflake,
    title: "Refrigeración Industrial",
    description: "Servicios especializados para conservación y frío industrial y comercial. Soluciones para cualquier tipo de necesidad de refrigeración.",
    features: [
      "Cámaras de refrigeración",
      "Equipos industriales",
      "Mantenimiento preventivo",
      "Servicio técnico especializado"
    ],
    color: "bg-indigo-500",
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section - Dark Theme */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-cyan-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              SERVICIOS
            </h1>
            <p className="text-lg text-white/50 font-light">
              Soluciones integrales de climatización para empresas e industrias. 
              Desde el diseño hasta la instalación, garantizamos excellence en cada proyecto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`aspect-square rounded-3xl ${service.color} bg-opacity-10 flex items-center justify-center`}>
                    <service.icon className={`w-32 h-32 ${service.color} text-opacity-30`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Materiales de Alta Gama
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Utilizamos materiales de primera línea y tecnologías de última generación para garantizar 
              instalaciones duraderas y eficientes. Cada proyecto es ejecutado con los más altos estándares de calidad.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Certificación ISO", "Garantía Extendida", "Servicio Técnico 24/7"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Necesitas alguno de nuestros servicios?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para una consulta gratuita. Nuestro equipo te ayudará a encontrar la mejor solución.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover-lift"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}