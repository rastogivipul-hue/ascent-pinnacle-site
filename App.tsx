import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

// --- IMPORTS ---
import Layout from './Layout';
import Hero from './Hero';
import AboutPage from './AboutPage';
import Services from './Services';
import Transactions from './Transactions';

// --- TYPES ---
export type PageType = 'HOME' | 'ABOUT' | 'SERVICES' | 'TRANSACTIONS' | 'CASE_STUDIES' | 'CONTACT';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Hero onNavigate={setCurrentPage} />;
      
      case 'ABOUT':
        return <AboutPage />;
      
      case 'SERVICES':
        return <Services />;
      
      case 'TRANSACTIONS':
        return <Transactions />;
      
      case 'CASE_STUDIES':
        return (
          <div className="pt-32 pb-20 px-6 min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 text-center">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">Insights & Perspectives</h2>
            <div className="h-1 w-20 bg-brand-accent mb-6 mx-auto"></div>
            <p className="text-slate-500 max-w-lg mb-8">
              Analysis of Indian Mid-Market Trends and Credit Structures.
            </p>
            <span className="px-4 py-2 bg-slate-200 text-slate-600 text-xs uppercase tracking-widest rounded-sm">
              Coming Soon
            </span>
          </div>
        );

      case 'CONTACT':
        return (
          <div className="pt-32 pb-20 px-6 bg-white min-h-[80vh]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif text-slate-900 mb-8 text-center">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Corporate Office</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-brand-accent mt-1" />
                      <p className="text-slate-600">New Delhi, India</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-brand-accent" />
                      <p className="text-slate-600">+91 11 1234 5678</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-brand-accent" />
                      <a href="mailto:info@ascentpinnacle.com" className="text-slate-600 hover:text-brand-accent transition-colors">
                        info@ascentpinnacle.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 p-8 rounded-sm text-white">
                  <h3 className="text-xl font-bold mb-6">Working Hours</h3>
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="text-brand-accent mt-1" />
                    <div>
                      <p className="font-semibold">Monday - Friday</p>
                      <p className="text-slate-400 text-sm">9:30 AM - 6:30 PM</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mt-8 border-t border-slate-700 pt-6">
                    Institutional inquiries are typically responded to within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
