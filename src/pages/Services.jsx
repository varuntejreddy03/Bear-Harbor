import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';

const Services = () => {
  const services = siteContent.services;

  return (
    <div className="flex flex-col min-h-screen w-full bg-background-light">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center bg-primary overflow-hidden">
          <div className="noise-overlay opacity-10"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=75&w=1200')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Precision Operations</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl lg:text-7xl font-serif font-black leading-tight uppercase tracking-tighter"
            >
              Structured Trade<br />
              <span className="text-accent italic font-light lowercase">solutions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-300 text-lg md:text-xl font-light max-w-xl leading-relaxed border-l border-accent/30 pl-8"
            >
              End-to-end global sourcing and trade facilitation for industrial raw materials. We streamline your supply chain with precision and financial efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-6"
            >
              <NavLink to="/contact" className="btn btn-accent no-underline shadow-2xl shadow-accent/20">
                Consult an Expert
              </NavLink>
            </motion.div>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col bg-white p-12 border border-border rounded-sm hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all duration-500 text-left"
              >
                <div className="size-16 rounded-sm bg-background-light text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  <span className="material-symbols-outlined text-4xl">
                    {['travel_explore', 'verified', 'handshake', 'local_shipping', 'partnership'][idx % 5]}
                  </span>
                </div>
                <h3 className="text-primary text-xl font-bold mb-6 uppercase tracking-tighter italic">{service.title}</h3>
                <div className="h-0.5 w-12 bg-accent/20 mb-8 transition-all duration-700 group-hover:w-full"></div>

                {service.description ? (
                  <p className="text-secondary text-sm leading-relaxed font-light mb-8">{service.description}</p>
                ) : (
                  <ul className="space-y-4 mb-8">
                    {service.items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-[11px] text-secondary font-bold uppercase tracking-widest opacity-60">
                        <span className="material-symbols-outlined text-accent text-sm mt-0.5">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-10 border-t border-border/50">
                  <NavLink to="/contact" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors no-underline">
                    Inquire Specification <span className="material-symbols-outlined text-sm italic">arrow_forward</span>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Value Prop */}
        <section className="bg-white py-32 border-y border-border relative overflow-hidden">
          <div className="noise-overlay opacity-5"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-24 items-center">
            <div className="flex-1 text-left space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-black leading-none text-primary uppercase tracking-tighter">
                Why Choose Our<br />Structured<br />Approach?
              </h2>
              <p className="text-xl text-secondary font-light leading-relaxed border-l-4 border-accent/20 pl-8">
                We integrate every step of the trade lifecycle to ensure transparency and efficiency. Our methodologies ensure ISO compliance and risk mitigation at every node.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex items-start gap-4 p-6 bg-background-light border border-border rounded-sm group hover:border-accent/40 transition-all">
                  <div className="bg-primary/5 p-3 rounded-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-1">Risk Mitigated</h4>
                    <p className="text-[10px] text-secondary uppercase font-medium opacity-50">Insured logistics</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-background-light border border-border rounded-sm group hover:border-accent/40 transition-all">
                  <div className="bg-primary/5 p-3 rounded-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-1">Transparent Cost</h4>
                    <p className="text-[10px] text-secondary uppercase font-medium opacity-50">No hidden fees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-primary/5 translate-x-8 translate-y-8 rounded-sm -z-10 border border-primary/10"></div>
              <div className="aspect-[4/5] w-full rounded-sm overflow-hidden bg-primary shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=75&w=800"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-1000"
                  alt="Trade logistics"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-white space-y-4">
                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Landed Cost Accuracy</span>
                    <h3 className="text-3xl font-serif font-black italic uppercase italic tracking-tighter">Precision in Pricing</h3>
                    <p className="text-xs text-white/60 font-medium leading-relaxed">We provide complete landed cost breakdowns including tariffs, freight, and insurance before execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-background-light">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
            <h2 className="text-3xl font-serif font-bold text-primary uppercase italic">Ready to streamline your procurement?</h2>
            <NavLink to="/contact" className="btn btn-primary no-underline px-12 shadow-2xl shadow-primary/20">
              Discuss with a Procurement Officer
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;

