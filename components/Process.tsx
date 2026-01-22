
import React from 'react';
import { motion } from 'framer-motion';
import { culinaryData } from '../data/dummy';

const Process: React.FC = () => {
  const steps = culinaryData.process;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-warm-100">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-warm-900 mb-6">How We Collaborate</h2>
          <p className="text-warm-500 max-w-md">Our methodology ensures every project is handled with precision and artistic integrity.</p>
        </div>

        <div className="space-y-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 md:gap-16 items-start"
            >
              <span className="text-6xl md:text-8xl font-serif text-warm-200 leading-none select-none">
                {step.number}
              </span>
              <div className="pt-4">
                <h3 className="text-2xl font-serif text-warm-900 mb-4">{step.title}</h3>
                <p className="text-warm-500 leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
