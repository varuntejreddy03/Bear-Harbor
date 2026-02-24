import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

const Footer = () => {
  const { companyInfo, navigation } = siteContent;

  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">language</span>
              <span className="text-xl font-bold tracking-tight">BEAR HARBOR</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-sm mb-6">
              {companyInfo.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li><NavLink to="/about" className="hover:text-primary transition-colors no-underline">About Us</NavLink></li>
              <li><NavLink to="#" className="hover:text-primary transition-colors no-underline">Careers</NavLink></li>
              <li><NavLink to="#" className="hover:text-primary transition-colors no-underline">Sustainability</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4 text-xs uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li><NavLink to="/capabilities" className="hover:text-primary transition-colors no-underline">Sourcing</NavLink></li>
              <li><NavLink to="/services" className="hover:text-primary transition-colors no-underline">Logistics</NavLink></li>
              <li><NavLink to="#" className="hover:text-primary transition-colors no-underline">Trade Finance</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-4 text-xs uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li><NavLink to="#" className="hover:text-primary transition-colors no-underline">Privacy Policy</NavLink></li>
              <li><NavLink to="#" className="hover:text-primary transition-colors no-underline">Terms of Service</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Bear Harbor AG. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <span>Zurich</span>
            <span>Singapore</span>
            <span>New York</span>
            <span>Dubai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
