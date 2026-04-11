import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LogoLoop from '../ui/LogoLoop';
import { useLanguage } from '../../context/LanguageContext';
import { 
  SiDocker, SiSupabase, SiReact, SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiVercel, SiNodedotjs, SiGit, SiMercadopago 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

interface ColorTheme { text: string; baseBorder: string; baseShadow: string; hoverBorder: string; hoverShadow: string; glowText: string; radialGlow: string; }

const colors: Record<'blue' | 'orange' | 'purple', ColorTheme> = {
  blue: { text: 'text-blue-400', baseBorder: 'border-blue-500/40', baseShadow: 'shadow-[0_0_20px_rgba(59,130,246,0.15),inset_0_0_15px_rgba(59,130,246,0.1)]', hoverBorder: 'group-hover:border-blue-400', hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5),inset_0_0_20px_rgba(59,130,246,0.3)]', glowText: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]', radialGlow: 'rgba(59,130,246,0.25)' },
  orange: { text: 'text-orange-400', baseBorder: 'border-orange-500/40', baseShadow: 'shadow-[0_0_20px_rgba(249,115,22,0.15),inset_0_0_15px_rgba(249,115,22,0.1)]', hoverBorder: 'group-hover:border-orange-400', hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5),inset_0_0_20px_rgba(249,115,22,0.3)]', glowText: 'drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]', radialGlow: 'rgba(249,115,22,0.25)' },
  purple: { text: 'text-purple-400', baseBorder: 'border-purple-500/40', baseShadow: 'shadow-[0_0_20px_rgba(168,85,247,0.15),inset_0_0_15px_rgba(168,85,247,0.1)]', hoverBorder: 'group-hover:border-purple-400', hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5),inset_0_0_20px_rgba(168,85,247,0.3)]', glowText: 'drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]', radialGlow: 'rgba(168,85,247,0.25)' },
};

interface TechItem { category: string; name: string; color: 'blue' | 'orange' | 'purple'; }

const stack: TechItem[] = [
  { category: 'LIBRARY', name: 'REACT', color: 'blue' }, { category: 'FRAMEWORK', name: 'NEXT.JS', color: 'purple' },
  { category: 'LANGUAGE', name: 'TYPESCRIPT', color: 'blue' }, { category: 'TOOL', name: 'VITE', color: 'purple' },
  { category: 'AI EDITOR', name: 'CURSOR', color: 'blue' }, { category: 'BACKEND', name: 'NODE.JS', color: 'orange' },
  { category: 'STYLING', name: 'TAILWIND', color: 'blue' }, { category: 'DATABASE', name: 'SUPABASE', color: 'orange' },
  { category: 'API', name: 'API MANAGEMENT', color: 'purple' }, { category: 'AI', name: 'AI AGENTS', color: 'orange' },
];

const iconSize = "text-[45px]";
const techLogos = [
  { node: <SiReact className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "React" },
  { node: <SiNextdotjs className={`${iconSize} text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Next.js" },
  { node: <SiTypescript className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "TypeScript" },
  { node: <SiTailwindcss className={`${iconSize} text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Tailwind CSS" },
  { node: <SiNodedotjs className={`${iconSize} text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Node.js" },
  { node: <SiSupabase className={`${iconSize} text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Supabase" },
  { node: <SiMercadopago className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Mercado Pago" },
  { node: <SiDocker className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Docker" },
  { node: <SiGit className={`${iconSize} text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Git" },
  { node: <SiVercel className={`${iconSize} text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform duration-300 ease-out`} />, title: "Vercel" },
];

interface TechCardProps { tech: TechItem; colorTheme: ColorTheme; }

const TechCard = React.memo(({ tech, colorTheme }: TechCardProps) => (
  <div className="tech-card-wrapper will-change-transform h-full w-full">
    <div className={`pointer-events-auto group p-8 flex flex-col justify-center items-center aspect-[2/1] md:aspect-auto md:h-48 transition-all duration-300 ease-out relative cursor-pointer hover:scale-105 hover:z-30 rounded-2xl bg-black/60 backdrop-blur-sm overflow-hidden border ${colorTheme.baseBorder} ${colorTheme.baseShadow} ${colorTheme.hoverBorder} ${colorTheme.hoverShadow}`}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${colorTheme.radialGlow} 0%, transparent 75%)` }}></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 rounded-t-2xl"></div>
      <span className="font-mono text-[10px] md:text-xs text-gray-300 group-hover:text-white mb-3 transition-colors duration-300 z-10 uppercase tracking-widest text-center"><span className={`${colorTheme.text} ${colorTheme.glowText}`}>{'>_'}</span> {tech.category}</span>
      <span className="font-bold text-xl md:text-2xl tracking-tight text-white drop-shadow-md text-center z-10">{tech.name}</span>
    </div>
  </div>
));
TechCard.displayName = 'TechCard';

export default function TechStack() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".tech-header", {
      scrollTrigger: { trigger: ".tech-header", start: "top 85%", once: true },
      opacity: 0, y: 30, duration: 0.8, ease: "power3.out", clearProps: "all" 
    });

    gsap.from(".tech-card-wrapper", {
      scrollTrigger: { trigger: ".tech-grid", start: "top 85%", once: true },
      opacity: 0, scale: 0.8, y: 40, duration: 0.7, ease: "back.out(1.5)", stagger: 0.1, clearProps: "all" 
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="skills" className="relative bg-[#00000] text-white pb-32 overflow-hidden min-h-screen flex flex-col justify-start">
      
      <div className="absolute top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <LogoLoop 
          logos={techLogos} 
          speed={40} 
          direction="left" 
          logoHeight={50} 
          gap={60} 
          hoverSpeed={0} 
          scaleOnHover={true} 
          fadeOut={true} 
          fadeOutColor="#050505"
          ariaLabel="Technology partners" 
          className="relative z-10 pointer-events-auto" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-44 relative z-20 pointer-events-none">
        <div className="tech-header flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 mb-12 pointer-events-none will-change-transform">
          <div>
            <span className="text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">{t("/ Conocimientos", "/ Skills")}</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.1em] md:tracking-[0.2em] leading-none drop-shadow-lg break-words">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">TECH_</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 font-normal">STACK</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-gray-400 hidden md:flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 transition-opacity duration-500"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></span></span>
            {t("SYSTEM_OPTIMIZED", "SYSTEM_OPTIMIZED")}
          </span>
        </div>

        <div className="tech-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stack.map((tech, index) => <TechCard key={index} tech={tech} colorTheme={colors[tech.color]} />)}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 md:w-1/1 h-[4px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent shadow-[0_0_20px_rgba(59,130,246,1)]"></div>
      </div>
      
    </section>
  );
}