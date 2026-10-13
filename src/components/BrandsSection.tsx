"use client";

import { motion } from "framer-motion";

const brands = [
  {
    name: "Carrier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Carrier_logo.svg/200px-Carrier_logo.svg.png",
    alt: "Carrier"
  },
  {
    name: "LG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/LG_logo_%282015%29.svg/200px-LG_logo_%282015%29.svg.png",
    alt: "LG"
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png",
    alt: "Samsung"
  },
  {
    name: "Midea",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Midea_Logo.svg/200px-Midea_Logo.svg.png",
    alt: "Midea"
  },
  {
    name: "Hisense",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hisense_logo.svg/200px-Hisense_logo.svg.png",
    alt: "Hisense"
  },
  {
    name: "Panasonic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Panasonic_Logo.svg/200px-Panasonic_Logo.svg.png",
    alt: "Panasonic"
  },
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4 border border-cyan-500/20">
            Marcas Representadas
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Trabajamos con las mejores marcas
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-28 h-20 md:w-36 md:h-24 bg-white/5 rounded-xl flex items-center justify-center p-3 border border-white/10 group-hover:border-cyan-500/30 transition-all overflow-hidden">
                <img 
                  src={brand.logo} 
                  alt={brand.alt}
                  className="w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                />
              </div>
              <span className="text-gray-500 text-xs font-medium">{brand.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Y muchas más marcas disponibles bajo pedido
        </motion.p>
      </div>
    </section>
  );
}