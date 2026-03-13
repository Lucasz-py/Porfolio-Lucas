import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertTriangle, FiCpu, FiMonitor, FiX, FiZap } from 'react-icons/fi';

interface AnimationContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType>({
  animationsEnabled: false,
  toggleAnimations: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleAnimations = () => {
    if (!animationsEnabled) {
      setShowModal(true);
    } else {
      setAnimationsEnabled(false);
    }
  };

  const confirmEnable = () => {
    setAnimationsEnabled(true);
    setShowModal(false);
  };

  const cancelEnable = () => {
    setShowModal(false);
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={cancelEnable}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-black/80 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto backdrop-blur-xl will-change-transform"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.8)]" />

              <div className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-full border border-orange-500/20 shadow-[inset_0_0_10px_rgba(249,115,22,0.1)]">
                    <FiAlertTriangle className="w-6 h-6 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extralight tracking-tight text-white drop-shadow-md">
                    ALERTA DE <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">RENDIMIENTO</span>
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-8">
                  <p>Activar esta opción habilita simulaciones de físicas de fluidos, entornos WebGL 3D y desenfoques dinámicos de alta calidad.</p>
                  <p>Estas características consumen <strong className="text-orange-400 font-medium drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]">MUCHOS recursos</strong> de la tarjeta gráfica (GPU) y el procesador (CPU).</p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 mt-6 space-y-4">
                    <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-1">{'>_'} Se recomienda estrictamente:</p>
                    <div className="flex items-start gap-3">
                      <FiMonitor className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(59,130,246,0.6)]" />
                      <span className="text-sm">Usar una PC con buena capacidad (no recomendado en notebooks de gama de entrada).</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiCpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(168,85,247,0.6)]" />
                      <span className="text-sm">Tener la <strong className="text-gray-100">Aceleración por Hardware</strong> activada en tu navegador.</span>
                    </div>
                  </div>
                  <p className="text-center font-medium text-white pt-4">¿Deseas activar los efectos visuales de todos modos?</p>
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-end">
                  <button onClick={cancelEnable} className="hover-target px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400 font-semibold hover:bg-white/10 hover:text-white hover:border-white/30 transition duration-300 ease-out">
                    Cancelar
                  </button>
                  <button onClick={confirmEnable} className="hover-target px-6 py-3 rounded-full bg-orange-600/10 border border-orange-500/30 text-orange-400 font-bold tracking-wide hover:bg-orange-500/20 hover:text-white hover:border-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition duration-300 ease-out flex items-center justify-center gap-2 group">
                    Activar Efectos <FiZap className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>
              <button onClick={cancelEnable} className="hover-target absolute top-5 right-5 text-gray-500 hover:text-white transition-colors duration-300 z-20" aria-label="Cerrar">
                <FiX className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimationContext.Provider>
  );
};