// src/App.tsx
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation, 
  useNavigate 
} from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Linkedin,
  ShieldAlert,
  FileText
} from 'lucide-react';

// --- COMPONENT IMPORTS ---
import Hero from './Hero';
import AboutPage from './AboutPage';
import ServicesPage from './Services';
import TransactionsPage from './Transactions';
import InsightsPage from './InsightsPage';
import BlogPost from './BlogPost';

// --- SCROLL HELPER ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- MAIN LAYOUT CONTENT ---
const AppContent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavigate = (path: string) => {
    const routeMap: Record<string, string> = {
      'HOME': '/',
      'SERVICES': '/expertise',
      'TRANSACTIONS': '/track-record',
      'INSIGHTS': '/insights',
      'ABOUT': '/team',
      'CONTACT': '/contact'
    };
    navigate(routeMap[path] || '/');
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/track-record', label: 'Track Record' },
    { path: '/insights', label: 'Insights' },
    { path: '/team', label: 'Team' },
  ];

  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col">
      <ScrollToTop />

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-slate-950/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          <Link to="/" className="cursor-pointer z-50 group">
            <div className="text-2xl font-serif text-white tracking-tight">
              Ascent<span className="text-amber-500">Pinnacle</span>
            </div>
            <div className="text-[9px] text-slate-400 uppercase tracking-[0.3em] group-hover:text-amber-500 transition-colors">
              Capital Advisors
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-amber-500 relative group ${
                  isActive(link.path) ? 'text-amber-500' : 'text-slate-300'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-amber-500 transform origin-left transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}

            <Link 
              to="/contact"
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all border ${
                isActive('/contact') 
                  ? 'bg-amber-600 border-amber-600 text-white' 
                  : 'bg-transparent border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          <button 
            className="md:hidden text-white z-50 hover:text-amber-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`fixed inset-0 bg-slate-950 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-serif transition-colors ${
                isActive(link.path) ? 'text-amber-500' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="text-xl font-serif text-amber-500 mt-4"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* ================= MAIN CONTENT ROUTES ================= */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero onNavigate={handleNavigate} />} />
          <Route path="/team" element={<AboutPage />} />
          <Route path="/expertise" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/track-record" element={<TransactionsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<BlogPost />} />

          {/* Contact Page */}
          <Route path="/contact" element={
            <div className="pt-32 pb-20 px-6 bg-white min-h-[80vh]">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center mb-12">
                  <span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-3">Get in Touch</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-slate-900 text-center">Contact Us</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-serif text-slate-900 mb-6 border-b border-slate-200 pb-4">Corporate Office</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="p-3 bg-white border border-slate-200 rounded-full text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">New Delhi, India</p>
                          <p className="text-slate-500 text-sm mt-1">
                            Barakhamba Road, Connaught Place<br />
                            New Delhi - 110001
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 group">
                        <div className="p-3 bg-white border border-slate-200 rounded-full text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <Phone size={20} />
                        </div>
                        <p className="text-slate-600 group-hover:text-slate-900 transition-colors">+91 11 1234 5678</p>
                      </div>

                      <div className="flex items-center gap-4 group">
                        <div className="p-3 bg-white border border-slate-200 rounded-full text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <Mail size={20} />
                        </div>
                        <a href="mailto:info@ascentpinnacle.com" className="text-slate-600 hover:text-amber-600 transition-colors">
                          info@ascentpinnacle.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-8 rounded-sm text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div>
                      <h3 className="text-xl font-serif mb-6 border-b border-slate-700 pb-4">Working Hours</h3>
                      <div className="flex items-start gap-4 mb-8">
                        <Clock className="text-amber-500 mt-1" />
                        <div>
                          <p className="font-semibold text-lg">Monday - Friday</p>
                          <p className="text-slate-400">9:30 AM - 6:30 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        For strictly confidential mandates or distressed asset proposals, please mark your subject line as <span className="text-amber-500 font-medium">"Confidential / IM"</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />

          {/* --- PRIVACY POLICY PAGE --- */}
          <Route path="/privacy" element={
            <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
               <div className="max-w-3xl mx-auto">
                 <div className="flex items-center gap-3 mb-6">
                    <ShieldAlert className="text-amber-600" size={32} />
                    <h1 className="text-4xl font-serif text-slate-900">Privacy Policy</h1>
                 </div>
                 <div className="prose prose-slate prose-lg text-slate-600">
                    <p>Last Updated: December 2025</p>
                    <p>At Ascent Pinnacle Capital, we prioritize the confidentiality and security of our clients' data. This policy outlines how we handle information collected through our advisory services.</p>
                    <h3>1. Information Collection</h3>
                    <p>We collect information necessary for deal origination, due diligence, and KYC compliance. This includes corporate financial data, promoter details, and transaction specifics.</p>
                    <h3>2. Use of Information</h3>
                    <p>Data is strictly used for structuring transactions, engaging with potential lenders/investors, and regulatory compliance. We do not sell data to third parties.</p>
                    <h3>3. Confidentiality</h3>
                    <p>All sensitive mandates are protected under strict Non-Disclosure Agreements (NDAs). Access is restricted to core deal teams on a need-to-know basis.</p>
                 </div>
               </div>
            </div>
          } />

          {/* --- TERMS OF ENGAGEMENT PAGE --- */}
          <Route path="/terms" element={
            <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
               <div className="max-w-3xl mx-auto">
                 <div className="flex items-center gap-3 mb-6">
                    <FileText className="text-amber-600" size={32} />
                    <h1 className="text-4xl font-serif text-slate-900">Terms of Engagement</h1>
                 </div>
                 <div className="prose prose-slate prose-lg text-slate-600">
                    <p>These terms govern the advisory relationship between Ascent Pinnacle Capital ("The Advisor") and the Client.</p>
                    <h3>1. Scope of Services</h3>
                    <p>The Advisor agrees to provide services including but not limited to debt syndication, restructuring advisory, and M&A support as defined in the specific mandate letter.</p>
                    <h3>2. Exclusivity</h3>
                    <p>Unless otherwise agreed, mandates are accepted on an exclusive basis for a defined period to ensure market discipline and focused execution.</p>
                    <h3>3. Fees & Milestones</h3>
                    <p>Success fees and retainers are structured based on deal milestones. Payment terms are detailed in the specific Engagement Letter signed by both parties.</p>
                    <h3>4. Limitation of Liability</h3>
                    <p>While we strive for successful outcomes, Ascent Pinnacle Capital acts as an advisor and does not guarantee funding or specific deal closures, which are subject to market conditions and lender discretion.</p>
                 </div>
               </div>
            </div>
          } />

        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif text-white tracking-tight mb-6">
              Ascent<span className="text-amber-500">Pinnacle</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              An integrated investment banking platform bridging the gap between institutional capital and mid-market opportunities in India.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/ascent-pinnacle-capital-limited/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-amber-500 hover:text-amber-500 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a href="mailto:info@ascentpinnacle.com" className="p-2 bg-slate-900 rounded-full border border-slate-800 hover:border-amber-500 hover:text-amber-500 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/expertise">Structured Finance</Link></li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/expertise">Debt Syndication</Link></li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/expertise">Distressed Resolution</Link></li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/expertise">M&A Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/team">Leadership Team</Link></li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/track-record">Track Record</Link></li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/insights">Insights</Link></li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Ascent Pinnacle Capital Advisors. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms of Engagement</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- APP WRAPPER ---
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
