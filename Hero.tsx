import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Landmark, 
  Handshake, 
  ShieldCheck, 
  Globe,
  ChevronDown,
  // New Icons added based on your data
  Search,
  FileSearch,
  Layers,
  Rocket,
  Target,
  Building,
  Factory,
  Radio
} from 'lucide-react';

import { CountUp, FadeIn } from './UI';

// --- DATA CONSTANTS ---

const METHODOLOGY_STEPS = [
  {
    title: "Strategic Origination",
    description: "Identifying off-market opportunities before they hit the street.",
    icon: Search
  },
  {
    title: "Forensic Due Diligence",
    description: "Rigorous stress-testing of asset quality and legal standing.",
    icon: FileSearch
  },
  {
    title: "Bespoke Structuring",
    description: "Engineering credit protections and cash-flow ring-fencing.",
    icon: Layers
  },
  {
    title: "Controlled Deployment",
    description: "Milestone-based capital infusion ensuring proper utilization.",
    icon: Rocket
  },
  {
    title: "Value Realization",
    description: "Active monitoring to ensure optimal exit and yield.",
    icon: Target
  }
];

const SECTORS = [
  {
    title: "Real Estate",
    description: "Last-mile funding & distressed resolution.",
    icon: Building
  },
  {
    title: "Heavy Industry",
    description: "Capex financing & debt restructuring.",
    icon: Factory
  },
  {
    title: "Financial Services",
    description: "Capital adequacy & NCD placements.",
    icon: Landmark
  },
  {
    title: "Infrastructure",
    description: "Long-term financing & syndication.",
    icon: Radio
  }
];

const INSIGHT_POSTS = [
  {
    title: "The IBC Landscape: Navigating Insolvency 5 Years On",
    date: "October 2023",
    category: "Regulatory"
  },
  {
    title: "Private Credit: The New Alpha in Indian Markets",
    date: "September 2023",
    category: "Market Trends"
  },
  {
    title: "Structuring for Downside Protection in Volatile Cycles",
    date: "August 2023",
    category: "Investment Strategy"
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
              className="w-full h-full object-cover opacity-50 grayscale contrast-125 transform scale-100 transition-transform duration-[20s] ease-in-out group-hover:scale-110"
            />
          </div>
          
          {/* Layered Gradients */}
          <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/20" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        {/* --- Main Text Content --- */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-amber-500"></span>
                <span className="text-amber-500 font-semibold tracking-[0.2em] text-[11px] uppercase">
                  Private Credit & Special Situations
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.05] mb-8 text-white drop-shadow-lg">
                Structuring Capital for <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  Complex Value Creation.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light border-l border-slate-700 pl-6">
                Ascent Pinnacle Capital is an integrated investment platform specializing in the Indian mid-market. 
                We bridge the gap between institutional capital and distressed opportunities, delivering 
                bespoke debt syndication and strategic advisory.
              </p>

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
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden lg:block z-20">
          <ChevronDown className="text-slate-400" size={24} />
        </div>
      </div>

      {/* =========================================
          PART 2: STATS BAR (The Bridge)
      ========================================= */}
      <div className="relative z-20 border-t border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
           <FadeIn delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Stat 1 */}
              <div className="py-8 md:px-6 md:first:pl-0 flex items-center gap-4">
                <Landmark className="text-amber-500 shrink-0" size={28} strokeWidth={1} />
                <div>
                  <div className="text-2xl font-serif text-white"><CountUp end={10} prefix="₹" suffix="B+" /></div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Transactions</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="py-8 md:px-6 flex items-center gap-4">
                <ShieldCheck className="text-amber-500 shrink-0" size={28} strokeWidth={1} />
                <div>
                  <div className="text-2xl font-serif text-white"><CountUp end={40} suffix="+" /></div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Years Experience</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="py-8 md:px-6 flex items-center gap-4">
                <Handshake className="text-amber-500 shrink-0" size={28} strokeWidth={1} />
                <div>
                  <div className="text-2xl font-serif text-white"><CountUp end={25} suffix="+" /></div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Key Partners</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="py-8 md:px-6 flex items-center gap-4">
                <Globe className="text-amber-500 shrink-0" size={28} strokeWidth={1} />
                <div>
                  <div className="text-xl font-serif text-white pt-1">Pan-Asia</div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Network Reach</p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>

      {/* =========================================
          PART 3: EXTENDED HERO CONTENT (The New Data)
      ========================================= */}
      <div className="relative z-10 bg-slate-950 py-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* SECTION A: METHODOLOGY */}
          <div className="mb-24">
             <FadeIn>
              <div className="flex items-end justify-between mb-12">
                <h2 className="text-3xl font-serif text-white">Our Methodology</h2>
                <div className="hidden sm:block h-[1px] flex-1 bg-slate-800 mx-6 mb-2"></div>
                <p className="text-slate-500 text-sm uppercase tracking-widest hidden sm:block">End-to-end Execution</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {METHODOLOGY_STEPS.map((step, idx) => (
                  <div key={idx} className="relative group p-6 rounded border border-slate-800 bg-slate-900/30 hover:bg-slate-800/50 hover:border-amber-500/30 transition-all duration-300">
                    <div className="mb-4 text-amber-500 opacity-80 group-hover:opacity-100 transition-opacity">
                      <step.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-200 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                    
                    {/* Visual Connector Line (hidden on last item and mobile) */}
                    {idx !== METHODOLOGY_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-slate-700 z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* SECTION B: SPLIT LAYOUT (SECTORS & INSIGHTS) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* SECTORS (Left Side - 7 Cols) */}
            <div className="lg:col-span-7">
              <FadeIn delay={100}>
                <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-amber-500"></span> 
                  Sector Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SECTORS.map((sector, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 border border-slate-800/50 rounded hover:bg-slate-900 transition-colors">
                      <div className="p-2 bg-slate-900 rounded border border-slate-700 text-slate-300">
                        <sector.icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">{sector.title}</h4>
                        <p className="text-slate-500 text-xs mt-1">{sector.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* INSIGHTS (Right Side - 5 Cols) */}
            <div className="lg:col-span-5">
              <FadeIn delay={200}>
                <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-amber-500"></span> 
                  Market Intelligence
                </h3>
                <div className="space-y-6">
                  {INSIGHT_POSTS.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider font-medium mb-1">
                        <span className="text-amber-500">{post.category}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-500">{post.date}</span>
                      </div>
                      <h4 className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  ))}
                </div>
                <button className="mt-8 text-xs text-amber-500 hover:text-amber-400 flex items-center gap-2 uppercase tracking-widest font-medium transition-colors">
                  Read all insights <ArrowRight size={12} />
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
