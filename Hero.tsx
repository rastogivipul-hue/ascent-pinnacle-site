import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
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

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

  return (
    <div className="relative w-full bg-[#050505] text-[#E5E5E5] overflow-hidden selection:bg-amber-900 selection:text-white font-sans">
      
      {/* --- BACKGROUND LAYER: THE "BREATHING LOOP" --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 1. The Noise Filter (Grain) - Keeps it feeling cinematic, not digital */}
        <div className="absolute inset-0 opacity-[0.05] z-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* 2. The Animated Blobs (The "Video" Replacement) */}
        {/* Blob A: Deep Indigo (Base) */}
        <div className="absolute top-0 left-[-10%] w-[70vw] h-[70vw] bg-indigo-950/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        
        {/* Blob B: Amber Gold (Highlight) */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-amber-900/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        
        {/* Blob C: Slate/Grey (Depth) */}
        <div className="absolute -bottom-32 left-[20%] w-[60vw] h-[60vw] bg-stone-900/40 rounded-full mix-blend-overlay filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 min-h-screen flex flex-col justify-center pt-12 pb-32">
        
        <div className="max-w-4xl">
            <FadeIn>
              {/* Monospace Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                <span className="font-mono text-xs text-stone-400 tracking-widest uppercase">
                  Ascent Pinnacle Capital • Est. 201X
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-light tracking-tight leading-[0.9] text-white">
                Capital for <br />
                <span className="italic font-normal text-stone-200">Complexity.</span>
              </h1>

              {/* Subtext */}
              <div className="mt-16 pl-0 md:pl-8 border-l-0 md:border-l border-stone-800">
                <p className="text-xl md:text-2xl text-stone-400 max-w-2xl leading-relaxed font-light">
                  Bridging the gap between institutional dry powder and Indian mid-market special situations. 
                  We do not find deals; we engineer them.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mt-20">
                <button 
                  onClick={() => onNavigate('SERVICES')}
                  className="group flex items-center gap-4 text-white hover:text-amber-500 transition-colors duration-300"
                >
                  <span className="text-lg tracking-[0.2em] uppercase border-b-2 border-stone-700 pb-2 group-hover:border-amber-500 transition-all">
                    Explore Capabilities
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </button>

                <button 
                  onClick={() => onNavigate('TRANSACTIONS')}
                  className="px-10 py-4 border border-stone-700 hover:border-stone-400 hover:bg-stone-900 text-stone-200 text-sm tracking-[0.25em] uppercase transition-all duration-300"
                >
                  View Track Record
                </button>
              </div>
            </FadeIn>
        </div>
      </div>

      {/* --- FOOTER: INFINITE TICKER --- */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0F0F0F] border-t border-stone-800 overflow-hidden py-4 z-20">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-xs font-mono tracking-wider text-stone-400">
                <span>{item}</span>
                <Plus className="w-3 h-3 text-amber-700 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
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

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

  return (
    <div className="relative w-full bg-[#050505] text-[#E5E5E5] overflow-hidden selection:bg-amber-900 selection:text-white font-sans">
      
      {/* --- BACKGROUND LAYER: THE "BREATHING LOOP" --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 1. The Noise Filter (Grain) - Keeps it feeling cinematic, not digital */}
        <div className="absolute inset-0 opacity-[0.05] z-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* 2. The Animated Blobs (The "Video" Replacement) */}
        {/* Blob A: Deep Indigo (Base) */}
        <div className="absolute top-0 left-[-10%] w-[70vw] h-[70vw] bg-indigo-950/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        
        {/* Blob B: Amber Gold (Highlight) */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-amber-900/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        
        {/* Blob C: Slate/Grey (Depth) */}
        <div className="absolute -bottom-32 left-[20%] w-[60vw] h-[60vw] bg-stone-900/40 rounded-full mix-blend-overlay filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 min-h-screen flex flex-col justify-center pt-12 pb-32">
        
        <div className="max-w-4xl">
            <FadeIn>
              {/* Monospace Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                <span className="font-mono text-xs text-stone-400 tracking-widest uppercase">
                  Ascent Pinnacle Capital • Est. 201X
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-light tracking-tight leading-[0.9] text-white">
                Capital for <br />
                <span className="italic font-normal text-stone-200">Complexity.</span>
              </h1>

              {/* Subtext */}
              <div className="mt-16 pl-0 md:pl-8 border-l-0 md:border-l border-stone-800">
                <p className="text-xl md:text-2xl text-stone-400 max-w-2xl leading-relaxed font-light">
                  Bridging the gap between institutional dry powder and Indian mid-market special situations. 
                  We do not find deals; we engineer them.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 mt-20">
                <button 
                  onClick={() => onNavigate('SERVICES')}
                  className="group flex items-center gap-4 text-white hover:text-amber-500 transition-colors duration-300"
                >
                  <span className="text-lg tracking-[0.2em] uppercase border-b-2 border-stone-700 pb-2 group-hover:border-amber-500 transition-all">
                    Explore Capabilities
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </button>

                <button 
                  onClick={() => onNavigate('TRANSACTIONS')}
                  className="px-10 py-4 border border-stone-700 hover:border-stone-400 hover:bg-stone-900 text-stone-200 text-sm tracking-[0.25em] uppercase transition-all duration-300"
                >
                  View Track Record
                </button>
              </div>
            </FadeIn>
        </div>
      </div>

      {/* --- FOOTER: INFINITE TICKER --- */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0F0F0F] border-t border-stone-800 overflow-hidden py-4 z-20">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-xs font-mono tracking-wider text-stone-400">
                <span>{item}</span>
                <Plus className="w-3 h-3 text-amber-700 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
