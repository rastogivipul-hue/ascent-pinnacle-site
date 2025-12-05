import React from 'react';
import { TrendingUp, ShieldAlert, PieChart, ArrowRight } from 'lucide-react';
import { FadeIn } from './UI';

const services = [
  {
    title: "Structured Finance & Debt Syndication",
    icon: <TrendingUp size={32} />,
    description: "Bespoke capital structuring for mid-market corporates. We arrange senior secured debt, mezzanine financing, and acquisition funding through our network of PSU banks, Private Banks, and AIFs.",
    points: ["Term Loans & Working Capital", "Project Finance", "Acquisition Financing"]
  },
  {
    title: "Stressed Assets & Special Situations",
    icon: <ShieldAlert size={32} />,
    description: "We specialize in resolving complex liquidity situations. We assist companies in OTS (One Time Settlement) funding, restructuring, and navigating NCLT processes.",
    points: ["OTS Funding", "Priority Debt Interim Finance", "Corporate Debt Restructuring"]
  },
  {
    title: "Strategic Advisory & M&A",
    icon: <PieChart size={32} />,
    description: "Guiding promoters through critical transitions. Whether it is divestment, strategic partnerships, or equity infusion, we act as the trusted architect of the deal.",
    points: ["Sell-side Advisory", "Strategic Alliances", "Equity Private Placement"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="bg-slate-900 text-white py-20 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Expertise</h1>
            <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
              We operate at the intersection of credit and strategy. Our core competency lies in understanding complex balance sheets and delivering liquidity where traditional channels fail.
            </p>
          </FadeIn>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="group bg-slate-50 p-8 rounded-sm border border-slate-100 hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-brand-accent mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 border-t border-slate-200 pt-6">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <ArrowRight size={14} className="text-brand-accent" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
