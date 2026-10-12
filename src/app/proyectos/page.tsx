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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Proyectos Realizados
            </h1>
            <p className="text-lg text-muted">
              Más de 40 años de experiencia respaldan cada proyecto. 
              Contamos con casos de éxito en empresas de todos los tamaños.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-muted" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-secondary hover:bg-gray-200"
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Image Area */}
                <div className="h-64 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <project.icon className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform" />
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted mb-3">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-secondary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4">{project.description}</p>
                  
                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service) => (
                      <span 
                        key={service}
                        className="px-3 py-1 bg-sky-50 text-primary text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-light flex items-center gap-1">
                    📍 {project.location}
                  </p>
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
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
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