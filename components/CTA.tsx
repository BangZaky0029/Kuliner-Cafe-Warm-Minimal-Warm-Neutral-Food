
import React from 'react';
import { motion } from 'framer-motion';
import { culinaryData } from '../data/dummy';

const CTA: React.FC = () => {
  const { cta } = culinaryData;

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-warm-100">
      <div className="container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-warm-900 mb-8 leading-tight">
            {cta.title}
          </h2>
          <p className="text-warm-500 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            {cta.description}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-warm-900 text-white rounded-none font-medium hover:bg-warm-300 transition-all duration-300 shadow-xl"
          >
            {cta.buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
