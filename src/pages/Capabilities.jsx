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

const SourcingCapabilities = () => {
  const capabilities = siteContent.capabilities;
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
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1400"
              alt="Industrial Assets"
              className="w-full h-full object-cover grayscale brightness-[0.2]"
            />
            {/* Top relief for Navbar */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep/80 via-deep/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-deep/50" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
              Supply Chain Integrity Architecture
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
            >
              Global Commodity <br />
              <span className="text-accent italic font-normal normal-case">portfolio.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 max-w-2xl text-lg lg:text-xl text-text-muted font-light leading-relaxed border-l border-accent/30 pl-8"
            >
              Systematically connecting industrial supply chains with premium raw materials. We manage the structural complexity of global trade through rigorous verification protocol.
            </motion.p>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ SCOPE (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-24">
              <SectionHeading label="Operational Range" title="Sourcing Scope" />
              <p className="text-text-muted text-lg font-light">Explore our technical portfolio of industrial grades and bulk commodities.</p>
            </div>

            <div className="space-y-6">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={cap.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx}
                  viewport={{ once: true }}
                >
                  <details className="group bg-surface border border-white/[0.04] transition-all duration-500 open:border-accent/40">
                    <summary className="flex cursor-pointer items-center justify-between p-8 lg:p-10 list-none">
                      <div className="flex items-center gap-8">
                        <div className="size-14 border border-accent/30 flex items-center justify-center text-accent bg-deep group-open:bg-accent group-open:text-deep transition-all duration-500">
                          <span className="material-symbols-outlined text-3xl">
                            {['landscape', 'science', 'agriculture', 'inventory_2'][idx % 4]}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-serif font-bold text-text-heading uppercase tracking-tight group-hover:text-accent transition-colors duration-500">{cap.title}</h3>
                          <span className="label text-[9px] mt-1 opacity-60">Technical Benchmark 0{idx + 1}</span>
                        </div>
                      </div>
                      <div className="text-accent transition-transform duration-500 group-open:rotate-180">
                        <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
                      </div>
                    </summary>

                    <div className="p-10 lg:p-16 border-t border-white/[0.05] bg-deep/20">
                      <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                          <div className="aspect-[4/5] bg-surface relative grayscale group-open:grayscale-0 transition-all duration-1000">
                            <img
                              alt={cap.title}
                              className="w-full h-full object-cover brightness-75"
                              loading="lazy"
                              src={[
                                "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&q=75&w=600",
                                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&q=75&w=600",
                                "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&q=75&w=600",
                                "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&q=75&w=600"
                              ][idx % 4]}
                            />
                            <div className="absolute inset-0 bg-deep/20" />
                          </div>
                        </div>
                        <div className="lg:col-span-8">
                          <p className="text-lg text-text-body mb-12 font-light leading-relaxed border-l-2 border-accent/40 pl-10 italic">
                            {cap.description || "We source premium grade commodities essential for global industrial manufacturing. Our partnerships with vetted origins ensure consistent quality benchmarks."}
                          </p>
                          <div className="grid md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                              <h4 className="label text-[10px]">Strategic Portfolio</h4>
                              <ul className="space-y-4">
                                {cap.items.map(item => (
                                  <li key={item} className="flex items-center gap-4 text-text-muted text-sm font-light uppercase tracking-[0.1em]">
                                    <span className="size-1.5 bg-accent" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {cap.packaging && (
                              <div className="space-y-6">
                                <h4 className="label text-[10px]">Packaging Units</h4>
                                <div className="flex flex-wrap gap-2">
                                  {cap.packaging.map(p => (
                                    <span key={p} className="px-4 py-2 border border-white/10 text-[10px] font-label font-medium uppercase tracking-widest text-text-muted">{p}</span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </motion.div>
              ))}
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
                  Technical Data <br className="hidden md:block" /> Verification Requests
                </h2>
                <p className="text-text-muted text-lg font-light leading-relaxed">
                  Our trade facilitation desk provides detailed technical specifications, COAs, and institutional compliance documentation for our entire portfolio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <NavLink to="/contact" className="btn btn-primary lg:w-48">SUBMIT RFQ</NavLink>
                <NavLink to="/contact" className="btn btn-ghost lg:w-48">CONTACT TEAM</NavLink>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SourcingCapabilities;
