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
              Our Services
            </h1>
            <p className="text-lg text-muted">
              Dinstaire covers the entire air conditioning cycle, from design on paper 
              to delivering the equipment working. More than 40 years of experience 
              back every job we do.
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
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-secondary">{feature}</span>
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

      {/* Materials Section */}
      <section className="py-20 bg-secondary">
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
            <p className="text-gray-300 text-lg mb-8">
              In our installations we use <strong>Sheet P3</strong> (pre-insulated aluminum panels for air ducts), 
              standing out as an excellent technical option that guarantees efficiency and durability in every installation.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 px-6 py-3 rounded-xl">
              <span className="text-amber-400 font-semibold">Strategic partner:</span>
              <span className="text-white text-lg">Aire Import</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Need any of our services?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our team will help you find the best solution.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover-lift"
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