import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Fan, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.nav.offer, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
    { code: 'ua', label: 'UA' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
            {/* 
              --- LOGO REPLACEMENT INSTRUCTIONS ---
              To use your own logo:
              1. Add your file 'logo.png' to the root folder.
              2. Uncomment the <img ... /> line below.
              3. Comment out or remove the SVG <div> block below it.
            */}
            
            {/* <img src="/logo.png" alt="Vit-Went Logo" className="h-10 w-auto" /> */}
            
            {/* Default SVG Logo - Comment this out if using image above */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-white/10 group-hover:border-cyan-500/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 rounded-lg blur-sm"></div>
               <span className="font-bold text-xl text-white z-10">VW</span>
            </div>
            <span className="font-bold text-2xl text-white tracking-tight group-hover:text-cyan-400 transition-colors">Vit-Went</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/50 rounded-full px-1 p-1 border border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${
                    language === lang.code 
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center gap-2 text-sm"
            >
              <Phone size={16} />
              {t.nav.quote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
               <div className="flex gap-2 px-4 py-2">
                {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold border border-white/10 ${
                        language === lang.code 
                          ? 'bg-cyan-600 text-white border-transparent' 
                          : 'bg-transparent text-slate-400'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};