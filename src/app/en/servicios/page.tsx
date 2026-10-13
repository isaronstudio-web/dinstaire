"use client";

import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Building2, 
  Calculator, 
  Wrench, 
  Snowflake,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: ShoppingCart,
    title: "Equipment Sales",
    description: "Marketing of air conditioning equipment from the best brands in the market. We guarantee top-quality equipment for every need.",
    features: [
      "Equipment of all capacities",
      "Recognized national and international brands",
      "Specialized technical advice",
      "Warranty on all equipment"
    ],
    color: "bg-blue-500",
  },
  {
    icon: Building2,
    title: "Corporate Projects",
    description: "Engineering design of air conditioning at a corporate and business level. Complete solutions for offices, commercial spaces, and industrial buildings.",
    features: [
      "Customized design according to needs",
      "Compliance with safety standards",
      "Projects of any scale",
      "Advisory from planning"
    ],
    color: "bg-sky-500",
  },
  {
    icon: Calculator,
    title: "Thermal Load Calculation",
    description: "We carry out prior technical studies to determine the exact capacity in BTU or tons your infrastructure requires.",
    features: [
      "Professional technical analysis",
      "Avoids overcost in equipment",
      "Prevents cooling deficiencies",
      "Energy consumption optimization"
    ],
    color: "bg-cyan-500",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Technical assemblies under rigorous standards and industrial safety regulations. Our team guarantees clean and correct work.",
    features: [
      "Certified technical staff",
      "Regulatory compliance",
      "Precise and clean work",
      "We never damage our reputation"
    ],
    color: "bg-teal-500",
  },
  {
    icon: Snowflake,
    title: "Industrial Refrigeration",
    description: "Specialized services for industrial and commercial conservation and cold. Solutions for any type of refrigeration need.",
    features: [
      "Refrigeration chambers",
      "Industrial equipment",
      "Preventive maintenance",
      "Specialized technical service"
    ],
    color: "bg-indigo-500",
  },
];

export default function ServiciosPageEN() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section - Dark */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              SERVICES
            </h1>
            <p className="text-lg text-white/50 font-light">
              Complete air conditioning solutions for businesses and industries. 
              From design to installation, we guarantee excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`aspect-square rounded-3xl ${service.color} bg-opacity-10 flex items-center justify-center`}>
                    <service.icon className={`w-32 h-32 ${service.color} text-opacity-30`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section - Dark */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              High-End Materials
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We use first-rate materials and cutting-edge technologies to guarantee 
              durable and efficient installations. Each project is executed with the highest quality standards.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {["ISO Certification", "Extended Warranty", "24/7 Technical Service"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="py-20 bg-gradient-to-b from-[#050505] to-[#111]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cyan-500 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Need any of our services?
            </h2>
            <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our team will help you find the best solution.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-black/80 transition-all hover-lift"
            >
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}