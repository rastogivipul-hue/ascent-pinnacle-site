// src/Hero.tsx
import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Landmark, 
  Handshake, 
  ShieldCheck, 
  Globe,
  ChevronDown,
  Search,
  FileSearch,
  Layers,
  Rocket, // Used for Deployment
  Target, // Used for Exit
  Building,
  Factory,
  Radio
} from 'lucide-react';

import { CountUp, FadeIn } from './UI';

// --- DATA CONSTANTS (REWRITTEN FOR MARS/SATURN AUTHORITY) ---

const METHODOLOGY_STEPS = [
  {
    title: "Thesis Origination", // Changed from "Strategic Origination"
    description: " identifying mispriced risk and off-market mandates.",
    icon: Search
  },
  {
    title: "Forensic Diligence", // Stronger than "Due Diligence"
    description: "Stress-testing asset quality, legal title, and promoter intent.",
    icon: FileSearch
  },
  {
    title: "Credit Structuring", // Changed from "Bespoke Structuring"
    description: "Engineering ring-fenced cash flows and downside protection.",
    icon: Layers
  },
  {
    title: "Capital Deployment", 
    description: "Milestone-linked tranche releases to ensure utilization control.",
    icon: Rocket
  },
  {
    title: "Exit & Yield",
    description: "Active monitoring until the final rupee of principal is recovered.",
    icon: Target
  }
];

const SECTORS = [
  {
    title: "Real Estate Special Situations",
    description: "Last-mile financing | Stuck asset resolution | inventory funding | NPA takeouts.",
    icon: Building
  },
  {
    title: "Industrial Operations",
    description: "Capex expansion | EBITDA-based lending | Operational turnaround funding.",
    icon: Factory
  },
  {
    title: "Financial Institutions",
    description: "Capital adequacy | Book securitization | Co-lending frameworks.",
    icon: Landmark
  },
  {
    title: "Infrastructure & Energy",
    description: "Brownfield acquisition financing | Mezzanine debt | Cash-flow discounting.",
    icon: Radio
  }
];

const INSIGHT_POSTS = [
  {
    title: "The IBC Arbitrage: Value in Insolvency Resolution",
    date: "October 2025",
    category: "Distressed Assets"
  },
  {
    title: "Private Credit: Structured Yield in a High-Rate Environment",
    date: "June 2024",
    category: "Macro Strategy"
  },
  {
    title: "Ring-Fencing Cash Flows: The Art of Deployment",
    date: "August 2023",
    category: "Technical Note"
  }
];

// --- COMPONENT ---

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full bg-slate-950 text-white overflow-hidden group">
      
      {/* =========================================
          PART 1: THE VISUAL HERO (TOP FOLD)
      ========================================= */}
      <div className="relative min-h-[95vh] flex flex-col justify-center">
        
        {/* --- Cinematic Background Treatment --- */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          <div className="absolute inset-0 bg-slate-950">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Financial District Architecture" 
              className="w-full h-full object-cover opacity-40 grayscale contrast-125 transform scale-100 transition-transform duration-[20s] ease-in-out group-hover:scale-110"
            />
          </div>
          
          {/* Layered Gradients - Made darker for "Scorpio" vibe */}
          <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/30" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        {/* --- Main Text Content --- */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-amber-600"></span>
                <span className="text-amber-500 font-semibold tracking-[0.2em] text-[11px] uppercase">
                  Institutional Credit Platform
                </span>
              </div>

              {/* H1: Stronger, more Technical */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.05] mb-8 text-white drop-shadow-xl">
                Structured Credit & <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
                  Special Situations.
                </span>
              </h1>

              {/* Subtext: "Principal" Mindset */}
              <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light border-l border-amber-600/30 pl-6">
                We don't just find capital. We engineer the structure, mitigate the risk, and deliver the mandate. 
                <span className="text-slate-200 font-normal"> The pre-AIF platform for complex, mid-market transactions.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <button 
                  onClick={() => onNavigate('SERVICES')}
                  className="group relative px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-medium text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-amber-600/20 border border-transparent rounded-sm"
                >
                  <span className="flex items-center gap-3">
                    Submit a Mandate 
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={() => onNavigate('TRANSACTIONS')}
                  className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/30 font-medium text-sm tracking-widest uppercase transition-all duration-300 rounded-sm"
                >
                  <span className="flex items-center gap-3">
                    Transaction Grid
                    <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                  </span>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden lg:block z-20">
          <ChevronDown className="text-slate-500" size={24} />
        </div>
      </div>

      {/* =========================================
          PART 2: STATS BAR (The Authority)
      ========================================= */}
      <div className="relative z-20 border-t border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
           <FadeIn delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Stat 1 */}
              <div className="py-8 md:px-6 md:first:pl-0 flex items-center gap-4">
                <Landmark className="text-amber-600 shrink-0" size={24} strokeWidth={1} />
                <div>
                  <div className="text-3xl font-serif text-white"><CountUp end={10} prefix="₹" suffix="B+" /></div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 mt-1">Structured Volume</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="py-8 md:px-6 flex items-center gap-4">
                <ShieldCheck className="text-amber-600 shrink-0" size={24} strokeWidth={1} />
                <div>
                  <div className="text-3xl font-serif text-white"><CountUp end={40} suffix="+" /></div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 mt-1">Combined Experience</div>
                </div>
              </div>

              {/* Stat 3 - Changed "Key Partners" to "Institutional Counterparties" */}
              <div className="py-8 md:px-6 flex items-center gap-4">
                <Handshake className="text-amber-600 shrink-0" size={24} strokeWidth={1} />
                <div>
                  <div className="text-3xl font-serif text-white"><CountUp end={25} suffix="+" /></div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 mt-1">Institutional Counterparties</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="py-8 md:px-6 flex items-center gap-4">
                <Globe className="text-amber-600 shrink-0" size={24} strokeWidth={1} />
                <div>
                  <div className="text-lg font-serif text-white pt-1">Pan-Asia</div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-500 mt-1">Network Reach</div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>

      {/* =========================================
          PART 3: EXTENDED HERO CONTENT
      ========================================= */}
      <div className="relative z-10 bg-slate-950 py-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* SECTION A: METHODOLOGY (Renamed to PROTOCOL) */}
          <div className="mb-24">
             <FadeIn>
              <div className="flex items-end justify-between mb-12">
                <h2 className="text-3xl font-serif text-white">The Execution Protocol</h2>
                <div className="hidden sm:block h-[1px] flex-1 bg-slate-800 mx-6 mb-2"></div>
                <p className="text-slate-600 text-xs uppercase tracking-widest hidden sm:block">Rigorous • Transparent • Controlled</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {METHODOLOGY_STEPS.map((step, idx) => (
                  <div key={idx} className="relative group p-6 rounded border border-slate-800 bg-slate-900/40 hover:bg-slate-800/80 hover:border-amber-600/40 transition-all duration-300">
                    <div className="mb-4 text-amber-600 opacity-80 group-hover:opacity-100 transition-opacity">
                      <step.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-200 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                    
                    {/* Visual Connector Line */}
                    {idx !== METHODOLOGY_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-slate-800 z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* SECTION B: SPLIT LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* SECTORS */}
            <div className="lg:col-span-7">
              <FadeIn delay={100}>
                <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-amber-600"></span> 
                  Active Thesis & Sectors
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SECTORS.map((sector, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 border border-slate-800/50 rounded hover:bg-slate-900/80 transition-colors group">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-slate-400 group-hover:text-amber-500 transition-colors">
                        <sector.icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-slate-200 font-medium text-sm group-hover:text-white">{sector.title}</h4>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{sector.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* INSIGHTS */}
            <div className="lg:col-span-5">
              <FadeIn delay={200}>
                <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-amber-600"></span> 
                  Market Intelligence
                </h3>
                <div className="space-y-6">
                  {INSIGHT_POSTS.map((post, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => onNavigate('INSIGHTS')} 
                      className="group cursor-pointer border-l-2 border-transparent hover:border-amber-600 pl-0 hover:pl-4 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider font-medium mb-1">
                        <span className="text-amber-600">{post.category}</span>
                        <span className="text-slate-700">•</span>
                        <span className="text-slate-500">{post.date}</span>
                      </div>
                      <h4 className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => onNavigate('INSIGHTS')}
                  className="mt-8 text-xs text-amber-600 hover:text-amber-500 flex items-center gap-2 uppercase tracking-widest font-medium transition-colors"
                >
                  Access Research Library <ArrowRight size={12} />
                </button>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
