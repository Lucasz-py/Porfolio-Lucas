import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import { useAnimation } from '../../context/AnimationContext';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { animationsEnabled } = useAnimation(); 
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Lucasz-py', icon: FiGithub, hoverColor: 'hover:text-orange-400 hover:border-orange-400', glow: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lucas-escobar-49137134a', icon: FiLinkedin, hoverColor: 'hover:text-blue-400 hover:border-blue-400', glow: 'group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
    { name: 'Instagram', url: 'https://www.instagram.com/lucasz.27/', icon: FiInstagram, hoverColor: 'hover:text-purple-400 hover:border-purple-400', glow: 'group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]' },
    { name: 'WhatsApp', url: 'https://wa.me/5493757500969', icon: SiWhatsapp, hoverColor: 'hover:text-green-400 hover:border-green-400', glow: 'group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]' },
    { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=escobarlucas27.10@gmail.com', icon: FiMail, hoverColor: 'hover:text-orange-400 hover:border-orange-400', glow: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]' },
  ];

  useGSAP(() => {
    const textTl = gsap.timeline({
      scrollTrigger: { trigger: ".footer-content", start: "top 85%", once: true }
    });

    textTl.from(".footer-subtitle", { opacity: 0, scale: 0.8, duration: 0.6, ease: "power3.out" })
          .from(".footer-title", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.5")
          .from(".footer-desc", { opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          // SOLUCIÓN: Animamos el wrapper y limpiamos props
          .from(".footer-btn-wrapper", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out", clearProps: "all" }, "-=0.5");

    gsap.from(".footer-line-base", {
      scrollTrigger: { trigger: ".footer-line-base", start: "top 95%", once: true },
      scaleX: 0, transformOrigin: "center", duration: 1.2, ease: "power3.out"
    });
    gsap.from(".footer-line-glow", {
      scrollTrigger: { trigger: ".footer-line-base", start: "top 95%", once: true },
      scaleX: 0, transformOrigin: "center", duration: 0.8, delay: 0.4, ease: "power3.out"
    });

    gsap.from(".bottom-item", {
      scrollTrigger: { trigger: ".footer-bottom-row", start: "top 95%", once: true },
      opacity: 0, y: 20, duration: 0.6, stagger: 0.15, delay: 0.4, ease: "power3.out", clearProps: "all"
    });

  }, { scope: containerRef });

  return (
    // Color de fondo negro sólido para máximo rendimiento y contraste

    <footer ref={containerRef} id="contact" className="relative bg-black text-white pt-24 pb-10 overflow-hidden">
      
      {/* ELIMINADAS LAS LUCES AMBIENTALES Y LA MALLA DE PUNTOS */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 md:w-1/1 h-[4px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent shadow-[0_0_20px_rgba(249,115,22,1)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="footer-content relative z-50 flex flex-col items-center justify-center text-center mb-24 pointer-events-auto">
          <span className="footer-subtitle font-mono text-xs text-gray-500 tracking-[0.2em] uppercase mb-6 flex items-center gap-2 will-change-transform">
            <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">{'>_'}</span> {t("¿Qué sigue?", "What's next?")}
          </span>
          
          <h2 className="footer-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] md:tracking-[0.2em] leading-none mb-8 drop-shadow-lg will-change-transform">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">{t("CREEMOS ALGO", "LET'S CREATE SOMETHING")}</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 font-normal">{t("INCREÍBLE", "INCREDIBLE")}</span>
          </h2>
          
          <p className="footer-desc text-gray-400 font-light text-lg max-w-xl mb-10 will-change-transform">
            {t("Ya sea que tengas una idea en mente o necesites un desarrollador Full Stack para tu equipo, mi bandeja de entrada siempre está abierta.", "Whether you have an idea in mind or need a Full Stack developer for your team, my inbox is always open.")}
          </p>
          
          {/* WRAPPER PARA GSAP */}
          <div className="footer-btn-wrapper will-change-transform mt-2">
            <a href="https://wa.me/5493757500969" target="_blank" rel="noreferrer" className="footer-btn hover-target group relative px-10 py-5 bg-orange-600/20 border border-orange-500/50 rounded-full font-semibold tracking-wide hover:bg-orange-500/30 hover:border-orange-400 transition duration-300 ease-out overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] flex items-center gap-3 inline-flex">
              <span className="relative z-10 flex items-center gap-3 text-orange-100 group-hover:text-white transition-colors duration-300">
                {t("Comunicate conmigo", "Get in touch")} <SiWhatsapp className="w-5 h-5 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] group-hover:text-white transition-colors duration-300" />
              </span>
            </a>
          </div>
        </div>

        <div className="footer-line-base w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 relative">
          <div className="footer-line-glow absolute left-1/2 -translate-x-1/2 top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent shadow-[0_0_15px_rgba(168,85,247,1)]"></div>
        </div>

        <div className="footer-bottom-row flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 w-full will-change-transform relative z-40 pointer-events-auto">
          <div className="bottom-item flex-1 flex flex-col items-center md:items-start w-full">
            <span className="text-xl font-bold tracking-tighter mb-1">Lucasz<span className="text-orange-500">.exe</span></span>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider text-center md:text-left">© {currentYear} {t("TODOS LOS DERECHOS RESERVADOS.", "ALL RIGHTS RESERVED.")}</span>
          </div>

          <div className="bottom-item flex-shrink-0 flex items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name} className={`hover-target group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-white/10 text-gray-400 transition duration-300 ease-out ${link.hoverColor} hover:-translate-y-1`}>
                  <Icon className="w-5 h-5 relative z-10" />
                  <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 pointer-events-none ${link.glow}`}></div>
                </a>
              );
            })}
          </div>

          <div className="bottom-item flex-1 flex justify-center md:justify-end items-center w-full">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-md transition duration-300 ease-out hover:bg-white/10 hover:border-white/20 cursor-default">
              <span className="relative flex h-2 w-2"><span className={`absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 transition-opacity duration-500 ${animationsEnabled ? 'animate-ping' : 'opacity-0'}`}></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]"></span></span>
              <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">{t("SISTEMA EN LÍNEA", "SYSTEM ONLINE")}</span>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 md:w-1/1 h-[1px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent shadow-[0_0_20px_rgba(249,115,22,1)]"></div>
      </div>

    </footer>
  );
}