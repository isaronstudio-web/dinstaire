"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "584243222919";
const COMPANY_NAME = "Dinstaire C.A.";

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = `Hola ${COMPANY_NAME}, me gustaría recibir información sobre sus servicios de climatización.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-[#111] border border-white/10 px-5 py-3 rounded-full shadow-2xl hover:border-cyan-500/30 transition-all group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Avatar circles */}
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center border-2 border-[#111]">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* Text */}
        <div className="text-left">
          <p className="text-xs text-white/50">Escríbenos</p>
          <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
            WhatsApp
          </p>
        </div>
        
        {/* Arrow */}
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
          <MessageCircle className="w-4 h-4 text-white/50 group-hover:text-cyan-400" />
        </div>
      </motion.button>
    </motion.div>
  );
}