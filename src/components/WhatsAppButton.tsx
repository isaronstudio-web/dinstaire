"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "584243222919";
const DEFAULT_MESSAGE = "Hola, necesito información sobre los servicios de climatización";

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing animation rings */}
        <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-75" />
        
        {/* Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-secondary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Necesitas ayuda?
        </span>
      </motion.button>
    </motion.div>
  );
}