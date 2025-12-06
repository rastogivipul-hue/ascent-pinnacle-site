// src/data.ts
import { TrendingUp, Scale, Building, FileText, BookOpen } from 'lucide-react';

export const INSIGHTS = [
  {
    id: 1,
    title: "The Shift from Banking to Private Credit: Opportunities for Indian Promoters",
    category: "Market Outlook",
    date: "Dec 01, 2025",
    readTime: "8 min read",
    summary: "As traditional banking channels tighten lending norms for mid-market expansion, private credit funds are stepping in to fill the ₹50,000 Cr liquidity gap. We analyze the structural benefits of this capital shift for promoters.",
    content: "Full article content goes here...", // Placeholder for dynamic loading
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "IBC 2016: Navigating the New Resolution Framework",
    category: "Regulatory",
    date: "Nov 20, 2025",
    readTime: "5 min read",
    summary: "Analyzing recent amendments to the Insolvency and Bankruptcy Code and their impact on promoters seeking one-time settlements (OTS) vs. Corporate Insolvency Resolution Processes (CIRP).",
    content: "Full article content goes here...",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071", // Added placeholder image
    icon: Scale
  },
  {
    id: 3,
    title: "Optimizing Capital Structure for High-Growth CAPEX",
    category: "Structured Finance",
    date: "Nov 12, 2025",
    readTime: "6 min read",
    summary: "Why a mix of senior debt and mezzanine financing is becoming the preferred route for infrastructure projects in Tier-2 cities, minimizing equity dilution while maximizing leverage.",
    content: "Full article content goes here...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    icon: Building
  },
  {
    id: 4,
    title: "Distressed Asset Turnarounds: A Playbook for 2026",
    category: "Special Situations",
    date: "Oct 30, 2025",
    readTime: "7 min read",
    summary: "Key strategies for unlocking value in non-performing assets (NPAs) through operational restructuring, management overhaul, and strategic refinancing.",
    content: "Full article content goes here...",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2072",
    icon: FileText
  },
  {
    id: 5,
    title: "AIF Category II: The New Vehicle for Real Estate Financing",
    category: "Real Estate",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    summary: "With NBFC liquidity tightening, Alternative Investment Funds (AIFs) are becoming the primary source of last-mile funding for residential developers in NCR and MMR.",
    content: "Full article content goes here...",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&q=80&w=2069",
    icon: Building
  },
  {
    id: 6,
    title: "Cross-Border M&A: Managing Currency & Credit Risk",
    category: "Advisory",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    summary: "Essential compliance checks and hedging strategies for Indian corporates looking to acquire distressed assets in European and SE Asian markets.",
    content: "Full article content goes here...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
    icon: BookOpen
  }
];
