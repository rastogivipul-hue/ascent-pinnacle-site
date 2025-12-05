import React from 'react';
import { 
  Building2, 
  Landmark, 
  Factory, 
  Zap, 
  Briefcase, 
  Activity, 
  Globe, 
  Smartphone, 
  Sun,
  LayoutTemplate
} from 'lucide-react';
import { FadeIn } from './UI';

// --- DATA CONFIGURATION ---
const TRANSACTIONS = [
  // --- REAL ESTATE & INFRA ---
  {
    id: 1,
    client: "Ameya Group",
    sector: "Real Estate",
    type: "Structured Finance",
    amount: "₹ 1 Billion",
    description: "Structured Credit Resolution and distress transaction funding.",
    year: "2024",
    icon: Building2
  },
  {
    id: 4,
    client: "Shapoorji Pallonji Group",
    sector: "Real Estate",
    type: "Structured Finance",
    amount: "₹ 970 Million",
    description: "Structured funding and special situation funding execution.",
    year: "2022",
    icon: LayoutTemplate
  },
  
  // --- FINANCIAL SERVICES & BANKING ---
  {
    id: 2,
    client: "Mahindra & Mahindra Fin. Serv.",
    sector: "Financial Services",
    type: "Debt Syndication",
    amount: "₹ 5 Billion",
    description: "Primary Issue NCD: Private Placement with leading Pension Funds.",
    year: "2014",
    icon: Landmark
  },
  {
    id: 5,
    client: "Dewan Housing Finance Ltd",
    sector: "Financial Services",
    type: "Debt Capital Markets",
    amount: "₹ 2.75 Billion",
    description: "Primary Issue NCD execution with leading Pension Funds.",
    year: "2015",
    icon: Landmark
  },
  {
    id: 7,
    client: "First Gulf Bank (India)",
    sector: "Banking",
    type: "Advisory",
    amount: "₹ 1.8 Billion",
    description: "On Exposure Domestic NCD - NCD Takeover Advisory.",
    year: "2017",
    icon: Briefcase
  },
  {
    id: 8,
    client: "Jana Small Finance Bank",
    sector: "Banking",
    type: "Syndication",
    amount: "₹ 2 Billion",
    description: "Short term credit syndication.",
    year: "2021",
    icon: Landmark
  },

  // --- MANUFACTURING & INDUSTRY ---
  {
    id: 9,
    client: "Tata Steel Ltd",
    note: "(formerly Bhushan Steel)",
    sector: "Integrated Steel",
    type: "Equity Placement",
    amount: "₹ 2.35 Billion",
    description: "Equity placement with institutional investors.",
    year: "2013",
    icon: Factory
  },
  {
    id: 13,
    client: "Evonith Steel",
    sector: "Steel & Manufacturing",
    type: "Debt Syndication",
    amount: "₹ 1.50 Billion",
    description: "Term loan syndication via Union Bank of India for capacity expansion.",
    year: "2025",
    icon: Factory
  },
  
  // --- CONGLOMERATE, ENERGY & TECH ---
  {
    id: 3,
    client: "Adani Enterprises Ltd",
    sector: "Conglomerate",
    type: "Credit Facility",
    amount: "₹ 500 Million",
    description: "Short Term Credit Facility - Private Placement with Treasuries.",
    year: "2013",
    icon: Zap
  },
  {
    id: 12,
    client: "Solar EPC Corp",
    sector: "Renewable Energy",
    type: "Working Capital",
    amount: "₹ 1.20 Billion",
    description: "Consortium lending arrangement for working capital requirements.",
    year: "2022",
    icon: Sun
  },
  {
    id: 11,
    client: "Lava International",
    sector: "Consumer Electronics",
    type: "Credit Enhancement",
    amount: "₹ 500 Million",
    description: "Structured credit enhancement and rating advisory via Infomerics.",
    year: "2023",
    icon: Smartphone
  },
  {
    id: 10,
    client: "Tulip Telecom Limited",
    sector: "Telecom Service",
    type: "Syndication",
    amount: "₹ 3 Billion",
    description: "Debt syndication with domestic financial institutions.",
    year: "2010",
    icon: Globe
  },
  
  // --- SPECIAL SITUATIONS ---
  {
    id: 6,
    client: "RHC Holding Pvt Ltd",
    sector: "Healthcare / Holding",
    type: "Promoter Funding",
    amount: "₹ 200 Million",
    description: "Promoter funding for settlement at HoldCo level.",
    year: "2014",
    icon: Activity
  },
];

const TransactionsPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-amber-600"></span>
            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">
              Track Record
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Selected <span className="text-slate-500">Transactions</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed">
            A history of complex value creation. From structured debt to distressed 
            turnarounds, we deliver capital when it matters most.
          </p>
        </FadeIn>
      </div>

      {/* --- Deal Tombstones Grid --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRANSACTIONS.map((deal, index) => (
            <FadeIn key={deal.id} delay={index * 50}>
              <div className="group relative bg-white border border-slate-200 p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm overflow-hidden flex flex-col">
                
                {/* Hover Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Card Header: Icon & Amount Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-50 rounded-full text-amber-600 group-hover:bg-amber-50 transition-colors border border-slate-100">
                    <deal.icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 border border-slate-200 bg-slate-50 px-2 py-1 rounded tracking-wide">
                    {deal.amount}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex-grow">
                  <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2">
                    {deal.type}
                  </div>
                  
                  <h3 className="text-xl font-serif text-slate-900 leading-tight mb-1">
                    {deal.client}
                  </h3>
                  
                  {/* Optional Note for company name variations */}
                  {deal.note && (
                    <span className="text-xs text-slate-400 block mb-3 italic">
                      {deal.note}
                    </span>
                  )}
                  
                  {/* Spacer if no note, to align grids slightly better */}
                  {!deal.note && <div className="h-2 mb-2"></div>}

                  <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                    {deal.description}
                  </p>
                </div>

                {/* Footer: Sector & Year */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    {deal.sector}
                  </div>
                  <span className="text-xs text-slate-300 font-serif italic">
                    {deal.year}
                  </span>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
