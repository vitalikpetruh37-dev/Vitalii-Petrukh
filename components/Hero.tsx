import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wind, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-semibold mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {t.hero.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:scale-105">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all backdrop-blur-md">
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <ShieldCheck className="text-cyan-400" size={20} />
                {t.hero.features.warranty}
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <Zap className="text-cyan-400" size={20} />
                {t.hero.features.energy}
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <Wind className="text-cyan-400" size={20} />
                {t.hero.features.quiet}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 group">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                    src="https://images.unsplash.com/photo-1618612115069-7f49c8275619?q=80&w=2000&auto=format&fit=crop" 
                    alt="Modern HVAC" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             
             {/* Decorative Glass Card */}
             <div className="absolute -bottom-10 -left-10 z-20 bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                    <div className="bg-cyan-500/20 p-3 rounded-xl text-cyan-400">
                        <Wind size={32} />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Status Systemu</p>
                        <p className="text-xl font-bold text-white">Optimal: 100%</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};