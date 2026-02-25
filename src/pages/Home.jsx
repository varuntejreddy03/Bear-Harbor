import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import heroBg from '../assets/hero-bg.png';

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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="text-text-body bg-deep">
      <div className="noise-overlay" />

      {/* ═══════════ HERO (REFINED LAYOUT) ═══════════ */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background Overlay & Divider */}
        <motion.div
          className="absolute top-0 right-0 w-full lg:w-[50%] h-full z-0 border-l border-accent/40"
          style={{ y: heroImageY }}
        >
          <img
            src={heroBg}
            alt="Global Container Port"
            className="w-full h-full object-cover brightness-100 contrast-[1.02]"
          />

          {/* USER SPEC: Left edge blend gradient */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A1F14] to-transparent pointer-events-none" />

          {/* USER SPEC: Global green tint overlay */}
          <div className="absolute inset-0 bg-[#0A1F14]/18 pointer-events-none" />

          {/* Selective mobile overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/40 to-transparent lg:hidden" />

          {/* Top safety gradient for Navbar protection */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-deep/90 via-deep/40 to-transparent pointer-events-none" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-48 pb-40">
          <div className="lg:w-1/2">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-8">
              U.S Based Global Sourcing & Trade Facilitation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-text-heading text-[clamp(2.5rem,5.5vw,5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
            >
              Product and Market,<br />
              <span className="text-accent italic font-normal normal-case">executed with precision.</span>
            </motion.h1>

            <div className="mt-10 mb-12 h-[1px] bg-accent/20 relative overflow-hidden max-w-sm">
              <motion.div className="absolute top-0 left-0 h-full bg-accent" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.6 }} />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4">
              <NavLink to="/contact" className="btn btn-gold-ghost">REQUEST A QUOTE</NavLink>
              <NavLink to="/services" className="btn btn-primary">OUR SERVICES</NavLink>
            </motion.div>

            {/* Restored & Refined Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-20 flex gap-12 md:gap-16 border-l border-accent/20 pl-8"
            >
              {[
                { val: '40+', lab: 'Countries' },
                { val: '200+', lab: 'Products' },
                { val: '$500M+', lab: 'Sourced' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-text-heading font-serif text-3xl md:text-4xl font-bold">{stat.val}</div>
                  <div className="label text-[9px] text-text-muted mt-2 tracking-[0.2em]">{stat.lab}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <HorizontalRule />

      {/* ═══════════ WHO WE ARE (MID: #0F2318) ═══════════ */}
      <section className="py-24 lg:py-32 bg-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-accent/40 z-20" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-accent/40 z-20" />
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=75&w=800" alt="Industrial Site" className="w-full h-[540px] object-cover grayscale brightness-90" />
            </motion.div>

            <div className="flex flex-col gap-6">
              <SectionHeading label="Institutional Intelligence" title="Institutional Integrity" />
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }} className="text-text-body text-base lg:text-lg font-light leading-relaxed max-w-xl">
                {who_we_are_description_cleaned(whoWeAre.description)}
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }} className="flex flex-wrap gap-4 mt-6">
                <div className="border border-accent/30 px-6 py-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-lg">shield_with_heart</span>
                  <span className="label text-[10px]">Vetted Network</span>
                </div>
                <div className="border border-accent/30 px-6 py-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-lg">fact_check</span>
                  <span className="label text-[10px]">Quality Focus</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <HorizontalRule />

      {/* ═══════════ WHAT WE SOURCE (MID: #0F2318) ═══════════ */}
      <section className="py-24 lg:py-32 bg-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading label="Global Asset Portfolio" title="What We Source" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeSource.map((cat, idx) => (
              <motion.div key={cat.title} variants={fadeUp} initial="hidden" whileInView="visible" custom={idx} viewport={{ once: true }} className="h-full">
                <NavLink to="/capabilities" className="group block bg-surface border border-white/[0.03] h-full no-underline transition-all duration-500 hover:border-accent/40 hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={cat.image} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" alt={cat.title} />
                    <div className="absolute top-4 right-4 size-10 bg-deep/80 backdrop-blur-sm border border-accent/30 flex items-center justify-center text-accent">
                      <span className="material-symbols-outlined text-xl">{['landscape', 'science', 'agriculture', 'inventory_2'][idx]}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="label text-[9px] mb-4 block">{cat.title}</span>
                    <ul className="space-y-3 mb-8">
                      {cat.items.slice(0, 3).map(item => (
                        <li key={item} className="text-text-muted text-[13px] font-light">{item}</li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
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

      <HorizontalRule />

      {/* ═══════════ APPROACH (MID: #0F2318) ═══════════ */}
      <section className="py-24 lg:py-32 bg-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading label="Governance & Logistics" title="Structured Approach" />
          <div className="relative">
            <div className="hidden lg:block absolute top-[1.5rem] left-0 right-0 h-[1px] border-t border-dashed border-accent/20" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12">
              {approach.map((step, idx) => (
                <motion.div key={step.title} variants={fadeUp} initial="hidden" whileInView="visible" custom={idx} viewport={{ once: true }}>
                  <div className="size-12 border border-accent/40 bg-deep flex items-center justify-center mb-6 relative z-10">
                    <span className="text-accent font-serif font-bold italic">0{step.step}</span>
                  </div>
                  <h3 className="text-text-heading text-lg font-serif font-semibold mb-3">{step.title}</h3>
                  <p className="text-text-muted text-[13px] font-light leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA (DEEP: #071510) ═══════════ */}
      <section className="py-24 lg:py-32 bg-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="border-l-2 border-accent pl-10 lg:pl-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-text-heading mb-6 leading-tight uppercase">
                Ready to optimize your <br className="hidden md:block" /> sourcing lifecycle?
              </h2>
              <p className="text-text-muted text-lg font-light leading-relaxed">
                Our trade desk operates at the intersection of product expertise and global logistics precision. Initiation begins with a technical RFQ.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <NavLink to="/contact" className="btn btn-primary lg:w-48">SUBMIT RFQ</NavLink>
              <NavLink to="/contact" className="btn btn-gold-ghost lg:w-48">CONTACT TEAM</NavLink>
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
