import React, { useState, useEffect } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { FadeIn } from './UI'; // Assuming you have this from previous code

// --- DATA: REAL DEALS (Personalized) ---
const TICKER_ITEMS = [
  "LATEST CLOSING: ₹150 CR TERM LOAN • SPECIALTY STEEL MFG • SPECIAL SITUATIONS",
  "RESOLUTION: ₹120 CR DEBT RESTRUCTURE • MEDICAL COLLEGE & HOSPITAL • HYDERABAD",
  "SETTLEMENT: ₹20 CR NPA CLOSURE • TECHNICAL EDUCATION GROUP • NORTH INDIA",
  "ADVISORY: STRATEGIC INVESTOR MEET • PRIVATE UNIVERSITY • SECTOR 25 PARTNERSHIP",
  "CREDIT RATING: CONSUMER ELECTRONICS MAJOR • STRUCTURED FINANCE • RATING UPGRADE",
  "MARKET UPDATE: IBC RECOVERIES UP 12% YOY • PRIVATE CREDIT YIELDS STABILIZING AT 14-16%"
];

const METHODOLOGY_LIST = [
  {
    id: "01",
    title: "Strategic Origination",
    desc: "Proprietary off-market sourcing beyond standard street flow."
  },
  {
    id: "02",
    title: "Forensic Diligence",
    desc: "Asset quality stress-testing and legal structural analysis."
  },
  {
    id: "03",
    title: "Bespoke Structuring",
    desc: "Cash-flow ring-fencing and downside protection engineering."
  },
  {
    id: "04",
    title: "Value Realization",
    desc: "Active monitoring and controlled exit mechanisms."
  }
];

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Auto-cycle through methodology steps for subtle motion
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % METHODOLOGY_LIST.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-[#050505] text-[#E5E5E5] overflow-hidden selection:bg-amber-900 selection:text-white font-sans">
      
      {/* --- BACKGROUND: NOISE & ATMOSPHERE (No Stock Photos) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* CSS Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* Subtle Lighting Spotlights */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 min-h-screen flex flex-col justify-center pt-20 pb-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: EDITORIAL COPY */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <FadeIn>
              {/* Monospace Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                <span className="font-mono text-xs text-stone-400 tracking-widest uppercase">
                  Ascent Pinnacle Capital • Est. 201X
                </span>
              </div>

              {/* Headline: Serif, Solid, Massive */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[0.95] text-white">
                Capital for <br />
                <span className="italic font-normal text-stone-200">Complexity.</span>
              </h1>

              {/* Subtext: Concise & High Contrast */}
              <p className="text-lg text-stone-400 max-w-xl leading-relaxed font-light border-l border-stone-800 pl-6">
                Bridging the gap between institutional dry powder and Indian mid-market special situations. 
                We do not find deals; we engineer them.
              </p>

              {/* Buttons: Text Links & Outlines (No "SaaS" Blobs) */}
              <div className="flex flex-wrap items-center gap-8 mt-4">
                <button 
                  onClick={() => onNavigate('SERVICES')}
                  className="group flex items-center gap-4 text-white hover:text-amber-500 transition-colors duration-300"
                >
                  <span className="text-sm tracking-[0.2em] uppercase border-b border-stone-700 pb-1 group-hover:border-amber-500 transition-all">
                    Explore Capabilities
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button 
                  onClick={() => onNavigate('TRANSACTIONS')}
                  className="px-6 py-3 border border-stone-800 hover:border-stone-600 text-stone-300 text-xs tracking-widest uppercase transition-all"
                >
                  View Track Record
                </button>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: INTERACTIVE "TERMINAL" CARD (Replacing the Grid) */}
          <div className="lg:col-span-5 hidden lg:block">
             <FadeIn delay={200}>
              <div className="relative">
                {/* Decorative border lines */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-stone-700" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-stone-700" />

                {/* The "Methodology" List - Editorial Style */}
                <div className="bg-[#0f0f0f] border border-stone-800/50 p-8 shadow-2xl backdrop-blur-sm">
                  <h3 className="font-mono text-xs text-amber-600 mb-8 uppercase tracking-widest">
                    // Execution Framework
                  </h3>
                  
                  <div className="space-y-6">
                    {METHODOLOGY_LIST.map((step, idx) => (
                      <div 
                        key={idx} 
                        className={`group cursor-pointer transition-all duration-500 ${activeStep === idx ? 'opacity-100 translate-x-2' : 'opacity-40 hover:opacity-70'}`}
                        onMouseEnter={() => setActiveStep(idx)}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-amber-600/80">.{step.id}</span>
                          <h4 className="font-serif text-xl text-stone-200">{step.title}</h4>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${activeStep === idx ? 'max-h-20 mt-2' : 'max-h-0'}`}>
                          <p className="font-mono text-[10px] text-stone-400 pl-8 border-l border-stone-800 ml-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Deal Highlight (Mini Tombstone) */}
                  <div className="mt-12 pt-6 border-t border-dashed border-stone-800">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-mono text-[10px] text-stone-500 mb-1">FEATURED TRANSACTION</p>
                        <p className="text-white font-medium">Evonith Steel</p>
                        <p className="text-xs text-stone-400">Term Loan Syndication</p>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-2xl text-amber-600">₹150 Cr</p>
                        <p className="font-mono text-[10px] text-stone-500">CLOSED Q4 2025</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* --- FOOTER: INFINITE TICKER (Bloomberg Style) --- */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0F0F0F] border-t border-stone-800 overflow-hidden py-3 z-20">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-xs font-mono tracking-wider text-stone-400">
                <span>{item}</span>
                <Plus className="w-3 h-3 text-amber-700 opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
