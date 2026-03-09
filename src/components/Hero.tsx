import { motion } from 'framer-motion';
// Importamos tu nuevo componente WebGL
import { LiquidChrome } from './LiquidChrome';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* --- 1. EL FONDO INTERACTIVO LIQUID CHROME --- */}
      <div className="absolute inset-0 z-0">
        <LiquidChrome
          baseColor={[0.1, 0, 0.3]}
          speed={0.5}
          amplitude={0.3}
          interactive={false}
        />
      </div>
      
      {/* Capa de oscurecimiento opcional: ayuda a que el texto blanco resalte más sobre el cromo */}
      <div className="absolute inset-0 z-[1] bg-black/20 pointer-events-none"></div>

      {/* --- 2. CONTENIDO FRONTAL --- */}
      {/* CRUCIAL: pointer-events-none permite que tu mouse "atraviese" este contenedor y mueva el líquido del fondo */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
        
        {/* Píldora de estado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mb-10 shadow-2xl pointer-events-auto"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-200 uppercase">Available for work</span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none text-white drop-shadow-2xl"
        >
          Lucasz
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white filter drop-shadow-lg">
            .exe
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-gray-300 font-light mb-10 leading-relaxed drop-shadow-md bg-black/30 p-5 rounded-2xl backdrop-blur-sm border border-white/5"
        >
          Full Stack Web Developer. Transformando lógica compleja en experiencias digitales elegantes, rápidas y escalables.
        </motion.p>

        {/* Botones de Acción */}
        {/* CRUCIAL: Reactivamos los eventos del mouse (pointer-events-auto) para que los botones se puedan clickear */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 pointer-events-auto"
        >
          <button
            className="px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Proyectos
          </button>
          
          <button
            className="px-8 py-4 rounded-full bg-black/40 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors duration-300 backdrop-blur-md"
            onClick={() => window.location.href = 'mailto:tu@email.com'}
          >
            Contacto
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}