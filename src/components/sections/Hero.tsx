import React, { Suspense, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiZap, FiZapOff, FiGlobe } from 'react-icons/fi';
import { useAnimation } from '../../context/AnimationContext'; 
import { useLanguage } from '../../context/LanguageContext';

const LiquidChrome = React.lazy(() => import('../ui/LiquidChrome').then(module => ({ default: module.LiquidChrome })));

export default function Hero() {
  const { animationsEnabled, toggleAnimations } = useAnimation(); 
  const { language, toggleLanguage, t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Estas animaciones se cargan SOLO al montar el componente
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.from(".hero-badge", { opacity: 0, y: -20 })
      .from(".hero-title", { opacity: 0, y: 20 }, "-=0.7")
      .from(".hero-desc", { opacity: 0 }, "-=0.6")
      .from(".hero-buttons", { opacity: 0, y: 20 }, "-=0.6")
      .from(".hero-controls", { opacity: 0 }, "-=0.2");
      
  }, { scope: containerRef }); // <-- Dependencias vacías, no re-anima al cambiar idioma/modo

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <LiquidChrome 
            baseColor={[0.9, 0.25, 0.0]} 
            speed={0.18} 
            amplitude={0.42} 
            frequencyX={1.8} 
            frequencyY={1.6} 
            interactive={false} 
            isAnimated={animationsEnabled} 
          />
        </Suspense>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.60) 100%)' }} />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[2] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-0 flex flex-col items-center text-center pointer-events-none">
        
        {/* ELIMINADA la propiedad key={...} que destruía el componente */}
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

        <div className="hero-controls mt-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pointer-events-auto bg-black/30 px-8 py-5 rounded-3xl border border-white/5 backdrop-blur-md shadow-xl will-change-transform">
          
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase flex items-center gap-2">
              {animationsEnabled ? (
                <><FiZap className="text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] w-4 h-4" /> <span className="text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-colors duration-500">{t("Efectos Activados", "Effects Enabled")}</span></>
              ) : (
                <><FiZapOff className="text-gray-500 w-4 h-4" /> <span className="transition-colors duration-500">{t("Efectos y Animaciones", "Effects & Animations")}</span></>
              )}
            </span>
            <label className="relative inline-flex items-center cursor-pointer hover-target">
              <input type="checkbox" className="sr-only peer" checked={animationsEnabled} onChange={toggleAnimations} />
              <div className="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-transform after:duration-300 after:ease-out peer-checked:bg-orange-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] peer-checked:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-colors duration-300"></div>
            </label>
          </div>

          <div className="hidden sm:block w-[1px] h-12 bg-white/10"></div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase flex items-center gap-2">
              <FiGlobe className="w-4 h-4 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" /> 
              <span>{t("Idioma: Español", "Language: English")}</span>
            </span>
            <label className="relative inline-flex items-center cursor-pointer hover-target">
              <input type="checkbox" className="sr-only peer" checked={language === 'en'} onChange={toggleLanguage} />
              <div className="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['ES'] peer-checked:after:content-['EN'] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:text-[10px] after:font-bold after:flex after:items-center after:justify-center after:text-black after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-transform after:duration-300 after:ease-out peer-checked:bg-blue-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] peer-checked:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-colors duration-300"></div>
            </label>
          </div>

        </div>

      </div>
    </section>
  );
}