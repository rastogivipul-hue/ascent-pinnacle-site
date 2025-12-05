import React from 'react';
import { Briefcase, Building, TrendingUp, ShieldAlert, Globe, PieChart, Search, FileSearch, Layers, Rocket, Target, Factory, Landmark, Radio, FileText } from 'lucide-react';
import { TeamMember, Transaction, Service, CaseStudy, MethodologyStep, Sector, InsightPost } from './types';

// --- Team Data ---
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Subhash Rastogi",
    role: "Chairman",
    bio: [
      "Founder of Ascent Pinnacle Capital Limited (2004).",
      "Over four decades of experience in financing, analyzing, and investing in public and private companies.",
      "Actively involved in managing the firm's strategic direction and high-level relationships."
    ],
    imageUrl: "https://picsum.photos/400/500?grayscale&random=1"
  },
  {
    name: "Vipul Kumar Rastogi",
    role: "Managing Director",
    bio: [
      "Over 18 years of experience in financial markets, specializing in complex, high-stakes transactions.",
      "Expertise in pre-structured, risk-mitigated deals for mid-market enterprises.",
      "Focuses on special situation funding, bridge finance, debt syndication, and capital structuring."
    ],
    imageUrl: "https://picsum.photos/400/500?grayscale&random=2"
  },
  {
    name: "Ashish Kumar",
    role: "President CF",
    bio: [
      "Over two decades of experience in the mutual fund industry, managing debt, equity, and balanced funds.",
      "Deep expertise in strategies, negotiations, risk management, and compliance.",
      "Holds long-standing relationships with institutions and corporates across diverse industry verticals."
    ],
    imageUrl: "https://picsum.photos/400/500?grayscale&random=3"
  }
];

// --- Transaction Data (from PDF) ---
export const TRANSACTIONS: Transaction[] = [
  {
    client: "Ameya Group",
    industry: "Real Estate",
    description: "Structured Credit Resolution / Distress Transaction",
    dealType: "Structured Finance",
    amount: "INR 1 Billion"
  },
  {
    client: "Mahindra & Mahindra Financial Services",
    industry: "Financial Services",
    description: "Primary Issue NCD: Private Placement with leading Pension Funds",
    dealType: "Debt Syndication",
    amount: "INR 5 Billion"
  },
  {
    client: "Adani Enterprises Limited",
    industry: "Conglomerate",
    description: "Short Term Credit Facility - Private Placement with Treasuries",
    dealType: "Credit Facility",
    amount: "INR 500 Million"
  },
  {
    client: "Shapoorji Pallonji Group",
    industry: "Real Estate",
    description: "Structured Funding / Special Situation Funding",
    dealType: "Structured Finance",
    amount: "INR 970 Million"
  },
  {
    client: "Dewan Housing Finance Limited",
    industry: "Financial Services",
    description: "Primary Issue NCD with leading Pension Funds",
    dealType: "Debt Capital Markets",
    amount: "INR 2,750 Million"
  },
  {
    client: "RHC Holding Private Limited",
    industry: "Healthcare/Holding",
    description: "Promoter Funding for Settlement @ HoldCo",
    dealType: "Promoter Funding",
    amount: "INR 200 Million"
  },
  {
    client: "First Gulf Bank (India)",
    industry: "Banking",
    description: "On Exposure Domestic NCD - NCD Takeover Advisory",
    dealType: "Advisory",
    amount: "INR 1.8 Billion"
  },
  {
    client: "Jana Small Finance Bank",
    industry: "Banking",
    description: "Short Term Credit",
    dealType: "Syndication",
    amount: "INR 2 Billion"
  },
   {
    client: "Tata Steel Limited (formerly Bhushan Steel Limited",
    industry: "Integrated Steel Producer",
    description: "Equity Placement with Institutional Investors",
    dealType: "Equity Placement",
    amount: "INR 2,350 Million"
  },
  {
    client: "Tulip Telecom Limited",
    industry: "Service Provider",
    description: "Debt Syndication with Domestic Financial Institutions",
    dealType: "Syndication",
    amount: "INR 3,000 Million"
  }
];

// --- Services Data ---
export const SERVICES: Service[] = [
  {
    title: "Structured Funding",
    description: "Bespoke financial instruments designed for complex capital requirements.",
    details: [
      "Special Situation Funding",
      "Promoter Financing",
      "Mezzanine Debt",
      "Acquisition Financing"
    ],
    icon: <Building className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Debt Syndication",
    description: "Leveraging global relationships to arrange capital from diverse lenders.",
    details: [
      "Term Loans & Working Capital",
      "NCD Placements",
      "Project Finance",
      "Consortium Lending"
    ],
    icon: <Briefcase className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Distressed Asset Resolution",
    description: "Strategic advisory for turnaround situations and NPA management.",
    details: [
      "One Time Settlements (OTS)",
      "Corporate Debt Restructuring",
      "NCLT / IBC Advisory",
      "Priority Funding"
    ],
    icon: <ShieldAlert className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "M&A and Advisory",
    description: "End-to-end guidance on mergers, acquisitions, and divestitures.",
    details: [
      "Buy-side & Sell-side Advisory",
      "Valuation Services",
      "Due Diligence",
      "Joint Ventures"
    ],
    icon: <Globe className="w-8 h-8 text-brand-accent" />
  }
];

// --- Case Studies ---
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "edu-trust",
    category: "Restructuring / NGO",
    title: "Reviving Credit Access for an Educational Institution",
    clientProfile: "A prominent educational trust operating multiple colleges in Northern India, structured as a not-for-profit NGO.",
    challenge: "The client faced a severe liquidity crunch and sought ₹15 crore for refinancing and expansion. They were barred from mainstream credit due to a prior NPA classification (5-year lockout), their NGO structure which deterred risk-averse lenders, and a convoluted chain of property titles requiring original deeds from decades of transfers.",
    strategy: "Ascent Pinnacle utilized a multi-pronged structured finance approach. We engaged the Alternate Risk Division of a private bank willing to underwrite NGO risk. Simultaneously, we coordinated a massive legal reconstruction project to verify ownership history, satisfying strict collateral requirements.",
    execution: "Our team worked alongside legal experts to source original buy-sell deeds, reconstructing the title chain. We structured the credit to address the lender's specific risk concerns regarding the NGO's cash flow visibility, effectively rehabilitating the client's credit profile through improved governance demonstration.",
    result: "Successfully navigated the client back into the formal banking system. Secured the full ₹15 Crore term loan at a competitive interest rate, a feat previously deemed impossible given the NPA history."
  },
  {
    id: "ameya-real-estate",
    category: "Structured Credit / Real Estate",
    title: "Structured Credit Resolution for a Stalled Real Estate Project",
    clientProfile: "Mid-sized real estate developer in Northern India with a flagship residential-cum-commercial project facing execution bottlenecks.",
    challenge: "The project was stalled due to legacy debt issues, a prior One-Time Settlement (OTS) that restricted new credit, and complex structural rigidity (single operating entity). Legal pressures from criminal complaints and unsecured high-cost liabilities threatened immediate insolvency (IBC).",
    strategy: "We designed a 'Ring-Fenced' transaction structure. We identified UTI Structured Credit Platform as an institutional investor. The deal isolated project cash flows from promoter liabilities using dedicated escrow mechanisms and milestone-based disbursements.",
    execution: "Ascent Pinnacle managed the intense due diligence required by UTI's credit committee, creating mitigants for litigation risk and vetting the past OTS. We facilitated a structured infusion of capital specifically allocated to restart construction and clear critical liabilities.",
    result: "Secured ₹100 Crores in structured capital. This prevented insolvency, allowed construction to restart, restored customer confidence, and cleared high-cost legacy debt."
  },
  {
    id: "pharma-acquisition",
    category: "M&A / LBO",
    title: "Cross-Border Acquisition Strategy for Mid-Market Pharma",
    clientProfile: "A rapidly growing Indian pharmaceutical manufacturer specializing in active pharmaceutical ingredients (APIs).",
    challenge: "The client identified a strategic target in Eastern Europe to gain access to EU markets. However, the client's balance sheet was leveraged, and they lacked the free cash flow to fund the $45 Million acquisition upfront. Traditional banks were hesitant to fund an overseas asset purchase.",
    strategy: "Ascent Pinnacle structured a Leveraged Buyout (LBO) model using the target entity's cash flows. We arranged a mix of senior debt from an international credit fund and mezzanine financing to bridge the equity gap.",
    execution: "We navigated complex cross-border regulatory hurdles, including RBI's Overseas Direct Investment (ODI) guidelines. We successfully negotiated a contingent payout structure (earn-out) to align the seller's interests with the post-acquisition performance, reducing immediate capital outflow.",
    result: "Successfully raised $35 Million in debt financing. The acquisition closed within 6 months, resulting in a 40% immediate increase in the client's top-line revenue and direct access to EU distribution networks."
  },
  {
    id: "steel-working-capital",
    category: "Debt Syndication",
    title: "Consortium Syndication for Heavy Industry Expansion",
    clientProfile: "A leading secondary steel manufacturer with a turnover of ₹800 Crores planning a capacity expansion.",
    challenge: "Volatile raw material prices caused a severe working capital gap, stalling the expansion. Existing lenders were tapped out on exposure limits, and the client needed a significant limit enhancement (₹250 Crores) in a tightening credit market for the steel sector.",
    strategy: "We proposed a 'Pari-Passu' charge sharing arrangement involving a new consortium of three PSU banks and two private lenders. We utilized a mix of Cash Credit (CC) limits and non-fund-based limits (LC/BG) to optimize interest costs.",
    execution: "Ascent Pinnacle prepared a detailed Techno-Economic Viability (TEV) study to demonstrate the expansion's ROI. We brokered the inter-creditor agreement, convincing the lead bank to cede charge on specific assets to bring new lenders into the consortium.",
    result: "Achieved financial closure for ₹250 Crores in working capital and term loans. The client completed the expansion on time, increasing production capacity by 25%."
  },
  {
    id: "logistics-pre-ipo",
    category: "Private Equity / Pre-IPO",
    title: "Pre-IPO Placement for Logistics Tech Unicorn",
    clientProfile: "A tech-enabled logistics and supply chain company preparing for a public listing.",
    challenge: "The company needed bridge capital to strictly improve their balance sheet deleveraging ratios before filing their DRHP (Draft Red Herring Prospectus). They required a valuation benchmark that would support their ambitious IPO pricing.",
    strategy: "We targeted marquee Family Offices and High Net-Worth Individuals (HNIs) rather than traditional VC funds to ensure a faster closing timeline and less interference in governance. We structured the deal as Compulsorily Convertible Preference Shares (CCPS).",
    execution: "Marketing the deal as a 'Pre-IPO Anchor' opportunity, we highlighted the arbitrage between the entry price and expected listing price. We managed the virtual data room and investor roadshows confidentially to prevent market rumors.",
    result: "Raised ₹120 Crores at a valuation 15% higher than the previous round. The capital infusion improved the Debt-to-Equity ratio from 2.5x to 1.1x, positioning the company for a successful IPO filing."
  }
];

// --- Methodology Steps ---
export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    title: "Strategic Origination",
    description: "Leveraging proprietary networks to identify off-market opportunities before they hit the general street.",
    icon: <Search className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Forensic Due Diligence",
    description: "Rigorous stress-testing of asset quality, legal standing, and operational viability.",
    icon: <FileSearch className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Bespoke Structuring",
    description: "Engineering complex credit protections and cash-flow ring-fencing to mitigate specific risks.",
    icon: <Layers className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Controlled Deployment",
    description: "Milestone-based capital infusion ensuring funds are utilized strictly for value accretion.",
    icon: <Rocket className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Value Realization",
    description: "Active monitoring and strategic advisory to ensure optimal exit and yield maximization.",
    icon: <Target className="w-8 h-8 text-brand-accent" />
  }
];

// --- Sectors ---
export const SECTORS: Sector[] = [
  {
    title: "Real Estate",
    description: "Expertise in last-mile funding, distressed resolution, and liquidity solutions for large-scale residential and commercial developments.",
    icon: <Building className="w-10 h-10 text-brand-dark" />
  },
  {
    title: "Heavy Industry",
    description: "Providing working capital, capex financing, and debt restructuring for steel, cement, and manufacturing giants.",
    icon: <Factory className="w-10 h-10 text-brand-dark" />
  },
  {
    title: "Financial Services",
    description: "Structuring capital adequacy solutions, NCD placements, and liquidity bridges for NBFCs and HFCs.",
    icon: <Landmark className="w-10 h-10 text-brand-dark" />
  },
  {
    title: "Infrastructure",
    description: "Long-term financing and consortium syndication for telecommunications, power, and road projects.",
    icon: <Radio className="w-10 h-10 text-brand-dark" />
  }
];

// --- Insights Posts ---
export const INSIGHT_POSTS: InsightPost[] = [
  {
    title: "The IBC Landscape: Navigating Insolvency 5 Years On",
    date: "October 2023",
    category: "Regulatory"
  },
  {
    title: "Private Credit: The New Alpha in Indian Markets",
    date: "September 2023",
    category: "Market Trends"
  },
  {
    title: "Structuring for Downside Protection in Volatile Cycles",
    date: "August 2023",
    category: "Investment Strategy"
  },
  {
    title: "The Rise of Special Situation Funds in Real Estate",
    date: "July 2023",
    category: "Real Estate"
  },
  {
    title: "Regulatory Shifts: Impact on NBFC Liquidity 2024",
    date: "June 2023",
    category: "Banking"
  }
];