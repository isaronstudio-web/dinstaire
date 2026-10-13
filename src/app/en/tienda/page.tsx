"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, ShoppingCart, Info } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, name: "Split AC 12000 BTU", brand: "Demo", type: "Split", capacity: "12000 BTU", price: "Quote", image: "❄️", features: ["Inverter Technology", "Energy Saving", "Modern Design"] },
  { id: 2, name: "Split AC 24000 BTU", brand: "Demo", type: "Split", capacity: "24000 BTU", price: "Quote", image: "❄️", features: ["High Power", "Fast Cooling", "Quiet"] },
  { id: 3, name: "Window AC 18000 BTU", brand: "Demo", type: "Window", capacity: "18000 BTU", price: "Quote", image: "🏠", features: ["Easy Installation", "Ideal for Windows", "Powerful"] },
  { id: 4, name: "Central System 5 Tons", brand: "Demo", type: "Central", capacity: "5 Tons", price: "Quote", image: "🏢", features: ["For Large Spaces", "Uniform Distribution", "High Capacity"] },
  { id: 5, name: "Inverter Split 36000 BTU", brand: "Demo", type: "Inverter", capacity: "36000 BTU", price: "Quote", image: "❄️", features: ["Premium Inverter", "Maximum Savings", "WiFi Control"] },
  { id: 6, name: "Refrigeration Chamber", brand: "Demo", type: "Industrial", capacity: "Variable", price: "Quote", image: "🧊", features: ["For Conservation", "Customizable", "High Efficiency"] },
];

const types = ["All", "Split", "Window", "Central", "Inverter", "Industrial"];
const capacities = ["All", "12000 BTU", "18000 BTU", "24000 BTU", "36000 BTU", "5 Tons"];

export default function TiendaPageEN() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCapacity, setSelectedCapacity] = useState("All");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || p.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Equipment Catalog</h1>
            <p className="text-lg text-gray-400">Explore our range of air conditioning equipment. Can't find what you're looking for? Request a personalized quote.</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full border border-amber-500/20">
              <Info className="w-4 h-4" />
              <span className="text-sm font-medium">Demo mode - Connecting with Firebase soon</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-[#0a0a0a] border-b border-white/5 sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input type="text" placeholder="Search equipment..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#111] border border-white/10 focus:border-cyan-500 outline-none text-white placeholder-gray-500" />
            </div>
            <div className="flex flex-wrap gap-2">
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white">
                {types.map((t) => <option key={t} value={t}>{t === "All" ? "Type" : t}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-[#111] rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl">{product.image}</div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">{product.type}</span>
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">{product.capacity}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <div className="flex gap-2">
                    <Link href="/en/contacto" className="flex-1 inline-flex items-center justify-center gap-2 bg-cyan-500 text-black py-2.5 rounded-xl font-medium hover:bg-cyan-400 transition-all">
                      <ShoppingCart className="w-4 h-4" /> Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#050505] to-[#111]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#111] rounded-3xl p-8 md:p-12 text-center border border-white/5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Need help choosing?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Our technical team will advise you to find the perfect equipment for your space.</p>
            <Link href="/en/contacto" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold transition-all hover-lift">Talk to an advisor <ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}