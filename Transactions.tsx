import React from 'react';
import { CheckCircle } from 'lucide-react';
import { FadeIn } from './UI';

const transactions = [
  {
    client: "Evonith",
    sector: "Steel & Manufacturing",
    type: "Structured Debt",
    amount: "₹150 Cr",
    details: "Term Loan Syndication via UBI",
    status: "Closed"
  },
  {
    client: "Pratap University",
    sector: "Education",
    type: "Strategic Advisory",
    amount: "Undisclosed",
    details: "Investor Meet & Strategic Alliance with Caparo",
    status: "Mandate"
  },
  {
    client: "Lava International",
    sector: "Consumer Electronics",
    type: "Credit Enhancement",
    amount: "N/A",
    details: "Rating Advisory with Infomerics",
    status: "Ongoing"
  },
  {
    client: "Confidential",
    sector: "Real Estate",
    type: "Last Mile Funding",
    amount: "₹75 Cr",
    details: "Project Completion Finance",
    status: "Closed"
  },
  {
    client: "Mid-Market Infra",
    sector: "Infrastructure",
    type: "OTS Funding",
    amount: "₹45 Cr",
    details: "One Time Settlement Financing",
    status: "Closed"
  }
];

const Transactions: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">Track Record</h1>
          <div className="h-1 w-20 bg-brand-accent mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl">
            A selection of our recent mandates and closures. We take pride in executing complex transactions with discretion and speed.
          </p>
        </FadeIn>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {transactions.map((deal, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-white border-t-4 border-slate-900 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase tracking-widest font-bold rounded-sm">
                    {deal.status}
                  </span>
                  <CheckCircle size={18} className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">{deal.client}</h3>
                <p className="text-xs text-brand-accent uppercase tracking-wide font-semibold mb-6">{deal.sector}</p>
                <div className="space-y-3 border-t border-slate-100 pt-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Transaction Type</p>
                    <p className="text-sm font-medium text-slate-700">{deal.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Value</p>
                    <p className="text-sm font-medium text-slate-900">{deal.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase">Role</p>
                    <p className="text-sm font-medium text-slate-700">{deal.details}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-[10px] text-slate-400">ASCENT PINNACLE CAPITAL</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
