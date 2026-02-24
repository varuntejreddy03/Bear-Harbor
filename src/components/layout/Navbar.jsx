import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = siteContent.navigation;

  const shouldShowDarkText = isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-2xl border-b border-black/5' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group no-underline">
          <div className={`size-10 rounded-sm flex items-center justify-center transition-all duration-500 ${shouldShowDarkText ? 'bg-primary text-accent shadow-lg' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`}>
            <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">all_inclusive</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-black tracking-tighter transition-colors duration-500 uppercase ${shouldShowDarkText ? 'text-primary' : 'text-white'}`}>
              BEAR <span className="text-accent italic font-light">HARBOR</span>
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link ${isActive
                    ? 'text-accent'
                    : shouldShowDarkText ? 'text-primary/60 hover:text-primary' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full"></span>
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-6 pl-6 border-l border-current/10">
            <NavLink
              to="/contact"
              className={`btn !py-2.5 !px-8 !text-[9px] shadow-2xl transition-all duration-500 ${shouldShowDarkText ? 'btn-primary shadow-primary/10' : 'btn-accent shadow-accent/20'}`}
            >
              CLIENT PORTAL
            </NavLink>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-[2px] transition-all duration-500 rounded-full ${shouldShowDarkText ? 'bg-primary' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2 !bg-white' : ''}`}></div>
          <div className={`w-6 h-[2px] transition-all duration-500 rounded-full ${shouldShowDarkText ? 'bg-primary' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-4 h-[2px] transition-all duration-500 rounded-full self-end ${shouldShowDarkText ? 'bg-primary' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 !w-6 !bg-white' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen bg-primary z-[60] flex flex-col overflow-hidden"
          >
            <div className="noise-overlay opacity-20"></div>

            <div className="flex justify-between items-center p-10 relative z-10">
              <span className="text-white font-serif font-black italic text-2xl uppercase tracking-tighter">BH</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-4xl">close</span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-12 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className="text-white text-4xl font-serif font-black italic uppercase tracking-tighter hover:text-accent transition-all hover:scale-110 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <NavLink
                to="/contact"
                className="btn btn-accent mt-10 w-64 !text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Client Portal
              </NavLink>
            </div>

            <div className="p-10 text-center relative z-10">
              <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em]">United States | India | Global Origins</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

