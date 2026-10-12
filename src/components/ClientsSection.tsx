"use client";

import { motion } from "framer-motion";
import { Award, Users, Star } from "lucide-react";

const clients = [
  { name: "Agua OMI", logo: "💧" },
  { name: "Biocontrol", logo: "🧬" },
  { name: "Aire Import", logo: "❄️" },
  // Placeholder for more clients
  { name: "Su Empresa", logo: "🏢", placeholder: true },
];

const stats = [
  { value: "40+", label: "Años de Experiencia", icon: Award },
  { value: "500+", label: "Proyectos Completados", icon: Users },
  { value: "98%", label: "Clientes Satisfechos", icon: Star },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
            >
              <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-gray-300 rounded-full text-sm font-medium mb-8">
            Empresas que confían en nosotros
          </span>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center gap-2 ${
                  client.placeholder ? "opacity-40" : ""
                }`}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-2xl flex items-center justify-center text-4xl md:text-5xl">
                  {client.logo}
                </div>
                <span className="text-gray-400 text-sm">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-gray-300">Alianza estratégica con Aire Import</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Users className="w-5 h-5 text-amber-400" />
            <span className="text-gray-300">Personal técnico certificado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}