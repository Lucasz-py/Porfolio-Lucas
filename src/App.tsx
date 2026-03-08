import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import WhoAmI from './components/WhoAmI';
import TechStack from './components/TechStack';
import SelectedWorks from './components/SelectedWorks';

function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      
      {/* HEADER FLOTANTE NEO-BRUTALISTA */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        /* Agregamos justify-center al nav principal */
        className="fixed top-0 w-full z-50 p-4 md:p-6 flex justify-center items-start pointer-events-none"
      >
        {/* NUEVO CONTENEDOR CENTRAL: Mantiene las cajas juntas con un ancho máximo */}
        <div className="w-full max-w-7xl flex justify-between items-start">
          
          {/* RECUADRO IZQUIERDO: Logo (Lucasz.exe) */}
          <div className="pointer-events-auto bg-white border-4 border-black px-4 py-2 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all flex items-center justify-center">
            <span className="font-black text-xl tracking-tighter hover-target">
              Lucasz.exe
            </span>
          </div>
          
          {/* RECUADRO DERECHO: Navegación y Botón */}
          <div className="pointer-events-auto hidden md:flex items-center bg-white border-4 border-black p-1 shadow-neo">
            
            {/* Links de navegación (Ahora con font-black y text-sm) */}
            <div className="flex items-center gap-6 px-6 font-mono font-black text-sm uppercase">
              <a href="#about" className="hover-target hover:text-blue-600 transition-colors">/ABOUT</a>
              <a href="#skills" className="hover-target hover:text-blue-600 transition-colors">/SKILLS</a>
              <a href="#logs" className="hover-target hover:text-blue-600 transition-colors">/LOGS</a>
              <a href="#work" className="hover-target hover:text-blue-600 transition-colors">/WORK</a>
            </div>
            
            {/* Botón HIRE ME (Ahora con font-black y text-sm) */}
            <button className="hover-target bg-neoYellow border-2 border-black px-4 py-2 font-mono font-black text-sm uppercase hover:bg-yellow-400 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              HIRE ME
            </button>
            
          </div>

        </div>
      </motion.nav>

      <main className="pt-24">
        <Hero />
        <WhoAmI />
        <TechStack />
        <SelectedWorks />
      </main>
    </div>
  );
}

export default App;