"use client";

import { motion } from "framer-motion";
import { Award, Users, Wrench, Shield, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SobreNosotrosPageEN() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-cyan-500/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About Dinstaire
            </h1>
            <p className="text-lg text-white/50 font-light">
              More than 40 years guaranteeing the best climate for businesses and homes in Maracay and all of central Venezuela.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Air Conditioning Specialists
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    At Dinstaire, we are a company specialized in design projects, sale, installation and maintenance of air conditioning and refrigeration systems in Maracay and throughout central Venezuela. We have a solid trajectory in the air conditioning sector, providing efficient thermal solutions for both residential spaces and commercial and industrial projects.
                  </p>
                  <p>
                    Our main focus is to guarantee controlled temperature environments and optimal energy efficiency, combining high-tech equipment with qualified technical labor to ensure durable and safe installations.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Solutions and Technical Services
                </h3>
                <p className="text-gray-300 mb-6">
                  We execute air conditioning projects adapted to each client's infrastructure, ensuring continuous operational support:
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Equipment Sales", desc: "Supply of air conditioning and refrigeration systems with efficient technology and recognized brands in the market." },
                    { title: "Projects and Installation", desc: "Design and assembly of duct networks, central air conditioning systems, compact units and residential equipment under strict technical standards." },
                    { title: "Technical Maintenance", desc: "Preventive and corrective plans to extend the useful life of compressors, optimize electrical consumption and guarantee air purity." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "40+", label: "Years of Experience" },
                  { value: "500+", label: "Projects Delivered" },
                  { value: "100%", label: "Commitment" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#111] rounded-2xl p-6 border border-white/5 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
                <h3 className="font-display text-xl font-semibold text-white mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Wrench, title: "Real engineering and diagnosis", desc: "We evaluate the real thermal load of each space before recommending equipment, avoiding excessive expenses on oversized systems or failures due to lack of capacity." },
                    { icon: MapPin, title: "Local operational response", desc: "Being directly established in Maracay, we coordinate technical visits, installations and emergency services quickly and without travel delays." },
                    { icon: Shield, title: "Installation guarantee", desc: "Every project executed has direct technical support, ensuring that pressures, refrigerants and electrical connections are perfectly calibrated from day one." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h4 className="font-semibold text-white">Certifications</h4>
                </div>
                <p className="text-sm text-gray-300">
                  We have ISO 9001 certification and all our technicians are certified to guarantee professional quality work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-3xl p-8 md:p-12 text-center border border-white/5"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Do You Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for a free technical evaluation and discover why we are the preferred choice of leading companies.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
            >
              Request Free Evaluation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}