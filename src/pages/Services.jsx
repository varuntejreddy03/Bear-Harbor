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

const Services = () => {
  const services = siteContent.services;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="bg-deep text-text-body overflow-hidden">
      <main>
        {/* ═══════════ HERO (DEEP: #071510) ═══════════ */}
        <section ref={heroRef} className="relative min-h-[65vh] flex items-center overflow-hidden pt-20">
          <div className="noise-overlay" />

          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: heroImageY }}
          >
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5945?auto=format&fit=crop&q=80&w=1400"
              alt="Technical Logistics Center"
              className="w-full h-full object-cover grayscale brightness-[0.2]"
            />
            {/* Top relief for Navbar */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep/80 via-deep/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-deep/50" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
              Institutional Precision Operations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
            >
              Structured Trade<br />
              <span className="text-accent italic font-normal normal-case">solutions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 max-w-2xl text-lg lg:text-xl text-text-muted font-light leading-relaxed border-l border-accent/30 pl-8"
            >
              End-to-end global sourcing architecture and trade facilitation for industrial raw materials. We streamline the global supply lifecycle with institutional efficiency.
            </motion.p>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ SERVICES GRID (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-24">
              <SectionHeading label="Execution Capability" title="Service Ecosystem" />
              <p className="text-text-muted text-lg font-light">Governance-led trade facilitation for high-volume industrial clients.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx}
                  viewport={{ once: true }}
                >
                  <div className="group h-full bg-surface border border-white/[0.04] p-10 lg:p-12 transition-all duration-500 hover:border-accent/40 hover:-translate-y-2">
                    <div className="size-14 border border-accent/30 flex items-center justify-center text-accent mb-10 group-hover:bg-accent group-hover:text-deep transition-all duration-500">
                      <span className="material-symbols-outlined text-3xl">
                        {['travel_explore', 'verified', 'handshake', 'local_shipping', 'corporate_fare'][idx % 5]}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-text-heading uppercase tracking-tight mb-6 group-hover:text-accent transition-colors duration-500">{service.title}</h3>

                    <div className="space-y-6">
                      {service.description ? (
                        <p className="text-[13px] text-text-muted font-light leading-relaxed italic opacity-80">{service.description}</p>
                      ) : (
                        <ul className="space-y-4">
                          {service.items.map(item => (
                            <li key={item} className="flex items-start gap-4 text-[11px] text-text-muted font-medium uppercase tracking-[0.1em] opacity-80">
                              <span className="size-1.5 bg-accent/40 mt-1" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5">
                      <NavLink to="/contact" className="flex items-center justify-between no-underline group/link">
                        <span className="text-[10px] uppercase tracking-widest font-label font-medium text-text-muted group-hover/link:text-accent transition-colors">Inquire Specification</span>
                        <span className="material-symbols-outlined text-accent text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                      </NavLink>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ ADVANTAGE (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-accent/40 z-20" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-accent/40 z-20" />
                <div className="aspect-[4/5] bg-surface relative grayscale hover:grayscale-0 transition-all duration-1000">
                  <img
                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=75&w=800"
                    className="w-full h-full object-cover brightness-75"
                    alt="Trade Logistics Architecture"
                  />
                  <div className="absolute inset-0 bg-deep/30" />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-12">
                <SectionHeading label="Institutional Framework" title="Trade Architecture" />
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={2}
                  viewport={{ once: true }}
                  className="text-xl lg:text-2xl text-text-body leading-relaxed font-light border-l-2 border-accent/40 pl-10 italic"
                >
                  We integrate every node of the value chain to ensure total institutional transparency and operational efficiency. ISO-aligned methodologies at every node.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Risk Architecture', desc: 'Insured Logistics & origin vetting', icon: 'shield' },
                    { title: 'Financial Flow', desc: 'Optimized LC & Trade Finance', icon: 'payments' }
                  ].map((adv, i) => (
                    <motion.div
                      key={adv.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      custom={i + 3}
                      viewport={{ once: true }}
                      className="p-8 bg-surface border border-white/[0.04] group hover:border-accent/40 transition-all duration-500"
                    >
                      <span className="material-symbols-outlined text-accent text-3xl mb-4 block">{adv.icon}</span>
                      <h4 className="text-text-heading font-serif font-bold uppercase text-sm mb-2">{adv.title}</h4>
                      <p className="label text-[9px] opacity-70">{adv.desc}</p>
                    </motion.div>
                  ))}
                </div>
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
                  Secure Operational <br className="hidden md:block" /> Consultation
                </h2>
                <p className="text-text-muted text-lg font-light leading-relaxed">
                  Discuss strategic sourcing programs and institutional supply chain integration with our senior trade desk operators.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <NavLink to="/contact" className="btn btn-primary lg:w-48">BOOK CONSULT</NavLink>
                <NavLink to="/contact" className="btn btn-ghost lg:w-48">CONTACT TEAM</NavLink>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
