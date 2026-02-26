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

const ProductAndMarket = () => {
  const industries = siteContent.industries;
  const shipping = siteContent.shipping;

  return (
    <div className="bg-deep text-text-body overflow-hidden">
      <main>
        {/* ═══════════ HERO (Clean Light Theme) ═══════════ */}
        <section className="relative bg-deep pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-accent/10">
          <div className="noise-overlay opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
              Strategic Sector Verticals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
            >
              Product <br />
              <span className="text-accent italic font-normal normal-case">& Markets.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 max-w-2xl text-lg lg:text-xl text-text-muted font-light leading-relaxed border-l border-accent/30 pl-8"
            >
              We provide essential raw materials and strategic sourcing solutions to the backbone of the global economy, specializing in US-bound industrial supply chains.
            </motion.p>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ SECTORS (MID: parchment) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-24">
              <SectionHeading label="Diversified Portfolio" title="Core Industry Verticals" />
              <p className="text-text-muted text-lg font-light">Deep vertical integration across mission-critical industrial sectors, from automotive inputs to consumer goods.</p>
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
                  <div className="group block h-full bg-surface border border-accent/10 overflow-hidden no-underline transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 shadow-[0_2px_20px_rgba(0,0,0,0.07)]">
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/5 transition-colors duration-700" />
                      <div className="absolute top-6 right-6 size-12 bg-white/90 backdrop-blur-md rounded-sm flex items-center justify-center text-accent border border-accent/20">
                        <span className="material-symbols-outlined text-2xl">{category.icon}</span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10">
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-forest mb-6 uppercase tracking-tight group-hover:text-accent transition-colors duration-500">{category.title}</h3>
                      <ul className="space-y-4 mb-10">
                        {category.items.map(item => (
                          <li key={item} className="flex items-start gap-4 text-[11px] text-forest font-medium uppercase tracking-[0.1em]">
                            <span className="size-1.5 bg-accent/40 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-8 border-t border-accent/10 flex items-center justify-between">
                        <span className="text-[10px] font-label font-medium uppercase tracking-widest text-text-muted">Market Focus</span>
                        <span className="material-symbols-outlined text-accent text-sm transition-transform group-hover:translate-x-2">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ SOURCING COUNTRIES (FOREST) ═══════════ */}
        <section className="py-24 lg:py-32 bg-forest relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,160,82,0.15),transparent_70%)]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
              <div className="max-w-2xl">
                <SectionHeading label="Global Reach" title="Countries We Source From" />
                <p className="text-white font-light text-lg">Stable and verified supply chains across primary industrial hubs and emerging markets.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {siteContent.sourcingCountries.map((country, idx) => (
                <motion.div
                  key={country}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx}
                  viewport={{ once: true }}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center group hover:border-accent/40 transition-all duration-500"
                >
                  <div className="size-1.5 bg-accent mb-6 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-label font-bold uppercase tracking-[0.2em] text-white group-hover:text-accent transition-colors">{country}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SHIPPING & LOGISTICS (MID: parchment) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-24">
              <SectionHeading label="Execution Excellence" title="Shipping & Logistics" />
              <p className="text-text-body text-lg font-light">End-to-end transport management ensuring your cargo reaches its destination with full compliance and visibility.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {shipping.steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx}
                  viewport={{ once: true }}
                  className="bg-surface border border-accent/20 p-10 relative group shadow-sm"
                >
                  <div className="text-accent/30 text-6xl font-serif font-bold absolute top-6 right-8 group-hover:text-accent/50 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-forest mb-8 pr-12">{step.title}</h3>
                  <ul className="space-y-6">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <span className="size-1.5 bg-accent mt-2 flex-shrink-0" />
                        <span className="text-text-body text-sm font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ CTA (FOREST) ═══════════ */}
        <section className="py-24 lg:py-32 bg-forest">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-l-[3px] border-accent pl-10 lg:pl-16 flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-6 leading-tight uppercase">
                  Secure your <br className="hidden md:block" /> supply line today
                </h2>
                <p className="text-white/85 text-lg font-light leading-relaxed cta-body-text">
                  Leverage Bear Harbor's institutional supply chain to secure high-grade raw materials and ensure jurisdictional trade compliance across all major verticals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <NavLink to="/contact" className="btn btn-primary lg:w-48 !bg-accent !text-forest hover:!bg-accent-hover">START RFQ</NavLink>
                <NavLink to="/contact" className="btn btn-ghost lg:w-48 !text-white !border-white/40 hover:!bg-white hover:!text-forest">CONTACT TEAM</NavLink>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductAndMarket;
