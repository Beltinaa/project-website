import { useEffect, useRef, useState } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateState = () => {
      setEnabled(!mobileQuery.matches && !motionQuery.matches);
    };

    updateState();
    mobileQuery.addEventListener("change", updateState);
    motionQuery.addEventListener("change", updateState);

    return () => {
      mobileQuery.removeEventListener("change", updateState);
      motionQuery.removeEventListener("change", updateState);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }[] = [];

    const resize = () => {
      const { offsetWidth, offsetHeight } = canvas.parentElement ?? canvas;
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;

      const count = Math.min(90, Math.floor((offsetWidth * offsetHeight) / 18000));
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        const useAccent = i % 4 === 0;
        particles.push({
          x: Math.random() * offsetWidth,
          y: Math.random() * offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.4 + 0.6,
          color: useAccent ? "rgba(201, 168, 76, 0.15)" : "rgba(255, 255, 255, 0.12)",
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        context.beginPath();
        context.fillStyle = particle.color;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            const opacity = 0.12 * (1 - distance / 120);
            context.strokeStyle = `rgba(201, 168, 76, ${opacity})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
};

export default ParticleBackground;
