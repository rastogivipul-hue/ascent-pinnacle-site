import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Hero from './Hero';
import { FadeIn } from './UI';
import { Page, TeamMember, Transaction } from './types';
import { TEAM_MEMBERS, TRANSACTIONS, SERVICES, CASE_STUDIES, METHODOLOGY_STEPS, SECTORS, INSIGHT_POSTS } from './constants';
import { ArrowRight, CheckCircle2, ChevronRight, Award, Quote, Building, ShieldAlert, TrendingUp, MapPin, Mail, Phone, FileText, ArrowUpRight } from 'lucide-react';

// --- Page Components ---

const HomePage: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      
      {/* Value Prop Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">Our Ecosystem</h2>
            <div className="h-1 w-20 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              In the contemporary competitive financial services market, dramatic change is the norm. 
              We focus on managing distressed assets and fueling growth by applying nontraditional, 
              innovative practices.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="h-full p-8 bg-gray-50 rounded-sm border-t-4 border-brand-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">Innovative Structuring</h3>
                <p className="text-slate-600 leading-relaxed">
                  We don't just find capital; we structure it. From mezzanine debt to special situation funding, 
                  we tailor financial instruments to fit complex balance sheets.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="h-full p-8 bg-gray-50 rounded-sm border-t-4 border-brand-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">Distressed Asset Resolution</h3>
                <p className="text-slate-600 leading-relaxed">
                  Specialized expertise in NPA management, OTS negotiations, and turning around stalled projects 
                  through strategic capital infusion.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="h-full p-8 bg-gray-50 rounded-sm border-t-4 border-brand-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">Global Network</h3>
                <p className="text-slate-600 leading-relaxed">
                  Access to a vast network of Domestic and Foreign Institutional Investors, Pension Funds, 
                  and Family Offices for diverse capital requirements.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Ascent Methodology</h2>
            <div className="h-1 w-20 bg-brand-accent mx-auto mb-8"></div>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              A rigorous, phased approach to lifecycle management of special situation assets.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-accent/30 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {METHODOLOGY_STEPS.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 150} direction="up">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-brand-dark rounded-full border-4 border-brand-primary flex items-center justify-center mb-6 relative z-10 shadow-xl group hover:border-brand-accent transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-accent mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">Deep Domain Expertise</h2>
              <div className="h-1 w-20 bg-brand-accent mb-6"></div>
              <p className="text-slate-600 text-lg">
                Decades of experience across India's core industrial sectors allow us to underwrite risk where others cannot.
              </p>
            </div>
            <button 
              onClick={() => onNavigate(Page.SERVICES)}
              className="hidden md:flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition-colors mt-6 md:mt-0"
            >
              Explore Capabilities <ArrowRight size={18} />
            </button>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sector, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-gray-50 p-8 rounded-sm hover:bg-white hover:shadow-xl border border-transparent hover:border-brand-accent/20 transition-all duration-300 group h-full">
                  <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-primary mb-3">{sector.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Transactions Teaser */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
         {/* Subtle pattern overlay */}
         <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">Selected Transactions</h2>
              <p className="text-slate-400">A glimpse of our institutional track record.</p>
            </div>
            <button 
              onClick={() => onNavigate(Page.TRANSACTIONS)}
              className="hidden md:flex items-center gap-2 text-brand-accent hover:text-white transition-colors"
            >
              View All <ArrowRight size={18} />
            </button>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSACTIONS.slice(0, 4).map((deal, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="h-full bg-white/5 p-6 border border-white/10 hover:border-brand-accent/60 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <p className="text-brand-accent font-bold text-xs mb-3 uppercase tracking-wider group-hover:text-white transition-colors">{deal.dealType}</p>
                  <h3 className="text-xl font-bold mb-2 min-h-[56px] leading-snug">{deal.client}</h3>
                  <p className="text-sm text-slate-400 mb-6 h-10 line-clamp-2">{deal.description}</p>
                  <div className="border-t border-white/10 pt-4 mt-auto">
                    <p className="font-serif text-lg text-white/90">{deal.amount}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <button 
              onClick={() => onNavigate(Page.TRANSACTIONS)}
              className="text-brand-accent hover:text-white transition-colors"
            >
              View All Transactions
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Firm Overview */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">Our Firm</h2>
            <div className="h-1 w-20 bg-brand-accent mb-8"></div>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-6">
                At Ascent Pinnacle, we take up nontraditional innovative practices and strategies to achieve breakouts in Financial Services. 
                We constantly challenge and push the horizons to offer you customized superior service.
              </p>
              <p>
                Founded in 2004, our approach is to review a client company's capital structure thoroughly prior to devising an optimal structure for the future. 
                This structure may inculcate some combination of several possible elements ranging from bank senior or mezzanine debt through to equity 
                placements with venture capital or other institutional investors.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200} className="relative">
             <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Corporate Meeting" 
              className="rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-dark p-8 text-white hidden md:block max-w-xs shadow-2xl">
              <Quote className="text-brand-accent mb-4" size={32} />
              <p className="font-serif italic text-lg">
                We strive for excellence and nurture growth.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Leadership */}
        <div>
          <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-primary">Leadership Team</h2>
            <div className="h-0.5 w-16 bg-brand-accent mx-auto mt-4"></div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="bg-white group">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-6 rounded-sm shadow-sm relative">
                     <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors z-10 duration-500"></div>
                     <img 
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{member.name}</h3>
                  <p className="text-brand-accent font-medium mb-4 uppercase tracking-wide text-sm">{member.role}</p>
                  <div className="space-y-2">
                    {member.bio.map((line, i) => (
                      <p key={i} className="text-slate-600 text-sm leading-relaxed">{line}</p>
                    ))}
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

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Our Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Regardless of the economic condition, we have built promising strategies and expertise in advising clients 
            on raising capital through specially tailored, structured finance arrangements.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="h-full bg-gray-50 p-8 md:p-12 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-brand-accent group">
                <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                
                <h4 className="font-bold text-brand-primary text-sm uppercase tracking-wider mb-4 border-b border-gray-200 pb-2 inline-block">Key Capabilities</h4>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" />
                      <span>{detail}</span>
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

const TransactionsPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">Track Record</h2>
          <p className="text-slate-600 text-lg max-w-3xl">
            We have expertise in advising clients across a wide variety of industries and leveraging our 
            extensive global relationships to deliver optimum solutions.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRANSACTIONS.map((t, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="h-full border border-gray-200 bg-white p-8 text-center hover:border-brand-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="h-1 w-12 bg-brand-accent mx-auto mb-6 group-hover:w-20 transition-all duration-300"></div>
                  <h3 className="text-xl font-bold text-brand-primary uppercase tracking-wide mb-2 group-hover:text-brand-accent transition-colors">{t.client}</h3>
                  {t.industry && <p className="text-xs font-bold text-slate-400 uppercase mb-6">{t.industry}</p>}
                  
                  <p className="text-slate-600 mb-6 italic min-h-[3rem]">"{t.description}"</p>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-slate-400 mb-1">Transaction Value</p>
                  <p className="text-2xl font-serif font-bold text-brand-dark">{t.amount}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  const [activeStudy, setActiveStudy] = useState<string | null>(null);

  const toggleStudy = (id: string) => {
    setActiveStudy(activeStudy === id ? null : id);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content: Case Studies */}
          <div className="lg:col-span-2">
            <FadeIn className="mb-10">
              <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Strategic Insights</h2>
              <p className="text-slate-600 text-lg">
                Real-world examples of how we navigate complex financial challenges.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {CASE_STUDIES.map((study, idx) => (
                <FadeIn key={study.id} delay={idx * 100}>
                  <div className="bg-white shadow-sm overflow-hidden rounded-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-brand-accent/30 group">
                    <button 
                      onClick={() => toggleStudy(study.id)}
                      className="w-full text-left p-6 md:p-8 flex justify-between items-center transition-colors hover:bg-gray-50/50"
                    >
                      <div>
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2 block">{study.category}</span>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-primary group-hover:text-brand-dark transition-colors">{study.title}</h3>
                      </div>
                      <div className={`transition-transform duration-300 text-brand-accent ${activeStudy === study.id ? 'rotate-90' : ''}`}>
                        <ChevronRight size={24} />
                      </div>
                    </button>

                    {activeStudy === study.id && (
                      <div className="px-6 md:px-8 pb-8 border-t border-gray-100 bg-gray-50/30 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="py-6 grid gap-8 md:grid-cols-2">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2">
                                <Building size={16} className="text-brand-accent" /> Client Profile
                              </h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{study.clientProfile}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2">
                                <ShieldAlert size={16} className="text-brand-accent" /> The Challenge
                              </h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2">
                                <TrendingUp size={16} className="text-brand-accent" /> Strategy & Execution
                              </h4>
                              <p className="text-slate-600 text-sm leading-relaxed mb-4">{study.strategy}</p>
                              <p className="text-slate-600 text-sm leading-relaxed italic border-l-2 border-brand-accent pl-3">
                                "{study.execution}"
                              </p>
                            </div>
                            <div className="bg-brand-primary text-white p-6 rounded-sm shadow-inner">
                              <h4 className="font-bold mb-2 flex items-center gap-2 text-brand-accent">
                                <Award size={18} /> The Outcome
                              </h4>
                              <p className="text-sm leading-relaxed font-medium">{study.result}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Sidebar: Market Commentary */}
          <div className="lg:col-span-1">
             <FadeIn delay={300}>
              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm sticky top-24">
                <h3 className="text-xl font-serif font-bold text-brand-primary mb-6 flex items-center gap-2">
                  <FileText className="text-brand-accent" size={20} />
                  Market Commentary
                </h3>
                <div className="space-y-6">
                  {INSIGHT_POSTS.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">{post.category}</span>
                        <span className="text-xs text-slate-400">{post.date}</span>
                      </div>
                      <h4 className="text-base font-bold text-brand-primary group-hover:text-brand-accent transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <div className="mt-2 text-xs font-bold text-brand-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        Read Note <ArrowUpRight size={12} />
                      </div>
                      {idx !== INSIGHT_POSTS.length - 1 && <div className="h-px bg-gray-100 mt-4"></div>}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <button className="text-sm font-bold text-brand-dark border border-brand-dark px-6 py-3 hover:bg-brand-dark hover:text-white transition-all uppercase tracking-wide w-full">
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">Get in Touch</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Discuss your capital requirements with our senior bankers. All consultations are strictly confidential.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-brand-primary/5 p-3 rounded-full">
                  <MapPin className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary">Corporate Office</h3>
                  <p className="text-slate-600">Ascent Pinnacle Capital Ltd.<br />76D Udhyog Vihar PH4, Sector 18, Gurugram, India. </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-brand-primary/5 p-3 rounded-full">
                  <Mail className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary">Email Us</h3>
                  <p className="text-slate-600">info@ascentpinnacle.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-brand-primary/5 p-3 rounded-full">
                  <Phone className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary">Call Us</h3>
                  <p className="text-slate-600">+91 11 1234 5678</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-100">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"></textarea>
                </div>
                <button className="w-full bg-brand-primary text-white font-bold py-4 px-4 rounded-sm hover:bg-brand-dark hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [page, setPage] = useState<Page>(Page.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case Page.HOME: return <HomePage onNavigate={setPage} />;
      case Page.ABOUT: return <AboutPage />;
      case Page.SERVICES: return <ServicesPage />;
      case Page.TRANSACTIONS: return <TransactionsPage />;
      case Page.CASE_STUDIES: return <CaseStudiesPage />;
      case Page.CONTACT: return <ContactPage />;
      default: return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
