import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      // OPTIMIZACIÓN MÓVIL: "hidden md:flex" oculta el cursor en dispositivos táctiles/móviles
      className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[100] items-center justify-center rounded-full will-change-transform"
      style={{
        transition: 'width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out, border 0.3s ease-out, box-shadow 0.3s ease-out, backdrop-filter 0.3s ease-out',
        width: isHovering ? '48px' : '10px',
        height: isHovering ? '48px' : '10px',
        backgroundColor: isHovering ? 'rgba(168, 85, 247, 0.05)' : '#ffffff',
        border: isHovering ? '1px solid rgba(168, 85, 247, 0.5)' : 'none',
        boxShadow: isHovering 
          ? '0 0 20px rgba(168, 85, 247, 0.4)' 
          : '0 0 10px rgba(255, 255, 255, 0.8)',
        backdropFilter: isHovering ? 'blur(2px)' : 'none',
      }}
    />
  );
}