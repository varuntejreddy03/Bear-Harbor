import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';
import { NavLink } from 'react-router-dom';

const Industries = () => {
  const industries = siteContent.industries;

  return (
    <div className="flex flex-col min-h-screen w-full bg-background-light">
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-[500px] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=75&w=1200')" }}></div>
          <div className="noise-overlay opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Strategic Verticals</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-none italic"
            >
              Powering <br />
              <span className="text-accent font-light lowercase">global industry.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg max-w-xl font-light leading-relaxed border-l-2 border-accent/30 pl-8"
            >
              We provide essential raw materials and strategic sourcing solutions to the backbone of the global economy.
            </motion.p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white p-12 flex flex-col gap-8 transition-all duration-500 hover:bg-primary group"
              >
                <div className="text-primary group-hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-5xl">
                    {['foundation', 'factory', 'hardware', 'precision_manufacturing', 'chemistry', 'agriculture', 'inventory_2', 'construction'][idx % 8]}
                  </span>
                </div>
                <div className="flex flex-col gap-4 text-left">
                  <h3 className="text-lg font-bold text-primary group-hover:text-white uppercase tracking-tighter">{ind}</h3>
                  <div className="h-px w-8 bg-accent/30 group-hover:w-full transition-all duration-700"></div>
                  <p className="text-[10px] text-secondary group-hover:text-gray-400 uppercase tracking-[0.2em] leading-loose font-black opacity-40 group-hover:opacity-100">Specialized Grade Sourcing</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Custom Sector Solutions */}
        <section className="bg-white py-32 relative overflow-hidden">
          <div className="noise-overlay opacity-5"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="md:w-1/2 text-left space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-black text-primary uppercase tracking-tighter italic leading-none">Custom Sector<br />Solutions</h2>
              <p className="text-xl text-secondary font-light leading-relaxed border-l-4 border-accent pl-8">
                Don't see your industry listed? Our procurement network is designed for flexibility. We specialize in finding niche material grades and establishing new supply lines.
              </p>
              <div className="pt-4">
                <NavLink to="/contact" className="btn btn-primary no-underline px-10">
                  Discuss Your Sector
                </NavLink>
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-background-light p-10 flex flex-col justify-center items-center gap-4 text-center group hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-4xl text-accent">search_check</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white">Niche Scouting</span>
              </div>
              <div className="aspect-square bg-background-light p-10 flex flex-col justify-center items-center gap-4 text-center group hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-4xl text-accent">verified_user</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-white">Compliance</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Industries;

