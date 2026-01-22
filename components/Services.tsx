
import React from 'react';
import { motion } from 'framer-motion';
import { culinaryData } from '../data/dummy';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services: React.FC = () => {
  const services = culinaryData.services;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif text-warm-900">Expertise & Services</h2>
          <div className="w-16 h-px bg-warm-300 mx-auto mt-4"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={item}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-warm-100 hover:border-warm-300 transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-warm-900 mb-4">{service.title}</h3>
              <p className="text-warm-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
