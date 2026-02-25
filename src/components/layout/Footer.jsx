import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

const Footer = () => {
  const { companyInfo } = siteContent;
  const cities = ['Zurich', 'Singapore', 'New York', 'Dubai'];

  return (
    <footer className="bg-deep pt-24 pb-12 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <NavLink to="/" className="flex items-center gap-4 no-underline group w-fit">
              <div className="relative size-12 flex items-center justify-center">
                <div className="absolute inset-0 border border-accent/30 rotate-45 transition-transform duration-500 group-hover:rotate-90 group-hover:border-accent"></div>
                <div className="absolute inset-2 border border-accent/60 -rotate-12 transition-transform duration-700 group-hover:rotate-0"></div>
                <span className="material-symbols-outlined text-accent text-xl relative z-10">hub</span>
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-2xl font-serif font-bold tracking-tight text-text-heading uppercase leading-none">
                  Bear <span className="text-accent italic font-normal">Harbor</span>
                </span>
                <span className="label text-[8px] tracking-[0.3em] opacity-50 uppercase">Institutional AG</span>
              </div>
            </NavLink>
            <p className="text-text-muted text-sm leading-relaxed font-light max-w-md">
              {companyInfo.description}
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="label mb-6">Company</h4>
            <ul className="space-y-4">
              <li><NavLink to="/about" className="text-text-muted text-sm font-light hover:text-text-heading transition-colors no-underline">About</NavLink></li>
              <li><NavLink to="/industries" className="text-text-muted text-sm font-light hover:text-text-heading transition-colors no-underline">Industries</NavLink></li>
              <li><NavLink to="/contact" className="text-text-muted text-sm font-light hover:text-text-heading transition-colors no-underline">Contact</NavLink></li>
            </ul>
          </div>

          {/* Operations */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h4 className="label">Global Operations</h4>
            <div className="flex flex-wrap gap-2">
              {cities.map(city => (
                <span key={city} className="text-accent text-[9px] font-label font-medium uppercase tracking-widest border border-accent/20 px-3 py-1.5 hover:bg-accent/5 transition-all">
                  {city}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 text-text-muted text-sm font-light">
              <span className="material-symbols-outlined text-accent text-lg">alternate_email</span>
              {companyInfo.email}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-[10px] font-label uppercase tracking-widest">
            © {new Date().getFullYear()} {companyInfo.name} AG
          </p>
          <div className="flex gap-8 text-text-muted text-[10px] font-label uppercase tracking-widest">
            <a href="#" className="hover:text-text-heading no-underline transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-heading no-underline transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
