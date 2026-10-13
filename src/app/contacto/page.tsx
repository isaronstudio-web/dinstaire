"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send, ArrowRight, Bot, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  options?: string[];
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "¡Hola! 👋 Bienvenido a Dinstaire. Soy tu asistente virtual y estoy aquí para ayudarte.",
    isUser: false,
  },
  {
    id: 2,
    text: "¿Sobre qué servicio necesitas información?",
    isUser: false,
    options: [
      "💰 Cotización de equipos",
      "🏢 Proyectos corporativos",
      "🔧 Instalación profesional",
      "❓ Otra consulta"
    ]
  }
];

const quickResponses: Record<string, string> = {
  "💰 Cotización de equipos": "¡Excelente! Tenemos equipos de todas las capacidades para tu hogar o empresa. ¿Qué tipo de aire acondicionado necesitas? (Split, Window, Central, Inverter)",
  "🏢 Proyectos corporativos": "¡Perfecto! Realizamos proyectos de climatización para oficinas, naves industriales y comercios. ¿De qué tamaño es el espacio que necesitas climatizar?",
  "🔧 Instalación profesional": "Nuestro equipo técnico certificado realiza instalaciones bajo normativas de seguridad. ¿Ya tienes el equipo o necesitas que te asesoremos?",
  "❓ Otra consulta": "¡Con gusto te ayudamos! Escríbenos directamente y responderemos en menos de 24 horas."
};

export default function ContactoPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: option,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setShowOptions(false);

    // Simulate typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response = quickResponses[option] || "Gracias por tu mensaje. Un asesor te contactará pronto.";
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false
      };
      setMessages(prev => [...prev, botMessage]);
      
      // Add final message with WhatsApp CTA
      setTimeout(() => {
        const ctaMessage: Message = {
          id: Date.now() + 2,
          text: "Para una respuesta más rápida, chatea con nosotros directamente por WhatsApp. ¡Te atenderemos con gusto! 💬",
          isUser: false
        };
        setMessages(prev => [...prev, ctaMessage]);
      }, 1500);
    }, 1000);
  };

  const handleSendToWhatsApp = () => {
    const message = "Hola, necesito información sobre los servicios de climatización de Dinstaire";
    const url = `https://wa.me/584243222919?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#111]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-4">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Asistente Virtual</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              ¿En qué te ayudamos?
            </h1>
            <p className="text-lg text-gray-400">
              Chatea con nosotros o contáctanos directamente. Estamos listos para atenderte.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden"
              >
                {/* Chat Header */}
                <div className="bg-[#0a0a0a] px-6 py-4 border-b border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                    <img src="/proyectos/logo.jpg" alt="Dinstaire" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Dinstaire</h3>
                    <p className="text-xs text-cyan-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                      En línea
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="h-[400px] overflow-y-auto p-6 space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${
                          message.isUser 
                            ? 'bg-cyan-500 text-black px-4 py-3 rounded-2xl rounded-br-md' 
                            : 'bg-[#0a0a0a] text-white px-4 py-3 rounded-2xl rounded-bl-md border border-white/10'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-[#0a0a0a] px-4 py-3 rounded-2xl rounded-bl-md border border-white/10">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Options */}
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 pb-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {initialMessages[1].options?.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionClick(option)}
                          className="text-left px-4 py-3 bg-[#0a0a0a] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl text-sm text-gray-300 hover:text-white transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* WhatsApp CTA */}
                {!showOptions && (
                  <div className="px-6 pb-6">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-4 rounded-xl font-semibold transition-all hover-lift"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Continuar en WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#111] rounded-2xl p-6 border border-white/5"
              >
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  Otras formas de contacto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">WhatsApp</h4>
                      <p className="text-gray-400">+58 424-3222919</p>
                      <button
                        onClick={handleSendToWhatsApp}
                        className="mt-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
                      >
                        Escribir ahora →
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                      <p className="text-gray-400">+58 424-3222919</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Dirección</h4>
                      <p className="text-gray-400">Maracay, Estado Aragua</p>
                      <p className="text-sm text-gray-500">Avenida Intercomunal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Horario</h4>
                      <p className="text-gray-400">Lun-Vie: 7:00am - 5:00pm</p>
                      <p className="text-sm text-gray-500">Sábados: 8:00am - 12:00pm</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-white/5"
              >
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cyan-400/30 mx-auto mb-2" />
                  <p className="text-gray-400">Maracay, Aragua</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}