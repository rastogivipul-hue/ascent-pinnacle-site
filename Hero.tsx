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
  onNavigate: (page: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full min-h-[95vh] flex items-center bg-slate-950 text-white overflow-hidden group">
      
      {/* --- Cinematic Background Treatment --- */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {/* Image with slow zoom effect */}
        <div className="absolute inset-0 bg-slate-950">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Financial District Architecture" 
            className="w-full h-full object-cover opacity-50 grayscale contrast-125 transform scale-100 transition-transform duration-[20s] ease-in-out group-hover:scale-110"
          />
        </div>
        
        {/* Layered Gradients for maximum text readability */}
        <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-4xl">
          <FadeIn>
            {/* Eyebrow - High precision spacing */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-amber-500"></span>
              <span className="text-amber-500 font-semibold tracking-[0.2em] text-[11px] uppercase">
                Private Credit & Special Situations
              </span>
            </div>

            {/* Headline - Tightened leading for impact */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.05] mb-8 text-white drop-shadow-lg">
              Structuring Capital for <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Complex Value Creation.
              </span>
            </h1>

            {/* Subtext - Increased readability */}
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light border-l border-slate-700 pl-6">
              Ascent Pinnacle Capital is an integrated investment platform specializing in the Indian mid-market. 
              We bridge the gap between institutional capital and distressed opportunities, delivering 
              bespoke debt syndication and strategic advisory.
            </p>

            {/* Action Buttons - Refined interaction states */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button 
                onClick={() => onNavigate('SERVICES')}
                className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-amber-600/20 border border-transparent rounded-sm"
              >
                <span className="flex items-center gap-3">
                  Our Capabilities 
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => onNavigate('TRANSACTIONS')}
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/30 font-medium text-sm tracking-widest uppercase transition-all duration-300 rounded-sm"
              >
                <span className="flex items-center gap-3">
                  View Track Record
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                </span>
              </button>
            </div>
          </FadeIn>
        </div>

        {/* --- Financial Indicators / Stats --- */}
        {/* Moved slightly lower to separate from hero text */}
        <div className="mt-24 lg:mt-32">
          <FadeIn delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800 border-t border-b border-slate-800 bg-slate-950/40 backdrop-blur-md">
              
              {/* Stat Item 1: Transactions */}
              <div className="group p-6 pl-0 md:pl-0 flex items-center gap-5 hover:bg-white/5 transition-colors duration-500">
                <div className="p-3 rounded-full bg-slate-900 border border-slate-700/50 group-hover:border-amber-500/50 transition-colors">
                  <Landmark className="text-amber-500" size={24} strokeWidth={1.25} />
                </div>
                <div>
                  <div className="text-3xl font-serif text-white leading-none mb-1">
                    <CountUp end={10} prefix="₹" suffix="B+" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                    Transactions
                  </p>
                </div>
              </div>

              {/* Stat Item 2: Expertise */}
              <div className="group p-6 md:pl-8 flex items-center gap-5 hover:bg-white/5 transition-colors duration-500">
                <div className="p-3 rounded-full bg-slate-900 border border-slate-700/50 group-hover:border-amber-500/50 transition-colors">
                  <ShieldCheck className="text-amber-500" size={24} strokeWidth={1.25} />
                </div>
                <div>
                  <div className="text-3xl font-serif text-white leading-none mb-1">
                    <CountUp end={40} suffix="+" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                    Years Experience
                  </p>
                </div>
              </div>

              {/* Stat Item 3: Partners */}
              <div className="group p-6 md:pl-8 flex items-center gap-5 hover:bg-white/5 transition-colors duration-500">
                <div className="p-3 rounded-full bg-slate-900 border border-slate-700/50 group-hover:border-amber-500/50 transition-colors">
                  <Handshake className="text-amber-500" size={24} strokeWidth={1.25} />
                </div>
                <div>
                  <div className="text-3xl font-serif text-white leading-none mb-1">
                    <CountUp end={25} suffix="+" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                    Key Partners
                  </p>
                </div>
              </div>

              {/* Stat Item 4: Reach */}
              <div className="group p-6 md:pl-8 flex items-center gap-5 hover:bg-white/5 transition-colors duration-500">
                <div className="p-3 rounded-full bg-slate-900 border border-slate-700/50 group-hover:border-amber-500/50 transition-colors">
                  <Globe className="text-amber-500" size={24} strokeWidth={1.25} />
                </div>
                <div>
                  <div className="text-2xl font-serif text-white leading-none mb-2 pt-1">
                    Pan-Asia
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                    Network Reach
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden lg:block">
        <ChevronDown className="text-slate-400" size={24} />
      </div>

    </div>
  );
};

export default Hero;
