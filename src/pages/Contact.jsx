import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';

const Contact = () => {
  const { companyInfo } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-background-light">
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-[400px] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=75&w=1200')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px]">Direct Engagement</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl lg:text-7xl font-serif font-black leading-tight uppercase tracking-tighter"
            >
              Connect with <br />
              <span className="text-accent italic font-light lowercase">our global desk.</span>
            </motion.h1>
          </div>
        </section>

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-12 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-24">
            {/* Left Side: RFQ Form */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="mb-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-accent font-bold tracking-[0.2em] text-xs uppercase mb-2 block"
                >
                  Global Sourcing Inquiry
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight uppercase"
                >
                  Request for <br className="hidden md:block" />Quote (RFQ)
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-slate-600 max-w-xl leading-relaxed font-light"
                >
                  Please provide detailed specifications for your requirement. Our trade facilitation team will review and provide a structured quote within 24-48 hours.
                </motion.p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-sm p-12 border border-border shadow-sm text-center"
                >
                  <span className="material-symbols-outlined text-6xl text-accent mb-6">verified</span>
                  <h3 className="text-2xl font-bold text-primary uppercase tracking-tight mb-4">Request Received</h3>
                  <p className="text-secondary font-light mb-8">Your RFQ has been logged. Our procurement officers will contact you shortly. Reference ID: BH-{Math.floor(Math.random() * 90000) + 10000}</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary">Submit New Enquiry</button>
                </motion.div>
              ) : (
                <div className="bg-white rounded-sm p-8 md:p-10 border border-border shadow-sm">
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div className="space-y-6">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-accent border-b border-border pb-2">Client Identification</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Company Name</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="Official Company Name" type="text" />
                        </label>
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Contact Person</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="Full Name" type="text" />
                        </label>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Business Email</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="name@company.com" type="email" />
                        </label>
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Phone Number</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="+1 (XXX) XXX-XXXX" type="tel" />
                        </label>
                      </div>
                    </div>

                    {/* Product Specs */}
                    <div className="space-y-6 pt-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-accent border-b border-border pb-2">Product Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Product Required</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="e.g. Soda Ash, Bentonite" type="text" />
                        </label>
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Specification / Grade</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="e.g. Technical Grade, 99% Purity" type="text" />
                        </label>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Quantity Required (MT)</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="e.g. 500 MT" type="text" />
                        </label>
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Destination Port</span>
                          <input required className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="e.g. Port of Houston" type="text" />
                        </label>
                        <label className="flex flex-col gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Incoterrms</span>
                          <select className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none appearance-none">
                            <option>CIF (Cost, Insurance, Freight)</option>
                            <option>FOB (Free on Board)</option>
                            <option>CFR (Cost and Freight)</option>
                            <option>DDP (Delivered Duty Paid)</option>
                          </select>
                        </label>
                      </div>
                      <label className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Target Delivery Timeline</span>
                        <input className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 h-12 px-4 focus:border-primary focus:ring-primary/5 transition-all outline-none" placeholder="e.g. Within 45 days" type="text" />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Additional Notes / Custom Requirements</span>
                        <textarea className="w-full rounded-sm border-slate-200 bg-slate-50 text-slate-900 min-h-[100px] p-4 focus:border-primary focus:ring-primary/5 transition-all resize-y outline-none" placeholder="Packaging requirements, private labeling, etc."></textarea>
                      </label>
                    </div>

                    <div className="pt-4">
                      <button className="btn btn-accent w-full md:w-auto min-w-[240px] flex items-center justify-center gap-2 group" type="submit">
                        Submit RFQ
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Right Side: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-32 text-left">
              <div className="bg-white p-8 rounded-sm border border-border shadow-sm">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Corporate Contact</h3>
                    <p className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mt-1">United States Headquarters</p>
                  </div>
                  <div className="size-12 rounded-sm bg-slate-50 flex items-center justify-center text-primary border border-border">
                    <span className="material-symbols-outlined text-3xl">apartment</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent mt-1">location_on</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Office Location</p>
                      <p className="text-slate-800 text-sm font-medium">Headquartered in the United States</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent mt-1">mail</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Email Enquiry</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-slate-800 text-sm font-bold border-b border-accent hover:text-accent transition-colors no-underline">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent mt-1">public</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Regional Desks</p>
                      <p className="text-slate-800 text-sm font-medium uppercase tracking-tight">INDIA | USA | GLOBAL ORIGINS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-10 rounded-sm text-white space-y-6 relative overflow-hidden group">
                <div className="noise-overlay opacity-10"></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.1 }}
                  className="absolute bottom-0 right-0 p-4"
                >
                  <span className="material-symbols-outlined text-[120px]">handshake</span>
                </motion.div>
                <div className="relative z-10">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4">Strategic Sourcing Partner</h4>
                  <p className="text-sm font-light leading-relaxed text-gray-300">
                    We specialize in long-term supply partnerships and repeat contract programs for industrial clients requiring stability, transparency, and compliance in their supply chain.
                  </p>
                  <div className="h-px w-16 bg-accent/40 my-8"></div>
                  <div className="flex items-center gap-4">
                    <div className="size-2 rounded-full bg-accent animate-pulse"></div>
                    <p className="text-[10px] text-accent uppercase tracking-widest font-bold">Desk Hours: 24/7 Global Coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

