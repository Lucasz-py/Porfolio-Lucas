import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiMapPin, FiBookOpen, FiZap } from 'react-icons/fi';
import ProfileCard from '../ui/ProfileCard';
import { useLanguage } from '../../context/LanguageContext';
import { ThinkingOrb } from '../ui/ThinkingOrb';

import personImg from '../../assets/person.webp';
import grainImg from '../../assets/grain.webp';

gsap.registerPlugin(ScrollTrigger);

const WhoAmI: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const infoBadges = [
    { label: t("Ubicación", "Location"), value: "Argentina", icon: FiMapPin },
    { label: t("Formación", "Education"), value: t("Sistemas", "Systems Degree"), icon: FiBookOpen },
    { label: t("Enfoque", "Focus"), value: "Full Stack", icon: FiZap },
  ];

  useGSAP(() => {
    if (!containerRef.current || !contentRef.current) return;

    // --- EFECTO DE OLA CURVA EN EL SCROLL NATIVO ---
    gsap.fromTo(contentRef.current,
      {
        borderTopLeftRadius: "50% 150px",
        borderTopRightRadius: "50% 150px",
      },
      {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Inicia en cuanto el bloque asoma por abajo
          end: "top top",      // Termina de aplanarse al chocar con el techo
          scrub: 1,
        }
      }
    );

    // Animación de marquesina siempre activa (ya que eliminamos el modo rendimiento)
    gsap.to(".marquee-content", {
      xPercent: -50, repeat: -1, duration: 45, ease: "none", overwrite: "auto"
    });

    // Animación de Entrada del Contenido
    const entryTl = gsap.timeline({
      scrollTrigger: { 
        trigger: containerRef.current, 
        start: "top 60%", // Arranca cuando la sección ya ocupó el 40% de la pantalla
        once: true 
      }
    });

    entryTl.from(".profile-column", { opacity: 0, x: -100, duration: 1, ease: "power3.out" })
           .from(".about-text-element", { opacity: 0, x: 50, duration: 0.8, stagger: 0.15, ease: "power3.out", clearProps: "opacity,transform" }, "-=0.7")
           .from(".about-badge-wrapper", { opacity: 0, y: 30, scale: 0.8, duration: 0.6, ease: "back.out(1.5)", stagger: 0.1, clearProps: "all" }, "-=0.4");

  }, { scope: containerRef }); // Eliminamos 'animationsEnabled' de las dependencias

  return (
    <section 
      ref={containerRef} 
      id="about" 
      // Espacio vacío para que el canvas del Hero anime. Al llegar a los 100vh de scroll, esto sube
      className="about-section relative min-h-screen bg-transparent z-10 mt-[100vh]"
    >
      <div 
        ref={contentRef} 
        className="w-full h-full min-h-screen bg-[#02050D] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center relative"
      >
        
        {/* Marquesina */}
        <div className="absolute top-0 left-0 w-full h-16 bg-black/60 backdrop-blur-2xl border-y border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden flex items-center z-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="marquee-content flex whitespace-nowrap font-mono text-[13px] tracking-[0.3em] font-bold items-center will-change-transform">
            <span className="flex items-center text-gray-500"> ✦ FULL STACK ✦ FRONTEND ✦ BACKEND ✦ UI/UX DESIGN ✦ WEBGL ✦ <span className="mx-6 px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">CREATIVE DEVELOPER</span> ✦ REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ TAILWIND ✦ <span className="mx-6 px-4 py-1.5 rounded-full border border-blue-500/40 text-blue-400 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">PROBLEM SOLVER</span></span>
            <span className="flex items-center text-gray-500"> ✦ FULL STACK ✦ FRONTEND ✦ BACKEND ✦ UI/UX DESIGN ✦ WEBGL ✦ <span className="mx-6 px-4 py-1.5 rounded-full border border-orange-500/40 text-orange-400 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">CREATIVE DEVELOPER</span> ✦ REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ TAILWIND ✦ <span className="mx-6 px-4 py-1.5 rounded-full border border-blue-500/40 text-blue-400 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">PROBLEM SOLVER</span></span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-6 relative z-20 w-full max-w-7xl mt-10 lg:mt-0">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
            
            <div className="profile-column w-full lg:w-1/2 flex justify-center items-center will-change-transform relative">
              <div className="relative w-full flex justify-center items-center max-w-[400px] lg:max-w-full group">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[75%] w-[700px] h-[700px] z-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none origin-center transform scale-90 lg:scale-100">
                  <ThinkingOrb />
                </div>
                <div className="w-full flex justify-center items-center max-w-[360px] md:max-w-[400px] hover-target relative z-10 will-change-transform">
                  <ProfileCard
                    avatarUrl={personImg} grainUrl={grainImg} name="Escobar Lucas"
                    title={t("Lic. En Sistemas", "B.S. in Systems Engineering")} handle="Lucasz" status={t("Available for work", "Available for work")}
                    contactText={t("Contacto", "Contact")} showUserInfo={true} enableTilt={true} 
                    enableMobileTilt={false} mobileTiltSensitivity={5} behindGlowEnabled={false} 
                    behindGlowColor="rgba(125, 190, 255, 0.67)" behindGlowSize="50%" onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-[600px] mx-auto will-change-transform">
              
              <div className="about-text-element mb-6 w-full flex justify-center lg:justify-start">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                  / About Me
                </span>
              </div>

              <h2 className="about-text-element text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-6 md:mb-8 leading-tight drop-shadow-lg w-full">
                {t("Diseño con ", "Design with ")}<span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t("precisión", "precision")}</span>, <br />
                {t("Desarrollo con ", "Develop with ")}<span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">{t("lógica", "logic")}</span>.
              </h2>

              <div className="about-text-element space-y-4 md:space-y-6 text-gray-300 font-light text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-10 drop-shadow-md w-full px-2 lg:px-0">
                <p>{t("Bienvenido a mi espacio digital. Soy Lucas, estudiante de Sistemas y Desarrollador Full Stack. Mi enfoque es simple: traducir problemas complejos en soluciones digitales eficientes, escalables y con un diseño de primer nivel.", "Welcome to my digital space. I'm Lucas, a Systems student and Full Stack Developer. My approach is simple: translating complex problems into efficient, scalable digital solutions with top-tier design.")}</p>
                <p>{t("Actualmente estudiante de ", "Currently studying for a ")}<strong className="text-white font-medium">{t("Licenciatura en Sistemas de Información", "Bachelor's Degree in Information Systems")}</strong>, {t("combinando los fundamentos de la ingeniería de software con las últimas tecnologías del desarrollo web moderno.", "combining the fundamentals of software engineering with the latest modern web development technologies.")}</p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pointer-events-auto w-full px-2 lg:px-0">
                {infoBadges.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="about-badge-wrapper will-change-transform">
                      <div className="px-5 py-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 ease-out flex flex-col justify-center items-center lg:items-start cursor-default">
                        <span className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">
                          <Icon className="w-3.5 h-3.5 text-orange-400" /> {item.label}
                        </span>
                        <span className="block text-sm md:text-base text-gray-100 font-semibold tracking-wide">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;