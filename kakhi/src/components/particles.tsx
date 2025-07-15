"use client";
import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any;
  }
}

const ParticlesBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);
  const isInitializedRef = useRef(false);

  const getParticleConfig = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Dynamische Anzahl basierend auf Bildschirmgröße
    let particleCount = Math.floor((width * height) / 15000);
    particleCount = Math.max(30, Math.min(particleCount, 120));

    return {
      particles: {
        number: {
          value: particleCount,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.3,
          },
        },
        move: {
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
          },
        },
        line_linked: {
          enable: true,
          distance: Math.min(150, width / 8),
          color: "#00ff88",
          opacity: 0.3,
          width: 1,
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#00ff88",
          },
        },
        color: {
          value: "#00ff88",
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true,
        },
      },
      retina_detect: true,
    };
  }, []);

  const destroyParticles = useCallback(() => {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach((dom: any) => {
        if (dom && dom.pJS && dom.pJS.fn && dom.pJS.fn.vendors) {
          try {
            dom.pJS.fn.vendors.destroypJS();
          } catch (e) {
            console.warn("Error destroying particles:", e);
          }
        }
      });
      window.pJSDom = [];
    }
    
    // Zusätzliche Cleanup - entferne canvas falls vorhanden
    const canvas = document.querySelector('#particles-js canvas');
    if (canvas) {
      canvas.remove();
    }
    
    isInitializedRef.current = false;
  }, []);

  const loadParticles = useCallback(async () => {
    if (isLoadingRef.current || !particlesRef.current) return;
    
    isLoadingRef.current = true;
    
    try {
      // Warte einen Frame für DOM-Updates
      await new Promise(resolve => requestAnimationFrame(resolve));
      
      // Lade particles.js falls noch nicht geladen
      if (!window.particlesJS) {
        await import("particles.js");
      }
      
      // Warte bis particlesJS verfügbar ist
      if (!window.particlesJS) {
        throw new Error("particlesJS not loaded");
      }
      
      // Zerstöre alte Instanz
      destroyParticles();
      
      // Warte einen weiteren Frame
      await new Promise(resolve => requestAnimationFrame(resolve));
      
      // Initialisiere neue Instanz
      window.particlesJS("particles-js", getParticleConfig());
      isInitializedRef.current = true;
      
    } catch (error) {
      console.error("Error loading particles:", error);
    } finally {
      isLoadingRef.current = false;
    }
  }, [getParticleConfig, destroyParticles]);

  useEffect(() => {
    // Verzögere die Initialisierung um sicherzustellen, dass DOM bereit ist
    const timer = setTimeout(() => {
      loadParticles();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [loadParticles]);

  useEffect(() => {
    // Responsive Handler mit Debouncing
    let resizeTimer: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (isInitializedRef.current) {
          loadParticles();
        }
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [loadParticles]);

  // Cleanup bei Unmount
  useEffect(() => {
    return () => {
      destroyParticles();
    };
  }, [destroyParticles]);

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        filter: "drop-shadow(0 0 3px #00ff88)",
      }}
    />
  );
};

export default ParticlesBackground;