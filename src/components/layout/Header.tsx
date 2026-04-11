import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext'; // <-- Importamos el contexto

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage(); // <-- Extraemos lo necesario
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();

  // Animación inicial del Navbar al cargar
  useGSAP(() => {
    gsap.from(navRef.current, { y: -100, opacity: 0, duration: 0.8, ease: "power3.out" });
  }, []);

  // Animación de entrada del menú móvil
  useGSAP(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" }
      );
    }
  }, [isMobileMenuOpen]);

  // Ejecución segura de animaciones
  const closeMenuWithAnimation = (callback?: () => void) => {
    contextSafe(() => {
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          opacity: 0, y: -10, scale: 0.95, duration: 0.3, ease: "power3.in",
          onComplete: () => {
            setIsMobileMenuOpen(false);
            if (callback) callback();
          }
        });
      } else {
        setIsMobileMenuOpen(false);
        if (callback) callback();
      }
    })(); 
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMenuWithAnimation();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsMobileMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    closeMenuWithAnimation(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  const scrollToTop = () => {
    closeMenuWithAnimation(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 w-full z-50 p-4 md:p-6 flex justify-center items-start pointer-events-none will-change-transform"
    >
      <div className="w-full max-w-7xl flex justify-between items-start relative">
        
        {/* LOGO */}
        <div 
          onClick={scrollToTop}
          className="pointer-events-auto px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] hover:bg-black/60 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition duration-300 ease-out flex items-center justify-center cursor-pointer relative z-50"
        >
          <span className="font-black text-lg md:text-xl tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover-target">Lucasz.exe</span>
        </div>
        
        {/* NAVEGACIÓN DESKTOP */}
        <div className="pointer-events-auto hidden md:flex items-center px-8 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-6 pr-6 font-mono font-bold text-xs uppercase text-gray-300">
            
            {/* SWITCH DE IDIOMA EN DESKTOP */}
            <div className="flex items-center gap-2 mr-2">
              <FiGlobe className="w-4 h-4 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <label className="relative inline-flex items-center cursor-pointer hover-target">
                <input type="checkbox" className="sr-only peer" checked={language === 'en'} onChange={toggleLanguage} />
                {/* Switch reescalado para el Header (más compacto) */}
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['ES'] peer-checked:after:content-['EN'] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:text-[9px] after:font-bold after:flex after:items-center after:justify-center after:text-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform after:duration-300 after:ease-out peer-checked:bg-blue-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] peer-checked:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-colors duration-300"></div>
              </label>
            </div>

            <button onClick={() => scrollToSection('about')} className="hover-target hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out">/ABOUT</button>
            <button onClick={() => scrollToSection('skills')} className="hover-target hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out">/SKILLS</button>
            <button onClick={() => scrollToSection('work')} className="hover-target hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 ease-out">/WORK</button>
          </div>
          <button onClick={() => scrollToSection('contact')} className="hover-target bg-orange-600/30 border border-orange-500/50 px-5 py-2 rounded-full font-mono font-bold text-xs uppercase text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:bg-orange-500/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:border-orange-400 transition duration-300 ease-out">
            HIRE ME
          </button>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <div className="md:hidden pointer-events-auto relative z-50">
          <button onClick={toggleMobileMenu} className="px-4 py-3 bg-black/40 border border-white/10 rounded-full backdrop-blur-xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.8)] hover:bg-black/60 transition duration-300 ease-out">
            {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-16 right-0 mt-2 w-48 flex flex-col p-4 gap-4 bg-black/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl pointer-events-auto origin-top-right z-40 will-change-transform"
          >
            {/* SWITCH DE IDIOMA EN MÓVIL */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono font-bold text-xs uppercase text-gray-300 flex items-center gap-2">
                <FiGlobe className="w-4 h-4 text-blue-400" /> {t("IDIOMA", "LANG")}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={language === 'en'} onChange={toggleLanguage} />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['ES'] peer-checked:after:content-['EN'] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:text-[9px] after:font-bold after:flex after:items-center after:justify-center after:text-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform after:duration-300 after:ease-out peer-checked:bg-blue-500/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] peer-checked:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-colors duration-300"></div>
              </label>
            </div>

            <button onClick={() => scrollToSection('about')} className="text-left font-mono font-bold text-xs uppercase text-gray-300 hover:text-white py-2 transition-colors duration-300">/ ABOUT</button>
            <button onClick={() => scrollToSection('skills')} className="text-left font-mono font-bold text-xs uppercase text-gray-300 hover:text-white py-2 transition-colors duration-300">/ SKILLS</button>
            <button onClick={() => scrollToSection('work')} className="text-left font-mono font-bold text-xs uppercase text-gray-300 hover:text-white py-2 border-b border-white/10 pb-4 transition-colors duration-300">/ WORK</button>
            <button onClick={() => scrollToSection('contact')} className="bg-orange-600/30 border border-orange-500/50 py-3 rounded-full font-mono font-bold text-xs uppercase text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] w-full text-center transition duration-300 ease-out">
              HIRE ME
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}