import { Suspense, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollCanvasBackground } from '../ui/ScrollCanvasBackground';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

    tl.from(".hero-badge", { opacity: 0 })
      .from(".hero-title", { opacity: 0 }, "-=0.8")
      .from(".hero-desc", { opacity: 0 }, "-=0.8")
      .from(".hero-buttons", { opacity: 0 }, "-=0.8");
      
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=200%", // 100vh canvas + 100vh para que el WhoAmI suba
      pin: true,
      pinSpacing: false, 
      refreshPriority: 10, // <-- ¡CLAVE! Asegura que el anclaje se calcule primero
    });

  }, { scope: containerRef }); 

  return (
    <section id="hero-section" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white z-0">
      
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ScrollCanvasBackground />
        </Suspense>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.70) 100%)' }} />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[2] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-0 flex flex-col items-center text-center pointer-events-none">
        
        <div className="flex flex-col items-center w-full">
          <div className="hero-badge inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md mb-8 shadow-2xl pointer-events-auto will-change-transform">
            <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"></span></span>
            <span className="text-[10px] md:text-sm font-semibold tracking-[0.2em] text-gray-200 uppercase">{t("Available for work", "Available for work")}</span>
          </div>

          <h1 className="hero-title mb-8 md:mb-10 drop-shadow-2xl flex flex-col items-center gap-1 md:gap-2 will-change-transform">
            <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-extralight tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">FULL STACK</span>
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] md:tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">DEVELOPER</span>
          </h1>

          <p className="hero-desc max-w-3xl text-sm sm:text-lg md:text-xl text-gray-300 font-light mb-10 md:mb-12 leading-relaxed bg-black/40 p-5 md:p-6 rounded-2xl backdrop-blur-sm border border-white/5 will-change-transform">
            {t(
              "Construyendo la próxima generación de experiencias web. Arquitectura sólida, interfaces fluidas y código optimizado para la web moderna.",
              "Building the next generation of web experiences. Solid architecture, fluid interfaces, and optimized code for the modern web."
            )}
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 pointer-events-auto w-full sm:w-auto px-4 sm:px-0 will-change-transform">
            <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="hover-target w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-orange-600/30 border border-orange-500/50 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:bg-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:border-orange-400 hover:scale-105 transition duration-300 ease-out backdrop-blur-md will-change-transform">
              {t("Ver Proyectos", "View Projects")}
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover-target w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-black/40 border border-white/20 text-gray-300 font-semibold hover:text-white hover:bg-blue-600/30 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-300 ease-out backdrop-blur-md will-change-transform">
              {t("Contacto", "Contact")}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}