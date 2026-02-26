import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';

const ShippingLogistics = () => {
  const { headline, steps } = siteContent.shipping;
  const { ctaBand } = siteContent.home;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-deep pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-accent/10">
        <div className="absolute inset-0 z-0 bg-[#F5F0E8] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" alt="Shipping Background" className="w-full h-full object-cover opacity-[0.45] mix-blend-normal" />
          <div style={{ background: 'linear-gradient(135deg, rgba(245,240,232,0.55) 0%, rgba(245,240,232,0.25) 60%, rgba(245,240,232,0.15) 100%)' }} className="absolute inset-0" />
        </div>
        <div className="noise-overlay relative z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="label mb-10">
            Operations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-text-heading text-[clamp(2.5rem,6vw,5.5rem)] font-serif font-bold leading-[1.05] tracking-tight uppercase"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 section-body-text border-l border-accent/40 pl-8"
          >
            Our end-to-end logistics solutions ensure your cargo is packaged securely, shipped efficiently, and delivered safely to your final destination with full compliance.
          </motion.p>
        </div>
      </section>

      {/* Steps Cards Section */}
      <section className="px-6 lg:px-10 py-12 bg-light mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 md:gap-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-4 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded shadow-xl group-hover:shadow-accent/10 transition-shadow">
                  <div className="absolute inset-0 bg-deep/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-deep/90 text-white p-4 square border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-serif text-2xl font-bold italic tracking-tighter text-accent">0{index + 1}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-heading mb-6 tracking-tight">
                  {step.title}
                </h2>
                <ul className="space-y-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-white shadow-sm border border-light-edge group-hover:border-accent/20 transition-colors">
                      <span className="material-symbols-outlined text-accent mt-0.5 shrink-0 transition-transform group-hover:scale-110">
                        {index === 0 ? 'inventory_2' : index === 1 ? 'sailing' : 'local_shipping'}
                      </span>
                      <p className="text-text-body font-sans text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-10 py-24 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-deep text-white p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl mix-blend-screen transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl mix-blend-screen transform -translate-x-1/2 translate-y-1/2"></div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 relative z-10">
            {ctaBand.headline}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            {ctaBand.buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.path}
                className={`btn ${index === 0 ? 'btn-primary' : 'btn-outline-forest'} w-full sm:w-auto text-lg px-10 py-4`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ShippingLogistics;
