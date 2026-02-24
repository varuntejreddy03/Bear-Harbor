import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, subtitle, description, icon, image, footer, color = 'primary' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      {image && (
        <div className="relative h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow">
        {icon && (
          <div className={`size-12 rounded-lg bg-${color}/5 text-${color} flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        )}

        {subtitle && <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2">{subtitle}</span>}
        <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-secondary text-sm leading-relaxed mb-6">{description}</p>

        {footer && (
          <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
            {footer}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
