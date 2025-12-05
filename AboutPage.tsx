import React from 'react';
import { Quote, Linkedin, Mail, ArrowRight } from 'lucide-react'; // Added icons
import { FadeIn } from './UI';

// --- DATA: Define your team here ---
const TEAM_MEMBERS = [
  {
    name: "Vipul Rastogi",
    role: "Managing Director & Promoter",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", // Replace with your real photo
    linkedin: "#",
    email: "vipul@ascentpinnacle.com",
    bio: [
      "Ex-Investment Banker with over 15 years of experience in structured credit and special situations.",
      "Specializes in navigating complex financial landscapes to secure capital where others see barriers."
    ]
  },
  {
    name: "Executive Name",
    role: "Director - Debt Syndication",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    email: "partner@ascentpinnacle.com",
    bio: [
      "Expert in institutional relationships with a focus on the mid-market industrial sector.",
      "Has successfully closed over ₹500 Cr in debt syndication deals."
    ]
  },
  {
    name: "Executive Name",
    role: "Head of Credit",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    email: "credit@ascentpinnacle.com",
    bio: [
      "Leads financial modeling, risk assessment, and credit enhancement structures.",
      "Ensures rigorous due diligence and structural integrity of all transactions."
    ]
  }
];

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Firm Overview Section --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
              Our Firm
            </h2>
            <div className="h-1 w-20 bg-brand-accent mb-8"></div>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                At <span className="text-slate-900 font-semibold">Ascent Pinnacle</span>, we take up nontraditional innovative practices and strategies to achieve breakouts in Financial Services. 
                We constantly challenge and push the horizons to offer you customized superior service.
              </p>
              <p>
                Founded in 2004, our approach is to review a client company's capital structure thoroughly prior to devising an optimal structure for the future. 
                This structure may inculcate some combination of several possible elements ranging from bank senior or mezzanine debt through to equity 
                placements with venture capital or other institutional investors.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200} className="relative group">
            {/* Image with slight border styling */}
             <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-100">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                 alt="Corporate Meeting" 
                 className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-10 -left-10 bg-slate-900 p-8 text-white hidden md:block max-w-xs shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-4 border-brand-accent">
              <Quote className="text-brand-accent mb-4 opacity-80" size={32} />
              <p className="font-serif italic text-lg text-slate-200 leading-relaxed">
                "We strive for excellence and nurture growth through innovative financial strategies."
              </p>
            </div>
          </FadeIn>
        </div>

        {/* --- Leadership Section --- */}
        <div className="border-t border-slate-200 pt-24">
          <FadeIn className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Leadership Team</h2>
            <div className="h-0.5 w-16 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-slate-500 text-lg">
              Decades of combined experience in distressed assets, credit structuring, and strategic advisory.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            {TEAM_MEMBERS.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="group">
                  
                  {/* Image Area - Grayscale Effect */}
                  <div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-6 relative shadow-md">
                    <img 
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay with Icons */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <a href={member.linkedin} className="bg-white/90 hover:bg-white text-brand-dark p-2 rounded-sm transition-colors">
                          <Linkedin size={18} />
                        </a>
                        <a href={`mailto:${member.email}`} className="bg-brand-accent/90 hover:bg-brand-accent text-white p-2 rounded-sm transition-colors">
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="pr-4">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1 group-hover:text-brand-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">
                      {member.role}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {member.bio.map((line, i) => (
                        <p key={i} className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-200 pl-3">
                          {line}
                        </p>
                      ))}
                    </div>
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

export default AboutPage;
