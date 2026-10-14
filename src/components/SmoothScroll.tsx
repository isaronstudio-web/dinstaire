"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Detect device type
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      // Scroll MUCHO más pesado y premium
      duration: isMobile ? 2.8 : 3.5, // Mucho más lento = sensación de peso premium
      easing: (t) => {
        // Easing ultra suave y gradual
        return 1 - Math.pow(1 - t, 5);
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: isMobile ? 0.4 : 0.35, //MUY poco sensible al mouse = scroll más duro
      touchMultiplier: isMobile ? 0.8 : 1.0, // Touch muy controlado
      lerp: 0.05, // Interpolación muy lenta para sensación de peso
    });

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