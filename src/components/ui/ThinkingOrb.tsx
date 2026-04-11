import { useRef, useEffect, memo } from 'react';

// Configuración de la animación optimizada
const PARTICLE_COUNT = 400; 
const ORB_RADIUS = 190;     
const CAMERA_DIST = 650;
const ROTATION_SPEED = 0.003;

// --- PALETA DE COLORES: NARANJA PORTAFOLIO ---
const BASE_COLOR = { h: 24, s: 100, l: 50 }; 
const GLOW_COLOR = { h: 35, s: 100, l: 65 }; 

interface Particle { x: number; y: number; z: number; originalX: number; originalY: number; originalZ: number; }

export const ThinkingOrb = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0); 
  const rotationAngleRef = useRef(0);
  const pulseTimeRef = useRef(0);

  // Inicialización de partículas en una esfera
  useEffect(() => {
    if (particlesRef.current.length > 0) return; 

    const tempParticles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.acos(1 - 2 * (i + 0.5) / PARTICLE_COUNT);
      const phi = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const x = ORB_RADIUS * Math.sin(theta) * Math.cos(phi);
      const y = ORB_RADIUS * Math.sin(theta) * Math.sin(phi);
      const z = ORB_RADIUS * Math.cos(theta);

      tempParticles.push({ x, y, z, originalX: x, originalY: y, originalZ: z });
    }
    particlesRef.current = tempParticles;
  }, []);

  // Lógica de renderizado y animación en Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 700 * dpr;
    canvas.height = 700 * dpr;
    canvas.style.width = '700px';
    canvas.style.height = '700px';
    ctx.scale(dpr, dpr);
    ctx.translate(350, 350); 

    let lastTime = performance.now();

    const draw = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(-350, -350, 700, 700);

      rotationAngleRef.current += ROTATION_SPEED * (delta / 16.7);
      pulseTimeRef.current += 0.05 * (delta / 16.7);

      const angle = rotationAngleRef.current;
      const pulseFactor = pulseTimeRef.current;
      
      particlesRef.current.sort((a, b) => b.z - a.z);

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];

        const cosY = Math.cos(angle);
        const sinY = Math.sin(angle);
        const cosX = Math.cos(angle * 0.3);
        const sinX = Math.sin(angle * 0.3);

        const rx = p.originalX;
        const ry = p.originalY * cosX - p.originalZ * sinX;
        const rz = p.originalY * sinX + p.originalZ * cosX;

        const rotatedX = rx * cosY + rz * sinY;
        const rotatedZ = -rx * sinY + rz * cosY;

        p.x = rotatedX;
        p.z = rotatedZ;
        p.y = ry;

        const perspectiveFactor = CAMERA_DIST / (CAMERA_DIST - p.z);
        const screenX = p.x * perspectiveFactor;
        const screenY = p.y * perspectiveFactor;

        const depthOpacity = Math.max(0.1, Math.min(1, (p.z + ORB_RADIUS) / (2 * ORB_RADIUS)));
        
        const wave = Math.sin(p.originalY * 0.05 + pulseFactor);
        const pulseBrightness = Math.pow(Math.max(0, wave), 8) * 0.8;

        const finalOpacity = depthOpacity + pulseBrightness;
        const colorH = BASE_COLOR.h + pulseBrightness * (GLOW_COLOR.h - BASE_COLOR.h);
        const colorL = BASE_COLOR.l + pulseBrightness * (GLOW_COLOR.l - BASE_COLOR.l);

        ctx.beginPath();
        const size = Math.max(1, perspectiveFactor * 1.5 + pulseBrightness * 2.5);
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${colorH}, ${BASE_COLOR.s}%, ${colorL}%, ${finalOpacity})`;
        
        if (pulseBrightness > 0.3) {
          ctx.shadowColor = `hsla(${colorH}, ${BASE_COLOR.s}%, ${colorL}%, ${pulseBrightness * 0.5})`;
          ctx.shadowBlur = pulseBrightness * 12;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }

      animationFrameId.current = window.requestAnimationFrame(draw);
    };

    animationFrameId.current = window.requestAnimationFrame(draw);

    return () => {
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); 

  return (
    <div className="relative flex flex-col items-center justify-center w-[700px] h-[700px] select-none pointer-events-none origin-center transform will-change-transform">
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full pointer-events-none z-[-1]"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0) 65%)',
            filter: 'blur(30px)'
          }}
        />
      </div>
    </div>
  );
});

ThinkingOrb.displayName = 'ThinkingOrb';