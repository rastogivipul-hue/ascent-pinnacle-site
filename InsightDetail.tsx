import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { INSIGHTS } from './data';

const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = INSIGHTS.find((p) => p.id === Number(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-serif text-slate-900 mb-4">Article not found</h2>
        <Link to="/insights" className="text-amber-600 hover:text-amber-700 flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border border-white/30 bg-white/10 backdrop-blur-md rounded-sm">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-slate-200 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm">
          {/* Breadcrumb */}
          <Link to="/insights" className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to All Insights
          </Link>

          {/* Article Body (Simulated) */}
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="lead text-xl text-slate-600 font-serif italic mb-8 border-l-4 border-amber-500 pl-4">
              {post.summary}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3>Strategic Implications</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Share Footer */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
            <span className="text-slate-500 text-sm">Written by Ascent Pinnacle Team</span>
            <button className="flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors">
              <Share2 size={18} /> <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetail;
