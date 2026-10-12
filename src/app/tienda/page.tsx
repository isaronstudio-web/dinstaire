"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, ShoppingCart, Compare, Info } from "lucide-react";
import Link from "next/link";

// Demo products - modo presentación
const products = [
  {
    id: 1,
    name: "Aire Acondicionado Split 12000 BTU",
    brand: "Demo",
    type: "Split",
    capacity: "12000 BTU",
    price: "Cotizar",
    image: "❄️",
    features: ["Tecnología Inverter", "Ahorro energético", "Diseño moderno"],
  },
  {
    id: 2,
    name: "Aire Acondicionado Split 24000 BTU",
    brand: "Demo",
    type: "Split",
    capacity: "24000 BTU",
    price: "Cotizar",
    image: "❄️",
    features: ["Alta potencia", "Frío rápido", "Silencioso"],
  },
  {
    id: 3,
    name: "Aire Window 18000 BTU",
    brand: "Demo",
    type: "Window",
    capacity: "18000 BTU",
    price: "Cotizar",
    image: "🏠",
    features: ["Fácil instalación", "Ideal ventanas", "Potente"],
  },
  {
    id: 4,
    name: "Sistema Central 5 Toneladas",
    brand: "Demo",
    type: "Central",
    capacity: "5 Toneladas",
    price: "Cotizar",
    image: "🏢",
    features: ["Para grandes espacios", "Distribución uniforme", "Alta capacidad"],
  },
  {
    id: 5,
    name: "Aire Split Inverter 36000 BTU",
    brand: "Demo",
    type: "Inverter",
    capacity: "36000 BTU",
    price: "Cotizar",
    image: "❄️",
    features: ["Inverter Premium", "Máximo ahorro", "Control WiFi"],
  },
  {
    id: 6,
    name: "Cámara de Refrigeración",
    brand: "Demo",
    type: "Industrial",
    capacity: "Variable",
    price: "Cotizar",
    image: "🧊",
    features: ["Para conservación", "Personalizable", "Alta eficiencia"],
  },
];

const brands = ["Todos", "Demo"];
const types = ["Todos", "Split", "Window", "Central", "Inverter", "Industrial"];
const capacities = ["Todos", "12000 BTU", "18000 BTU", "24000 BTU", "36000 BTU", "5 Toneladas"];

export default function TiendaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedCapacity, setSelectedCapacity] = useState("Todos");
  const [compareList, setCompareList] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "Todos" || product.brand === selectedBrand;
    const matchesType = selectedType === "Todos" || product.type === selectedType;
    const matchesCapacity = selectedCapacity === "Todos" || product.capacity.includes(selectedCapacity.replace(" BTU", "").replace(" Toneladas", ""));
    return matchesSearch && matchesBrand && matchesType && matchesCapacity;
  });

  const toggleCompare = (id: number) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter((item) => item !== id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, id]);
    }
  };

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
              Catálogo de Equipos
            </h1>
            <p className="text-lg text-muted">
              Explora nuestra gama de equipos de climatización. ¿No encuentras lo que buscas? 
              Solicita una cotización personalizada.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
              <Info className="w-4 h-4" />
              <span className="text-sm font-medium">Modo demostración - Conectando con Firebase pronto</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                placeholder="Buscar equipos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary outline-none"
              >
                {types.map((type) => (
                  <option key={type} value={type}>{type === "Todos" ? "Tipo" : type}</option>
                ))}
              </select>
              
              <select
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary outline-none"
              >
                {capacities.map((cap) => (
                  <option key={cap} value={cap}>{cap === "Todos" ? "Capacidad" : cap}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="bg-primary text-white py-3 px-4 sticky top-32 z-30">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compare className="w-5 h-5" />
              <span>{compareList.length} producto(s) seleccionado(s) para comparar</span>
            </div>
            <button
              onClick={() => setCompareList([])}
              className="text-sm underline"
            >
              Limpiar
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group overflow-hidden"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center text-6xl">
                  {product.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-muted text-xs rounded">
                      {product.type}
                    </span>
                    <span className="px-2 py-1 bg-sky-100 text-primary text-xs rounded">
                      {product.capacity}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-secondary mb-2">
                    {product.name}
                  </h3>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-xs text-muted">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href="/contacto"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-xl font-medium hover:bg-primary-dark transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Cotizar
                    </Link>
                    <button
                      onClick={() => toggleCompare(product.id)}
                      className={`px-4 rounded-xl border-2 transition-all ${
                        compareList.includes(product.id)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-200 text-muted hover:border-primary"
                      }`}
                    >
                      <Compare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg mb-4">No se encontraron productos.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedBrand("Todos");
                  setSelectedType("Todos");
                  setSelectedCapacity("Todos");
                }}
                className="text-primary underline"
              >
                Limpiar filtros
              </button>
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
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Nuestro equipo técnico te asesorará para encontrar el equipo perfecto para tu espacio.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
              >
              Hablar con un asesor
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}