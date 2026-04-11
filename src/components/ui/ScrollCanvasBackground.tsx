import { useRef, useEffect, useState, useCallback, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 90; 
const IMAGE_BASE_PATH = '/sequence/frame_'; 
const IMAGE_EXTENSION = '.webp';

const getFrameUrl = (index: number) => {
  const paddedIndex = String(index).padStart(4, '0');
  return `${IMAGE_BASE_PATH}${paddedIndex}${IMAGE_EXTENSION}`;
};

export const ScrollCanvasBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // <-- Restaurado
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const airpodsRef = useRef({ frame: 1 });

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoaded(true); 
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawImageAtFrame = useCallback((frameIndex: number, currentImages: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const safeIndex = Math.min(Math.max(1, Math.round(frameIndex)), FRAME_COUNT);
    const img = currentImages[safeIndex - 1]; 
    if (!ctx || !canvas || !img) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawWidth, drawHeight, drawX, drawY;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (isLoaded && images.length > 0) {
        drawImageAtFrame(airpodsRef.current.frame, images);
      }
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, images, drawImageAtFrame]); 

  useGSAP(() => {
    if (!isLoaded || images.length === 0 || !containerRef.current) return;
    drawImageAtFrame(1, images);

    gsap.to(airpodsRef.current, {
      frame: FRAME_COUNT, 
      snap: 'frame', 
      ease: 'none', 
      scrollTrigger: {
        trigger: containerRef.current, // Apunta a sí mismo
        start: 'top top', 
        end: '+=100%', 
        scrub: 1, 
        pinnedContainer: "#hero-section", // <-- ¡CLAVE! Avisa que vive dentro de un pin
      },
      onUpdate: () => {
        drawImageAtFrame(airpodsRef.current.frame, images);
      },
    });
  }, { scope: containerRef, dependencies: [isLoaded, images, drawImageAtFrame] }); 

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full overflow-hidden will-change-transform">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <span className="font-mono text-xs text-orange-400 animate-pulse">LOADING SEQUENCE...</span>
        </div>
      )}
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
});

ScrollCanvasBackground.displayName = 'ScrollCanvasBackground';