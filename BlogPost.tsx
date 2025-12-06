// src/BlogPost.tsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { INSIGHTS } from './data';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the post
  const post = INSIGHTS.find((p) => p.id === Number(id));

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

        <div className="prose prose-lg prose-slate prose-headings:font-serif prose-a:text-amber-600 hover:prose-a:text-amber-500">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
            <span className="text-slate-500 text-sm">Written by Ascent Pinnacle Capital</span>
            <button className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
                <Share2 size={16} /> Share
            </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
