import React, { useState, useEffect } from 'react';
import { ArrowRight, Plus, ChevronRight } from 'lucide-react';
import { FadeIn } from './UI';

// --- DATA: ANONYMIZED DEAL TICKER ---
const TICKER_ITEMS = [
  "LATEST CLOSING: ₹150 CR TERM LOAN • SPECIALTY STEEL MFG • SPECIAL SITUATIONS",
  "RESOLUTION: ₹120 CR DEBT RESTRUCTURE • MEDICAL COLLEGE & HOSPITAL • HYDERABAD",
  "SETTLEMENT: ₹20 CR NPA CLOSURE • TECHNICAL EDUCATION GROUP • NORTH INDIA",
  "ADVISORY: STRATEGIC INVESTOR MEET • PRIVATE UNIVERSITY • SECTOR 25 PARTNERSHIP",
  "CREDIT RATING: CONSUMER ELECTRONICS MAJOR • STRUCTURED FINANCE • RATING UPGRADE",
  "MARKET UPDATE: IBC RECOVERIES UP 12% YOY • PRIVATE CREDIT YIELDS STABILIZING AT 14-16%"
];

// --- DATA: EXECUTION FRAMEWORK ---
const METHODOLOGY_LIST = [
  { id: "01", title: "Origination", desc: "Proprietary off-market sourcing." },
  { id: "02", title: "Diligence", desc: "Forensic asset stress-testing." },
  { id: "03", title: "Structuring", desc: "Downside protection engineering." },
  { id: "04", title: "Exit", desc: "Controlled value realization." }
];

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Auto-cycle through methodology steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % METHODOLOGY_LIST.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-[#050505] text-[#E5E5E5] overflow-hidden font-sans selection:bg-amber-900 selection:text-white">
      
      {/* ========================================================================
          INTERNAL STYLES: GUARANTEES ANIMATION WORKS INSTANTLY
          ========================================================================
      */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-blob { animation: blob 20s infinite; }
        .animate-marquee { animation: marquee 45s linear infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* --- BACKGROUND LAYER: THE "BREATHING LOOP" --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Noise Filter for Texture */}
        <div className="absolute inset-0 opacity-[0.06] z-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* Animated Blobs - Colors brightened to be visible against black */}
        <div className="absolute top-0 left-[-10%] w-[70vw] h-[70vw] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-amber-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-[20%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 min-h-screen flex flex-col justify-center pt-12 pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: HEADLINE & STRATEGY (7 Cols) --- */}
          <div className="lg:col-span-7">
            <FadeIn>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                <span className="font-mono text-[10px] md:text-xs text-stone-400 tracking-[0.2em] uppercase">
                  Ascent Pinnacle Capital • Est. 201X
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-serif font-medium tracking-tight leading-[0.95] text-white mb-10">
                Capital for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-400 to-stone-600 italic font-light">
                  Complexity.
                </span>
              </h1>

              {/* Editorial Subtext */}
              <div className="pl-6 border-l border-stone-800 mb-12">
                <p className="text-lg md:text-xl text-stone-400 max-w-xl leading-relaxed font-light">
                  Bridging the gap between institutional dry powder and Indian mid-market special situations. 
                  <span className="text-stone-200 block mt-2">We do not find deals; we engineer them.</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button 
                  onClick={() => onNavigate('SERVICES')}
                  className="group relative px-8 py-4 bg-white text-black font-medium text-xs tracking-[0.15em] uppercase hover:bg-stone-200 transition-colors"
                >
                  Explore Capabilities
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black group-hover:h-[2px] transition-all"></div>
                </button>

                <button 
                  onClick={() => onNavigate('TRANSACTIONS')}
                  className="group flex items-center gap-3 text-stone-400 hover:text-white transition-colors text-xs tracking-[0.15em] uppercase"
                >
                  View Track Record
                  <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* --- RIGHT COLUMN: EXECUTION CARD (5 Cols) --- */}
          <div className="lg:col-span-5 hidden lg:block">
            <FadeIn delay={200}>
              <div className="relative">
                {/* Glassmorphism Card */}
                <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 rounded-sm shadow-2xl">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <h3 className="font-mono text-[10px] text-amber-500 uppercase tracking-widest">
                      // Execution Framework
                    </h3>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-stone-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-stone-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-stone-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Methodology List */}
                  <div className="space-y-1 relative">
                    {/* Vertical Connector Line */}
                    <div className="absolute top-2 left-[19px] bottom-6 w-[1px] bg-stone-800 z-0"></div>

                    {METHODOLOGY_LIST.map((step, idx) => (
                      <div 
                        key={idx} 
                        className={`relative z-10 group flex items-start gap-5 p-3 rounded transition-all duration-500 cursor-default
                          ${activeStep === idx ? 'bg-white/[0.03] border-l-2 border-amber-500' : 'border-l-2 border-transparent hover:bg-white/[0.01]'}`}
                        onMouseEnter={() => setActiveStep(idx)}
                      >
                        <span className={`font-mono text-xs mt-1 transition-colors ${activeStep === idx ? 'text-amber-500' : 'text-stone-600'}`}>
                          {step.id}
                        </span>
                        <div>
                          <h4 className={`font-serif text-lg leading-none transition-colors ${activeStep === idx ? 'text-white' : 'text-stone-500'}`}>
                            {step.title}
                          </h4>
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeStep === idx ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <p className="text-[10px] text-stone-400 font-mono tracking-wide">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Tombstone (Featured Deal) */}
                  <div className="mt-8 pt-6 border-t border-dashed border-white/10">
                    <div className="bg-stone-900/50 border border-white/5 p-4 flex justify-between items-end hover:border-amber-500/30 transition-colors cursor-pointer">
                      <div>
                        <p className="text-[9px] text-stone-500 font-mono uppercase mb-1">Featured Closing</p>
                        <p className="text-white font-medium text-sm">Medical College & Hospital</p>
                        <p className="text-[10px] text-stone-400">Debt Resolution & Fundraising</p>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-xl text-amber-500">₹120 Cr</p>
                        <p className="text-[9px] text-stone-600 font-mono uppercase">Hyderabad</p>
                      </div>
                    </div>
                  </div>

                </div>
                
                {/* Decorative Elements around card */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-amber-500/50"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-amber-500/50"></div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* --- FOOTER: INFINITE TICKER --- */}
      <div className="absolute bottom-0 left-0 w-full bg-[#080808] border-t border-white/5 overflow-hidden py-3 z-30">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 min-w-full">
            {/* Duplicated list for seamless scrolling */}
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-[10px] font-mono tracking-[0.1em] text-stone-400 uppercase">
                <Plus className="w-2 h-2 text-amber-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
