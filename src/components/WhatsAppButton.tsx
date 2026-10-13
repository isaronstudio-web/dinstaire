"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "584243222919";
const COMPANY_NAME = "Dinstaire";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim() || `Hola ${COMPANY_NAME}, me gustaría recibir información sobre sus servicios de climatización.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  const quickMessages = [
    "Hola, necesito una cotización",
    "Quiero información sobre equipos",
    "Necesito servicio técnico",
    "Otros..."
  ];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-72 bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <img src="/proyectos/logo.jpg" alt="Dinstaire" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{COMPANY_NAME}</p>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    En línea
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="space-y-2 mb-4">
              <div className="bg-[#0a0a0a] rounded-xl rounded-bl-sm p-3 max-w-[85%]">
                <p className="text-white text-sm">¡Hola! 👋 ¿En qué podemos ayudarte hoy?</p>
                <p className="text-gray-500 text-xs mt-1">respuesta inmediata</p>
              </div>
            </div>

            {/* Quick responses */}
            <div className="space-y-2 mb-3">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => setMessage(msg === "Otros..." ? "" : msg)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    message === msg 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                      : "bg-[#0a0a0a] text-gray-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-green-500/50"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl transition-all ${
          isOpen 
            ? "bg-red-500 hover:bg-red-400" 
            : "bg-green-500 hover:bg-green-400"
        }`}
        aria-label={isOpen ? "Cerrar" : "Contactar por WhatsApp"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        
        {!isOpen && (
          <>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">WhatsApp</p>
              <p className="text-white/80 text-xs">Escríbenos ahora</p>
            </div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </>
        )}
      </motion.button>

      {/* Pulse ring */}
      {!isOpen && (
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-500 -z-10"
        />
      )}
    </motion.div>
  );
}