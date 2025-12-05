import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Lock, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

// --- TYPE DEFINITION ---
// This must match the PageType in App.tsx
export type PageType = 'HOME' | 'ABOUT' | 'SERVICES' | 'TRANSACTIONS' | 'CASE_STUDIES' | 'CONTACT';

// --- LOGIN MODAL COMPONENT ---
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorLoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("System: Access Granted (Demo Mode)");
      onClose();
    }, 2000);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-md bg-slate-900 border border-slate-700 shadow-2xl rounded-sm overflow-hidden transform transition-all duration-500 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
        <div className="h-1 w-full bg-gradient-to-r from-slate-800 via-brand-accent to-slate-800" />
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-12 w-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700">
              <Lock className="text-brand-accent" size={20} />
            </div>
            <h2 className="text-xl font-serif text-white tracking-wide">LP Portal Access</h2>
            <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest">Ascent Pinnacle Capital</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Institutional ID</label>
              <input type="email" required className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-600" placeholder="name@fund.com" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Password</label>
              <input type="password" required className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all" placeholder="••••••••••••" />
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-brand-accent hover:bg-amber-600 text-white font-medium py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed group">
              {isLoading ? <><Loader2 size={18} className="animate-spin" /> Verifying...</> : <>Secure Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
            </button>
          </form>
        </div>
        <div className="bg-slate-950 py-4 px-8 border-t border-slate-800 flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="text-[10px] text-slate-500 font-medium tracking-tight">256-BIT ENCRYPTED • AUTHORIZED ONLY</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN LAYOUT ---
interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: {id: PageType, label: string}[] = [
    { id: 'HOME', label: 'Home' },
    { id: 'ABOUT', label: 'About Us' },
    { id: 'SERVICES', label: 'Services' },
    { id: 'TRANSACTIONS', label: 'Track Record' },
    { id: 'CASE_STUDIES', label: 'Insights' },
    { id: 'CONTACT', label: 'Contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white md:bg-transparent py-4 md:py-6 shadow-md md:shadow-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer flex flex-col" onClick={() => onNavigate('HOME')}>
              <div className="flex items-center gap-1">
                <span className={`font-sans font-bold text-2xl md:text-3xl tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-gray-300'}`}>ASCENT</span>
                <span className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-brand-accent">PINNACLE</span>
              </div>
              <span className={`text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] font-medium uppercase ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-slate-300'}`}>Corporate Finance & Strategic Advisory</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    currentPage === link.id ? 'text-brand-accent' : isScrolled ? 'text-brand-primary hover:text-brand-accent' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                className={`flex items-center gap-2 px-4 py-2 border rounded-sm text-xs font-bold uppercase tracking-wider transition-all
                  ${isScrolled ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white' : 'border-slate-300 text-slate-200 hover:border-white hover:text-white'}`}
                onClick={() => setIsLoginOpen(true)}
              >
                <Lock size={14} /> Investor Login
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark hover:text-brand-accent transition-colors">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full border-t border-slate-100 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); setIsMenuOpen(false); }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium border-b border-slate-50 ${currentPage === link.id ? 'text-brand-accent' : 'text-slate-600 hover:text-brand-primary'}`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                className="w-full flex items-center justify-center gap-2 px-3 py-4 mt-4 bg-brand-dark text-white font-bold uppercase tracking-wider text-sm rounded-sm"
                onClick={() => { setIsMenuOpen(false); setIsLoginOpen(true); }}
              >
                <Lock size={16} /> Investor Login
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-brand-dark text-slate-400 pt-16 pb-8 border-t border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col mb-6">
                <div className="flex items-center gap-1">
                  <span className="font-sans font-bold text-2xl text-white tracking-tight">ASCENT</span>
                  <span className="font-sans font-bold text-2xl text-brand-accent tracking-tight">PINNACLE</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6">Challenging horizons to offer customized superior service. We strive for excellence and nurture growth through innovative financial strategies.</p>
            </div>
            <div>
              <h3 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => onNavigate('ABOUT')} className="hover:text-brand-accent">About Us</button></li>
                <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-brand-accent">Our Expertise</button></li>
                <li><button onClick={() => onNavigate('TRANSACTIONS')} className="hover:text-brand-accent">Transactions</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-serif font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-brand-accent mt-0.5" /><span>Corporate Office,<br/>New Delhi, India</span></li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-brand-accent" /><a href="mailto:info@ascentpinnacle.com" className="hover:text-white">info@ascentpinnacle.com</a></li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-brand-accent" /><span>+91 11 1234 5678</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <InvestorLoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Layout;
