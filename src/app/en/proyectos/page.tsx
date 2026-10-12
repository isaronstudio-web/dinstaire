"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Factory, Store, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  { 
    id: 1, 
    title: "Industrial Air Conditioning System", 
    titleEN: "Industrial Air Conditioning System", 
    client: "Laboratorios Topp, C.A.", 
    location: "Zona Industrial San Pablo, Turmero", 
    year: "2025", 
    category: "Industrial", 
    descriptionEN: "Complete air conditioning project for veterinary pharmaceutical plant. Installation of high-capacity industrial air conditioning systems for laboratories and production areas.", 
    image: "/proyectos/lab-topp.jpg",
    icon: Factory 
  },
  { 
    id: 2, 
    title: "Corporate Air Conditioning", 
    titleEN: "Corporate Air Conditioning", 
    client: "Agua OMI C.A.", 
    location: "Maracay, Estado Aragua", 
    year: "2024", 
    category: "Corporate", 
    descriptionEN: "Complete corporate air conditioning project, handling transfer, calculation and industrial installation.", 
    image: "/proyectos/agua-omi.jpg",
    icon: Building2 
  },
  { 
    id: 3, 
    title: "Refrigeration System", 
    titleEN: "Refrigeration System", 
    client: "Biocontrol", 
    location: "Las Delicias, Maracay", 
    year: "2024", 
    category: "Industrial", 
    descriptionEN: "Installation of refrigeration system for biological product conservation with high quality standards.", 
    image: "/proyectos/biocontrol.jpg",
    icon: Factory 
  },
];

const categories = ["All", "Corporate", "Industrial", "Commercial"];

export default function ProyectosPageEN() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">Completed Projects</h1>
            <p className="text-lg text-muted">More than 40 years of experience back each project. We have success stories in companies of all sizes.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-muted" />
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat ? "bg-primary text-white" : "bg-gray-100 text-secondary hover:bg-gray-200"}`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="h-64 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.titleEN}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <project.icon className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform" />
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">{project.category}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted mb-3"><span>{project.client}</span><span>•</span><span>{project.year}</span></div>
                  <h3 className="font-display text-2xl font-semibold text-secondary mb-3">{project.titleEN}</h3>
                  <p className="text-muted mb-4">{project.descriptionEN}</p>
                  <p className="text-sm text-muted-light">📍 {project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Do you have a project in mind?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Tell us about your project and we will send you a personalized proposal.</p>
            <Link href="/en/contacto" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all hover-lift">Discuss my project <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}