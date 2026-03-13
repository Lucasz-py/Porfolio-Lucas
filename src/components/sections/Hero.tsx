import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiZapOff } from 'react-icons/fi';
import { useAnimation } from '../../context/AnimationContext'; 

const LiquidChrome = React.lazy(() => import('../ui/LiquidChrome').then(module => ({ default: module.LiquidChrome })));

export default function Hero() {
  const { animationsEnabled, toggleAnimations } = useAnimation(); 
  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <LiquidChrome baseColor={[0.9, 0.25, 0.0]} speed={0.18} amplitude={0.42} frequencyX={1.8} frequencyY={1.6} interactive={false} isAnimated={animationsEnabled} />
        </Suspense>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.60) 100%)' }} />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[2] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 pt-28 md:pt-0 flex flex-col items-center text-center pointer-events-none">
        
        {/* CONTENEDOR CON KEY DINÁMICO: Se reinicia al cambiar de modo */}
        <div key={`hero-content-${animationsEnabled ? 'on' : 'off'}`} className="flex flex-col items-center w-full">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: smoothEase }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md mb-8 shadow-2xl pointer-events-auto will-change-transform">
            <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"></span></span>
            <span className="text-[10px] md:text-sm font-semibold tracking-[0.2em] text-gray-200 uppercase">Available for work</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }} className="mb-8 md:mb-10 drop-shadow-2xl flex flex-col items-center gap-1 md:gap-2 will-change-transform">
            <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-extralight tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">FULL STACK</span>
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] md:tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">DEVELOPER</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }} className="max-w-3xl text-sm sm:text-lg md:text-xl text-gray-300 font-light mb-10 md:mb-12 leading-relaxed bg-black/40 p-5 md:p-6 rounded-2xl backdrop-blur-sm border border-white/5 will-change-transform">
            Construyendo la próxima generación de experiencias web. Arquitectura sólida, interfaces fluidas y código optimizado para la web moderna.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: smoothEase, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 pointer-events-auto w-full sm:w-auto px-4 sm:px-0 will-change-transform">
            <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="hover-target w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-orange-600/30 border border-orange-500/50 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:bg-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:border-orange-400 hover:scale-105 transition duration-300 ease-out backdrop-blur-md will-change-transform">
              Ver Proyectos
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover-target w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-black/40 border border-white/20 text-gray-300 font-semibold hover:text-white hover:bg-blue-600/30 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-300 ease-out backdrop-blur-md will-change-transform">
              Contacto
            </button>
          </motion.div>
        </div>

        {/* EL SWITCH QUEDA AFUERA DEL KEY PARA NO REINICIARSE Y PARPADEAR AL HACERLE CLIC */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: smoothEase, delay: 0.6 }} className="mt-12 flex flex-col items-center gap-3 pointer-events-auto bg-black/30 px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-sm will-change-transform">
          <span className="font-mono text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase flex items-center gap-2">
            {animationsEnabled ? (
              <><FiZap className="text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] w-4 h-4" /> <span className="text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-colors duration-500">Efectos y Animaciones Activados</span></>
            ) : (
              <><FiZapOff className="text-gray-500 w-4 h-4" /> <span className="transition-colors duration-500">Activar Efectos y Animaciones</span></>
            )}
          </span>
          <label className="relative inline-flex items-center cursor-pointer hover-target">
            <input type="checkbox" className="sr-only peer" checked={animationsEnabled} onChange={toggleAnimations} />
            <div className="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-transform after:duration-300 after:ease-out peer-checked:bg-orange-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] peer-checked:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-colors duration-300"></div>
          </label>
        </motion.div>

      </div>
    </section>
  );
}