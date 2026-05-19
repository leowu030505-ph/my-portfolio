import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../App';

interface LightBeam {
  angle: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
  color: string;
  distance: number;
  maxDistance: number;
}

const ParticleBeamBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useAppContext();
  const animRef = useRef<number>();
  const beamsRef = useRef<LightBeam[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const maxBeams = isMobile ? 40 : 100;

    const colors = isDark
      ? ['rgba(102, 179, 255, ', 'rgba(255, 153, 153, ', 'rgba(187, 153, 255, ', 'rgba(153, 238, 153, ']
      : ['rgba(102, 179, 255, ', 'rgba(255, 153, 153, ', 'rgba(187, 153, 255, ', 'rgba(153, 238, 153, '];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX - canvas.width / 2) / canvas.width,
        y: (e.clientY - canvas.height / 2) / canvas.height
      };
    };
    window.addEventListener('mousemove', onMouseMove);

    const createBeam = (): LightBeam => {
      const angle = Math.random() * Math.PI * 2;
      return {
        angle,
        length: Math.random() * 210 + 105,
        speed: (Math.random() * 3 + 2) * 1.2 * 1.15,
        opacity: 0,
        width: Math.random() * 2 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        distance: 0,
        maxDistance: Math.max(canvas.width, canvas.height) * 0.8
      };
    };

    beamsRef.current = [];
    for (let i = 0; i < maxBeams; i++) {
      beamsRef.current.push(createBeam());
    }

    const getBrightnessMultiplier = (distFromCenter: number) => {
      if (distFromCenter < 150) return 1.5;
      if (distFromCenter < 300) return 1.3;
      return 1.0;
    };

    const getAlphaMultiplier = (distFromCenter: number) => {
      if (distFromCenter < 150) return 2.0;
      if (distFromCenter < 300) return 1.5;
      return 1.0;
    };

    const drawBeam = (beam: LightBeam) => {
      const centerX = canvas.width / 2 + mouseRef.current.x * 30;
      const centerY = canvas.height / 2 + mouseRef.current.y * 30;

      const headX = centerX + Math.cos(beam.angle) * beam.distance;
      const headY = centerY + Math.sin(beam.angle) * beam.distance;
      const tailX = centerX + Math.cos(beam.angle) * (beam.distance - beam.length);
      const tailY = centerY + Math.sin(beam.angle) * (beam.distance - beam.length);

      const distFromCenter = Math.sqrt(
        Math.pow(headX - canvas.width / 2, 2) + Math.pow(headY - canvas.height / 2, 2)
      );

      const brightnessMult = getBrightnessMultiplier(distFromCenter);
      const alphaMult = getAlphaMultiplier(distFromCenter);

      const baseAlpha = Math.min(beam.opacity * 0.4, 0.4);
      const alpha = Math.min(baseAlpha * alphaMult, 0.8);
      const headAlpha = Math.min(baseAlpha * 1.5 * brightnessMult, 0.84);

      const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
      gradient.addColorStop(0, beam.color + headAlpha + ')');
      gradient.addColorStop(0.15, beam.color + alpha + ')');
      gradient.addColorStop(0.5, beam.color + (alpha * 0.4) + ')');
      gradient.addColorStop(0.8, beam.color + (alpha * 0.1) + ')');
      gradient.addColorStop(1, beam.color + '0)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = beam.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(headX, headY);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      ctx.fillStyle = beam.color + headAlpha + ')';
      ctx.beginPath();
      ctx.arc(headX, headY, beam.width * 0.8, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawCenterGlow = (time: number) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const breathe = 0.95 + 0.15 * Math.sin(time / 3000 * Math.PI * 2);

      const outerRadius = 120 * breathe;

      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, outerRadius
      );

      if (isDark) {
        glowGradient.addColorStop(0, 'rgba(200, 220, 255, 0.8)');
        glowGradient.addColorStop(0.08, 'rgba(102, 179, 255, 0.3)');
        glowGradient.addColorStop(0.4, 'rgba(187, 153, 255, 0.1)');
        glowGradient.addColorStop(1, 'rgba(187, 153, 255, 0)');
      } else {
        glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        glowGradient.addColorStop(0.08, 'rgba(102, 179, 255, 0.3)');
        glowGradient.addColorStop(0.4, 'rgba(187, 153, 255, 0.1)');
        glowGradient.addColorStop(1, 'rgba(187, 153, 255, 0)');
      }

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawCenterMask = () => {
      const maskRadius = 600;
      const maskGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, maskRadius
      );
      const bgColor = isDark ? '18, 18, 18' : '255, 255, 255';
      maskGradient.addColorStop(0, `rgba(${bgColor}, 1)`);
      maskGradient.addColorStop(0.6, `rgba(${bgColor}, 0.85)`);
      maskGradient.addColorStop(0.85, `rgba(${bgColor}, 0.4)`);
      maskGradient.addColorStop(1, `rgba(${bgColor}, 0)`);

      ctx.fillStyle = maskGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = (timestamp: number) => {
      timeRef.current = timestamp;
      const bgColor = isDark ? '#121212' : '#ffffff';
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawCenterGlow(timestamp);

      beamsRef.current.forEach(beam => {
        beam.distance += beam.speed;

        if (beam.distance < 50) {
          beam.opacity = beam.distance / 50;
        } else if (beam.distance > beam.maxDistance - 150) {
          beam.opacity = (beam.maxDistance - beam.distance) / 150;
        } else {
          beam.opacity = 1;
        }

        if (beam.distance > beam.maxDistance || beam.opacity <= 0) {
          const newBeam = createBeam();
          Object.assign(beam, newBeam);
        }

        drawBeam(beam);
      });

      drawCenterMask();

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBeamBackground;
