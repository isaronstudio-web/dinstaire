"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Factory, Store, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Sistema de Climatización Industrial",
    client: "Laboratorios Topp, C.A.",
    location: "Zona Industrial San Pablo, Turmero",
    year: "2025",
    category: "Industrial",
    description: "Proyecto integral de climatización para planta farmacéutica veterinaria. Instalación de sistemas de aire acondicionado industriales de alta capacidad para laboratorios y áreas de producción.",
    services: ["Cálculo de carga térmica", "Instalación industrial", "Sistemas de precisión"],
    image: "/proyectos/lab-topp.jpg",
    icon: Factory,
    instagram: "https://www.instagram.com/laboratoriostopp/?hl=es",
  },
  {
    id: 2,
    title: "Climatización Corporativa Integral",
    client: "Agua OMI C.A.",
    location: "Maracay, Estado Aragua",
    year: "2024",
    category: "Corporativo",
    description: "Proyecto integral de climatización corporativa, encargándose del traslado, cálculo e instalación industrial completo.",
    services: ["Cálculo de carga térmica", "Instalación industrial", "Mantenimiento"],
    image: "/proyectos/agua-omi.jpg",
    icon: Building2,
    instagram: null,
  },
  {
    id: 3,
    title: "Sistema de Refrigeración",
    client: "Biocontrol",
    location: "Las Delicias, Maracay",
    year: "2024",
    category: "Industrial",
    description: "Instalación de sistema de refrigeración para conservación de productos biológicos con altos estándares de calidad.",
    services: ["Diseño de sistema", "Equipos industriales", "Certificación"],
    image: "/proyectos/biocontrol.jpg",
    icon: Factory,
    instagram: "https://www.instagram.com/biocontrolve/",
  },
];

const categories = ["Todos", "Corporativo", "Industrial", "Comercial"];

export default function ProyectosPage() {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              PROYECTOS
            </h1>
            <p className="text-lg text-white/50 font-light">
              Casos de éxito que respaldan nuestra trayectoria. 
              Más de 40 años garantizando el mejor ambiente para empresas líderes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter - Dark */}
      <section className="py-6 bg-[#0A0A0A] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-gray-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                  filter === category
                    ? "bg-cyan-500 text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                {/* Image Area */}
                <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <project.icon className="w-24 h-24 text-cyan-400/20 group-hover:scale-110 transition-transform" />
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-sm font-medium text-black">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service) => (
                      <span 
                        key={service}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    📍 {project.location}
                  </p>
                  
                  {/* Instagram Link */}
                  {project.instagram && (
                    <a
                      href={project.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Ver Instagram de {project.client}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No hay proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#050505] to-[#111]">
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
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
            >
              Comentar mi proyecto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}