import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    { id: 1, title: 'Modern Villa', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Office Complex', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Industrial HVAC', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section id="portfolio" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">{t.portfolio.title}</h2>
            <p className="text-slate-400 text-lg">{t.portfolio.subtitle}</p>
          </div>
          <a href="#contact" className="hidden md:block text-cyan-400 font-semibold hover:text-cyan-300 transition-colors mt-4 md:mt-0 uppercase tracking-wide text-sm">
            {t.portfolio.more} →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-900">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity z-20 flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{p.title}</h3>
                <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};