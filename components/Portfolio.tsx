
import React from 'react';
import { motion } from 'framer-motion';
import { culinaryData } from '../data/dummy';

const Portfolio: React.FC = () => {
  const portfolio = culinaryData.portfolio;

  return (
    <section className="py-24 bg-warm-50 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif text-warm-900 mb-4">Selected Works</h2>
            <p className="text-warm-500 uppercase tracking-widest text-xs">Curated projects from 2020 — 2024</p>
          </div>
          <button className="text-warm-900 font-medium hover:text-warm-300 transition-colors border-b border-warm-900 pb-1 text-sm">
            Explore All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolio.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-warm-900/10 group-hover:bg-warm-900/0 transition-colors duration-500"></div>
              </div>
              <p className="text-warm-300 text-xs font-semibold uppercase tracking-widest mb-2">
                {project.category}
              </p>
              <h3 className="text-2xl font-serif text-warm-900 group-hover:text-warm-500 transition-colors">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
