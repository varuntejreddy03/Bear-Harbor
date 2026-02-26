import React, { useEffect } from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';

const getSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const IndustryDetail = () => {
  const { slug } = useParams();

  // Find the matching industry based on slug
  const industry = siteContent.industries.find(ind => getSlug(ind.title) === slug);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return <Navigate to="/product-and-market" />;
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <div className="bg-deep text-text-body overflow-hidden pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-deep pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden border-b border-accent/10">
        <div className="absolute inset-0 z-0 bg-[#F5F0E8] pointer-events-none">
          <img
            src={industry.image}
            alt={industry.title}
            className="w-full h-full object-cover opacity-[0.45] mix-blend-normal"
          />
          <div style={{ background: 'linear-gradient(135deg, rgba(245,240,232,0.55) 0%, rgba(245,240,232,0.25) 60%, rgba(245,240,232,0.15) 100%)' }} className="absolute inset-0" />
        </div>
        <div className="noise-overlay relative z-0" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="size-20 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-accent mb-8 border border-accent/30 shadow-sm"
          >
            <span className="material-symbols-outlined text-4xl">{industry.icon}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px bg-accent w-12 hidden md:block"></div>
            <span className="label text-text-heading uppercase tracking-widest text-sm font-label">Market Focus</span>
            <div className="h-px bg-accent w-12 hidden md:block"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold text-accent uppercase tracking-tight leading-tight drop-shadow-[0_2px_4px_rgba(26,46,31,0.05)]"
          >
            {industry.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-24 pb-32 bg-deep relative z-20 -mt-10 rounded-t-[3rem] shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center mb-16 border-b border-accent/20 pb-8">
            <NavLink to="/product-and-market" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 font-label uppercase text-[11px] tracking-widest">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Markets
            </NavLink>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Intro text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-heading mb-8 leading-tight">
                Strengthening Supply Chains for {industry.title}
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                As a global player in industrial sourcing, we understand the critical nuances and rigorous compliance standards required within the <strong>{industry.title}</strong> sector. Our end-to-end framework ensures resilient supply lines, mitigating risk and optimizing execution for all strategic raw inputs.
              </p>

              <div className="bg-surface border-l-4 border-accent p-8 shadow-sm">
                <span className="material-symbols-outlined text-accent text-3xl mb-4">task_alt</span>
                <h3 className="text-xl font-serif font-semibold text-forest mb-4">Quality & Compliance</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Every product shipped undergoes stringent quality control checks to meet international standards. From origin auditing to pre-shipment inspections, our trade desk enforces strict compliance mandates.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Sub-categories List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="bg-white p-8 md:p-12 shadow-xl border border-accent/10 rounded">
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-accent text-2xl">category</span>
                  <h3 className="text-2xl font-serif font-bold text-text-heading uppercase tracking-tight">Key Inclusions</h3>
                </div>

                <ul className="space-y-6">
                  {industry.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 hover:bg-mid transition-colors rounded border-b border-accent/5 last:border-0 relative group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                      <span className="material-symbols-outlined text-accent mt-0.5 text-xl flex-shrink-0">check_circle</span>
                      <span className="text-text-body font-sans text-lg md:text-xl font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest border-t-4 border-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight"
          >
            Ready to secure reliable inputs for {industry.title}?
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <NavLink to="/contact" className="btn btn-primary !bg-accent !text-forest hover:!bg-accent/90 px-10 py-4 text-lg">
              REQUEST A QUOTE
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline-forest !border-white/40 !text-white hover:!bg-white hover:!text-forest px-10 py-4 text-lg">
              CONTACT TRADE DESK
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
