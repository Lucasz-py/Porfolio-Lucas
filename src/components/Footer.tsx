
import { motion, type Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Lucasz-py', icon: FiGithub, hoverColor: 'hover:text-orange-400 hover:border-orange-400', glow: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lucas-escobar-49137134a', icon: FiLinkedin, hoverColor: 'hover:text-blue-400 hover:border-blue-400', glow: 'group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
    { name: 'Instagram', url: 'https://www.instagram.com/lucasz.27/', icon: FiInstagram, hoverColor: 'hover:text-purple-400 hover:border-purple-400', glow: 'group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]' },
    { name: 'WhatsApp', url: 'https://wa.me/5493757500969', icon: SiWhatsapp, hoverColor: 'hover:text-green-400 hover:border-green-400', glow: 'group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]' },
    { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=escobarlucas27.10@gmail.com', icon: FiMail, hoverColor: 'hover:text-orange-400 hover:border-orange-400', glow: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
  ];

  const bottomContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
  };
  const bottomItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <footer id="contact" className="relative bg-black text-white pt-16 pb-10 overflow-hidden border-t border-white/5">
      
      <motion.div animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-purple-900/20 rounded-t-full mix-blend-screen filter blur-[120px] pointer-events-none z-0"></motion.div>
      <motion.div animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-0 left-0 w-[400px] h-[200px] bg-blue-900/20 rounded-tr-full mix-blend-screen filter blur-[100px] pointer-events-none z-0"></motion.div>
      <motion.div animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.1, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-orange-900/10 rounded-tl-full mix-blend-screen filter blur-[100px] pointer-events-none z-0"></motion.div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 100 }} className="font-mono text-xs text-gray-500 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">{'>_'}</span> ¿Qué sigue?
          </motion.span>
          
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter mb-8 drop-shadow-lg">
            CREEMOS ALGO <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">INCREÍBLE</span>
          </motion.h2>
          
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-400 font-light text-lg max-w-xl mb-10">
            Ya sea que tengas una idea en mente o necesites un desarrollador Full Stack para tu equipo, mi bandeja de entrada siempre está abierta.
          </motion.p>
          
          <motion.a initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 50, delay: 0.3 }} href="https://wa.me/5493757500969" target="_blank" rel="noreferrer" className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              Comunicate conmigo <SiWhatsapp className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            </span>
          </motion.a>
        </div>

        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 relative origin-center">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="absolute left-1/2 -translate-x-1/2 top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent shadow-[0_0_15px_rgba(168,85,247,1)] origin-center"></motion.div>
        </motion.div>

        <motion.div variants={bottomContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 w-full">
          <motion.div variants={bottomItem} className="flex-1 flex flex-col items-center md:items-start w-full">
            <span className="text-xl font-bold tracking-tighter mb-1">Lucasz<span className="text-orange-500">.exe</span></span>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider text-center md:text-left">© {currentYear} TODOS LOS DERECHOS RESERVADOS.</span>
          </motion.div>

          <motion.div variants={bottomItem} className="flex-shrink-0 flex items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name} className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-white/10 text-gray-400 transition-all duration-300 ${link.hoverColor} hover:-translate-y-1`}>
                  <Icon className="w-5 h-5 relative z-10" />
                  <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 pointer-events-none ${link.glow}`}></div>
                </a>
              );
            })}
          </motion.div>

          <motion.div variants={bottomItem} className="flex-1 flex justify-center md:justify-end items-center w-full">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 cursor-default">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]"></span></span>
              <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">SISTEMA EN LÍNEA</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </footer>
  );
}