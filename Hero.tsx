import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Landmark, 
  Handshake, 
  ShieldCheck, 
  Globe,
  ChevronDown 
} from 'lucide-react';
import { CountUp, FadeIn } from './UI';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  
  // Data-driven stats configuration for cleaner rendering
  const stats = [
    { 
      id: 1, 
      icon: Landmark, 
      label: 'Transactions', 
      value: 10, 
      prefix: '₹', 
      suffix: 'B+' 
    },
    { 
      id: 2, 
      icon: ShieldCheck, 
      label: 'Combined Experience', 
      value: 40, 
      prefix: '', 
      suffix: ' Yrs' 
    },
    { 
      id: 3, 
      icon: Handshake, 
      label: 'Key Partners', 
      value: 25, 
      prefix: '', 
      suffix: '+' 
    },
    { 
      id: 4, 
      icon: Globe, 
      label: 'Network Reach', 
      value: 0, // Placeholder for non-numeric or text-based stat
      customDisplay: 'Pan-Asia',
      prefix: '', 
      suffix: '' 
    },
  ];

  return (
    <div className="relative w-full min-h-[95vh] flex items-center bg-slate-950 text-white overflow-hidden group">
      
      {/* --- Cinematic Background Layer --- */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {/* Base Image with slow parralax/zoom */}
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Financial District Architecture" 
            className="w-full h-full object-cover opacity-60 grayscale contrast-[1.15] transform scale-100 transition-transform duration-[25s] ease-in-out group-hover:scale-105"
          />
        </div>
        
        {/* Gradient Stack for Depth & Readability */}
        {/* 1. Darkens the image generally */}
        <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
        {/* 2. Left-to-right fade to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-900/10" />
        {/* 3. Radial highlight to create a focal point behind the text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,41,59,0.4),transparent_70%)]" />
        {/* 4. Bottom fade for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* --- Main Content Area --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12 lg:py-0 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-4xl">
          <FadeIn>
            
            {/* Tagline / Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              <span className="text-amber-500 font-bold tracking-[0.15em] text-xs uppercase bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20 backdrop-blur-sm">
                Private Credit & Special Situations
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.1] mb-8 text-white drop-shadow-2xl">
              Structuring Capital for <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  Complex Value Creation.
                </span>
                {/* Subtle glow behind key phrase */}
                <span className="absolute -inset-1 bg-white/5 blur-xl z-0"></span>
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl font-light border-l-2 border-slate-700/50 pl-6">
              Ascent Pinnacle Capital is an integrated investment platform specializing in the Indian mid-market. 
              We bridge the gap between institutional capital and distressed opportunities, delivering 
              bespoke debt syndication and strategic advisory.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16 lg:mb-20">
              <button 
                onClick={() => onNavigate('SERVICES')}
                className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-amber-500/20 border border-transparent rounded-sm overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center justify-center sm:justify-start gap-3">
                  Our Capabilities 
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => onNavigate('TRANSACTIONS')}
                className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20 font-semibold text-sm tracking-widest uppercase transition-all duration-300 rounded-sm shadow-lg hover:shadow-white/5"
              >
                <span className="flex items-center justify-center sm:justify-start gap-3">
                  View Track Record
                  <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                </span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* --- Institutional Stats Grid --- */}
        <FadeIn delay={300}>
          <div className="w-full border-t border-b border-white/10 bg-slate-950/30 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="group relative p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  {/* Icon Container */}
                  <div className="p-3 rounded-full bg-slate-900/80 border border-white/10 group-hover:border-amber-500/50 transition-colors">
                    <stat.icon className="text-amber-500" size={20} strokeWidth={1.5} />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-white leading-none mb-1">
                      {stat.customDisplay ? (
                        stat.customDisplay
                      ) : (
                        <CountUp 
                          end={stat.value} 
                          prefix={stat.prefix} 
                          suffix={stat.suffix} 
                          duration={2.5}
                        />
                      )}
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </FadeIn>
      </div>

      {/* Animated Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hidden lg:flex">
        <span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
        <div className="animate-bounce">
          <ChevronDown className="text-slate-400" size={20} />
        </div>
      </div>

    </div>
  );
};

export default Hero;
