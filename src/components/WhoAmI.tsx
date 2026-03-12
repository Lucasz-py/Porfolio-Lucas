import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

import personImg from '../assets/person.webp';
import grainImg from '../assets/grain.webp';

const SplashCursor = React.lazy(() => import('./SplashCursor'));

const WhoAmI: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen bg-black text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center">
      
      <div className="absolute top-0 left-0 w-full h-16 bg-black/60 backdrop-blur-2xl border-y border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden flex items-center z-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 45 }} className="flex whitespace-nowrap font-mono text-[13px] tracking-[0.3em] font-bold items-center">
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

      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[5%] -left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[130px] pointer-events-none z-0" />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[5%] -right-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[140px] pointer-events-none z-0" />
      <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute -bottom-[20%] left-[30%] w-[600px] h-[400px] bg-purple-700/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0" />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <Suspense fallback={null}>
          <SplashCursor SPLAT_RADIUS={0.3} SPLAT_FORCE={4000} DENSITY_DISSIPATION={2} VELOCITY_DISSIPATION={0.5} />
        </Suspense>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[380px] hover-target">
              <ProfileCard
                avatarUrl={personImg} grainUrl={grainImg} name="Escobar Lucas"
                title="Lic. En Sistemas" handle="Lucasz" status="Available for work"
                contactText="Contact" showUserInfo={true} enableTilt={true} enableMobileTilt={true}
                mobileTiltSensitivity={5} behindGlowEnabled={true} behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize="50%" onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center pointer-events-none"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mb-6">
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">/ About Me</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-8 leading-tight drop-shadow-lg">
              Diseño con <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">precisión</span>, <br />
              desarrollo con <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">lógica</span>.
            </h2>

            <div className="space-y-6 text-gray-300 font-light text-lg sm:text-xl leading-relaxed mb-10 drop-shadow-md">
              <p>Soy un desarrollador apasionado por crear experiencias digitales que no solo funcionen a la perfección, sino que también dejen una impresión visual duradera.</p>
              <p>Actualmente estudiante de <strong className="text-white font-medium">Licenciatura en Sistemas de Información</strong>, combinando los fundamentos de la ingeniería de software con las últimas tecnologías del desarrollo web moderno.</p>
            </div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-wrap gap-4 pointer-events-auto"
            >
              {[
                { label: "📍 Ubicación", value: "Argentina" },
                { label: "🎓 Formación", value: "Sistemas" },
                { label: "⚡ Enfoque", value: "Full Stack" },
              ].map((item, index) => (
                <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="px-5 py-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <span className="block text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">{item.label}</span>
                  <span className="block text-sm text-gray-100 font-semibold">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;