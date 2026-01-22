
import React from 'react';
import { motion } from 'framer-motion';
import { culinaryData } from '../data/dummy';

const Hero: React.FC = () => {
  const { hero } = culinaryData;

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10"
        >
          <span className="text-warm-300 font-medium tracking-widest uppercase text-sm mb-4 block">
            {hero.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-warm-900 leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-warm-500 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            {hero.description}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-warm-900 text-white rounded-none font-medium hover:bg-warm-500 transition-colors duration-300"
          >
            {hero.cta}
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          <div className="absolute inset-0 border border-warm-200 translate-x-4 translate-y-4 -z-10"></div>
          <img 
            src={hero.image} 
            alt="Culinary excellence"
            className="w-full h-full object-cover filter brightness-95 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
