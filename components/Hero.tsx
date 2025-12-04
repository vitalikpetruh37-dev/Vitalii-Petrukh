import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wind, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  return (
    <section id="about" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 scroll-mt-24 z-10">
      {/* Background - Simplified and pushed back */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-200/40 blur-[80px] lg:blur-[100px] rounded-full opacity-60" />
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-cyan-200/40 blur-[80px] lg:blur-[100px] rounded-full opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t.hero.badge}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {t.hero.titleStart} <span className="text-slate-900">{t.hero.titleColor}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-20 pointer-events-auto">
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 cursor-pointer select-none z-30"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer select-none z-30"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldCheck className="text-green-600" size={20} />
                {t.hero.feature1}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Zap className="text-yellow-500 fill-yellow-500" size={20} />
                {t.hero.feature2}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Wind className="text-blue-600" size={20} />
                {t.hero.feature3}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 z-10"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 bg-white h-[400px] lg:h-[500px] group">
                {/* 
                  HOW TO CHANGE HERO IMAGE:
                  Upload a file named 'hero.jpg' to your hosting root folder.
                */}
                <img 
                  src="hero.jpg"
                  onError={(e) => {
                    // Fallback to default if hero.jpg doesn't exist
                    e.currentTarget.src = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop";
                  }}
                  alt="Montaż instalacji wentylacyjnych" 
                  className="w-full h-full object-cover"
                />
             </div>
             
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden sm:block z-20">
                <div className="flex items-center gap-4">
                    <div className="bg-green-50 p-3 rounded-full text-green-600">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">{t.hero.cardTitle}</p>
                        <p className="text-slate-900 font-bold text-xl">{t.hero.cardSubtitle}</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};