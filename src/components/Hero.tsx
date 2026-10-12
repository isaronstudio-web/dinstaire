"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Snowflake, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { icon: Clock, label: "+40 Años", desc: "Trayectoria comprobada" },
    { icon: Shield, label: "Calidad", desc: "Compromiso garantizado" },
    { icon: Zap, label: "Eficiencia", desc: "Priorizamos su confort" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax - Dark Theme */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <img 
            src="/proyectos/hero.jpg" 
            alt="Dinstaire Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>
        
        {/* Cyan Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Minimalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80 tracking-wide">
              EXPERTOS EN CLIMATIZACIÓN
            </span>
          </motion.div>

          {/* Main Title - Bold & Clean */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95] tracking-tight"
          >
            CLIMA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              CONFIBLE
            </span>
          </motion.h1>

          {/* Subtitle - Minimal */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 font-light"
          >
            Soluciones profesionales de climatización para empresas e industrias. 
            +40 años de experiencia garantizando el mejor ambiente para tu negocio.
          </motion.p>

          {/* CTA Buttons - Minimal & Bold */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              COTIZAR
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-semibold transition-all"
            >
              PROYECTOS
            </Link>
          </motion.div>

          {/* Stats - Clean Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "40+", label: "AÑOS" },
              { value: "500+", label: "PROYECTOS" },
              { value: "100%", label: "COMPROMISO" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}