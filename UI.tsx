import React, { useEffect, useState, useRef } from 'react';

// --- Scroll Reveal Animation ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
  fullWidth?: boolean; // Added this to prevent TypeScript error in Hero.tsx
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up',
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-12';
        case 'left': return '-translate-x-12';
        case 'right': return 'translate-x-12';
        default: return '';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className} ${fullWidth ? 'w-full' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Count Up Animation ---
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const domRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeVal * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasAnimated, end, duration]);

  return <span ref={domRef}>{prefix}{count}{suffix}</span>;
};
