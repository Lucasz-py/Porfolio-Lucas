import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Si el elemento o sus padres tienen la clase 'hover-target', cambiamos el estado
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
      className="fixed top-0 left-0 pointer-events-none z-50 transition-all duration-200 ease-out flex items-center justify-center"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: isHovering ? '60px' : '24px',
        height: isHovering ? '60px' : '24px',
        backgroundColor: isHovering ? '#FBF4B0' : '#fff',
        mixBlendMode: isHovering ? 'normal' : 'difference',
        border: isHovering ? '2px solid black' : 'none',
        borderRadius: '50%',
      }}
    />
  );
}