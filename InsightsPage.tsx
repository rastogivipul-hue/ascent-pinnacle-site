// src/InsightsPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { INSIGHTS } from './data';

// Internal FadeIn component since we might not have UI.tsx
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

const InsightsPage: React.FC = () => {
  if (!INSIGHTS || INSIGHTS.length === 0) {
    return <div className="p-12 text-center text-slate-500">No insights found.</div>;
  }

  const featuredPost = INSIGHTS[0];
  const otherPosts = INSIGHTS.slice(1);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulating an API call
    setTimeout(() => {
      setStatus('success');
      setMessage('You have been subscribed to our deal flow digest.');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 pb-20">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-amber-600"></span>
            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">Thought Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Market <span className="text-slate-500">Perspectives</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg leading-relaxed">
            Deep dives into debt capital markets, regulatory shifts, and investment strategies.
          </p>
        </FadeIn>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <FadeIn delay={100}>
          <Link to={`/insights/${featuredPost.id}`} className="group relative w-full h-[500px] block rounded-sm overflow-hidden shadow-xl cursor-pointer">
            <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-amber-500 mb-4">
                <span className="bg-amber-600/20 px-3 py-1 rounded border border-amber-600/30 backdrop-blur-md">Featured Report</span>
                <span className="flex items-center gap-2 text-slate-300"><Calendar size={14} /> {featuredPost.date}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 max-w-4xl leading-tight group-hover:text-slate-200 transition-colors">{featuredPost.title}</h3>
              <p className="text-slate-300 text-lg max-w-2xl mb-8 line-clamp-2">{featuredPost.summary}</p>
              <div className="flex items-center gap-3 text-white font-medium group-hover:gap-5 transition-all duration-300">Read Full Report <ArrowRight size={20} className="text-amber-500" /></div>
            </div>
          </Link>
        </FadeIn>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 100}>
              <Link to={`/insights/${post.id}`} className="group flex flex-col h-full bg-white border border-slate-200 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden">
                <div className="p-6 pb-0 flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-full text-slate-500 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                    <post.icon size={20} />
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">{post.category}</span>
                </div>
                <div className="px-6 flex-grow">
                  <h4 className="text-xl font-serif text-slate-900 mb-3 leading-snug group-hover:text-amber-700 transition-colors">{post.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">{post.summary}</p>
                </div>
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 mt-auto bg-slate-50/50">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-600" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <BookOpen className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif text-white mb-4">Stay Informed</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get our monthly "Private Credit & Special Situations" digest delivered directly to your inbox.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600 disabled:opacity-50"
              />
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-slate-700 text-white font-medium uppercase tracking-wide text-sm rounded-sm transition-colors whitespace-nowrap flex items-center justify-center min-w-[140px]"
              >
                {status === 'loading' ? <Loader2 className="animate-spin h-5 w-5" /> : status === 'success' ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 flex items-center justify-center gap-2 text-green-400 text-sm">
                <CheckCircle size={16} /> {message}
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} /> {message}
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
