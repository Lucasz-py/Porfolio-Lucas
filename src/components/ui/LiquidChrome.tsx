import React, { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
  isAnimated?: boolean;
}

export const LiquidChrome: React.FC<LiquidChromeProps> = ({
  baseColor = [0.1, 0.1, 0.1],
  speed = 0.2,
  amplitude = 0.5,
  frequencyX = 3,
  frequencyY = 2,
  interactive = true,
  isAnimated = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAnimatedRef = useRef(isAnimated);
  const animationControlRef = useRef<{ play: () => void, pause: () => void } | null>(null);

  useEffect(() => {
    isAnimatedRef.current = isAnimated;
    if (isAnimated) {
      animationControlRef.current?.play();
    } else {
      animationControlRef.current?.pause();
    }
  }, [isAnimated]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec3 refPalette(float t) {
        t = clamp(t, 0.0, 1.0);
        vec3 black   = vec3(0.00, 0.00, 0.00);
        vec3 blue    = vec3(0.08, 0.40, 1.00);
        vec3 purple  = vec3(0.55, 0.05, 0.85);
        vec3 orange  = vec3(1.00, 0.20, 0.00);
        vec3 tip     = vec3(1.00, 0.38, 0.02);

        if (t < 0.20) return mix(black,  blue,   t / 0.20);
        if (t < 0.45) return mix(blue,   purple, (t - 0.20) / 0.25);
        if (t < 0.75) return mix(purple, orange, (t - 0.45) / 0.30);
                      return mix(orange, tip,    (t - 0.75) / 0.25);
      }

      vec2 warpUV(vec2 uv, float t) {
        uv.x += uAmplitude / 1.0 * cos(1.0 * uFrequencyX * uv.y + t * 1.00 + 0.00);
        uv.y += uAmplitude / 1.0 * cos(1.0 * uFrequencyY * uv.x + t * 1.00 + 1.57);
        uv.x += uAmplitude / 2.0 * cos(1.9 * uFrequencyX * uv.y + t * 0.97 + 2.39);
        uv.y += uAmplitude / 2.0 * cos(2.1 * uFrequencyY * uv.x + t * 0.93 + 3.71);
        uv.x += uAmplitude / 3.0 * cos(3.1 * uFrequencyX * uv.y + t * 1.04 + 1.13);
        uv.y += uAmplitude / 3.0 * cos(2.8 * uFrequencyY * uv.x + t * 0.88 + 4.52);
        uv.x += uAmplitude / 4.0 * cos(4.3 * uFrequencyX * uv.y + t * 1.08 + 5.83);
        uv.y += uAmplitude / 4.0 * cos(3.7 * uFrequencyY * uv.x + t * 0.82 + 0.71);
        uv.x += uAmplitude / 5.0 * cos(5.2 * uFrequencyX * uv.y + t * 0.95 + 2.94);
        uv.y += uAmplitude / 5.0 * cos(4.6 * uFrequencyY * uv.x + t * 1.12 + 3.28);
        uv.x += uAmplitude / 6.0 * cos(6.1 * uFrequencyX * uv.y + t * 0.79 + 1.88);
        uv.y += uAmplitude / 6.0 * cos(5.5 * uFrequencyY * uv.x + t * 1.03 + 4.19);
        return uv;
      }

      float strand(vec2 uv, vec2 origin, float width, float timeOffset) {
        vec2 warped = warpUV(uv - origin, uTime + timeOffset);
        float d = length(warped);
        float heat = 1.0 - clamp(d / width, 0.0, 1.0);
        return pow(heat, 2.2);
      }

      vec4 renderImage(vec2 uvCoord) {
        float ar = uResolution.x / uResolution.y;
        vec2 uv = (2.0 * uvCoord - 1.0) * vec2(ar, 1.0);

        vec2 diff = uvCoord - uMouse;
        float dist = length(diff);
        float ripple = sin(9.0 * dist - uTime * 2.5) * 0.025 * exp(-dist * 20.0);
        uv += normalize(diff + 0.0001) * ripple;

        float h = 0.0;
        h = max(h, strand(uv, vec2(-ar * 0.65,  0.10), 1.05, 0.00));
        h = max(h, strand(uv, vec2( ar * 0.60, -0.15), 1.00, 1.80));
        h = max(h, strand(uv, vec2( ar * 0.05,  0.70), 0.90, 3.50));
        h = max(h, strand(uv, vec2(-ar * 0.20, -0.65), 0.85, 2.20));
        h = max(h, strand(uv, vec2( ar * 0.75,  0.55), 0.80, 4.80));
        h = max(h, strand(uv, vec2(-ar * 0.80, -0.50), 0.75, 5.60));
        h = clamp(h, 0.0, 1.0);

        vec3 col = refPalette(h);
        float mask = smoothstep(0.04, 0.22, h);
        col *= mask;

        return vec4(col, 1.0);
      }

      void main() {
        vec4 col = vec4(0.0);
        int samples = 0;
        for (int i = -1; i <= 1; i++) {
          for (int j = -1; j <= 1; j++) {
            vec2 offset = vec2(float(i), float(j)) / min(uResolution.x, uResolution.y);
            col += renderImage(vUv + offset);
            samples++;
          }
        }
        gl_FragColor = col / float(samples);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime:       { value: 0 },
        uResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height]) },
        uAmplitude:  { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse:      { value: new Float32Array([0.5, 0.5]) }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      const r = program.uniforms.uResolution.value as Float32Array;
      r[0] = gl.canvas.width; r[1] = gl.canvas.height; r[2] = gl.canvas.width / gl.canvas.height;
      
      // Si está pausado, mantenemos el frame fijo en caso de que redimensionen la pantalla
      if (!isAnimatedRef.current) {
        program.uniforms.uTime.value = 5.0;
        renderer.render({ scene: mesh });
      }
    }
    window.addEventListener('resize', resize);
    resize();

    function handleMouseMove(e: MouseEvent) {
      if (!isAnimatedRef.current) return;
      const rect = container.getBoundingClientRect();
      const m = program.uniforms.uMouse.value as Float32Array;
      m[0] = (e.clientX - rect.left) / rect.width;
      m[1] = 1 - (e.clientY - rect.top) / rect.height;
    }
    function handleTouchMove(e: TouchEvent) {
      if (!isAnimatedRef.current) return;
      if (!e.touches.length) return;
      const t = e.touches[0];
      const rect = container.getBoundingClientRect();
      const m = program.uniforms.uMouse.value as Float32Array;
      m[0] = (t.clientX - rect.left) / rect.width;
      m[1] = 1 - (t.clientY - rect.top) / rect.height;
    }

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleTouchMove);
    }

    let animId: number | null = null;
    let isVisible = true;

    function updateLoop(t: number) {
      // CORRECCIÓN DEL BUG: Si no está activo o no se ve, anulamos el ID para poder reactivarlo luego
      if (!isAnimatedRef.current || !isVisible) {
        animId = null;
        return;
      }
      
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
      animId = requestAnimationFrame(updateLoop);
    }

    animationControlRef.current = {
      play: () => {
        // Aseguramos que solo arranque si no hay ya un ciclo activo y es visible
        if (animId === null && isVisible && isAnimatedRef.current) {
          animId = requestAnimationFrame(updateLoop);
        }
      },
      pause: () => {
        if (animId !== null) {
          cancelAnimationFrame(animId);
          animId = null;
        }
        program.uniforms.uTime.value = 5.0; 
        renderer.render({ scene: mesh });
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        // Si volvemos a ver el Hero y los efectos están activados, arranca
        if (isAnimatedRef.current) {
          animationControlRef.current?.play();
        } else {
          // Si entramos pero están desactivados, garantizamos el fotograma bonito
          program.uniforms.uTime.value = 5.0;
          renderer.render({ scene: mesh });
        }
      } else {
        // CORRECCIÓN: Si salimos de pantalla, matamos el ciclo de inmediato
        if (animId !== null) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      }
    });
    observer.observe(container);

    // Arranque inicial según estado
    if (isAnimatedRef.current) {
      animationControlRef.current.play();
    } else {
      animationControlRef.current.pause();
    }

    container.appendChild(gl.canvas);

    return () => {
      observer.disconnect();
      if (animId !== null) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      if (interactive) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
      }
      gl.canvas.parentElement?.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return <div ref={containerRef} className="w-full h-full" {...props} />;
};

export default LiquidChrome;