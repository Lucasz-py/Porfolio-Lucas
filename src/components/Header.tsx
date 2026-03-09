import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      // pointer-events-none es VITAL para que el mouse no bloquee el fondo líquido en el centro
      className="fixed top-0 w-full z-50 p-4 md:p-6 flex justify-center items-start pointer-events-none"
    >
      {/* Contenedor central para mantener el ancho máximo igual que antes */}
      <div className="w-full max-w-7xl flex justify-between items-start">
        
        {/* BURBUJA IZQUIERDA: Logo (Lucasz.exe) */}
        <div className="pointer-events-auto px-6 py-3 rounded-full bg-purple-900/10 border border-purple-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:bg-purple-900/20 hover:border-purple-400/40 transition-all duration-300 flex items-center justify-center cursor-pointer">
          <span className="font-black text-xl tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover-target">
            Lucasz.exe
          </span>
        </div>
        
        {/* BURBUJA DERECHA: Navegación y Botón */}
        <div className="pointer-events-auto hidden md:flex items-center px-8 py-3 rounded-full bg-purple-900/10 border border-purple-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          
          {/* Links de navegación (Estilo moderno y sutil) */}
          <div className="flex items-center gap-6 pr-6 font-mono font-bold text-xs uppercase text-purple-200">
            <a href="#about" className="hover-target hover:text-white transition-colors">ABOUT</a>
            <a href="#skills" className="hover-target hover:text-white transition-colors">SKILLS</a>
            <a href="#logs" className="hover-target hover:text-white transition-colors">LOGS</a>
            <a href="#work" className="hover-target hover:text-white transition-colors">WORK</a>
          </div>
          
          {/* Botón HIRE ME (Estilo pastilla brillante integrada) */}
          <button className="hover-target bg-purple-600/30 border border-purple-400/40 px-5 py-2 rounded-full font-mono font-bold text-xs uppercase text-white hover:bg-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
            HIRE ME
          </button>
          
        </div>

      </div>
    </motion.nav>
  );
}