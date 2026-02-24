import React from 'react';
import { motion } from 'framer-motion';

const ProcessTimeline = ({ steps }) => {
  return (
    <div className="relative py-12">
      {/* Central Line */}
      <div className="absolute top-0 left-0 md:left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-32 md:space-y-48">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-24 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
          >
            {/* Content Segment */}
            <div className={`flex-1 w-full ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="space-y-6">
                <span className="text-8xl lg:text-9xl font-serif font-black text-primary opacity-[0.03] leading-none block select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="relative -mt-16 lg:-mt-20">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4 uppercase tracking-tight group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-base font-light leading-relaxed max-w-sm ml-auto mr-0 md:ml-0 md:mr-0 inline-block">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Icon/Node */}
            <div className="relative z-10 size-16 lg:size-20 rounded-none bg-primary text-white flex items-center justify-center shadow-2xl border border-accent/20 shrink-0 group hover:bg-accent transition-colors duration-500">
              <span className="material-symbols-outlined text-2xl lg:text-3xl font-extralight group-hover:scale-125 transition-transform duration-500">{step.icon}</span>
              {/* Pulse Effect */}
              <div className="absolute inset-0 border border-accent opacity-0 group-hover:animate-ping-slow"></div>
            </div>

            {/* Spacer for layout balance */}
            <div className="flex-1 hidden md:block"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
