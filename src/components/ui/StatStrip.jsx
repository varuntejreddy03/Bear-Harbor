import React from 'react';
import { motion } from 'framer-motion';

const StatStrip = ({ stats }) => {
  return (
    <div className="bg-white shadow-2xl rounded-sm border-t-8 border-accent p-10 lg:p-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col gap-2 px-6 first:pl-0"
          >
            <span className="text-5xl font-serif font-bold text-primary">{stat.value}</span>
            <span className="text-xs text-secondary font-bold uppercase tracking-widest mt-2">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatStrip;
