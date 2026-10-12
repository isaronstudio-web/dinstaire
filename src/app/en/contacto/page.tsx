"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";

export default function ContactoPageEN() {
  const [formData, setFormData] = useState({ nombre: "", telefono: "", email: "", servicio: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setFormData({ nombre: "", telefono: "", email: "", servicio: "", mensaje: "" });
  };

  const handleWhatsApp = () => {
    const message = `Hello, I need information about: ${formData.servicio || "air conditioning services"}\n\nName: ${formData.nombre}\nPhone: ${formData.telefono}`;
    window.open(`https://wa.me/584243222919?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">Contact Us</h1>
            <p className="text-lg text-muted">Need information about our services? We're ready to help you. We respond in less than 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Phone / WhatsApp</h3>
                    <p className="text-muted">+58 424-3222919</p>
                    <button onClick={handleWhatsApp} className="mt-2 inline-flex items-center gap-2 text-primary font-medium"><MessageCircle className="w-4 h-4" />Send message via WhatsApp</button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="font-semibold text-secondary mb-1">Address</h3><p className="text-muted">Maracay, Aragua State</p><p className="text-sm text-muted-light">Avenida Intercomunal</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="font-semibold text-secondary mb-1">Business Hours</h3><p className="text-muted">Monday to Friday: 7:00am - 5:00pm</p><p className="text-sm text-muted-light">Saturdays: 8:00am - 12:00pm</p></div>
                </div>
              </div>
              <div className="mt-8 h-64 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center">
                <div className="text-center"><MapPin className="w-12 h-12 text-primary/30 mx-auto mb-2" /><p className="text-muted">Location map</p><p className="text-sm text-muted-light">Maracay, Aragua</p></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-6">Send Us a Message</h2>
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700">Message sent successfully! We will contact you soon.</p>
                  </motion.div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-secondary mb-2">Full name *</label><input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none" placeholder="Your name" /></div>
                    <div><label className="block text-sm font-medium text-secondary mb-2">Phone *</label><input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none" placeholder="+58 412-1234567" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-secondary mb-2">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none" placeholder="your@email.com" /></div>
                  <div><label className="block text-sm font-medium text-secondary mb-2">Service of interest</label><select name="servicio" value={formData.servicio} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none">
                    <option value="">Select a service</option>
                    <option value="sale">Equipment Sales</option>
                    <option value="projects">Corporate Projects</option>
                    <option value="calculation">Thermal Load Calculation</option>
                    <option value="installation">Professional Installation</option>
                    <option value="refrigeration">Industrial Refrigeration</option>
                    <option value="otro">Other</option>
                  </select></div>
                  <div><label className="block text-sm font-medium text-secondary mb-2">Message *</label><textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none resize-none" placeholder="Tell us about your project or need..." /></div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold transition-all hover-lift"><Send className="w-5 h-5" />Send Message</button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}