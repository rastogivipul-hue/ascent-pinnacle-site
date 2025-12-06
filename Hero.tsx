import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './UI';


// ===============================
//  ANONYMIZED DEAL TICKER REMOVED
// ===============================

// --- Methodology List (No Icons, Editorial IB Style) ---
const METHODOLOGY_LIST = [
  {
    id: "01",
    title: "Strategic Origination",
    desc: "Proprietary off-market sourcing beyond conventional deal flow."
  },
  {
    id: "02",
    title: "Forensic Diligence",
    desc: "Full-stack asset evaluation with stress-testing & legal structuring."
  },
  {
    id: "03",
    title: "Bespoke Structuring",
    desc: "Downside protection design, cash-flow ring-fencing, covenant engineering."
  },
  {
    id: "04",
    title: "Value Realization",
    desc: "Active monitoring and exit-path optimisation for yield protection."
  }
];

interface HeroProps {
  onNavigate: (page: string) => void;
}


const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % METHODOLOGY_LIST.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full bg-[#050505] text-[#E5E5E5] overflow-hidden font-sans">

      {/* =============================== */}
      {/*   BACKGROUND — NO STOCK IMAGE   */}
      {/* =============================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Soft lighting */}
        <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[150px]" />
      </div>


      {/* =============================== */}
      {/*            MAIN GRID            */}
      {/* =============================== */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 min-h-screen flex flex-col justify-center pt-20 pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">


          {/* =============================== */}
          {/*        LEFT — THE NARRATIVE     */}
          {/* =============================== */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <FadeIn>

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                <span className="font-mono text-xs text-stone-400 tracking-widest uppercase">
                  Ascent Pinnacle Capital • Est. 201X
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[0.95] text-white">
                Capital for <br />
                <span className="italic font-normal text-stone-200">Complexity.</span>
              </h1>

              {/* Subtext */}
              <p className="text-lg text-stone-400 max-w-xl leading-relaxed font-light border-l border-stone-800 pl-6">
                Bridging institutional dry powder with Indian mid-market special situations.
                We don’t chase deals. We engineer them.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-8 mt-4">

                {/* Primary Link */}
                <button
                  onClick={() => onNavigate('SERVICES')}
                  className="group flex items-center gap-4 text-white hover:text-amber-500 transition-colors duration-300"
                >
                  <span className="text-sm tracking-[0.2em] uppercase border-b border-stone-700 pb-1 group-hover:border-amber-500 transition-all">
                    Explore Capabilities
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={() => onNavigate('TRANSACTIONS')}
                  className="px-6 py-3 border border-stone-800 hover:border-stone-600 text-stone-300 text-xs tracking-widest uppercase transition-all"
                >
                  View Track Record
                </button>

              </div>

            </FadeIn>
          </div>


          {/* =============================== */}
          {/*   RIGHT — TERMINAL PANEL (IB)   */}
          {/* =============================== */}
          <div className="lg:col-span-5 hidden lg:block">
            <FadeIn delay={200}>

              <div className="relative">

                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-stone-700" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-stone-700" />

                {/* PANEL */}
                <div className="bg-[#0f0f0f] border border-stone-800/50 p-8 shadow-2xl backdrop-blur-sm">

                  {/* Label */}
                  <h3 className="font-mono text-xs text-amber-600 mb-8 uppercase tracking-widest">
                    // Execution Framework
                  </h3>

                  {/* Methodology List */}
                  <div className="space-y-6">
                    {METHODOLOGY_LIST.map((step, idx) => (
                      <div
                        key={idx}
                        className={`group cursor-pointer transition-all duration-500 
                          ${activeStep === idx ? 'opacity-100 translate-x-2' : 'opacity-40 hover:opacity-70'}
                        `}
                        onMouseEnter={() => setActiveStep(idx)}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-amber-600/80">.{step.id}</span>
                          <h4 className="font-serif text-xl text-stone-200">{step.title}</h4>
                        </div>

                        {/* Expandable description */}
                        <div
                          className={`overflow-hidden transition-all duration-500 
                            ${activeStep === idx ? 'max-h-20 mt-2' : 'max-h-0'}
                          `}
                        >
                          <p className="font-mono text-[10px] text-stone-400 pl-8 border-l border-stone-800 ml-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>


                  {/* =============================== */}
                  {/* Featured Deal — ANONYMIZED     */}
                  {/* =============================== */}
                  <div className="mt-12 pt-6 border-t border-dashed border-stone-800">

                    <div className="flex justify-between items-end">

                      <div>
                        <p className="font-mono text-[10px] text-amber-600 mb-1 tracking-wider">
                          RECENT CLOSING
                        </p>
                        <p className="text-white font-medium text-lg">
                          Integrated Education & Healthcare Campus
                        </p>
                        <p className="text-xs text-stone-400 mt-0.5">
                          Debt Resolution & Growth Capital
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-serif text-3xl text-stone-200">₹120 Cr</p>
                        <p className="font-mono text-[10px] text-stone-500 mt-1">
                          COMPLETED • 2025
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </FadeIn>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
