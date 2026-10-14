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
    instagram: "https://www.instagram.com/dinstaire/",
  },
  {
    title: "Laboratorio de Alta Seguridad",
    client: "Laboratorios Topp",
    location: "Maracay",
    category: "Corporativo",
    image: "/proyectos/lab-topp.jpg",
    icon: Building2,
    description: "Sistema de climatización especializado para laboratorio farmacéutico con controles de temperatura y humedad estrictos.",
    instagram: "https://www.instagram.com/laboratoriostopp/",
  },
  {
    title: "Sistema de Refrigeración",
    client: "Biocontrol",
    location: "Las Delicias, Maracay",
    category: "Industrial",
    image: "/proyectos/biocontrol.jpg",
    icon: Factory,
    description: "Instalación de sistema de refrigeración para conservación de productos biológicos.",
    instagram: "https://www.instagram.com/biocontrolve/",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="h-56 lg:h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
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
                {project.instagram && (
                  <a 
                    href={project.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 mt-2 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Ver en Instagram
                  </a>
                )}
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