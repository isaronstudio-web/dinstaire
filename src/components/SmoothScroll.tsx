"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Scroll más pesado y premium
      duration: 2.5, // Más lento = más pesado
      easing: (t) => {
        // Easing más suave y gradual
        return 1 - Math.pow(1 - t, 4);
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.6, // Reduce sensibilidad del mouse
      touchMultiplier: 1.2, // Touch más controlado
      lerp: 0.08, // Interpolación lineal más lenta
    });

    // Ajustar según el dispositivo
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      // Para móviles: scroll más liviano pero still smooth
      lenis.options.duration = 1.8;
      lenis.options.wheelMultiplier = 0.8;
      lenis.options.touchMultiplier = 1.5;
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}