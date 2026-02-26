import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

const getSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Perform search
  const q = query.toLowerCase().trim();
  let results = [];

  if (q) {
    // Search pages
    siteContent.navigation.forEach(nav => {
      if (nav.name.toLowerCase().includes(q)) {
        results.push({ type: 'Page', title: nav.name, path: nav.path });
      }
    });

    // Search Industries (Product & Market)
    siteContent.industries.forEach(ind => {
      if (ind.title.toLowerCase().includes(q) || ind.items.some(item => item.toLowerCase().includes(q))) {
        results.push({ type: 'Market', title: ind.title, path: `/product-and-market/${getSlug(ind.title)}` });
      }
    });

    // Search Services
    siteContent.services.forEach(srv => {
      if (srv.title.toLowerCase().includes(q) || (srv.description && srv.description.toLowerCase().includes(q))) {
        results.push({ type: 'Service', title: srv.title, path: '/services' });
      }
    });

    // Search Capabilities
    siteContent.capabilities.forEach(cap => {
      if (cap.title.toLowerCase().includes(q)) {
        results.push({ type: 'Capability', title: cap.title, path: '/capabilities' });
      }
    });
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* Dynamic blurred background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-deep/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Search Box */}
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -20, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded border border-accent/20 overflow-hidden flex flex-col max-h-[70vh] z-10"
      >
        {/* Search Input */}
        <div className="flex items-center p-4 border-b border-accent/10">
          <span className="material-symbols-outlined text-accent text-2xl ml-2">search</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search markets, products, or services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none px-4 text-xl font-serif text-text-heading placeholder-text-muted/40"
          />
          <button onClick={onClose} className="p-2 text-text-muted hover:text-accent transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-grow overflow-y-auto w-full custom-scrollbar">
          {query.trim() === '' ? (
            <div className="p-12 text-center text-text-muted flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl mb-4 opacity-30">find_in_page</span>
              <p className="font-serif text-xl">Type to begin searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((res, index) => (
                <NavLink
                  key={index}
                  to={res.path}
                  onClick={onClose}
                  className="flex flex-col px-6 py-4 hover:bg-mid transition-colors border-b border-accent/5 last:border-0 group"
                >
                  <span className="label text-[9px] mb-1 group-hover:text-forest transition-colors">{res.type}</span>
                  <span className="text-xl font-serif font-bold text-text-heading group-hover:text-accent transition-colors">{res.title}</span>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-text-muted">
              <span className="material-symbols-outlined text-5xl mb-4 opacity-30 text-accent">search_off</span>
              <p className="font-serif text-xl">No results found for "{query}"</p>
              <p className="text-sm mt-3 opacity-80">Try searching for "Minerals", "Chemicals", or "Logistics"</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchModal;
