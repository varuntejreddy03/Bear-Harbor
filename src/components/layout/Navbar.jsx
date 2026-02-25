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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-400 ${isScrolled
        ? 'py-3 border-b border-white/[0.06] bg-deep/95 backdrop-blur-md shadow-xl'
        : 'py-5 border-b border-transparent bg-deep/40 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo left */}
        <NavLink to="/" className="flex items-center gap-3 group no-underline">
          <div className="relative size-10 flex items-center justify-center">
            <div className="absolute inset-0 border border-accent/30 rotate-45 transition-transform duration-500 group-hover:rotate-90 group-hover:border-accent"></div>
            <div className="absolute inset-1.5 border border-accent/60 -rotate-12 transition-transform duration-700 group-hover:rotate-0"></div>
            <span className="material-symbols-outlined text-accent text-lg relative z-10">hub</span>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-serif font-bold tracking-tight text-text-heading uppercase leading-none">
              Bear <span className="text-accent italic font-normal">Harbor</span>
            </span>
            <span className="label text-[7px] tracking-[0.3em] opacity-50 uppercase">Institutional</span>
          </div>
        </NavLink>

        {/* Center nav links — DM Sans caps */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[11px] font-label font-medium uppercase tracking-[0.15em] transition-colors duration-300 no-underline pb-1 ${isActive
                  ? 'text-accent'
                  : 'text-text-muted hover:text-text-heading'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span layoutId="navUnderline" className="absolute bottom-0 left-0 w-full h-px bg-accent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right: CLIENT PORTAL button */}
        <div className="hidden lg:flex items-center">
          <NavLink
            to="/contact"
            className="btn btn-gold-ghost !py-2.5 !px-7 !text-[10px] no-underline"
          >
            CLIENT PORTAL
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-[1.5px] bg-text-heading transition-all duration-400 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <div className={`w-6 h-[1.5px] bg-text-heading transition-all duration-400 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-4 h-[1.5px] bg-text-heading transition-all duration-400 self-end ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px] !w-6' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen z-[60] flex flex-col bg-deep"
          >
            <div className="flex justify-between items-center p-8">
              <div className="flex items-center gap-3">
                <div className="relative size-8 flex items-center justify-center">
                  <div className="absolute inset-0 border border-accent/30 rotate-45"></div>
                  <span className="material-symbols-outlined text-accent text-sm relative z-10">hub</span>
                </div>
                <span className="text-text-heading font-serif font-bold text-xl uppercase tracking-tight">Bear <span className="text-accent italic font-normal">Harbor</span></span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-text-muted hover:text-text-heading transition-colors">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-serif font-bold uppercase tracking-tight transition-colors no-underline ${isActive ? 'text-accent' : 'text-text-heading hover:text-accent'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <NavLink
                to="/contact"
                className="btn btn-gold-ghost mt-6 !px-12 no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CLIENT PORTAL
              </NavLink>
            </div>

            <div className="p-8 text-center">
              <p className="label text-[10px]">Zurich · Singapore · New York · Dubai</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
