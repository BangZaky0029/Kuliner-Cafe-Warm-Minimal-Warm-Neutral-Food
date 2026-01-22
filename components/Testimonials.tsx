
import React from 'react';
import { motion } from 'framer-motion';
import { culinaryData } from '../data/dummy';

const Testimonials: React.FC = () => {
  const testimonials = culinaryData.testimonials;

  return (
    <section className="py-24 bg-warm-900 text-warm-50 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-warm-300 text-xs font-semibold tracking-widest uppercase mb-4 block">Kind Words</span>
            <h2 className="text-3xl md:text-4xl font-serif">Partnership Voices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-xl italic font-serif leading-relaxed mb-8 text-warm-200">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-12 h-12 rounded-full grayscale border border-warm-500"
                  />
                  <div>
                    <h4 className="font-medium text-warm-50">{t.name}</h4>
                    <p className="text-warm-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
