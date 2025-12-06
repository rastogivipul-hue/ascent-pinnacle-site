// src/BlogPost.tsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { INSIGHTS } from './data';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find the post
  const post = INSIGHTS.find((p) => p.id === Number(id));

  // Handle Share Functionality
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-serif text-slate-800 mb-4">Article not found</h2>
        <button onClick={() => navigate('/insights')} className="text-amber-600 hover:underline">
          Return to Insights
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero Section */}
      <div className="w-full h-[400px] relative mb-12">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
             <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider text-amber-500 mb-6">
                <span className="bg-amber-600/20 px-3 py-1 rounded border border-amber-600/30 backdrop-blur-md">{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-slate-300 text-sm">
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/insights" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
        </Link>

        {/* FIXED: We use the 'components' prop to manually style every Markdown element.
            This ensures Headers look big, Lists have bullets, and Spacing is correct.
        */}
        <div className="text-slate-800 leading-relaxed">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-serif text-slate-900 font-bold mt-12 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-bold mt-10 mb-5 border-b border-slate-200 pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-serif text-slate-900 font-bold mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 text-lg text-slate-700 leading-8" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-700" {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-amber-500 pl-4 italic my-6 text-slate-600 bg-slate-50 py-2 pr-4 rounded-r" {...props} />,
              hr: ({node, ...props}) => <hr className="my-10 border-slate-200" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* FIXED: Share Button with Copy Functionality */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
            <span className="text-slate-500 text-sm">Written by Ascent Pinnacle Capital</span>
            
            <button 
              onClick={handleShare}
              className={`flex items-center gap-2 transition-all duration-300 ${
                copied ? 'text-green-600' : 'text-slate-600 hover:text-amber-600'
              }`}
            >
                {copied ? <Check size={18} /> : <Share2 size={18} />}
                {copied ? 'Link Copied!' : 'Share Article'}
            </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
