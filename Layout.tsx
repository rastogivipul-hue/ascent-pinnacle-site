import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { Page } from '../types';
import InvestorLoginModal from './InvestorLoginModal';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.ABOUT, label: 'About Us' },
    { id: Page.SERVICES, label: 'Services' },
    { id: Page.TRANSACTIONS, label: 'Track Record' },
    { id: Page.CASE_STUDIES, label: 'Insights' },
    { id: Page.CONTACT, label: 'Contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white md:bg-transparent py-4 md:py-6 shadow-md md:shadow-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="cursor-pointer flex flex-col" onClick={() => onNavigate(Page.HOME)}>
              <div className="flex items-center gap-1">
                <span className={`font-sans font-bold text-2xl md:text-3xl tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-Silver'}`}>
                  ASCENT
                </span>
                <span className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-brand-accent">
                  PINNACLE
                </span>
              </div>
              <span className={`text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] font-medium uppercase ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-slate-300'}`}>
                Corporate Finance & Strategic Advisory
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    currentPage === link.id 
                      ? 'text-brand-accent' 
                      : isScrolled ? 'text-brand-primary hover:text-brand-accent' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                className={`flex items-center gap-2 px-4 py-2 border rounded-sm text-xs font-bold uppercase tracking-wider transition-all
                  ${isScrolled 
                    ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white' 
                    : 'border-slate-300 text-slate-200 hover:border-white hover:text-white'}`}
                onClick={() => setIsLoginModalOpen(true)}
              >
                <Lock size={14} />
                Investor Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-dark hover:text-brand-accent transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full border-t border-slate-100 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium border-b border-slate-50 ${
                    currentPage === link.id ? 'text-brand-accent' : 'text-slate-600 hover:text-brand-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                className="w-full flex items-center justify-center gap-2 px-3 py-4 mt-4 bg-brand-dark text-white font-bold uppercase tracking-wider text-sm rounded-sm"
                onClick={() => {
                  setIsLoginModalOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                <Lock size={16} />
                Investor Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-400 pt-16 pb-8 border-t border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex flex-col mb-6">
                <div className="flex items-center gap-1">
                  <span className="font-sans font-bold text-2xl text-white tracking-tight">
                    ASCENT
                  </span>
                  <span className="font-sans font-bold text-2xl text-brand-accent tracking-tight">
                    PINNACLE
                  </span>
                </div>
                <span className="text-[0.6rem] tracking-[0.2em] font-medium text-slate-400 uppercase">
                  Corporate Finance & Strategic Advisory
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Challenging horizons to offer customized superior service. We strive for excellence and nurture growth through innovative financial strategies.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-brand-accent transition-colors">About Us</button></li>
                <li><button onClick={() => onNavigate(Page.SERVICES)} className="hover:text-brand-accent transition-colors">Our Expertise</button></li>
                <li><button onClick={() => onNavigate(Page.TRANSACTIONS)} className="hover:text-brand-accent transition-colors">Transactions</button></li>
                <li><button onClick={() => onNavigate(Page.CONTACT)} className="hover:text-brand-accent transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-serif font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-accent mt-0.5" />
                  <span>Corporate Office,<br/>New Delhi, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-accent" />
                  <a href="mailto:info@ascentpinnacle.com" className="hover:text-white">info@ascentpinnacle.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-accent" />
                  <span>+91 11 1234 5678</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-center">
            <p>&copy; {new Date().getFullYear()} Ascent Pinnacle Capital. All Rights Reserved. Institutional Investment Banking.</p>
          </div>
        </div>
      </footer>
      
      {/* Investor Login Modal */}
      <InvestorLoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;