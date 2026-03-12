import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

import web1 from '../assets/web1.webp';
import web2 from '../assets/web2.webp';
import web3 from '../assets/web3.webp';

interface ColorTheme {
  text: string; baseBorder: string; baseShadow: string; hoverBorder: string; hoverShadow: string; glowText: string; radialGlow: string; buttonBg: string; buttonHover: string;
  baseRing: string; borderSpinner: string;
}

const colors: Record<'blue' | 'orange' | 'purple', ColorTheme> = {
  blue: { 
    text: 'text-blue-400', baseBorder: 'border-blue-500/30', baseShadow: 'shadow-[0_0_20px_rgba(59,130,246,0.1),inset_0_0_15px_rgba(59,130,246,0.05)]', hoverBorder: 'hover:border-blue-400', hoverShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.2)]', glowText: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]', radialGlow: 'rgba(59,130,246,0.15)', buttonBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30', buttonHover: 'hover:bg-blue-500/30 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]',
    baseRing: 'bg-blue-500/20',
    borderSpinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,rgba(59,130,246,0.6)_80%,rgba(147,197,253,1)_100%)]'
  },
  orange: { 
    text: 'text-orange-400', baseBorder: 'border-orange-500/30', baseShadow: 'shadow-[0_0_20px_rgba(249,115,22,0.1),inset_0_0_15px_rgba(249,115,22,0.05)]', hoverBorder: 'hover:border-orange-400', hoverShadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.4),inset_0_0_20px_rgba(249,115,22,0.2)]', glowText: 'drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]', radialGlow: 'rgba(249,115,22,0.15)', buttonBg: 'bg-orange-500/10 text-orange-300 border-orange-500/30', buttonHover: 'hover:bg-orange-500/30 hover:text-white hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]',
    baseRing: 'bg-orange-500/20',
    borderSpinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,rgba(249,115,22,0.6)_80%,rgba(253,186,116,1)_100%)]'
  },
  purple: { 
    text: 'text-purple-400', baseBorder: 'border-purple-500/30', baseShadow: 'shadow-[0_0_20px_rgba(168,85,247,0.1),inset_0_0_15px_rgba(168,85,247,0.05)]', hoverBorder: 'hover:border-purple-400', hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(168,85,247,0.2)]', glowText: 'drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]', radialGlow: 'rgba(168,85,247,0.15)', buttonBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30', buttonHover: 'hover:bg-purple-500/30 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]',
    baseRing: 'bg-purple-500/20',
    borderSpinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,rgba(168,85,247,0.6)_80%,rgba(216,180,254,1)_100%)]'
  },
};

interface Project {
  id: string; title: string; category: string; description: string; techStack: string[]; image: string; color: 'blue' | 'orange' | 'purple'; liveUrl?: string;
}

const projects: Project[] = [
  { id: '01', title: 'Abrazo de Luz', category: 'E-COMMERCE PLATFORM', description: 'Tienda online orientada a productos holísticos y espirituales. Plataforma diseñada con un enfoque en la experiencia de usuario (UX), navegación intuitiva y un flujo de compra optimizado para maximizar las conversiones.', techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'], image: web1, color: 'purple', liveUrl: 'https://www.abrazodeluz.shop/' },
  { id: '02', title: 'La Sinfónica', category: 'E-COMMERCE & MANAGEMENT', description: 'Plataforma de comercio electrónico de alto rendimiento. Desarrollo integral que incluye integración de pasarela de pagos con Mercado Pago, optimización SEO avanzada y gestión de dominio personalizado.', techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Mercado Pago API'], image: web2, color: 'orange', liveUrl: 'https://www.lasinfonica.com.ar/' },
  { id: '03', title: 'Play GBA Games', category: 'WEB EMULATOR', description: 'Plataforma interactiva que permite emular y jugar juegos clásicos de Game Boy Advance directamente desde el navegador web. Optimizada para ofrecer un alto rendimiento sin latencia utilizando tecnologías modernas.', techStack: ['React', 'TypeScript', 'Vite', 'WebAssembly'], image: web3, color: 'blue', liveUrl: 'https://playgbagames.vercel.app/' }
];

const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
const projectVariants: Variants = { hidden: { opacity: 0, y: 60, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring", bounce: 0.4 } } };
const textVariants: Variants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } };

const ProjectCard = React.memo(({ project, index }: { project: Project, index: number }) => {
  const theme = colors[project.color];
  const isEven = index % 2 === 0;
  const ImageWrapper = project.liveUrl ? 'a' : 'div';
  const wrapperProps = project.liveUrl ? { href: project.liveUrl, target: "_blank", rel: "noreferrer" } : {};

  return (
    <motion.div variants={projectVariants} className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
      
      <div className="w-full lg:w-3/5 relative z-10">
        <div className={`relative p-[2px] rounded-2xl overflow-hidden ${theme.baseShadow} ${theme.hoverShadow} transition-shadow duration-500 aspect-[16/10] md:aspect-[16/9] bg-black`}>
          
          <div className={`absolute inset-0 ${theme.baseRing}`}></div>
          <div className={`absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] blur-xl opacity-80 ${theme.borderSpinner}`}></div>
          <div className={`absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] ${theme.borderSpinner}`}></div>

          <ImageWrapper 
            {...wrapperProps} 
            className={`absolute inset-[2px] rounded-[14px] overflow-hidden bg-black z-10 ${project.liveUrl ? 'cursor-pointer' : ''}`}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 z-20 transition-opacity duration-500 pointer-events-none opacity-100" style={{ background: `radial-gradient(circle at center, ${theme.radialGlow} 0%, transparent 80%)` }}></div>
            
            <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 z-30"></div>
          </ImageWrapper>
          
        </div>
      </div>

      <div className="w-full lg:w-2/5 flex flex-col justify-center relative z-20">
        <motion.span variants={textVariants} className="font-mono text-[10px] md:text-xs text-gray-400 mb-3 uppercase tracking-widest flex items-center gap-2">
          <span className={`${theme.text} ${theme.glowText}`}>{'>_'} {project.id} //</span> {project.category}
        </motion.span>
        <motion.h3 variants={textVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-md">{project.title}</motion.h3>
        
        <motion.div variants={textVariants} className={`p-6 rounded-xl bg-black/60 backdrop-blur-md border border-white/5 shadow-xl mb-6 relative overflow-hidden`}>
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `radial-gradient(circle at right, ${theme.radialGlow} 0%, transparent 100%)` }}></div>
          <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed relative z-10">{project.description}</p>
        </motion.div>
        
        <motion.ul variants={textVariants} className="flex flex-wrap gap-3 mb-8">
          {project.techStack.map((tech, i) => <li key={i} className="font-mono text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">{tech}</li>)}
        </motion.ul>
        
        <motion.div variants={textVariants} className="flex items-center gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${theme.buttonBg} ${theme.buttonHover}`}>
              Live Demo <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = 'ProjectCard';

export default function SelectedWorks() {
  return (
    <section id="work" className="relative bg-black text-white pt-24 pb-16 overflow-hidden">
      
      {/* --- SEPARADOR LÁSER SUPERIOR (Transición desde Tech Stack) --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 md:w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
      </div>

      {/* --- DECORACIONES DE FONDO ANIMADAS --- */}
      <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.4, 1], x: [0, 150, 50, -100, 0], y: [0, 100, 150, -50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] bg-blue-600/40 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0" />
      <motion.div animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1], x: [0, -150, -50, 150, 0], y: [0, -100, 100, -100, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-purple-600/40 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0" />
      <motion.div animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.6, 1], x: [0, 100, -150, 50, 0], y: [0, -200, -50, 150, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-orange-600/30 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0" />
      <motion.div animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.3, 1], x: [0, -50, 100, -50, 0], y: [0, 150, 50, -100, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute bottom-[40%] left-[60%] w-[400px] h-[400px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0" />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* --- TERMINALES FLOTANTES (>_) --- */}
      <motion.div animate={{ y: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[10%] text-purple-500 font-mono text-2xl font-bold pointer-events-none select-none z-0">{'>_'}</motion.div>
      <motion.div animate={{ y: [0, 40, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[30%] right-[15%] text-blue-500 font-mono text-xl font-bold pointer-events-none select-none z-0">{'>_'}</motion.div>
      <motion.div animate={{ x: [0, 30, 0], opacity: [0.1, 0.7, 0.1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[50%] left-[5%] text-orange-500 font-mono text-3xl font-bold pointer-events-none select-none z-0">{'>_'}</motion.div>
      <motion.div animate={{ y: [0, -25, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[80%] left-[40%] text-purple-400 font-mono text-lg font-bold pointer-events-none select-none z-0">{'>_'}</motion.div>
      <motion.div animate={{ x: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-[25%] right-[25%] text-orange-400 font-mono text-2xl font-bold pointer-events-none select-none z-0">{'>_'}</motion.div>
      <motion.div animate={{ y: [0, 20, 0], x: [0, 15, 0], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute bottom-[10%] left-[20%] text-blue-400 font-mono text-xl font-bold pointer-events-none select-none z-0">{'>_'}</motion.div>
      <motion.div animate={{ y: [0, -35, 0], opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute top-[40%] right-[5%] text-white/30 font-mono text-sm font-bold pointer-events-none select-none z-0">{'>_'}</motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 mb-24 pointer-events-none relative">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="absolute bottom-[-1px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent origin-left"></motion.div>
          
          <div>
            <span className="text-purple-400 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">/ Mis Proyectos</span>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter drop-shadow-lg">
              SELECTED_<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400">WORKS</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-gray-400 hidden md:flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,1)]"></span></span>
            PRODUCTION_READY
          </span>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col w-full gap-24 lg:gap-32">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </motion.div>

      </div>

      {/* --- SEPARADOR LÁSER INFERIOR (Transición hacia Footer) --- */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 md:w-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
      </div>

    </section>
  );
}