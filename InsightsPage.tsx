import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  FileText, 
  BookOpen, 
  Scale, 
  Building,
  Calendar,
  Clock
} from 'lucide-react';
import { FadeIn } from './UI';

// --- DATA CONFIGURATION ---
const INSIGHTS = [
  // FEATURED POST (Index 0 is always the featured one)
  {
    id: 1,
    title: "The Shift from Banking to Private Credit: Opportunities for Indian Promoters",
    category: "Market Outlook",
    date: "Dec 01, 2025",
    readTime: "8 min read",
    summary: "As traditional banking channels tighten lending norms for mid-market expansion, private credit funds are stepping in to fill the ₹50,000 Cr liquidity gap. We analyze the structural benefits of this capital shift for promoters.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    icon: TrendingUp
  },
  // GRID POSTS
  {
    id: 2,
    title: "IBC 2016: Navigating the New Resolution Framework",
    category: "Regulatory",
    date: "Nov 20, 2025",
    readTime: "5 min read",
    summary: "Analyzing recent amendments to the Insolvency and Bankruptcy Code and their impact on promoters seeking one-time settlements (OTS) vs. Corporate Insolvency Resolution Processes (CIRP).",
    icon: Scale
  },
  {
    id: 3,
    title: "Optimizing Capital Structure for High-Growth CAPEX",
    category: "Structured Finance",
    date: "Nov 12, 2025",
    readTime: "6 min read",
    summary: "Why a mix of senior debt and mezzanine financing is becoming the preferred route for infrastructure projects in Tier-2 cities, minimizing equity dilution while maximizing leverage.",
    icon: Building
  },
  {
    id: 4,
    title: "Distressed Asset Turnarounds: A Playbook for 2026",
    category: "Special Situations",
    date: "Oct 30, 2025",
    readTime: "7 min read",
    summary: "Key strategies for unlocking value in non-performing assets (NPAs) through operational restructuring, management overhaul, and strategic refinancing.",
    icon: FileText
  },
  {
    id: 5,
    title: "AIF Category II: The New Vehicle for Real Estate Financing",
    category: "Real Estate",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    summary: "With NBFC liquidity tightening, Alternative Investment Funds (AIFs) are becoming the primary source of last-mile funding for residential developers in NCR and MMR.",
    icon: Building
  },
  {
    id: 6,
    title: "Cross-Border M&A: Managing Currency & Credit Risk",
    category: "Advisory",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    summary: "Essential compliance checks and hedging strategies for Indian corporates looking to acquire distressed assets in European and SE Asian markets.",
    icon: BookOpen
  }
];

const InsightsPage: React.FC = () => {
  const featuredPost = INSIGHTS[0];
  const otherPosts = INSIGHTS.slice(1);

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-amber-600"></span>
            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">
              Thought Leadership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Market <span className="text-slate-500">Perspectives</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed">
            Deep dives into debt capital markets, regulatory shifts, and investment strategies. 
            We share what we see on the ground to help you stay ahead.
          </p>
        </FadeIn>
      </div>

      {/* --- Featured Article (Hero Card) --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <FadeIn delay={100}>
          <div className="group relative w-full h-[500px] rounded-sm overflow-hidden shadow-xl cursor-pointer">
            {/* Background Image */}
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-amber-500 mb-4">
                <span className="bg-amber-600/20 px-3 py-1 rounded border border-amber-600/30 backdrop-blur-md">
                  Featured Report
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Calendar size={14} /> {featuredPost.date}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 max-w-4xl leading-tight group-hover:text-slate-200 transition-colors">
                {featuredPost.title}
              </h3>
              
              <p className="text-slate-300 text-lg max-w-2xl mb-8 line-clamp-2 md:line-clamp-3 leading-relaxed">
                {featuredPost.summary}
              </p>

              <div className="flex items-center gap-3 text-white font-medium group-hover:gap-5 transition-all duration-300">
                Read Full Report <ArrowRight size={20} className="text-amber-500" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* --- Article Grid --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
          <h3 className="text-2xl font-serif text-slate-900">Latest Articles</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 100}>
              <div className="group flex flex-col h-full bg-white border border-slate-200 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden cursor-pointer">
                
                {/* Card Header */}
                <div className="p-6 pb-0 flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-full text-slate-500 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                    <post.icon size={20} />
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    {post.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="px-6 flex-grow">
                  <h4 className="text-xl font-serif text-slate-900 mb-3 leading-snug group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 mt-auto bg-slate-50/50">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-600" />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* --- Newsletter / CTA Section --- */}
      <div className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <BookOpen className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
              Get our monthly "Private Credit & Special Situations" digest delivered directly to your inbox. No spam, just deal flow and analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600"
              />
              <button className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium uppercase tracking-wide text-sm rounded-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-slate-600 mt-4 uppercase tracking-widest">
              Join 2,500+ Industry Professionals
            </p>
          </FadeIn>
        </div>
      </div>

    </div>
  );
};

export default InsightsPage;
