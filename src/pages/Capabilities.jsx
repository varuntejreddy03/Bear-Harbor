import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';

const SourcingCapabilities = () => {
  const capabilities = siteContent.capabilities;

  return (
    <div className="flex flex-col min-h-screen w-full bg-background-light">
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-[550px] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=75&w=1200')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Supply Chain Integrity</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl lg:text-7xl font-serif font-black leading-tight uppercase tracking-tighter"
            >
              Global Commodity <br />
              <span className="text-accent italic font-light lowercase">portfolio.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-300 text-lg md:text-xl font-light max-w-xl leading-relaxed border-l border-accent/20 pl-8"
            >
              Connecting industrial supply chains with premium raw materials worldwide. From venting mines to final mile logistics, we handle the complexity of global trade.
            </motion.p>

            <div className="flex gap-10 pt-4">
              <div>
                <span className="block text-4xl font-serif font-black text-white italic leading-none">50+</span>
                <span className="text-[10px] text-accent font-black uppercase tracking-widest mt-2">Origins</span>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <span className="block text-4xl font-serif font-black text-white italic leading-none">200k</span>
                <span className="text-[10px] text-accent font-black uppercase tracking-widest mt-2">MT Shipped</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our range</span>
            <h2 className="text-primary text-4xl md:text-5xl font-serif font-bold uppercase tracking-tighter italic">Sourcing Capabilities</h2>
          </div>

          <div className="space-y-6">
            {capabilities.map((cap, idx) => (
              <details
                key={cap.title}
                className="group bg-white border border-border rounded-sm overflow-hidden shadow-sm transition-all duration-300 open:shadow-2xl"
                open={idx === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-8 hover:bg-slate-50 transition-colors list-none select-none">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center justify-center size-14 rounded-sm bg-background-light text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-open:rotate-6">
                      <span className="material-symbols-outlined text-3xl">{['landscape', 'science', 'agriculture', 'inventory_2'][idx % 4]}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary uppercase tracking-tighter group-hover:text-accent transition-colors">{cap.title}</h3>
                      <p className="text-[10px] text-secondary font-black uppercase tracking-[0.2em] opacity-40">Industrial Grade Benchmark</p>
                    </div>
                  </div>
                  <div className="text-accent transition-transform duration-500 group-open:rotate-180">
                    <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
                  </div>
                </summary>
                <div className="border-t border-border p-10 bg-background-light/50">
                  <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <div className="aspect-[4/5] w-full rounded-sm overflow-hidden bg-primary shadow-2xl relative">
                        <img
                          alt={cap.title}
                          className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-1000"
                          loading="lazy"
                          src={[
                            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&q=75&w=600",
                            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&q=75&w=600",
                            "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&q=75&w=600",
                            "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&q=75&w=600"
                          ][idx % 4]}
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-8 flex flex-col justify-center text-left">
                      <p className="text-lg text-secondary mb-10 font-light leading-relaxed border-l-4 border-accent pl-8">
                        {cap.description || "We source premium grade commodities essential for global industrial manufacturing. Our partnerships with vetted origins ensure consistent quality benchmarks."}
                      </p>
                      <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Strategic Portfolio</h4>
                          <ul className="space-y-4">
                            {cap.items.map(item => (
                              <li key={item} className="flex items-center gap-3 text-xs text-primary font-bold uppercase tracking-widest">
                                <span className="material-symbols-outlined text-accent text-sm">double_arrow</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {cap.packaging && (
                          <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Packaging Units</h4>
                            <div className="flex flex-wrap gap-3">
                              {cap.packaging.map(p => (
                                <span key={p} className="px-4 py-2 bg-white border border-border text-[9px] font-black uppercase tracking-[0.2em] text-primary shadow-sm">{p}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-6 relative z-10 space-y-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase italic tracking-tighter">Need a technical data sheet?</h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Our trade facilitation team can provide detailed specifications, COAs, and compliance documentation for any commodity in our portfolio.
            </p>
            <NavLink to="/contact" className="btn btn-accent no-underline px-12 shadow-2xl shadow-accent/20">
              Request Full Specs
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SourcingCapabilities;

