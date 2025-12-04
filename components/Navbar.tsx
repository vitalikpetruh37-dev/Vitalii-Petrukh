import React, { useState } from 'react';
import { Menu, X, Phone, Fan, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    if (language === 'pl') setLanguage('en');
    else if (language === 'en') setLanguage('de');
    else if (language === 'de') setLanguage('ua');
    else setLanguage('pl');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const links = [
    { name: t.nav.offer, id: 'services' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.portfolio, id: 'portfolio' },
    { name: t.nav.contact, id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md h-24 lg:h-32 flex items-center" style={{ zIndex: 9999 }}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          
          {/* Logo Section */}
          <a 
            href="#"
            onClick={(e) => scrollToSection(e, 'about')}
            className="flex-shrink-0 flex items-center gap-4 group z-[10001] cursor-pointer"
            title="Strona Główna"
          >
            {/* 
               HOW TO CHANGE LOGO:
               Upload a file named 'logo.png' to your hosting root folder (public_html).
               The code below tries to load it. If not found, it shows the Fan icon.
            */}
            <img 
              src="logo.png" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
              alt="Logo Vit-Went" 
              className="h-16 w-16 lg:h-24 lg:w-24 object-contain rounded-full border border-slate-100 bg-white p-1"
            />
            
            {/* Fallback Icon (Hidden if logo.png exists) */}
            <div className="hidden bg-blue-600 p-3 lg:p-4 rounded-full text-white shadow-lg shadow-blue-500/20">
              <Fan className="w-10 h-10 lg:w-14 lg:h-14" />
            </div>
            
            <div className="flex flex-col justify-center text-left">
               <span className="font-extrabold text-3xl lg:text-5xl text-slate-900 tracking-tight leading-none font-sans">Vit-Went</span>
               <span className="text-[11px] lg:text-sm text-slate-500 font-bold uppercase tracking-widest mt-1 ml-1">{t.nav.subtitle}</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-lg font-bold text-slate-600 hover:text-blue-600 transition-colors duration-200 py-2 tracking-wide cursor-pointer select-none"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-slate-100 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all font-bold bg-slate-50 cursor-pointer select-none"
            >
              <Globe size={20} />
              <span>{language.toUpperCase()}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 transform hover:scale-105 active:scale-95 text-lg cursor-pointer select-none"
            >
              <Phone size={22} />
              {t.nav.quote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3 z-[10001]">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 active:bg-slate-100 bg-white font-bold cursor-pointer"
            >
               <Globe size={18} />
               <span className="text-xs font-medium text-slate-400">Lang</span>
               <span>{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 focus:outline-none p-2.5 active:bg-slate-100 rounded-lg bg-white border border-slate-200 cursor-pointer"
              aria-label="Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
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
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-2xl absolute w-full top-24 left-0"
            style={{ zIndex: 9998 }}
          >
            <div className="px-4 py-6 space-y-4 bg-slate-50/50">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="block px-6 py-4 rounded-xl text-xl font-bold text-slate-800 hover:text-blue-600 hover:bg-white transition-all border border-transparent hover:border-slate-200 shadow-sm cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="block w-full text-center px-6 py-5 mt-6 rounded-xl text-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-lg active:scale-[0.98] transition-transform cursor-pointer"
                >
                  {t.nav.quote}
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};