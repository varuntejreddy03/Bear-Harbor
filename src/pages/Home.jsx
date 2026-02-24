import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { siteContent } from '../data/siteContent';

const Home = () => {
  const { hero, whoWeAre, whatWeSource, approach } = siteContent.home;

  const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '$2B+', label: 'Annual Volume' },
    { value: '500+', label: 'Verified Suppliers' },
    { value: '24/7', label: 'Logistics Support' },
  ];

  return (
    <div className="overflow-hidden bg-background-light">
      {/* Hero Section */}
      <section className="relative w-full bg-primary overflow-visible">
        <div
          className="absolute inset-0 z-0 opacity-20 bg-no-repeat bg-cover bg-center mix-blend-overlay map-mask"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=75&w=1200')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/80 to-primary z-0"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-48 lg:px-10 lg:pt-48 lg:pb-64">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">Global Trade Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white text-4xl font-serif font-black leading-[1.1] tracking-tight md:text-7xl mb-8 uppercase"
            >
              Industrial Trade,<br />
              <span className="relative inline-block text-accent italic font-light lowercase">
                executed with precision.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" fill="none" preserveAspectRatio="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 6.99997C2.00025 6.99997 64.9048 1.99997 197.5 1.99999" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl border-l-[3px] border-accent/20 pl-8"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <NavLink to="/contact" className="btn btn-accent shadow-2xl shadow-accent/20 no-underline px-10">
                Request a Quote
              </NavLink>
              <NavLink to="/services" className="btn btn-outline no-underline px-10">
                Our Services
              </NavLink>
            </motion.div>
          </div>
        </div>

        {/* Stats Section Overlay */}
        <div className="absolute -bottom-24 lg:-bottom-20 left-0 w-full z-20 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="bg-white shadow-2xl rounded-sm border-t-4 border-accent p-8 lg:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex flex-col gap-2 px-4 text-center md:text-left">
                    <span className="text-4xl md:text-5xl font-serif font-bold text-primary italic leading-none">{stat.value}</span>
                    <span className="text-[10px] text-secondary font-black uppercase tracking-[0.2em] mt-2 opacity-60">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-40 lg:h-48 w-full bg-background-light"></div>

      {/* Who We Are Section */}
      <section className="section-padding bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-primary/5 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 border border-primary/10"></div>
              <motion.img
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                loading="lazy"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=75&w=800"
                alt="Corporate excellence"
                className="rounded-sm shadow-2xl relative z-10 w-full object-cover h-[550px] grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
                >
                  Structured Logistics & Sourcing
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-primary text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8 uppercase tracking-tighter"
                >
                  Who We Are
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-secondary text-lg leading-relaxed font-light mb-8"
                >
                  {whoWeAre.description}
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4 items-start group">
                  <div className="bg-white p-3 rounded-sm shadow-sm border border-border text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                  </div>
                  <div>
                    <h3 className="text-primary text-sm font-bold mb-1 uppercase tracking-tight">Vetted Network</h3>
                    <p className="text-secondary text-[10px] leading-relaxed uppercase tracking-wider font-medium opacity-60">Global ISO standards</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="bg-white p-3 rounded-sm shadow-sm border border-border text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">monitoring</span>
                  </div>
                  <div>
                    <h3 className="text-primary text-sm font-bold mb-1 uppercase tracking-tight">Quality Focus</h3>
                    <p className="text-secondary text-[10px] leading-relaxed uppercase tracking-wider font-medium opacity-60">Third-party inspection</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <NavLink to="/about" className="btn btn-primary no-underline">
                  Our Mission <span className="material-symbols-outlined ml-2 text-sm italic">arrow_forward</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="section-padding bg-white relative overflow-hidden border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Strategic Portfolio</span>
            <h2 className="text-primary text-4xl lg:text-6xl font-serif font-bold mb-6 uppercase tracking-tight">What We Source</h2>
            <p className="text-secondary text-lg font-light">End-to-end supply solutions across major industrial and agro sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeSource.map((category, idx) => (
              <NavLink
                key={category.title}
                to="/capabilities"
                className="group flex flex-col bg-background-light border border-border rounded-sm overflow-hidden hover:border-accent/40 shadow-sm transition-all duration-500 hover:-translate-y-2 no-underline"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-4 right-4 size-10 bg-white/90 backdrop-blur-md rounded-sm flex items-center justify-center text-primary border border-white/20">
                    <span className="material-symbols-outlined text-xl">
                      {['landscape', 'science', 'agriculture', 'inventory_2'][idx]}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-tighter group-hover:text-accent transition-colors">{category.title}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {category.items.slice(0, 3).map(item => (
                      <li key={item} className="flex items-center gap-3 text-[10px] text-secondary font-bold uppercase tracking-widest opacity-70">
                        <span className="size-1 rounded-full bg-accent"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">View Grades</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform text-accent">arrow_forward</span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-background-light relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Execution Strategy</span>
              <h2 className="text-primary text-4xl lg:text-5xl font-serif font-bold mb-8 uppercase tracking-tight">Our Structured<br />Approach</h2>
              <p className="text-secondary text-lg font-light leading-relaxed mb-10 border-l border-border pl-8">
                We simplify complex global trade by sticking to a rigorous, six-stage workflow that guarantees transparency, compliance, and reliability.
              </p>
              <div className="bg-primary p-8 rounded-sm text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-10 rounded-sm bg-accent flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <h4 className="font-bold uppercase tracking-tighter text-xl italic">Ready for RFQ?</h4>
                </div>
                <p className="text-xs text-slate-400 mb-6 font-light uppercase tracking-wider leading-loose">Submit your technical requirements today for a structured quote.</p>
                <NavLink to="/contact" className="btn btn-accent w-full !py-3 text-[10px] no-underline">
                  Submit Requirement
                </NavLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                {approach.map((step, idx) => (
                  <div key={step.title} className="flex flex-col gap-4 group">
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-serif font-black text-primary/5 group-hover:text-accent/20 transition-colors italic">{step.step}</span>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    <h3 className="text-base font-bold text-primary uppercase tracking-tight">{step.title}</h3>
                    <p className="text-sm text-secondary font-light leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-primary text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-l-4 border-accent pl-8 lg:pl-16">
            <div className="md:w-2/3 text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-black mb-6 italic tracking-tight uppercase">Looking for a reliable<br />sourcing partner?</h2>
              <p className="text-gray-400 text-lg font-light max-w-xl">Join the network of industry leaders who trust Bear Harbor for their critical raw material needs and scalable supply solutions.</p>
            </div>
            <div className="md:w-1/3 flex flex-col sm:flex-row md:flex-col gap-4 justify-start md:items-end">
              <NavLink to="/contact" className="btn btn-accent !px-12 !py-5 flex items-center justify-center gap-3 group no-underline shadow-2xl shadow-accent/20">
                Submit RFQ
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </NavLink>
              <NavLink to="/contact" className="btn btn-outline !px-12 !py-5 text-center no-underline">
                Contact Our Team
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

