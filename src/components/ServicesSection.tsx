"use client";

import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Building2, 
  Calculator, 
  Wrench, 
  Snowflake,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: ShoppingCart,
    title: "Venta de Equipos",
    description: "Comercialización de equipos de aire acondicionado de las mejores marcas del mercado.",
    color: "bg-blue-500",
  },
  {
    icon: Building2,
    title: "Proyectos Corporativos",
    description: "Diseño de ingeniería de climatización para oficinas, locales comerciales y naves industriales.",
    color: "bg-sky-500",
  },
  {
    icon: Calculator,
    title: "Cálculo de Carga Térmica",
    description: "Estudios técnicos para determinar la capacidad exacta en BTU que requiere su infraestructura.",
    color: "bg-cyan-500",
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description: "Montajes técnicos bajo rigurosas normativas y estándares de seguridad industrial.",
    color: "bg-teal-500",
  },
  {
    icon: Snowflake,
    title: "Refrigeración Industrial",
    description: "Servicios aplicados a la conservación y frío industrial y comercial.",
    color: "bg-indigo-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
           Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Soluciones Completas en<br className="hidden md:block" /> Climatización
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Dinstaire abarca todo el ciclo de climatización, desde el diseño en papel hasta la entrega del equipo funcionando.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-muted mb-4">
                {service.description}
              </p>
              <Link 
                href="/servicios" 
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                Ver más
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Materials Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-secondary rounded-2xl p-8 md:p-10 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Materiales de Alta Gama
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            En nuestras instalaciones utilizamos <strong>Lámina P3</strong> (paneles de aluminio preaislado para conductos de aire), 
            destacándola como una excelente opción técnica que garantiza eficiencia y durabilidad.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <span className="text-amber-400 font-semibold">Aliado estratégico:</span>
            <span className="text-white">Aire Import</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}