import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiBookOpen, FiZap } from 'react-icons/fi';
import ProfileCard from '../ui/ProfileCard';
import { useAnimation } from '../../context/AnimationContext';

import personImg from '../../assets/person.webp';
import grainImg from '../../assets/grain.webp';


const SplashCursor = React.lazy(() => import('../ui/SplashCursor'));

const WhoAmI: React.FC = () => {
  const { animationsEnabled } = useAnimation(); 
  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const infoBadges = [
    { label: "Ubicación", value: "Argentina", icon: FiMapPin },
    { label: "Formación", value: "Sistemas", icon: FiBookOpen },
    { label: "Enfoque", value: "Full Stack", icon: FiZap },
  ];

  return (
    <section id="about" className="relative min-h-screen bg-black text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center">
      
      <div className="absolute top-0 left-0 w-full h-16 bg-black/60 backdrop-blur-2xl border-y border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden flex items-center z-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        <motion.div 
          animate={animationsEnabled ? { x: ["0%", "-50%"] } : { x: 0 }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }} 
          className="flex whitespace-nowrap font-mono text-[13px] tracking-[0.3em] font-bold items-center will-change-transform"
        >
          <span className="flex items-center text-gray-500">
             ✦ FULL STACK ✦ FRONTEND ✦ BACKEND ✦ UI/UX DESIGN ✦ WEBGL ✦
             <span className="mx-6 px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">CREATIVE DEVELOPER</span>
             ✦ REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ TAILWIND ✦
             <span className="mx-6 px-4 py-1.5 rounded-full border border-blue-500/40 text-blue-400 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">PROBLEM SOLVER</span>
          </span>
          <span className="flex items-center text-gray-500">
             ✦ FULL STACK ✦ FRONTEND ✦ BACKEND ✦ UI/UX DESIGN ✦ WEBGL ✦
             <span className="mx-6 px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">CREATIVE DEVELOPER</span>
             ✦ REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ TAILWIND ✦
             <span className="mx-6 px-4 py-1.5 rounded-full border border-blue-500/40 text-blue-400 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">PROBLEM SOLVER</span>
          </span>
        </motion.div>
      </div>

      <div className={`absolute top-[5%] -left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[130px] pointer-events-none z-0 transition-opacity duration-1000 ease-in-out ${animationsEnabled ? 'animate-ambient-glow' : 'opacity-20'}`} />
      <div className={`absolute bottom-[5%] -right-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[140px] pointer-events-none z-0 transition-opacity duration-1000 ease-in-out ${animationsEnabled ? 'animate-ambient-glow-delayed' : 'opacity-20'}`} />
      <div className={`absolute -bottom-[20%] left-[30%] w-[600px] h-[400px] bg-purple-700/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0 transition-opacity duration-1000 ease-in-out ${animationsEnabled ? 'animate-ambient-glow-slow' : 'opacity-20'}`} />
      
      {animationsEnabled && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Suspense fallback={null}>
            <SplashCursor SPLAT_RADIUS={0.4} SPLAT_FORCE={3000} DENSITY_DISSIPATION={4} VELOCITY_DISSIPATION={1.5} />
          </Suspense>
        </div>
      )}

      {/* KEY DINÁMICO: Reinicia animaciones del contenido al cambiar de modo */}
      <div key={`whoami-content-${animationsEnabled}`} className="container mx-auto px-6 relative z-20 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="w-full lg:w-1/2 flex justify-center items-center mt-10 md:mt-0 will-change-transform"
          >
            <div className="w-full flex justify-center items-center max-w-[360px] md:max-w-[400px] hover-target">
              <ProfileCard
                avatarUrl={personImg} grainUrl={grainImg} name="Escobar Lucas"
                title="Lic. En Sistemas" handle="Lucasz" status="Available for work"
                contactText="Contact" showUserInfo={true} enableTilt={animationsEnabled} 
                enableMobileTilt={false} 
                mobileTiltSensitivity={5} behindGlowEnabled={true} behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize="50%" onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-[600px] pointer-events-none mx-auto mt-4 lg:mt-0 will-change-transform"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: smoothEase, delay: 0.4 }} className="mb-6 w-full flex justify-center lg:justify-start">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                / About Me
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-6 md:mb-8 leading-tight drop-shadow-lg w-full">
              Diseño con <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">precisión</span>, <br />
              Desarrollo con <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">lógica</span>.
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-300 font-light text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10 drop-shadow-md w-full px-2 lg:px-0">
              <p>Bienvenido a mi espacio digital. Soy Lucas, estudiante de Sistemas y Desarrollador Full Stack. Mi enfoque es simple: traducir problemas complejos en soluciones digitales eficientes, escalables y con un diseño de primer nivel.</p>
              <p>Actualmente estudiante de <strong className="text-white font-medium">Licenciatura en Sistemas de Información</strong>, combinando los fundamentos de la ingeniería de software con las últimas tecnologías del desarrollo web moderno.</p>
            </div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pointer-events-auto w-full px-2 lg:px-0"
            >
              {infoBadges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index} 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: smoothEase, duration: 0.5 } } }} 
                    className="px-5 py-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 ease-out flex flex-col justify-center items-center lg:items-start will-change-transform"
                  >
                    <span className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">
                      <Icon className="w-3.5 h-3.5 text-orange-400" /> {item.label}
                    </span>
                    <span className="block text-sm md:text-base text-gray-100 font-semibold tracking-wide">
                      {item.value}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;