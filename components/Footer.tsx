
import React from 'react';
import { culinaryData } from '../data/dummy';

const Footer: React.FC = () => {
  const { footer } = culinaryData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 bg-warm-50 border-t border-warm-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif text-warm-900 mb-4">{footer.brand}</h2>
            <p className="text-warm-500 max-w-xs">{footer.tagline}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-warm-300 mb-6">Sitemap</h4>
            <ul className="space-y-4">
              {footer.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-warm-900 hover:text-warm-300 transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-warm-300 mb-6">Social</h4>
            <ul className="space-y-4">
              {footer.social.map((link) => (
                <li key={link}>
                  <a href="#" className="text-warm-900 hover:text-warm-300 transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-warm-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-warm-400 uppercase tracking-widest">
          <p>© {currentYear} {footer.brand}. All rights reserved.</p>
          <p>Handcrafted for Culinary Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
