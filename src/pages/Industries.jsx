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
      className="text-4xl lg:text-5xl font-serif font-bold uppercase tracking-[0.02em] leading-tight text-text-heading"
    >
      {title}
    </motion.h2>
  </div>
);

const HorizontalRule = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="horizontal-rule" />
  </div>
);

const Industries = () => {
  const industries = siteContent.industries;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="bg-deep text-text-body overflow-hidden">
      <main>
        {/* ═══════════ HERO (DEEP: #071510) ═══════════ */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
          <div className="noise-overlay" />

          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: heroImageY }}
          >
            <img
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1400"
              alt="Industrial Sector"
              className="w-full h-full object-cover grayscale brightness-[0.2]"
            />
            <div className="absolute inset-0 bg-deep/50" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
              Strategic Sector Verticals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
            >
              Powering <br />
              <span className="text-accent italic font-normal normal-case">global industry.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 max-w-2xl text-lg lg:text-xl text-text-muted font-light leading-relaxed border-l border-accent/30 pl-8"
            >
              We provide essential raw materials and strategic sourcing solutions to the backbone of the global economy.
            </motion.p>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ SECTORS (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-24">
              <SectionHeading label="Diversified Portfolio" title="Operational Sectors" />
              <p className="text-text-muted text-lg font-light">Deep vertical integration across mission-critical industrial sectors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((category, idx) => (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx}
                  viewport={{ once: true }}
                >
                  <NavLink
                    to="/capabilities"
                    className="group block h-full bg-surface border border-white/[0.04] overflow-hidden no-underline transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 shadow-2xl"
                  >
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-deep/40 group-hover:bg-deep/10 transition-colors duration-700" />
                      <div className="absolute top-6 right-6 size-12 bg-deep/80 backdrop-blur-md rounded-sm flex items-center justify-center text-accent border border-accent/20">
                        <span className="material-symbols-outlined text-2xl">{category.icon}</span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10">
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-text-heading mb-6 uppercase tracking-tight group-hover:text-accent transition-colors duration-500">{category.title}</h3>
                      <ul className="space-y-4 mb-10">
                        {category.items.map(item => (
                          <li key={item} className="flex items-center gap-4 text-[11px] text-text-muted font-medium uppercase tracking-[0.1em] opacity-80">
                            <span className="size-1.5 bg-accent/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-label font-medium uppercase tracking-widest text-text-muted">Market Data</span>
                        <span className="material-symbols-outlined text-accent text-sm transition-transform group-hover:translate-x-2">arrow_forward</span>
                      </div>
                    </div>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ CUSTOM SOLUTIONS (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="space-y-12">
                <SectionHeading label="Flexible Integration" title="Bespoke Sourcing" />
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={2}
                  viewport={{ once: true }}
                  className="text-xl lg:text-2xl text-text-body leading-relaxed font-light border-l-2 border-accent/40 pl-10 italic"
                >
                  Our procurement architecture is designed for dynamic integration. We specialize in identifying niche material grades and engineering resilient supply lines for emerging sectors.
                </motion.p>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
                  <NavLink to="/contact" className="btn btn-primary px-12">
                    DISCUSS REQUIREMENTS
                  </NavLink>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Niche Scouting', icon: 'search_check' },
                  { label: 'Compliance', icon: 'verified_user' }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={i + 4}
                    viewport={{ once: true }}
                    className="aspect-square bg-surface border border-white/[0.04] p-8 flex flex-col justify-center items-center gap-6 text-center group hover:bg-accent transition-all duration-500"
                  >
                    <span className="material-symbols-outlined text-5xl text-accent group-hover:text-deep transition-all duration-500 transform group-hover:scale-110">{item.icon}</span>
                    <span className="label text-[9px] group-hover:text-deep">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ CTA (DEEP: #071510) ═══════════ */}
        <section className="py-24 lg:py-32 bg-deep">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-l-2 border-accent pl-10 lg:pl-16 flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-text-heading mb-6 leading-tight uppercase">
                  Accelerate your <br className="hidden md:block" /> sector growth
                </h2>
                <p className="text-text-muted text-lg font-light leading-relaxed">
                  Leverage Bear Harbor's institutional supply chain to secure high-grade raw materials and ensure jurisdictional trade compliance across all major verticals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <NavLink to="/contact" className="btn btn-primary lg:w-48">START RFQ</NavLink>
                <NavLink to="/contact" className="btn btn-ghost lg:w-48">CONTACT TEAM</NavLink>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Industries;
