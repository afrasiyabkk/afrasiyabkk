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
    const fontSize = 12;
    
    // Fill entire width with columns
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops for each column
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    let animationId: number;
    const draw = () => {
      // Slight fade for trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text falling down
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < columns; i++) {
        // Draw multiple characters in a vertical line (streaming effect)
        const lineLength = 40; // Number of characters in each falling stream
        
        for (let j = 0; j < lineLength; j++) {
          const text = chars.charAt(Math.floor(Math.random() * chars.length));
          
          // Fade effect - characters get dimmer as they go up the stream
          const alpha = 0.8 - (j * 0.05);
          ctx.globalAlpha = Math.max(0.1, alpha);
          
          // Draw characters vertically at each column
          ctx.fillText(text, i * fontSize, drops[i] - (j * fontSize));
        }

        // Move down each frame
        drops[i] += fontSize * 0.8;

        // When character reaches bottom, randomly reset to top
        if (drops[i] > canvas.height + lineLength) {
          drops[i] = (Math.random() - 0.5) * 100;
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
