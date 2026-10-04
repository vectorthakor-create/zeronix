import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-transparent via-cyan-400 to-cyan-300 relative transition-all duration-75 ease-out shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glow head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#00f2fe]" />
      </div>
    </div>
  );
}
