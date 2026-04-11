import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

import web1 from '../../assets/web1.webp';
import web2 from '../../assets/web2.webp';
import web3 from '../../assets/web3.webp';

gsap.registerPlugin(ScrollTrigger);

interface ColorTheme { 
  text: string; baseBorder: string; baseShadow: string; hoverBorder: string; 
  hoverShadow: string; glowText: string; radialGlow: string; buttonBg: string; 
  buttonHover: string; baseRing: string; borderSpinner: string; 
}

const colors: Record<'blue' | 'orange' | 'purple', ColorTheme> = {
  blue: { text: 'text-blue-400', baseBorder: 'border-blue-500/30', baseShadow: 'shadow-[0_0_20px_rgba(59,130,246,0.1),inset_0_0_15px_rgba(59,130,246,0.05)]', hoverBorder: 'hover:border-blue-400', hoverShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.2)]', glowText: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]', radialGlow: 'rgba(59,130,246,0.15)', buttonBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30', buttonHover: 'hover:bg-blue-500/30 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]', baseRing: 'bg-blue-500/20', borderSpinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,rgba(59,130,246,0.6)_80%,rgba(147,197,253,1)_100%)]' },
  orange: { text: 'text-orange-400', baseBorder: 'border-orange-500/30', baseShadow: 'shadow-[0_0_20px_rgba(249,115,22,0.1),inset_0_0_15px_rgba(249,115,22,0.05)]', hoverBorder: 'hover:border-orange-400', hoverShadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.4),inset_0_0_20px_rgba(249,115,22,0.2)]', glowText: 'drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]', radialGlow: 'rgba(249,115,22,0.15)', buttonBg: 'bg-orange-500/10 text-orange-300 border-orange-500/30', buttonHover: 'hover:bg-orange-500/30 hover:text-white hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]', baseRing: 'bg-orange-500/20', borderSpinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,rgba(249,115,22,0.6)_80%,rgba(253,186,116,1)_100%)]' },
  purple: { text: 'text-purple-400', baseBorder: 'border-purple-500/30', baseShadow: 'shadow-[0_0_20px_rgba(168,85,247,0.1),inset_0_0_15px_rgba(168,85,247,0.05)]', hoverBorder: 'hover:border-purple-400', hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(168,85,247,0.2)]', glowText: 'drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]', radialGlow: 'rgba(168,85,247,0.15)', buttonBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30', buttonHover: 'hover:bg-purple-500/30 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]', baseRing: 'bg-purple-500/20', borderSpinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,rgba(168,85,247,0.6)_80%,rgba(216,180,254,1)_100%)]' },
};

interface Project { id: string; title: string; category: string; description: string; techStack: string[]; image: string; color: 'blue' | 'orange' | 'purple'; liveUrl?: string; }

const ProjectCard = React.memo(({ project, index }: { project: Project, index: number }) => {
  const theme = colors[project.color];
  const isEven = index % 2 === 0;
  const ImageWrapper = project.liveUrl ? 'a' : 'div';
  const wrapperProps = project.liveUrl ? { href: project.liveUrl, target: "_blank", rel: "noreferrer" } : {};

  return (
    <div className={`project-card group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center will-change-transform`}>
      <div className="card-image-container w-full lg:w-3/5 relative z-10">
        <div className={`relative p-[2px] rounded-2xl overflow-hidden ${theme.baseShadow} ${theme.hoverShadow} transition duration-500 ease-out aspect-[16/10] md:aspect-[16/9] bg-black`}>
          <div className={`absolute inset-0 ${theme.baseRing}`}></div>
          <div className={`absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] blur-xl opacity-80 ${theme.borderSpinner}`}></div>
          <div className={`absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] ${theme.borderSpinner}`}></div>
          <ImageWrapper {...wrapperProps} className={`absolute inset-[2px] rounded-[14px] overflow-hidden bg-black z-10 ${project.liveUrl ? 'cursor-pointer' : ''}`}>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 ease-out pointer-events-none"></div>
            <div className="absolute inset-0 z-20 transition-opacity duration-500 ease-out pointer-events-none opacity-100" style={{ background: `radial-gradient(circle at center, ${theme.radialGlow} 0%, transparent 80%)` }}></div>
            <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover object-top will-change-transform transform group-hover:scale-105 transition-transform duration-700 ease-out" />
          </ImageWrapper>
        </div>
      </div>
      
      <div className="w-full lg:w-2/5 flex flex-col justify-center relative z-20">
        <span className="card-text font-mono text-[10px] md:text-xs text-gray-400 mb-3 uppercase tracking-widest flex items-center gap-2">
          <span className={`${theme.text} ${theme.glowText}`}>{'>_'} {project.id} //</span> {project.category}
        </span>
        <h3 className="card-text text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 drop-shadow-md">{project.title}</h3>
        <div className="card-text p-6 rounded-xl bg-black/60 backdrop-blur-md border border-white/5 shadow-xl mb-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `radial-gradient(circle at right, ${theme.radialGlow} 0%, transparent 100%)` }}></div>
          <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed relative z-10">{project.description}</p>
        </div>
        <ul className="card-text flex flex-wrap gap-3 mb-8">
          {project.techStack.map((tech, i) => (
            <li key={i} className="font-mono text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">{tech}</li>
          ))}
        </ul>
        <div className="card-text flex items-center gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition duration-300 ease-out border ${theme.buttonBg} ${theme.buttonHover}`}>
              Live Demo <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default function SelectedWorks() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    { id: '01', title: 'Abrazo de Luz', category: 'E-COMMERCE PLATFORM', description: t('Tienda online orientada a productos holísticos y espirituales. Plataforma diseñada con un enfoque en la experiencia de usuario (UX), navegación intuitiva y un flujo de compra optimizado para maximizar las conversiones.', 'Online store focused on holistic and spiritual products. Platform designed with a focus on user experience (UX), intuitive navigation, and an optimized purchasing flow to maximize conversions.'), techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'], image: web1, color: 'purple', liveUrl: 'https://www.abrazodeluz.shop/' },
    { id: '02', title: 'La Sinfónica', category: 'E-COMMERCE & MANAGEMENT', description: t('Plataforma de comercio electrónico de alto rendimiento. Desarrollo integral que incluye integración de pasarela de pagos con Mercado Pago, optimización SEO avanzada y gestión de dominio personalizado.', 'High-performance e-commerce platform. Comprehensive development including payment gateway integration with Mercado Pago, advanced SEO optimization, and custom domain management.'), techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Mercado Pago API'], image: web2, color: 'orange', liveUrl: 'https://www.lasinfonica.com.ar/' },
    { id: '03', title: 'Play GBA Games', category: 'WEB EMULATOR', description: t('Plataforma interactiva que permite emular y jugar juegos clásicos de Game Boy Advance directamente desde el navegador web. Optimizada para ofrecer un alto rendimiento sin latencia utilizando tecnologías modernas.', 'Interactive platform that allows emulating and playing classic Game Boy Advance games directly from the web browser. Optimized to offer high performance with zero latency using modern technologies.'), techStack: ['React', 'TypeScript', 'Vite', 'WebAssembly'], image: web3, color: 'blue', liveUrl: 'https://playgbagames.vercel.app/' }
  ];

  useGSAP(() => {
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".works-header",
        start: "top 95%",
        end: "top 60%",
        scrub: 1,
      }
    });

    headerTl.from(".works-header", { opacity: 0, y: 50, ease: "none" })
            .from(".header-line", { scaleX: 0, transformOrigin: "left center", ease: "none" }, "<");

    gsap.utils.toArray<HTMLElement>('.project-card-trigger').forEach((trigger) => {
      const card = trigger.querySelector('.project-card');
      const texts = trigger.querySelectorAll('.card-text');

      if (!card) return;

      const tl = gsap.timeline({
        scrollTrigger: { trigger: trigger, start: "top 95%", end: "top 40%", scrub: 1 }
      });

      tl.from(card, { opacity: 0, y: 100, scale: 0.95, ease: "none" })
        .from(texts, { opacity: 0, x: -30, stagger: 0.1, ease: "none" }, "<0.1"); 
    });

  }, { scope: containerRef }); 

  return (
    <section ref={containerRef} id="work" className="relative bg-[#08040D] text-white pt-24 pb-16 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 md:w-1/1 h-[1px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent shadow-[0_0_20px_rgba(59,130,246,1)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <div className="works-header flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 mb-24 relative">
          <div className="header-line absolute bottom-[-1px] left-0 w-1/3 h-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent"></div>
          <div>
            <span className="text-purple-400 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">{t("/ Mis Proyectos", "/ My Projects")}</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.1em] md:tracking-[0.2em] leading-none drop-shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">SELECTED_</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 font-normal">WORKS</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-gray-400 hidden md:flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 transition-opacity duration-500"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,1)]"></span>
            </span>
            PRODUCTION_READY
          </span>
        </div>

        <div className="flex flex-col w-full gap-24 lg:gap-32 pb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card-trigger w-full">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 md:w-1/1 h-[4px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent shadow-[0_0_20px_rgba(249,115,22,1)]"></div>
      </div>

    </section>
  );
}