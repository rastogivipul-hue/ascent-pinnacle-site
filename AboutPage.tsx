// src/AboutPage.tsx
import React from 'react';
import { Quote, Linkedin, Mail } from 'lucide-react';
import { FadeIn } from './UI';

// --- IMAGE IMPORTS ---
// Ensure these files exist in the SAME folder as AboutPage.tsx
import vkrpic from './AP VKR.jpg';
import srjipic from './AP SRji.jpg';
import akpic from './AP AK.jpg';

const TEAM_MEMBERS = [
  {
    name: "Subhash Rastogi",
    role: "Chairman",
    imageUrl: srjipic,
    linkedin: "https://www.linkedin.com/in/subhash-rastogi-b3993414/",
    email: "srastogi@ascentpinnacle.com",
    bio: [
      "Subhash Rastogi anchors Ascent Pinnacle with the governance frameworks and strategic discipline of a large-scale financial institution. With over four decades of leadership in global markets, he brings an institutional perspective to the agility of private credit. His career has been defined by navigating complex cross-border trade dynamics and building enduring partnerships with sovereign-grade financial entities.",
      "As Chairman, his role is to enforce credit discipline and integrity. He ensures that every mandate aligns with long-term value creation rather than short-term transactional gains. His presence provides the firm with the gravitas required to engage confidently with institutional lenders, global investors, and regulatory bodies."
    ]
  },
  {
    name: "Vipul Rastogi",
    role: "Managing Partner",
    imageUrl: vkrpic,
    linkedin: "https://www.linkedin.com/in/vipul-rastogi-ba65a762/",
    email: "vkr@ascentpinnacle.com",
    bio: [
      "Vipul Rastogi operates with the mindset of a fund manager. He specializes in unlocking value in illiquid, distressed, and special-situation assets through technical structuring and regulatory arbitrage. Unlike traditional advisors, Vipul focuses on the 'engineering' of a deal—designing the credit protections, ring-fencing cash flows, and mitigating risk before a mandate is ever presented to capital partners.",
      "With a focus on structured credit and mid-market consolidation, Vipul is currently leading the firm’s transition into a thesis-driven investment platform with a planned Category-II AIF. He serves as the primary architect for the firm’s most complex transactions, bridging the gap between institutional capital requirements and the reality of Indian promoter-driven businesses."
    ]
  },
  {
    name: "Ashish Kumar",
    role: "Director - Transaction Execution",
    imageUrl: akpic,
    linkedin: "https://www.linkedin.com/in/ashish-kumar-92a93b12b/",
    email: "ashish.kumar@ascentpinnacle.com",
    bio: [
      "Ashish Kumar leads the 'Engine Room' of Ascent Pinnacle. His core competency lies in forensic credit evaluation, financial modeling, and the rigorous stress-testing of asset quality. Ashish ensures that the firm’s execution capabilities match its strategic intent, managing the end-to-end deal lifecycle from initial diligence to final documentation.",
      "He plays a critical role in navigating the operational complexities of debt syndication, ensuring that transaction structures hold up against regulatory and market scrutiny. His disciplined approach to execution allows the firm to close mandates with speed and precision, acting as a reliable technical partner to banks, NBFCs, and AIFs."
    ]
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
       
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-amber-600"></span>
            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">
              Principal Leadership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            The Architects of <br />
            <span className="text-slate-500">Your Capital Structure.</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed border-l-4 border-amber-600 pl-6">
            We are not just advisors. We are former operators and future fund managers who understand that 
            capital only respects <span className="text-slate-900 font-medium">discipline</span> and <span className="text-slate-900 font-medium">structure</span>.
          </p>
        </FadeIn>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {TEAM_MEMBERS.map((member, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                   
                  {/* Image Section */}
                  <div className="lg:w-1/3 relative h-96 lg:h-auto overflow-hidden bg-slate-200">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center bg-white group-hover:bg-slate-50/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-6">
                      <div>
                        <h3 className="text-3xl font-serif text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-amber-700 font-bold text-xs tracking-widest uppercase">{member.role}</p>
                      </div>
                      <div className="flex gap-3">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-amber-600 hover:text-white transition-all duration-300"
                          >
                            <Mail size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-4 -left-2 text-slate-200 w-16 h-16 -z-10 transform -scale-x-100 opacity-50" />
                      {member.bio.map((paragraph, i) => (
                        <p key={i} className="text-slate-700 leading-relaxed mb-4 text-[15px] font-light text-justify">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
