"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Factory, Store } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Climatización Corporativa",
    client: "Agua OMI C.A.",
    location: "Maracay",
    category: "Corporativo",
    icon: Building2,
    description: "Proyecto integral de climatización corporativa, encargándose del traslado, cálculo e instalación industrial.",
  },
  {
    title: "Sistema de Refrigeración",
    client: "Biocontrol",
    location: "Las Delicias, Maracay",
    category: "Industrial",
    icon: Factory,
    description: "Instalación de sistema de refrigeración para conservación de productos biológicos.",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Portafolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
              Proyectos Realizados
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-sky-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-sky-200 to-sky-100 flex items-center justify-center">
                <project.icon className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-primary font-medium mb-2">{project.client}</p>
                <p className="text-muted text-sm mb-4">{project.description}</p>
                <p className="text-sm text-muted-light flex items-center gap-1">
                  📍 {project.location}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-dark transition-all hover-lift"
          >
            ¿Necesitas un proyecto similar?
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}