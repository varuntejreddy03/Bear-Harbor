import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const SectionHeading = ({ label, title }) => (
  <div className="mb-12 md:mb-16">
    <motion.span variants={fadeUp} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }} className="label mb-4 block">
      {label}
    </motion.span>
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={1}
      viewport={{ once: true }}
      className="text-text-heading text-4xl lg:text-5xl font-serif font-bold uppercase tracking-[0.02em] leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

const HorizontalRule = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-0">
    <div className="horizontal-rule" />
  </div>
);

const Home = () => {
  const { hero, whoWeAre, whatWeSource, approach } = siteContent.home;
  const getSlug = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <div className="text-text-body bg-deep">
      <div className="noise-overlay" />

      {/* ═══════════ HERO (REFINED LAYOUT) ═══════════ */}
      {/* ═══════════ HERO (Clean Light Theme Centered) ═══════════ */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-deep pt-40 pb-24 lg:pt-48 lg:pb-32 border-b border-accent/10">
        <div className="absolute inset-0 z-0 bg-[#F5F0E8] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2000" alt="Home Background" className="w-full h-full object-cover opacity-[0.45] mix-blend-normal" />
          <div style={{ background: 'linear-gradient(135deg, rgba(245,240,232,0.55) 0%, rgba(245,240,232,0.25) 60%, rgba(245,240,232,0.15) 100%)' }} className="absolute inset-0" />
        </div>
        <div className="noise-overlay relative z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
            U.S Based Global Sourcing & Trade Facilitation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase max-w-4xl mx-auto"
          >
            Product and Market,<br />
            <span className="hero-italic-line italic font-normal normal-case">executed with precision.</span>
          </motion.h1>

          <div className="mt-12 mb-12 h-[1px] bg-accent/30 relative overflow-hidden w-64 mx-auto">
            <motion.div className="absolute top-0 left-0 h-full bg-accent" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.6 }} />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-6 justify-center">
            <NavLink to="/contact" className="btn btn-primary px-10">REQUEST A QUOTE</NavLink>
            <NavLink to="/services" className="btn btn-outline-forest px-10">OUR SERVICES</NavLink>
          </motion.div>

          {/* Institutional Value Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-24 flex justify-center gap-16 md:gap-32"
          >
            {[
              'Strategic Origins',
              'Industrial Scale',
              'Quality Verified'
            ].map((pillar, i) => (
              <div key={i} className="text-center group">
                <div className="size-1 bg-accent mx-auto mb-6 group-hover:scale-x-[4] transition-transform duration-500" />
                <div className="label text-[11px] text-text-heading tracking-[0.3em] font-bold uppercase">{pillar}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <HorizontalRule />

      {/* ═══════════ WHO WE ARE (DEEP: #F7F4EE ivory) ═══════════ */}
      <section className="py-24 lg:py-32 bg-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-accent/40 z-20" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-accent/40 z-20" />
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=75&w=800" alt="Industrial Site" className="w-full h-[540px] object-cover contrast-[1.1]" />
            </motion.div>

            <div className="flex flex-col gap-6">
              <SectionHeading label="Institutional Intelligence" title="Institutional Integrity" />
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }} className="text-text-body text-base lg:text-lg font-light leading-relaxed max-w-xl">
                {who_we_are_description_cleaned(whoWeAre.description)}
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }} className="flex flex-wrap gap-4 mt-6">
                <div className="border border-accent/30 bg-surface px-6 py-3 flex items-center gap-3 shadow-sm">
                  <span className="material-symbols-outlined text-accent text-lg">shield_with_heart</span>
                  <span className="text-[10px] font-label font-bold tracking-widest text-forest">VETTED ORIGINS</span>
                </div>
                <div className="border border-accent/30 bg-surface px-6 py-3 flex items-center gap-3 shadow-sm">
                  <span className="material-symbols-outlined text-accent text-lg">verified</span>
                  <span className="text-[10px] font-label font-bold tracking-widest text-forest">ISO COMPLIANT</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <HorizontalRule />

      {/* ═══════════ WHAT WE SOURCE (MID: #EDE8DC parchment) ═══════════ */}
      <section className="py-24 lg:py-32 bg-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <SectionHeading label="Technical Assets" title="What We Source" />
              <p className="text-text-body text-lg font-light leading-relaxed opacity-90">
                Structural sourcing of mission-critical raw materials across diversified industrial sectors.
              </p>
            </div>
            <NavLink to="/capabilities" className="btn btn-outline-forest px-10 mb-2">
              VIEW SPECIFICATIONS
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeSource.map((cat, idx) => (
              <motion.div key={cat.title} variants={fadeUp} initial="hidden" whileInView="visible" custom={idx} viewport={{ once: true }} className="h-full">
                <NavLink to="/capabilities" className="group block bg-surface border border-accent/10 h-full no-underline transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 shadow-[0_2px_20px_rgba(0,0,0,0.07)]">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={cat.image} className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" alt={cat.title} />
                    <div className="absolute top-4 right-4 size-10 bg-white/90 backdrop-blur-sm border border-accent/30 flex items-center justify-center text-accent">
                      <span className="material-symbols-outlined text-xl">{['landscape', 'science', 'agriculture', 'inventory_2'][idx]}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="label text-[9px] mb-4 block">{cat.title}</span>
                    <ul className="space-y-3 mb-8">
                      {cat.items.slice(0, 3).map(item => (
                        <li key={item} className="text-forest text-[13px] font-medium">{item}</li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                      <span className="text-[10px] tracking-widest uppercase font-label text-text-muted">View Specs</span>
                      <span className="material-symbols-outlined text-accent text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCT & MARKET (DEEP: #F7F4EE ivory) ═══════════ */}
      <section className="py-24 lg:py-32 bg-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <SectionHeading label="Global Reach" title="Product & Market" />
              <p className="text-text-body text-lg font-light leading-relaxed opacity-90">
                Serving diverse industrial sectors with targeted sourcing and supply chain solutions.
              </p>
            </div>
            <NavLink to="/product-and-market" className="btn btn-outline-forest px-10 mb-2">
              VIEW MARKETS
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.industries.map((ind, idx) => (
              <motion.div key={ind.title} variants={fadeUp} initial="hidden" whileInView="visible" custom={idx % 4} viewport={{ once: true }} className="h-full relative">
                <NavLink to={`/product-and-market/${getSlug(ind.title)}`} className="group block bg-surface border border-accent/10 h-full no-underline transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 shadow-[0_2px_20px_rgba(0,0,0,0.07)]">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={ind.image} className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" alt={ind.title} />
                    <div className="absolute top-4 right-4 size-10 bg-white/90 backdrop-blur-sm border border-accent/30 flex items-center justify-center text-accent">
                      <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="label text-[9px] mb-4 block">{ind.title}</span>
                    <ul className="space-y-3 mb-8">
                      {ind.items.slice(0, 3).map(item => (
                        <li key={item} className="text-forest text-[13px] font-medium">{item}</li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-accent/10">
                      <span className="text-[10px] tracking-widest uppercase font-label text-text-muted">Explore</span>
                      <span className="material-symbols-outlined text-accent text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HorizontalRule />

      {/* ═══════════ APPROACH (MID: parchment) ═══════════ */}
      <section className="py-24 lg:py-32 bg-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading label="Governance & Logistics" title="Structured Approach" />
          <div className="relative">
            <div className="hidden lg:block absolute top-[1.5rem] left-0 right-0 h-[1px] border-t border-dashed border-accent/20" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12">
              {approach.map((step, idx) => (
                <motion.div key={step.title} variants={fadeUp} initial="hidden" whileInView="visible" custom={idx} viewport={{ once: true }}>
                  <div className="size-12 border border-accent/40 bg-white shadow-sm flex items-center justify-center mb-6 relative z-10">
                    <span className="text-accent font-serif font-bold italic">0{step.step}</span>
                  </div>
                  <h3 className="text-forest text-lg font-serif font-semibold mb-3">{step.title}</h3>
                  <p className="text-text-muted text-[13px] font-light leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA (FOREST ACCENT) ═══════════ */}
      <section className="py-24 lg:py-32 bg-forest">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-l-[3px] border-accent pl-10 lg:pl-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-tight uppercase">
                Ready to optimize your <br className="hidden md:block" /> sourcing lifecycle?
              </h2>
              <p className="text-white/85 text-lg font-light leading-relaxed cta-body-text">
                Our trade desk operates at the intersection of product expertise and global logistics precision. Initiation begins with a technical RFQ.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <NavLink to="/contact" className="btn btn-primary lg:w-48 !bg-accent !text-forest hover:!bg-accent-hover">SUBMIT RFQ</NavLink>
              <NavLink to="/contact" className="btn btn-gold-ghost lg:w-48 !text-white !border-white/40 hover:!bg-white hover:!text-forest">CONTACT TEAM</NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Safety cleaner for the artifacts mentioned by the user
const who_we_are_description_cleaned = (text) => {
  if (!text) return "";
  return text.replace(/<[^>]*>?/gm, '');
};

export default Home;
