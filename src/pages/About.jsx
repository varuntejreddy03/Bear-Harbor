import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteContent } from '../data/siteContent';
import { NavLink } from 'react-router-dom';

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

const About = () => {
  const { overview, mission, values, leadership } = siteContent.about;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div className="bg-deep text-text-body overflow-hidden">
      <main>
        {/* ═══════════ HERO (DEEP: #071510) ═══════════ */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
          <div className="noise-overlay" />

          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: heroImageY }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400"
              alt="Institutional Center"
              className="w-full h-full object-cover grayscale brightness-[0.2]"
            />
            {/* Top relief for Navbar */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep/80 via-deep/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-deep/50" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
              Company Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
            >
              Institutional Integrity.<br />
              <span className="text-accent italic font-normal normal-case">driven by efficiency.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 max-w-2xl text-lg lg:text-xl text-text-muted font-light leading-relaxed border-l border-accent/30 pl-8"
            >
              {overview.description}
            </motion.p>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ MISSION (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div>
                <SectionHeading label="Strategic Mandate" title={mission.headline} />
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={2}
                  viewport={{ once: true }}
                  className="text-xl lg:text-2xl leading-relaxed text-text-muted font-light border-l border-accent/20 pl-10"
                >
                  {mission.description}
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-accent/40 z-20" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-accent/40 z-20" />
                <div className="aspect-square w-full rounded-sm overflow-hidden bg-surface relative grayscale hover:grayscale-0 transition-all duration-1000">
                  <img
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover brightness-75"
                    alt="Institutional workspace"
                  />
                  <div className="absolute inset-0 bg-deep/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ VALUES (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mb-20">
              <SectionHeading label="Operational Principles" title="Core Values" />
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }} className="text-text-muted text-lg font-light">
                Our operations are governed by a framework of technical vetting and jurisdictional compliance.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx}
                  viewport={{ once: true }}
                  className="bg-surface border border-white/[0.03] p-10 flex flex-col gap-8 transition-all duration-500 hover:border-accent/40 hover:-translate-y-2"
                >
                  <div className="size-14 border border-accent/30 flex items-center justify-center text-accent">
                    <span className="material-symbols-outlined text-3xl">
                      {['shield_person', 'visibility', 'bolt', 'handshake', 'precision_manufacturing'][idx % 5]}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-serif font-bold text-text-heading uppercase tracking-tight">{value.title}</h3>
                    <p className="text-[13px] text-text-muted font-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HorizontalRule />

        {/* ═══════════ LEADERSHIP (MID: #0F2318) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="space-y-12">
                <SectionHeading label="Governance DNA" title={leadership.headline} />
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={2}
                  viewport={{ once: true }}
                  className="text-xl lg:text-2xl text-text-body leading-relaxed font-light border-l-2 border-accent/40 pl-10 italic opacity-90"
                >
                  {leadership.description}
                </motion.p>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
                  <NavLink to="/contact" className="btn btn-primary px-12">
                    ENGAGE OUR TEAM
                  </NavLink>
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/[0.05] p-12 lg:p-16 relative overflow-hidden group"
              >
                <div className="flex items-center justify-center gap-12 lg:gap-16">
                  <div className="text-center group-hover:scale-105 transition-transform duration-700">
                    <span className="material-symbols-outlined text-accent text-6xl mb-4 block">engineering</span>
                    <span className="label text-[9px] block">Technical Vetting</span>
                  </div>
                  <div className="w-px h-24 bg-white/10" />
                  <div className="text-center group-hover:scale-105 transition-transform duration-700">
                    <span className="material-symbols-outlined text-accent text-6xl mb-4 block">insights</span>
                    <span className="label text-[9px] block">Market Intel</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
