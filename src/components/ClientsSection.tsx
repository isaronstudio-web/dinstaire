"use client";

import { motion } from "framer-motion";
import { Award, Users, Star } from "lucide-react";
import Link from "next/link";

const clients = [
  { name: "Agua OMI", logo: "/proyectos/agua-omi.jpg" },
  { name: "Biocontrol", logo: "/proyectos/biocontrol.jpg" },
  { name: "Topp", logo: "/proyectos/lab-topp.jpg" },
];

const stats = [
  { value: "40+", label: "Años de Experiencia", icon: Award },
  { value: "500+", label: "Proyectos Completados", icon: Users },
  { value: "98%", label: "Clientes Satisfechos", icon: Star },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
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
              className="bg-[#0a0a0a] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/5 hover:border-cyan-500/20 transition-all"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clients Grid - Logo Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-8 border border-cyan-500/20">
            Empresas que confían en nosotros
          </span>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <Link
                key={client.name}
                href="/proyectos"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-2xl flex items-center justify-center p-3 border border-white/10 group-hover:border-cyan-500/30 transition-all overflow-hidden">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white font-medium text-sm">{client.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Certifications - Professional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 bg-cyan-500/5 px-4 py-2 rounded-full border border-cyan-500/20">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">33 años de trayectoria</span>
          </div>
          <div className="flex items-center gap-2 bg-cyan-500/5 px-4 py-2 rounded-full border border-cyan-500/20">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">Personal técnico certificado</span>
          </div>
          <div className="flex items-center gap-2 bg-cyan-500/5 px-4 py-2 rounded-full border border-cyan-500/20">
            <Star className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">98% clientes satisfechos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}