
import React from 'react';
import { motion } from 'framer-motion';
import { culinaryData } from '../data/dummy';

const About: React.FC = () => {
  const { about } = culinaryData;

  return (
    <section className="py-24 bg-warm-100 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-warm-200 text-warm-500 text-xs font-semibold tracking-wider uppercase mb-6">
              {about.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-warm-900 mb-8 leading-tight">
              {about.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-between"
          >
            <p className="text-warm-500 text-xl leading-relaxed mb-12">
              {about.content}
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-warm-200 pt-8">
              {about.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-serif text-warm-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-warm-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
