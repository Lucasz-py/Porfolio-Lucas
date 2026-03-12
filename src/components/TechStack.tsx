import React, { Suspense } from 'react';
import { motion, type Variants } from 'framer-motion';
import LogoLoop from './LogoLoop';
import { 
  SiDocker, SiSupabase, SiReact, SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiVercel, SiNodedotjs, SiGit, SiMercadopago
} from 'react-icons/si';

const SplashCursor = React.lazy(() => import('./SplashCursor'));

interface ColorTheme {
  text: string; baseBorder: string; baseShadow: string; hoverBorder: string; hoverShadow: string; glowText: string; radialGlow: string;
}

const colors: Record<'blue' | 'orange' | 'purple', ColorTheme> = {
  blue: { text: 'text-blue-400', baseBorder: 'border-blue-500/40', baseShadow: 'shadow-[0_0_20px_rgba(59,130,246,0.15),inset_0_0_15px_rgba(59,130,246,0.1)]', hoverBorder: 'group-hover:border-blue-400', hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5),inset_0_0_20px_rgba(59,130,246,0.3)]', glowText: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]', radialGlow: 'rgba(59,130,246,0.25)' },
  orange: { text: 'text-orange-400', baseBorder: 'border-orange-500/40', baseShadow: 'shadow-[0_0_20px_rgba(249,115,22,0.15),inset_0_0_15px_rgba(249,115,22,0.1)]', hoverBorder: 'group-hover:border-orange-400', hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5),inset_0_0_20px_rgba(249,115,22,0.3)]', glowText: 'drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]', radialGlow: 'rgba(249,115,22,0.25)' },
  purple: { text: 'text-purple-400', baseBorder: 'border-purple-500/40', baseShadow: 'shadow-[0_0_20px_rgba(168,85,247,0.15),inset_0_0_15px_rgba(168,85,247,0.1)]', hoverBorder: 'group-hover:border-purple-400', hoverShadow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5),inset_0_0_20px_rgba(168,85,247,0.3)]', glowText: 'drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]', radialGlow: 'rgba(168,85,247,0.25)' },
};

interface TechItem {
  category: string; name: string; color: 'blue' | 'orange' | 'purple';
}

const stack: TechItem[] = [
  { category: 'LIBRARY', name: 'REACT', color: 'blue' }, { category: 'FRAMEWORK', name: 'NEXT.JS', color: 'purple' },
  { category: 'LANGUAGE', name: 'TYPESCRIPT', color: 'blue' }, { category: 'TOOL', name: 'VITE', color: 'purple' },
  { category: 'AI EDITOR', name: 'CURSOR', color: 'blue' }, { category: 'BACKEND', name: 'NODE.JS', color: 'orange' },
  { category: 'STYLING', name: 'TAILWIND', color: 'blue' }, { category: 'DATABASE', name: 'SUPABASE', color: 'orange' },
  { category: 'API', name: 'API MANAGEMENT', color: 'purple' }, { category: 'AI', name: 'AI AGENTS', color: 'orange' },
];

const iconSize = "text-[45px]";
const techLogos = [
  { node: <SiReact className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform`} />, title: "React" },
  { node: <SiNextdotjs className={`${iconSize} text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform`} />, title: "Next.js" },
  { node: <SiTypescript className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform`} />, title: "TypeScript" },
  { node: <SiTailwindcss className={`${iconSize} text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)] hover:scale-110 transition-transform`} />, title: "Tailwind CSS" },
  { node: <SiNodedotjs className={`${iconSize} text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:scale-110 transition-transform`} />, title: "Node.js" },
  { node: <SiSupabase className={`${iconSize} text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:scale-110 transition-transform`} />, title: "Supabase" },
  { node: <SiMercadopago className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform`} />, title: "Mercado Pago" },
  { node: <SiDocker className={`${iconSize} text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-110 transition-transform`} />, title: "Docker" },
  { node: <SiGit className={`${iconSize} text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:scale-110 transition-transform`} />, title: "Git" },
  { node: <SiVercel className={`${iconSize} text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform`} />, title: "Vercel" },
];

const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const cardVariants: Variants = { hidden: { opacity: 0, scale: 0.95, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" } } };

interface TechCardProps { tech: TechItem; colorTheme: ColorTheme; }

const TechCard = React.memo(({ tech, colorTheme }: TechCardProps) => (
  <motion.div variants={cardVariants} className={`pointer-events-auto group p-8 flex flex-col justify-center items-center aspect-[2/1] md:aspect-auto md:h-48 transition-all duration-300 relative cursor-pointer hover:scale-105 hover:z-30 rounded-2xl bg-black/60 backdrop-blur-sm overflow-hidden border ${colorTheme.baseBorder} ${colorTheme.baseShadow} ${colorTheme.hoverBorder} ${colorTheme.hoverShadow}`}>
    <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${colorTheme.radialGlow} 0%, transparent 75%)` }}></div>
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 rounded-t-2xl"></div>
    <span className="font-mono text-[10px] md:text-xs text-gray-300 group-hover:text-white mb-3 transition-colors z-10 uppercase tracking-widest text-center"><span className={`${colorTheme.text} ${colorTheme.glowText}`}>{'>_'}</span> {tech.category}</span>
    <span className="font-bold text-xl md:text-2xl tracking-tight text-white drop-shadow-md text-center z-10">{tech.name}</span>
  </motion.div>
));
TechCard.displayName = 'TechCard';

export default function TechStack() {
  return (
    <section id="skills" className="relative bg-black text-white pb-32 overflow-hidden min-h-screen flex flex-col justify-start">
      <motion.div animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none z-0" />
      <motion.div animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <Suspense fallback={null}>
          <SplashCursor SPLAT_RADIUS={0.3} SPLAT_FORCE={4000} DENSITY_DISSIPATION={2} VELOCITY_DISSIPATION={0.5} />
        </Suspense>
      </div>
      
      <div className="absolute top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <LogoLoop logos={techLogos} speed={40} direction="left" logoHeight={50} gap={60} hoverSpeed={0} scaleOnHover={true} fadeOut={true} fadeOutColor="#000000" ariaLabel="Technology partners" className="relative z-10 pointer-events-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-44 relative z-20 pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 mb-12 pointer-events-none">
          <div>
            <span className="text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">/ Conocimientos</span>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter drop-shadow-lg">TECH_<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">STACK</span></h2>
          </div>
          <span className="font-mono text-xs text-gray-400 hidden md:flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></span></span>
            SYSTEM_OPTIMIZED
          </span>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stack.map((tech, index) => <TechCard key={index} tech={tech} colorTheme={colors[tech.color]} />)}
        </motion.div>
      </div>
    </section>
  );
}