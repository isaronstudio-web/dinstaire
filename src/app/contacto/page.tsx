"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setIsSubmitting(false);
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      servicio: "",
      mensaje: "",
    });
  };

  const handleWhatsApp = () => {
    const message = `Hola, necesito información sobre: ${formData.servicio || "servicios de climatización"}\n\nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}`;
    const url = `https://wa.me/584243222919?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-400">
              ¿Necesitas información sobre nuestros servicios? Estamos listos para ayudarte. 
              Contesta en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Teléfono / WhatsApp</h3>
                    <p className="text-gray-400">+58 424-3222919</p>
                    <button
                      onClick={handleWhatsApp}
                      className="mt-2 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enviar mensaje por WhatsApp
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Dirección</h3>
                    <p className="text-gray-400">Maracay, Estado Aragua</p>
                    <p className="text-sm text-gray-500">Avenida Intercomunal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Horario de Atención</h3>
                    <p className="text-gray-400">Lunes a Viernes: 7:00am - 5:00pm</p>
                    <p className="text-sm text-gray-500">Sábados: 8:00am - 12:00pm</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-white/5">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cyan-400/30 mx-auto mb-2" />
                  <p className="text-gray-400">Mapa de ubicación</p>
                  <p className="text-sm text-gray-500">Maracay, Aragua</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                  Envíanos un Mensaje
                </h2>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-400">¡Mensaje enviado exitosamente! Te contactaremos pronto.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                        placeholder="+58 412-1234567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="venta">Venta de Equipos</option>
                      <option value="proyectos">Proyectos Corporativos</option>
                      <option value="calculo">Cálculo de Carga Térmica</option>
                      <option value="instalacion">Instalación Profesional</option>
                      <option value="refrigeracion">Refrigeración Industrial</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none text-white placeholder-gray-500"
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black py-4 rounded-xl font-semibold transition-all hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}