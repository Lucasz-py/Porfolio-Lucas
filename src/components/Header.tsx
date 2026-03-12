import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      className="fixed top-0 w-full z-50 p-4 md:p-6 flex justify-center items-start pointer-events-none"
    >
      <div className="w-full max-w-7xl flex justify-between items-start">
        
        {/* BURBUJA IZQUIERDA: Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pointer-events-auto px-6 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] hover:bg-black/60 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          <span className="font-black text-xl tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover-target">
            Lucasz.exe
          </span>
        </div>
        
        {/* BURBUJA DERECHA: Navegación y Botón */}
        <div className="pointer-events-auto hidden md:flex items-center px-8 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          
          {/* Links de navegación (Ahora con scroll suave) */}
          <div className="flex items-center gap-6 pr-6 font-mono font-bold text-xs uppercase text-gray-300">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover-target hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              /ABOUT
            </button>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover-target hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              /SKILLS
            </button>
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover-target hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
            >
              /WORK
            </button>
          </div>
          
          {/* Botón HIRE ME (Apuntando a contact con scroll suave) */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover-target bg-orange-600/30 border border-orange-500/50 px-5 py-2 rounded-full font-mono font-bold text-xs uppercase text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:bg-orange-500/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:border-orange-400 transition-all"
          >
            HIRE ME
          </button>
          
        </div>

      </div>
    </motion.nav>
  );
}