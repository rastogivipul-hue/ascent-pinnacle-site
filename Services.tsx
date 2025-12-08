import React from 'react';
import { 
  Building, 
  Briefcase, 
  ShieldAlert, 
  Globe, 
  Search, 
  FileSearch, 
  Layers, 
  Rocket, 
  Target, 
  Factory, 
  Landmark, 
  Radio,
  ArrowRight
} from 'lucide-react';
import { FadeIn } from './UI';

// ==========================================
// SEGMENT 1: DATA CONFIGURATION
// ==========================================

// --- Services Data ---
const SERVICES = [
  {
    title: "Structured Funding",
    description: "Bespoke financial instruments designed for complex capital requirements.",
    details: [
      "Special Situation Funding",
      "Promoter Financing",
      "Mezzanine Debt",
      "Acquisition Financing"
    ],
    icon: Building
  },
  {
    title: "Debt Syndication",
    description: "Leveraging global relationships to arrange capital from diverse lenders.",
    details: [
      "Term Loans & Working Capital",
      "NCD Placements",
      "Project Finance",
      "Consortium Lending"
    ],
    icon: Briefcase
  },
  {
    title: "Distressed Asset Resolution",
    description: "Strategic advisory for turnaround situations and NPA management.",
    details: [
      "One Time Settlements (OTS)",
      "Corporate Debt Restructuring",
      "NCLT / IBC Advisory",
      "Priority Funding"
    ],
    icon: ShieldAlert
  },
  {
    title: "M&A and Advisory",
    description: "End-to-end guidance on mergers, acquisitions, and divestitures.",
    details: [
      "Buy-side & Sell-side Advisory",
      "Valuation Services",
      "Due Diligence",
      "Joint Ventures"
    ],
    icon: Globe
  }
];

// --- Case Studies Data ---
const CASE_STUDIES = [
  {
    id: "edu-trust",
    category: "Restructuring / NGO",
    title: "Reviving Credit Access for an Educational Institution",
    clientProfile: "A prominent educational trust operating multiple colleges in Northern India.",
    challenge: "Severe liquidity crunch. Barred from mainstream credit due to prior NPA classification and complex NGO structure.",
    strategy: "Engaged Alternate Risk Division of a private bank. Coordinated massive legal reconstruction of title chains.",
    result: "Secured ₹150 Crore term loan at competitive rates, rehabilitating the client into the formal banking system."
  },
  {
    id: "real-estate",
    category: "Structured Credit / Real Estate",
    title: "Structured Resolution for Stalled Real Estate",
    clientProfile: "Mid-sized developer with a stalled flagship residential project facing insolvency.",
    challenge: "Project stalled by legacy debt, prior OTS restrictions, and immediate insolvency threats.",
    strategy: "Designed a 'Ring-Fenced' structure isolating cash flows. Identified institutional investor for structured infusion.",
    result: "Secured ₹100 Crores. Prevented insolvency, restarted construction, and cleared high-cost legacy debt."
  },
  {
    id: "pharma-acquisition",
    category: "M&A / LBO",
    title: "Cross-Border Acquisition for Mid-Market Pharma",
    clientProfile: "Rapidly growing API manufacturer targeting EU market entry.",
    challenge: "Client lacked free cash flow for $45M acquisition. Traditional banks hesitant on overseas funding.",
    strategy: "Structured a Leveraged Buyout (LBO) using target's cash flows combined with mezzanine financing.",
    result: "Raised $35 Million. Acquisition closed in 6 months, boosting revenue by 40% immediately."
  },
  {
    id: "steel-working-capital",
    category: "Debt Syndication",
    title: "Consortium Syndication for Heavy Industry",
    clientProfile: "Secondary steel manufacturer (₹800 Cr turnover) planning capacity expansion.",
    challenge: "Volatile raw material prices caused working capital gap. Existing lenders tapped out on limits.",
    strategy: "Proposed 'Pari-Passu' charge sharing with new consortium of 3 PSU banks and 2 private lenders.",
    result: "Financial closure for ₹250 Crores. Expansion completed on time, increasing capacity by 25%."
  },
  {
    id: "logistics-pre-ipo",
    category: "Private Equity / Pre-IPO",
    title: "Pre-IPO Placement for Logistics Unicorn",
    clientProfile: "Tech-enabled logistics company preparing for public listing.",
    challenge: "Needed bridge capital to improve deleveraging ratios before filing DRHP.",
    strategy: "Targeted Family Offices and HNIs for faster closing. Structured as Compulsorily Convertible Preference Shares.",
    result: "Raised ₹120 Crores at premium valuation. Improved Debt-to-Equity from 2.5x to 1.1x."
  }
];

// --- Methodology Data ---
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

// --- Sectors Data ---
const SECTORS = [
  {
    title: "Real Estate",
    description: "Acquisition finance | Approval-linked funding | Construction capital | Last-mile completion funding | Distressed and special situations.",
    icon: Building
  },
  {
    title: "Heavy Industry",
    description: "Capex financing | Working-capital solutions | Refinancing & repricing | Debt restructuring.",
    icon: Factory
  },
  {
    title: "Financial Services",
    description: "Capital adequacy support | NCD placements | Funding for disbursement and growth.",
    icon: Landmark
  },
  {
    title: "Infrastructure",
    description: "Long-term project finance | Mezzanine debt | Equity-linked funding structures | Consortium & syndicated financing.",
    icon: Radio
  }
];

// --- Insights Preview Data ---
const INSIGHT_POSTS = [
  {
    title: "The IBC Landscape: Navigating Insolvency 5 Years On",
    ,
    category: "Regulatory"
  },
  {
    title: "Private Credit: The New Alpha in Indian Markets",
    ,
    category: "Market Trends"
  },
  {
    title: "Structuring for Downside Protection in Volatile Cycles",
    ,
    category: "Investment Strategy"
  }
];

// ==========================================
// SEGMENT 2: COMPONENT RENDER
// ==========================================

// FIX: Added 'onNavigate' prop to allow linking to the full Insights page
interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-amber-600"></span>
            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Comprehensive <span className="text-slate-500">Capital Solutions.</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed">
            We operate at the intersection of traditional banking and special situations, 
            providing the structural flexibility that standard lenders cannot.
          </p>
        </FadeIn>
      </div>

      {/* 2. SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 rounded-full group-hover:bg-amber-50 transition-colors">
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* 3. METHODOLOGY SECTION */}
      <div className="bg-slate-900 py-24 text-white mb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl font-serif mb-16 text-center">Execution Methodology</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {METHODOLOGY_STEPS.map((step, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full border border-slate-700 bg-slate-800 text-amber-500">
                    <step.icon size={24} />
                  </div>
                  <h4 className="text-lg font-medium mb-3 text-amber-500">{step.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CASE STUDIES (Featured) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-32">
        <FadeIn>
          <h2 className="text-3xl font-serif text-slate-900 mb-12">Select Case Studies</h2>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <FadeIn key={study.id} delay={index * 100}>
              <div className="bg-white border-l-4 border-amber-500 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {study.category}
                    </div>
                    <h3 className="text-xl font-serif text-slate-900 mb-4">
                      {study.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
                      <div>
                        <strong className="text-slate-900 block mb-1">Challenge:</strong>
                        {study.challenge}
                      </div>
                      <div>
                        <strong className="text-slate-900 block mb-1">Strategy:</strong>
                        {study.strategy}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/4 bg-slate-50 p-4 rounded border border-slate-100">
                    <strong className="text-amber-600 block mb-2 text-sm uppercase">Outcome</strong>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* 5. SECTORS */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-32">
        <FadeIn>
          <h2 className="text-3xl font-serif text-slate-900 mb-12">Sector Expertise</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sector, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="p-6 bg-white border border-slate-100 hover:border-slate-300 transition-colors text-center group">
                <sector.icon className="w-10 h-10 mx-auto mb-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                <h4 className="text-lg font-medium text-slate-900 mb-2">{sector.title}</h4>
                <p className="text-sm text-slate-500">{sector.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* 6. INSIGHTS PREVIEW (Linked to Main Page) */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header with "View All" Button */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-800 pb-6 gap-4">
            <div>
              <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                Perspectives
              </span>
              <h2 className="text-3xl font-serif text-white">Recent Insights</h2>
            </div>
            
            <button 
              onClick={() => onNavigate('INSIGHTS')}
              className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-white text-sm tracking-wider uppercase transition-all duration-300"
            >
              View All Insights
              <ArrowRight size={16} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHT_POSTS.map((post, index) => (
              <FadeIn key={index} delay={index * 100}>
                {/* Clicking these also navigates to the Insights page */}
                <div 
                  onClick={() => onNavigate('INSIGHTS')}
                  className="group cursor-pointer"
                >
                  <div className="text-xs text-amber-500 mb-2 flex items-center gap-2">
                    {post.category} <span className="text-slate-600">•</span> {post.date}
                  </div>
                  <h3 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors mb-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-amber-500 transition-colors">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;
