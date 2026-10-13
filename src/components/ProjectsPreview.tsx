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
    image: "/proyectos/agua-omi.jpg",
    icon: Building2,
    description: "Proyecto integral de climatización corporativa, encargándose del traslado, cálculo e instalación industrial.",
  },
  {
    title: "Sistema de Refrigeración",
    client: "Biocontrol",
    location: "Las Delicias, Maracay",
    category: "Industrial",
    image: "/proyectos/biocontrol.jpg",
    icon: Factory,
    description: "Instalación de sistema de refrigeración para conservación de productos biológicos.",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
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
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4 border border-cyan-500/20">
              Portafolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Proyectos Realizados
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all"
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
              className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <project.icon className="w-20 h-20 text-cyan-400/20 group-hover:scale-110 transition-transform" />
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-cyan-400 font-medium mb-2">{project.client}</p>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  📍 {project.location}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
          >
            ¿Necesitas un proyecto similar?
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}