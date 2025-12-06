// src/AboutPage.tsx
import React from 'react';
import { Quote, Linkedin, Mail } from 'lucide-react';

/* FIX: Changed import path to match your flat folder structure */
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
      "Subhash Rastogi brings over four decades of international business leadership, cross-border exposure, and deep banking relationships to Ascent Pinnacle Capital. His career spans global markets where he managed large-scale operations, built enduring partnerships, and navigated complex financial landscapes with precision. Having worked extensively with international suppliers, financial institutions, and strategic partners, he has developed a strong command over global trade dynamics, credit structures, and institutional banking practices. His long-standing relationships across major banking networks remain a key strategic asset for the firm. As Chairman, he provides strategic direction, governance, and high-level oversight, ensuring the firm operates with discipline, integrity, and global perspective. His experience strengthens Ascent Pinnacle’s ability to engage confidently with lenders, investors, and partners across markets, anchoring the firm’s commitment to trust-led, long-term value creation."
    ]
  },
  {
    name: "Vipul Rastogi",
    role: "Managing Director",
    imageUrl: vkrpic,
    // FIXED: Added 'https://' so the link works correctly
    linkedin: "https://www.linkedin.com/in/vipul-rastogi-ba65a762/",
    email: "vkr@ascentpinnacle.com",
    bio: [
      "Vipul Rastogi is an investment banking professional with deep expertise in debt syndication, structured financing, and closing complex transactions across real estate, infrastructure, and mid-market sectors. He is known for unlocking capital in challenging situations through strong lender relationships, disciplined structuring, and sharp negotiation. With a robust network across banks, NBFCs, AIFs, family offices, and global investors, Vipul consistently executes high-stakes mandates with speed and precision. Under his leadership, Ascent Pinnacle is transitioning from a boutique advisory into a broader investment platform with a planned Category-II AIF focused on special opportunities and structured credit. He is recognized for his clarity, integrity, and ability to drive outcomes in the most demanding financial environments."
    ]
  },
  {
    name: "Ashish Kumar",
    role: "Director - Debt Syndication",
    imageUrl: akpic,
    linkedin: "https://www.linkedin.com/in/ashish-kumar-92a93b12b/",
    email: "ashish.kumar@ascentpinnacle.com",
    bio: [
      "Ashish Kumar brings strong analytical depth and hands-on execution experience across debt syndication, structured credit, and special situation transactions. He is skilled in financial modeling, credit evaluation, transaction documentation, and end-to-end deal management. Ashish plays a critical role in navigating complex mandates, coordinating with lenders, and ensuring smooth closure of transactions under tight timelines. His disciplined approach, sharp problem-solving, and commitment to precision make him a key contributor to Ascent Pinnacle’s growing transaction capability. He works closely with promoters, NBFCs, banks, and AIFs, supporting the firm’s mission of delivering reliable, high-quality capital solutions."
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
              Leadership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            The Team Behind <br />
            <span className="text-slate-500">The Capital.</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed">
            Decades of combined experience in structured finance, distressed assets, 
            and institutional banking. We bring clarity to complex situations.
          </p>
        </FadeIn>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {TEAM_MEMBERS.map((member, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-200 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Image Section */}
                  <div className="lg:w-1/3 relative h-96 lg:h-auto overflow-hidden bg-slate-200">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-6">
                      <div>
                        <h3 className="text-2xl font-serif text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-amber-600 font-medium text-sm tracking-wider uppercase">{member.role}</p>
                      </div>
                      <div className="flex gap-3">
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-colors duration-300"
                          >
                            <Linkedin size={18} />
                          </a>
                        )}
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-amber-600 hover:text-white transition-colors duration-300"
                          >
                            <Mail size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 text-slate-100 w-12 h-12 -z-10 transform -scale-x-100" />
                      {member.bio.map((paragraph, i) => (
                        <p key={i} className="text-slate-600 leading-relaxed mb-4 text-sm md:text-[15px] font-light text-justify">
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
