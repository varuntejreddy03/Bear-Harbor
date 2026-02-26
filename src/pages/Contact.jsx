import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteContent } from '../data/siteContent';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Contact = () => {
  const { companyInfo } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-deep text-text-body overflow-hidden">
      <main>
        {/* ═══════════ HERO (Clean Light Theme) ═══════════ */}
        <section className="relative bg-deep pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-accent/10">
          <div className="noise-overlay opacity-20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
              Institutional Engagement Portal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
            >
              Connect with <br />
              <span className="text-accent italic font-normal normal-case">our global desk.</span>
            </motion.h1>
          </div>
        </section>

        {/* ═══════════ RFQ FORM (MID: parchment) ═══════════ */}
        <section className="py-24 lg:py-32 bg-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <div className="mb-20">
                <motion.span variants={fadeUp} initial="hidden" whileInView="visible" className="label mb-4 block">
                  Global Sourcing Inquiry
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={1}
                  className="text-4xl lg:text-5xl font-serif font-bold uppercase tracking-[0.02em] leading-tight text-text-heading mb-8"
                >
                  Request for <br className="hidden md:block" />Consultancy (RFQ)
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={2}
                  className="text-lg lg:text-xl text-text-muted font-light leading-relaxed border-l border-accent/30 pl-8 italic"
                >
                  Provide technical specifications for your global requirement. Our trade desk will engineer a structured response within 24-48 business hours.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={3}
                className="bg-surface border border-accent/10 p-10 lg:p-16 relative shadow-[0_2px_40px_rgba(0,0,0,0.08)]"
              >
                {submitted ? (
                  <div className="py-20 text-center">
                    <span className="material-symbols-outlined text-8xl text-accent mb-10 block">verified</span>
                    <h3 className="text-3xl font-serif font-bold text-forest uppercase tracking-tight mb-6">Submission Verified</h3>
                    <p className="text-text-muted text-lg font-light mb-12 max-w-md mx-auto">Your RFQ has been logged. A senior trade lead will initiate contact shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-ghost">NEW CONSULTANCY</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Entity */}
                    <div className="space-y-8">
                      <h4 className="label text-[10px] border-b border-accent/10 pb-4">01. Entity Identification</h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Corporate Name</span>
                          <input required type="text" placeholder="Legal Entity Name" className="w-full bg-deep border-b border-accent/10 p-4 text-forest outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Authorized Signatory</span>
                          <input required type="text" placeholder="Full name" className="w-full bg-deep border-b border-accent/10 p-4 text-forest outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Professional Email</span>
                          <input required type="email" placeholder="email@entity.com" className="w-full bg-deep border-b border-accent/10 p-4 text-forest outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Global Phone</span>
                          <input required type="tel" placeholder="+X (XXX)..." className="w-full bg-deep border-b border-accent/10 p-4 text-forest outline-none focus:border-accent transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="space-y-8">
                      <h4 className="label text-[10px] border-b border-accent/10 pb-4">02. Requirement Analysis</h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Target Commodity</span>
                          <input required type="text" placeholder="Product name" className="w-full bg-deep border-b border-accent/10 p-4 text-forest outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Technical Grade</span>
                          <input required type="text" placeholder="Specification details" className="w-full bg-deep border-b border-accent/10 p-4 text-forest outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Port of Discharge</span>
                          <input required type="text" placeholder="Destination port" className="w-full bg-deep border-b border-accent/10 p-4 text-forest outline-none focus:border-accent transition-colors" />
                        </div>
                        <div className="space-y-3">
                          <span className="label text-[9px] text-text-muted">Incoterms</span>
                          <select className="w-full bg-deep border-b border-accent/10 p-4 text-text-muted outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                            <option>CIF</option>
                            <option>FOB</option>
                            <option>CFR</option>
                            <option>DDP</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <span className="label text-[9px] text-text-muted">Extended Specifications / Operational Notes</span>
                        <textarea placeholder="Specific technical requirements..." className="w-full bg-deep border-b border-accent/10 p-4 min-h-[120px] text-forest outline-none focus:border-accent transition-colors resize-none" />
                      </div>
                    </div>

                    <div className="pt-8 text-center">
                      <button type="submit" className="btn btn-primary px-12 !bg-forest !text-white hover:!bg-forest/90">
                        INITIATE STRUCTURAL RFQ
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
