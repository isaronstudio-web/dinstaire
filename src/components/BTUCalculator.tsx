"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Thermometer, Building2, Home, Warehouse, ArrowRight, Info } from "lucide-react";

interface BTUResult {
  minBTU: number;
  maxBTU: number;
  recommendation: string;
  equipos: string[];
}

export default function BTUCalculator() {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState<"residencial" | "comercial" | "industrial">("residencial");
  const [ancho, setAncho] = useState(0);
  const [largo, setLargo] = useState(0);
  const [altura, setAltura] = useState(0);
  const [personas, setPersonas] = useState(2);
  const [equipos, setEquipos] = useState(0);
  const [ventanas, setVentanas] = useState(0);
  const [resultado, setResultado] = useState<BTUResult | null>(null);

  const calcularBTU = () => {
    // Cálculo básico de carga térmica
    const volumen = ancho * largo * altura;
    
    // Factores base por tipo de espacio
    const factorTipo = tipo === "residencial" ? 25 : tipo === "comercial" ? 30 : 35;
    
    // Cálculo base
    let btuBase = volumen * factorTipo;
    
    // Añadir carga por personas (+600 BTU por persona adicional)
    if (personas > 2) {
      btuBase += (personas - 2) * 600;
    }
    
    // Añadir carga por equipos electrónicos
    btuBase += equipos * 400;
    
    // Añadir carga por ventanas (cada ventana adds ~1000 BTU)
    btuBase += ventanas * 1000;
    
    // Margen de seguridad del 10%
    const btuConMargen = btuBase * 1.1;
    
    // Rangos
    const minBTU = Math.floor(btuConMargen * 0.9);
    const maxBTU = Math.floor(btuConMargen * 1.1);
    
    // Recomendación
    let recommendation = "";
    let equiposRecomendados: string[] = [];
    
    if (maxBTU <= 12000) {
      recommendation = "Equipo de 12,000 BTU - Ideal para habitaciones pequeñas";
      equiposRecomendados = ["Split Inverter 12,000 BTU", "Window 12,000 BTU"];
    } else if (maxBTU <= 18000) {
      recommendation = "Equipo de 18,000 BTU - Perfecto para salas o dormitorios grandes";
      equiposRecomendados = ["Split Inverter 18,000 BTU", "Split 18,000 BTU"];
    } else if (maxBTU <= 24000) {
      recommendation = "Equipo de 24,000 BTU - Para espacios medianos";
      equiposRecomendados = ["Split Inverter 24,000 BTU", "Mini Split 24,000 BTU"];
    } else if (maxBTU <= 36000) {
      recommendation = "Equipo de 36,000 BTU - Espacios grandes o abiertos";
      equiposRecomendados = ["Mini Split 36,000 BTU", "Sistema Central 3 Toneladas"];
    } else if (maxBTU <= 48000) {
      recommendation = "Sistema de 4 Toneladas - Locales comerciales";
      equiposRecomendados = ["Sistema Central 4 Toneladas", "Paquete Comercial"];
    } else if (maxBTU <= 60000) {
      recommendation = "Sistema de 5 Toneladas - Naves industriales pequeñas";
      equiposRecomendados = ["Sistema Central 5 Toneladas", "Sistema Packaged"];
    } else {
      recommendation = "Sistema central de más de 5 toneladas - Requiere evaluación técnica";
      equiposRecomendados = ["Sistema Central Personalizado", "Sistema VRF/VRV"];
    }
    
    setResultado({
      minBTU,
      maxBTU,
      recommendation,
      equipos: equiposRecomendados
    });
    
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setTipo("residencial");
    setAncho(0);
    setLargo(0);
    setAltura(0);
    setPersonas(2);
    setEquipos(0);
    setVentanas(0);
    setResultado(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Herramienta Gratis</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Calculadora de BTU
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Calcula la capacidad de aire acondicionado que necesitas para tu espacio. 
            Es rápido, gratis y sin compromiso.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-[#111] rounded-3xl border border-white/5 overflow-hidden"
        >
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 py-6 bg-[#0a0a0a] border-b border-white/5">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  step >= s ? "bg-cyan-500 text-black" : "bg-white/10 text-gray-500"
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${step > s ? "bg-cyan-500" : "bg-white/10"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Tipo de espacio */}
          {step === 1 && (
            <div className="p-8">
              <h2 className="font-display text-2xl font-semibold text-white mb-6 text-center">
                ¿Qué tipo de espacio necesitas climatizar?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "residencial", icon: Home, label: "Residencial", desc: "Casas, apartamentos" },
                  { id: "comercial", icon: Building2, label: "Comercial", desc: "Oficinas, locales" },
                  { id: "industrial", icon: Warehouse, label: "Industrial", desc: "Naves, fábricas" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTipo(item.id as any)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${
                      tipo === item.id
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <item.icon className={`w-10 h-10 mb-3 ${tipo === item.id ? "text-cyan-400" : "text-gray-500"}`} />
                    <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Medidas */}
          {step === 2 && (
            <div className="p-8">
              <h2 className="font-display text-2xl font-semibold text-white mb-6 text-center">
                ¿Cuáles son las dimensiones del espacio?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Ancho (metros)</label>
                  <input
                    type="number"
                    value={ancho || ""}
                    onChange={(e) => setAncho(Number(e.target.value))}
                    placeholder="Ej: 5"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Largo (metros)</label>
                  <input
                    type="number"
                    value={largo || ""}
                    onChange={(e) => setLargo(Number(e.target.value))}
                    placeholder="Ej: 6"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Alto (metros)</label>
                  <input
                    type="number"
                    value={altura || ""}
                    onChange={(e) => setAltura(Number(e.target.value))}
                    placeholder="Ej: 2.5"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Número de personas</label>
                  <input
                    type="number"
                    value={personas}
                    onChange={(e) => setPersonas(Number(e.target.value))}
                    min={1}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Equipos electrónicos</label>
                  <input
                    type="number"
                    value={equipos}
                    onChange={(e) => setEquipos(Number(e.target.value))}
                    min={0}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Número de ventanas</label>
                  <input
                    type="number"
                    value={ventanas}
                    onChange={(e) => setVentanas(Number(e.target.value))}
                    min={0}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-xl mb-8">
                <Info className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <p className="text-sm text-cyan-300">
                  Esta calculadora es una estimación. Para un cálculo exacto, unsere técnicos realizan un análisis profesional de carga térmica en sitio.
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl text-gray-400 hover:text-white transition-colors"
                >
                  Atrás
                </button>
                <button
                  onClick={calcularBTU}
                  disabled={!ancho || !largo || !altura}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calcular
                  <Calculator className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Resultado */}
          {step === 3 && resultado && (
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-10 h-10 text-cyan-400" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-white mb-2">
                  Resultado de tu cálculo
                </h2>
                <p className="text-gray-400">Basado en las dimensiones de {ancho}m x {largo}m x {altura}m</p>
              </div>

              <div className="bg-[#0a0a0a] rounded-2xl p-6 mb-6 border border-white/5">
                <div className="text-center mb-4">
                  <p className="text-gray-400 text-sm mb-1">Necesitas aproximadamente</p>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {resultado.minBTU.toLocaleString()} - {resultado.maxBTU.toLocaleString()} <span className="text-lg text-cyan-400">BTU</span>
                  </div>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <p className="text-center text-cyan-400 font-medium">{resultado.recommendation}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-white mb-3 text-center">Equipos recomendados</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {resultado.equipos.map((eq) => (
                    <span key={eq} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contacto"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-4 rounded-xl font-semibold transition-all"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={reset}
                  className="px-6 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  Nuevo cálculo
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-sm mt-8 max-w-xl mx-auto">
          * Esta calculadora proporciona una estimación basada en factores estándar. 
          Para proyectos comerciales e industriales, recomendamos una evaluación técnica profesional gratuita.
        </p>
      </div>
    </div>
  );
}