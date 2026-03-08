import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax para que los elementos floten a distinta velocidad al bajar
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const boxY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    // bg-transparent asegura que veamos la grilla del index.css
    <section className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 border-b-4 border-black relative overflow-hidden bg-transparent">
      
      {/* 1. Recuadro superior: STATUS: ONLINE */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-28 inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-1 text-sm font-mono font-bold shadow-neo mb-12 z-10"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        SYSTEM STATUS: ONLINE
      </motion.div>

      <div className="text-center mt-10 z-10 flex flex-col items-center w-full">
        
        {/* 2. Título GIGANTE con estilos mixtos */}
        <motion.div style={{ y: textY }} className="mb-6 flex flex-col items-center w-full">
          {/* Capa 1: "FULL STACK" en negro sólido */}
          <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] text-neoBlack w-full">
            Full Stack
          </h1>
          {/* Capa 2: "DEVELOPER" transparente con borde negro grueso */}
          <h1 
            className="text-7xl sm:text-8xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] text-transparent w-full"
            style={{ WebkitTextStroke: '3px black' }}
          >
            Developer
          </h1>
        </motion.div>
        
        {/* 3. Recuadro amarillo (Descripción flotante) */}
        <motion.div 
          style={{ y: boxY }}
          initial={{ rotate: -10, scale: 0, opacity: 0 }}
          animate={{ rotate: -1, scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 0.8, delay: 0.3 }}
          className="bg-neoYellow border-4 border-black inline-block px-8 py-6 shadow-neo-lg mb-12 relative z-10 max-w-2xl mt-8"
        >
          <p className="font-mono font-bold text-lg md:text-xl leading-relaxed">
            I build digital products that refuse to be boring.
            <br />
            <span className="mt-2 inline-block">React • TypeScript • Tailwind • Node</span>
          </p>
        </motion.div>
      </div>

      {/* 4. Elementos decorativos de fondo (Cuadrado azul y círculo rosa) */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute top-1/3 left-8 md:left-20 w-16 h-16 border-4 border-black bg-blue-600 shadow-neo z-0"
      />
      <motion.div 
        animate={{ y: [0, -30, 0] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-8 md:right-20 w-20 h-20 rounded-full border-4 border-black bg-pink-400 shadow-neo z-0"
      />
    </section>
  );
}