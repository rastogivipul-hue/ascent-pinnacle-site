import React, { useState, useEffect } from 'react';
import { X, Lock, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorLoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRender, setShouldRender] = useState(false);

  // Handle mounting/unmounting animation for smooth entrance/exit
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API delay for "High Trust" feel
    setTimeout(() => {
      setIsLoading(false);
      alert("Access Granted: Redirecting to LP Portal...");
      onClose();
      setEmail('');
      setPassword('');
    }, 2000);
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop with Glassmorphism */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-[26rem] bg-slate-950 border border-slate-700 shadow-2xl rounded-sm overflow-hidden transform transition-all duration-300 ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}>
        
        {/* Top Accent Line (Gold) */}
        <div className="h-1 w-full bg-gradient-to-r from-slate-800 via-brand-accent to-slate-800" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-slate-500 hover:text-white transition-colors rounded-full hover:bg-slate-800/50"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-12 w-12 bg-slate-900 rounded-full flex items-center justify-center mb-4 border border-slate-800 shadow-inner group">
              <Lock className="text-brand-accent group-hover:scale-110 transition-transform duration-300" size={20} />
            </div>
            <h2 className="text-xl font-serif text-white tracking-wide">LP Portal Access</h2>
            <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-[0.2em]">
              Ascent Pinnacle Capital
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 ml-1 uppercase tracking-wider">
                Institutional ID
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-600 text-sm"
                placeholder="name@fund.com"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Password
                </label>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-700 text-sm tracking-widest"
                placeholder="••••••••••••"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-accent hover:bg-amber-600 text-white font-medium py-3.5 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-amber-900/20"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span className="text-sm tracking-wide">Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span className="text-sm tracking-wide">Secure Sign In</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Helper Links */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
            <button className="hover:text-brand-accent transition-colors">Forgot Password?</button>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <button className="hover:text-brand-accent transition-colors">Request Access</button>
          </div>
        </div>

        {/* Security Footer */}
        <div className="bg-slate-950/50 py-3 px-8 border-t border-slate-800/50 flex items-center justify-center gap-2">
          <ShieldCheck size={12} className="text-emerald-500" />
          <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase">
            256-Bit Encrypted Connection
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvestorLoginModal;