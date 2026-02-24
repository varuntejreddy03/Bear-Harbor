import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';
import { NavLink } from 'react-router-dom';

const About = () => {
  const { overview, mission, values, leadership } = siteContent.about;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[550px] w-full overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=75&w=1200')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-accent"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">Established Global Firm</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl text-5xl font-serif font-black leading-[1.1] tracking-tighter text-white md:text-7xl uppercase italic"
            >
              Built on Trust.<br />
              <span className="text-accent font-light lowercase">driven by efficiency.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 max-w-2xl text-xl text-gray-300 font-light leading-relaxed border-l border-white/10 pl-8"
            >
              {overview.description}
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div>
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Strategic Focus</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-primary uppercase">{mission.headline}</h2>
                  <div className="mt-6 h-1 w-24 bg-accent/30 rounded-full"></div>
                </div>
                <p className="text-xl leading-relaxed text-secondary font-light italic border-l-4 border-accent/20 pl-8">
                  "{mission.description}"
                </p>

                <div className="grid grid-cols-2 gap-10 pt-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-5xl font-serif font-black text-primary leading-none italic">50+</div>
                    <div className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] opacity-40">Countries Served</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-5xl font-serif font-black text-primary leading-none italic">$2B+</div>
                    <div className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] opacity-40">Trade Volume</div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 translate-x-6 translate-y-6 rounded-sm -z-10 border border-primary/10"></div>
                <div className="h-[550px] w-full rounded-sm overflow-hidden bg-background-light shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=75&w=800"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Industrial excellence"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-sm shadow-2xl border border-white/20">
                    <div className="flex items-start gap-6">
                      <div className="size-12 rounded-sm bg-primary flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined text-3xl">verified</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary uppercase text-sm tracking-widest mb-2">Compliance First</h3>
                        <p className="text-xs text-secondary font-medium leading-loose">We maintain rigorous ISO and trace-origin standards across all operational hubs worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background-light relative border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Core Principles</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-primary uppercase">Our Values</h2>
              <p className="mt-6 text-lg text-secondary font-light">We don't just facilitate trade; we build durable infrastructure for global supply reliability.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={value.title} className="group flex flex-col gap-6 bg-white p-10 border border-border rounded-sm hover:border-accent/40 hover:shadow-2xl transition-all duration-500">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-background-light text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-3">
                    <span className="material-symbols-outlined text-3xl">{['shield_person', 'visibility', 'bolt', 'handshake', 'precision_manufacturing'][idx % 5]}</span>
                  </div>
                  <div className="flex flex-col gap-3 text-left">
                    <h3 className="text-xl font-bold text-primary uppercase tracking-tighter">{value.title}</h3>
                    <div className="h-0.5 w-10 bg-accent/20 group-hover:w-full transition-all duration-700"></div>
                    <p className="text-[13px] text-secondary font-light leading-[1.8]">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-white relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 text-left space-y-8">
                <div>
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our DNA</span>
                  <h2 className="text-4xl font-serif font-black tracking-tighter text-primary uppercase leading-none">{leadership.headline}</h2>
                </div>
                <p className="text-xl text-secondary leading-relaxed font-light border-l-4 border-primary pl-8 italic">
                  {leadership.description}
                </p>
                <div className="pt-4">
                  <NavLink to="/contact" className="btn btn-primary no-underline px-10">
                    Connect With Our Desk
                  </NavLink>
                </div>
              </div>

              <div className="flex-1 w-full bg-primary p-16 rounded-sm text-center relative overflow-hidden group">
                <div className="relative z-10 flex flex-col md:flex-row gap-12 justify-center items-center">
                  <div className="text-white space-y-4">
                    <span className="material-symbols-outlined text-accent text-6xl block transform group-hover:scale-110 transition-transform">engineering</span>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em]">Technical Vetting</p>
                  </div>
                  <div className="h-px w-16 bg-white/10 md:h-16 md:w-px"></div>
                  <div className="text-white space-y-4">
                    <span className="material-symbols-outlined text-accent text-6xl block transform group-hover:scale-110 transition-transform">insights</span>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em]">Trade Intel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-background-light py-20 border-t border-border">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold text-primary uppercase italic">Ready to scale your supply?</h2>
            <NavLink to="/contact" className="btn btn-accent no-underline px-12 shadow-2xl shadow-accent/20">
              Request Formal RFQ
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

