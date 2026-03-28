'use client';

import { useEffect, useRef, useState } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // English alphabet characters that fall down
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const fontSize = 40;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops for each column - spread them across the full height
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start from top (above canvas)
    }

    let animationId: number;
    const draw = () => {
      // Slower fade for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text falling down
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.globalAlpha = 0.5;

      for (let i = 0; i < columns; i++) {
        // Draw multiple characters in a vertical line (creates longer streams)
        const lineLength = 8; // Number of characters in each falling line
        
        for (let j = 0; j < lineLength; j++) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          
          // Fade effect - characters get dimmer as they go up
          ctx.globalAlpha = 0.5 - (j * 0.05);
          
          // Draw characters vertically
          ctx.fillText(text, i * fontSize, drops[i] - (j * fontSize));
        }
        
        ctx.globalAlpha = 0.5;

        // Move down each frame (reduced speed)
        drops[i] += fontSize * 0.07;

        // When character reaches bottom, reset to top
        if (drops[i] > canvas.height) {
          drops[i] = -fontSize;
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 -z-10"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};
