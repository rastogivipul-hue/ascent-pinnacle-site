import React from 'react';
import {
  TrendingUp,
  Shield,
  BarChart3,
  Building,
  Zap,
  PieChart,
  CheckCircle,
  ArrowRight,
  IndianRupee,
  Clock,
  Star
} from 'lucide-react';
import { FadeIn } from './UI';
import { Link } from 'react-router-dom';

// ==========================================
// DATA
// ==========================================

const PRODUCTS = [
  {
    id: 1,
    name: 'High-Yield NCDs',
    yieldRange: '12–18% p.a.',
    yieldColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    icon: TrendingUp,
    description: 'Non-Convertible Debentures issued by well-rated corporate borrowers and structured by leading AIFs, offering fixed periodic coupons with predictable cash flows.',
    features: [
      'Listed or unlisted instruments with defined maturity',
      'Monthly / quarterly interest payout options',
      'Security cover via mortgage or pledge of promoter shares',
      'SEBI-regulated structures for institutional comfort',
    ],
    minTicket: '₹25 Lakhs',
    risk: 'Moderate',
    riskColor: 'text-amber-400',
  },
  {
    id: 2,
    name: 'Private Credit AIF Co-investments',
    yieldRange: '15–22% IRR',
    yieldColor: 'bg-green-500/20 text-green-400 border border-green-500/30',
    icon: BarChart3,
    description: 'Direct co-investment alongside top-tier Category II AIFs into curated private credit deals, accessing institutional-grade deal flow with enhanced economics.',
    features: [
      'Co-invest alongside ₹1,000+ Cr AIF platforms',
      'Deal-by-deal basis with full transparency',
      'Secured by first or second lien on real assets',
      'Typical tenor: 24–36 months with structured exits',
    ],
    minTicket: '₹1 Crore',
    risk: 'Moderate–High',
    riskColor: 'text-orange-400',
  },
  {
    id: 3,
    name: 'REITs & InvITs',
    yieldRange: '7–10% yield + appreciation',
    yieldColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    icon: Building,
    description: 'Exchange-listed Real Estate Investment Trusts and Infrastructure Investment Trusts offering stable distribution yields backed by Grade-A commercial or infrastructure assets.',
    features: [
      'Mandatory 90% distribution of net distributable cash flows',
      'Liquidity via NSE/BSE exchange listing',
      'Underlying assets: Grade-A offices, data centres, highways, power transmission',
      'Inflation-linked rent escalations providing capital appreciation',
    ],
    minTicket: '₹10,000 (retail) / ₹25 Lakhs (institutional)',
    risk: 'Low–Moderate',
    riskColor: 'text-green-400',
  },
  {
    id: 4,
    name: 'Structured Mezzanine Debt',
    yieldRange: '16–20% + equity upside',
    yieldColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    icon: Zap,
    description: 'Hybrid debt instruments combining a fixed coupon with equity kickers (warrants, revenue share, or CCPS), delivering superior risk-adjusted returns in high-growth businesses.',
    features: [
      'Fixed IRR component of 14–16% p.a. plus upside participation',
      'Invested into growth-stage and pre-IPO companies',
      'Secured by combination of pledge, charge, and promoter guarantee',
      'Equity kicker exercisable at pre-defined conditions or exit events',
    ],
    minTicket: '₹50 Lakhs',
    risk: 'High',
    riskColor: 'text-red-400',
  },
  {
    id: 5,
    name: 'Lease Rental Discounting / LRD',
    yieldRange: '11–14% secured',
    yieldColor: 'bg-teal-500/20 text-teal-400 border border-teal-500/30',
    icon: Shield,
    description: 'Secured lending against future rental cash flows from Grade-A commercial properties with long-tenured leases from blue-chip tenants, offering highly predictable income.',
    features: [
      'Backed by tri-partite agreement with tenant and lender',
      'Tenants typically include MNCs, IT majors, and PSUs',
      'Primary security: Equitable mortgage of the leased property',
      'Low correlation with equity market volatility',
    ],
    minTicket: '₹50 Lakhs',
    risk: 'Low–Moderate',
    riskColor: 'text-green-400',
  },
];

const VALUE_PROPS = [
  {
    icon: Star,
    title: 'Curated Deal Access',
    description: 'Exclusive access to institutional-grade passive income products not available through retail banking or public markets — sourced from our deep network of AIFs, developers, and corporate issuers.',
  },
  {
    icon: Shield,
    title: 'End-to-End Due Diligence',
    description: 'Every instrument we place undergoes rigorous credit underwriting, legal review, and security structure validation before it reaches our clients. We stake our reputation on every deal.',
  },
  {
    icon: PieChart,
    title: 'Portfolio-Level Thinking',
    description: 'We structure yield portfolios with deliberate diversification across risk tiers, tenors, and asset classes — ensuring your income stream is resilient across market cycles.',
  },
  {
    icon: IndianRupee,
    title: 'Aligned Economics',
    description: 'Our fee structure is transaction-based. We earn when you deploy capital into suitable instruments — ensuring our advice is always in your interest, not inventory-driven.',
  },
];

const YIELD_TABLE_DATA = [
  {
    product: 'High-Yield NCDs',
    yield: '12–18% p.a.',
    tenor: '12–36 months',
    risk: 'Moderate',
    riskBadge: 'bg-amber-500/20 text-amber-400',
    liquidity: 'Low (listed) / Nil (unlisted)',
  },
  {
    product: 'Private Credit AIF Co-investments',
    yield: '15–22% IRR',
    tenor: '24–48 months',
    risk: 'Moderate–High',
    riskBadge: 'bg-orange-500/20 text-orange-400',
    liquidity: 'Illiquid (locked-in)',
  },
  {
    product: 'REITs & InvITs',
    yield: '7–10% + NAV growth',
    tenor: 'Perpetual / Open-ended',
    risk: 'Low–Moderate',
    riskBadge: 'bg-green-500/20 text-green-400',
    liquidity: 'High (exchange listed)',
  },
  {
    product: 'Structured Mezzanine Debt',
    yield: '16–20% + upside',
    tenor: '24–48 months',
    risk: 'High',
    riskBadge: 'bg-red-500/20 text-red-400',
    liquidity: 'Illiquid (till exit)',
  },
  {
    product: 'Lease Rental Discounting (LRD)',
    yield: '11–14% p.a.',
    tenor: '36–84 months',
    risk: 'Low–Moderate',
    riskBadge: 'bg-green-500/20 text-green-400',
    liquidity: 'Low (tradeable in secondary)',
  },
];

// ==========================================
// COMPONENT
// ==========================================

const PassiveIncomePage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <FadeIn direction="up" delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">
                Investment Solutions
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl mb-6">
              Yield &amp; Passive Income{' '}
              <span className="text-amber-500">Solutions</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Institutional-grade passive income products for HNIs, Family Offices, and Institutional
              Investors. We curate, structure, and place yield instruments that generate predictable
              cash flows across market cycles — with the risk controls your capital deserves.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <div className="flex flex-wrap gap-8">
              {[
                { label: 'Yield Range', value: '7–22%' },
                { label: 'Min. Ticket Sizes', value: '₹10K–₹1Cr+' },
                { label: 'Asset Classes', value: '5 Products' },
                { label: 'Client Types', value: 'HNI / FO / Inst.' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-amber-500 pl-4">
                  <div className="text-2xl font-serif text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= PRODUCT CARDS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">
                Our Product Suite
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-3">
                Five Instruments. One Objective: Your Yield.
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                Each product is independently sourced, underwritten, and structured — matched to your
                specific risk appetite, liquidity requirements, and return targets.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, index) => {
              const Icon = product.icon;
              return (
                <FadeIn key={product.id} direction="up" delay={index * 80}>
                  <div className="bg-slate-50 border border-slate-200 rounded-sm p-6 h-full flex flex-col hover:border-amber-400 hover:shadow-lg transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white border border-slate-200 rounded-sm group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                        <Icon size={20} className="text-amber-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${product.yieldColor}`}>
                        {product.yieldRange}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif text-slate-900 mb-3 leading-snug">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-slate-400 text-xs uppercase tracking-widest mb-1">
                          <IndianRupee size={10} />
                          Min. Ticket
                        </div>
                        <div className="text-slate-900 font-bold text-sm">{product.minTicket}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">Risk</div>
                        <div className={`font-bold text-sm ${product.riskColor}`}>{product.risk}</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}

            {/* Bespoke CTA card */}
            <FadeIn direction="up" delay={PRODUCTS.length * 80}>
              <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 h-full flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-sm mb-4 inline-block">
                    <PieChart size={20} className="text-amber-500" />
                  </div>
                  <h3 className="text-lg font-serif text-white mb-3">
                    Bespoke Yield Portfolio
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    For Family Offices and HNIs with a corpus of ₹5 Crore+, we construct a diversified
                    passive income portfolio blending multiple instruments across risk tiers and tenors
                    — targeting a blended yield of 14–18% with built-in liquidity windows.
                  </p>
                </div>
                <a
                  href="mailto:info@ascentpinnacle.com?subject=Bespoke Yield Portfolio Enquiry"
                  className="mt-6 flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-widest hover:text-amber-400 transition-colors"
                >
                  Discuss Your Portfolio
                  <ArrowRight size={16} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= WHY ASCENT PINNACLE ================= */}
      <section className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">
                The Ascent Pinnacle Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mt-3">
                Why Passive Income Through Ascent Pinnacle?
              </h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Beyond product placement, we act as your long-term yield advisor — building structures
                that protect capital as aggressively as they generate income.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((vp, index) => {
              const Icon = vp.icon;
              return (
                <FadeIn key={vp.title} direction="up" delay={index * 100}>
                  <div className="bg-slate-900/60 border border-slate-800 rounded-sm p-6 hover:border-amber-500/40 transition-colors duration-300 h-full">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-sm mb-5 inline-block">
                      <Icon size={20} className="text-amber-500" />
                    </div>
                    <h3 className="text-white font-serif text-lg mb-3">{vp.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{vp.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= YIELD COMPARISON TABLE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="mb-12">
              <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">
                At a Glance
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-3 mb-4">
                Yield Comparison: All Products
              </h2>
              <p className="text-slate-500 max-w-2xl">
                Indicative parameters as of Q1 2026. Actual yields depend on deal-specific parameters,
                market conditions, and investor eligibility. All figures are pre-tax.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <div className="overflow-x-auto rounded-sm border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">
                      Product
                    </th>
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">
                      Indicative Yield
                    </th>
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">
                      Tenor
                    </th>
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">
                      Risk Level
                    </th>
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">
                      Liquidity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {YIELD_TABLE_DATA.map((row, index) => (
                    <tr
                      key={row.product}
                      className={`border-t border-slate-100 hover:bg-amber-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-slate-900">{row.product}</td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-amber-600">{row.yield}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-slate-400 shrink-0" />
                          {row.tenor}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${row.riskBadge}`}>
                          {row.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{row.liquidity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              * All investments are subject to market risk. Past performance is not indicative of future returns.
              Please read all offer documents carefully before investing. Investments in AIFs are suitable only for
              eligible investors as defined under SEBI (AIF) Regulations, 2012.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-bold tracking-widest text-xs uppercase">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-3">
                How We Onboard Yield Investors
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-amber-200 z-0" />

            {[
              {
                step: '01',
                title: 'Discovery Call',
                desc: 'We understand your corpus, risk appetite, tax bracket, and liquidity needs in a 30-minute consultation.',
              },
              {
                step: '02',
                title: 'Curated Proposal',
                desc: 'Our team presents a shortlist of 2–3 instruments suited to your profile, with full information memoranda.',
              },
              {
                step: '03',
                title: 'Due Diligence & KYC',
                desc: 'We facilitate independent legal review, complete all KYC/AML requirements, and finalize documentation.',
              },
              {
                step: '04',
                title: 'Deployment & Monitoring',
                desc: 'Capital is deployed with ongoing reporting on coupon receipts, covenant compliance, and portfolio status.',
              },
            ].map((step, index) => (
              <FadeIn key={step.step} direction="up" delay={index * 100}>
                <div className="relative z-10 text-center px-6 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center mb-5 shadow-sm">
                    <span className="text-2xl font-serif text-amber-600">{step.step}</span>
                  </div>
                  <h3 className="font-serif text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
          <FadeIn direction="up">
            <div className="inline-block bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Ready to Start Earning
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Build Your Passive Income Portfolio Today
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with our yield advisory team to explore instruments currently available for
              deployment. Opportunities are allocation-based and close on a first-come basis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:info@ascentpinnacle.com?subject=Yield & Passive Income – Initial Enquiry"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-widest text-sm transition-colors flex items-center gap-2 rounded-sm"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
              <Link
                to="/insights"
                className="px-8 py-4 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-amber-500 font-bold uppercase tracking-widest text-sm transition-colors rounded-sm"
              >
                Read Our Insights
              </Link>
            </div>

            <p className="text-slate-600 text-xs mt-8">
              Email us at{' '}
              <a
                href="mailto:info@ascentpinnacle.com"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                info@ascentpinnacle.com
              </a>{' '}
              with subject line "Yield Solutions Enquiry" for a discreet, no-obligation consultation.
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default PassiveIncomePage;
